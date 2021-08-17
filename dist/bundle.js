(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,".container {\n  width: 360px;\n  margin: 4rem auto;\n  background-color: #fff;\n  box-shadow: 0 0 8px #0002;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.list-icon {\n  margin-right: 1rem;\n  font-size: 2rem;\n  color: #fff;\n}\n\n.new-todo-input {\n  width: 100%;\n  margin-right: 1rem;\n}\n\n.todos {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  border-bottom: 1px solid #eee;\n}\n\n.todo-description {\n  width: 100%;\n  margin: 0 1rem;\n}\n\n.btn-icon {\n  color: #ccc;\n  cursor: pointer;\n}\n\n.btn-delete {\n  margin: auto 0.5rem;\n}\n\n.drag-icon {\n  cursor: move;\n}\n\n.btn-delete:hover {\n  color: #f44;\n}\n\n.btn-item {\n  background-color: #eee;\n}\n\n.btn-clear-todos {\n  margin: auto;\n  border: none;\n  background-color: transparent;\n}\n\n.btn-clear-todos:hover {\n  text-decoration: underline;\n  color: #f44;\n}",""]);const i=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],u=i[d]||0,l="".concat(d," ").concat(u);i[d]=u+1;var f=t(l),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(e[f].references++,e[f].updater(p)):e.push({identifier:l,updater:o(p,r),references:1}),a.push(l)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),d=0;d<i.length;d++){var u=t(i[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),s=t.n(c),d=t(216),u=t.n(d),l=t(589),f=t.n(l),p=t(426),m={};m.styleTagTransform=f(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),e()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;const v=document.querySelector(".todo-list"),h=[{description:"wash car",completed:!1,index:1},{description:"homework",completed:!1,index:2},{description:"gym",completed:!1,index:3},{description:"study rails",completed:!1,index:4}];window.addEventListener("load",(function(){h.forEach((n=>{const e=`\n    <li class="todos" data-index="${n.index}">\n      <input class="todo-check" type="checkbox" value="${n.index}">\n      <input class="todo-description" type="text" value="${n.description}">\n      <span class="material-icons btn-icon drag-icon">drag_indicator</span>\n    </li>\n    `;v.innerHTML+=e}))}))})()})();