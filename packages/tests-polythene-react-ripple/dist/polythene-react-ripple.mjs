import { useState, useEffect, getDom, a, h, cast } from 'cyano';

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

/**
 * @type {{[s: string]: string}} evts
 */

var evts = {
  "animation": "animationend",
  "OAnimation": "oAnimationEnd",
  "MozAnimation": "animationend",
  "WebkitAnimation": "webkitAnimationEnd"
};

var getAnimationEndEvent = function getAnimationEndEvent() {
  if (isClient) {
    var el = document.createElement("fakeelement");
    /**
     * @type {string} a
     */

    for (var a in evts) {
      /**
       * @type {object} style
       */
      var style = el.style;

      if (style[a] !== undefined) {
        return evts[a];
      }
    }
  }
}; // @ts-check


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
} // @ts-check
// Global style variables


var grid_unit = 4;
var grid_unit_component = 8;
var increment = 7 * grid_unit_component; // 7 * 8 = 56

var increment_large = 8 * grid_unit_component; // 8 * 8 = 64

var vars = {
  // grid
  grid_unit: grid_unit,
  grid_unit_component: grid_unit_component,
  increment: increment,
  increment_large: increment_large,
  grid_unit_menu: 56,
  grid_unit_icon_button: 6 * grid_unit_component,
  // 48
  // common sizes
  unit_block_border_radius: 4,
  unit_item_border_radius: 4,
  unit_indent: 72,
  unit_indent_large: 80,
  unit_side_padding: 16,
  // buttons
  unit_touch_height: 48,
  unit_icon_size_small: 2 * grid_unit_component,
  // 16
  unit_icon_size: 3 * grid_unit_component,
  // 24
  unit_icon_size_medium: 4 * grid_unit_component,
  // 32
  unit_icon_size_large: 5 * grid_unit_component,
  // 40
  // screen dimensions
  unit_screen_size_extra_large: 1280,
  unit_screen_size_large: 960,
  unit_screen_size_medium: 480,
  unit_screen_size_small: 320,
  // transitions
  animation_duration: ".18s",
  animation_curve_slow_in_fast_out: "cubic-bezier(.4, 0, .2, 1)",
  animation_curve_slow_in_linear_out: "cubic-bezier(0, 0, .2, 1)",
  animation_curve_linear_in_fast_out: "cubic-bezier(.4, 0, 1, 1)",
  animation_curve_default: "ease-out",
  // font
  font_weight_light: 300,
  font_weight_normal: 400,
  font_weight_medium: 500,
  font_weight_bold: 700,
  font_size_title: 20,
  line_height: 1.5,
  // base colors
  color_primary: "33, 150, 243",
  // blue 500
  color_primary_active: "30, 136, 229",
  // blue 600
  color_primary_dark: "25, 118, 210",
  // blue 700
  color_primary_faded: "100, 181, 249",
  // blue 300
  color_primary_foreground: "255, 255, 255",
  color_light_background: "255, 255, 255",
  color_light_foreground: "0, 0, 0",
  color_dark_background: "34, 34, 34",
  color_dark_foreground: "255, 255, 255",
  // blends
  blend_light_text_primary: .87,
  blend_light_text_regular: .73,
  blend_light_text_secondary: .54,
  blend_light_text_tertiary: .40,
  blend_light_text_disabled: .26,
  blend_light_border_medium: .24,
  blend_light_border_light: .11,
  blend_light_background_active: .14,
  blend_light_background_hover: .06,
  blend_light_background_hover_medium: .12,
  // for the lighter tinted icon buttons
  blend_light_background_disabled: .09,
  blend_light_overlay_background: .3,
  blend_dark_text_primary: 1,
  blend_dark_text_regular: .87,
  blend_dark_text_secondary: .70,
  blend_dark_text_tertiary: .40,
  blend_dark_text_disabled: .26,
  blend_dark_border_medium: .22,
  blend_dark_border_light: .10,
  blend_dark_background_active: .14,
  blend_dark_background_hover: .08,
  blend_dark_background_hoverMedium: .12,
  // for the lighter tinted icon buttons
  blend_dark_background_disabled: .12,
  blend_dark_overlay_background: .3,

  /*
  Breakpoints
  Specs: https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints
  Breakbpoint naming: inspiration from
  https://medium.freecodecamp.org/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862
  */
  breakpoint_for_phone_only: 599,
  // set max-width  cols: 4,  gutter: 16
  breakpoint_for_tablet_portrait_up: 600,
  // set min-width  cols: 8,  gutter: 24
  breakpoint_for_tablet_landscape_up: 840,
  // etc.           cols: 12, gutter: 24
  breakpoint_for_desktop_up: 1280,
  breakpoint_for_big_desktop_up: 1600,
  breakpoint_for_tv_up: 1920,
  // z-index
  z_toolbar: 100,
  z_menu: 1000,
  z_app_bar: 2000,
  z_drawer: 3000,
  z_notification: 5000,
  z_dialog: 7000
}; // @ts-check

const ANIMATION_END_EVENT = getAnimationEndEvent();
const DEFAULT_START_OPACITY = 0.2;
const DEFAULT_END_OPACITY = 0.0;
const DEFAULT_START_SCALE = 0.1;
const DEFAULT_END_SCALE = 2.0;
const OPACITY_DECAY_VELOCITY = 0.35;

const addStyleToHead = (id, stylesheet) => {
  if (isServer) return;
  const documentRef = window.document;
  const styleEl = documentRef.createElement("style");
  styleEl.setAttribute("id", id);
  styleEl.appendChild(documentRef.createTextNode(stylesheet));
  documentRef.head.appendChild(styleEl);
};

