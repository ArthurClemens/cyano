/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../cyano-mithril/dist/cyano-mithril.module.js":
/*!********************************************************!*\
  !*** ../../cyano-mithril/dist/cyano-mithril.module.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ a),
/* harmony export */   "cast": () => (/* binding */ cast),
/* harmony export */   "getRef": () => (/* binding */ getRef),
/* harmony export */   "h": () => (/* binding */ h),
/* harmony export */   "jsx": () => (/* binding */ jsx),
/* harmony export */   "useCallback": () => (/* binding */ useCallback),
/* harmony export */   "useEffect": () => (/* binding */ useEffect),
/* harmony export */   "useLayoutEffect": () => (/* binding */ useLayoutEffect),
/* harmony export */   "useMemo": () => (/* binding */ useMemo),
/* harmony export */   "useReducer": () => (/* binding */ useReducer),
/* harmony export */   "useRef": () => (/* binding */ useRef),
/* harmony export */   "useState": () => (/* binding */ useState)
/* harmony export */ });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
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
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
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

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
/*! (c) 2020 Andrea Giammarchi */


var $stringify = JSON.stringify;
var Primitive = String; // it could be Number

var primitive = 'string'; // it could be 'number'

var object = 'object';

var noop = function noop(_, value) {
  return value;
};

var set = function set(known, input, value) {
  var index = Primitive(input.push(value) - 1);
  known.set(value, index);
  return index;
};

var stringify = function stringify(value, replacer, space) {
  var $ = replacer && _typeof(replacer) === object ? function (k, v) {
    return k === '' || -1 < replacer.indexOf(k) ? v : void 0;
  } : replacer || noop;
  var known = new Map();
  var input = [];
  var output = [];
  var i = +set(known, input, $.call({
    '': value
  }, '', value));
  var firstRun = !i;

  while (i < input.length) {
    firstRun = true;
    output[i] = $stringify(input[i++], replace, space);
  }

  return '[' + output.join(',') + ']';

  function replace(key, value) {
    if (firstRun) {
      firstRun = !firstRun;
      return value;
    }

    var after = $.call(this, key, value);

    switch (_typeof(after)) {
      case object:
        if (after === null) return after;

      case primitive:
        return known.get(after) || set(known, input, after);
    }

    return after;
  }
};

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = function scheduleRender() {
  return (// Call m within the function body so environments with a global instance of m (like flems.io) don't complain
    mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw()
  );
};

var updateDeps = function updateDeps(deps) {
  var state = currentState;
  var depsIndex = state.depsIndex;
  state.depsIndex += 1;
  var prevDeps = state.depsStates[depsIndex] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every(function (x, i) {
    return x === prevDeps[i];
  }) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  if (deps !== undefined) {
    state.depsStates[depsIndex] = deps;
  }

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

        if (typeof teardown === 'function') {
          // Store this this function to be called at cleanup and unmount
          state.teardowns.set(depsIndex, teardown); // At unmount, call re-render at least once

          state.teardowns.set('_', scheduleRender);
        }
      }; // First clean up any previous cleanup function


      var teardown = state.teardowns.get(depsIndex);

      try {
        if (typeof teardown === 'function') {
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

var updateState = function updateState(initialState, newValueFn) {
  var state = currentState;
  var index = state.statesIndex;
  state.statesIndex += 1;

  if (!state.setup) {
    state.states[index] = initialState;
  }

  return [state.states[index], function (value) {
    var previousValue = state.states[index];
    var newValue = newValueFn ? newValueFn(value, index) : value;
    state.states[index] = newValue;

    if (stringify(newValue) !== stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = function useState(initialState) {
  var state = currentState;

  var newValueFn = function newValueFn(value, index) {
    return typeof value === 'function' ? value(state.states[index], index) : value;
  };

  return updateState(initialState, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

function useReducer(reducer, initialState, initFn) {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialValue).

  var initValue = !state.setup && initFn ? initFn(initialState) : initialState;

  var getValueDispatch = function getValueDispatch() {
    var _updateState = updateState(initValue),
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
}

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

var useCallback = function useCallback(callback, deps) {
  return useMemo(function () {
    return callback;
  }, deps);
};

var withHooks = function withHooks(renderFunction, initialAttrs) {
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
  }; // eslint-disable-next-line consistent-return


  var render = function render(vnode) {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return renderFunction(_objectSpread2(_objectSpread2(_objectSpread2({}, initialAttrs), vnode.attrs), {}, {
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
      vnode.state.teardowns.forEach(call);
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
var h = (mithril__WEBPACK_IMPORTED_MODULE_0___default()) || {};
var trust = h.trust;

h.trust = function (html, wrapper) {
  return wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);
};

h.displayName = "mithril";
h.fragment = (mithril__WEBPACK_IMPORTED_MODULE_0___default().fragment);
var jsx = (mithril__WEBPACK_IMPORTED_MODULE_0___default());

var getRef = function getRef(fn) {
  return {
    oncreate: function oncreate(vnode) {
      return fn(vnode.dom);
    }
  };
};

var cast = withHooks;


/***/ }),

/***/ "../../tests-cyano-shared/app/AppLayout.js":
/*!*************************************************!*\
  !*** ../../tests-cyano-shared/app/AppLayout.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


var _AppLayout = function _AppLayout(_ref) {
  var Layout = _ref.Layout,
      Navigation = _ref.Navigation,
      route = _ref.route,
      router = _ref.router,
      content = _ref.content,
      examples = _ref.examples,
      tests = _ref.tests;
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Layout, {
    route: route,
    router: router,
    navigation: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Navigation, {
      router: router,
      currentPath: route.path,
      parts: [["Examples", examples], ["Cypress tests", tests]]
    })
  }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(content));
};

var AppLayout = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_AppLayout);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppLayout);

/***/ }),

/***/ "../../tests-cyano-shared/app/Layout.js":
/*!**********************************************!*\
  !*** ../../tests-cyano-shared/app/Layout.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


var _Layout = function _Layout(_ref) {
  var navigation = _ref.navigation,
      children = _ref.children;
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "layout"
  }, [navigation, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    // key: "component",
    className: "component"
  }, children)]);
};

var Layout = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_Layout);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "../../tests-cyano-shared/app/Navigation.js":
/*!**************************************************!*\
  !*** ../../tests-cyano-shared/app/Navigation.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _Link = function _Link(_ref) {
  var router = _ref.router,
      name = _ref.name,
      label = _ref.label,
      path = _ref.path,
      currentPath = _ref.currentPath;
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("li", {}, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", _defineProperty({
    href: path,
    className: path === currentPath ? "is-active" : ""
  }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), function (e) {
    return e.preventDefault(), router.navigate(name);
  }), label));
};

var Link = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_Link);

var _MenuList = function _MenuList(_ref2) {
  var router = _ref2.router,
      title = _ref2.title,
      links = _ref2.links,
      currentPath = _ref2.currentPath;
  return [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("p", {
    key: "label",
    className: "menu-label"
  }, title), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("ul", {
    key: "list",
    className: "menu-list"
  }, links.map(function (link) {
    return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Link, _objectSpread(_objectSpread({}, link), {}, {
      router: router,
      currentPath: currentPath
    }));
  }))];
};

var MenuList = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_MenuList);

var _Navigation = function _Navigation(_ref3) {
  var router = _ref3.router,
      currentPath = _ref3.currentPath,
      parts = _ref3.parts;
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("aside", {
    className: "menu"
  }, parts.map(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        title = _ref5[0],
        links = _ref5[1];

    return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(MenuList, {
      router: router,
      title: title,
      links: links,
      currentPath: currentPath
    });
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_Navigation));

/***/ }),

/***/ "../../tests-cyano-shared/app/createApp.js":
/*!*************************************************!*\
  !*** ../../tests-cyano-shared/app/createApp.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createApp": () => (/* binding */ createApp)
/* harmony export */ });
/* harmony import */ var _AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLayout */ "../../tests-cyano-shared/app/AppLayout.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "../../tests-cyano-shared/app/Layout.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation */ "../../tests-cyano-shared/app/Navigation.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "../../tests-cyano-shared/app/routes.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router */ "../../tests-cyano-shared/app/router.js");





var createApp = function createApp(_ref) {
  var _setContent = _ref.setContent,
      cast = _ref.cast;

  var _createRoutes = (0,_routes__WEBPACK_IMPORTED_MODULE_3__.createRoutes)(cast),
      examples = _createRoutes.examples,
      tests = _createRoutes.tests;

  var routes = examples.concat(tests);
  (0,_router__WEBPACK_IMPORTED_MODULE_4__.setupRouter)({
    routes: routes,
    setContent: function setContent(_ref2) {
      var content = _ref2.content,
          route = _ref2.route,
          router = _ref2.router;
      return _setContent({
        AppLayout: _AppLayout__WEBPACK_IMPORTED_MODULE_0__.default,
        Layout: _Layout__WEBPACK_IMPORTED_MODULE_1__.default,
        Navigation: _Navigation__WEBPACK_IMPORTED_MODULE_2__.default,
        routes: routes,
        examples: examples,
        tests: tests,
        content: content,
        route: route,
        router: router
      });
    }
  });
};

/***/ }),

/***/ "../../tests-cyano-shared/app/router.js":
/*!**********************************************!*\
  !*** ../../tests-cyano-shared/app/router.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupRouter": () => (/* binding */ setupRouter)
/* harmony export */ });
/* harmony import */ var router5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! router5 */ "../../tests-cyano-shared/node_modules/router5/dist/index.es.js");
/* harmony import */ var router5_plugin_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! router5-plugin-browser */ "../../tests-cyano-shared/node_modules/router5-plugin-browser/dist/index.es.js");


var routerOptions = {
  useHash: true,
  hashPrefix: "!"
};
var setupRouter = function setupRouter(_ref) {
  var routes = _ref.routes,
      setContent = _ref.setContent;
  var defaultRoute = routes[0].name;
  var router = (0,router5__WEBPACK_IMPORTED_MODULE_0__.default)(routes, {
    defaultRoute: defaultRoute
  });
  router.usePlugin((0,router5_plugin_browser__WEBPACK_IMPORTED_MODULE_1__.default)(routerOptions));
  router.subscribe(function (_ref2) {
    var route = _ref2.route;
    var routeData = routes.find(function (_ref3) {
      var path = _ref3.path;
      return path === route.path;
    });

    if (routeData) {
      var component = routeData.component;
      setContent({
        content: component,
        route: route,
        router: router
      });
    }
  });
  router.start();
};

/***/ }),

/***/ "../../tests-cyano-shared/app/routes.js":
/*!**********************************************!*\
  !*** ../../tests-cyano-shared/app/routes.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRoutes": () => (/* binding */ createRoutes)
/* harmony export */ });
/* harmony import */ var _examples_Toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../examples/Toggle */ "../../tests-cyano-shared/examples/Toggle.js");
/* harmony import */ var _examples_custom_hooks_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../examples/custom-hooks-reducer */ "../../tests-cyano-shared/examples/custom-hooks-reducer.js");
/* harmony import */ var _examples_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../examples/chat */ "../../tests-cyano-shared/examples/chat/index.js");
/* harmony import */ var _cypress_tests_custom_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cypress-tests/custom-hooks */ "../../tests-cyano-shared/cypress-tests/custom-hooks.js");
/* harmony import */ var _cypress_tests_Trust__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cypress-tests/Trust */ "../../tests-cyano-shared/cypress-tests/Trust.js");
/* harmony import */ var _cypress_tests_Children__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cypress-tests/Children */ "../../tests-cyano-shared/cypress-tests/Children.js");
/* harmony import */ var _cypress_tests_initial_props__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cypress-tests/initial-props */ "../../tests-cyano-shared/cypress-tests/initial-props.js");
/* harmony import */ var _cypress_tests_toggle_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cypress-tests/toggle-jsx */ "../../tests-cyano-shared/cypress-tests/toggle-jsx.js");
/* harmony import */ var _cypress_tests_getRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cypress-tests/getRef */ "../../tests-cyano-shared/cypress-tests/getRef.js");
/* harmony import */ var _cypress_tests_forwardRef__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cypress-tests/forwardRef */ "../../tests-cyano-shared/cypress-tests/forwardRef.js");
/* harmony import */ var _cypress_tests_Fragment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../cypress-tests/Fragment */ "../../tests-cyano-shared/cypress-tests/Fragment.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// examples


 // Cypress tests










var toLinkData = function toLinkData(_ref) {
  var _ref2 = _slicedToArray(_ref, 3),
      label = _ref2[0],
      path = _ref2[1],
      component = _ref2[2];

  return {
    name: label.toLowerCase().replace(" ", "_"),
    label: label,
    path: path,
    component: component
  };
};

var createRoutes = function createRoutes(cast) {
  var examples = [["Simple toggle", "/toggle", _examples_Toggle__WEBPACK_IMPORTED_MODULE_0__.default], ["Custom hooks with useReducer", "/custom-hooks-usereducer", _examples_custom_hooks_reducer__WEBPACK_IMPORTED_MODULE_1__.default], ["Custom hooks chat example", "/custom-hooks-chat", _examples_chat__WEBPACK_IMPORTED_MODULE_2__.default]].map(toLinkData);
  var tests = [["Test custom hooks", "/TestCustomHooks", _cypress_tests_custom_hooks__WEBPACK_IMPORTED_MODULE_3__.default], ["Test initial props", "/TestInitialProps", _cypress_tests_initial_props__WEBPACK_IMPORTED_MODULE_6__.default], ["Test getRef", "/GetRef", _cypress_tests_getRef__WEBPACK_IMPORTED_MODULE_8__.default], ["Test trust", "/TestTrust", _cypress_tests_Trust__WEBPACK_IMPORTED_MODULE_4__.default], ["Test children", "/TestChildren", _cypress_tests_Children__WEBPACK_IMPORTED_MODULE_5__.default], ["Test forward ref", "/ForwardRef", _cypress_tests_forwardRef__WEBPACK_IMPORTED_MODULE_9__.default], ["Test toggle JSX", "/ToggleJSX", _cypress_tests_toggle_jsx__WEBPACK_IMPORTED_MODULE_7__.default], ["Test fragment", "/Fragment", _cypress_tests_Fragment__WEBPACK_IMPORTED_MODULE_10__.default]].map(toLinkData);
  return {
    examples: examples,
    tests: tests
  };
};

/***/ }),

/***/ "../../tests-cyano-shared/cypress-tests/Children.js":
/*!**********************************************************!*\
  !*** ../../tests-cyano-shared/cypress-tests/Children.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


var _Children = function _Children(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    "data-test-id": "Children"
  }, [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h2", title), children]);
};

var _Wrapper = function _Wrapper(_ref2) {
  var title = _ref2.title,
      Children = _ref2.Children;
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", null, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Children, {
    title: title
  }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", null, "This is a child")));
};

var Children = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_Children);
var Wrapper = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_Wrapper, {
  title: "Children",
  Children: Children
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);

/***/ }),

/***/ "../../tests-cyano-shared/cypress-tests/Fragment.js":
/*!**********************************************************!*\
  !*** ../../tests-cyano-shared/cypress-tests/Fragment.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


var _Fragment = function _Fragment() {
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div.wrapper", {
    key: "controls",
    "data-test-id": "wrapper"
  }, [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div.first", {
    key: 1,
    "data-test-id": "child-1"
  }, 1), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    key: "numbers"
  }, [2, 3, 4].map(function (n) {
    return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
      key: n,
      "data-test-id": "child-".concat(n)
    }, n);
  }))]);
};

var Fragment = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_Fragment);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fragment);

/***/ }),

/***/ "../../tests-cyano-shared/cypress-tests/Trust.js":
/*!*******************************************************!*\
  !*** ../../tests-cyano-shared/cypress-tests/Trust.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


var _Trust = function _Trust() {
  return [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    key: "svg",
    "data-test-id": "svg"
  }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"/></svg>")), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    key: "html",
    "data-test-id": "html"
  }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("<ul><li>Skydiving</li><li>Alaska</li><li>Kite surfing</li></ul>")), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    key: "wrapper",
    "data-test-id": "wrapper"
  }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("Hello", "span"))];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_Trust));

/***/ }),

/***/ "../../tests-cyano-shared/cypress-tests/custom-hooks.js":
/*!**************************************************************!*\
  !*** ../../tests-cyano-shared/cypress-tests/custom-hooks.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useCount = function useCount() {
  var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var _useState = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  return [count, // value
  function () {
    return setCount(count + 1);
  }, // increment
  function () {
    return setCount(count - 1);
  } // decrement
  ];
};

var useCounter = function useCounter() {
  // A custom hook that uses another custom hook.
  var createNewCounter = function createNewCounter() {
    return {
      id: new Date().getTime(),
      initialCount: Math.round(Math.random() * 1000)
    };
  };

  var firstCounter = createNewCounter();

  var _useArray = useArray([firstCounter]),
      _useArray2 = _slicedToArray(_useArray, 3),
      counters = _useArray2[0],
      addCounter = _useArray2[1],
      removeCounter = _useArray2[2];

  return [counters, function () {
    return addCounter(createNewCounter());
  }, function (remove) {
    return removeCounter(remove);
  }];
};

var useArray = function useArray() {
  var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var _useState3 = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(initialValue),
      _useState4 = _slicedToArray(_useState3, 2),
      arr = _useState4[0],
      setArr = _useState4[1];

  return [arr, function (add) {
    return setArr(arr.concat(add));
  }, function (remove) {
    return setArr(arr.filter(function (item) {
      return item !== remove;
    }));
  }];
};

var _CustomHooks = function _CustomHooks() {
  var _useCount = useCount(0),
      _useCount2 = _slicedToArray(_useCount, 3),
      count = _useCount2[0],
      increment = _useCount2[1],
      decrement = _useCount2[2];

  var _useCounter = useCounter(),
      _useCounter2 = _slicedToArray(_useCounter, 3),
      counters = _useCounter2[0],
      addCounter = _useCounter2[1],
      removeCounter = _useCounter2[2];

  var _counters$reverse = counters.reverse(),
      _counters$reverse2 = _slicedToArray(_counters$reverse, 1),
      lastItem = _counters$reverse2[0];

  return [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    key: "TestCounter",
    "data-test-id": "TestCounter"
  }, [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h2", "TestCounter"), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("p", [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", "count: "), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
    "data-test-id": "count"
  }, count)]), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("button", _defineProperty({
    "data-test-id": "decrement",
    disabled: count === 0
  }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), function () {
    return decrement();
  }), "Less"), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("button", _defineProperty({
    "data-test-id": "increment"
  }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), function () {
    return increment();
  }), "More")]), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    key: "TestCounters",
    "data-test-id": "TestCounters"
  }, [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h2", "TestCounters"), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("p", [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", "counters: "), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
    "data-test-id": "counters"
  }, counters.length)]), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("button", _defineProperty({
    "data-test-id": "decrement",
    disabled: counters.length === 0
  }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), function () {
    return removeCounter(lastItem);
  }), "Remove"), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("button", _defineProperty({
    "data-test-id": "increment"
  }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), function () {
    return addCounter();
  }), "Add")])];
};

var CustomHooks = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_CustomHooks);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomHooks);

/***/ }),

/***/ "../../tests-cyano-shared/cypress-tests/forwardRef.js":
/*!************************************************************!*\
  !*** ../../tests-cyano-shared/cypress-tests/forwardRef.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var _Input = function _Input(props) {
  var _objectSpread2;

  var _useState = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var _useState3 = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("some input"),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    "data-test-id": "component-input"
  }, [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("input", _objectSpread((_objectSpread2 = {
    key: "input",
    "data-test-id": "input",
    value: value
  }, _defineProperty(_objectSpread2, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), function (e) {
    return setValue(e.target.value);
  }), _defineProperty(_objectSpread2, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), function (e) {
    return setValue(e.target.value);
  }), _objectSpread2), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function (dom) {
    return dom && !domElement && (setDomElement(dom), // pass back to parent
    props.ref && props.ref(dom));
  }))), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("p", {
    key: "label",
    "data-test-id": "feedback"
  }, value), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("p", {
    key: "feedback"
  }, [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
    key: "label"
  }, "input ref: "), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
    key: "domElement",
    "data-test-id": "domElement"
  }, domElement && domElement.getAttribute("data-test-id"))])]);
};

var _ForwardRef = function _ForwardRef(_ref) {
  var Input = _ref.Input;

  var _useState5 = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
      _useState6 = _slicedToArray(_useState5, 2),
      domElement = _useState6[0],
      setDomElement = _useState6[1];

  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    "data-test-id": "component-parent"
  }, [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Input, {
    key: "parent",
    ref: function ref(dom) {
      return setDomElement(dom);
    }
  }), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("p", {
    key: "feedback"
  }, [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
    key: "label"
  }, "Parent ref: "), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
    key: "domElement",
    "data-test-id": "domElement"
  }, domElement && domElement.getAttribute("data-test-id"))])]);
};

var Input = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_Input);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_ForwardRef, {
  Input: Input
}));

/***/ }),

/***/ "../../tests-cyano-shared/cypress-tests/getRef.js":
/*!********************************************************!*\
  !*** ../../tests-cyano-shared/cypress-tests/getRef.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var _GetRef = function _GetRef() {
  var domRef = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();

  var _useState = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0),
      _useState2 = _slicedToArray(_useState, 2),
      render = _useState2[0],
      forceRerender = _useState2[1];

  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    "data-test-id": "DomElementRef"
  }, [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", "Element to get a reference of: "), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", _objectSpread({}, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function (dom) {
    var shouldRerender = !domRef.current;
    domRef.current = domRef.current || dom;
    shouldRerender && forceRerender(render + 1);
  })), "QWERTY"), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("p", [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", "DOM element textContent: "), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
    "data-test-id": "textContent"
  }, domRef.current && domRef.current.textContent)])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_GetRef));

/***/ }),

/***/ "../../tests-cyano-shared/cypress-tests/initial-props.js":
/*!***************************************************************!*\
  !*** ../../tests-cyano-shared/cypress-tests/initial-props.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


var _InitialProps = function _InitialProps(_ref) {
  var title = _ref.title,
      defaultTitle = _ref.defaultTitle;
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    "data-test-id": "InitialProps"
  }, [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h2", null, title || defaultTitle) // h("h2", defaultTitle),
  ]);
};

var _Wrapper = function _Wrapper(_ref2) {
  var title = _ref2.title,
      InitialProps = _ref2.InitialProps;
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", null, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(InitialProps, {
    title: title
  }));
};

var InitialProps = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_InitialProps, {
  defaultTitle: "default title"
});
var Wrapper = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_Wrapper, {
  title: "Hello",
  InitialProps: InitialProps
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);

/***/ }),

/***/ "../../tests-cyano-shared/cypress-tests/toggle-jsx.js":
/*!************************************************************!*\
  !*** ../../tests-cyano-shared/cypress-tests/toggle-jsx.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/* jsx needs to be in scope for JSX parsing to work */

