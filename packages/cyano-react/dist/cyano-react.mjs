import react from 'react';
export { useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState } from 'react';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/* eslint-disable complexity, max-statements */

var classIdSplit = /([\.#]?[a-zA-Z0-9_:-]+)/;
var notClassId = /^\.|#/;
var parseTag_1 = parseTag;

function parseTag(tag, props) {
  if (!tag) {
    return 'div';
  }

  var noId = !('id' in props);
  var tagParts = tag.split(classIdSplit);
  var tagName = null;

  if (notClassId.test(tagParts[1])) {
    tagName = 'div';
  }

  var classes;
  var part;
  var type;
  var i;

  for (i = 0; i < tagParts.length; i++) {
    part = tagParts[i];

    if (!part) {
      continue;
    }

    type = part.charAt(0);

    if (!tagName) {
      tagName = part;
    } else if (type === '.') {
      classes = classes || [];
      classes.push(part.substring(1, part.length));
    } else if (type === '#' && noId) {
      props.id = part.substring(1, part.length);
    }
  }

  if (classes) {
    if (props.className) {
      classes.push(props.className);
    }

    props.className = classes.join(' ');
  }

  return tagName ? tagName.toLowerCase() : 'div';
}

var reactHyperscript = h;

function h(componentOrTag, properties, children) {
  // if only one argument which is an array, wrap items with React.Fragment
  if (arguments.length === 1 && Array.isArray(componentOrTag)) {
    return h(react.Fragment, null, componentOrTag);
  } else if (!children && isChildren(properties)) {
    // If a child array or text node are passed as the second argument, shift them
    children = properties;
    properties = {};
  } else if (arguments.length === 2) {
    // If no children were passed, we don't want to pass "undefined"
    // and potentially overwrite the `children` prop
    children = [];
  }

  properties = properties ? Object.assign({}, properties) : {}; // Supported nested dataset attributes

  if (properties.dataset) {
    Object.keys(properties.dataset).forEach(function unnest(attrName) {
      var dashedAttr = attrName.replace(/([a-z])([A-Z])/, function dash(match) {
        return match[0] + '-' + match[1].toLowerCase();
      });
      properties['data-' + dashedAttr] = properties.dataset[attrName];
    });
    properties.dataset = undefined;
  } // Support nested attributes


  if (properties.attributes) {
    Object.keys(properties.attributes).forEach(function unnest(attrName) {
      properties[attrName] = properties.attributes[attrName];
    });
    properties.attributes = undefined;
  } // When a selector, parse the tag name and fill out the properties object


  if (typeof componentOrTag === 'string') {
    componentOrTag = parseTag_1(componentOrTag, properties);
  } // Create the element


  var args = [componentOrTag, properties].concat(children);
  return react.createElement.apply(react, args);
}

function isChildren(x) {
  return typeof x === 'string' || typeof x === 'number' || Array.isArray(x);
}

const a = {
  autocomplete: "autoComplete",
  autofocus: "autoFocus",
  class: "className",
  className: "className",
  enctype: "encType",
  formaction: "formAction",
  frameborder: "frameBorder",
  maxlength: "maxLength",
  minlength: "minLength",
  onblur: "onBlur",
  onchange: "onChange",
  onclick: "onClick",
  onfocus: "onFocus",
  oninput: "onInput",
  onkeydown: "onKeyDown",
  onkeyup: "onKeyUp",
  onmousedown: "onMouseDown",
  onmouseout: "onMouseOut",
  onmouseover: "onMouseOver",
  onmouseup: "onMouseUp",
  onscroll: "onScroll",
  onsubmit: "onSubmit",
  ontouchend: "onTouchEnd",
  ontouchmove: "onTouchMove",
  ontouchstart: "onTouchStart",
  readonly: "readOnly",
  tabindex: "tabIndex"
};
const h$1 = reactHyperscript;

h$1.trust = function (html) {
  let wrapper = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return reactHyperscript(wrapper, {
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
};

h$1.displayName = "react";
const jsx = react.createElement;
const getDom = fn => ({
  ref: dom => fn(dom)
});
const createComponent = (component, initialProps) => function () {
  let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return component(_objectSpread({}, initialProps, props));
};

export { a, createComponent, getDom, h$1 as h, jsx };
