(window.webpackJsonp=window.webpackJsonp||[]).push([[3,9],{389:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(63);function n(e,t){t=t||2e3;var r=document.createElement("div");r.classList.add("toast"),r.style.setProperty("--ani-time","".concat(t,"ms")),r.textContent=e;var n=setTimeout((function(){return r.remove()}),2*t);r.onclick=function(){clearTimeout(n),r.remove()},document.body.appendChild(r)}},397:function(e,t,r){var content=r(415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(76).default)("0e347a26",content,!0,{sourceMap:!1})},400:function(e,t,r){"use strict";r.r(t);var n=r(418),o=r(7),c=(r(36),r(408),r(74),r(10),r(23),r(24),r(412),r(182),r(22),r(81),r(29),r(80),r(2));r(41);let d,l;const f=new WeakMap,v=new WeakMap,m=new WeakMap,h=new WeakMap,w=new WeakMap;let y={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return v.get(e);if("objectStoreNames"===t)return e.objectStoreNames||m.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return I(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function x(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(_(this),t),I(f.get(this))}:function(...t){return I(e.apply(_(this),t))}:function(t,...r){const n=e.call(_(this),t,...r);return m.set(n,t.sort?t.sort():[t]),I(n)}}function k(e){return"function"==typeof e?x(e):(e instanceof IDBTransaction&&function(e){if(v.has(e))return;const t=new Promise(((t,r)=>{const n=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",c),e.removeEventListener("abort",c)},o=()=>{t(),n()},c=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",o),e.addEventListener("error",c),e.addEventListener("abort",c)}));v.set(e,t)}(e),object=e,(d||(d=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>object instanceof e))?new Proxy(e,y):e);var object}function I(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,r)=>{const n=()=>{e.removeEventListener("success",o),e.removeEventListener("error",c)},o=()=>{t(I(e.result)),n()},c=()=>{r(e.error),n()};e.addEventListener("success",o),e.addEventListener("error",c)}));return t.then((t=>{t instanceof IDBCursor&&f.set(t,e)})).catch((()=>{})),w.set(t,e),t}(e);if(h.has(e))return h.get(e);const t=k(e);return t!==e&&(h.set(e,t),w.set(t,e)),t}const _=e=>w.get(e);function L(e,t,{blocked:r,upgrade:n,blocking:o,terminated:c}={}){const d=indexedDB.open(e,t),l=I(d);return n&&d.addEventListener("upgradeneeded",(e=>{n(I(d.result),e.oldVersion,e.newVersion,I(d.transaction))})),r&&d.addEventListener("blocked",(()=>r())),l.then((e=>{c&&e.addEventListener("close",(()=>c())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),l}const j=["get","getKey","getAll","getAllKeys","count"],O=["put","add","delete","clear"],S=new Map;function R(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(S.get(t))return S.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,o=O.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!o&&!j.includes(r))return;const c=async function(e,...t){const c=this.transaction(e,o?"readwrite":"readonly");let d=c.store;return n&&(d=d.index(t.shift())),(await Promise.all([d[r](...t),o&&c.done]))[0]};return S.set(t,c),c}y=(e=>({...e,get:(t,r,n)=>R(t,r)||e.get(t,r,n),has:(t,r)=>!!R(t,r)||e.has(t,r)}))(y);var A="leaderboards",D="leaderboard";function E(){return C.apply(this,arguments)}function C(){return(C=Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(A,1,{upgrade:B});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e,t){t<1&&e.createObjectStore(D)}function M(e,t){return"".concat(e,"/").concat(t)}function N(e,t,r,n){return T.apply(this,arguments)}function T(){return(T=Object(o.a)(regeneratorRuntime.mark((function e(t,r,n,data){var o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:return o=e.sent,c={ownerId:t,owner:r,event:n,data:data,saveTime:Date.now()},e.next=6,o.put(D,c,M(t,n));case 6:o.close();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(e,t){return J.apply(this,arguments)}function J(){return(J=Object(o.a)(regeneratorRuntime.mark((function e(t,r){var n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:return n=e.sent,o=n.transaction(D,"readwrite"),c=o.objectStore(D),e.next=7,c.delete(M(t,r));case 7:n.close();case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e,t){return P.apply(this,arguments)}function P(){return(P=Object(o.a)(regeneratorRuntime.mark((function e(t,r){var n,o,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:return n=e.sent,o=n.transaction(D),c=o.objectStore(D),e.next=7,c.get(M(t,r));case 7:return d=e.sent,n.close(),e.abrupt("return",(null==d?void 0:d.data)||"");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){return H.apply(this,arguments)}function H(){return(H=Object(o.a)(regeneratorRuntime.mark((function e(){var t,r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:return t=e.sent,r=t.transaction(D),n=r.objectStore(D),e.next=7,n.getAll();case 7:return data=e.sent,t.close(),e.abrupt("return",data.map((function(e){return{ownerId:e.ownerId,owner:e.owner,event:e.event,saveTime:e.saveTime}})));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=r(15),F=r(126);r(189),r(47),r(102),r(388),r(48),r(30),r(49),r(50);function K(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return Z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Z(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){d=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(d)throw o}}}}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function X(e){e=+e;for(var b="";e>0;)b+=String.fromCharCode(e%256),e=e/256|0;return btoa(b).replace(/=/g,"")}function z(b){var e,t=0,r=K((b=atob(b)).split("").reverse());try{for(r.s();!(e=r.n()).done;){var n=e.value;t*=256,t+=n.charCodeAt(0)}}catch(e){r.e(e)}finally{r.f()}return t}function G(e,t){var r="".concat(e,"-").concat(X(t[1].get_star_ts));return t[2]&&(r+="-".concat(X(t[2].get_star_ts))),r}function Q(s){var e=s.split("-"),t=Object(F.a)(e),r=t[0],n=t.slice(1),o={1:{get_star_ts:z(n[0])}};return n[1]&&(o[2]={get_star_ts:z(n[1])}),[+r,o]}function Y(e){for(var t="".concat(e.id,".").concat(e.name||"",".").concat(e.stars,".").concat(e.local_score,".").concat(e.global_score,".").concat(e.last_star_ts),r=0,n=Object.entries(e.completion_day_level);r<n.length;r++){var o=Object(W.a)(n[r],2),c=o[0],d=o[1];t+=".".concat(G(c,d))}return t}function ee(s){var e,t=s.split("."),r=Object(F.a)(t),n=r[0],o=r[1],c=r[2],d=r[3],l=r[4],f=r[5],v=r.slice(6),m={id:parseInt(n),name:o.length?o:null,stars:parseInt(c),local_score:parseInt(d),global_score:parseInt(l),last_star_ts:parseInt(f),completion_day_level:{}},h=K(v.map(Q));try{for(h.s();!(e=h.n()).done;){var w=Object(W.a)(e.value,2),y=w[0],x=w[1];m.completion_day_level[y]=x}}catch(e){h.e(e)}finally{h.f()}return m}var te={compress:function(e){for(var t="".concat(e.owner_id,"~").concat(e.event),r=0,n=Object.values(e.members);r<n.length;r++){var o=n[r];t+="~".concat(Y(o))}return t},decompress:function(e){var t,r=e.split("~"),n=Object(F.a)(r),o=n[0],c=n[1],d=n.slice(2),l={owner_id:parseInt(o),event:c,members:{}},f=K(d.map(ee));try{for(f.s();!(t=f.n()).done;){var v=t.value;l.members[v.id]=v}}catch(e){f.e(e)}finally{f.f()}return l}},re=r(389),ne=["l"],ae=c.a.extend({props:{value:{type:String,required:!1,default:null},ownerId:{type:[String,Number],required:!1,default:null},event:{type:String,required:!1,default:null},owner:{type:String,required:!1,default:null}},data:function(){return{leaderboards:[]}},watch:{owner:function(){this.saveLeaderboard()},ownerId:function(){this.saveLeaderboard()},event:function(){this.saveLeaderboard()},value:function(){this.saveLeaderboard()}},created:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.next=2;break;case 2:return t.next=4,e.loadFromUrl();case 4:if(!t.sent){t.next=6;break}return t.abrupt("return");case 6:(null===(r=e.value)||void 0===r?void 0:r.length)?e.verifyAndSave(JSON.parse(e.value)):e.reloadLeaderboard(!0);case 7:case"end":return t.stop()}}),t)})))()},methods:{makeAocLink:function(e,t){return"https://adventofcode.com/".concat(t,"/leaderboard/private/view/").concat(e)},makeJsonLink:function(e,t){return this.makeAocLink(e,t)+".json"},shareLeaderboard:function(e,t){return Object(o.a)(regeneratorRuntime.mark((function r(){var n,data,o,c,d;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,V(e,t);case 2:n=r.sent,data=JSON.parse(n),o=te.compress(data),(c=new URL(window.location.href)).searchParams.set("l",encodeURIComponent(o)),navigator.share?(d=data.members[e].name||"anon#{ownerId}",navigator.share({title:"Leaderboard Visualisation for Advent of Code",text:"".concat(d,"'s leaderboard visualised."),url:c.toString()})):(Object(re.a)("Copied to clipboard!"),navigator.clipboard.writeText(c.toString()));case 8:case"end":return r.stop()}}),r)})))()},loadFromUrl:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,c,data,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((r=e.$route.query.l)&&0!==r.length){t.next=3;break}return t.abrupt("return",!1);case 3:if(!Array.isArray(r)){t.next=7;break}if(r[0]){t.next=6;break}return t.abrupt("return",!1);case 6:r=r[0];case 7:return o=e.$route.query,o.l,c=Object(n.a)(o,ne),e.$router.replace({path:e.$route.path,query:c}),t.prev=9,data=te.decompress(decodeURIComponent(r)),e.$emit("input",JSON.stringify(data)),t.next=14,e.verifyAndSave(data);case 14:return(d=t.sent)&&Object(re.a)("Loaded from URL"),t.abrupt("return",d);case 19:return t.prev=19,t.t0=t.catch(9),console.log(t.t0),Object(re.a)("Error loading linked leaderboard"),t.abrupt("return",!1);case 24:case"end":return t.stop()}}),t,null,[[9,19]])})))()},verifyAndSave:function(data){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(data.event&&data.owner_id&&data.members&&data.members[data.owner_id])){t.next=5;break}return t.next=3,N(data.owner_id,data.members[data.owner_id].name||"anon#".concat(data.owner_id),data.event,JSON.stringify(data));case 3:return e.reloadLeaderboard(),t.abrupt("return",!0);case 5:return t.abrupt("return",!1);case 6:case"end":return t.stop()}}),t)})))()},loadLeaderboard:function(e,t){var r=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,V(e,t);case 2:o=n.sent,r.$emit("input",o),Object(re.a)("Loaded from DB");case 5:case"end":return n.stop()}}),n)})))()},removeLeaderboard:function(e,t){var r=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,$(e,t);case 2:return Object(re.a)("Removed leaderboard"),n.next=5,r.reloadLeaderboard();case 5:case"end":return n.stop()}}),n)})))()},saveLeaderboard:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.value&&e.ownerId&&e.owner&&e.event){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,N(+e.ownerId,e.owner,e.event,e.value);case 4:return t.next=6,e.reloadLeaderboard();case 6:case"end":return t.stop()}}),t)})))()},reloadLeaderboard:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,U();case 2:t.leaderboards=r.sent,t.$emit("empty",0===t.leaderboards.length),e&&t.leaderboards.length>0&&(n=t.leaderboards[0],t.loadLeaderboard(n.ownerId,n.event));case 5:case"end":return r.stop()}}),r)})))()}}}),oe=(r(414),r(34)),component=Object(oe.a)(ae,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._v("\n  Paste a new leaderboard JSON to the textbox below or load one of your saved leaderboards:\n  "),e._l(e.leaderboards,(function(t){return r("div",{key:t.ownerId+"/"+t.event,staticClass:"saved"},[r("button",{staticClass:"muted",on:{click:function(r){return e.removeLeaderboard(t.ownerId,t.event)}}},[e._v("[X]")]),e._v("\n    "+e._s(t.owner)+" ("+e._s(t.event)+"):\n    "),r("span",{staticClass:"links"},[r("button",{on:{click:function(r){return e.loadLeaderboard(t.ownerId,t.event)}}},[e._v("\n        [Load]\n      ")]),e._v(" "),r("a",{attrs:{href:e.makeAocLink(t.ownerId,t.event)}},[e._v("[AoC"),r("ExternalIcon"),e._v("]")],1),e._v(" "),r("a",{attrs:{href:e.makeJsonLink(t.ownerId,t.event)}},[e._v("[JSON"),r("ExternalIcon"),e._v("]")],1),e._v(" "),r("button",{on:{click:function(r){return e.shareLeaderboard(t.ownerId,t.event)}}},[e._v("\n        [Share]\n      ")])])])}))],2)}),[],!1,null,"63d8389d",null);t.default=component.exports;installComponents(component,{ExternalIcon:r(405).default})},405:function(e,t,r){"use strict";r.r(t);var n=r(34),component=Object(n.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticClass:"svg-inline--fa fa-external-link-alt fa-w-16",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"external-link-alt",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[t("path",{attrs:{fill:"currentColor",d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"}})])}),[],!1,null,null,null);t.default=component.exports},414:function(e,t,r){"use strict";r(397)},415:function(e,t,r){var n=r(75)(!1);n.push([e.i,".muted[data-v-63d8389d]{opacity:.5}.saved[data-v-63d8389d]{line-height:2em}.links[data-v-63d8389d]{display:inline-block}.links>*[data-v-63d8389d]{margin-left:1em;white-space:nowrap}svg[data-v-63d8389d]{width:.55em;vertical-align:super}",""]),e.exports=n}}]);