webpackJsonp([7],{QPVx:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Rk18"),n={data:function(){return{msg:[],value:""}},created:function(){this.getParams()},methods:{valueremove:function(){this.value=""},searchButton:function(){var t=this;Object(a.a)(this.value).then(function(e){t.msg=e.search_result_list})},getParams:function(){var t=this;Object(a.a)(this.$route.query.name).then(function(e){t.msg=e.search_result_list})}},watch:{$route:"getParams"}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"searchCont"},[s("div",{staticClass:"container",staticStyle:{margin:"0 auto"}},[s("p",{staticClass:"act"},[t._v("我的位置："),s("a",{attrs:{href:"/"}},[t._v("首页")]),t._v(" > "),s("span",[t._v(t._s(this.$route.name))])]),t._v(" "),s("div",{staticClass:"sea"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"search-key",attrs:{type:"text",placeholder:"搜索你喜欢的"},domProps:{value:t.value},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchButton(e)},input:function(e){e.target.composing||(t.value=e.target.value)}}}),s("input",{staticClass:"res",attrs:{type:"reset",value:""},on:{click:t.valueremove}})]),t._v(" "),s("h2",{staticClass:"search-result-tit"},[t._v("搜索结果")]),t._v(" "),s("div",{staticClass:"contView"},[s("ul",{staticClass:"ul-cont"},t._l(t.msg,function(e,a){return s("li",{staticClass:"list-cont"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://cdn.comicool.cn/"+e.url,expression:"'https://cdn.comicool.cn/'+k.url"}],staticClass:"content_poster"}),t._v(" "),s("h2",{staticClass:"content_title"},[t._v(t._s(e.title))]),t._v(" "),s("span",{staticClass:"content_subtitle"},[t._v(t._s(e.title_third))]),t._v(" "),s("p",{staticClass:"content_desc_lite"},[t._v(t._s(e.content_desc_lite2))])])}))])])])},staticRenderFns:[]};var c=s("VU/8")(n,i,!1,function(t){s("ZTDS")},null,null);e.default=c.exports},ZTDS:function(t,e){}});
//# sourceMappingURL=7.a909bee8168d7d9c1115.js.map