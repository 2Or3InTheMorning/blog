(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{449:function(t,s,a){"use strict";a.r(s);var n=a(29),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"react前端工程脚手架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react前端工程脚手架"}},[t._v("#")]),t._v(" React前端工程脚手架")]),t._v(" "),a("blockquote",[a("p",[t._v("主要技术： react(16.9.0) + antd(3.23.3) + webpack(4.39.1) + react-router-dom(5.0.1) + react-loadable(5.5.0)")])]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#react前端工程脚手架"}},[t._v("React前端工程脚手架")]),a("ul",[a("li",[a("a",{attrs:{href:"#基本属性"}},[t._v("基本属性")])]),a("li",[a("a",{attrs:{href:"#npm包的放置策略"}},[t._v("npm包的放置策略")])]),a("li",[a("a",{attrs:{href:"#有关happypack的使用"}},[t._v("有关Happypack的使用")])]),a("li",[a("a",{attrs:{href:"#有关dll的使用（可引入类似auto-dll的plugin进行改进）"}},[t._v("有关DLL的使用（可引入类似auto dll的plugin进行改进）")])]),a("li",[a("a",{attrs:{href:"#有关高速缓存"}},[t._v("有关高速缓存")])]),a("li",[a("a",{attrs:{href:"#有关路由自动化渲染"}},[t._v("有关路由自动化渲染")])]),a("li",[a("a",{attrs:{href:"#链接"}},[t._v("链接")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"基本属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本属性"}},[t._v("#")]),t._v(" 基本属性")]),t._v(" "),a("p",[a("strong",[t._v("种类：")]),t._v(" 目前一共有3套脚手架（单页js、单页ts、多页js），底层配置大体相同。")]),t._v(" "),a("p",[a("strong",[t._v("支持工具：")])]),t._v(" "),a("ul",[a("li",[t._v("React v16.9.0")]),t._v(" "),a("li",[t._v("Antd v3.23.1")]),t._v(" "),a("li",[t._v("Webpack v4.39.1")]),t._v(" "),a("li",[t._v("ESLint & Stylelint & Prettier")]),t._v(" "),a("li",[t._v("Husky")]),t._v(" "),a("li",[t._v("HappyPack")]),t._v(" "),a("li",[t._v("DLL 动态链接库")]),t._v(" "),a("li",[t._v("CDN下载依赖（lodash、moment）")]),t._v(" "),a("li",[t._v("react-router v4（BrowserRouter）")])]),t._v(" "),a("h2",{attrs:{id:"npm包的放置策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm包的放置策略"}},[t._v("#")]),t._v(" npm包的放置策略")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("方式")]),t._v(" "),a("th",[t._v("DLL")]),t._v(" "),a("th",[t._v("CDN")]),t._v(" "),a("th",[t._v("webpack打包")]),t._v(" "),a("th",[t._v("高速缓存")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("开发")]),t._v(" "),a("td",[t._v("react、react-router-dom、react-dom、antd")]),t._v(" "),a("td",[t._v("lodash、moment")]),t._v(" "),a("td",[t._v("/")]),t._v(" "),a("td",[t._v("✔")])]),t._v(" "),a("tr",[a("td",[t._v("打包")]),t._v(" "),a("td",[t._v("/")]),t._v(" "),a("td",[t._v("lodash、moment")]),t._v(" "),a("td",[t._v("react、react-router-dom、react-dom、antd")]),t._v(" "),a("td",[t._v("✘")])])])]),t._v(" "),a("h3",{attrs:{id:"q1：为什么antd在开发时放dll、打包时放webpack、不考虑cdn？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q1：为什么antd在开发时放dll、打包时放webpack、不考虑cdn？"}},[t._v("#")]),t._v(" Q1：为什么antd在开发时放DLL、打包时放webpack、不考虑CDN？")]),t._v(" "),a("ul",[a("li",[t._v("开发时，通过DLL会提前完整构建，提高编译速度")]),t._v(" "),a("li",[t._v("打包时，可以利用 tree shaking，减少打包体积")]),t._v(" "),a("li",[t._v("CDN 需要 externals。若通过 Babel “按需引入”，最终 externals 效果会有差异；并且CDN体积较大（400kb），不考虑CDN")])]),t._v(" "),a("h3",{attrs:{id:"q2：详细放置策略？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q2：详细放置策略？"}},[t._v("#")]),t._v(" Q2：详细放置策略？")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("DLL：将第三方库提前完整构建，体积较大，且不可tree shaking")]),t._v(" "),a("ul",[a("li",[t._v("推荐：仅在 开发阶段 使用DLL")])])]),t._v(" "),a("li",[a("p",[t._v("CDN：和DLL类似，但需额外 externals")]),t._v(" "),a("ul",[a("li",[t._v("externals 对于 “设置了按需加载”的 antd 不起作用，需额外 externals 掉 antd 里的某种组件")]),t._v(" "),a("li",[t._v("推荐：不影响主程序、体积较小的第三方库可使用（如：lodash、moment）")])])]),t._v(" "),a("li",[a("p",[t._v("webpack打包：参与tree shaking、JS代码压缩")]),t._v(" "),a("ul",[a("li",[t._v("推荐：生产阶段 尽量使用webpack打包，体积较小")])])])]),t._v(" "),a("h2",{attrs:{id:"有关happypack的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有关happypack的使用"}},[t._v("#")]),t._v(" 有关Happypack的使用")]),t._v(" "),a("p",[t._v("目前在开发环境（webpack.dev.js）使用了 happypack 多线程处理，来加快编译速度。")]),t._v(" "),a("p",[t._v("声明 线程数 为最大利用数：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// happypack线程池（个数为操作系统cpu的数量）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" happyThreadPool "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HappyPack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ThreadPool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" size"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cpus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("目前只针对 eslint-loader、babel-loader、css-loader 这三类loader进行了额外线程处理。")]),t._v(" "),a("h2",{attrs:{id:"有关dll的使用（可引入类似auto-dll的plugin进行改进）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有关dll的使用（可引入类似auto-dll的plugin进行改进）"}},[t._v("#")]),t._v(" 有关DLL的使用（可引入类似auto dll的plugin进行改进）")]),t._v(" "),a("p",[t._v("1、声明DLL打包范围（config/dll.config.js）")]),t._v(" "),a("ul",[a("li",[t._v("目前只针对 react、antd 进行了DLL打包")]),t._v(" "),a("li",[t._v("采用了 devtool: 'eval-cheap-source-map' 的 sourcemap 方式")])]),t._v(" "),a("p",[t._v("2、运行 yarn run dll，可在 根目录下vendor 生成 DLL 文件")]),t._v(" "),a("p",[t._v("3、在 webpack.dev.js 的 plugins，处理与 webpack 的关联")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* DLL相关（开始） */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将 DLL 和 webpack进行关联")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DllReferencePlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    manifest"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("paths"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vendor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react.manifest.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DllReferencePlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    manifest"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("paths"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vendor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'antd.manifest.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* DLL相关（结束） */")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("4、在 public/index.html 下，声明 dll 的插槽变量")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("<%= htmlWebpackPlugin.options.dll.react %>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("<%= htmlWebpackPlugin.options.dll.antd %>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("5、在 webpack.base.js 的 plugins 利用 HtmlWebpackPlugin 插件，针对 dll 插槽变量 进行赋值")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HtmlWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n        dll"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            react"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("isProduction "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./vendor/react.dll.js'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            antd"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("isProduction "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./vendor/antd.dll.js'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("6、运行 yarn run dll 即可完成")]),t._v(" "),a("blockquote",[a("p",[t._v("也可以通过组合指令 yarn run dev，来实现打包 DLL 后立即启动项目。")])]),t._v(" "),a("h2",{attrs:{id:"有关高速缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有关高速缓存"}},[t._v("#")]),t._v(" 有关高速缓存")]),t._v(" "),a("p",[t._v("通过高速缓存可以节省90%的编译时间")]),t._v(" "),a("blockquote",[a("p",[t._v("一般启动项目10s内，热编译1s内")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HardSourceWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cacheDirectory声明缓存存放的文件夹。默认情况下，将缓存存储在build/node_modules下的目录中")]),t._v("\n    cacheDirectory"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node_modules/.cache/hard-source/[confighash]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    recordsPath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node_modules/.cache/hard-source/[confighash]/records.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// configHash在启动webpack实例时转换webpack配置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 并针对cacheDirectory，为不同的webpack配置来构建不同的缓存")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("configHash")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("webpackConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// node-object-hash on npm can be used to build this.")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node-object-hash'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sort"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("webpackConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果Hash与之前构建的不同，会使用新的缓存")]),t._v("\n    environmentHash"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        root"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cwd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        directories"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        files"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package-lock.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yarn.lock'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自动清除过期的、体积大的缓存")]),t._v("\n    cachePrune"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置缓存的最大有效期（2d）")]),t._v("\n        maxAge"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置缓存的最大体积（50M）")]),t._v("\n        sizeThreshold"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br")])]),a("p",[t._v("但是要注意：因为是读取 cache 的编译内容，所以一般会在 第二次启动时 高速缓存才会生效")]),t._v(" "),a("p",[t._v("启动方法：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("yarn start:cache\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"有关路由自动化渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有关路由自动化渲染"}},[t._v("#")]),t._v(" 有关路由自动化渲染")]),t._v(" "),a("h3",{attrs:{id:"使用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[t._v("#")]),t._v(" 使用方式")]),t._v(" "),a("p",[t._v("1、定义路由表")]),t._v(" "),a("p",[t._v("2、需要渲染子路由时，在父路由使用 "),a("code",[t._v("<Routes {...props} />")])]),t._v(" "),a("h3",{attrs:{id:"优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),a("ul",[a("li",[t._v("支持路由组件的多种配置方式\n"),a("ul",[a("li",[t._v("导入方式：动态导入、静态导入")]),t._v(" "),a("li",[t._v("响应式：pc、mobile")])])]),t._v(" "),a("li",[t._v("支持路由表的统一管理&维护")]),t._v(" "),a("li",[t._v("提供工具函数\n"),a("ul",[a("li",[t._v("getRouteInfo：根据props，查找指定路由及其父路由信息；\n"),a("ul",[a("li",[t._v("可用于：渲染当前路由的同级tabList")])])]),t._v(" "),a("li",[t._v("getRouteLine：根据props，查找当前路由在路由表中的层级关系\n"),a("ul",[a("li",[t._v("可用于：生成当前路由的面包屑路径；")])])])])])]),t._v(" "),a("h3",{attrs:{id:"扩展性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展性"}},[t._v("#")]),t._v(" 扩展性")]),t._v(" "),a("p",[t._v("可以针对项目对 权限设置 的要求，适当搭配使用。")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/other/output/fruit/template/DEMO.html"}},[t._v("查看详情")])],1),t._v(" "),a("h2",{attrs:{id:"链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/netease-frontend-institute/ehr-react-template/tree/single/js'",target:"_blank",rel:"noopener noreferrer"}},[t._v("单页项目（react16.9 + webpack4）"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/netease-frontend-institute/ehr-react-template/tree/single/ts'",target:"_blank",rel:"noopener noreferrer"}},[t._v("单页项目（react16.9 + webpack4 + Typescript）"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/netease-frontend-institute/ehr-react-template/tree/multiple/js'",target:"_blank",rel:"noopener noreferrer"}},[t._v("多页项目（react16.9 + webpack4）"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"./react-project-note"}},[t._v("搭建踩坑笔记")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);