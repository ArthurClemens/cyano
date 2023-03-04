/// <reference types="../../node_modules/@types/mithril" />
import m, { VnodeDOM } from 'mithril';
import { useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState } from 'mithril-hooks';
export { useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState, };
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
export declare const h: m.Static & {
    trust: (html: string, wrapper?: string) => m.Vnode<unknown, unknown>;
};
export type Children = m.Children;
export type Component<Attrs = {}, State = {}> = m.Component<Attrs, State>;
export declare const jsx: m.Static;
export declare const getRef: (fn: (dom: Element) => unknown) => {
    oncreate: (vnode: VnodeDOM) => void;
};
export type ResultNode<T = unknown> = m.Vnode<T, unknown>;
export declare const cast: <T = unknown>(renderFunction: (attrs: T & {
    vnode: m.Vnode<T, import("mithril-hooks/dist/types/MithrilHooks").State>;
    children: m.Children;
}) => m.Children, initialAttrs?: T | undefined) => m.Component<T, import("mithril-hooks/dist/types/MithrilHooks").State>;
export type Cast = typeof cast;
