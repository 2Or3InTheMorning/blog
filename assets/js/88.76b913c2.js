(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{486:function(s,t,a){"use strict";a.r(t);var e=a(29),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"webpack5笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack5笔记"}},[s._v("#")]),s._v(" webpack5笔记")]),s._v(" "),a("h2",{attrs:{id:"重点内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重点内容"}},[s._v("#")]),s._v(" 重点内容")]),s._v(" "),a("ul",[a("li",[s._v("通过持久缓存提高构建性能")]),s._v(" "),a("li",[s._v("Tree Shaking支持嵌套、Commonjs")]),s._v(" "),a("li",[s._v("Module Federation")]),s._v(" "),a("li",[s._v("改善长期缓存算法")])]),s._v(" "),a("h3",{attrs:{id:"持久缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#持久缓存"}},[s._v("#")]),s._v(" 持久缓存")]),s._v(" "),a("p",[s._v("以前现象：针对大部分"),a("code",[s._v("node_modules")]),s._v("以“Hash处理并加盖时间戳”的形式去构建的代价昂贵：会大大降低webpack的执行速度。")]),s._v(" "),a("p",[s._v("解决：跳过"),a("code",[s._v("node_modules")]),s._v("，并以npm包的name、version作为数据源。")]),s._v(" "),a("p",[s._v("提供缓存类型：文件系统（filesystem）")]),s._v(" "),a("blockquote",[a("p",[s._v("默认情况下"),a("strong",[s._v("不会开启")])])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  cache"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1. Set cache type to filesystem")]),s._v("\n    type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'filesystem'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n    buildDependencies"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2. Add your config as buildDependency to get cache invalidation on config change")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当配置文件（或配置文件中通过require依赖的任何内容）发生变化时，缓存会失效")]),s._v("\n      config"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("__filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3. If you have other things the build depends on you can add them here")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Note that webpack, loaders and all modules referenced from your config are automatically added")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"tree-shaking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking"}},[s._v("#")]),s._v(" Tree Shaking")]),s._v(" "),a("p",[s._v("嵌套Tree Shaking：可以清除未使用的导出")]),s._v(" "),a("p",[s._v("允许消除未使用的CommonJs导出")]),s._v(" "),a("blockquote",[a("p",[s._v("支持从"),a("code",[s._v("require()")]),s._v("调用中跟踪引用的导出名称")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("“副作用”：")]),s._v(" "),a("p",[s._v("手动标记：在"),a("code",[s._v("package.json")]),s._v("中的"),a("code",[s._v("sideEffects")]),s._v("标记为“无副作用”")]),s._v(" "),a("p",[s._v("自动标记：webpack5对源代码进行静态分析，自动将模块标记为“无副作用”")])]),s._v(" "),a("h3",{attrs:{id:"module-federation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-federation"}},[s._v("#")]),s._v(" Module Federation")]),s._v(" "),a("p",[s._v("可以依赖一个远程模块（可视作一个微前端独立模块）。")]),s._v(" "),a("p",[s._v("原理：宿主系统通过配置名称来引用远程模块，同时在编译阶段宿主系统不需要了解远程模块，仅仅在运行时通过加载"),a("strong",[s._v("远程模块的入口文件")]),s._v("来实现。")]),s._v(" "),a("p",[s._v("模块的特点：")]),s._v(" "),a("ul",[a("li",[s._v("模块之间可以声明公共的依赖库")])]),s._v(" "),a("blockquote",[a("p",[s._v("避免独立模块间的依赖冗余/冲突")])]),s._v(" "),a("ul",[a("li",[s._v("每个独立模块会在运行时生效，不影响编译时")])]),s._v(" "),a("p",[s._v("扩展阅读："),a("a",{attrs:{href:"https://github.com/mzgoddard/hard-source-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[s._v("hard-source-webpack-plugin"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"改善长期缓存算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#改善长期缓存算法"}},[s._v("#")]),s._v(" 改善长期缓存算法")]),s._v(" "),a("p",[s._v("针对"),a("code",[s._v("moduleId")]),s._v("、"),a("code",[s._v("chunkId")]),s._v("的计算方式进行了优化，使它们最终生成3-4位的数字id，实现长期缓存。")]),s._v(" "),a("blockquote",[a("p",[s._v("moduleId 根据上下文模块路径，chunkId 根据 chunk 内容计算")])])])}),[],!1,null,null,null);t.default=n.exports}}]);