var _Toggle = function _Toggle(_ref) {
  var title = _ref.title;

  var _useState = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false),
      _useState2 = _slicedToArray(_useState, 2),
      clicked = _useState2[0],
      setClicked = _useState2[1];

  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "toggle"
  }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h2", null, title), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", _extends({
    className: "button ".concat(clicked ? "is-info" : "")
  }, _defineProperty({}, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), function () {
    return setClicked(!clicked);
  })), "Toggle"), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "info"
  }, clicked ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", "On") : Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", "Off")), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", null, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"/></svg>")));
};

var Toggle = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_Toggle);

var _Wrapper = function _Wrapper() {
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Toggle, {
    title: "Switch!"
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_Wrapper));

/***/ }),

/***/ "../../tests-cyano-shared/examples/Toggle.js":
/*!***************************************************!*\
  !*** ../../tests-cyano-shared/examples/Toggle.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var _Toggle = function _Toggle() {
  var _useState = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false),
      _useState2 = _slicedToArray(_useState, 2),
      clicked = _useState2[0],
      setClicked = _useState2[1];

  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "toggle"
  }, [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("button", _defineProperty({
    className: "button ".concat(clicked ? "is-info" : "")
  }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), function () {
    return setClicked(!clicked);
  }), "Toggle"), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "info"
  }, clicked ? "On" : "Off")]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_Toggle));

/***/ }),

/***/ "../../tests-cyano-shared/examples/chat/ChatRecipientPicker.js":
/*!*********************************************************************!*\
  !*** ../../tests-cyano-shared/examples/chat/ChatRecipientPicker.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _FriendStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FriendStatus */ "../../tests-cyano-shared/examples/chat/FriendStatus.js");
/* harmony import */ var _friends_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./friends-data */ "../../tests-cyano-shared/examples/chat/friends-data.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var _ChatRecipientPicker = function _ChatRecipientPicker() {
  var _h;

  var _useState = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("1"),
      _useState2 = _slicedToArray(_useState, 2),
      recipientId = _useState2[0],
      setRecipientId = _useState2[1];

  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "controls"
  }, [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_FriendStatus__WEBPACK_IMPORTED_MODULE_1__.default, {
    key: recipientId,
    friendId: recipientId
  }), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "select",
    key: "select"
  }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("select", (_h = {}, _defineProperty(_h, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), function (e) {
    return setRecipientId(e.target.value);
  }), _defineProperty(_h, "value", recipientId), _h), _friends_data__WEBPACK_IMPORTED_MODULE_2__.default.map(function (friend) {
    return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("option", {
      value: friend.id,
      key: friend.id
    }, friend.name);
  })))]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_ChatRecipientPicker));

/***/ }),

/***/ "../../tests-cyano-shared/examples/chat/Friend.js":
/*!********************************************************!*\
  !*** ../../tests-cyano-shared/examples/chat/Friend.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _FriendStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FriendStatus */ "../../tests-cyano-shared/examples/chat/FriendStatus.js");



var _Friend = function _Friend(_ref) {
  var friend = _ref.friend,
      hasChatApi = _ref.hasChatApi;
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "friend"
  }, [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "avatar",
    style: {
      backgroundImage: "url(".concat(friend.avatar, ")")
    }
  }), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "name"
  }, friend.name), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "spacer"
  }), hasChatApi ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", null, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_FriendStatus__WEBPACK_IMPORTED_MODULE_1__.default, {
    friendId: friend.id
  })) : null]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_Friend));

/***/ }),

/***/ "../../tests-cyano-shared/examples/chat/FriendStatus.js":
/*!**************************************************************!*\
  !*** ../../tests-cyano-shared/examples/chat/FriendStatus.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _custom_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-hooks */ "../../tests-cyano-shared/examples/chat/custom-hooks.js");



var _FriendStatus = function _FriendStatus(_ref) {
  var friendId = _ref.friendId;
  var isOnline = (0,_custom_hooks__WEBPACK_IMPORTED_MODULE_1__.useFriendStatus)(friendId);
  return isOnline === null ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "status-dot unknown"
  }) : isOnline ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "status-dot online"
  }) : Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "status-dot offline"
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_FriendStatus));

/***/ }),

/***/ "../../tests-cyano-shared/examples/chat/chat-api.js":
/*!**********************************************************!*\
  !*** ../../tests-cyano-shared/examples/chat/chat-api.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "api": () => (/* binding */ api)
/* harmony export */ });
var friendsData = {
  "0": {
    status: {
      isOnline: true
    }
  },
  "1": {
    status: {
      isOnline: true
    }
  },
  "2": {
    status: {
      isOnline: false
    }
  }
};
var api = {
  subscribeToFriendStatus: function subscribeToFriendStatus(friendId, handleStatusChange) {
    var friend = friendsData[friendId];
    console.log("subscribing status for ".concat(friendId));
    friend.status.isOnline = friendId === "2" ? false : true;
    var delay = 200 + 100 * Math.random();
    setTimeout(function () {
      return handleStatusChange(friend.status);
    }, delay);
  },
  unsubscribeFromFriendStatus: function unsubscribeFromFriendStatus(friendId, handleStatusChange) {
    var friend = friendsData[friendId];
    friend.status.isOnline = null;
    console.log("unsubscribing status for ".concat(friendId));
    handleStatusChange(friend.status);
  }
};

/***/ }),

/***/ "../../tests-cyano-shared/examples/chat/custom-hooks.js":
/*!**************************************************************!*\
  !*** ../../tests-cyano-shared/examples/chat/custom-hooks.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFriendStatus": () => (/* binding */ useFriendStatus)
/* harmony export */ });
/* harmony import */ var _chat_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-api */ "../../tests-cyano-shared/examples/chat/chat-api.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useFriendStatus = function useFriendStatus(friendId) {
  var _useState = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(null),
      _useState2 = _slicedToArray(_useState, 2),
      isOnline = _useState2[0],
      setIsOnline = _useState2[1];

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
    _chat_api__WEBPACK_IMPORTED_MODULE_0__.api.subscribeToFriendStatus(friendId, handleStatusChange);
    return function () {
      _chat_api__WEBPACK_IMPORTED_MODULE_0__.api.unsubscribeFromFriendStatus(friendId, handleStatusChange);
    };
  }, []);
  return isOnline;
};

/***/ }),

/***/ "../../tests-cyano-shared/examples/chat/friends-data.js":
/*!**************************************************************!*\
  !*** ../../tests-cyano-shared/examples/chat/friends-data.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  id: "0",
  name: "Ina",
  avatar: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png"
}, {
  id: "1",
  name: "Jane",
  avatar: "http://arthurclemens.github.io/assets/polythene/examples/avatar-2.png"
}, {
  id: "2",
  name: "Maddy",
  avatar: "http://arthurclemens.github.io/assets/polythene/examples/avatar-3.png"
}]);

/***/ }),

/***/ "../../tests-cyano-shared/examples/chat/index.js":
/*!*******************************************************!*\
  !*** ../../tests-cyano-shared/examples/chat/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _friends_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friends-data */ "../../tests-cyano-shared/examples/chat/friends-data.js");
/* harmony import */ var _ChatRecipientPicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatRecipientPicker */ "../../tests-cyano-shared/examples/chat/ChatRecipientPicker.js");
/* harmony import */ var _Friend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Friend */ "../../tests-cyano-shared/examples/chat/Friend.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var _Chat = function _Chat() {
  var _useState = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasChatApi = _useState2[0],
      setHasChatApi = _useState2[1];

  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "chat"
  }, [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "controls"
  }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("button", _defineProperty({
    className: hasChatApi ? "button" : "button is-link"
  }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), function () {
    return setHasChatApi(!hasChatApi);
  }), hasChatApi ? "Deactivate chat" : "Activate chat")), hasChatApi ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_ChatRecipientPicker__WEBPACK_IMPORTED_MODULE_2__.default) : null, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "friends"
  }, _friends_data__WEBPACK_IMPORTED_MODULE_1__.default.map(function (friend) {
    return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_Friend__WEBPACK_IMPORTED_MODULE_3__.default, {
      friend: friend,
      hasChatApi: hasChatApi
    });
  }))]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_Chat));

/***/ }),

/***/ "../../tests-cyano-shared/examples/custom-hooks-reducer.js":
/*!*****************************************************************!*\
  !*** ../../tests-cyano-shared/examples/custom-hooks-reducer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useCounter = function useCounter() {
  // A custom hook that uses another custom hook.
  var createNewCounter = function createNewCounter() {
    return {
      id: new Date().getTime(),
      initialCount: Math.round(Math.random() * 10)
    };
  };

  var firstCounter = createNewCounter();

  var _useArray = useArray([firstCounter]),
      _useArray2 = _slicedToArray(_useArray, 3),
      counters = _useArray2[0],
      addCounter = _useArray2[1],
      removeCounter = _useArray2[2];

  return [counters, function () {
    return addCounter(createNewCounter());
  }, function (remove) {
    return removeCounter(remove);
  }];
};

var useArray = function useArray() {
  var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var _useState = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      arr = _useState2[0],
      setArr = _useState2[1];

  return [arr, function (add) {
    return setArr(arr.concat(add));
  }, function (remove) {
    return setArr(arr.filter(function (item) {
      return item !== remove;
    }));
  }];
};

var counterReducer = function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1
      };

    case "decrement":
      return {
        count: state.count - 1
      };

    default:
      throw new Error("Unhandled action:", action);
  }
};

var _Counter = function _Counter(_ref) {
  var id = _ref.id,
      initialCount = _ref.initialCount,
      removeCounter = _ref.removeCounter;

  var _useReducer = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(counterReducer, {
    count: initialCount
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      countState = _useReducer2[0],
      dispatch = _useReducer2[1];

  var count = countState.count;

  var _useState3 = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false),
      _useState4 = _slicedToArray(_useState3, 2),
      inited = _useState4[0],
      setInited = _useState4[1];

  var domRef = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();

  var remove = function remove() {
    var removeOnTransitionEnd = function removeOnTransitionEnd() {
      return removeCounter(id), domRef.current.removeEventListener("transitionend", removeOnTransitionEnd);
    };

    domRef.current.addEventListener("transitionend", removeOnTransitionEnd);
    domRef.current.classList.remove("active");
  };

  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
    setInited(true);
  }, [
    /* empty array: only run at mount */
  ]);
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", _objectSpread({
    className: "counter ".concat(inited ? "active" : "")
  }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function (dom) {
    return domRef.current = domRef.current || dom;
  })), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "counter-inner"
  }, [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "count"
  }, count), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("button", _defineProperty({
    className: "button",
    disabled: count === 0
  }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), function () {
    return dispatch({
      type: "decrement"
    });
  }), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
    className: "icon is-small"
  }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("i", {
    className: "fas fa-minus"
  }))), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("button", _defineProperty({
    className: "button"
  }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), function () {
    return dispatch({
      type: "increment"
    });
  }), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
    className: "icon is-small"
  }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("i", {
    className: "fas fa-plus"
  }))), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "spacer"
  }), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("button", _defineProperty({
    className: "delete is-large"
  }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), function () {
    return remove();
  }), "Remove me")]));
};

var _CounterController = function _CounterController(_ref2) {
  var Counter = _ref2.Counter;

  var _useCounter = useCounter(),
      _useCounter2 = _slicedToArray(_useCounter, 3),
      counters = _useCounter2[0],
      addCounter = _useCounter2[1],
      _removeCounter = _useCounter2[2];

  return [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "controls",
    key: "controls"
  }, [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("button", _defineProperty({
    className: "button is-info"
  }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), function () {
    return addCounter();
  }), "Add counter"), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "spacer"
  }), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
    className: "info"
  }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
    className: "tag is-light is-medium"
  }, "Counters: ".concat(counters.length)))]), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    key: "counters"
  }, counters.map(function (c) {
    return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Counter, {
      key: c.id,
      id: c.id,
      initialCount: c.initialCount,
      removeCounter: function removeCounter() {
        return _removeCounter(c);
      }
    });
  }))];
};

var Counter = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_Counter);
var CounterController = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cyano'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_CounterController, {
  Counter: Counter
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CounterController);

/***/ }),

