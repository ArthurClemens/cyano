import m from 'mithril';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
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

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = function scheduleRender() {
  return (// Call m within the function body so environments with a global instance of m (like flems.io) don't complain
    m.redraw()
  );
};

var updateDeps = function updateDeps(deps) {
  var state = currentState;
  var depsIndex = state.depsIndex++;
  var prevDeps = state.depsStates[depsIndex] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every(function (x, i) {
    return x === prevDeps[i];
  }) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[depsIndex] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function (fn, deps) {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var depsIndex = state.depsIndex;

      var runCallbackFn = function runCallbackFn() {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at cleanup and unmount
          state.teardowns.set(depsIndex, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      }; // First clean up any previous cleanup function


      var teardown = state.teardowns.get(depsIndex);

      try {
        if (typeof teardown === "function") {
          teardown();
        }
      } finally {
        state.teardowns["delete"](depsIndex);
      }

      state.updates.push(isAsync ? function () {
        return new Promise(function (resolve) {
          return requestAnimationFrame(resolve);
        }).then(runCallbackFn);
      } : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (value) {
    return value;
  };
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], function (value) {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = function useState(initialValue) {
  var state = currentState;

  var newValueFn = function newValueFn(value, index) {
    return typeof value === "function" ? value(state.states[index]) : value;
  };

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = function useReducer(reducer, initialArg, initFn) {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = function getValueDispatch() {
    var _updateState = updateState(initialValue),
        _updateState2 = _slicedToArray(_updateState, 3),
        value = _updateState2[0],
        setValue = _updateState2[1],
        index = _updateState2[2];

    var dispatch = function dispatch(action) {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = function useRef(initialValue) {
  // A ref is a persisted object that will not be updated, so it has no setter
  var _updateState3 = updateState({
    current: initialValue
  }),
      _updateState4 = _slicedToArray(_updateState3, 1),
      value = _updateState4[0];

  return value;
};

var useMemo = function useMemo(fn, deps) {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);

  var _ref = !state.setup ? updateState(fn()) : updateState(),
      _ref2 = _slicedToArray(_ref, 2),
      memoized = _ref2[0],
      setMemoized = _ref2[1];

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = function useCallback(fn, deps) {
  return useMemo(function () {
    return fn;
  }, deps);
};

var withHooks = function withHooks(component, initialProps) {
  var init = function init(vnode) {
    _extends(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      cleanups: new Map(),
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = function update(vnode) {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      _extends(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });

      currentState = prevState;
    }
  };

  var render = function render(vnode) {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode: vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = function teardown(vnode) {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      _toConsumableArray(vnode.state.teardowns.values()).forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  "class": "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  "default": "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
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
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = m || {};
var trust = h.trust;

h.trust = function (html, wrapper) {
  return wrapper ? m(wrapper, trust(html)) : trust(html);
};

h.displayName = "mithril";
h.fragment = m.fragment;
var jsx = m;
var getRef = function getRef(fn) {
  return {
    oncreate: function oncreate(vnode) {
      return fn(vnode.dom);
    }
  };
};
var cast = withHooks;

export { a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState };
