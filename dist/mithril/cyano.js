!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((n=n||self).cyano=n.cyano||{})}(this,function(n){"use strict";function t(n){return function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function e(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function o(n){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable}))),r.forEach(function(t){e(n,t,o[t])})}return n}function r(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],o=!0,r=!1,u=void 0;try{for(var c,i=n[Symbol.iterator]();!(o=(c=i.next()).done)&&(e.push(c.value),!t||e.length!==t);o=!0);}catch(n){r=!0,u=n}finally{try{o||null==i.return||i.return()}finally{if(r)throw u}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u=function(n,e){return function(){var u=!1,i=[],a=0,f=[],l=0,s=[],y=new Map,p=m.redraw,d=function(n){var t=l++,e=f[t]||[],o=void 0===n||!!Array.isArray(n)&&(n.length>0?!n.every(function(n,t){return n===e[t]}):!u);return f[t]=n,o},v=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(t,e){if(d(e)){var o=function(){var n=t();"function"==typeof n&&(y.set(t,n),y.set("_",p))};s.push(n?function(){return new Promise(function(n){return requestAnimationFrame(n)}).then(o)}:o)}}},h=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(n){return n},e=a++;return u||(i[e]=n),[i[e],function(n){var o=i[e],r=t(n,e);i[e]=r,r!==o&&p()}]},b=function(n,t){var e=d(t),o=r(u?h():h(n()),2),c=o[0],i=o[1];return u&&e&&i(n()),c},g={useState:function(n){return h(n,function(n,t){return"function"==typeof n?n(i[t]):n})},useEffect:v(!0),useLayoutEffect:v(),useReducer:function(n,t,e){var o=!u&&e?e(t):t,c=r(h(o),2),i=c[0],a=c[1];return[i,function(t){return a(n(i,t))}]},useRef:function(n){return r(h({current:n}),1)[0]},useMemo:b,useCallback:function(n,t){return b(function(){return n},t)}},w=o({},g,e&&e(g)),A=function(){s.forEach(c),s.length=0,l=0,a=0};return{view:function(t){return n(t,w)},oncreate:function(){return A(),u=!0},onupdate:A,onremove:function(){t(y.values()).forEach(c)}}}},c=Function.prototype.call.bind(Function.prototype.call),i=function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=null!=t?t:function(){};return function(n){return u(function(t,e){return n(o({},t.attrs,e))})}(function(t){return n(o({},t,r(t),e))})},a={autocomplete:"autocomplete",autofocus:"autofocus",class:"class",className:"class",enctype:"enctype",formaction:"formaction",frameborder:"frameborder",maxlength:"maxlength",minlength:"minlength",onblur:"onblur",onchange:"onchange",onclick:"onclick",onfocus:"onfocus",oninput:"oninput",onkeydown:"onkeydown",onkeyup:"onkeyup",onmousedown:"onmousedown",onmouseout:"onmouseout",onmouseover:"onmouseover",onmouseup:"onmouseup",onscroll:"onscroll",onsubmit:"onsubmit",ontouchend:"ontouchend",ontouchmove:"ontouchmove",ontouchstart:"ontouchstart",readonly:"readonly",tabindex:"tabindex"};n.createComponent=function(n,t){return i(n,t,{renderer:m,htmlAttributes:a})},Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=cyano.js.map
