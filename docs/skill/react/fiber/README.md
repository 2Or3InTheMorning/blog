# React Fiber
> Fiber是React16中新的协调引擎。
>
> 它的主要目的是使Vitrual DOM可以进行增量式的渲染（来自React官方文档）。
>
> update: 2020-1-3

[[toc]]

## 浏览器里的“单处理器调度”
[复习单处理器调度策略](./../../computeracy/scheduling-strategy/)

我们可以**把浏览器中JavaScript执行环境当作是一台单处理器**。

1、JS引擎是单线程运行的；

2、JS引擎、渲染引擎在同一个渲染线程；

3、浏览器需要负责页面的：**JS解析和执行、绘制、事件处理、静态资源加载和处理等等**；
> 这些任务可以类比成“一个个进程”

4、如果某个任务长期霸占CPU，浏览器会出现卡死状态。

---

对于前端框架，“解决卡死”有三个方向:
 - 优化每个任务，让它有多快就多快，挤压CPU运算量
    > Vue使用的是这种。因为响应式机制可以让Vue更精确地进行节点更新。

 - 快速响应用户，不阻塞用户的交互
    > React使用的是这种，所以引入了Fiber架构。

 - 尝试Worker多线程
    > 保证状态和视图的一致性很麻烦。

## 以前的Reconciliation不可中断！（引入Fiber的原因）
**通过比较Virtual DOM树的变化，找出需要变动的节点，然后同步更新它们，这个过程称为Reconciliation（协调）**。
> Reconciliation是CPU密集型操作，相当于“长进程”。和进程调度的思想一样，我们应该让高优先级的进程（或者短进程优）先运行，不能让长进程长期霸占资源。

### 引入Fiber前
因为Reconciliation不可中断，所以React会霸占着浏览器资源，很可能会导致用户交互得不到响应，或者掉帧（用户感知到卡顿）。

### 引入Fiber后
React通过Fiber架构，让自己的Reconciliation过程变成可中断，“适时”地让出CPU执行权，他的好处是：
 - 让浏览器及时响应交互
 - 分批延时对DOM进行操作
 - 给浏览器一点喘息的机会，他会对代码进行编译优化（JIT）及进行热代码优化，或者对reflow进行修正

所以说，**Fiber是React 16中新的协调引擎**。

那它是如何使Reconciliation变得可中断的呢？

## 什么是Fiber
React Fiber的思想：**React渲染的过程可以被中断。中断后React会主动将控制权交回浏览器，让位给高优先级的任务，等到浏览器空闲后再恢复渲染。**

----

让出控制权的2个关键点：**1、主动归还控制权；2、什么时候会有高优先级任务（什么时候归还）？**

#### 1、😆主动归还控制权
因为浏览器没有抢占机制，所以采用的是**合作式调度（Cooperative Scheduling）机制**。
 > 与“合作式调度”相反的是“抢占式调度”（Preemptive Scheduling）

![alt](./img/fiber-1.png)

这种机制大致是：

**React向浏览器申请一个“有期限的执行权”；（申请时间片）**

➡️ **浏览器会在每帧内执行完“最后的绘制Paint任务”后，会执行传过来的回调告诉React能借多长时间；**

➡️ **借完后React要按照约定“主动”归还给浏览器**。
 > 当然超时不还，浏览器也没办法🤷‍♂️。全凭自律，互相信任。


#### 2、⏰什么时候归还？
因为在浏览器中**没办法判断当前是否有更高优先级的任务在后面等待**，所以采用的是**通过超时检查的机制来归还控制权**。

这种机制大致是，**给React一个时间范围，然后React在每执行完一个小任务后检查是否超时。若超时就停止执行，将控制权归还给浏览器。**

⏰⏰⏰
问题来了，**那这个时间范围怎么确定呢？** 
⏰⏰⏰

已知浏览器在一帧（即一个时间片）内可能会执行下列任务（执行顺序基本固定）：
 - 处理用户输入事件
 - JS执行
 - requestAnimation调用
 - 布局Layout
 - 绘制Paint
 
 > 理想情况下，每个时间片应该划分为16ms。因为人类能感知到最低限度的频率是每秒60帧（1000ms / 60 = 16 ms），视图“变得”流畅地运行。

当每个时间片内，如果浏览器执行完上面的任务后，还有剩余时间，就会调用`requestIdleCallback`中传入的回调。

![alt](./img/fiber-2.png)

`requestIdleCallback`API：
```js
window.requestIdleCallback(
    // 浏览器在空闲时，会执行这个回调，同时会给回调传入一个dealine对象
    // 在dealine对象中包含着浏览器目前有多少时间供我们执行
    callback: (dealine: IdleDeadline) => void,
    // 为了避免浏览器因繁忙且无剩余时间导致的饿死，可传入一个超时时间来强制让浏览器执行回调。
    option?: { timeout: number }
)
```

`IdleDeadline`接口：
```js
interface IdleDealine {
    didTimeout: boolean // 表示任务执行是否超过约定时间
    timeRemaining(): DOMHighResTimeStamp // 任务可供执行的剩余时间
}
```

目前`requestIdCallback`只有Chrome支持。React自己实现了一个（利用`MessageChannel`将回调延迟到“绘制Paint”之后执行）[查看源码](https://github.com/facebook/react/blob/master/packages/scheduler/src/forks/SchedulerHostConfig.default.js)

另外，对于`option`这个参数所定义的**超时时间并不是死的，低优先级可以慢慢等待，高优先级应该先被执行**。
```
目前React预定义了5个优先级：Immediate(-1)、UserBlocking(250ms)、Normal(5s)、Low(10s)、Idle(没有超时时间)
```











## 参考链接

- [Virtual DOM 及内核](https://zh-hans.reactjs.org/docs/faq-internals.html#what-is-react-fiber)

- [这可能是最通俗的 React Fiber(时间分片) 打开方式](https://juejin.im/post/5dadc6045188255a270a0f85#heading-2)