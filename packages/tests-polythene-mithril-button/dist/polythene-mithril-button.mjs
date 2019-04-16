import { cast, useState, a, useEffect, getDom, h } from 'cyano';

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

var iconDropdownDown = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"dd-down-svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 10l5 5 5-5z\"/></svg>"; // @ts-check

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
  component: "pe-text-button",
  super: "pe-button",
  row: "pe-button-row",
  // elements      
  content: "pe-button__content",
  label: "pe-button__label",
  textLabel: "pe-button__text-label",
  wash: "pe-button__wash",
  dropdown: "pe-button__dropdown",
  // states      
  border: "pe-button--border",
  contained: "pe-button--contained",
  disabled: "pe-button--disabled",
  dropdownClosed: "pe-button--dropdown-closed",
  dropdownOpen: "pe-button--dropdown-open",
  extraWide: "pe-button--extra-wide",
  hasDropdown: "pe-button--dropdown",
  highLabel: "pe-button--high-label",
  inactive: "pe-button--inactive",
  raised: "pe-button--raised",
  selected: "pe-button--selected",
  separatorAtStart: "pe-button--separator-start"
};
var emptyArray = [];
var emptyObject = {};
var type = emptyObject.toString;
var ARRAY = type.call(emptyArray);
var OBJECT = type.call(emptyObject);
var STRING = type.call('');
var FUNCTION = type.call(type);
var own = emptyObject.hasOwnProperty;

var freeze = Object.freeze || function (o) {
  return o;
};

function defaults(target, source) {
  for (var k in source) if (own.call(source, k)) {
    if (k.indexOf('$') && !(k in target)) target[k] = source[k];
  }

  return target;
}

function cartesian(a, b) {
  var res = [],
      i,
      j;

  for (j in b) if (own.call(b, j)) for (i in a) if (own.call(a, i)) res.push(a[i] + b[j]);

  return res;
} // "Tokenizes" the selectors into parts relevant for the next function.
// Strings and comments are matched, but ignored afterwards.
// This is not a full tokenizers. It only recognizes comas, parentheses,
// strings and comments.
// regexp generated by scripts/regexps.js then trimmed by hand


var selectorTokenizer = /[(),]|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\//g;
/**
 * This will split a coma-separated selector list into individual selectors,
 * ignoring comas in strings, comments and in :pseudo-selectors(parameter, lists).
 *
 * @param {string} selector
 * @return {string[]}
 */

function splitSelector(selector) {
  var indices = [],
      res = [],
      inParen = 0,
      o;
  /*eslint-disable no-cond-assign*/

  while (o = selectorTokenizer.exec(selector)) {
    /*eslint-enable no-cond-assign*/
    switch (o[0]) {
      case '(':
        inParen++;
        break;

      case ')':
        inParen--;
        break;

      case ',':
        if (inParen) break;
        indices.push(o.index);
    }
  }

  for (o = indices.length; o--;) {
    res.unshift(selector.slice(indices[o] + 1));
    selector = selector.slice(0, indices[o]);
  }

  res.unshift(selector);
  return res;
} // Like the `selectorTokenizer`, but for the `&` operator


var ampersandTokenizer = /&|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\//g;

function ampersand(selector, parents) {
  var indices = [],
      split = [],
      res,
      o;
  /*eslint-disable no-cond-assign*/

  while (o = ampersandTokenizer.exec(selector)) {
    /*eslint-enable no-cond-assign*/
    if (o[0] == '&') indices.push(o.index);
  }

  for (o = indices.length; o--;) {
    split.unshift(selector.slice(indices[o] + 1));
    selector = selector.slice(0, indices[o]);
  }

  split.unshift(selector);
  if (split.length === 1) split.unshift('');
  res = [split[0]];

  for (o = 1; o < split.length; o++) {
    res = cartesian(res, cartesian(parents, [split[o]]));
  }

  return res.join(',');
}

function flatIter(f) {
  return function iter(arg) {
    if (type.call(arg) === ARRAY) for (var i = 0; i < arg.length; i++) iter(arg[i]);else f(arg);
  };
}

function decamelize(match) {
  return '-' + match.toLowerCase();
}
/**
 * Handles the property:value; pairs.
 *
 * @param {object} state - holds the localizer- and walker-related methods
 *                         and state
 * @param {object} emit - the contextual emitters to the final buffer
 * @param {string} prefix - the current property or a prefix in case of nested
 *                          sub-properties.
 * @param {array|object|string} o - the declarations.
 * @param {boolean} local - are we in @local or in @global scope.
 */


function declarations(state, emit, prefix, o, local) {
  var k, v, kk;
  if (o == null) return;

  switch (type.call(o = o.valueOf())) {
    case ARRAY:
      for (k = 0; k < o.length; k++) declarations(state, emit, prefix, o[k], local);

      break;

    case OBJECT:
      // prefix is falsy iif it is the empty string, which means we're at the root
      // of the declarations list.
      prefix = prefix && prefix + '-';

      for (k in o) if (own.call(o, k)) {
        v = o[k];

        if (/\$/.test(k)) {
          for (kk in k = k.split('$')) if (own.call(k, kk)) {
            declarations(state, emit, prefix + k[kk], v, local);
          }
        } else {
          declarations(state, emit, prefix + k, v, local);
        }
      }

      break;

    default:
      // prefix is falsy when it is "", which means that we're
      // at the top level.
      // `o` is then treated as a `property:value` pair, or a
      // semi-colon-separated list thereof.
      // Otherwise, `prefix` is the property name, and
      // `o` is the value.
      // restore the dashes
      k = prefix.replace(/_/g, '-').replace(/[A-Z]/g, decamelize);

      if (local && (k == 'animation-name' || k == 'animation' || k == 'list-style')) {
        // no need to tokenize here a plain `.split(',')` has all bases covered.
        // We may 'localize' a comment, but it's not a big deal.
        o = o.split(',').map(function (o) {
          return o.replace(/^\s*(?:(var\([^)]+\))|:?global\(\s*([_A-Za-z][-\w]*)\s*\)|()(-?[_A-Za-z][-\w]*))/, state.localizeReplacer);
        }).join(',');
      }

      emit.decl(k, o);
  }
}
/**
 * Handles a single at-rules
 *
 * @param {object} state - holds the localizer- and walker-related methods
 *                         and state
 * @param {object} emit - the contextual emitters to the final buffer
 * @param {array} k - The parsed at-rule, including the parameters,
 *                    if takes both parameters and a block.
 *                    k == [match, fullAtRule, atRuleType, params?]
 *                    So in `@-webkit-keyframes foo`, we have
 *                     - match = "@-webkit-keyframes foo"
 *                     - fullAtRule = "@-webkit-keyframes"
 *                     - atRuleType = "keyframes"
 *                     - params = "foo"
 * @param {string|string[]|object|object[]} v - Either parameters for
 *                                              block-less rules or
 *                                              their block
 *                                              for the others.
 * @param {string} prefix - the current selector or the selector prefix
 *                          in case of nested rules
 * @param {boolean} local - are we in @local or in @global scope?
 * @param {string} nestingDepth - are we nested in an at-rule or a selector?
 */


function atRules(state, emit, k, v, prefix, local, nestingDepth) {
  // First iterate over user-provided at-rules and return if one of them corresponds to the current one
  for (var i = 0; i < state.$atHandlers.length; i++) {
    if (state.$atHandlers[i](state, emit, k, v, prefix, local, nestingDepth)) return;
  } // using `/^global$/.test(k[2])` rather that 'global' == k[2] gzips
  // slightly better thanks to the regexps tests further down.
  // It is slightly less efficient but this isn't a critical path.


  if (!k[3] && /^global$/.test(k[2])) {
    rules(state, emit, prefix, v, 0, nestingDepth);
  } else if (!k[3] && /^local$/.test(k[2])) {
    rules(state, emit, prefix, v, 1, nestingDepth);
  } else if (k[3] && /^adopt$/.test(k[2])) {
    if (!local || nestingDepth) return emit.err('@adopt global or nested: ' + k[0]);
    if (!/^\.?[_A-Za-z][-\w]*$/.test(k[3])) return emit.err('bad adopter ' + JSON.stringify(k[3]) + ' in ' + k[0]);
    i = [];
    flatIter(function (adoptee, asString) {
      if (adoptee == null || !/^\.?[_A-Za-z][-\w]*(?:\s+\.?[_A-Za-z][-\w]*)*$/.test(asString = adoptee + '')) emit.err('bad adoptee ' + JSON.stringify(adoptee) + ' in ' + k[0]);else i.push(asString.replace(/\./g, ''));
    })(v); // we may end up with duplicate classes but AFAIK it has no consequences on specificity.

    if (i.length) {
      state.localize(k[3] = k[3].replace(/\./g, ''));
      state.names[k[3]] += ' ' + i.join(' ');
    }
  } else if (!k[3] && /^(?:namespace|import|charset)$/.test(k[2])) {
    flatIter(function (v) {
      emit.atrule(k[1], k[2], v);
    })(v);
  } else if (!k[3] && /^(?:font-face|viewport)$/.test(k[2])) {
    flatIter(function (v) {
      emit.atrule(k[1], k[2], k[3], 1);
      declarations(state, emit, '', v, local);

      emit._atrule();
    })(v);
  } else if (k[3] && /^(?:media|supports|page|keyframes)$/.test(k[2])) {
    if (local && 'keyframes' == k[2]) {
      k[3] = k[3].replace( // generated by script/regexps.js
      /(var\([^)]+\))|:?global\(\s*([_A-Za-z][-\w]*)\s*\)|()(-?[_A-Za-z][-\w]*)/, state.localizeReplacer);
    }

    emit.atrule(k[1], k[2], k[3], 1);

    if ('page' == k[2]) {
      declarations(state, emit, '', v, local);
    } else {
      rules(state, emit, 'keyframes' == k[2] ? '' : prefix, v, local, nestingDepth + 1);
    }

    emit._atrule();
  } else {
    emit.err('Unsupported at-rule: ' + k[0]);
  }
}
/**
 * Add rulesets and other CSS tree to the sheet.
 *
 * @param {object} state - holds the localizer- and walker-related methods
 *                         and state
 * @param {object} emit - the contextual emitters to the final buffer
 * @param {string} prefix - the current selector or a prefix in case of nested rules
 * @param {array|string|object} tree - a source object or sub-object.
 * @param {string} nestingDepth - are we nested in an at-rule?
 * @param {boolean} local - are we in @local or in @global scope?
 */


