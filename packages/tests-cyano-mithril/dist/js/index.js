/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/process/browser.js":
/*!***************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/cyano/master/node_modules/process/browser.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../../node_modules/setimmediate/setImmediate.js":
/*!*************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/cyano/master/node_modules/setimmediate/setImmediate.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "../../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../../node_modules/timers-browserify/main.js":
/*!**********************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/cyano/master/node_modules/timers-browserify/main.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "../../../node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../../../node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "../../cyano-mithril/dist/cyano-mithril.mjs":
/*!*****************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/cyano/master/packages/cyano-mithril/dist/cyano-mithril.mjs ***!
  \*****************************************************************************************************/
/*! exports provided: a, cast, getDom, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDom", function() { return getDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



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

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = function scheduleRender() {
  return (// Call m within the function body so environments with a global instance of m (like flems.io) don't complain
    mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw()
  );
};

var updateDeps = function updateDeps(deps) {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every(function (x, i) {
    return x === prevDeps[i];
  }) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function (fn, deps) {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = function runCallbackFn() {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

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

    if (newValue !== previousValue) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }];
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

  var _updateState = updateState(initialValue),
      _updateState2 = _slicedToArray(_updateState, 2),
      value = _updateState2[0],
      setValue = _updateState2[1];

  var dispatch = function dispatch(action) {
    return setValue( // Next state:
    reducer(value, action));
  };

  return [value, dispatch];
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
      return component(_objectSpread({}, initialProps, vnode.attrs, {
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
  class: "className",
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
  default: "default",
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
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var trust = h.trust;

h.trust = function (html, wrapper) {
  return wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);
};

h.displayName = "mithril";
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;

var getDom = function getDom(fn) {
  return {
    oncreate: function oncreate(vnode) {
      return fn(vnode.dom);
    }
  };
};

var cast = function cast(component, initialProps) {
  return withHooks(component, initialProps);
};



/***/ }),

/***/ "../../tests-cyano-shared/app/AppLayout.js":
/*!****************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/cyano/master/packages/tests-cyano-shared/app/AppLayout.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cyano__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cyano */ "../../cyano-mithril/dist/cyano-mithril.mjs");


var _AppLayout = function _AppLayout(_ref) {
  var Layout = _ref.Layout,
      Navigation = _ref.Navigation,
      route = _ref.route,
      router = _ref.router,
      content = _ref.content,
      examples = _ref.examples,
      tests = _ref.tests;
  return Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])(Layout, {
    route: route,
    router: router,
    navigation: Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])(Navigation, {
      router: router,
      currentPath: route.path,
      parts: [["Examples", examples], ["Cypress tests", tests]]
    })
  }, Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])(content));
};

var AppLayout = Object(cyano__WEBPACK_IMPORTED_MODULE_0__["cast"])(_AppLayout);
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "../../tests-cyano-shared/app/Layout.js":
/*!*************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/cyano/master/packages/tests-cyano-shared/app/Layout.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cyano__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cyano */ "../../cyano-mithril/dist/cyano-mithril.mjs");


var _Layout = function _Layout(_ref) {
  var navigation = _ref.navigation,
      children = _ref.children;
  return Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    className: "layout"
  }, [navigation, Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    key: "component",
    className: "component"
  }, children)]);
};

var Layout = Object(cyano__WEBPACK_IMPORTED_MODULE_0__["cast"])(_Layout);
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "../../tests-cyano-shared/app/Navigation.js":
/*!*****************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/cyano/master/packages/tests-cyano-shared/app/Navigation.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cyano__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cyano */ "../../cyano-mithril/dist/cyano-mithril.mjs");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _Link = function _Link(_ref) {
  var router = _ref.router,
      name = _ref.name,
      label = _ref.label,
      path = _ref.path,
      currentPath = _ref.currentPath;
  return Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("li", {
    key: path
  }, Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("a", _defineProperty({
    href: path,
    className: path === currentPath ? "is-active" : ""
  }, cyano__WEBPACK_IMPORTED_MODULE_0__["a"].onclick, function (e) {
    return e.preventDefault(), router.navigate(name);
  }), label));
};

var Link = Object(cyano__WEBPACK_IMPORTED_MODULE_0__["cast"])(_Link);

var _MenuList = function _MenuList(_ref2) {
  var router = _ref2.router,
      title = _ref2.title,
      links = _ref2.links,
      currentPath = _ref2.currentPath;
  return [Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("p", {
    key: "label",
    className: "menu-label"
  }, title), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", {
    key: "list",
    className: "menu-list"
  }, links.map(function (link) {
    return Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])(Link, _objectSpread({}, link, {
      router: router,
      currentPath: currentPath
    }));
  }))];
};

var MenuList = Object(cyano__WEBPACK_IMPORTED_MODULE_0__["cast"])(_MenuList);

var _Navigation = function _Navigation(_ref3) {
  var router = _ref3.router,
      currentPath = _ref3.currentPath,
      parts = _ref3.parts;
  return Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("aside", {
    key: "menu",
    className: "menu"
  }, parts.map(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        title = _ref5[0],
        links = _ref5[1];

    return Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])(MenuList, {
      router: router,
      title: title,
      links: links,
      currentPath: currentPath
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(cyano__WEBPACK_IMPORTED_MODULE_0__["cast"])(_Navigation));

/***/ }),

/***/ "../../tests-cyano-shared/app/createApp.js":
/*!****************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/cyano/master/packages/tests-cyano-shared/app/createApp.js ***!
  \****************************************************************************************************/
/*! exports provided: createApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return createApp; });
/* harmony import */ var _AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLayout */ "../../tests-cyano-shared/app/AppLayout.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "../../tests-cyano-shared/app/Layout.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation */ "../../tests-cyano-shared/app/Navigation.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "../../tests-cyano-shared/app/routes.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router */ "../../tests-cyano-shared/app/router.js");





var createApp = function createApp(_ref) {
  var _setContent = _ref.setContent,
      cast = _ref.cast;

  var _createRoutes = Object(_routes__WEBPACK_IMPORTED_MODULE_3__["createRoutes"])(cast),
      examples = _createRoutes.examples,
      tests = _createRoutes.tests;

  var routes = examples.concat(tests);
  Object(_router__WEBPACK_IMPORTED_MODULE_4__["setupRouter"])({
    routes: routes,
    setContent: function setContent(_ref2) {
      var content = _ref2.content,
          route = _ref2.route,
          router = _ref2.router;
      return _setContent({
        AppLayout: _AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
        Layout: _Layout__WEBPACK_IMPORTED_MODULE_1__["default"],
        Navigation: _Navigation__WEBPACK_IMPORTED_MODULE_2__["default"],
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
/*!*************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/cyano/master/packages/tests-cyano-shared/app/router.js ***!
  \*************************************************************************************************/
/*! exports provided: setupRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupRouter", function() { return setupRouter; });
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
  var router = Object(router5__WEBPACK_IMPORTED_MODULE_0__["default"])(routes, {
    defaultRoute: defaultRoute
  });
  router.usePlugin(Object(router5_plugin_browser__WEBPACK_IMPORTED_MODULE_1__["default"])(routerOptions));
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
/*!*************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/cyano/master/packages/tests-cyano-shared/app/routes.js ***!
  \*************************************************************************************************/
/*! exports provided: createRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRoutes", function() { return createRoutes; });
/* harmony import */ var _examples_toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../examples/toggle */ "../../tests-cyano-shared/examples/toggle.js");
/* harmony import */ var _examples_custom_hooks_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../examples/custom-hooks-reducer */ "../../tests-cyano-shared/examples/custom-hooks-reducer.js");
/* harmony import */ var _cypress_tests_custom_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cypress-tests/custom-hooks */ "../../tests-cyano-shared/cypress-tests/custom-hooks.js");
/* harmony import */ var _cypress_tests_trust__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cypress-tests/trust */ "../../tests-cyano-shared/cypress-tests/trust.js");
/* harmony import */ var _cypress_tests_children__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cypress-tests/children */ "../../tests-cyano-shared/cypress-tests/children.js");
/* harmony import */ var _cypress_tests_initial_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cypress-tests/initial-props */ "../../tests-cyano-shared/cypress-tests/initial-props.js");
/* harmony import */ var _cypress_tests_toggle_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cypress-tests/toggle-jsx */ "../../tests-cyano-shared/cypress-tests/toggle-jsx.js");
/* harmony import */ var _cypress_tests_getDom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cypress-tests/getDom */ "../../tests-cyano-shared/cypress-tests/getDom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
  var examples = [["Simple toggle", "/toggle", _examples_toggle__WEBPACK_IMPORTED_MODULE_0__["default"]], ["Custom hooks with useReducer", "/custom-hooks-usereducer", _examples_custom_hooks_reducer__WEBPACK_IMPORTED_MODULE_1__["default"]]].map(toLinkData);
  var tests = [["Test custom hooks", "/TestCustomHooks", _cypress_tests_custom_hooks__WEBPACK_IMPORTED_MODULE_2__["default"]], ["Test initial props", "/TestInitialProps", _cypress_tests_initial_props__WEBPACK_IMPORTED_MODULE_5__["default"]], ["Test getDom", "/GetDom", _cypress_tests_getDom__WEBPACK_IMPORTED_MODULE_7__["default"]], ["Test trust", "/TestTrust", _cypress_tests_trust__WEBPACK_IMPORTED_MODULE_3__["default"]], ["Test children", "/TestChildren", _cypress_tests_children__WEBPACK_IMPORTED_MODULE_4__["default"]], ["Test toggle JSX", "/ToggleJSX", _cypress_tests_toggle_jsx__WEBPACK_IMPORTED_MODULE_6__["default"]]].map(toLinkData);
  return {
    examples: examples,
    tests: tests
  };
};

/***/ }),

/***/ "../../tests-cyano-shared/cypress-tests/children.js":
/*!*************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/cyano/master/packages/tests-cyano-shared/cypress-tests/children.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cyano__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cyano */ "../../cyano-mithril/dist/cyano-mithril.mjs");


var _Children = function _Children(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    "data-test-id": "Children"
  }, [Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("h2", title), children]);
};

var _Wrapper = function _Wrapper(_ref2) {
  var title = _ref2.title,
      Children = _ref2.Children;
  return Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])(Children, {
    title: title
  }, Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "This is a child")));
};

