import m from "mithril";
import { withHooks, useState, useEffect, useLayoutEffect, useReducer, useRef, useMemo, useCallback } from "mithril-hooks";
import htmlAttributes from "./htmlAttributes";

export { useState, useEffect, useLayoutEffect, useReducer, useRef, useMemo, useCallback };

export const a = htmlAttributes;

export const h = m || {};

const trust = h.trust;
h.trust = (html, wrapper) =>
  wrapper
    ? m(wrapper, trust(html))
    : trust(html);
h.displayName = "mithril";

h.fragment = m.fragment;

export const jsx = m;

export const getRef = fn => ({ oncreate: vnode => fn(vnode.dom) });

export const cast = withHooks;
