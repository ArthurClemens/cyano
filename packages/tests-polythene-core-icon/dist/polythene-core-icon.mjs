import _SVG from 'polythene-core-svg';
import { cast, a, h } from 'cyano';

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
/**
 * 
 * @param {{[s: string]: string}} classes 
 * @returns {{[s: string]: string}}
 */


var sizeClasses = function sizeClasses(classes) {
  return {
    small: classes.small,
    regular: classes.regular,
    medium: classes.medium,
    large: classes.large,
    fab: classes.fab
  };
};
/**
 * 
 * @param {{[s: string]: string}} classes 
 * @param {string} [size] 
 * @returns {object}
 */


var classForSize = function classForSize(classes) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "regular";
  return sizeClasses(classes)[size];
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
  component: "pe-icon",
  // states
  avatar: "pe-icon--avatar",
  large: "pe-icon--large",
  medium: "pe-icon--medium",
  regular: "pe-icon--regular",
  small: "pe-icon--small"
};

const SVG = cast(_SVG);

const _Icon = props => {
  const componentProps = Object.assign({}, filterSupportedAttributes(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, classForSize(classes, props.size), props.avatar ? classes.avatar : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a.class]].join(" ")
  }, props.events);
  const content = props.content ? props.content : props.svg ? h(SVG, props.svg) : props.src ? h("img", {
    src: props.src
  }) : props.children;
  return h(props.element || "div", componentProps, content);
};

export default _Icon;