function rules(state, emit, prefix, tree, local, nestingDepth) {
  var k, v, inDeclaration, kk;

  switch (type.call(tree)) {
    case OBJECT:
      for (k in tree) if (own.call(tree, k)) {
        v = tree[k];

        if (prefix.length > 0 && /^[-\w$]+$/.test(k)) {
          if (!inDeclaration) {
            inDeclaration = 1;
            emit.rule(prefix);
          }

          if (/\$/.test(k)) {
            for (kk in k = k.split('$')) if (own.call(k, kk)) {
              declarations(state, emit, k[kk], v, local);
            }
          } else {
            declarations(state, emit, k, v, local);
          }
        } else if (/^@/.test(k)) {
          // Handle At-rules
          inDeclaration = 0;
          atRules(state, emit, /^(.(?:-[\w]+-)?([_A-Za-z][-\w]*))\b\s*(.*?)\s*$/.exec(k) || [k, '@', '', ''], v, prefix, local, nestingDepth);
        } else {
          // selector or nested sub-selectors
          inDeclaration = 0;
          rules(state, emit, // build the selector `prefix` for the next iteration.
          // ugly and full of redundant bits but so far the fastest/shortest.gz

          /*0 if*/
          prefix.length > 0 && (/,/.test(prefix) || /,/.test(k)) ? (
          /*0 then*/
          kk = splitSelector(prefix), splitSelector(local ? k.replace(/("(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\/)|:global\(\s*(\.-?[_A-Za-z][-\w]*)\s*\)|(\.)(-?[_A-Za-z][-\w]*)/g, state.localizeReplacer) : k).map(function (k) {
            return /&/.test(k) ? ampersand(k, kk) : kk.map(function (kk) {
              return kk + k;
            }).join(',');
          }).join(',')) :
          /*0 else*/

          /*1 if*/
          /&/.test(k) ?
          /*1 then*/
          ampersand(local ? k.replace(/("(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\/)|:global\(\s*(\.-?[_A-Za-z][-\w]*)\s*\)|(\.)(-?[_A-Za-z][-\w]*)/g, state.localizeReplacer) : k, [prefix]) :
          /*1 else*/
          prefix + (local ? k.replace(/("(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\/)|:global\(\s*(\.-?[_A-Za-z][-\w]*)\s*\)|(\.)(-?[_A-Za-z][-\w]*)/g, state.localizeReplacer) : k), v, local, nestingDepth + 1);
        }
      }

      break;

    case ARRAY:
      for (k = 0; k < tree.length; k++) {
        rules(state, emit, prefix, tree[k], local, nestingDepth);
      }

      break;

    case STRING:
      // CSS hacks or ouptut of `j2c.inline`.
      if (!prefix.length) emit.err('No selector');
      emit.rule(prefix || ' ');
      declarations(state, emit, '', tree, local);
  }
} // This is the first entry in the filters array, which is
// actually the last step of the compiler. It inserts
// closing braces to close normal (non at-) rules (those
// that start with a selector). Doing it earlier is
// impossible without passing state around in unrelated code
// or ending up with duplicated selectors when the source tree
// contains arrays.
// There's no `_rule` handler, because the core compiler never
// calls it.


function closeSelectors(next, inline) {
  var lastSelector;
  return inline ? next : {
    init: function init() {
      lastSelector = 0;
      next.init();
    },
    done: function done(raw) {
      if (lastSelector) {
        next._rule();

        lastSelector = 0;
      }

      return next.done(raw);
    },
    atrule: function atrule(rule, kind, param, takesBlock) {
      if (lastSelector) {
        next._rule();

        lastSelector = 0;
      }

      next.atrule(rule, kind, param, takesBlock);
    },
    _atrule: function _atrule(rule) {
      if (lastSelector) {
        next._rule();

        lastSelector = 0;
      }

      next._atrule(rule);
    },
    rule: function rule(selector) {
      if (selector !== lastSelector) {
        if (lastSelector) next._rule();
        next.rule(selector);
        lastSelector = selector;
      }
    }
  };
}

function global(x) {
  return ':global(' + x + ')';
}

function kv(k, v, o) {
  o = {};
  o[k] = v;
  return o;
}

function at(rule, params, block) {
  if (arguments.length < 3) {
    // inner curry!
    var _at = at.bind.apply(at, [null].concat([].slice.call(arguments, 0))); // So that it can be used as a key in an ES6 object literal.


    _at.toString = function () {
      return '@' + rule + ' ' + params;
    };

    return _at;
  } else return kv('@' + rule + ' ' + params, block);
}

function j2c() {
  // the buffer that accumulates the output. Initialized in `$sink.i()`
  var buf, _err; // the bottom of the 'codegen' stream. Mirrors the `$filter` plugin API.


  var $sink = {
    init: function init() {
      buf = [], _err = [];
    },
    done: function done(raw) {
      if (_err.length != 0) throw new Error('j2c error(s): ' + JSON.stringify(_err, null, 2) + 'in context:\n' + buf.join(''));
      return raw ? buf : buf.join('');
    },
    err: function err(msg) {
      _err.push(msg);

      buf.push('/* +++ ERROR +++ ' + msg + ' */\n');
    },
    atrule: function atrule(rule, kind, param, takesBlock) {
      buf.push(rule, param && ' ', param, takesBlock ? ' {' : ';', _instance.endline);
    },
    // close atrule
    _atrule: function _atrule() {
      buf.push('}', _instance.endline);
    },
    rule: function rule(selector) {
      buf.push(selector, ' {', _instance.endline);
    },
    // close rule
    _rule: function _rule() {
      buf.push('}', _instance.endline);
    },
    decl: function decl(prop, value) {
      buf.push(prop, prop && ':', value, ';', _instance.endline);
    }
  }; // holds the `$filter` and `$at` handlers

  var $filters = [closeSelectors];
  var $atHandlers = []; // the public API (see the main docs)

  var _instance = {
    at: at,
    global: global,
    kv: kv,
    names: {},
    endline: '\n',
    suffix: '__j2c-' + // 128 bits of randomness
    Math.floor(Math.random() * 0x100000000).toString(36) + '-' + Math.floor(Math.random() * 0x100000000).toString(36) + '-' + Math.floor(Math.random() * 0x100000000).toString(36) + '-' + Math.floor(Math.random() * 0x100000000).toString(36),
    $plugins: [],
    sheet: function sheet(tree) {
      var emit = _createOrRetrieveStream(0);

      emit.init();
      rules(_walkers[0], emit, '', // prefix
      tree, 1, // local, by default
      0 // nesting depth
      );
      return emit.done();
    },
    inline: function inline(tree, options) {
      var emit = _createOrRetrieveStream(1);

      emit.init();
      declarations(_walkers[1], emit, '', // prefix
      tree, !(options && options.global) // local, by default
      );
      return emit.done();
    }
  }; // The `state` (for the core functions) / `walker` (for the plugins) tables.

  var _walkers = [// for j2c.sheet
  {
    // helpers for locaizing class and animation names
    localizeReplacer: _localizeReplacer,
    // second argument to String.prototype.replace
    localize: _localize,
    // mangles local names
    names: _instance.names,
    // local => mangled mapping
    $atHandlers: $atHandlers,
    // extra at-rules
    // The core walker methods, to be provided to plugins
    atrule: atRules,
    decl: declarations,
    rule: rules
  }, // likewise, for j2c.inline (idem with `$a`, `a` and `s` removed)
  {
    localizeReplacer: _localizeReplacer,
    localize: _localize,
    names: _instance.names,
    decl: declarations
  }]; // inner helpers

  var _use = flatIter(function (plugin) {
    // `~n` is falsy for `n === -1` and truthy otherwise.
    // Works well to turn the  result of `a.indexOf(x)`
    // into a value that reflects the presence of `x` in
    // `a`.
    if (~_instance.$plugins.indexOf(plugin)) return;

    _instance.$plugins.push(plugin);

    if (type.call(plugin) === FUNCTION) plugin = plugin(_instance);
    if (!plugin) return;
    flatIter(function (filter) {
      $filters.push(filter);
    })(plugin.$filter || emptyArray);
    flatIter(function (handler) {
      $atHandlers.push(handler);
    })(plugin.$at || emptyArray);
    defaults(_instance.names, plugin.$names || emptyObject);

    _use(plugin.$plugins || emptyArray);

    $sink = plugin.$sink || $sink;
    defaults(_instance, plugin);
  });

  var _streams = [];
  /**
   * returns the codegen streams, creating them if necessary
   * @param
   */

  function _createOrRetrieveStream(inline) {
    // build the stream processors if needed
    if (!_streams.length) {
      // append the $sink as the ultimate filter
      $filters.push(function (_, inline) {
        return inline ? {
          init: $sink.init,
          decl: $sink.decl,
          done: $sink.done,
          err: $sink.err
        } : $sink;
      });

      for (var i = 0; i < 2; i++) {
        // 0 for j2c.sheet, 1 for j2c.inline
        for (var j = $filters.length; j--;) {
          _streams[i] = freeze(defaults($filters[j](_streams[i], !!i), _streams[i]));
        }
      }
    }

    return _streams[inline];
  }
  /**
   * Returns a localized version of a given name.
   * Registers the pair in `instnace.name` if needed.
   *
   * @param {string} name - the name to localize
   * @return {string} - the localized version
   */


  function _localize(name) {
    if (!_instance.names[name]) _instance.names[name] = name + _instance.suffix;
    return _instance.names[name].match(/^\S+/);
  }
  /**
   * Used as second argument for str.replace(localizeRegex, replacer)
   * `ignore`, `global` and `(dot, name)` are mutually exclusive
   *
   * @param {string} match - the whole match (ignored)
   * @param {string|null} ignore - a comment or a string literal
   * @param {string|null} global - a global name
   * @param {string|null} dot - either '.' for a local class name or the empty string otherwise
   * @param {string|null} name - the name to localize
   * @return {string}
   */


  function _localizeReplacer(match, ignore, global$$1, dot, name) {
    return ignore || global$$1 || dot + _localize(name);
  }

  _use(emptyArray.slice.call(arguments));

  return _instance;
}

var j2c_commonjs = j2c;

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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
} // @ts-check

/**
 * @typedef {object} StyleObject 
 */

/**
 * Centers an item absolutely within relative parent.
 * @param {number} [offset=0] 
 * @returns {StyleObject}
 */


var fit = function fit() {
  var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var offsetPx = offset + "px";
  return {
    position: "absolute",
    top: offsetPx,
    right: offsetPx,
    bottom: offsetPx,
    left: offsetPx
  };
};
/**
 * Breaks off a line with ... unless lines is "none"
 * @param {number|"none"} lines 
 * @param {number} lineHeight 
 * @param {string} [unit=px]
 * @example
 * // max 1 line, 16px high
 * mixin.ellipsis(1, 16)
 * @example 
 * // max 2 lines, 2.6em high
 * mixin.ellipsis(2, 1.3, "em")
 * @returns {StyleObject} 
 */


var ellipsis = function ellipsis(lines, lineHeight) {
  var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "px";

  if (lines === "none") {
    return {
      textOverflow: "initial",
      overflow: "initial",
      display: "block",
      height: "auto",
      maxHeight: "none",
      whiteSpace: "normal"
    };
  }

  return [{
    "@supports (-webkit-line-clamp: 2)": lines !== undefined ? {
      "-webkit-line-clamp": lines,
      "-webkit-box-orient": "vertical",
      display: "-webkit-box",
      wordBreak: "break-word"
    } : undefined
  }, _objectSpread({
    overflow: "hidden",
    textOverflow: "ellipsis",
    textRendering: "auto"
  }, lineHeight !== undefined ? {
    maxHeight: lines * lineHeight + unit
  } : undefined, lineHeight === 1 ? {
    wordWrap: "nowrap"
  } : undefined)];
};
/**
 * Clears float.
 * @returns {StyleObject} 
 */


var clearfix = function clearfix() {
  return {
    "&:after": {
      content: "\"\"",
      display: "table",
      clear: "both"
    }
  };
};
/**
 * Creates sticky headers in a scrollable list.
 * Does not work in IE 11, Edge < 16.
 * @param {number} [zIndex=1] 
 * @returns {StyleObject} 
 */


var sticky = function sticky() {
  var zIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return {
    position: "sticky",
    top: 0,
    zIndex: zIndex
  };
};
/**
 * Creates a transition with presets
 * @param {string} [properties=all]
 * @param {string} [duration=".18s"] 
 * @param {string} [curve=ease-out] 
 * @example
 * mixin.defaultTransition("opacity", vars.animation_duration)
 * @returns {StyleObject} 
 */


var defaultTransition = function defaultTransition() {
  var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "all";
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ".18s";
  var curve = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "ease-out";
  return {
    transitionDelay: "0ms",
    transitionDuration: duration,
    transitionTimingFunction: curve,
    transitionProperty: properties
  };
};

var mixin = {
  clearfix: clearfix,
  defaultTransition: defaultTransition,
  ellipsis: ellipsis,
  fit: fit,
  sticky: sticky
};

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}

var j2cPluginPrefixBrowser_commonjs = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true
  }); // Derived from Lea Verou's PrefixFree

  var allStyles;
  var styleAttr;
  var styleElement;
  var supportedProperty;
  var supportedDecl;

  function init() {
    allStyles = getComputedStyle(document.documentElement, null);
    styleAttr = document.createElement('div').style;
    styleElement = document.documentElement.appendChild(document.createElement('style'));
    supportedDecl = _supportedDecl;
    supportedProperty = _supportedProperty;

    if ('zIndex' in styleAttr && !('z-index' in styleAttr)) {
      // Some browsers like it dash-cased, some camelCased, most like both.
      supportedDecl = function supportedDecl(property, value) {
        return _supportedDecl(camelCase(property), value);
      };

      supportedProperty = function supportedProperty(property) {
        return _supportedProperty(camelCase(property));
      };
    }
  }

  function finalize() {
    if (typeof document !== 'undefined') document.documentElement.removeChild(styleElement); // `styleAttr` is used at run time via `supportedProperty()`
    // `allStyles` and `styleElement` can be displosed of after initialization.

    allStyles = styleElement = null;
  } // Helpers, in alphabetic order


  function camelCase(str) {
    return str.replace(/-([a-z])/g, function ($0, $1) {
      return $1.toUpperCase();
    }).replace('-', '');
  }

  function deCamelCase(str) {
    return str.replace(/[A-Z]/g, function ($0) {
      return '-' + $0.toLowerCase();
    });
  }

  function _supportedDecl(property, value) {
    styleAttr[property] = '';
    styleAttr[property] = value;
    return !!styleAttr[property];
  }

  function supportedMedia(property, value) {
    styleElement.textContent = '@media (' + property + ':' + value + '){}'; // The !!~indexOf trick. False for -1, true otherwise.

    return !!~styleElement.sheet.cssRules[0].cssText.indexOf(value);
  }

  function _supportedProperty(property) {
    return property in styleAttr;
  }

  function supportedRule(selector) {
    styleElement.textContent = selector + '{}';
    return !!styleElement.sheet.cssRules.length;
  } // Derived from Lea Verou's PrefixFree
  // TODO: http://caniuse.com/#feat=css-media-resolution


  function detectAtrules(fixers) {
    if (fixers.prefix === '') return;
    var atrules = {
      'keyframes': 'name',
      'viewport': null,
      'document': 'regexp(".")'
    }; // build a map of {'@ruleX': '@-prefix-ruleX'}

    for (var atrule in atrules) {
      var test = atrule + ' ' + (atrules[atrule] || '');

      for (var i = fixers.prefixes.length; i--;) {
        if (!supportedRule('@' + test) && supportedRule('@' + fixers.prefixes[i] + test)) {
          fixers.hasAtrules = true;
          fixers.atrules['@' + atrule] = '@' + fixers.prefixes[i] + atrule;
        }
      }
    } // Standard


    fixers.hasDppx = supportedMedia('resolution', '1dppx'); // Webkit

    fixers.hasPixelRatio = supportedMedia(fixers.prefix + 'device-pixel-ratio', '1'); // Opera

    fixers.hasPixelRatioFraction = supportedMedia(fixers.prefix + 'device-pixel-ratio', '1/1');

    if (fixers.hasPixelRatio || fixers.hasPixelRatioFraction) {
      fixers.properties['resolution'] = fixers.prefix + 'device-pixel-ratio';
      fixers.properties['min-resolution'] = fixers.prefix + 'min-device-pixel-ratio';
      fixers.properties['max-resolution'] = fixers.prefix + 'max-device-pixel-ratio';

      if (supportedMedia('min-' + fixers.prefix + 'device-pixel-ratio', '1')) {
        // Mozilla/Firefox tunred a vendor prefix into a vendor infix
        fixers.properties['min-resolution'] = 'min-' + fixers.prefix + 'device-pixel-ratio';
        fixers.properties['max-resolution'] = 'max-' + fixers.prefix + 'device-pixel-ratio';
      }
    }
  } // Derived from Lea Verou's PrefixFree


  function detectFunctions(fixers) {
    // Values that might need prefixing
    if (fixers.prefix === '') return;
    var functions = {
      'linear-gradient': {
        property: 'background-image',
        params: 'red, teal'
      },
      'calc': {
        property: 'width',
        params: '1px + 5%'
      },
      'element': {
        property: 'background-image',
        params: '#foo'
      },
      'cross-fade': {
        property: 'backgroundImage',
        params: 'url(a.png), url(b.png), 50%'
      }
    };
    functions['repeating-linear-gradient'] = functions['repeating-radial-gradient'] = functions['radial-gradient'] = functions['linear-gradient']; // build an array of prefixable functions

    for (var func in functions) {
      var test = functions[func],
          property = test.property,
          value = func + '(' + test.params + ')';

      if (!supportedDecl(property, value) && supportedDecl(property, fixers.prefix + value)) {
        // It's only supported with a prefix
        fixers.functions.push(func);
      }
    }
  } // Derived from Lea Verou's PrefixFree and Robin Frischmann's Inline Style Prefixer
  // TODO: http://caniuse.com/#feat=css-writing-mode
  // db of prop/value pairs whose values may need treatment.


  var keywords = [// `initial` applies to all properties and is thus handled separately.
  {
    props: ['cursor'],
    values: ['grab', 'grabbing', 'zoom-in', 'zoom-out']
  }, {
    props: ['display'],
    values: ['box', 'inline-box', 'flexbox', 'inline-flexbox', 'flex', 'inline-flex', 'grid', 'inline-grid']
  }, {
    props: ['position'],
    values: ['sticky']
  }, {
    props: ['width', 'column-width', 'height', 'max-height', 'max-width', 'min-height', 'min-width'],
    values: ['contain-floats', 'fill-available', 'fit-content', 'max-content', 'min-content']
  }]; // The flexbox zoo
  //
  // ## Specs:
  // - box     (2009/old):  https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/
  // - flexbox (2012/ie10): https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/
  // - flex    (final):     https://www.w3.org/TR/css-flexbox-1/

  var flex2009Props = {
    // ?align-content =>
    // ?align-self =>
    'align-items': 'box-align',
    'flex': 'box-flex',
    // https://css-tricks.com/snippets/css/a-guide-to-flexbox/#comment-371025,
    // ?flex-basis =>
    // !!flex-direction => box-direction + box-orient, covered in `plugin.js`
    'box-direction': 'box-direction',
    // we prepopulate the cache for the above case.
    'box-orient': 'box-orient',
    // !!flex-flow => flex-direction and/or flex-wrap, covered in `plugin.js`
    'flex-grow': 'box-flex',
    // https://compat.spec.whatwg.org/#propdef--webkit-box-flex
    // ?flex-shrink =>
    'flex-wrap': 'box-lines',
    'justify-content': 'box-pack',
    'order': 'box-ordinal-group' // https://css-tricks.com/snippets/css/a-guide-to-flexbox/#comment-371025

  };
  var flex2009Values = {
    // flex => box || only for display? handled in the code
    'flex-end': 'end',
    'flex-start': 'start',
    // inline-flex => inline-box || see flex
    'nowrap': 'single',
    'space-around': 'justify',
    'space-between': 'justify',
    'wrap': 'multiple',
    'wrap-reverse': 'multiple'
  };
  var flex2012Props = {
    'align-content': '-ms-flex-line-pack',
    'align-items': '-ms-flex-align',
    'align-self': '-ms-flex-item-align',
    // flex => -ms-flex
    'flex-basis': '-ms-preferred-size',
    // flex-direction => -ms-flex-direction
    // flex-flow => -ms-flex-flow
    'flex-grow': '-ms-flex-positive',
    'flex-shrink': '-ms-flex-negative',
    // flex-wrap => -ms-flex-wrap
    'justify-content': '-ms-flex-pack',
    'order': '-ms-flex-order'
  };
  var flex2012Values = {
    // flex => flexbox || only for display? handled in the code
    'flex-end': 'end',
    'flex-start': 'start',
    // inline-flex => inline-flexbox || see 'flex'
    // nowrap => nowrap
    'space-around': 'distribute',
    'space-between': 'justify' // wrap => wrap
    // wrap-reverse => wrap-reverse

  };

  function detectKeywords(fixers) {
    if (fixers.prefixes.length === 0) return; // build a map of {propertyI: {keywordJ: previxedKeywordJ, ...}, ...}

    for (var i = 0; i < keywords.length; i++) {
      var map = {},
          property = keywords[i].props[0]; // eslint-disable-next-line

      for (var j = 0, keyword; keyword = keywords[i].values[j]; j++) {
        for (var k = fixers.prefixes.length; k--;) {
          if (!supportedDecl(property, keyword) && supportedDecl(property, fixers.prefixes[k] + keyword)) {
            fixers.hasKeywords = true;
            map[keyword] = fixers.prefixes[k] + keyword;
          }
        }
      } // eslint-disable-next-line


      for (j = 0; property = keywords[i].props[j]; j++) {
        fixers.keywords[property] = map;
      }
    }

    if (fixers.keywords.display && fixers.keywords.display.flexbox && !supportedDecl('display', 'flex')) {
      // IE 10, Flexbox 2012
      fixers.keywords.display.flex = fixers.keywords.display.flexbox;
      fixers.keywords.display['inline-flex'] = fixers.keywords.display['inline-flexbox'];
      fixers.flexbox2012 = true;

      for (k in flex2012Props) {
        fixers.properties[k] = flex2012Props[k];
        fixers.keywords[k] = flex2012Values;
      }
    } else if (fixers.keywords.display && fixers.keywords.display.box && !supportedDecl('display', 'flex') && !supportedDecl('display', fixers.prefix + 'flex')) {
      // old flexbox spec
      fixers.keywords.display.flex = fixers.keywords.display.box;
      fixers.keywords.display['inline-flex'] = fixers.keywords.display['inline-box'];
      fixers.flexbox2009 = true;

      for (k in flex2009Props) {
        fixers.properties[k] = fixers.prefix + flex2009Props[k];
        fixers.keywords[k] = flex2009Values;
      }
    } else if (fixers.keywords.display && !fixers.keywords.display.box && !fixers.keywords.display.flex && !fixers.keywords.display.flexbox && !supportedDecl('display', 'flex')) {
      fixers.jsFlex = true;
    }

    if (!supportedDecl('color', 'initial') && supportedDecl('color', fixers.prefix + 'initial')) {
      // `initial` does not use the `hasKeywords` branch, no need to set it to true.
      fixers.initial = fixers.prefix + 'initial';
    }
  } // Derived from Lea Verou's PrefixFree


  function detectPrefix(fixers) {
    var prefixCounters = {}; // Why are we doing this instead of iterating over properties in a .style object? Because Webkit.
    // 1. Older Webkit won't iterate over those.
    // 2. Recent Webkit will, but the 'Webkit'-prefixed properties are not enumerable. The 'webkit'
    //    (lower case 'w') ones are, but they don't `deCamelCase()` into a prefix that we can detect.

    function iteration(property) {
      if (property.charAt(0) === '-') {
        var prefix = property.split('-')[1]; // Count prefix uses

        prefixCounters[prefix] = ++prefixCounters[prefix] || 1;
      }
    } // Some browsers have numerical indices for the properties, some don't


    if (allStyles && allStyles.length > 0) {
      for (var i = 0; i < allStyles.length; i++) {
        iteration(allStyles[i]);
      }
    } else {
      for (var property in allStyles) {
        iteration(deCamelCase(property));
      }
    }

    var prefixes = [];

    for (var p in prefixCounters) prefixes.push(p);

    prefixes.sort(function (a, b) {
      return prefixCounters[b] - prefixCounters[a];
    });
    fixers.prefixes = prefixes.map(function (p) {
      return '-' + p + '-';
    });
    fixers.prefix = fixers.prefixes[0] || ''; // Edge supports both `webkit` and `ms` prefixes, but `ms` isn't detected with the method above.
    // the selector comes from http://browserstrangeness.com/css_hacks.html

    if (supportedRule('_:-ms-lang(x), _:-webkit-full-screen')) fixers.prefixes.push('-ms-');
    fixers.Prefix = camelCase(fixers.prefix);
  } // Derived from Lea Verou's PrefixFree


  function detectSelectors(fixers) {
    var selector, prefixed;

    function prefixSelector(selector) {
      return selector.replace(/^::?/, function ($0) {
        return $0 + fixers.prefix;
      });
    }

    if (fixers.prefix === '') return;
    var selectors = {
      ':any-link': null,
      '::backdrop': null,
      ':fullscreen': null,
      //TODO sort out what changed between specs
      ':full-screen': ':fullscreen',
      //sigh
      '::placeholder': null,
      ':placeholder': '::placeholder',
      '::input-placeholder': '::placeholder',
      ':input-placeholder': '::placeholder',
      ':read-only': null,
      ':read-write': null,
      '::selection': null
    }; // builds an array of selectors that need a prefix.

    for (selector in selectors) {
      prefixed = prefixSelector(selector);

      if (!supportedRule(selectors[selector] || selector) && supportedRule(prefixed)) {
        fixers.hasSelectors = true;
        fixers.selectorList.push(selectors[selector] || selector);
        fixers.selectorMap[selectors[selector] || selector] = prefixed;
      }
    }
  }

  function detectWebkitCompat(fixers) {
    if (!supportedDecl('background-clip', 'text') && supportedDecl('-webkit-background-clip', 'text')) fixers.WkBCTxt = true;
    ['background-clip', 'text-fill-color', 'text-stroke-color', 'text-stroke-width', 'text-stroke'].forEach(function (prop) {
      if (!supportedProperty(prop) && supportedProperty('-webkit-' + prop)) fixers.properties[prop] = '-webkit-' + prop;
    });
  }

  function blankFixers() {
    return {
      atrules: {},
      hasAtrules: false,
      hasDppx: null,
      hasKeywords: false,
      hasPixelRatio: false,
      hasPixelRatioFraction: false,
      hasSelectors: false,
      hasValues: false,
      fixAtMediaParams: null,
      fixAtSupportsParams: null,
      fixProperty: null,
      fixSelector: null,
      fixValue: null,
      flexbox2009: false,
      flexbox2012: false,
      functions: [],
      initial: null,
      jsFlex: false,
      keywords: {},
      placeholder: null,
      prefix: '',
      prefixes: [],
      Prefix: '',
      properties: {},
      selectorList: [],
      selectorMap: {},
      valueProperties: {
        'transition': 1,
        'transition-property': 1,
        'will-change': 1
      },
      WkBCTxt: false // -webkit-background-clip: text

    };
  }

  function browserDetector(fixers) {
    // add the required data to the fixers object.
    init();
    detectPrefix(fixers);
    detectSelectors(fixers);
    detectAtrules(fixers);
    detectKeywords(fixers);
    detectFunctions(fixers);
    detectWebkitCompat(fixers);
    finalize();
  }

  var emptySet = {};
  var valueTokenizer = /[(),]|\/\*[\s\S]*?\*\//g;
  /**
   * For properties whose values are also properties, this will split a coma-separated
   * value list into individual values, ignoring comas in comments and in
   * functions(parameter, lists).
   *
   * @param {string} selector
   * @return {string[]}
   */

  function splitValue(value) {
    var indices = [],
        res = [],
        inParen = 0,
        o;
    /*eslint-disable no-cond-assign*/

    while (o = valueTokenizer.exec(value)) {
      /*eslint-enable no-cond-assign*/
      switch (o[0]) {
        case '(':
          inParen++;
          break;

        case ')':
          inParen--;
          break;

        case ',':
          if (inParen) break;
          indices.push(o.index);
      }
    }

    for (o = indices.length; o--;) {
      res.unshift(value.slice(indices[o] + 1));
      value = value.slice(0, indices[o]);
    }

    res.unshift(value);
    return res;
  }

  function makeDetector(before, targets, after) {
    return new RegExp(before + '(?:' + targets.join('|') + ')' + after);
  }

  function makeLexer(before, targets, after) {
    return new RegExp("\"(?:\\\\[\\S\\s]|[^\"])*\"|'(?:\\\\[\\S\\s]|[^'])*'|\\/\\*[\\S\\s]*?\\*\\/|" + before + '((?:' + targets.join('|') + '))' + after, 'gi');
  } // declarations
  // ------------
  // function trim(s) {
  //   return s.replace(/^\s*(.*?)\s*$/, '$1')
  // }


  function fixDecl(fixers, emit, property, value) {
    if (typeof property !== 'string' || property.charAt(0) === '-') return emit(property, value);

    if (!(typeof value === 'string' || typeof value === 'number')) {
      return emit(fixers.properties[property] || fixers.fixProperty(property), value);
    }

    value = value + '';

    if (fixers.jsFlex) {
      if (property === 'display' && (value === 'flex' || value === 'inline-flex')) {
        emit('-js-display', value);
        return;
      }
    } else if (fixers.flexbox2009) {
      // TODO: flex only takes one value in the 2009 spec
      // if (property === 'flex') {
      //   value = trim(value)
      //   if (value === 'none' || value === 'initial') emit(property, '0')
      //   else if (value === 'auto') emit(property, '1')
      //   else emit(property, value.replace(/^(\d+)(?=\W|$).*/, '$1'))
      //   return
      // } else
      if (property === 'flex-flow') {
        value.split(/\s+/).forEach(function (v) {
          // recurse! The lack of `next.` is intentional.
          if (v.indexOf('wrap') > -1) fixDecl(fixers, emit, 'flex-wrap', v);else if (v !== '') fixDecl(fixers, emit, 'flex-direction', v);
        });
        return;
      } else if (property === 'flex-direction') {
        emit(fixers.properties['box-orient'], value.indexOf('column') > -1 ? 'block-axis' : 'inline-axis');
        emit(fixers.properties['box-direction'], value.indexOf('-reverse') > -1 ? 'reverse' : 'normal');
        return;
      }
    } // else if (fixers.flexbox2012) {
    //   // if (property === 'flex' && value.indexOf('calc(') !== -1) {
    //   //   var parsed =
    //   // }
    // }


    if (fixers.WkBCTxt && property === 'background-clip' && value === 'text') {
      emit('-webkit-background-clip', value);
    } else {
      emit(fixers.properties[property] || fixers.fixProperty(property), fixers.fixValue(value, property));
    }
  }

  function finalizeFixers(fixers) {
    var prefix = fixers.prefix; // properties
    // ----------

    fixers.fixProperty = fixers.fixProperty || function (prop) {
      var prefixed;
      return fixers.properties[prop] = supportedProperty(prop) || !supportedProperty(prefixed = prefix + prop) ? prop : prefixed;
    }; // selectors
    // ----------


    var selectorDetector = makeDetector('', fixers.selectorList, '(?:\\b|$|[^-])');
    var selectorMatcher = makeLexer('', fixers.selectorList, '(?:\\b|$|[^-])');

    var selectorReplacer = function selectorReplacer(match, selector) {
      return selector != null ? fixers.selectorMap[selector] : match;
    };

    fixers.fixSelector = function (selector) {
      return selectorDetector.test(selector) ? selector.replace(selectorMatcher, selectorReplacer) : selector;
    }; // values
    // ------
    // When gradients are supported with a prefix, convert angles to legacy
    // (from clockwise to trigonometric)


    var hasGradients = fixers.functions.indexOf('linear-gradient') > -1;
    var gradientDetector = /\blinear-gradient\(/;
    var gradientMatcher = /(^|\s|,|\()((?:repeating-)?linear-gradient\()\s*(-?\d*\.?\d*)deg/ig;

    var gradientReplacer = function gradientReplacer(match, delim, gradient, deg) {
      return delim + gradient + (90 - deg) + 'deg';
    }; // functions


    var hasFunctions = !!fixers.functions.length;
    var functionsDetector = makeDetector('(?:^|\\s|,|\\()', fixers.functions, '\\s*\\(');
    var functionsMatcher = makeLexer('(^|\\s|,|\\()', fixers.functions, '(?=\\s*\\()');

    function functionReplacer(match, $1, $2) {
      return $1 + prefix + $2;
    } // properties as values (for transition, ...)
    // No need to look for strings in these properties. We may insert prefixes in comments. Oh the humanity.


    var valuePropertiesMatcher = /^\s*([-\w]+)/gi;

    var valuePropertiesReplacer = function valuePropertiesReplacer(match, prop) {
      return fixers.properties[prop] || fixers.fixProperty(prop);
    };

    fixers.fixValue = function (value, property) {
      var res;
      if (fixers.initial != null && value === 'initial') return fixers.initial;
      if (fixers.hasKeywords && (res = (fixers.keywords[property] || emptySet)[value])) return res;
      res = value;

      if (fixers.valueProperties.hasOwnProperty(property)) {
        res = value.indexOf(',') === -1 ? value.replace(valuePropertiesMatcher, valuePropertiesReplacer) : splitValue(value).map(function (v) {
          return v.replace(valuePropertiesMatcher, valuePropertiesReplacer);
        }).join(',');
      }

      if (hasFunctions && functionsDetector.test(value)) {
        if (hasGradients && gradientDetector.test(value)) {
          res = res.replace(gradientMatcher, gradientReplacer);
        }

        res = res.replace(functionsMatcher, functionReplacer);
      }

      return res;
    }; // @media (resolution:...) {
    // -------------------------


    var resolutionMatcher = /((?:min-|max-)?resolution)\s*:\s*((?:\d*\.)?\d+)dppx/g;
    var resolutionReplacer = fixers.hasPixelRatio ? function (_, prop, param) {
      return fixers.properties[prop] + ':' + param;
    } : fixers.hasPixelRatioFraction ? function (_, prop, param) {
      return fixers.properties[prop] + ':' + Math.round(param * 10) + '/10';
    } : function (_, prop, param) {
      return prop + ':' + Math.round(param * 96) + 'dpi';
    };
    fixers.fixAtMediaParams = fixers.hasDppx !== false
    /*it may be null*/
    ? function (p) {
      return p;
    } : function (params) {
      return params.indexOf('reso') !== -1 ? params.replace(resolutionMatcher, resolutionReplacer) : params;
    }; // @supports ... {
    // ---------------

    var supportsProp, supportsValue;

    var atSupportsParamsFixer = function atSupportsParamsFixer(property, value) {
      supportsProp = property;
      supportsValue = value;
    }; // regexp built by scripts/regexps.js


    var atSupportsParamsMatcher = /\(\s*([-\w]+)\s*:\s*((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*)/g;

    function atSupportsParamsReplacer(match, prop, value) {
      fixDecl(fixers, atSupportsParamsFixer, prop, value);
      return '(' + supportsProp + ':' + supportsValue;
    }

    fixers.fixAtSupportsParams = function (params) {
      return params.replace(atSupportsParamsMatcher, atSupportsParamsReplacer);
    };
  }

  var commonFixers;

  function initBrowser() {
    // exported for the test suite
    commonFixers = blankFixers();
    if (typeof getComputedStyle === 'function') browserDetector(commonFixers);
    finalizeFixers(commonFixers);
  }

  initBrowser();

  function prefixPlugin() {
    var fixers = commonFixers;
    var cache = [];
    return {
      set: {
        setPrefixDb: function setPrefixDb(f) {
          if (cache.indexOf(f) === -1) {
            finalizeFixers(f);
            cache.push(f);
          }

          fixers = f;
          return prefixPlugin;
        }
      },
      filter: function filter(next) {
        return {
          atrule: function atrule(rule, kind, params, hasBlock) {
            next.atrule(fixers.hasAtrules && fixers.atrules[rule] || rule, kind, rule === '@media' ? fixers.fixAtMediaParams(params) : rule === '@supports' ? fixers.fixAtSupportsParams(params) : params, hasBlock);
          },
          decl: function decl(property, value) {
            fixDecl(fixers, next.decl, property, value);
          },
          rule: function rule(selector) {
            next.rule(fixers.hasSelectors ? fixers.fixSelector(selector) : selector);
          }
        };
      }
    };
  }

  exports.prefixPlugin = prefixPlugin;
});
unwrapExports(j2cPluginPrefixBrowser_commonjs);
var j2cPluginPrefixBrowser_commonjs_1 = j2cPluginPrefixBrowser_commonjs.prefixPlugin; // @ts-ignore

var j2c$1 = new j2c_commonjs(j2cPluginPrefixBrowser_commonjs_1);
var ID_REGEX = /[^a-z0-9\\-]/g;
/**
 * @typedef {object} StyleObject 
 * @typedef {(selector: string|Array<string>, vars: object, customVars?: object) => Array<object>} StyleFn
 */

/**
 * Adds styles to head.
 * @param {string} id - Identifier, used as HTMLElement id for the attached <style></style> element.
 * @param {...Array<StyleObject>} styles - List of style Objects
 * @returns {void}
 */

var add = function add(id) {
  for (var _len = arguments.length, styles = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    styles[_key - 1] = arguments[_key];
  }

  return addToDocument.apply(void 0, [{
    id: id
  }].concat(styles));
};
/**
 * Removes a style from head.
 * @param {string} id - Identifier, used as HTMLElement id for the attached <style></style> element.
 * @returns {void}
 */


var remove = function remove(id) {
  if (isServer) return;

  if (id) {
    var old = document.getElementById(id);

    if (old && old.parentNode) {
      old.parentNode.removeChild(old);
    }
  }
};
/**
 * Adds styles to the head.
 * @param {object} params
 * @param {string} params.id - Identifier, used as HTMLElement id for the attached <style></style> element.
 * @param {object} [params.document] - Document reference.
 * @param {...Array<StyleObject>} styles - List of style Objects.
 * @returns {void}
 */


var addToDocument = function addToDocument(_ref) {
  var id = _ref.id,
      document = _ref.document;
  if (isServer) return;
  var safeId = id.replace(ID_REGEX, "_");
  remove(safeId);
  var documentRef = document || window.document;
  var styleEl = documentRef.createElement("style");

  if (safeId) {
    styleEl.setAttribute("id", safeId);
  }

  for (var _len2 = arguments.length, styles = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    styles[_key2 - 1] = arguments[_key2];
  }

  styles.forEach(function (styles) {
    // each style returns a list
    if (Object.keys(styles).length) {
      styles.forEach(function (style) {
        var scoped = {
          "@global": style
        };
        var sheet = j2c$1.sheet(scoped);
        styleEl.appendChild(documentRef.createTextNode(sheet));
      });
    }
  });
  documentRef.head.appendChild(styleEl);
};
/**
 * 
 * @param {object} params
 * @param {StyleObject|Array<StyleObject>} params.styles
 * @param {string} [params.scope]
 * @returns {Array<StyleObject>}
 */


var wrapInScope = function wrapInScope(_ref2) {
  var styles = _ref2.styles,
      scope = _ref2.scope;
  return scope ? [_defineProperty({}, scope, styles)] : styles;
};
/**
 * Adds component styles to head.
 * @param {object} params
 * @param {Array<string>} params.selectors
 * @param {Array<StyleFn>} params.fns
 * @param {object} params.vars
 * @param {object} [params.customVars]
 * @param {string} [params.mediaQuery]
 * @param {string} [params.scope]
 * @returns {void}
 */


var addStyle = function addStyle(_ref4) {
  var selectors = _ref4.selectors,
      styleFns = _ref4.fns,
      vars = _ref4.vars,
      customVars = _ref4.customVars,
      mediaQuery = _ref4.mediaQuery,
      scope = _ref4.scope;
  var prefix = scope ? " " : "";
  var selector = prefix + selectors.join("");
  var styles = styleFns.map(function (fn) {
    return fn(selector, vars, customVars);
  }).filter(function (list) {
    return list.length > 0;
  });

  if (styles.length === 0) {
    return;
  }

  var id = selector.trim().replace(/^[^a-z]?(.*)/, "$1");
  add(id, wrapInScope({
    styles: wrapInScope({
      styles: styles,
      scope: scope
    }),
    scope: mediaQuery
  }));
};
/**
 * Returns a list of style objects for a component.
 * @param {object} params
 * @param {Array<string>} params.selectors
 * @param {Array<StyleFn>} params.fns
 * @param {object} params.vars - Style configuration variables
 * @param {object} [params.customVars] - Style configuration variables
 * @param {string} [params.mediaQuery] - Mediaquery string
 * @param {string} [params.scope] - Scope selector
 * @returns {Array<StyleObject>}
 */


var getStyle = function getStyle(_ref5) {
  var selectors = _ref5.selectors,
      styleFns = _ref5.fns,
      vars = _ref5.vars,
      customVars = _ref5.customVars,
      mediaQuery = _ref5.mediaQuery,
      scope = _ref5.scope;
  var prefix = scope ? " " : "";
  var selector = prefix + selectors.join("");
  var styles = styleFns.map(function (fn) {
    return fn(selector, vars, customVars);
  });
  return wrapInScope({
    styles: wrapInScope({
      styles: styles,
      scope: scope
    }),
    scope: mediaQuery
  });
};
/**
 * Adds component styles to head.
 * @param {string} selector 
 * @param {Array<StyleFn>} fns 
 * @param {object} vars - Style configuration variables
 */


var createAddStyle = function createAddStyle(selector, fns, vars) {
  return (
    /**
     * @param {string} [customSelector=""]
     * @param {object} customVars
     * @param {object} [scoping={}]
     * @param {string} [scoping.mediaQuery]
     * @param {string} [scoping.scope]
     * @returns {void}
     */
    function () {
      var customSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var customVars = arguments.length > 1 ? arguments[1] : undefined;

      var _ref6 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          mediaQuery = _ref6.mediaQuery,
          scope = _ref6.scope;

      return addStyle({
        selectors: [selector, customSelector],
        fns: fns,
        vars: vars,
        customVars: customVars,
        mediaQuery: mediaQuery,
        scope: scope
      });
    }
  );
};
/**
 * Returns styles for a component.
 * @param {string} selector 
 * @param {Array<StyleFn>} fns 
 * @param {object} vars - Style configuration variables
 */


var createGetStyle = function createGetStyle(selector, fns, vars) {
  return (
    /**
     * @param {string} [customSelector=""]
     * @param {object} customVars
     * @param {object} [scoping={}]
     * @param {string} [scoping.mediaQuery]
     * @param {string} [scoping.scope]
     * @returns {Array<StyleObject>}
     */
    function () {
      var customSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var customVars = arguments.length > 1 ? arguments[1] : undefined;

      var _ref7 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          mediaQuery = _ref7.mediaQuery,
          scope = _ref7.scope;

      return [getStyle({
        selectors: [selector, customSelector],
        fns: fns,
        vars: vars,
        customVars: customVars,
        mediaQuery: mediaQuery,
        scope: scope
      })];
    }
  );
};

var styler = {
  add: add,
  addStyle: addStyle,
  addToDocument: addToDocument,
  createAddStyle: createAddStyle,
  createGetStyle: createGetStyle,
  getStyle: getStyle,
  remove: remove
}; // @ts-check

/**
 * @typedef {(selector: string, vars: object, customVars?: object) => Array<object>} StyleFn
 * @typedef {{[s: string]: StyleFn}} StyleCollection
 */

/**
 * Wraps an object with a selector.
 * @param {string} selector 
 * @param {object} o 
 * @returns {object}
 */

var sel = function sel(selector, o) {
  return _defineProperty({}, selector, o);
};
/**
 * Creates a right-to-left selector.
 * @param {string} selector
 * @returns {string}
 */


var selectorRTL = function selectorRTL(selector) {
  return "*[dir=rtl] ".concat(selector, ", .pe-rtl ").concat(selector);
};
/**
 * Creates a rgba CSS color string.
 * @param {string} colorStr 
 * @param {number} opacity 
 * @returns {string}
 */


var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(".concat(colorStr, ", ").concat(opacity, ")");
};
/**
 * @param {object} params
 * @param {string} [params.selector]
 * @param {string} [params.scopedSelector]
 * @param {StyleCollection} [params.varFns]
 * @param {StyleCollection} [params.customVarFns]
 * @param {StyleFn} [params.superStyle]
 * @param {(_:any) => StyleCollection} [params.varMixin]
 * @param {StyleCollection} [params.componentVars]
 * @param {StyleCollection} [params.customVars]
 * @returns {Array<object>}
 */


var createStyle = function createStyle(_ref2) {
  var varFns = _ref2.varFns,
      customVarFns = _ref2.customVarFns,
      superStyle = _ref2.superStyle,
      varMixin = _ref2.varMixin,
      selector = _ref2.selector,
      scopedSelector = _ref2.scopedSelector,
      _ref2$componentVars = _ref2.componentVars,
      componentVars = _ref2$componentVars === void 0 ? {} : _ref2$componentVars,
      customVars = _ref2.customVars;

  var allVars = _objectSpread({}, componentVars, customVars);

  var currentVars = customVars ? customVars : allVars;

  var general_styles = componentVars.general_styles,
      otherVars = _objectWithoutProperties(componentVars, ["general_styles"]);

  var baseLayout = superStyle !== undefined ? customVars !== undefined ? superStyle(selector, componentVars, customVars) : superStyle(selector, otherVars) : [];

  var fns = _objectSpread({}, customVars ? customVarFns : {}, varFns);

  return baseLayout.concat(Object.keys(varMixin(currentVars)).map(function (v) {
    return fns && fns[v] !== undefined ? fns[v](scopedSelector, allVars) : null;
  }).filter(function (s) {
    return s;
  }));
};
/**
 * 
 * @param {object} params
 * @param {StyleCollection} [params.varFns]
 * @param {StyleCollection} [params.customVarFns]
 * @param {StyleFn} [params.superLayout]
 * @param {(_:any) => StyleCollection} [params.varMixin]
 * @returns {StyleFn}
 */


var createLayout = function createLayout(_ref3) {
  var varFns = _ref3.varFns,
      customVarFns = _ref3.customVarFns,
      superLayout = _ref3.superLayout,
      _ref3$varMixin = _ref3.varMixin,
      varMixin = _ref3$varMixin === void 0 ? function (o) {
    return o;
  } : _ref3$varMixin;
  return (
    /**
     * @param {string} selector
     * @param {object} componentVars
     * @param {object} [customVars]
     * @returns {Array<object>}
     */
    function (selector, componentVars, customVars) {
      return createStyle({
        varFns: varFns,
        customVarFns: customVarFns,
        superStyle: superLayout,
        varMixin: varMixin,
        selector: selector,
        scopedSelector: selector,
        componentVars: componentVars,
        customVars: customVars
      });
    }
  );
};
/**
 * 
 * @param {object} params
 * @param {string} [params.selector]
 * @param {string} [params.scopedSelector]
 * @param {object} [params.componentVars]
 * @param {object} [params.customVars]  
 * @param {StyleFn} [params.superColor]
 * @param {StyleCollection} [params.varFns]
 * @param {(_:any) => StyleCollection} [params.varMixin]
 * @returns {Array<object>}
 */


var createColorStyle = function createColorStyle(_ref4) {
  var selector = _ref4.selector,
      scopedSelector = _ref4.scopedSelector,
      componentVars = _ref4.componentVars,
      customVars = _ref4.customVars,
      varFns = _ref4.varFns,
      superColor = _ref4.superColor,
      varMixin = _ref4.varMixin;
  return createStyle({
    varFns: varFns,
    superStyle: superColor,
    varMixin: varMixin,
    selector: selector,
    scopedSelector: scopedSelector,
    componentVars: componentVars,
    customVars: customVars
  });
};
/**
 * 
 * @param {object} params 
 * @param {Array<string>} params.scopes
 * @param {string} params.selector
 * @param {boolean} params.isNoTouch
* @returns {string}
 */


var appendPseudoClass = function appendPseudoClass(_ref5) {
  var scopes = _ref5.scopes,
      selector = _ref5.selector,
      isNoTouch = _ref5.isNoTouch;
  return isNoTouch ? scopes.map(function (s) {
    return s + selector + ":hover";
  }).join(",") : scopes.map(function (s) {
    return s + selector;
  }).join(",");
};
/**
 * 
 * @param {object} params 
 * @param {Array<string>} params.scopes
 * @param {string} params.selector
 * @param {boolean} [params.isNoTouch]
 * @returns {string}
 */


var createScopedSelector = function createScopedSelector(_ref6) {
  var scopes = _ref6.scopes,
      selector = _ref6.selector,
      _ref6$isNoTouch = _ref6.isNoTouch,
      isNoTouch = _ref6$isNoTouch === void 0 ? false : _ref6$isNoTouch;
  return selector.split(/\s*,\s*/).map(function (s) {
    return appendPseudoClass({
      scopes: scopes,
      selector: s,
      isNoTouch: isNoTouch
    });
  }).join("");
};
/**
 * @typedef {object} ColorScopeObject
 * @property {Array<string>} scopes
 * @property {string} varFnName
 * @property {boolean} isNoTouch
 */

/**
 * @type {Array<ColorScopeObject>} colorScopes
 */


var colorScopes = [{
  // has/inside dark tone
  scopes: [".pe-dark-tone", ".pe-dark-tone "],
  varFnName: "darkTintFns",
  isNoTouch: false
}, {
  // normal, has/inside light tone
  scopes: ["", ".pe-light-tone", ".pe-light-tone "],
  varFnName: "lightTintFns",
  isNoTouch: false
}, {
  // has/inside dark tone
  scopes: [".pe-no-touch .pe-dark-tone "],
  varFnName: "darkTintHoverFns",
  isNoTouch: true
}, {
  // normal, has/inside light tone
  scopes: [".pe-no-touch ", ".pe-no-touch .pe-light-tone "],
  varFnName: "lightTintHoverFns",
  isNoTouch: true
}];
/**
 * 
 * @param {object} params
 * @param {object} [params.varFns]
 * @param {StyleFn} [params.superColor]
 * @param {(_:any) => StyleCollection} [params.varMixin]
 * @returns {StyleFn}
 */

var createColor = function createColor(_ref7) {
  var _ref7$varFns = _ref7.varFns,
      varFns = _ref7$varFns === void 0 ? {} : _ref7$varFns,
      superColor = _ref7.superColor,
      _ref7$varMixin = _ref7.varMixin,
      varMixin = _ref7$varMixin === void 0 ? function (o) {
    return o;
  } : _ref7$varMixin;
  return (
    /**
     * @param {string} selector
     * @param {object} componentVars
     * @param {object} [customVars]
     * @returns {Array<object>}
     */
    function (selector, componentVars, customVars) {
      return colorScopes.map(function (_ref8) {
        var scopes = _ref8.scopes,
            varFnName = _ref8.varFnName,
            isNoTouch = _ref8.isNoTouch;
        return createColorStyle({
          selector: selector,
          scopedSelector: createScopedSelector({
            scopes: scopes,
            selector: selector,
            isNoTouch: isNoTouch
          }),
          componentVars: componentVars,
          customVars: customVars,
          varFns: varFns[varFnName],
          superColor: superColor,
          varMixin: varMixin
        });
      });
    }
  );
}; // @ts-check
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

var classes$1 = {
  component: "pe-shadow",
  // elements
  bottomShadow: "pe-shadow__bottom",
  topShadow: "pe-shadow__top",
  // states
  animated: "pe-shadow--animated",
  depth_n: "pe-shadow--depth-"
};

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

var _createShadowForSelector = function _createShadowForSelector(which, depth) {
  return function (selector, vars) {
    return sel(selector, _defineProperty$1({}, " .pe-shadow__".concat(which, ".pe-shadow--depth-").concat(depth), {
      boxShadow: vars["shadow_".concat(which, "_depth_").concat(depth)]
    }));
  };
};
/**
 * @param {string} selector 
 * @param {object} vars 
 * @param {number} depth 
 * @param {"top"|"bottom"} which 
 */


var _createShadow = function _createShadow(selector, vars, depth, which) {
  return sel(selector, _defineProperty$1({}, " .pe-shadow__".concat(which), {
    boxShadow: vars["shadow_".concat(which, "_depth_").concat(depth)]
  }));
};
/**
 * @param {string} selector 
 * @param {object} vars 
 * @param {number} depth
 * @returns {object}
 */


var shadow = function shadow(selector, vars, depth) {
  return [_createShadow(selector, vars, depth, "top"), _createShadow(selector, vars, depth, "bottom")];
};
/**
 * @param {string} selector 
 * @param {object} vars 
 * @returns {object}
 */


var shadow_depth = function shadow_depth(selector, vars) {
  return vars.shadow_depth !== undefined ? shadow(selector, vars, vars.shadow_depth) : null;
};

var sharedVarFns = {
  shadow_depth: shadow_depth
};

var varFns = _extends({}, {
  general_styles: function general_styles(selector, vars) {
    return [sel(selector, [mixin.fit(), shadow(selector, vars, 1), {
      borderRadius: "inherit",
      pointerEvents: "none",
      " .pe-shadow__bottom, .pe-shadow__top": [mixin.fit(), {
        borderRadius: "inherit"
      }]
    }])];
  },
  transition: function transition(selector, vars) {
    return [sel(selector, {
      ".pe-shadow--animated": {
        " .pe-shadow__bottom, .pe-shadow__top": {
          transition: vars.transition
        }
      }
    })];
  },
  shadow_depth: shadow_depth
}, [0, 1, 2, 3, 4, 5].reduce(function (acc, depth) {
  return acc["shadow_top_depth_".concat(depth)] = _createShadowForSelector("top", depth), acc["shadow_bottom_depth_".concat(depth)] = _createShadowForSelector("bottom", depth), acc;
}, {}));

var layout = createLayout({
  varFns: varFns
});
var sharedVars = {
  shadow_top_depth_0: "none",
  shadow_bottom_depth_0: "none",
  shadow_top_depth_1: "none",
  shadow_bottom_depth_1: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
  shadow_top_depth_2: "0 2px 2px 0 rgba(0, 0, 0, 0.2)",
  shadow_bottom_depth_2: "0 6px 10px 0 rgba(0, 0, 0, 0.3)",
  shadow_top_depth_3: "0 11px 7px 0 rgba(0, 0, 0, 0.19)",
  shadow_bottom_depth_3: "0 13px 25px 0 rgba(0, 0, 0, 0.3)",
  shadow_top_depth_4: "0 14px 12px 0 rgba(0, 0, 0, 0.17)",
  shadow_bottom_depth_4: "0 20px 40px 0 rgba(0, 0, 0, 0.3)",
  shadow_top_depth_5: "0 17px 17px 0 rgba(0, 0, 0, 0.15)",
  shadow_bottom_depth_5: "0 27px 55px 0 rgba(0, 0, 0, 0.3)",
  // theme vars
  shadow_depth: undefined
};

var vars$1 = _objectSpread$1({
  /**
   * Generate general styles, not defined by variables
   */
  general_styles: true,
  transition: "box-shadow ".concat(vars.animation_duration, " ease-out")
}, sharedVars); // @ts-check


var fns = [layout];
var selector = ".".concat(classes$1.component);
styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});
var classes$2 = {
  component: "pe-text-button",
  super: "pe-button",
  row: "pe-button-row",
  // elements      
  content: "pe-button__content",
  label: "pe-button__label",
  textLabel: "pe-button__text-label",
  wash: "pe-button__wash",
  dropdown: "pe-button__dropdown",
  // states      
  border: "pe-button--border",
  contained: "pe-button--contained",
  disabled: "pe-button--disabled",
  dropdownClosed: "pe-button--dropdown-closed",
  dropdownOpen: "pe-button--dropdown-open",
  extraWide: "pe-button--extra-wide",
  hasDropdown: "pe-button--dropdown",
  highLabel: "pe-button--high-label",
  inactive: "pe-button--inactive",
  raised: "pe-button--raised",
  selected: "pe-button--selected",
  separatorAtStart: "pe-button--separator-start"
};

function _defineProperty$2(obj, key, value) {
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

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
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

  return _extends$1.apply(this, arguments);
}

function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty$2(target, key, source[key]);
    });
  }

  return target;
}