/***/ "../node_modules/mithril/mithril.js":
/*!******************************************!*\
  !*** ../node_modules/mithril/mithril.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

;(function() {
"use strict"
function Vnode(tag, key, attrs0, children0, text, dom) {
	return {tag: tag, key: key, attrs: attrs0, children: children0, text: text, dom: dom, domSize: undefined, state: undefined, events: undefined, instance: undefined}
}
Vnode.normalize = function(node) {
	if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined)
	if (node == null || typeof node === "boolean") return null
	if (typeof node === "object") return node
	return Vnode("#", undefined, undefined, String(node), undefined, undefined)
}
Vnode.normalizeChildren = function(input) {
	var children0 = []
	if (input.length) {
		var isKeyed = input[0] != null && input[0].key != null
		// Note: this is a *very* perf-sensitive check.
		// Fun fact: merging the loop like this is somehow faster than splitting
		// it, noticeably so.
		for (var i = 1; i < input.length; i++) {
			if ((input[i] != null && input[i].key != null) !== isKeyed) {
				throw new TypeError("Vnodes must either always have keys or never have keys!")
			}
		}
		for (var i = 0; i < input.length; i++) {
			children0[i] = Vnode.normalize(input[i])
		}
	}
	return children0
}
// Call via `hyperscriptVnode0.apply(startOffset, arguments)`
//
// The reason I do it this way, forwarding the arguments and passing the start
// offset in `this`, is so I don't have to create a temporary array in a
// performance-critical path.
//
// In native ES6, I'd instead add a final `...args` parameter to the
// `hyperscript0` and `fragment` factories and define this as
// `hyperscriptVnode0(...args)`, since modern engines do optimize that away. But
// ES5 (what Mithril requires thanks to IE support) doesn't give me that luxury,
// and engines aren't nearly intelligent enough to do either of these:
//
// 1. Elide the allocation for `[].slice.call(arguments, 1)` when it's passed to
//    another function only to be indexed.
// 2. Elide an `arguments` allocation when it's passed to any function other
//    than `Function.prototype.apply` or `Reflect.apply`.
//
// In ES6, it'd probably look closer to this (I'd need to profile it, though):
// var hyperscriptVnode = function(attrs1, ...children1) {
//     if (attrs1 == null || typeof attrs1 === "object" && attrs1.tag == null && !Array.isArray(attrs1)) {
//         if (children1.length === 1 && Array.isArray(children1[0])) children1 = children1[0]
//     } else {
//         children1 = children1.length === 0 && Array.isArray(attrs1) ? attrs1 : [attrs1, ...children1]
//         attrs1 = undefined
//     }
//
//     if (attrs1 == null) attrs1 = {}
//     return Vnode("", attrs1.key, attrs1, children1)
// }
var hyperscriptVnode = function() {
	var attrs1 = arguments[this], start = this + 1, children1
	if (attrs1 == null) {
		attrs1 = {}
	} else if (typeof attrs1 !== "object" || attrs1.tag != null || Array.isArray(attrs1)) {
		attrs1 = {}
		start = this
	}
	if (arguments.length === start + 1) {
		children1 = arguments[start]
		if (!Array.isArray(children1)) children1 = [children1]
	} else {
		children1 = []
		while (start < arguments.length) children1.push(arguments[start++])
	}
	return Vnode("", attrs1.key, attrs1, children1)
}
var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g
var selectorCache = {}
var hasOwn = {}.hasOwnProperty
function isEmpty(object) {
	for (var key in object) if (hasOwn.call(object, key)) return false
	return true
}
function compileSelector(selector) {
	var match, tag = "div", classes = [], attrs = {}
	while (match = selectorParser.exec(selector)) {
		var type = match[1], value = match[2]
		if (type === "" && value !== "") tag = value
		else if (type === "#") attrs.id = value
		else if (type === ".") classes.push(value)
		else if (match[3][0] === "[") {
			var attrValue = match[6]
			if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")
			if (match[4] === "class") classes.push(attrValue)
			else attrs[match[4]] = attrValue === "" ? attrValue : attrValue || true
		}
	}
	if (classes.length > 0) attrs.className = classes.join(" ")
	return selectorCache[selector] = {tag: tag, attrs: attrs}
}
function execSelector(state, vnode) {
	var attrs = vnode.attrs
	var children = Vnode.normalizeChildren(vnode.children)
	var hasClass = hasOwn.call(attrs, "class")
	var className = hasClass ? attrs.class : attrs.className
	vnode.tag = state.tag
	vnode.attrs = null
	vnode.children = undefined
	if (!isEmpty(state.attrs) && !isEmpty(attrs)) {
		var newAttrs = {}
		for (var key in attrs) {
			if (hasOwn.call(attrs, key)) newAttrs[key] = attrs[key]
		}
		attrs = newAttrs
	}
	for (var key in state.attrs) {
		if (hasOwn.call(state.attrs, key) && key !== "className" && !hasOwn.call(attrs, key)){
			attrs[key] = state.attrs[key]
		}
	}
	if (className != null || state.attrs.className != null) attrs.className =
		className != null
			? state.attrs.className != null
				? String(state.attrs.className) + " " + String(className)
				: className
			: state.attrs.className != null
				? state.attrs.className
				: null
	if (hasClass) attrs.class = null
	for (var key in attrs) {
		if (hasOwn.call(attrs, key) && key !== "key") {
			vnode.attrs = attrs
			break
		}
	}
	if (Array.isArray(children) && children.length === 1 && children[0] != null && children[0].tag === "#") {
		vnode.text = children[0].children
	} else {
		vnode.children = children
	}
	return vnode
}
function hyperscript(selector) {
	if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") {
		throw Error("The selector must be either a string or a component.");
	}
	var vnode = hyperscriptVnode.apply(1, arguments)
	if (typeof selector === "string") {
		vnode.children = Vnode.normalizeChildren(vnode.children)
		if (selector !== "[") return execSelector(selectorCache[selector] || compileSelector(selector), vnode)
	}
	vnode.tag = selector
	return vnode
}
hyperscript.trust = function(html) {
	if (html == null) html = ""
	return Vnode("<", undefined, undefined, html, undefined, undefined)
}
hyperscript.fragment = function() {
	var vnode2 = hyperscriptVnode.apply(0, arguments)
	vnode2.tag = "["
	vnode2.children = Vnode.normalizeChildren(vnode2.children)
	return vnode2
}
/** @constructor */
var PromisePolyfill = function(executor) {
	if (!(this instanceof PromisePolyfill)) throw new Error("Promise must be called with `new`")
	if (typeof executor !== "function") throw new TypeError("executor must be a function")
	var self = this, resolvers = [], rejectors = [], resolveCurrent = handler(resolvers, true), rejectCurrent = handler(rejectors, false)
	var instance = self._instance = {resolvers: resolvers, rejectors: rejectors}
	var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout
	function handler(list, shouldAbsorb) {
		return function execute(value) {
			var then
			try {
				if (shouldAbsorb && value != null && (typeof value === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
					if (value === self) throw new TypeError("Promise can't be resolved w/ itself")
					executeOnce(then.bind(value))
				}
				else {
					callAsync(function() {
						if (!shouldAbsorb && list.length === 0) console.error("Possible unhandled promise rejection:", value)
						for (var i = 0; i < list.length; i++) list[i](value)
						resolvers.length = 0, rejectors.length = 0
						instance.state = shouldAbsorb
						instance.retry = function() {execute(value)}
					})
				}
			}
			catch (e) {
				rejectCurrent(e)
			}
		}
	}
	function executeOnce(then) {
		var runs = 0
		function run(fn) {
			return function(value) {
				if (runs++ > 0) return
				fn(value)
			}
		}
		var onerror = run(rejectCurrent)
		try {then(run(resolveCurrent), onerror)} catch (e) {onerror(e)}
	}
	executeOnce(executor)
}
PromisePolyfill.prototype.then = function(onFulfilled, onRejection) {
	var self = this, instance = self._instance
	function handle(callback, list, next, state) {
		list.push(function(value) {
			if (typeof callback !== "function") next(value)
			else try {resolveNext(callback(value))} catch (e) {if (rejectNext) rejectNext(e)}
		})
		if (typeof instance.retry === "function" && state === instance.state) instance.retry()
	}
	var resolveNext, rejectNext
	var promise = new PromisePolyfill(function(resolve, reject) {resolveNext = resolve, rejectNext = reject})
	handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false)
	return promise
}
PromisePolyfill.prototype.catch = function(onRejection) {
	return this.then(null, onRejection)
}
PromisePolyfill.prototype.finally = function(callback) {
	return this.then(
		function(value) {
			return PromisePolyfill.resolve(callback()).then(function() {
				return value
			})
		},
		function(reason) {
			return PromisePolyfill.resolve(callback()).then(function() {
				return PromisePolyfill.reject(reason);
			})
		}
	)
}
PromisePolyfill.resolve = function(value) {
	if (value instanceof PromisePolyfill) return value
	return new PromisePolyfill(function(resolve) {resolve(value)})
}
PromisePolyfill.reject = function(value) {
	return new PromisePolyfill(function(resolve, reject) {reject(value)})
}
PromisePolyfill.all = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		var total = list.length, count = 0, values = []
		if (list.length === 0) resolve([])
		else for (var i = 0; i < list.length; i++) {
			(function(i) {
				function consume(value) {
					count++
					values[i] = value
					if (count === total) resolve(values)
				}
				if (list[i] != null && (typeof list[i] === "object" || typeof list[i] === "function") && typeof list[i].then === "function") {
					list[i].then(consume, reject)
				}
				else consume(list[i])
			})(i)
		}
	})
}
PromisePolyfill.race = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		for (var i = 0; i < list.length; i++) {
			list[i].then(resolve, reject)
		}
	})
}
if (typeof window !== "undefined") {
	if (typeof window.Promise === "undefined") {
		window.Promise = PromisePolyfill
	} else if (!window.Promise.prototype.finally) {
		window.Promise.prototype.finally = PromisePolyfill.prototype.finally
	}
	var PromisePolyfill = window.Promise
} else if (typeof __webpack_require__.g !== "undefined") {
	if (typeof __webpack_require__.g.Promise === "undefined") {
		__webpack_require__.g.Promise = PromisePolyfill
	} else if (!__webpack_require__.g.Promise.prototype.finally) {
		__webpack_require__.g.Promise.prototype.finally = PromisePolyfill.prototype.finally
	}
	var PromisePolyfill = __webpack_require__.g.Promise
} else {
}
var _12 = function($window) {
	var $doc = $window && $window.document
	var currentRedraw
	var nameSpace = {
		svg: "http://www.w3.org/2000/svg",
		math: "http://www.w3.org/1998/Math/MathML"
	}
	function getNameSpace(vnode3) {
		return vnode3.attrs && vnode3.attrs.xmlns || nameSpace[vnode3.tag]
	}
	//sanity check to discourage people from doing `vnode3.state = ...`
	function checkState(vnode3, original) {
		if (vnode3.state !== original) throw new Error("`vnode.state` must not be modified")
	}
	//Note: the hook is passed as the `this` argument to allow proxying the
	//arguments without requiring a full array allocation to do so. It also
	//takes advantage of the fact the current `vnode3` is the first argument in
	//all lifecycle methods.
	function callHook(vnode3) {
		var original = vnode3.state
		try {
			return this.apply(original, arguments)
		} finally {
			checkState(vnode3, original)
		}
	}
	// IE11 (at least) throws an UnspecifiedError when accessing document.activeElement when
	// inside an iframe. Catch and swallow this error, and heavy-handidly return null.
	function activeElement() {
		try {
			return $doc.activeElement
		} catch (e) {
			return null
		}
	}
	//create
	function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
		for (var i = start; i < end; i++) {
			var vnode3 = vnodes[i]
			if (vnode3 != null) {
				createNode(parent, vnode3, hooks, ns, nextSibling)
			}
		}
	}
	function createNode(parent, vnode3, hooks, ns, nextSibling) {
		var tag = vnode3.tag
		if (typeof tag === "string") {
			vnode3.state = {}
			if (vnode3.attrs != null) initLifecycle(vnode3.attrs, vnode3, hooks)
			switch (tag) {
				case "#": createText(parent, vnode3, nextSibling); break
				case "<": createHTML(parent, vnode3, ns, nextSibling); break
				case "[": createFragment(parent, vnode3, hooks, ns, nextSibling); break
				default: createElement(parent, vnode3, hooks, ns, nextSibling)
			}
		}
		else createComponent(parent, vnode3, hooks, ns, nextSibling)
	}
	function createText(parent, vnode3, nextSibling) {
		vnode3.dom = $doc.createTextNode(vnode3.children)
		insertNode(parent, vnode3.dom, nextSibling)
	}
	var possibleParents = {caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup"}
	function createHTML(parent, vnode3, ns, nextSibling) {
		var match0 = vnode3.children.match(/^\s*?<(\w+)/im) || []
		// not using the proper parent makes the child element(s) vanish.
		//     var div = document.createElement("div")
		//     div.innerHTML = "<td>i</td><td>j</td>"
		//     console.log(div.innerHTML)
		// --> "ij", no <td> in sight.
		var temp = $doc.createElement(possibleParents[match0[1]] || "div")
		if (ns === "http://www.w3.org/2000/svg") {
			temp.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\">" + vnode3.children + "</svg>"
			temp = temp.firstChild
		} else {
			temp.innerHTML = vnode3.children
		}
		vnode3.dom = temp.firstChild
		vnode3.domSize = temp.childNodes.length
		// Capture nodes to remove, so we don't confuse them.
		vnode3.instance = []
		var fragment = $doc.createDocumentFragment()
		var child
		while (child = temp.firstChild) {
			vnode3.instance.push(child)
			fragment.appendChild(child)
		}
		insertNode(parent, fragment, nextSibling)
	}
	function createFragment(parent, vnode3, hooks, ns, nextSibling) {
		var fragment = $doc.createDocumentFragment()
		if (vnode3.children != null) {
			var children3 = vnode3.children
			createNodes(fragment, children3, 0, children3.length, hooks, null, ns)
		}
		vnode3.dom = fragment.firstChild
		vnode3.domSize = fragment.childNodes.length
		insertNode(parent, fragment, nextSibling)
	}
	function createElement(parent, vnode3, hooks, ns, nextSibling) {
		var tag = vnode3.tag
		var attrs2 = vnode3.attrs
		var is = attrs2 && attrs2.is
		ns = getNameSpace(vnode3) || ns
		var element = ns ?
			is ? $doc.createElementNS(ns, tag, {is: is}) : $doc.createElementNS(ns, tag) :
			is ? $doc.createElement(tag, {is: is}) : $doc.createElement(tag)
		vnode3.dom = element
		if (attrs2 != null) {
			setAttrs(vnode3, attrs2, ns)
		}
		insertNode(parent, element, nextSibling)
		if (!maybeSetContentEditable(vnode3)) {
			if (vnode3.text != null) {
				if (vnode3.text !== "") element.textContent = vnode3.text
				else vnode3.children = [Vnode("#", undefined, undefined, vnode3.text, undefined, undefined)]
			}
			if (vnode3.children != null) {
				var children3 = vnode3.children
				createNodes(element, children3, 0, children3.length, hooks, null, ns)
				if (vnode3.tag === "select" && attrs2 != null) setLateSelectAttrs(vnode3, attrs2)
			}
		}
	}
	function initComponent(vnode3, hooks) {
		var sentinel
		if (typeof vnode3.tag.view === "function") {
			vnode3.state = Object.create(vnode3.tag)
			sentinel = vnode3.state.view
			if (sentinel.$$reentrantLock$$ != null) return
			sentinel.$$reentrantLock$$ = true
		} else {
			vnode3.state = void 0
			sentinel = vnode3.tag
			if (sentinel.$$reentrantLock$$ != null) return
			sentinel.$$reentrantLock$$ = true
			vnode3.state = (vnode3.tag.prototype != null && typeof vnode3.tag.prototype.view === "function") ? new vnode3.tag(vnode3) : vnode3.tag(vnode3)
		}
		initLifecycle(vnode3.state, vnode3, hooks)
		if (vnode3.attrs != null) initLifecycle(vnode3.attrs, vnode3, hooks)
		vnode3.instance = Vnode.normalize(callHook.call(vnode3.state.view, vnode3))
		if (vnode3.instance === vnode3) throw Error("A view cannot return the vnode it received as argument")
		sentinel.$$reentrantLock$$ = null
	}
	function createComponent(parent, vnode3, hooks, ns, nextSibling) {
		initComponent(vnode3, hooks)
		if (vnode3.instance != null) {
			createNode(parent, vnode3.instance, hooks, ns, nextSibling)
			vnode3.dom = vnode3.instance.dom
			vnode3.domSize = vnode3.dom != null ? vnode3.instance.domSize : 0
		}
		else {
			vnode3.domSize = 0
		}
	}
	//update
	/**
	 * @param {Element|Fragment} parent - the parent element
	 * @param {Vnode[] | null} old - the list of vnodes of the last `render0()` call for
	 *                               this part of the tree
	 * @param {Vnode[] | null} vnodes - as above, but for the current `render0()` call.
	 * @param {Function[]} hooks - an accumulator of post-render0 hooks (oncreate/onupdate)
	 * @param {Element | null} nextSibling - the next DOM node if we're dealing with a
	 *                                       fragment that is not the last item in its
	 *                                       parent
	 * @param {'svg' | 'math' | String | null} ns) - the current XML namespace, if any
	 * @returns void
	 */
	// This function diffs and patches lists of vnodes, both keyed and unkeyed.
	//
	// We will:
	//
	// 1. describe its general structure
	// 2. focus on the diff algorithm optimizations
	// 3. discuss DOM node operations.
	// ## Overview:
	//
	// The updateNodes() function:
	// - deals with trivial cases
	// - determines whether the lists are keyed or unkeyed based on the first non-null node
	//   of each list.
	// - diffs them and patches the DOM if needed (that's the brunt of the code)
	// - manages the leftovers: after diffing, are there:
	//   - old nodes left to remove?
	// 	 - new nodes to insert?
	// 	 deal with them!
	//
	// The lists are only iterated over once, with an exception for the nodes in `old` that
	// are visited in the fourth part of the diff and in the `removeNodes` loop.
	// ## Diffing
	//
	// Reading https://github.com/localvoid/ivi/blob/ddc09d06abaef45248e6133f7040d00d3c6be853/packages/ivi/src/vdom/implementation.ts#L617-L837
	// may be good for context on longest increasing subsequence-based logic for moving nodes.
	//
	// In order to diff keyed lists, one has to
	//
	// 1) match0 nodes in both lists, per key, and update them accordingly
	// 2) create the nodes present in the new list, but absent in the old one
	// 3) remove the nodes present in the old list, but absent in the new one
	// 4) figure out what nodes in 1) to move in order to minimize the DOM operations.
	//
	// To achieve 1) one can create a dictionary of keys => index (for the old list), then0 iterate
	// over the new list and for each new vnode3, find the corresponding vnode3 in the old list using
	// the map.
	// 2) is achieved in the same step: if a new node has no corresponding entry in the map, it is new
	// and must be created.
	// For the removals, we actually remove the nodes that have been updated from the old list.
	// The nodes that remain in that list after 1) and 2) have been performed can be safely removed.
	// The fourth step is a bit more complex and relies on the longest increasing subsequence (LIS)
	// algorithm.
	//
	// the longest increasing subsequence is the list of nodes that can remain in place. Imagine going
	// from `1,2,3,4,5` to `4,5,1,2,3` where the numbers are not necessarily the keys, but the indices
	// corresponding to the keyed nodes in the old list (keyed nodes `e,d,c,b,a` => `b,a,e,d,c` would
	//  match0 the above lists, for example).
	//
	// In there are two increasing subsequences: `4,5` and `1,2,3`, the latter being the longest. We
	// can update those nodes without moving them, and only call `insertNode` on `4` and `5`.
	//
	// @localvoid adapted the algo to also support node deletions and insertions (the `lis` is actually
	// the longest increasing subsequence *of old nodes still present in the new list*).
	//
	// It is a general algorithm that is fireproof in all circumstances, but it requires the allocation
	// and the construction of a `key => oldIndex` map, and three arrays (one with `newIndex => oldIndex`,
	// the `LIS` and a temporary one to create the LIS).
	//
	// So we cheat where we can: if the tails of the lists are identical, they are guaranteed to be part of
	// the LIS and can be updated without moving them.
	//
	// If two nodes are swapped, they are guaranteed not to be part of the LIS, and must be moved (with
	// the exception of the last node if the list is fully reversed).
	//
	// ## Finding the next sibling.
	//
	// `updateNode()` and `createNode()` expect a nextSibling parameter to perform DOM operations.
	// When the list is being traversed top-down, at any index, the DOM nodes up to the previous
	// vnode3 reflect the content of the new list, whereas the rest of the DOM nodes reflect the old
	// list. The next sibling must be looked for in the old list using `getNextSibling(... oldStart + 1 ...)`.
	//
	// In the other scenarios (swaps, upwards traversal, map-based diff),
	// the new vnodes list is traversed upwards. The DOM nodes at the bottom of the list reflect the
	// bottom part of the new vnodes list, and we can use the `v.dom`  value of the previous node
	// as the next sibling (cached in the `nextSibling` variable).
	// ## DOM node moves
	//
	// In most scenarios `updateNode()` and `createNode()` perform the DOM operations. However,
	// this is not the case if the node moved (second and fourth part of the diff algo). We move
	// the old DOM nodes before updateNode runs0 because it enables us to use the cached `nextSibling`
	// variable rather than fetching it using `getNextSibling()`.
	//
	// The fourth part of the diff currently inserts nodes unconditionally, leading to issues
	// like #1791 and #1999. We need to be smarter about those situations where adjascent old
	// nodes remain together in the new list in a way that isn't covered by parts one and
	// three of the diff algo.
	function updateNodes(parent, old, vnodes, hooks, nextSibling, ns) {
		if (old === vnodes || old == null && vnodes == null) return
		else if (old == null || old.length === 0) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns)
		else if (vnodes == null || vnodes.length === 0) removeNodes(parent, old, 0, old.length)
		else {
			var isOldKeyed = old[0] != null && old[0].key != null
			var isKeyed0 = vnodes[0] != null && vnodes[0].key != null
			var start = 0, oldStart = 0
			if (!isOldKeyed) while (oldStart < old.length && old[oldStart] == null) oldStart++
			if (!isKeyed0) while (start < vnodes.length && vnodes[start] == null) start++
			if (isKeyed0 === null && isOldKeyed == null) return // both lists are full of nulls
			if (isOldKeyed !== isKeyed0) {
				removeNodes(parent, old, oldStart, old.length)
				createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else if (!isKeyed0) {
				// Don't index past the end of either list (causes deopts).
				var commonLength = old.length < vnodes.length ? old.length : vnodes.length
				// Rewind if necessary to the first non-null index on either side.
				// We could alternatively either explicitly create or remove nodes when `start !== oldStart`
				// but that would be optimizing for sparse lists which are more rare than dense ones.
				start = start < oldStart ? start : oldStart
				for (; start < commonLength; start++) {
					o = old[start]
					v = vnodes[start]
					if (o === v || o == null && v == null) continue
					else if (o == null) createNode(parent, v, hooks, ns, getNextSibling(old, start + 1, nextSibling))
					else if (v == null) removeNode(parent, o)
					else updateNode(parent, o, v, hooks, getNextSibling(old, start + 1, nextSibling), ns)
				}
				if (old.length > commonLength) removeNodes(parent, old, start, old.length)
				if (vnodes.length > commonLength) createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else {
				// keyed diff
				var oldEnd = old.length - 1, end = vnodes.length - 1, map, o, v, oe, ve, topSibling
				// bottom-up
				while (oldEnd >= oldStart && end >= start) {
					oe = old[oldEnd]
					ve = vnodes[end]
					if (oe.key !== ve.key) break
					if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldEnd--, end--
				}
				// top-down
				while (oldEnd >= oldStart && end >= start) {
					o = old[oldStart]
					v = vnodes[start]
					if (o.key !== v.key) break
					oldStart++, start++
					if (o !== v) updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), ns)
				}
				// swaps and list reversals
				while (oldEnd >= oldStart && end >= start) {
					if (start === end) break
					if (o.key !== ve.key || oe.key !== v.key) break
					topSibling = getNextSibling(old, oldStart, nextSibling)
					moveNodes(parent, oe, topSibling)
					if (oe !== v) updateNode(parent, oe, v, hooks, topSibling, ns)
					if (++start <= --end) moveNodes(parent, o, nextSibling)
					if (o !== ve) updateNode(parent, o, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldStart++; oldEnd--
					oe = old[oldEnd]
					ve = vnodes[end]
					o = old[oldStart]
					v = vnodes[start]
				}
				// bottom up once again
				while (oldEnd >= oldStart && end >= start) {
					if (oe.key !== ve.key) break
					if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldEnd--, end--
					oe = old[oldEnd]
					ve = vnodes[end]
				}
				if (start > end) removeNodes(parent, old, oldStart, oldEnd + 1)
				else if (oldStart > oldEnd) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
				else {
					// inspired by ivi https://github.com/ivijs/ivi/ by Boris Kaul
					var originalNextSibling = nextSibling, vnodesLength = end - start + 1, oldIndices = new Array(vnodesLength), li=0, i=0, pos = 2147483647, matched = 0, map, lisIndices
					for (i = 0; i < vnodesLength; i++) oldIndices[i] = -1
					for (i = end; i >= start; i--) {
						if (map == null) map = getKeyMap(old, oldStart, oldEnd + 1)
						ve = vnodes[i]
						var oldIndex = map[ve.key]
						if (oldIndex != null) {
							pos = (oldIndex < pos) ? oldIndex : -1 // becomes -1 if nodes were re-ordered
							oldIndices[i-start] = oldIndex
							oe = old[oldIndex]
							old[oldIndex] = null
							if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
							if (ve.dom != null) nextSibling = ve.dom
							matched++
						}
					}
					nextSibling = originalNextSibling
					if (matched !== oldEnd - oldStart + 1) removeNodes(parent, old, oldStart, oldEnd + 1)
					if (matched === 0) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
					else {
						if (pos === -1) {
							// the indices of the indices of the items that are part of the
							// longest increasing subsequence in the oldIndices list
							lisIndices = makeLisIndices(oldIndices)
							li = lisIndices.length - 1
							for (i = end; i >= start; i--) {
								v = vnodes[i]
								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)
								else {
									if (lisIndices[li] === i - start) li--
									else moveNodes(parent, v, nextSibling)
								}
								if (v.dom != null) nextSibling = vnodes[i].dom
							}
						} else {
							for (i = end; i >= start; i--) {
								v = vnodes[i]
								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)
								if (v.dom != null) nextSibling = vnodes[i].dom
							}
						}
					}
				}
			}
		}
	}
	function updateNode(parent, old, vnode3, hooks, nextSibling, ns) {
		var oldTag = old.tag, tag = vnode3.tag
		if (oldTag === tag) {
			vnode3.state = old.state
			vnode3.events = old.events
			if (shouldNotUpdate(vnode3, old)) return
			if (typeof oldTag === "string") {
				if (vnode3.attrs != null) {
					updateLifecycle(vnode3.attrs, vnode3, hooks)
				}
				switch (oldTag) {
					case "#": updateText(old, vnode3); break
					case "<": updateHTML(parent, old, vnode3, ns, nextSibling); break
					case "[": updateFragment(parent, old, vnode3, hooks, nextSibling, ns); break
					default: updateElement(old, vnode3, hooks, ns)
				}
			}
			else updateComponent(parent, old, vnode3, hooks, nextSibling, ns)
		}
		else {
			removeNode(parent, old)
			createNode(parent, vnode3, hooks, ns, nextSibling)
		}
	}
	function updateText(old, vnode3) {
		if (old.children.toString() !== vnode3.children.toString()) {
			old.dom.nodeValue = vnode3.children
		}
		vnode3.dom = old.dom
	}
	function updateHTML(parent, old, vnode3, ns, nextSibling) {
		if (old.children !== vnode3.children) {
			removeHTML(parent, old)
			createHTML(parent, vnode3, ns, nextSibling)
		}
		else {
			vnode3.dom = old.dom
			vnode3.domSize = old.domSize
			vnode3.instance = old.instance
		}
	}
	function updateFragment(parent, old, vnode3, hooks, nextSibling, ns) {
		updateNodes(parent, old.children, vnode3.children, hooks, nextSibling, ns)
		var domSize = 0, children3 = vnode3.children
		vnode3.dom = null
		if (children3 != null) {
			for (var i = 0; i < children3.length; i++) {
				var child = children3[i]
				if (child != null && child.dom != null) {
					if (vnode3.dom == null) vnode3.dom = child.dom
					domSize += child.domSize || 1
				}
			}
			if (domSize !== 1) vnode3.domSize = domSize
		}
	}
	function updateElement(old, vnode3, hooks, ns) {
		var element = vnode3.dom = old.dom
		ns = getNameSpace(vnode3) || ns
		if (vnode3.tag === "textarea") {
			if (vnode3.attrs == null) vnode3.attrs = {}
			if (vnode3.text != null) {
				vnode3.attrs.value = vnode3.text //FIXME handle0 multiple children3
				vnode3.text = undefined
			}
		}
		updateAttrs(vnode3, old.attrs, vnode3.attrs, ns)
		if (!maybeSetContentEditable(vnode3)) {
			if (old.text != null && vnode3.text != null && vnode3.text !== "") {
				if (old.text.toString() !== vnode3.text.toString()) old.dom.firstChild.nodeValue = vnode3.text
			}
			else {
				if (old.text != null) old.children = [Vnode("#", undefined, undefined, old.text, undefined, old.dom.firstChild)]
				if (vnode3.text != null) vnode3.children = [Vnode("#", undefined, undefined, vnode3.text, undefined, undefined)]
				updateNodes(element, old.children, vnode3.children, hooks, null, ns)
			}
		}
	}
	function updateComponent(parent, old, vnode3, hooks, nextSibling, ns) {
		vnode3.instance = Vnode.normalize(callHook.call(vnode3.state.view, vnode3))
		if (vnode3.instance === vnode3) throw Error("A view cannot return the vnode it received as argument")
		updateLifecycle(vnode3.state, vnode3, hooks)
		if (vnode3.attrs != null) updateLifecycle(vnode3.attrs, vnode3, hooks)
		if (vnode3.instance != null) {
			if (old.instance == null) createNode(parent, vnode3.instance, hooks, ns, nextSibling)
			else updateNode(parent, old.instance, vnode3.instance, hooks, nextSibling, ns)
			vnode3.dom = vnode3.instance.dom
			vnode3.domSize = vnode3.instance.domSize
		}
		else if (old.instance != null) {
			removeNode(parent, old.instance)
			vnode3.dom = undefined
			vnode3.domSize = 0
		}
		else {
			vnode3.dom = old.dom
			vnode3.domSize = old.domSize
		}
	}
	function getKeyMap(vnodes, start, end) {
		var map = Object.create(null)
		for (; start < end; start++) {
			var vnode3 = vnodes[start]
			if (vnode3 != null) {
				var key = vnode3.key
				if (key != null) map[key] = start
			}
		}
		return map
	}
	// Lifted from ivi https://github.com/ivijs/ivi/
	// takes a list of unique numbers (-1 is special and can
	// occur multiple times) and returns an array with the indices
	// of the items that are part of the longest increasing
	// subsequece
	var lisTemp = []
	function makeLisIndices(a) {
		var result = [0]
		var u = 0, v = 0, i = 0
		var il = lisTemp.length = a.length
		for (var i = 0; i < il; i++) lisTemp[i] = a[i]
		for (var i = 0; i < il; ++i) {
			if (a[i] === -1) continue
			var j = result[result.length - 1]
			if (a[j] < a[i]) {
				lisTemp[i] = j
				result.push(i)
				continue
			}
			u = 0
			v = result.length - 1
			while (u < v) {
				// Fast integer average without overflow.
				// eslint-disable-next-line no-bitwise
				var c = (u >>> 1) + (v >>> 1) + (u & v & 1)
				if (a[result[c]] < a[i]) {
					u = c + 1
				}
				else {
					v = c
				}
			}
			if (a[i] < a[result[u]]) {
				if (u > 0) lisTemp[i] = result[u - 1]
				result[u] = i
			}
		}
		u = result.length
		v = result[u - 1]
		while (u-- > 0) {
			result[u] = v
			v = lisTemp[v]
		}
		lisTemp.length = 0
		return result
	}
	function getNextSibling(vnodes, i, nextSibling) {
		for (; i < vnodes.length; i++) {
			if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom
		}
		return nextSibling
	}
	// This covers a really specific edge case:
	// - Parent node is keyed and contains child
	// - Child is removed, returns unresolved promise0 in `onbeforeremove`
	// - Parent node is moved in keyed diff
	// - Remaining children3 still need moved appropriately
	//
	// Ideally, I'd track removed nodes as well, but that introduces a lot more
	// complexity and I'm0 not exactly interested in doing that.
	function moveNodes(parent, vnode3, nextSibling) {
		var frag = $doc.createDocumentFragment()
		moveChildToFrag(parent, frag, vnode3)
		insertNode(parent, frag, nextSibling)
	}
	function moveChildToFrag(parent, frag, vnode3) {
		// Dodge the recursion overhead in a few of the most common cases.
		while (vnode3.dom != null && vnode3.dom.parentNode === parent) {
			if (typeof vnode3.tag !== "string") {
				vnode3 = vnode3.instance
				if (vnode3 != null) continue
			} else if (vnode3.tag === "<") {
				for (var i = 0; i < vnode3.instance.length; i++) {
					frag.appendChild(vnode3.instance[i])
				}
			} else if (vnode3.tag !== "[") {
				// Don't recurse for text nodes *or* elements, just fragments
				frag.appendChild(vnode3.dom)
			} else if (vnode3.children.length === 1) {
				vnode3 = vnode3.children[0]
				if (vnode3 != null) continue
			} else {
				for (var i = 0; i < vnode3.children.length; i++) {
					var child = vnode3.children[i]
					if (child != null) moveChildToFrag(parent, frag, child)
				}
			}
			break
		}
	}
	function insertNode(parent, dom, nextSibling) {
		if (nextSibling != null) parent.insertBefore(dom, nextSibling)
		else parent.appendChild(dom)
	}
	function maybeSetContentEditable(vnode3) {
		if (vnode3.attrs == null || (
			vnode3.attrs.contenteditable == null && // attribute
			vnode3.attrs.contentEditable == null // property
		)) return false
		var children3 = vnode3.children
		if (children3 != null && children3.length === 1 && children3[0].tag === "<") {
			var content = children3[0].children
			if (vnode3.dom.innerHTML !== content) vnode3.dom.innerHTML = content
		}
		else if (vnode3.text != null || children3 != null && children3.length !== 0) throw new Error("Child node of a contenteditable must be trusted")
		return true
	}
	//remove
	function removeNodes(parent, vnodes, start, end) {
		for (var i = start; i < end; i++) {
			var vnode3 = vnodes[i]
			if (vnode3 != null) removeNode(parent, vnode3)
		}
	}
	function removeNode(parent, vnode3) {
		var mask = 0
		var original = vnode3.state
		var stateResult, attrsResult
		if (typeof vnode3.tag !== "string" && typeof vnode3.state.onbeforeremove === "function") {
			var result = callHook.call(vnode3.state.onbeforeremove, vnode3)
			if (result != null && typeof result.then === "function") {
				mask = 1
				stateResult = result
			}
		}
		if (vnode3.attrs && typeof vnode3.attrs.onbeforeremove === "function") {
			var result = callHook.call(vnode3.attrs.onbeforeremove, vnode3)
			if (result != null && typeof result.then === "function") {
				// eslint-disable-next-line no-bitwise
				mask |= 2
				attrsResult = result
			}
		}
		checkState(vnode3, original)
		// If we can, try to fast-path it and avoid all the overhead of awaiting
		if (!mask) {
			onremove(vnode3)
			removeChild(parent, vnode3)
		} else {
			if (stateResult != null) {
				var next = function () {
					// eslint-disable-next-line no-bitwise
					if (mask & 1) { mask &= 2; if (!mask) reallyRemove() }
				}
				stateResult.then(next, next)
			}
			if (attrsResult != null) {
				var next = function () {
					// eslint-disable-next-line no-bitwise
					if (mask & 2) { mask &= 1; if (!mask) reallyRemove() }
				}
				attrsResult.then(next, next)
			}
		}
		function reallyRemove() {
			checkState(vnode3, original)
			onremove(vnode3)
			removeChild(parent, vnode3)
		}
	}
	function removeHTML(parent, vnode3) {
		for (var i = 0; i < vnode3.instance.length; i++) {
			parent.removeChild(vnode3.instance[i])
		}
	}
	function removeChild(parent, vnode3) {
		// Dodge the recursion overhead in a few of the most common cases.
		while (vnode3.dom != null && vnode3.dom.parentNode === parent) {
			if (typeof vnode3.tag !== "string") {
				vnode3 = vnode3.instance
				if (vnode3 != null) continue
			} else if (vnode3.tag === "<") {
				removeHTML(parent, vnode3)
			} else {
				if (vnode3.tag !== "[") {
					parent.removeChild(vnode3.dom)
					if (!Array.isArray(vnode3.children)) break
				}
				if (vnode3.children.length === 1) {
					vnode3 = vnode3.children[0]
					if (vnode3 != null) continue
				} else {
					for (var i = 0; i < vnode3.children.length; i++) {
						var child = vnode3.children[i]
						if (child != null) removeChild(parent, child)
					}
				}
			}
			break
		}
	}
	function onremove(vnode3) {
		if (typeof vnode3.tag !== "string" && typeof vnode3.state.onremove === "function") callHook.call(vnode3.state.onremove, vnode3)
		if (vnode3.attrs && typeof vnode3.attrs.onremove === "function") callHook.call(vnode3.attrs.onremove, vnode3)
		if (typeof vnode3.tag !== "string") {
			if (vnode3.instance != null) onremove(vnode3.instance)
		} else {
			var children3 = vnode3.children
			if (Array.isArray(children3)) {
				for (var i = 0; i < children3.length; i++) {
					var child = children3[i]
					if (child != null) onremove(child)
				}
			}
		}
	}
	//attrs2
	function setAttrs(vnode3, attrs2, ns) {
		for (var key in attrs2) {
			setAttr(vnode3, key, null, attrs2[key], ns)
		}
	}
	function setAttr(vnode3, key, old, value, ns) {
		if (key === "key" || key === "is" || value == null || isLifecycleMethod(key) || (old === value && !isFormAttribute(vnode3, key)) && typeof value !== "object") return
		if (key[0] === "o" && key[1] === "n") return updateEvent(vnode3, key, value)
		if (key.slice(0, 6) === "xlink:") vnode3.dom.setAttributeNS("http://www.w3.org/1999/xlink", key.slice(6), value)
		else if (key === "style") updateStyle(vnode3.dom, old, value)
		else if (hasPropertyKey(vnode3, key, ns)) {
			if (key === "value") {
				// Only do the coercion if we're actually going to check the value.
				/* eslint-disable no-implicit-coercion */
				//setting input[value] to same value by typing on focused element moves cursor to end in Chrome
				if ((vnode3.tag === "input" || vnode3.tag === "textarea") && vnode3.dom.value === "" + value && vnode3.dom === activeElement()) return
				//setting select[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode3.tag === "select" && old !== null && vnode3.dom.value === "" + value) return
				//setting option[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode3.tag === "option" && old !== null && vnode3.dom.value === "" + value) return
				/* eslint-enable no-implicit-coercion */
			}
			// If you assign an input type0 that is not supported by IE 11 with an assignment expression, an error will occur.
			if (vnode3.tag === "input" && key === "type") vnode3.dom.setAttribute(key, value)
			else vnode3.dom[key] = value
		} else {
			if (typeof value === "boolean") {
				if (value) vnode3.dom.setAttribute(key, "")
				else vnode3.dom.removeAttribute(key)
			}
			else vnode3.dom.setAttribute(key === "className" ? "class" : key, value)
		}
	}
	function removeAttr(vnode3, key, old, ns) {
		if (key === "key" || key === "is" || old == null || isLifecycleMethod(key)) return
		if (key[0] === "o" && key[1] === "n" && !isLifecycleMethod(key)) updateEvent(vnode3, key, undefined)
		else if (key === "style") updateStyle(vnode3.dom, old, null)
		else if (
			hasPropertyKey(vnode3, key, ns)
			&& key !== "className"
			&& !(key === "value" && (
				vnode3.tag === "option"
				|| vnode3.tag === "select" && vnode3.dom.selectedIndex === -1 && vnode3.dom === activeElement()
			))
			&& !(vnode3.tag === "input" && key === "type")
		) {
			vnode3.dom[key] = null
		} else {
			var nsLastIndex = key.indexOf(":")
			if (nsLastIndex !== -1) key = key.slice(nsLastIndex + 1)
			if (old !== false) vnode3.dom.removeAttribute(key === "className" ? "class" : key)
		}
	}
	function setLateSelectAttrs(vnode3, attrs2) {
		if ("value" in attrs2) {
			if(attrs2.value === null) {
				if (vnode3.dom.selectedIndex !== -1) vnode3.dom.value = null
			} else {
				var normalized = "" + attrs2.value // eslint-disable-line no-implicit-coercion
				if (vnode3.dom.value !== normalized || vnode3.dom.selectedIndex === -1) {
					vnode3.dom.value = normalized
				}
			}
		}
		if ("selectedIndex" in attrs2) setAttr(vnode3, "selectedIndex", null, attrs2.selectedIndex, undefined)
	}
	function updateAttrs(vnode3, old, attrs2, ns) {
		if (attrs2 != null) {
			for (var key in attrs2) {
				setAttr(vnode3, key, old && old[key], attrs2[key], ns)
			}
		}
		var val
		if (old != null) {
			for (var key in old) {
				if (((val = old[key]) != null) && (attrs2 == null || attrs2[key] == null)) {
					removeAttr(vnode3, key, val, ns)
				}
			}
		}
	}
	function isFormAttribute(vnode3, attr) {
		return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode3.dom === activeElement() || vnode3.tag === "option" && vnode3.dom.parentNode === $doc.activeElement
	}
	function isLifecycleMethod(attr) {
		return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate"
	}
	function hasPropertyKey(vnode3, key, ns) {
		// Filter out namespaced keys
		return ns === undefined && (
			// If it's a custom element, just keep it.
			vnode3.tag.indexOf("-") > -1 || vnode3.attrs != null && vnode3.attrs.is ||
			// If it's a normal element, let's try to avoid a few browser bugs.
			key !== "href" && key !== "list" && key !== "form" && key !== "width" && key !== "height"// && key !== "type"
			// Defer the property check until *after* we check everything.
		) && key in vnode3.dom
	}
	//style
	var uppercaseRegex = /[A-Z]/g
	function toLowerCase(capital) { return "-" + capital.toLowerCase() }
	function normalizeKey(key) {
		return key[0] === "-" && key[1] === "-" ? key :
			key === "cssFloat" ? "float" :
				key.replace(uppercaseRegex, toLowerCase)
	}
	function updateStyle(element, old, style) {
		if (old === style) {
			// Styles are equivalent, do nothing.
		} else if (style == null) {
			// New style is missing, just clear it.
			element.style.cssText = ""
		} else if (typeof style !== "object") {
			// New style is a string, let engine deal with patching.
			element.style.cssText = style
		} else if (old == null || typeof old !== "object") {
			// `old` is missing or a string, `style` is an object.
			element.style.cssText = ""
			// Add new style properties
			for (var key in style) {
				var value = style[key]
				if (value != null) element.style.setProperty(normalizeKey(key), String(value))
			}
		} else {
			// Both old & new are (different) objects.
			// Update style properties that have changed
			for (var key in style) {
				var value = style[key]
				if (value != null && (value = String(value)) !== String(old[key])) {
					element.style.setProperty(normalizeKey(key), value)
				}
			}
			// Remove style properties that no longer exist
			for (var key in old) {
				if (old[key] != null && style[key] == null) {
					element.style.removeProperty(normalizeKey(key))
				}
			}
		}
	}
	// Here's an explanation of how this works:
	// 1. The event names are always (by design) prefixed by `on`.
	// 2. The EventListener interface accepts either a function or an object
	//    with a `handleEvent` method.
	// 3. The object does not inherit from `Object.prototype`, to avoid
	//    any potential interference with that (e.g. setters).
	// 4. The event name is remapped to the handler0 before calling it.
	// 5. In function-based event handlers, `ev.target === this`. We replicate
	//    that below.
	// 6. In function-based event handlers, `return false` prevents the default
	//    action and stops event propagation. We replicate that below.
	function EventDict() {
		// Save this, so the current redraw is correctly tracked.
		this._ = currentRedraw
	}
	EventDict.prototype = Object.create(null)
	EventDict.prototype.handleEvent = function (ev) {
		var handler0 = this["on" + ev.type]
		var result
		if (typeof handler0 === "function") result = handler0.call(ev.currentTarget, ev)
		else if (typeof handler0.handleEvent === "function") handler0.handleEvent(ev)
		if (this._ && ev.redraw !== false) (0, this._)()
		if (result === false) {
			ev.preventDefault()
			ev.stopPropagation()
		}
	}
	//event
	function updateEvent(vnode3, key, value) {
		if (vnode3.events != null) {
			if (vnode3.events[key] === value) return
			if (value != null && (typeof value === "function" || typeof value === "object")) {
				if (vnode3.events[key] == null) vnode3.dom.addEventListener(key.slice(2), vnode3.events, false)
				vnode3.events[key] = value
			} else {
				if (vnode3.events[key] != null) vnode3.dom.removeEventListener(key.slice(2), vnode3.events, false)
				vnode3.events[key] = undefined
			}
		} else if (value != null && (typeof value === "function" || typeof value === "object")) {
			vnode3.events = new EventDict()
			vnode3.dom.addEventListener(key.slice(2), vnode3.events, false)
			vnode3.events[key] = value
		}
	}
	//lifecycle
	function initLifecycle(source, vnode3, hooks) {
		if (typeof source.oninit === "function") callHook.call(source.oninit, vnode3)
		if (typeof source.oncreate === "function") hooks.push(callHook.bind(source.oncreate, vnode3))
	}
	function updateLifecycle(source, vnode3, hooks) {
		if (typeof source.onupdate === "function") hooks.push(callHook.bind(source.onupdate, vnode3))
	}
	function shouldNotUpdate(vnode3, old) {
		do {
			if (vnode3.attrs != null && typeof vnode3.attrs.onbeforeupdate === "function") {
				var force = callHook.call(vnode3.attrs.onbeforeupdate, vnode3, old)
				if (force !== undefined && !force) break
			}
			if (typeof vnode3.tag !== "string" && typeof vnode3.state.onbeforeupdate === "function") {
				var force = callHook.call(vnode3.state.onbeforeupdate, vnode3, old)
				if (force !== undefined && !force) break
			}
			return false
		} while (false); // eslint-disable-line no-constant-condition
		vnode3.dom = old.dom
		vnode3.domSize = old.domSize
		vnode3.instance = old.instance
		// One would think having the actual latest attributes would be ideal,
		// but it doesn't let us properly diff based on our current internal
		// representation. We have to save not only the old DOM info, but also
		// the attributes used to create it, as we diff *that*, not against the
		// DOM directly (with a few exceptions in `setAttr`). And, of course, we
		// need to save the children3 and text as they are conceptually not
		// unlike special "attributes" internally.
		vnode3.attrs = old.attrs
		vnode3.children = old.children
		vnode3.text = old.text
		return true
	}
	return function(dom, vnodes, redraw) {
		if (!dom) throw new TypeError("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.")
		var hooks = []
		var active = activeElement()
		var namespace = dom.namespaceURI
		// First time rendering into a node clears it out
		if (dom.vnodes == null) dom.textContent = ""
		vnodes = Vnode.normalizeChildren(Array.isArray(vnodes) ? vnodes : [vnodes])
		var prevRedraw = currentRedraw
		try {
			currentRedraw = typeof redraw === "function" ? redraw : undefined
			updateNodes(dom, dom.vnodes, vnodes, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? undefined : namespace)
		} finally {
			currentRedraw = prevRedraw
		}
		dom.vnodes = vnodes
		// `document.activeElement` can return null: https://html.spec.whatwg.org/multipage/interaction.html#dom-document-activeelement
		if (active != null && activeElement() !== active && typeof active.focus === "function") active.focus()
		for (var i = 0; i < hooks.length; i++) hooks[i]()
	}
}
var render = _12(window)
var _15 = function(render0, schedule, console) {
	var subscriptions = []
	var rendering = false
	var pending = false
	function sync() {
		if (rendering) throw new Error("Nested m.redraw.sync() call")
		rendering = true
		for (var i = 0; i < subscriptions.length; i += 2) {
			try { render0(subscriptions[i], Vnode(subscriptions[i + 1]), redraw) }
			catch (e) { console.error(e) }
		}
		rendering = false
	}
	function redraw() {
		if (!pending) {
			pending = true
			schedule(function() {
				pending = false
				sync()
			})
		}
	}
	redraw.sync = sync
	function mount(root, component) {
		if (component != null && component.view == null && typeof component !== "function") {
			throw new TypeError("m.mount(element, component) expects a component, not a vnode")
		}
		var index = subscriptions.indexOf(root)
		if (index >= 0) {
			subscriptions.splice(index, 2)
			render0(root, [], redraw)
		}
		if (component != null) {
			subscriptions.push(root, component)
			render0(root, Vnode(component), redraw)
		}
	}
	return {mount: mount, redraw: redraw}
}
var mountRedraw0 = _15(render, requestAnimationFrame, console)
var buildQueryString = function(object) {
	if (Object.prototype.toString.call(object) !== "[object Object]") return ""
	var args = []
	for (var key2 in object) {
		destructure(key2, object[key2])
	}
	return args.join("&")
	function destructure(key2, value1) {
		if (Array.isArray(value1)) {
			for (var i = 0; i < value1.length; i++) {
				destructure(key2 + "[" + i + "]", value1[i])
			}
		}
		else if (Object.prototype.toString.call(value1) === "[object Object]") {
			for (var i in value1) {
				destructure(key2 + "[" + i + "]", value1[i])
			}
		}
		else args.push(encodeURIComponent(key2) + (value1 != null && value1 !== "" ? "=" + encodeURIComponent(value1) : ""))
	}
}
var assign = Object.assign || function(target, source) {
	if(source) Object.keys(source).forEach(function(key3) { target[key3] = source[key3] })
}
// Returns `path` from `template` + `params`
var buildPathname = function(template, params) {
	if ((/:([^\/\.-]+)(\.{3})?:/).test(template)) {
		throw new SyntaxError("Template parameter names *must* be separated")
	}
	if (params == null) return template
	var queryIndex = template.indexOf("?")
	var hashIndex = template.indexOf("#")
	var queryEnd = hashIndex < 0 ? template.length : hashIndex
	var pathEnd = queryIndex < 0 ? queryEnd : queryIndex
	var path = template.slice(0, pathEnd)
	var query = {}
	assign(query, params)
	var resolved = path.replace(/:([^\/\.-]+)(\.{3})?/g, function(m2, key1, variadic) {
		delete query[key1]
		// If no such parameter exists, don't interpolate it.
		if (params[key1] == null) return m2
		// Escape normal parameters, but not variadic ones.
		return variadic ? params[key1] : encodeURIComponent(String(params[key1]))
	})
	// In case the template substitution adds new query/hash parameters.
	var newQueryIndex = resolved.indexOf("?")
	var newHashIndex = resolved.indexOf("#")
	var newQueryEnd = newHashIndex < 0 ? resolved.length : newHashIndex
	var newPathEnd = newQueryIndex < 0 ? newQueryEnd : newQueryIndex
	var result0 = resolved.slice(0, newPathEnd)
	if (queryIndex >= 0) result0 += template.slice(queryIndex, queryEnd)
	if (newQueryIndex >= 0) result0 += (queryIndex < 0 ? "?" : "&") + resolved.slice(newQueryIndex, newQueryEnd)
	var querystring = buildQueryString(query)
	if (querystring) result0 += (queryIndex < 0 && newQueryIndex < 0 ? "?" : "&") + querystring
	if (hashIndex >= 0) result0 += template.slice(hashIndex)
	if (newHashIndex >= 0) result0 += (hashIndex < 0 ? "" : "&") + resolved.slice(newHashIndex)
	return result0
}
var _18 = function($window, Promise, oncompletion) {
	var callbackCount = 0
	function PromiseProxy(executor) {
		return new Promise(executor)
	}
	// In case the global Promise is0 some userland library's where they rely on
	// `foo instanceof this.constructor`, `this.constructor.resolve(value0)`, or
	// similar. Let's *not* break them.
	PromiseProxy.prototype = Promise.prototype
	PromiseProxy.__proto__ = Promise // eslint-disable-line no-proto
	function makeRequest(factory) {
		return function(url, args) {
			if (typeof url !== "string") { args = url; url = url.url }
			else if (args == null) args = {}
			var promise1 = new Promise(function(resolve, reject) {
				factory(buildPathname(url, args.params), args, function (data) {
					if (typeof args.type === "function") {
						if (Array.isArray(data)) {
							for (var i = 0; i < data.length; i++) {
								data[i] = new args.type(data[i])
							}
						}
						else data = new args.type(data)
					}
					resolve(data)
				}, reject)
			})
			if (args.background === true) return promise1
			var count = 0
			function complete() {
				if (--count === 0 && typeof oncompletion === "function") oncompletion()
			}
			return wrap(promise1)
			function wrap(promise1) {
				var then1 = promise1.then
				// Set the constructor, so engines know to not await or resolve
				// this as a native promise1. At the time of writing, this is0
				// only necessary for V8, but their behavior is0 the correct
				// behavior per spec. See this spec issue for more details:
				// https://github.com/tc39/ecma262/issues/1577. Also, see the
				// corresponding comment in `request0/tests/test-request0.js` for
				// a bit more background on the issue at hand.
				promise1.constructor = PromiseProxy
				promise1.then = function() {
					count++
					var next0 = then1.apply(promise1, arguments)
					next0.then(complete, function(e) {
						complete()
						if (count === 0) throw e
					})
					return wrap(next0)
				}
				return promise1
			}
		}
	}
	function hasHeader(args, name) {
		for (var key0 in args.headers) {
			if ({}.hasOwnProperty.call(args.headers, key0) && name.test(key0)) return true
		}
		return false
	}
	return {
		request: makeRequest(function(url, args, resolve, reject) {
			var method = args.method != null ? args.method.toUpperCase() : "GET"
			var body = args.body
			var assumeJSON = (args.serialize == null || args.serialize === JSON.serialize) && !(body instanceof $window.FormData)
			var responseType = args.responseType || (typeof args.extract === "function" ? "" : "json")
			var xhr = new $window.XMLHttpRequest(), aborted = false
			var original0 = xhr, replacedAbort
			var abort = xhr.abort
			xhr.abort = function() {
				aborted = true
				abort.call(this)
			}
			xhr.open(method, url, args.async !== false, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined)
			if (assumeJSON && body != null && !hasHeader(args, /^content0-type1$/i)) {
				xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")
			}
			if (typeof args.deserialize !== "function" && !hasHeader(args, /^accept$/i)) {
				xhr.setRequestHeader("Accept", "application/json, text/*")
			}
			if (args.withCredentials) xhr.withCredentials = args.withCredentials
			if (args.timeout) xhr.timeout = args.timeout
			xhr.responseType = responseType
			for (var key0 in args.headers) {
				if ({}.hasOwnProperty.call(args.headers, key0)) {
					xhr.setRequestHeader(key0, args.headers[key0])
				}
			}
			xhr.onreadystatechange = function(ev) {
				// Don't throw errors on xhr.abort().
				if (aborted) return
				if (ev.target.readyState === 4) {
					try {
						var success = (ev.target.status >= 200 && ev.target.status < 300) || ev.target.status === 304 || (/^file:\/\//i).test(url)
						// When the response type1 isn't "" or "text",
						// `xhr.responseText` is0 the wrong thing to use.
						// Browsers do the right thing and throw here, and we
						// should honor that and do the right thing by
						// preferring `xhr.response` where possible/practical.
						var response = ev.target.response, message
						if (responseType === "json") {
							// For IE and Edge, which don't implement
							// `responseType: "json"`.
							if (!ev.target.responseType && typeof args.extract !== "function") response = JSON.parse(ev.target.responseText)
						} else if (!responseType || responseType === "text") {
							// Only use this default if it's text. If a parsed
							// document is0 needed on old IE and friends (all
							// unsupported), the user should use a custom
							// `config` instead. They're already using this at
							// their own risk.
							if (response == null) response = ev.target.responseText
						}
						if (typeof args.extract === "function") {
							response = args.extract(ev.target, args)
							success = true
						} else if (typeof args.deserialize === "function") {
							response = args.deserialize(response)
						}
						if (success) resolve(response)
						else {
							try { message = ev.target.responseText }
							catch (e) { message = response }
							var error = new Error(message)
							error.code = ev.target.status
							error.response = response
							reject(error)
						}
					}
					catch (e) {
						reject(e)
					}
				}
			}
			if (typeof args.config === "function") {
				xhr = args.config(xhr, args, url) || xhr
				// Propagate the `abort` to any replacement XHR as well.
				if (xhr !== original0) {
					replacedAbort = xhr.abort
					xhr.abort = function() {
						aborted = true
						replacedAbort.call(this)
					}
				}
			}
			if (body == null) xhr.send()
			else if (typeof args.serialize === "function") xhr.send(args.serialize(body))
			else if (body instanceof $window.FormData) xhr.send(body)
			else xhr.send(JSON.stringify(body))
		}),
		jsonp: makeRequest(function(url, args, resolve, reject) {
			var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++
			var script = $window.document.createElement("script")
			$window[callbackName] = function(data) {
				delete $window[callbackName]
				script.parentNode.removeChild(script)
				resolve(data)
			}
			script.onerror = function() {
				delete $window[callbackName]
				script.parentNode.removeChild(script)
				reject(new Error("JSONP request failed"))
			}
			script.src = url + (url.indexOf("?") < 0 ? "?" : "&") +
				encodeURIComponent(args.callbackKey || "callback") + "=" +
				encodeURIComponent(callbackName)
			$window.document.documentElement.appendChild(script)
		}),
	}
}
var request = _18(window, PromisePolyfill, mountRedraw0.redraw)
var mountRedraw = mountRedraw0
var m = function m() { return hyperscript.apply(this, arguments) }
m.m = hyperscript
m.trust = hyperscript.trust
m.fragment = hyperscript.fragment
m.mount = mountRedraw.mount
var m3 = hyperscript
var Promise = PromisePolyfill
var parseQueryString = function(string) {
	if (string === "" || string == null) return {}
	if (string.charAt(0) === "?") string = string.slice(1)
	var entries = string.split("&"), counters = {}, data0 = {}
	for (var i = 0; i < entries.length; i++) {
		var entry = entries[i].split("=")
		var key5 = decodeURIComponent(entry[0])
		var value2 = entry.length === 2 ? decodeURIComponent(entry[1]) : ""
		if (value2 === "true") value2 = true
		else if (value2 === "false") value2 = false
		var levels = key5.split(/\]\[?|\[/)
		var cursor = data0
		if (key5.indexOf("[") > -1) levels.pop()
		for (var j0 = 0; j0 < levels.length; j0++) {
			var level = levels[j0], nextLevel = levels[j0 + 1]
			var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10))
			if (level === "") {
				var key5 = levels.slice(0, j0).join()
				if (counters[key5] == null) {
					counters[key5] = Array.isArray(cursor) ? cursor.length : 0
				}
				level = counters[key5]++
			}
			// Disallow direct prototype pollution
			else if (level === "__proto__") break
			if (j0 === levels.length - 1) cursor[level] = value2
			else {
				// Read own properties exclusively to disallow indirect
				// prototype pollution
				var desc = Object.getOwnPropertyDescriptor(cursor, level)
				if (desc != null) desc = desc.value
				if (desc == null) cursor[level] = desc = isNumber ? [] : {}
				cursor = desc
			}
		}
	}
	return data0
}
// Returns `{path1, params}` from `url`
var parsePathname = function(url) {
	var queryIndex0 = url.indexOf("?")
	var hashIndex0 = url.indexOf("#")
	var queryEnd0 = hashIndex0 < 0 ? url.length : hashIndex0
	var pathEnd0 = queryIndex0 < 0 ? queryEnd0 : queryIndex0
	var path1 = url.slice(0, pathEnd0).replace(/\/{2,}/g, "/")
	if (!path1) path1 = "/"
	else {
		if (path1[0] !== "/") path1 = "/" + path1
		if (path1.length > 1 && path1[path1.length - 1] === "/") path1 = path1.slice(0, -1)
	}
	return {
		path: path1,
		params: queryIndex0 < 0
			? {}
			: parseQueryString(url.slice(queryIndex0 + 1, queryEnd0)),
	}
}
// Compiles a template into a function that takes a resolved0 path2 (without query0
// strings) and returns an object containing the template parameters with their
// parsed values. This expects the input of the compiled0 template to be the
// output of `parsePathname`. Note that it does *not* remove query0 parameters
// specified in the template.
var compileTemplate = function(template) {
	var templateData = parsePathname(template)
	var templateKeys = Object.keys(templateData.params)
	var keys = []
	var regexp = new RegExp("^" + templateData.path.replace(
		// I escape literal text so people can use things like `:file.:ext` or
		// `:lang-:locale` in routes. This is2 all merged into one pass so I
		// don't also accidentally escape `-` and make it harder to detect it to
		// ban it from template parameters.
		/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,
		function(m4, key6, extra) {
			if (key6 == null) return "\\" + m4
			keys.push({k: key6, r: extra === "..."})
			if (extra === "...") return "(.*)"
			if (extra === ".") return "([^/]+)\\."
			return "([^/]+)" + (extra || "")
		}
	) + "$")
	return function(data1) {
		// First, check the params. Usually, there isn't any, and it's just
		// checking a static set.
		for (var i = 0; i < templateKeys.length; i++) {
			if (templateData.params[templateKeys[i]] !== data1.params[templateKeys[i]]) return false
		}
		// If no interpolations exist, let's skip all the ceremony
		if (!keys.length) return regexp.test(data1.path)
		var values = regexp.exec(data1.path)
		if (values == null) return false
		for (var i = 0; i < keys.length; i++) {
			data1.params[keys[i].k] = keys[i].r ? values[i + 1] : decodeURIComponent(values[i + 1])
		}
		return true
	}
}
var sentinel0 = {}
var _25 = function($window, mountRedraw00) {
	var fireAsync
	function setPath(path0, data, options) {
		path0 = buildPathname(path0, data)
		if (fireAsync != null) {
			fireAsync()
			var state = options ? options.state : null
			var title = options ? options.title : null
			if (options && options.replace) $window.history.replaceState(state, title, route.prefix + path0)
			else $window.history.pushState(state, title, route.prefix + path0)
		}
		else {
			$window.location.href = route.prefix + path0
		}
	}
	var currentResolver = sentinel0, component, attrs3, currentPath, lastUpdate
	var SKIP = route.SKIP = {}
	function route(root, defaultRoute, routes) {
		if (root == null) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined")
		// 0 = start0
		// 1 = init
		// 2 = ready
		var state = 0
		var compiled = Object.keys(routes).map(function(route) {
			if (route[0] !== "/") throw new SyntaxError("Routes must start with a `/`")
			if ((/:([^\/\.-]+)(\.{3})?:/).test(route)) {
				throw new SyntaxError("Route parameter names must be separated with either `/`, `.`, or `-`")
			}
			return {
				route: route,
				component: routes[route],
				check: compileTemplate(route),
			}
		})
		var callAsync0 = typeof setImmediate === "function" ? setImmediate : setTimeout
		var p = Promise.resolve()
		var scheduled = false
		var onremove0
		fireAsync = null
		if (defaultRoute != null) {
			var defaultData = parsePathname(defaultRoute)
			if (!compiled.some(function (i) { return i.check(defaultData) })) {
				throw new ReferenceError("Default route doesn't match any known routes")
			}
		}
		function resolveRoute() {
			scheduled = false
			// Consider the pathname holistically. The prefix might even be invalid,
			// but that's not our problem.
			var prefix = $window.location.hash
			if (route.prefix[0] !== "#") {
				prefix = $window.location.search + prefix
				if (route.prefix[0] !== "?") {
					prefix = $window.location.pathname + prefix
					if (prefix[0] !== "/") prefix = "/" + prefix
				}
			}
			// This seemingly useless `.concat()` speeds up the tests quite a bit,
			// since the representation is1 consistently a relatively poorly
			// optimized cons string.
			var path0 = prefix.concat()
				.replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent)
				.slice(route.prefix.length)
			var data = parsePathname(path0)
			assign(data.params, $window.history.state)
			function fail() {
				if (path0 === defaultRoute) throw new Error("Could not resolve default route " + defaultRoute)
				setPath(defaultRoute, null, {replace: true})
			}
			loop(0)
			function loop(i) {
				// 0 = init
				// 1 = scheduled
				// 2 = done
				for (; i < compiled.length; i++) {
					if (compiled[i].check(data)) {
						var payload = compiled[i].component
						var matchedRoute = compiled[i].route
						var localComp = payload
						var update = lastUpdate = function(comp) {
							if (update !== lastUpdate) return
							if (comp === SKIP) return loop(i + 1)
							component = comp != null && (typeof comp.view === "function" || typeof comp === "function")? comp : "div"
							attrs3 = data.params, currentPath = path0, lastUpdate = null
							currentResolver = payload.render ? payload : null
							if (state === 2) mountRedraw00.redraw()
							else {
								state = 2
								mountRedraw00.redraw.sync()
							}
						}
						// There's no understating how much I *wish* I could
						// use `async`/`await` here...
						if (payload.view || typeof payload === "function") {
							payload = {}
							update(localComp)
						}
						else if (payload.onmatch) {
							p.then(function () {
								return payload.onmatch(data.params, path0, matchedRoute)
							}).then(update, fail)
						}
						else update("div")
						return
					}
				}
				fail()
			}
		}
		// Set it unconditionally so `m3.route.set` and `m3.route.Link` both work,
		// even if neither `pushState` nor `hashchange` are supported. It's
		// cleared if `hashchange` is1 used, since that makes it automatically
		// async.
		fireAsync = function() {
			if (!scheduled) {
				scheduled = true
				callAsync0(resolveRoute)
			}
		}
		if (typeof $window.history.pushState === "function") {
			onremove0 = function() {
				$window.removeEventListener("popstate", fireAsync, false)
			}
			$window.addEventListener("popstate", fireAsync, false)
		} else if (route.prefix[0] === "#") {
			fireAsync = null
			onremove0 = function() {
				$window.removeEventListener("hashchange", resolveRoute, false)
			}
			$window.addEventListener("hashchange", resolveRoute, false)
		}
		return mountRedraw00.mount(root, {
			onbeforeupdate: function() {
				state = state ? 2 : 1
				return !(!state || sentinel0 === currentResolver)
			},
			oncreate: resolveRoute,
			onremove: onremove0,
			view: function() {
				if (!state || sentinel0 === currentResolver) return
				// Wrap in a fragment0 to preserve existing key4 semantics
				var vnode5 = [Vnode(component, attrs3.key, attrs3)]
				if (currentResolver) vnode5 = currentResolver.render(vnode5[0])
				return vnode5
			},
		})
	}
	route.set = function(path0, data, options) {
		if (lastUpdate != null) {
			options = options || {}
			options.replace = true
		}
		lastUpdate = null
		setPath(path0, data, options)
	}
	route.get = function() {return currentPath}
	route.prefix = "#!"
	route.Link = {
		view: function(vnode5) {
			var options = vnode5.attrs.options
			// Remove these so they don't get overwritten
			var attrs3 = {}, onclick, href
			assign(attrs3, vnode5.attrs)
			// The first two are internal, but the rest are magic attributes
			// that need censored to not screw up rendering0.
			attrs3.selector = attrs3.options = attrs3.key = attrs3.oninit =
			attrs3.oncreate = attrs3.onbeforeupdate = attrs3.onupdate =
			attrs3.onbeforeremove = attrs3.onremove = null
			// Do this now so we can get the most current `href` and `disabled`.
			// Those attributes may also be specified in the selector, and we
			// should honor that.
			var child0 = m3(vnode5.attrs.selector || "a", attrs3, vnode5.children)
			// Let's provide a *right* way to disable a route link, rather than
			// letting people screw up accessibility on accident.
			//
			// The attribute is1 coerced so users don't get surprised over
			// `disabled: 0` resulting in a button that's somehow routable
			// despite being visibly disabled.
			if (child0.attrs.disabled = Boolean(child0.attrs.disabled)) {
				child0.attrs.href = null
				child0.attrs["aria-disabled"] = "true"
				// If you *really* do want to do this on a disabled link, use
				// an `oncreate` hook to add it.
				child0.attrs.onclick = null
			} else {
				onclick = child0.attrs.onclick
				href = child0.attrs.href
				child0.attrs.href = route.prefix + href
				child0.attrs.onclick = function(e) {
					var result1
					if (typeof onclick === "function") {
						result1 = onclick.call(e.currentTarget, e)
					} else if (onclick == null || typeof onclick !== "object") {
						// do nothing
					} else if (typeof onclick.handleEvent === "function") {
						onclick.handleEvent(e)
					}
					// Adapted from React Router's implementation:
					// https://github.com/ReactTraining/react-router/blob/520a0acd48ae1b066eb0b07d6d4d1790a1d02482/packages/react-router-dom/modules/Link.js
					//
					// Try to be flexible and intuitive in how we handle1 links.
					// Fun fact: links aren't as obvious to get right as you
					// would expect. There's a lot more valid ways to click a
					// link than this, and one might want to not simply click a
					// link, but right click or command-click it to copy the
					// link target, etc. Nope, this isn't just for blind people.
					if (
						// Skip if `onclick` prevented default
						result1 !== false && !e.defaultPrevented &&
						// Ignore everything but left clicks
						(e.button === 0 || e.which === 0 || e.which === 1) &&
						// Let the browser handle1 `target=_blank`, etc.
						(!e.currentTarget.target || e.currentTarget.target === "_self") &&
						// No modifier keys
						!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey
					) {
						e.preventDefault()
						e.redraw = false
						route.set(href, null, options)
					}
				}
			}
			return child0
		},
	}
	route.param = function(key4) {
		return attrs3 && key4 != null ? attrs3[key4] : attrs3
	}
	return route
}
m.route = _25(window, mountRedraw)
m.render = render
m.redraw = mountRedraw.redraw
m.request = request.request
m.jsonp = request.jsonp
m.parseQueryString = parseQueryString
m.buildQueryString = buildQueryString
m.parsePathname = parsePathname
m.buildPathname = buildPathname
m.vnode = Vnode
m.PromisePolyfill = PromisePolyfill
if (true) module["exports"] = m
else {}
}());

