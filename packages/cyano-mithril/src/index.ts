import m, { Component, VnodeDOM } from "mithril";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  withHooks,
} from "mithril-hooks";

import htmlAttributes from "./htmlAttributes";

export {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
};

export const a = htmlAttributes;

export const h = {
  ...m,
  displayName: "mithril",
  trust: (html: string, wrapper: Component) =>
    wrapper ? m(wrapper, m.trust(html)) : m.trust(html),
};

export const jsx = m;

export const getRef = (fn: (dom: Element) => unknown) => ({
  oncreate: (vnode: VnodeDOM) => {
    fn(vnode.dom);
  },
});

export const cast = withHooks;