var varFns$1 = {
  general_styles: function general_styles(selector) {
    return [sel(selector, {
      userSelect: "none",
      "-moz-user-select": "none",
      outline: "none",
      padding: 0,
      textDecoration: "none",
      textAlign: "center",
      cursor: "pointer",
      ".pe-button--selected, &.pe-button--disabled, &.pe-button--inactive": {
        cursor: "default",
        pointerEvents: "none"
      },
      " .pe-button__content": {
        position: "relative",
        borderRadius: "inherit"
      },
      " .pe-button__label": {
        position: "relative",
        display: "block",
        borderRadius: "inherit",
        pointerEvents: "none"
      },
      " .pe-button__wash": [mixin.fit(), {
        zIndex: 0,
        borderRadius: "inherit",
        pointerEvents: "none"
      }]
    }), {
      ".pe-button-row": {
        // prevent inline block style to add extra space:
        fontSize: 0,
        lineHeight: 0
      }
    }];
  },
  row_margin_h: function row_margin_h(selector, vars) {
    return [{
      ".pe-button-row": _defineProperty$2({
        margin: "0 -".concat(vars.row_margin_h, "px")
      }, " ".concat(selector), {
        margin: "0 ".concat(vars.row_margin_h, "px")
      })
    }];
  }
};
var superLayout = createLayout({
  varFns: varFns$1
});