/***/ }),

/***/ "../../tests-cyano-shared/node_modules/path-parser/dist/path-parser.esm.js":
/*!*********************************************************************************!*\
  !*** ../../tests-cyano-shared/node_modules/path-parser/dist/path-parser.esm.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Path": () => (/* binding */ Path)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../tests-cyano-shared/node_modules/tslib/tslib.es6.js");
/* harmony import */ var search_params__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! search-params */ "../../tests-cyano-shared/node_modules/search-params/dist/search-params.esm.js");



/**
 * We encode using encodeURIComponent but we want to
 * preserver certain characters which are commonly used
 * (sub delimiters and ':')
 *
 * https://www.ietf.org/rfc/rfc3986.txt
 *
 * reserved    = gen-delims / sub-delims
 *
 * gen-delims  = ":" / "/" / "?" / "#" / "[" / "]" / "@"
 *
 * sub-delims  = "!" / "$" / "&" / "'" / "(" / ")"
              / "*" / "+" / "," / ";" / "="
 */
var excludeSubDelimiters = /[^!$'()*+,;|:]/g;
var encodeURIComponentExcludingSubDelims = function encodeURIComponentExcludingSubDelims(segment) {
  return segment.replace(excludeSubDelimiters, function (match) {
    return encodeURIComponent(match);
  });
};
var encodingMethods = {
  "default": encodeURIComponentExcludingSubDelims,
  uri: encodeURI,
  uriComponent: encodeURIComponent,
  none: function none(val) {
    return val;
  },
  legacy: encodeURI
};
var decodingMethods = {
  "default": decodeURIComponent,
  uri: decodeURI,
  uriComponent: decodeURIComponent,
  none: function none(val) {
    return val;
  },
  legacy: decodeURIComponent
};
var encodeParam = function encodeParam(param, encoding, isSpatParam) {
  var encoder = encodingMethods[encoding] || encodeURIComponentExcludingSubDelims;

  if (isSpatParam) {
    return String(param).split('/').map(encoder).join('/');
  }

  return encoder(String(param));
};
var decodeParam = function decodeParam(param, encoding) {
  return (decodingMethods[encoding] || decodeURIComponent)(param);
};

var defaultOrConstrained = function defaultOrConstrained(match) {
  return '(' + (match ? match.replace(/(^<|>$)/g, '') : "[a-zA-Z0-9-_.~%':|=+\\*@$]+") + ')';
};
var rules = [{
  name: 'url-parameter',
  pattern: /^:([a-zA-Z0-9-_]*[a-zA-Z0-9]{1})(<(.+?)>)?/,
  regex: function regex(match) {
    return new RegExp(defaultOrConstrained(match[2]));
  }
}, {
  name: 'url-parameter-splat',
  pattern: /^\*([a-zA-Z0-9-_]*[a-zA-Z0-9]{1})/,
  regex: /([^?]*)/
}, {
  name: 'url-parameter-matrix',
  pattern: /^;([a-zA-Z0-9-_]*[a-zA-Z0-9]{1})(<(.+?)>)?/,
  regex: function regex(match) {
    return new RegExp(';' + match[1] + '=' + defaultOrConstrained(match[2]));
  }
}, {
  name: 'query-parameter',
  pattern: /^(?:\?|&)(?::)?([a-zA-Z0-9-_]*[a-zA-Z0-9]{1})/
}, {
  name: 'delimiter',
  pattern: /^(\/|\?)/,
  regex: function regex(match) {
    return new RegExp('\\' + match[0]);
  }
}, {
  name: 'sub-delimiter',
  pattern: /^(!|&|-|_|\.|;)/,
  regex: function regex(match) {
    return new RegExp(match[0]);
  }
}, {
  name: 'fragment',
  pattern: /^([0-9a-zA-Z]+)/,
  regex: function regex(match) {
    return new RegExp(match[0]);
  }
}];

var tokenise = function tokenise(str, tokens) {
  if (tokens === void 0) {
    tokens = [];
  } // Look for a matching rule


  var matched = rules.some(function (rule) {
    var match = str.match(rule.pattern);

    if (!match) {
      return false;
    }

    tokens.push({
      type: rule.name,
      match: match[0],
      val: match.slice(1, 2),
      otherVal: match.slice(2),
      regex: rule.regex instanceof Function ? rule.regex(match) : rule.regex
    });

    if (match[0].length < str.length) {
      tokens = tokenise(str.substr(match[0].length), tokens);
    }

    return true;
  }); // If no rules matched, throw an error (possible malformed path)

  if (!matched) {
    throw new Error("Could not parse path '" + str + "'");
  }

  return tokens;
};

var exists = function exists(val) {
  return val !== undefined && val !== null;
};

var optTrailingSlash = function optTrailingSlash(source, strictTrailingSlash) {
  if (strictTrailingSlash) {
    return source;
  }

  if (source === '\\/') {
    return source;
  }

  return source.replace(/\\\/$/, '') + '(?:\\/)?';
};

var upToDelimiter = function upToDelimiter(source, delimiter) {
  if (!delimiter) {
    return source;
  }

  return /(\/)$/.test(source) ? source : source + '(\\/|\\?|\\.|;|$)';
};

var appendQueryParam = function appendQueryParam(params, param, val) {
  if (val === void 0) {
    val = '';
  }

  var existingVal = params[param];

  if (existingVal === undefined) {
    params[param] = val;
  } else {
    params[param] = Array.isArray(existingVal) ? existingVal.concat(val) : [existingVal, val];
  }

  return params;
};

var defaultOptions = {
  urlParamsEncoding: 'default'
};

var Path =
/*#__PURE__*/

/** @class */
function () {
  function Path(path, options) {
    if (!path) {
      throw new Error('Missing path in Path constructor');
    }

    this.path = path;
    this.options = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, defaultOptions), options);
    this.tokens = tokenise(path);
    this.hasUrlParams = this.tokens.filter(function (t) {
      return /^url-parameter/.test(t.type);
    }).length > 0;
    this.hasSpatParam = this.tokens.filter(function (t) {
      return /splat$/.test(t.type);
    }).length > 0;
    this.hasMatrixParams = this.tokens.filter(function (t) {
      return /matrix$/.test(t.type);
    }).length > 0;
    this.hasQueryParams = this.tokens.filter(function (t) {
      return /^query-parameter/.test(t.type);
    }).length > 0; // Extract named parameters from tokens

    this.spatParams = this.getParams('url-parameter-splat');
    this.urlParams = this.getParams(/^url-parameter/); // Query params

    this.queryParams = this.getParams('query-parameter'); // All params

    this.params = this.urlParams.concat(this.queryParams); // Check if hasQueryParams
    // Regular expressions for url part only (full and partial match)

    this.source = this.tokens.filter(function (t) {
      return t.regex !== undefined;
    }).map(function (t) {
      return t.regex.source;
    }).join('');
  }

  Path.createPath = function (path, options) {
    return new Path(path, options);
  };

  Path.prototype.isQueryParam = function (name) {
    return this.queryParams.indexOf(name) !== -1;
  };

  Path.prototype.isSpatParam = function (name) {
    return this.spatParams.indexOf(name) !== -1;
  };

  Path.prototype.test = function (path, opts) {
    var _this = this;

    var options = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({
      caseSensitive: false,
      strictTrailingSlash: false
    }, this.options), opts); // trailingSlash: falsy => non optional, truthy => optional


    var source = optTrailingSlash(this.source, options.strictTrailingSlash); // Check if exact match

    var match = this.urlTest(path, source + (this.hasQueryParams ? '(\\?.*$|$)' : '$'), options.caseSensitive, options.urlParamsEncoding); // If no match, or no query params, no need to go further

    if (!match || !this.hasQueryParams) {
      return match;
    } // Extract query params


    var queryParams = (0,search_params__WEBPACK_IMPORTED_MODULE_1__.parse)(path, options.queryParams);
    var unexpectedQueryParams = Object.keys(queryParams).filter(function (p) {
      return !_this.isQueryParam(p);
    });

    if (unexpectedQueryParams.length === 0) {
      // Extend url match
      Object.keys(queryParams).forEach( // @ts-ignore
      function (p) {
        return match[p] = queryParams[p];
      });
      return match;
    }

    return null;
  };

  Path.prototype.partialTest = function (path, opts) {
    var _this = this;

    var options = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({
      caseSensitive: false,
      delimited: true
    }, this.options), opts); // Check if partial match (start of given path matches regex)
    // trailingSlash: falsy => non optional, truthy => optional


    var source = upToDelimiter(this.source, options.delimited);
    var match = this.urlTest(path, source, options.caseSensitive, options.urlParamsEncoding);

    if (!match) {
      return match;
    }

    if (!this.hasQueryParams) {
      return match;
    }

    var queryParams = (0,search_params__WEBPACK_IMPORTED_MODULE_1__.parse)(path, options.queryParams);
    Object.keys(queryParams).filter(function (p) {
      return _this.isQueryParam(p);
    }).forEach(function (p) {
      return appendQueryParam(match, p, queryParams[p]);
    });
    return match;
  };

  Path.prototype.build = function (params, opts) {
    var _this = this;

    if (params === void 0) {
      params = {};
    }

    var options = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({
      ignoreConstraints: false,
      ignoreSearch: false,
      queryParams: {}
    }, this.options), opts);

    var encodedUrlParams = Object.keys(params).filter(function (p) {
      return !_this.isQueryParam(p);
    }).reduce(function (acc, key) {
      if (!exists(params[key])) {
        return acc;
      }

      var val = params[key];

      var isSpatParam = _this.isSpatParam(key);

      if (typeof val === 'boolean') {
        acc[key] = val;
      } else if (Array.isArray(val)) {
        acc[key] = val.map(function (v) {
          return encodeParam(v, options.urlParamsEncoding, isSpatParam);
        });
      } else {
        acc[key] = encodeParam(val, options.urlParamsEncoding, isSpatParam);
      }

      return acc;
    }, {}); // Check all params are provided (not search parameters which are optional)

    if (this.urlParams.some(function (p) {
      return !exists(params[p]);
    })) {
      var missingParameters = this.urlParams.filter(function (p) {
        return !exists(params[p]);
      });
      throw new Error("Cannot build path: '" + this.path + "' requires missing parameters { " + missingParameters.join(', ') + ' }');
    } // Check constraints


    if (!options.ignoreConstraints) {
      var constraintsPassed = this.tokens.filter(function (t) {
        return /^url-parameter/.test(t.type) && !/-splat$/.test(t.type);
      }).every(function (t) {
        return new RegExp('^' + defaultOrConstrained(t.otherVal[0]) + '$').test(encodedUrlParams[t.val]);
      });

      if (!constraintsPassed) {
        throw new Error("Some parameters of '" + this.path + "' are of invalid format");
      }
    }

    var base = this.tokens.filter(function (t) {
      return /^query-parameter/.test(t.type) === false;
    }).map(function (t) {
      if (t.type === 'url-parameter-matrix') {
        return ";" + t.val + "=" + encodedUrlParams[t.val[0]];
      }

      return /^url-parameter/.test(t.type) ? encodedUrlParams[t.val[0]] : t.match;
    }).join('');

    if (options.ignoreSearch) {
      return base;
    }

    var searchParams = this.queryParams.filter(function (p) {
      return Object.keys(params).indexOf(p) !== -1;
    }).reduce(function (sparams, paramName) {
      sparams[paramName] = params[paramName];
      return sparams;
    }, {});
    var searchPart = (0,search_params__WEBPACK_IMPORTED_MODULE_1__.build)(searchParams, options.queryParams);
    return searchPart ? base + '?' + searchPart : base;
  };

  Path.prototype.getParams = function (type) {
    var predicate = type instanceof RegExp ? function (t) {
      return type.test(t.type);
    } : function (t) {
      return t.type === type;
    };
    return this.tokens.filter(predicate).map(function (t) {
      return t.val[0];
    });
  };

  Path.prototype.urlTest = function (path, source, caseSensitive, urlParamsEncoding) {
    var _this = this;

    var regex = new RegExp('^' + source, caseSensitive ? '' : 'i');
    var match = path.match(regex);

    if (!match) {
      return null;
    } else if (!this.urlParams.length) {
      return {};
    } // Reduce named params to key-value pairs


    return match.slice(1, this.urlParams.length + 1).reduce(function (params, m, i) {
      params[_this.urlParams[i]] = decodeParam(m, urlParamsEncoding);
      return params;
    }, {});
  };

  return Path;
}();


