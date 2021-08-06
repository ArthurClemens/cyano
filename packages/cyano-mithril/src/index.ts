import m, { VnodeDOM } from 'mithril';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  withHooks,
} from 'mithril-hooks';

import htmlAttributes from './htmlAttributes';

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

export const h: m.Static & {
  trust: (html: string, wrapper?: string) => m.Vnode<unknown, unknown>;
} = m;

const { trust } = m;

h.trust = (html: string, wrapper?: string) =>
  wrapper ? h(wrapper, trust(html)) : trust(html);

export type Children = m.Children;
export type Component<Attrs = {}, State = {}> = m.Component<Attrs, State>;

export const jsx = m;

export const getRef = (fn: (dom: Element) => unknown) => ({
  oncreate: (vnode: VnodeDOM) => {
    fn(vnode.dom);
  },
});

export type ResultNode<T = unknown> = m.Vnode<T, unknown>;

export const cast = withHooks;

export type Cast = typeof cast;
