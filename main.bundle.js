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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Grandstander:ital,wght@1,500&family=Merriweather:ital,wght@0,300;0,900;1,700;1,900&display=swap);", ""]);

// Module
exports.push([module.i, "/* This is an example of using Sass, otherwise plain CSS works too*/\nhtml, body {\n  height: 100%;\n  width: 100vw; }\n\nbody {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  text-align: center; }\n  body .login {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: 10;\n    background-color: purple;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; }\n  body header {\n    background-color: purple;\n    color: White;\n    grid-row: 1;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-end;\n    padding: .75em 1.5em; }\n    body header nav {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between; }\n      body header nav button {\n        margin: .5em; }\n    body header #logo {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      margin: 0; }\n      body header #logo h1 {\n        margin: 0; }\n      body header #logo img {\n        height: 2.5em;\n        width: auto; }\n  body main {\n    width: 100%;\n    grid-row: 2;\n    background-color: darkgoldenrod; }\n    body main section .trips {\n      display: flex;\n      flex-direction: row;\n      flex: 1 1 40%;\n      justify-content: space-around;\n      flex-wrap: wrap; }\n    body main section .trip-card {\n      display: grid;\n      place-items: center;\n      background-color: rgba(255, 255, 255, 0.3);\n      box-shadow: 3px 3px 3px #000;\n      height: max-content;\n      width: max-content;\n      margin: 1.5em 1.5em;\n      border-radius: 1em;\n      position: relative; }\n      body main section .trip-card img {\n        position: absolute;\n        width: 24em;\n        height: 18em;\n        border-radius: 1em; }\n      body main section .trip-card .card-text {\n        color: white;\n        z-index: 1;\n        width: 24em;\n        height: 19em;\n        background-color: rgba(0, 0, 0, 0.42);\n        text-shadow: #000 3px 3px 3px;\n        border-radius: 1em;\n        padding: 1em;\n        transition-property: background-color;\n        transition-duration: .6s; }\n      body main section .trip-card .card-text:hover {\n        background-color: rgba(165, 165, 165, 0.65); }\n      body main section .trip-card button {\n        background-color: #fbc; }\n  body footer {\n    grid-row: 3;\n    background-color: purple; }\n  body .main-font {\n    font-family: 'Merriweather', serif; }\n  body .secondary-font {\n    font-family: 'Grandstander', cursive; }\n  body .light {\n    font-weight: 300; }\n  body .italic {\n    font-style: italic; }\n  body button {\n    border-radius: .325em;\n    padding: .25em; }\n  body #submit-booking {\n    background-color: rgba(94, 239, 158, 0.64);\n    margin-bottom: 1.5em; }\n  body .hidden {\n    display: none; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/normalize.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/normalize.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/flatpickr/dist/flatpickr.js":
/*!**************************************************!*\
  !*** ./node_modules/flatpickr/dist/flatpickr.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* flatpickr v4.6.6, @license MIT */
(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, (function () { 'use strict';

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

    var HOOKS = [
        "onChange",
        "onClose",
        "onDayCreate",
        "onDestroy",
        "onKeyDown",
        "onMonthChange",
        "onOpen",
        "onParseConfig",
        "onReady",
        "onValueUpdate",
        "onYearChange",
        "onPreCalendarPosition",
    ];
    var defaults = {
        _disable: [],
        _enable: [],
        allowInput: false,
        allowInvalidPreload: false,
        altFormat: "F j, Y",
        altInput: false,
        altInputClass: "form-control input",
        animate: typeof window === "object" &&
            window.navigator.userAgent.indexOf("MSIE") === -1,
        ariaDateFormat: "F j, Y",
        autoFillDefaultTime: true,
        clickOpens: true,
        closeOnSelect: true,
        conjunction: ", ",
        dateFormat: "Y-m-d",
        defaultHour: 12,
        defaultMinute: 0,
        defaultSeconds: 0,
        disable: [],
        disableMobile: false,
        enable: [],
        enableSeconds: false,
        enableTime: false,
        errorHandler: function (err) {
            return typeof console !== "undefined" && console.warn(err);
        },
        getWeek: function (givenDate) {
            var date = new Date(givenDate.getTime());
            date.setHours(0, 0, 0, 0);
            // Thursday in current week decides the year.
            date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
            // January 4 is always in week 1.
            var week1 = new Date(date.getFullYear(), 0, 4);
            // Adjust to Thursday in week 1 and count number of weeks from date to week1.
            return (1 +
                Math.round(((date.getTime() - week1.getTime()) / 86400000 -
                    3 +
                    ((week1.getDay() + 6) % 7)) /
                    7));
        },
        hourIncrement: 1,
        ignoredFocusElements: [],
        inline: false,
        locale: "default",
        minuteIncrement: 5,
        mode: "single",
        monthSelectorType: "dropdown",
        nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
        noCalendar: false,
        now: new Date(),
        onChange: [],
        onClose: [],
        onDayCreate: [],
        onDestroy: [],
        onKeyDown: [],
        onMonthChange: [],
        onOpen: [],
        onParseConfig: [],
        onReady: [],
        onValueUpdate: [],
        onYearChange: [],
        onPreCalendarPosition: [],
        plugins: [],
        position: "auto",
        positionElement: undefined,
        prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
        shorthandCurrentMonth: false,
        showMonths: 1,
        static: false,
        time_24hr: false,
        weekNumbers: false,
        wrap: false,
    };

    var english = {
        weekdays: {
            shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            longhand: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ],
        },
        months: {
            shorthand: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            longhand: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ],
        },
        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        firstDayOfWeek: 0,
        ordinal: function (nth) {
            var s = nth % 100;
            if (s > 3 && s < 21)
                return "th";
            switch (s % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        },
        rangeSeparator: " to ",
        weekAbbreviation: "Wk",
        scrollTitle: "Scroll to increment",
        toggleTitle: "Click to toggle",
        amPM: ["AM", "PM"],
        yearAriaLabel: "Year",
        monthAriaLabel: "Month",
        hourAriaLabel: "Hour",
        minuteAriaLabel: "Minute",
        time_24hr: false,
    };

    var pad = function (number, length) {
        if (length === void 0) { length = 2; }
        return ("000" + number).slice(length * -1);
    };
    var int = function (bool) { return (bool === true ? 1 : 0); };
    /* istanbul ignore next */
    function debounce(func, wait, immediate) {
        if (immediate === void 0) { immediate = false; }
        var timeout;
        return function () {
            var context = this, args = arguments;
            timeout !== null && clearTimeout(timeout);
            timeout = window.setTimeout(function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            }, wait);
            if (immediate && !timeout)
                func.apply(context, args);
        };
    }
    var arrayify = function (obj) {
        return obj instanceof Array ? obj : [obj];
    };

    function toggleClass(elem, className, bool) {
        if (bool === true)
            return elem.classList.add(className);
        elem.classList.remove(className);
    }
    function createElement(tag, className, content) {
        var e = window.document.createElement(tag);
        className = className || "";
        content = content || "";
        e.className = className;
        if (content !== undefined)
            e.textContent = content;
        return e;
    }
    function clearNode(node) {
        while (node.firstChild)
            node.removeChild(node.firstChild);
    }
    function findParent(node, condition) {
        if (condition(node))
            return node;
        else if (node.parentNode)
            return findParent(node.parentNode, condition);
        return undefined; // nothing found
    }
    function createNumberInput(inputClassName, opts) {
        var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
        if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
            numInput.type = "number";
        }
        else {
            numInput.type = "text";
            numInput.pattern = "\\d*";
        }
        if (opts !== undefined)
            for (var key in opts)
                numInput.setAttribute(key, opts[key]);
        wrapper.appendChild(numInput);
        wrapper.appendChild(arrowUp);
        wrapper.appendChild(arrowDown);
        return wrapper;
    }
    function getEventTarget(event) {
        try {
            if (typeof event.composedPath === "function") {
                var path = event.composedPath();
                return path[0];
            }
            return event.target;
        }
        catch (error) {
            return event.target;
        }
    }

    var doNothing = function () { return undefined; };
    var monthToStr = function (monthNumber, shorthand, locale) { return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber]; };
    var revFormat = {
        D: doNothing,
        F: function (dateObj, monthName, locale) {
            dateObj.setMonth(locale.months.longhand.indexOf(monthName));
        },
        G: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        H: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        J: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        K: function (dateObj, amPM, locale) {
            dateObj.setHours((dateObj.getHours() % 12) +
                12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
        },
        M: function (dateObj, shortMonth, locale) {
            dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
        },
        S: function (dateObj, seconds) {
            dateObj.setSeconds(parseFloat(seconds));
        },
        U: function (_, unixSeconds) { return new Date(parseFloat(unixSeconds) * 1000); },
        W: function (dateObj, weekNum, locale) {
            var weekNumber = parseInt(weekNum);
            var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
            date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
            return date;
        },
        Y: function (dateObj, year) {
            dateObj.setFullYear(parseFloat(year));
        },
        Z: function (_, ISODate) { return new Date(ISODate); },
        d: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        h: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        i: function (dateObj, minutes) {
            dateObj.setMinutes(parseFloat(minutes));
        },
        j: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        l: doNothing,
        m: function (dateObj, month) {
            dateObj.setMonth(parseFloat(month) - 1);
        },
        n: function (dateObj, month) {
            dateObj.setMonth(parseFloat(month) - 1);
        },
        s: function (dateObj, seconds) {
            dateObj.setSeconds(parseFloat(seconds));
        },
        u: function (_, unixMillSeconds) {
            return new Date(parseFloat(unixMillSeconds));
        },
        w: doNothing,
        y: function (dateObj, year) {
            dateObj.setFullYear(2000 + parseFloat(year));
        },
    };
    var tokenRegex = {
        D: "(\\w+)",
        F: "(\\w+)",
        G: "(\\d\\d|\\d)",
        H: "(\\d\\d|\\d)",
        J: "(\\d\\d|\\d)\\w+",
        K: "",
        M: "(\\w+)",
        S: "(\\d\\d|\\d)",
        U: "(.+)",
        W: "(\\d\\d|\\d)",
        Y: "(\\d{4})",
        Z: "(.+)",
        d: "(\\d\\d|\\d)",
        h: "(\\d\\d|\\d)",
        i: "(\\d\\d|\\d)",
        j: "(\\d\\d|\\d)",
        l: "(\\w+)",
        m: "(\\d\\d|\\d)",
        n: "(\\d\\d|\\d)",
        s: "(\\d\\d|\\d)",
        u: "(.+)",
        w: "(\\d\\d|\\d)",
        y: "(\\d{2})",
    };
    var formats = {
        // get the date in UTC
        Z: function (date) { return date.toISOString(); },
        // weekday name, short, e.g. Thu
        D: function (date, locale, options) {
            return locale.weekdays.shorthand[formats.w(date, locale, options)];
        },
        // full month name e.g. January
        F: function (date, locale, options) {
            return monthToStr(formats.n(date, locale, options) - 1, false, locale);
        },
        // padded hour 1-12
        G: function (date, locale, options) {
            return pad(formats.h(date, locale, options));
        },
        // hours with leading zero e.g. 03
        H: function (date) { return pad(date.getHours()); },
        // day (1-30) with ordinal suffix e.g. 1st, 2nd
        J: function (date, locale) {
            return locale.ordinal !== undefined
                ? date.getDate() + locale.ordinal(date.getDate())
                : date.getDate();
        },
        // AM/PM
        K: function (date, locale) { return locale.amPM[int(date.getHours() > 11)]; },
        // shorthand month e.g. Jan, Sep, Oct, etc
        M: function (date, locale) {
            return monthToStr(date.getMonth(), true, locale);
        },
        // seconds 00-59
        S: function (date) { return pad(date.getSeconds()); },
        // unix timestamp
        U: function (date) { return date.getTime() / 1000; },
        W: function (date, _, options) {
            return options.getWeek(date);
        },
        // full year e.g. 2016, padded (0001-9999)
        Y: function (date) { return pad(date.getFullYear(), 4); },
        // day in month, padded (01-30)
        d: function (date) { return pad(date.getDate()); },
        // hour from 1-12 (am/pm)
        h: function (date) { return (date.getHours() % 12 ? date.getHours() % 12 : 12); },
        // minutes, padded with leading zero e.g. 09
        i: function (date) { return pad(date.getMinutes()); },
        // day in month (1-30)
        j: function (date) { return date.getDate(); },
        // weekday name, full, e.g. Thursday
        l: function (date, locale) {
            return locale.weekdays.longhand[date.getDay()];
        },
        // padded month number (01-12)
        m: function (date) { return pad(date.getMonth() + 1); },
        // the month number (1-12)
        n: function (date) { return date.getMonth() + 1; },
        // seconds 0-59
        s: function (date) { return date.getSeconds(); },
        // Unix Milliseconds
        u: function (date) { return date.getTime(); },
        // number of the day of the week
        w: function (date) { return date.getDay(); },
        // last two digits of year e.g. 16 for 2016
        y: function (date) { return String(date.getFullYear()).substring(2); },
    };

    var createDateFormatter = function (_a) {
        var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c, _d = _a.isMobile, isMobile = _d === void 0 ? false : _d;
        return function (dateObj, frmt, overrideLocale) {
            var locale = overrideLocale || l10n;
            if (config.formatDate !== undefined && !isMobile) {
                return config.formatDate(dateObj, frmt, locale);
            }
            return frmt
                .split("")
                .map(function (c, i, arr) {
                return formats[c] && arr[i - 1] !== "\\"
                    ? formats[c](dateObj, locale, config)
                    : c !== "\\"
                        ? c
                        : "";
            })
                .join("");
        };
    };
    var createDateParser = function (_a) {
        var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
        return function (date, givenFormat, timeless, customLocale) {
            if (date !== 0 && !date)
                return undefined;
            var locale = customLocale || l10n;
            var parsedDate;
            var dateOrig = date;
            if (date instanceof Date)
                parsedDate = new Date(date.getTime());
            else if (typeof date !== "string" &&
                date.toFixed !== undefined // timestamp
            )
                // create a copy
                parsedDate = new Date(date);
            else if (typeof date === "string") {
                // date string
                var format = givenFormat || (config || defaults).dateFormat;
                var datestr = String(date).trim();
                if (datestr === "today") {
                    parsedDate = new Date();
                    timeless = true;
                }
                else if (/Z$/.test(datestr) ||
                    /GMT$/.test(datestr) // datestrings w/ timezone
                )
                    parsedDate = new Date(date);
                else if (config && config.parseDate)
                    parsedDate = config.parseDate(date, format);
                else {
                    parsedDate =
                        !config || !config.noCalendar
                            ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                            : new Date(new Date().setHours(0, 0, 0, 0));
                    var matched = void 0, ops = [];
                    for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                        var token_1 = format[i];
                        var isBackSlash = token_1 === "\\";
                        var escaped = format[i - 1] === "\\" || isBackSlash;
                        if (tokenRegex[token_1] && !escaped) {
                            regexStr += tokenRegex[token_1];
                            var match = new RegExp(regexStr).exec(date);
                            if (match && (matched = true)) {
                                ops[token_1 !== "Y" ? "push" : "unshift"]({
                                    fn: revFormat[token_1],
                                    val: match[++matchIndex],
                                });
                            }
                        }
                        else if (!isBackSlash)
                            regexStr += "."; // don't really care
                        ops.forEach(function (_a) {
                            var fn = _a.fn, val = _a.val;
                            return (parsedDate = fn(parsedDate, val, locale) || parsedDate);
                        });
                    }
                    parsedDate = matched ? parsedDate : undefined;
                }
            }
            /* istanbul ignore next */
            if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
                config.errorHandler(new Error("Invalid date provided: " + dateOrig));
                return undefined;
            }
            if (timeless === true)
                parsedDate.setHours(0, 0, 0, 0);
            return parsedDate;
        };
    };
    /**
     * Compute the difference in dates, measured in ms
     */
    function compareDates(date1, date2, timeless) {
        if (timeless === void 0) { timeless = true; }
        if (timeless !== false) {
            return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
                new Date(date2.getTime()).setHours(0, 0, 0, 0));
        }
        return date1.getTime() - date2.getTime();
    }
    var isBetween = function (ts, ts1, ts2) {
        return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
    };
    var duration = {
        DAY: 86400000,
    };

    if (typeof Object.assign !== "function") {
        Object.assign = function (target) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (!target) {
                throw TypeError("Cannot convert undefined or null to object");
            }
            var _loop_1 = function (source) {
                if (source) {
                    Object.keys(source).forEach(function (key) { return (target[key] = source[key]); });
                }
            };
            for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                var source = args_1[_a];
                _loop_1(source);
            }
            return target;
        };
    }

    var DEBOUNCED_CHANGE_MS = 300;
    function FlatpickrInstance(element, instanceConfig) {
        var self = {
            config: __assign(__assign({}, defaults), flatpickr.defaultConfig),
            l10n: english,
        };
        self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
        self._handlers = [];
        self.pluginElements = [];
        self.loadedPlugins = [];
        self._bind = bind;
        self._setHoursFromDate = setHoursFromDate;
        self._positionCalendar = positionCalendar;
        self.changeMonth = changeMonth;
        self.changeYear = changeYear;
        self.clear = clear;
        self.close = close;
        self._createElement = createElement;
        self.destroy = destroy;
        self.isEnabled = isEnabled;
        self.jumpToDate = jumpToDate;
        self.open = open;
        self.redraw = redraw;
        self.set = set;
        self.setDate = setDate;
        self.toggle = toggle;
        function setupHelperFunctions() {
            self.utils = {
                getDaysInMonth: function (month, yr) {
                    if (month === void 0) { month = self.currentMonth; }
                    if (yr === void 0) { yr = self.currentYear; }
                    if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
                        return 29;
                    return self.l10n.daysInMonth[month];
                },
            };
        }
        function init() {
            self.element = self.input = element;
            self.isOpen = false;
            parseConfig();
            setupLocale();
            setupInputs();
            setupDates();
            setupHelperFunctions();
            if (!self.isMobile)
                build();
            bindEvents();
            if (self.selectedDates.length || self.config.noCalendar) {
                if (self.config.enableTime) {
                    setHoursFromDate(self.config.noCalendar
                        ? self.latestSelectedDateObj || self.config.minDate
                        : undefined);
                }
                updateValue(false);
            }
            setCalendarWidth();
            var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            /* TODO: investigate this further
        
              Currently, there is weird positioning behavior in safari causing pages
              to scroll up. https://github.com/chmln/flatpickr/issues/563
        
              However, most browsers are not Safari and positioning is expensive when used
              in scale. https://github.com/chmln/flatpickr/issues/1096
            */
            if (!self.isMobile && isSafari) {
                positionCalendar();
            }
            triggerEvent("onReady");
        }
        function bindToInstance(fn) {
            return fn.bind(self);
        }
        function setCalendarWidth() {
            var config = self.config;
            if (config.weekNumbers === false && config.showMonths === 1) {
                return;
            }
            else if (config.noCalendar !== true) {
                window.requestAnimationFrame(function () {
                    if (self.calendarContainer !== undefined) {
                        self.calendarContainer.style.visibility = "hidden";
                        self.calendarContainer.style.display = "block";
                    }
                    if (self.daysContainer !== undefined) {
                        var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                        self.daysContainer.style.width = daysWidth + "px";
                        self.calendarContainer.style.width =
                            daysWidth +
                                (self.weekWrapper !== undefined
                                    ? self.weekWrapper.offsetWidth
                                    : 0) +
                                "px";
                        self.calendarContainer.style.removeProperty("visibility");
                        self.calendarContainer.style.removeProperty("display");
                    }
                });
            }
        }
        /**
         * The handler for all events targeting the time inputs
         */
        function updateTime(e) {
            if (self.selectedDates.length === 0) {
                var defaultDate = self.config.minDate !== undefined
                    ? new Date(self.config.minDate.getTime())
                    : new Date();
                var _a = getDefaultHours(), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
                defaultDate.setHours(hours, minutes, seconds, 0);
                self.setDate(defaultDate, false);
            }
            if (e !== undefined && e.type !== "blur") {
                timeWrapper(e);
            }
            var prevValue = self._input.value;
            setHoursFromInputs();
            updateValue();
            if (self._input.value !== prevValue) {
                self._debouncedChange();
            }
        }
        function ampm2military(hour, amPM) {
            return (hour % 12) + 12 * int(amPM === self.l10n.amPM[1]);
        }
        function military2ampm(hour) {
            switch (hour % 24) {
                case 0:
                case 12:
                    return 12;
                default:
                    return hour % 12;
            }
        }
        /**
         * Syncs the selected date object time with user's time input
         */
        function setHoursFromInputs() {
            if (self.hourElement === undefined || self.minuteElement === undefined)
                return;
            var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined
                ? (parseInt(self.secondElement.value, 10) || 0) % 60
                : 0;
            if (self.amPM !== undefined) {
                hours = ampm2military(hours, self.amPM.textContent);
            }
            var limitMinHours = self.config.minTime !== undefined ||
                (self.config.minDate &&
                    self.minDateHasTime &&
                    self.latestSelectedDateObj &&
                    compareDates(self.latestSelectedDateObj, self.config.minDate, true) ===
                        0);
            var limitMaxHours = self.config.maxTime !== undefined ||
                (self.config.maxDate &&
                    self.maxDateHasTime &&
                    self.latestSelectedDateObj &&
                    compareDates(self.latestSelectedDateObj, self.config.maxDate, true) ===
                        0);
            if (limitMaxHours) {
                var maxTime = self.config.maxTime !== undefined
                    ? self.config.maxTime
                    : self.config.maxDate;
                hours = Math.min(hours, maxTime.getHours());
                if (hours === maxTime.getHours())
                    minutes = Math.min(minutes, maxTime.getMinutes());
                if (minutes === maxTime.getMinutes())
                    seconds = Math.min(seconds, maxTime.getSeconds());
            }
            if (limitMinHours) {
                var minTime = self.config.minTime !== undefined
                    ? self.config.minTime
                    : self.config.minDate;
                hours = Math.max(hours, minTime.getHours());
                if (hours === minTime.getHours())
                    minutes = Math.max(minutes, minTime.getMinutes());
                if (minutes === minTime.getMinutes())
                    seconds = Math.max(seconds, minTime.getSeconds());
            }
            setHours(hours, minutes, seconds);
        }
        /**
         * Syncs time input values with a date
         */
        function setHoursFromDate(dateObj) {
            var date = dateObj || self.latestSelectedDateObj;
            if (date) {
                setHours(date.getHours(), date.getMinutes(), date.getSeconds());
            }
        }
        function getDefaultHours() {
            var hours = self.config.defaultHour;
            var minutes = self.config.defaultMinute;
            var seconds = self.config.defaultSeconds;
            if (self.config.minDate !== undefined) {
                var minHr = self.config.minDate.getHours();
                var minMinutes = self.config.minDate.getMinutes();
                hours = Math.max(hours, minHr);
                if (hours === minHr)
                    minutes = Math.max(minMinutes, minutes);
                if (hours === minHr && minutes === minMinutes)
                    seconds = self.config.minDate.getSeconds();
            }
            if (self.config.maxDate !== undefined) {
                var maxHr = self.config.maxDate.getHours();
                var maxMinutes = self.config.maxDate.getMinutes();
                hours = Math.min(hours, maxHr);
                if (hours === maxHr)
                    minutes = Math.min(maxMinutes, minutes);
                if (hours === maxHr && minutes === maxMinutes)
                    seconds = self.config.maxDate.getSeconds();
            }
            return { hours: hours, minutes: minutes, seconds: seconds };
        }
        /**
         * Sets the hours, minutes, and optionally seconds
         * of the latest selected date object and the
         * corresponding time inputs
         * @param {Number} hours the hour. whether its military
         *                 or am-pm gets inferred from config
         * @param {Number} minutes the minutes
         * @param {Number} seconds the seconds (optional)
         */
        function setHours(hours, minutes, seconds) {
            if (self.latestSelectedDateObj !== undefined) {
                self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
            }
            if (!self.hourElement || !self.minuteElement || self.isMobile)
                return;
            self.hourElement.value = pad(!self.config.time_24hr
                ? ((12 + hours) % 12) + 12 * int(hours % 12 === 0)
                : hours);
            self.minuteElement.value = pad(minutes);
            if (self.amPM !== undefined)
                self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
            if (self.secondElement !== undefined)
                self.secondElement.value = pad(seconds);
        }
        /**
         * Handles the year input and incrementing events
         * @param {Event} event the keyup or increment event
         */
        function onYearInput(event) {
            var eventTarget = getEventTarget(event);
            var year = parseInt(eventTarget.value) + (event.delta || 0);
            if (year / 1000 > 1 ||
                (event.key === "Enter" && !/[^\d]/.test(year.toString()))) {
                changeYear(year);
            }
        }
        /**
         * Essentially addEventListener + tracking
         * @param {Element} element the element to addEventListener to
         * @param {String} event the event name
         * @param {Function} handler the event handler
         */
        function bind(element, event, handler, options) {
            if (event instanceof Array)
                return event.forEach(function (ev) { return bind(element, ev, handler, options); });
            if (element instanceof Array)
                return element.forEach(function (el) { return bind(el, event, handler, options); });
            element.addEventListener(event, handler, options);
            self._handlers.push({
                element: element,
                event: event,
                handler: handler,
                options: options,
            });
        }
        function triggerChange() {
            triggerEvent("onChange");
        }
        /**
         * Adds all the necessary event listeners
         */
        function bindEvents() {
            if (self.config.wrap) {
                ["open", "close", "toggle", "clear"].forEach(function (evt) {
                    Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
                        return bind(el, "click", self[evt]);
                    });
                });
            }
            if (self.isMobile) {
                setupMobile();
                return;
            }
            var debouncedResize = debounce(onResize, 50);
            self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
            if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
                bind(self.daysContainer, "mouseover", function (e) {
                    if (self.config.mode === "range")
                        onMouseOver(getEventTarget(e));
                });
            bind(window.document.body, "keydown", onKeyDown);
            if (!self.config.inline && !self.config.static)
                bind(window, "resize", debouncedResize);
            if (window.ontouchstart !== undefined)
                bind(window.document, "touchstart", documentClick);
            else
                bind(window.document, "click", documentClick);
            bind(window.document, "focus", documentClick, { capture: true });
            if (self.config.clickOpens === true) {
                bind(self._input, "focus", self.open);
                bind(self._input, "click", self.open);
            }
            if (self.daysContainer !== undefined) {
                bind(self.monthNav, "click", onMonthNavClick);
                bind(self.monthNav, ["keyup", "increment"], onYearInput);
                bind(self.daysContainer, "click", selectDate);
            }
            if (self.timeContainer !== undefined &&
                self.minuteElement !== undefined &&
                self.hourElement !== undefined) {
                var selText = function (e) {
                    return getEventTarget(e).select();
                };
                bind(self.timeContainer, ["increment"], updateTime);
                bind(self.timeContainer, "blur", updateTime, { capture: true });
                bind(self.timeContainer, "click", timeIncrement);
                bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
                if (self.secondElement !== undefined)
                    bind(self.secondElement, "focus", function () { return self.secondElement && self.secondElement.select(); });
                if (self.amPM !== undefined) {
                    bind(self.amPM, "click", function (e) {
                        updateTime(e);
                        triggerChange();
                    });
                }
            }
            if (self.config.allowInput)
                bind(self._input, "blur", onBlur);
        }
        /**
         * Set the calendar view to a particular date.
         * @param {Date} jumpDate the date to set the view to
         * @param {boolean} triggerChange if change events should be triggered
         */
        function jumpToDate(jumpDate, triggerChange) {
            var jumpTo = jumpDate !== undefined
                ? self.parseDate(jumpDate)
                : self.latestSelectedDateObj ||
                    (self.config.minDate && self.config.minDate > self.now
                        ? self.config.minDate
                        : self.config.maxDate && self.config.maxDate < self.now
                            ? self.config.maxDate
                            : self.now);
            var oldYear = self.currentYear;
            var oldMonth = self.currentMonth;
            try {
                if (jumpTo !== undefined) {
                    self.currentYear = jumpTo.getFullYear();
                    self.currentMonth = jumpTo.getMonth();
                }
            }
            catch (e) {
                /* istanbul ignore next */
                e.message = "Invalid date supplied: " + jumpTo;
                self.config.errorHandler(e);
            }
            if (triggerChange && self.currentYear !== oldYear) {
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            if (triggerChange &&
                (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
                triggerEvent("onMonthChange");
            }
            self.redraw();
        }
        /**
         * The up/down arrow handler for time inputs
         * @param {Event} e the click event
         */
        function timeIncrement(e) {
            var eventTarget = getEventTarget(e);
            if (~eventTarget.className.indexOf("arrow"))
                incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
        }
        /**
         * Increments/decrements the value of input associ-
         * ated with the up/down arrow by dispatching an
         * "increment" event on the input.
         *
         * @param {Event} e the click event
         * @param {Number} delta the diff (usually 1 or -1)
         * @param {Element} inputElem the input element
         */
        function incrementNumInput(e, delta, inputElem) {
            var target = e && getEventTarget(e);
            var input = inputElem ||
                (target && target.parentNode && target.parentNode.firstChild);
            var event = createEvent("increment");
            event.delta = delta;
            input && input.dispatchEvent(event);
        }
        function build() {
            var fragment = window.document.createDocumentFragment();
            self.calendarContainer = createElement("div", "flatpickr-calendar");
            self.calendarContainer.tabIndex = -1;
            if (!self.config.noCalendar) {
                fragment.appendChild(buildMonthNav());
                self.innerContainer = createElement("div", "flatpickr-innerContainer");
                if (self.config.weekNumbers) {
                    var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
                    self.innerContainer.appendChild(weekWrapper);
                    self.weekNumbers = weekNumbers;
                    self.weekWrapper = weekWrapper;
                }
                self.rContainer = createElement("div", "flatpickr-rContainer");
                self.rContainer.appendChild(buildWeekdays());
                if (!self.daysContainer) {
                    self.daysContainer = createElement("div", "flatpickr-days");
                    self.daysContainer.tabIndex = -1;
                }
                buildDays();
                self.rContainer.appendChild(self.daysContainer);
                self.innerContainer.appendChild(self.rContainer);
                fragment.appendChild(self.innerContainer);
            }
            if (self.config.enableTime) {
                fragment.appendChild(buildTime());
            }
            toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
            toggleClass(self.calendarContainer, "animate", self.config.animate === true);
            toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
            self.calendarContainer.appendChild(fragment);
            var customAppend = self.config.appendTo !== undefined &&
                self.config.appendTo.nodeType !== undefined;
            if (self.config.inline || self.config.static) {
                self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
                if (self.config.inline) {
                    if (!customAppend && self.element.parentNode)
                        self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
                    else if (self.config.appendTo !== undefined)
                        self.config.appendTo.appendChild(self.calendarContainer);
                }
                if (self.config.static) {
                    var wrapper = createElement("div", "flatpickr-wrapper");
                    if (self.element.parentNode)
                        self.element.parentNode.insertBefore(wrapper, self.element);
                    wrapper.appendChild(self.element);
                    if (self.altInput)
                        wrapper.appendChild(self.altInput);
                    wrapper.appendChild(self.calendarContainer);
                }
            }
            if (!self.config.static && !self.config.inline)
                (self.config.appendTo !== undefined
                    ? self.config.appendTo
                    : window.document.body).appendChild(self.calendarContainer);
        }
        function createDay(className, date, dayNumber, i) {
            var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
            dayElement.dateObj = date;
            dayElement.$i = i;
            dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
            if (className.indexOf("hidden") === -1 &&
                compareDates(date, self.now) === 0) {
                self.todayDateElem = dayElement;
                dayElement.classList.add("today");
                dayElement.setAttribute("aria-current", "date");
            }
            if (dateIsEnabled) {
                dayElement.tabIndex = -1;
                if (isDateSelected(date)) {
                    dayElement.classList.add("selected");
                    self.selectedDateElem = dayElement;
                    if (self.config.mode === "range") {
                        toggleClass(dayElement, "startRange", self.selectedDates[0] &&
                            compareDates(date, self.selectedDates[0], true) === 0);
                        toggleClass(dayElement, "endRange", self.selectedDates[1] &&
                            compareDates(date, self.selectedDates[1], true) === 0);
                        if (className === "nextMonthDay")
                            dayElement.classList.add("inRange");
                    }
                }
            }
            else {
                dayElement.classList.add("flatpickr-disabled");
            }
            if (self.config.mode === "range") {
                if (isDateInRange(date) && !isDateSelected(date))
                    dayElement.classList.add("inRange");
            }
            if (self.weekNumbers &&
                self.config.showMonths === 1 &&
                className !== "prevMonthDay" &&
                dayNumber % 7 === 1) {
                self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
            }
            triggerEvent("onDayCreate", dayElement);
            return dayElement;
        }
        function focusOnDayElem(targetNode) {
            targetNode.focus();
            if (self.config.mode === "range")
                onMouseOver(targetNode);
        }
        function getFirstAvailableDay(delta) {
            var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
            var endMonth = delta > 0 ? self.config.showMonths : -1;
            for (var m = startMonth; m != endMonth; m += delta) {
                var month = self.daysContainer.children[m];
                var startIndex = delta > 0 ? 0 : month.children.length - 1;
                var endIndex = delta > 0 ? month.children.length : -1;
                for (var i = startIndex; i != endIndex; i += delta) {
                    var c = month.children[i];
                    if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
                        return c;
                }
            }
            return undefined;
        }
        function getNextAvailableDay(current, delta) {
            var givenMonth = current.className.indexOf("Month") === -1
                ? current.dateObj.getMonth()
                : self.currentMonth;
            var endMonth = delta > 0 ? self.config.showMonths : -1;
            var loopDelta = delta > 0 ? 1 : -1;
            for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
                var month = self.daysContainer.children[m];
                var startIndex = givenMonth - self.currentMonth === m
                    ? current.$i + delta
                    : delta < 0
                        ? month.children.length - 1
                        : 0;
                var numMonthDays = month.children.length;
                for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
                    var c = month.children[i];
                    if (c.className.indexOf("hidden") === -1 &&
                        isEnabled(c.dateObj) &&
                        Math.abs(current.$i - i) >= Math.abs(delta))
                        return focusOnDayElem(c);
                }
            }
            self.changeMonth(loopDelta);
            focusOnDay(getFirstAvailableDay(loopDelta), 0);
            return undefined;
        }
        function focusOnDay(current, offset) {
            var dayFocused = isInView(document.activeElement || document.body);
            var startElem = current !== undefined
                ? current
                : dayFocused
                    ? document.activeElement
                    : self.selectedDateElem !== undefined && isInView(self.selectedDateElem)
                        ? self.selectedDateElem
                        : self.todayDateElem !== undefined && isInView(self.todayDateElem)
                            ? self.todayDateElem
                            : getFirstAvailableDay(offset > 0 ? 1 : -1);
            if (startElem === undefined) {
                self._input.focus();
            }
            else if (!dayFocused) {
                focusOnDayElem(startElem);
            }
            else {
                getNextAvailableDay(startElem, offset);
            }
        }
        function buildMonthDays(year, month) {
            var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
            var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
            var daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
            var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
            // prepend days from the ending of previous month
            for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
                days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
            }
            // Start at 1 since there is no 0th day
            for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
                days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
            }
            // append days from the next month
            for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth &&
                (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
                days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
            }
            //updateNavigationCurrentMonth();
            var dayContainer = createElement("div", "dayContainer");
            dayContainer.appendChild(days);
            return dayContainer;
        }
        function buildDays() {
            if (self.daysContainer === undefined) {
                return;
            }
            clearNode(self.daysContainer);
            // TODO: week numbers for each month
            if (self.weekNumbers)
                clearNode(self.weekNumbers);
            var frag = document.createDocumentFragment();
            for (var i = 0; i < self.config.showMonths; i++) {
                var d = new Date(self.currentYear, self.currentMonth, 1);
                d.setMonth(self.currentMonth + i);
                frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
            }
            self.daysContainer.appendChild(frag);
            self.days = self.daysContainer.firstChild;
            if (self.config.mode === "range" && self.selectedDates.length === 1) {
                onMouseOver();
            }
        }
        function buildMonthSwitch() {
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType !== "dropdown")
                return;
            var shouldBuildMonth = function (month) {
                if (self.config.minDate !== undefined &&
                    self.currentYear === self.config.minDate.getFullYear() &&
                    month < self.config.minDate.getMonth()) {
                    return false;
                }
                return !(self.config.maxDate !== undefined &&
                    self.currentYear === self.config.maxDate.getFullYear() &&
                    month > self.config.maxDate.getMonth());
            };
            self.monthsDropdownContainer.tabIndex = -1;
            self.monthsDropdownContainer.innerHTML = "";
            for (var i = 0; i < 12; i++) {
                if (!shouldBuildMonth(i))
                    continue;
                var month = createElement("option", "flatpickr-monthDropdown-month");
                month.value = new Date(self.currentYear, i).getMonth().toString();
                month.textContent = monthToStr(i, self.config.shorthandCurrentMonth, self.l10n);
                month.tabIndex = -1;
                if (self.currentMonth === i) {
                    month.selected = true;
                }
                self.monthsDropdownContainer.appendChild(month);
            }
        }
        function buildMonth() {
            var container = createElement("div", "flatpickr-month");
            var monthNavFragment = window.document.createDocumentFragment();
            var monthElement;
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType === "static") {
                monthElement = createElement("span", "cur-month");
            }
            else {
                self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
                self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
                bind(self.monthsDropdownContainer, "change", function (e) {
                    var target = getEventTarget(e);
                    var selectedMonth = parseInt(target.value, 10);
                    self.changeMonth(selectedMonth - self.currentMonth);
                    triggerEvent("onMonthChange");
                });
                buildMonthSwitch();
                monthElement = self.monthsDropdownContainer;
            }
            var yearInput = createNumberInput("cur-year", { tabindex: "-1" });
            var yearElement = yearInput.getElementsByTagName("input")[0];
            yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
            if (self.config.minDate) {
                yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
            }
            if (self.config.maxDate) {
                yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
                yearElement.disabled =
                    !!self.config.minDate &&
                        self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
            }
            var currentMonth = createElement("div", "flatpickr-current-month");
            currentMonth.appendChild(monthElement);
            currentMonth.appendChild(yearInput);
            monthNavFragment.appendChild(currentMonth);
            container.appendChild(monthNavFragment);
            return {
                container: container,
                yearElement: yearElement,
                monthElement: monthElement,
            };
        }
        function buildMonths() {
            clearNode(self.monthNav);
            self.monthNav.appendChild(self.prevMonthNav);
            if (self.config.showMonths) {
                self.yearElements = [];
                self.monthElements = [];
            }
            for (var m = self.config.showMonths; m--;) {
                var month = buildMonth();
                self.yearElements.push(month.yearElement);
                self.monthElements.push(month.monthElement);
                self.monthNav.appendChild(month.container);
            }
            self.monthNav.appendChild(self.nextMonthNav);
        }
        function buildMonthNav() {
            self.monthNav = createElement("div", "flatpickr-months");
            self.yearElements = [];
            self.monthElements = [];
            self.prevMonthNav = createElement("span", "flatpickr-prev-month");
            self.prevMonthNav.innerHTML = self.config.prevArrow;
            self.nextMonthNav = createElement("span", "flatpickr-next-month");
            self.nextMonthNav.innerHTML = self.config.nextArrow;
            buildMonths();
            Object.defineProperty(self, "_hidePrevMonthArrow", {
                get: function () { return self.__hidePrevMonthArrow; },
                set: function (bool) {
                    if (self.__hidePrevMonthArrow !== bool) {
                        toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
                        self.__hidePrevMonthArrow = bool;
                    }
                },
            });
            Object.defineProperty(self, "_hideNextMonthArrow", {
                get: function () { return self.__hideNextMonthArrow; },
                set: function (bool) {
                    if (self.__hideNextMonthArrow !== bool) {
                        toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
                        self.__hideNextMonthArrow = bool;
                    }
                },
            });
            self.currentYearElement = self.yearElements[0];
            updateNavigationCurrentMonth();
            return self.monthNav;
        }
        function buildTime() {
            self.calendarContainer.classList.add("hasTime");
            if (self.config.noCalendar)
                self.calendarContainer.classList.add("noCalendar");
            self.timeContainer = createElement("div", "flatpickr-time");
            self.timeContainer.tabIndex = -1;
            var separator = createElement("span", "flatpickr-time-separator", ":");
            var hourInput = createNumberInput("flatpickr-hour", {
                "aria-label": self.l10n.hourAriaLabel,
            });
            self.hourElement = hourInput.getElementsByTagName("input")[0];
            var minuteInput = createNumberInput("flatpickr-minute", {
                "aria-label": self.l10n.minuteAriaLabel,
            });
            self.minuteElement = minuteInput.getElementsByTagName("input")[0];
            self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
            self.hourElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getHours()
                : self.config.time_24hr
                    ? self.config.defaultHour
                    : military2ampm(self.config.defaultHour));
            self.minuteElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getMinutes()
                : self.config.defaultMinute);
            self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
            self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
            self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
            self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
            self.minuteElement.setAttribute("min", "0");
            self.minuteElement.setAttribute("max", "59");
            self.timeContainer.appendChild(hourInput);
            self.timeContainer.appendChild(separator);
            self.timeContainer.appendChild(minuteInput);
            if (self.config.time_24hr)
                self.timeContainer.classList.add("time24hr");
            if (self.config.enableSeconds) {
                self.timeContainer.classList.add("hasSeconds");
                var secondInput = createNumberInput("flatpickr-second");
                self.secondElement = secondInput.getElementsByTagName("input")[0];
                self.secondElement.value = pad(self.latestSelectedDateObj
                    ? self.latestSelectedDateObj.getSeconds()
                    : self.config.defaultSeconds);
                self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
                self.secondElement.setAttribute("min", "0");
                self.secondElement.setAttribute("max", "59");
                self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
                self.timeContainer.appendChild(secondInput);
            }
            if (!self.config.time_24hr) {
                // add self.amPM if appropriate
                self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj
                    ? self.hourElement.value
                    : self.config.defaultHour) > 11)]);
                self.amPM.title = self.l10n.toggleTitle;
                self.amPM.tabIndex = -1;
                self.timeContainer.appendChild(self.amPM);
            }
            return self.timeContainer;
        }
        function buildWeekdays() {
            if (!self.weekdayContainer)
                self.weekdayContainer = createElement("div", "flatpickr-weekdays");
            else
                clearNode(self.weekdayContainer);
            for (var i = self.config.showMonths; i--;) {
                var container = createElement("div", "flatpickr-weekdaycontainer");
                self.weekdayContainer.appendChild(container);
            }
            updateWeekdays();
            return self.weekdayContainer;
        }
        function updateWeekdays() {
            if (!self.weekdayContainer) {
                return;
            }
            var firstDayOfWeek = self.l10n.firstDayOfWeek;
            var weekdays = __spreadArrays(self.l10n.weekdays.shorthand);
            if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
                weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
            }
            for (var i = self.config.showMonths; i--;) {
                self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
            }
        }
        /* istanbul ignore next */
        function buildWeeks() {
            self.calendarContainer.classList.add("hasWeeks");
            var weekWrapper = createElement("div", "flatpickr-weekwrapper");
            weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
            var weekNumbers = createElement("div", "flatpickr-weeks");
            weekWrapper.appendChild(weekNumbers);
            return {
                weekWrapper: weekWrapper,
                weekNumbers: weekNumbers,
            };
        }
        function changeMonth(value, isOffset) {
            if (isOffset === void 0) { isOffset = true; }
            var delta = isOffset ? value : value - self.currentMonth;
            if ((delta < 0 && self._hidePrevMonthArrow === true) ||
                (delta > 0 && self._hideNextMonthArrow === true))
                return;
            self.currentMonth += delta;
            if (self.currentMonth < 0 || self.currentMonth > 11) {
                self.currentYear += self.currentMonth > 11 ? 1 : -1;
                self.currentMonth = (self.currentMonth + 12) % 12;
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            buildDays();
            triggerEvent("onMonthChange");
            updateNavigationCurrentMonth();
        }
        function clear(triggerChangeEvent, toInitial) {
            if (triggerChangeEvent === void 0) { triggerChangeEvent = true; }
            if (toInitial === void 0) { toInitial = true; }
            self.input.value = "";
            if (self.altInput !== undefined)
                self.altInput.value = "";
            if (self.mobileInput !== undefined)
                self.mobileInput.value = "";
            self.selectedDates = [];
            self.latestSelectedDateObj = undefined;
            if (toInitial === true) {
                self.currentYear = self._initialDate.getFullYear();
                self.currentMonth = self._initialDate.getMonth();
            }
            if (self.config.enableTime === true) {
                var _a = getDefaultHours(), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
                setHours(hours, minutes, seconds);
            }
            self.redraw();
            if (triggerChangeEvent)
                // triggerChangeEvent is true (default) or an Event
                triggerEvent("onChange");
        }
        function close() {
            self.isOpen = false;
            if (!self.isMobile) {
                if (self.calendarContainer !== undefined) {
                    self.calendarContainer.classList.remove("open");
                }
                if (self._input !== undefined) {
                    self._input.classList.remove("active");
                }
            }
            triggerEvent("onClose");
        }
        function destroy() {
            if (self.config !== undefined)
                triggerEvent("onDestroy");
            for (var i = self._handlers.length; i--;) {
                var h = self._handlers[i];
                h.element.removeEventListener(h.event, h.handler, h.options);
            }
            self._handlers = [];
            if (self.mobileInput) {
                if (self.mobileInput.parentNode)
                    self.mobileInput.parentNode.removeChild(self.mobileInput);
                self.mobileInput = undefined;
            }
            else if (self.calendarContainer && self.calendarContainer.parentNode) {
                if (self.config.static && self.calendarContainer.parentNode) {
                    var wrapper = self.calendarContainer.parentNode;
                    wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                    if (wrapper.parentNode) {
                        while (wrapper.firstChild)
                            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                        wrapper.parentNode.removeChild(wrapper);
                    }
                }
                else
                    self.calendarContainer.parentNode.removeChild(self.calendarContainer);
            }
            if (self.altInput) {
                self.input.type = "text";
                if (self.altInput.parentNode)
                    self.altInput.parentNode.removeChild(self.altInput);
                delete self.altInput;
            }
            if (self.input) {
                self.input.type = self.input._type;
                self.input.classList.remove("flatpickr-input");
                self.input.removeAttribute("readonly");
            }
            [
                "_showTimeInput",
                "latestSelectedDateObj",
                "_hideNextMonthArrow",
                "_hidePrevMonthArrow",
                "__hideNextMonthArrow",
                "__hidePrevMonthArrow",
                "isMobile",
                "isOpen",
                "selectedDateElem",
                "minDateHasTime",
                "maxDateHasTime",
                "days",
                "daysContainer",
                "_input",
                "_positionElement",
                "innerContainer",
                "rContainer",
                "monthNav",
                "todayDateElem",
                "calendarContainer",
                "weekdayContainer",
                "prevMonthNav",
                "nextMonthNav",
                "monthsDropdownContainer",
                "currentMonthElement",
                "currentYearElement",
                "navigationCurrentMonth",
                "selectedDateElem",
                "config",
            ].forEach(function (k) {
                try {
                    delete self[k];
                }
                catch (_) { }
            });
        }
        function isCalendarElem(elem) {
            if (self.config.appendTo && self.config.appendTo.contains(elem))
                return true;
            return self.calendarContainer.contains(elem);
        }
        function documentClick(e) {
            if (self.isOpen && !self.config.inline) {
                var eventTarget_1 = getEventTarget(e);
                var isCalendarElement = isCalendarElem(eventTarget_1);
                var isInput = eventTarget_1 === self.input ||
                    eventTarget_1 === self.altInput ||
                    self.element.contains(eventTarget_1) ||
                    // web components
                    // e.path is not present in all browsers. circumventing typechecks
                    (e.path &&
                        e.path.indexOf &&
                        (~e.path.indexOf(self.input) ||
                            ~e.path.indexOf(self.altInput)));
                var lostFocus = e.type === "blur"
                    ? isInput &&
                        e.relatedTarget &&
                        !isCalendarElem(e.relatedTarget)
                    : !isInput &&
                        !isCalendarElement &&
                        !isCalendarElem(e.relatedTarget);
                var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
                    return elem.contains(eventTarget_1);
                });
                if (lostFocus && isIgnored) {
                    if (self.timeContainer !== undefined &&
                        self.minuteElement !== undefined &&
                        self.hourElement !== undefined &&
                        self.input.value !== "" &&
                        self.input.value !== undefined) {
                        updateTime();
                    }
                    self.close();
                    if (self.config &&
                        self.config.mode === "range" &&
                        self.selectedDates.length === 1) {
                        self.clear(false);
                        self.redraw();
                    }
                }
            }
        }
        function changeYear(newYear) {
            if (!newYear ||
                (self.config.minDate && newYear < self.config.minDate.getFullYear()) ||
                (self.config.maxDate && newYear > self.config.maxDate.getFullYear()))
                return;
            var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
            self.currentYear = newYearNum || self.currentYear;
            if (self.config.maxDate &&
                self.currentYear === self.config.maxDate.getFullYear()) {
                self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
            }
            else if (self.config.minDate &&
                self.currentYear === self.config.minDate.getFullYear()) {
                self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
            }
            if (isNewYear) {
                self.redraw();
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
        }
        function isEnabled(date, timeless) {
            if (timeless === void 0) { timeless = true; }
            var dateToCheck = self.parseDate(date, undefined, timeless); // timeless
            if ((self.config.minDate &&
                dateToCheck &&
                compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
                (self.config.maxDate &&
                    dateToCheck &&
                    compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
                return false;
            if (self.config.enable.length === 0 && self.config.disable.length === 0)
                return true;
            if (dateToCheck === undefined)
                return false;
            var bool = self.config.enable.length > 0, array = bool ? self.config.enable : self.config.disable;
            for (var i = 0, d = void 0; i < array.length; i++) {
                d = array[i];
                if (typeof d === "function" &&
                    d(dateToCheck) // disabled by function
                )
                    return bool;
                else if (d instanceof Date &&
                    dateToCheck !== undefined &&
                    d.getTime() === dateToCheck.getTime())
                    // disabled by date
                    return bool;
                else if (typeof d === "string" && dateToCheck !== undefined) {
                    // disabled by date string
                    var parsed = self.parseDate(d, undefined, true);
                    return parsed && parsed.getTime() === dateToCheck.getTime()
                        ? bool
                        : !bool;
                }
                else if (
                // disabled by range
                typeof d === "object" &&
                    dateToCheck !== undefined &&
                    d.from &&
                    d.to &&
                    dateToCheck.getTime() >= d.from.getTime() &&
                    dateToCheck.getTime() <= d.to.getTime())
                    return bool;
            }
            return !bool;
        }
        function isInView(elem) {
            if (self.daysContainer !== undefined)
                return (elem.className.indexOf("hidden") === -1 &&
                    elem.className.indexOf("flatpickr-disabled") === -1 &&
                    self.daysContainer.contains(elem));
            return false;
        }
        function onBlur(e) {
            var isInput = e.target === self._input;
            if (isInput &&
                !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
                self.setDate(self._input.value, true, e.target === self.altInput
                    ? self.config.altFormat
                    : self.config.dateFormat);
            }
        }
        function onKeyDown(e) {
            // e.key                      e.keyCode
            // "Backspace"                        8
            // "Tab"                              9
            // "Enter"                           13
            // "Escape"     (IE "Esc")           27
            // "ArrowLeft"  (IE "Left")          37
            // "ArrowUp"    (IE "Up")            38
            // "ArrowRight" (IE "Right")         39
            // "ArrowDown"  (IE "Down")          40
            // "Delete"     (IE "Del")           46
            var eventTarget = getEventTarget(e);
            var isInput = self.config.wrap
                ? element.contains(eventTarget)
                : eventTarget === self._input;
            var allowInput = self.config.allowInput;
            var allowKeydown = self.isOpen && (!allowInput || !isInput);
            var allowInlineKeydown = self.config.inline && isInput && !allowInput;
            if (e.keyCode === 13 && isInput) {
                if (allowInput) {
                    self.setDate(self._input.value, true, eventTarget === self.altInput
                        ? self.config.altFormat
                        : self.config.dateFormat);
                    return eventTarget.blur();
                }
                else {
                    self.open();
                }
            }
            else if (isCalendarElem(eventTarget) ||
                allowKeydown ||
                allowInlineKeydown) {
                var isTimeObj = !!self.timeContainer &&
                    self.timeContainer.contains(eventTarget);
                switch (e.keyCode) {
                    case 13:
                        if (isTimeObj) {
                            e.preventDefault();
                            updateTime();
                            focusAndClose();
                        }
                        else
                            selectDate(e);
                        break;
                    case 27: // escape
                        e.preventDefault();
                        focusAndClose();
                        break;
                    case 8:
                    case 46:
                        if (isInput && !self.config.allowInput) {
                            e.preventDefault();
                            self.clear();
                        }
                        break;
                    case 37:
                    case 39:
                        if (!isTimeObj && !isInput) {
                            e.preventDefault();
                            if (self.daysContainer !== undefined &&
                                (allowInput === false ||
                                    (document.activeElement && isInView(document.activeElement)))) {
                                var delta_1 = e.keyCode === 39 ? 1 : -1;
                                if (!e.ctrlKey)
                                    focusOnDay(undefined, delta_1);
                                else {
                                    e.stopPropagation();
                                    changeMonth(delta_1);
                                    focusOnDay(getFirstAvailableDay(1), 0);
                                }
                            }
                        }
                        else if (self.hourElement)
                            self.hourElement.focus();
                        break;
                    case 38:
                    case 40:
                        e.preventDefault();
                        var delta = e.keyCode === 40 ? 1 : -1;
                        if ((self.daysContainer &&
                            eventTarget.$i !== undefined) ||
                            eventTarget === self.input ||
                            eventTarget === self.altInput) {
                            if (e.ctrlKey) {
                                e.stopPropagation();
                                changeYear(self.currentYear - delta);
                                focusOnDay(getFirstAvailableDay(1), 0);
                            }
                            else if (!isTimeObj)
                                focusOnDay(undefined, delta * 7);
                        }
                        else if (eventTarget === self.currentYearElement) {
                            changeYear(self.currentYear - delta);
                        }
                        else if (self.config.enableTime) {
                            if (!isTimeObj && self.hourElement)
                                self.hourElement.focus();
                            updateTime(e);
                            self._debouncedChange();
                        }
                        break;
                    case 9:
                        if (isTimeObj) {
                            var elems = [
                                self.hourElement,
                                self.minuteElement,
                                self.secondElement,
                                self.amPM,
                            ]
                                .concat(self.pluginElements)
                                .filter(function (x) { return x; });
                            var i = elems.indexOf(eventTarget);
                            if (i !== -1) {
                                var target = elems[i + (e.shiftKey ? -1 : 1)];
                                e.preventDefault();
                                (target || self._input).focus();
                            }
                        }
                        else if (!self.config.noCalendar &&
                            self.daysContainer &&
                            self.daysContainer.contains(eventTarget) &&
                            e.shiftKey) {
                            e.preventDefault();
                            self._input.focus();
                        }
                        break;
                }
            }
            if (self.amPM !== undefined && eventTarget === self.amPM) {
                switch (e.key) {
                    case self.l10n.amPM[0].charAt(0):
                    case self.l10n.amPM[0].charAt(0).toLowerCase():
                        self.amPM.textContent = self.l10n.amPM[0];
                        setHoursFromInputs();
                        updateValue();
                        break;
                    case self.l10n.amPM[1].charAt(0):
                    case self.l10n.amPM[1].charAt(0).toLowerCase():
                        self.amPM.textContent = self.l10n.amPM[1];
                        setHoursFromInputs();
                        updateValue();
                        break;
                }
            }
            if (isInput || isCalendarElem(eventTarget)) {
                triggerEvent("onKeyDown", e);
            }
        }
        function onMouseOver(elem) {
            if (self.selectedDates.length !== 1 ||
                (elem &&
                    (!elem.classList.contains("flatpickr-day") ||
                        elem.classList.contains("flatpickr-disabled"))))
                return;
            var hoverDate = elem
                ? elem.dateObj.getTime()
                : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
            var containsDisabled = false;
            var minRange = 0, maxRange = 0;
            for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
                if (!isEnabled(new Date(t), true)) {
                    containsDisabled =
                        containsDisabled || (t > rangeStartDate && t < rangeEndDate);
                    if (t < initialDate && (!minRange || t > minRange))
                        minRange = t;
                    else if (t > initialDate && (!maxRange || t < maxRange))
                        maxRange = t;
                }
            }
            for (var m = 0; m < self.config.showMonths; m++) {
                var month = self.daysContainer.children[m];
                var _loop_1 = function (i, l) {
                    var dayElem = month.children[i], date = dayElem.dateObj;
                    var timestamp = date.getTime();
                    var outOfRange = (minRange > 0 && timestamp < minRange) ||
                        (maxRange > 0 && timestamp > maxRange);
                    if (outOfRange) {
                        dayElem.classList.add("notAllowed");
                        ["inRange", "startRange", "endRange"].forEach(function (c) {
                            dayElem.classList.remove(c);
                        });
                        return "continue";
                    }
                    else if (containsDisabled && !outOfRange)
                        return "continue";
                    ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
                        dayElem.classList.remove(c);
                    });
                    if (elem !== undefined) {
                        elem.classList.add(hoverDate <= self.selectedDates[0].getTime()
                            ? "startRange"
                            : "endRange");
                        if (initialDate < hoverDate && timestamp === initialDate)
                            dayElem.classList.add("startRange");
                        else if (initialDate > hoverDate && timestamp === initialDate)
                            dayElem.classList.add("endRange");
                        if (timestamp >= minRange &&
                            (maxRange === 0 || timestamp <= maxRange) &&
                            isBetween(timestamp, initialDate, hoverDate))
                            dayElem.classList.add("inRange");
                    }
                };
                for (var i = 0, l = month.children.length; i < l; i++) {
                    _loop_1(i, l);
                }
            }
        }
        function onResize() {
            if (self.isOpen && !self.config.static && !self.config.inline)
                positionCalendar();
        }
        function open(e, positionElement) {
            if (positionElement === void 0) { positionElement = self._positionElement; }
            if (self.isMobile === true) {
                if (e) {
                    e.preventDefault();
                    var eventTarget = getEventTarget(e);
                    eventTarget && eventTarget.blur();
                }
                if (self.mobileInput !== undefined) {
                    self.mobileInput.focus();
                    self.mobileInput.click();
                }
                triggerEvent("onOpen");
                return;
            }
            if (self._input.disabled || self.config.inline)
                return;
            var wasOpen = self.isOpen;
            self.isOpen = true;
            if (!wasOpen) {
                self.calendarContainer.classList.add("open");
                self._input.classList.add("active");
                triggerEvent("onOpen");
                positionCalendar(positionElement);
            }
            if (self.config.enableTime === true && self.config.noCalendar === true) {
                if (self.config.allowInput === false &&
                    (e === undefined ||
                        !self.timeContainer.contains(e.relatedTarget))) {
                    setTimeout(function () { return self.hourElement.select(); }, 50);
                }
            }
        }
        function minMaxDateSetter(type) {
            return function (date) {
                var dateObj = (self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat));
                var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
                if (dateObj !== undefined) {
                    self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] =
                        dateObj.getHours() > 0 ||
                            dateObj.getMinutes() > 0 ||
                            dateObj.getSeconds() > 0;
                }
                if (self.selectedDates) {
                    self.selectedDates = self.selectedDates.filter(function (d) { return isEnabled(d); });
                    if (!self.selectedDates.length && type === "min")
                        setHoursFromDate(dateObj);
                    updateValue();
                }
                if (self.daysContainer) {
                    redraw();
                    if (dateObj !== undefined)
                        self.currentYearElement[type] = dateObj.getFullYear().toString();
                    else
                        self.currentYearElement.removeAttribute(type);
                    self.currentYearElement.disabled =
                        !!inverseDateObj &&
                            dateObj !== undefined &&
                            inverseDateObj.getFullYear() === dateObj.getFullYear();
                }
            };
        }
        function parseConfig() {
            var boolOpts = [
                "wrap",
                "weekNumbers",
                "allowInput",
                "allowInvalidPreload",
                "clickOpens",
                "time_24hr",
                "enableTime",
                "noCalendar",
                "altInput",
                "shorthandCurrentMonth",
                "inline",
                "static",
                "enableSeconds",
                "disableMobile",
            ];
            var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
            var formats = {};
            self.config.parseDate = userConfig.parseDate;
            self.config.formatDate = userConfig.formatDate;
            Object.defineProperty(self.config, "enable", {
                get: function () { return self.config._enable; },
                set: function (dates) {
                    self.config._enable = parseDateRules(dates);
                },
            });
            Object.defineProperty(self.config, "disable", {
                get: function () { return self.config._disable; },
                set: function (dates) {
                    self.config._disable = parseDateRules(dates);
                },
            });
            var timeMode = userConfig.mode === "time";
            if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
                var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
                formats.dateFormat =
                    userConfig.noCalendar || timeMode
                        ? "H:i" + (userConfig.enableSeconds ? ":S" : "")
                        : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
            }
            if (userConfig.altInput &&
                (userConfig.enableTime || timeMode) &&
                !userConfig.altFormat) {
                var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
                formats.altFormat =
                    userConfig.noCalendar || timeMode
                        ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
                        : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
            }
            Object.defineProperty(self.config, "minDate", {
                get: function () { return self.config._minDate; },
                set: minMaxDateSetter("min"),
            });
            Object.defineProperty(self.config, "maxDate", {
                get: function () { return self.config._maxDate; },
                set: minMaxDateSetter("max"),
            });
            var minMaxTimeSetter = function (type) { return function (val) {
                self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
            }; };
            Object.defineProperty(self.config, "minTime", {
                get: function () { return self.config._minTime; },
                set: minMaxTimeSetter("min"),
            });
            Object.defineProperty(self.config, "maxTime", {
                get: function () { return self.config._maxTime; },
                set: minMaxTimeSetter("max"),
            });
            if (userConfig.mode === "time") {
                self.config.noCalendar = true;
                self.config.enableTime = true;
            }
            Object.assign(self.config, formats, userConfig);
            for (var i = 0; i < boolOpts.length; i++)
                // https://github.com/microsoft/TypeScript/issues/31663
                self.config[boolOpts[i]] =
                    self.config[boolOpts[i]] === true ||
                        self.config[boolOpts[i]] === "true";
            HOOKS.filter(function (hook) { return self.config[hook] !== undefined; }).forEach(function (hook) {
                self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
            });
            self.isMobile =
                !self.config.disableMobile &&
                    !self.config.inline &&
                    self.config.mode === "single" &&
                    !self.config.disable.length &&
                    !self.config.enable.length &&
                    !self.config.weekNumbers &&
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            for (var i = 0; i < self.config.plugins.length; i++) {
                var pluginConf = self.config.plugins[i](self) || {};
                for (var key in pluginConf) {
                    if (HOOKS.indexOf(key) > -1) {
                        self.config[key] = arrayify(pluginConf[key])
                            .map(bindToInstance)
                            .concat(self.config[key]);
                    }
                    else if (typeof userConfig[key] === "undefined")
                        self.config[key] = pluginConf[key];
                }
            }
            if (!userConfig.altInputClass) {
                self.config.altInputClass =
                    getInputElem().className + " " + self.config.altInputClass;
            }
            triggerEvent("onParseConfig");
        }
        function getInputElem() {
            return self.config.wrap
                ? element.querySelector("[data-input]")
                : element;
        }
        function setupLocale() {
            if (typeof self.config.locale !== "object" &&
                typeof flatpickr.l10ns[self.config.locale] === "undefined")
                self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
            self.l10n = __assign(__assign({}, flatpickr.l10ns.default), (typeof self.config.locale === "object"
                ? self.config.locale
                : self.config.locale !== "default"
                    ? flatpickr.l10ns[self.config.locale]
                    : undefined));
            tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
            var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
            if (userConfig.time_24hr === undefined &&
                flatpickr.defaultConfig.time_24hr === undefined) {
                self.config.time_24hr = self.l10n.time_24hr;
            }
            self.formatDate = createDateFormatter(self);
            self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
        }
        function positionCalendar(customPositionElement) {
            if (self.calendarContainer === undefined)
                return;
            triggerEvent("onPreCalendarPosition");
            var positionElement = customPositionElement || self._positionElement;
            var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, (function (acc, child) { return acc + child.offsetHeight; }), 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" ||
                (configPosVertical !== "below" &&
                    distanceFromBottom < calendarHeight &&
                    inputBounds.top > calendarHeight);
            var top = window.pageYOffset +
                inputBounds.top +
                (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
            toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
            toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
            if (self.config.inline)
                return;
            var left = window.pageXOffset + inputBounds.left;
            var isCenter = false;
            var isRight = false;
            if (configPosHorizontal === "center") {
                left -= (calendarWidth - inputBounds.width) / 2;
                isCenter = true;
            }
            else if (configPosHorizontal === "right") {
                left -= calendarWidth - inputBounds.width;
                isRight = true;
            }
            toggleClass(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
            toggleClass(self.calendarContainer, "arrowCenter", isCenter);
            toggleClass(self.calendarContainer, "arrowRight", isRight);
            var right = window.document.body.offsetWidth -
                (window.pageXOffset + inputBounds.right);
            var rightMost = left + calendarWidth > window.document.body.offsetWidth;
            var centerMost = right + calendarWidth > window.document.body.offsetWidth;
            toggleClass(self.calendarContainer, "rightMost", rightMost);
            if (self.config.static)
                return;
            self.calendarContainer.style.top = top + "px";
            if (!rightMost) {
                self.calendarContainer.style.left = left + "px";
                self.calendarContainer.style.right = "auto";
            }
            else if (!centerMost) {
                self.calendarContainer.style.left = "auto";
                self.calendarContainer.style.right = right + "px";
            }
            else {
                var doc = getDocumentStyleSheet();
                // some testing environments don't have css support
                if (doc === undefined)
                    return;
                var bodyWidth = window.document.body.offsetWidth;
                var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
                var centerBefore = ".flatpickr-calendar.centerMost:before";
                var centerAfter = ".flatpickr-calendar.centerMost:after";
                var centerIndex = doc.cssRules.length;
                var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
                toggleClass(self.calendarContainer, "rightMost", false);
                toggleClass(self.calendarContainer, "centerMost", true);
                doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
                self.calendarContainer.style.left = centerLeft + "px";
                self.calendarContainer.style.right = "auto";
            }
        }
        function getDocumentStyleSheet() {
            var editableSheet = null;
            for (var i = 0; i < document.styleSheets.length; i++) {
                var sheet = document.styleSheets[i];
                try {
                    sheet.cssRules;
                }
                catch (err) {
                    continue;
                }
                editableSheet = sheet;
                break;
            }
            return editableSheet != null ? editableSheet : createStyleSheet();
        }
        function createStyleSheet() {
            var style = document.createElement("style");
            document.head.appendChild(style);
            return style.sheet;
        }
        function redraw() {
            if (self.config.noCalendar || self.isMobile)
                return;
            buildMonthSwitch();
            updateNavigationCurrentMonth();
            buildDays();
        }
        function focusAndClose() {
            self._input.focus();
            if (window.navigator.userAgent.indexOf("MSIE") !== -1 ||
                navigator.msMaxTouchPoints !== undefined) {
                // hack - bugs in the way IE handles focus keeps the calendar open
                setTimeout(self.close, 0);
            }
            else {
                self.close();
            }
        }
        function selectDate(e) {
            e.preventDefault();
            e.stopPropagation();
            var isSelectable = function (day) {
                return day.classList &&
                    day.classList.contains("flatpickr-day") &&
                    !day.classList.contains("flatpickr-disabled") &&
                    !day.classList.contains("notAllowed");
            };
            var t = findParent(getEventTarget(e), isSelectable);
            if (t === undefined)
                return;
            var target = t;
            var selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
            var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth ||
                selectedDate.getMonth() >
                    self.currentMonth + self.config.showMonths - 1) &&
                self.config.mode !== "range";
            self.selectedDateElem = target;
            if (self.config.mode === "single")
                self.selectedDates = [selectedDate];
            else if (self.config.mode === "multiple") {
                var selectedIndex = isDateSelected(selectedDate);
                if (selectedIndex)
                    self.selectedDates.splice(parseInt(selectedIndex), 1);
                else
                    self.selectedDates.push(selectedDate);
            }
            else if (self.config.mode === "range") {
                if (self.selectedDates.length === 2) {
                    self.clear(false, false);
                }
                self.latestSelectedDateObj = selectedDate;
                self.selectedDates.push(selectedDate);
                // unless selecting same date twice, sort ascendingly
                if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
                    self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
            }
            setHoursFromInputs();
            if (shouldChangeMonth) {
                var isNewYear = self.currentYear !== selectedDate.getFullYear();
                self.currentYear = selectedDate.getFullYear();
                self.currentMonth = selectedDate.getMonth();
                if (isNewYear) {
                    triggerEvent("onYearChange");
                    buildMonthSwitch();
                }
                triggerEvent("onMonthChange");
            }
            updateNavigationCurrentMonth();
            buildDays();
            updateValue();
            // maintain focus
            if (!shouldChangeMonth &&
                self.config.mode !== "range" &&
                self.config.showMonths === 1)
                focusOnDayElem(target);
            else if (self.selectedDateElem !== undefined &&
                self.hourElement === undefined) {
                self.selectedDateElem && self.selectedDateElem.focus();
            }
            if (self.hourElement !== undefined)
                self.hourElement !== undefined && self.hourElement.focus();
            if (self.config.closeOnSelect) {
                var single = self.config.mode === "single" && !self.config.enableTime;
                var range = self.config.mode === "range" &&
                    self.selectedDates.length === 2 &&
                    !self.config.enableTime;
                if (single || range) {
                    focusAndClose();
                }
            }
            triggerChange();
        }
        var CALLBACKS = {
            locale: [setupLocale, updateWeekdays],
            showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
            minDate: [jumpToDate],
            maxDate: [jumpToDate],
        };
        function set(option, value) {
            if (option !== null && typeof option === "object") {
                Object.assign(self.config, option);
                for (var key in option) {
                    if (CALLBACKS[key] !== undefined)
                        CALLBACKS[key].forEach(function (x) { return x(); });
                }
            }
            else {
                self.config[option] = value;
                if (CALLBACKS[option] !== undefined)
                    CALLBACKS[option].forEach(function (x) { return x(); });
                else if (HOOKS.indexOf(option) > -1)
                    self.config[option] = arrayify(value);
            }
            self.redraw();
            updateValue(true);
        }
        function setSelectedDate(inputDate, format) {
            var dates = [];
            if (inputDate instanceof Array)
                dates = inputDate.map(function (d) { return self.parseDate(d, format); });
            else if (inputDate instanceof Date || typeof inputDate === "number")
                dates = [self.parseDate(inputDate, format)];
            else if (typeof inputDate === "string") {
                switch (self.config.mode) {
                    case "single":
                    case "time":
                        dates = [self.parseDate(inputDate, format)];
                        break;
                    case "multiple":
                        dates = inputDate
                            .split(self.config.conjunction)
                            .map(function (date) { return self.parseDate(date, format); });
                        break;
                    case "range":
                        dates = inputDate
                            .split(self.l10n.rangeSeparator)
                            .map(function (date) { return self.parseDate(date, format); });
                        break;
                }
            }
            else
                self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
            self.selectedDates = (self.config.allowInvalidPreload
                ? dates
                : dates.filter(function (d) { return d instanceof Date && isEnabled(d, false); }));
            if (self.config.mode === "range")
                self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
        }
        function setDate(date, triggerChange, format) {
            if (triggerChange === void 0) { triggerChange = false; }
            if (format === void 0) { format = self.config.dateFormat; }
            if ((date !== 0 && !date) || (date instanceof Array && date.length === 0))
                return self.clear(triggerChange);
            setSelectedDate(date, format);
            self.latestSelectedDateObj =
                self.selectedDates[self.selectedDates.length - 1];
            self.redraw();
            jumpToDate(undefined, triggerChange);
            setHoursFromDate();
            if (self.selectedDates.length === 0) {
                self.clear(false);
            }
            updateValue(triggerChange);
            if (triggerChange)
                triggerEvent("onChange");
        }
        function parseDateRules(arr) {
            return arr
                .slice()
                .map(function (rule) {
                if (typeof rule === "string" ||
                    typeof rule === "number" ||
                    rule instanceof Date) {
                    return self.parseDate(rule, undefined, true);
                }
                else if (rule &&
                    typeof rule === "object" &&
                    rule.from &&
                    rule.to)
                    return {
                        from: self.parseDate(rule.from, undefined),
                        to: self.parseDate(rule.to, undefined),
                    };
                return rule;
            })
                .filter(function (x) { return x; }); // remove falsy values
        }
        function setupDates() {
            self.selectedDates = [];
            self.now = self.parseDate(self.config.now) || new Date();
            // Workaround IE11 setting placeholder as the input's value
            var preloadedDate = self.config.defaultDate ||
                ((self.input.nodeName === "INPUT" ||
                    self.input.nodeName === "TEXTAREA") &&
                    self.input.placeholder &&
                    self.input.value === self.input.placeholder
                    ? null
                    : self.input.value);
            if (preloadedDate)
                setSelectedDate(preloadedDate, self.config.dateFormat);
            self._initialDate =
                self.selectedDates.length > 0
                    ? self.selectedDates[0]
                    : self.config.minDate &&
                        self.config.minDate.getTime() > self.now.getTime()
                        ? self.config.minDate
                        : self.config.maxDate &&
                            self.config.maxDate.getTime() < self.now.getTime()
                            ? self.config.maxDate
                            : self.now;
            self.currentYear = self._initialDate.getFullYear();
            self.currentMonth = self._initialDate.getMonth();
            if (self.selectedDates.length > 0)
                self.latestSelectedDateObj = self.selectedDates[0];
            if (self.config.minTime !== undefined)
                self.config.minTime = self.parseDate(self.config.minTime, "H:i");
            if (self.config.maxTime !== undefined)
                self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
            self.minDateHasTime =
                !!self.config.minDate &&
                    (self.config.minDate.getHours() > 0 ||
                        self.config.minDate.getMinutes() > 0 ||
                        self.config.minDate.getSeconds() > 0);
            self.maxDateHasTime =
                !!self.config.maxDate &&
                    (self.config.maxDate.getHours() > 0 ||
                        self.config.maxDate.getMinutes() > 0 ||
                        self.config.maxDate.getSeconds() > 0);
        }
        function setupInputs() {
            self.input = getInputElem();
            /* istanbul ignore next */
            if (!self.input) {
                self.config.errorHandler(new Error("Invalid input element specified"));
                return;
            }
            // hack: store previous type to restore it after destroy()
            self.input._type = self.input.type;
            self.input.type = "text";
            self.input.classList.add("flatpickr-input");
            self._input = self.input;
            if (self.config.altInput) {
                // replicate self.element
                self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
                self._input = self.altInput;
                self.altInput.placeholder = self.input.placeholder;
                self.altInput.disabled = self.input.disabled;
                self.altInput.required = self.input.required;
                self.altInput.tabIndex = self.input.tabIndex;
                self.altInput.type = "text";
                self.input.setAttribute("type", "hidden");
                if (!self.config.static && self.input.parentNode)
                    self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
            }
            if (!self.config.allowInput)
                self._input.setAttribute("readonly", "readonly");
            self._positionElement = self.config.positionElement || self._input;
        }
        function setupMobile() {
            var inputType = self.config.enableTime
                ? self.config.noCalendar
                    ? "time"
                    : "datetime-local"
                : "date";
            self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
            self.mobileInput.tabIndex = 1;
            self.mobileInput.type = inputType;
            self.mobileInput.disabled = self.input.disabled;
            self.mobileInput.required = self.input.required;
            self.mobileInput.placeholder = self.input.placeholder;
            self.mobileFormatStr =
                inputType === "datetime-local"
                    ? "Y-m-d\\TH:i:S"
                    : inputType === "date"
                        ? "Y-m-d"
                        : "H:i:S";
            if (self.selectedDates.length > 0) {
                self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
            }
            if (self.config.minDate)
                self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
            if (self.config.maxDate)
                self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
            if (self.input.getAttribute("step"))
                self.mobileInput.step = String(self.input.getAttribute("step"));
            self.input.type = "hidden";
            if (self.altInput !== undefined)
                self.altInput.type = "hidden";
            try {
                if (self.input.parentNode)
                    self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
            }
            catch (_a) { }
            bind(self.mobileInput, "change", function (e) {
                self.setDate(getEventTarget(e).value, false, self.mobileFormatStr);
                triggerEvent("onChange");
                triggerEvent("onClose");
            });
        }
        function toggle(e) {
            if (self.isOpen === true)
                return self.close();
            self.open(e);
        }
        function triggerEvent(event, data) {
            // If the instance has been destroyed already, all hooks have been removed
            if (self.config === undefined)
                return;
            var hooks = self.config[event];
            if (hooks !== undefined && hooks.length > 0) {
                for (var i = 0; hooks[i] && i < hooks.length; i++)
                    hooks[i](self.selectedDates, self.input.value, self, data);
            }
            if (event === "onChange") {
                self.input.dispatchEvent(createEvent("change"));
                // many front-end frameworks bind to the input event
                self.input.dispatchEvent(createEvent("input"));
            }
        }
        function createEvent(name) {
            var e = document.createEvent("Event");
            e.initEvent(name, true, true);
            return e;
        }
        function isDateSelected(date) {
            for (var i = 0; i < self.selectedDates.length; i++) {
                if (compareDates(self.selectedDates[i], date) === 0)
                    return "" + i;
            }
            return false;
        }
        function isDateInRange(date) {
            if (self.config.mode !== "range" || self.selectedDates.length < 2)
                return false;
            return (compareDates(date, self.selectedDates[0]) >= 0 &&
                compareDates(date, self.selectedDates[1]) <= 0);
        }
        function updateNavigationCurrentMonth() {
            if (self.config.noCalendar || self.isMobile || !self.monthNav)
                return;
            self.yearElements.forEach(function (yearElement, i) {
                var d = new Date(self.currentYear, self.currentMonth, 1);
                d.setMonth(self.currentMonth + i);
                if (self.config.showMonths > 1 ||
                    self.config.monthSelectorType === "static") {
                    self.monthElements[i].textContent =
                        monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
                }
                else {
                    self.monthsDropdownContainer.value = d.getMonth().toString();
                }
                yearElement.value = d.getFullYear().toString();
            });
            self._hidePrevMonthArrow =
                self.config.minDate !== undefined &&
                    (self.currentYear === self.config.minDate.getFullYear()
                        ? self.currentMonth <= self.config.minDate.getMonth()
                        : self.currentYear < self.config.minDate.getFullYear());
            self._hideNextMonthArrow =
                self.config.maxDate !== undefined &&
                    (self.currentYear === self.config.maxDate.getFullYear()
                        ? self.currentMonth + 1 > self.config.maxDate.getMonth()
                        : self.currentYear > self.config.maxDate.getFullYear());
        }
        function getDateStr(format) {
            return self.selectedDates
                .map(function (dObj) { return self.formatDate(dObj, format); })
                .filter(function (d, i, arr) {
                return self.config.mode !== "range" ||
                    self.config.enableTime ||
                    arr.indexOf(d) === i;
            })
                .join(self.config.mode !== "range"
                ? self.config.conjunction
                : self.l10n.rangeSeparator);
        }
        /**
         * Updates the values of inputs associated with the calendar
         */
        function updateValue(triggerChange) {
            if (triggerChange === void 0) { triggerChange = true; }
            if (self.mobileInput !== undefined && self.mobileFormatStr) {
                self.mobileInput.value =
                    self.latestSelectedDateObj !== undefined
                        ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
                        : "";
            }
            self.input.value = getDateStr(self.config.dateFormat);
            if (self.altInput !== undefined) {
                self.altInput.value = getDateStr(self.config.altFormat);
            }
            if (triggerChange !== false)
                triggerEvent("onValueUpdate");
        }
        function onMonthNavClick(e) {
            var eventTarget = getEventTarget(e);
            var isPrevMonth = self.prevMonthNav.contains(eventTarget);
            var isNextMonth = self.nextMonthNav.contains(eventTarget);
            if (isPrevMonth || isNextMonth) {
                changeMonth(isPrevMonth ? -1 : 1);
            }
            else if (self.yearElements.indexOf(eventTarget) >= 0) {
                eventTarget.select();
            }
            else if (eventTarget.classList.contains("arrowUp")) {
                self.changeYear(self.currentYear + 1);
            }
            else if (eventTarget.classList.contains("arrowDown")) {
                self.changeYear(self.currentYear - 1);
            }
        }
        function timeWrapper(e) {
            e.preventDefault();
            var isKeyDown = e.type === "keydown", eventTarget = getEventTarget(e), input = eventTarget;
            if (self.amPM !== undefined && eventTarget === self.amPM) {
                self.amPM.textContent =
                    self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
            }
            var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta ||
                (isKeyDown ? (e.which === 38 ? 1 : -1) : 0);
            var newValue = curValue + step * delta;
            if (typeof input.value !== "undefined" && input.value.length === 2) {
                var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
                if (newValue < min) {
                    newValue =
                        max +
                            newValue +
                            int(!isHourElem) +
                            (int(isHourElem) && int(!self.amPM));
                    if (isMinuteElem)
                        incrementNumInput(undefined, -1, self.hourElement);
                }
                else if (newValue > max) {
                    newValue =
                        input === self.hourElement ? newValue - max - int(!self.amPM) : min;
                    if (isMinuteElem)
                        incrementNumInput(undefined, 1, self.hourElement);
                }
                if (self.amPM &&
                    isHourElem &&
                    (step === 1
                        ? newValue + curValue === 23
                        : Math.abs(newValue - curValue) > step)) {
                    self.amPM.textContent =
                        self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
                }
                input.value = pad(newValue);
            }
        }
        init();
        return self;
    }
    /* istanbul ignore next */
    function _flatpickr(nodeList, config) {
        // static list
        var nodes = Array.prototype.slice
            .call(nodeList)
            .filter(function (x) { return x instanceof HTMLElement; });
        var instances = [];
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            try {
                if (node.getAttribute("data-fp-omit") !== null)
                    continue;
                if (node._flatpickr !== undefined) {
                    node._flatpickr.destroy();
                    node._flatpickr = undefined;
                }
                node._flatpickr = FlatpickrInstance(node, config || {});
                instances.push(node._flatpickr);
            }
            catch (e) {
                console.error(e);
            }
        }
        return instances.length === 1 ? instances[0] : instances;
    }
    /* istanbul ignore next */
    if (typeof HTMLElement !== "undefined" &&
        typeof HTMLCollection !== "undefined" &&
        typeof NodeList !== "undefined") {
        // browser env
        HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
            return _flatpickr(this, config);
        };
        HTMLElement.prototype.flatpickr = function (config) {
            return _flatpickr([this], config);
        };
    }
    /* istanbul ignore next */
    var flatpickr = function (selector, config) {
        if (typeof selector === "string") {
            return _flatpickr(window.document.querySelectorAll(selector), config);
        }
        else if (selector instanceof Node) {
            return _flatpickr([selector], config);
        }
        else {
            return _flatpickr(selector, config);
        }
    };
    /* istanbul ignore next */
    flatpickr.defaultConfig = {};
    flatpickr.l10ns = {
        en: __assign({}, english),
        default: __assign({}, english),
    };
    flatpickr.localize = function (l10n) {
        flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
    };
    flatpickr.setDefaults = function (config) {
        flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
    };
    flatpickr.parseDate = createDateParser({});
    flatpickr.formatDate = createDateFormatter({});
    flatpickr.compareDates = compareDates;
    /* istanbul ignore next */
    if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
        jQuery.fn.flatpickr = function (config) {
            return _flatpickr(this, config);
        };
    }
    // eslint-disable-next-line @typescript-eslint/camelcase
    Date.prototype.fp_incr = function (days) {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
    };
    if (typeof window !== "undefined") {
        window.flatpickr = flatpickr;
    }

    return flatpickr;

})));


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/Destination.js":
/*!****************************!*\
  !*** ./src/Destination.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Destination {
  constructor(data) {
    this.id = data.id;
    this.name = data.destination;
    this.estimatedLodgingCostPerDay = data.estimatedLodgingCostPerDay;
    this.estimatedFlightCostPerPerson = data.estimatedFlightCostPerPerson;
    this.image = data.image;
    this.alt = data.alt;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Destination);


/***/ }),

/***/ "./src/Trip.js":
/*!*********************!*\
  !*** ./src/Trip.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time.js */ "./src/time.js");


class Trip {
  constructor(data) {
    this.id = data.id;
    this.userID = data.userID;
    this.destinationID = data.destinationID;
    this.travelers = data.travelers;
    this.duration = data.duration;
    this.status = data.status;
    this.suggestedActivities = data.suggestedActivities;
    if(typeof(data.date) === 'object') this.date = data.date;
    else {
      let [year, month, day] = data.date.split('/');
      this.date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    }
  }

  getName() {
    return (this.destination ? this.destination.name : null);
  }

  getBaseCost() {
    if (this.destination === undefined) return null;
    let flightsCost = this.destination.estimatedFlightCostPerPerson * this.travelers;
    let lodgingCost = this.destination.estimatedLodgingCostPerDay * this.duration;
    return this.roundToCent(flightsCost + lodgingCost);
  }

  getAgentCost() {
    if (this.destination === undefined) return null;
    return this.roundToCent(.1 * this.getBaseCost());
  }

  roundToCent(number) {
    return Math.round(number * 100) / 100;
  }

  getYear() {
    return this.date.getFullYear();
  }

  isCurrent(today) {
    return _time_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBetween(this.date, today, _time_js__WEBPACK_IMPORTED_MODULE_0__["default"].daysFromDate(this.date, this.duration));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Trip);


/***/ }),

/***/ "./src/TripRepo.js":
/*!*************************!*\
  !*** ./src/TripRepo.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Trip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Trip.js */ "./src/Trip.js");
/* harmony import */ var _src_time_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/time.js */ "./src/time.js");



class TripRepo {
  constructor(data, destinations = [], isNew = true) {
    if (isNew) {
      this.data = data.map(tripInfo => {
        let trip = new _src_Trip_js__WEBPACK_IMPORTED_MODULE_0__["default"](tripInfo);
        trip.destination = destinations.find(dest => dest.id === trip.destinationID);
        return trip;
      });
    } else this.data = data;
    this.countIDs();
  }

  getFolioByUser(id) {
    return new TripRepo(this.data.filter(trip => trip.userID === id), null, false);
  }

  getFolioByYear(year) {
    let beg = new Date( year, 0, 0);
    let end = new Date( year + 1, 0, 0);
    return new TripRepo(this.data.filter(trip => _src_time_js__WEBPACK_IMPORTED_MODULE_1__["default"].isBetween(beg, trip.date, end)), null, false);
  }

  getUpcomingFolio(date) {
    return new TripRepo(this.data.filter(trip => _src_time_js__WEBPACK_IMPORTED_MODULE_1__["default"].isBefore(date, trip.date)), null, false);
  }

  getPastFolio(date) {
    return new TripRepo(this.data.filter(trip => {
      let endDate = _src_time_js__WEBPACK_IMPORTED_MODULE_1__["default"].daysFromDate(trip.date, trip.duration);
      return _src_time_js__WEBPACK_IMPORTED_MODULE_1__["default"].isAfter(date, endDate);
    }), null, false);
  }

  getCurrentFolio(date) {
    return new TripRepo(this.data.filter(trip => trip.isCurrent(date)), null, false);
  }

  getNewTripID() {
    for(let i = 0; i < this.data.length; i++) {
      let newIDLow = this.data[i].id - 1;
      if (this.tripIDs[newIDLow] === undefined && newIDLow > 0) return newIDLow;
      let newIDHigh = this.data[i].id + 1;
      if (this.tripIDs[newIDHigh] === undefined) return newIDHigh;
    }
    throw 'Corrupted ID Inventory Object'
  }

  countIDs() {
    this.tripIDs = this.data.reduce((memory, trip) => {
      memory[trip.id] = trip;
      return memory;
    }, {})
  }

  addNewTrip(trip) {
    this.data.push(trip);
    this.tripIDs[trip.id] = trip;
  }

  deleteTripByID(tripID) {
    let tripIndex = this.data.findIndex(trip => trip.id == tripID);
    this.data.splice(tripIndex, 1);
    this.tripIDs[tripID] = undefined;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (TripRepo);


/***/ }),

/***/ "./src/User.js":
/*!*********************!*\
  !*** ./src/User.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.travelerType = data.travelerType;
    this.folio = [];
  }

  getBaseCostAll(year) {
    return this.getTotalYearStat(year, 'getBaseCost')
  }

  getAgentCostAll(year) {
    return this.getTotalYearStat(year, 'getAgentCost')
  }

  getTotalYearStat(year, funcName) {
    return this.folio.data.reduce((total, trip) => {
      if(trip.getYear() === year) total += trip[funcName]();
      return total;
    }, 0);
  }

  getTotalCost(year) {
    return this.getAgentCostAll(year) + this.getBaseCostAll(year)
  }
}

/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/normalize.scss":
/*!********************************!*\
  !*** ./src/css/normalize.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./normalize.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/normalize.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/domscripts.js":
/*!***************************!*\
  !*** ./src/domscripts.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time.js */ "./src/time.js");


let domscripts = {
  createTripCard(trip, isUpcoming) {
    let start = trip.date.toString().slice(0, 15);
    let end = _time_js__WEBPACK_IMPORTED_MODULE_0__["default"].daysFromDate(trip.date, trip.duration).toString().slice(0, 15);
    return `
      <div class='trip-card' data-value="${trip.id}">
        <img src='${trip.destination.image}' alt='${trip.destination.alt}'/>
        <div class='card-text'>
          <h1 class='main-font'>${trip.getName()}</h1>
          <h3 class='main-font'>Flights and lodging for: ${trip.travelers} ($${trip.getBaseCost() + trip.getAgentCost()})</h3>
          <h3 class='main-font'>Departure Date: ${start}</h3>
          <h3 class='main-font'>Return Date: ${end}</h3>
          ${isUpcoming
            ? `
            <h3 class='main-font'>Status: ${trip.status}</h3>
            <button class=\'main-font destroy-card\'>Cancel</button>
            `
            : ''}
        </div>
      </div>
    `
  },

  createDestinationsSelection(destinations) {
    destinations.sort((a, b) => a.name.localeCompare(b.name));
    let select = document.querySelector('#destinations');
    destinations.forEach(destination  => {
      select.innerHTML += `<option value='${destination.id}'>${destination.name}</option>`
    });
  },

  createNumberSelector() {
    let select = document.querySelector('#number-of-people');
    for(let i = 1; i <= 20; i++) select.innerHTML += `<option value='${i}'>${i}</option>`;
  },

  setCostDisplay(trip) {
    document.querySelector('#base-cost').innerText = `Est. base cost: $${trip.getBaseCost()}`;
    document.querySelector('#agent-cost').innerText = `+assorted fees: $${trip.getAgentCost()}`;
    document.querySelector('#total').innerText = `   total: $${trip.getBaseCost() + trip.getAgentCost()}`;
  },

  clearCostDisplay() {
    document.querySelector('#base-cost').innerText = ``;
    document.querySelector('#agent-cost').innerText = ``;
    document.querySelector('#total').innerText = ``;
  },

  createCostSummary(shownTrips, user) {
    let shownTripsCost = shownTrips.reduce((sum, trip) => sum + trip.getBaseCost() + trip.getAgentCost(), 0);
    return `
      <h3>Cost of shown Trips: $${shownTripsCost}</h3>
      <h3>Total spent on trips this year: $${user.getTotalCost(new Date().getFullYear())}</h3>
    `;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (domscripts);


/***/ }),

/***/ "./src/fetch-requests.js":
/*!*******************************!*\
  !*** ./src/fetch-requests.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time.js */ "./src/time.js");


let goFetch = {
  getUser(id) {
    return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/${+id}`);
  },

  postNewTripRequest(trip) {
    console.log(trip)
    let data = {
      id: trip.id,
      userID: trip.userID,
      destinationID: trip.destinationID,
      travelers: trip.travelers,
      date: _time_js__WEBPACK_IMPORTED_MODULE_0__["default"].createYYYYMMDD(trip.date),
      duration: trip.duration,
      status: trip.status,
      suggestedActivities: trip.suggestedActivities
    };
    let update = JSON.stringify(data);
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips', {
        method: 'POST',
        body: update,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  },

  deleteTripRequest(tripID) {
    let data = {
      id: tripID,
    };
    let update = JSON.stringify(data);
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips', {
        method: 'DELETE',
        body: update,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  },

  getServerData() {
    let uData = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers');
    let tData = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips');
    let dData = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations');
    let promises = [uData, tData, dData];

    return Promise.all(promises)
    .then(responses => Promise.all(responses.map(response => response.json())))
  }
}

/* harmony default export */ __webpack_exports__["default"] = (goFetch);


/***/ }),

/***/ "./src/images/GV-logo.png":
/*!********************************!*\
  !*** ./src/images/GV-logo.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/GV-logo.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_normalize_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/normalize.scss */ "./src/css/normalize.scss");
/* harmony import */ var _css_normalize_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_base_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _domscripts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domscripts.js */ "./src/domscripts.js");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/flatpickr.js");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flatpickr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fetch_requests_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetch-requests.js */ "./src/fetch-requests.js");
/* harmony import */ var _User_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User.js */ "./src/User.js");
/* harmony import */ var _Trip_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Trip.js */ "./src/Trip.js");
/* harmony import */ var _Destination_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Destination.js */ "./src/Destination.js");
/* harmony import */ var _src_TripRepo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/TripRepo.js */ "./src/TripRepo.js");
/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./time.js */ "./src/time.js");
/* harmony import */ var _images_GV_logo_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/GV-logo.png */ "./src/images/GV-logo.png");
/* harmony import */ var _images_GV_logo_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_GV_logo_png__WEBPACK_IMPORTED_MODULE_10__);
// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file











// An example of how you tell webpack to use an image (also need to link to it in the index.html)

let bookTripBtn = document.querySelector('#submit-booking');
let bookingForm = document.querySelector('.book-trip-form');
let calculate = document.querySelector('#calculate');
let currentTripsBtn = document.querySelector('#current-btn');
let newTripsBtn = document.querySelector('#book-trip-btn');
let pastTripsBtn = document.querySelector('#past-btn');
let mainTitle = document.querySelector('#main-title');
let sidebarTitle = document.querySelector('#side-bar h3');
let submitCredentials = document.querySelector('#submit-credentials');
let tripsList = document.querySelector('.trips');
let upcomingTripsBtn = document.querySelector('#upcoming-btn');
let beginDate, beginCalendar, endDate, endCalendar, destinations, user, userID, users, userTrip = {}, trips;

bookTripBtn.addEventListener('click', bookNewTrip);
calculate.addEventListener('click', calculateCosts);
currentTripsBtn.addEventListener('click', () => toggleMain('Current Trips'));
newTripsBtn.addEventListener('click', () => toggleMain('Looking for adventure?'));
pastTripsBtn.addEventListener('click', () => toggleMain('Past Trips'));
submitCredentials.addEventListener('click', testLogin);
upcomingTripsBtn.addEventListener('click', () => toggleMain('Upcoming Trips'));

function testLogin() {
  if (document.querySelector('#pw').value === 'travel2020') {
    userID = parseInt(document.querySelector('#userID').value.slice(-2));
    _fetch_requests_js__WEBPACK_IMPORTED_MODULE_4__["default"].getUser(userID)
    .then(response => {
      if (+response.status < 400) {
        loadPage();
        document.querySelector('.login').remove();
      } else {
        document.querySelector('#warning').innerText = 'Username and/or password were incorrect.'
      }
    })
    .catch(err => document.querySelector('#warning').innerText = 'Something misbehaved. Refresh the page and try again later.');
  } else {
    document.querySelector('#warning').innerText = 'Username and/or password were incorrect.';
  }
}

function loadPage() {
  retrieveData();
  loadCalendars();
  _domscripts_js__WEBPACK_IMPORTED_MODULE_2__["default"].createNumberSelector();
}

function loadCalendars() {
  let [year, month, day] = _time_js__WEBPACK_IMPORTED_MODULE_9__["default"].createYYYYMMDD(new Date()).split('/');
  let startDate = new Date(+year, +month - 1, +day);
  startDate = _time_js__WEBPACK_IMPORTED_MODULE_9__["default"].daysFromDate(startDate, 1);
  beginCalendar = createCalendar('begin-date-calendar', startDate);
  endCalendar = createCalendar('end-date-calendar', _time_js__WEBPACK_IMPORTED_MODULE_9__["default"].daysFromDate(startDate, 7));
  changeDate(startDate, 'begin-date-calendar');
  changeDate(_time_js__WEBPACK_IMPORTED_MODULE_9__["default"].daysFromDate(startDate, 7), 'end-date-calendar');
}

function retrieveData() {
  _fetch_requests_js__WEBPACK_IMPORTED_MODULE_4__["default"].getServerData()
  .then(([u, t, d]) => {
    destinations = d.destinations.map(dData => new _Destination_js__WEBPACK_IMPORTED_MODULE_7__["default"](dData));
    trips = new _src_TripRepo_js__WEBPACK_IMPORTED_MODULE_8__["default"](t.trips, destinations);
    users = u.travelers;
    generateUser();
    _domscripts_js__WEBPACK_IMPORTED_MODULE_2__["default"].createDestinationsSelection(destinations);
  })
  .catch(err => console.log(err));
}

function generateUser() {
  let uData = users.find(user => user.id === userID)
  user = new _User_js__WEBPACK_IMPORTED_MODULE_5__["default"](uData);
  console.log(user)
  user.folio = trips.getFolioByUser(user.id);
  let welcomeMsgNode = document.querySelector('#welcome-msg')
  welcomeMsgNode.innerText = `Welcome, ${user.name}!`;
}

function createCalendar(nodeID, date) {
  let node = document.querySelector(`#${nodeID}`);
  return flatpickr__WEBPACK_IMPORTED_MODULE_3___default()(node, {
    defaultDate: date,
    minDate: date,
    onChange: ([date]) => changeDate(date, nodeID)
  });
}

function changeDate(newDate, nodeID) {
  if (nodeID[0] === 'b') {
    beginDate = newDate;
  } else {
    endDate = newDate;
  }
  document.querySelector(`#${nodeID} time`).innerText = newDate.toString().slice(0, 15);
  userTrip = {};
  setBookTripBtnStatus(userTrip);
}

function toggleMain(titleText) {
  let pageDisplays = {
    'Current Trips': () => displayTrips('getCurrentFolio'),
    'Looking for adventure?': () => displayBookingForm(),
    'Past Trips': () => displayTrips('getPastFolio'),
    'Upcoming Trips': () => displayTrips('getUpcomingFolio')
  };
  mainTitle.innerText = titleText;
  pageDisplays[titleText]();
}

function displayTrips(folioFunction) {
  let tripsToShow = user.folio[folioFunction](new Date()).data;
  let isUpcoming = folioFunction[3] === 'U';
  tripsList.innerHTML = '';
  document.querySelector('#cost').innerHTML = _domscripts_js__WEBPACK_IMPORTED_MODULE_2__["default"].createCostSummary(tripsToShow, user);
  tripsToShow.forEach(trip => tripsList.innerHTML += _domscripts_js__WEBPACK_IMPORTED_MODULE_2__["default"].createTripCard(trip, isUpcoming));
  bookingForm.classList.add('hidden');
  tripsList.classList.remove('hidden');
  addEventListenersToButtons();
}

function addEventListenersToButtons() {
  let buttons = document.querySelectorAll('.destroy-card');
  for (let button of buttons) {
    button.addEventListener('click', destroyCard);
  }
}

function destroyCard(event) {
  let targetOfDestruction = event.target.closest('.trip-card');
  let tripID = targetOfDestruction.dataset.value;
  _fetch_requests_js__WEBPACK_IMPORTED_MODULE_4__["default"].deleteTripRequest(+tripID)
  .then(() => {
    targetOfDestruction.remove();
    trips.deleteTripByID(+tripID);
    user.folio.deleteTripByID(+tripID);
    displayTrips('getUpcomingFolio');
  })
  .catch(err => console.log(err));
}

function displayBookingForm() {
  bookingForm.classList.remove('hidden');
  tripsList.innerHTML = '';
  setBookTripBtnStatus(userTrip);
}

function calculateCosts() {
  let destID = document.querySelector('#destinations').value;
  let dest = destinations.find(destination => destination.id === +destID);
  userTrip = new _Trip_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
    id: trips.getNewTripID(),
    userID: user.id,
    destinationID: +destID,
    travelers: +(document.querySelector('#number-of-people').value),
    status: 'pending',
    suggestedActivities: [],
    date: beginDate,
    duration: _time_js__WEBPACK_IMPORTED_MODULE_9__["default"].daysBetween(beginDate, endDate)
  });
  userTrip.destination = dest;
  if (!setBookTripBtnStatus(userTrip)) _domscripts_js__WEBPACK_IMPORTED_MODULE_2__["default"].setCostDisplay(userTrip);
  else _domscripts_js__WEBPACK_IMPORTED_MODULE_2__["default"].clearCostDisplay();
}

function bookNewTrip() {
  _domscripts_js__WEBPACK_IMPORTED_MODULE_2__["default"].clearCostDisplay();
  _fetch_requests_js__WEBPACK_IMPORTED_MODULE_4__["default"].postNewTripRequest(userTrip)
  .then(response => {
    if(response.status < 400) success();
    else {
      alert('Looks like something when wrong! Please refresh the page and try again later.')
    }
  })
  .catch(response => {
    document.querySelector('#base-cost').innerText = `Looks like something went wrong... Refresh the page and try again, or give us a call.`;
  });
}

function success() {
  trips.addNewTrip(userTrip);
  user.folio.addNewTrip(userTrip);
  alert(`Booked!\n\nYou're going to ${userTrip.getName()} on ${_time_js__WEBPACK_IMPORTED_MODULE_9__["default"].createYYYYMMDD(userTrip.date)}!\n\nIf you'd like to cancel at any point, just head over to the upcoming trips tab and hit 'cancel' at any point until the day of your trip.`);
  document.querySelector('#base-cost').innerText = `Success! See you in ${userTrip.getName().split('.')[0]}!`;
  userTrip = {};
  setBookTripBtnStatus(userTrip);
}

function setBookTripBtnStatus(trip) {
  bookTripBtn.innerText = (trip.duration < 1 ? 'Trip must be at least 1 day long' : 'Book me!');
  return bookTripBtn.disabled = (
    trip.id === undefined ||
    trip.userID === undefined ||
    trip.destinationID === undefined ||
    trip.travelers === undefined ||
    trip.status === undefined ||
    trip.suggestedActivities === undefined ||
    trip.date === undefined ||
    trip.duration === undefined ||
    trip.duration < 1
  );
}

function getRandomIndex( arr ) {
  return Math.floor(Math.random() * arr.length);
}


/***/ }),

/***/ "./src/time.js":
/*!*********************!*\
  !*** ./src/time.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let time = {
  daysFromDate(date, days) {
    let millisecondsFromThen = days * 24 * 60 * 60 * 1000;
    return new Date(date.getTime() + millisecondsFromThen)
  },

  daysBetween(date1, date2) {
    let mSeconds = date2.getTime() - date1.getTime();
    return Math.ceil(mSeconds / 24 / 60 / 60 / 1000);
  },

  isBetween(beg, test, end) {
    return beg.getTime() <= test.getTime() && test.getTime() <= end.getTime();
  },

  isBefore(test, reference) {
    return test.getTime() < reference.getTime();
  },

  isAfter(test, reference) {
    return test.getTime() > reference.getTime();
  },

  createYYYYMMDD(date) {
    let year = String(date.getFullYear());
    let month = String(date.getMonth() + 1);
    let day = String(date.getDate());
    while(year.length < 4) year = `0${year}`;
    while(month.length < 2) month = `0${month}`;
    while(day.length < 2) day = `0${day}`;
    return [year, month, day].join('/');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (time);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9ub3JtYWxpemUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9mbGF0cGlja3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Rlc3RpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9UcmlwLmpzIiwid2VicGFjazovLy8uL3NyYy9UcmlwUmVwby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz9hMjM4Iiwid2VicGFjazovLy8uL3NyYy9jc3Mvbm9ybWFsaXplLnNjc3M/ZDBhZiIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmV0Y2gtcmVxdWVzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9HVi1sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRCxPQUFPO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFELFFBQVE7QUFDN0QsNENBQTRDLFFBQVE7QUFDcEQsNERBQTRELFFBQVE7QUFDcEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMkJBQTJCO0FBQ3RFLHdDQUF3Qyx1QkFBdUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE1BQU07QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCw0Q0FBNEMsRUFBRTtBQUNsRztBQUNBLHNEQUFzRCwwQ0FBMEMsRUFBRTtBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGdCQUFnQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxnQkFBZ0I7QUFDOUU7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLDBEQUEwRCxFQUFFO0FBQy9IO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLEtBQUs7QUFDeEIsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixNQUFNO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTTtBQUN6QixtQkFBbUIsT0FBTztBQUMxQixtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsS0FBSztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxpQkFBaUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsMkJBQTJCO0FBQzNFLHVDQUF1QyxrQkFBa0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxLQUFLO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxpQkFBaUI7QUFDdkQsd0VBQXdFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxrQkFBa0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLHNDQUFzQyxVQUFVLEVBQUUsRUFBRTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsOEJBQThCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0JBQStCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msc0NBQXNDLEVBQUU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxzQkFBc0I7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsaUNBQWlDLEVBQUU7QUFDckU7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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SDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxtQkFBbUIsTUFBTSxnREFBSSwrQkFBK0I7QUFDbEcsMEVBQTBFLGlDQUFpQztBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzTkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxLQUFLO0FBQzNDLHdDQUF3QyxNQUFNO0FBQzlDLG9DQUFvQyxJQUFJO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFZSxtRUFBSSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HcmFuZHN0YW5kZXI6aXRhbCx3Z2h0QDEsNTAwJmZhbWlseT1NZXJyaXdlYXRoZXI6aXRhbCx3Z2h0QDAsMzAwOzAsOTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCIsIFwiXCJdKTtcblxuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBUaGlzIGlzIGFuIGV4YW1wbGUgb2YgdXNpbmcgU2Fzcywgb3RoZXJ3aXNlIHBsYWluIENTUyB3b3JrcyB0b28qL1xcbmh0bWwsIGJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMHZ3OyB9XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICBib2R5IC5sb2dpbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIGJvZHkgaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbiAgICBjb2xvcjogV2hpdGU7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgcGFkZGluZzogLjc1ZW0gMS41ZW07IH1cXG4gICAgYm9keSBoZWFkZXIgbmF2IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuICAgICAgYm9keSBoZWFkZXIgbmF2IGJ1dHRvbiB7XFxuICAgICAgICBtYXJnaW46IC41ZW07IH1cXG4gICAgYm9keSBoZWFkZXIgI2xvZ28ge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIG1hcmdpbjogMDsgfVxcbiAgICAgIGJvZHkgaGVhZGVyICNsb2dvIGgxIHtcXG4gICAgICAgIG1hcmdpbjogMDsgfVxcbiAgICAgIGJvZHkgaGVhZGVyICNsb2dvIGltZyB7XFxuICAgICAgICBoZWlnaHQ6IDIuNWVtO1xcbiAgICAgICAgd2lkdGg6IGF1dG87IH1cXG4gIGJvZHkgbWFpbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dvbGRlbnJvZDsgfVxcbiAgICBib2R5IG1haW4gc2VjdGlvbiAudHJpcHMge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBmbGV4OiAxIDEgNDAlO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgIGZsZXgtd3JhcDogd3JhcDsgfVxcbiAgICBib2R5IG1haW4gc2VjdGlvbiAudHJpcC1jYXJkIHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4ICMwMDA7XFxuICAgICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgICAgbWFyZ2luOiAxLjVlbSAxLjVlbTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAgICAgYm9keSBtYWluIHNlY3Rpb24gLnRyaXAtY2FyZCBpbWcge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgd2lkdGg6IDI0ZW07XFxuICAgICAgICBoZWlnaHQ6IDE4ZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxZW07IH1cXG4gICAgICBib2R5IG1haW4gc2VjdGlvbiAudHJpcC1jYXJkIC5jYXJkLXRleHQge1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIHdpZHRoOiAyNGVtO1xcbiAgICAgICAgaGVpZ2h0OiAxOWVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKTtcXG4gICAgICAgIHRleHQtc2hhZG93OiAjMDAwIDNweCAzcHggM3B4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICAgICAgcGFkZGluZzogMWVtO1xcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvcjtcXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC42czsgfVxcbiAgICAgIGJvZHkgbWFpbiBzZWN0aW9uIC50cmlwLWNhcmQgLmNhcmQtdGV4dDpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NSwgMTY1LCAxNjUsIDAuNjUpOyB9XFxuICAgICAgYm9keSBtYWluIHNlY3Rpb24gLnRyaXAtY2FyZCBidXR0b24ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiYzsgfVxcbiAgYm9keSBmb290ZXIge1xcbiAgICBncmlkLXJvdzogMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlOyB9XFxuICBib2R5IC5tYWluLWZvbnQge1xcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmOyB9XFxuICBib2R5IC5zZWNvbmRhcnktZm9udCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JhbmRzdGFuZGVyJywgY3Vyc2l2ZTsgfVxcbiAgYm9keSAubGlnaHQge1xcbiAgICBmb250LXdlaWdodDogMzAwOyB9XFxuICBib2R5IC5pdGFsaWMge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG4gIGJvZHkgYnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogLjMyNWVtO1xcbiAgICBwYWRkaW5nOiAuMjVlbTsgfVxcbiAgYm9keSAjc3VibWl0LWJvb2tpbmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk0LCAyMzksIDE1OCwgMC42NCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNWVtOyB9XFxuICBib2R5IC5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgLyogMiAqLyB9XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7IH1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLyogMSAqL1xcbiAgaGVpZ2h0OiAwO1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07XFxuICAvKiAyICovIH1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlOyB9XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07IH1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07IH1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7IH1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7XFxuICAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIC8qIDEgKi9cXG4gIG1hcmdpbjogMDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7IH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDsgfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgLyogMSAqL1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAvKiAxICovIH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvOyB9XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICAvKiAxICovXFxuICBmb250OiBpbmhlcml0O1xcbiAgLyogMiAqLyB9XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07IH1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLyogZmxhdHBpY2tyIHY0LjYuNiwgQGxpY2Vuc2UgTUlUICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAgIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLmZsYXRwaWNrciA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIC8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG4gICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbiAgICBwdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG4gICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG4gICAgUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbiAgICBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbiAgICBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuICAgIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbiAgICBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcbiAgICBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbiAgICB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cblxuICAgIHZhciBIT09LUyA9IFtcbiAgICAgICAgXCJvbkNoYW5nZVwiLFxuICAgICAgICBcIm9uQ2xvc2VcIixcbiAgICAgICAgXCJvbkRheUNyZWF0ZVwiLFxuICAgICAgICBcIm9uRGVzdHJveVwiLFxuICAgICAgICBcIm9uS2V5RG93blwiLFxuICAgICAgICBcIm9uTW9udGhDaGFuZ2VcIixcbiAgICAgICAgXCJvbk9wZW5cIixcbiAgICAgICAgXCJvblBhcnNlQ29uZmlnXCIsXG4gICAgICAgIFwib25SZWFkeVwiLFxuICAgICAgICBcIm9uVmFsdWVVcGRhdGVcIixcbiAgICAgICAgXCJvblllYXJDaGFuZ2VcIixcbiAgICAgICAgXCJvblByZUNhbGVuZGFyUG9zaXRpb25cIixcbiAgICBdO1xuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgX2Rpc2FibGU6IFtdLFxuICAgICAgICBfZW5hYmxlOiBbXSxcbiAgICAgICAgYWxsb3dJbnB1dDogZmFsc2UsXG4gICAgICAgIGFsbG93SW52YWxpZFByZWxvYWQ6IGZhbHNlLFxuICAgICAgICBhbHRGb3JtYXQ6IFwiRiBqLCBZXCIsXG4gICAgICAgIGFsdElucHV0OiBmYWxzZSxcbiAgICAgICAgYWx0SW5wdXRDbGFzczogXCJmb3JtLWNvbnRyb2wgaW5wdXRcIixcbiAgICAgICAgYW5pbWF0ZTogdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUVcIikgPT09IC0xLFxuICAgICAgICBhcmlhRGF0ZUZvcm1hdDogXCJGIGosIFlcIixcbiAgICAgICAgYXV0b0ZpbGxEZWZhdWx0VGltZTogdHJ1ZSxcbiAgICAgICAgY2xpY2tPcGVuczogdHJ1ZSxcbiAgICAgICAgY2xvc2VPblNlbGVjdDogdHJ1ZSxcbiAgICAgICAgY29uanVuY3Rpb246IFwiLCBcIixcbiAgICAgICAgZGF0ZUZvcm1hdDogXCJZLW0tZFwiLFxuICAgICAgICBkZWZhdWx0SG91cjogMTIsXG4gICAgICAgIGRlZmF1bHRNaW51dGU6IDAsXG4gICAgICAgIGRlZmF1bHRTZWNvbmRzOiAwLFxuICAgICAgICBkaXNhYmxlOiBbXSxcbiAgICAgICAgZGlzYWJsZU1vYmlsZTogZmFsc2UsXG4gICAgICAgIGVuYWJsZTogW10sXG4gICAgICAgIGVuYWJsZVNlY29uZHM6IGZhbHNlLFxuICAgICAgICBlbmFibGVUaW1lOiBmYWxzZSxcbiAgICAgICAgZXJyb3JIYW5kbGVyOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgY29uc29sZS53YXJuKGVycik7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFdlZWs6IGZ1bmN0aW9uIChnaXZlbkRhdGUpIHtcbiAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoZ2l2ZW5EYXRlLmdldFRpbWUoKSk7XG4gICAgICAgICAgICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgICAgICAgLy8gVGh1cnNkYXkgaW4gY3VycmVudCB3ZWVrIGRlY2lkZXMgdGhlIHllYXIuXG4gICAgICAgICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyAzIC0gKChkYXRlLmdldERheSgpICsgNikgJSA3KSk7XG4gICAgICAgICAgICAvLyBKYW51YXJ5IDQgaXMgYWx3YXlzIGluIHdlZWsgMS5cbiAgICAgICAgICAgIHZhciB3ZWVrMSA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgMCwgNCk7XG4gICAgICAgICAgICAvLyBBZGp1c3QgdG8gVGh1cnNkYXkgaW4gd2VlayAxIGFuZCBjb3VudCBudW1iZXIgb2Ygd2Vla3MgZnJvbSBkYXRlIHRvIHdlZWsxLlxuICAgICAgICAgICAgcmV0dXJuICgxICtcbiAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKCgoZGF0ZS5nZXRUaW1lKCkgLSB3ZWVrMS5nZXRUaW1lKCkpIC8gODY0MDAwMDAgLVxuICAgICAgICAgICAgICAgICAgICAzICtcbiAgICAgICAgICAgICAgICAgICAgKCh3ZWVrMS5nZXREYXkoKSArIDYpICUgNykpIC9cbiAgICAgICAgICAgICAgICAgICAgNykpO1xuICAgICAgICB9LFxuICAgICAgICBob3VySW5jcmVtZW50OiAxLFxuICAgICAgICBpZ25vcmVkRm9jdXNFbGVtZW50czogW10sXG4gICAgICAgIGlubGluZTogZmFsc2UsXG4gICAgICAgIGxvY2FsZTogXCJkZWZhdWx0XCIsXG4gICAgICAgIG1pbnV0ZUluY3JlbWVudDogNSxcbiAgICAgICAgbW9kZTogXCJzaW5nbGVcIixcbiAgICAgICAgbW9udGhTZWxlY3RvclR5cGU6IFwiZHJvcGRvd25cIixcbiAgICAgICAgbmV4dEFycm93OiBcIjxzdmcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB2aWV3Qm94PScwIDAgMTcgMTcnPjxnPjwvZz48cGF0aCBkPSdNMTMuMjA3IDguNDcybC03Ljg1NCA3Ljg1NC0wLjcwNy0wLjcwNyA3LjE0Ni03LjE0Ni03LjE0Ni03LjE0OCAwLjcwNy0wLjcwNyA3Ljg1NCA3Ljg1NHonIC8+PC9zdmc+XCIsXG4gICAgICAgIG5vQ2FsZW5kYXI6IGZhbHNlLFxuICAgICAgICBub3c6IG5ldyBEYXRlKCksXG4gICAgICAgIG9uQ2hhbmdlOiBbXSxcbiAgICAgICAgb25DbG9zZTogW10sXG4gICAgICAgIG9uRGF5Q3JlYXRlOiBbXSxcbiAgICAgICAgb25EZXN0cm95OiBbXSxcbiAgICAgICAgb25LZXlEb3duOiBbXSxcbiAgICAgICAgb25Nb250aENoYW5nZTogW10sXG4gICAgICAgIG9uT3BlbjogW10sXG4gICAgICAgIG9uUGFyc2VDb25maWc6IFtdLFxuICAgICAgICBvblJlYWR5OiBbXSxcbiAgICAgICAgb25WYWx1ZVVwZGF0ZTogW10sXG4gICAgICAgIG9uWWVhckNoYW5nZTogW10sXG4gICAgICAgIG9uUHJlQ2FsZW5kYXJQb3NpdGlvbjogW10sXG4gICAgICAgIHBsdWdpbnM6IFtdLFxuICAgICAgICBwb3NpdGlvbjogXCJhdXRvXCIsXG4gICAgICAgIHBvc2l0aW9uRWxlbWVudDogdW5kZWZpbmVkLFxuICAgICAgICBwcmV2QXJyb3c6IFwiPHN2ZyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHZpZXdCb3g9JzAgMCAxNyAxNyc+PGc+PC9nPjxwYXRoIGQ9J001LjIwNyA4LjQ3MWw3LjE0NiA3LjE0Ny0wLjcwNyAwLjcwNy03Ljg1My03Ljg1NCA3Ljg1NC03Ljg1MyAwLjcwNyAwLjcwNy03LjE0NyA3LjE0NnonIC8+PC9zdmc+XCIsXG4gICAgICAgIHNob3J0aGFuZEN1cnJlbnRNb250aDogZmFsc2UsXG4gICAgICAgIHNob3dNb250aHM6IDEsXG4gICAgICAgIHN0YXRpYzogZmFsc2UsXG4gICAgICAgIHRpbWVfMjRocjogZmFsc2UsXG4gICAgICAgIHdlZWtOdW1iZXJzOiBmYWxzZSxcbiAgICAgICAgd3JhcDogZmFsc2UsXG4gICAgfTtcblxuICAgIHZhciBlbmdsaXNoID0ge1xuICAgICAgICB3ZWVrZGF5czoge1xuICAgICAgICAgICAgc2hvcnRoYW5kOiBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl0sXG4gICAgICAgICAgICBsb25naGFuZDogW1xuICAgICAgICAgICAgICAgIFwiU3VuZGF5XCIsXG4gICAgICAgICAgICAgICAgXCJNb25kYXlcIixcbiAgICAgICAgICAgICAgICBcIlR1ZXNkYXlcIixcbiAgICAgICAgICAgICAgICBcIldlZG5lc2RheVwiLFxuICAgICAgICAgICAgICAgIFwiVGh1cnNkYXlcIixcbiAgICAgICAgICAgICAgICBcIkZyaWRheVwiLFxuICAgICAgICAgICAgICAgIFwiU2F0dXJkYXlcIixcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIG1vbnRoczoge1xuICAgICAgICAgICAgc2hvcnRoYW5kOiBbXG4gICAgICAgICAgICAgICAgXCJKYW5cIixcbiAgICAgICAgICAgICAgICBcIkZlYlwiLFxuICAgICAgICAgICAgICAgIFwiTWFyXCIsXG4gICAgICAgICAgICAgICAgXCJBcHJcIixcbiAgICAgICAgICAgICAgICBcIk1heVwiLFxuICAgICAgICAgICAgICAgIFwiSnVuXCIsXG4gICAgICAgICAgICAgICAgXCJKdWxcIixcbiAgICAgICAgICAgICAgICBcIkF1Z1wiLFxuICAgICAgICAgICAgICAgIFwiU2VwXCIsXG4gICAgICAgICAgICAgICAgXCJPY3RcIixcbiAgICAgICAgICAgICAgICBcIk5vdlwiLFxuICAgICAgICAgICAgICAgIFwiRGVjXCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbG9uZ2hhbmQ6IFtcbiAgICAgICAgICAgICAgICBcIkphbnVhcnlcIixcbiAgICAgICAgICAgICAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgICAgICAgICAgICAgXCJNYXJjaFwiLFxuICAgICAgICAgICAgICAgIFwiQXByaWxcIixcbiAgICAgICAgICAgICAgICBcIk1heVwiLFxuICAgICAgICAgICAgICAgIFwiSnVuZVwiLFxuICAgICAgICAgICAgICAgIFwiSnVseVwiLFxuICAgICAgICAgICAgICAgIFwiQXVndXN0XCIsXG4gICAgICAgICAgICAgICAgXCJTZXB0ZW1iZXJcIixcbiAgICAgICAgICAgICAgICBcIk9jdG9iZXJcIixcbiAgICAgICAgICAgICAgICBcIk5vdmVtYmVyXCIsXG4gICAgICAgICAgICAgICAgXCJEZWNlbWJlclwiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgZGF5c0luTW9udGg6IFszMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXSxcbiAgICAgICAgZmlyc3REYXlPZldlZWs6IDAsXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudGgpIHtcbiAgICAgICAgICAgIHZhciBzID0gbnRoICUgMTAwO1xuICAgICAgICAgICAgaWYgKHMgPiAzICYmIHMgPCAyMSlcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ0aFwiO1xuICAgICAgICAgICAgc3dpdGNoIChzICUgMTApIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcInN0XCI7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicmRcIjtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ0aFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByYW5nZVNlcGFyYXRvcjogXCIgdG8gXCIsXG4gICAgICAgIHdlZWtBYmJyZXZpYXRpb246IFwiV2tcIixcbiAgICAgICAgc2Nyb2xsVGl0bGU6IFwiU2Nyb2xsIHRvIGluY3JlbWVudFwiLFxuICAgICAgICB0b2dnbGVUaXRsZTogXCJDbGljayB0byB0b2dnbGVcIixcbiAgICAgICAgYW1QTTogW1wiQU1cIiwgXCJQTVwiXSxcbiAgICAgICAgeWVhckFyaWFMYWJlbDogXCJZZWFyXCIsXG4gICAgICAgIG1vbnRoQXJpYUxhYmVsOiBcIk1vbnRoXCIsXG4gICAgICAgIGhvdXJBcmlhTGFiZWw6IFwiSG91clwiLFxuICAgICAgICBtaW51dGVBcmlhTGFiZWw6IFwiTWludXRlXCIsXG4gICAgICAgIHRpbWVfMjRocjogZmFsc2UsXG4gICAgfTtcblxuICAgIHZhciBwYWQgPSBmdW5jdGlvbiAobnVtYmVyLCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gdm9pZCAwKSB7IGxlbmd0aCA9IDI7IH1cbiAgICAgICAgcmV0dXJuIChcIjAwMFwiICsgbnVtYmVyKS5zbGljZShsZW5ndGggKiAtMSk7XG4gICAgfTtcbiAgICB2YXIgaW50ID0gZnVuY3Rpb24gKGJvb2wpIHsgcmV0dXJuIChib29sID09PSB0cnVlID8gMSA6IDApOyB9O1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gICAgICAgIGlmIChpbW1lZGlhdGUgPT09IHZvaWQgMCkgeyBpbW1lZGlhdGUgPSBmYWxzZTsgfVxuICAgICAgICB2YXIgdGltZW91dDtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgIHRpbWVvdXQgIT09IG51bGwgJiYgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoIWltbWVkaWF0ZSlcbiAgICAgICAgICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICAgIH0sIHdhaXQpO1xuICAgICAgICAgICAgaWYgKGltbWVkaWF0ZSAmJiAhdGltZW91dClcbiAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICB2YXIgYXJyYXlpZnkgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBBcnJheSA/IG9iaiA6IFtvYmpdO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtLCBjbGFzc05hbWUsIGJvb2wpIHtcbiAgICAgICAgaWYgKGJvb2wgPT09IHRydWUpXG4gICAgICAgICAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgY2xhc3NOYW1lLCBjb250ZW50KSB7XG4gICAgICAgIHZhciBlID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lIHx8IFwiXCI7XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50IHx8IFwiXCI7XG4gICAgICAgIGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgICAgICBpZiAoY29udGVudCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgZS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbGVhck5vZGUobm9kZSkge1xuICAgICAgICB3aGlsZSAobm9kZS5maXJzdENoaWxkKVxuICAgICAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmaW5kUGFyZW50KG5vZGUsIGNvbmRpdGlvbikge1xuICAgICAgICBpZiAoY29uZGl0aW9uKG5vZGUpKVxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIGVsc2UgaWYgKG5vZGUucGFyZW50Tm9kZSlcbiAgICAgICAgICAgIHJldHVybiBmaW5kUGFyZW50KG5vZGUucGFyZW50Tm9kZSwgY29uZGl0aW9uKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDsgLy8gbm90aGluZyBmb3VuZFxuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVOdW1iZXJJbnB1dChpbnB1dENsYXNzTmFtZSwgb3B0cykge1xuICAgICAgICB2YXIgd3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJudW1JbnB1dFdyYXBwZXJcIiksIG51bUlucHV0ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFwibnVtSW5wdXQgXCIgKyBpbnB1dENsYXNzTmFtZSksIGFycm93VXAgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImFycm93VXBcIiksIGFycm93RG93biA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiYXJyb3dEb3duXCIpO1xuICAgICAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRSA5LjBcIikgPT09IC0xKSB7XG4gICAgICAgICAgICBudW1JbnB1dC50eXBlID0gXCJudW1iZXJcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG51bUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgICAgIG51bUlucHV0LnBhdHRlcm4gPSBcIlxcXFxkKlwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRzICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gb3B0cylcbiAgICAgICAgICAgICAgICBudW1JbnB1dC5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRzW2tleV0pO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG51bUlucHV0KTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChhcnJvd1VwKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChhcnJvd0Rvd24pO1xuICAgICAgICByZXR1cm4gd3JhcHBlcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0RXZlbnRUYXJnZXQoZXZlbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXZlbnQuY29tcG9zZWRQYXRoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXRoWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBldmVudC50YXJnZXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZG9Ob3RoaW5nID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9O1xuICAgIHZhciBtb250aFRvU3RyID0gZnVuY3Rpb24gKG1vbnRoTnVtYmVyLCBzaG9ydGhhbmQsIGxvY2FsZSkgeyByZXR1cm4gbG9jYWxlLm1vbnRoc1tzaG9ydGhhbmQgPyBcInNob3J0aGFuZFwiIDogXCJsb25naGFuZFwiXVttb250aE51bWJlcl07IH07XG4gICAgdmFyIHJldkZvcm1hdCA9IHtcbiAgICAgICAgRDogZG9Ob3RoaW5nLFxuICAgICAgICBGOiBmdW5jdGlvbiAoZGF0ZU9iaiwgbW9udGhOYW1lLCBsb2NhbGUpIHtcbiAgICAgICAgICAgIGRhdGVPYmouc2V0TW9udGgobG9jYWxlLm1vbnRocy5sb25naGFuZC5pbmRleE9mKG1vbnRoTmFtZSkpO1xuICAgICAgICB9LFxuICAgICAgICBHOiBmdW5jdGlvbiAoZGF0ZU9iaiwgaG91cikge1xuICAgICAgICAgICAgZGF0ZU9iai5zZXRIb3VycyhwYXJzZUZsb2F0KGhvdXIpKTtcbiAgICAgICAgfSxcbiAgICAgICAgSDogZnVuY3Rpb24gKGRhdGVPYmosIGhvdXIpIHtcbiAgICAgICAgICAgIGRhdGVPYmouc2V0SG91cnMocGFyc2VGbG9hdChob3VyKSk7XG4gICAgICAgIH0sXG4gICAgICAgIEo6IGZ1bmN0aW9uIChkYXRlT2JqLCBkYXkpIHtcbiAgICAgICAgICAgIGRhdGVPYmouc2V0RGF0ZShwYXJzZUZsb2F0KGRheSkpO1xuICAgICAgICB9LFxuICAgICAgICBLOiBmdW5jdGlvbiAoZGF0ZU9iaiwgYW1QTSwgbG9jYWxlKSB7XG4gICAgICAgICAgICBkYXRlT2JqLnNldEhvdXJzKChkYXRlT2JqLmdldEhvdXJzKCkgJSAxMikgK1xuICAgICAgICAgICAgICAgIDEyICogaW50KG5ldyBSZWdFeHAobG9jYWxlLmFtUE1bMV0sIFwiaVwiKS50ZXN0KGFtUE0pKSk7XG4gICAgICAgIH0sXG4gICAgICAgIE06IGZ1bmN0aW9uIChkYXRlT2JqLCBzaG9ydE1vbnRoLCBsb2NhbGUpIHtcbiAgICAgICAgICAgIGRhdGVPYmouc2V0TW9udGgobG9jYWxlLm1vbnRocy5zaG9ydGhhbmQuaW5kZXhPZihzaG9ydE1vbnRoKSk7XG4gICAgICAgIH0sXG4gICAgICAgIFM6IGZ1bmN0aW9uIChkYXRlT2JqLCBzZWNvbmRzKSB7XG4gICAgICAgICAgICBkYXRlT2JqLnNldFNlY29uZHMocGFyc2VGbG9hdChzZWNvbmRzKSk7XG4gICAgICAgIH0sXG4gICAgICAgIFU6IGZ1bmN0aW9uIChfLCB1bml4U2Vjb25kcykgeyByZXR1cm4gbmV3IERhdGUocGFyc2VGbG9hdCh1bml4U2Vjb25kcykgKiAxMDAwKTsgfSxcbiAgICAgICAgVzogZnVuY3Rpb24gKGRhdGVPYmosIHdlZWtOdW0sIGxvY2FsZSkge1xuICAgICAgICAgICAgdmFyIHdlZWtOdW1iZXIgPSBwYXJzZUludCh3ZWVrTnVtKTtcbiAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoZGF0ZU9iai5nZXRGdWxsWWVhcigpLCAwLCAyICsgKHdlZWtOdW1iZXIgLSAxKSAqIDcsIDAsIDAsIDAsIDApO1xuICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGF0ZS5nZXREYXkoKSArIGxvY2FsZS5maXJzdERheU9mV2Vlayk7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICAgICAgfSxcbiAgICAgICAgWTogZnVuY3Rpb24gKGRhdGVPYmosIHllYXIpIHtcbiAgICAgICAgICAgIGRhdGVPYmouc2V0RnVsbFllYXIocGFyc2VGbG9hdCh5ZWFyKSk7XG4gICAgICAgIH0sXG4gICAgICAgIFo6IGZ1bmN0aW9uIChfLCBJU09EYXRlKSB7IHJldHVybiBuZXcgRGF0ZShJU09EYXRlKTsgfSxcbiAgICAgICAgZDogZnVuY3Rpb24gKGRhdGVPYmosIGRheSkge1xuICAgICAgICAgICAgZGF0ZU9iai5zZXREYXRlKHBhcnNlRmxvYXQoZGF5KSk7XG4gICAgICAgIH0sXG4gICAgICAgIGg6IGZ1bmN0aW9uIChkYXRlT2JqLCBob3VyKSB7XG4gICAgICAgICAgICBkYXRlT2JqLnNldEhvdXJzKHBhcnNlRmxvYXQoaG91cikpO1xuICAgICAgICB9LFxuICAgICAgICBpOiBmdW5jdGlvbiAoZGF0ZU9iaiwgbWludXRlcykge1xuICAgICAgICAgICAgZGF0ZU9iai5zZXRNaW51dGVzKHBhcnNlRmxvYXQobWludXRlcykpO1xuICAgICAgICB9LFxuICAgICAgICBqOiBmdW5jdGlvbiAoZGF0ZU9iaiwgZGF5KSB7XG4gICAgICAgICAgICBkYXRlT2JqLnNldERhdGUocGFyc2VGbG9hdChkYXkpKTtcbiAgICAgICAgfSxcbiAgICAgICAgbDogZG9Ob3RoaW5nLFxuICAgICAgICBtOiBmdW5jdGlvbiAoZGF0ZU9iaiwgbW9udGgpIHtcbiAgICAgICAgICAgIGRhdGVPYmouc2V0TW9udGgocGFyc2VGbG9hdChtb250aCkgLSAxKTtcbiAgICAgICAgfSxcbiAgICAgICAgbjogZnVuY3Rpb24gKGRhdGVPYmosIG1vbnRoKSB7XG4gICAgICAgICAgICBkYXRlT2JqLnNldE1vbnRoKHBhcnNlRmxvYXQobW9udGgpIC0gMSk7XG4gICAgICAgIH0sXG4gICAgICAgIHM6IGZ1bmN0aW9uIChkYXRlT2JqLCBzZWNvbmRzKSB7XG4gICAgICAgICAgICBkYXRlT2JqLnNldFNlY29uZHMocGFyc2VGbG9hdChzZWNvbmRzKSk7XG4gICAgICAgIH0sXG4gICAgICAgIHU6IGZ1bmN0aW9uIChfLCB1bml4TWlsbFNlY29uZHMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShwYXJzZUZsb2F0KHVuaXhNaWxsU2Vjb25kcykpO1xuICAgICAgICB9LFxuICAgICAgICB3OiBkb05vdGhpbmcsXG4gICAgICAgIHk6IGZ1bmN0aW9uIChkYXRlT2JqLCB5ZWFyKSB7XG4gICAgICAgICAgICBkYXRlT2JqLnNldEZ1bGxZZWFyKDIwMDAgKyBwYXJzZUZsb2F0KHllYXIpKTtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIHZhciB0b2tlblJlZ2V4ID0ge1xuICAgICAgICBEOiBcIihcXFxcdyspXCIsXG4gICAgICAgIEY6IFwiKFxcXFx3KylcIixcbiAgICAgICAgRzogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICAgICAgSDogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICAgICAgSjogXCIoXFxcXGRcXFxcZHxcXFxcZClcXFxcdytcIixcbiAgICAgICAgSzogXCJcIixcbiAgICAgICAgTTogXCIoXFxcXHcrKVwiLFxuICAgICAgICBTOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgICAgICBVOiBcIiguKylcIixcbiAgICAgICAgVzogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICAgICAgWTogXCIoXFxcXGR7NH0pXCIsXG4gICAgICAgIFo6IFwiKC4rKVwiLFxuICAgICAgICBkOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgICAgICBoOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgICAgICBpOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgICAgICBqOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgICAgICBsOiBcIihcXFxcdyspXCIsXG4gICAgICAgIG06IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXG4gICAgICAgIG46IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXG4gICAgICAgIHM6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXG4gICAgICAgIHU6IFwiKC4rKVwiLFxuICAgICAgICB3OiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgICAgICB5OiBcIihcXFxcZHsyfSlcIixcbiAgICB9O1xuICAgIHZhciBmb3JtYXRzID0ge1xuICAgICAgICAvLyBnZXQgdGhlIGRhdGUgaW4gVVRDXG4gICAgICAgIFo6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBkYXRlLnRvSVNPU3RyaW5nKCk7IH0sXG4gICAgICAgIC8vIHdlZWtkYXkgbmFtZSwgc2hvcnQsIGUuZy4gVGh1XG4gICAgICAgIEQ6IGZ1bmN0aW9uIChkYXRlLCBsb2NhbGUsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiBsb2NhbGUud2Vla2RheXMuc2hvcnRoYW5kW2Zvcm1hdHMudyhkYXRlLCBsb2NhbGUsIG9wdGlvbnMpXTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZnVsbCBtb250aCBuYW1lIGUuZy4gSmFudWFyeVxuICAgICAgICBGOiBmdW5jdGlvbiAoZGF0ZSwgbG9jYWxlLCBvcHRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gbW9udGhUb1N0cihmb3JtYXRzLm4oZGF0ZSwgbG9jYWxlLCBvcHRpb25zKSAtIDEsIGZhbHNlLCBsb2NhbGUpO1xuICAgICAgICB9LFxuICAgICAgICAvLyBwYWRkZWQgaG91ciAxLTEyXG4gICAgICAgIEc6IGZ1bmN0aW9uIChkYXRlLCBsb2NhbGUsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiBwYWQoZm9ybWF0cy5oKGRhdGUsIGxvY2FsZSwgb3B0aW9ucykpO1xuICAgICAgICB9LFxuICAgICAgICAvLyBob3VycyB3aXRoIGxlYWRpbmcgemVybyBlLmcuIDAzXG4gICAgICAgIEg6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBwYWQoZGF0ZS5nZXRIb3VycygpKTsgfSxcbiAgICAgICAgLy8gZGF5ICgxLTMwKSB3aXRoIG9yZGluYWwgc3VmZml4IGUuZy4gMXN0LCAybmRcbiAgICAgICAgSjogZnVuY3Rpb24gKGRhdGUsIGxvY2FsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsZS5vcmRpbmFsICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/IGRhdGUuZ2V0RGF0ZSgpICsgbG9jYWxlLm9yZGluYWwoZGF0ZS5nZXREYXRlKCkpXG4gICAgICAgICAgICAgICAgOiBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gQU0vUE1cbiAgICAgICAgSzogZnVuY3Rpb24gKGRhdGUsIGxvY2FsZSkgeyByZXR1cm4gbG9jYWxlLmFtUE1baW50KGRhdGUuZ2V0SG91cnMoKSA+IDExKV07IH0sXG4gICAgICAgIC8vIHNob3J0aGFuZCBtb250aCBlLmcuIEphbiwgU2VwLCBPY3QsIGV0Y1xuICAgICAgICBNOiBmdW5jdGlvbiAoZGF0ZSwgbG9jYWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gbW9udGhUb1N0cihkYXRlLmdldE1vbnRoKCksIHRydWUsIGxvY2FsZSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHNlY29uZHMgMDAtNTlcbiAgICAgICAgUzogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIHBhZChkYXRlLmdldFNlY29uZHMoKSk7IH0sXG4gICAgICAgIC8vIHVuaXggdGltZXN0YW1wXG4gICAgICAgIFU6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBkYXRlLmdldFRpbWUoKSAvIDEwMDA7IH0sXG4gICAgICAgIFc6IGZ1bmN0aW9uIChkYXRlLCBfLCBvcHRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5nZXRXZWVrKGRhdGUpO1xuICAgICAgICB9LFxuICAgICAgICAvLyBmdWxsIHllYXIgZS5nLiAyMDE2LCBwYWRkZWQgKDAwMDEtOTk5OSlcbiAgICAgICAgWTogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIHBhZChkYXRlLmdldEZ1bGxZZWFyKCksIDQpOyB9LFxuICAgICAgICAvLyBkYXkgaW4gbW9udGgsIHBhZGRlZCAoMDEtMzApXG4gICAgICAgIGQ6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBwYWQoZGF0ZS5nZXREYXRlKCkpOyB9LFxuICAgICAgICAvLyBob3VyIGZyb20gMS0xMiAoYW0vcG0pXG4gICAgICAgIGg6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiAoZGF0ZS5nZXRIb3VycygpICUgMTIgPyBkYXRlLmdldEhvdXJzKCkgJSAxMiA6IDEyKTsgfSxcbiAgICAgICAgLy8gbWludXRlcywgcGFkZGVkIHdpdGggbGVhZGluZyB6ZXJvIGUuZy4gMDlcbiAgICAgICAgaTogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIHBhZChkYXRlLmdldE1pbnV0ZXMoKSk7IH0sXG4gICAgICAgIC8vIGRheSBpbiBtb250aCAoMS0zMClcbiAgICAgICAgajogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIGRhdGUuZ2V0RGF0ZSgpOyB9LFxuICAgICAgICAvLyB3ZWVrZGF5IG5hbWUsIGZ1bGwsIGUuZy4gVGh1cnNkYXlcbiAgICAgICAgbDogZnVuY3Rpb24gKGRhdGUsIGxvY2FsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5cy5sb25naGFuZFtkYXRlLmdldERheSgpXTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gcGFkZGVkIG1vbnRoIG51bWJlciAoMDEtMTIpXG4gICAgICAgIG06IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBwYWQoZGF0ZS5nZXRNb250aCgpICsgMSk7IH0sXG4gICAgICAgIC8vIHRoZSBtb250aCBudW1iZXIgKDEtMTIpXG4gICAgICAgIG46IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBkYXRlLmdldE1vbnRoKCkgKyAxOyB9LFxuICAgICAgICAvLyBzZWNvbmRzIDAtNTlcbiAgICAgICAgczogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIGRhdGUuZ2V0U2Vjb25kcygpOyB9LFxuICAgICAgICAvLyBVbml4IE1pbGxpc2Vjb25kc1xuICAgICAgICB1OiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gZGF0ZS5nZXRUaW1lKCk7IH0sXG4gICAgICAgIC8vIG51bWJlciBvZiB0aGUgZGF5IG9mIHRoZSB3ZWVrXG4gICAgICAgIHc6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBkYXRlLmdldERheSgpOyB9LFxuICAgICAgICAvLyBsYXN0IHR3byBkaWdpdHMgb2YgeWVhciBlLmcuIDE2IGZvciAyMDE2XG4gICAgICAgIHk6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBTdHJpbmcoZGF0ZS5nZXRGdWxsWWVhcigpKS5zdWJzdHJpbmcoMik7IH0sXG4gICAgfTtcblxuICAgIHZhciBjcmVhdGVEYXRlRm9ybWF0dGVyID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBfYiA9IF9hLmNvbmZpZywgY29uZmlnID0gX2IgPT09IHZvaWQgMCA/IGRlZmF1bHRzIDogX2IsIF9jID0gX2EubDEwbiwgbDEwbiA9IF9jID09PSB2b2lkIDAgPyBlbmdsaXNoIDogX2MsIF9kID0gX2EuaXNNb2JpbGUsIGlzTW9iaWxlID0gX2QgPT09IHZvaWQgMCA/IGZhbHNlIDogX2Q7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZGF0ZU9iaiwgZnJtdCwgb3ZlcnJpZGVMb2NhbGUpIHtcbiAgICAgICAgICAgIHZhciBsb2NhbGUgPSBvdmVycmlkZUxvY2FsZSB8fCBsMTBuO1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5mb3JtYXREYXRlICE9PSB1bmRlZmluZWQgJiYgIWlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpZy5mb3JtYXREYXRlKGRhdGVPYmosIGZybXQsIGxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnJtdFxuICAgICAgICAgICAgICAgIC5zcGxpdChcIlwiKVxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGMsIGksIGFycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtYXRzW2NdICYmIGFycltpIC0gMV0gIT09IFwiXFxcXFwiXG4gICAgICAgICAgICAgICAgICAgID8gZm9ybWF0c1tjXShkYXRlT2JqLCBsb2NhbGUsIGNvbmZpZylcbiAgICAgICAgICAgICAgICAgICAgOiBjICE9PSBcIlxcXFxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCI7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5qb2luKFwiXCIpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgdmFyIGNyZWF0ZURhdGVQYXJzZXIgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIF9iID0gX2EuY29uZmlnLCBjb25maWcgPSBfYiA9PT0gdm9pZCAwID8gZGVmYXVsdHMgOiBfYiwgX2MgPSBfYS5sMTBuLCBsMTBuID0gX2MgPT09IHZvaWQgMCA/IGVuZ2xpc2ggOiBfYztcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRlLCBnaXZlbkZvcm1hdCwgdGltZWxlc3MsIGN1c3RvbUxvY2FsZSkge1xuICAgICAgICAgICAgaWYgKGRhdGUgIT09IDAgJiYgIWRhdGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBsb2NhbGUgPSBjdXN0b21Mb2NhbGUgfHwgbDEwbjtcbiAgICAgICAgICAgIHZhciBwYXJzZWREYXRlO1xuICAgICAgICAgICAgdmFyIGRhdGVPcmlnID0gZGF0ZTtcbiAgICAgICAgICAgIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSlcbiAgICAgICAgICAgICAgICBwYXJzZWREYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRhdGUgIT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBkYXRlLnRvRml4ZWQgIT09IHVuZGVmaW5lZCAvLyB0aW1lc3RhbXBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBjb3B5XG4gICAgICAgICAgICAgICAgcGFyc2VkRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRhdGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBkYXRlIHN0cmluZ1xuICAgICAgICAgICAgICAgIHZhciBmb3JtYXQgPSBnaXZlbkZvcm1hdCB8fCAoY29uZmlnIHx8IGRlZmF1bHRzKS5kYXRlRm9ybWF0O1xuICAgICAgICAgICAgICAgIHZhciBkYXRlc3RyID0gU3RyaW5nKGRhdGUpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZXN0ciA9PT0gXCJ0b2RheVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aW1lbGVzcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKC9aJC8udGVzdChkYXRlc3RyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvR01UJC8udGVzdChkYXRlc3RyKSAvLyBkYXRlc3RyaW5ncyB3LyB0aW1lem9uZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbmZpZyAmJiBjb25maWcucGFyc2VEYXRlKVxuICAgICAgICAgICAgICAgICAgICBwYXJzZWREYXRlID0gY29uZmlnLnBhcnNlRGF0ZShkYXRlLCBmb3JtYXQpO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWREYXRlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICFjb25maWcgfHwgIWNvbmZpZy5ub0NhbGVuZGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksIDAsIDEsIDAsIDAsIDAsIDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBuZXcgRGF0ZShuZXcgRGF0ZSgpLnNldEhvdXJzKDAsIDAsIDAsIDApKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoZWQgPSB2b2lkIDAsIG9wcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbWF0Y2hJbmRleCA9IDAsIHJlZ2V4U3RyID0gXCJcIjsgaSA8IGZvcm1hdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VuXzEgPSBmb3JtYXRbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNCYWNrU2xhc2ggPSB0b2tlbl8xID09PSBcIlxcXFxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlc2NhcGVkID0gZm9ybWF0W2kgLSAxXSA9PT0gXCJcXFxcXCIgfHwgaXNCYWNrU2xhc2g7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW5SZWdleFt0b2tlbl8xXSAmJiAhZXNjYXBlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4U3RyICs9IHRva2VuUmVnZXhbdG9rZW5fMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gbmV3IFJlZ0V4cChyZWdleFN0cikuZXhlYyhkYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggJiYgKG1hdGNoZWQgPSB0cnVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHNbdG9rZW5fMSAhPT0gXCJZXCIgPyBcInB1c2hcIiA6IFwidW5zaGlmdFwiXSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogcmV2Rm9ybWF0W3Rva2VuXzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsOiBtYXRjaFsrK21hdGNoSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghaXNCYWNrU2xhc2gpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnZXhTdHIgKz0gXCIuXCI7IC8vIGRvbid0IHJlYWxseSBjYXJlXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBfYS5mbiwgdmFsID0gX2EudmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAocGFyc2VkRGF0ZSA9IGZuKHBhcnNlZERhdGUsIHZhbCwgbG9jYWxlKSB8fCBwYXJzZWREYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZERhdGUgPSBtYXRjaGVkID8gcGFyc2VkRGF0ZSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgICAgaWYgKCEocGFyc2VkRGF0ZSBpbnN0YW5jZW9mIERhdGUgJiYgIWlzTmFOKHBhcnNlZERhdGUuZ2V0VGltZSgpKSkpIHtcbiAgICAgICAgICAgICAgICBjb25maWcuZXJyb3JIYW5kbGVyKG5ldyBFcnJvcihcIkludmFsaWQgZGF0ZSBwcm92aWRlZDogXCIgKyBkYXRlT3JpZykpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGltZWxlc3MgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgcGFyc2VkRGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWREYXRlO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZSB0aGUgZGlmZmVyZW5jZSBpbiBkYXRlcywgbWVhc3VyZWQgaW4gbXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjb21wYXJlRGF0ZXMoZGF0ZTEsIGRhdGUyLCB0aW1lbGVzcykge1xuICAgICAgICBpZiAodGltZWxlc3MgPT09IHZvaWQgMCkgeyB0aW1lbGVzcyA9IHRydWU7IH1cbiAgICAgICAgaWYgKHRpbWVsZXNzICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIChuZXcgRGF0ZShkYXRlMS5nZXRUaW1lKCkpLnNldEhvdXJzKDAsIDAsIDAsIDApIC1cbiAgICAgICAgICAgICAgICBuZXcgRGF0ZShkYXRlMi5nZXRUaW1lKCkpLnNldEhvdXJzKDAsIDAsIDAsIDApKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0ZTEuZ2V0VGltZSgpIC0gZGF0ZTIuZ2V0VGltZSgpO1xuICAgIH1cbiAgICB2YXIgaXNCZXR3ZWVuID0gZnVuY3Rpb24gKHRzLCB0czEsIHRzMikge1xuICAgICAgICByZXR1cm4gdHMgPiBNYXRoLm1pbih0czEsIHRzMikgJiYgdHMgPCBNYXRoLm1heCh0czEsIHRzMik7XG4gICAgfTtcbiAgICB2YXIgZHVyYXRpb24gPSB7XG4gICAgICAgIERBWTogODY0MDAwMDAsXG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3RcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiAodGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XSk7IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IgKHZhciBfYSA9IDAsIGFyZ3NfMSA9IGFyZ3M7IF9hIDwgYXJnc18xLmxlbmd0aDsgX2ErKykge1xuICAgICAgICAgICAgICAgIHZhciBzb3VyY2UgPSBhcmdzXzFbX2FdO1xuICAgICAgICAgICAgICAgIF9sb29wXzEoc291cmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIERFQk9VTkNFRF9DSEFOR0VfTVMgPSAzMDA7XG4gICAgZnVuY3Rpb24gRmxhdHBpY2tySW5zdGFuY2UoZWxlbWVudCwgaW5zdGFuY2VDb25maWcpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB7XG4gICAgICAgICAgICBjb25maWc6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBkZWZhdWx0cyksIGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnKSxcbiAgICAgICAgICAgIGwxMG46IGVuZ2xpc2gsXG4gICAgICAgIH07XG4gICAgICAgIHNlbGYucGFyc2VEYXRlID0gY3JlYXRlRGF0ZVBhcnNlcih7IGNvbmZpZzogc2VsZi5jb25maWcsIGwxMG46IHNlbGYubDEwbiB9KTtcbiAgICAgICAgc2VsZi5faGFuZGxlcnMgPSBbXTtcbiAgICAgICAgc2VsZi5wbHVnaW5FbGVtZW50cyA9IFtdO1xuICAgICAgICBzZWxmLmxvYWRlZFBsdWdpbnMgPSBbXTtcbiAgICAgICAgc2VsZi5fYmluZCA9IGJpbmQ7XG4gICAgICAgIHNlbGYuX3NldEhvdXJzRnJvbURhdGUgPSBzZXRIb3Vyc0Zyb21EYXRlO1xuICAgICAgICBzZWxmLl9wb3NpdGlvbkNhbGVuZGFyID0gcG9zaXRpb25DYWxlbmRhcjtcbiAgICAgICAgc2VsZi5jaGFuZ2VNb250aCA9IGNoYW5nZU1vbnRoO1xuICAgICAgICBzZWxmLmNoYW5nZVllYXIgPSBjaGFuZ2VZZWFyO1xuICAgICAgICBzZWxmLmNsZWFyID0gY2xlYXI7XG4gICAgICAgIHNlbGYuY2xvc2UgPSBjbG9zZTtcbiAgICAgICAgc2VsZi5fY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQ7XG4gICAgICAgIHNlbGYuZGVzdHJveSA9IGRlc3Ryb3k7XG4gICAgICAgIHNlbGYuaXNFbmFibGVkID0gaXNFbmFibGVkO1xuICAgICAgICBzZWxmLmp1bXBUb0RhdGUgPSBqdW1wVG9EYXRlO1xuICAgICAgICBzZWxmLm9wZW4gPSBvcGVuO1xuICAgICAgICBzZWxmLnJlZHJhdyA9IHJlZHJhdztcbiAgICAgICAgc2VsZi5zZXQgPSBzZXQ7XG4gICAgICAgIHNlbGYuc2V0RGF0ZSA9IHNldERhdGU7XG4gICAgICAgIHNlbGYudG9nZ2xlID0gdG9nZ2xlO1xuICAgICAgICBmdW5jdGlvbiBzZXR1cEhlbHBlckZ1bmN0aW9ucygpIHtcbiAgICAgICAgICAgIHNlbGYudXRpbHMgPSB7XG4gICAgICAgICAgICAgICAgZ2V0RGF5c0luTW9udGg6IGZ1bmN0aW9uIChtb250aCwgeXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vbnRoID09PSB2b2lkIDApIHsgbW9udGggPSBzZWxmLmN1cnJlbnRNb250aDsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoeXIgPT09IHZvaWQgMCkgeyB5ciA9IHNlbGYuY3VycmVudFllYXI7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vbnRoID09PSAxICYmICgoeXIgJSA0ID09PSAwICYmIHlyICUgMTAwICE9PSAwKSB8fCB5ciAlIDQwMCA9PT0gMCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMjk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmwxMG4uZGF5c0luTW9udGhbbW9udGhdO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgICAgICBzZWxmLmVsZW1lbnQgPSBzZWxmLmlucHV0ID0gZWxlbWVudDtcbiAgICAgICAgICAgIHNlbGYuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICBwYXJzZUNvbmZpZygpO1xuICAgICAgICAgICAgc2V0dXBMb2NhbGUoKTtcbiAgICAgICAgICAgIHNldHVwSW5wdXRzKCk7XG4gICAgICAgICAgICBzZXR1cERhdGVzKCk7XG4gICAgICAgICAgICBzZXR1cEhlbHBlckZ1bmN0aW9ucygpO1xuICAgICAgICAgICAgaWYgKCFzZWxmLmlzTW9iaWxlKVxuICAgICAgICAgICAgICAgIGJ1aWxkKCk7XG4gICAgICAgICAgICBiaW5kRXZlbnRzKCk7XG4gICAgICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCB8fCBzZWxmLmNvbmZpZy5ub0NhbGVuZGFyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmVuYWJsZVRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SG91cnNGcm9tRGF0ZShzZWxmLmNvbmZpZy5ub0NhbGVuZGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqIHx8IHNlbGYuY29uZmlnLm1pbkRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdXBkYXRlVmFsdWUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0Q2FsZW5kYXJXaWR0aCgpO1xuICAgICAgICAgICAgdmFyIGlzU2FmYXJpID0gL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgICAgICAgIC8qIFRPRE86IGludmVzdGlnYXRlIHRoaXMgZnVydGhlclxuICAgICAgICBcbiAgICAgICAgICAgICAgQ3VycmVudGx5LCB0aGVyZSBpcyB3ZWlyZCBwb3NpdGlvbmluZyBiZWhhdmlvciBpbiBzYWZhcmkgY2F1c2luZyBwYWdlc1xuICAgICAgICAgICAgICB0byBzY3JvbGwgdXAuIGh0dHBzOi8vZ2l0aHViLmNvbS9jaG1sbi9mbGF0cGlja3IvaXNzdWVzLzU2M1xuICAgICAgICBcbiAgICAgICAgICAgICAgSG93ZXZlciwgbW9zdCBicm93c2VycyBhcmUgbm90IFNhZmFyaSBhbmQgcG9zaXRpb25pbmcgaXMgZXhwZW5zaXZlIHdoZW4gdXNlZFxuICAgICAgICAgICAgICBpbiBzY2FsZS4gaHR0cHM6Ly9naXRodWIuY29tL2NobWxuL2ZsYXRwaWNrci9pc3N1ZXMvMTA5NlxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICghc2VsZi5pc01vYmlsZSAmJiBpc1NhZmFyaSkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uQ2FsZW5kYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uUmVhZHlcIik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYmluZFRvSW5zdGFuY2UoZm4pIHtcbiAgICAgICAgICAgIHJldHVybiBmbi5iaW5kKHNlbGYpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNldENhbGVuZGFyV2lkdGgoKSB7XG4gICAgICAgICAgICB2YXIgY29uZmlnID0gc2VsZi5jb25maWc7XG4gICAgICAgICAgICBpZiAoY29uZmlnLndlZWtOdW1iZXJzID09PSBmYWxzZSAmJiBjb25maWcuc2hvd01vbnRocyA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbmZpZy5ub0NhbGVuZGFyICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmNhbGVuZGFyQ29udGFpbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF5c1dpZHRoID0gKHNlbGYuZGF5cy5vZmZzZXRXaWR0aCArIDEpICogY29uZmlnLnNob3dNb250aHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIuc3R5bGUud2lkdGggPSBkYXlzV2lkdGggKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLndpZHRoID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlzV2lkdGggK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc2VsZi53ZWVrV3JhcHBlciAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNlbGYud2Vla1dyYXBwZXIub2Zmc2V0V2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB4XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidmlzaWJpbGl0eVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBoYW5kbGVyIGZvciBhbGwgZXZlbnRzIHRhcmdldGluZyB0aGUgdGltZSBpbnB1dHNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWUoZSkge1xuICAgICAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVmYXVsdERhdGUgPSBzZWxmLmNvbmZpZy5taW5EYXRlICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgPyBuZXcgRGF0ZShzZWxmLmNvbmZpZy5taW5EYXRlLmdldFRpbWUoKSlcbiAgICAgICAgICAgICAgICAgICAgOiBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIHZhciBfYSA9IGdldERlZmF1bHRIb3VycygpLCBob3VycyA9IF9hLmhvdXJzLCBtaW51dGVzID0gX2EubWludXRlcywgc2Vjb25kcyA9IF9hLnNlY29uZHM7XG4gICAgICAgICAgICAgICAgZGVmYXVsdERhdGUuc2V0SG91cnMoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIDApO1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0RGF0ZShkZWZhdWx0RGF0ZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUgIT09IHVuZGVmaW5lZCAmJiBlLnR5cGUgIT09IFwiYmx1clwiKSB7XG4gICAgICAgICAgICAgICAgdGltZVdyYXBwZXIoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJldlZhbHVlID0gc2VsZi5faW5wdXQudmFsdWU7XG4gICAgICAgICAgICBzZXRIb3Vyc0Zyb21JbnB1dHMoKTtcbiAgICAgICAgICAgIHVwZGF0ZVZhbHVlKCk7XG4gICAgICAgICAgICBpZiAoc2VsZi5faW5wdXQudmFsdWUgIT09IHByZXZWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuX2RlYm91bmNlZENoYW5nZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFtcG0ybWlsaXRhcnkoaG91ciwgYW1QTSkge1xuICAgICAgICAgICAgcmV0dXJuIChob3VyICUgMTIpICsgMTIgKiBpbnQoYW1QTSA9PT0gc2VsZi5sMTBuLmFtUE1bMV0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1pbGl0YXJ5MmFtcG0oaG91cikge1xuICAgICAgICAgICAgc3dpdGNoIChob3VyICUgMjQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDEyO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBob3VyICUgMTI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN5bmNzIHRoZSBzZWxlY3RlZCBkYXRlIG9iamVjdCB0aW1lIHdpdGggdXNlcidzIHRpbWUgaW5wdXRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHNldEhvdXJzRnJvbUlucHV0cygpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmhvdXJFbGVtZW50ID09PSB1bmRlZmluZWQgfHwgc2VsZi5taW51dGVFbGVtZW50ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIGhvdXJzID0gKHBhcnNlSW50KHNlbGYuaG91ckVsZW1lbnQudmFsdWUuc2xpY2UoLTIpLCAxMCkgfHwgMCkgJSAyNCwgbWludXRlcyA9IChwYXJzZUludChzZWxmLm1pbnV0ZUVsZW1lbnQudmFsdWUsIDEwKSB8fCAwKSAlIDYwLCBzZWNvbmRzID0gc2VsZi5zZWNvbmRFbGVtZW50ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/IChwYXJzZUludChzZWxmLnNlY29uZEVsZW1lbnQudmFsdWUsIDEwKSB8fCAwKSAlIDYwXG4gICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaG91cnMgPSBhbXBtMm1pbGl0YXJ5KGhvdXJzLCBzZWxmLmFtUE0udGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGxpbWl0TWluSG91cnMgPSBzZWxmLmNvbmZpZy5taW5UaW1lICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgICAoc2VsZi5jb25maWcubWluRGF0ZSAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxmLm1pbkRhdGVIYXNUaW1lICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqICYmXG4gICAgICAgICAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiwgc2VsZi5jb25maWcubWluRGF0ZSwgdHJ1ZSkgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAwKTtcbiAgICAgICAgICAgIHZhciBsaW1pdE1heEhvdXJzID0gc2VsZi5jb25maWcubWF4VGltZSAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgICAgKHNlbGYuY29uZmlnLm1heERhdGUgJiZcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tYXhEYXRlSGFzVGltZSAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiAmJlxuICAgICAgICAgICAgICAgICAgICBjb21wYXJlRGF0ZXMoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmosIHNlbGYuY29uZmlnLm1heERhdGUsIHRydWUpID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgMCk7XG4gICAgICAgICAgICBpZiAobGltaXRNYXhIb3Vycykge1xuICAgICAgICAgICAgICAgIHZhciBtYXhUaW1lID0gc2VsZi5jb25maWcubWF4VGltZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcubWF4VGltZVxuICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLm1heERhdGU7XG4gICAgICAgICAgICAgICAgaG91cnMgPSBNYXRoLm1pbihob3VycywgbWF4VGltZS5nZXRIb3VycygpKTtcbiAgICAgICAgICAgICAgICBpZiAoaG91cnMgPT09IG1heFRpbWUuZ2V0SG91cnMoKSlcbiAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IE1hdGgubWluKG1pbnV0ZXMsIG1heFRpbWUuZ2V0TWludXRlcygpKTtcbiAgICAgICAgICAgICAgICBpZiAobWludXRlcyA9PT0gbWF4VGltZS5nZXRNaW51dGVzKCkpXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZHMgPSBNYXRoLm1pbihzZWNvbmRzLCBtYXhUaW1lLmdldFNlY29uZHMoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGltaXRNaW5Ib3Vycykge1xuICAgICAgICAgICAgICAgIHZhciBtaW5UaW1lID0gc2VsZi5jb25maWcubWluVGltZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcubWluVGltZVxuICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLm1pbkRhdGU7XG4gICAgICAgICAgICAgICAgaG91cnMgPSBNYXRoLm1heChob3VycywgbWluVGltZS5nZXRIb3VycygpKTtcbiAgICAgICAgICAgICAgICBpZiAoaG91cnMgPT09IG1pblRpbWUuZ2V0SG91cnMoKSlcbiAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IE1hdGgubWF4KG1pbnV0ZXMsIG1pblRpbWUuZ2V0TWludXRlcygpKTtcbiAgICAgICAgICAgICAgICBpZiAobWludXRlcyA9PT0gbWluVGltZS5nZXRNaW51dGVzKCkpXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZHMgPSBNYXRoLm1heChzZWNvbmRzLCBtaW5UaW1lLmdldFNlY29uZHMoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRIb3Vycyhob3VycywgbWludXRlcywgc2Vjb25kcyk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN5bmNzIHRpbWUgaW5wdXQgdmFsdWVzIHdpdGggYSBkYXRlXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBzZXRIb3Vyc0Zyb21EYXRlKGRhdGVPYmopIHtcbiAgICAgICAgICAgIHZhciBkYXRlID0gZGF0ZU9iaiB8fCBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iajtcbiAgICAgICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICAgICAgc2V0SG91cnMoZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldERlZmF1bHRIb3VycygpIHtcbiAgICAgICAgICAgIHZhciBob3VycyA9IHNlbGYuY29uZmlnLmRlZmF1bHRIb3VyO1xuICAgICAgICAgICAgdmFyIG1pbnV0ZXMgPSBzZWxmLmNvbmZpZy5kZWZhdWx0TWludXRlO1xuICAgICAgICAgICAgdmFyIHNlY29uZHMgPSBzZWxmLmNvbmZpZy5kZWZhdWx0U2Vjb25kcztcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5taW5EYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWluSHIgPSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEhvdXJzKCk7XG4gICAgICAgICAgICAgICAgdmFyIG1pbk1pbnV0ZXMgPSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgICAgICAgICBob3VycyA9IE1hdGgubWF4KGhvdXJzLCBtaW5Icik7XG4gICAgICAgICAgICAgICAgaWYgKGhvdXJzID09PSBtaW5IcilcbiAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IE1hdGgubWF4KG1pbk1pbnV0ZXMsIG1pbnV0ZXMpO1xuICAgICAgICAgICAgICAgIGlmIChob3VycyA9PT0gbWluSHIgJiYgbWludXRlcyA9PT0gbWluTWludXRlcylcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kcyA9IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0U2Vjb25kcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1heERhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhciBtYXhIciA9IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgICAgICB2YXIgbWF4TWludXRlcyA9IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0TWludXRlcygpO1xuICAgICAgICAgICAgICAgIGhvdXJzID0gTWF0aC5taW4oaG91cnMsIG1heEhyKTtcbiAgICAgICAgICAgICAgICBpZiAoaG91cnMgPT09IG1heEhyKVxuICAgICAgICAgICAgICAgICAgICBtaW51dGVzID0gTWF0aC5taW4obWF4TWludXRlcywgbWludXRlcyk7XG4gICAgICAgICAgICAgICAgaWYgKGhvdXJzID09PSBtYXhIciAmJiBtaW51dGVzID09PSBtYXhNaW51dGVzKVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRzID0gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBob3VyczogaG91cnMsIG1pbnV0ZXM6IG1pbnV0ZXMsIHNlY29uZHM6IHNlY29uZHMgfTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgaG91cnMsIG1pbnV0ZXMsIGFuZCBvcHRpb25hbGx5IHNlY29uZHNcbiAgICAgICAgICogb2YgdGhlIGxhdGVzdCBzZWxlY3RlZCBkYXRlIG9iamVjdCBhbmQgdGhlXG4gICAgICAgICAqIGNvcnJlc3BvbmRpbmcgdGltZSBpbnB1dHNcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IGhvdXJzIHRoZSBob3VyLiB3aGV0aGVyIGl0cyBtaWxpdGFyeVxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgb3IgYW0tcG0gZ2V0cyBpbmZlcnJlZCBmcm9tIGNvbmZpZ1xuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gbWludXRlcyB0aGUgbWludXRlc1xuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gc2Vjb25kcyB0aGUgc2Vjb25kcyAob3B0aW9uYWwpXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBzZXRIb3Vycyhob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICAgICAgICAgICAgaWYgKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iai5zZXRIb3Vycyhob3VycyAlIDI0LCBtaW51dGVzLCBzZWNvbmRzIHx8IDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzZWxmLmhvdXJFbGVtZW50IHx8ICFzZWxmLm1pbnV0ZUVsZW1lbnQgfHwgc2VsZi5pc01vYmlsZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzZWxmLmhvdXJFbGVtZW50LnZhbHVlID0gcGFkKCFzZWxmLmNvbmZpZy50aW1lXzI0aHJcbiAgICAgICAgICAgICAgICA/ICgoMTIgKyBob3VycykgJSAxMikgKyAxMiAqIGludChob3VycyAlIDEyID09PSAwKVxuICAgICAgICAgICAgICAgIDogaG91cnMpO1xuICAgICAgICAgICAgc2VsZi5taW51dGVFbGVtZW50LnZhbHVlID0gcGFkKG1pbnV0ZXMpO1xuICAgICAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHNlbGYuYW1QTS50ZXh0Q29udGVudCA9IHNlbGYubDEwbi5hbVBNW2ludChob3VycyA+PSAxMildO1xuICAgICAgICAgICAgaWYgKHNlbGYuc2Vjb25kRWxlbWVudCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHNlbGYuc2Vjb25kRWxlbWVudC52YWx1ZSA9IHBhZChzZWNvbmRzKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSGFuZGxlcyB0aGUgeWVhciBpbnB1dCBhbmQgaW5jcmVtZW50aW5nIGV2ZW50c1xuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCB0aGUga2V5dXAgb3IgaW5jcmVtZW50IGV2ZW50XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBvblllYXJJbnB1dChldmVudCkge1xuICAgICAgICAgICAgdmFyIGV2ZW50VGFyZ2V0ID0gZ2V0RXZlbnRUYXJnZXQoZXZlbnQpO1xuICAgICAgICAgICAgdmFyIHllYXIgPSBwYXJzZUludChldmVudFRhcmdldC52YWx1ZSkgKyAoZXZlbnQuZGVsdGEgfHwgMCk7XG4gICAgICAgICAgICBpZiAoeWVhciAvIDEwMDAgPiAxIHx8XG4gICAgICAgICAgICAgICAgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiICYmICEvW15cXGRdLy50ZXN0KHllYXIudG9TdHJpbmcoKSkpKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlWWVhcih5ZWFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogRXNzZW50aWFsbHkgYWRkRXZlbnRMaXN0ZW5lciArIHRyYWNraW5nXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCB0aGUgZWxlbWVudCB0byBhZGRFdmVudExpc3RlbmVyIHRvXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCB0aGUgZXZlbnQgbmFtZVxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIHRoZSBldmVudCBoYW5kbGVyXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBiaW5kKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBBcnJheSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQuZm9yRWFjaChmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIGJpbmQoZWxlbWVudCwgZXYsIGhhbmRsZXIsIG9wdGlvbnMpOyB9KTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGJpbmQoZWwsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTsgfSk7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICAgICAgc2VsZi5faGFuZGxlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogaGFuZGxlcixcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdHJpZ2dlckNoYW5nZSgpIHtcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uQ2hhbmdlXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRzIGFsbCB0aGUgbmVjZXNzYXJ5IGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy53cmFwKSB7XG4gICAgICAgICAgICAgICAgW1wib3BlblwiLCBcImNsb3NlXCIsIFwidG9nZ2xlXCIsIFwiY2xlYXJcIl0uZm9yRWFjaChmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoc2VsZi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1cIiArIGV2dCArIFwiXVwiKSwgZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmluZChlbCwgXCJjbGlja1wiLCBzZWxmW2V2dF0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxmLmlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgc2V0dXBNb2JpbGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZGVib3VuY2VkUmVzaXplID0gZGVib3VuY2Uob25SZXNpemUsIDUwKTtcbiAgICAgICAgICAgIHNlbGYuX2RlYm91bmNlZENoYW5nZSA9IGRlYm91bmNlKHRyaWdnZXJDaGFuZ2UsIERFQk9VTkNFRF9DSEFOR0VfTVMpO1xuICAgICAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lciAmJiAhL2lQaG9uZXxpUGFkfGlQb2QvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKVxuICAgICAgICAgICAgICAgIGJpbmQoc2VsZi5kYXlzQ29udGFpbmVyLCBcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXIoZ2V0RXZlbnRUYXJnZXQoZSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYmluZCh3aW5kb3cuZG9jdW1lbnQuYm9keSwgXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XG4gICAgICAgICAgICBpZiAoIXNlbGYuY29uZmlnLmlubGluZSAmJiAhc2VsZi5jb25maWcuc3RhdGljKVxuICAgICAgICAgICAgICAgIGJpbmQod2luZG93LCBcInJlc2l6ZVwiLCBkZWJvdW5jZWRSZXNpemUpO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5vbnRvdWNoc3RhcnQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBiaW5kKHdpbmRvdy5kb2N1bWVudCwgXCJ0b3VjaHN0YXJ0XCIsIGRvY3VtZW50Q2xpY2spO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGJpbmQod2luZG93LmRvY3VtZW50LCBcImNsaWNrXCIsIGRvY3VtZW50Q2xpY2spO1xuICAgICAgICAgICAgYmluZCh3aW5kb3cuZG9jdW1lbnQsIFwiZm9jdXNcIiwgZG9jdW1lbnRDbGljaywgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmNsaWNrT3BlbnMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBiaW5kKHNlbGYuX2lucHV0LCBcImZvY3VzXCIsIHNlbGYub3Blbik7XG4gICAgICAgICAgICAgICAgYmluZChzZWxmLl9pbnB1dCwgXCJjbGlja1wiLCBzZWxmLm9wZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgYmluZChzZWxmLm1vbnRoTmF2LCBcImNsaWNrXCIsIG9uTW9udGhOYXZDbGljayk7XG4gICAgICAgICAgICAgICAgYmluZChzZWxmLm1vbnRoTmF2LCBbXCJrZXl1cFwiLCBcImluY3JlbWVudFwiXSwgb25ZZWFySW5wdXQpO1xuICAgICAgICAgICAgICAgIGJpbmQoc2VsZi5kYXlzQ29udGFpbmVyLCBcImNsaWNrXCIsIHNlbGVjdERhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYudGltZUNvbnRhaW5lciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgc2VsZi5taW51dGVFbGVtZW50ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICBzZWxmLmhvdXJFbGVtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsVGV4dCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRFdmVudFRhcmdldChlKS5zZWxlY3QoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJpbmQoc2VsZi50aW1lQ29udGFpbmVyLCBbXCJpbmNyZW1lbnRcIl0sIHVwZGF0ZVRpbWUpO1xuICAgICAgICAgICAgICAgIGJpbmQoc2VsZi50aW1lQ29udGFpbmVyLCBcImJsdXJcIiwgdXBkYXRlVGltZSwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIGJpbmQoc2VsZi50aW1lQ29udGFpbmVyLCBcImNsaWNrXCIsIHRpbWVJbmNyZW1lbnQpO1xuICAgICAgICAgICAgICAgIGJpbmQoW3NlbGYuaG91ckVsZW1lbnQsIHNlbGYubWludXRlRWxlbWVudF0sIFtcImZvY3VzXCIsIFwiY2xpY2tcIl0sIHNlbFRleHQpO1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLnNlY29uZEVsZW1lbnQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgYmluZChzZWxmLnNlY29uZEVsZW1lbnQsIFwiZm9jdXNcIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5zZWNvbmRFbGVtZW50ICYmIHNlbGYuc2Vjb25kRWxlbWVudC5zZWxlY3QoKTsgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGJpbmQoc2VsZi5hbVBNLCBcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVUaW1lKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckNoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuYWxsb3dJbnB1dClcbiAgICAgICAgICAgICAgICBiaW5kKHNlbGYuX2lucHV0LCBcImJsdXJcIiwgb25CbHVyKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoZSBjYWxlbmRhciB2aWV3IHRvIGEgcGFydGljdWxhciBkYXRlLlxuICAgICAgICAgKiBAcGFyYW0ge0RhdGV9IGp1bXBEYXRlIHRoZSBkYXRlIHRvIHNldCB0aGUgdmlldyB0b1xuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHRyaWdnZXJDaGFuZ2UgaWYgY2hhbmdlIGV2ZW50cyBzaG91bGQgYmUgdHJpZ2dlcmVkXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBqdW1wVG9EYXRlKGp1bXBEYXRlLCB0cmlnZ2VyQ2hhbmdlKSB7XG4gICAgICAgICAgICB2YXIganVtcFRvID0ganVtcERhdGUgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gc2VsZi5wYXJzZURhdGUoanVtcERhdGUpXG4gICAgICAgICAgICAgICAgOiBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiB8fFxuICAgICAgICAgICAgICAgICAgICAoc2VsZi5jb25maWcubWluRGF0ZSAmJiBzZWxmLmNvbmZpZy5taW5EYXRlID4gc2VsZi5ub3dcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcubWluRGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5tYXhEYXRlICYmIHNlbGYuY29uZmlnLm1heERhdGUgPCBzZWxmLm5vd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcubWF4RGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2VsZi5ub3cpO1xuICAgICAgICAgICAgdmFyIG9sZFllYXIgPSBzZWxmLmN1cnJlbnRZZWFyO1xuICAgICAgICAgICAgdmFyIG9sZE1vbnRoID0gc2VsZi5jdXJyZW50TW9udGg7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChqdW1wVG8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID0ganVtcFRvLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0ganVtcFRvLmdldE1vbnRoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgICAgICAgIGUubWVzc2FnZSA9IFwiSW52YWxpZCBkYXRlIHN1cHBsaWVkOiBcIiArIGp1bXBUbztcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5lcnJvckhhbmRsZXIoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHJpZ2dlckNoYW5nZSAmJiBzZWxmLmN1cnJlbnRZZWFyICE9PSBvbGRZZWFyKSB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25ZZWFyQ2hhbmdlXCIpO1xuICAgICAgICAgICAgICAgIGJ1aWxkTW9udGhTd2l0Y2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlICYmXG4gICAgICAgICAgICAgICAgKHNlbGYuY3VycmVudFllYXIgIT09IG9sZFllYXIgfHwgc2VsZi5jdXJyZW50TW9udGggIT09IG9sZE1vbnRoKSkge1xuICAgICAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uTW9udGhDaGFuZ2VcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLnJlZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdXAvZG93biBhcnJvdyBoYW5kbGVyIGZvciB0aW1lIGlucHV0c1xuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlIHRoZSBjbGljayBldmVudFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gdGltZUluY3JlbWVudChlKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnRUYXJnZXQgPSBnZXRFdmVudFRhcmdldChlKTtcbiAgICAgICAgICAgIGlmICh+ZXZlbnRUYXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoXCJhcnJvd1wiKSlcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnROdW1JbnB1dChlLCBldmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhcnJvd1VwXCIpID8gMSA6IC0xKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSW5jcmVtZW50cy9kZWNyZW1lbnRzIHRoZSB2YWx1ZSBvZiBpbnB1dCBhc3NvY2ktXG4gICAgICAgICAqIGF0ZWQgd2l0aCB0aGUgdXAvZG93biBhcnJvdyBieSBkaXNwYXRjaGluZyBhblxuICAgICAgICAgKiBcImluY3JlbWVudFwiIGV2ZW50IG9uIHRoZSBpbnB1dC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtFdmVudH0gZSB0aGUgY2xpY2sgZXZlbnRcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IGRlbHRhIHRoZSBkaWZmICh1c3VhbGx5IDEgb3IgLTEpXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gaW5wdXRFbGVtIHRoZSBpbnB1dCBlbGVtZW50XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBpbmNyZW1lbnROdW1JbnB1dChlLCBkZWx0YSwgaW5wdXRFbGVtKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZSAmJiBnZXRFdmVudFRhcmdldChlKTtcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IGlucHV0RWxlbSB8fFxuICAgICAgICAgICAgICAgICh0YXJnZXQgJiYgdGFyZ2V0LnBhcmVudE5vZGUgJiYgdGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBjcmVhdGVFdmVudChcImluY3JlbWVudFwiKTtcbiAgICAgICAgICAgIGV2ZW50LmRlbHRhID0gZGVsdGE7XG4gICAgICAgICAgICBpbnB1dCAmJiBpbnB1dC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBidWlsZCgpIHtcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1jYWxlbmRhclwiKTtcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIudGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIGlmICghc2VsZi5jb25maWcubm9DYWxlbmRhcikge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGJ1aWxkTW9udGhOYXYoKSk7XG4gICAgICAgICAgICAgICAgc2VsZi5pbm5lckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItaW5uZXJDb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLndlZWtOdW1iZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSA9IGJ1aWxkV2Vla3MoKSwgd2Vla1dyYXBwZXIgPSBfYS53ZWVrV3JhcHBlciwgd2Vla051bWJlcnMgPSBfYS53ZWVrTnVtYmVycztcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWVrV3JhcHBlcik7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYud2Vla051bWJlcnMgPSB3ZWVrTnVtYmVycztcbiAgICAgICAgICAgICAgICAgICAgc2VsZi53ZWVrV3JhcHBlciA9IHdlZWtXcmFwcGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLnJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXJDb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgc2VsZi5yQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkV2Vla2RheXMoKSk7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxmLmRheXNDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1kYXlzXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIudGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnVpbGREYXlzKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5yQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGYuZGF5c0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgc2VsZi5pbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxmLnJDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHNlbGYuaW5uZXJDb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmVuYWJsZVRpbWUpIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChidWlsZFRpbWUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcInJhbmdlTW9kZVwiLCBzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpO1xuICAgICAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJhbmltYXRlXCIsIHNlbGYuY29uZmlnLmFuaW1hdGUgPT09IHRydWUpO1xuICAgICAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJtdWx0aU1vbnRoXCIsIHNlbGYuY29uZmlnLnNob3dNb250aHMgPiAxKTtcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICAgICAgdmFyIGN1c3RvbUFwcGVuZCA9IHNlbGYuY29uZmlnLmFwcGVuZFRvICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5hcHBlbmRUby5ub2RlVHlwZSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmlubGluZSB8fCBzZWxmLmNvbmZpZy5zdGF0aWMpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoc2VsZi5jb25maWcuaW5saW5lID8gXCJpbmxpbmVcIiA6IFwic3RhdGljXCIpO1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5pbmxpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXN0b21BcHBlbmQgJiYgc2VsZi5lbGVtZW50LnBhcmVudE5vZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgc2VsZi5faW5wdXQubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxmLmNvbmZpZy5hcHBlbmRUbyAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcuYXBwZW5kVG8uYXBwZW5kQ2hpbGQoc2VsZi5jYWxlbmRhckNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5zdGF0aWMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdyYXBwZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmVsZW1lbnQucGFyZW50Tm9kZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCBzZWxmLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHNlbGYuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmFsdElucHV0KVxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChzZWxmLmFsdElucHV0KTtcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChzZWxmLmNhbGVuZGFyQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXNlbGYuY29uZmlnLnN0YXRpYyAmJiAhc2VsZi5jb25maWcuaW5saW5lKVxuICAgICAgICAgICAgICAgIChzZWxmLmNvbmZpZy5hcHBlbmRUbyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcuYXBwZW5kVG9cbiAgICAgICAgICAgICAgICAgICAgOiB3aW5kb3cuZG9jdW1lbnQuYm9keSkuYXBwZW5kQ2hpbGQoc2VsZi5jYWxlbmRhckNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlRGF5KGNsYXNzTmFtZSwgZGF0ZSwgZGF5TnVtYmVyLCBpKSB7XG4gICAgICAgICAgICB2YXIgZGF0ZUlzRW5hYmxlZCA9IGlzRW5hYmxlZChkYXRlLCB0cnVlKSwgZGF5RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLWRheSBcIiArIGNsYXNzTmFtZSwgZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBkYXlFbGVtZW50LmRhdGVPYmogPSBkYXRlO1xuICAgICAgICAgICAgZGF5RWxlbWVudC4kaSA9IGk7XG4gICAgICAgICAgICBkYXlFbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgc2VsZi5mb3JtYXREYXRlKGRhdGUsIHNlbGYuY29uZmlnLmFyaWFEYXRlRm9ybWF0KSk7XG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lLmluZGV4T2YoXCJoaWRkZW5cIikgPT09IC0xICYmXG4gICAgICAgICAgICAgICAgY29tcGFyZURhdGVzKGRhdGUsIHNlbGYubm93KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHNlbGYudG9kYXlEYXRlRWxlbSA9IGRheUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG9kYXlcIik7XG4gICAgICAgICAgICAgICAgZGF5RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIiwgXCJkYXRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGVJc0VuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBkYXlFbGVtZW50LnRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgaWYgKGlzRGF0ZVNlbGVjdGVkKGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZUVsZW0gPSBkYXlFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzcyhkYXlFbGVtZW50LCBcInN0YXJ0UmFuZ2VcIiwgc2VsZi5zZWxlY3RlZERhdGVzWzBdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyZURhdGVzKGRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1swXSwgdHJ1ZSkgPT09IDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3MoZGF5RWxlbWVudCwgXCJlbmRSYW5nZVwiLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzFdLCB0cnVlKSA9PT0gMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lID09PSBcIm5leHRNb250aERheVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImluUmFuZ2VcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmbGF0cGlja3ItZGlzYWJsZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRGF0ZUluUmFuZ2UoZGF0ZSkgJiYgIWlzRGF0ZVNlbGVjdGVkKGRhdGUpKVxuICAgICAgICAgICAgICAgICAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpblJhbmdlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYud2Vla051bWJlcnMgJiZcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5zaG93TW9udGhzID09PSAxICYmXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICE9PSBcInByZXZNb250aERheVwiICYmXG4gICAgICAgICAgICAgICAgZGF5TnVtYmVyICUgNyA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHNlbGYud2Vla051bWJlcnMuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIFwiPHNwYW4gY2xhc3M9J2ZsYXRwaWNrci1kYXknPlwiICsgc2VsZi5jb25maWcuZ2V0V2VlayhkYXRlKSArIFwiPC9zcGFuPlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uRGF5Q3JlYXRlXCIsIGRheUVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIGRheUVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZm9jdXNPbkRheUVsZW0odGFyZ2V0Tm9kZSkge1xuICAgICAgICAgICAgdGFyZ2V0Tm9kZS5mb2N1cygpO1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIilcbiAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcih0YXJnZXROb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRGaXJzdEF2YWlsYWJsZURheShkZWx0YSkge1xuICAgICAgICAgICAgdmFyIHN0YXJ0TW9udGggPSBkZWx0YSA+IDAgPyAwIDogc2VsZi5jb25maWcuc2hvd01vbnRocyAtIDE7XG4gICAgICAgICAgICB2YXIgZW5kTW9udGggPSBkZWx0YSA+IDAgPyBzZWxmLmNvbmZpZy5zaG93TW9udGhzIDogLTE7XG4gICAgICAgICAgICBmb3IgKHZhciBtID0gc3RhcnRNb250aDsgbSAhPSBlbmRNb250aDsgbSArPSBkZWx0YSkge1xuICAgICAgICAgICAgICAgIHZhciBtb250aCA9IHNlbGYuZGF5c0NvbnRhaW5lci5jaGlsZHJlblttXTtcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRJbmRleCA9IGRlbHRhID4gMCA/IDAgOiBtb250aC5jaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHZhciBlbmRJbmRleCA9IGRlbHRhID4gMCA/IG1vbnRoLmNoaWxkcmVuLmxlbmd0aCA6IC0xO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBzdGFydEluZGV4OyBpICE9IGVuZEluZGV4OyBpICs9IGRlbHRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gbW9udGguY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjLmNsYXNzTmFtZS5pbmRleE9mKFwiaGlkZGVuXCIpID09PSAtMSAmJiBpc0VuYWJsZWQoYy5kYXRlT2JqKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0TmV4dEF2YWlsYWJsZURheShjdXJyZW50LCBkZWx0YSkge1xuICAgICAgICAgICAgdmFyIGdpdmVuTW9udGggPSBjdXJyZW50LmNsYXNzTmFtZS5pbmRleE9mKFwiTW9udGhcIikgPT09IC0xXG4gICAgICAgICAgICAgICAgPyBjdXJyZW50LmRhdGVPYmouZ2V0TW9udGgoKVxuICAgICAgICAgICAgICAgIDogc2VsZi5jdXJyZW50TW9udGg7XG4gICAgICAgICAgICB2YXIgZW5kTW9udGggPSBkZWx0YSA+IDAgPyBzZWxmLmNvbmZpZy5zaG93TW9udGhzIDogLTE7XG4gICAgICAgICAgICB2YXIgbG9vcERlbHRhID0gZGVsdGEgPiAwID8gMSA6IC0xO1xuICAgICAgICAgICAgZm9yICh2YXIgbSA9IGdpdmVuTW9udGggLSBzZWxmLmN1cnJlbnRNb250aDsgbSAhPSBlbmRNb250aDsgbSArPSBsb29wRGVsdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgbW9udGggPSBzZWxmLmRheXNDb250YWluZXIuY2hpbGRyZW5bbV07XG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0SW5kZXggPSBnaXZlbk1vbnRoIC0gc2VsZi5jdXJyZW50TW9udGggPT09IG1cbiAgICAgICAgICAgICAgICAgICAgPyBjdXJyZW50LiRpICsgZGVsdGFcbiAgICAgICAgICAgICAgICAgICAgOiBkZWx0YSA8IDBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbW9udGguY2hpbGRyZW4ubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgICAgIHZhciBudW1Nb250aERheXMgPSBtb250aC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0SW5kZXg7IGkgPj0gMCAmJiBpIDwgbnVtTW9udGhEYXlzICYmIGkgIT0gKGRlbHRhID4gMCA/IG51bU1vbnRoRGF5cyA6IC0xKTsgaSArPSBsb29wRGVsdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBtb250aC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMuY2xhc3NOYW1lLmluZGV4T2YoXCJoaWRkZW5cIikgPT09IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0VuYWJsZWQoYy5kYXRlT2JqKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoY3VycmVudC4kaSAtIGkpID49IE1hdGguYWJzKGRlbHRhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmb2N1c09uRGF5RWxlbShjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLmNoYW5nZU1vbnRoKGxvb3BEZWx0YSk7XG4gICAgICAgICAgICBmb2N1c09uRGF5KGdldEZpcnN0QXZhaWxhYmxlRGF5KGxvb3BEZWx0YSksIDApO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBmb2N1c09uRGF5KGN1cnJlbnQsIG9mZnNldCkge1xuICAgICAgICAgICAgdmFyIGRheUZvY3VzZWQgPSBpc0luVmlldyhkb2N1bWVudC5hY3RpdmVFbGVtZW50IHx8IGRvY3VtZW50LmJvZHkpO1xuICAgICAgICAgICAgdmFyIHN0YXJ0RWxlbSA9IGN1cnJlbnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gY3VycmVudFxuICAgICAgICAgICAgICAgIDogZGF5Rm9jdXNlZFxuICAgICAgICAgICAgICAgICAgICA/IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgOiBzZWxmLnNlbGVjdGVkRGF0ZUVsZW0gIT09IHVuZGVmaW5lZCAmJiBpc0luVmlldyhzZWxmLnNlbGVjdGVkRGF0ZUVsZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHNlbGYuc2VsZWN0ZWREYXRlRWxlbVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzZWxmLnRvZGF5RGF0ZUVsZW0gIT09IHVuZGVmaW5lZCAmJiBpc0luVmlldyhzZWxmLnRvZGF5RGF0ZUVsZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxmLnRvZGF5RGF0ZUVsZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGdldEZpcnN0QXZhaWxhYmxlRGF5KG9mZnNldCA+IDAgPyAxIDogLTEpO1xuICAgICAgICAgICAgaWYgKHN0YXJ0RWxlbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5faW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCFkYXlGb2N1c2VkKSB7XG4gICAgICAgICAgICAgICAgZm9jdXNPbkRheUVsZW0oc3RhcnRFbGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdldE5leHRBdmFpbGFibGVEYXkoc3RhcnRFbGVtLCBvZmZzZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGJ1aWxkTW9udGhEYXlzKHllYXIsIG1vbnRoKSB7XG4gICAgICAgICAgICB2YXIgZmlyc3RPZk1vbnRoID0gKG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKS5nZXREYXkoKSAtIHNlbGYubDEwbi5maXJzdERheU9mV2VlayArIDcpICUgNztcbiAgICAgICAgICAgIHZhciBwcmV2TW9udGhEYXlzID0gc2VsZi51dGlscy5nZXREYXlzSW5Nb250aCgobW9udGggLSAxICsgMTIpICUgMTIsIHllYXIpO1xuICAgICAgICAgICAgdmFyIGRheXNJbk1vbnRoID0gc2VsZi51dGlscy5nZXREYXlzSW5Nb250aChtb250aCwgeWVhciksIGRheXMgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLCBpc011bHRpTW9udGggPSBzZWxmLmNvbmZpZy5zaG93TW9udGhzID4gMSwgcHJldk1vbnRoRGF5Q2xhc3MgPSBpc011bHRpTW9udGggPyBcInByZXZNb250aERheSBoaWRkZW5cIiA6IFwicHJldk1vbnRoRGF5XCIsIG5leHRNb250aERheUNsYXNzID0gaXNNdWx0aU1vbnRoID8gXCJuZXh0TW9udGhEYXkgaGlkZGVuXCIgOiBcIm5leHRNb250aERheVwiO1xuICAgICAgICAgICAgdmFyIGRheU51bWJlciA9IHByZXZNb250aERheXMgKyAxIC0gZmlyc3RPZk1vbnRoLCBkYXlJbmRleCA9IDA7XG4gICAgICAgICAgICAvLyBwcmVwZW5kIGRheXMgZnJvbSB0aGUgZW5kaW5nIG9mIHByZXZpb3VzIG1vbnRoXG4gICAgICAgICAgICBmb3IgKDsgZGF5TnVtYmVyIDw9IHByZXZNb250aERheXM7IGRheU51bWJlcisrLCBkYXlJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgZGF5cy5hcHBlbmRDaGlsZChjcmVhdGVEYXkocHJldk1vbnRoRGF5Q2xhc3MsIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5TnVtYmVyKSwgZGF5TnVtYmVyLCBkYXlJbmRleCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RhcnQgYXQgMSBzaW5jZSB0aGVyZSBpcyBubyAwdGggZGF5XG4gICAgICAgICAgICBmb3IgKGRheU51bWJlciA9IDE7IGRheU51bWJlciA8PSBkYXlzSW5Nb250aDsgZGF5TnVtYmVyKyssIGRheUluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBkYXlzLmFwcGVuZENoaWxkKGNyZWF0ZURheShcIlwiLCBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5TnVtYmVyKSwgZGF5TnVtYmVyLCBkYXlJbmRleCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYXBwZW5kIGRheXMgZnJvbSB0aGUgbmV4dCBtb250aFxuICAgICAgICAgICAgZm9yICh2YXIgZGF5TnVtID0gZGF5c0luTW9udGggKyAxOyBkYXlOdW0gPD0gNDIgLSBmaXJzdE9mTW9udGggJiZcbiAgICAgICAgICAgICAgICAoc2VsZi5jb25maWcuc2hvd01vbnRocyA9PT0gMSB8fCBkYXlJbmRleCAlIDcgIT09IDApOyBkYXlOdW0rKywgZGF5SW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGRheXMuYXBwZW5kQ2hpbGQoY3JlYXRlRGF5KG5leHRNb250aERheUNsYXNzLCBuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIGRheU51bSAlIGRheXNJbk1vbnRoKSwgZGF5TnVtLCBkYXlJbmRleCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy91cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XG4gICAgICAgICAgICB2YXIgZGF5Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImRheUNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlzKTtcbiAgICAgICAgICAgIHJldHVybiBkYXlDb250YWluZXI7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYnVpbGREYXlzKCkge1xuICAgICAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xlYXJOb2RlKHNlbGYuZGF5c0NvbnRhaW5lcik7XG4gICAgICAgICAgICAvLyBUT0RPOiB3ZWVrIG51bWJlcnMgZm9yIGVhY2ggbW9udGhcbiAgICAgICAgICAgIGlmIChzZWxmLndlZWtOdW1iZXJzKVxuICAgICAgICAgICAgICAgIGNsZWFyTm9kZShzZWxmLndlZWtOdW1iZXJzKTtcbiAgICAgICAgICAgIHZhciBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLmNvbmZpZy5zaG93TW9udGhzOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKHNlbGYuY3VycmVudFllYXIsIHNlbGYuY3VycmVudE1vbnRoLCAxKTtcbiAgICAgICAgICAgICAgICBkLnNldE1vbnRoKHNlbGYuY3VycmVudE1vbnRoICsgaSk7XG4gICAgICAgICAgICAgICAgZnJhZy5hcHBlbmRDaGlsZChidWlsZE1vbnRoRGF5cyhkLmdldEZ1bGxZZWFyKCksIGQuZ2V0TW9udGgoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWcpO1xuICAgICAgICAgICAgc2VsZi5kYXlzID0gc2VsZi5kYXlzQ29udGFpbmVyLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiICYmIHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBvbk1vdXNlT3ZlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGJ1aWxkTW9udGhTd2l0Y2goKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuc2hvd01vbnRocyA+IDEgfHxcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5tb250aFNlbGVjdG9yVHlwZSAhPT0gXCJkcm9wZG93blwiKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHZhciBzaG91bGRCdWlsZE1vbnRoID0gZnVuY3Rpb24gKG1vbnRoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1pbkRhdGUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID09PSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkgJiZcbiAgICAgICAgICAgICAgICAgICAgbW9udGggPCBzZWxmLmNvbmZpZy5taW5EYXRlLmdldE1vbnRoKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gIShzZWxmLmNvbmZpZy5tYXhEYXRlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhciA9PT0gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpICYmXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoID4gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRNb250aCgpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzZWxmLm1vbnRoc0Ryb3Bkb3duQ29udGFpbmVyLnRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICBzZWxmLm1vbnRoc0Ryb3Bkb3duQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNob3VsZEJ1aWxkTW9udGgoaSkpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHZhciBtb250aCA9IGNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgXCJmbGF0cGlja3ItbW9udGhEcm9wZG93bi1tb250aFwiKTtcbiAgICAgICAgICAgICAgICBtb250aC52YWx1ZSA9IG5ldyBEYXRlKHNlbGYuY3VycmVudFllYXIsIGkpLmdldE1vbnRoKCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBtb250aC50ZXh0Q29udGVudCA9IG1vbnRoVG9TdHIoaSwgc2VsZi5jb25maWcuc2hvcnRoYW5kQ3VycmVudE1vbnRoLCBzZWxmLmwxMG4pO1xuICAgICAgICAgICAgICAgIG1vbnRoLnRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY3VycmVudE1vbnRoID09PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vbnRoLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZi5tb250aHNEcm9wZG93bkNvbnRhaW5lci5hcHBlbmRDaGlsZChtb250aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYnVpbGRNb250aCgpIHtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLW1vbnRoXCIpO1xuICAgICAgICAgICAgdmFyIG1vbnRoTmF2RnJhZ21lbnQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgdmFyIG1vbnRoRWxlbWVudDtcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5zaG93TW9udGhzID4gMSB8fFxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1vbnRoU2VsZWN0b3JUeXBlID09PSBcInN0YXRpY1wiKSB7XG4gICAgICAgICAgICAgICAgbW9udGhFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJjdXItbW9udGhcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vbnRoc0Ryb3Bkb3duQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCBcImZsYXRwaWNrci1tb250aERyb3Bkb3duLW1vbnRoc1wiKTtcbiAgICAgICAgICAgICAgICBzZWxmLm1vbnRoc0Ryb3Bkb3duQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgc2VsZi5sMTBuLm1vbnRoQXJpYUxhYmVsKTtcbiAgICAgICAgICAgICAgICBiaW5kKHNlbGYubW9udGhzRHJvcGRvd25Db250YWluZXIsIFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBnZXRFdmVudFRhcmdldChlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkTW9udGggPSBwYXJzZUludCh0YXJnZXQudmFsdWUsIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jaGFuZ2VNb250aChzZWxlY3RlZE1vbnRoIC0gc2VsZi5jdXJyZW50TW9udGgpO1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbk1vbnRoQ2hhbmdlXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJ1aWxkTW9udGhTd2l0Y2goKTtcbiAgICAgICAgICAgICAgICBtb250aEVsZW1lbnQgPSBzZWxmLm1vbnRoc0Ryb3Bkb3duQ29udGFpbmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHllYXJJbnB1dCA9IGNyZWF0ZU51bWJlcklucHV0KFwiY3VyLXllYXJcIiwgeyB0YWJpbmRleDogXCItMVwiIH0pO1xuICAgICAgICAgICAgdmFyIHllYXJFbGVtZW50ID0geWVhcklucHV0LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF07XG4gICAgICAgICAgICB5ZWFyRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIHNlbGYubDEwbi55ZWFyQXJpYUxhYmVsKTtcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5taW5EYXRlKSB7XG4gICAgICAgICAgICAgICAgeWVhckVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWluXCIsIHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5tYXhEYXRlKSB7XG4gICAgICAgICAgICAgICAgeWVhckVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWF4XCIsIHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB5ZWFyRWxlbWVudC5kaXNhYmxlZCA9XG4gICAgICAgICAgICAgICAgICAgICEhc2VsZi5jb25maWcubWluRGF0ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpID09PSBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY3VycmVudE1vbnRoID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1jdXJyZW50LW1vbnRoXCIpO1xuICAgICAgICAgICAgY3VycmVudE1vbnRoLmFwcGVuZENoaWxkKG1vbnRoRWxlbWVudCk7XG4gICAgICAgICAgICBjdXJyZW50TW9udGguYXBwZW5kQ2hpbGQoeWVhcklucHV0KTtcbiAgICAgICAgICAgIG1vbnRoTmF2RnJhZ21lbnQuYXBwZW5kQ2hpbGQoY3VycmVudE1vbnRoKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb250aE5hdkZyYWdtZW50KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICAgICAgICAgICAgeWVhckVsZW1lbnQ6IHllYXJFbGVtZW50LFxuICAgICAgICAgICAgICAgIG1vbnRoRWxlbWVudDogbW9udGhFbGVtZW50LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBidWlsZE1vbnRocygpIHtcbiAgICAgICAgICAgIGNsZWFyTm9kZShzZWxmLm1vbnRoTmF2KTtcbiAgICAgICAgICAgIHNlbGYubW9udGhOYXYuYXBwZW5kQ2hpbGQoc2VsZi5wcmV2TW9udGhOYXYpO1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLnNob3dNb250aHMpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnllYXJFbGVtZW50cyA9IFtdO1xuICAgICAgICAgICAgICAgIHNlbGYubW9udGhFbGVtZW50cyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgbSA9IHNlbGYuY29uZmlnLnNob3dNb250aHM7IG0tLTspIHtcbiAgICAgICAgICAgICAgICB2YXIgbW9udGggPSBidWlsZE1vbnRoKCk7XG4gICAgICAgICAgICAgICAgc2VsZi55ZWFyRWxlbWVudHMucHVzaChtb250aC55ZWFyRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgc2VsZi5tb250aEVsZW1lbnRzLnB1c2gobW9udGgubW9udGhFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBzZWxmLm1vbnRoTmF2LmFwcGVuZENoaWxkKG1vbnRoLmNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLm1vbnRoTmF2LmFwcGVuZENoaWxkKHNlbGYubmV4dE1vbnRoTmF2KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBidWlsZE1vbnRoTmF2KCkge1xuICAgICAgICAgICAgc2VsZi5tb250aE5hdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItbW9udGhzXCIpO1xuICAgICAgICAgICAgc2VsZi55ZWFyRWxlbWVudHMgPSBbXTtcbiAgICAgICAgICAgIHNlbGYubW9udGhFbGVtZW50cyA9IFtdO1xuICAgICAgICAgICAgc2VsZi5wcmV2TW9udGhOYXYgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci1wcmV2LW1vbnRoXCIpO1xuICAgICAgICAgICAgc2VsZi5wcmV2TW9udGhOYXYuaW5uZXJIVE1MID0gc2VsZi5jb25maWcucHJldkFycm93O1xuICAgICAgICAgICAgc2VsZi5uZXh0TW9udGhOYXYgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci1uZXh0LW1vbnRoXCIpO1xuICAgICAgICAgICAgc2VsZi5uZXh0TW9udGhOYXYuaW5uZXJIVE1MID0gc2VsZi5jb25maWcubmV4dEFycm93O1xuICAgICAgICAgICAgYnVpbGRNb250aHMoKTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCBcIl9oaWRlUHJldk1vbnRoQXJyb3dcIiwge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5fX2hpZGVQcmV2TW9udGhBcnJvdzsgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChib29sKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLl9faGlkZVByZXZNb250aEFycm93ICE9PSBib29sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLnByZXZNb250aE5hdiwgXCJmbGF0cGlja3ItZGlzYWJsZWRcIiwgYm9vbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9faGlkZVByZXZNb250aEFycm93ID0gYm9vbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCBcIl9oaWRlTmV4dE1vbnRoQXJyb3dcIiwge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5fX2hpZGVOZXh0TW9udGhBcnJvdzsgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChib29sKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLl9faGlkZU5leHRNb250aEFycm93ICE9PSBib29sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLm5leHRNb250aE5hdiwgXCJmbGF0cGlja3ItZGlzYWJsZWRcIiwgYm9vbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9faGlkZU5leHRNb250aEFycm93ID0gYm9vbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50ID0gc2VsZi55ZWFyRWxlbWVudHNbMF07XG4gICAgICAgICAgICB1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5tb250aE5hdjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBidWlsZFRpbWUoKSB7XG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoYXNUaW1lXCIpO1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIpXG4gICAgICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibm9DYWxlbmRhclwiKTtcbiAgICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItdGltZVwiKTtcbiAgICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci50YWJJbmRleCA9IC0xO1xuICAgICAgICAgICAgdmFyIHNlcGFyYXRvciA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLXRpbWUtc2VwYXJhdG9yXCIsIFwiOlwiKTtcbiAgICAgICAgICAgIHZhciBob3VySW5wdXQgPSBjcmVhdGVOdW1iZXJJbnB1dChcImZsYXRwaWNrci1ob3VyXCIsIHtcbiAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogc2VsZi5sMTBuLmhvdXJBcmlhTGFiZWwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbGYuaG91ckVsZW1lbnQgPSBob3VySW5wdXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVswXTtcbiAgICAgICAgICAgIHZhciBtaW51dGVJbnB1dCA9IGNyZWF0ZU51bWJlcklucHV0KFwiZmxhdHBpY2tyLW1pbnV0ZVwiLCB7XG4gICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHNlbGYubDEwbi5taW51dGVBcmlhTGFiZWwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbGYubWludXRlRWxlbWVudCA9IG1pbnV0ZUlucHV0LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF07XG4gICAgICAgICAgICBzZWxmLmhvdXJFbGVtZW50LnRhYkluZGV4ID0gc2VsZi5taW51dGVFbGVtZW50LnRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICBzZWxmLmhvdXJFbGVtZW50LnZhbHVlID0gcGFkKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqXG4gICAgICAgICAgICAgICAgPyBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iai5nZXRIb3VycygpXG4gICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy50aW1lXzI0aHJcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5kZWZhdWx0SG91clxuICAgICAgICAgICAgICAgICAgICA6IG1pbGl0YXJ5MmFtcG0oc2VsZi5jb25maWcuZGVmYXVsdEhvdXIpKTtcbiAgICAgICAgICAgIHNlbGYubWludXRlRWxlbWVudC52YWx1ZSA9IHBhZChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9ialxuICAgICAgICAgICAgICAgID8gc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmouZ2V0TWludXRlcygpXG4gICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5kZWZhdWx0TWludXRlKTtcbiAgICAgICAgICAgIHNlbGYuaG91ckVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3RlcFwiLCBzZWxmLmNvbmZpZy5ob3VySW5jcmVtZW50LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgc2VsZi5taW51dGVFbGVtZW50LnNldEF0dHJpYnV0ZShcInN0ZXBcIiwgc2VsZi5jb25maWcubWludXRlSW5jcmVtZW50LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgc2VsZi5ob3VyRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgc2VsZi5jb25maWcudGltZV8yNGhyID8gXCIwXCIgOiBcIjFcIik7XG4gICAgICAgICAgICBzZWxmLmhvdXJFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1heFwiLCBzZWxmLmNvbmZpZy50aW1lXzI0aHIgPyBcIjIzXCIgOiBcIjEyXCIpO1xuICAgICAgICAgICAgc2VsZi5taW51dGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1pblwiLCBcIjBcIik7XG4gICAgICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWF4XCIsIFwiNTlcIik7XG4gICAgICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cklucHV0KTtcbiAgICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZXBhcmF0b3IpO1xuICAgICAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG1pbnV0ZUlucHV0KTtcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy50aW1lXzI0aHIpXG4gICAgICAgICAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0aW1lMjRoclwiKTtcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5lbmFibGVTZWNvbmRzKSB7XG4gICAgICAgICAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoYXNTZWNvbmRzXCIpO1xuICAgICAgICAgICAgICAgIHZhciBzZWNvbmRJbnB1dCA9IGNyZWF0ZU51bWJlcklucHV0KFwiZmxhdHBpY2tyLXNlY29uZFwiKTtcbiAgICAgICAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQgPSBzZWNvbmRJbnB1dC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdO1xuICAgICAgICAgICAgICAgIHNlbGYuc2Vjb25kRWxlbWVudC52YWx1ZSA9IHBhZChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9ialxuICAgICAgICAgICAgICAgICAgICA/IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLmdldFNlY29uZHMoKVxuICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLmRlZmF1bHRTZWNvbmRzKTtcbiAgICAgICAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3RlcFwiLCBzZWxmLm1pbnV0ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3RlcFwiKSk7XG4gICAgICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1pblwiLCBcIjBcIik7XG4gICAgICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1heFwiLCBcIjU5XCIpO1xuICAgICAgICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci10aW1lLXNlcGFyYXRvclwiLCBcIjpcIikpO1xuICAgICAgICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRJbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXNlbGYuY29uZmlnLnRpbWVfMjRocikge1xuICAgICAgICAgICAgICAgIC8vIGFkZCBzZWxmLmFtUE0gaWYgYXBwcm9wcmlhdGVcbiAgICAgICAgICAgICAgICBzZWxmLmFtUE0gPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci1hbS1wbVwiLCBzZWxmLmwxMG4uYW1QTVtpbnQoKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqXG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5ob3VyRWxlbWVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLmRlZmF1bHRIb3VyKSA+IDExKV0pO1xuICAgICAgICAgICAgICAgIHNlbGYuYW1QTS50aXRsZSA9IHNlbGYubDEwbi50b2dnbGVUaXRsZTtcbiAgICAgICAgICAgICAgICBzZWxmLmFtUE0udGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZi5hbVBNKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzZWxmLnRpbWVDb250YWluZXI7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYnVpbGRXZWVrZGF5cygpIHtcbiAgICAgICAgICAgIGlmICghc2VsZi53ZWVrZGF5Q29udGFpbmVyKVxuICAgICAgICAgICAgICAgIHNlbGYud2Vla2RheUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3Itd2Vla2RheXNcIik7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgY2xlYXJOb2RlKHNlbGYud2Vla2RheUNvbnRhaW5lcik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gc2VsZi5jb25maWcuc2hvd01vbnRoczsgaS0tOykge1xuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdlZWtkYXljb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgc2VsZi53ZWVrZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVXZWVrZGF5cygpO1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYud2Vla2RheUNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVXZWVrZGF5cygpIHtcbiAgICAgICAgICAgIGlmICghc2VsZi53ZWVrZGF5Q29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGZpcnN0RGF5T2ZXZWVrID0gc2VsZi5sMTBuLmZpcnN0RGF5T2ZXZWVrO1xuICAgICAgICAgICAgdmFyIHdlZWtkYXlzID0gX19zcHJlYWRBcnJheXMoc2VsZi5sMTBuLndlZWtkYXlzLnNob3J0aGFuZCk7XG4gICAgICAgICAgICBpZiAoZmlyc3REYXlPZldlZWsgPiAwICYmIGZpcnN0RGF5T2ZXZWVrIDwgd2Vla2RheXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgd2Vla2RheXMgPSBfX3NwcmVhZEFycmF5cyh3ZWVrZGF5cy5zcGxpY2UoZmlyc3REYXlPZldlZWssIHdlZWtkYXlzLmxlbmd0aCksIHdlZWtkYXlzLnNwbGljZSgwLCBmaXJzdERheU9mV2VlaykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHNlbGYuY29uZmlnLnNob3dNb250aHM7IGktLTspIHtcbiAgICAgICAgICAgICAgICBzZWxmLndlZWtkYXlDb250YWluZXIuY2hpbGRyZW5baV0uaW5uZXJIVE1MID0gXCJcXG4gICAgICA8c3BhbiBjbGFzcz0nZmxhdHBpY2tyLXdlZWtkYXknPlxcbiAgICAgICAgXCIgKyB3ZWVrZGF5cy5qb2luKFwiPC9zcGFuPjxzcGFuIGNsYXNzPSdmbGF0cGlja3Itd2Vla2RheSc+XCIpICsgXCJcXG4gICAgICA8L3NwYW4+XFxuICAgICAgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgZnVuY3Rpb24gYnVpbGRXZWVrcygpIHtcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhhc1dlZWtzXCIpO1xuICAgICAgICAgICAgdmFyIHdlZWtXcmFwcGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci13ZWVrd3JhcHBlclwiKTtcbiAgICAgICAgICAgIHdlZWtXcmFwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLXdlZWtkYXlcIiwgc2VsZi5sMTBuLndlZWtBYmJyZXZpYXRpb24pKTtcbiAgICAgICAgICAgIHZhciB3ZWVrTnVtYmVycyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3Itd2Vla3NcIik7XG4gICAgICAgICAgICB3ZWVrV3JhcHBlci5hcHBlbmRDaGlsZCh3ZWVrTnVtYmVycyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdlZWtXcmFwcGVyOiB3ZWVrV3JhcHBlcixcbiAgICAgICAgICAgICAgICB3ZWVrTnVtYmVyczogd2Vla051bWJlcnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNoYW5nZU1vbnRoKHZhbHVlLCBpc09mZnNldCkge1xuICAgICAgICAgICAgaWYgKGlzT2Zmc2V0ID09PSB2b2lkIDApIHsgaXNPZmZzZXQgPSB0cnVlOyB9XG4gICAgICAgICAgICB2YXIgZGVsdGEgPSBpc09mZnNldCA/IHZhbHVlIDogdmFsdWUgLSBzZWxmLmN1cnJlbnRNb250aDtcbiAgICAgICAgICAgIGlmICgoZGVsdGEgPCAwICYmIHNlbGYuX2hpZGVQcmV2TW9udGhBcnJvdyA9PT0gdHJ1ZSkgfHxcbiAgICAgICAgICAgICAgICAoZGVsdGEgPiAwICYmIHNlbGYuX2hpZGVOZXh0TW9udGhBcnJvdyA9PT0gdHJ1ZSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggKz0gZGVsdGE7XG4gICAgICAgICAgICBpZiAoc2VsZi5jdXJyZW50TW9udGggPCAwIHx8IHNlbGYuY3VycmVudE1vbnRoID4gMTEpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyICs9IHNlbGYuY3VycmVudE1vbnRoID4gMTEgPyAxIDogLTE7XG4gICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSAoc2VsZi5jdXJyZW50TW9udGggKyAxMikgJSAxMjtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvblllYXJDaGFuZ2VcIik7XG4gICAgICAgICAgICAgICAgYnVpbGRNb250aFN3aXRjaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnVpbGREYXlzKCk7XG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbk1vbnRoQ2hhbmdlXCIpO1xuICAgICAgICAgICAgdXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyKHRyaWdnZXJDaGFuZ2VFdmVudCwgdG9Jbml0aWFsKSB7XG4gICAgICAgICAgICBpZiAodHJpZ2dlckNoYW5nZUV2ZW50ID09PSB2b2lkIDApIHsgdHJpZ2dlckNoYW5nZUV2ZW50ID0gdHJ1ZTsgfVxuICAgICAgICAgICAgaWYgKHRvSW5pdGlhbCA9PT0gdm9pZCAwKSB7IHRvSW5pdGlhbCA9IHRydWU7IH1cbiAgICAgICAgICAgIHNlbGYuaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKHNlbGYuYWx0SW5wdXQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBzZWxmLmFsdElucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIGlmIChzZWxmLm1vYmlsZUlucHV0ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMgPSBbXTtcbiAgICAgICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKHRvSW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPSBzZWxmLl9pbml0aWFsRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0gc2VsZi5faW5pdGlhbERhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5lbmFibGVUaW1lID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hID0gZ2V0RGVmYXVsdEhvdXJzKCksIGhvdXJzID0gX2EuaG91cnMsIG1pbnV0ZXMgPSBfYS5taW51dGVzLCBzZWNvbmRzID0gX2Euc2Vjb25kcztcbiAgICAgICAgICAgICAgICBzZXRIb3Vycyhob3VycywgbWludXRlcywgc2Vjb25kcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLnJlZHJhdygpO1xuICAgICAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2VFdmVudClcbiAgICAgICAgICAgICAgICAvLyB0cmlnZ2VyQ2hhbmdlRXZlbnQgaXMgdHJ1ZSAoZGVmYXVsdCkgb3IgYW4gRXZlbnRcbiAgICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkNoYW5nZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgICAgIHNlbGYuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIXNlbGYuaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jYWxlbmRhckNvbnRhaW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzZWxmLl9pbnB1dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX2lucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25DbG9zZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25EZXN0cm95XCIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHNlbGYuX2hhbmRsZXJzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgICAgIHZhciBoID0gc2VsZi5faGFuZGxlcnNbaV07XG4gICAgICAgICAgICAgICAgaC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoaC5ldmVudCwgaC5oYW5kbGVyLCBoLm9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5faGFuZGxlcnMgPSBbXTtcbiAgICAgICAgICAgIGlmIChzZWxmLm1vYmlsZUlucHV0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYubW9iaWxlSW5wdXQucGFyZW50Tm9kZSlcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNlbGYubW9iaWxlSW5wdXQpO1xuICAgICAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzZWxmLmNhbGVuZGFyQ29udGFpbmVyICYmIHNlbGYuY2FsZW5kYXJDb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5zdGF0aWMgJiYgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB3cmFwcGVyID0gc2VsZi5jYWxlbmRhckNvbnRhaW5lci5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmxhc3RDaGlsZCAmJiB3cmFwcGVyLnJlbW92ZUNoaWxkKHdyYXBwZXIubGFzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdyYXBwZXIucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHdyYXBwZXIuZmlyc3RDaGlsZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIuZmlyc3RDaGlsZCwgd3JhcHBlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQod3JhcHBlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2VsZi5jYWxlbmRhckNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5hbHRJbnB1dCkge1xuICAgICAgICAgICAgICAgIHNlbGYuaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmFsdElucHV0LnBhcmVudE5vZGUpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmLmFsdElucHV0KTtcbiAgICAgICAgICAgICAgICBkZWxldGUgc2VsZi5hbHRJbnB1dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxmLmlucHV0KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5pbnB1dC50eXBlID0gc2VsZi5pbnB1dC5fdHlwZTtcbiAgICAgICAgICAgICAgICBzZWxmLmlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJmbGF0cGlja3ItaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgc2VsZi5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoXCJyZWFkb25seVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBcIl9zaG93VGltZUlucHV0XCIsXG4gICAgICAgICAgICAgICAgXCJsYXRlc3RTZWxlY3RlZERhdGVPYmpcIixcbiAgICAgICAgICAgICAgICBcIl9oaWRlTmV4dE1vbnRoQXJyb3dcIixcbiAgICAgICAgICAgICAgICBcIl9oaWRlUHJldk1vbnRoQXJyb3dcIixcbiAgICAgICAgICAgICAgICBcIl9faGlkZU5leHRNb250aEFycm93XCIsXG4gICAgICAgICAgICAgICAgXCJfX2hpZGVQcmV2TW9udGhBcnJvd1wiLFxuICAgICAgICAgICAgICAgIFwiaXNNb2JpbGVcIixcbiAgICAgICAgICAgICAgICBcImlzT3BlblwiLFxuICAgICAgICAgICAgICAgIFwic2VsZWN0ZWREYXRlRWxlbVwiLFxuICAgICAgICAgICAgICAgIFwibWluRGF0ZUhhc1RpbWVcIixcbiAgICAgICAgICAgICAgICBcIm1heERhdGVIYXNUaW1lXCIsXG4gICAgICAgICAgICAgICAgXCJkYXlzXCIsXG4gICAgICAgICAgICAgICAgXCJkYXlzQ29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgXCJfaW5wdXRcIixcbiAgICAgICAgICAgICAgICBcIl9wb3NpdGlvbkVsZW1lbnRcIixcbiAgICAgICAgICAgICAgICBcImlubmVyQ29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgXCJyQ29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgXCJtb250aE5hdlwiLFxuICAgICAgICAgICAgICAgIFwidG9kYXlEYXRlRWxlbVwiLFxuICAgICAgICAgICAgICAgIFwiY2FsZW5kYXJDb250YWluZXJcIixcbiAgICAgICAgICAgICAgICBcIndlZWtkYXlDb250YWluZXJcIixcbiAgICAgICAgICAgICAgICBcInByZXZNb250aE5hdlwiLFxuICAgICAgICAgICAgICAgIFwibmV4dE1vbnRoTmF2XCIsXG4gICAgICAgICAgICAgICAgXCJtb250aHNEcm9wZG93bkNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgIFwiY3VycmVudE1vbnRoRWxlbWVudFwiLFxuICAgICAgICAgICAgICAgIFwiY3VycmVudFllYXJFbGVtZW50XCIsXG4gICAgICAgICAgICAgICAgXCJuYXZpZ2F0aW9uQ3VycmVudE1vbnRoXCIsXG4gICAgICAgICAgICAgICAgXCJzZWxlY3RlZERhdGVFbGVtXCIsXG4gICAgICAgICAgICAgICAgXCJjb25maWdcIixcbiAgICAgICAgICAgIF0uZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzZWxmW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoXykgeyB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc0NhbGVuZGFyRWxlbShlbGVtKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuYXBwZW5kVG8gJiYgc2VsZi5jb25maWcuYXBwZW5kVG8uY29udGFpbnMoZWxlbSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jb250YWlucyhlbGVtKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBkb2N1bWVudENsaWNrKGUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmlzT3BlbiAmJiAhc2VsZi5jb25maWcuaW5saW5lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50VGFyZ2V0XzEgPSBnZXRFdmVudFRhcmdldChlKTtcbiAgICAgICAgICAgICAgICB2YXIgaXNDYWxlbmRhckVsZW1lbnQgPSBpc0NhbGVuZGFyRWxlbShldmVudFRhcmdldF8xKTtcbiAgICAgICAgICAgICAgICB2YXIgaXNJbnB1dCA9IGV2ZW50VGFyZ2V0XzEgPT09IHNlbGYuaW5wdXQgfHxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUYXJnZXRfMSA9PT0gc2VsZi5hbHRJbnB1dCB8fFxuICAgICAgICAgICAgICAgICAgICBzZWxmLmVsZW1lbnQuY29udGFpbnMoZXZlbnRUYXJnZXRfMSkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gd2ViIGNvbXBvbmVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gZS5wYXRoIGlzIG5vdCBwcmVzZW50IGluIGFsbCBicm93c2Vycy4gY2lyY3VtdmVudGluZyB0eXBlY2hlY2tzXG4gICAgICAgICAgICAgICAgICAgIChlLnBhdGggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucGF0aC5pbmRleE9mICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAofmUucGF0aC5pbmRleE9mKHNlbGYuaW5wdXQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfmUucGF0aC5pbmRleE9mKHNlbGYuYWx0SW5wdXQpKSk7XG4gICAgICAgICAgICAgICAgdmFyIGxvc3RGb2N1cyA9IGUudHlwZSA9PT0gXCJibHVyXCJcbiAgICAgICAgICAgICAgICAgICAgPyBpc0lucHV0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnJlbGF0ZWRUYXJnZXQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICFpc0NhbGVuZGFyRWxlbShlLnJlbGF0ZWRUYXJnZXQpXG4gICAgICAgICAgICAgICAgICAgIDogIWlzSW5wdXQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICFpc0NhbGVuZGFyRWxlbWVudCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIWlzQ2FsZW5kYXJFbGVtKGUucmVsYXRlZFRhcmdldCk7XG4gICAgICAgICAgICAgICAgdmFyIGlzSWdub3JlZCA9ICFzZWxmLmNvbmZpZy5pZ25vcmVkRm9jdXNFbGVtZW50cy5zb21lKGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtLmNvbnRhaW5zKGV2ZW50VGFyZ2V0XzEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChsb3N0Rm9jdXMgJiYgaXNJZ25vcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnRpbWVDb250YWluZXIgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5taW51dGVFbGVtZW50ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaG91ckVsZW1lbnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pbnB1dC52YWx1ZSAhPT0gXCJcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pbnB1dC52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVUaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jbGVhcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlZHJhdygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNoYW5nZVllYXIobmV3WWVhcikge1xuICAgICAgICAgICAgaWYgKCFuZXdZZWFyIHx8XG4gICAgICAgICAgICAgICAgKHNlbGYuY29uZmlnLm1pbkRhdGUgJiYgbmV3WWVhciA8IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKSkgfHxcbiAgICAgICAgICAgICAgICAoc2VsZi5jb25maWcubWF4RGF0ZSAmJiBuZXdZZWFyID4gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB2YXIgbmV3WWVhck51bSA9IG5ld1llYXIsIGlzTmV3WWVhciA9IHNlbGYuY3VycmVudFllYXIgIT09IG5ld1llYXJOdW07XG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID0gbmV3WWVhck51bSB8fCBzZWxmLmN1cnJlbnRZZWFyO1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1heERhdGUgJiZcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID09PSBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEZ1bGxZZWFyKCkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRNb250aCA9IE1hdGgubWluKHNlbGYuY29uZmlnLm1heERhdGUuZ2V0TW9udGgoKSwgc2VsZi5jdXJyZW50TW9udGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc2VsZi5jb25maWcubWluRGF0ZSAmJlxuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPT09IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKSkge1xuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0gTWF0aC5tYXgoc2VsZi5jb25maWcubWluRGF0ZS5nZXRNb250aCgpLCBzZWxmLmN1cnJlbnRNb250aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNOZXdZZWFyKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5yZWRyYXcoKTtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvblllYXJDaGFuZ2VcIik7XG4gICAgICAgICAgICAgICAgYnVpbGRNb250aFN3aXRjaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzRW5hYmxlZChkYXRlLCB0aW1lbGVzcykge1xuICAgICAgICAgICAgaWYgKHRpbWVsZXNzID09PSB2b2lkIDApIHsgdGltZWxlc3MgPSB0cnVlOyB9XG4gICAgICAgICAgICB2YXIgZGF0ZVRvQ2hlY2sgPSBzZWxmLnBhcnNlRGF0ZShkYXRlLCB1bmRlZmluZWQsIHRpbWVsZXNzKTsgLy8gdGltZWxlc3NcbiAgICAgICAgICAgIGlmICgoc2VsZi5jb25maWcubWluRGF0ZSAmJlxuICAgICAgICAgICAgICAgIGRhdGVUb0NoZWNrICYmXG4gICAgICAgICAgICAgICAgY29tcGFyZURhdGVzKGRhdGVUb0NoZWNrLCBzZWxmLmNvbmZpZy5taW5EYXRlLCB0aW1lbGVzcyAhPT0gdW5kZWZpbmVkID8gdGltZWxlc3MgOiAhc2VsZi5taW5EYXRlSGFzVGltZSkgPCAwKSB8fFxuICAgICAgICAgICAgICAgIChzZWxmLmNvbmZpZy5tYXhEYXRlICYmXG4gICAgICAgICAgICAgICAgICAgIGRhdGVUb0NoZWNrICYmXG4gICAgICAgICAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhkYXRlVG9DaGVjaywgc2VsZi5jb25maWcubWF4RGF0ZSwgdGltZWxlc3MgIT09IHVuZGVmaW5lZCA/IHRpbWVsZXNzIDogIXNlbGYubWF4RGF0ZUhhc1RpbWUpID4gMCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmVuYWJsZS5sZW5ndGggPT09IDAgJiYgc2VsZi5jb25maWcuZGlzYWJsZS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBpZiAoZGF0ZVRvQ2hlY2sgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB2YXIgYm9vbCA9IHNlbGYuY29uZmlnLmVuYWJsZS5sZW5ndGggPiAwLCBhcnJheSA9IGJvb2wgPyBzZWxmLmNvbmZpZy5lbmFibGUgOiBzZWxmLmNvbmZpZy5kaXNhYmxlO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGQgPSB2b2lkIDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGQgPSBhcnJheVtpXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGQgPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICAgICAgICAgICAgICBkKGRhdGVUb0NoZWNrKSAvLyBkaXNhYmxlZCBieSBmdW5jdGlvblxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJvb2w7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZCBpbnN0YW5jZW9mIERhdGUgJiZcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVRvQ2hlY2sgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICBkLmdldFRpbWUoKSA9PT0gZGF0ZVRvQ2hlY2suZ2V0VGltZSgpKVxuICAgICAgICAgICAgICAgICAgICAvLyBkaXNhYmxlZCBieSBkYXRlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBib29sO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkID09PSBcInN0cmluZ1wiICYmIGRhdGVUb0NoZWNrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGlzYWJsZWQgYnkgZGF0ZSBzdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnNlZCA9IHNlbGYucGFyc2VEYXRlKGQsIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWQgJiYgcGFyc2VkLmdldFRpbWUoKSA9PT0gZGF0ZVRvQ2hlY2suZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGJvb2xcbiAgICAgICAgICAgICAgICAgICAgICAgIDogIWJvb2w7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGRpc2FibGVkIGJ5IHJhbmdlXG4gICAgICAgICAgICAgICAgdHlwZW9mIGQgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVRvQ2hlY2sgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICBkLmZyb20gJiZcbiAgICAgICAgICAgICAgICAgICAgZC50byAmJlxuICAgICAgICAgICAgICAgICAgICBkYXRlVG9DaGVjay5nZXRUaW1lKCkgPj0gZC5mcm9tLmdldFRpbWUoKSAmJlxuICAgICAgICAgICAgICAgICAgICBkYXRlVG9DaGVjay5nZXRUaW1lKCkgPD0gZC50by5nZXRUaW1lKCkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBib29sO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICFib29sO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzSW5WaWV3KGVsZW0pIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmRheXNDb250YWluZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gKGVsZW0uY2xhc3NOYW1lLmluZGV4T2YoXCJoaWRkZW5cIikgPT09IC0xICYmXG4gICAgICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NOYW1lLmluZGV4T2YoXCJmbGF0cGlja3ItZGlzYWJsZWRcIikgPT09IC0xICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci5jb250YWlucyhlbGVtKSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gb25CbHVyKGUpIHtcbiAgICAgICAgICAgIHZhciBpc0lucHV0ID0gZS50YXJnZXQgPT09IHNlbGYuX2lucHV0O1xuICAgICAgICAgICAgaWYgKGlzSW5wdXQgJiZcbiAgICAgICAgICAgICAgICAhKGUucmVsYXRlZFRhcmdldCAmJiBpc0NhbGVuZGFyRWxlbShlLnJlbGF0ZWRUYXJnZXQpKSkge1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0RGF0ZShzZWxmLl9pbnB1dC52YWx1ZSwgdHJ1ZSwgZS50YXJnZXQgPT09IHNlbGYuYWx0SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5hbHRGb3JtYXRcbiAgICAgICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5kYXRlRm9ybWF0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBvbktleURvd24oZSkge1xuICAgICAgICAgICAgLy8gZS5rZXkgICAgICAgICAgICAgICAgICAgICAgZS5rZXlDb2RlXG4gICAgICAgICAgICAvLyBcIkJhY2tzcGFjZVwiICAgICAgICAgICAgICAgICAgICAgICAgOFxuICAgICAgICAgICAgLy8gXCJUYWJcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDlcbiAgICAgICAgICAgIC8vIFwiRW50ZXJcIiAgICAgICAgICAgICAgICAgICAgICAgICAgIDEzXG4gICAgICAgICAgICAvLyBcIkVzY2FwZVwiICAgICAoSUUgXCJFc2NcIikgICAgICAgICAgIDI3XG4gICAgICAgICAgICAvLyBcIkFycm93TGVmdFwiICAoSUUgXCJMZWZ0XCIpICAgICAgICAgIDM3XG4gICAgICAgICAgICAvLyBcIkFycm93VXBcIiAgICAoSUUgXCJVcFwiKSAgICAgICAgICAgIDM4XG4gICAgICAgICAgICAvLyBcIkFycm93UmlnaHRcIiAoSUUgXCJSaWdodFwiKSAgICAgICAgIDM5XG4gICAgICAgICAgICAvLyBcIkFycm93RG93blwiICAoSUUgXCJEb3duXCIpICAgICAgICAgIDQwXG4gICAgICAgICAgICAvLyBcIkRlbGV0ZVwiICAgICAoSUUgXCJEZWxcIikgICAgICAgICAgIDQ2XG4gICAgICAgICAgICB2YXIgZXZlbnRUYXJnZXQgPSBnZXRFdmVudFRhcmdldChlKTtcbiAgICAgICAgICAgIHZhciBpc0lucHV0ID0gc2VsZi5jb25maWcud3JhcFxuICAgICAgICAgICAgICAgID8gZWxlbWVudC5jb250YWlucyhldmVudFRhcmdldClcbiAgICAgICAgICAgICAgICA6IGV2ZW50VGFyZ2V0ID09PSBzZWxmLl9pbnB1dDtcbiAgICAgICAgICAgIHZhciBhbGxvd0lucHV0ID0gc2VsZi5jb25maWcuYWxsb3dJbnB1dDtcbiAgICAgICAgICAgIHZhciBhbGxvd0tleWRvd24gPSBzZWxmLmlzT3BlbiAmJiAoIWFsbG93SW5wdXQgfHwgIWlzSW5wdXQpO1xuICAgICAgICAgICAgdmFyIGFsbG93SW5saW5lS2V5ZG93biA9IHNlbGYuY29uZmlnLmlubGluZSAmJiBpc0lucHV0ICYmICFhbGxvd0lucHV0O1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgaXNJbnB1dCkge1xuICAgICAgICAgICAgICAgIGlmIChhbGxvd0lucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0RGF0ZShzZWxmLl9pbnB1dC52YWx1ZSwgdHJ1ZSwgZXZlbnRUYXJnZXQgPT09IHNlbGYuYWx0SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcuYWx0Rm9ybWF0XG4gICAgICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLmRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQuYmx1cigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vcGVuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNDYWxlbmRhckVsZW0oZXZlbnRUYXJnZXQpIHx8XG4gICAgICAgICAgICAgICAgYWxsb3dLZXlkb3duIHx8XG4gICAgICAgICAgICAgICAgYWxsb3dJbmxpbmVLZXlkb3duKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlzVGltZU9iaiA9ICEhc2VsZi50aW1lQ29udGFpbmVyICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5jb250YWlucyhldmVudFRhcmdldCk7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1RpbWVPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVGltZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzQW5kQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3REYXRlKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjc6IC8vIGVzY2FwZVxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNBbmRDbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0NjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0lucHV0ICYmICFzZWxmLmNvbmZpZy5hbGxvd0lucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1RpbWVPYmogJiYgIWlzSW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhbGxvd0lucHV0ID09PSBmYWxzZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgaXNJblZpZXcoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGFfMSA9IGUua2V5Q29kZSA9PT0gMzkgPyAxIDogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZS5jdHJsS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNPbkRheSh1bmRlZmluZWQsIGRlbHRhXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb250aChkZWx0YV8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzT25EYXkoZ2V0Rmlyc3RBdmFpbGFibGVEYXkoMSksIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VsZi5ob3VyRWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmhvdXJFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YSA9IGUua2V5Q29kZSA9PT0gNDAgPyAxIDogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHNlbGYuZGF5c0NvbnRhaW5lciAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LiRpICE9PSB1bmRlZmluZWQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQgPT09IHNlbGYuaW5wdXQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudFRhcmdldCA9PT0gc2VsZi5hbHRJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlWWVhcihzZWxmLmN1cnJlbnRZZWFyIC0gZGVsdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c09uRGF5KGdldEZpcnN0QXZhaWxhYmxlRGF5KDEpLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzVGltZU9iailcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNPbkRheSh1bmRlZmluZWQsIGRlbHRhICogNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChldmVudFRhcmdldCA9PT0gc2VsZi5jdXJyZW50WWVhckVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VZZWFyKHNlbGYuY3VycmVudFllYXIgLSBkZWx0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxmLmNvbmZpZy5lbmFibGVUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1RpbWVPYmogJiYgc2VsZi5ob3VyRWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5ob3VyRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWUoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fZGVib3VuY2VkQ2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVGltZU9iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5ob3VyRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5taW51dGVFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYW1QTSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoc2VsZi5wbHVnaW5FbGVtZW50cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBlbGVtcy5pbmRleE9mKGV2ZW50VGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGVsZW1zW2kgKyAoZS5zaGlmdEtleSA/IC0xIDogMSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0YXJnZXQgfHwgc2VsZi5faW5wdXQpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIXNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIuY29udGFpbnMoZXZlbnRUYXJnZXQpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9pbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkICYmIGV2ZW50VGFyZ2V0ID09PSBzZWxmLmFtUE0pIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2Ugc2VsZi5sMTBuLmFtUE1bMF0uY2hhckF0KDApOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIHNlbGYubDEwbi5hbVBNWzBdLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hbVBNLnRleHRDb250ZW50ID0gc2VsZi5sMTBuLmFtUE1bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRIb3Vyc0Zyb21JbnB1dHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVZhbHVlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBzZWxmLmwxMG4uYW1QTVsxXS5jaGFyQXQoMCk6XG4gICAgICAgICAgICAgICAgICAgIGNhc2Ugc2VsZi5sMTBuLmFtUE1bMV0uY2hhckF0KDApLnRvTG93ZXJDYXNlKCk6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFtUE0udGV4dENvbnRlbnQgPSBzZWxmLmwxMG4uYW1QTVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEhvdXJzRnJvbUlucHV0cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVmFsdWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0lucHV0IHx8IGlzQ2FsZW5kYXJFbGVtKGV2ZW50VGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uS2V5RG93blwiLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBvbk1vdXNlT3ZlcihlbGVtKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCAhPT0gMSB8fFxuICAgICAgICAgICAgICAgIChlbGVtICYmXG4gICAgICAgICAgICAgICAgICAgICghZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJmbGF0cGlja3ItZGF5XCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhcImZsYXRwaWNrci1kaXNhYmxlZFwiKSkpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHZhciBob3ZlckRhdGUgPSBlbGVtXG4gICAgICAgICAgICAgICAgPyBlbGVtLmRhdGVPYmouZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgOiBzZWxmLmRheXMuZmlyc3RFbGVtZW50Q2hpbGQuZGF0ZU9iai5nZXRUaW1lKCksIGluaXRpYWxEYXRlID0gc2VsZi5wYXJzZURhdGUoc2VsZi5zZWxlY3RlZERhdGVzWzBdLCB1bmRlZmluZWQsIHRydWUpLmdldFRpbWUoKSwgcmFuZ2VTdGFydERhdGUgPSBNYXRoLm1pbihob3ZlckRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1swXS5nZXRUaW1lKCkpLCByYW5nZUVuZERhdGUgPSBNYXRoLm1heChob3ZlckRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1swXS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5zRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBtaW5SYW5nZSA9IDAsIG1heFJhbmdlID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIHQgPSByYW5nZVN0YXJ0RGF0ZTsgdCA8IHJhbmdlRW5kRGF0ZTsgdCArPSBkdXJhdGlvbi5EQVkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzRW5hYmxlZChuZXcgRGF0ZSh0KSwgdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbnNEaXNhYmxlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluc0Rpc2FibGVkIHx8ICh0ID4gcmFuZ2VTdGFydERhdGUgJiYgdCA8IHJhbmdlRW5kRGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0IDwgaW5pdGlhbERhdGUgJiYgKCFtaW5SYW5nZSB8fCB0ID4gbWluUmFuZ2UpKVxuICAgICAgICAgICAgICAgICAgICAgICAgbWluUmFuZ2UgPSB0O1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0ID4gaW5pdGlhbERhdGUgJiYgKCFtYXhSYW5nZSB8fCB0IDwgbWF4UmFuZ2UpKVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4UmFuZ2UgPSB0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIG0gPSAwOyBtIDwgc2VsZi5jb25maWcuc2hvd01vbnRoczsgbSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1vbnRoID0gc2VsZi5kYXlzQ29udGFpbmVyLmNoaWxkcmVuW21dO1xuICAgICAgICAgICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGksIGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRheUVsZW0gPSBtb250aC5jaGlsZHJlbltpXSwgZGF0ZSA9IGRheUVsZW0uZGF0ZU9iajtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3V0T2ZSYW5nZSA9IChtaW5SYW5nZSA+IDAgJiYgdGltZXN0YW1wIDwgbWluUmFuZ2UpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAobWF4UmFuZ2UgPiAwICYmIHRpbWVzdGFtcCA+IG1heFJhbmdlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG91dE9mUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheUVsZW0uY2xhc3NMaXN0LmFkZChcIm5vdEFsbG93ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBbXCJpblJhbmdlXCIsIFwic3RhcnRSYW5nZVwiLCBcImVuZFJhbmdlXCJdLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlFbGVtLmNsYXNzTGlzdC5yZW1vdmUoYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY29udGFpbnNEaXNhYmxlZCAmJiAhb3V0T2ZSYW5nZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICAgICAgICAgIFtcInN0YXJ0UmFuZ2VcIiwgXCJpblJhbmdlXCIsIFwiZW5kUmFuZ2VcIiwgXCJub3RBbGxvd2VkXCJdLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheUVsZW0uY2xhc3NMaXN0LnJlbW92ZShjKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChob3ZlckRhdGUgPD0gc2VsZi5zZWxlY3RlZERhdGVzWzBdLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJzdGFydFJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZW5kUmFuZ2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbERhdGUgPCBob3ZlckRhdGUgJiYgdGltZXN0YW1wID09PSBpbml0aWFsRGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlFbGVtLmNsYXNzTGlzdC5hZGQoXCJzdGFydFJhbmdlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaW5pdGlhbERhdGUgPiBob3ZlckRhdGUgJiYgdGltZXN0YW1wID09PSBpbml0aWFsRGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlFbGVtLmNsYXNzTGlzdC5hZGQoXCJlbmRSYW5nZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1lc3RhbXAgPj0gbWluUmFuZ2UgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobWF4UmFuZ2UgPT09IDAgfHwgdGltZXN0YW1wIDw9IG1heFJhbmdlKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQmV0d2Vlbih0aW1lc3RhbXAsIGluaXRpYWxEYXRlLCBob3ZlckRhdGUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheUVsZW0uY2xhc3NMaXN0LmFkZChcImluUmFuZ2VcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbW9udGguY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIF9sb29wXzEoaSwgbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG9uUmVzaXplKCkge1xuICAgICAgICAgICAgaWYgKHNlbGYuaXNPcGVuICYmICFzZWxmLmNvbmZpZy5zdGF0aWMgJiYgIXNlbGYuY29uZmlnLmlubGluZSlcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkNhbGVuZGFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gb3BlbihlLCBwb3NpdGlvbkVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbkVsZW1lbnQgPT09IHZvaWQgMCkgeyBwb3NpdGlvbkVsZW1lbnQgPSBzZWxmLl9wb3NpdGlvbkVsZW1lbnQ7IH1cbiAgICAgICAgICAgIGlmIChzZWxmLmlzTW9iaWxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnRUYXJnZXQgPSBnZXRFdmVudFRhcmdldChlKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQgJiYgZXZlbnRUYXJnZXQuYmx1cigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2JpbGVJbnB1dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5jbGljaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbk9wZW5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYuX2lucHV0LmRpc2FibGVkIHx8IHNlbGYuY29uZmlnLmlubGluZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB2YXIgd2FzT3BlbiA9IHNlbGYuaXNPcGVuO1xuICAgICAgICAgICAgc2VsZi5pc09wZW4gPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCF3YXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICAgICAgICAgICAgICBzZWxmLl9pbnB1dC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uT3BlblwiKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkNhbGVuZGFyKHBvc2l0aW9uRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuZW5hYmxlVGltZSA9PT0gdHJ1ZSAmJiBzZWxmLmNvbmZpZy5ub0NhbGVuZGFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmFsbG93SW5wdXQgPT09IGZhbHNlICYmXG4gICAgICAgICAgICAgICAgICAgIChlID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICFzZWxmLnRpbWVDb250YWluZXIuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmhvdXJFbGVtZW50LnNlbGVjdCgpOyB9LCA1MCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1pbk1heERhdGVTZXR0ZXIodHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGVPYmogPSAoc2VsZi5jb25maWdbXCJfXCIgKyB0eXBlICsgXCJEYXRlXCJdID0gc2VsZi5wYXJzZURhdGUoZGF0ZSwgc2VsZi5jb25maWcuZGF0ZUZvcm1hdCkpO1xuICAgICAgICAgICAgICAgIHZhciBpbnZlcnNlRGF0ZU9iaiA9IHNlbGYuY29uZmlnW1wiX1wiICsgKHR5cGUgPT09IFwibWluXCIgPyBcIm1heFwiIDogXCJtaW5cIikgKyBcIkRhdGVcIl07XG4gICAgICAgICAgICAgICAgaWYgKGRhdGVPYmogIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmW3R5cGUgPT09IFwibWluXCIgPyBcIm1pbkRhdGVIYXNUaW1lXCIgOiBcIm1heERhdGVIYXNUaW1lXCJdID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVPYmouZ2V0SG91cnMoKSA+IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlT2JqLmdldE1pbnV0ZXMoKSA+IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlT2JqLmdldFNlY29uZHMoKSA+IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzID0gc2VsZi5zZWxlY3RlZERhdGVzLmZpbHRlcihmdW5jdGlvbiAoZCkgeyByZXR1cm4gaXNFbmFibGVkKGQpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoICYmIHR5cGUgPT09IFwibWluXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRIb3Vyc0Zyb21EYXRlKGRhdGVPYmopO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5kYXlzQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZHJhdygpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0ZU9iaiAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnRbdHlwZV0gPSBkYXRlT2JqLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5kaXNhYmxlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAhIWludmVyc2VEYXRlT2JqICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZU9iaiAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJzZURhdGVPYmouZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZU9iai5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcGFyc2VDb25maWcoKSB7XG4gICAgICAgICAgICB2YXIgYm9vbE9wdHMgPSBbXG4gICAgICAgICAgICAgICAgXCJ3cmFwXCIsXG4gICAgICAgICAgICAgICAgXCJ3ZWVrTnVtYmVyc1wiLFxuICAgICAgICAgICAgICAgIFwiYWxsb3dJbnB1dFwiLFxuICAgICAgICAgICAgICAgIFwiYWxsb3dJbnZhbGlkUHJlbG9hZFwiLFxuICAgICAgICAgICAgICAgIFwiY2xpY2tPcGVuc1wiLFxuICAgICAgICAgICAgICAgIFwidGltZV8yNGhyXCIsXG4gICAgICAgICAgICAgICAgXCJlbmFibGVUaW1lXCIsXG4gICAgICAgICAgICAgICAgXCJub0NhbGVuZGFyXCIsXG4gICAgICAgICAgICAgICAgXCJhbHRJbnB1dFwiLFxuICAgICAgICAgICAgICAgIFwic2hvcnRoYW5kQ3VycmVudE1vbnRoXCIsXG4gICAgICAgICAgICAgICAgXCJpbmxpbmVcIixcbiAgICAgICAgICAgICAgICBcInN0YXRpY1wiLFxuICAgICAgICAgICAgICAgIFwiZW5hYmxlU2Vjb25kc1wiLFxuICAgICAgICAgICAgICAgIFwiZGlzYWJsZU1vYmlsZVwiLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHZhciB1c2VyQ29uZmlnID0gX19hc3NpZ24oX19hc3NpZ24oe30sIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZWxlbWVudC5kYXRhc2V0IHx8IHt9KSkpLCBpbnN0YW5jZUNvbmZpZyk7XG4gICAgICAgICAgICB2YXIgZm9ybWF0cyA9IHt9O1xuICAgICAgICAgICAgc2VsZi5jb25maWcucGFyc2VEYXRlID0gdXNlckNvbmZpZy5wYXJzZURhdGU7XG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5mb3JtYXREYXRlID0gdXNlckNvbmZpZy5mb3JtYXREYXRlO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYuY29uZmlnLCBcImVuYWJsZVwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmNvbmZpZy5fZW5hYmxlOyB9LFxuICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGRhdGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLl9lbmFibGUgPSBwYXJzZURhdGVSdWxlcyhkYXRlcyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYuY29uZmlnLCBcImRpc2FibGVcIiwge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5jb25maWcuX2Rpc2FibGU7IH0sXG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGF0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcuX2Rpc2FibGUgPSBwYXJzZURhdGVSdWxlcyhkYXRlcyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHRpbWVNb2RlID0gdXNlckNvbmZpZy5tb2RlID09PSBcInRpbWVcIjtcbiAgICAgICAgICAgIGlmICghdXNlckNvbmZpZy5kYXRlRm9ybWF0ICYmICh1c2VyQ29uZmlnLmVuYWJsZVRpbWUgfHwgdGltZU1vZGUpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlZmF1bHREYXRlRm9ybWF0ID0gZmxhdHBpY2tyLmRlZmF1bHRDb25maWcuZGF0ZUZvcm1hdCB8fCBkZWZhdWx0cy5kYXRlRm9ybWF0O1xuICAgICAgICAgICAgICAgIGZvcm1hdHMuZGF0ZUZvcm1hdCA9XG4gICAgICAgICAgICAgICAgICAgIHVzZXJDb25maWcubm9DYWxlbmRhciB8fCB0aW1lTW9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkg6aVwiICsgKHVzZXJDb25maWcuZW5hYmxlU2Vjb25kcyA/IFwiOlNcIiA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGRlZmF1bHREYXRlRm9ybWF0ICsgXCIgSDppXCIgKyAodXNlckNvbmZpZy5lbmFibGVTZWNvbmRzID8gXCI6U1wiIDogXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodXNlckNvbmZpZy5hbHRJbnB1dCAmJlxuICAgICAgICAgICAgICAgICh1c2VyQ29uZmlnLmVuYWJsZVRpbWUgfHwgdGltZU1vZGUpICYmXG4gICAgICAgICAgICAgICAgIXVzZXJDb25maWcuYWx0Rm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRBbHRGb3JtYXQgPSBmbGF0cGlja3IuZGVmYXVsdENvbmZpZy5hbHRGb3JtYXQgfHwgZGVmYXVsdHMuYWx0Rm9ybWF0O1xuICAgICAgICAgICAgICAgIGZvcm1hdHMuYWx0Rm9ybWF0ID1cbiAgICAgICAgICAgICAgICAgICAgdXNlckNvbmZpZy5ub0NhbGVuZGFyIHx8IHRpbWVNb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiaDppXCIgKyAodXNlckNvbmZpZy5lbmFibGVTZWNvbmRzID8gXCI6UyBLXCIgOiBcIiBLXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGRlZmF1bHRBbHRGb3JtYXQgKyAoXCIgaDppXCIgKyAodXNlckNvbmZpZy5lbmFibGVTZWNvbmRzID8gXCI6U1wiIDogXCJcIikgKyBcIiBLXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYuY29uZmlnLCBcIm1pbkRhdGVcIiwge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5jb25maWcuX21pbkRhdGU7IH0sXG4gICAgICAgICAgICAgICAgc2V0OiBtaW5NYXhEYXRlU2V0dGVyKFwibWluXCIpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZi5jb25maWcsIFwibWF4RGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmNvbmZpZy5fbWF4RGF0ZTsgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IG1pbk1heERhdGVTZXR0ZXIoXCJtYXhcIiksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBtaW5NYXhUaW1lU2V0dGVyID0gZnVuY3Rpb24gKHR5cGUpIHsgcmV0dXJuIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZ1t0eXBlID09PSBcIm1pblwiID8gXCJfbWluVGltZVwiIDogXCJfbWF4VGltZVwiXSA9IHNlbGYucGFyc2VEYXRlKHZhbCwgXCJIOmk6U1wiKTtcbiAgICAgICAgICAgIH07IH07XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZi5jb25maWcsIFwibWluVGltZVwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmNvbmZpZy5fbWluVGltZTsgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IG1pbk1heFRpbWVTZXR0ZXIoXCJtaW5cIiksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLmNvbmZpZywgXCJtYXhUaW1lXCIsIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYuY29uZmlnLl9tYXhUaW1lOyB9LFxuICAgICAgICAgICAgICAgIHNldDogbWluTWF4VGltZVNldHRlcihcIm1heFwiKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJDb25maWcubW9kZSA9PT0gXCJ0aW1lXCIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5ub0NhbGVuZGFyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5lbmFibGVUaW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc2VsZi5jb25maWcsIGZvcm1hdHMsIHVzZXJDb25maWcpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib29sT3B0cy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzMxNjYzXG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWdbYm9vbE9wdHNbaV1dID1cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWdbYm9vbE9wdHNbaV1dID09PSB0cnVlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZ1tib29sT3B0c1tpXV0gPT09IFwidHJ1ZVwiO1xuICAgICAgICAgICAgSE9PS1MuZmlsdGVyKGZ1bmN0aW9uIChob29rKSB7IHJldHVybiBzZWxmLmNvbmZpZ1tob29rXSAhPT0gdW5kZWZpbmVkOyB9KS5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWdbaG9va10gPSBhcnJheWlmeShzZWxmLmNvbmZpZ1tob29rXSB8fCBbXSkubWFwKGJpbmRUb0luc3RhbmNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZi5pc01vYmlsZSA9XG4gICAgICAgICAgICAgICAgIXNlbGYuY29uZmlnLmRpc2FibGVNb2JpbGUgJiZcbiAgICAgICAgICAgICAgICAgICAgIXNlbGYuY29uZmlnLmlubGluZSAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5tb2RlID09PSBcInNpbmdsZVwiICYmXG4gICAgICAgICAgICAgICAgICAgICFzZWxmLmNvbmZpZy5kaXNhYmxlLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgICAhc2VsZi5jb25maWcuZW5hYmxlLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgICAhc2VsZi5jb25maWcud2Vla051bWJlcnMgJiZcbiAgICAgICAgICAgICAgICAgICAgL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLmNvbmZpZy5wbHVnaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBsdWdpbkNvbmYgPSBzZWxmLmNvbmZpZy5wbHVnaW5zW2ldKHNlbGYpIHx8IHt9O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBwbHVnaW5Db25mKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChIT09LUy5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWdba2V5XSA9IGFycmF5aWZ5KHBsdWdpbkNvbmZba2V5XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGJpbmRUb0luc3RhbmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoc2VsZi5jb25maWdba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHVzZXJDb25maWdba2V5XSA9PT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnW2tleV0gPSBwbHVnaW5Db25mW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF1c2VyQ29uZmlnLmFsdElucHV0Q2xhc3MpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5hbHRJbnB1dENsYXNzID1cbiAgICAgICAgICAgICAgICAgICAgZ2V0SW5wdXRFbGVtKCkuY2xhc3NOYW1lICsgXCIgXCIgKyBzZWxmLmNvbmZpZy5hbHRJbnB1dENsYXNzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25QYXJzZUNvbmZpZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRJbnB1dEVsZW0oKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jb25maWcud3JhcFxuICAgICAgICAgICAgICAgID8gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtaW5wdXRdXCIpXG4gICAgICAgICAgICAgICAgOiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNldHVwTG9jYWxlKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzZWxmLmNvbmZpZy5sb2NhbGUgIT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZmxhdHBpY2tyLmwxMG5zW3NlbGYuY29uZmlnLmxvY2FsZV0gPT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcuZXJyb3JIYW5kbGVyKG5ldyBFcnJvcihcImZsYXRwaWNrcjogaW52YWxpZCBsb2NhbGUgXCIgKyBzZWxmLmNvbmZpZy5sb2NhbGUpKTtcbiAgICAgICAgICAgIHNlbGYubDEwbiA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBmbGF0cGlja3IubDEwbnMuZGVmYXVsdCksICh0eXBlb2Ygc2VsZi5jb25maWcubG9jYWxlID09PSBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5sb2NhbGVcbiAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLmxvY2FsZSAhPT0gXCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBmbGF0cGlja3IubDEwbnNbc2VsZi5jb25maWcubG9jYWxlXVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCkpO1xuICAgICAgICAgICAgdG9rZW5SZWdleC5LID0gXCIoXCIgKyBzZWxmLmwxMG4uYW1QTVswXSArIFwifFwiICsgc2VsZi5sMTBuLmFtUE1bMV0gKyBcInxcIiArIHNlbGYubDEwbi5hbVBNWzBdLnRvTG93ZXJDYXNlKCkgKyBcInxcIiArIHNlbGYubDEwbi5hbVBNWzFdLnRvTG93ZXJDYXNlKCkgKyBcIilcIjtcbiAgICAgICAgICAgIHZhciB1c2VyQ29uZmlnID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGluc3RhbmNlQ29uZmlnKSwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlbGVtZW50LmRhdGFzZXQgfHwge30pKSk7XG4gICAgICAgICAgICBpZiAodXNlckNvbmZpZy50aW1lXzI0aHIgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnLnRpbWVfMjRociA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcudGltZV8yNGhyID0gc2VsZi5sMTBuLnRpbWVfMjRocjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuZm9ybWF0RGF0ZSA9IGNyZWF0ZURhdGVGb3JtYXR0ZXIoc2VsZik7XG4gICAgICAgICAgICBzZWxmLnBhcnNlRGF0ZSA9IGNyZWF0ZURhdGVQYXJzZXIoeyBjb25maWc6IHNlbGYuY29uZmlnLCBsMTBuOiBzZWxmLmwxMG4gfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcG9zaXRpb25DYWxlbmRhcihjdXN0b21Qb3NpdGlvbkVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmNhbGVuZGFyQ29udGFpbmVyID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25QcmVDYWxlbmRhclBvc2l0aW9uXCIpO1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uRWxlbWVudCA9IGN1c3RvbVBvc2l0aW9uRWxlbWVudCB8fCBzZWxmLl9wb3NpdGlvbkVsZW1lbnQ7XG4gICAgICAgICAgICB2YXIgY2FsZW5kYXJIZWlnaHQgPSBBcnJheS5wcm90b3R5cGUucmVkdWNlLmNhbGwoc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jaGlsZHJlbiwgKGZ1bmN0aW9uIChhY2MsIGNoaWxkKSB7IHJldHVybiBhY2MgKyBjaGlsZC5vZmZzZXRIZWlnaHQ7IH0pLCAwKSwgY2FsZW5kYXJXaWR0aCA9IHNlbGYuY2FsZW5kYXJDb250YWluZXIub2Zmc2V0V2lkdGgsIGNvbmZpZ1BvcyA9IHNlbGYuY29uZmlnLnBvc2l0aW9uLnNwbGl0KFwiIFwiKSwgY29uZmlnUG9zVmVydGljYWwgPSBjb25maWdQb3NbMF0sIGNvbmZpZ1Bvc0hvcml6b250YWwgPSBjb25maWdQb3MubGVuZ3RoID4gMSA/IGNvbmZpZ1Bvc1sxXSA6IG51bGwsIGlucHV0Qm91bmRzID0gcG9zaXRpb25FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBkaXN0YW5jZUZyb21Cb3R0b20gPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBpbnB1dEJvdW5kcy5ib3R0b20sIHNob3dPblRvcCA9IGNvbmZpZ1Bvc1ZlcnRpY2FsID09PSBcImFib3ZlXCIgfHxcbiAgICAgICAgICAgICAgICAoY29uZmlnUG9zVmVydGljYWwgIT09IFwiYmVsb3dcIiAmJlxuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZUZyb21Cb3R0b20gPCBjYWxlbmRhckhlaWdodCAmJlxuICAgICAgICAgICAgICAgICAgICBpbnB1dEJvdW5kcy50b3AgPiBjYWxlbmRhckhlaWdodCk7XG4gICAgICAgICAgICB2YXIgdG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0ICtcbiAgICAgICAgICAgICAgICBpbnB1dEJvdW5kcy50b3AgK1xuICAgICAgICAgICAgICAgICghc2hvd09uVG9wID8gcG9zaXRpb25FbGVtZW50Lm9mZnNldEhlaWdodCArIDIgOiAtY2FsZW5kYXJIZWlnaHQgLSAyKTtcbiAgICAgICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwiYXJyb3dUb3BcIiwgIXNob3dPblRvcCk7XG4gICAgICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcImFycm93Qm90dG9tXCIsIHNob3dPblRvcCk7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuaW5saW5lKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHZhciBsZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0ICsgaW5wdXRCb3VuZHMubGVmdDtcbiAgICAgICAgICAgIHZhciBpc0NlbnRlciA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGlzUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChjb25maWdQb3NIb3Jpem9udGFsID09PSBcImNlbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgbGVmdCAtPSAoY2FsZW5kYXJXaWR0aCAtIGlucHV0Qm91bmRzLndpZHRoKSAvIDI7XG4gICAgICAgICAgICAgICAgaXNDZW50ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29uZmlnUG9zSG9yaXpvbnRhbCA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgbGVmdCAtPSBjYWxlbmRhcldpZHRoIC0gaW5wdXRCb3VuZHMud2lkdGg7XG4gICAgICAgICAgICAgICAgaXNSaWdodCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcImFycm93TGVmdFwiLCAhaXNDZW50ZXIgJiYgIWlzUmlnaHQpO1xuICAgICAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJhcnJvd0NlbnRlclwiLCBpc0NlbnRlcik7XG4gICAgICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcImFycm93UmlnaHRcIiwgaXNSaWdodCk7XG4gICAgICAgICAgICB2YXIgcmlnaHQgPSB3aW5kb3cuZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCAtXG4gICAgICAgICAgICAgICAgKHdpbmRvdy5wYWdlWE9mZnNldCArIGlucHV0Qm91bmRzLnJpZ2h0KTtcbiAgICAgICAgICAgIHZhciByaWdodE1vc3QgPSBsZWZ0ICsgY2FsZW5kYXJXaWR0aCA+IHdpbmRvdy5kb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgdmFyIGNlbnRlck1vc3QgPSByaWdodCArIGNhbGVuZGFyV2lkdGggPiB3aW5kb3cuZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwicmlnaHRNb3N0XCIsIHJpZ2h0TW9zdCk7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuc3RhdGljKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUudG9wID0gdG9wICsgXCJweFwiO1xuICAgICAgICAgICAgaWYgKCFyaWdodE1vc3QpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBsZWZ0ICsgXCJweFwiO1xuICAgICAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUucmlnaHQgPSBcImF1dG9cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCFjZW50ZXJNb3N0KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gXCJhdXRvXCI7XG4gICAgICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5yaWdodCA9IHJpZ2h0ICsgXCJweFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGRvYyA9IGdldERvY3VtZW50U3R5bGVTaGVldCgpO1xuICAgICAgICAgICAgICAgIC8vIHNvbWUgdGVzdGluZyBlbnZpcm9ubWVudHMgZG9uJ3QgaGF2ZSBjc3Mgc3VwcG9ydFxuICAgICAgICAgICAgICAgIGlmIChkb2MgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHZhciBib2R5V2lkdGggPSB3aW5kb3cuZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgY2VudGVyTGVmdCA9IE1hdGgubWF4KDAsIGJvZHlXaWR0aCAvIDIgLSBjYWxlbmRhcldpZHRoIC8gMik7XG4gICAgICAgICAgICAgICAgdmFyIGNlbnRlckJlZm9yZSA9IFwiLmZsYXRwaWNrci1jYWxlbmRhci5jZW50ZXJNb3N0OmJlZm9yZVwiO1xuICAgICAgICAgICAgICAgIHZhciBjZW50ZXJBZnRlciA9IFwiLmZsYXRwaWNrci1jYWxlbmRhci5jZW50ZXJNb3N0OmFmdGVyXCI7XG4gICAgICAgICAgICAgICAgdmFyIGNlbnRlckluZGV4ID0gZG9jLmNzc1J1bGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgY2VudGVyU3R5bGUgPSBcIntsZWZ0OlwiICsgaW5wdXRCb3VuZHMubGVmdCArIFwicHg7cmlnaHQ6YXV0bzt9XCI7XG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJyaWdodE1vc3RcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwiY2VudGVyTW9zdFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBkb2MuaW5zZXJ0UnVsZShjZW50ZXJCZWZvcmUgKyBcIixcIiArIGNlbnRlckFmdGVyICsgY2VudGVyU3R5bGUsIGNlbnRlckluZGV4KTtcbiAgICAgICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBjZW50ZXJMZWZ0ICsgXCJweFwiO1xuICAgICAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUucmlnaHQgPSBcImF1dG9cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXREb2N1bWVudFN0eWxlU2hlZXQoKSB7XG4gICAgICAgICAgICB2YXIgZWRpdGFibGVTaGVldCA9IG51bGw7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNoZWV0ID0gZG9jdW1lbnQuc3R5bGVTaGVldHNbaV07XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgc2hlZXQuY3NzUnVsZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVkaXRhYmxlU2hlZXQgPSBzaGVldDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlZGl0YWJsZVNoZWV0ICE9IG51bGwgPyBlZGl0YWJsZVNoZWV0IDogY3JlYXRlU3R5bGVTaGVldCgpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVN0eWxlU2hlZXQoKSB7XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgICAgIHJldHVybiBzdHlsZS5zaGVldDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByZWRyYXcoKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubm9DYWxlbmRhciB8fCBzZWxmLmlzTW9iaWxlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGJ1aWxkTW9udGhTd2l0Y2goKTtcbiAgICAgICAgICAgIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKTtcbiAgICAgICAgICAgIGJ1aWxkRGF5cygpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGZvY3VzQW5kQ2xvc2UoKSB7XG4gICAgICAgICAgICBzZWxmLl9pbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJNU0lFXCIpICE9PSAtMSB8fFxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBoYWNrIC0gYnVncyBpbiB0aGUgd2F5IElFIGhhbmRsZXMgZm9jdXMga2VlcHMgdGhlIGNhbGVuZGFyIG9wZW5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHNlbGYuY2xvc2UsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNlbGVjdERhdGUoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHZhciBpc1NlbGVjdGFibGUgPSBmdW5jdGlvbiAoZGF5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRheS5jbGFzc0xpc3QgJiZcbiAgICAgICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5jb250YWlucyhcImZsYXRwaWNrci1kYXlcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgIWRheS5jbGFzc0xpc3QuY29udGFpbnMoXCJmbGF0cGlja3ItZGlzYWJsZWRcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgIWRheS5jbGFzc0xpc3QuY29udGFpbnMoXCJub3RBbGxvd2VkXCIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciB0ID0gZmluZFBhcmVudChnZXRFdmVudFRhcmdldChlKSwgaXNTZWxlY3RhYmxlKTtcbiAgICAgICAgICAgIGlmICh0ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHQ7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWREYXRlID0gKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqID0gbmV3IERhdGUodGFyZ2V0LmRhdGVPYmouZ2V0VGltZSgpKSk7XG4gICAgICAgICAgICB2YXIgc2hvdWxkQ2hhbmdlTW9udGggPSAoc2VsZWN0ZWREYXRlLmdldE1vbnRoKCkgPCBzZWxmLmN1cnJlbnRNb250aCB8fFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkRGF0ZS5nZXRNb250aCgpID5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggKyBzZWxmLmNvbmZpZy5zaG93TW9udGhzIC0gMSkgJiZcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5tb2RlICE9PSBcInJhbmdlXCI7XG4gICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZUVsZW0gPSB0YXJnZXQ7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJzaW5nbGVcIilcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMgPSBbc2VsZWN0ZWREYXRlXTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwibXVsdGlwbGVcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZEluZGV4ID0gaXNEYXRlU2VsZWN0ZWQoc2VsZWN0ZWREYXRlKTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleClcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzLnNwbGljZShwYXJzZUludChzZWxlY3RlZEluZGV4KSwgMSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMucHVzaChzZWxlY3RlZERhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jbGVhcihmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA9IHNlbGVjdGVkRGF0ZTtcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMucHVzaChzZWxlY3RlZERhdGUpO1xuICAgICAgICAgICAgICAgIC8vIHVubGVzcyBzZWxlY3Rpbmcgc2FtZSBkYXRlIHR3aWNlLCBzb3J0IGFzY2VuZGluZ2x5XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBhcmVEYXRlcyhzZWxlY3RlZERhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1swXSwgdHJ1ZSkgIT09IDApXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmdldFRpbWUoKSAtIGIuZ2V0VGltZSgpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEhvdXJzRnJvbUlucHV0cygpO1xuICAgICAgICAgICAgaWYgKHNob3VsZENoYW5nZU1vbnRoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlzTmV3WWVhciA9IHNlbGYuY3VycmVudFllYXIgIT09IHNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPSBzZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRNb250aCA9IHNlbGVjdGVkRGF0ZS5nZXRNb250aCgpO1xuICAgICAgICAgICAgICAgIGlmIChpc05ld1llYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25ZZWFyQ2hhbmdlXCIpO1xuICAgICAgICAgICAgICAgICAgICBidWlsZE1vbnRoU3dpdGNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uTW9udGhDaGFuZ2VcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XG4gICAgICAgICAgICBidWlsZERheXMoKTtcbiAgICAgICAgICAgIHVwZGF0ZVZhbHVlKCk7XG4gICAgICAgICAgICAvLyBtYWludGFpbiBmb2N1c1xuICAgICAgICAgICAgaWYgKCFzaG91bGRDaGFuZ2VNb250aCAmJlxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1vZGUgIT09IFwicmFuZ2VcIiAmJlxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLnNob3dNb250aHMgPT09IDEpXG4gICAgICAgICAgICAgICAgZm9jdXNPbkRheUVsZW0odGFyZ2V0KTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHNlbGYuc2VsZWN0ZWREYXRlRWxlbSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgc2VsZi5ob3VyRWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVFbGVtICYmIHNlbGYuc2VsZWN0ZWREYXRlRWxlbS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYuaG91ckVsZW1lbnQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBzZWxmLmhvdXJFbGVtZW50ICE9PSB1bmRlZmluZWQgJiYgc2VsZi5ob3VyRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmNsb3NlT25TZWxlY3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2luZ2xlID0gc2VsZi5jb25maWcubW9kZSA9PT0gXCJzaW5nbGVcIiAmJiAhc2VsZi5jb25maWcuZW5hYmxlVGltZTtcbiAgICAgICAgICAgICAgICB2YXIgcmFuZ2UgPSBzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMiAmJlxuICAgICAgICAgICAgICAgICAgICAhc2VsZi5jb25maWcuZW5hYmxlVGltZTtcbiAgICAgICAgICAgICAgICBpZiAoc2luZ2xlIHx8IHJhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvY3VzQW5kQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cmlnZ2VyQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIENBTExCQUNLUyA9IHtcbiAgICAgICAgICAgIGxvY2FsZTogW3NldHVwTG9jYWxlLCB1cGRhdGVXZWVrZGF5c10sXG4gICAgICAgICAgICBzaG93TW9udGhzOiBbYnVpbGRNb250aHMsIHNldENhbGVuZGFyV2lkdGgsIGJ1aWxkV2Vla2RheXNdLFxuICAgICAgICAgICAgbWluRGF0ZTogW2p1bXBUb0RhdGVdLFxuICAgICAgICAgICAgbWF4RGF0ZTogW2p1bXBUb0RhdGVdLFxuICAgICAgICB9O1xuICAgICAgICBmdW5jdGlvbiBzZXQob3B0aW9uLCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbiAhPT0gbnVsbCAmJiB0eXBlb2Ygb3B0aW9uID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzZWxmLmNvbmZpZywgb3B0aW9uKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gb3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChDQUxMQkFDS1Nba2V5XSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgQ0FMTEJBQ0tTW2tleV0uZm9yRWFjaChmdW5jdGlvbiAoeCkgeyByZXR1cm4geCgpOyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZ1tvcHRpb25dID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKENBTExCQUNLU1tvcHRpb25dICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIENBTExCQUNLU1tvcHRpb25dLmZvckVhY2goZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHgoKTsgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoSE9PS1MuaW5kZXhPZihvcHRpb24pID4gLTEpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnW29wdGlvbl0gPSBhcnJheWlmeSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLnJlZHJhdygpO1xuICAgICAgICAgICAgdXBkYXRlVmFsdWUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2V0U2VsZWN0ZWREYXRlKGlucHV0RGF0ZSwgZm9ybWF0KSB7XG4gICAgICAgICAgICB2YXIgZGF0ZXMgPSBbXTtcbiAgICAgICAgICAgIGlmIChpbnB1dERhdGUgaW5zdGFuY2VvZiBBcnJheSlcbiAgICAgICAgICAgICAgICBkYXRlcyA9IGlucHV0RGF0ZS5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHNlbGYucGFyc2VEYXRlKGQsIGZvcm1hdCk7IH0pO1xuICAgICAgICAgICAgZWxzZSBpZiAoaW5wdXREYXRlIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgaW5wdXREYXRlID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgIGRhdGVzID0gW3NlbGYucGFyc2VEYXRlKGlucHV0RGF0ZSwgZm9ybWF0KV07XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgaW5wdXREYXRlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChzZWxmLmNvbmZpZy5tb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzaW5nbGVcIjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRpbWVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVzID0gW3NlbGYucGFyc2VEYXRlKGlucHV0RGF0ZSwgZm9ybWF0KV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm11bHRpcGxlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlcyA9IGlucHV0RGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdChzZWxmLmNvbmZpZy5jb25qdW5jdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBzZWxmLnBhcnNlRGF0ZShkYXRlLCBmb3JtYXQpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmFuZ2VcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVzID0gaW5wdXREYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KHNlbGYubDEwbi5yYW5nZVNlcGFyYXRvcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBzZWxmLnBhcnNlRGF0ZShkYXRlLCBmb3JtYXQpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5lcnJvckhhbmRsZXIobmV3IEVycm9yKFwiSW52YWxpZCBkYXRlIHN1cHBsaWVkOiBcIiArIEpTT04uc3RyaW5naWZ5KGlucHV0RGF0ZSkpKTtcbiAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcyA9IChzZWxmLmNvbmZpZy5hbGxvd0ludmFsaWRQcmVsb2FkXG4gICAgICAgICAgICAgICAgPyBkYXRlc1xuICAgICAgICAgICAgICAgIDogZGF0ZXMuZmlsdGVyKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkIGluc3RhbmNlb2YgRGF0ZSAmJiBpc0VuYWJsZWQoZCwgZmFsc2UpOyB9KSk7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKVxuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmdldFRpbWUoKSAtIGIuZ2V0VGltZSgpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzZXREYXRlKGRhdGUsIHRyaWdnZXJDaGFuZ2UsIGZvcm1hdCkge1xuICAgICAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2UgPT09IHZvaWQgMCkgeyB0cmlnZ2VyQ2hhbmdlID0gZmFsc2U7IH1cbiAgICAgICAgICAgIGlmIChmb3JtYXQgPT09IHZvaWQgMCkgeyBmb3JtYXQgPSBzZWxmLmNvbmZpZy5kYXRlRm9ybWF0OyB9XG4gICAgICAgICAgICBpZiAoKGRhdGUgIT09IDAgJiYgIWRhdGUpIHx8IChkYXRlIGluc3RhbmNlb2YgQXJyYXkgJiYgZGF0ZS5sZW5ndGggPT09IDApKVxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmNsZWFyKHRyaWdnZXJDaGFuZ2UpO1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWREYXRlKGRhdGUsIGZvcm1hdCk7XG4gICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA9XG4gICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzW3NlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHNlbGYucmVkcmF3KCk7XG4gICAgICAgICAgICBqdW1wVG9EYXRlKHVuZGVmaW5lZCwgdHJpZ2dlckNoYW5nZSk7XG4gICAgICAgICAgICBzZXRIb3Vyc0Zyb21EYXRlKCk7XG4gICAgICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHNlbGYuY2xlYXIoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlVmFsdWUodHJpZ2dlckNoYW5nZSk7XG4gICAgICAgICAgICBpZiAodHJpZ2dlckNoYW5nZSlcbiAgICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkNoYW5nZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBwYXJzZURhdGVSdWxlcyhhcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJcbiAgICAgICAgICAgICAgICAuc2xpY2UoKVxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJ1bGUgPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHJ1bGUgPT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgcnVsZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYucGFyc2VEYXRlKHJ1bGUsIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJ1bGUgJiZcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHJ1bGUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgICAgICAgICAgcnVsZS5mcm9tICYmXG4gICAgICAgICAgICAgICAgICAgIHJ1bGUudG8pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiBzZWxmLnBhcnNlRGF0ZShydWxlLmZyb20sIHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogc2VsZi5wYXJzZURhdGUocnVsZS50bywgdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSk7IC8vIHJlbW92ZSBmYWxzeSB2YWx1ZXNcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzZXR1cERhdGVzKCkge1xuICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzID0gW107XG4gICAgICAgICAgICBzZWxmLm5vdyA9IHNlbGYucGFyc2VEYXRlKHNlbGYuY29uZmlnLm5vdykgfHwgbmV3IERhdGUoKTtcbiAgICAgICAgICAgIC8vIFdvcmthcm91bmQgSUUxMSBzZXR0aW5nIHBsYWNlaG9sZGVyIGFzIHRoZSBpbnB1dCdzIHZhbHVlXG4gICAgICAgICAgICB2YXIgcHJlbG9hZGVkRGF0ZSA9IHNlbGYuY29uZmlnLmRlZmF1bHREYXRlIHx8XG4gICAgICAgICAgICAgICAgKChzZWxmLmlucHV0Lm5vZGVOYW1lID09PSBcIklOUFVUXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pbnB1dC5ub2RlTmFtZSA9PT0gXCJURVhUQVJFQVwiKSAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxmLmlucHV0LnBsYWNlaG9sZGVyICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaW5wdXQudmFsdWUgPT09IHNlbGYuaW5wdXQucGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICAgIDogc2VsZi5pbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICBpZiAocHJlbG9hZGVkRGF0ZSlcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZERhdGUocHJlbG9hZGVkRGF0ZSwgc2VsZi5jb25maWcuZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICBzZWxmLl9pbml0aWFsRGF0ZSA9XG4gICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmLnNlbGVjdGVkRGF0ZXNbMF1cbiAgICAgICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5taW5EYXRlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5taW5EYXRlLmdldFRpbWUoKSA+IHNlbGYubm93LmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5taW5EYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLm1heERhdGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldFRpbWUoKSA8IHNlbGYubm93LmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcubWF4RGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2VsZi5ub3c7XG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID0gc2VsZi5faW5pdGlhbERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0gc2VsZi5faW5pdGlhbERhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA9IHNlbGYuc2VsZWN0ZWREYXRlc1swXTtcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5taW5UaW1lICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWluVGltZSA9IHNlbGYucGFyc2VEYXRlKHNlbGYuY29uZmlnLm1pblRpbWUsIFwiSDppXCIpO1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1heFRpbWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5tYXhUaW1lID0gc2VsZi5wYXJzZURhdGUoc2VsZi5jb25maWcubWF4VGltZSwgXCJIOmlcIik7XG4gICAgICAgICAgICBzZWxmLm1pbkRhdGVIYXNUaW1lID1cbiAgICAgICAgICAgICAgICAhIXNlbGYuY29uZmlnLm1pbkRhdGUgJiZcbiAgICAgICAgICAgICAgICAgICAgKHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0SG91cnMoKSA+IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0TWludXRlcygpID4gMCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWluRGF0ZS5nZXRTZWNvbmRzKCkgPiAwKTtcbiAgICAgICAgICAgIHNlbGYubWF4RGF0ZUhhc1RpbWUgPVxuICAgICAgICAgICAgICAgICEhc2VsZi5jb25maWcubWF4RGF0ZSAmJlxuICAgICAgICAgICAgICAgICAgICAoc2VsZi5jb25maWcubWF4RGF0ZS5nZXRIb3VycygpID4gMCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRNaW51dGVzKCkgPiAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldFNlY29uZHMoKSA+IDApO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNldHVwSW5wdXRzKCkge1xuICAgICAgICAgICAgc2VsZi5pbnB1dCA9IGdldElucHV0RWxlbSgpO1xuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICAgIGlmICghc2VsZi5pbnB1dCkge1xuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLmVycm9ySGFuZGxlcihuZXcgRXJyb3IoXCJJbnZhbGlkIGlucHV0IGVsZW1lbnQgc3BlY2lmaWVkXCIpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBoYWNrOiBzdG9yZSBwcmV2aW91cyB0eXBlIHRvIHJlc3RvcmUgaXQgYWZ0ZXIgZGVzdHJveSgpXG4gICAgICAgICAgICBzZWxmLmlucHV0Ll90eXBlID0gc2VsZi5pbnB1dC50eXBlO1xuICAgICAgICAgICAgc2VsZi5pbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgICAgICBzZWxmLmlucHV0LmNsYXNzTGlzdC5hZGQoXCJmbGF0cGlja3ItaW5wdXRcIik7XG4gICAgICAgICAgICBzZWxmLl9pbnB1dCA9IHNlbGYuaW5wdXQ7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuYWx0SW5wdXQpIHtcbiAgICAgICAgICAgICAgICAvLyByZXBsaWNhdGUgc2VsZi5lbGVtZW50XG4gICAgICAgICAgICAgICAgc2VsZi5hbHRJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoc2VsZi5pbnB1dC5ub2RlTmFtZSwgc2VsZi5jb25maWcuYWx0SW5wdXRDbGFzcyk7XG4gICAgICAgICAgICAgICAgc2VsZi5faW5wdXQgPSBzZWxmLmFsdElucHV0O1xuICAgICAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQucGxhY2Vob2xkZXIgPSBzZWxmLmlucHV0LnBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQuZGlzYWJsZWQgPSBzZWxmLmlucHV0LmRpc2FibGVkO1xuICAgICAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQucmVxdWlyZWQgPSBzZWxmLmlucHV0LnJlcXVpcmVkO1xuICAgICAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQudGFiSW5kZXggPSBzZWxmLmlucHV0LnRhYkluZGV4O1xuICAgICAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICAgICAgICAgIHNlbGYuaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGYuY29uZmlnLnN0YXRpYyAmJiBzZWxmLmlucHV0LnBhcmVudE5vZGUpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZi5hbHRJbnB1dCwgc2VsZi5pbnB1dC5uZXh0U2libGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXNlbGYuY29uZmlnLmFsbG93SW5wdXQpXG4gICAgICAgICAgICAgICAgc2VsZi5faW5wdXQuc2V0QXR0cmlidXRlKFwicmVhZG9ubHlcIiwgXCJyZWFkb25seVwiKTtcbiAgICAgICAgICAgIHNlbGYuX3Bvc2l0aW9uRWxlbWVudCA9IHNlbGYuY29uZmlnLnBvc2l0aW9uRWxlbWVudCB8fCBzZWxmLl9pbnB1dDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzZXR1cE1vYmlsZSgpIHtcbiAgICAgICAgICAgIHZhciBpbnB1dFR5cGUgPSBzZWxmLmNvbmZpZy5lbmFibGVUaW1lXG4gICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5ub0NhbGVuZGFyXG4gICAgICAgICAgICAgICAgICAgID8gXCJ0aW1lXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcImRhdGV0aW1lLWxvY2FsXCJcbiAgICAgICAgICAgICAgICA6IFwiZGF0ZVwiO1xuICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBzZWxmLmlucHV0LmNsYXNzTmFtZSArIFwiIGZsYXRwaWNrci1tb2JpbGVcIik7XG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnRhYkluZGV4ID0gMTtcbiAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQudHlwZSA9IGlucHV0VHlwZTtcbiAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQuZGlzYWJsZWQgPSBzZWxmLmlucHV0LmRpc2FibGVkO1xuICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5yZXF1aXJlZCA9IHNlbGYuaW5wdXQucmVxdWlyZWQ7XG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnBsYWNlaG9sZGVyID0gc2VsZi5pbnB1dC5wbGFjZWhvbGRlcjtcbiAgICAgICAgICAgIHNlbGYubW9iaWxlRm9ybWF0U3RyID1cbiAgICAgICAgICAgICAgICBpbnB1dFR5cGUgPT09IFwiZGF0ZXRpbWUtbG9jYWxcIlxuICAgICAgICAgICAgICAgICAgICA/IFwiWS1tLWRcXFxcVEg6aTpTXCJcbiAgICAgICAgICAgICAgICAgICAgOiBpbnB1dFR5cGUgPT09IFwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiWS1tLWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkg6aTpTXCI7XG4gICAgICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0LmRlZmF1bHRWYWx1ZSA9IHNlbGYubW9iaWxlSW5wdXQudmFsdWUgPSBzZWxmLmZvcm1hdERhdGUoc2VsZi5zZWxlY3RlZERhdGVzWzBdLCBzZWxmLm1vYmlsZUZvcm1hdFN0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubWluRGF0ZSlcbiAgICAgICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0Lm1pbiA9IHNlbGYuZm9ybWF0RGF0ZShzZWxmLmNvbmZpZy5taW5EYXRlLCBcIlktbS1kXCIpO1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1heERhdGUpXG4gICAgICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5tYXggPSBzZWxmLmZvcm1hdERhdGUoc2VsZi5jb25maWcubWF4RGF0ZSwgXCJZLW0tZFwiKTtcbiAgICAgICAgICAgIGlmIChzZWxmLmlucHV0LmdldEF0dHJpYnV0ZShcInN0ZXBcIikpXG4gICAgICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5zdGVwID0gU3RyaW5nKHNlbGYuaW5wdXQuZ2V0QXR0cmlidXRlKFwic3RlcFwiKSk7XG4gICAgICAgICAgICBzZWxmLmlucHV0LnR5cGUgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgaWYgKHNlbGYuYWx0SW5wdXQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBzZWxmLmFsdElucHV0LnR5cGUgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5pbnB1dC5wYXJlbnROb2RlKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmlucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYubW9iaWxlSW5wdXQsIHNlbGYuaW5wdXQubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9hKSB7IH1cbiAgICAgICAgICAgIGJpbmQoc2VsZi5tb2JpbGVJbnB1dCwgXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNldERhdGUoZ2V0RXZlbnRUYXJnZXQoZSkudmFsdWUsIGZhbHNlLCBzZWxmLm1vYmlsZUZvcm1hdFN0cik7XG4gICAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25DaGFuZ2VcIik7XG4gICAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25DbG9zZVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZShlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5pc09wZW4gPT09IHRydWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuY2xvc2UoKTtcbiAgICAgICAgICAgIHNlbGYub3BlbihlKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB0cmlnZ2VyRXZlbnQoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBpbnN0YW5jZSBoYXMgYmVlbiBkZXN0cm95ZWQgYWxyZWFkeSwgYWxsIGhvb2tzIGhhdmUgYmVlbiByZW1vdmVkXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB2YXIgaG9va3MgPSBzZWxmLmNvbmZpZ1tldmVudF07XG4gICAgICAgICAgICBpZiAoaG9va3MgIT09IHVuZGVmaW5lZCAmJiBob29rcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGhvb2tzW2ldICYmIGkgPCBob29rcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICAgICAgaG9va3NbaV0oc2VsZi5zZWxlY3RlZERhdGVzLCBzZWxmLmlucHV0LnZhbHVlLCBzZWxmLCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudCA9PT0gXCJvbkNoYW5nZVwiKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5pbnB1dC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUV2ZW50KFwiY2hhbmdlXCIpKTtcbiAgICAgICAgICAgICAgICAvLyBtYW55IGZyb250LWVuZCBmcmFtZXdvcmtzIGJpbmQgdG8gdGhlIGlucHV0IGV2ZW50XG4gICAgICAgICAgICAgICAgc2VsZi5pbnB1dC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUV2ZW50KFwiaW5wdXRcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50KG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcbiAgICAgICAgICAgIGUuaW5pdEV2ZW50KG5hbWUsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNEYXRlU2VsZWN0ZWQoZGF0ZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY29tcGFyZURhdGVzKHNlbGYuc2VsZWN0ZWREYXRlc1tpXSwgZGF0ZSkgPT09IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiICsgaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc0RhdGVJblJhbmdlKGRhdGUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlICE9PSBcInJhbmdlXCIgfHwgc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA8IDIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIChjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzBdKSA+PSAwICYmXG4gICAgICAgICAgICAgICAgY29tcGFyZURhdGVzKGRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1sxXSkgPD0gMCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5ub0NhbGVuZGFyIHx8IHNlbGYuaXNNb2JpbGUgfHwgIXNlbGYubW9udGhOYXYpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgc2VsZi55ZWFyRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoeWVhckVsZW1lbnQsIGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKHNlbGYuY3VycmVudFllYXIsIHNlbGYuY3VycmVudE1vbnRoLCAxKTtcbiAgICAgICAgICAgICAgICBkLnNldE1vbnRoKHNlbGYuY3VycmVudE1vbnRoICsgaSk7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLnNob3dNb250aHMgPiAxIHx8XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1vbnRoU2VsZWN0b3JUeXBlID09PSBcInN0YXRpY1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubW9udGhFbGVtZW50c1tpXS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBtb250aFRvU3RyKGQuZ2V0TW9udGgoKSwgc2VsZi5jb25maWcuc2hvcnRoYW5kQ3VycmVudE1vbnRoLCBzZWxmLmwxMG4pICsgXCIgXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm1vbnRoc0Ryb3Bkb3duQ29udGFpbmVyLnZhbHVlID0gZC5nZXRNb250aCgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHllYXJFbGVtZW50LnZhbHVlID0gZC5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbGYuX2hpZGVQcmV2TW9udGhBcnJvdyA9XG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWluRGF0ZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgICAgIChzZWxmLmN1cnJlbnRZZWFyID09PSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKClcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZi5jdXJyZW50TW9udGggPD0gc2VsZi5jb25maWcubWluRGF0ZS5nZXRNb250aCgpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY3VycmVudFllYXIgPCBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICAgICAgc2VsZi5faGlkZU5leHRNb250aEFycm93ID1cbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5tYXhEYXRlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgKHNlbGYuY3VycmVudFllYXIgPT09IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmN1cnJlbnRNb250aCArIDEgPiBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldE1vbnRoKClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogc2VsZi5jdXJyZW50WWVhciA+IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0RGF0ZVN0cihmb3JtYXQpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLnNlbGVjdGVkRGF0ZXNcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChkT2JqKSB7IHJldHVybiBzZWxmLmZvcm1hdERhdGUoZE9iaiwgZm9ybWF0KTsgfSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChkLCBpLCBhcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5jb25maWcubW9kZSAhPT0gXCJyYW5nZVwiIHx8XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLmVuYWJsZVRpbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgYXJyLmluZGV4T2YoZCkgPT09IGk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5qb2luKHNlbGYuY29uZmlnLm1vZGUgIT09IFwicmFuZ2VcIlxuICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcuY29uanVuY3Rpb25cbiAgICAgICAgICAgICAgICA6IHNlbGYubDEwbi5yYW5nZVNlcGFyYXRvcik7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVwZGF0ZXMgdGhlIHZhbHVlcyBvZiBpbnB1dHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjYWxlbmRhclxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlVmFsdWUodHJpZ2dlckNoYW5nZSkge1xuICAgICAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2UgPT09IHZvaWQgMCkgeyB0cmlnZ2VyQ2hhbmdlID0gdHJ1ZTsgfVxuICAgICAgICAgICAgaWYgKHNlbGYubW9iaWxlSW5wdXQgIT09IHVuZGVmaW5lZCAmJiBzZWxmLm1vYmlsZUZvcm1hdFN0cikge1xuICAgICAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQudmFsdWUgPVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHNlbGYuZm9ybWF0RGF0ZShzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiwgc2VsZi5tb2JpbGVGb3JtYXRTdHIpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLmlucHV0LnZhbHVlID0gZ2V0RGF0ZVN0cihzZWxmLmNvbmZpZy5kYXRlRm9ybWF0KTtcbiAgICAgICAgICAgIGlmIChzZWxmLmFsdElucHV0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmFsdElucHV0LnZhbHVlID0gZ2V0RGF0ZVN0cihzZWxmLmNvbmZpZy5hbHRGb3JtYXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2UgIT09IGZhbHNlKVxuICAgICAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uVmFsdWVVcGRhdGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gb25Nb250aE5hdkNsaWNrKGUpIHtcbiAgICAgICAgICAgIHZhciBldmVudFRhcmdldCA9IGdldEV2ZW50VGFyZ2V0KGUpO1xuICAgICAgICAgICAgdmFyIGlzUHJldk1vbnRoID0gc2VsZi5wcmV2TW9udGhOYXYuY29udGFpbnMoZXZlbnRUYXJnZXQpO1xuICAgICAgICAgICAgdmFyIGlzTmV4dE1vbnRoID0gc2VsZi5uZXh0TW9udGhOYXYuY29udGFpbnMoZXZlbnRUYXJnZXQpO1xuICAgICAgICAgICAgaWYgKGlzUHJldk1vbnRoIHx8IGlzTmV4dE1vbnRoKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlTW9udGgoaXNQcmV2TW9udGggPyAtMSA6IDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc2VsZi55ZWFyRWxlbWVudHMuaW5kZXhPZihldmVudFRhcmdldCkgPj0gMCkge1xuICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LnNlbGVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXJyb3dVcFwiKSkge1xuICAgICAgICAgICAgICAgIHNlbGYuY2hhbmdlWWVhcihzZWxmLmN1cnJlbnRZZWFyICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChldmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhcnJvd0Rvd25cIikpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNoYW5nZVllYXIoc2VsZi5jdXJyZW50WWVhciAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHRpbWVXcmFwcGVyKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBpc0tleURvd24gPSBlLnR5cGUgPT09IFwia2V5ZG93blwiLCBldmVudFRhcmdldCA9IGdldEV2ZW50VGFyZ2V0KGUpLCBpbnB1dCA9IGV2ZW50VGFyZ2V0O1xuICAgICAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkICYmIGV2ZW50VGFyZ2V0ID09PSBzZWxmLmFtUE0pIHtcbiAgICAgICAgICAgICAgICBzZWxmLmFtUE0udGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmwxMG4uYW1QTVtpbnQoc2VsZi5hbVBNLnRleHRDb250ZW50ID09PSBzZWxmLmwxMG4uYW1QTVswXSldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG1pbiA9IHBhcnNlRmxvYXQoaW5wdXQuZ2V0QXR0cmlidXRlKFwibWluXCIpKSwgbWF4ID0gcGFyc2VGbG9hdChpbnB1dC5nZXRBdHRyaWJ1dGUoXCJtYXhcIikpLCBzdGVwID0gcGFyc2VGbG9hdChpbnB1dC5nZXRBdHRyaWJ1dGUoXCJzdGVwXCIpKSwgY3VyVmFsdWUgPSBwYXJzZUludChpbnB1dC52YWx1ZSwgMTApLCBkZWx0YSA9IGUuZGVsdGEgfHxcbiAgICAgICAgICAgICAgICAoaXNLZXlEb3duID8gKGUud2hpY2ggPT09IDM4ID8gMSA6IC0xKSA6IDApO1xuICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gY3VyVmFsdWUgKyBzdGVwICogZGVsdGE7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGlucHV0LnZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmIGlucHV0LnZhbHVlLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgIHZhciBpc0hvdXJFbGVtID0gaW5wdXQgPT09IHNlbGYuaG91ckVsZW1lbnQsIGlzTWludXRlRWxlbSA9IGlucHV0ID09PSBzZWxmLm1pbnV0ZUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlIDwgbWluKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludCghaXNIb3VyRWxlbSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbnQoaXNIb3VyRWxlbSkgJiYgaW50KCFzZWxmLmFtUE0pKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTWludXRlRWxlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY3JlbWVudE51bUlucHV0KHVuZGVmaW5lZCwgLTEsIHNlbGYuaG91ckVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXdWYWx1ZSA+IG1heCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dCA9PT0gc2VsZi5ob3VyRWxlbWVudCA/IG5ld1ZhbHVlIC0gbWF4IC0gaW50KCFzZWxmLmFtUE0pIDogbWluO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNNaW51dGVFbGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jcmVtZW50TnVtSW5wdXQodW5kZWZpbmVkLCAxLCBzZWxmLmhvdXJFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuYW1QTSAmJlxuICAgICAgICAgICAgICAgICAgICBpc0hvdXJFbGVtICYmXG4gICAgICAgICAgICAgICAgICAgIChzdGVwID09PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICA/IG5ld1ZhbHVlICsgY3VyVmFsdWUgPT09IDIzXG4gICAgICAgICAgICAgICAgICAgICAgICA6IE1hdGguYWJzKG5ld1ZhbHVlIC0gY3VyVmFsdWUpID4gc3RlcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hbVBNLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubDEwbi5hbVBNW2ludChzZWxmLmFtUE0udGV4dENvbnRlbnQgPT09IHNlbGYubDEwbi5hbVBNWzBdKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gcGFkKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpbml0KCk7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGZ1bmN0aW9uIF9mbGF0cGlja3Iobm9kZUxpc3QsIGNvbmZpZykge1xuICAgICAgICAvLyBzdGF0aWMgbGlzdFxuICAgICAgICB2YXIgbm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcbiAgICAgICAgICAgIC5jYWxsKG5vZGVMaXN0KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4geCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50OyB9KTtcbiAgICAgICAgdmFyIGluc3RhbmNlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZwLW9taXRcIikgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGlmIChub2RlLl9mbGF0cGlja3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLl9mbGF0cGlja3IuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLl9mbGF0cGlja3IgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUuX2ZsYXRwaWNrciA9IEZsYXRwaWNrckluc3RhbmNlKG5vZGUsIGNvbmZpZyB8fCB7fSk7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2VzLnB1c2gobm9kZS5fZmxhdHBpY2tyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5zdGFuY2VzLmxlbmd0aCA9PT0gMSA/IGluc3RhbmNlc1swXSA6IGluc3RhbmNlcztcbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodHlwZW9mIEhUTUxFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgIHR5cGVvZiBIVE1MQ29sbGVjdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICB0eXBlb2YgTm9kZUxpc3QgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgLy8gYnJvd3NlciBlbnZcbiAgICAgICAgSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLmZsYXRwaWNrciA9IE5vZGVMaXN0LnByb3RvdHlwZS5mbGF0cGlja3IgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgICAgICByZXR1cm4gX2ZsYXRwaWNrcih0aGlzLCBjb25maWcpO1xuICAgICAgICB9O1xuICAgICAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuZmxhdHBpY2tyID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICAgICAgcmV0dXJuIF9mbGF0cGlja3IoW3RoaXNdLCBjb25maWcpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHZhciBmbGF0cGlja3IgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGNvbmZpZykge1xuICAgICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gX2ZsYXRwaWNrcih3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciksIGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gX2ZsYXRwaWNrcihbc2VsZWN0b3JdLCBjb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF9mbGF0cGlja3Ioc2VsZWN0b3IsIGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgZmxhdHBpY2tyLmRlZmF1bHRDb25maWcgPSB7fTtcbiAgICBmbGF0cGlja3IubDEwbnMgPSB7XG4gICAgICAgIGVuOiBfX2Fzc2lnbih7fSwgZW5nbGlzaCksXG4gICAgICAgIGRlZmF1bHQ6IF9fYXNzaWduKHt9LCBlbmdsaXNoKSxcbiAgICB9O1xuICAgIGZsYXRwaWNrci5sb2NhbGl6ZSA9IGZ1bmN0aW9uIChsMTBuKSB7XG4gICAgICAgIGZsYXRwaWNrci5sMTBucy5kZWZhdWx0ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGZsYXRwaWNrci5sMTBucy5kZWZhdWx0KSwgbDEwbik7XG4gICAgfTtcbiAgICBmbGF0cGlja3Iuc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnKSwgY29uZmlnKTtcbiAgICB9O1xuICAgIGZsYXRwaWNrci5wYXJzZURhdGUgPSBjcmVhdGVEYXRlUGFyc2VyKHt9KTtcbiAgICBmbGF0cGlja3IuZm9ybWF0RGF0ZSA9IGNyZWF0ZURhdGVGb3JtYXR0ZXIoe30pO1xuICAgIGZsYXRwaWNrci5jb21wYXJlRGF0ZXMgPSBjb21wYXJlRGF0ZXM7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodHlwZW9mIGpRdWVyeSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgalF1ZXJ5LmZuICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGpRdWVyeS5mbi5mbGF0cGlja3IgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgICAgICByZXR1cm4gX2ZsYXRwaWNrcih0aGlzLCBjb25maWcpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2NhbWVsY2FzZVxuICAgIERhdGUucHJvdG90eXBlLmZwX2luY3IgPSBmdW5jdGlvbiAoZGF5cykge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIHRoaXMuZ2V0RGF0ZSgpICsgKHR5cGVvZiBkYXlzID09PSBcInN0cmluZ1wiID8gcGFyc2VJbnQoZGF5cywgMTApIDogZGF5cykpO1xuICAgIH07XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgd2luZG93LmZsYXRwaWNrciA9IGZsYXRwaWNrcjtcbiAgICB9XG5cbiAgICByZXR1cm4gZmxhdHBpY2tyO1xuXG59KSkpO1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiY2xhc3MgRGVzdGluYXRpb24ge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5pZCA9IGRhdGEuaWQ7XG4gICAgdGhpcy5uYW1lID0gZGF0YS5kZXN0aW5hdGlvbjtcbiAgICB0aGlzLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5ID0gZGF0YS5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheTtcbiAgICB0aGlzLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24gPSBkYXRhLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb247XG4gICAgdGhpcy5pbWFnZSA9IGRhdGEuaW1hZ2U7XG4gICAgdGhpcy5hbHQgPSBkYXRhLmFsdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXN0aW5hdGlvbjtcbiIsImltcG9ydCB0aW1lIGZyb20gJy4vdGltZS5qcyc7XG5cbmNsYXNzIFRyaXAge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5pZCA9IGRhdGEuaWQ7XG4gICAgdGhpcy51c2VySUQgPSBkYXRhLnVzZXJJRDtcbiAgICB0aGlzLmRlc3RpbmF0aW9uSUQgPSBkYXRhLmRlc3RpbmF0aW9uSUQ7XG4gICAgdGhpcy50cmF2ZWxlcnMgPSBkYXRhLnRyYXZlbGVycztcbiAgICB0aGlzLmR1cmF0aW9uID0gZGF0YS5kdXJhdGlvbjtcbiAgICB0aGlzLnN0YXR1cyA9IGRhdGEuc3RhdHVzO1xuICAgIHRoaXMuc3VnZ2VzdGVkQWN0aXZpdGllcyA9IGRhdGEuc3VnZ2VzdGVkQWN0aXZpdGllcztcbiAgICBpZih0eXBlb2YoZGF0YS5kYXRlKSA9PT0gJ29iamVjdCcpIHRoaXMuZGF0ZSA9IGRhdGEuZGF0ZTtcbiAgICBlbHNlIHtcbiAgICAgIGxldCBbeWVhciwgbW9udGgsIGRheV0gPSBkYXRhLmRhdGUuc3BsaXQoJy8nKTtcbiAgICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKHBhcnNlSW50KHllYXIpLCBwYXJzZUludChtb250aCkgLSAxLCBwYXJzZUludChkYXkpKTtcbiAgICB9XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiAodGhpcy5kZXN0aW5hdGlvbiA/IHRoaXMuZGVzdGluYXRpb24ubmFtZSA6IG51bGwpO1xuICB9XG5cbiAgZ2V0QmFzZUNvc3QoKSB7XG4gICAgaWYgKHRoaXMuZGVzdGluYXRpb24gPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XG4gICAgbGV0IGZsaWdodHNDb3N0ID0gdGhpcy5kZXN0aW5hdGlvbi5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uICogdGhpcy50cmF2ZWxlcnM7XG4gICAgbGV0IGxvZGdpbmdDb3N0ID0gdGhpcy5kZXN0aW5hdGlvbi5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheSAqIHRoaXMuZHVyYXRpb247XG4gICAgcmV0dXJuIHRoaXMucm91bmRUb0NlbnQoZmxpZ2h0c0Nvc3QgKyBsb2RnaW5nQ29zdCk7XG4gIH1cblxuICBnZXRBZ2VudENvc3QoKSB7XG4gICAgaWYgKHRoaXMuZGVzdGluYXRpb24gPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHRoaXMucm91bmRUb0NlbnQoLjEgKiB0aGlzLmdldEJhc2VDb3N0KCkpO1xuICB9XG5cbiAgcm91bmRUb0NlbnQobnVtYmVyKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyICogMTAwKSAvIDEwMDtcbiAgfVxuXG4gIGdldFllYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZS5nZXRGdWxsWWVhcigpO1xuICB9XG5cbiAgaXNDdXJyZW50KHRvZGF5KSB7XG4gICAgcmV0dXJuIHRpbWUuaXNCZXR3ZWVuKHRoaXMuZGF0ZSwgdG9kYXksIHRpbWUuZGF5c0Zyb21EYXRlKHRoaXMuZGF0ZSwgdGhpcy5kdXJhdGlvbikpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaXA7XG4iLCJpbXBvcnQgVHJpcCBmcm9tICcuLi9zcmMvVHJpcC5qcyc7XG5pbXBvcnQgdGltZSBmcm9tICcuLi9zcmMvdGltZS5qcyc7XG5cbmNsYXNzIFRyaXBSZXBvIHtcbiAgY29uc3RydWN0b3IoZGF0YSwgZGVzdGluYXRpb25zID0gW10sIGlzTmV3ID0gdHJ1ZSkge1xuICAgIGlmIChpc05ldykge1xuICAgICAgdGhpcy5kYXRhID0gZGF0YS5tYXAodHJpcEluZm8gPT4ge1xuICAgICAgICBsZXQgdHJpcCA9IG5ldyBUcmlwKHRyaXBJbmZvKTtcbiAgICAgICAgdHJpcC5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9ucy5maW5kKGRlc3QgPT4gZGVzdC5pZCA9PT0gdHJpcC5kZXN0aW5hdGlvbklEKTtcbiAgICAgICAgcmV0dXJuIHRyaXA7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLmNvdW50SURzKCk7XG4gIH1cblxuICBnZXRGb2xpb0J5VXNlcihpZCkge1xuICAgIHJldHVybiBuZXcgVHJpcFJlcG8odGhpcy5kYXRhLmZpbHRlcih0cmlwID0+IHRyaXAudXNlcklEID09PSBpZCksIG51bGwsIGZhbHNlKTtcbiAgfVxuXG4gIGdldEZvbGlvQnlZZWFyKHllYXIpIHtcbiAgICBsZXQgYmVnID0gbmV3IERhdGUoIHllYXIsIDAsIDApO1xuICAgIGxldCBlbmQgPSBuZXcgRGF0ZSggeWVhciArIDEsIDAsIDApO1xuICAgIHJldHVybiBuZXcgVHJpcFJlcG8odGhpcy5kYXRhLmZpbHRlcih0cmlwID0+IHRpbWUuaXNCZXR3ZWVuKGJlZywgdHJpcC5kYXRlLCBlbmQpKSwgbnVsbCwgZmFsc2UpO1xuICB9XG5cbiAgZ2V0VXBjb21pbmdGb2xpbyhkYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBUcmlwUmVwbyh0aGlzLmRhdGEuZmlsdGVyKHRyaXAgPT4gdGltZS5pc0JlZm9yZShkYXRlLCB0cmlwLmRhdGUpKSwgbnVsbCwgZmFsc2UpO1xuICB9XG5cbiAgZ2V0UGFzdEZvbGlvKGRhdGUpIHtcbiAgICByZXR1cm4gbmV3IFRyaXBSZXBvKHRoaXMuZGF0YS5maWx0ZXIodHJpcCA9PiB7XG4gICAgICBsZXQgZW5kRGF0ZSA9IHRpbWUuZGF5c0Zyb21EYXRlKHRyaXAuZGF0ZSwgdHJpcC5kdXJhdGlvbik7XG4gICAgICByZXR1cm4gdGltZS5pc0FmdGVyKGRhdGUsIGVuZERhdGUpO1xuICAgIH0pLCBudWxsLCBmYWxzZSk7XG4gIH1cblxuICBnZXRDdXJyZW50Rm9saW8oZGF0ZSkge1xuICAgIHJldHVybiBuZXcgVHJpcFJlcG8odGhpcy5kYXRhLmZpbHRlcih0cmlwID0+IHRyaXAuaXNDdXJyZW50KGRhdGUpKSwgbnVsbCwgZmFsc2UpO1xuICB9XG5cbiAgZ2V0TmV3VHJpcElEKCkge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBuZXdJRExvdyA9IHRoaXMuZGF0YVtpXS5pZCAtIDE7XG4gICAgICBpZiAodGhpcy50cmlwSURzW25ld0lETG93XSA9PT0gdW5kZWZpbmVkICYmIG5ld0lETG93ID4gMCkgcmV0dXJuIG5ld0lETG93O1xuICAgICAgbGV0IG5ld0lESGlnaCA9IHRoaXMuZGF0YVtpXS5pZCArIDE7XG4gICAgICBpZiAodGhpcy50cmlwSURzW25ld0lESGlnaF0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIG5ld0lESGlnaDtcbiAgICB9XG4gICAgdGhyb3cgJ0NvcnJ1cHRlZCBJRCBJbnZlbnRvcnkgT2JqZWN0J1xuICB9XG5cbiAgY291bnRJRHMoKSB7XG4gICAgdGhpcy50cmlwSURzID0gdGhpcy5kYXRhLnJlZHVjZSgobWVtb3J5LCB0cmlwKSA9PiB7XG4gICAgICBtZW1vcnlbdHJpcC5pZF0gPSB0cmlwO1xuICAgICAgcmV0dXJuIG1lbW9yeTtcbiAgICB9LCB7fSlcbiAgfVxuXG4gIGFkZE5ld1RyaXAodHJpcCkge1xuICAgIHRoaXMuZGF0YS5wdXNoKHRyaXApO1xuICAgIHRoaXMudHJpcElEc1t0cmlwLmlkXSA9IHRyaXA7XG4gIH1cblxuICBkZWxldGVUcmlwQnlJRCh0cmlwSUQpIHtcbiAgICBsZXQgdHJpcEluZGV4ID0gdGhpcy5kYXRhLmZpbmRJbmRleCh0cmlwID0+IHRyaXAuaWQgPT0gdHJpcElEKTtcbiAgICB0aGlzLmRhdGEuc3BsaWNlKHRyaXBJbmRleCwgMSk7XG4gICAgdGhpcy50cmlwSURzW3RyaXBJRF0gPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJpcFJlcG87XG4iLCJjbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xuICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZTtcbiAgICB0aGlzLnRyYXZlbGVyVHlwZSA9IGRhdGEudHJhdmVsZXJUeXBlO1xuICAgIHRoaXMuZm9saW8gPSBbXTtcbiAgfVxuXG4gIGdldEJhc2VDb3N0QWxsKHllYXIpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUb3RhbFllYXJTdGF0KHllYXIsICdnZXRCYXNlQ29zdCcpXG4gIH1cblxuICBnZXRBZ2VudENvc3RBbGwoeWVhcikge1xuICAgIHJldHVybiB0aGlzLmdldFRvdGFsWWVhclN0YXQoeWVhciwgJ2dldEFnZW50Q29zdCcpXG4gIH1cblxuICBnZXRUb3RhbFllYXJTdGF0KHllYXIsIGZ1bmNOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9saW8uZGF0YS5yZWR1Y2UoKHRvdGFsLCB0cmlwKSA9PiB7XG4gICAgICBpZih0cmlwLmdldFllYXIoKSA9PT0geWVhcikgdG90YWwgKz0gdHJpcFtmdW5jTmFtZV0oKTtcbiAgICAgIHJldHVybiB0b3RhbDtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIGdldFRvdGFsQ29zdCh5ZWFyKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWdlbnRDb3N0QWxsKHllYXIpICsgdGhpcy5nZXRCYXNlQ29zdEFsbCh5ZWFyKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYmFzZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub3JtYWxpemUuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub3JtYWxpemUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9ybWFsaXplLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgdGltZSBmcm9tICcuL3RpbWUuanMnO1xuXG5sZXQgZG9tc2NyaXB0cyA9IHtcbiAgY3JlYXRlVHJpcENhcmQodHJpcCwgaXNVcGNvbWluZykge1xuICAgIGxldCBzdGFydCA9IHRyaXAuZGF0ZS50b1N0cmluZygpLnNsaWNlKDAsIDE1KTtcbiAgICBsZXQgZW5kID0gdGltZS5kYXlzRnJvbURhdGUodHJpcC5kYXRlLCB0cmlwLmR1cmF0aW9uKS50b1N0cmluZygpLnNsaWNlKDAsIDE1KTtcbiAgICByZXR1cm4gYFxuICAgICAgPGRpdiBjbGFzcz0ndHJpcC1jYXJkJyBkYXRhLXZhbHVlPVwiJHt0cmlwLmlkfVwiPlxuICAgICAgICA8aW1nIHNyYz0nJHt0cmlwLmRlc3RpbmF0aW9uLmltYWdlfScgYWx0PScke3RyaXAuZGVzdGluYXRpb24uYWx0fScvPlxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkLXRleHQnPlxuICAgICAgICAgIDxoMSBjbGFzcz0nbWFpbi1mb250Jz4ke3RyaXAuZ2V0TmFtZSgpfTwvaDE+XG4gICAgICAgICAgPGgzIGNsYXNzPSdtYWluLWZvbnQnPkZsaWdodHMgYW5kIGxvZGdpbmcgZm9yOiAke3RyaXAudHJhdmVsZXJzfSAoJCR7dHJpcC5nZXRCYXNlQ29zdCgpICsgdHJpcC5nZXRBZ2VudENvc3QoKX0pPC9oMz5cbiAgICAgICAgICA8aDMgY2xhc3M9J21haW4tZm9udCc+RGVwYXJ0dXJlIERhdGU6ICR7c3RhcnR9PC9oMz5cbiAgICAgICAgICA8aDMgY2xhc3M9J21haW4tZm9udCc+UmV0dXJuIERhdGU6ICR7ZW5kfTwvaDM+XG4gICAgICAgICAgJHtpc1VwY29taW5nXG4gICAgICAgICAgICA/IGBcbiAgICAgICAgICAgIDxoMyBjbGFzcz0nbWFpbi1mb250Jz5TdGF0dXM6ICR7dHJpcC5zdGF0dXN9PC9oMz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFwnbWFpbi1mb250IGRlc3Ryb3ktY2FyZFxcJz5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogJyd9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYFxuICB9LFxuXG4gIGNyZWF0ZURlc3RpbmF0aW9uc1NlbGVjdGlvbihkZXN0aW5hdGlvbnMpIHtcbiAgICBkZXN0aW5hdGlvbnMuc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XG4gICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXN0aW5hdGlvbnMnKTtcbiAgICBkZXN0aW5hdGlvbnMuZm9yRWFjaChkZXN0aW5hdGlvbiAgPT4ge1xuICAgICAgc2VsZWN0LmlubmVySFRNTCArPSBgPG9wdGlvbiB2YWx1ZT0nJHtkZXN0aW5hdGlvbi5pZH0nPiR7ZGVzdGluYXRpb24ubmFtZX08L29wdGlvbj5gXG4gICAgfSk7XG4gIH0sXG5cbiAgY3JlYXRlTnVtYmVyU2VsZWN0b3IoKSB7XG4gICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNudW1iZXItb2YtcGVvcGxlJyk7XG4gICAgZm9yKGxldCBpID0gMTsgaSA8PSAyMDsgaSsrKSBzZWxlY3QuaW5uZXJIVE1MICs9IGA8b3B0aW9uIHZhbHVlPScke2l9Jz4ke2l9PC9vcHRpb24+YDtcbiAgfSxcblxuICBzZXRDb3N0RGlzcGxheSh0cmlwKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jhc2UtY29zdCcpLmlubmVyVGV4dCA9IGBFc3QuIGJhc2UgY29zdDogJCR7dHJpcC5nZXRCYXNlQ29zdCgpfWA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FnZW50LWNvc3QnKS5pbm5lclRleHQgPSBgK2Fzc29ydGVkIGZlZXM6ICQke3RyaXAuZ2V0QWdlbnRDb3N0KCl9YDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG90YWwnKS5pbm5lclRleHQgPSBgICAgdG90YWw6ICQke3RyaXAuZ2V0QmFzZUNvc3QoKSArIHRyaXAuZ2V0QWdlbnRDb3N0KCl9YDtcbiAgfSxcblxuICBjbGVhckNvc3REaXNwbGF5KCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYXNlLWNvc3QnKS5pbm5lclRleHQgPSBgYDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWdlbnQtY29zdCcpLmlubmVyVGV4dCA9IGBgO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3RhbCcpLmlubmVyVGV4dCA9IGBgO1xuICB9LFxuXG4gIGNyZWF0ZUNvc3RTdW1tYXJ5KHNob3duVHJpcHMsIHVzZXIpIHtcbiAgICBsZXQgc2hvd25Ucmlwc0Nvc3QgPSBzaG93blRyaXBzLnJlZHVjZSgoc3VtLCB0cmlwKSA9PiBzdW0gKyB0cmlwLmdldEJhc2VDb3N0KCkgKyB0cmlwLmdldEFnZW50Q29zdCgpLCAwKTtcbiAgICByZXR1cm4gYFxuICAgICAgPGgzPkNvc3Qgb2Ygc2hvd24gVHJpcHM6ICQke3Nob3duVHJpcHNDb3N0fTwvaDM+XG4gICAgICA8aDM+VG90YWwgc3BlbnQgb24gdHJpcHMgdGhpcyB5ZWFyOiAkJHt1c2VyLmdldFRvdGFsQ29zdChuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkpfTwvaDM+XG4gICAgYDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21zY3JpcHRzO1xuIiwiaW1wb3J0IHRpbWUgZnJvbSAnLi90aW1lLmpzJztcblxubGV0IGdvRmV0Y2ggPSB7XG4gIGdldFVzZXIoaWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS90cmF2ZWwtdHJhY2tlci9kYXRhL3RyYXZlbGVycy90cmF2ZWxlcnMvJHsraWR9YCk7XG4gIH0sXG5cbiAgcG9zdE5ld1RyaXBSZXF1ZXN0KHRyaXApIHtcbiAgICBjb25zb2xlLmxvZyh0cmlwKVxuICAgIGxldCBkYXRhID0ge1xuICAgICAgaWQ6IHRyaXAuaWQsXG4gICAgICB1c2VySUQ6IHRyaXAudXNlcklELFxuICAgICAgZGVzdGluYXRpb25JRDogdHJpcC5kZXN0aW5hdGlvbklELFxuICAgICAgdHJhdmVsZXJzOiB0cmlwLnRyYXZlbGVycyxcbiAgICAgIGRhdGU6IHRpbWUuY3JlYXRlWVlZWU1NREQodHJpcC5kYXRlKSxcbiAgICAgIGR1cmF0aW9uOiB0cmlwLmR1cmF0aW9uLFxuICAgICAgc3RhdHVzOiB0cmlwLnN0YXR1cyxcbiAgICAgIHN1Z2dlc3RlZEFjdGl2aXRpZXM6IHRyaXAuc3VnZ2VzdGVkQWN0aXZpdGllc1xuICAgIH07XG4gICAgbGV0IHVwZGF0ZSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3RyYXZlbC10cmFja2VyL2RhdGEvdHJpcHMvdHJpcHMnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiB1cGRhdGUsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gIH0sXG5cbiAgZGVsZXRlVHJpcFJlcXVlc3QodHJpcElEKSB7XG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICBpZDogdHJpcElELFxuICAgIH07XG4gICAgbGV0IHVwZGF0ZSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3RyYXZlbC10cmFja2VyL2RhdGEvdHJpcHMvdHJpcHMnLCB7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGJvZHk6IHVwZGF0ZSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcbiAgfSxcblxuICBnZXRTZXJ2ZXJEYXRhKCkge1xuICAgIGxldCB1RGF0YSA9IGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvdHJhdmVsLXRyYWNrZXIvZGF0YS90cmF2ZWxlcnMvdHJhdmVsZXJzJyk7XG4gICAgbGV0IHREYXRhID0gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS90cmF2ZWwtdHJhY2tlci9kYXRhL3RyaXBzL3RyaXBzJyk7XG4gICAgbGV0IGREYXRhID0gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS90cmF2ZWwtdHJhY2tlci9kYXRhL2Rlc3RpbmF0aW9ucy9kZXN0aW5hdGlvbnMnKTtcbiAgICBsZXQgcHJvbWlzZXMgPSBbdURhdGEsIHREYXRhLCBkRGF0YV07XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpXG4gICAgLnRoZW4ocmVzcG9uc2VzID0+IFByb21pc2UuYWxsKHJlc3BvbnNlcy5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKSkpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ29GZXRjaDtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvR1YtbG9nby5wbmdcIjsiLCIvLyBUaGlzIGlzIHRoZSBKYXZhU2NyaXB0IGVudHJ5IGZpbGUgLSB5b3VyIGNvZGUgYmVnaW5zIGhlcmVcbi8vIERvIG5vdCBkZWxldGUgb3IgcmVuYW1lIHRoaXMgZmlsZSAqKioqKioqKlxuXG4vLyBBbiBleGFtcGxlIG9mIGhvdyB5b3UgdGVsbCB3ZWJwYWNrIHRvIHVzZSBhIENTUyAoU0NTUykgZmlsZVxuaW1wb3J0ICcuL2Nzcy9ub3JtYWxpemUuc2Nzcyc7XG5pbXBvcnQgJy4vY3NzL2Jhc2Uuc2Nzcyc7XG5pbXBvcnQgZG9tc2NyaXB0cyBmcm9tIFwiLi9kb21zY3JpcHRzLmpzXCI7XG5pbXBvcnQgZmxhdHBpY2tyIGZyb20gXCJmbGF0cGlja3JcIjtcbmltcG9ydCBnb0ZldGNoIGZyb20gJy4vZmV0Y2gtcmVxdWVzdHMuanMnXG5pbXBvcnQgVXNlciBmcm9tICcuL1VzZXIuanMnXG5pbXBvcnQgVHJpcCBmcm9tICcuL1RyaXAuanMnXG5pbXBvcnQgRGVzdGluYXRpb24gZnJvbSAnLi9EZXN0aW5hdGlvbi5qcydcbmltcG9ydCBUcmlwUmVwbyBmcm9tICcuLi9zcmMvVHJpcFJlcG8uanMnO1xuaW1wb3J0IHRpbWUgZnJvbSAnLi90aW1lLmpzJztcblxuLy8gQW4gZXhhbXBsZSBvZiBob3cgeW91IHRlbGwgd2VicGFjayB0byB1c2UgYW4gaW1hZ2UgKGFsc28gbmVlZCB0byBsaW5rIHRvIGl0IGluIHRoZSBpbmRleC5odG1sKVxuaW1wb3J0ICcuL2ltYWdlcy9HVi1sb2dvLnBuZyc7XG5sZXQgYm9va1RyaXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWJvb2tpbmcnKTtcbmxldCBib29raW5nRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rLXRyaXAtZm9ybScpO1xubGV0IGNhbGN1bGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYWxjdWxhdGUnKTtcbmxldCBjdXJyZW50VHJpcHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC1idG4nKTtcbmxldCBuZXdUcmlwc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib29rLXRyaXAtYnRuJyk7XG5sZXQgcGFzdFRyaXBzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3QtYnRuJyk7XG5sZXQgbWFpblRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tdGl0bGUnKTtcbmxldCBzaWRlYmFyVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZS1iYXIgaDMnKTtcbmxldCBzdWJtaXRDcmVkZW50aWFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtY3JlZGVudGlhbHMnKTtcbmxldCB0cmlwc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJpcHMnKTtcbmxldCB1cGNvbWluZ1RyaXBzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwY29taW5nLWJ0bicpO1xubGV0IGJlZ2luRGF0ZSwgYmVnaW5DYWxlbmRhciwgZW5kRGF0ZSwgZW5kQ2FsZW5kYXIsIGRlc3RpbmF0aW9ucywgdXNlciwgdXNlcklELCB1c2VycywgdXNlclRyaXAgPSB7fSwgdHJpcHM7XG5cbmJvb2tUcmlwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYm9va05ld1RyaXApO1xuY2FsY3VsYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsY3VsYXRlQ29zdHMpO1xuY3VycmVudFRyaXBzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdG9nZ2xlTWFpbignQ3VycmVudCBUcmlwcycpKTtcbm5ld1RyaXBzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdG9nZ2xlTWFpbignTG9va2luZyBmb3IgYWR2ZW50dXJlPycpKTtcbnBhc3RUcmlwc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZU1haW4oJ1Bhc3QgVHJpcHMnKSk7XG5zdWJtaXRDcmVkZW50aWFscy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRlc3RMb2dpbik7XG51cGNvbWluZ1RyaXBzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdG9nZ2xlTWFpbignVXBjb21pbmcgVHJpcHMnKSk7XG5cbmZ1bmN0aW9uIHRlc3RMb2dpbigpIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwdycpLnZhbHVlID09PSAndHJhdmVsMjAyMCcpIHtcbiAgICB1c2VySUQgPSBwYXJzZUludChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlcklEJykudmFsdWUuc2xpY2UoLTIpKTtcbiAgICBnb0ZldGNoLmdldFVzZXIodXNlcklEKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGlmICgrcmVzcG9uc2Uuc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgIGxvYWRQYWdlKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbicpLnJlbW92ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dhcm5pbmcnKS5pbm5lclRleHQgPSAnVXNlcm5hbWUgYW5kL29yIHBhc3N3b3JkIHdlcmUgaW5jb3JyZWN0LidcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dhcm5pbmcnKS5pbm5lclRleHQgPSAnU29tZXRoaW5nIG1pc2JlaGF2ZWQuIFJlZnJlc2ggdGhlIHBhZ2UgYW5kIHRyeSBhZ2FpbiBsYXRlci4nKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2FybmluZycpLmlubmVyVGV4dCA9ICdVc2VybmFtZSBhbmQvb3IgcGFzc3dvcmQgd2VyZSBpbmNvcnJlY3QuJztcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgcmV0cmlldmVEYXRhKCk7XG4gIGxvYWRDYWxlbmRhcnMoKTtcbiAgZG9tc2NyaXB0cy5jcmVhdGVOdW1iZXJTZWxlY3RvcigpO1xufVxuXG5mdW5jdGlvbiBsb2FkQ2FsZW5kYXJzKCkge1xuICBsZXQgW3llYXIsIG1vbnRoLCBkYXldID0gdGltZS5jcmVhdGVZWVlZTU1ERChuZXcgRGF0ZSgpKS5zcGxpdCgnLycpO1xuICBsZXQgc3RhcnREYXRlID0gbmV3IERhdGUoK3llYXIsICttb250aCAtIDEsICtkYXkpO1xuICBzdGFydERhdGUgPSB0aW1lLmRheXNGcm9tRGF0ZShzdGFydERhdGUsIDEpO1xuICBiZWdpbkNhbGVuZGFyID0gY3JlYXRlQ2FsZW5kYXIoJ2JlZ2luLWRhdGUtY2FsZW5kYXInLCBzdGFydERhdGUpO1xuICBlbmRDYWxlbmRhciA9IGNyZWF0ZUNhbGVuZGFyKCdlbmQtZGF0ZS1jYWxlbmRhcicsIHRpbWUuZGF5c0Zyb21EYXRlKHN0YXJ0RGF0ZSwgNykpO1xuICBjaGFuZ2VEYXRlKHN0YXJ0RGF0ZSwgJ2JlZ2luLWRhdGUtY2FsZW5kYXInKTtcbiAgY2hhbmdlRGF0ZSh0aW1lLmRheXNGcm9tRGF0ZShzdGFydERhdGUsIDcpLCAnZW5kLWRhdGUtY2FsZW5kYXInKTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVEYXRhKCkge1xuICBnb0ZldGNoLmdldFNlcnZlckRhdGEoKVxuICAudGhlbigoW3UsIHQsIGRdKSA9PiB7XG4gICAgZGVzdGluYXRpb25zID0gZC5kZXN0aW5hdGlvbnMubWFwKGREYXRhID0+IG5ldyBEZXN0aW5hdGlvbihkRGF0YSkpO1xuICAgIHRyaXBzID0gbmV3IFRyaXBSZXBvKHQudHJpcHMsIGRlc3RpbmF0aW9ucyk7XG4gICAgdXNlcnMgPSB1LnRyYXZlbGVycztcbiAgICBnZW5lcmF0ZVVzZXIoKTtcbiAgICBkb21zY3JpcHRzLmNyZWF0ZURlc3RpbmF0aW9uc1NlbGVjdGlvbihkZXN0aW5hdGlvbnMpO1xuICB9KVxuICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVVzZXIoKSB7XG4gIGxldCB1RGF0YSA9IHVzZXJzLmZpbmQodXNlciA9PiB1c2VyLmlkID09PSB1c2VySUQpXG4gIHVzZXIgPSBuZXcgVXNlcih1RGF0YSk7XG4gIGNvbnNvbGUubG9nKHVzZXIpXG4gIHVzZXIuZm9saW8gPSB0cmlwcy5nZXRGb2xpb0J5VXNlcih1c2VyLmlkKTtcbiAgbGV0IHdlbGNvbWVNc2dOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlbGNvbWUtbXNnJylcbiAgd2VsY29tZU1zZ05vZGUuaW5uZXJUZXh0ID0gYFdlbGNvbWUsICR7dXNlci5uYW1lfSFgO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDYWxlbmRhcihub2RlSUQsIGRhdGUpIHtcbiAgbGV0IG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtub2RlSUR9YCk7XG4gIHJldHVybiBmbGF0cGlja3Iobm9kZSwge1xuICAgIGRlZmF1bHREYXRlOiBkYXRlLFxuICAgIG1pbkRhdGU6IGRhdGUsXG4gICAgb25DaGFuZ2U6IChbZGF0ZV0pID0+IGNoYW5nZURhdGUoZGF0ZSwgbm9kZUlEKVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlRGF0ZShuZXdEYXRlLCBub2RlSUQpIHtcbiAgaWYgKG5vZGVJRFswXSA9PT0gJ2InKSB7XG4gICAgYmVnaW5EYXRlID0gbmV3RGF0ZTtcbiAgfSBlbHNlIHtcbiAgICBlbmREYXRlID0gbmV3RGF0ZTtcbiAgfVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtub2RlSUR9IHRpbWVgKS5pbm5lclRleHQgPSBuZXdEYXRlLnRvU3RyaW5nKCkuc2xpY2UoMCwgMTUpO1xuICB1c2VyVHJpcCA9IHt9O1xuICBzZXRCb29rVHJpcEJ0blN0YXR1cyh1c2VyVHJpcCk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZU1haW4odGl0bGVUZXh0KSB7XG4gIGxldCBwYWdlRGlzcGxheXMgPSB7XG4gICAgJ0N1cnJlbnQgVHJpcHMnOiAoKSA9PiBkaXNwbGF5VHJpcHMoJ2dldEN1cnJlbnRGb2xpbycpLFxuICAgICdMb29raW5nIGZvciBhZHZlbnR1cmU/JzogKCkgPT4gZGlzcGxheUJvb2tpbmdGb3JtKCksXG4gICAgJ1Bhc3QgVHJpcHMnOiAoKSA9PiBkaXNwbGF5VHJpcHMoJ2dldFBhc3RGb2xpbycpLFxuICAgICdVcGNvbWluZyBUcmlwcyc6ICgpID0+IGRpc3BsYXlUcmlwcygnZ2V0VXBjb21pbmdGb2xpbycpXG4gIH07XG4gIG1haW5UaXRsZS5pbm5lclRleHQgPSB0aXRsZVRleHQ7XG4gIHBhZ2VEaXNwbGF5c1t0aXRsZVRleHRdKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUcmlwcyhmb2xpb0Z1bmN0aW9uKSB7XG4gIGxldCB0cmlwc1RvU2hvdyA9IHVzZXIuZm9saW9bZm9saW9GdW5jdGlvbl0obmV3IERhdGUoKSkuZGF0YTtcbiAgbGV0IGlzVXBjb21pbmcgPSBmb2xpb0Z1bmN0aW9uWzNdID09PSAnVSc7XG4gIHRyaXBzTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nvc3QnKS5pbm5lckhUTUwgPSBkb21zY3JpcHRzLmNyZWF0ZUNvc3RTdW1tYXJ5KHRyaXBzVG9TaG93LCB1c2VyKTtcbiAgdHJpcHNUb1Nob3cuZm9yRWFjaCh0cmlwID0+IHRyaXBzTGlzdC5pbm5lckhUTUwgKz0gZG9tc2NyaXB0cy5jcmVhdGVUcmlwQ2FyZCh0cmlwLCBpc1VwY29taW5nKSk7XG4gIGJvb2tpbmdGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB0cmlwc0xpc3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIGFkZEV2ZW50TGlzdGVuZXJzVG9CdXR0b25zKCk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzVG9CdXR0b25zKCkge1xuICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXN0cm95LWNhcmQnKTtcbiAgZm9yIChsZXQgYnV0dG9uIG9mIGJ1dHRvbnMpIHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZXN0cm95Q2FyZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVzdHJveUNhcmQoZXZlbnQpIHtcbiAgbGV0IHRhcmdldE9mRGVzdHJ1Y3Rpb24gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRyaXAtY2FyZCcpO1xuICBsZXQgdHJpcElEID0gdGFyZ2V0T2ZEZXN0cnVjdGlvbi5kYXRhc2V0LnZhbHVlO1xuICBnb0ZldGNoLmRlbGV0ZVRyaXBSZXF1ZXN0KCt0cmlwSUQpXG4gIC50aGVuKCgpID0+IHtcbiAgICB0YXJnZXRPZkRlc3RydWN0aW9uLnJlbW92ZSgpO1xuICAgIHRyaXBzLmRlbGV0ZVRyaXBCeUlEKCt0cmlwSUQpO1xuICAgIHVzZXIuZm9saW8uZGVsZXRlVHJpcEJ5SUQoK3RyaXBJRCk7XG4gICAgZGlzcGxheVRyaXBzKCdnZXRVcGNvbWluZ0ZvbGlvJyk7XG4gIH0pXG4gIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlCb29raW5nRm9ybSgpIHtcbiAgYm9va2luZ0Zvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIHRyaXBzTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgc2V0Qm9va1RyaXBCdG5TdGF0dXModXNlclRyaXApO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVDb3N0cygpIHtcbiAgbGV0IGRlc3RJRCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXN0aW5hdGlvbnMnKS52YWx1ZTtcbiAgbGV0IGRlc3QgPSBkZXN0aW5hdGlvbnMuZmluZChkZXN0aW5hdGlvbiA9PiBkZXN0aW5hdGlvbi5pZCA9PT0gK2Rlc3RJRCk7XG4gIHVzZXJUcmlwID0gbmV3IFRyaXAoe1xuICAgIGlkOiB0cmlwcy5nZXROZXdUcmlwSUQoKSxcbiAgICB1c2VySUQ6IHVzZXIuaWQsXG4gICAgZGVzdGluYXRpb25JRDogK2Rlc3RJRCxcbiAgICB0cmF2ZWxlcnM6ICsoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI251bWJlci1vZi1wZW9wbGUnKS52YWx1ZSksXG4gICAgc3RhdHVzOiAncGVuZGluZycsXG4gICAgc3VnZ2VzdGVkQWN0aXZpdGllczogW10sXG4gICAgZGF0ZTogYmVnaW5EYXRlLFxuICAgIGR1cmF0aW9uOiB0aW1lLmRheXNCZXR3ZWVuKGJlZ2luRGF0ZSwgZW5kRGF0ZSlcbiAgfSk7XG4gIHVzZXJUcmlwLmRlc3RpbmF0aW9uID0gZGVzdDtcbiAgaWYgKCFzZXRCb29rVHJpcEJ0blN0YXR1cyh1c2VyVHJpcCkpIGRvbXNjcmlwdHMuc2V0Q29zdERpc3BsYXkodXNlclRyaXApO1xuICBlbHNlIGRvbXNjcmlwdHMuY2xlYXJDb3N0RGlzcGxheSgpO1xufVxuXG5mdW5jdGlvbiBib29rTmV3VHJpcCgpIHtcbiAgZG9tc2NyaXB0cy5jbGVhckNvc3REaXNwbGF5KCk7XG4gIGdvRmV0Y2gucG9zdE5ld1RyaXBSZXF1ZXN0KHVzZXJUcmlwKVxuICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgaWYocmVzcG9uc2Uuc3RhdHVzIDwgNDAwKSBzdWNjZXNzKCk7XG4gICAgZWxzZSB7XG4gICAgICBhbGVydCgnTG9va3MgbGlrZSBzb21ldGhpbmcgd2hlbiB3cm9uZyEgUGxlYXNlIHJlZnJlc2ggdGhlIHBhZ2UgYW5kIHRyeSBhZ2FpbiBsYXRlci4nKVxuICAgIH1cbiAgfSlcbiAgLmNhdGNoKHJlc3BvbnNlID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFzZS1jb3N0JykuaW5uZXJUZXh0ID0gYExvb2tzIGxpa2Ugc29tZXRoaW5nIHdlbnQgd3JvbmcuLi4gUmVmcmVzaCB0aGUgcGFnZSBhbmQgdHJ5IGFnYWluLCBvciBnaXZlIHVzIGEgY2FsbC5gO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3VjY2VzcygpIHtcbiAgdHJpcHMuYWRkTmV3VHJpcCh1c2VyVHJpcCk7XG4gIHVzZXIuZm9saW8uYWRkTmV3VHJpcCh1c2VyVHJpcCk7XG4gIGFsZXJ0KGBCb29rZWQhXFxuXFxuWW91J3JlIGdvaW5nIHRvICR7dXNlclRyaXAuZ2V0TmFtZSgpfSBvbiAke3RpbWUuY3JlYXRlWVlZWU1NREQodXNlclRyaXAuZGF0ZSl9IVxcblxcbklmIHlvdSdkIGxpa2UgdG8gY2FuY2VsIGF0IGFueSBwb2ludCwganVzdCBoZWFkIG92ZXIgdG8gdGhlIHVwY29taW5nIHRyaXBzIHRhYiBhbmQgaGl0ICdjYW5jZWwnIGF0IGFueSBwb2ludCB1bnRpbCB0aGUgZGF5IG9mIHlvdXIgdHJpcC5gKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jhc2UtY29zdCcpLmlubmVyVGV4dCA9IGBTdWNjZXNzISBTZWUgeW91IGluICR7dXNlclRyaXAuZ2V0TmFtZSgpLnNwbGl0KCcuJylbMF19IWA7XG4gIHVzZXJUcmlwID0ge307XG4gIHNldEJvb2tUcmlwQnRuU3RhdHVzKHVzZXJUcmlwKTtcbn1cblxuZnVuY3Rpb24gc2V0Qm9va1RyaXBCdG5TdGF0dXModHJpcCkge1xuICBib29rVHJpcEJ0bi5pbm5lclRleHQgPSAodHJpcC5kdXJhdGlvbiA8IDEgPyAnVHJpcCBtdXN0IGJlIGF0IGxlYXN0IDEgZGF5IGxvbmcnIDogJ0Jvb2sgbWUhJyk7XG4gIHJldHVybiBib29rVHJpcEJ0bi5kaXNhYmxlZCA9IChcbiAgICB0cmlwLmlkID09PSB1bmRlZmluZWQgfHxcbiAgICB0cmlwLnVzZXJJRCA9PT0gdW5kZWZpbmVkIHx8XG4gICAgdHJpcC5kZXN0aW5hdGlvbklEID09PSB1bmRlZmluZWQgfHxcbiAgICB0cmlwLnRyYXZlbGVycyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgdHJpcC5zdGF0dXMgPT09IHVuZGVmaW5lZCB8fFxuICAgIHRyaXAuc3VnZ2VzdGVkQWN0aXZpdGllcyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgdHJpcC5kYXRlID09PSB1bmRlZmluZWQgfHxcbiAgICB0cmlwLmR1cmF0aW9uID09PSB1bmRlZmluZWQgfHxcbiAgICB0cmlwLmR1cmF0aW9uIDwgMVxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21JbmRleCggYXJyICkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCk7XG59XG4iLCJsZXQgdGltZSA9IHtcbiAgZGF5c0Zyb21EYXRlKGRhdGUsIGRheXMpIHtcbiAgICBsZXQgbWlsbGlzZWNvbmRzRnJvbVRoZW4gPSBkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMDtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyBtaWxsaXNlY29uZHNGcm9tVGhlbilcbiAgfSxcblxuICBkYXlzQmV0d2VlbihkYXRlMSwgZGF0ZTIpIHtcbiAgICBsZXQgbVNlY29uZHMgPSBkYXRlMi5nZXRUaW1lKCkgLSBkYXRlMS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIE1hdGguY2VpbChtU2Vjb25kcyAvIDI0IC8gNjAgLyA2MCAvIDEwMDApO1xuICB9LFxuXG4gIGlzQmV0d2VlbihiZWcsIHRlc3QsIGVuZCkge1xuICAgIHJldHVybiBiZWcuZ2V0VGltZSgpIDw9IHRlc3QuZ2V0VGltZSgpICYmIHRlc3QuZ2V0VGltZSgpIDw9IGVuZC5nZXRUaW1lKCk7XG4gIH0sXG5cbiAgaXNCZWZvcmUodGVzdCwgcmVmZXJlbmNlKSB7XG4gICAgcmV0dXJuIHRlc3QuZ2V0VGltZSgpIDwgcmVmZXJlbmNlLmdldFRpbWUoKTtcbiAgfSxcblxuICBpc0FmdGVyKHRlc3QsIHJlZmVyZW5jZSkge1xuICAgIHJldHVybiB0ZXN0LmdldFRpbWUoKSA+IHJlZmVyZW5jZS5nZXRUaW1lKCk7XG4gIH0sXG5cbiAgY3JlYXRlWVlZWU1NREQoZGF0ZSkge1xuICAgIGxldCB5ZWFyID0gU3RyaW5nKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgbGV0IG1vbnRoID0gU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgIGxldCBkYXkgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpO1xuICAgIHdoaWxlKHllYXIubGVuZ3RoIDwgNCkgeWVhciA9IGAwJHt5ZWFyfWA7XG4gICAgd2hpbGUobW9udGgubGVuZ3RoIDwgMikgbW9udGggPSBgMCR7bW9udGh9YDtcbiAgICB3aGlsZShkYXkubGVuZ3RoIDwgMikgZGF5ID0gYDAke2RheX1gO1xuICAgIHJldHVybiBbeWVhciwgbW9udGgsIGRheV0uam9pbignLycpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRpbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=