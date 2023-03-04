import require$$0, { Fragment, createElement, forwardRef } from "react";
import { useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState } from "react";
var classIdSplit = /([\.#]?[a-zA-Z0-9_:-]+)/;
var notClassId = /^\.|#/;
var parseTag_1 = parseTag$1;
function parseTag$1(tag, props) {
  if (!tag) {
    return "div";
  }
  var noId = !("id" in props);
  var tagParts = tag.split(classIdSplit);
  var tagName = null;
  if (notClassId.test(tagParts[1])) {
    tagName = "div";
  }
  var classes;
  var part;
  var type;
  var i;
  for (i = 0; i < tagParts.length; i++) {
    part = tagParts[i];
    if (!part) {
      continue;
    }
    type = part.charAt(0);
    if (!tagName) {
      tagName = part;
    } else if (type === ".") {
      classes = classes || [];
      classes.push(part.substring(1, part.length));
    } else if (type === "#" && noId) {
      props.id = part.substring(1, part.length);
    }
  }
  if (classes) {
    if (props.className) {
      classes.push(props.className);
    }
    props.className = classes.join(" ");
  }
  return tagName ? tagName.toLowerCase() : "div";
}
var React = require$$0;
var parseTag = parseTag_1;
var reactHyperscript = h$1;
function h$1(componentOrTag, properties, children) {
  if (arguments.length === 1 && Array.isArray(componentOrTag)) {
    return h$1(React.Fragment, null, componentOrTag);
  } else if (!children && isChildren(properties)) {
    children = properties;
    properties = {};
  } else if (arguments.length === 2) {
    children = [];
  }
  properties = properties ? Object.assign({}, properties) : {};
  if (properties.dataset) {
    Object.keys(properties.dataset).forEach(function unnest(attrName) {
      var dashedAttr = attrName.replace(/([a-z])([A-Z])/, function dash(match) {
        return match[0] + "-" + match[1].toLowerCase();
      });
      properties["data-" + dashedAttr] = properties.dataset[attrName];
    });
    properties.dataset = void 0;
  }
  if (properties.attributes) {
    Object.keys(properties.attributes).forEach(function unnest(attrName) {
      properties[attrName] = properties.attributes[attrName];
    });
    properties.attributes = void 0;
  }
  if (typeof componentOrTag === "string") {
    componentOrTag = parseTag(componentOrTag, properties);
  }
  var args = [componentOrTag, properties].concat(children);
  return React.createElement.apply(React, args);
}
function isChildren(x) {
  return typeof x === "string" || typeof x === "number" || Array.isArray(x);
}
const htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptCharset",
  accesskey: "accessKey",
  action: "action",
  allowfullscreen: "allowFullScreen",
  allowtransparency: "allowTransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autoComplete",
  autofocus: "autoFocus",
  autoplay: "autoPlay",
  capture: "capture",
  cellpadding: "cellPadding",
  cellspacing: "cellSpacing",
  challenge: "challenge",
  charset: "charSet",
  checked: "checked",
  class: "className",
  classid: "classID",
  classname: "className",
  className: "className",
  colspan: "colSpan",
  cols: "cols",
  content: "content",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossOrigin",
  data: "data",
  datetime: "dateTime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "encType",
  for: "htmlFor",
  form: "form",
  formaction: "formAction",
  formenctype: "formEncType",
  formmethod: "formMethod",
  formnovalidate: "formNoValidate",
  formtarget: "formTarget",
  frameborder: "frameBorder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hrefLang",
  htmlfor: "htmlFor",
  httpequiv: "httpEquiv",
  icon: "icon",
  id: "id",
  inputmode: "inputMode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyParams",
  keytype: "keyType",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginHeight",
  marginwidth: "marginWidth",
  max: "max",
  maxlength: "maxLength",
  media: "media",
  mediagroup: "mediaGroup",
  method: "method",
  min: "min",
  minlength: "minLength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "noValidate",
  nonce: "nonce",
  onblur: "onBlur",
  onchange: "onChange",
  onclick: "onClick",
  onfocus: "onFocus",
  oninput: "onInput",
  onkeydown: "onKeyDown",
  onkeyup: "onKeyUp",
  onmousedown: "onMouseDown",
  onmouseout: "onMouseOut",
  onmouseover: "onMouseOver",
  onmouseup: "onMouseUp",
  onscroll: "onScroll",
  onsubmit: "onSubmit",
  ontouchend: "onTouchEnd",
  ontouchmove: "onTouchMove",
  ontouchstart: "onTouchStart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radioGroup",
  readonly: "readOnly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowSpan",
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
  spellcheck: "spellCheck",
  src: "src",
  srcdoc: "srcDoc",
  srclang: "srcLang",
  srcset: "srcSet",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabIndex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "useMap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};
const a = htmlAttributes;
const h = Object.assign(reactHyperscript, {
  trust: (html, wrapper = "") => reactHyperscript(wrapper, {
    dangerouslySetInnerHTML: { __html: html }
  }),
  fragment: (props = {}, children = []) => /* @__PURE__ */ require$$0.createElement(Fragment, { ...props }, children),
  displayName: "react"
});
const jsx = createElement;
const getRef = (fn) => ({
  ref: (dom) => fn(dom)
});
function cast(component, initialProps = {}) {
  return forwardRef(
    (props, ref) => component({
      ...initialProps,
      ...props,
      ref
    })
  );
}
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
//# sourceMappingURL=cyano-react.module.js.map
