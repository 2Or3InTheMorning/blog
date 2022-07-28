(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{408:function(a,v,t){"use strict";t.r(v);var _=t(29),e=Object(_.a)({},(function(){var a=this,v=a.$createElement,t=a._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"跨端音频组件上层封装（rn、h5）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跨端音频组件上层封装（rn、h5）"}},[a._v("#")]),a._v(" 跨端音频组件上层封装（RN、H5）")]),a._v(" "),t("h2",{attrs:{id:"基本信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本信息"}},[a._v("#")]),a._v(" 基本信息")]),a._v(" "),t("ul",[t("li",[a._v("所用技术: ES7、Babel、Webpack、ReactNative、Lerna、Mnb")]),a._v(" "),t("li",[a._v("描述: 针对云音乐RPC音频播放能力的上层组件封装，以及抹平Native两端不一致问题。")]),a._v(" "),t("li",[a._v("成果: 已承接云音乐App内部分播放场景(如排行榜、新歌发布⻚等);对⻬Native两端功能;提升音频RPC接入效率;提高工程维护性。")])]),a._v(" "),t("h2",{attrs:{id:"职责"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#职责"}},[a._v("#")]),a._v(" 职责")]),a._v(" "),t("ul",[t("li",[a._v("调研Audio Context;")]),a._v(" "),t("li",[a._v("组件设计与封装;")]),a._v(" "),t("li",[a._v("多平台(RN、H5)拆包;")]),a._v(" "),t("li",[a._v("跟进客户端RPC问题;")]),a._v(" "),t("li",[a._v("提供组件文档、Demo;")])]),a._v(" "),t("h2",{attrs:{id:"概念图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念图"}},[a._v("#")]),a._v(" 概念图")]),a._v(" "),t("img",{attrs:{src:"https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7967604397/0251/f157/fd44/1bfabda833e745a965fdf708b2b922bc.png",width:"400px"}}),a._v(" "),t("h2",{attrs:{id:"难点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#难点"}},[a._v("#")]),a._v(" 难点")]),a._v(" "),t("h3",{attrs:{id:"调研audio-context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调研audio-context"}},[a._v("#")]),a._v(" 调研Audio Context")]),a._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"/skill/web/audio-context"}},[a._v("detail")])])]),a._v(" "),t("h3",{attrs:{id:"组件设计与封装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件设计与封装"}},[a._v("#")]),a._v(" 组件设计与封装")]),a._v(" "),t("p",[a._v("组件设计原则")]),a._v(" "),t("ul",[t("li",[a._v("单一原则：每个模块的职责单一\n"),t("ul",[t("li",[a._v("事件管理实例（EventManager）：对于每个事件（playerChanged、songChanged）的JSBridge调用，进行单一封装。参数合法化")])])]),a._v(" "),t("li",[a._v("开放封闭原则：模块允许扩展，避免在原设计上修改\n"),t("ul",[t("li",[a._v("播放器实例（PlayerManager）：可以往PlayManager加入更多方法，但尽量不修改原有方法")])])]),a._v(" "),t("li",[a._v("里式替换原则：调用子模块依然能保证父模块的功能\n"),t("ul",[t("li",[a._v("rpc-audio-h5依然能实现rpc-audio-core的功能")])])]),a._v(" "),t("li",[a._v("接口隔离原则：在实现功能的前提下，依赖尽少的模块\n"),t("ul",[t("li",[a._v("rpc-audio-h5、rpc-audio-rn，根据平台只引入其中一个")])])]),a._v(" "),t("li",[a._v("依赖倒置原则：复杂模块应该依赖于抽象的接口，而不应该依赖于低级模块的具体实现")])]),a._v(" "),t("h4",{attrs:{id:"设计模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设计模式"}},[a._v("#")]),a._v(" 设计模式")]),a._v(" "),t("p",[a._v("PlayerManager、EventManager、RPCManager")]),a._v(" "),t("ul",[t("li",[a._v("工厂模式")]),a._v(" "),t("li",[a._v("单例模式\n"),t("ul",[t("li",[a._v("播放器实例（PlayerManager）：构造函数判断是否存在实例，若是则返回player")])])]),a._v(" "),t("li",[a._v("发布订阅模式\n"),t("ul",[t("li",[a._v("事件管理实例（EventManager）：绑定（on）、触发（emit）、解绑（off）事件")])])]),a._v(" "),t("li",[a._v("观察者模式")]),a._v(" "),t("li",[a._v("代理模式")])]),a._v(" "),t("h3",{attrs:{id:"多平台h5、rn拆包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多平台h5、rn拆包"}},[a._v("#")]),a._v(" 多平台H5、RN拆包")]),a._v(" "),t("p",[a._v("通过 lerna 进行集中管理 packages，进行拆包。")]),a._v(" "),t("p",[t("strong",[a._v("好处：")])]),a._v(" "),t("ul",[t("li",[a._v("统一管理各个子包（更新版本、发版）")]),a._v(" "),t("li",[a._v("本地开发，建立软链")])]),a._v(" "),t("h4",{attrs:{id:"软链失效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软链失效"}},[a._v("#")]),a._v(" 软链失效")]),a._v(" "),t("p",[a._v("若 "),t("code",[a._v("-core")]),a._v(" 被 "),t("code",[a._v("-h5")]),a._v(" 引用，但发现 "),t("code",[a._v("-5")]),a._v(" 内的 "),t("code",[a._v("-core")]),a._v(" 并非本地的。需检查 "),t("code",[a._v("-core")]),a._v(" 的版本 是否和 "),t("code",[a._v("-h5")]),a._v(" 内 "),t("code",[a._v("package-lock.json")]),a._v(" 版本对上")]),a._v(" "),t("h4",{attrs:{id:"软链建立后，module找不到"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软链建立后，module找不到"}},[a._v("#")]),a._v(" 软链建立后，Module找不到")]),a._v(" "),t("p",[a._v("检查 "),t("code",[a._v("webpack.alias")]),a._v(" 是否引用到，若是，需安装对应的包。")]),a._v(" "),t("blockquote",[t("p",[a._v("这种情况下，报错显示的是alias，需注意映射")])])])}),[],!1,null,null,null);v.default=e.exports}}]);