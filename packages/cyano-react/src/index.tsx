import React, {
  forwardRef,
  Fragment,
  FunctionComponent,
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

export const h = {
  ...renderer,
  trust: (html: string, wrapper = '') =>
    renderer(wrapper, {
      dangerouslySetInnerHTML: { __html: html },
    }),
  fragment: (props: unknown, children: ReactNode) => (
    <Fragment {...props}>{children}</Fragment>
  ),
  displayName: 'react',
};

export const jsx = React.createElement;

export const getRef = (fn: (dom: Element) => unknown) => ({
  ref: (dom: Element) => fn(dom),
});

export const cast = <T,>(
  component: FunctionComponent<{ ref: React.ForwardedRef<T> }>,
  initialProps: object = {},
) =>
  forwardRef((props = {}, ref: React.ForwardedRef<T>) =>
    component({
      ...initialProps,
      ...props,
      ref,
    }),
  );