var Children = Object(cyano__WEBPACK_IMPORTED_MODULE_0__["cast"])(_Children);
var Wrapper = Object(cyano__WEBPACK_IMPORTED_MODULE_0__["cast"])(_Wrapper, {
  title: "Children",
  Children: Children
});
/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "../../tests-cyano-shared/cypress-tests/custom-hooks.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/cyano/master/packages/tests-cyano-shared/cypress-tests/custom-hooks.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cyano__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cyano */ "../../cyano-mithril/dist/cyano-mithril.mjs");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useCount = function useCount() {
  var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var _useState = Object(cyano__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue),
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

  var _useState3 = Object(cyano__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue),
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

  return [Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    key: "TestCounter",
    "data-test-id": "TestCounter"
  }, [Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("h2", "TestCounter"), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("p", [Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("span", "count: "), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    "data-test-id": "count"
  }, count)]), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("button", _defineProperty({
    "data-test-id": "decrement",
    disabled: count === 0
  }, cyano__WEBPACK_IMPORTED_MODULE_0__["a"].onclick, function () {
    return decrement();
  }), "Less"), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("button", _defineProperty({
    "data-test-id": "increment"
  }, cyano__WEBPACK_IMPORTED_MODULE_0__["a"].onclick, function () {
    return increment();
  }), "More")]), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    key: "TestCounters",
    "data-test-id": "TestCounters"
  }, [Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("h2", "TestCounters"), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("p", [Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("span", "counters: "), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    "data-test-id": "counters"
  }, counters.length)]), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("button", _defineProperty({
    "data-test-id": "decrement",
    disabled: counters.length === 0
  }, cyano__WEBPACK_IMPORTED_MODULE_0__["a"].onclick, function () {
    return removeCounter(lastItem);
  }), "Remove"), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("button", _defineProperty({
    "data-test-id": "increment"
  }, cyano__WEBPACK_IMPORTED_MODULE_0__["a"].onclick, function () {
    return addCounter();
  }), "Add")])];
};

var CustomHooks = Object(cyano__WEBPACK_IMPORTED_MODULE_0__["cast"])(_CustomHooks);
/* harmony default export */ __webpack_exports__["default"] = (CustomHooks);

/***/ }),

/***/ "../../tests-cyano-shared/cypress-tests/getDom.js":
/*!***********************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/cyano/master/packages/tests-cyano-shared/cypress-tests/getDom.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cyano__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cyano */ "../../cyano-mithril/dist/cyano-mithril.mjs");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var _GetDom = function _GetDom() {
  var domRef = Object(cyano__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(cyano__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      render = _useState2[0],
      forceRerender = _useState2[1];

  return Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    "data-test-id": "DomElementRef"
  }, [Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("span", "Element to get a reference of: "), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("span", _objectSpread({}, Object(cyano__WEBPACK_IMPORTED_MODULE_0__["getDom"])(function (dom) {
    var shouldRerender = !domRef.current;
    domRef.current = domRef.current || dom;
    shouldRerender && forceRerender(render + 1);
  })), "QWERTY"), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("p", [Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("span", "DOM element textContent: "), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    "data-test-id": "textContent"
  }, domRef.current && domRef.current.textContent)])]);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(cyano__WEBPACK_IMPORTED_MODULE_0__["cast"])(_GetDom));

/***/ }),

/***/ "../../tests-cyano-shared/cypress-tests/initial-props.js":
/*!******************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/cyano/master/packages/tests-cyano-shared/cypress-tests/initial-props.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cyano__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cyano */ "../../cyano-mithril/dist/cyano-mithril.mjs");


var _InitialProps = function _InitialProps(_ref) {
  var title = _ref.title,
      defaultTitle = _ref.defaultTitle;
  return Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    "data-test-id": "InitialProps"
  }, [Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("h2", null, title || defaultTitle)]);
};

var _Wrapper = function _Wrapper(_ref2) {
  var title = _ref2.title,
      InitialProps = _ref2.InitialProps;
  return Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])(InitialProps, {
    title: title
  }));
};

var InitialProps = Object(cyano__WEBPACK_IMPORTED_MODULE_0__["cast"])(_InitialProps, {
  defaultTitle: "default title"
});
var Wrapper = Object(cyano__WEBPACK_IMPORTED_MODULE_0__["cast"])(_Wrapper, {
  title: "Hello",
  InitialProps: InitialProps
});
/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "../../tests-cyano-shared/cypress-tests/toggle-jsx.js":
/*!***************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/cyano/master/packages/tests-cyano-shared/cypress-tests/toggle-jsx.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cyano__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cyano */ "../../cyano-mithril/dist/cyano-mithril.mjs");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/* jsx needs to be in scope for JSX parsing to work */

var _Toggle = function _Toggle(_ref) {
  var title = _ref.title;

  var _useState = Object(cyano__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      clicked = _useState2[0],
      setClicked = _useState2[1];

  return Object(cyano__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "toggle"
  }, Object(cyano__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", null, title), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", _extends({
    className: "button ".concat(clicked ? "is-info" : "")
  }, _defineProperty({}, cyano__WEBPACK_IMPORTED_MODULE_0__["a"].onclick, function () {
    return setClicked(!clicked);
  })), "Toggle"), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "info"
  }, clicked ? Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("div", "On") : Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("div", "Off")), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", null, cyano__WEBPACK_IMPORTED_MODULE_0__["h"].trust("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"/></svg>")));
};

var Toggle = Object(cyano__WEBPACK_IMPORTED_MODULE_0__["cast"])(_Toggle);

var _Wrapper = function _Wrapper() {
  return Object(cyano__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Toggle, {
    title: "Switch!"
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(cyano__WEBPACK_IMPORTED_MODULE_0__["cast"])(_Wrapper));

/***/ }),

/***/ "../../tests-cyano-shared/cypress-tests/trust.js":
/*!**********************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/cyano/master/packages/tests-cyano-shared/cypress-tests/trust.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cyano__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cyano */ "../../cyano-mithril/dist/cyano-mithril.mjs");


var _Trust = function _Trust() {
  return [Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    key: "svg",
    "data-test-id": "svg"
  }, cyano__WEBPACK_IMPORTED_MODULE_0__["h"].trust("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"/></svg>")), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    key: "html",
    "data-test-id": "html"
  }, cyano__WEBPACK_IMPORTED_MODULE_0__["h"].trust("<ul><li>Skydiving</li><li>Alaska</li><li>Kite surfing</li></ul>")), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    key: "wrapper",
    "data-test-id": "wrapper"
  }, cyano__WEBPACK_IMPORTED_MODULE_0__["h"].trust("Hello", "span"))];
};

/* harmony default export */ __webpack_exports__["default"] = (Object(cyano__WEBPACK_IMPORTED_MODULE_0__["cast"])(_Trust));

/***/ }),

/***/ "../../tests-cyano-shared/examples/custom-hooks-reducer.js":
/*!********************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/cyano/master/packages/tests-cyano-shared/examples/custom-hooks-reducer.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cyano__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cyano */ "../../cyano-mithril/dist/cyano-mithril.mjs");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

  var _useState = Object(cyano__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue),
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

  var _useReducer = Object(cyano__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(counterReducer, {
    count: initialCount
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      countState = _useReducer2[0],
      dispatch = _useReducer2[1];

  var count = countState.count;

  var _useState3 = Object(cyano__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      inited = _useState4[0],
      setInited = _useState4[1];

  var domRef = Object(cyano__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var remove = function remove() {
    var removeOnTransitionEnd = function removeOnTransitionEnd() {
      return removeCounter(id), domRef.current.removeEventListener("transitionend", removeOnTransitionEnd);
    };

    domRef.current.addEventListener("transitionend", removeOnTransitionEnd);
    domRef.current.classList.remove("active");
  };

  Object(cyano__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setInited(true);
  }, [
    /* empty array: only run at mount */
  ]);
  return Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("div", _objectSpread({
    className: "counter ".concat(inited ? "active" : "")
  }, Object(cyano__WEBPACK_IMPORTED_MODULE_0__["getDom"])(function (dom) {
    return domRef.current = domRef.current || dom;
  })), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    className: "counter-inner"
  }, [Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    className: "count",
    key: "count"
  }, count), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("button", _defineProperty({
    key: "button-decrement",
    className: "button",
    disabled: count === 0
  }, cyano__WEBPACK_IMPORTED_MODULE_0__["a"].onclick, function () {
    return dispatch({
      type: "decrement"
    });
  }), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    className: "icon is-small"
  }, Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
    className: "fas fa-minus"
  }))), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("button", _defineProperty({
    key: "button-increment",
    className: "button"
  }, cyano__WEBPACK_IMPORTED_MODULE_0__["a"].onclick, function () {
    return dispatch({
      type: "increment"
    });
  }), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    className: "icon is-small"
  }, Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
    className: "fas fa-plus"
  }))), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    className: "spacer",
    key: "spacer"
  }), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("button", _defineProperty({
    key: "button-remove",
    className: "delete is-large"
  }, cyano__WEBPACK_IMPORTED_MODULE_0__["a"].onclick, function () {
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

  return [Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    className: "controls",
    key: "controls"
  }, [Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("button", _defineProperty({
    key: "button",
    className: "button is-info"
  }, cyano__WEBPACK_IMPORTED_MODULE_0__["a"].onclick, function () {
    return addCounter();
  }), "Add counter"), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    className: "spacer",
    key: "spacer"
  }), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    className: "info",
    key: "info"
  }, Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    className: "tag is-light is-medium"
  }, "Counters: ".concat(counters.length)))]), counters.map(function (c) {
    return Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])(Counter, {
      key: c.id,
      id: c.id,
      initialCount: c.initialCount,
      removeCounter: function removeCounter() {
        return _removeCounter(c);
      }
    });
  })];
};

var Counter = Object(cyano__WEBPACK_IMPORTED_MODULE_0__["cast"])(_Counter);
var CounterController = Object(cyano__WEBPACK_IMPORTED_MODULE_0__["cast"])(_CounterController, {
  Counter: Counter
});
/* harmony default export */ __webpack_exports__["default"] = (CounterController);

/***/ }),

/***/ "../../tests-cyano-shared/examples/toggle.js":
/*!******************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/cyano/master/packages/tests-cyano-shared/examples/toggle.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cyano__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cyano */ "../../cyano-mithril/dist/cyano-mithril.mjs");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var _Toggle = function _Toggle() {
  var _useState = Object(cyano__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      clicked = _useState2[0],
      setClicked = _useState2[1];

  return Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    className: "toggle"
  }, [Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("button", _defineProperty({
    className: "button ".concat(clicked ? "is-info" : "")
  }, cyano__WEBPACK_IMPORTED_MODULE_0__["a"].onclick, function () {
    return setClicked(!clicked);
  }), "Toggle"), Object(cyano__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    className: "info"
  }, clicked ? "On" : "Off")]);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(cyano__WEBPACK_IMPORTED_MODULE_0__["cast"])(_Toggle));

/***/ }),

/***/ "../../tests-cyano-shared/node_modules/path-parser/dist/es/path-parser.js":
/*!***********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/cyano/master/packages/tests-cyano-shared/node_modules/path-parser/dist/es/path-parser.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: default, Path */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return Path; });
/* harmony import */ var search_params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! search-params */ "../../tests-cyano-shared/node_modules/search-params/dist/cjs/index.js");
/* harmony import */ var search_params__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(search_params__WEBPACK_IMPORTED_MODULE_0__);


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

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

