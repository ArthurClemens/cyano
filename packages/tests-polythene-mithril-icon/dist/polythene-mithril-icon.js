!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("cyano")):"function"==typeof define&&define.amd?define(["cyano"],n):(e=e||self).polytheneMithrilIcon=n(e.cyano)}(this,function(e){"use strict";function n(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,u=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){o=!0,u=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw u}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var t=function(e,n){return e[n]=1,e},r=["key","style","href","id","tabIndex","tabindex","oninit","oncreate","onupdate","onbeforeremove","onremove","onbeforeupdate"],o="undefined"!=typeof document,u=!!o&&"ontouchstart"in document.documentElement,i=u?["click","mouseup"]:["mouseup"];if(o){var c=document.querySelector("html");c&&c.classList.add(u?"pe-touch":"pe-no-touch")}var a={},d=function(e,n){a[e]&&a[e].forEach(function(e){return e(n)})};o&&(window.addEventListener("resize",function(e){return d("resize",e)}),window.addEventListener("scroll",function(e){return d("scroll",e)}),window.addEventListener("keydown",function(e){return d("keydown",e)}),i.forEach(function(e){return window.addEventListener(e,function(n){return d(e,n)})}));var l={component:"pe-svg"},s=function(e,n){return e[n]=1,e},f=["key","style","href","id","tabIndex","tabindex","oninit","oncreate","onupdate","onbeforeremove","onremove","onbeforeupdate"],m=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"regular";return function(e){return{small:e.small,regular:e.regular,medium:e.medium,large:e.large,fab:e.fab}}(e)[n]},v="undefined"!=typeof document,p=!!v&&"ontouchstart"in document.documentElement,h=p?["click","mouseup"]:["mouseup"];if(v){var y=document.querySelector("html");y&&y.classList.add(p?"pe-touch":"pe-no-touch")}var g={},w=function(e,n){g[e]&&g[e].forEach(function(e){return e(n)})};v&&(window.addEventListener("resize",function(e){return w("resize",e)}),window.addEventListener("scroll",function(e){return w("scroll",e)}),window.addEventListener("keydown",function(e){return w("keydown",e)}),h.forEach(function(e){return window.addEventListener(e,function(n){return w(e,n)})}));var b={component:"pe-icon",avatar:"pe-icon--avatar",large:"pe-icon--large",medium:"pe-icon--medium",regular:"pe-icon--regular",small:"pe-icon--small"},E=e.cast(function(o){var u=n(e.useState(),2),i=u[0],c=u[1];e.useEffect(function(){if(i){var e=i.querySelector("svg");e&&e.setAttribute("focusable","false")}},[i]);var a=Object.assign({},function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.add,u=n.remove,i=u?u.reduce(t,{}):{},c=(o?r.concat(o):r).filter(function(e){return!i[e]}).reduce(t,{});return Object.keys(e).reduce(function(n,t){return c[t]&&(n[t]=e[t]),n},{})}(o),e.getDom(function(e){return e&&!i&&c(e)}),o.testId&&{"data-test-id":o.testId},{className:[l.component,"dark"===o.tone?"pe-dark-tone":null,"light"===o.tone?"pe-light-tone":null,o.className||o[e.a.class]].join(" ")}),d=o.content?o.content:o.children||o;return e.h(o.element||"div",a,d)});return e.cast(function(n){var t=Object.assign({},function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.add,r=n.remove,o=r?r.reduce(s,{}):{},u=(t?f.concat(t):f).filter(function(e){return!o[e]}).reduce(s,{});return Object.keys(e).reduce(function(n,t){return u[t]&&(n[t]=e[t]),n},{})}(n),n.testId&&{"data-test-id":n.testId},{className:[b.component,m(b,n.size),n.avatar?b.avatar:null,"dark"===n.tone?"pe-dark-tone":null,"light"===n.tone?"pe-light-tone":null,n.className||n[e.a.class]].join(" ")},n.events),r=n.content?n.content:n.svg?e.h(E,n.svg):n.src?e.h("img",{src:n.src}):n.children;return e.h(n.element||"div",t,r)})});
//# sourceMappingURL=polythene-mithril-icon.js.map
