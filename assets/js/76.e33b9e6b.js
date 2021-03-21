(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{563:function(t,v,_){"use strict";_.r(v);var a=_(43),e=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"单曲播放页性能优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#单曲播放页性能优化"}},[t._v("#")]),t._v(" 单曲播放页性能优化")]),t._v(" "),_("p"),_("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#单曲播放页性能优化"}},[t._v("单曲播放页性能优化")]),_("ul",[_("li",[_("a",{attrs:{href:"#基本信息"}},[t._v("基本信息")])]),_("li",[_("a",{attrs:{href:"#职责"}},[t._v("职责")])]),_("li",[_("a",{attrs:{href:"#难点"}},[t._v("难点")])])])])])]),_("p"),t._v(" "),_("h2",{attrs:{id:"基本信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本信息"}},[t._v("#")]),t._v(" 基本信息")]),t._v(" "),_("ul",[_("li",[t._v("所用技术: React、Webpack、Koa、Lighthouse")]),t._v(" "),_("li",[t._v("描述: 针对云音乐App站外“单曲播放⻚”进行的WebVitals性能指标优化。")]),t._v(" "),_("li",[t._v("成果: 首屏JS体积下降67%，CSS下降75%;Lighthouse评分提升40%，大盘性能提升明显，秒开率小幅提升;承载千万日活。")])]),t._v(" "),_("h2",{attrs:{id:"职责"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#职责"}},[t._v("#")]),t._v(" 职责")]),t._v(" "),_("ul",[_("li",[t._v("性能指标分析;")]),t._v(" "),_("li",[t._v("首屏性能优化;")]),t._v(" "),_("li",[t._v("真实侧性能验证;")]),t._v(" "),_("li",[t._v("优化感官体验;")])]),t._v(" "),_("h2",{attrs:{id:"难点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#难点"}},[t._v("#")]),t._v(" 难点")]),t._v(" "),_("h3",{attrs:{id:"性能指标分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#性能指标分析"}},[t._v("#")]),t._v(" 性能指标分析")]),t._v(" "),_("h4",{attrs:{id:"分析步骤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分析步骤"}},[t._v("#")]),t._v(" 分析步骤")]),t._v(" "),_("ol",[_("li",[t._v("接入APM，由APM的SDK进行收集上报")]),t._v(" "),_("li",[t._v("关注大盘 -> 具体页面")]),t._v(" "),_("li",[t._v("关注Web-Vitals核心指标集（"),_("code",[t._v("LCP")]),t._v("、"),_("code",[t._v("FID")]),t._v("、"),_("code",[t._v("CLS")]),t._v("）")]),t._v(" "),_("li",[t._v("加载瀑布图（"),_("code",[t._v("DOM解析")]),t._v("、"),_("code",[t._v("defer脚本")]),t._v("、"),_("code",[t._v("资源加载")]),t._v("）、渲染瀑布图（"),_("code",[t._v("DomReady")]),t._v("、"),_("code",[t._v("FCP")]),t._v("、"),_("code",[t._v("LCP")]),t._v("）")])]),t._v(" "),_("h4",{attrs:{id:"web-vitals指标说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#web-vitals指标说明"}},[t._v("#")]),t._v(" Web-Vitals指标说明")]),t._v(" "),_("p",[t._v("主要关注 Web-Vitals 三个核心指标：LCP、CLS、FID。")]),t._v(" "),_("blockquote",[_("p",[t._v("FCP 可作参考。")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("展示名")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("字段名")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("达标标准")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("LCP")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("最大内容渲染")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("75% 用户小于 "),_("code",[t._v("2 秒")]),t._v(" （云音乐内部定义阈值）")])]),t._v(" "),_("tr",[_("td",[t._v("FCP")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("首次内容渲染")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("75% 用户小于 "),_("code",[t._v("1 秒")])])]),t._v(" "),_("tr",[_("td",[t._v("FID")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("首次输入时延")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("75% 用户小于 "),_("code",[t._v("0.1 秒")])])]),t._v(" "),_("tr",[_("td",[t._v("CLS")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("累计布局位移")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("75% 用户小于 "),_("code",[t._v("0.1")])])])])]),t._v(" "),_("p",[t._v("说明：")]),t._v(" "),_("ul",[_("li",[t._v("仅基于 Chromium 内核的浏览器支持 WebVitals指标")]),t._v(" "),_("li",[t._v("采集覆盖率 30%")])]),t._v(" "),_("h4",{attrs:{id:"加载、渲染指标说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#加载、渲染指标说明"}},[t._v("#")]),t._v(" 加载、渲染指标说明")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("DomReady = domContentLoadedEventEnd - fetchStart")]),t._v(" "),_("ul",[_("li",[t._v("即：DOM解析完成、同步资源（如defer脚本）加载执行完成 的时间。")])])]),t._v(" "),_("li",[_("strong",[t._v("页面完全加载时间 = loadEventStart - fetchStart")])])]),t._v(" "),_("h3",{attrs:{id:"首屏性能优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#首屏性能优化"}},[t._v("#")]),t._v(" 首屏性能优化")]),t._v(" "),_("blockquote",[_("p",[_("RouterLink",{attrs:{to:"/skill/web/optimize/#首屏性能优化"}},[t._v("detail")])],1)]),t._v(" "),_("h3",{attrs:{id:"性能验证"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#性能验证"}},[t._v("#")]),t._v(" 性能验证")]),t._v(" "),_("p",[t._v("优化后，需要 关注整体指标的新表现 ，以 "),_("strong",[t._v("验证本次优化是否有效")]),t._v(" 。")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("本地验证：")]),t._v(" Chrome插件（Web-Vitals）、Performance（Fast/Slow 3G）")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("测试环境验证：")]),t._v(" APM、Lighthouse审计")]),t._v(" "),_("ul",[_("li",[t._v("对比：加载瀑布图、渲染瀑布图、WebVitals核心指标集")])])])]),t._v(" "),_("h3",{attrs:{id:"优化感官体验"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优化感官体验"}},[t._v("#")]),t._v(" 优化感官体验")]),t._v(" "),_("h4",{attrs:{id:"微信开放标签"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#微信开放标签"}},[t._v("#")]),t._v(" 微信开放标签")]),t._v(" "),_("p",[t._v("接入 “App 跳转按钮 "),_("code",[t._v("<wx-open-launch-app>")]),t._v("”，它具有 “在 微信环境 中调起 APP” 的能力。")]),t._v(" "),_("blockquote",[_("p",[t._v("针对 Android(5.0+)，因为 iOS 通常已经实现 Universal Link 逻辑")])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("准备工作：")]),t._v(" "),_("ul",[_("li",[t._v("微信公众平台：\n"),_("ul",[_("li",[t._v("设置 "),_("code",[t._v("JS接口安全域名")])])])]),t._v(" "),_("li",[t._v("微信开放平台：\n"),_("ul",[_("li",[t._v("绑定 “希望跳转的App” 、 “公众号”")])])]),t._v(" "),_("li",[t._v("前端工程：\n"),_("ul",[_("li",[t._v("引入 "),_("code",[t._v("微信JS-SDK 1.6.0+")])]),t._v(" "),_("li",[t._v("配置 "),_("code",[t._v("wx.config")]),t._v("、"),_("code",[t._v("Appid")]),t._v("，生成签名")])])])])]),t._v(" "),_("h5",{attrs:{id:"组件封装"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#组件封装"}},[t._v("#")]),t._v(" 组件封装")]),t._v(" "),_("p",[t._v("采用 "),_("strong",[t._v("渐进式")]),t._v(" ：")]),t._v(" "),_("ul",[_("li",[t._v("因为 "),_("strong",[t._v("微信开放标签渲染时机比较晚")]),t._v("，且 “生成签名”、“绑定域名”阶段 都可能导致 "),_("strong",[t._v("渲染失败")])]),t._v(" "),_("li",[t._v("为了页面不发生重绘、进行错误兜底")]),t._v(" "),_("li",[t._v("按钮设为全透明，覆盖在按钮之上。（即使渲染失败，依然可以采用 原按钮 逻辑）")])]),t._v(" "),_("img",{attrs:{src:"https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7687321724/b56a/42be/ecd0/4eacd866d2a7c9e0312aa45497fdf946.png",width:"300px"}})])}),[],!1,null,null,null);v.default=e.exports}}]);