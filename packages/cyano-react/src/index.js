import React from "react";
import renderer from "react-hyperscript";
import htmlAttributes from "./htmlAttributes";

export { useState, useEffect, useLayoutEffect, useReducer, useRef, useMemo, useCallback } from "react";

export const a = htmlAttributes;

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