const removeStyleFromHead = id => {
  if (isServer) return;
  const el = document.getElementById(id);

  if (el && el.parentNode) {
    el.parentNode.removeChild(el);
  }
};

var animation = _ref => {
  let e = _ref.e,
      id = _ref.id,
      el = _ref.el,
      props = _ref.props,
      classes = _ref.classes;
  return new Promise(resolve => {
    const container = document.createElement("div");
    container.setAttribute("class", classes.mask);
    el.appendChild(container);
    const waves = document.createElement("div");
    waves.setAttribute("class", classes.waves);
    container.appendChild(waves);
    const rect = el.getBoundingClientRect();
    const x = isTouch && e.touches ? e.touches[0].pageX : e.clientX;
    const y = isTouch && e.touches ? e.touches[0].pageY : e.clientY;
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    const waveRadius = Math.sqrt(w * w + h * h);
    const mx = props.center ? rect.left + rect.width / 2 : x;
    const my = props.center ? rect.top + rect.height / 2 : y;
    const rx = mx - rect.left - waveRadius / 2;
    const ry = my - rect.top - waveRadius / 2;
    const startOpacity = props.startOpacity !== undefined ? props.startOpacity : DEFAULT_START_OPACITY;
    const opacityDecayVelocity = props.opacityDecayVelocity !== undefined ? props.opacityDecayVelocity : OPACITY_DECAY_VELOCITY;
    const endOpacity = props.endOpacity || DEFAULT_END_OPACITY;
    const startScale = props.startScale || DEFAULT_START_SCALE;
    const endScale = props.endScale || DEFAULT_END_SCALE;
    const duration = props.duration ? props.duration : 1 / opacityDecayVelocity * 0.2;
    const color = window.getComputedStyle(el).color;
    const style = waves.style;
    style.width = style.height = waveRadius + "px";
    style.top = ry + "px";
    style.left = rx + "px";
    style["animation-duration"] = style["-webkit-animation-duration"] = style["-moz-animation-duration"] = style["-o-animation-duration"] = duration + "s";
    style.backgroundColor = color;
    style.opacity = startOpacity;
    style.animationName = id;
    style.animationTimingFunction = props.animationTimingFunction || vars.animation_curve_default;
    const rippleStyleSheet = "@keyframes ".concat(id, " {\n      0% {\n        transform:scale(").concat(startScale, ");\n        opacity: ").concat(startOpacity, "\n      }\n      100% {\n        transform:scale(").concat(endScale, ");\n        opacity: ").concat(endOpacity, ";\n      }\n    }");
    addStyleToHead(id, rippleStyleSheet);

    const animationDone = evt => {
      removeStyleFromHead(id);
      waves.removeEventListener(ANIMATION_END_EVENT, animationDone, false);

      if (props.persistent) {
        style.opacity = endOpacity;
        style.transform = "scale(" + endScale + ")";
      } else {
        waves.classList.remove(classes.wavesAnimating);
        container.removeChild(waves);
        el.removeChild(container);
      }

      resolve(evt);
    };

    waves.addEventListener(ANIMATION_END_EVENT, animationDone, false);
    waves.classList.add(classes.wavesAnimating);
  });
};

var classes = {
  component: "pe-ripple",
  // elements
  mask: "pe-ripple__mask",
  waves: "pe-ripple__waves",
  // states
  unconstrained: "pe-ripple--unconstrained",
  wavesAnimating: "pe-ripple__waves--animating"
};

const useAnimationsState = () => {
  const _useState = useState({}),
        _useState2 = _slicedToArray(_useState, 2),
        animations = _useState2[0],
        setAnimations = _useState2[1];

  return [animations, (addId, animation) => setAnimations(Object.assign({}, animations, {
    [addId]: animation
  })), removeId => {
    const updated = Object.assign({}, animations);
    delete updated[removeId];
    setAnimations(updated);
  }];
};

const _Ripple = props => {
  const _useState3 = useState(),
        _useState4 = _slicedToArray(_useState3, 2),
        domElement = _useState4[0],
        setDomElement = _useState4[1];

  const _useAnimationsState = useAnimationsState(),
        _useAnimationsState2 = _slicedToArray(_useAnimationsState, 3),
        animations = _useAnimationsState2[0],
        addAnimation = _useAnimationsState2[1],
        removeAnimation = _useAnimationsState2[2];

  const isAnimating = Object.keys(animations).length > 0;
  const triggerEl = props.target || (domElement ? domElement.parentElement : undefined);

  const tap = e => {
    if (props.disabled || !props.multi && isAnimating) {
      return;
    }

    if (props.start) {
      props.start(e);
    }

    const id = "ripple_animation_".concat(new Date().getTime());
    const rippleAnimation = animation({
      e,
      id,
      el: domElement,
      props,
      classes
    }).then(evt => {
      if (props.end) {
        props.end(evt);
      }

      removeAnimation(id);
    });
    addAnimation(id, rippleAnimation);
  };

  useEffect(() => {
    if (triggerEl) {
      pointerEndEvent.forEach(evt => triggerEl.addEventListener(evt, tap, false));
    }

    return () => {
      if (triggerEl) {
        pointerEndEvent.forEach(evt => triggerEl.removeEventListener(evt, tap, false));
      }
    };
  }, [triggerEl]);
  const componentProps = Object.assign({}, filterSupportedAttributes(props), getDom(dom => dom && !domElement && setDomElement(dom)), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.unconstrained ? classes.unconstrained : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a.class]].join(" ")
  });
  return h(props.element || "div", componentProps);
};

var index = cast(_Ripple);

export default index;