var _border = function border(selector, vars, tint) {
  return sel(selector, {
    ":not(.pe-button--disabled)": {
      " .pe-button__content": {
        borderColor: vars["color_" + tint + "_border"]
      }
    }
  });
};

var generalFns = {
  general_styles: function general_styles() {
    return [];
  }
};
/**
 * @param {tint} tint 
 */

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty$2(_ref, "color_" + tint + "_text", function (selector, vars) {
    return [sel(selector, {
      ":not(.pe-button--disabled)": {
        "&, &:link, &:visited": {
          color: vars["color_" + tint + "_text"]
        }
      }
    })];
  }), _defineProperty$2(_ref, "color_" + tint + "_disabled_text", function (selector, vars) {
    return [sel(selector, {
      ".pe-button--disabled": {
        color: vars["color_" + tint + "_disabled_text"]
      }
    })];
  }), _defineProperty$2(_ref, "color_" + tint + "_background", function (selector, vars) {
    return [sel(selector, {
      ":not(.pe-button--disabled):not(.pe-button--selected)": {
        " .pe-button__content": {
          backgroundColor: vars["color_" + tint + "_background"]
        }
      }
    })];
  }), _defineProperty$2(_ref, "color_" + tint + "_active_background", function (selector, vars) {
    return [sel(selector, {
      ":not(.pe-button--disabled)": {
        ".pe-button--selected": {
          " .pe-button__content": {
            backgroundColor: vars["color_" + tint + "_active_background"]
          }
        }
      }
    })];
  }), _defineProperty$2(_ref, "color_" + tint + "_disabled_background", function (selector, vars) {
    return [sel(selector, {
      ".pe-button--disabled": {
        " .pe-button__content": {
          backgroundColor: vars["color_" + tint + "_disabled_background"]
        }
      }
    })];
  }), _defineProperty$2(_ref, "color_" + tint + "_border", function (selector, vars) {
    return [_border("".concat(selector, ".pe-button--border"), vars, tint)];
  }), _defineProperty$2(_ref, "border", function border(selector, vars) {
    return [_border(selector, vars, tint)];
  }), _defineProperty$2(_ref, "color_" + tint + "_active_border", function (selector, vars) {
    return [sel(selector, {
      ".pe-button--border.pe-button--selected": {
        " .pe-button__content": {
          borderColor: vars["color_" + tint + "_active_border"]
        }
      }
    })];
  }), _defineProperty$2(_ref, "color_" + tint + "_disabled_border", function (selector, vars) {
    return [sel(selector, {
      ".pe-button--border.pe-button--disabled": {
        " .pe-button__content": {
          borderColor: vars["color_" + tint + "_disabled_border"]
        }
      }
    })];
  }), _defineProperty$2(_ref, "color_" + tint + "_icon", function (selector, vars) {
    return [sel(selector, {
      " .pe-button__dropdown": {
        color: vars["color_" + tint + "_icon"]
      }
    })];
  }), _defineProperty$2(_ref, "color_" + tint + "_separator", function (selector, vars) {
    return [sel(selector, {
      ".pe-button--separator-start": {
        " .pe-button__content": {
          borderColor: vars["color_" + tint + "_separator"]
        }
      }
    })];
  }), _ref;
};
/**
 * @param {tint} tint 
 */