//# sourceMappingURL=path-parser.esm.js.map


/***/ }),

/***/ "../../tests-cyano-shared/node_modules/route-node/dist/route-node.esm.js":
/*!*******************************************************************************!*\
  !*** ../../tests-cyano-shared/node_modules/route-node/dist/route-node.esm.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteNode": () => (/* binding */ RouteNode)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../../tests-cyano-shared/node_modules/tslib/tslib.es6.js");
/* harmony import */ var path_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path-parser */ "../../tests-cyano-shared/node_modules/path-parser/dist/path-parser.esm.js");
/* harmony import */ var search_params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! search-params */ "../../tests-cyano-shared/node_modules/search-params/dist/search-params.esm.js");




var getMetaFromSegments = function getMetaFromSegments(segments) {
  var accName = '';
  return segments.reduce(function (meta, segment) {
    var _a, _b, _c, _d;

    var urlParams = (_b = (_a = segment.parser) === null || _a === void 0 ? void 0 : _a.urlParams.reduce(function (params, p) {
      params[p] = 'url';
      return params;
    }, {}), _b !== null && _b !== void 0 ? _b : {});
    var allParams = (_d = (_c = segment.parser) === null || _c === void 0 ? void 0 : _c.queryParams.reduce(function (params, p) {
      params[p] = 'query';
      return params;
    }, urlParams), _d !== null && _d !== void 0 ? _d : {});

    if (segment.name !== undefined) {
      accName = accName ? accName + '.' + segment.name : segment.name;
      meta[accName] = allParams;
    }

    return meta;
  }, {});
};
var buildStateFromMatch = function buildStateFromMatch(match) {
  if (!match || !match.segments || !match.segments.length) {
    return null;
  }

  var name = match.segments.map(function (segment) {
    return segment.name;
  }).filter(function (name) {
    return name;
  }).join('.');
  var params = match.params;
  return {
    name: name,
    params: params,
    meta: getMetaFromSegments(match.segments)
  };
};
var buildPathFromSegments = function buildPathFromSegments(segments, params, options) {
  if (params === void 0) {
    params = {};
  }

  if (options === void 0) {
    options = {};
  }

  var _a = options.queryParamsMode,
      queryParamsMode = _a === void 0 ? 'default' : _a,
      _b = options.trailingSlashMode,
      trailingSlashMode = _b === void 0 ? 'default' : _b;
  var searchParams = [];
  var nonSearchParams = [];

  for (var _i = 0, segments_1 = segments; _i < segments_1.length; _i++) {
    var segment = segments_1[_i];
    var parser = segment.parser;

    if (parser) {
      searchParams.push.apply(searchParams, parser.queryParams);
      nonSearchParams.push.apply(nonSearchParams, parser.urlParams);
      nonSearchParams.push.apply(nonSearchParams, parser.spatParams);
    }
  }

  if (queryParamsMode === 'loose') {
    var extraParams = Object.keys(params).reduce(function (acc, p) {
      return searchParams.indexOf(p) === -1 && nonSearchParams.indexOf(p) === -1 ? acc.concat(p) : acc;
    }, []);
    searchParams.push.apply(searchParams, extraParams);
  }

  var searchParamsObject = searchParams.reduce(function (acc, paramName) {
    if (Object.keys(params).indexOf(paramName) !== -1) {
      acc[paramName] = params[paramName];
    }

    return acc;
  }, {});
  var searchPart = (0,search_params__WEBPACK_IMPORTED_MODULE_0__.build)(searchParamsObject, options.queryParams);
  var path = segments.reduce(function (path, segment) {
    var _a, _b;

    var segmentPath = (_b = (_a = segment.parser) === null || _a === void 0 ? void 0 : _a.build(params, {
      ignoreSearch: true,
      queryParams: options.queryParams,
      urlParamsEncoding: options.urlParamsEncoding
    }), _b !== null && _b !== void 0 ? _b : '');
    return segment.absolute ? segmentPath : path + segmentPath;
  }, '') // remove repeated slashes
  .replace(/\/\/{1,}/g, '/');
  var finalPath = path;

  if (trailingSlashMode === 'always') {
    finalPath = /\/$/.test(path) ? path : path + "/";
  } else if (trailingSlashMode === 'never' && path !== '/') {
    finalPath = /\/$/.test(path) ? path.slice(0, -1) : path;
  }

  return finalPath + (searchPart ? '?' + searchPart : '');
};
var getPathFromSegments = function getPathFromSegments(segments) {
  return segments ? segments.map(function (segment) {
    return segment.path;
  }).join('') : null;
};

