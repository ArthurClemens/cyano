import React from "react";
import renderer from "react-hyperscript";

const htmlAttributes = {
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

renderer.trust = (html, wrapper = "") =>
  renderer(wrapper, {
    dangerouslySetInnerHTML: { __html: html }
  });

export const createComponent = (component, ...rest) => {
  let customHooksFn, initialProps;
  if (typeof rest[0] === "function") {
    customHooksFn = rest[0];
    initialProps = rest[1];
  } else {
    initialProps = rest[0];
  }
  return (props = {}) => {
    const supportedHooks = {
      useState:        React.useState,
      useEffect:       React.useEffect,
      useLayoutEffect: React.useLayoutEffect,
      useReducer:      React.useReducer,
      useRef:          React.useRef,
      useMemo:         React.useMemo,
      useCallback:     React.useCallback,
    };
    const customHooks = customHooksFn !== undefined && customHooksFn !== null
      ? customHooksFn(supportedHooks)
      : {};
    return component({
      h: renderer,
      a: htmlAttributes,
      getDom: fn => ({ ref: dom => fn(dom) }),
      ...supportedHooks,
      ...customHooks,
      ...(initialProps || {}),
      ...props,
    });
  };
}; 
