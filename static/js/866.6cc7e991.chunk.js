"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[866],{776:function(r,e,t){t.d(e,{DI:function(){return f},G2:function(){return p},S4:function(){return i},Ue:function(){return o},a3:function(){return s}});var n=t(861),a=t(757),u=t.n(a),c=t(44).ZP.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"9785ea0de5536e01ad6fbbca1fd11246"}}),s=function(){var r=(0,n.Z)(u().mark((function r(){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/trending/movie/day");case 2:return e=r.sent,t=e.data,r.abrupt("return",t.results);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(u().mark((function r(e){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(e));case 2:return t=r.sent,r.abrupt("return",t.data);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c("/search/movie",{params:e});case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c("/movie/".concat(e,"/credits"));case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(e,"/reviews"));case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},866:function(r,e,t){t.r(e),t.d(e,{default:function(){return h}});var n=t(861),a=t(885),u=t(757),c=t.n(u),s=t(776),i=t(791),o=t(739),p="Reviews_author__Y70Lx",f="Reviews_content__79P1X",v="Reviews_list__pCzae",d=t(184),h=function(){var r=(0,i.useState)(),e=(0,a.Z)(r,2),t=e[0],u=e[1],h=(0,o.UO)().movieId;return(0,i.useEffect)((function(){var r=function(){var r=(0,n.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,s.DI)(h);case 2:e=r.sent,u(e.results);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[h]),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("ul",{children:null===t||void 0===t?void 0:t.map((function(r){return(0,d.jsxs)("li",{className:v,children:[(0,d.jsxs)("p",{className:p,children:["Author: ",r.author]}),(0,d.jsx)("p",{className:f,children:r.content})]},r.id)}))})})}}}]);
//# sourceMappingURL=866.6cc7e991.chunk.js.map