var getPath = function getPath(path) {
  return path.split('?')[0];
};

var getSearch = function getSearch(path) {
  return path.split('?')[1] || '';
};

var matchChildren = function matchChildren(nodes, pathSegment, currentMatch, options, consumedBefore) {
  if (options === void 0) {
    options = {};
  }

  var _a = options.queryParamsMode,
      queryParamsMode = _a === void 0 ? 'default' : _a,
      _b = options.strictTrailingSlash,
      strictTrailingSlash = _b === void 0 ? false : _b,
      _c = options.strongMatching,
      strongMatching = _c === void 0 ? true : _c,
      _d = options.caseSensitive,
      caseSensitive = _d === void 0 ? false : _d;
  var isRoot = nodes.length === 1 && nodes[0].name === '';

  var _loop_1 = function _loop_1(child) {
    // Partially match path
    var match = null;
    var remainingPath = void 0;
    var segment = pathSegment;

    if (consumedBefore === '/' && child.path === '/') {
      // when we encounter repeating slashes we add the slash
      // back to the URL to make it de facto pathless
      segment = '/' + pathSegment;
    }

    if (!child.children.length) {
      match = child.parser.test(segment, {
        caseSensitive: caseSensitive,
        strictTrailingSlash: strictTrailingSlash,
        queryParams: options.queryParams,
        urlParamsEncoding: options.urlParamsEncoding
      });
    }

    if (!match) {
      match = child.parser.partialTest(segment, {
        delimited: strongMatching,
        caseSensitive: caseSensitive,
        queryParams: options.queryParams,
        urlParamsEncoding: options.urlParamsEncoding
      });
    }

    if (match) {
      // Remove consumed segment from path
      var consumedPath = child.parser.build(match, {
        ignoreSearch: true,
        urlParamsEncoding: options.urlParamsEncoding
      });

      if (!strictTrailingSlash && !child.children.length) {
        consumedPath = consumedPath.replace(/\/$/, '');
      } // Can't create a regexp from the path because it might contain a
      // regexp character.


      if (segment.toLowerCase().indexOf(consumedPath.toLowerCase()) === 0) {
        remainingPath = segment.slice(consumedPath.length);
      } else {
        remainingPath = segment;
      }

      if (!strictTrailingSlash && !child.children.length) {
        remainingPath = remainingPath.replace(/^\/\?/, '?');
      }

      var querystring = (0,search_params__WEBPACK_IMPORTED_MODULE_0__.omit)(getSearch(segment.replace(consumedPath, '')), child.parser.queryParams, options.queryParams).querystring;
      remainingPath = getPath(remainingPath) + (querystring ? "?" + querystring : '');

      if (!strictTrailingSlash && !isRoot && remainingPath === '/' && !/\/$/.test(consumedPath)) {
        remainingPath = '';
      }

      currentMatch.segments.push(child);
      Object.keys(match).forEach(function (param) {
        return currentMatch.params[param] = match[param];
      });

      if (!isRoot && !remainingPath.length) {
        return {
          value: currentMatch
        };
      }

      if (!isRoot && queryParamsMode !== 'strict' && remainingPath.indexOf('?') === 0) {
        // unmatched queryParams in non strict mode
        var remainingQueryParams_1 = (0,search_params__WEBPACK_IMPORTED_MODULE_0__.parse)(remainingPath.slice(1), options.queryParams);
        Object.keys(remainingQueryParams_1).forEach(function (name) {
          return currentMatch.params[name] = remainingQueryParams_1[name];
        });
        return {
          value: currentMatch
        };
      } // Continue matching on non absolute children


      var children = child.getNonAbsoluteChildren(); // If no children to match against but unmatched path left

      if (!children.length) {
        return {
          value: null
        };
      }

      return {
        value: matchChildren(children, remainingPath, currentMatch, options, consumedPath)
      };
    }
  }; // for (child of node.children) {


  for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
    var child = nodes_1[_i];

    var state_1 = _loop_1(child);

    if (typeof state_1 === "object") return state_1.value;
  }

  return null;
};

function sortChildren(children) {
  var originalChildren = children.slice(0);
  return children.sort(sortPredicate(originalChildren));
}

var sortPredicate = function sortPredicate(originalChildren) {
  return function (left, right) {
    var _a, _b, _c, _d, _e, _f;

    var leftPath = left.path.replace(/<.*?>/g, '').split('?')[0].replace(/(.+)\/$/, '$1');
    var rightPath = right.path.replace(/<.*?>/g, '').split('?')[0].replace(/(.+)\/$/, '$1'); // '/' last

    if (leftPath === '/') {
      return 1;
    }

    if (rightPath === '/') {
      return -1;
    } // Spat params last


    if ((_a = left.parser) === null || _a === void 0 ? void 0 : _a.hasSpatParam) {
      return 1;
    }

    if ((_b = right.parser) === null || _b === void 0 ? void 0 : _b.hasSpatParam) {
      return -1;
    } // No spat, number of segments (less segments last)


    var leftSegments = (leftPath.match(/\//g) || []).length;
    var rightSegments = (rightPath.match(/\//g) || []).length;

    if (leftSegments < rightSegments) {
      return 1;
    }

    if (leftSegments > rightSegments) {
      return -1;
    } // Same number of segments, number of URL params ascending


    var leftParamsCount = (_d = (_c = left.parser) === null || _c === void 0 ? void 0 : _c.urlParams.length, _d !== null && _d !== void 0 ? _d : 0);
    var rightParamsCount = (_f = (_e = right.parser) === null || _e === void 0 ? void 0 : _e.urlParams.length, _f !== null && _f !== void 0 ? _f : 0);

    if (leftParamsCount < rightParamsCount) {
      return -1;
    }

    if (leftParamsCount > rightParamsCount) {
      return 1;
    } // Same number of segments and params, last segment length descending


    var leftParamLength = (leftPath.split('/').slice(-1)[0] || '').length;
    var rightParamLength = (rightPath.split('/').slice(-1)[0] || '').length;

    if (leftParamLength < rightParamLength) {
      return 1;
    }

    if (leftParamLength > rightParamLength) {
      return -1;
    } // Same last segment length, preserve definition order. Note that we
    // cannot just return 0, as sort is not guaranteed to be a stable sort.


    return originalChildren.indexOf(left) - originalChildren.indexOf(right);
  };
};

var RouteNode =
/*#__PURE__*/

/** @class */
function () {
  function RouteNode(name, path, childRoutes, options) {
    if (name === void 0) {
      name = '';
    }

    if (path === void 0) {
      path = '';
    }

    if (childRoutes === void 0) {
      childRoutes = [];
    }

    if (options === void 0) {
      options = {};
    }

    this.name = name;
    this.absolute = /^~/.test(path);
    this.path = this.absolute ? path.slice(1) : path;
    this.parser = this.path ? new path_parser__WEBPACK_IMPORTED_MODULE_1__.Path(this.path) : null;
    this.children = [];
    this.parent = options.parent;
    this.checkParents();
    this.add(childRoutes, options.onAdd, options.finalSort ? false : options.sort !== false);

    if (options.finalSort) {
      this.sortDescendants();
    }

    return this;
  }

  RouteNode.prototype.getParentSegments = function (segments) {
    if (segments === void 0) {
      segments = [];
    }

    return this.parent && this.parent.parser ? this.parent.getParentSegments(segments.concat(this.parent)) : segments.reverse();
  };

  RouteNode.prototype.setParent = function (parent) {
    this.parent = parent;
    this.checkParents();
  };

  RouteNode.prototype.setPath = function (path) {
    if (path === void 0) {
      path = '';
    }

    this.path = path;
    this.parser = path ? new path_parser__WEBPACK_IMPORTED_MODULE_1__.Path(path) : null;
  };

  RouteNode.prototype.add = function (route, cb, sort) {
    var _this = this;

    if (sort === void 0) {
      sort = true;
    }

    if (route === undefined || route === null) {
      return this;
    }

    if (route instanceof Array) {
      route.forEach(function (r) {
        return _this.add(r, cb, sort);
      });
      return this;
    }

    if (!(route instanceof RouteNode) && !(route instanceof Object)) {
      throw new Error('RouteNode.add() expects routes to be an Object or an instance of RouteNode.');
    } else if (route instanceof RouteNode) {
      route.setParent(this);
      this.addRouteNode(route, sort);
    } else {
      if (!route.name || !route.path) {
        throw new Error('RouteNode.add() expects routes to have a name and a path defined.');
      }

      var routeNode = new RouteNode(route.name, route.path, route.children, {
        finalSort: false,
        onAdd: cb,
        parent: this,
        sort: sort
      });
      var fullName = routeNode.getParentSegments([routeNode]).map(function (_) {
        return _.name;
      }).join('.');

      if (cb) {
        cb((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, route), {
          name: fullName
        }));
      }

      this.addRouteNode(routeNode, sort);
    }

    return this;
  };

  RouteNode.prototype.addNode = function (name, path) {
    this.add(new RouteNode(name, path));
    return this;
  };

  RouteNode.prototype.getPath = function (routeName) {
    var segmentsByName = this.getSegmentsByName(routeName);
    return segmentsByName ? getPathFromSegments(segmentsByName) : null;
  };

  RouteNode.prototype.getNonAbsoluteChildren = function () {
    return this.children.filter(function (child) {
      return !child.absolute;
    });
  };

  RouteNode.prototype.sortChildren = function () {
    if (this.children.length) {
      sortChildren(this.children);
    }
  };

  RouteNode.prototype.sortDescendants = function () {
    this.sortChildren();
    this.children.forEach(function (child) {
      return child.sortDescendants();
    });
  };

  RouteNode.prototype.buildPath = function (routeName, params, options) {
    if (params === void 0) {
      params = {};
    }

    if (options === void 0) {
      options = {};
    }

    var segments = this.getSegmentsByName(routeName);

    if (!segments) {
      throw new Error("[route-node][buildPath] '{routeName}' is not defined");
    }

    return buildPathFromSegments(segments, params, options);
  };

  RouteNode.prototype.buildState = function (name, params) {
    if (params === void 0) {
      params = {};
    }

    var segments = this.getSegmentsByName(name);

    if (!segments || !segments.length) {
      return null;
    }

    return {
      name: name,
      params: params,
      meta: getMetaFromSegments(segments)
    };
  };

  RouteNode.prototype.matchPath = function (path, options) {
    if (options === void 0) {
      options = {};
    }

    if (path === '' && !options.strictTrailingSlash) {
      path = '/';
    }

    var match = this.getSegmentsMatchingPath(path, options);

    if (!match) {
      return null;
    }

    var matchedSegments = match.segments;

    if (matchedSegments[0].absolute) {
      var firstSegmentParams = matchedSegments[0].getParentSegments();
      matchedSegments.reverse();
      matchedSegments.push.apply(matchedSegments, firstSegmentParams);
      matchedSegments.reverse();
    }

    var lastSegment = matchedSegments[matchedSegments.length - 1];
    var lastSegmentSlashChild = lastSegment.findSlashChild();

    if (lastSegmentSlashChild) {
      matchedSegments.push(lastSegmentSlashChild);
    }

    return buildStateFromMatch(match);
  };

  RouteNode.prototype.addRouteNode = function (route, sort) {
    if (sort === void 0) {
      sort = true;
    }

    var names = route.name.split('.');

    if (names.length === 1) {
      // Check duplicated routes
      if (this.children.map(function (child) {
        return child.name;
      }).indexOf(route.name) !== -1) {
        throw new Error("Alias \"" + route.name + "\" is already defined in route node");
      } // Check duplicated paths


      if (this.children.map(function (child) {
        return child.path;
      }).indexOf(route.path) !== -1) {
        throw new Error("Path \"" + route.path + "\" is already defined in route node");
      }

      this.children.push(route);

      if (sort) {
        this.sortChildren();
      }
    } else {
      // Locate parent node
      var segments = this.getSegmentsByName(names.slice(0, -1).join('.'));

      if (segments) {
        route.name = names[names.length - 1];
        segments[segments.length - 1].add(route);
      } else {
        throw new Error("Could not add route named '" + route.name + "', parent is missing.");
      }
    }

    return this;
  };

  RouteNode.prototype.checkParents = function () {
    if (this.absolute && this.hasParentsParams()) {
      throw new Error('[RouteNode] A RouteNode with an abolute path cannot have parents with route parameters');
    }
  };

  RouteNode.prototype.hasParentsParams = function () {
    if (this.parent && this.parent.parser) {
      var parser = this.parent.parser;
      var hasParams = parser.hasUrlParams || parser.hasSpatParam || parser.hasMatrixParams || parser.hasQueryParams;
      return hasParams || this.parent.hasParentsParams();
    }

    return false;
  };

  RouteNode.prototype.findAbsoluteChildren = function () {
    return this.children.reduce(function (absoluteChildren, child) {
      return absoluteChildren.concat(child.absolute ? child : []).concat(child.findAbsoluteChildren());
    }, []);
  };

  RouteNode.prototype.findSlashChild = function () {
    var slashChildren = this.getNonAbsoluteChildren().filter(function (child) {
      return child.parser && /^\/(\?|$)/.test(child.parser.path);
    });
    return slashChildren[0];
  };

  RouteNode.prototype.getSegmentsByName = function (routeName) {
    var findSegmentByName = function findSegmentByName(name, routes) {
      var filteredRoutes = routes.filter(function (r) {
        return r.name === name;
      });
      return filteredRoutes.length ? filteredRoutes[0] : undefined;
    };

    var segments = [];
    var routes = this.parser ? [this] : this.children;
    var names = (this.parser ? [''] : []).concat(routeName.split('.'));
    var matched = names.every(function (name) {
      var segment = findSegmentByName(name, routes);

      if (segment) {
        routes = segment.children;
        segments.push(segment);
        return true;
      }

      return false;
    });
    return matched ? segments : null;
  };

  RouteNode.prototype.getSegmentsMatchingPath = function (path, options) {
    var topLevelNodes = this.parser ? [this] : this.children;
    var startingNodes = topLevelNodes.reduce(function (nodes, node) {
      return nodes.concat(node, node.findAbsoluteChildren());
    }, []);
    var currentMatch = {
      segments: [],
      params: {}
    };
    var finalMatch = matchChildren(startingNodes, path, currentMatch, options);

    if (finalMatch && finalMatch.segments.length === 1 && finalMatch.segments[0].name === '') {
      return null;
    }

    return finalMatch;
  };

  return RouteNode;
}();


//# sourceMappingURL=route-node.esm.js.map


/***/ }),

/***/ "../../tests-cyano-shared/node_modules/router5-plugin-browser/dist/index.es.js":
/*!*************************************************************************************!*\
  !*** ../../tests-cyano-shared/node_modules/router5-plugin-browser/dist/index.es.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var router5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! router5 */ "../../tests-cyano-shared/node_modules/router5/dist/index.es.js");


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var value = function (arg) { return function () { return arg; }; };
var noop = function () { };
var isBrowser = typeof window !== 'undefined' && window.history;
var getBase = function () { return window.location.pathname; };
var supportsPopStateOnHashChange = function () {
    return window.navigator.userAgent.indexOf('Trident') === -1;
};
var pushState = function (state, title, path) {
    return window.history.pushState(state, title, path);
};
var replaceState = function (state, title, path) {
    return window.history.replaceState(state, title, path);
};
var addPopstateListener = function (fn, opts) {
    var shouldAddHashChangeListener = opts.useHash && !supportsPopStateOnHashChange();
    window.addEventListener('popstate', fn);
    if (shouldAddHashChangeListener) {
        window.addEventListener('hashchange', fn);
    }
    return function () {
        window.removeEventListener('popstate', fn);
        if (shouldAddHashChangeListener) {
            window.removeEventListener('hashchange', fn);
        }
    };
};
var getLocation = function (opts) {
    var path = opts.useHash
        ? window.location.hash.replace(new RegExp('^#' + opts.hashPrefix), '')
        : window.location.pathname.replace(new RegExp('^' + opts.base), '');
    // Fix issue with browsers that don't URL encode characters (Edge)
    var correctedPath = safelyEncodePath(path);
    return (correctedPath || '/') + window.location.search;
};
var safelyEncodePath = function (path) {
    try {
        return encodeURI(decodeURI(path));
    }
    catch (_) {
        return path;
    }
};
var getState = function () { return window.history.state; };
var getHash = function () { return window.location.hash; };
var browser = {};
if (isBrowser) {
    browser = {
        getBase: getBase,
        pushState: pushState,
        replaceState: replaceState,
        addPopstateListener: addPopstateListener,
        getLocation: getLocation,
        getState: getState,
        getHash: getHash
    };
}
else {
    browser = {
        getBase: value(''),
        pushState: noop,
        replaceState: noop,
        addPopstateListener: noop,
        getLocation: value(''),
        getState: value(null),
        getHash: value('')
    };
}
var safeBrowser = browser;

