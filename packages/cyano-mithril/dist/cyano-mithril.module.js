import m from "mithril";
import { withHooks } from "mithril-hooks";
import { useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState } from "mithril-hooks";
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
const cast = withHooks;
export {
  a,
  cast,
  getRef,
  h,
  jsx,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState
};
//# sourceMappingURL=cyano-mithril.module.js.map
