import {
  createElement,
  ForwardedRef,
  forwardRef,
  Fragment,
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
  // eslint-disable-next-line import/no-unresolved
} from 'react';
import renderer from 'react-hyperscript';

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

type RenderElement = ReactElement | string | number | null;
export type Children = ReactNode | ReactNode[];

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

type FragmentProps = {
  [key: string]: string | number;
};

type HyperScript = typeof renderFunction & {
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

export const h: HyperScript = Object.assign(renderer as typeof renderFunction, {
  trust: (
    html: string,
    wrapper: FunctionComponent | string = '',
  ): ReactElement =>
    renderer(wrapper, {
      dangerouslySetInnerHTML: { __html: html },
    }),
  fragment: (props: FragmentProps = {}, children: ReactNode = []) => (
    <Fragment {...props}>{children}</Fragment>
  ),
  displayName: 'react',
});

export type Component<Props = unknown> = FunctionComponent<Props>;

export const jsx = createElement;

export const getRef = (fn: (dom: Element) => unknown) => ({
  ref: (dom: Element) => fn(dom),
});

export function cast<Props = unknown, TRef = unknown>(
  component: FunctionComponent<Props & { ref: ForwardedRef<TRef> }>,
  initialProps: Partial<Props> = {},
) {
  return forwardRef<TRef, Props>((props, ref) =>
    component({
      ...initialProps,
      ...props,
      ref,
    }),
  );
}

export type Cast = typeof cast;

export type ResultNode = ReactElement;
