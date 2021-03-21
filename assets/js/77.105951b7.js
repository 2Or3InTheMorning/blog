(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{564:function(v,t,_){"use strict";_.r(t);var a=_(43),e=Object(a.a)({},(function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"个性化触达平台"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#个性化触达平台"}},[v._v("#")]),v._v(" 个性化触达平台")]),v._v(" "),_("p"),_("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#个性化触达平台"}},[v._v("个性化触达平台")]),_("ul",[_("li",[_("a",{attrs:{href:"#基本信息"}},[v._v("基本信息")])]),_("li",[_("a",{attrs:{href:"#职责"}},[v._v("职责")])]),_("li",[_("a",{attrs:{href:"#难点"}},[v._v("难点")])])])])])]),_("p"),v._v(" "),_("h2",{attrs:{id:"基本信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本信息"}},[v._v("#")]),v._v(" 基本信息")]),v._v(" "),_("ul",[_("li",[v._v("所用技术: React、Ant Design、Webpack、NOS、react-virtualized")]),v._v(" "),_("li",[v._v("描述: 供云音乐运营同事使用的用户流失召回管理平台，具有“重组件、轻⻚面”特点。")]),v._v(" "),_("li",[v._v("成果: 每日DAU贡献近30w;个性化用户触达运营工作耗时降低66%(从原来3天减少到1天);支持多产品多业务线的接入，且接入成本低;前端组件具有较好的复 用性和可维护性。")])]),v._v(" "),_("h2",{attrs:{id:"职责"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#职责"}},[v._v("#")]),v._v(" 职责")]),v._v(" "),_("ul",[_("li",[v._v("组件数据通信方案指定")]),v._v(" "),_("li",[v._v("通用组件封装；")]),v._v(" "),_("li",[v._v("大列表数据渲染性能调研/提升；")]),v._v(" "),_("li",[v._v("大附件上传(对接NOS)；")])]),v._v(" "),_("h2",{attrs:{id:"难点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#难点"}},[v._v("#")]),v._v(" 难点")]),v._v(" "),_("h3",{attrs:{id:"数据通信方案制定"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据通信方案制定"}},[v._v("#")]),v._v(" 数据通信方案制定")]),v._v(" "),_("ul",[_("li",[v._v("单向数据流")]),v._v(" "),_("li",[v._v("context\n"),_("ul",[_("li",[v._v("搭配HOC，原生React支持。容易上手")])])]),v._v(" "),_("li",[v._v("redux\n"),_("ul",[_("li",[v._v("相对较重，并且全局范围内需要共享的状态不多")])])])]),v._v(" "),_("h3",{attrs:{id:"通用组件封装"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#通用组件封装"}},[v._v("#")]),v._v(" 通用组件封装")]),v._v(" "),_("ul",[_("li",[v._v("状态逻辑（useTable、usePrevious）")]),v._v(" "),_("li",[v._v("工具函数：防抖函数、节流、深拷贝")])]),v._v(" "),_("h3",{attrs:{id:"大列表数据渲染性能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#大列表数据渲染性能"}},[v._v("#")]),v._v(" 大列表数据渲染性能")]),v._v(" "),_("p",[v._v("渲染 10000 条数据（不采用分页），页面渲染缓慢，且滚动卡顿。")]),v._v(" "),_("h4",{attrs:{id:"思路"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[v._v("#")]),v._v(" 思路")]),v._v(" "),_("ul",[_("li",[v._v("一次性加载，白屏时间长达 9s（通过 "),_("code",[v._v("chrome - showRender / Performance")]),v._v(" 发现 FPS 降到 30 以下）")]),v._v(" "),_("li",[_("code",[v._v("setTimeout")]),v._v(" 分批渲染：白屏缓解，但会出现闪屏")]),v._v(" "),_("li",[_("code",[v._v("requestAnimationFrame")]),v._v(" 分批渲染：白屏缓解，不会出现闪屏")]),v._v(" "),_("li",[v._v("调研 "),_("code",[v._v("react-virtualized")]),v._v(" 和 "),_("code",[v._v("react-tiny-virtual-list")])])]),v._v(" "),_("p",[v._v("最终采用 "),_("code",[v._v("react-tiny-vitual-list")]),v._v(" （轻量，简单）。")]),v._v(" "),_("blockquote",[_("p",[v._v("虽然 "),_("code",[v._v("react-virtualized")]),v._v(" 支持动态高度，并且 Antd 也推荐使用；但对于此业务场景不匹配。")])]),v._v(" "),_("h4",{attrs:{id:"react-tiny-virtual-list"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#react-tiny-virtual-list"}},[v._v("#")]),v._v(" react-tiny-virtual-list")]),v._v(" "),_("p",[_("code",[v._v("react-tiny-virtual-list")]),v._v(" 实现了 “虚拟列表”，只渲染 可视区域内 的一部分列表元素。")]),v._v(" "),_("p",[v._v("原理：")]),v._v(" "),_("ol",[_("li",[v._v("根据 滚动容器 的 "),_("code",[v._v("scrollTop")]),v._v(" 先计算出 可视区域的第一个元素 "),_("code",[v._v("start")]),v._v(" 值")]),v._v(" "),_("li",[v._v("根据 "),_("code",[v._v("start")]),v._v(" 对应元素的 "),_("code",[v._v("offset")]),v._v(" 以及 容器元素的大小，计算出 可视区域内 最后一个可见元素 的索引（即 "),_("code",[v._v("end")]),v._v("）")]),v._v(" "),_("li",[v._v("根据 "),_("code",[v._v("start")]),v._v(" 、 "),_("code",[v._v("end")]),v._v(" 来改变 可视区域 需要渲染的内容。")])]),v._v(" "),_("h3",{attrs:{id:"大附件上传-对接nos"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#大附件上传-对接nos"}},[v._v("#")]),v._v(" 大附件上传（对接NOS）")]),v._v(" "),_("p",[v._v("基于 Antd 的 "),_("code",[v._v("Upload")]),v._v(" 组件，实现的 “大附件分片上传”。")]),v._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),_("p",[v._v("使用到的 服务端Api：")]),v._v(" "),_("ul",[_("li",[v._v("multiUploadInit：初始化，获取 "),_("code",[v._v("nosKey")]),v._v("、"),_("code",[v._v("uploadId")])]),v._v(" "),_("li",[v._v("multiUpload：分片上传")]),v._v(" "),_("li",[v._v("multiUploadComplete：结束上传")])])]),v._v(" "),_("h4",{attrs:{id:"思路-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#思路-2"}},[v._v("#")]),v._v(" 思路")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("指定 "),_("code",[v._v("Upload")]),v._v(" 组件的 "),_("code",[v._v("customRequest")]),v._v(" 属性（自定义上传行为）")])]),v._v(" "),_("li",[_("p",[v._v("组装“分片数组”：")]),v._v(" "),_("ul",[_("li",[v._v("确定分片的个数、每片大小")]),v._v(" "),_("li",[v._v("将 file 转成 "),_("code",[v._v("blob对象")]),v._v(" ，通过 "),_("code",[v._v("blob.slice()")]),v._v(" 切片")]),v._v(" "),_("li",[v._v("每片为一个 "),_("code",[v._v("formData")]),v._v(" 对象，存入“分片数组”")])])]),v._v(" "),_("li",[_("p",[v._v("根据 “分片数组”，生成 “promise队列”，并传入 Promise.all")])]),v._v(" "),_("li",[_("p",[v._v("当 Promise.all 状态改变时，调用结束上传")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);