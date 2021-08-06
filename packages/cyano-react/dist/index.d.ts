import {
  createElement,
  ForwardedRef,
  FunctionComponent,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
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
  for: string;
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
declare type RenderElement = ReactElement | string | number | null;
export declare type Children = ReactNode | ReactNode[];
declare function renderFunction(
  children?: Children | ReadonlyArray<RenderElement> | RenderElement,
): ReactElement;
declare function renderFunction<P = unknown>(
  componentOrTag: FunctionComponent<P> | string,
  children?: Children | ReadonlyArray<RenderElement> | RenderElement,
): ReactElement;
declare function renderFunction<P = unknown>(
  componentOrTag: FunctionComponent<P> | string,
  properties: P | null,
  children?: Children | ReadonlyArray<RenderElement> | RenderElement,
): ReactElement<P>;
declare type FragmentProps = {
  [key: string]: string | number;
};
declare type HyperScript = typeof renderFunction & {
  trust: (
    html: string,
    wrapper?: string,
  ) => ReactElement<{
    dangerouslySetInnerHTML: {
      __html: string;
    };
  }>;
  fragment: (props?: FragmentProps, children?: ReactNode) => JSX.Element;
  displayName: string;
};
export declare const h: HyperScript;
export declare type Component<Props = unknown> = FunctionComponent<Props>;
export declare const jsx: typeof createElement;
export declare const getRef: (fn: (dom: Element) => unknown) => {
  ref: (dom: Element) => unknown;
};
export declare function cast<Props = unknown, TRef = unknown>(
  component: FunctionComponent<
    Props & {
      ref: ForwardedRef<TRef>;
    }
  >,
  initialProps?: Partial<Props>,
): import('react').ForwardRefExoticComponent<
  import('react').PropsWithoutRef<Props> & import('react').RefAttributes<TRef>
>;
export declare type Cast = typeof cast;
export declare type ResultNode = ReactElement;
