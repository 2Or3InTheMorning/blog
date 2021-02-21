(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{514:function(t,e,v){t.exports=v.p+"assets/img/browser-cache-3.7835cc64.png"},692:function(t,e,v){"use strict";v.r(e);var _=v(43),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"浏览器缓存机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存机制"}},[t._v("#")]),t._v(" 浏览器缓存机制")]),t._v(" "),_("blockquote",[_("p",[t._v("缓存和重用之前获取的资源对于性能优化很关键。\n")]),_("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#浏览器缓存机制"}},[t._v("浏览器缓存机制")]),_("ul",[_("li",[_("a",{attrs:{href:"#缓存的分类"}},[t._v("缓存的分类")])]),_("li",[_("a",{attrs:{href:"#浏览器缓存"}},[t._v("浏览器缓存")])]),_("li",[_("a",{attrs:{href:"#cdn缓存"}},[t._v("CDN缓存")])]),_("li",[_("a",{attrs:{href:"#memory-cache和disk-cache"}},[t._v("memory cache和disk cache")])]),_("li",[_("a",{attrs:{href:"#拓展-强缓存的应用"}},[t._v("拓展：强缓存的应用")])]),_("li",[_("a",{attrs:{href:"#拓展-在-html的meta里设置缓存策略"}},[t._v("拓展：在.html的meta里设置缓存策略")])]),_("li",[_("a",{attrs:{href:"#拓展-chrome86启用缓存分区"}},[t._v("拓展：Chrome86启用缓存分区")])]),_("li",[_("a",{attrs:{href:"#参考链接"}},[t._v("参考链接")])])])])])]),_("p")]),t._v(" "),_("h2",{attrs:{id:"缓存的分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存的分类"}},[t._v("#")]),t._v(" 缓存的分类")]),t._v(" "),_("p",[t._v("按照存储的位置，可以分为：\n优先级越往上越高：")]),t._v(" "),_("ul",[_("li",[t._v("Service Worker")]),t._v(" "),_("li",[t._v("Memory Cache")]),t._v(" "),_("li",[t._v("Disk Cache")]),t._v(" "),_("li",[t._v("Network Request")])]),t._v(" "),_("h3",{attrs:{id:"service-worker"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#service-worker"}},[t._v("#")]),t._v(" Service Worker")]),t._v(" "),_("p",[_("code",[t._v("Service Worker")]),t._v("是一个注册在 指定源和路径下 的独立线程（由事件驱动）。")]),t._v(" "),_("p",[t._v("通过JS来实现 资源请求的拦截、修改，从而更精细地缓存、复用资源。")]),t._v(" "),_("blockquote",[_("p",[t._v("（只能针对https）")])]),t._v(" "),_("h2",{attrs:{id:"浏览器缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存"}},[t._v("#")]),t._v(" 浏览器缓存")]),t._v(" "),_("h3",{attrs:{id:"强缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[t._v("#")]),t._v(" 强缓存")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段名称")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("适用http版本")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Cache-Control")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("指定“缓存策略”(可缓存性、到期时间)")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("仅HTTP/1.1")])])]),t._v(" "),_("tr",[_("td",[t._v("Expires")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("设定“缓存过期时间”(服务器、客户端时间可能对不上)")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("HTTP/1.0、HTTP/1.1")])])])]),t._v(" "),_("p",[t._v("注意：")]),t._v(" "),_("ul",[_("li",[t._v("因为"),_("code",[t._v("Expires")]),t._v("既适用于1.0，也适用于1.1，所以大多数情况下会同时使用 "),_("code",[t._v("Expires")]),t._v("、"),_("code",[t._v("Cache-Control")])])]),t._v(" "),_("h4",{attrs:{id:"cache-control选项说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cache-control选项说明"}},[t._v("#")]),t._v(" Cache-Control选项说明")]),t._v(" "),_("p",[t._v("在 "),_("strong",[t._v("Request Header")]),t._v("、"),_("strong",[t._v("Response Header")]),t._v(" 都可以使用"),_("code",[t._v("Cache-Control")]),t._v("，区别在于：")]),t._v(" "),_("ul",[_("li",[t._v("前者：指定 "),_("strong",[t._v("此资源在本次请求的缓存策略")]),t._v("；\n"),_("blockquote",[_("p",[t._v("如: 强制刷新F5时，请求头是"),_("code",[t._v("cache-control: no-cache")]),t._v(" 告知服务器本次需要请求最新资源")])])]),t._v(" "),_("li",[t._v("后者：告知 浏览器 针对 此资源 的缓存策略")])]),t._v(" "),_("h4",{attrs:{id:"pragma"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pragma"}},[t._v("#")]),t._v(" Pragma")]),t._v(" "),_("p",[t._v("HTTP/1.0 中规定的 Request Header 字段，但不存在于响应头。")]),t._v(" "),_("p",[t._v("早于"),_("code",[t._v("cache-control")]),t._v("，与"),_("code",[t._v("cache-control: no-cache")]),t._v("相同，表示使用缓存前需重新验证。")]),t._v(" "),_("p",[t._v("若不考虑向后兼容，可以用"),_("code",[t._v("cache-control")]),t._v("取代。")]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("建议只在需要兼容 HTTP/1.0 时使用")]),t._v("。")])]),t._v(" "),_("h3",{attrs:{id:"协商缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[t._v("#")]),t._v(" 协商缓存")]),t._v(" "),_("p",[_("strong",[t._v("Response Header")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段名称")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("适用http版本")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("特点")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Last-Modified")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("文件的最后一次修改时间")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("1.0、1.1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("无法判断“小于秒级”、“周期性更改”的文件")])]),t._v(" "),_("tr",[_("td",[t._v("ETag")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("资源的唯一标识符")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("仅1.1")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("计算会产生服务器性能损耗")])])])]),t._v(" "),_("p",[_("strong",[t._v("Request Header")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段名称")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("适用http版本")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("If-Modified-Since")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("向服务器请求上次保存的"),_("code",[t._v("Last-Modified")]),t._v("值")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("1.0、1.1")])]),t._v(" "),_("tr",[_("td",[t._v("If-None-Match")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("向服务器请求上次保存的"),_("code",[t._v("ETag")]),t._v("值")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("仅1.1")])])])])]),t._v(" "),_("h3",{attrs:{id:"浏览器的应对"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的应对"}},[t._v("#")]),t._v(" 浏览器的应对")]),t._v(" "),_("ol",[_("li",[t._v("服务器会通过 "),_("strong",[t._v("Response Header")]),t._v("，携带以上四个常用（"),_("code",[t._v("Cache-Control")]),t._v("、"),_("code",[t._v("Expires")]),t._v("、"),_("code",[t._v("Last-Modified")]),t._v("、"),_("code",[t._v("ETag")]),t._v("）的响应头。")]),t._v(" "),_("li",[t._v("浏览器会通过判别这些响应值来决定 "),_("strong",[t._v("是否要使用缓存")]),t._v("。")])]),t._v(" "),_("blockquote",[_("p",[t._v("如：当 响应 中存在"),_("code",[t._v("Cache-Control")]),t._v("（设置了"),_("code",[t._v("max-age")]),t._v("），或者"),_("code",[t._v("Expires")]),t._v("，浏览器就不会向服务器发起校验请求（协商缓存校验）而是直接使用本地缓存。")])]),t._v(" "),_("p",[t._v("在这段时间里，只能通过 "),_("strong",[t._v("强制刷新")]),t._v(" 来请求最新资源(前提是没有接入CDN)")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("刷新行为")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[_("code",[t._v("Request Header")]),t._v("会携带")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("F5、工具栏的刷新按钮")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("If-Modified-Since")]),t._v("（如果上次Response里有"),_("code",[t._v("Last-Modified")]),t._v("）、"),_("strong",[t._v("If-None-Match")]),t._v("（如果上次Response里有"),_("code",[t._v("ETag")]),t._v("）")])]),t._v(" "),_("tr",[_("td",[t._v("Ctrl + F5")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("Pragma: no-cache")]),t._v("、"),_("strong",[t._v("Cache-Control: no-cache")])])])])])]),t._v(" "),_("h2",{attrs:{id:"cdn缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cdn缓存"}},[t._v("#")]),t._v(" CDN缓存")]),t._v(" "),_("p",[t._v("如果接入了CDN，即使强制刷新，也不会直接向源服务器请求资源，而是转向CDN边缘节点请求资源。")]),t._v(" "),_("blockquote",[_("p",[t._v("除非CDN边缘节点的缓存也过期了，CDN边缘节点才会向源服务器发请求，从而获取最新资源。")])]),t._v(" "),_("p",[t._v("优势")]),t._v(" "),_("ul",[_("li",[t._v("减少用户访问延时")]),t._v(" "),_("li",[t._v("减少源服务器的负载")])]),t._v(" "),_("h2",{attrs:{id:"memory-cache和disk-cache"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#memory-cache和disk-cache"}},[t._v("#")]),t._v(" memory cache和disk cache")]),t._v(" "),_("p",[t._v("Network的Size栏会有三种情况：")]),t._v(" "),_("ul",[_("li",[t._v("from memory cache")]),t._v(" "),_("li",[t._v("from disk cache")]),t._v(" "),_("li",[t._v("资源大小")])]),t._v(" "),_("img",{attrs:{src:v(514),width:"450px"}}),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("状态")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("200")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("from memory cache")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("不访问服务器，缓存在"),_("strong",[t._v("内存")]),t._v("中。"),_("br"),t._v("浏览器关闭后，数据"),_("strong",[t._v("将被释放")]),t._v("（一般为js、图片）")])]),t._v(" "),_("tr",[_("td",[t._v("200")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("from disk cache")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("不访问服务器。缓存在"),_("strong",[t._v("硬盘")]),t._v("中。"),_("br"),t._v("浏览器关闭后，数据"),_("strong",[t._v("依然存在")]),t._v("（一般为css）")])]),t._v(" "),_("tr",[_("td",[t._v("304")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("资源大小")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("命中"),_("strong",[t._v("协商缓存")]),t._v("，使用本地资源（CDN上的资源）")])])])]),t._v(" "),_("h2",{attrs:{id:"拓展-强缓存的应用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#拓展-强缓存的应用"}},[t._v("#")]),t._v(" 拓展：强缓存的应用")]),t._v(" "),_("p",[t._v("强缓存通常 只针对静态资源 使用。对于 “引用静态资源的 "),_("code",[t._v("index.html")]),t._v("” 不能使用强缓存，因为没有机制能够通知浏览器这些 "),_("code",[t._v(".html")]),t._v("有更新。")]),t._v(" "),_("p",[t._v("所以，针对 "),_("code",[t._v("index.html")]),t._v(" 只采用 协商缓存。这样浏览器访问这些页面时，始终可以请求服务器最新的资源。")]),t._v(" "),_("p",[t._v("当资源更新时，")]),t._v(" "),_("blockquote",[_("p",[t._v("如用户第一次访问的版本已缓存到电脑上。当网站发布新版本时需要替换这个图片。（除非用户清除缓存，否则看不到最新的图片效果）")])]),t._v(" "),_("h3",{attrs:{id:"实现文件级别的精确缓存控制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实现文件级别的精确缓存控制"}},[t._v("#")]),t._v(" 实现文件级别的精确缓存控制")]),t._v(" "),_("p",[t._v("由上得知，"),_("code",[t._v(".index.html")]),t._v("不加强缓存，当里面被引用的资源地址只要发生改变了，就可以更新这个资源。")]),t._v(" "),_("p",[t._v("若能实现只有当 文件内容变化，再变更相应url，就能实现 文件级别的精确缓存控制。")]),t._v(" "),_("blockquote",[_("p",[t._v("webpack可以在打包时添加hash串来实现")])]),t._v(" "),_("h2",{attrs:{id:"拓展-在-html的meta里设置缓存策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#拓展-在-html的meta里设置缓存策略"}},[t._v("#")]),t._v(" 拓展：在.html的meta里设置缓存策略")]),t._v(" "),_("p",[t._v("（待更新...）")]),t._v(" "),_("h2",{attrs:{id:"拓展-chrome86启用缓存分区"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#拓展-chrome86启用缓存分区"}},[t._v("#")]),t._v(" 拓展：Chrome86启用缓存分区")]),t._v(" "),_("ul",[_("li",[t._v("浏览器缓存机制的改变（新增2个缓存key）")]),t._v(" "),_("li",[t._v("避免攻击者利用“检查缓存”实施攻击")])]),t._v(" "),_("h2",{attrs:{id:"参考链接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://imweb.io/topic/5795dcb6fb312541492eda8c",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP缓存控制小结"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://segmentfault.com/q/1010000013464267",target:"_blank",rel:"noopener noreferrer"}},[t._v("from memory cache与from disk cache"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://juejin.im/post/5e7ef4a9e51d4546f8784b21",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端缓存那些事"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://juejin.im/post/6844903844044865550",target:"_blank",rel:"noopener noreferrer"}},[t._v("聊聊 CDN 缓存与浏览器缓存"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s/8oL4Z4ewTl0VbQ_0BH4n7w",target:"_blank",rel:"noopener noreferrer"}},[t._v("新的浏览器缓存策略变更：舍弃性能、确保安全"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://www.chromestatus.com/feature/5730772021411840",target:"_blank",rel:"noopener noreferrer"}},[t._v("Partition the HTTP Cache"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);