import React from "react";
import renderer from "react-hyperscript";

export { useState, useEffect, useLayoutEffect, useReducer, useRef, useMemo, useCallback } from "react";

export const a = {
  autocomplete: "autoComplete",
  autofocus:    "autoFocus",
  class:        "className",
  className:    "className",
  enctype:      "encType",
  formaction:   "formAction",
  frameborder:  "frameBorder",
  maxlength:    "maxLength",
  minlength:    "minLength",
  onblur:       "onBlur",
  onchange:     "onChange",
  onclick:      "onClick",
  onfocus:      "onFocus",
  oninput:      "onInput",
  onkeydown:    "onKeyDown",
  onkeyup:      "onKeyUp",
  onmousedown:  "onMouseDown",
  onmouseout:   "onMouseOut",
  onmouseover:  "onMouseOver",
  onmouseup:    "onMouseUp",
  onscroll:     "onScroll",
  onsubmit:     "onSubmit",
  ontouchend:   "onTouchEnd",
  ontouchmove:  "onTouchMove",
  ontouchstart: "onTouchStart",
  readonly:     "readOnly",
  tabindex:     "tabIndex",
};

export const h = renderer;
h.trust = (html, wrapper = "") =>
  renderer(wrapper, {
    dangerouslySetInnerHTML: { __html: html }
  });
h.displayName = "react";

export const jsx = React.createElement;

export const getDom = fn => ({ ref: dom => fn(dom) });

export const cast = (component, initialProps) =>
  (props = {}) =>
    component({
      ...initialProps,
      ...props,
    });
