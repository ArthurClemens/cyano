import { useState, useEffect, getDom, a, h } from 'cyano';

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

/**
 * Reducer helper function.
 * @param {object} acc 
 * @param {string} p 
 * @returns {object}
 */


var r = function r(acc, p) {
  return acc[p] = 1, acc;
};
/**
 * List of default attributes.
 * Separately handled:
 * - class
 * - element
 * @type Array<string> defaultAttrs
 */


var defaultAttrs = [// Universal
"key", "style", "href", "id", // React
"tabIndex", // Mithril
"tabindex", "oninit", "oncreate", "onupdate", "onbeforeremove", "onremove", "onbeforeupdate"];
/**
 * 
 * @param {{[s: string]: string}} attrs 
 * @param {object} [modifications] 
 * @param {Array<string>} [modifications.add]
 * @param {Array<string>} [modifications.remove]
 * @returns {object}
 */

var filterSupportedAttributes = function filterSupportedAttributes(attrs) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      add = _ref.add,
      remove = _ref.remove;
  /**
   * @type {{[s: string]: string}} removeLookup 
   */


  var removeLookup = remove ? remove.reduce(r, {}) : {};
  /**
   * @type {Array<string>} attrsList 
   */

  var attrsList = add ? defaultAttrs.concat(add) : defaultAttrs;
  var supported = attrsList.filter(function (item) {
    return !removeLookup[item];
  }).reduce(r, {});
  return Object.keys(attrs).reduce(
  /**
   * @param {object} acc
   * @param {string} key
   */
  function (acc, key) {
    return supported[key] ? acc[key] = attrs[key] : null, acc;
  }, {});
};

var isClient = typeof document !== "undefined";
var isServer = !isClient; // @ts-check

var isTouch = isServer ? false : "ontouchstart" in document.documentElement;
var pointerEndEvent = isTouch ? ["click", "mouseup"] : ["mouseup"];

if (isClient) {
  var htmlElement = document.querySelector("html");

  if (htmlElement) {
    htmlElement.classList.add(isTouch ? "pe-touch" : "pe-no-touch");
  }
} // @ts-check

/**
 * @type {{[s: string]: Array<function>}} listeners
 */


var listeners = {};
/**
 * 
 * @param {string} eventName 
 * @param {object} event 
 */


var emit = function emit(eventName, event) {
  if (!listeners[eventName]) {
    return;
  }

  listeners[eventName].forEach(function (listener) {
    return listener(event);
  });
};

if (isClient) {
  window.addEventListener("resize", function (e) {
    return emit("resize", e);
  });
  window.addEventListener("scroll", function (e) {
    return emit("scroll", e);
  });
  window.addEventListener("keydown", function (e) {
    return emit("keydown", e);
  });
  pointerEndEvent.forEach(function (eventName) {
    return window.addEventListener(eventName, function (e) {
      return emit(eventName, e);
    });
  });
}

var classes = {
  component: "pe-svg"
};

const _SVG = props => {
  const _useState = useState(),
        _useState2 = _slicedToArray(_useState, 2),
        domElement = _useState2[0],
        setDomElement = _useState2[1];

  useEffect(() => {
    if (!domElement) return; // Prevent that SVG gets keyboard focus

    const elem = domElement.querySelector("svg");

    if (elem) {
      elem.setAttribute("focusable", "false");
    }
  }, [domElement]);
  const componentProps = Object.assign({}, filterSupportedAttributes(props), getDom(dom => dom && !domElement && setDomElement(dom)), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a.class]].join(" ")
  });
  const content = props.content ? props.content : props.children || props;
  return h(props.element || "div", componentProps, content);
};

export default _SVG;
