"use strict";(self.webpackChunkto_do_list=self.webpackChunkto_do_list||[]).push([[654],{426:(n,o,e)=>{e.d(o,{Z:()=>c});var t=e(81),r=e.n(t),i=e(645),a=e.n(i)()(r());a.push([n.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --color-primary: #333;\n  --color-gray: #777;\n  --color-gray-light: #aaa;\n}\n\na {\n  color: var(--color-primary);\n  text-transform: none;\n}\n\n.icon {\n  width: 20px;\n  height: 20px;\n}\n\nbutton {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #eee;\n  font-family: sans-serif;\n  color: #333;\n}\n\n.bg-title {\n  position: absolute;\n  top: 0;\n  inset: 1rem;\n  text-align: center;\n  opacity: 0.05;\n  font-size: 10rem;\n  font-weight: 700;\n  user-select: none;\n  transform: rotate(-5deg);\n  z-index: -1;\n}\n\n#todo-wrapper {\n  background-color: white;\n  margin: 1rem;\n  box-shadow: 0 0.2rem 0.5rem #0003;\n  width: 100%;\n  max-width: 500px;\n  border-radius: 0.5rem;\n  overflow: hidden;\n}\n\n.todo-header {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem 1rem 0.5rem;\n  border-bottom: 1px solid #eee;\n}\n\n.todo-header a {\n  color: var(--color-gray);\n}\n\n.todo-header a:hover {\n  color: var(--color-primary);\n}\n\n#todo-form {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.5rem 1rem;\n  border-bottom: 1px solid #eee;\n}\n\n#todo-form input {\n  border: none;\n  flex-grow: 1;\n  padding: 0.5rem;\n  font-style: italic;\n}\n\n#todo-form button {\n  border: none;\n  background: none;\n  flex-grow: 0;\n  color: var(--color-gray);\n}\n\n#todo-form button:hover {\n  color: var(--color-primary);\n}\n\n#todo-list li.todo {\n  padding: 1rem;\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  justify-content: stretch;\n  border-bottom: 1px solid #eee;\n}\n\n#todo-list li.todo.active {\n  background-color: rgb(220, 255, 243);\n}\n\n#todo-list li.todo .completionIcon {\n  overflow: hidden;\n  display: flex;\n  flex-grow: 0;\n  border: none;\n  background: none;\n}\n\n#todo-list li.todo .completionIcon > svg {\n  flex-shrink: 0;\n}\n\n#todo-list li.todo .completionIcon > svg:first-child {\n  padding-left: 0;\n  transition-duration: 300ms;\n  color: var(--color-gray);\n}\n\n#todo-list li.todo.completed .completionIcon > svg:first-child {\n  margin-left: -2.25rem;\n  margin-top: -64px;\n}\n\n#todo-list li.todo.completed .completionIcon > svg:last-child {\n  color: rgb(22, 192, 107);\n}\n\n#todo-list li.todo .description {\n  flex-grow: 1;\n  border: none;\n  background: none;\n  font-size: 1rem;\n  color: var(--color-primary);\n  cursor: default;\n}\n\n#todo-list li.todo.completed .description {\n  text-decoration: line-through;\n  color: var(--color-gray-light);\n}\n\n#todo-list li.todo.active .description {\n  cursor: text;\n  outline-offset: 0.2rem;\n  text-decoration: none;\n}\n\n#todo-list li.todo .actionIcon {\n  overflow: hidden;\n  display: flex;\n  flex-grow: 0;\n}\n\n#todo-list li.todo .actionIcon > button {\n  flex-shrink: 0;\n}\n\n#todo-list li.todo .actionIcon > button:first-child {\n  padding-left: 0;\n  transition-duration: 300ms;\n  color: var(--color-gray);\n  cursor: move;\n}\n\n#todo-list li.todo.active .actionIcon > button:first-child {\n  margin-left: -1.25rem;\n}\n\n#clear-all {\n  width: 100%;\n  background-color: #eee;\n  border: 0;\n  padding: 1rem;\n}\n\n.remove {\n  display: flex;\n}\n",""]);const c=a},645:n=>{n.exports=function(n){var o=[];return o.toString=function(){return this.map((function(o){var e="",t=void 0!==o[5];return o[4]&&(e+="@supports (".concat(o[4],") {")),o[2]&&(e+="@media ".concat(o[2]," {")),t&&(e+="@layer".concat(o[5].length>0?" ".concat(o[5]):""," {")),e+=n(o),t&&(e+="}"),o[2]&&(e+="}"),o[4]&&(e+="}"),e})).join("")},o.i=function(n,e,t,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);t&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),o.push(d))}},o}},81:n=>{n.exports=function(n){return n[1]}},654:(n,o,e)=>{e.r(o),e.d(o,{default:()=>v});var t=e(379),r=e.n(t),i=e(795),a=e.n(i),c=e(569),l=e.n(c),s=e(565),d=e.n(s),p=e(216),u=e.n(p),f=e(589),m=e.n(f),g=e(426),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=l().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),r()(g.Z,h);const v=g.Z&&g.Z.locals?g.Z.locals:void 0},379:n=>{var o=[];function e(n){for(var e=-1,t=0;t<o.length;t++)if(o[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var l=n[c],s=t.base?l[0]+t.base:l[0],d=i[s]||0,p="".concat(s," ").concat(d);i[s]=d+1;var u=e(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)o[u].references++,o[u].updater(f);else{var m=r(f,t);t.byIndex=c,o.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function r(n,o){var e=o.domAPI(o);return e.update(n),function(o){if(o){if(o.css===n.css&&o.media===n.media&&o.sourceMap===n.sourceMap&&o.supports===n.supports&&o.layer===n.layer)return;e.update(n=o)}else e.remove()}}n.exports=function(n,r){var i=t(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);o[c].references--}for(var l=t(n,r),s=0;s<i.length;s++){var d=e(i[s]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}i=l}}},569:n=>{var o={};n.exports=function(n,e){var t=function(n){if(void 0===o[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}o[n]=e}return o[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var o=document.createElement("style");return n.setAttributes(o,n.attributes),n.insert(o,n.options),o}},565:(n,o,e)=>{n.exports=function(n){var o=e.nc;o&&n.setAttribute("nonce",o)}},795:n=>{n.exports=function(n){var o=n.insertStyleElement(n);return{update:function(e){!function(n,o,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,r&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),o.styleTagTransform(t,n,o.options)}(o,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(o)}}}},589:n=>{n.exports=function(n,o){if(o.styleSheet)o.styleSheet.cssText=n;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(n))}}}}]);