var hoverTintFns = function hoverTintFns(tint) {
  var _ref2;

  return _ref2 = {}, _defineProperty$2(_ref2, "color_" + tint + "_hover", function (selector, vars) {
    return [sel(selector, {
      ":not(.pe-button--disabled):not(.pe-button--selected)": {
        color: vars["color_" + tint + "_hover"]
      }
    })];
  }), _defineProperty$2(_ref2, "color_" + tint + "_hover_border", function (selector, vars) {
    return [sel(selector, {
      ":not(.pe-button--disabled):not(.pe-button--selected)": {
        " .pe-button__content": {
          borderColor: vars["color_" + tint + "_hover_border"]
        }
      }
    })];
  }), _defineProperty$2(_ref2, "color_" + tint + "_wash_background", function (selector, vars) {
    return [sel(selector, {
      ":not(.pe-button--disabled):not(.pe-button--selected)": {
        " .pe-button__wash": {
          backgroundColor: vars["color_" + tint + "_wash_background"]
        }
      }
    })];
  }), _defineProperty$2(_ref2, "color_" + tint + "_hover_background", function (selector, vars) {
    return [sel(selector, {
      ":not(.pe-button--disabled):not(.pe-button--selected)": {
        " .pe-button__content": {
          backgroundColor: vars["color_" + tint + "_hover_background"]
        }
      }
    })];
  }), _defineProperty$2(_ref2, "color_" + tint + "_hover_icon", function (selector, vars) {
    return [sel(selector, {
      " .pe-button__dropdown": {
        color: vars["color_" + tint + "_hover_icon"]
      }
    })];
  }), _ref2;
};