var defaultOrConstrained = function (match) {
    return '(' +
        (match ? match.replace(/(^<|>$)/g, '') : "[a-zA-Z0-9-_.~%':|=+\\*@]+") +
        ')';
};
var rules = [
    {
        name: 'url-parameter',
        pattern: /^:([a-zA-Z0-9-_]*[a-zA-Z0-9]{1})(<(.+?)>)?/,
        regex: function (match) {
            return new RegExp(defaultOrConstrained(match[2]));
        }
    },
    {
        name: 'url-parameter-splat',
        pattern: /^\*([a-zA-Z0-9-_]*[a-zA-Z0-9]{1})/,
        regex: /([^?]*)/
    },
    {
        name: 'url-parameter-matrix',
        pattern: /^;([a-zA-Z0-9-_]*[a-zA-Z0-9]{1})(<(.+?)>)?/,
        regex: function (match) {
            return new RegExp(';' + match[1] + '=' + defaultOrConstrained(match[2]));
        }
    },
    {
        name: 'query-parameter',
        pattern: /^(?:\?|&)(?::)?([a-zA-Z0-9-_]*[a-zA-Z0-9]{1})/
    },
    {
        name: 'delimiter',
        pattern: /^(\/|\?)/,
        regex: function (match) { return new RegExp('\\' + match[0]); }
    },
    {
        name: 'sub-delimiter',
        pattern: /^(!|&|-|_|\.|;)/,
        regex: function (match) { return new RegExp(match[0]); }
    },
    {
        name: 'fragment',
        pattern: /^([0-9a-zA-Z]+)/,
        regex: function (match) { return new RegExp(match[0]); }
    }
];

var tokenise = function (str, tokens) {
    if (tokens === void 0) { tokens = []; }
    // Look for a matching rule
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
    });
    // If no rules matched, throw an error (possible malformed path)
    if (!matched) {
        throw new Error("Could not parse path '" + str + "'");
    }
    return tokens;
};

var identity = function (_) { return _; };
var exists = function (val) { return val !== undefined && val !== null; };
var optTrailingSlash = function (source, strictTrailingSlash) {
    if (strictTrailingSlash) {
        return source;
    }
    if (source === '\\/') {
        return source;
    }
    return source.replace(/\\\/$/, '') + '(?:\\/)?';
};
var upToDelimiter = function (source, delimiter) {
    if (!delimiter) {
        return source;
    }
    return /(\/)$/.test(source) ? source : source + '(\\/|\\?|\\.|;|$)';
};
var appendQueryParam = function (params, param, val) {
    if (val === void 0) { val = ''; }
    var existingVal = params[param];
    if (existingVal === undefined) {
        params[param] = val;
    }
    else {
        params[param] = Array.isArray(existingVal)
            ? existingVal.concat(val)
            : [existingVal, val];
    }
    return params;
};
var Path = /** @class */ (function () {
    function Path(path) {
        if (!path) {
            throw new Error('Missing path in Path constructor');
        }
        this.path = path;
        this.tokens = tokenise(path);
        this.hasUrlParams =
            this.tokens.filter(function (t) { return /^url-parameter/.test(t.type); }).length > 0;
        this.hasSpatParam =
            this.tokens.filter(function (t) { return /splat$/.test(t.type); }).length > 0;
        this.hasMatrixParams =
            this.tokens.filter(function (t) { return /matrix$/.test(t.type); }).length > 0;
        this.hasQueryParams =
            this.tokens.filter(function (t) { return /^query-parameter/.test(t.type); }).length > 0;
        // Extract named parameters from tokens
        this.spatParams = this.getParams('url-parameter-splat');
        this.urlParams = this.getParams(/^url-parameter/);
        // Query params
        this.queryParams = this.getParams('query-parameter');
        // All params
        this.params = this.urlParams.concat(this.queryParams);
        // Check if hasQueryParams
        // Regular expressions for url part only (full and partial match)
        this.source = this.tokens
            .filter(function (t) { return t.regex !== undefined; })
            .map(function (r) { return r.regex.source; })
            .join('');
    }
    Path.createPath = function (path) {
        return new Path(path);
    };
    Path.prototype.isQueryParam = function (name) {
        return this.queryParams.indexOf(name) !== -1;
    };
    Path.prototype.test = function (path, opts) {
        var _this = this;
        var options = __assign({ strictTrailingSlash: false, queryParams: {} }, opts);
        // trailingSlash: falsy => non optional, truthy => optional
        var source = optTrailingSlash(this.source, options.strictTrailingSlash);
        // Check if exact match
        var match = this.urlTest(path, source + (this.hasQueryParams ? '(\\?.*$|$)' : '$'), opts);
        // If no match, or no query params, no need to go further
        if (!match || !this.hasQueryParams) {
            return match;
        }
        // Extract query params
        var queryParams = Object(search_params__WEBPACK_IMPORTED_MODULE_0__["parse"])(path, options.queryParams);
        var unexpectedQueryParams = Object.keys(queryParams).filter(function (p) { return !_this.isQueryParam(p); });
        if (unexpectedQueryParams.length === 0) {
            // Extend url match
            Object.keys(queryParams).forEach(function (p) { return (match[p] = queryParams[p]); });
            return match;
        }
        return null;
    };
    Path.prototype.partialTest = function (path, opts) {
        var _this = this;
        var options = __assign({ delimited: true, queryParams: {} }, opts);
        // Check if partial match (start of given path matches regex)
        // trailingSlash: falsy => non optional, truthy => optional
        var source = upToDelimiter(this.source, options.delimited);
        var match = this.urlTest(path, source, options);
        if (!match) {
            return match;
        }
        if (!this.hasQueryParams) {
            return match;
        }
        var queryParams = Object(search_params__WEBPACK_IMPORTED_MODULE_0__["parse"])(path, options.queryParams);
        Object.keys(queryParams)
            .filter(function (p) { return _this.isQueryParam(p); })
            .forEach(function (p) { return appendQueryParam(match, p, queryParams[p]); });
        return match;
    };
    Path.prototype.build = function (params, opts) {
        var _this = this;
        if (params === void 0) { params = {}; }
        var options = __assign({ ignoreConstraints: false, ignoreSearch: false, queryParams: {} }, opts);
        var encodedUrlParams = Object.keys(params)
            .filter(function (p) { return !_this.isQueryParam(p); })
            .reduce(function (acc, key) {
            if (!exists(params[key])) {
                return acc;
            }
            var val = params[key];
            var encode = _this.isQueryParam(key) ? identity : encodeURI;
            if (typeof val === 'boolean') {
                acc[key] = val;
            }
            else if (Array.isArray(val)) {
                acc[key] = val.map(encode);
            }
            else {
                acc[key] = encode(val);
            }
            return acc;
        }, {});
        // Check all params are provided (not search parameters which are optional)
        if (this.urlParams.some(function (p) { return !exists(params[p]); })) {
            var missingParameters = this.urlParams.filter(function (p) { return !exists(params[p]); });
            throw new Error("Cannot build path: '" +
                this.path +
                "' requires missing parameters { " +
                missingParameters.join(', ') +
                ' }');
        }
        // Check constraints
        if (!options.ignoreConstraints) {
            var constraintsPassed = this.tokens
                .filter(function (t) {
                return /^url-parameter/.test(t.type) && !/-splat$/.test(t.type);
            })
                .every(function (t) {
                return new RegExp('^' + defaultOrConstrained(t.otherVal[0]) + '$').test(encodedUrlParams[t.val]);
            });
            if (!constraintsPassed) {
                throw new Error("Some parameters of '" + this.path + "' are of invalid format");
            }
        }
        var base = this.tokens
            .filter(function (t) { return /^query-parameter/.test(t.type) === false; })
            .map(function (t) {
            if (t.type === 'url-parameter-matrix') {
                return ";" + t.val + "=" + encodedUrlParams[t.val[0]];
            }
            return /^url-parameter/.test(t.type)
                ? encodedUrlParams[t.val[0]]
                : t.match;
        })
            .join('');
        if (options.ignoreSearch) {
            return base;
        }
        var searchParams = this.queryParams
            .filter(function (p) { return Object.keys(params).indexOf(p) !== -1; })
            .reduce(function (sparams, paramName) {
            sparams[paramName] = params[paramName];
            return sparams;
        }, {});
        var searchPart = Object(search_params__WEBPACK_IMPORTED_MODULE_0__["build"])(searchParams, options.queryParams);
        return searchPart ? base + '?' + searchPart : base;
    };
    Path.prototype.getParams = function (type) {
        var predicate = type instanceof RegExp
            ? function (t) { return type.test(t.type); }
            : function (t) { return t.type === type; };
        return this.tokens.filter(predicate).map(function (t) { return t.val[0]; });
    };
    Path.prototype.urlTest = function (path, source, _a) {
        var _this = this;
        var _b = (_a === void 0 ? {} : _a).caseSensitive, caseSensitive = _b === void 0 ? false : _b;
        var regex = new RegExp('^' + source, caseSensitive ? '' : 'i');
        var match = path.match(regex);
        if (!match) {
            return null;
        }
        else if (!this.urlParams.length) {
            return {};
        }
        // Reduce named params to key-value pairs
        return match
            .slice(1, this.urlParams.length + 1)
            .reduce(function (params, m, i) {
            params[_this.urlParams[i]] = decodeURIComponent(m);
            return params;
        }, {});
    };
    return Path;
}());

/* harmony default export */ __webpack_exports__["default"] = (Path);



/***/ }),

/***/ "../../tests-cyano-shared/node_modules/route-node/dist/es/route-node.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/cyano/master/packages/tests-cyano-shared/node_modules/route-node/dist/es/route-node.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var search_params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! search-params */ "../../tests-cyano-shared/node_modules/search-params/dist/cjs/index.js");
/* harmony import */ var search_params__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(search_params__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path-parser */ "../../tests-cyano-shared/node_modules/path-parser/dist/es/path-parser.js");



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

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

