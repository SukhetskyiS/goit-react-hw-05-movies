"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[964],{776:function(r,t,n){n.d(t,{DI:function(){return p},G2:function(){return f},S4:function(){return s},Ue:function(){return o},a3:function(){return i}});var e=n(861),a=n(757),u=n.n(a),c=n(44).ZP.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"9785ea0de5536e01ad6fbbca1fd11246"}}),i=function(){var r=(0,e.Z)(u().mark((function r(){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/trending/movie/day");case 2:return t=r.sent,n=t.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),s=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t));case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),o=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c("/search/movie",{params:t});case 2:return n=r.sent,e=n.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c("/movie/".concat(t,"/credits"));case 2:return n=r.sent,e=n.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return n=r.sent,e=n.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},964:function(r,t,n){n.r(t),n.d(t,{default:function(){return h}});var e=n(861),a=n(885),u=n(757),c=n.n(u),i=n(791),s="SearchForm_input__HOxJo",o="SearchForm_btn__TXrR3",f=n(184);function p(r){var t=r.getFormData,n=(0,i.useState)(""),e=(0,a.Z)(n,2),u=e[0],c=e[1];return(0,f.jsxs)("form",{onSubmit:function(r){r.preventDefault(),t(u)},children:[(0,f.jsx)("input",{onChange:function(r){c(r.target.value)},className:s}),(0,f.jsx)("button",{type:"submit",className:o,children:"Search"})]})}var v=n(776),d=n(731),l=n(739),m="Movies_movieLink__ERyJ6",h=function(){var r=(0,i.useState)(null),t=(0,a.Z)(r,2),n=t[0],u=t[1],s=(0,d.lr)(),o=(0,a.Z)(s,2),h=o[0],x=o[1],w=(0,l.TH)(),b=h.get("query")||"";(0,i.useEffect)((function(){if(b){var r=function(){var r=(0,e.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,v.Ue)({query:b});case 2:t=r.sent,u(t.results);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}}),[b]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{getFormData:function(r){x({query:r})}}),n&&(0,f.jsx)("ul",{children:null===n||void 0===n?void 0:n.map((function(r){return(0,f.jsx)("li",{children:(0,f.jsx)(d.rU,{to:"".concat(r.id),state:{from:w},id:r.id,className:m,children:r.original_title})},r.id)}))})]})}}}]);
//# sourceMappingURL=964.6b8c8102.chunk.js.map