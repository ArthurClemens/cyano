!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t((e=e||self)["cyano-react"]=e["cyano-react"]||{},e.react)}(this,function(e,t){"use strict";function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t=t&&t.hasOwnProperty("default")?t.default:t;var o=/([\.#]?[a-zA-Z0-9_:-]+)/,r=/^\.|#/,u=function(e,t){if(!e)return"div";var n,u,a,c,s=!("id"in t),i=e.split(o),l=null;r.test(i[1])&&(l="div");for(c=0;c<i.length;c++)(u=i[c])&&(a=u.charAt(0),l?"."===a?(n=n||[]).push(u.substring(1,u.length)):"#"===a&&s&&(t.id=u.substring(1,u.length)):l=u);n&&(t.className&&n.push(t.className),t.className=n.join(" "));return l?l.toLowerCase():"div"};var a=function e(n,o,r){if(1===arguments.length&&Array.isArray(n))return e(t.Fragment,null,n);!r&&("string"==typeof(a=o)||"number"==typeof a||Array.isArray(a))?(r=o,o={}):2===arguments.length&&(r=[]);var a;o=o?Object.assign({},o):{};o.dataset&&(Object.keys(o.dataset).forEach(function(e){var t=e.replace(/([a-z])([A-Z])/,function(e){return e[0]+"-"+e[1].toLowerCase()});o["data-"+t]=o.dataset[e]}),o.dataset=void 0);o.attributes&&(Object.keys(o.attributes).forEach(function(e){o[e]=o.attributes[e]}),o.attributes=void 0);"string"==typeof n&&(n=u(n,o));var c=[n,o].concat(r);return t.createElement.apply(t,c)};var c={autocomplete:"autoComplete",autofocus:"autoFocus",class:"className",className:"className",enctype:"encType",formaction:"formAction",frameborder:"frameBorder",maxlength:"maxLength",minlength:"minLength",onblur:"onBlur",onchange:"onChange",onclick:"onClick",onfocus:"onFocus",oninput:"onInput",onkeydown:"onKeyDown",onkeyup:"onKeyUp",onmousedown:"onMouseDown",onmouseout:"onMouseOut",onmouseover:"onMouseOver",onmouseup:"onMouseUp",onscroll:"onScroll",onsubmit:"onSubmit",ontouchend:"onTouchEnd",ontouchmove:"onTouchMove",ontouchstart:"onTouchStart",readonly:"readOnly",tabindex:"tabIndex"};e.createComponent=function(e){var o,r;return"function"==typeof(arguments.length<=1?void 0:arguments[1])?(o=arguments.length<=1?void 0:arguments[1],r=arguments.length<=2?void 0:arguments[2]):r=arguments.length<=1?void 0:arguments[1],function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s={useState:t.useState,useEffect:t.useEffect,useLayoutEffect:t.useLayoutEffect,useReducer:t.useReducer,useRef:t.useRef,useMemo:t.useMemo,useCallback:t.useCallback},i=null!=o?o(s):{};return e(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),r.forEach(function(t){n(e,t,o[t])})}return e}({h:a,a:c,getDom:function(e){return{ref:function(t){return e(t)}}}},s,i,r||{},u))}},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=cyano-react.js.map
