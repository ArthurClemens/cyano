import m from "mithril";
import { withHooks } from "mithril-hookup";

const htmlAttributes = {
  autocomplete: "autocomplete",
  autofocus:    "autofocus",
  class:        "class",
  className:    "class",
  enctype:      "enctype",
  formaction:   "formaction",
  frameborder:  "frameborder",
  maxlength:    "maxlength",
  minlength:    "minlength",
  onblur:       "onblur",
  onchange:     "onchange",
  onclick:      "onclick",
  onfocus:      "onfocus",
  oninput:      "oninput",
  onkeydown:    "onkeydown",
  onkeyup:      "onkeyup",
  onmousedown:  "onmousedown",
  onmouseout:   "onmouseout",
  onmouseover:  "onmouseover",
  onmouseup:    "onmouseup",
  onscroll:     "onscroll",
  onsubmit:     "onsubmit",
  ontouchend:   "ontouchend",
  ontouchmove:  "ontouchmove",
  ontouchstart: "ontouchstart",
  readonly:     "readonly",
  tabindex:     "tabindex",
};

export const createComponent = (component, ...rest) => {
  let customHooksFn, ccProps;
  if (typeof rest[0] === "function") {
    customHooksFn = rest[0];
    ccProps = rest[1];
  } else {
    ccProps = rest[0];
  }
  return withHooks(component, customHooksFn, {
    h: m,
    a: htmlAttributes,
    getDom: fn => ({ oncreate: vnode => fn(vnode.dom) }),
    ...(ccProps || {})
  })
};