var lightTintFns = _objectSpread$2({}, generalFns, tintFns("light"));

var darkTintFns = _objectSpread$2({}, generalFns, tintFns("dark"));

var lightTintHoverFns = hoverTintFns("light");
var darkTintHoverFns = hoverTintFns("dark");
var superColor = createColor({
  varFns: {
    lightTintFns: lightTintFns,
    darkTintFns: darkTintFns,
    lightTintHoverFns: lightTintHoverFns,
    darkTintHoverFns: darkTintHoverFns
  }
});
/** 
 * @param {boolean} isRTL 
 */

var alignSide = function alignSide(isRTL) {
  return function () {
    return {
      ".pe-button--separator-start .pe-button__content": {
        borderStyle: isRTL ? "none solid none none" : "none none none solid"
      }
    };
  };
};

var alignLeft = alignSide(false);
var alignRight = alignSide(true);

var line_height_label_padding_v = function line_height_label_padding_v(selector, vars) {
  return sel(selector, {
    " .pe-button__dropdown": {
      minHeight: "calc((1em * ".concat(vars.line_height, ") + 2 * ").concat(vars.label_padding_v, "px)")
    }
  });
};

var outer_padding_v_label_padding_v = function outer_padding_v_label_padding_v(selector, vars) {
  return sel(selector, {
    ".pe-button--high-label": {
      padding: 0,
      " .pe-button__label": {
        padding: vars.outer_padding_v + vars.label_padding_v + "px 0"
      }
    }
  });
};

var line_height_outer_padding_v_label_padding_v = function line_height_outer_padding_v_label_padding_v(selector, vars) {
  return sel(selector, {
    ".pe-button--high-label": {
      " .pe-button__label, .pe-button__dropdown": {
        minHeight: "calc((1em * ".concat(vars.line_height, ") + 2 * ").concat(vars.outer_padding_v + vars.label_padding_v, "px)")
      }
    }
  });
};

var border_radius_button_group = function border_radius_button_group(selector, vars, isRTL) {
  var _peButton__content, _peButton__content2;

  return sel(selector, {
    " .pe-button__content": {
      borderRadius: vars.border_radius + "px"
    },
    ":not(:first-child)": {
      " .pe-button__content": (_peButton__content = {}, _defineProperty$2(_peButton__content, isRTL ? "borderTopRightRadius" : "borderTopLeftRadius", 0), _defineProperty$2(_peButton__content, isRTL ? "borderBottomRightRadius" : "borderBottomLeftRadius", 0), _peButton__content)
    },
    ":not(:last-child)": {
      " .pe-button__content": (_peButton__content2 = {}, _defineProperty$2(_peButton__content2, isRTL ? "borderTopLeftRadius" : "borderTopRightRadius", 0), _defineProperty$2(_peButton__content2, isRTL ? "borderBottomLeftRadius" : "borderBottomRightRadius", 0), _peButton__content2)
    }
  });
};

var _border$1 = function border(selector) {
  return sel(selector, {
    " .pe-button__wash, .pe-ripple": mixin.fit(-1),
    " .pe-button__content": {
      borderStyle: "solid"
    }
  });
};

var _border_width = function border_width(selector, vars) {
  return sel(selector, {
    " .pe-button__content": {
      borderWidth: vars.border_width + "px"
    },
    " .pe-button-group & + &": {
      marginLeft: -vars.border_width + "px"
    }
  });
};

var _contained = function contained(selector) {
  return sel(selector, {
    " .pe-button__wash": {
      display: "none"
    }
  });
};

