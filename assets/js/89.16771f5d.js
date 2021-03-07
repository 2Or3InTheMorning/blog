(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{579:function(s,t,a){"use strict";a.r(t);var n=a(43),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"rn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rn"}},[s._v("#")]),s._v(" RN")]),s._v(" "),a("blockquote",[a("p",[s._v("RN是跨平台移动端开发框架。")])]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#rn"}},[s._v("RN")]),a("ul",[a("li",[a("a",{attrs:{href:"#rn的优点"}},[s._v("RN的优点")])]),a("li",[a("a",{attrs:{href:"#react-native-容器生命周期"}},[s._v("React Native 容器生命周期")])]),a("li",[a("a",{attrs:{href:"#获取设备屏幕宽高"}},[s._v("获取设备屏幕宽高")])]),a("li",[a("a",{attrs:{href:"#android-获取new-date-转换时间提示invalid-date"}},[s._v("(Android)获取new Date()转换时间提示Invalid Date")])]),a("li",[a("a",{attrs:{href:"#rn安卓的空数组为null"}},[s._v("RN安卓的空数组为null")])]),a("li",[a("a",{attrs:{href:"#字体相关优化处理"}},[s._v("字体相关优化处理")])]),a("li",[a("a",{attrs:{href:"#工程搭建问题"}},[s._v("工程搭建问题")])])])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"rn的优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rn的优点"}},[s._v("#")]),s._v(" RN的优点")]),s._v(" "),a("ol",[a("li",[s._v("跨平台兼容性\n"),a("ul",[a("li",[s._v("编写一套代码，部署到 iOS、Android")])])]),s._v(" "),a("li",[s._v("用户体验上，与 “原生应用” 几乎相同\n"),a("ul",[a("li",[s._v("最终产出是真正的移动应用")])])]),s._v(" "),a("li",[s._v("学习成本低\n"),a("ul",[a("li",[s._v("React、CSS即可开发")])])])]),s._v(" "),a("h3",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[s._v("#")]),s._v(" 缺点")]),s._v(" "),a("p",[s._v("对于 “复杂应用” 的开发效率较低，甚至需要 “原生开发” 来实现。")]),s._v(" "),a("h2",{attrs:{id:"react-native-容器生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-native-容器生命周期"}},[s._v("#")]),s._v(" React Native 容器生命周期")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * React Native 容器生命周期\n * - 容器维度（非路由维度）\n */")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    Platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    NativeModules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    NativeEventEmitter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    DeviceEventEmitter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'react-native'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LIFE_STATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    WillAppear"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    DidAppear"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    WillDisappear"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    DidDisappear"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("onLifeStateChange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" NMRCTRootViewLifeCircleModule "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" NativeModules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" LifeEventEmitter "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        ios"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NativeEventEmitter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("NMRCTRootViewLifeCircleModule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        android"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" DeviceEventEmitter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" LifeEventEmitter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'onStateChange'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" state "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("p",[s._v("业务侧使用方式:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" onLifeStateChange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LIFE_STATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./life-state.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("App")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onLifeChange")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("state")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 曝光回调")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("state "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LIFE_STATE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DidAppear'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 曝光执行 */")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("onLifeStateChange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("onLifeChange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"获取设备屏幕宽高"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取设备屏幕宽高"}},[s._v("#")]),s._v(" 获取设备屏幕宽高")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Dimensions "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"react-native"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" height "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Dimensions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'window'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"android-获取new-date-转换时间提示invalid-date"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-获取new-date-转换时间提示invalid-date"}},[s._v("#")]),s._v(" (Android)获取new Date()转换时间提示Invalid Date")]),s._v(" "),a("p",[s._v("传入的"),a("code",[s._v("timestamp")]),s._v("只能为数字，不能为字符串。")]),s._v(" "),a("h2",{attrs:{id:"rn安卓的空数组为null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rn安卓的空数组为null"}},[s._v("#")]),s._v(" RN安卓的空数组为null")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 否则为null，没有length数据")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"字体相关优化处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字体相关优化处理"}},[s._v("#")]),s._v(" 字体相关优化处理")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// text.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Text "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'react-native'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" setCustomText "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'react-native-global-props'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" isAndroid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@utils/env'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 禁用系统字体缩放")]),s._v("\nText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("defaultProps "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("defaultProps "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("defaultProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("allowFontScaling "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 解决小米兰亭 Pro 字体问题：https://www.jianshu.com/p/131470cfc799")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// iOS 这么写会 crash，所以要判断一下环境")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("isAndroid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setCustomText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        style"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            fontFamily"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h2",{attrs:{id:"工程搭建问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工程搭建问题"}},[s._v("#")]),s._v(" 工程搭建问题")]),s._v(" "),a("h3",{attrs:{id:"提示watchman-isn-t-running"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提示watchman-isn-t-running"}},[s._v("#")]),s._v(" 提示watchman isn't running")]),s._v(" "),a("blockquote",[a("p",[s._v("React Native uses watchman to detect when you've made code changes and then automatically build and push the update your device without you needing to manually refresh it.")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5770133057/c3c6/fa3b/4737/669db5956eafae58b553d624198b05d7.png",alt:"alt"}})]),s._v(" "),a("p",[s._v("方法一：（电脑内存问题）")]),s._v(" "),a("ul",[a("li",[s._v("用同事电脑直接启动，观察是否存在"),a("code",[s._v("pending")]),s._v("问题")])]),s._v(" "),a("p",[s._v("方法二：（watchman的缓存数上限问题）")]),s._v(" "),a("blockquote",[a("p",[s._v("保持"),a("code",[s._v("metro.config.js")]),s._v("下的"),a("code",[s._v("watchFolders")]),s._v("的"),a("code",[s._v("packages")])])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("watchmanconfig")]),s._v("的"),a("code",[s._v("content-hash-max-items")]),s._v(" "),a("ul",[a("li",[s._v("在"),a("code",[s._v("packages")]),s._v("下执行："),a("code",[s._v("find /Users/coolman/project/react-native-app | wc -l")]),s._v("查找文件数量")]),s._v(" "),a("li",[s._v("https://github.com/facebook/watchman/issues/731")]),s._v(" "),a("li",[s._v("记得将内存清理")])])])]),s._v(" "),a("p",[s._v("不行再尝试手动指定监听文件夹：")]),s._v(" "),a("ul",[a("li",[s._v("在 "),a("code",[s._v("metro.config.js")]),s._v("的"),a("code",[s._v("watchFolders")]),s._v("手动加"),a("code",[s._v("-core、-rn、-h5")]),s._v("或"),a("code",[s._v("-rn、-h5")])])]),s._v(" "),a("ol",[a("li",[s._v("Clear watchman watches: "),a("code",[s._v("watchman watch-del-all")]),s._v(".")]),s._v(" "),a("li",[s._v("Delete the "),a("code",[s._v("node_modules")]),s._v(" folder: "),a("code",[s._v("rm -rf node_modules && npm install")]),s._v(".")]),s._v(" "),a("li",[s._v("Reset Metro Bundler cache: "),a("code",[s._v("rm -rf /tmp/metro-bundler-cache-*")]),s._v(" or "),a("code",[s._v("npm start -- --reset-cache")]),s._v(".")]),s._v(" "),a("li",[s._v("Remove haste cache: "),a("code",[s._v("rm -rf /tmp/haste-map-react-native-packager-*")]),s._v(".\nat ModuleResolver.resolveDependency (/Users/heshiyu/pros/rpc-audio/packages/rpc-audio-rn/node_modules/metro/src/node-haste/DependencyGraph/ModuleResolution.js:183:15)")])]),s._v(" "),a("h3",{attrs:{id:"package-json内的main字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-json内的main字段"}},[s._v("#")]),s._v(" package.json内的main字段")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("error: bundling failed: Error: While trying to resolve module `@music/rpc-audio-rn` from file `/Users/heshiyu/pros/rpc-audio/packages/rpc-audio-demo/src/pages/home/index.js`, the package `/Users/heshiyu/pros/rpc-audio/packages/rpc-audio-rn/package.json` was successfully found. However, this package itself specifies a `main` module field that could not be resolved (`/Users/heshiyu/pros/rpc-audio/packages/rpc-audio-rn/dist/index.js`. Indeed, none of these files exist:\n\n  * `/Users/heshiyu/pros/rpc-audio/packages/rpc-audio-rn/dist/index.js(.native||.ios.js|.native.js|.js|.ios.json|.native.json|.json|.ios.ts|.native.ts|.ts|.ios.tsx|.native.tsx|.tsx)`\n  * `/Users/heshiyu/pros/rpc-audio/packages/rpc-audio-rn/dist/index.js/index(.native||.ios.js|.native.js|.js|.ios.json|.native.json|.json|.ios.ts|.native.ts|.ts|.ios.tsx|.native.tsx|.tsx)`\n    at ResolutionRequest.resolveDependency (/Users/heshiyu/pros/rpc-audio/packages/rpc-audio-demo/node_modules/metro/src/node-haste/DependencyGraph/ResolutionRequest.js:65:15)\n    at DependencyGraph.resolveDependency (/Users/heshiyu/pros/rpc-audio/packages/rpc-audio-demo/node_modules/metro/src/node-haste/DependencyGraph.js:283:16)\n    at Object.resolve (/Users/heshiyu/pros/rpc-audio/packages/rpc-audio-demo/node_modules/metro/src/lib/transformHelpers.js:264:42)\n    at dependencies.map.result (/Users/heshiyu/pros/rpc-audio/packages/rpc-audio-demo/node_modules/metro/src/DeltaBundler/traverseDependencies.js:399:31)\n    at Array.map (<anonymous>)\n    at resolveDependencies (/Users/heshiyu/pros/rpc-audio/packages/rpc-audio-demo/node_modules/metro/src/DeltaBundler/traverseDependencies.js:396:18)\n    at /Users/heshiyu/pros/rpc-audio/packages/rpc-audio-demo/node_modules/metro/src/DeltaBundler/traverseDependencies.js:269:33\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/heshiyu/pros/rpc-audio/packages/rpc-audio-demo/node_modules/metro/src/DeltaBundler/traverseDependencies.js:87:24)\n    at _next (/Users/heshiyu/pros/rpc-audio/packages/rpc-audio-demo/node_modules/metro/src/DeltaBundler/traverseDependencies.js:107:9)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"修改了-babelrc配置不生效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改了-babelrc配置不生效"}},[s._v("#")]),s._v(" 修改了.babelrc配置不生效")]),s._v(" "),a("p",[s._v("需要清除RN缓存")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" start --reset-cache\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);