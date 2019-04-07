import m from "mithril";
import { withHooks, useState, useEffect, useLayoutEffect, useReducer, useRef, useMemo, useCallback } from "mithril-hooks";
import htmlAttributes from "./htmlAttributes";

export { useState, useEffect, useLayoutEffect, useReducer, useRef, useMemo, useCallback } from "mithril-hooks";

export const a = htmlAttributes;

export const h = m || {};
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