var varFns$1$1 = _objectSpread$2({
  general_styles: function general_styles(selector) {
    return [sel(selector, [alignLeft(), {
      display: "inline-block",
      background: "transparent",
      border: "none",
      " .pe-button__content": {
        position: "relative",
        borderWidth: "1px",
        // default
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 0,
        paddingBottom: 0
      },
      ".pe-button--border": _border$1(selector),
      " .pe-button__label, .pe-button__dropdown": {
        whiteSpace: "pre",
        userSelect: "none",
        "-moz-user-select": "none"
      },
      " .pe-button__text-label": {
        display: "inline-block",
        lineHeight: 1
      },
      ".pe-button--dropdown": {
        minWidth: "0",
        // IE 11 does not recognize "initial" here
        " .pe-button__dropdown": {
          position: "relative"
        },
        " .pe-svg": {
          position: "absolute",
          left: 0,
          top: "50%"
        },
        " .pe-button__label + .pe-button__dropdown": {
          marginLeft: "6px",
          minWidth: 0
        }
      },
      " .pe-button-group &": {
        minWidth: 0
      },
      " .pe-button__dropdown .pe-svg": mixin.defaultTransition("transform"),
      ".pe-button--dropdown-open": {
        " .pe-button__dropdown .pe-svg": {
          transform: "rotate(-180deg)"
        }
      }
    }]), [sel(selectorRTL(selector), alignRight())]];
  },
  border_radius: function border_radius(selector, vars) {
    return [sel(selector, {
      " .pe-button__content": {
        borderRadius: vars.border_radius + "px"
      }
    }), border_radius_button_group(".pe-button-group ".concat(selector), vars, false), border_radius_button_group(selectorRTL(".pe-button-group ".concat(selector)), vars, true)];
  },
  border_width: function border_width(selector, vars) {
    return [_border_width(selector, vars)];
  },
  min_width: function min_width(selector, vars) {
    return [sel(selector, {
      minWidth: vars.min_width + "px"
    })];
  },
  animation_duration: function animation_duration(selector, vars) {
    return [sel(selector, {
      " .pe-button__content, .pe-button__wash": [mixin.defaultTransition("all", vars.animation_duration)]
    })];
  },
  padding_h: function padding_h(selector, vars) {
    return [sel(selector, {
      " .pe-button__content": {
        paddingLeft: vars.padding_h + "px",
        paddingRight: vars.padding_h + "px",
        " .pe-button__dropdown": {
          minWidth: "calc(36px - 2 * ".concat(vars.padding_h, "px)")
        },
        ".pe-button--dropdown": {
          " .pe-button__label + .pe-button__dropdown": {
            marginRight: "calc(7px - ".concat(vars.padding_h, "px)")
          }
        }
      }
    })];
  },
  padding_h_extra_wide: function padding_h_extra_wide(selector, vars) {
    return [sel(selector, {
      ".pe-button--extra-wide .pe-button__content": {
        padding: "0 " + vars.padding_h_extra_wide + "px"
      }
    })];
  },
  label_padding_v: function label_padding_v(selector, vars) {
    return [sel(selector, {
      " .pe-button__label": {
        padding: vars.label_padding_v + "px 0"
      },
      ".pe-button--border": {
        " .pe-button__label": {
          padding: vars.label_padding_v - 1 + "px 0"
        }
      }
    }), vars.line_height !== undefined && line_height_label_padding_v(selector, vars), vars.outer_padding_v !== undefined && outer_padding_v_label_padding_v(selector, vars), vars.line_height !== undefined && vars.outer_padding_v !== undefined && vars.label_padding_v !== undefined && line_height_outer_padding_v_label_padding_v(selector, vars)];
  },
  font_weight: function font_weight(selector, vars) {
    return [sel(selector, {
      " .pe-button__label": {
        fontWeight: vars.font_weight
      }
    })];
  },
  text_transform: function text_transform(selector, vars) {
    return [sel(selector, {
      " .pe-button__label": {
        textTransform: vars.text_transform
      }
    })];
  },
  font_size: function font_size(selector, vars) {
    return [sel(selector, {
      " .pe-button__label, .pe-button__dropdown": {
        fontSize: vars.font_size + "px"
      }
    })];
  },
  line_height: function line_height(selector, vars) {
    return [sel(selector, {
      " .pe-button__label, .pe-button__dropdown": {
        lineHeight: vars.line_height
      }
    }), vars.label_padding_v !== undefined && line_height_label_padding_v(selector, vars), vars.outer_padding_v !== undefined && vars.label_padding_v !== undefined && line_height_outer_padding_v_label_padding_v(selector, vars)];
  },
  dropdown_icon_size: function dropdown_icon_size(selector, vars) {
    return [sel(selector, {
      ".pe-button--dropdown": {
        " .pe-button__dropdown": {
          width: vars.dropdown_icon_size + "px"
        },
        " .pe-svg": {
          width: vars.dropdown_icon_size + "px",
          height: vars.dropdown_icon_size + "px",
          marginTop: -vars.dropdown_icon_size / 2 + "px"
        }
      }
    })];
  },
  outer_padding_v: function outer_padding_v(selector, vars) {
    return [sel(selector, {
      padding: vars.outer_padding_v + "px 0",
      ".pe-button--high-label": {
        padding: 0
      }
    }), vars.label_padding_v !== undefined && outer_padding_v_label_padding_v(selector, vars), vars.line_height !== undefined && vars.outer_padding_v !== undefined && vars.label_padding_v !== undefined && line_height_outer_padding_v_label_padding_v(selector, vars)];
  },
  separator_width: function separator_width(selector, vars) {
    return [sel(selector, {
      ".pe-button--separator-start": {
        " .pe-button__content": {
          borderWidth: vars.separator_width + "px"
        }
      }
    })];
  },
  letter_spacing: function letter_spacing(selector, vars) {
    return [sel(selector, {
      letterSpacing: vars.letter_spacing + "px"
    })];
  },
  // Theme vars
  border: function border(selector, vars) {
    return vars.border && _border$1(selector);
  },
  contained: function contained(selector, vars) {
    return vars.contained && _contained(selector);
  }
}, sharedVarFns);

var superLayout$1 = createLayout({
  varFns: varFns$1$1
});
var touch_height = vars.unit_touch_height; // 48

var height = 36;
var border_width = 1;

var themeVars = _extends$1({}, {
  border: false,
  contained: false
}, sharedVars);

var borderVars = {
  border_width: border_width,
  color_light_border: rgba(vars.color_light_foreground, vars.blend_light_border_medium),
  // only specify this variable to get all 4 states
  // color_light_hover_border:             "transparent",
  // color_light_active_border:            "transparent",
  color_light_disabled_border: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  //
  color_dark_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_medium),
  // only specify this variable to get all 4 states
  // color_dark_hover_border:              "transparent",
  // color_dark_active_border:             "transparent",
  color_dark_disabled_border: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled)
};
/**
 * @type {TextButtonVars} textButtonVars
 */

var textButtonVars = _objectSpread$2({
  /**
   * Generate general styles, not defined by variables
   */
  general_styles: true,
  animation_duration: vars.animation_duration,
  border_radius: vars.unit_item_border_radius,
  dropdown_icon_size: 24,
  font_size: 14,
  font_weight: 500,
  label_padding_v: 11,
  letter_spacing: 0.75,
  line_height: 1,
  min_width: 8 * vars.grid_unit_component,
  outer_padding_v: (touch_height - height) / 2,
  // (48 - 36) / 2 = 6
  padding_h: 2 * vars.grid_unit,
  // 8
  padding_h_extra_wide: 6 * vars.grid_unit,
  // 24
  row_margin_h: vars.grid_unit,
  separator_width: border_width,
  text_transform: "uppercase",
  color_light_background: "transparent",
  color_light_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_wash_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_active_background: rgba(vars.color_light_foreground, vars.blend_light_background_active),
  color_light_disabled_background: "transparent",
  color_light_disabled_text: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_icon: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_separator: rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_dark_background: "transparent",
  color_dark_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_wash_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
  color_dark_active_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_active),
  color_dark_disabled_background: "transparent",
  color_dark_disabled_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_icon: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_separator: rgba(vars.color_dark_foreground, vars.blend_dark_border_light)
}, borderVars, themeVars);

var themeVars$1 = _objectSpread$2({
  border: false,
  contained: true
}, sharedVars);
/**
 * @type {ContainedButtonVars} containedButtonVars
 */


var containedButtonVars = _objectSpread$2({
  /**
   * Generate general styles, not defined by variables
   */
  general_styles: true,
  padding_h: 4 * vars.grid_unit,
  // 16
  color_light_background: "#fff",
  color_light_disabled_background: rgba(vars.color_light_foreground, vars.blend_light_background_disabled),
  color_light_wash_background: "transparent",
  color_dark_active_background: rgba(vars.color_primary_dark),
  color_dark_background: rgba(vars.color_primary),
  color_dark_disabled_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_disabled),
  color_dark_wash_background: "transparent"
}, themeVars$1); // @ts-check


var fns$1 = [superLayout$1, superColor];
var superFns = [superLayout];
var superSelector = ".".concat(classes$2.super);
var selector$1 = ".".concat(classes$2.component);
styler.addStyle({
  selectors: [superSelector],
  fns: superFns,
  vars: textButtonVars
});
styler.addStyle({
  selectors: [selector$1],
  fns: fns$1,
  vars: textButtonVars
}); // @ts-check

var color = createColor({
  superColor: superColor
}); // @ts-check

var layout$1 = createLayout({
  superLayout: superLayout$1
}); // @ts-check

var fns$1$1 = [layout$1, color];
var selectors = [classes$2.component, classes$2.contained].join(" ");
var selector$1$1 = ".".concat(selectors.split(/\s/).join("."));
styler.addStyle({
  selectors: [selector$1$1],
  fns: fns$1$1,
  vars: containedButtonVars
}); // @ts-check

function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _nonIterableRest$1();
}

function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit$1(arr, i) {
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

function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
/**
 * Reducer helper function.
 * @param {object} acc 
 * @param {string} p 
 * @returns {object}
 */


var r$1 = function r(acc, p) {
  return acc[p] = 1, acc;
};
/**
 * List of default attributes.
 * Separately handled:
 * - class
 * - element
 * @type Array<string> defaultAttrs
 */


var defaultAttrs$1 = [// Universal
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

var filterSupportedAttributes$1 = function filterSupportedAttributes(attrs) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      add = _ref.add,
      remove = _ref.remove;
  /**
   * @type {{[s: string]: string}} removeLookup 
   */


  var removeLookup = remove ? remove.reduce(r$1, {}) : {};
  /**
   * @type {Array<string>} attrsList 
   */

  var attrsList = add ? defaultAttrs$1.concat(add) : defaultAttrs$1;
  var supported = attrsList.filter(function (item) {
    return !removeLookup[item];
  }).reduce(r$1, {});
  return Object.keys(attrs).reduce(
  /**
   * @param {object} acc
   * @param {string} key
   */
  function (acc, key) {
    return supported[key] ? acc[key] = attrs[key] : null, acc;
  }, {});
};

var isClient$1 = typeof document !== "undefined";
var isServer$1 = !isClient$1; // @ts-check

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
  if (isClient$1) {
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


var isTouch$1 = isServer$1 ? false : "ontouchstart" in document.documentElement;
var pointerEndEvent$1 = isTouch$1 ? ["click", "mouseup"] : ["mouseup"];

if (isClient$1) {
  var htmlElement$1 = document.querySelector("html");

  if (htmlElement$1) {
    htmlElement$1.classList.add(isTouch$1 ? "pe-touch" : "pe-no-touch");
  }
} // @ts-check

/**
 * @type {{[s: string]: Array<function>}} listeners
 */


var listeners$1 = {};
/**
 * 
 * @param {string} eventName 
 * @param {object} event 
 */

var emit$1 = function emit(eventName, event) {
  if (!listeners$1[eventName]) {
    return;
  }

  listeners$1[eventName].forEach(function (listener) {
    return listener(event);
  });
};

if (isClient$1) {
  window.addEventListener("resize", function (e) {
    return emit$1("resize", e);
  });
  window.addEventListener("scroll", function (e) {
    return emit$1("scroll", e);
  });
  window.addEventListener("keydown", function (e) {
    return emit$1("keydown", e);
  });
  pointerEndEvent$1.forEach(function (eventName) {
    return window.addEventListener(eventName, function (e) {
      return emit$1(eventName, e);
    });
  });
} // @ts-check
// Global style variables


var grid_unit$1 = 4;
var grid_unit_component$1 = 8;
var increment$1 = 7 * grid_unit_component$1; // 7 * 8 = 56

var increment_large$1 = 8 * grid_unit_component$1; // 8 * 8 = 64

var vars$2 = {
  // grid
  grid_unit: grid_unit$1,
  grid_unit_component: grid_unit_component$1,
  increment: increment$1,
  increment_large: increment_large$1,
  grid_unit_menu: 56,
  grid_unit_icon_button: 6 * grid_unit_component$1,
  // 48
  // common sizes
  unit_block_border_radius: 4,
  unit_item_border_radius: 4,
  unit_indent: 72,
  unit_indent_large: 80,
  unit_side_padding: 16,
  // buttons
  unit_touch_height: 48,
  unit_icon_size_small: 2 * grid_unit_component$1,
  // 16
  unit_icon_size: 3 * grid_unit_component$1,
  // 24
  unit_icon_size_medium: 4 * grid_unit_component$1,
  // 32
  unit_icon_size_large: 5 * grid_unit_component$1,
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
  if (isServer$1) return;
  const documentRef = window.document;
  const styleEl = documentRef.createElement("style");
  styleEl.setAttribute("id", id);
  styleEl.appendChild(documentRef.createTextNode(stylesheet));
  documentRef.head.appendChild(styleEl);
};

const removeStyleFromHead = id => {
  if (isServer$1) return;
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
    const x = isTouch$1 && e.touches ? e.touches[0].pageX : e.clientX;
    const y = isTouch$1 && e.touches ? e.touches[0].pageY : e.clientY;
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
    style.animationTimingFunction = props.animationTimingFunction || vars$2.animation_curve_default;
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

var classes$3 = {
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
        _useState2 = _slicedToArray$1(_useState, 2),
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
        _useState4 = _slicedToArray$1(_useState3, 2),
        domElement = _useState4[0],
        setDomElement = _useState4[1];

  const _useAnimationsState = useAnimationsState(),
        _useAnimationsState2 = _slicedToArray$1(_useAnimationsState, 3),
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
      classes: classes$3
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
      pointerEndEvent$1.forEach(evt => triggerEl.addEventListener(evt, tap, false));
    }

    return () => {
      if (triggerEl) {
        pointerEndEvent$1.forEach(evt => triggerEl.removeEventListener(evt, tap, false));
      }
    };
  }, [triggerEl]);
  const componentProps = Object.assign({}, filterSupportedAttributes$1(props), getDom(dom => dom && !domElement && setDomElement(dom)), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes$3.component, props.unconstrained ? classes$3.unconstrained : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a.class]].join(" ")
  });
  return h(props.element || "div", componentProps);
};
/**
 * Reducer helper function.
 * @param {object} acc 
 * @param {string} p 
 * @returns {object}
 */


var r$2 = function r(acc, p) {
  return acc[p] = 1, acc;
};
/**
 * List of default attributes.
 * Separately handled:
 * - class
 * - element
 * @type Array<string> defaultAttrs
 */


var defaultAttrs$2 = [// Universal
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

var filterSupportedAttributes$2 = function filterSupportedAttributes(attrs) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      add = _ref.add,
      remove = _ref.remove;
  /**
   * @type {{[s: string]: string}} removeLookup 
   */


  var removeLookup = remove ? remove.reduce(r$2, {}) : {};
  /**
   * @type {Array<string>} attrsList 
   */

  var attrsList = add ? defaultAttrs$2.concat(add) : defaultAttrs$2;
  var supported = attrsList.filter(function (item) {
    return !removeLookup[item];
  }).reduce(r$2, {});
  return Object.keys(attrs).reduce(
  /**
   * @param {object} acc
   * @param {string} key
   */
  function (acc, key) {
    return supported[key] ? acc[key] = attrs[key] : null, acc;
  }, {});
};

