# JS设计模式
> JS设计模式 以及 原则

[[toc]]

## JS设计原则（SOLID）
以下原则对于 “软件中的对象（类、模块、函数等等）” 都适用。

 - **S（single）单一职责**：规定每个类都应该有一个 单一 的功能，并且这个功能应该是由这个类 **完全封装** 的。
    - 即：所有这个类的服务都应该严密地和该功能平行（功能平行，意味着没有依赖）

 - **O（open-close）开闭原则**：对于 `扩展` 是 **开放** 的，对于 `修改` 是 **封闭** 的
    - 即：增加需求时，应该是 “扩展新代码” ，而非 “修改已有代码”

 - **L（liskov）里氏替换**：子类 可以替代 父类。
    - 即：父类能出现的地方，子类就能出现。

 - **I（interface）接口隔离**：类对于另一个类的依赖应该建立在 **最小的接口** 上。
    - 即：客户端不应该依赖那些它 **并不需要的接口**

 - **D（dependence）依赖倒置**：“高层次模块” 应该依赖于 **抽象接口** ，而不是依赖于 “低层次模块” 的具体实现`。

:::tip
“依赖倒置” 图示：

<img src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7690731739/2a47/473d/d4b8/7b4cecaa78efb2b48f658e1559851df5.png" width="400px" />

 - 图 1 中，高层次模块A 依赖于 低层次对象B 的具体实现；
 - 图 2 中，高层次模块A 对于 低层次对象B 的需求抽象为 抽象接口A，低层次B实现了接口A，这就是 **依赖倒置** 。
:::

## 工厂模式
**内部包装好一个对象，然后返回。**（相当于工厂、车间）
```js
function addPerson(name, age) {
    var obj = new Object();
    obj.name = name;
    obj.age = agge;
    obj.sayName = function() {
        console.log(this.name)
    }
}

const person1 = addPerson('heshiyu', 25);
const person2 = addPerson('zhouxingchi', 26)
```
> 应用场景：Reat.createElement、Vue.component异步组件等

## 单例模式
**保证一个类仅有一个实例。**
```js
class Single {
    login() {}
}

Single.getInstance = (function() {
    let instance;
    return function() {
        if (!instance)  {
            instance = new Single()
        }
        return instance;
    }
})() // 利用闭包，将变量instance一直存在内存中（直到Single.getInstance为null）

const obj1 = Single.getInstance();
const obj2 = Single.getInstance();
console.log(obj1 === obj2); // true
```
> 应用场景：Vuex中的Store、Redux中的Store、jQuery中的$

## 观察者模式
**每个 被监听者 直接维护着它的 监听者列表。**
 - ① 在`Subject对象`里维护一个“观察者列表”
 - ② 实例化`Observer对象`时，指定要监听的`Subject对象`
 - ② 当`Subject对象`的状态发生改变时，会通知每一个依赖它的`Observers对象`

```js
class Subject {
    constructor() {
        this.state = 0;
        this.observers = [];
    }
    // 取值
    getState() {
        return this.state;
    }

    // 设置值
    setState(state) {
        this.state = state;
        this.notify(); // 状态发生改变，通知依赖
    }

    // 通知依赖
    notify() {
        this.observers.forEach(observer => observer.update());
    }

    // 添加依赖
    add(observer) {
        this.observer.push(observer);
    }
}

class Observer {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
        this.subject.add(this)
    }

    update() {
        console.log(`${this.name}收到：得到更新${this.subject.getState()}`)
    }
}

let sub = new Subject(); // 实例化一个Subject对象
let observer1 = new Observer('观察者1号', sub); // 实例化观察者时，指定哪个Subject
let observer2 = new Observer('观察者2号', sub);

sub.setState(1); // Subject对象更新

// 输出：
// 观察者1号收到：得到更新1
// 观察者2号收到：得到更新1
```

![alt](./img/DesignPatterns-1.png)

> Vue watch、NodeJS自定义事件

## 发布-订阅模式
和观察者模式非常相似，但是最大的区别在于：
> 在发布-订阅模式，发布者（publishers）不会直接将消息发送给特定的订阅者

```js
class Event {
    constructor() {
        this.clientList = {}; // 订阅者列表
    }

    // 事件监听
    on = function(key, fn) {
        if(!clientList[key]){
            clientList[key] = []
        }
        clientList[key].push(fn)
    }

