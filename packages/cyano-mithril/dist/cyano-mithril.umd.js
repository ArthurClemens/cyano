(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("mithril"), require("mithril-hooks")) : typeof define === "function" && define.amd ? define(["exports", "mithril", "mithril-hooks"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.cyanoMithril = {}, global.m, global.mithrilHooks));
})(this, function(exports2, m, mithrilHooks) {
  "use strict";
  const htmlAttributes = {
    accept: "accept",
    acceptcharset: "acceptcharset",
    accesskey: "accesskey",
    action: "action",
    allowfullscreen: "allowfullscreen",
    allowtransparency: "allowtransparency",
    alt: "alt",
    async: "async",
    autocomplete: "autocomplete",
    autofocus: "autofocus",
    autoplay: "autoplay",
    capture: "capture",
    cellpadding: "cellpadding",
    cellspacing: "cellspacing",
    challenge: "challenge",
    charset: "charset",
    checked: "checked",
    class: "className",
    classid: "classid",
    classname: "className",
    // Special case:
    className: "className",
    colspan: "colspan",
    cols: "cols",
    content: "content",
    contenteditable: "contenteditable",
    contextmenu: "contextmenu",
    controls: "controls",
    coords: "coords",
    crossorigin: "crossorigin",
    data: "data",
    datetime: "datetime",
    default: "default",
    defer: "defer",
    dir: "dir",
    disabled: "disabled",
    download: "download",
    draggable: "draggable",
    enctype: "enctype",
    for: "for",
    form: "form",
    formaction: "formaction",
    formenctype: "formenctype",
    formmethod: "formmethod",
    formnovalidate: "formnovalidate",
    formtarget: "formtarget",
    frameborder: "frameborder",
    headers: "headers",
    height: "height",
    hidden: "hidden",
    high: "high",
    href: "href",
    hreflang: "hreflang",
    htmlfor: "htmlfor",
    httpequiv: "httpequiv",
    icon: "icon",
    id: "id",
    inputmode: "inputmode",
    integrity: "integrity",
    is: "is",
    keyparams: "keyparams",
    keytype: "keytype",
    kind: "kind",
    label: "label",
    lang: "lang",
    list: "list",
    loop: "loop",
    low: "low",
    manifest: "manifest",
    marginheight: "marginheight",
    marginwidth: "marginwidth",
    max: "max",
    maxlength: "maxlength",
    media: "media",
    mediagroup: "mediagroup",
    method: "method",
    min: "min",
    minlength: "minlength",
    multiple: "multiple",
    muted: "muted",
    name: "name",
    novalidate: "novalidate",
    nonce: "nonce",
    onblur: "onblur",
    onchange: "onchange",
    onclick: "onclick",
    onfocus: "onfocus",
    oninput: "oninput",
    onkeydown: "onkeydown",
    onkeyup: "onkeyup",
    onmousedown: "onmousedown",
    onmouseout: "onmouseout",
    onmouseover: "onmouseover",
    onmouseup: "onmouseup",
    onscroll: "onscroll",
    onsubmit: "onsubmit",
    ontouchend: "ontouchend",
    ontouchmove: "ontouchmove",
    ontouchstart: "ontouchstart",
    open: "open",
    optimum: "optimum",
    pattern: "pattern",
    placeholder: "placeholder",
    poster: "poster",
    preload: "preload",
    radiogroup: "radiogroup",
    readonly: "readonly",
    rel: "rel",
    required: "required",
    reversed: "reversed",
    role: "role",
    rowspan: "rowspan",
    rows: "rows",
    sandbox: "sandbox",
    scope: "scope",
    scoped: "scoped",
    scrolling: "scrolling",
    seamless: "seamless",
    selected: "selected",
    shape: "shape",
    size: "size",
    sizes: "sizes",
    span: "span",
    spellcheck: "spellcheck",
    src: "src",
    srcdoc: "srcdoc",
    srclang: "srclang",
    srcset: "srcset",
    start: "start",
    step: "step",
    style: "style",
    summary: "summary",
    tabindex: "tabindex",
    target: "target",
    title: "title",
    type: "type",
    usemap: "usemap",
    value: "value",
    width: "width",
    wmode: "wmode",
    wrap: "wrap"
  };
  const a = htmlAttributes;
  const h = m;
  const { trust } = m;
  h.trust = (html, wrapper) => wrapper ? h(wrapper, trust(html)) : trust(html);
  const jsx = m;
  const getRef = (fn) => ({
    oncreate: (vnode) => {
      fn(vnode.dom);
    }
  });
  const cast = mithrilHooks.withHooks;
  Object.defineProperty(exports2, "useCallback", {
    enumerable: true,
    get: () => mithrilHooks.useCallback
  });
  Object.defineProperty(exports2, "useEffect", {
    enumerable: true,
    get: () => mithrilHooks.useEffect
  });
  Object.defineProperty(exports2, "useLayoutEffect", {
    enumerable: true,
    get: () => mithrilHooks.useLayoutEffect
  });
  Object.defineProperty(exports2, "useMemo", {
    enumerable: true,
    get: () => mithrilHooks.useMemo
  });
  Object.defineProperty(exports2, "useReducer", {
    enumerable: true,
    get: () => mithrilHooks.useReducer
  });
  Object.defineProperty(exports2, "useRef", {
    enumerable: true,
    get: () => mithrilHooks.useRef
  });
  Object.defineProperty(exports2, "useState", {
    enumerable: true,
    get: () => mithrilHooks.useState
  });
  exports2.a = a;
  exports2.cast = cast;
  exports2.getRef = getRef;
  exports2.h = h;
  exports2.jsx = jsx;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
//# sourceMappingURL=cyano-mithril.umd.js.map
