(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/txl/txlRY"],{"08bb":function(t,e,n){},"475d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(n("bfb1"));function s(t){return t&&t.__esModule?t:{default:t}}var a={components:{service:i.default},data:function(){return{title:"list-with-collapses",lists:[{DEPARTMENTID:"1",USERNAME:"佛山市",USERID:"佛山市",DEPTNAME:"佛山市",DEPTUSERBH:1,PHONE:13266390572,IMG:"https://IMG-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png"}]}},onLoad:function(t){console.log("打印出上个页面传递的参数"),console.log(t),this.lists=JSON.parse(t.res)},methods:{tabonclick:function(e,n){t.navigateTo({url:"../user/remsg?read=1&departmentid="+e+"&userid="+n})}}};e.default=a}).call(this,n("649d")["default"])},5571:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"page"},[n("view",{staticClass:"content"},[n("view",{},t._l(t.lists,function(e,i){return n("view",{key:i,staticClass:"v_for",class:i===t.lists.length-1?"uni-list-cell-last":""},[n("view",{staticClass:"uni-list-cell-navigate  uni-navigate-right",attrs:{"hover-class":"uni-list-cell-hover",eventid:"08c2edbb-0-"+i},on:{click:function(n){t.tabonclick(e.DEPARTMENTID,e.USERID)}}},[n("view",{staticClass:"v_left"},[n("view",{staticClass:"IMG"},[n("image",{staticClass:"IMG",attrs:{src:e.IMG}})]),n("view",{staticClass:"title"},[t._v(t._s(e.USERNAME))])]),n("view",{staticClass:"PHONE"},[t._v(t._s(e.PHONE))])])])}))])])},s=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},"59d2":function(t,e,n){"use strict";var i=n("08bb"),s=n.n(i);s.a},"9ac3":function(t,e,n){"use strict";n.r(e);var i=n("475d"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=s.a},a611:function(t,e,n){"use strict";n.r(e);var i=n("5571"),s=n("9ac3");for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);n("59d2");var l=n("2877"),c=Object(l["a"])(s["default"],i["a"],i["b"],!1,null,null,null);c.options.__file="txlRY.vue",e["default"]=c.exports},d00a:function(t,e,n){"use strict";n("2393");var i=a(n("b0ce")),s=a(n("a611"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))}},[["d00a","common/runtime","common/vendor"]]]);