var getMetaFromSegments = function (segments) {
    var accName = '';
    return segments.reduce(function (meta, segment) {
        var urlParams = segment.parser.urlParams.reduce(function (params, p) {
            params[p] = 'url';
            return params;
        }, {});
        var allParams = segment.parser.queryParams.reduce(function (params, p) {
            params[p] = 'query';
            return params;
        }, urlParams);
        if (segment.name !== undefined) {
            accName = accName ? accName + '.' + segment.name : segment.name;
            meta[accName] = allParams;
        }
        return meta;
    }, {});
};
var buildStateFromMatch = function (match) {
    if (!match || !match.segments || !match.segments.length) {
        return null;
    }
    var name = match.segments
        .map(function (segment) { return segment.name; })
        .filter(function (name) { return name; })
        .join('.');
    var params = match.params;
    return {
        name: name,
        params: params,
        meta: getMetaFromSegments(match.segments)
    };
};
var buildPathFromSegments = function (segments, params, options) {
    if (params === void 0) { params = {}; }
    if (options === void 0) { options = {}; }
    if (!segments) {
        return null;
    }
    var _a = options.queryParamsMode, queryParamsMode = _a === void 0 ? 'default' : _a, _b = options.trailingSlashMode;
    var searchParams = [];
    var nonSearchParams = [];
    for (var _i = 0, segments_1 = segments; _i < segments_1.length; _i++) {
        var segment = segments_1[_i];
        var parser = segment.parser;
        searchParams.push.apply(searchParams, parser.queryParams);
        nonSearchParams.push.apply(nonSearchParams, parser.urlParams);
        nonSearchParams.push.apply(nonSearchParams, parser.spatParams);
    }
    if (queryParamsMode === 'loose') {
        var extraParams = Object.keys(params).reduce(function (acc, p) {
            return searchParams.indexOf(p) === -1 &&
                nonSearchParams.indexOf(p) === -1
                ? acc.concat(p)
                : acc;
        }, []);
        searchParams.push.apply(searchParams, extraParams);
    }
    var searchParamsObject = searchParams.reduce(function (acc, paramName) {
        if (Object.keys(params).indexOf(paramName) !== -1) {
            acc[paramName] = params[paramName];
        }
        return acc;
    }, {});
    var searchPart = Object(search_params__WEBPACK_IMPORTED_MODULE_0__["build"])(searchParamsObject, options.queryParams);
    var path = segments
        .reduce(function (path, segment) {
        var segmentPath = segment.parser.build(params, {
            ignoreSearch: true,
            queryParams: options.queryParams
        });
        return segment.absolute ? segmentPath : path + segmentPath;
    }, '')
        .replace(/\/\/{1,}/g, '/');
    var finalPath = path;
    if (options.trailingSlashMode === 'always') {
        finalPath = /\/$/.test(path) ? path : path + "/";
    }
    else if (options.trailingSlashMode === 'never' && path !== '/') {
        finalPath = /\/$/.test(path) ? path.slice(0, -1) : path;
    }
    return finalPath + (searchPart ? '?' + searchPart : '');
};
var getPathFromSegments = function (segments) {
    return segments ? segments.map(function (segment) { return segment.path; }).join('') : null;
};

var getPath = function (path) { return path.split('?')[0]; };
var getSearch = function (path) { return path.split('?')[1] || ''; };
var matchChildren = function (nodes, pathSegment, currentMatch, options, consumedBefore) {
    if (options === void 0) { options = {}; }
    var _a = options.queryParamsMode, queryParamsMode = _a === void 0 ? 'default' : _a, _b = options.strictTrailingSlash, strictTrailingSlash = _b === void 0 ? false : _b, _c = options.strongMatching, strongMatching = _c === void 0 ? true : _c, _d = options.caseSensitive, caseSensitive = _d === void 0 ? false : _d;
    var isRoot = nodes.length === 1 && nodes[0].name === '';
    var _loop_1 = function (child) {
        // Partially match path
        var match;
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
                queryParams: options.queryParams
            });
        }
        if (!match) {
            match = child.parser.partialTest(segment, {
                delimited: strongMatching,
                caseSensitive: caseSensitive,
                queryParams: options.queryParams
            });
        }
        if (match) {
            // Remove consumed segment from path
            var consumedPath = child.parser.build(match, {
                ignoreSearch: true
            });
            if (!strictTrailingSlash && !child.children.length) {
                consumedPath = consumedPath.replace(/\/$/, '');
            }
            // Can't create a regexp from the path because it might contain a
            // regexp character.
            if (segment.toLowerCase().indexOf(consumedPath.toLowerCase()) === 0) {
                remainingPath = segment.slice(consumedPath.length);
            }
            else {
                remainingPath = segment;
            }
            if (!strictTrailingSlash && !child.children.length) {
                remainingPath = remainingPath.replace(/^\/\?/, '?');
            }
            var querystring = Object(search_params__WEBPACK_IMPORTED_MODULE_0__["omit"])(getSearch(segment.replace(consumedPath, '')), child.parser.queryParams, options.queryParams).querystring;
            remainingPath =
                getPath(remainingPath) + (querystring ? "?" + querystring : '');
            if (!strictTrailingSlash &&
                !isRoot &&
                remainingPath === '/' &&
                !/\/$/.test(consumedPath)) {
                remainingPath = '';
            }
            currentMatch.segments.push(child);
            Object.keys(match).forEach(function (param) { return (currentMatch.params[param] = match[param]); });
            if (!isRoot && !remainingPath.length) {
                return { value: currentMatch };
            }
            if (!isRoot &&
                queryParamsMode !== 'strict' &&
                remainingPath.indexOf('?') === 0) {
                // unmatched queryParams in non strict mode
                var remainingQueryParams_1 = Object(search_params__WEBPACK_IMPORTED_MODULE_0__["parse"])(remainingPath.slice(1), options.queryParams);
                Object.keys(remainingQueryParams_1).forEach(function (name) {
                    return (currentMatch.params[name] = remainingQueryParams_1[name]);
                });
                return { value: currentMatch };
            }
            // Continue matching on non absolute children
            var children = child.getNonAbsoluteChildren();
            // If no children to match against but unmatched path left
            if (!children.length) {
                return { value: null };
            }
            return { value: matchChildren(children, remainingPath, currentMatch, options, consumedPath) };
        }
    };
    // for (child of node.children) {
    for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
        var child = nodes_1[_i];
        var state_1 = _loop_1(child);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return null;
};

