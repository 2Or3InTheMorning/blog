(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{625:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"插入排序-不稳定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插入排序-不稳定"}},[t._v("#")]),t._v(" 插入排序（不稳定）")]),t._v(" "),a("blockquote",[a("p",[t._v("时间复杂度：O(n²)")])]),t._v(" "),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),a("p",[t._v("不断通过构建 "),a("strong",[t._v("有序序列")]),t._v("：对于 未排序数据，在 已排序序列 中 "),a("strong",[t._v("从后向前 扫描，找到相应位置并插入")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"大致步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大致步骤"}},[t._v("#")]),t._v(" 大致步骤")]),t._v(" "),a("ol",[a("li",[t._v("从第一个元素开始（第二元素可以认为已被排序）")]),t._v(" "),a("li",[t._v("取出下一个元素，在 已排序序列中 从后向前扫描")]),t._v(" "),a("li",[t._v("如果 “已排序的该元素” 大于 “新元素”，将该元素移到下一个位置")]),t._v(" "),a("li",[t._v("重复步骤3，直到找到 已排序的元素 小于或等于 新元素的位置")]),t._v(" "),a("li",[t._v("将新元素插到该位置后，插入完成")]),t._v(" "),a("li",[t._v("继续取下一个元素（重复 2 ~ 5）")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("insertSort")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("list")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// prevIdx 表示 已排序序列的尾指针")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" prevIdx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// curVal 表示 当前待排元素值")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" curVal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        prevIdx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        curVal "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prevIdx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" curVal "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prevIdx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果 “已排序的该元素” 大于 “新元素”，将该元素移到下一个位置")]),t._v("\n            list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prevIdx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prevIdx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            prevIdx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 直到找到 已排序元素 小于或等于 新元素 的位置，将新元素插到该 “位置后”")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意此处为 prevIdx + 1，因为就算不移动，也是要插入到 prevIdx 的后一位")]),t._v("\n        list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prevIdx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curVal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br")])]),a("h2",{attrs:{id:"具体步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体步骤"}},[t._v("#")]),t._v(" 具体步骤")]),t._v(" "),a("p",[t._v("例子：[1, 9, 7, 6]")]),t._v(" "),a("ul",[a("li",[t._v("一共进行"),a("code",[t._v("3")]),t._v("轮，当前"),a("code",[t._v("第1轮")])]),t._v(" "),a("li",[t._v("有序组是[1]，无序组是[9, 7, 6]（不是真实数组）")]),t._v(" "),a("li",[t._v("取无序组的第一位(9)，赋值temp（9），开始进行排序，此时数组[1, 9, 7, 6]，temp=9")]),t._v(" "),a("li",[t._v("取"),a("code",[t._v("有序组")]),t._v("的最后一位（1）的下标，赋值j，（j=0）")]),t._v(" "),a("li",[t._v("取"),a("code",[t._v("有序组")]),t._v("的最后一位（1），它没有比temp（9）大，不换，此时数组[1, 9, 7, 6]，temp=9，j=0")]),t._v(" "),a("li",[t._v("因为到达"),a("code",[t._v("有序组")]),t._v("顶端（j=0），将temp（9）放到"),a("code",[t._v("有序组（j+1）位")]),t._v("，此时数组[1, 9, 7, 6]，进行"),a("code",[t._v("第2轮")])]),t._v(" "),a("li",[t._v("有序组是[1, 9]，无序组是[7, 6]（不是真实数组）")]),t._v(" "),a("li",[t._v("取无序组的第一位(7)，赋值temp（7），开始进行排序，此时数组[1, 9, 7, 6]，temp=7")]),t._v(" "),a("li",[t._v("取"),a("code",[t._v("有序组")]),t._v("的最后一位（9）的下标，赋值j，（j=1）")]),t._v(" "),a("li",[a("code",[t._v("有序组")]),t._v("最后一位（9）比temp（7）大，将"),a("code",[t._v("有序组")]),t._v("该位置的数覆盖到下一位，此时数组[1, 9, 9, 6]，temp=7，j=1")]),t._v(" "),a("li",[t._v("再往前看是否有更适合的地方，j--，（j=0）")]),t._v(" "),a("li",[a("code",[t._v("有序组")]),t._v("第0位（1），它没有比temp（7）大，不换，此时数组[1, 9, 9, 6]，temp=7，j=0")]),t._v(" "),a("li",[t._v("因为到达"),a("code",[t._v("有序组")]),t._v("顶端（j=0），将temp（7）放到"),a("code",[t._v("有序组（j+1）位")]),t._v("，此时数组[1, 7, 9, 6]，进行"),a("code",[t._v("第3轮")])]),t._v(" "),a("li",[t._v("有序组是[1, 7, 9]，无序组是[6]（不是真实数组）")]),t._v(" "),a("li",[t._v("取无序组的第一位(6)，赋值temp（6），开始进行排序，此时数组[1, 7, 9, 6]，temp=6")]),t._v(" "),a("li",[t._v("取"),a("code",[t._v("有序组")]),t._v("的最后一位（9）的下标，赋值j，（j=2）")]),t._v(" "),a("li",[a("code",[t._v("有序组")]),t._v("最后一位（9）比temp（6）大，将"),a("code",[t._v("有序组")]),t._v("该位置的数覆盖到下一位，此时数组[1, 7, 9, 9]，temp=6，j=2")]),t._v(" "),a("li",[t._v("再往前看是否有更适合的地方，j--，（j=1）")]),t._v(" "),a("li",[a("code",[t._v("有序组")]),t._v("第1位（7）比temp（6）大，将"),a("code",[t._v("有序组")]),t._v("该位置的数覆盖到下一位，此时数组[1, 7, 7, 9]，temp=6，j=1")]),t._v(" "),a("li",[t._v("再往前看是否有更适合的地方，j--，（j=0）")]),t._v(" "),a("li",[a("code",[t._v("有序组")]),t._v("第0位（1），它没有比temp（6）大，不换，此时数组[1, 7, 7, 9]，temp=6，j=0")]),t._v(" "),a("li",[t._v("因为到达"),a("code",[t._v("有序组")]),t._v("顶端（j=0），将temp（6）放到"),a("code",[t._v("有序组（j+1）位")]),t._v("，此时数组[1, 6, 7, 9]，结束排序。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);