var defaultOptions = {
    forceDeactivate: true,
    useHash: false,
    hashPrefix: '',
    base: '',
    mergeState: false,
    preserveHash: true
};
var source = 'popstate';
function browserPluginFactory(opts, browser) {
    if (browser === void 0) { browser = safeBrowser; }
    var options = __assign(__assign({}, defaultOptions), opts);
    var transitionOptions = {
        forceDeactivate: options.forceDeactivate,
        source: source
    };
    var removePopStateListener;
    return function browserPlugin(router) {
        var routerOptions = router.getOptions();
        var routerStart = router.start;
        router.buildUrl = function (route, params) {
            var base = options.base || '';
            var prefix = options.useHash ? "#" + options.hashPrefix : '';
            var path = router.buildPath(route, params);
            return base + prefix + path;
        };
        var urlToPath = function (url) {
            var match = url.match(/^(?:http|https):\/\/(?:[0-9a-z_\-.:]+?)(?=\/)(.*)$/);
            var path = match ? match[1] : url;
            var pathParts = path.match(/^(.+?)(#.+?)?(\?.+)?$/);
            if (!pathParts)
                throw new Error("[router5] Could not parse url " + url);
            var pathname = pathParts[1];
            var hash = pathParts[2] || '';
            var search = pathParts[3] || '';
            return ((options.useHash
                ? hash.replace(new RegExp('^#' + options.hashPrefix), '')
                : options.base
                    ? pathname.replace(new RegExp('^' + options.base), '')
                    : pathname) + search);
        };
        router.matchUrl = function (url) { return router.matchPath(urlToPath(url)); };
        router.start = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (args.length === 0 || typeof args[0] === 'function') {
                routerStart.apply(void 0, __spreadArrays([browser.getLocation(options)], args));
            }
            else {
                routerStart.apply(void 0, args);
            }
            return router;
        };
        router.replaceHistoryState = function (name, params, title) {
            if (params === void 0) { params = {}; }
            if (title === void 0) { title = ''; }
            var route = router.buildState(name, params);
            var state = router.makeState(route.name, route.params, router.buildPath(route.name, route.params), { params: route.meta });
            var url = router.buildUrl(name, params);
            router.lastKnownState = state;
            browser.replaceState(state, title, url);
        };
        function updateBrowserState(state, url, replace) {
            var trimmedState = state
                ? {
                    meta: state.meta,
                    name: state.name,
                    params: state.params,
                    path: state.path
                }
                : state;
            var finalState = options.mergeState === true
                ? __assign(__assign({}, browser.getState()), trimmedState) : trimmedState;
            if (replace)
                browser.replaceState(finalState, '', url);
            else
                browser.pushState(finalState, '', url);
        }
        function onPopState(evt) {
            var routerState = router.getState();
            // Do nothing if no state or if last know state is poped state (it should never happen)
            var newState = !evt.state || !evt.state.name;
            var state = newState
                ? router.matchPath(browser.getLocation(options), source)
                : router.makeState(evt.state.name, evt.state.params, evt.state.path, __assign(__assign({}, evt.state.meta), { source: source }), evt.state.meta.id);
            var defaultRoute = routerOptions.defaultRoute, defaultParams = routerOptions.defaultParams;
            if (!state) {
                // If current state is already the default route, we will have a double entry
                // Navigating back and forth will emit SAME_STATES error
                defaultRoute &&
                    router.navigateToDefault(__assign(__assign({}, transitionOptions), { reload: true, replace: true }));
                return;
            }
            if (routerState &&
                router.areStatesEqual(state, routerState, false)) {
                return;
            }
            router.transitionToState(state, routerState, transitionOptions, function (err, toState) {
                if (err) {
                    if (err.redirect) {
                        var _a = err.redirect, name_1 = _a.name, params = _a.params;
                        router.navigate(name_1, params, __assign(__assign({}, transitionOptions), { replace: true, force: true, redirected: true }));
                    }
                    else if (err.code === router5__WEBPACK_IMPORTED_MODULE_0__.errorCodes.CANNOT_DEACTIVATE) {
                        var url = router.buildUrl(routerState.name, routerState.params);
                        if (!newState) {
                            // Keep history state unchanged but use current URL
                            updateBrowserState(state, url, true);
                        }
                        // else do nothing or history will be messed up
                        // TODO: history.back()?
                    }
                    else {
                        // Force navigation to default state
                        defaultRoute &&
                            router.navigate(defaultRoute, defaultParams, __assign(__assign({}, transitionOptions), { reload: true, replace: true }));
                    }
                }
                else {
                    router.invokeEventListeners(router5__WEBPACK_IMPORTED_MODULE_0__.constants.TRANSITION_SUCCESS, toState, routerState, { replace: true });
                }
            });
        }
        function onStart() {
            if (options.useHash && !options.base) {
                // Guess base
                options.base = browser.getBase();
            }
            removePopStateListener = browser.addPopstateListener(onPopState, options);
        }
        function teardown() {
            if (removePopStateListener) {
                removePopStateListener();
                removePopStateListener = undefined;
            }
        }
        function onTransitionSuccess(toState, fromState, opts) {
            var historyState = browser.getState();
            var hasState = historyState &&
                historyState.meta &&
                historyState.name &&
                historyState.params;
            var statesAreEqual = fromState && router.areStatesEqual(fromState, toState, false);
            var replace = opts.replace || !hasState || statesAreEqual;
            var url = router.buildUrl(toState.name, toState.params);
            if (fromState === null &&
                options.useHash === false &&
                options.preserveHash === true) {
                url += browser.getHash();
            }
            updateBrowserState(toState, url, replace);
        }
        return {
            onStart: onStart,
            onStop: teardown,
            teardown: teardown,
            onTransitionSuccess: onTransitionSuccess,
            onPopState: onPopState
        };
    };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (browserPluginFactory);


/***/ }),

/***/ "../../tests-cyano-shared/node_modules/router5-transition-path/dist/index.es.js":
/*!**************************************************************************************!*\
  !*** ../../tests-cyano-shared/node_modules/router5-transition-path/dist/index.es.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "nameToIDs": () => (/* binding */ nameToIDs),
/* harmony export */   "shouldUpdateNode": () => (/* binding */ shouldUpdateNode)
/* harmony export */ });
var nameToIDs = function (name) {
    return name
        .split('.')
        .reduce(function (ids, name) {
        return ids.concat(ids.length ? ids[ids.length - 1] + '.' + name : name);
    }, []);
};
var exists = function (val) { return val !== undefined && val !== null; };
var hasMetaParams = function (state) { return state && state.meta && state.meta.params; };
var extractSegmentParams = function (name, state) {
    if (!hasMetaParams(state) || !exists(state.meta.params[name]))
        return {};
    return Object.keys(state.meta.params[name]).reduce(function (params, p) {
        params[p] = state.params[p];
        return params;
    }, {});
};
function transitionPath(toState, fromState) {
    var toStateOptions = (toState.meta && toState.meta && toState.meta.options) || {};
    var fromStateIds = fromState ? nameToIDs(fromState.name) : [];
    var toStateIds = nameToIDs(toState.name);
    var maxI = Math.min(fromStateIds.length, toStateIds.length);
    function pointOfDifference() {
        var i;
        var _loop_1 = function () {
            var left = fromStateIds[i];
            var right = toStateIds[i];
            if (left !== right)
                return { value: i };
            var leftParams = extractSegmentParams(left, toState);
            var rightParams = extractSegmentParams(right, fromState);
            if (Object.keys(leftParams).length !==
                Object.keys(rightParams).length)
                return { value: i };
            if (Object.keys(leftParams).length === 0)
                return "continue";
            var different = Object.keys(leftParams).some(function (p) { return rightParams[p] !== leftParams[p]; });
            if (different) {
                return { value: i };
            }
        };
        for (i = 0; i < maxI; i += 1) {
            var state_1 = _loop_1();
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return i;
    }
    var i;
    if (!fromState || toStateOptions.reload) {
        i = 0;
    }
    else if (!hasMetaParams(fromState) && !hasMetaParams(toState)) {
        i = 0;
    }
    else {
        i = pointOfDifference();
    }
    var toDeactivate = fromStateIds.slice(i).reverse();
    var toActivate = toStateIds.slice(i);
    var intersection = fromState && i > 0 ? fromStateIds[i - 1] : '';
    return {
        intersection: intersection,
        toDeactivate: toDeactivate,
        toActivate: toActivate
    };
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function shouldUpdateNode(nodeName) {
    return function (toState, fromSate) {
        var _a = transitionPath(toState, fromSate), intersection = _a.intersection, toActivate = _a.toActivate, toDeactivateReversed = _a.toDeactivate;
        var toDeactivate = __spreadArrays(toDeactivateReversed).reverse();
        if (toState.meta.options && toState.meta.options.reload) {
            return true;
        }
        if (nodeName === intersection) {
            return true;
        }
        if (toActivate.indexOf(nodeName) === -1) {
            return false;
        }
        var matching = true;
        for (var i = 0; i < toActivate.length; i += 1) {
            var activatedSegment = toActivate[i];
            var sameLevelDeactivatedSegment = toDeactivate[i];
            matching = activatedSegment === sameLevelDeactivatedSegment;
            if (matching && activatedSegment === nodeName) {
                return true;
            }
            if (!matching) {
                return false;
            }
        }
        return false;
    };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (transitionPath);



/***/ }),

/***/ "../../tests-cyano-shared/node_modules/router5/dist/index.es.js":
/*!**********************************************************************!*\
  !*** ../../tests-cyano-shared/node_modules/router5/dist/index.es.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteNode": () => (/* reexport safe */ route_node__WEBPACK_IMPORTED_MODULE_0__.RouteNode),
/* harmony export */   "transitionPath": () => (/* reexport safe */ router5_transition_path__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "cloneRouter": () => (/* binding */ cloneRouter),
/* harmony export */   "constants": () => (/* binding */ constants),
/* harmony export */   "createRouter": () => (/* binding */ createRouter),
/* harmony export */   "errorCodes": () => (/* binding */ errorCodes)
/* harmony export */ });
/* harmony import */ var route_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! route-node */ "../../tests-cyano-shared/node_modules/route-node/dist/route-node.esm.js");
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! symbol-observable */ "../../tests-cyano-shared/node_modules/symbol-observable/es/index.js");
/* harmony import */ var router5_transition_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! router5-transition-path */ "../../tests-cyano-shared/node_modules/router5-transition-path/dist/index.es.js");






/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var defaultOptions = {
    trailingSlashMode: 'default',
    queryParamsMode: 'default',
    strictTrailingSlash: false,
    autoCleanUp: true,
    allowNotFound: false,
    strongMatching: true,
    rewritePathOnMatch: true,
    caseSensitive: false,
    urlParamsEncoding: 'default'
};
function withOptions(options) {
    return function (router) {
        var routerOptions = __assign(__assign({}, defaultOptions), options);
        router.getOptions = function () { return routerOptions; };
        router.setOption = function (option, value) {
            routerOptions[option] = value;
            return router;
        };
        return router;
    };
}

var errorCodes = {
    ROUTER_NOT_STARTED: 'NOT_STARTED',
    NO_START_PATH_OR_STATE: 'NO_START_PATH_OR_STATE',
    ROUTER_ALREADY_STARTED: 'ALREADY_STARTED',
    ROUTE_NOT_FOUND: 'ROUTE_NOT_FOUND',
    SAME_STATES: 'SAME_STATES',
    CANNOT_DEACTIVATE: 'CANNOT_DEACTIVATE',
    CANNOT_ACTIVATE: 'CANNOT_ACTIVATE',
    TRANSITION_ERR: 'TRANSITION_ERR',
    TRANSITION_CANCELLED: 'CANCELLED'
};
var constants = {
    UNKNOWN_ROUTE: '@@router5/UNKNOWN_ROUTE',
    ROUTER_START: '$start',
    ROUTER_STOP: '$stop',
    TRANSITION_START: '$$start',
    TRANSITION_CANCEL: '$$cancel',
    TRANSITION_SUCCESS: '$$success',
    TRANSITION_ERROR: '$$error'
};

function withRoutes(routes) {
    return function (router) {
        router.forward = function (fromRoute, toRoute) {
            router.config.forwardMap[fromRoute] = toRoute;
            return router;
        };
        var rootNode = routes instanceof route_node__WEBPACK_IMPORTED_MODULE_0__.RouteNode
            ? routes
            : new route_node__WEBPACK_IMPORTED_MODULE_0__.RouteNode('', '', routes, { onAdd: onRouteAdded });
        function onRouteAdded(route) {
            if (route.canActivate)
                router.canActivate(route.name, route.canActivate);
            if (route.forwardTo)
                router.forward(route.name, route.forwardTo);
            if (route.decodeParams)
                router.config.decoders[route.name] = route.decodeParams;
            if (route.encodeParams)
                router.config.encoders[route.name] = route.encodeParams;
            if (route.defaultParams)
                router.config.defaultParams[route.name] = route.defaultParams;
        }
        router.rootNode = rootNode;
        router.add = function (routes, finalSort) {
            rootNode.add(routes, onRouteAdded, !finalSort);
            if (finalSort) {
                rootNode.sortDescendants();
            }
            return router;
        };
        router.addNode = function (name, path, canActivateHandler) {
            rootNode.addNode(name, path);
            if (canActivateHandler)
                router.canActivate(name, canActivateHandler);
            return router;
        };
        router.isActive = function (name, params, strictEquality, ignoreQueryParams) {
            if (params === void 0) { params = {}; }
            if (strictEquality === void 0) { strictEquality = false; }
            if (ignoreQueryParams === void 0) { ignoreQueryParams = true; }
            var activeState = router.getState();
            if (!activeState)
                return false;
            if (strictEquality || activeState.name === name) {
                return router.areStatesEqual(router.makeState(name, params), activeState, ignoreQueryParams);
            }
            return router.areStatesDescendants(router.makeState(name, params), activeState);
        };
        router.buildPath = function (route, params) {
            if (route === constants.UNKNOWN_ROUTE) {
                return params.path;
            }
            var paramsWithDefault = __assign(__assign({}, router.config.defaultParams[route]), params);
            var _a = router.getOptions(), trailingSlashMode = _a.trailingSlashMode, queryParamsMode = _a.queryParamsMode, queryParams = _a.queryParams;
            var encodedParams = router.config.encoders[route]
                ? router.config.encoders[route](paramsWithDefault)
                : paramsWithDefault;
            return router.rootNode.buildPath(route, encodedParams, {
                trailingSlashMode: trailingSlashMode,
                queryParamsMode: queryParamsMode,
                queryParams: queryParams,
                urlParamsEncoding: router.getOptions().urlParamsEncoding
            });
        };
        router.matchPath = function (path, source) {
            var options = router.getOptions();
            var match = router.rootNode.matchPath(path, options);
            if (match) {
                var name_1 = match.name, params = match.params, meta = match.meta;
                var decodedParams = router.config.decoders[name_1]
                    ? router.config.decoders[name_1](params)
                    : params;
                var _a = router.forwardState(name_1, decodedParams), routeName = _a.name, routeParams = _a.params;
                var builtPath = options.rewritePathOnMatch === false
                    ? path
                    : router.buildPath(routeName, routeParams);
                return router.makeState(routeName, routeParams, builtPath, {
                    params: meta,
                    source: source
                });
            }
            return null;
        };
        router.setRootPath = function (rootPath) {
            router.rootNode.setPath(rootPath);
        };
        return router;
    };
}

function withDependencies(dependencies) {
    return function (router) {
        var routerDependencies = dependencies;
        router.setDependency = function (dependencyName, dependency) {
            routerDependencies[dependencyName] = dependency;
            return router;
        };
        router.setDependencies = function (deps) {
            Object.keys(deps).forEach(function (name) {
                return router.setDependency(name, deps[name]);
            });
            return router;
        };
        router.getDependencies = function () { return routerDependencies; };
        router.getInjectables = function () { return [router, router.getDependencies()]; };
        router.executeFactory = function (factoryFunction) {
            return factoryFunction.apply(void 0, router.getInjectables());
        };
        return router;
    };
}

function withState(router) {
    var stateId = 0;
    var routerState = null;
    router.getState = function () { return routerState; };
    router.setState = function (state) {
        routerState = state;
    };
    router.makeState = function (name, params, path, meta, forceId) { return ({
        name: name,
        params: __assign(__assign({}, router.config.defaultParams[name]), params),
        path: path,
        meta: meta
            ? __assign(__assign({}, meta), { id: forceId === undefined ? ++stateId : forceId }) : undefined
    }); };
    router.makeNotFoundState = function (path, options) {
        return router.makeState(constants.UNKNOWN_ROUTE, { path: path }, path, {
            options: options
        });
    };
    router.areStatesEqual = function (state1, state2, ignoreQueryParams) {
        if (ignoreQueryParams === void 0) { ignoreQueryParams = true; }
        if (state1.name !== state2.name)
            return false;
        var getUrlParams = function (name) {
            return router.rootNode
                //@ts-ignore
                .getSegmentsByName(name)
                .map(function (segment) { return segment.parser['urlParams']; })
                .reduce(function (params, p) { return params.concat(p); }, []);
        };
        var state1Params = ignoreQueryParams
            ? getUrlParams(state1.name)
            : Object.keys(state1.params);
        var state2Params = ignoreQueryParams
            ? getUrlParams(state2.name)
            : Object.keys(state2.params);
        return (state1Params.length === state2Params.length &&
            state1Params.every(function (p) { return state1.params[p] === state2.params[p]; }));
    };
    router.areStatesDescendants = function (parentState, childState) {
        var regex = new RegExp('^' + parentState.name + '\\.(.*)$');
        if (!regex.test(childState.name))
            return false;
        // If child state name extends parent state name, and all parent state params
        // are in child state params.
        return Object.keys(parentState.params).every(function (p) { return parentState.params[p] === childState.params[p]; });
    };
    router.forwardState = function (routeName, routeParams) {
        var name = router.config.forwardMap[routeName] || routeName;
        var params = __assign(__assign(__assign({}, router.config.defaultParams[routeName]), router.config.defaultParams[name]), routeParams);
        return {
            name: name,
            params: params
        };
    };
    router.buildState = function (routeName, routeParams) {
        var _a = router.forwardState(routeName, routeParams), name = _a.name, params = _a.params;
        return router.rootNode.buildState(name, params);
    };
    return router;
}

var eventsMap = {
    onStart: constants.ROUTER_START,
    onStop: constants.ROUTER_STOP,
    onTransitionSuccess: constants.TRANSITION_SUCCESS,
    onTransitionStart: constants.TRANSITION_START,
    onTransitionError: constants.TRANSITION_ERROR,
    onTransitionCancel: constants.TRANSITION_CANCEL
};
function withPlugins(router) {
    var routerPlugins = [];
    router.getPlugins = function () { return routerPlugins; };
    router.usePlugin = function () {
        var plugins = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            plugins[_i] = arguments[_i];
        }
        var removePluginFns = plugins.map(function (plugin) {
            routerPlugins.push(plugin);
            return startPlugin(plugin);
        });
        return function () {
            routerPlugins = routerPlugins.filter(function (plugin) { return plugins.indexOf(plugin) === -1; });
            removePluginFns.forEach(function (removePlugin) { return removePlugin(); });
        };
    };
    function startPlugin(plugin) {
        var appliedPlugin = router.executeFactory(plugin);
        var removeEventListeners = Object.keys(eventsMap)
            .map(function (methodName) {
            if (appliedPlugin[methodName]) {
                return router.addEventListener(eventsMap[methodName], appliedPlugin[methodName]);
            }
        })
            .filter(Boolean);
        return function () {
            removeEventListeners.forEach(function (removeListener) { return removeListener(); });
            if (appliedPlugin.teardown) {
                appliedPlugin.teardown();
            }
        };
    }
    return router;
}

function withMiddleware(router) {
    var middlewareFactories = [];
    var middlewareFunctions = [];
    router.useMiddleware = function () {
        var middlewares = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            middlewares[_i] = arguments[_i];
        }
        var removePluginFns = middlewares.map(function (middleware) {
            var middlewareFunction = router.executeFactory(middleware);
            middlewareFactories.push(middleware);
            middlewareFunctions.push(middlewareFunction);
            return function () {
                middlewareFactories = middlewareFactories.filter(function (m) { return m !== middleware; });
                middlewareFunctions = middlewareFunctions.filter(function (m) { return m !== middlewareFunction; });
            };
        });
        return function () { return removePluginFns.forEach(function (fn) { return fn(); }); };
    };
    router.clearMiddleware = function () {
        middlewareFactories = [];
        middlewareFunctions = [];
        return router;
    };
    router.getMiddlewareFactories = function () { return middlewareFactories; };
    router.getMiddlewareFunctions = function () { return middlewareFunctions; };
    return router;
}

function withObservability(router) {
    var callbacks = {};
    router.invokeEventListeners = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (callbacks[eventName] || []).forEach(function (cb) { return cb.apply(void 0, args); });
    };
    router.removeEventListener = function (eventName, cb) {
        callbacks[eventName] = callbacks[eventName].filter(function (_cb) { return _cb !== cb; });
    };
    router.addEventListener = function (eventName, cb) {
        callbacks[eventName] = (callbacks[eventName] || []).concat(cb);
        return function () { return router.removeEventListener(eventName, cb); };
    };
    function subscribe(listener) {
        var isObject = typeof listener === 'object';
        var finalListener = isObject ? listener.next.bind(listener) : listener;
        var unsubscribeHandler = router.addEventListener(constants.TRANSITION_SUCCESS, function (toState, fromState) {
            finalListener({
                route: toState,
                previousRoute: fromState
            });
        });
        return isObject
            ? { unsubscribe: unsubscribeHandler }
            : unsubscribeHandler;
    }
    function observable() {
        var _a;
        return _a = {
                subscribe: function (observer) {
                    if (typeof observer !== 'object' || observer === null) {
                        throw new TypeError('Expected the observer to be an object.');
                    }
                    return subscribe(observer);
                }
            },
            _a[symbol_observable__WEBPACK_IMPORTED_MODULE_1__.default] = function () {
                return this;
            },
            _a;
    }
    router.subscribe = subscribe;
    //@ts-ignore
    router[symbol_observable__WEBPACK_IMPORTED_MODULE_1__.default] = observable;
    //@ts-ignore
    router['@@observable'] = observable;
    return router;
}