function sortChildren(children) {
    var originalChildren = children.slice(0);
    return children.sort(sortPredicate(originalChildren));
}
var sortPredicate = function (originalChildren) { return function (left, right) {
    var leftPath = left.path
        .replace(/<.*?>/g, '')
        .split('?')[0]
        .replace(/(.+)\/$/, '$1');
    var rightPath = right.path
        .replace(/<.*?>/g, '')
        .split('?')[0]
        .replace(/(.+)\/$/, '$1');
    // '/' last
    if (leftPath === '/') {
        return 1;
    }
    if (rightPath === '/') {
        return -1;
    }
    // Spat params last
    if (left.parser.hasSpatParam) {
        return 1;
    }
    if (right.parser.hasSpatParam) {
        return -1;
    }
    // No spat, number of segments (less segments last)
    var leftSegments = (leftPath.match(/\//g) || []).length;
    var rightSegments = (rightPath.match(/\//g) || []).length;
    if (leftSegments < rightSegments) {
        return 1;
    }
    if (leftSegments > rightSegments) {
        return -1;
    }
    // Same number of segments, number of URL params ascending
    var leftParamsCount = left.parser.urlParams.length;
    var rightParamsCount = right.parser.urlParams.length;
    if (leftParamsCount < rightParamsCount) {
        return -1;
    }
    if (leftParamsCount > rightParamsCount) {
        return 1;
    }
    // Same number of segments and params, last segment length descending
    var leftParamLength = (leftPath.split('/').slice(-1)[0] || '').length;
    var rightParamLength = (rightPath.split('/').slice(-1)[0] || '').length;
    if (leftParamLength < rightParamLength) {
        return 1;
    }
    if (leftParamLength > rightParamLength) {
        return -1;
    }
    // Same last segment length, preserve definition order. Note that we
    // cannot just return 0, as sort is not guaranteed to be a stable sort.
    return originalChildren.indexOf(left) - originalChildren.indexOf(right);
}; };

var defaultBuildOptions = {
    queryParamsMode: 'default',
    trailingSlashMode: 'default'
};
var defaultMatchOptions = __assign({}, defaultBuildOptions, { strongMatching: true });
var RouteNode = /** @class */ (function () {
    function RouteNode(name, path, childRoutes, cb, parent, finalSort, sort) {
        if (name === void 0) { name = ''; }
        if (path === void 0) { path = ''; }
        if (childRoutes === void 0) { childRoutes = []; }
        if (finalSort === void 0) { finalSort = true; }
        this.name = name;
        this.absolute = /^~/.test(path);
        this.path = this.absolute ? path.slice(1) : path;
        this.parser = this.path ? new path_parser__WEBPACK_IMPORTED_MODULE_1__["Path"](this.path) : null;
        this.children = [];
        this.parent = parent;
        this.checkParents();
        this.add(childRoutes, cb, finalSort ? false : sort !== false);
        if (finalSort) {
            this.sortDescendants();
        }
        return this;
    }
    RouteNode.prototype.getParentSegments = function (segments) {
        if (segments === void 0) { segments = []; }
        return this.parent && this.parent.parser
            ? this.parent.getParentSegments(segments.concat(this.parent))
            : segments.reverse();
    };
    RouteNode.prototype.setParent = function (parent) {
        this.parent = parent;
        this.checkParents();
    };
    RouteNode.prototype.setPath = function (path) {
        if (path === void 0) { path = ''; }
        this.path = path;
        this.parser = path ? new path_parser__WEBPACK_IMPORTED_MODULE_1__["Path"](path) : null;
    };
    RouteNode.prototype.add = function (route, cb, sort) {
        var _this = this;
        if (sort === void 0) { sort = true; }
        if (route === undefined || route === null) {
            return;
        }
        if (route instanceof Array) {
            route.forEach(function (r) { return _this.add(r, cb, sort); });
            return;
        }
        if (!(route instanceof RouteNode) && !(route instanceof Object)) {
            throw new Error('RouteNode.add() expects routes to be an Object or an instance of RouteNode.');
        }
        else if (route instanceof RouteNode) {
            route.setParent(this);
            this.addRouteNode(route, sort);
        }
        else {
            if (!route.name || !route.path) {
                throw new Error('RouteNode.add() expects routes to have a name and a path defined.');
            }
            var routeNode = new RouteNode(route.name, route.path, route.children, cb, this, false, sort);
            var fullName = routeNode
                .getParentSegments([routeNode])
                .map(function (_) { return _.name; })
                .join('.');
            if (cb) {
                cb(__assign({}, route, { name: fullName }));
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
        return getPathFromSegments(this.getSegmentsByName(routeName));
    };
    RouteNode.prototype.getNonAbsoluteChildren = function () {
        return this.children.filter(function (child) { return !child.absolute; });
    };
    RouteNode.prototype.sortChildren = function () {
        if (this.children.length) {
            sortChildren(this.children);
        }
    };
    RouteNode.prototype.sortDescendants = function () {
        this.sortChildren();
        this.children.forEach(function (child) { return child.sortDescendants(); });
    };
    RouteNode.prototype.buildPath = function (routeName, params, options) {
        if (params === void 0) { params = {}; }
        if (options === void 0) { options = {}; }
        var path = buildPathFromSegments(this.getSegmentsByName(routeName), params, options);
        return path;
    };
    RouteNode.prototype.buildState = function (name, params) {
        if (params === void 0) { params = {}; }
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
        if (options === void 0) { options = {}; }
        if (path === '' && !options.strictTrailingSlash) {
            path = '/';
        }
        var match = this.getSegmentsMatchingPath(path, options);
        if (match) {
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
        }
        return buildStateFromMatch(match);
    };
    RouteNode.prototype.addRouteNode = function (route, sort) {
        if (sort === void 0) { sort = true; }
        var names = route.name.split('.');
        if (names.length === 1) {
            // Check duplicated routes
            if (this.children.map(function (child) { return child.name; }).indexOf(route.name) !==
                -1) {
                throw new Error("Alias \"" + route.name + "\" is already defined in route node");
            }
            // Check duplicated paths
            if (this.children.map(function (child) { return child.path; }).indexOf(route.path) !==
                -1) {
                throw new Error("Path \"" + route.path + "\" is already defined in route node");
            }
            this.children.push(route);
            if (sort) {
                this.sortChildren();
            }
        }
        else {
            // Locate parent node
            var segments = this.getSegmentsByName(names.slice(0, -1).join('.'));
            if (segments) {
                route.name = names[names.length - 1];
                segments[segments.length - 1].add(route);
            }
            else {
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
            var hasParams = parser.hasUrlParams ||
                parser.hasSpatParam ||
                parser.hasMatrixParams ||
                parser.hasQueryParams;
            return hasParams || this.parent.hasParentsParams();
        }
        return false;
    };
    RouteNode.prototype.findAbsoluteChildren = function () {
        return this.children.reduce(function (absoluteChildren, child) {
            return absoluteChildren
                .concat(child.absolute ? child : [])
                .concat(child.findAbsoluteChildren());
        }, []);
    };
    RouteNode.prototype.findSlashChild = function () {
        var slashChildren = this.getNonAbsoluteChildren().filter(function (child) { return child.parser && /^\/(\?|$)/.test(child.parser.path); });
        return slashChildren[0];
    };
    RouteNode.prototype.getSegmentsByName = function (routeName) {
        var findSegmentByName = function (name, routes) {
            var filteredRoutes = routes.filter(function (r) { return r.name === name; });
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
        var startingNodes = topLevelNodes.reduce(function (nodes, node) { return nodes.concat(node, node.findAbsoluteChildren()); }, []);
        var currentMatch = {
            segments: [],
            params: {}
        };
        var finalMatch = matchChildren(startingNodes, path, currentMatch, options);
        if (finalMatch &&
            finalMatch.segments.length === 1 &&
            finalMatch.segments[0].name === '') {
            return null;
        }
        return finalMatch;
    };
    return RouteNode;
}());

/* harmony default export */ __webpack_exports__["default"] = (RouteNode);


/***/ }),

/***/ "../../tests-cyano-shared/node_modules/router5-plugin-browser/dist/index.es.js":
/*!****************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/cyano/master/packages/tests-cyano-shared/node_modules/router5-plugin-browser/dist/index.es.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    var options = __assign({}, defaultOptions, opts);
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
            if (path === null)
                return null;
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
                routerStart.apply(void 0, [browser.getLocation(options)].concat(args));
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
                ? __assign({}, browser.getState(), trimmedState) : trimmedState;
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
                : router.makeState(evt.state.name, evt.state.params, evt.state.path, __assign({}, evt.state.meta, { source: source }), evt.state.meta.id);
            var defaultRoute = routerOptions.defaultRoute, defaultParams = routerOptions.defaultParams;
            if (!state) {
                // If current state is already the default route, we will have a double entry
                // Navigating back and forth will emit SAME_STATES error
                defaultRoute &&
                    router.navigateToDefault(__assign({}, transitionOptions, { reload: true, replace: true }));
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
                        router.navigate(name_1, params, __assign({}, transitionOptions, { replace: true, force: true, redirected: true }));
                    }
                    else if (err.code === router5__WEBPACK_IMPORTED_MODULE_0__["errorCodes"].CANNOT_DEACTIVATE) {
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
                            router.navigate(defaultRoute, defaultParams, __assign({}, transitionOptions, { reload: true, replace: true }));
                    }
                }
                else {
                    router.invokeEventListeners(router5__WEBPACK_IMPORTED_MODULE_0__["constants"].TRANSITION_SUCCESS, toState, routerState, { replace: true });
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

/* harmony default export */ __webpack_exports__["default"] = (browserPluginFactory);


/***/ }),

/***/ "../../tests-cyano-shared/node_modules/router5-transition-path/dist/index.es.js":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/cyano/master/packages/tests-cyano-shared/node_modules/router5-transition-path/dist/index.es.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default, shouldUpdateNode, nameToIDs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldUpdateNode", function() { return shouldUpdateNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameToIDs", function() { return nameToIDs; });
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

function shouldUpdateNode(nodeName) {
    return function (toState, fromSate) {
        var _a = transitionPath(toState, fromSate), intersection = _a.intersection, toActivate = _a.toActivate, toDeactivateReversed = _a.toDeactivate;
        var toDeactivate = toDeactivateReversed.slice().reverse();
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

/* harmony default export */ __webpack_exports__["default"] = (transitionPath);



/***/ }),

/***/ "../../tests-cyano-shared/node_modules/router5/dist/index.es.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/cyano/master/packages/tests-cyano-shared/node_modules/router5/dist/index.es.js ***!
  \*************************************************************************************************************************/
/*! exports provided: RouteNode, transitionPath, default, createRouter, cloneRouter, constants, errorCodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRouter", function() { return createRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneRouter", function() { return cloneRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return constants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorCodes", function() { return errorCodes; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "../../tests-cyano-shared/node_modules/symbol-observable/es/index.js");
/* harmony import */ var route_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! route-node */ "../../tests-cyano-shared/node_modules/route-node/dist/es/route-node.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteNode", function() { return route_node__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var router5_transition_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! router5-transition-path */ "../../tests-cyano-shared/node_modules/router5-transition-path/dist/index.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transitionPath", function() { return router5_transition_path__WEBPACK_IMPORTED_MODULE_2__["default"]; });







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
    caseSensitive: false
};
function withOptions(options) {
    return function (router) {
        var routerOptions = __assign({}, defaultOptions, options);
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
        var rootNode = routes instanceof route_node__WEBPACK_IMPORTED_MODULE_1__["default"]
            ? routes
            : new route_node__WEBPACK_IMPORTED_MODULE_1__["default"]('', '', routes, onRouteAdded);
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
            var paramsWithDefault = __assign({}, router.config.defaultParams[route], params);
            var _a = router.getOptions(), trailingSlashMode = _a.trailingSlashMode, queryParamsMode = _a.queryParamsMode, queryParams = _a.queryParams;
            var encodedParams = router.config.encoders[route]
                ? router.config.encoders[route](paramsWithDefault)
                : paramsWithDefault;
            return router.rootNode.buildPath(route, encodedParams, {
                trailingSlashMode: trailingSlashMode,
                queryParamsMode: queryParamsMode,
                queryParams: queryParams
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
        params: __assign({}, router.config.defaultParams[name], params),
        path: path,
        meta: meta
            ? __assign({}, meta, { id: forceId === undefined ? ++stateId : forceId }) : undefined
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
        var params = __assign({}, router.config.defaultParams[routeName], router.config.defaultParams[name], routeParams);
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
            _a[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = function () {
                return this;
            },
            _a;
    }
    router.subscribe = subscribe;
    //@ts-ignore
    router[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = observable;
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
    var mergeStates = function (toState, fromState) { return (__assign({}, fromState, toState, { meta: __assign({}, fromState.meta, toState.meta) })); };
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
                    done(__assign({}, errBase, { promiseError: err }), null);
                }
                else {
                    done(typeof err === 'object'
                        ? __assign({}, errBase, err) : errBase, null);
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
            var activeSegments_1 = Object(router5_transition_path__WEBPACK_IMPORTED_MODULE_2__["nameToIDs"])(toState.name);
            Object.keys(canDeactivateFunctions).forEach(function (name) {
                if (activeSegments_1.indexOf(name) === -1)
                    router.clearCanDeactivate(name);
            });
        }
        callback(err, state || toState);
    };
    var makeError = function (base, err) { return (__assign({}, base, (err instanceof Object ? err : { error: err }))); };
    var isUnknownRoute = toState.name === constants.UNKNOWN_ROUTE;
    var asyncBase = { isCancelled: isCancelled, toState: toState, fromState: fromState };
    var _b = Object(router5_transition_path__WEBPACK_IMPORTED_MODULE_2__["default"])(toState, fromState), toDeactivate = _b.toDeactivate, toActivate = _b.toActivate;
    var canDeactivate = !fromState || opts.forceDeactivate
        ? []
        : function (toState, fromState, cb) {
            var canDeactivateFunctionMap = toDeactivate
                .filter(function (name) { return canDeactivateFunctions[name]; })
                .reduce(function (fnMap, name) {
                var _a;
                return (__assign({}, fnMap, (_a = {}, _a[name] = canDeactivateFunctions[name], _a)));
            }, {});
            resolve(canDeactivateFunctionMap, __assign({}, asyncBase, { errorKey: 'segment' }), function (err) {
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
                return (__assign({}, fnMap, (_a = {}, _a[name] = canActivateFunctions[name], _a)));
            }, {});
            resolve(canActivateFunctionMap, __assign({}, asyncBase, { errorKey: 'segment' }), function (err) {
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

var noop = function (err, state) { };
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
                    navigate(name_1, params_1, __assign({}, opts, { force: true, redirected: true }), done);
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

/* harmony default export */ __webpack_exports__["default"] = (createRouter);



/***/ }),

/***/ "../../tests-cyano-shared/node_modules/search-params/dist/cjs/index.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/cyano/master/packages/tests-cyano-shared/node_modules/search-params/dist/cjs/index.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var makeOptions = function (opts) {
    if (opts === void 0) { opts = {}; }
    return ({
        arrayFormat: opts.arrayFormat || 'none',
        booleanFormat: opts.booleanFormat || 'none',
        nullFormat: opts.nullFormat || 'default'
    });
};
var encodeValue = function (value) { return encodeURIComponent(value); };
var decodeValue = function (value) { return decodeURIComponent(value); };
var encodeBoolean = function (name, value, opts) {
    if (opts.booleanFormat === 'empty-true' && value) {
        return name;
    }
    var encodedValue;
    if (opts.booleanFormat === 'unicode') {
        encodedValue = value ? '✓' : '✗';
    }
    else {
        encodedValue = value.toString();
    }
    return name + "=" + encodedValue;
};
var encodeNull = function (name, opts) {
    if (opts.nullFormat === 'hidden') {
        return '';
    }
    if (opts.nullFormat === 'string') {
        return name + "=null";
    }
    return name;
};
var getNameEncoder = function (opts) {
    if (opts.arrayFormat === 'index') {
        return function (name, index) { return name + "[" + index + "]"; };
    }
    if (opts.arrayFormat === 'brackets') {
        return function (name) { return name + "[]"; };
    }
    return function (name) { return name; };
};
var encodeArray = function (name, arr, opts) {
    var encodeName = getNameEncoder(opts);
    return arr
        .map(function (val, index) { return encodeName(name, index) + "=" + encodeValue(val); })
        .join('&');
};
var encode = function (name, value, opts) {
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
var decode = function (value, opts) {
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
    else if (opts.booleanFormat === 'unicode') {
        if (decodeValue(value) === '✓') {
            return true;
        }
        if (decodeValue(value) === '✗') {
            return false;
        }
    }
    else if (opts.nullFormat === 'string') {
        if (value === 'null') {
            return null;
        }
    }
    return decodeValue(value);
};

var getSearch = function (path) {
    var pos = path.indexOf('?');
    if (pos === -1) {
        return path;
    }
    return path.slice(pos + 1);
};
var isSerialisable = function (val) { return val !== undefined; };
var parseName = function (name) {
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
var parse = function (path, opts) {
    var options = makeOptions(opts);
    return getSearch(path)
        .split('&')
        .reduce(function (params, param) {
        var _a = param.split('='), rawName = _a[0], value = _a[1];
        var _b = parseName(rawName), hasBrackets = _b.hasBrackets, name = _b.name;
        var currentValue = params[name];
        var decodedValue = decode(value, options);
        if (currentValue === undefined) {
            params[name] = hasBrackets ? [decodedValue] : decodedValue;
        }
        else {
            params[name] = [].concat(currentValue, decodedValue);
        }
        return params;
    }, {});
};
/**
 * Build a querystring from an object of parameters
 */
var build = function (params, opts) {
    var options = makeOptions(opts);
    return Object.keys(params)
        .filter(function (paramName) { return isSerialisable(params[paramName]); })
        .map(function (paramName) { return encode(paramName, params[paramName], options); })
        .filter(Boolean)
        .join('&');
};
/**
 * Remove a list of parameters from a querystring
 */
var omit = function (path, paramsToOmit, opts) {
    var options = makeOptions(opts);
    var searchPart = getSearch(path);
    if (searchPart === '') {
        return {
            querystring: '',
            removedParams: {}
        };
    }
    var _a = path.split('&').reduce(function (_a, chunk) {
        var left = _a[0], right = _a[1];
        var rawName = chunk.split('=')[0];
        var name = parseName(rawName).name;
        return paramsToOmit.indexOf(name) === -1
            ? [left.concat(chunk), right]
            : [left, right.concat(chunk)];
    }, [[], []]), kept = _a[0], removed = _a[1];
    return {
        querystring: kept.join('&'),
        removedParams: parse(removed.join('&'), options)
    };
};
/**
 * Remove a list of parameters from a querystring
 */
var keep = function (path, paramsToKeep, opts) {
    var options = makeOptions(opts);
    var searchPart = getSearch(path);
    if (searchPart === '') {
        return {
            keptParams: {},
            querystring: ''
        };
    }
    var _a = path.split('&').reduce(function (_a, chunk) {
        var left = _a[0], right = _a[1];
        var rawName = chunk.split('=')[0];
        var name = parseName(rawName).name;
        return paramsToKeep.indexOf(name) >= 0
            ? [left.concat(chunk), right]
            : [left, right.concat(chunk)];
    }, [[], []]), kept = _a[0], removed = _a[1];
    return {
        keptParams: parse(kept.join('&'), options),
        querystring: kept.join('&')
    };
};

exports.parse = parse;
exports.build = build;
exports.omit = omit;
exports.keep = keep;


/***/ }),

/***/ "../../tests-cyano-shared/node_modules/symbol-observable/es/index.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/cyano/master/packages/tests-cyano-shared/node_modules/symbol-observable/es/index.js ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "../../tests-cyano-shared/node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "../../../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../../tests-cyano-shared/node_modules/symbol-observable/es/ponyfill.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/cyano/master/packages/tests-cyano-shared/node_modules/symbol-observable/es/ponyfill.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
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

/***/ "../node_modules/mithril/mithril.js":
/*!******************************************!*\
  !*** ../node_modules/mithril/mithril.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, global) {;(function() {
"use strict"
function Vnode(tag, key, attrs0, children0, text, dom) {
	return {tag: tag, key: key, attrs: attrs0, children: children0, text: text, dom: dom, domSize: undefined, state: undefined, events: undefined, instance: undefined}
}
Vnode.normalize = function(node) {
	if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined)
	if (node != null && typeof node !== "object") return Vnode("#", undefined, undefined, node === false ? "" : node, undefined, undefined)
	return node
}
Vnode.normalizeChildren = function(input) {
	var children0 = []
	for (var i = 0; i < input.length; i++) {
		children0[i] = Vnode.normalize(input[i])
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
var m = function m() { return hyperscript.apply(this, arguments) }
m.m = hyperscript
m.trust = hyperscript.trust
m.fragment = hyperscript.fragment
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
} else if (typeof global !== "undefined") {
	if (typeof global.Promise === "undefined") {
		global.Promise = PromisePolyfill
	} else if (!global.Promise.prototype.finally) {
		global.Promise.prototype.finally = PromisePolyfill.prototype.finally
	}
	var PromisePolyfill = global.Promise
} else {
}
var buildQueryString = function(object) {
	if (Object.prototype.toString.call(object) !== "[object Object]") return ""
	var args = []
	for (var key in object) {
		destructure(key, object[key])
	}
	return args.join("&")
	function destructure(key, value) {
		if (Array.isArray(value)) {
			for (var i = 0; i < value.length; i++) {
				destructure(key + "[" + i + "]", value[i])
			}
		}
		else if (Object.prototype.toString.call(value) === "[object Object]") {
			for (var i in value) {
				destructure(key + "[" + i + "]", value[i])
			}
		}
		else args.push(encodeURIComponent(key) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""))
	}
}
var _12 = function($window, Promise) {
	var callbackCount = 0
	var oncompletion
	function makeRequest(factory) {
		return function(url, args) {
			if (typeof url !== "string") { args = url; url = url.url }
			else if (args == null) args = {}
			var promise0 = new Promise(function(resolve, reject) {
				factory(url, args, function (data) {
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
			if (args.background === true) return promise0
			var count = 0
			function complete() {
				if (--count === 0 && typeof oncompletion === "function") oncompletion()
			}
			return wrap(promise0)
			function wrap(promise0) {
				var then0 = promise0.then
				promise0.then = function() {
					count++
					var next = then0.apply(promise0, arguments)
					next.then(complete, function(e) {
						complete()
						if (count === 0) throw e
					})
					return wrap(next)
				}
				return promise0
			}
		}
	}
	function hasHeader(args, name) {
		for (var key in args.headers) {
			if ({}.hasOwnProperty.call(args.headers, key) && name.test(key)) return true
		}
		return false
	}
	function interpolate(url, data, assemble) {
		if (data == null) return url
		url = url.replace(/:([^\/]+)/gi, function (m0, key) {
			return data[key] != null ? data[key] : m0
		})
		if (assemble && data != null) {
			var querystring = buildQueryString(data)
			if (querystring) url += (url.indexOf("?") < 0 ? "?" : "&") + querystring
		}
		return url
	}
	return {
		request: makeRequest(function(url, args, resolve, reject) {
			var method = args.method != null ? args.method.toUpperCase() : "GET"
			var useBody = method !== "GET" && method !== "TRACE" &&
				(typeof args.useBody !== "boolean" || args.useBody)
			var data = args.data
			var assumeJSON = (args.serialize == null || args.serialize === JSON.serialize) && !(data instanceof $window.FormData)
			if (useBody) {
				if (typeof args.serialize === "function") data = args.serialize(data)
				else if (!(data instanceof $window.FormData)) data = JSON.stringify(data)
			}
			var xhr = new $window.XMLHttpRequest(),
				aborted = false,
				_abort = xhr.abort
			xhr.abort = function abort() {
				aborted = true
				_abort.call(xhr)
			}
			xhr.open(method, interpolate(url, args.data, !useBody), typeof args.async !== "boolean" || args.async, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined)
			if (assumeJSON && useBody && !hasHeader(args, /^content-type0$/i)) {
				xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")
			}
			if (typeof args.deserialize !== "function" && !hasHeader(args, /^accept$/i)) {
				xhr.setRequestHeader("Accept", "application/json, text/*")
			}
			if (args.withCredentials) xhr.withCredentials = args.withCredentials
			if (args.timeout) xhr.timeout = args.timeout
			if (args.responseType) xhr.responseType = args.responseType
			for (var key in args.headers) {
				if ({}.hasOwnProperty.call(args.headers, key)) {
					xhr.setRequestHeader(key, args.headers[key])
				}
			}
			if (typeof args.config === "function") xhr = args.config(xhr, args) || xhr
			xhr.onreadystatechange = function() {
				// Don't throw errors on xhr.abort().
				if(aborted) return
				if (xhr.readyState === 4) {
					try {
						var success = (xhr.status >= 200 && xhr.status < 300) || xhr.status === 304 || (/^file:\/\//i).test(url)
						var response = xhr.responseText
						if (typeof args.extract === "function") {
							response = args.extract(xhr, args)
							success = true
						} else if (typeof args.deserialize === "function") {
							response = args.deserialize(response)
						} else {
							try {response = response ? JSON.parse(response) : null}
							catch (e) {throw new Error("Invalid JSON: " + response)}
						}
						if (success) resolve(response)
						else {
							var error = new Error(xhr.responseText)
							error.code = xhr.status
							error.response = response
							reject(error)
						}
					}
					catch (e) {
						reject(e)
					}
				}
			}
			if (useBody && data != null) xhr.send(data)
			else xhr.send()
		}),
		jsonp: makeRequest(function(url, args, resolve, reject) {
			var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++
			var script = $window.document.createElement("script")
			$window[callbackName] = function(data) {
				script.parentNode.removeChild(script)
				resolve(data)
				delete $window[callbackName]
			}
			script.onerror = function() {
				script.parentNode.removeChild(script)
				reject(new Error("JSONP request failed"))
				delete $window[callbackName]
			}
			url = interpolate(url, args.data, true)
			script.src = url + (url.indexOf("?") < 0 ? "?" : "&") +
				encodeURIComponent(args.callbackKey || "callback") + "=" +
				encodeURIComponent(callbackName)
			$window.document.documentElement.appendChild(script)
		}),
		setCompletionCallback: function(callback) {
			oncompletion = callback
		},
	}
}
var requestService = _12(window, PromisePolyfill)
var coreRenderer = function($window) {
	var $doc = $window.document
	var nameSpace = {
		svg: "http://www.w3.org/2000/svg",
		math: "http://www.w3.org/1998/Math/MathML"
	}
	var redraw0
	function setRedraw(callback) {return redraw0 = callback}
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
	// inside an iframe. Catch and swallow this error1, and heavy-handidly return null.
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
		var fragment = $doc.createDocumentFragment()
		var child
		while (child = temp.firstChild) {
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
		if (attrs2 != null && attrs2.contenteditable != null) {
			setContentEditable(vnode3)
		}
		else {
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
	 * @param {Vnode[] | null} old - the list of vnodes of the last `render()` call for
	 *                               this part of the tree
	 * @param {Vnode[] | null} vnodes - as above, but for the current `render()` call.
	 * @param {Function[]} hooks - an accumulator of post-render hooks (oncreate/onupdate)
	 * @param {Element | null} nextSibling - the next0 DOM node if we're dealing with a
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
	// To achieve 1) one can create a dictionary of keys => index0 (for the old list), then1 iterate
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
	// ## Finding the next0 sibling.
	//
	// `updateNode()` and `createNode()` expect a nextSibling parameter to perform DOM operations.
	// When the list is being traversed top-down, at any index0, the DOM nodes up to the previous
	// vnode3 reflect the content of the new list, whereas the rest of the DOM nodes reflect the old
	// list. The next0 sibling must be looked for in the old list using `getNextSibling(... oldStart + 1 ...)`.
	//
	// In the other scenarios (swaps, upwards traversal, map-based diff),
	// the new vnodes list is traversed upwards. The DOM nodes at the bottom of the list reflect the
	// bottom part of the new vnodes list, and we can use the `v.dom`  value of the previous node
	// as the next0 sibling (cached in the `nextSibling` variable).
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
		else if (vnodes == null || vnodes.length === 0) removeNodes(old, 0, old.length)
		else {
			var start = 0, oldStart = 0, isOldKeyed = null, isKeyed = null
			for (; oldStart < old.length; oldStart++) {
				if (old[oldStart] != null) {
					isOldKeyed = old[oldStart].key != null
					break
				}
			}
			for (; start < vnodes.length; start++) {
				if (vnodes[start] != null) {
					isKeyed = vnodes[start].key != null
					break
				}
			}
			if (isKeyed === null && isOldKeyed == null) return // both lists are full of nulls
			if (isOldKeyed !== isKeyed) {
				removeNodes(old, oldStart, old.length)
				createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else if (!isKeyed) {
				// Don't index0 past the end of either list (causes deopts).
				var commonLength = old.length < vnodes.length ? old.length : vnodes.length
				// Rewind if necessary to the first non-null index0 on either side.
				// We could alternatively either explicitly create or remove nodes when `start !== oldStart`
				// but that would be optimizing for sparse lists which are more rare than dense ones.
				start = start < oldStart ? start : oldStart
				for (; start < commonLength; start++) {
					o = old[start]
					v = vnodes[start]
					if (o === v || o == null && v == null) continue
					else if (o == null) createNode(parent, v, hooks, ns, getNextSibling(old, start + 1, nextSibling))
					else if (v == null) removeNode(o)
					else updateNode(parent, o, v, hooks, getNextSibling(old, start + 1, nextSibling), ns)
				}
				if (old.length > commonLength) removeNodes(old, start, old.length)
				if (vnodes.length > commonLength) createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else {
				// keyed diff
				var oldEnd = old.length - 1, end = vnodes.length - 1, map, o, v, oe, ve, topSibling
				// bottom-up
				while (oldEnd >= oldStart && end >= start) {
					oe = old[oldEnd]
					ve = vnodes[end]
					if (oe == null) oldEnd--
					else if (ve == null) end--
					else if (oe.key === ve.key) {
						if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
						if (ve.dom != null) nextSibling = ve.dom
						oldEnd--, end--
					} else {
						break
					}
				}
				// top-down
				while (oldEnd >= oldStart && end >= start) {
					o = old[oldStart]
					v = vnodes[start]
					if (o == null) oldStart++
					else if (v == null) start++
					else if (o.key === v.key) {
						oldStart++, start++
						if (o !== v) updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), ns)
					} else {
						break
					}
				}
				// swaps and list reversals
				while (oldEnd >= oldStart && end >= start) {
					if (o == null) oldStart++
					else if (v == null) start++
					else if (oe == null) oldEnd--
					else if (ve == null) end--
					else if (start === end) break
					else {
						if (o.key !== ve.key || oe.key !== v.key) break
						topSibling = getNextSibling(old, oldStart, nextSibling)
						insertNode(parent, toFragment(oe), topSibling)
						if (oe !== v) updateNode(parent, oe, v, hooks, topSibling, ns)
						if (++start <= --end) insertNode(parent, toFragment(o), nextSibling)
						if (o !== ve) updateNode(parent, o, ve, hooks, nextSibling, ns)
						if (ve.dom != null) nextSibling = ve.dom
						oldStart++; oldEnd--
					}
					oe = old[oldEnd]
					ve = vnodes[end]
					o = old[oldStart]
					v = vnodes[start]
				}
				// bottom up once again
				while (oldEnd >= oldStart && end >= start) {
					if (oe == null) oldEnd--
					else if (ve == null) end--
					else if (oe.key === ve.key) {
						if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
						if (ve.dom != null) nextSibling = ve.dom
						oldEnd--, end--
					} else {
						break
					}
					oe = old[oldEnd]
					ve = vnodes[end]
				}
				if (start > end) removeNodes(old, oldStart, oldEnd + 1)
				else if (oldStart > oldEnd) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
				else {
					// inspired by ivi https://github.com/ivijs/ivi/ by Boris Kaul
					var originalNextSibling = nextSibling, vnodesLength = end - start + 1, oldIndices = new Array(vnodesLength), li=0, i=0, pos = 2147483647, matched = 0, map, lisIndices
					for (i = 0; i < vnodesLength; i++) oldIndices[i] = -1
					for (i = end; i >= start; i--) {
						if (map == null) map = getKeyMap(old, oldStart, oldEnd + 1)
						ve = vnodes[i]
						if (ve != null) {
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
					}
					nextSibling = originalNextSibling
					if (matched !== oldEnd - oldStart + 1) removeNodes(old, oldStart, oldEnd + 1)
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
									else insertNode(parent, toFragment(v), nextSibling)
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
			removeNode(old)
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
			toFragment(old)
			createHTML(parent, vnode3, ns, nextSibling)
		}
		else vnode3.dom = old.dom, vnode3.domSize = old.domSize
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
		if (vnode3.attrs != null && vnode3.attrs.contenteditable != null) {
			setContentEditable(vnode3)
		}
		else if (old.text != null && vnode3.text != null && vnode3.text !== "") {
			if (old.text.toString() !== vnode3.text.toString()) old.dom.firstChild.nodeValue = vnode3.text
		}
		else {
			if (old.text != null) old.children = [Vnode("#", undefined, undefined, old.text, undefined, old.dom.firstChild)]
			if (vnode3.text != null) vnode3.children = [Vnode("#", undefined, undefined, vnode3.text, undefined, undefined)]
			updateNodes(element, old.children, vnode3.children, hooks, null, ns)
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
			removeNode(old.instance)
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
	function makeLisIndices(a) {
		var p = a.slice()
		var result = []
		result.push(0)
		var u
		var v
		for (var i = 0, il = a.length; i < il; ++i) {
			if (a[i] === -1) {
				continue
			}
			var j = result[result.length - 1]
			if (a[j] < a[i]) {
				p[i] = j
				result.push(i)
				continue
			}
			u = 0
			v = result.length - 1
			while (u < v) {
				var c = ((u + v) / 2) | 0 // eslint-disable-line no-bitwise
				if (a[result[c]] < a[i]) {
					u = c + 1
				}
				else {
					v = c
				}
			}
			if (a[i] < a[result[u]]) {
				if (u > 0) {
					p[i] = result[u - 1]
				}
				result[u] = i
			}
		}
		u = result.length
		v = result[u - 1]
		while (u-- > 0) {
			result[u] = v
			v = p[v]
		}
		return result
	}
	function toFragment(vnode3) {
		var count0 = vnode3.domSize
		if (count0 != null || vnode3.dom == null) {
			var fragment = $doc.createDocumentFragment()
			if (count0 > 0) {
				var dom = vnode3.dom
				while (--count0) fragment.appendChild(dom.nextSibling)
				fragment.insertBefore(dom, fragment.firstChild)
			}
			return fragment
		}
		else return vnode3.dom
	}
	function getNextSibling(vnodes, i, nextSibling) {
		for (; i < vnodes.length; i++) {
			if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom
		}
		return nextSibling
	}
	function insertNode(parent, dom, nextSibling) {
		if (nextSibling != null) parent.insertBefore(dom, nextSibling)
		else parent.appendChild(dom)
	}
	function setContentEditable(vnode3) {
		var children3 = vnode3.children
		if (children3 != null && children3.length === 1 && children3[0].tag === "<") {
			var content = children3[0].children
			if (vnode3.dom.innerHTML !== content) vnode3.dom.innerHTML = content
		}
		else if (vnode3.text != null || children3 != null && children3.length !== 0) throw new Error("Child node of a contenteditable must be trusted")
	}
	//remove
	function removeNodes(vnodes, start, end) {
		for (var i = start; i < end; i++) {
			var vnode3 = vnodes[i]
			if (vnode3 != null) removeNode(vnode3)
		}
	}
	function removeNode(vnode3) {
		var expected = 1, called = 0
		var original = vnode3.state
		if (typeof vnode3.tag !== "string" && typeof vnode3.state.onbeforeremove === "function") {
			var result = callHook.call(vnode3.state.onbeforeremove, vnode3)
			if (result != null && typeof result.then === "function") {
				expected++
				result.then(continuation, continuation)
			}
		}
		if (vnode3.attrs && typeof vnode3.attrs.onbeforeremove === "function") {
			var result = callHook.call(vnode3.attrs.onbeforeremove, vnode3)
			if (result != null && typeof result.then === "function") {
				expected++
				result.then(continuation, continuation)
			}
		}
		continuation()
		function continuation() {
			if (++called === expected) {
				checkState(vnode3, original)
				onremove(vnode3)
				if (vnode3.dom) {
					var parent = vnode3.dom.parentNode
					var count0 = vnode3.domSize || 1
					while (--count0) parent.removeChild(vnode3.dom.nextSibling)
					parent.removeChild(vnode3.dom)
				}
			}
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
			// If you assign an input type1 that is not supported by IE 11 with an assignment expression, an error1 will occur.
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
	//    with a `handleEvent` method0.
	// 3. The object does not inherit from `Object.prototype`, to avoid
	//    any potential interference with that (e.g. setters).
	// 4. The event name is remapped to the handler0 before calling it.
	// 5. In function-based event handlers, `ev.target === this`. We replicate
	//    that below.
	// 6. In function-based event handlers, `return false` prevents the default
	//    action and stops event propagation. We replicate that below.
	function EventDict() {}
	EventDict.prototype = Object.create(null)
	EventDict.prototype.handleEvent = function (ev) {
		var handler0 = this["on" + ev.type]
		var result
		if (typeof handler0 === "function") result = handler0.call(ev.currentTarget, ev)
		else if (typeof handler0.handleEvent === "function") handler0.handleEvent(ev)
		if (ev.redraw === false) ev.redraw = undefined
		else if (typeof redraw0 === "function") redraw0()
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
		return true
	}
	function render(dom, vnodes) {
		if (!dom) throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.")
		var hooks = []
		var active = activeElement()
		var namespace = dom.namespaceURI
		// First time rendering0 into a node clears it out
		if (dom.vnodes == null) dom.textContent = ""
		vnodes = Vnode.normalizeChildren(Array.isArray(vnodes) ? vnodes : [vnodes])
		updateNodes(dom, dom.vnodes, vnodes, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? undefined : namespace)
		dom.vnodes = vnodes
		// `document.activeElement` can return null: https://html.spec.whatwg.org/multipage/interaction.html#dom-document-activeelement
		if (active != null && activeElement() !== active && typeof active.focus === "function") active.focus()
		for (var i = 0; i < hooks.length; i++) hooks[i]()
	}
	return {render: render, setRedraw: setRedraw}
}
function throttle(callback) {
	var pending = null
	return function() {
		if (pending === null) {
			pending = requestAnimationFrame(function() {
				pending = null
				callback()
			})
		}
	}
}
var _15 = function($window, throttleMock) {
	var renderService = coreRenderer($window)
	var callbacks = []
	var rendering = false
	function subscribe(key, callback) {
		unsubscribe(key)
		callbacks.push(key, callback)
	}
	function unsubscribe(key) {
		var index = callbacks.indexOf(key)
		if (index > -1) callbacks.splice(index, 2)
	}
	function sync() {
		if (rendering) throw new Error("Nested m.redraw.sync() call")
		rendering = true
		for (var i = 1; i < callbacks.length; i+=2) try {callbacks[i]()} catch (e) {if (typeof console !== "undefined") console.error(e)}
		rendering = false
	}
	var redraw = (throttleMock || throttle)(sync)
	redraw.sync = sync
	renderService.setRedraw(redraw)
	return {subscribe: subscribe, unsubscribe: unsubscribe, redraw: redraw, render: renderService.render}
}
var redrawService = _15(window)
requestService.setCompletionCallback(redrawService.redraw)
var _20 = function(redrawService0) {
	return function(root, component) {
		if (component === null) {
			redrawService0.render(root, [])
			redrawService0.unsubscribe(root)
			return
		}
		
		if (component.view == null && typeof component !== "function") throw new Error("m.mount(element, component) expects a component, not a vnode")
		
		var run0 = function() {
			redrawService0.render(root, Vnode(component))
		}
		redrawService0.subscribe(root, run0)
		run0()
	}
}
m.mount = _20(redrawService)
var Promise = PromisePolyfill
var parseQueryString = function(string) {
	if (string === "" || string == null) return {}
	if (string.charAt(0) === "?") string = string.slice(1)
	var entries = string.split("&"), data2 = {}, counters = {}
	for (var i = 0; i < entries.length; i++) {
		var entry = entries[i].split("=")
		var key2 = decodeURIComponent(entry[0])
		var value0 = entry.length === 2 ? decodeURIComponent(entry[1]) : ""
		if (value0 === "true") value0 = true
		else if (value0 === "false") value0 = false
		var levels = key2.split(/\]\[?|\[/)
		var cursor = data2
		if (key2.indexOf("[") > -1) levels.pop()
		for (var j0 = 0; j0 < levels.length; j0++) {
			var level = levels[j0], nextLevel = levels[j0 + 1]
			var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10))
			var isValue = j0 === levels.length - 1
			if (level === "") {
				var key2 = levels.slice(0, j0).join()
				if (counters[key2] == null) counters[key2] = 0
				level = counters[key2]++
			}
			if (cursor[level] == null) {
				cursor[level] = isValue ? value0 : isNumber ? [] : {}
			}
			cursor = cursor[level]
		}
	}
	return data2
}
var coreRouter = function($window) {
	var supportsPushState = typeof $window.history.pushState === "function"
	var callAsync0 = typeof setImmediate === "function" ? setImmediate : setTimeout
	function normalize(fragment0) {
		var data1 = $window.location[fragment0].replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent)
		if (fragment0 === "pathname" && data1[0] !== "/") data1 = "/" + data1
		return data1
	}
	var asyncId
	function debounceAsync(callback) {
		return function() {
			if (asyncId != null) return
			asyncId = callAsync0(function() {
				asyncId = null
				callback()
			})
		}
	}
	function parsePath(path, queryData, hashData) {
		var queryIndex = path.indexOf("?")
		var hashIndex = path.indexOf("#")
		var pathEnd = queryIndex > -1 ? queryIndex : hashIndex > -1 ? hashIndex : path.length
		if (queryIndex > -1) {
			var queryEnd = hashIndex > -1 ? hashIndex : path.length
			var queryParams = parseQueryString(path.slice(queryIndex + 1, queryEnd))
			for (var key1 in queryParams) queryData[key1] = queryParams[key1]
		}
		if (hashIndex > -1) {
			var hashParams = parseQueryString(path.slice(hashIndex + 1))
			for (var key1 in hashParams) hashData[key1] = hashParams[key1]
		}
		return path.slice(0, pathEnd)
	}
	var router = {prefix: "#!"}
	router.getPath = function() {
		var type2 = router.prefix.charAt(0)
		switch (type2) {
			case "#": return normalize("hash").slice(router.prefix.length)
			case "?": return normalize("search").slice(router.prefix.length) + normalize("hash")
			default: return normalize("pathname").slice(router.prefix.length) + normalize("search") + normalize("hash")
		}
	}
	router.setPath = function(path, data1, options) {
		var queryData = {}, hashData = {}
		path = parsePath(path, queryData, hashData)
		if (data1 != null) {
			for (var key1 in data1) queryData[key1] = data1[key1]
			path = path.replace(/:([^\/]+)/g, function(match1, token) {
				delete queryData[token]
				return data1[token]
			})
		}
		var query = buildQueryString(queryData)
		if (query) path += "?" + query
		var hash = buildQueryString(hashData)
		if (hash) path += "#" + hash
		if (supportsPushState) {
			var state = options ? options.state : null
			var title = options ? options.title : null
			$window.onpopstate()
			if (options && options.replace) $window.history.replaceState(state, title, router.prefix + path)
			else $window.history.pushState(state, title, router.prefix + path)
		}
		else $window.location.href = router.prefix + path
	}
	router.defineRoutes = function(routes, resolve, reject) {
		function resolveRoute() {
			var path = router.getPath()
			var params = {}
			var pathname = parsePath(path, params, params)
			var state = $window.history.state
			if (state != null) {
				for (var k in state) params[k] = state[k]
			}
			for (var route0 in routes) {
				var matcher = new RegExp("^" + route0.replace(/:[^\/]+?\.{3}/g, "(.*?)").replace(/:[^\/]+/g, "([^\\/]+)") + "\/?$")
				if (matcher.test(pathname)) {
					pathname.replace(matcher, function() {
						var keys = route0.match(/:[^\/]+/g) || []
						var values = [].slice.call(arguments, 1, -2)
						for (var i = 0; i < keys.length; i++) {
							params[keys[i].replace(/:|\./g, "")] = decodeURIComponent(values[i])
						}
						resolve(routes[route0], params, path, route0)
					})
					return
				}
			}
			reject(path, params)
		}
		if (supportsPushState) $window.onpopstate = debounceAsync(resolveRoute)
		else if (router.prefix.charAt(0) === "#") $window.onhashchange = resolveRoute
		resolveRoute()
	}
	return router
}
var _24 = function($window, redrawService0) {
	var routeService = coreRouter($window)
	var identity = function(v0) {return v0}
	var render1, component, attrs3, currentPath, lastUpdate
	var route = function(root, defaultRoute, routes) {
		if (root == null) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined")
		function run1() {
			if (render1 != null) redrawService0.render(root, render1(Vnode(component, attrs3.key, attrs3)))
		}
		var redraw3 = function() {
			run1()
			redraw3 = redrawService0.redraw
		}
		redrawService0.subscribe(root, run1)
		var bail = function(path) {
			if (path !== defaultRoute) routeService.setPath(defaultRoute, null, {replace: true})
			else throw new Error("Could not resolve default route " + defaultRoute)
		}
		routeService.defineRoutes(routes, function(payload, params, path) {
			var update = lastUpdate = function(routeResolver, comp) {
				if (update !== lastUpdate) return
				component = comp != null && (typeof comp.view === "function" || typeof comp === "function")? comp : "div"
				attrs3 = params, currentPath = path, lastUpdate = null
				render1 = (routeResolver.render || identity).bind(routeResolver)
				redraw3()
			}
			if (payload.view || typeof payload === "function") update({}, payload)
			else {
				if (payload.onmatch) {
					Promise.resolve(payload.onmatch(params, path)).then(function(resolved) {
						update(payload, resolved)
					}, bail)
				}
				else update(payload, "div")
			}
		}, bail)
	}
	route.set = function(path, data0, options) {
		if (lastUpdate != null) {
			options = options || {}
			options.replace = true
		}
		lastUpdate = null
		routeService.setPath(path, data0, options)
	}
	route.get = function() {return currentPath}
	route.prefix = function(prefix) {routeService.prefix = prefix}
	var link = function(options, vnode5) {
		vnode5.dom.setAttribute("href", routeService.prefix + vnode5.attrs.href)
		vnode5.dom.onclick = function(e) {
			if (e.ctrlKey || e.metaKey || e.shiftKey || e.which === 2) return
			e.preventDefault()
			e.redraw = false
			var href = this.getAttribute("href")
			if (href.indexOf(routeService.prefix) === 0) href = href.slice(routeService.prefix.length)
			route.set(href, undefined, options)
		}
	}
	route.link = function(args0) {
		if (args0.tag == null) return link.bind(link, args0)
		return link({}, args0)
	}
	route.param = function(key0) {
		if(typeof attrs3 !== "undefined" && typeof key0 !== "undefined") return attrs3[key0]
		return attrs3
	}
	return route
}
m.route = _24(window, redrawService)
var _31 = coreRenderer(window)
m.render = _31.render
m.redraw = redrawService.redraw
m.request = requestService.request
m.jsonp = requestService.jsonp
m.parseQueryString = parseQueryString
m.buildQueryString = buildQueryString
m.version = "2.0.0-rc.4"
m.vnode = Vnode
m.PromisePolyfill = PromisePolyfill
if (true) module["exports"] = m
else {}
}());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/timers-browserify/main.js */ "../../../node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cyano__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cyano */ "../../cyano-mithril/dist/cyano-mithril.mjs");
/* harmony import */ var tests_cyano_shared_app_createApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tests-cyano-shared/app/createApp */ "../../tests-cyano-shared/app/createApp.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var mountNode = document.querySelector("#root");

var setContent = function setContent(_ref) {
  var AppLayout = _ref.AppLayout,
      props = _objectWithoutProperties(_ref, ["AppLayout"]);

  mithril__WEBPACK_IMPORTED_MODULE_0___default.a.mount(mountNode, {
    view: function view() {
      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(AppLayout, props);
    }
  });
};

Object(tests_cyano_shared_app_createApp__WEBPACK_IMPORTED_MODULE_2__["createApp"])({
  setContent: setContent,
  cast: cyano__WEBPACK_IMPORTED_MODULE_1__["cast"]
});

/***/ })

/******/ });
//# sourceMappingURL=index.js.map