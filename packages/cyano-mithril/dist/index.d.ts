import m, { Component, VnodeDOM } from 'mithril';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'mithril-hooks';
export {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
};
export declare const a: {
  accept: string;
  acceptcharset: string;
  accesskey: string;
  action: string;
  allowfullscreen: string;
  allowtransparency: string;
  alt: string;
  async: string;
  autocomplete: string;
  autofocus: string;
  autoplay: string;
  capture: string;
  cellpadding: string;
  cellspacing: string;
  challenge: string;
  charset: string;
  checked: string;
  class: string;
  classid: string;
  classname: string;
  className: string;
  colspan: string;
  cols: string;
  content: string;
  contenteditable: string;
  contextmenu: string;
  controls: string;
  coords: string;
  crossorigin: string;
  data: string;
  datetime: string;
  default: string;
  defer: string;
  dir: string;
  disabled: string;
  download: string;
  draggable: string;
  enctype: string;
  form: string;
  formaction: string;
  formenctype: string;
  formmethod: string;
  formnovalidate: string;
  formtarget: string;
  frameborder: string;
  headers: string;
  height: string;
  hidden: string;
  high: string;
  href: string;
  hreflang: string;
  htmlfor: string;
  httpequiv: string;
  icon: string;
  id: string;
  inputmode: string;
  integrity: string;
  is: string;
  keyparams: string;
  keytype: string;
  kind: string;
  label: string;
  lang: string;
  list: string;
  loop: string;
  low: string;
  manifest: string;
  marginheight: string;
  marginwidth: string;
  max: string;
  maxlength: string;
  media: string;
  mediagroup: string;
  method: string;
  min: string;
  minlength: string;
  multiple: string;
  muted: string;
  name: string;
  novalidate: string;
  nonce: string;
  onblur: string;
  onchange: string;
  onclick: string;
  onfocus: string;
  oninput: string;
  onkeydown: string;
  onkeyup: string;
  onmousedown: string;
  onmouseout: string;
  onmouseover: string;
  onmouseup: string;
  onscroll: string;
  onsubmit: string;
  ontouchend: string;
  ontouchmove: string;
  ontouchstart: string;
  open: string;
  optimum: string;
  pattern: string;
  placeholder: string;
  poster: string;
  preload: string;
  radiogroup: string;
  readonly: string;
  rel: string;
  required: string;
  reversed: string;
  role: string;
  rowspan: string;
  rows: string;
  sandbox: string;
  scope: string;
  scoped: string;
  scrolling: string;
  seamless: string;
  selected: string;
  shape: string;
  size: string;
  sizes: string;
  span: string;
  spellcheck: string;
  src: string;
  srcdoc: string;
  srclang: string;
  srcset: string;
  start: string;
  step: string;
  style: string;
  summary: string;
  tabindex: string;
  target: string;
  title: string;
  type: string;
  usemap: string;
  value: string;
  width: string;
  wmode: string;
  wrap: string;
};
export declare const h: {
  displayName: string;
  trust: (
    html: string,
    wrapper: Component,
  ) => m.Vnode<any, any> | m.Vnode<{}, {}>;
  route: m.Route;
  mount: {
    (element: Element, component: m.ComponentTypes<any, any>): void;
    (element: Element, component: null): void;
  };
  render: (el: Element, vnodes: m.Children) => void;
  redraw: m.Redraw;
  request: {
    <T>(
      options: m.RequestOptions<T> & {
        url: string;
      },
    ): Promise<T>;
    <T_1>(
      url: string,
      options?: m.RequestOptions<T_1> | undefined,
    ): Promise<T_1>;
  };
  jsonp: {
    <T_2>(
      options: m.JsonpOptions & {
        url: string;
      },
    ): Promise<T_2>;
    <T_3>(url: string, options?: m.JsonpOptions | undefined): Promise<T_3>;
  };
  parseQueryString(queryString: string): m.Params;
  buildQueryString(values: m.Params): string;
  parsePathname(
    url: string,
  ): {
    path: string;
    params: m.Params;
  };
  buildPathname(template: string, params?: m.Params | undefined): string;
  fragment(
    attrs: m.CommonAttributes<any, any> & {
      [key: string]: any;
    },
    children: m.ChildArrayOrPrimitive,
  ): m.Vnode<any, any>;
};
export declare const jsx: m.Static;
export declare const getRef: (
  fn: (dom: Element) => unknown,
) => {
  oncreate: (vnode: VnodeDOM) => void;
};
export declare const cast: <T = unknown>(
  renderFunction: (
    attrs: T & {
      vnode: m.Vnode<T, import('mithril-hooks/dist/types/MithrilHooks').State>;
      children: m.Children;
    },
  ) => m.Children,
  initialAttrs?: T | undefined,
) => m.Component<T, import('mithril-hooks/dist/types/MithrilHooks').State>;