    // 事件触发
    emit = function() {
        var key = Array.prototype.shift.call(arguments)
            fns = clientList[key]
        if(!fns || fns.length === 0) {
            return false
        }
        for(var i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments)
        }
    }

    // 解除事件绑定
    off = function(key, fn) {
        var fns = clientList[key]
        if(!fns) {    
            return false
        }
        if(!fn){    
            fns && (fns.length = 0)
        } else {
            for(var l = fns.length - 1; l >= 0; l--) {
                var _fn = fns[l]
                if (_fn === fn) {
                    fns.splice(l, 1)
                }
            }
        }
    }
}

const event = new Event();

const handler = (price) => console.log(`价格为：${price}`);

event.on('squareMeter88', handler); // 监听事件

event.emit('squareMeter88', 20000) // 触发事件，传入参数（20000）

event.off('squareMeter88', handler) // 解除事件绑定
```


`发布者和订阅者`之间不知道对方的存在，需要通过`消息代理`来通信

| 特性 | 观察者模式 | 发布订阅模式 |
|--|--|--|
|**关系**| 直接联系 | 无直接关系，通过消息代理 |
|**耦合度**| 紧耦合 | 松耦合 |
|**适用情况**| 当组件之间依赖关系简单时 | 当组件之间依赖关系复杂时 |

![alt](./img/DesignPatterns-2.png)

## 代理模式
**通过代理，间接地访问目标对象。**

```js
// 源对象
class Jack {
    constructor (target) {
        this.target = target;
    }
    send (target, msg) {
        this.target.receive(msg)
    }
}

// 目标对象
class Rose {
    receive (msg) {
        console.log('收到消息: ' + msg)
    }
}

// 代理对象
class ProxyObj {
    constructor () {
        this.target = new Rose();
    }
    receive (msg) {
        this.send(msg)
    }
    send (msg) {
        this.target.receive(msg)
    }
}

const proxyObj = new ProxyObj();
const jack = new Jack(proxyObj);
jack.send(proxyObj, 'nihao'); // 收到消息：nihao
```

> ES6 Proxy、Vuex中对getters的访问

**Jack：**
 - this.target为Proxy
 - send

**ProxyObj：**
 - this.target为Rose
 - send
 - receive

**Rose：**
 - receive


## 中介者模式
现实中的中介者：博彩公司
 - 如果没有博彩公司，上千万的人一起计算赔率、输赢是非常困难
 - 有了博彩公司作为中介者对象，每个人只需跟博彩公司发生关联，由博彩公司来根据每个人的投注情况计算好赔率（彩民赢了，找博彩公司拿；输了就把钱交给博彩公司）

### 一个购买商品的例子：
 ![alt](./img/DesignPatterns-3.png)
 
 如图，如果没有使用任何设计模式，这里应该是在`select`、`input`的各自onchange事件里，去获取`当前用户所选的条件下`的库存情况。

 如果使用了中介者模式，只需增加一个`中介者对象`
 ```js
 var goods = {
     'red': 3
 }

 var mediator = (function() {
    var colorSelect = document.getElementById('colorSelect'),
        numberInput = document.getElementById('numberInput')
        nextBtn = document.getElementById('nextBtn')
    
    return {
        changed (obj) {
            var color = colorSelect.value,
                number = numberInput.value,
                stock = good[color]
                
                if (obj === colorSelect) { // 如果选择的是颜色下拉框
                    // ...
                } else if (obj === numberInput) { // 如果选择的是数量输入框
                    // ...
                }

                nextBtn.innerHTML = '购买'
        }
    }
 })()
 ```
 可见，所有的对象会和`中介者对象`通信。当这些对象发生改变时，通知`中介者对象`，同时告诉`中介者对象`自己的身份，以便中介者辨别是谁发生了改变，剩下的事情就交给了中介者来完成。

 **好处**：降低各个对象之间的耦合度

 **缺点**：中介者对象自身往往难以维护

## 装饰者模式
装饰者模式可以 **动态扩展一个实现类** 的功能。
> 一幅画无论是否需要画框，都可以挂在墙上。但当用画框装饰时，可以让自己具有外壳保护、精美外观，同时又不被“伤害”。实际上最终是画框挂在墙上。

用处：
 - 扩展一个类的功能
 - 功能的动态增加、动态撤销