(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{562:function(t,a,s){"use strict";s.r(a);var n=s(43),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"广播电台复盘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#广播电台复盘"}},[t._v("#")]),t._v(" 广播电台复盘")]),t._v(" "),s("h2",{attrs:{id:"基本信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本信息"}},[t._v("#")]),t._v(" 基本信息")]),t._v(" "),s("ul",[s("li",[t._v("所用技术: React、Webpack、Babel、JSBridge、Corona等")]),t._v(" "),s("li",[t._v("描述: 云音乐v8.0播客板块之一，以“直播流”形式将电台呈现给用户(对接蜻蜓FM)。")]),t._v(" "),s("li",[t._v("成果: 拓展音频播放公共组件;Lighthouse体验基线达标;承载10万+日活。")])]),t._v(" "),s("h2",{attrs:{id:"职责"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#职责"}},[t._v("#")]),t._v(" 职责")]),t._v(" "),s("ul",[s("li",[t._v("音频播放组件开发;")]),t._v(" "),s("li",[t._v("客户端JSBridge对接;")]),t._v(" "),s("li",[t._v("多浏览器兼容/适配;")]),t._v(" "),s("li",[t._v("离线包接入")]),t._v(" "),s("li",[t._v("接口预加载")]),t._v(" "),s("li",[t._v("埋点上报")])]),t._v(" "),s("h3",{attrs:{id:"音频播放组件开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#音频播放组件开发"}},[t._v("#")]),t._v(" 音频播放组件开发")]),t._v(" "),s("p",[t._v("将原有的基于JSBridge的音频组件进行拓展，支持直播流。并对直播流有过了解。")]),t._v(" "),s("ul",[s("li",[t._v("事件监听器 数据不更新（闭包）")]),t._v(" "),s("li",[t._v("流媒体协议\n"),s("ul",[s("li",[t._v("RTMP：基于TCP长连接 的 实时消息传送协议。\n"),s("ul",[s("li",[t._v("缺点：移动端不支持，PC端只能通过flash使用")])])]),t._v(" "),s("li",[t._v("HLS：Apple提供的基于HTTP实现的 实时流媒体 技术。（主要用于iOS，Android也支持）\n"),s("ul",[s("li",[t._v("这项流媒体技术会根据 "),s("code",[t._v(".m3u8")]),t._v(" 的索引文件去不断请求新的 "),s("code",[t._v(".m3u8")]),t._v(" 和 "),s("code",[t._v(".ts")]),t._v(" 文件")]),t._v(" "),s("li",[t._v("缺点：多次请求造成服务端压力")])])]),t._v(" "),s("li",[t._v("FLV：把音视频数据封装成FLV，然后通过HTTP传输\n"),s("ul",[s("li",[t._v("缺点：不兼容 iOS 浏览器")])])])])])]),t._v(" "),s("h3",{attrs:{id:"客户端jsbridge对接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端jsbridge对接"}},[t._v("#")]),t._v(" 客户端JSBridge对接")]),t._v(" "),s("p",[t._v("和客户端约定业务层的JSBridge协议，其中也有深入了解过JSBridge的底层工作原理。")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"/skill/web/jsbridge"}},[t._v("JSBridge的工作原理")])])]),t._v(" "),s("h3",{attrs:{id:"多浏览器兼容-适配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多浏览器兼容-适配"}},[t._v("#")]),t._v(" 多浏览器兼容/适配")]),t._v(" "),s("p",[t._v("进行站内站外的浏览器适配，以及兼容性问题解决。")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"/business/practice/h5/responsive"}},[t._v("移动端适配")])])]),t._v(" "),s("li",[s("p",[t._v("兼容性问题解决："),s("a",{attrs:{href:"/business/practice/h5/1px"}},[t._v("1px")]),t._v("、"),s("RouterLink",{attrs:{to:"/business/practice/h5/#android下line-height文字垂直居中偏移问题"}},[t._v("Android的字体行高问题")])],1)])]),t._v(" "),s("h3",{attrs:{id:"离线包接入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#离线包接入"}},[t._v("#")]),t._v(" 离线包接入")]),t._v(" "),s("p",[t._v("为了首屏优化，尝试接入离线包，并有了解离线包大致机制。")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"/skill/web/h5-webcache"}},[t._v("detail")])])]),t._v(" "),s("h3",{attrs:{id:"接口预加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口预加载"}},[t._v("#")]),t._v(" 接口预加载")]),t._v(" "),s("p",[t._v("为了首屏优化，尝试进行接口预加载。")]),t._v(" "),s("blockquote",[s("p",[s("RouterLink",{attrs:{to:"/business/practice/h5/optimize/#（hybrid）接口预加载"}},[t._v("detail")])],1)]),t._v(" "),s("h3",{attrs:{id:"埋点上报"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#埋点上报"}},[t._v("#")]),t._v(" 埋点上报")]),t._v(" "),s("p",[t._v("与 BI 同事沟通，需要上报的字段，并进行上传。")]),t._v(" "),s("blockquote",[s("p",[t._v("将公共字段封装成一个通用函数。")])]),t._v(" "),s("h2",{attrs:{id:"工程内部"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工程内部"}},[t._v("#")]),t._v(" 工程内部")]),t._v(" "),s("h3",{attrs:{id:"css适配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css适配"}},[t._v("#")]),t._v(" css适配")]),t._v(" "),s("p",[t._v("一开始以为只做了简单的用JS定位，走查后兼容性bug较多。")]),t._v(" "),s("ul",[s("li",[t._v("移动端safari底部导航遮挡")]),t._v(" "),s("li",[t._v("对mnb包（mnb.getPageInfo获取系统栏/导航栏）不熟悉")]),t._v(" "),s("li",[t._v("全面屏适配（safe-area-inset-bottom）不熟悉")])]),t._v(" "),s("h4",{attrs:{id:"日后参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#日后参考"}},[t._v("#")]),t._v(" 日后参考")]),t._v(" "),s("ul",[s("li",[t._v("先实现一款（如ipx）比较完美适配")]),t._v(" "),s("li",[t._v("ipx其它系列（ip6/7/8 -> ip6/7/8p -> ip5/5se -> ipx/xs & ipxr & ipxs max）")]),t._v(" "),s("li",[t._v("1080P安卓 -> 常用测试机")])]),t._v(" "),s("h4",{attrs:{id:"其它"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),s("ul",[s("li",[t._v("【移动端项目】web端访问时友好地提示扫码访问（qrcode.react、window.location.href），根据业务需求，看是使用isMobile还是isInNEMapp")]),t._v(" "),s("li",[t._v("微信内二次分享-标题/副标题的编辑")]),t._v(" "),s("li",[t._v("对同AppID下的orpheus链接后带参数，需通过"),s("code",[t._v("mp.view.queryDidChanged")]),t._v("监听")])]),t._v(" "),s("h4",{attrs:{id:"调试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调试"}},[t._v("#")]),t._v(" 调试")]),t._v(" "),s("ul",[s("li",[t._v("【调试工具】eruda（异步加载，可能js加载前更早的日志无法打印）；vconsole（同步加载可打印最早日志，iOS测试包内置: "),s("code",[t._v("开发调试-浏览器测试-开启调试模式")]),t._v("）；MusicDevtools（预览小程序）")]),t._v(" "),s("li",[t._v("【RPC调试】mnb在测试环境无法打印日志。\n"),s("ul",[s("li",[t._v("解决：可通过改变"),s("code",[t._v("MNBCallback")]),t._v("指向")])])])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MNBCallback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// eslint-disable-next-line func-names")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("MNBCallback")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("seq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("回调：seq: ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("seq"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(", error: ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(", result: ")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'options: '")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h2",{attrs:{id:"对外沟通"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对外沟通"}},[t._v("#")]),t._v(" 对外沟通")]),t._v(" "),s("h3",{attrs:{id:"客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端"}},[t._v("#")]),t._v(" 客户端")]),t._v(" "),s("ul",[s("li")]),t._v(" "),s("h3",{attrs:{id:"服务端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务端"}},[t._v("#")]),t._v(" 服务端")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("接口字段格式与常规不同，需二次处理")]),t._v(" "),s("ul",[s("li",[t._v("接入互动系统（收藏功能）：")])])]),t._v(" "),s("li",[s("p",[t._v("字段实际下发值格式不定：")]),t._v(" "),s("ul",[s("li",[t._v("接入外部Api（蜻蜓电台）")])])])]),t._v(" "),s("h3",{attrs:{id:"视觉"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视觉"}},[t._v("#")]),t._v(" 视觉")]),t._v(" "),s("ul",[s("li",[t._v("视觉稿不全面（说是参考DI-FM）")]),t._v(" "),s("li",[t._v("走查较随意（H5没有走查）")])]),t._v(" "),s("h3",{attrs:{id:"qa"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qa"}},[t._v("#")]),t._v(" QA")])])}),[],!1,null,null,null);a.default=r.exports}}]);