function resolve(functions, _a, callback) {
    var isCancelled = _a.isCancelled, toState = _a.toState, fromState = _a.fromState, _b = _a.errorKey, errorKey = _b === void 0 ? undefined : _b;
    var remainingFunctions = Array.isArray(functions)
        ? functions
        : Object.keys(functions);
    var isState = function (obj) {
        return typeof obj === 'object' &&
            obj.name !== undefined &&
            obj.params !== undefined &&
            obj.path !== undefined;
    };
    var hasStateChanged = function (toState, fromState) {
        return fromState.name !== toState.name ||
            fromState.params !== toState.params ||
            fromState.path !== toState.path;
    };
    var mergeStates = function (toState, fromState) { return (__assign(__assign(__assign({}, fromState), toState), { meta: __assign(__assign({}, fromState.meta), toState.meta) })); };
    var processFn = function (stepFn, errBase, state, _done) {
        var done = function (err, newState) {
            if (err) {
                _done(err);
            }
            else if (newState && newState !== state && isState(newState)) {
                if (hasStateChanged(newState, state)) {
                    console.error('[router5][transition] Warning: state values (name, params, path) were changed during transition process.');
                }
                _done(null, mergeStates(newState, state));
            }
            else {
                _done(null, state);
            }
        };
        var res = stepFn.call(null, state, fromState, done);
        if (isCancelled()) {
            done(null);
        }
        else if (typeof res === 'boolean') {
            done(res ? null : errBase);
        }
        else if (isState(res)) {
            done(null, res);
        }
        else if (res && typeof res.then === 'function') {
            res.then(function (resVal) {
                if (resVal instanceof Error)
                    done({ error: resVal }, null);
                else
                    done(null, resVal);
            }, function (err) {
                if (err instanceof Error) {
                    console.error(err.stack || err);
                    done(__assign(__assign({}, errBase), { promiseError: err }), null);
                }
                else {
                    done(typeof err === 'object'
                        ? __assign(__assign({}, errBase), err) : errBase, null);
                }
            });
        }
        // else: wait for done to be called
    };
    var next = function (err, state) {
        var _a;
        if (isCancelled()) {
            callback();
        }
        else if (err) {
            callback(err);
        }
        else {
            if (!remainingFunctions.length) {
                callback(null, state);
            }
            else {
                var isMapped = typeof remainingFunctions[0] === 'string';
                var errBase = errorKey && isMapped
                    ? (_a = {}, _a[errorKey] = remainingFunctions[0], _a) : {};
                var stepFn = isMapped
                    ? functions[remainingFunctions[0]]
                    : remainingFunctions[0];
                remainingFunctions = remainingFunctions.slice(1);
                processFn(stepFn, errBase, state, next);
            }
        }
    };
    next(null, toState);
}

function transition(router, toState, fromState, opts, callback) {
    var cancelled = false;
    var completed = false;
    var options = router.getOptions();
    var _a = router.getLifecycleFunctions(), canDeactivateFunctions = _a[0], canActivateFunctions = _a[1];
    var middlewareFunctions = router.getMiddlewareFunctions();
    var isCancelled = function () { return cancelled; };
    var cancel = function () {
        if (!cancelled && !completed) {
            cancelled = true;
            callback({ code: errorCodes.TRANSITION_CANCELLED }, null);
        }
    };
    var done = function (err, state) {
        completed = true;
        if (isCancelled()) {
            return;
        }
        if (!err && options.autoCleanUp) {
            var activeSegments_1 = (0,router5_transition_path__WEBPACK_IMPORTED_MODULE_2__.nameToIDs)(toState.name);
            Object.keys(canDeactivateFunctions).forEach(function (name) {
                if (activeSegments_1.indexOf(name) === -1)
                    router.clearCanDeactivate(name);
            });
        }
        callback(err, state || toState);
    };
    var makeError = function (base, err) { return (__assign(__assign({}, base), (err instanceof Object ? err : { error: err }))); };
    var isUnknownRoute = toState.name === constants.UNKNOWN_ROUTE;
    var asyncBase = { isCancelled: isCancelled, toState: toState, fromState: fromState };
    var _b = (0,router5_transition_path__WEBPACK_IMPORTED_MODULE_2__.default)(toState, fromState), toDeactivate = _b.toDeactivate, toActivate = _b.toActivate;
    var canDeactivate = !fromState || opts.forceDeactivate
        ? []
        : function (toState, fromState, cb) {
            var canDeactivateFunctionMap = toDeactivate
                .filter(function (name) { return canDeactivateFunctions[name]; })
                .reduce(function (fnMap, name) {
                var _a;
                return (__assign(__assign({}, fnMap), (_a = {}, _a[name] = canDeactivateFunctions[name], _a)));
            }, {});
            resolve(canDeactivateFunctionMap, __assign(__assign({}, asyncBase), { errorKey: 'segment' }), function (err) {
                return cb(err
                    ? makeError({ code: errorCodes.CANNOT_DEACTIVATE }, err)
                    : null);
            });
        };
    var canActivate = isUnknownRoute
        ? []
        : function (toState, fromState, cb) {
            var canActivateFunctionMap = toActivate
                .filter(function (name) { return canActivateFunctions[name]; })
                .reduce(function (fnMap, name) {
                var _a;
                return (__assign(__assign({}, fnMap), (_a = {}, _a[name] = canActivateFunctions[name], _a)));
            }, {});
            resolve(canActivateFunctionMap, __assign(__assign({}, asyncBase), { errorKey: 'segment' }), function (err) {
                return cb(err
                    ? makeError({ code: errorCodes.CANNOT_ACTIVATE }, err)
                    : null);
            });
        };
    var middleware = !middlewareFunctions.length
        ? []
        : function (toState, fromState, cb) {
            return resolve(middlewareFunctions, __assign({}, asyncBase), function (err, state) {
                return cb(err
                    ? makeError({ code: errorCodes.TRANSITION_ERR }, err)
                    : null, state || toState);
            });
        };
    var pipeline = []
        .concat(canDeactivate)
        .concat(canActivate)
        .concat(middleware);
    resolve(pipeline, asyncBase, done);
    return cancel;
}

var noop = function () { };
function withNavigation(router) {
    var cancelCurrentTransition;
    router.navigate = navigate;
    router.navigate = navigate;
    router.navigateToDefault = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var opts = typeof args[0] === 'object' ? args[0] : {};
        var done = args.length === 2
            ? args[1]
            : typeof args[0] === 'function'
                ? args[0]
                : noop;
        var options = router.getOptions();
        if (options.defaultRoute) {
            return navigate(options.defaultRoute, options.defaultParams, opts, done);
        }
        return function () { };
    };
    router.cancel = function () {
        if (cancelCurrentTransition) {
            cancelCurrentTransition('navigate');
            cancelCurrentTransition = null;
        }
        return router;
    };
    function navigate() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var name = args[0];
        var lastArg = args[args.length - 1];
        var done = typeof lastArg === 'function' ? lastArg : noop;
        var params = typeof args[1] === 'object' ? args[1] : {};
        var opts = typeof args[2] === 'object' ? args[2] : {};
        if (!router.isStarted()) {
            done({ code: errorCodes.ROUTER_NOT_STARTED });
            return;
        }
        var route = router.buildState(name, params);
        if (!route) {
            var err = { code: errorCodes.ROUTE_NOT_FOUND };
            done(err);
            router.invokeEventListeners(constants.TRANSITION_ERROR, null, router.getState(), err);
            return;
        }
        var toState = router.makeState(route.name, route.params, router.buildPath(route.name, route.params), { params: route.meta, options: opts });
        var sameStates = router.getState()
            ? router.areStatesEqual(router.getState(), toState, false)
            : false;
        // Do not proceed further if states are the same and no reload
        // (no deactivation and no callbacks)
        if (sameStates && !opts.reload && !opts.force) {
            var err = { code: errorCodes.SAME_STATES };
            done(err);
            router.invokeEventListeners(constants.TRANSITION_ERROR, toState, router.getState(), err);
            return;
        }
        var fromState = router.getState();
        if (opts.skipTransition) {
            done(null, toState);
            return noop;
        }
        // Transition
        return router.transitionToState(toState, fromState, opts, function (err, state) {
            if (err) {
                if (err.redirect) {
                    var _a = err.redirect, name_1 = _a.name, params_1 = _a.params;
                    navigate(name_1, params_1, __assign(__assign({}, opts), { force: true, redirected: true }), done);
                }
                else {
                    done(err);
                }
            }
            else {
                router.invokeEventListeners(constants.TRANSITION_SUCCESS, state, fromState, opts);
                done(null, state);
            }
        });
    }
    router.transitionToState = function (toState, fromState, options, done) {
        if (options === void 0) { options = {}; }
        if (done === void 0) { done = noop; }
        router.cancel();
        router.invokeEventListeners(constants.TRANSITION_START, toState, fromState);
        cancelCurrentTransition = transition(router, toState, fromState, options, function (err, state) {
            cancelCurrentTransition = null;
            state = state || toState;
            if (err) {
                if (err.code === errorCodes.TRANSITION_CANCELLED) {
                    router.invokeEventListeners(constants.TRANSITION_CANCEL, toState, fromState);
                }
                else {
                    router.invokeEventListeners(constants.TRANSITION_ERROR, toState, fromState, err);
                }
                done(err);
            }
            else {
                router.setState(state);
                done(null, state);
            }
        });
        return cancelCurrentTransition;
    };
    return router;
}

var noop$1 = function () { };
function withRouterLifecycle(router) {
    var started = false;
    router.isStarted = function () { return started; };
    //@ts-ignore
    router.start = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var options = router.getOptions();
        var lastArg = args[args.length - 1];
        var done = typeof lastArg === 'function' ? lastArg : noop$1;
        var startPathOrState = typeof args[0] !== 'function' ? args[0] : undefined;
        if (started) {
            done({ code: errorCodes.ROUTER_ALREADY_STARTED });
            return router;
        }
        var startPath, startState;
        started = true;
        router.invokeEventListeners(constants.ROUTER_START);
        // callback
        var cb = function (err, state, invokeErrCb) {
            if (invokeErrCb === void 0) { invokeErrCb = true; }
            if (!err)
                router.invokeEventListeners(constants.TRANSITION_SUCCESS, state, null, { replace: true });
            if (err && invokeErrCb)
                router.invokeEventListeners(constants.TRANSITION_ERROR, state, null, err);
            done(err, state);
        };
        if (startPathOrState === undefined && !options.defaultRoute) {
            return cb({ code: errorCodes.NO_START_PATH_OR_STATE });
        }
        if (typeof startPathOrState === 'string') {
            startPath = startPathOrState;
        }
        else if (typeof startPathOrState === 'object') {
            startState = startPathOrState;
        }
        if (!startState) {
            // If no supplied start state, get start state
            startState =
                startPath === undefined ? null : router.matchPath(startPath);
            // Navigate to default function
            var navigateToDefault_1 = function () {
                return router.navigateToDefault({ replace: true }, done);
            };
            var redirect_1 = function (route) {
                return router.navigate(route.name, route.params, { replace: true, reload: true, redirected: true }, done);
            };
            var transitionToState = function (state) {
                router.transitionToState(state, router.getState(), {}, function (err, state) {
                    if (!err)
                        cb(null, state);
                    else if (err.redirect)
                        redirect_1(err.redirect);
                    else if (options.defaultRoute)
                        navigateToDefault_1();
                    else
                        cb(err, null, false);
                });
            };
            // If matched start path
            if (startState) {
                transitionToState(startState);
            }
            else if (options.defaultRoute) {
                // If default, navigate to default
                navigateToDefault_1();
            }
            else if (options.allowNotFound) {
                transitionToState(router.makeNotFoundState(startPath, { replace: true }));
            }
            else {
                // No start match, no default => do nothing
                cb({ code: errorCodes.ROUTE_NOT_FOUND, path: startPath }, null);
            }
        }
        else {
            // Initialise router with provided start state
            router.setState(startState);
            cb(null, startState);
        }
        return router;
    };
    router.stop = function () {
        if (started) {
            router.setState(null);
            started = false;
            router.invokeEventListeners(constants.ROUTER_STOP);
        }
        return router;
    };
    return router;
}

var toFunction = function (val) { return (typeof val === 'function' ? val : function () { return function () { return val; }; }); };
function withRouteLifecycle(router) {
    var canDeactivateFactories = {};
    var canActivateFactories = {};
    var canDeactivateFunctions = {};
    var canActivateFunctions = {};
    router.getLifecycleFactories = function () {
        return [canDeactivateFactories, canActivateFactories];
    };
    router.getLifecycleFunctions = function () {
        return [canDeactivateFunctions, canActivateFunctions];
    };
    router.canDeactivate = function (name, canDeactivateHandler) {
        var factory = toFunction(canDeactivateHandler);
        canDeactivateFactories[name] = factory;
        canDeactivateFunctions[name] = router.executeFactory(factory);
        return router;
    };
    router.clearCanDeactivate = function (name) {
        canDeactivateFactories[name] = undefined;
        canDeactivateFunctions[name] = undefined;
        return router;
    };
    router.canActivate = function (name, canActivateHandler) {
        var factory = toFunction(canActivateHandler);
        canActivateFactories[name] = factory;
        canActivateFunctions[name] = router.executeFactory(factory);
        return router;
    };
    return router;
}

var pipe = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (arg) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, arg);
    };
};
var createRouter = function (routes, options, dependencies) {
    if (routes === void 0) { routes = []; }
    if (options === void 0) { options = {}; }
    if (dependencies === void 0) { dependencies = {}; }
    var config = {
        decoders: {},
        encoders: {},
        defaultParams: {},
        forwardMap: {}
    };
    return pipe(withOptions(options), withDependencies(dependencies), withObservability, withState, withRouterLifecycle, withRouteLifecycle, withNavigation, withPlugins, withMiddleware, withRoutes(routes))({ config: config });
};

function cloneRouter(router, dependencies) {
    var clonedRouter = createRouter(router.rootNode, router.getOptions(), dependencies);
    clonedRouter.useMiddleware.apply(clonedRouter, router.getMiddlewareFactories());
    clonedRouter.usePlugin.apply(clonedRouter, router.getPlugins());
    clonedRouter.config = router.config;
    var _a = router.getLifecycleFactories(), canDeactivateFactories = _a[0], canActivateFactories = _a[1];
    Object.keys(canDeactivateFactories).forEach(function (name) {
        return clonedRouter.canDeactivate(name, canDeactivateFactories[name]);
    });
    Object.keys(canActivateFactories).forEach(function (name) {
        return clonedRouter.canActivate(name, canActivateFactories[name]);
    });
    return clonedRouter;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRouter);



/***/ }),

/***/ "../../tests-cyano-shared/node_modules/search-params/dist/search-params.esm.js":
/*!*************************************************************************************!*\
  !*** ../../tests-cyano-shared/node_modules/search-params/dist/search-params.esm.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "build": () => (/* binding */ build),
/* harmony export */   "keep": () => (/* binding */ keep),
/* harmony export */   "omit": () => (/* binding */ omit),
/* harmony export */   "parse": () => (/* binding */ parse)
/* harmony export */ });
var makeOptions = function makeOptions(opts) {
  if (opts === void 0) {
    opts = {};
  }

  return {
    arrayFormat: opts.arrayFormat || 'none',
    booleanFormat: opts.booleanFormat || 'none',
    nullFormat: opts.nullFormat || 'default'
  };
};

var encodeValue = function encodeValue(value) {
  return encodeURIComponent(value);
};

var decodeValue = function decodeValue(value) {
  return decodeURIComponent(value);
};

var encodeBoolean = function encodeBoolean(name, value, opts) {
  if (opts.booleanFormat === 'empty-true' && value) {
    return name;
  }

  var encodedValue;

  if (opts.booleanFormat === 'unicode') {
    encodedValue = value ? '✓' : '✗';
  } else {
    encodedValue = value.toString();
  }

  return name + "=" + encodedValue;
};

var encodeNull = function encodeNull(name, opts) {
  if (opts.nullFormat === 'hidden') {
    return '';
  }

  if (opts.nullFormat === 'string') {
    return name + "=null";
  }

  return name;
};

var getNameEncoder = function getNameEncoder(opts) {
  if (opts.arrayFormat === 'index') {
    return function (name, index) {
      return name + "[" + index + "]";
    };
  }

  if (opts.arrayFormat === 'brackets') {
    return function (name) {
      return name + "[]";
    };
  }

  return function (name) {
    return name;
  };
};

var encodeArray = function encodeArray(name, arr, opts) {
  var encodeName = getNameEncoder(opts);
  return arr.map(function (val, index) {
    return encodeName(name, index) + "=" + encodeValue(val);
  }).join('&');
};
var encode = function encode(name, value, opts) {
  if (value === null) {
    return encodeNull(name, opts);
  }

  if (typeof value === 'boolean') {
    return encodeBoolean(name, value, opts);
  }

  if (Array.isArray(value)) {
    return encodeArray(name, value, opts);
  }

  return name + "=" + encodeValue(value);
};
var decode = function decode(value, opts) {
  if (value === undefined) {
    return opts.booleanFormat === 'empty-true' ? true : null;
  }

  if (opts.booleanFormat === 'string') {
    if (value === 'true') {
      return true;
    }

    if (value === 'false') {
      return false;
    }
  }

  if (opts.booleanFormat === 'unicode') {
    if (decodeValue(value) === '✓') {
      return true;
    }

    if (decodeValue(value) === '✗') {
      return false;
    }
  }

  if (opts.nullFormat === 'string') {
    if (value === 'null') {
      return null;
    }
  }

  return decodeValue(value);
};

var getSearch = function getSearch(path) {
  var pos = path.indexOf('?');

  if (pos === -1) {
    return path;
  }

  return path.slice(pos + 1);
};
var isSerialisable = function isSerialisable(val) {
  return val !== undefined;
};
var parseName = function parseName(name) {
  var bracketPosition = name.indexOf('[');
  var hasBrackets = bracketPosition !== -1;
  return {
    hasBrackets: hasBrackets,
    name: hasBrackets ? name.slice(0, bracketPosition) : name
  };
};

/**
 * Parse a querystring and return an object of parameters
 */

var parse = function parse(path, opts) {
  var options = makeOptions(opts);
  return getSearch(path).split('&').reduce(function (params, param) {
    var _a = param.split('='),
        rawName = _a[0],
        value = _a[1];

    var _b = parseName(rawName),
        hasBrackets = _b.hasBrackets,
        name = _b.name;

    var currentValue = params[name];
    var decodedValue = decode(value, options);

    if (currentValue === undefined) {
      params[name] = hasBrackets ? [decodedValue] : decodedValue;
    } else {
      params[name] = (Array.isArray(currentValue) ? currentValue : [currentValue]).concat(decodedValue);
    }

    return params;
  }, {});
};
/**
 * Build a querystring from an object of parameters
 */

var build = function build(params, opts) {
  var options = makeOptions(opts);
  return Object.keys(params).filter(function (paramName) {
    return isSerialisable(params[paramName]);
  }).map(function (paramName) {
    return encode(paramName, params[paramName], options);
  }).filter(Boolean).join('&');
};
/**
 * Remove a list of parameters from a querystring
 */

var omit = function omit(path, paramsToOmit, opts) {
  var options = makeOptions(opts);
  var searchPart = getSearch(path);

  if (searchPart === '') {
    return {
      querystring: '',
      removedParams: {}
    };
  }

  var _a = path.split('&').reduce(function (_a, chunk) {
    var left = _a[0],
        right = _a[1];
    var rawName = chunk.split('=')[0];
    var name = parseName(rawName).name;
    return paramsToOmit.indexOf(name) === -1 ? [left.concat(chunk), right] : [left, right.concat(chunk)];
  }, [[], []]),
      kept = _a[0],
      removed = _a[1];

  return {
    querystring: kept.join('&'),
    removedParams: parse(removed.join('&'), options)
  };
};
/**
 * Remove a list of parameters from a querystring
 */

var keep = function keep(path, paramsToKeep, opts) {
  var options = makeOptions(opts);
  var searchPart = getSearch(path);

  if (searchPart === '') {
    return {
      keptParams: {},
      querystring: ''
    };
  }

  var kept = path.split('&').reduce(function (acc, chunk) {
    var rawName = chunk.split('=')[0];
    var name = parseName(rawName).name;

    if (paramsToKeep.includes(name)) {
      acc.push(chunk);
    }

    return acc;
  }, []);
  return {
    keptParams: parse(kept.join('&'), options),
    querystring: kept.join('&')
  };
};


//# sourceMappingURL=search-params.esm.js.map


/***/ }),

/***/ "../../tests-cyano-shared/node_modules/symbol-observable/es/index.js":
/*!***************************************************************************!*\
  !*** ../../tests-cyano-shared/node_modules/symbol-observable/es/index.js ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "../../tests-cyano-shared/node_modules/symbol-observable/es/ponyfill.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof __webpack_require__.g !== 'undefined') {
  root = __webpack_require__.g;
} else if (true) {
  root = module;
} else {}

var result = (0,_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__.default)(root);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (result);


/***/ }),

/***/ "../../tests-cyano-shared/node_modules/symbol-observable/es/ponyfill.js":
/*!******************************************************************************!*\
  !*** ../../tests-cyano-shared/node_modules/symbol-observable/es/ponyfill.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ symbolObservablePonyfill)
/* harmony export */ });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "../../tests-cyano-shared/node_modules/tslib/tslib.es6.js":
/*!****************************************************************!*\
  !*** ../../tests-cyano-shared/node_modules/tslib/tslib.es6.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cyano-mithril */ "../../cyano-mithril/dist/cyano-mithril.module.js");
/* harmony import */ var tests_cyano_shared_app_createApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tests-cyano-shared/app/createApp */ "../../tests-cyano-shared/app/createApp.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var mountNode = document.querySelector("#root");

var setContent = function setContent(_ref) {
  var AppLayout = _ref.AppLayout,
      props = _objectWithoutProperties(_ref, ["AppLayout"]);

  mithril__WEBPACK_IMPORTED_MODULE_0___default().mount(mountNode, {
    view: function view() {
      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(AppLayout, props);
    }
  });
};

(0,tests_cyano_shared_app_createApp__WEBPACK_IMPORTED_MODULE_2__.createApp)({
  setContent: setContent,
  cast: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__.cast
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map