var isClient$2 = typeof document !== "undefined";
var isServer$2 = !isClient$2; // @ts-check

var isTouch$2 = isServer$2 ? false : "ontouchstart" in document.documentElement;
var pointerEndEvent$2 = isTouch$2 ? ["click", "mouseup"] : ["mouseup"];

if (isClient$2) {
  var htmlElement$2 = document.querySelector("html");

  if (htmlElement$2) {
    htmlElement$2.classList.add(isTouch$2 ? "pe-touch" : "pe-no-touch");
  }
} // @ts-check

/**
 * @type {{[s: string]: Array<function>}} listeners
 */


var listeners$2 = {};
/**
 * 
 * @param {string} eventName 
 * @param {object} event 
 */

var emit$2 = function emit(eventName, event) {
  if (!listeners$2[eventName]) {
    return;
  }

  listeners$2[eventName].forEach(function (listener) {
    return listener(event);
  });
};

if (isClient$2) {
  window.addEventListener("resize", function (e) {
    return emit$2("resize", e);
  });
  window.addEventListener("scroll", function (e) {
    return emit$2("scroll", e);
  });
  window.addEventListener("keydown", function (e) {
    return emit$2("keydown", e);
  });
  pointerEndEvent$2.forEach(function (eventName) {
    return window.addEventListener(eventName, function (e) {
      return emit$2(eventName, e);
    });
  });
}

var classes$4 = {
  component: "pe-shadow",
  // elements
  bottomShadow: "pe-shadow__bottom",
  topShadow: "pe-shadow__top",
  // states
  animated: "pe-shadow--animated",
  depth_n: "pe-shadow--depth-"
};

const _Shadow = props => {
  const componentProps = Object.assign({}, filterSupportedAttributes$2(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes$4.component, props.animated && classes$4.animated, props.className || props[a.class]].join(" ")
  });
  const content = props.content ? props.content : props.children;
  const shadowDepth = props.shadowDepth !== undefined ? props.shadowDepth : props.z; // deprecated

  const depthClass = shadowDepth !== undefined ? "".concat(classes$4.depth_n).concat(Math.min(5, shadowDepth)) : null;
  return h(props.element || "div", componentProps, [content, h("div", {
    key: "bottom",
    className: [classes$4.bottomShadow, depthClass].join(" ")
  }), h("div", {
    key: "top",
    className: [classes$4.topShadow, depthClass].join(" ")
  })]);
};

var index = cast(_Shadow);

function _slicedToArray$2(arr, i) {
  return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _nonIterableRest$2();
}

function _arrayWithHoles$2(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit$2(arr, i) {
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

function _nonIterableRest$2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
/**
 * Reducer helper function.
 * @param {object} acc 
 * @param {string} p 
 * @returns {object}
 */


var r$3 = function r(acc, p) {
  return acc[p] = 1, acc;
};
/**
 * List of default attributes.
 * Separately handled:
 * - class
 * - element
 * @type Array<string> defaultAttrs
 */


var defaultAttrs$3 = [// Universal
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

var filterSupportedAttributes$3 = function filterSupportedAttributes(attrs) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      add = _ref.add,
      remove = _ref.remove;
  /**
   * @type {{[s: string]: string}} removeLookup 
   */


  var removeLookup = remove ? remove.reduce(r$3, {}) : {};
  /**
   * @type {Array<string>} attrsList 
   */

  var attrsList = add ? defaultAttrs$3.concat(add) : defaultAttrs$3;
  var supported = attrsList.filter(function (item) {
    return !removeLookup[item];
  }).reduce(r$3, {});
  return Object.keys(attrs).reduce(
  /**
   * @param {object} acc
   * @param {string} key
   */
  function (acc, key) {
    return supported[key] ? acc[key] = attrs[key] : null, acc;
  }, {});
};

var isClient$3 = typeof document !== "undefined";
var isServer$3 = !isClient$3; // @ts-check

var isTouch$3 = isServer$3 ? false : "ontouchstart" in document.documentElement;
var pointerEndEvent$3 = isTouch$3 ? ["click", "mouseup"] : ["mouseup"];

if (isClient$3) {
  var htmlElement$3 = document.querySelector("html");

  if (htmlElement$3) {
    htmlElement$3.classList.add(isTouch$3 ? "pe-touch" : "pe-no-touch");
  }
} // @ts-check

/**
 * @type {{[s: string]: Array<function>}} listeners
 */


var listeners$3 = {};
/**
 * 
 * @param {string} eventName 
 * @param {object} event 
 */

var emit$3 = function emit(eventName, event) {
  if (!listeners$3[eventName]) {
    return;
  }

  listeners$3[eventName].forEach(function (listener) {
    return listener(event);
  });
};

if (isClient$3) {
  window.addEventListener("resize", function (e) {
    return emit$3("resize", e);
  });
  window.addEventListener("scroll", function (e) {
    return emit$3("scroll", e);
  });
  window.addEventListener("keydown", function (e) {
    return emit$3("keydown", e);
  });
  pointerEndEvent$3.forEach(function (eventName) {
    return window.addEventListener(eventName, function (e) {
      return emit$3(eventName, e);
    });
  });
}

var classes$5 = {
  component: "pe-svg"
};

const _SVG = props => {
  const _useState = useState(),
        _useState2 = _slicedToArray$2(_useState, 2),
        domElement = _useState2[0],
        setDomElement = _useState2[1];

  useEffect(() => {
    if (!domElement) return; // Prevent that SVG gets keyboard focus

    const elem = domElement.querySelector("svg");

    if (elem) {
      elem.setAttribute("focusable", "false");
    }
  }, [domElement]);
  const componentProps = Object.assign({}, filterSupportedAttributes$3(props), getDom(dom => dom && !domElement && setDomElement(dom)), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes$5.component, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a.class]].join(" ")
  });
  const content = props.content ? props.content : props.children || props;
  return h(props.element || "div", componentProps, content);
};
/**
 * Reducer helper function.
 * @param {object} acc 
 * @param {string} p 
 * @returns {object}
 */


var r$4 = function r(acc, p) {
  return acc[p] = 1, acc;
};
/**
 * List of default attributes.
 * Separately handled:
 * - class
 * - element
 * @type Array<string> defaultAttrs
 */


var defaultAttrs$4 = [// Universal
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

var filterSupportedAttributes$4 = function filterSupportedAttributes(attrs) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      add = _ref.add,
      remove = _ref.remove;
  /**
   * @type {{[s: string]: string}} removeLookup 
   */


  var removeLookup = remove ? remove.reduce(r$4, {}) : {};
  /**
   * @type {Array<string>} attrsList 
   */

  var attrsList = add ? defaultAttrs$4.concat(add) : defaultAttrs$4;
  var supported = attrsList.filter(function (item) {
    return !removeLookup[item];
  }).reduce(r$4, {});
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

var isClient$4 = typeof document !== "undefined";
var isServer$4 = !isClient$4; // @ts-check

var isTouch$4 = isServer$4 ? false : "ontouchstart" in document.documentElement;
var pointerEndEvent$4 = isTouch$4 ? ["click", "mouseup"] : ["mouseup"];

if (isClient$4) {
  var htmlElement$4 = document.querySelector("html");

  if (htmlElement$4) {
    htmlElement$4.classList.add(isTouch$4 ? "pe-touch" : "pe-no-touch");
  }
} // @ts-check

/**
 * @type {{[s: string]: Array<function>}} listeners
 */


var listeners$4 = {};
/**
 * 
 * @param {string} eventName 
 * @param {object} event 
 */

var emit$4 = function emit(eventName, event) {
  if (!listeners$4[eventName]) {
    return;
  }

  listeners$4[eventName].forEach(function (listener) {
    return listener(event);
  });
};

if (isClient$4) {
  window.addEventListener("resize", function (e) {
    return emit$4("resize", e);
  });
  window.addEventListener("scroll", function (e) {
    return emit$4("scroll", e);
  });
  window.addEventListener("keydown", function (e) {
    return emit$4("keydown", e);
  });
  pointerEndEvent$4.forEach(function (eventName) {
    return window.addEventListener(eventName, function (e) {
      return emit$4(eventName, e);
    });
  });
}

var classes$6 = {
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
  const componentProps = Object.assign({}, filterSupportedAttributes$4(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes$6.component, classForSize(classes$6, props.size), props.avatar ? classes$6.avatar : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a.class]].join(" ")
  }, props.events);
  const content = props.content ? props.content : props.svg ? h(SVG, props.svg) : props.src ? h("img", {
    src: props.src
  }) : props.children;
  return h(props.element || "div", componentProps, content);
};

const Ripple = cast(_Ripple);
const Shadow = cast(index);
const Icon = cast(_Icon);

const _Button = props => {
  const _useState = useState(),
        _useState2 = _slicedToArray(_useState, 2),
        domElement = _useState2[0],
        setDomElement = _useState2[1];

  const _useState3 = useState(props.inactive),
        _useState4 = _slicedToArray(_useState3, 2),
        isInactive = _useState4[0],
        setIsInactive = _useState4[1];

  const _useState5 = useState(false),
        _useState6 = _slicedToArray(_useState5, 2),
        hasFocus = _useState6[0],
        setHasFocus = _useState6[1];

  const _useState7 = useState(false),
        _useState8 = _slicedToArray(_useState7, 2),
        hasMouseOver = _useState8[0],
        setHasMouseOver = _useState8[1];

  const disabled = props.disabled;
  const inactive = props.inactive || isInactive;
  const onClickHandler = props.events && props.events[a.onclick];
  const onKeyUpHandler = props.events && props.events[a.onkeyup] || onClickHandler;

  const handleInactivate = () => (setIsInactive(true), setTimeout(() => setIsInactive(false), props.inactivate * 1000));

  useEffect(() => {
    if (!domElement) return;

    const onFocus = () => setHasFocus(!hasMouseOver);

    const onBlur = () => setHasFocus(false);

    const onMouseOver = () => setHasMouseOver(true);

    const onMouseOut = () => setHasMouseOver(false);

    const onClick = handleInactivate;
    domElement.addEventListener("focus", onFocus, false);
    domElement.addEventListener("blur", onBlur, false);
    domElement.addEventListener("mouseover", onMouseOver, false);
    domElement.addEventListener("mouseout", onMouseOut, false);
    domElement.addEventListener("click", onClick, false);
    return () => {
      domElement.removeEventListener("focus", onFocus, false), domElement.removeEventListener("blur", onBlur, false), domElement.removeEventListener("mouseover", onBlur, false), domElement.removeEventListener("mouseout", onMouseOut, false), domElement.removeEventListener("click", onClick, false);
    };
  }, [domElement]);
  const componentProps = Object.assign({}, filterSupportedAttributes(props, {
    add: [a.formaction, "type"],
    remove: ["style"]
  }), // Set style on content, not on component
  getDom(dom => dom && !domElement && (setDomElement(dom), props.getDom && props.getDom(dom))), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.super, props.parentClassName || classes.component, props.contained ? classes.contained : null, props.raised ? classes.contained : null, props.raised ? classes.raised : null, props.selected ? classes.selected : null, props.highLabel ? classes.highLabel : null, props.extraWide ? classes.extraWide : null, disabled ? classes.disabled : null, inactive ? classes.inactive : null, props.separatorAtStart ? classes.separatorAtStart : null, props.border || props.borders ? classes.border : null, props.dropdown ? classes.hasDropdown : null, props.dropdown ? props.dropdown.open ? classes.dropdownOpen : classes.dropdownClosed : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a.class]].join(" ")
  }, props.events, inactive ? null : {
    [a.tabindex]: disabled || inactive ? -1 : props[a.tabindex] || 0,
    [a.onclick]: onClickHandler,
    [a.onkeyup]: e => {
      if (e.keyCode === 13 && hasFocus) {
        setHasFocus(false);

        if (onKeyUpHandler) {
          onKeyUpHandler(e);
        }
      }
    }
  }, props.url, disabled ? {
    disabled: true
  } : null);
  const noink = props.ink !== undefined && props.ink === false;
  const label = props.content ? props.content : props.label !== undefined ? typeof props.label === "object" ? props.label : h("div", {
    className: classes.label
  }, h("div", {
    className: classes.textLabel,
    style: props.textStyle
  }, props.label)) : props.children;
  const noWash = disabled || props.wash !== undefined && !props.wash;
  return h(props.element || "div", componentProps, h("div", {
    [a.className]: classes.content,
    style: props.style
  }, [h(Shadow, {
    key: "shadow",
    shadowDepth: props.shadowDepth !== undefined ? props.shadowDepth : 0,
    animated: true
  }), disabled || noink ? null : h(Ripple, Object.assign({}, {
    key: "ripple",
    target: domElement
  }, props.ripple)), noWash ? null : h("div", {
    key: "wash",
    className: classes.wash
  }), label, props.dropdown ? h(Icon, {
    className: classes.dropdown,
    key: "dropdown",
    svg: {
      content: h.trust(iconDropdownDown)
    }
  }) : null]));
};

var index$1 = cast(_Button);

export default index$1;
