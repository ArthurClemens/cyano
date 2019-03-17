import react from 'react';

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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
/* global m */


const hookup = (closure, addHooks) => () =>
/* internal vnode, unused */
{
  let setup = false;
  const states = [];
  let statesIndex = 0;
  const depsStates = [];
  let depsIndex = 0;
  const updates = [];
  const teardowns = new Map(); // Keep track of teardowns even when the update was run only once

  const scheduleRender = m.redraw;

  const resetAfterUpdate = () => {
    updates.length = 0;
    depsIndex = 0;
    statesIndex = 0;
  };

  const updateDeps = deps => {
    const index = depsIndex++;
    const prevDeps = depsStates[index] || [];
    const shouldRecompute = deps === undefined ? true // Always compute
    : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
    : !setup // Empty array: only compute at mount
    : false; // Invalid value, do nothing

    depsStates[index] = deps;
    return shouldRecompute;
  };

  const effect = function effect() {
    let isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return (fn, deps) => {
      const shouldRecompute = updateDeps(deps);

      if (shouldRecompute) {
        const runCallbackFn = () => {
          const teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

          if (typeof teardown === "function") {
            // Store this this function to be called at unmount
            teardowns.set(fn, teardown); // At unmount, call re-render at least once

            teardowns.set("_", scheduleRender);
          }
        };

        updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
      }
    };
  };

  const updateState = function updateState(initialValue) {
    let newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
    const index = statesIndex++;

    if (!setup) {
      states[index] = initialValue;
    }

    return [states[index], value => {
      const previousValue = states[index];
      const newValue = newValueFn(value, index);
      states[index] = newValue;

      if (newValue !== previousValue) {
        scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
      }
    }];
  }; // Hook functions


  const useState = initialValue => {
    const newValueFn = (value, index) => typeof value === "function" ? value(states[index]) : value;

    return updateState(initialValue, newValueFn);
  };

  const useReducer = (reducer, initialArg, initFn) => {
    // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).
    const initialState = !setup && initFn ? initFn(initialArg) : initialArg;

    const _updateState = updateState(initialState),
          _updateState2 = _slicedToArray(_updateState, 2),
          state = _updateState2[0],
          setState = _updateState2[1];

    const dispatch = action => setState( // Next state:
    reducer(state, action));

    return [state, dispatch];
  };

  const useRef = initialValue => {
    // A ref is a persisted object that will not be updated, so it has no setter
    const _updateState3 = updateState({
      current: initialValue
    }),
          _updateState4 = _slicedToArray(_updateState3, 1),
          value = _updateState4[0];

    return value;
  };

  const useMemo = (fn, deps) => {
    const shouldRecompute = updateDeps(deps);

    const _ref = !setup ? updateState(fn()) : updateState(),
          _ref2 = _slicedToArray(_ref, 2),
          memoized = _ref2[0],
          setMemoized = _ref2[1];

    if (setup && shouldRecompute) {
      setMemoized(fn());
    }

    return memoized;
  };

  const useCallback = (fn, deps) => useMemo(() => fn, deps);

  const defaultHooks = {
    useState,
    useEffect: effect(true),
    useLayoutEffect: effect(),
    useReducer,
    useRef,
    useMemo,
    useCallback
  };

  const hooks = _objectSpread({}, defaultHooks, addHooks && addHooks(defaultHooks));

  const update = () => {
    updates.forEach(call);
    resetAfterUpdate();
  };

  const teardown = () => {
    [...teardowns.values()].forEach(call);
  };

  return {
    view: vnode => closure(vnode, hooks),
    oncreate: () => (update(), setup = true),
    onupdate: update,
    onremove: teardown
  };
};

const call = Function.prototype.call.bind(Function.prototype.call);

const hookupComponent = component => hookup((vnode, hooks) => component(_objectSpread({}, vnode.attrs, hooks)));

const withHooks = function withHooks(component, customHooks) {
  let rest = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const customHooksFn = customHooks !== undefined && customHooks !== null ? customHooks : () => {};
  return hookupComponent(hooks => component(_objectSpread({}, hooks, customHooksFn(hooks), rest)));
};

/* global m */
const htmlAttributes = {
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  class: "class",
  className: "class",
  enctype: "enctype",
  formaction: "formaction",
  frameborder: "frameborder",
  maxlength: "maxlength",
  minlength: "minlength",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  readonly: "readonly",
  tabindex: "tabindex"
};
const createComponent = (component, customHooksFn) => withHooks(component, customHooksFn, {
  renderer: m,
  htmlAttributes
});

function _defineProperty$1(obj, key, value) {
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

function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty$1(target, key, source[key]);
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

const htmlAttributes$1 = {
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
const createComponent$1 = function createComponent(component, customHooksFn) {
  for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  return function () {
    let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const supportedHooks = {
      useState: React.useState,
      useEffect: React.useEffect,
      useLayoutEffect: React.useLayoutEffect,
      useReducer: React.useReducer,
      useRef: React.useRef,
      useMemo: React.useMemo,
      useCallback: React.useCallback
    };
    const customHooks = customHooksFn !== undefined && customHooksFn !== null ? customHooksFn(supportedHooks) : {};
    return component(_objectSpread$1({
      renderer: reactHyperscript,
      htmlAttributes: htmlAttributes$1
    }, supportedHooks, customHooks, rest, props));
  };
};

export { createComponent as createMithrilComponent, createComponent$1 as createReactComponent };
