import React, { forwardRef, useState, useEffect, useLayoutEffect, useReducer, useRef, useMemo, useCallback } from "react";
import renderer from "react-hyperscript";
import htmlAttributes from "./htmlAttributes";

export { useState, useEffect, useLayoutEffect, useReducer, useRef, useMemo, useCallback };

export const a = htmlAttributes;

export const h = renderer || {};
h.trust = (html, wrapper = "") =>
  renderer(wrapper, {
    dangerouslySetInnerHTML: { __html: html }
  });
h.displayName = "react";

export const jsx = React.createElement;

export const getRef = fn => ({ ref: dom => fn(dom) });

export const cast = (component, initialProps) =>
  forwardRef((props = {}, ref) =>
    component({
      ...initialProps,
      ...props,
      ref
    })
  );
