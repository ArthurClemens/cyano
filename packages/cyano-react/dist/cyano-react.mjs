import React, { forwardRef } from 'react';
export { useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState } from 'react';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var htmlAttributes = {
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
  "class": "className",
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
  "default": "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "encType",
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

var renderer = require("react-hyperscript");
var a = htmlAttributes;
var h = renderer || {};

h.trust = function (html) {
  var wrapper = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return renderer(wrapper, {
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
};

h.displayName = "react";

h.fragment = function (props, children) {
  return jsx(React.Fragment, props, children);
};

var jsx = React.createElement;
var getRef = function getRef(fn) {
  return {
    ref: function ref(dom) {
      return fn(dom);
    }
  };
};
var cast = function cast(component, initialProps) {
  return forwardRef(function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var ref = arguments.length > 1 ? arguments[1] : undefined;
    return component(_objectSpread2({}, initialProps, {}, props, {
      ref: ref
    }));
  });
};

export { a, cast, getRef, h, jsx };
