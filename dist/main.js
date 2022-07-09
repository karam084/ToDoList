(()=>{"use strict";var e,t,n={},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={id:e,exports:{}};return n[e](r,r.exports,i),r.exports}i.m=n,i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,n)=>(i.f[n](e,t),t)),[])),i.u=e=>e+".main.js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="to-do-list:",i.l=(n,o,r,a)=>{if(e[n])e[n].push(o);else{var s,d;if(void 0!==r)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var u=l[c];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+r){s=u;break}}s||(d=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",t+r),s.src=n),e[n]=[o];var h=(t,o)=>{s.onerror=s.onload=null,clearTimeout(p);var i=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(o))),t)return t(o)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),d&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={179:0};i.f.j=(t,n)=>{var o=i.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise(((n,i)=>o=e[t]=[n,i]));n.push(o[2]=r);var a=i.p+i.u(t),s=new Error;i.l(a,(n=>{if(i.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,o[1](s)}}),"chunk-"+t,t)}};var t=(t,n)=>{var o,r,[a,s,d]=n,l=0;if(a.some((t=>0!==e[t]))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);d&&d(i)}for(t&&t(n);l<a.length;l++)r=a[l],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0},n=self.webpackChunkto_do_list=self.webpackChunkto_do_list||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();const r=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"localStorage";try{e=window[t];var n="__storage_test__";return e.setItem(n,n),e.removeItem(n),!0}catch(e){return!1}};function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var d=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"todos";a(this,e),this.wrapper=t,this.storageName=n,this.isStorageAvailable=r("localStorage"),this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){if(this.isStorageAvailable){var e=window.localStorage.getItem(this.storageName);this.todos=JSON.parse(e)||[],this.todos=this.sortList(),window.localStorage.setItem(this.storageName,JSON.stringify(this.todos))}else this.todos=[];this.addAllToPage()}},{key:"updateStorage",value:function(){this.isStorageAvailable&&window.localStorage.setItem(this.storageName,JSON.stringify(this.todos))}},{key:"sortList",value:function(){var e=this.todos.sort((function(e,t){return e.index-t.index}));return e.map((function(e,t){return{index:t,description:e.description,completed:e.completed}}))}},{key:"addAllToPage",value:function(){var e=this;this.todos.forEach((function(t){e.addToPage(t)}))}},{key:"removeAllFromPage",value:function(){this.wrapper.innerHTML=""}},{key:"addToPage",value:function(e){var t=document.createElement("li");t.classList.add("todo"),t.setAttribute("id","todo-".concat(e.index));var n=document.createElement("button");n.setAttribute("type","button"),n.classList.add("completionIcon","icon"),n.innerHTML='\n    <svg width="100" height="100">\n  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />\n</svg>',this.newMethod(n,t);var o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("name","description"),o.readOnly=!0,o.setAttribute("value",e.description),o.classList.add("description"),o.addEventListener("focusin",(function(){o.readOnly=!1,t.classList.add("active")})),function(e,t){e.addEventListener("focusout",(function(){e.readOnly=!0,t.classList.remove("active")}))}(o,t);var i=document.createElement("div");i.classList.add("actionIcon","icon");var r=document.createElement("button");r.setAttribute("type","button"),r.innerHTML='\n    <svg\n      class="icon"\n      fill="none"\n      stroke="currentColor"\n      viewBox="0 0 24 24"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <path\n        stroke-linecap="round"\n        stroke-linejoin="round"\n        stroke-width="2"\n        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"\n      ></path>\n    </svg>\n    ',this.newMethod2(t,i,r,e,n,o)}},{key:"newMethod2",value:function(e,t,n,o,i,r){this.newMethod3(e,t,n,o,i,r)}},{key:"newMethod3",value:function(e,t,n,o,i,r){this.newMethod4(e,t,n,o,i,r)}},{key:"newMethod4",value:function(e,t,n,o,i,r){this.newMethod5(e,t,n,o,i,r)}},{key:"newMethod5",value:function(e,t,n,o,i,r){var a=document.createElement("button");a.setAttribute("type","button"),a.classList.add("remove"),a.innerHTML='\n    <svg\n      class="icon"\n      fill="none"\n      stroke="currentColor"\n      viewBox="0 0 24 24"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <path\n        stroke-linecap="round"\n        stroke-linejoin="round"\n        stroke-width="2"\n        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"\n      ></path>\n    </svg>\n    ',this.newMethod1(a,e,t,n,o,i,r)}},{key:"newMethod1",value:function(e,t,n,o,i,r,a){var s=this;e.addEventListener("click",(function(){return s.removeItem(t)})),n.appendChild(o),n.appendChild(e),i.completed&&t.classList.add("completed"),t.appendChild(r),t.appendChild(a),t.appendChild(n),this.wrapper.appendChild(t)}},{key:"newMethod",value:function(e,t){var n=this;e.addEventListener("click",(function(e){e.preventDefault(),n.toggleCompleteStatus(t)}))}},{key:"addNewItem",value:function(e){var t={index:this.todos.length,description:e,completed:!1};this.todos.push(t),this.isStorageAvailable&&window.localStorage.setItem(this.storageName,JSON.stringify(this.todos)),this.addToPage(t)}},{key:"refreshTodosOnPage",value:function(){this.updateStorage(),this.removeAllFromPage(),this.addAllToPage()}},{key:"removeItem",value:function(e){var t=Number(e.id.match(/\d+$/));this.todos=this.todos.filter((function(e){return e.index!==t})),this.todos=this.sortList(),this.refreshTodosOnPage()}},{key:"removeAllCompleted",value:function(){this.todos=this.todos.filter((function(e){return!e.completed})),this.todos=this.sortList(),this.refreshTodosOnPage()}},{key:"toggleCompleteStatus",value:function(e){e.classList.toggle("completed");var t=Number(e.id.match(/\d+$/));this.todos[t].completed=e.classList.contains("completed"),this.updateStorage()}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();i.e(654).then(i.bind(i,654));var l=new d(document.getElementById("todo-list")),c=document.getElementById("todo-form");c.addEventListener("submit",(function(e){e.preventDefault(),l.addNewItem(c.description.value),c.description.value=""})),document.getElementById("clear-all").addEventListener("click",(function(){l.removeAllCompleted()}))})();