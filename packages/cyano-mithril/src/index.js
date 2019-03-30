import m from "mithril";
import { withHooks, useState, useEffect, useLayoutEffect, useReducer, useRef, useMemo, useCallback } from "mithril-hooks";

export { useState, useEffect, useLayoutEffect, useReducer, useRef, useMemo, useCallback } from "mithril-hooks";

export const a = {
  autocomplete: "autocomplete",
  autofocus:    "autofocus",
  class:        "class",
  className:    "class",
  enctype:      "enctype",
  formaction:   "formaction",
  frameborder:  "frameborder",
  maxlength:    "maxlength",
  minlength:    "minlength",
  onblur:       "onblur",
  onchange:     "onchange",
  onclick:      "onclick",
  onfocus:      "onfocus",
  oninput:      "oninput",
  onkeydown:    "onkeydown",
  onkeyup:      "onkeyup",
  onmousedown:  "onmousedown",
  onmouseout:   "onmouseout",
  onmouseover:  "onmouseover",
  onmouseup:    "onmouseup",
  onscroll:     "onscroll",
  onsubmit:     "onsubmit",
  ontouchend:   "ontouchend",
  ontouchmove:  "ontouchmove",
  ontouchstart: "ontouchstart",
  readonly:     "readonly",
  tabindex:     "tabindex",
};

export const h = m;
const trust = h.trust;
h.trust = (html, wrapper) =>
  wrapper
    ? m(wrapper, trust(html))
    : trust(html);
h.displayName = "mithril";

export const jsx = m;

export const getDom = fn => ({ oncreate: vnode => fn(vnode.dom) });

export const cast = (component, initialProps) =>
  withHooks(component, initialProps);
