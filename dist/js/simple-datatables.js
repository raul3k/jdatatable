/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === "resources_js_datatable_date_js") return "js/" + chunkId + ".js";
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/simple-datatables": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*******************************************!*\
  !*** ./resources/js/simple-datatables.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTable": () => (/* binding */ DataTable)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
 * Check is item is object
 * @return {Boolean}
 */
var isObject = function isObject(val) {
  return Object.prototype.toString.call(val) === "[object Object]";
};
/**
 * Check for valid JSON string
 * @param  {String}   str
 * @return {Boolean|Array|Object}
 */


var isJson = function isJson(str) {
  var t = !1;

  try {
    t = JSON.parse(str);
  } catch (e) {
    return !1;
  }

  return !(null === t || !Array.isArray(t) && !isObject(t)) && t;
};
/**
 * Create DOM element node
 * @param  {String}   nodeName nodeName
 * @param  {Object}   attrs properties and attributes
 * @return {Object}
 */


var createElement = function createElement(nodeName, attrs) {
  var dom = document.createElement(nodeName);

  if (attrs && "object" == _typeof(attrs)) {
    for (var attr in attrs) {
      if ("html" === attr) {
        dom.innerHTML = attrs[attr];
      } else {
        dom.setAttribute(attr, attrs[attr]);
      }
    }
  }

  return dom;
};

var flush = function flush(el) {
  if (el instanceof NodeList) {
    el.forEach(function (e) {
      return flush(e);
    });
  } else {
    el.innerHTML = "";
  }
};
/**
 * Create button helper
 * @param  {String}   className
 * @param  {Number}   page
 * @param  {String}   text
 * @return {Object}
 */


var button = function button(className, page, text) {
  return createElement("li", {
    "class": className,
    html: "<a href=\"#\" data-page=\"".concat(page, "\">").concat(text, "</a>")
  });
};
/**
 * Bubble sort algorithm
 */


var sortItems = function sortItems(a, b) {
  var c;
  var d;

  if (1 === b) {
    c = 0;
    d = a.length;
  } else {
    if (b === -1) {
      c = a.length - 1;
      d = -1;
    }
  }

  for (var e = !0; e;) {
    e = !1;

    for (var f = c; f != d; f += b) {
      if (a[f + b] && a[f].value > a[f + b].value) {
        var g = a[f];
        var h = a[f + b];
        var i = g;
        a[f] = h;
        a[f + b] = i;
        e = !0;
      }
    }
  }

  return a;
};
/**
 * Pager truncation algorithm
 */


var truncate = function truncate(a, b, c, d, ellipsis) {
  d = d || 2;
  var j;
  var e = 2 * d;
  var f = b - d;
  var g = b + d;
  var h = [];
  var i = [];

  if (b < 4 - d + e) {
    g = 3 + e;
  } else if (b > c - (3 - d + e)) {
    f = c - (2 + e);
  }

  for (var k = 1; k <= c; k++) {
    if (1 == k || k == c || k >= f && k <= g) {
      var l = a[k - 1];
      l.classList.remove("active");
      h.push(l);
    }
  }

  h.forEach(function (c) {
    var d = c.children[0].getAttribute("data-page");

    if (j) {
      var _e = j.children[0].getAttribute("data-page");

      if (d - _e == 2) i.push(a[_e]);else if (d - _e != 1) {
        var _f = createElement("li", {
          "class": "ellipsis",
          html: "<a href=\"#\">".concat(ellipsis, "</a>")
        });

        i.push(_f);
      }
    }

    i.push(c);
    j = c;
  });
  return i;
};
/**
 * Rows API
 * @param {Object} instance DataTable instance
 * @param {Array} rows
 */


var Rows = /*#__PURE__*/function () {
  function Rows(dt, rows) {
    _classCallCheck(this, Rows);

    this.dt = dt;
    this.rows = rows;
    return this;
  }
  /**
   * Build a new row
   * @param  {Array} row
   * @return {HTMLElement}
   */


  _createClass(Rows, [{
    key: "build",
    value: function build(row) {
      var tr = createElement("tr");
      var headings = this.dt.headings;

      if (!headings.length) {
        headings = row.map(function () {
          return "";
        });
      }

      headings.forEach(function (h, i) {
        var td = createElement("td"); // Fixes #29

        if (!row[i] || !row[i].length) {
          row[i] = "";
        }

        td.innerHTML = row[i];
        td.data = row[i];
        tr.appendChild(td);
      });
      return tr;
    }
  }, {
    key: "render",
    value: function render(row) {
      return row;
    }
    /**
     * Add new row
     * @param {Array} select
     */

  }, {
    key: "add",
    value: function add(data) {
      var _this = this;

      if (Array.isArray(data)) {
        var dt = this.dt; // Check for multiple rows

        if (Array.isArray(data[0])) {
          data.forEach(function (row) {
            dt.data.push(_this.build(row));
          });
        } else {
          dt.data.push(this.build(data));
        } // We may have added data to an empty table


        if (dt.data.length) {
          dt.hasRows = true;
        }

        this.update();
        dt.columns().rebuild();
      }
    }
    /**
     * Remove a tr from tbody by tr id
     *
     * @param {Number} trId Integer for the id of the tr
     */

  }, {
    key: "removeTr",
    value: function removeTr(trId) {
      var dt = this.dt;
      dt.data = dt.data.filter(function (tr) {
        return tr.id !== trId;
      });

      if (!dt.data.length) {
        dt.hasRows = false;
      }

      this.update();
      dt.columns().rebuild();
    }
    /**
     * Remove row(s)
     * @param  {Array|Number} select
     * @return {Void}
     */

  }, {
    key: "remove",
    value: function remove(select) {
      var dt = this.dt;

      if (Array.isArray(select)) {
        // Remove in reverse otherwise the indexes will be incorrect
        select.sort(function (a, b) {
          return b - a;
        });
        select.forEach(function (row) {
          dt.data.splice(row, 1);
        });
      } else if (select == "all") {
        dt.data = [];
      } else {
        dt.data.splice(select, 1);
      } // We may have emptied the table


      if (!dt.data.length) {
        dt.hasRows = false;
      }

      this.update();
      dt.columns().rebuild();
    }
    /**
     * Update row indexes
     * @return {Void}
     */

  }, {
    key: "update",
    value: function update() {
      this.dt.data.forEach(function (row, i) {
        row.dataIndex = i;
      });
    } ///

    /**
     * Find index of row by searching for a value in a column
     * @param  {Number} columnIndex
     * @param  {String} value
     * @return {Number}
     */

  }, {
    key: "findRowIndex",
    value: function findRowIndex(columnIndex, value) {
      // returns row index of first case-insensitive string match
      // inside the td innerText at specific column index
      return this.dt.data.findIndex(function (tr) {
        return tr.children[columnIndex].innerText.toLowerCase().includes(String(value).toLowerCase());
      });
    }
    /**
     * Find index, row, and column data by searching for a value in a column
     * @param  {Number} columnIndex
     * @param  {String} value
     * @return {Object}
     */

  }, {
    key: "findRow",
    value: function findRow(columnIndex, value) {
      // get the row index
      var index = this.findRowIndex(columnIndex, value); // exit if not found

      if (index < 0) {
        return {
          index: -1,
          row: null,
          cols: []
        };
      } // get the row from data


      var row = this.dt.data[index]; // return innerHTML of each td

      var cols = _toConsumableArray(row.cells).map(function (r) {
        return r.innerHTML;
      }); // return everything


      return {
        index: index,
        row: row,
        cols: cols
      };
    }
    /**
     * Update a row with new data
     * @param  {Number} select
     * @param  {Array} data
     * @return {Void}
     */

  }, {
    key: "updateRow",
    value: function updateRow(select, data) {
      var row = this.build(data);
      this.dt.data.splice(select, 1, row);
      this.update();
      this.dt.columns().rebuild();
    }
  }]);

  return Rows;
}();
/**
 * Columns API
 * @param {Object} instance DataTable instance
 * @param {Mixed} columns  Column index or array of column indexes
 */


var Columns = /*#__PURE__*/function () {
  function Columns(dt) {
    _classCallCheck(this, Columns);

    this.dt = dt;
    return this;
  }
  /**
   * Swap two columns
   * @return {Void}
   */


  _createClass(Columns, [{
    key: "swap",
    value: function swap(columns) {
      if (columns.length && columns.length === 2) {
        var cols = []; // Get the current column indexes

        this.dt.headings.forEach(function (h, i) {
          cols.push(i);
        });
        var x = columns[0];
        var y = columns[1];
        var b = cols[y];
        cols[y] = cols[x];
        cols[x] = b;
        this.order(cols);
      }
    }
    /**
     * Reorder the columns
     * @return {Array} columns  Array of ordered column indexes
     */

  }, {
    key: "order",
    value: function order(columns) {
      var a;
      var b;
      var c;
      var d;
      var h;
      var s;
      var cell;
      var temp = [[], [], [], []];
      var dt = this.dt; // Order the headings

      columns.forEach(function (column, x) {
        h = dt.headings[column];
        s = h.getAttribute("data-sortable") !== "false";
        a = h.cloneNode(true);
        a.originalCellIndex = x;
        a.sortable = s;
        temp[0].push(a);

        if (!dt.hiddenColumns.includes(column)) {
          b = h.cloneNode(true);
          b.originalCellIndex = x;
          b.sortable = s;
          temp[1].push(b);
        }
      }); // Order the row cells

      dt.data.forEach(function (row, i) {
        c = row.cloneNode(false);
        d = row.cloneNode(false);
        c.dataIndex = d.dataIndex = i;

        if (row.searchIndex !== null && row.searchIndex !== undefined) {
          c.searchIndex = d.searchIndex = row.searchIndex;
        } // Append the cell to the fragment in the correct order


        columns.forEach(function (column) {
          cell = row.cells[column].cloneNode(true);
          cell.data = row.cells[column].data;
          c.appendChild(cell);

          if (!dt.hiddenColumns.includes(column)) {
            cell = row.cells[column].cloneNode(true);
            cell.data = row.cells[column].data;
            d.appendChild(cell);
          }
        });
        temp[2].push(c);
        temp[3].push(d);
      });
      dt.headings = temp[0];
      dt.activeHeadings = temp[1];
      dt.data = temp[2];
      dt.activeRows = temp[3]; // Update

      dt.update();
    }
    /**
     * Hide columns
     * @return {Void}
     */

  }, {
    key: "hide",
    value: function hide(columns) {
      if (columns.length) {
        var dt = this.dt;
        columns.forEach(function (column) {
          if (!dt.hiddenColumns.includes(column)) {
            dt.hiddenColumns.push(column);
          }
        });
        this.rebuild();
      }
    }
    /**
     * Show columns
     * @return {Void}
     */

  }, {
    key: "show",
    value: function show(columns) {
      if (columns.length) {
        var index;
        var dt = this.dt;
        columns.forEach(function (column) {
          index = dt.hiddenColumns.indexOf(column);

          if (index > -1) {
            dt.hiddenColumns.splice(index, 1);
          }
        });
        this.rebuild();
      }
    }
    /**
     * Check column(s) visibility
     * @return {Boolean}
     */

  }, {
    key: "visible",
    value: function visible(columns) {
      var cols;
      var dt = this.dt;
      columns = columns || dt.headings.map(function (th) {
        return th.originalCellIndex;
      });

      if (!isNaN(columns)) {
        cols = !dt.hiddenColumns.includes(columns);
      } else if (Array.isArray(columns)) {
        cols = [];
        columns.forEach(function (column) {
          cols.push(!dt.hiddenColumns.includes(column));
        });
      }

      return cols;
    }
    /**
     * Add a new column
     * @param {Object} data
     */

  }, {
    key: "add",
    value: function add(data) {
      var _this2 = this;

      var td;
      var th = document.createElement("th");

      if (!this.dt.headings.length) {
        this.dt.insert({
          headings: [data.heading],
          data: data.data.map(function (i) {
            return [i];
          })
        });
        this.rebuild();
        return;
      }

      if (!this.dt.hiddenHeader) {
        if (data.heading.nodeName) {
          th.appendChild(data.heading);
        } else {
          th.innerHTML = data.heading;
        }
      } else {
        th.innerHTML = "";
      }

      this.dt.headings.push(th);
      this.dt.data.forEach(function (row, i) {
        if (data.data[i]) {
          td = document.createElement("td");

          if (data.data[i].nodeName) {
            td.appendChild(data.data[i]);
          } else {
            td.innerHTML = data.data[i];
          }

          td.data = td.innerHTML;

          if (data.render) {
            td.innerHTML = data.render.call(_this2, td.data, td, row);
          }

          row.appendChild(td);
        }
      });

      if (data.type) {
        th.setAttribute("data-type", data.type);
      }

      if (data.format) {
        th.setAttribute("data-format", data.format);
      }

      if (data.hasOwnProperty("sortable")) {
        th.sortable = data.sortable;
        th.setAttribute("data-sortable", data.sortable === true ? "true" : "false");
      }

      this.rebuild();
      this.dt.renderHeader();
    }
    /**
     * Remove column(s)
     * @param  {Array|Number} select
     * @return {Void}
     */

  }, {
    key: "remove",
    value: function remove(select) {
      var _this3 = this;

      if (Array.isArray(select)) {
        // Remove in reverse otherwise the indexes will be incorrect
        select.sort(function (a, b) {
          return b - a;
        });
        select.forEach(function (column) {
          return _this3.remove(column);
        });
      } else {
        this.dt.headings.splice(select, 1);
        this.dt.data.forEach(function (row) {
          row.removeChild(row.cells[select]);
        });
      }

      this.rebuild();
    }
    /**
     * Filter by column
     * @param  {int} column - The column no.
     * @param  {string} dir - asc or desc
     * @filter {array} filter - optional parameter with a list of strings
     * @return {void}
     */

  }, {
    key: "filter",
    value: function filter(column, dir, init, terms) {
      var dt = this.dt; // Creates a internal state that manages filters if there are none

      if (!dt.filterState) {
        dt.filterState = {
          originalData: dt.data
        };
      } // If that column is was not filtered yet, we need to create its state


      if (!dt.filterState[column]) {
        // append a filter that selects all rows, 'resetting' the filter
        var filters = [].concat(_toConsumableArray(terms), [function () {
          return true;
        }]);

        dt.filterState[column] = function () {
          var i = 0;
          return function () {
            return filters[i++ % filters.length];
          };
        }();
      } // Apply the filter and rebuild table


      var rowFilter = dt.filterState[column](); // fetches next filter

      var filteredRows = Array.from(dt.filterState.originalData).filter(function (tr) {
        var cell = tr.cells[column];
        var content = cell.hasAttribute("data-content") ? cell.getAttribute("data-content") : cell.innerText; // If the filter is a function, call it, if it is a string, compare it

        return typeof rowFilter === "function" ? rowFilter(content) : content === rowFilter;
      });
      dt.data = filteredRows;

      if (!dt.data.length) {
        dt.clear();
        dt.hasRows = false;
        dt.setMessage(dt.options.labels.noRows);
      } else {
        this.rebuild();
        dt.update();
      }

      if (!init) {
        dt.emit("datatable.sort", column, dir);
      }
    }
    /**
     * Sort by column
     * @param  {int} column - The column no.
     * @param  {string} dir - asc or desc
     * @return {void}
     */

  }, {
    key: "sort",
    value: function sort(column, dir, init) {
      var _this4 = this;

      var dt = this.dt; // Check column is present

      if (dt.hasHeadings && (column < 0 || column > dt.headings.length)) {
        return false;
      } //If there is a filter for this column, apply it instead of sorting


      var filterTerms = dt.options.filters && dt.options.filters[dt.headings[column].textContent];

      if (filterTerms && filterTerms.length !== 0) {
        this.filter(column, dir, init, filterTerms);
        return;
      }

      dt.sorting = true;

      if (!init) {
        dt.emit("datatable.sorting", column, dir);
      }

      var rows = dt.data;
      var alpha = [];
      var numeric = [];
      var a = 0;
      var n = 0;
      var th = dt.headings[column];
      var waitFor = []; // Check for date format

      if (th.getAttribute("data-type") === "date") {
        var format = false;
        var formatted = th.hasAttribute("data-format");

        if (formatted) {
          format = th.getAttribute("data-format");
        }

        waitFor.push(__webpack_require__.e(/*! import() */ "resources_js_datatable_date_js").then(__webpack_require__.bind(__webpack_require__, /*! ./datatable/date.js */ "./resources/js/datatable/date.js")).then(function (_ref) {
          var parseDate = _ref.parseDate;
          return function (date) {
            return parseDate(date, format);
          };
        }));
      }

      Promise.all(waitFor).then(function (importedFunctions) {
        var parseFunction = importedFunctions[0]; // only defined if date

        Array.from(rows).forEach(function (tr) {
          var cell = tr.cells[column];
          var content = cell.hasAttribute("data-content") ? cell.getAttribute("data-content") : cell.innerText;
          var num;

          if (parseFunction) {
            num = parseFunction(content);
          } else if (typeof content === "string") {
            num = content.replace(/(\$|,|\s|%)/g, "");
          } else {
            num = content;
          }

          if (parseFloat(num) == num) {
            numeric[n++] = {
              value: Number(num),
              row: tr
            };
          } else {
            alpha[a++] = {
              value: typeof content === "string" ? content.toLowerCase() : content,
              row: tr
            };
          }
        });
        /* Sort according to direction (ascending or descending) */

        if (!dir) {
          if (th.classList.contains("asc")) {
            dir = "desc";
          } else {
            dir = "asc";
          }
        }

        var top;
        var btm;

        if (dir == "desc") {
          top = sortItems(alpha, -1);
          btm = sortItems(numeric, -1);
          th.classList.remove("asc");
          th.classList.add("desc");
        } else {
          top = sortItems(numeric, 1);
          btm = sortItems(alpha, 1);
          th.classList.remove("desc");
          th.classList.add("asc");
        }
        /* Clear asc/desc class names from the last sorted column's th if it isn't the same as the one that was just clicked */


        if (dt.lastTh && th != dt.lastTh) {
          dt.lastTh.classList.remove("desc");
          dt.lastTh.classList.remove("asc");
        }

        dt.lastTh = th;
        /* Reorder the table */

        rows = top.concat(btm);
        dt.data = [];
        var indexes = [];
        rows.forEach(function (v, i) {
          dt.data.push(v.row);

          if (v.row.searchIndex !== null && v.row.searchIndex !== undefined) {
            indexes.push(i);
          }
        });
        dt.searchData = indexes;

        _this4.rebuild();

        dt.update();

        if (!init) {
          dt.emit("datatable.sort", column, dir);
        }
      });
    }
    /**
     * Rebuild the columns
     * @return {Void}
     */

  }, {
    key: "rebuild",
    value: function rebuild() {
      var a;
      var b;
      var c;
      var d;
      var dt = this.dt;
      var temp = [];
      dt.activeRows = [];
      dt.activeHeadings = [];
      dt.headings.forEach(function (th, i) {
        th.originalCellIndex = i;
        th.sortable = th.getAttribute("data-sortable") !== "false";

        if (!dt.hiddenColumns.includes(i)) {
          dt.activeHeadings.push(th);
        }
      }); // Loop over the rows and reorder the cells

      dt.data.forEach(function (row, i) {
        a = row.cloneNode(false);
        b = row.cloneNode(false);
        a.dataIndex = b.dataIndex = i;

        if (row.searchIndex !== null && row.searchIndex !== undefined) {
          a.searchIndex = b.searchIndex = row.searchIndex;
        } // Append the cell to the fragment in the correct order


        Array.from(row.cells).forEach(function (cell) {
          c = cell.cloneNode(true);
          c.data = cell.data;
          a.appendChild(c);

          if (!dt.hiddenColumns.includes(c.cellIndex)) {
            d = c.cloneNode(true);
            d.data = c.data;
            b.appendChild(d);
          }
        }); // Append the fragment with the ordered cells

        temp.push(a);
        dt.activeRows.push(b);
      });
      dt.data = temp;
      dt.update();
    }
  }]);

  return Columns;
}();
/**
 * Parse data to HTML table
 */


var dataToTable = function dataToTable(data) {
  var thead = false;
  var tbody = false;
  data = data || this.options.data;

  if (data.headings) {
    thead = createElement("thead");
    var tr = createElement("tr");
    data.headings.forEach(function (col) {
      var td = createElement("th", {
        html: col
      });
      tr.appendChild(td);
    });
    thead.appendChild(tr);
  }

  if (data.data && data.data.length) {
    tbody = createElement("tbody");
    data.data.forEach(function (rows) {
      if (data.headings) {
        if (data.headings.length !== rows.length) {
          throw new Error("The number of rows do not match the number of headings.");
        }
      }

      var tr = createElement("tr");
      rows.forEach(function (value) {
        var td = createElement("td", {
          html: value
        });
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
  }

  if (thead) {
    if (this.dom.tHead !== null) {
      this.dom.removeChild(this.dom.tHead);
    }

    this.dom.appendChild(thead);
  }

  if (tbody) {
    if (this.dom.tBodies.length) {
      this.dom.removeChild(this.dom.tBodies[0]);
    }

    this.dom.appendChild(tbody);
  }
};
/**
 * Default configuration
 * @typ {Object}
 */


var defaultConfig = {
  sortable: true,
  searchable: true,
  // Pagination
  paging: true,
  perPage: 10,
  perPageSelect: [5, 10, 15, 20, 25],
  nextPrev: true,
  firstLast: false,
  prevText: "&lsaquo;",
  nextText: "&rsaquo;",
  firstText: "&laquo;",
  lastText: "&raquo;",
  ellipsisText: "&hellip;",
  ascText: "▴",
  descText: "▾",
  truncatePager: true,
  pagerDelta: 2,
  scrollY: "",
  fixedColumns: true,
  fixedHeight: false,
  header: true,
  hiddenHeader: false,
  footer: false,
  btnDeleteEventListener: function btnDeleteEventListener() {},
  // Customise the display text
  labels: {
    placeholder: "Search...",
    // The search input placeholder
    perPage: "{select} entries per page",
    // per-page dropdown label
    noRows: "No entries found",
    // Message shown when there are no records to show
    noResults: "No results match your search query",
    // Message shown when there are no search results
    info: "Showing {start} to {end} of {rows} entries" //

  },
  // Customise the layout
  layout: {
    top: "{select}{search}",
    bottom: "{info}{pager}"
  }
};

var DataTable = /*#__PURE__*/function () {
  function DataTable(table) {
    var _this5 = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, DataTable);

    var dom = typeof table === "string" ? document.querySelector(table) : table; // user options

    this.options = _objectSpread(_objectSpread(_objectSpread({}, defaultConfig), options), {}, {
      layout: _objectSpread(_objectSpread({}, defaultConfig.layout), options.layout),
      labels: _objectSpread(_objectSpread({}, defaultConfig.labels), options.labels)
    });
    this.initialized = false;
    this.initialLayout = dom.innerHTML;
    this.initialSortable = this.options.sortable; // Disable manual sorting if no header is present (#4)

    if (!this.options.header) {
      this.options.sortable = false;
    }

    if (dom.tHead === null) {
      if (!this.options.data || this.options.data && !this.options.data.headings) {
        this.options.sortable = false;
      }
    }

    if (dom.tBodies.length && !dom.tBodies[0].rows.length) {
      if (this.options.data) {
        if (!this.options.data.data) {
          throw new Error("You seem to be using the data option, but you've not defined any rows.");
        }
      }
    }

    this.dom = dom;
    this.table = this.dom; // For compatibility. Remove in version 4

    this.listeners = {
      onResize: function onResize(event) {
        return _this5.onResize(event);
      }
    };
    this.init();
  }
  /**
   * Add custom property or method to extend DataTable
   * @param  {String} prop    - Method name or property
   * @param  {Mixed} val      - Function or property value
   * @return {Void}
   */


  _createClass(DataTable, [{
    key: "init",
    value:
    /**
     * Initialize the instance
     * @param  {Object} options
     * @return {Void}
     */
    function init(options) {
      var _this6 = this;

      if (this.initialized || this.dom.classList.contains("dataTable-table")) {
        return false;
      }

      Object.assign(this.options, options || {});
      this.currentPage = 1;
      this.onFirstPage = true;
      this.hiddenColumns = [];
      this.columnRenderers = [];
      this.selectedColumns = [];
      this.render();
      setTimeout(function () {
        _this6.emit("datatable.init");

        _this6.initialized = true;

        if (_this6.options.plugins) {
          Object.entries(_this6.options.plugins).forEach(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
                plugin = _ref3[0],
                options = _ref3[1];

            if (_this6[plugin] && typeof _this6[plugin] === "function") {
              _this6[plugin] = _this6[plugin](options, {
                createElement: createElement
              }); // Init plugin

              if (options.enabled && _this6[plugin].init && typeof _this6[plugin].init === "function") {
                _this6[plugin].init();
              }
            }
          });
        }
      }, 10);
    }
    /**
     * Render the instance
     * @param  {String} type
     * @return {Void}
     */

  }, {
    key: "render",
    value: function render(type) {
      if (type) {
        switch (type) {
          case "page":
            this.renderPage();
            break;

          case "pager":
            this.renderPager();
            break;

          case "header":
            this.renderHeader();
            break;
        }

        return false;
      }

      var options = this.options;
      var template = ""; // Convert data to HTML

      if (options.data) {
        dataToTable.call(this);
      } // Store references


      this.body = this.dom.tBodies[0];
      this.head = this.dom.tHead;
      this.foot = this.dom.tFoot;

      if (!this.body) {
        this.body = createElement("tbody");
        this.dom.appendChild(this.body);
      }

      this.hasRows = this.body.rows.length > 0; // Make a tHead if there isn't one (fixes #8)

      if (!this.head) {
        var h = createElement("thead");
        var t = createElement("tr");

        if (this.hasRows) {
          Array.from(this.body.rows[0].cells).forEach(function () {
            t.appendChild(createElement("th"));
          });
          h.appendChild(t);
        }

        this.head = h;
        this.dom.insertBefore(this.head, this.body);
        this.hiddenHeader = options.hiddenHeader;
      }

      this.headings = [];
      this.hasHeadings = this.head.rows.length > 0;

      if (this.hasHeadings) {
        this.header = this.head.rows[0];
        this.headings = [].slice.call(this.header.cells);
      } // Header


      if (!options.header) {
        if (this.head) {
          this.dom.removeChild(this.dom.tHead);
        }
      } // Footer


      if (options.footer) {
        if (this.head && !this.foot) {
          this.foot = createElement("tfoot", {
            html: this.head.innerHTML
          });
          this.dom.appendChild(this.foot);
        }
      } else {
        if (this.foot) {
          this.dom.removeChild(this.dom.tFoot);
        }
      } // Build


      this.wrapper = createElement("div", {
        "class": "dataTable-wrapper dataTable-loading"
      }); // Template for custom layouts

      template += "<div class='dataTable-top'>";
      template += options.layout.top;
      template += "</div>";

      if (options.scrollY.length) {
        template += "<div class='dataTable-container' style='max-height: ".concat(options.scrollY, "; overflow-Y: auto;'></div>");
      } else {
        template += "<div class='dataTable-container'></div>";
      }

      template += "<div class='dataTable-bottom'>";
      template += options.layout.bottom;
      template += "</div>"; // Info placement

      template = template.replace("{info}", options.paging ? "<div class='dataTable-info'></div>" : ""); // Per Page Select
      // Per page select

      if (options.paging && options.perPageSelect) {
        var wrap = "<div class='dataTable-dropdown'><label>";
        wrap += "{select}"; //options.labels.perPage;

        wrap += "</label></div>"; // Create the select

        var select = createElement("select", {
          "class": "dataTable-selector w-full form-control form-select"
        }); // Create the options

        options.perPageSelect.forEach(function (val) {
          var selected = val === options.perPage;
          var option = new Option(val, val, selected, selected);
          select.add(option);
        }); // Custom label

        select.add(new Option('View All', 500000, false, false));
        select.style.width = "140%";
        wrap = wrap.replace("{select}", select.outerHTML); // Selector placement

        template = template.replace("{select}", wrap);
      } else {
        template = template.replace("{select}", "");
      } // Searchable


      if (options.searchable) {
        var form = "<div class='dataTable-search'>\n                <input\n                    data-testid=\"search-input\"\n                    dusk=\"search\"\n                    spellcheck=\"false\"\n                    class='dataTable-input appearance-none form-search w-search pl-search shadow'\n                    placeholder='".concat(options.labels.placeholder, "'\n                    type='search'>\n            </div>"); // Search input placement

        template = template.replace("{search}", form);
      } else {
        template = template.replace("{search}", "");
      } // Render header


      if (this.hasHeadings) {
        // Sortable
        this.render("header");
      } // Add table class


      this.dom.classList.add("dataTable-table"); // Paginator

      var paginatorWrapper = createElement("nav", {
        "class": "dataTable-pagination"
      });
      var paginator = createElement("ul", {
        "class": "dataTable-pagination-list"
      });
      paginatorWrapper.appendChild(paginator); // Pager(s) placement

      template = template.replace(/\{pager\}/g, paginatorWrapper.outerHTML);
      this.wrapper.innerHTML = template;
      this.container = this.wrapper.querySelector(".dataTable-container");
      this.pagers = this.wrapper.querySelectorAll(".dataTable-pagination-list");
      this.label = this.wrapper.querySelector(".dataTable-info"); // Insert in to DOM tree

      this.dom.parentNode.replaceChild(this.wrapper, this.dom);
      this.container.appendChild(this.dom); // Store the table dimensions

      this.rect = this.dom.getBoundingClientRect(); // Convert rows to array for processing

      this.data = Array.from(this.body.rows);
      this.activeRows = this.data.slice();
      this.activeHeadings = this.headings.slice(); // Update

      this.update();
      this.setColumns(); // Fix height

      this.fixHeight(); // Fix columns

      this.fixColumns(); // Class names

      if (!options.header) {
        this.wrapper.classList.add("no-header");
      }

      if (!options.footer) {
        this.wrapper.classList.add("no-footer");
      }

      if (options.sortable) {
        this.wrapper.classList.add("sortable");
      }

      if (options.searchable) {
        this.wrapper.classList.add("searchable");
      }

      if (options.fixedHeight) {
        this.wrapper.classList.add("fixed-height");
      }

      if (options.fixedColumns) {
        this.wrapper.classList.add("fixed-columns");
      }

      this.bindEvents();
    }
    /**
     * Render the page
     * @return {void}
     */

  }, {
    key: "renderPage",
    value: function renderPage() {
      var _this7 = this;

      if (this.hasHeadings) {
        flush(this.header);
        this.activeHeadings.forEach(function (th) {
          return _this7.header.appendChild(th);
        });
      }

      if (this.hasRows && this.totalPages) {
        if (this.currentPage > this.totalPages) {
          this.currentPage = 1;
        } // Use a fragment to limit touching the DOM


        var index = this.currentPage - 1;
        var frag = document.createDocumentFragment();
        this.pages[index].forEach(function (row) {
          return frag.appendChild(_this7.rows().render(row));
        });
        this.clear(frag);
        this.onFirstPage = this.currentPage === 1;
        this.onLastPage = this.currentPage === this.lastPage;
      } else {
        this.setMessage(this.options.labels.noRows);
      } // Update the info


      var current = 0;
      var f = 0;
      var t = 0;
      var items;

      if (this.totalPages) {
        current = this.currentPage - 1;
        f = current * this.options.perPage;
        t = f + this.pages[current].length;
        f = f + 1;
        items = this.searching ? this.searchData.length : this.data.length;
      }

      if (this.label && this.options.labels.info.length) {
        // CUSTOM LABELS
        var string = this.options.labels.info.replace("{start}", f).replace("{end}", t).replace("{page}", this.currentPage).replace("{pages}", this.totalPages).replace("{rows}", items);
        this.label.innerHTML = items ? string : "";
      }

      if (this.currentPage == 1) {
        this.fixHeight();
      }
    }
    /**
     * Render the pager(s)
     * @return {Void}
     */

  }, {
    key: "renderPager",
    value: function renderPager() {
      flush(this.pagers);

      if (this.totalPages > 1) {
        var c = "pager";
        var frag = document.createDocumentFragment();
        var prev = this.onFirstPage ? 1 : this.currentPage - 1;
        var next = this.onLastPage ? this.totalPages : this.currentPage + 1; // first button

        if (this.options.firstLast) {
          frag.appendChild(button(c, 1, this.options.firstText));
        } // prev button


        if (this.options.nextPrev && !this.onFirstPage) {
          frag.appendChild(button(c, prev, this.options.prevText));
        }

        var pager = this.links; // truncate the links

        if (this.options.truncatePager) {
          pager = truncate(this.links, this.currentPage, this.pages.length, this.options.pagerDelta, this.options.ellipsisText);
        } // active page link


        this.links[this.currentPage - 1].classList.add("active"); // append the links

        pager.forEach(function (p) {
          p.classList.remove("active");
          frag.appendChild(p);
        });
        this.links[this.currentPage - 1].classList.add("active"); // next button

        if (this.options.nextPrev && !this.onLastPage) {
          frag.appendChild(button(c, next, this.options.nextText));
        } // first button


        if (this.options.firstLast) {
          frag.appendChild(button(c, this.totalPages, this.options.lastText));
        } // We may have more than one pager


        this.pagers.forEach(function (pager) {
          pager.appendChild(frag.cloneNode(true));
        });
      }
    }
    /**
     * Render the header
     * @return {Void}
     */

  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var _this8 = this;

      this.labels = [];

      if (this.headings && this.headings.length) {
        this.headings.forEach(function (th, i) {
          _this8.labels[i] = th.textContent;

          if (th.firstElementChild && th.firstElementChild.classList.contains("dataTable-sorter")) {
            th.innerHTML = th.firstElementChild.innerHTML;
          }

          th.sortable = th.getAttribute("data-sortable") !== "false";
          th.originalCellIndex = i;

          if (_this8.options.sortable && th.sortable) {
            var link = createElement("a", {
              href: "#",
              "class": "dataTable-sorter",
              html: th.innerHTML
            });
            th.innerHTML = "";
            th.setAttribute("data-sortable", "");
            th.appendChild(link);
          }
        });
      }

      this.fixColumns();
    }
    /**
     * Bind event listeners
     * @return {[type]} [description]
     */

  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this9 = this;

      var options = this.options; // Per page selector

      if (options.perPageSelect) {
        var selector = this.wrapper.querySelector(".dataTable-selector");

        if (selector) {
          // Change per page
          selector.addEventListener("change", function () {
            options.perPage = parseInt(selector.value, 10);

            _this9.update();

            _this9.fixHeight();

            _this9.emit("datatable.perpage", options.perPage);
          }, false);
        }
      } // Search input


      if (options.searchable) {
        this.input = this.wrapper.querySelector(".dataTable-input");

        if (this.input) {
          this.input.addEventListener("keyup", function () {
            return _this9.search(_this9.input.value);
          }, false);
        }
      } // Pager(s) / sorting


      var inputSearchBind = function inputSearchBind(that) {
        var inputSearch = document.querySelector('#jdatatable-input-search');

        if (inputSearch) {
          inputSearch.addEventListener("change", function () {
            return that.search(inputSearch.value);
          }, false);
          inputSearch.addEventListener("keyup", function () {
            return that.search(inputSearch.value);
          }, false);
        }
      };

      setTimeout(inputSearchBind.bind(null, this), 700);
      this.wrapper.addEventListener("click", function (e) {
        var t = e.target.closest("a");

        if (t && t.nodeName.toLowerCase() === "a") {
          if (t.hasAttribute("data-page")) {
            _this9.page(t.getAttribute("data-page"));

            e.preventDefault();
          } else if (options.sortable && t.classList.contains("dataTable-sorter") && t.parentNode.getAttribute("data-sortable") != "false") {
            _this9.columns().sort(_this9.headings.indexOf(t.parentNode));

            e.preventDefault();
          }
        }
      }, false);
      window.addEventListener("resize", this.listeners.onResize);
    }
    /**
     * execute on resize
     */

  }, {
    key: "onResize",
    value: function onResize() {
      this.rect = this.container.getBoundingClientRect();

      if (!this.rect.width) {
        // No longer shown, likely no longer part of DOM. Give up.
        return;
      }

      this.fixColumns();
    }
    /**
     * Set up columns
     * @return {[type]} [description]
     */

  }, {
    key: "setColumns",
    value: function setColumns(ajax) {
      var _this10 = this;

      if (!ajax) {
        this.data.forEach(function (row) {
          Array.from(row.cells).forEach(function (cell) {
            cell.data = cell.innerHTML;
          });
        });
      } // Check for the columns option


      if (this.options.columns && this.headings.length) {
        this.options.columns.forEach(function (data) {
          // convert single column selection to array
          if (!Array.isArray(data.select)) {
            data.select = [data.select];
          }

          if (data.hasOwnProperty("render") && typeof data.render === "function") {
            _this10.selectedColumns = _this10.selectedColumns.concat(data.select);

            _this10.columnRenderers.push({
              columns: data.select,
              renderer: data.render
            });
          } // Add the data attributes to the th elements


          data.select.forEach(function (column) {
            var th = _this10.headings[column];

            if (data.type) {
              th.setAttribute("data-type", data.type);
            }

            if (data.format) {
              th.setAttribute("data-format", data.format);
            }

            if (data.hasOwnProperty("sortable")) {
              th.setAttribute("data-sortable", data.sortable);
            }

            if (data.hasOwnProperty("hidden")) {
              if (data.hidden !== false) {
                _this10.columns().hide([column]);
              }
            }

            if (data.hasOwnProperty("sort") && data.select.length === 1) {
              _this10.columns().sort(data.select[0], data.sort, true);
            }
          });
        });
      }

      if (this.hasRows) {
        this.data.forEach(function (row, i) {
          row.dataIndex = i;
          Array.from(row.cells).forEach(function (cell) {
            cell.data = cell.innerHTML;
          });
        });

        if (this.selectedColumns.length) {
          this.data.forEach(function (row) {
            Array.from(row.cells).forEach(function (cell, i) {
              if (_this10.selectedColumns.includes(i)) {
                _this10.columnRenderers.forEach(function (options) {
                  if (options.columns.includes(i)) {
                    cell.innerHTML = options.renderer.call(_this10, cell.data, cell, row);
                  }
                });
              }
            });
          });
        }

        this.columns().rebuild();
      }

      this.render("header");
    }
    /**
     * Destroy the instance
     * @return {void}
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.dom.innerHTML = this.initialLayout; // Remove the className

      this.dom.classList.remove("dataTable-table"); // Remove the containers

      this.wrapper.parentNode.replaceChild(this.dom, this.wrapper);
      this.initialized = false;
      window.removeEventListener("resize", this.listeners.onResize);
    }
    /**
     * Update the instance
     * @return {Void}
     */

  }, {
    key: "update",
    value: function update() {
      this.wrapper.classList.remove("dataTable-empty");
      this.paginate(this);
      this.render("page");
      this.links = [];
      var i = this.pages.length;

      while (i--) {
        var num = i + 1;
        this.links[i] = button(i === 0 ? "active" : "", num, num);
      }

      this.sorting = false;
      this.render("pager");
      this.rows(this.data).update();
      this.emit("datatable.update");
    }
    /**
     * Sort rows into pages
     * @return {Number}
     */

  }, {
    key: "paginate",
    value: function paginate() {
      var _this11 = this;

      var perPage = this.options.perPage;
      var rows = this.activeRows;

      if (this.searching) {
        rows = [];
        this.searchData.forEach(function (index) {
          return rows.push(_this11.activeRows[index]);
        });
      }

      if (this.options.paging) {
        // Check for hidden columns
        this.pages = rows.map(function (tr, i) {
          return i % perPage === 0 ? rows.slice(i, i + perPage) : null;
        }).filter(function (page) {
          return page;
        });
      } else {
        this.pages = [rows];
      }

      this.totalPages = this.lastPage = this.pages.length;
      return this.totalPages;
    }
    /**
     * Fix column widths
     * @return {Void}
     */

  }, {
    key: "fixColumns",
    value: function fixColumns() {
      var _this12 = this;

      if ((this.options.scrollY.length || this.options.fixedColumns) && this.activeHeadings && this.activeHeadings.length) {
        var cells;
        var hd = false;
        this.columnWidths = []; // If we have headings we need only set the widths on them
        // otherwise we need a temp header and the widths need applying to all cells

        if (this.dom.tHead) {
          if (this.options.scrollY.length) {
            hd = createElement("thead");
            hd.appendChild(createElement("tr"));
            hd.style.height = "0px";

            if (this.headerTable) {
              // move real header back into place
              this.dom.tHead = this.headerTable.tHead;
            }
          } // Reset widths


          this.activeHeadings.forEach(function (cell) {
            cell.style.width = "";
          });
          this.activeHeadings.forEach(function (cell, i) {
            var ow = cell.offsetWidth;
            var w = ow / _this12.rect.width * 100;
            cell.style.width = "".concat(w, "%");
            _this12.columnWidths[i] = ow;

            if (_this12.options.scrollY.length) {
              var th = createElement("th");
              hd.firstElementChild.appendChild(th);
              th.style.width = "".concat(w, "%");
              th.style.paddingTop = "0";
              th.style.paddingBottom = "0";
              th.style.border = "0";
            }
          });

          if (this.options.scrollY.length) {
            var container = this.dom.parentElement;

            if (!this.headerTable) {
              this.headerTable = createElement("table", {
                "class": "dataTable-table"
              });
              var headercontainer = createElement("div", {
                "class": "dataTable-headercontainer"
              });
              headercontainer.appendChild(this.headerTable);
              container.parentElement.insertBefore(headercontainer, container);
            }

            var thd = this.dom.tHead;
            this.dom.replaceChild(hd, thd);
            this.headerTable.tHead = thd; // Compensate for scrollbars.

            this.headerTable.parentElement.style.paddingRight = "".concat(this.headerTable.clientWidth - this.dom.clientWidth + parseInt(this.headerTable.parentElement.style.paddingRight || "0", 10), "px");

            if (container.scrollHeight > container.clientHeight) {
              // scrollbars on one page means scrollbars on all pages.
              container.style.overflowY = "scroll";
            }
          }
        } else {
          cells = []; // Make temperary headings

          hd = createElement("thead");
          var r = createElement("tr");
          Array.from(this.dom.tBodies[0].rows[0].cells).forEach(function () {
            var th = createElement("th");
            r.appendChild(th);
            cells.push(th);
          });
          hd.appendChild(r);
          this.dom.insertBefore(hd, this.body);
          var widths = [];
          cells.forEach(function (cell, i) {
            var ow = cell.offsetWidth;
            var w = ow / _this12.rect.width * 100;
            widths.push(w);
            _this12.columnWidths[i] = ow;
          });
          this.data.forEach(function (row) {
            Array.from(row.cells).forEach(function (cell, i) {
              if (_this12.columns(cell.cellIndex).visible()) cell.style.width = "".concat(widths[i], "%");
            });
          }); // Discard the temp header

          this.dom.removeChild(hd);
        }
      }
    }
    /**
     * Fix the container height
     * @return {Void}
     */

  }, {
    key: "fixHeight",
    value: function fixHeight() {
      if (this.options.fixedHeight) {
        this.container.style.height = null;
        this.rect = this.container.getBoundingClientRect();
        this.container.style.height = "".concat(this.rect.height, "px");
      }
    }
    /**
     * Perform a search of the data set
     * @param {string} query
     * @returns {boolean|void}
     */

  }, {
    key: "search",
    value: function search(query) {
      var _this13 = this;

      if (!this.hasRows) return false;
      query = query.toLowerCase();
      this.currentPage = 1;
      this.searching = true;
      this.searchData = [];

      if (!query.length) {
        this.searching = false;
        this.update();
        this.emit("datatable.search", query, this.searchData);
        this.wrapper.classList.remove("search-results");
        return false;
      }

      this.clear();
      this.data.forEach(function (row, idx) {
        var inArray = _this13.searchData.includes(row); // https://github.com/Mobius1/Vanilla-DataTables/issues/12


        var doesQueryMatch = query.split(" ").reduce(function (bool, word) {
          var includes = false;
          var cell = null;
          var content = null;

          for (var x = 0; x < row.cells.length; x++) {
            cell = row.cells[x];
            content = cell.hasAttribute("data-content") ? cell.getAttribute("data-content") : cell.textContent;

            if (content.toLowerCase().includes(word) && _this13.columns(cell.cellIndex).visible()) {
              includes = true;
              break;
            }
          }

          return bool && includes;
        }, true);

        if (doesQueryMatch && !inArray) {
          row.searchIndex = idx;

          _this13.searchData.push(idx);
        } else {
          row.searchIndex = null;
        }
      });
      this.wrapper.classList.add("search-results");

      if (!this.searchData.length) {
        this.wrapper.classList.remove("search-results");
        var noResultFragment = document.createDocumentFragment();
        noResultFragment.innerHTML = "<div class=\"text-center\"><br /><br />\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"65\" height=\"51\" viewBox=\"0 0 65 51\" class=\"mb-3\">\n                <path fill=\"#A8B9C5\" d=\"M56 40h2c.552285 0 1 .447715 1 1s-.447715 1-1 1h-2v2c0 .552285-.447715 1-1 1s-1-.447715-1-1v-2h-2c-.552285 0-1-.447715-1-1s.447715-1 1-1h2v-2c0-.552285.447715-1 1-1s1 .447715 1 1v2zm-5.364125-8H38v8h7.049375c.350333-3.528515 2.534789-6.517471 5.5865-8zm-5.5865 10H6c-3.313708 0-6-2.686292-6-6V6c0-3.313708 2.686292-6 6-6h44c3.313708 0 6 2.686292 6 6v25.049375C61.053323 31.5511 65 35.814652 65 41c0 5.522847-4.477153 10-10 10-5.185348 0-9.4489-3.946677-9.950625-9zM20 30h16v-8H20v8zm0 2v8h16v-8H20zm34-2v-8H38v8h16zM2 30h16v-8H2v8zm0 2v4c0 2.209139 1.790861 4 4 4h12v-8H2zm18-12h16v-8H20v8zm34 0v-8H38v8h16zM2 20h16v-8H2v8zm52-10V6c0-2.209139-1.790861-4-4-4H6C3.790861 2 2 3.790861 2 6v4h52zm1 39c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8z\"></path>\n            </svg>\n            <h3 class=\"text-base text-80 font-normal mb-6\">\n                No exclusion matched the given criteria.\n            </h3>\n            \n            <div><a href=\"/resources/distribution-rules/new?viaResource=applications&amp;viaResourceId=".concat(this.options.resourceId, "&amp;viaRelationship=distribution_rules\" class=\"btn btn-sm btn-outline inline-flex items-center focus:outline-none focus:shadow-outline active:outline-none active:shadow-outline\" dusk=\"create-button\">\n    Create Exclusion\n  </a></div>\n        </div>");
        this.setMessage(noResultFragment.innerHTML);
      } else {
        this.update();
      }

      this.emit("datatable.search", query, this.searchData);
    }
    /**
     * Change page
     * @param  {int} page
     * @return {void}
     */

  }, {
    key: "page",
    value: function page(_page) {
      // We don't want to load the current page again.
      if (_page == this.currentPage) {
        return false;
      }

      if (!isNaN(_page)) {
        this.currentPage = parseInt(_page, 10);
      }

      if (_page > this.pages.length || _page < 0) {
        return false;
      }

      this.render("page");
      this.render("pager");
      this.emit("datatable.page", _page);
    }
    /**
     * Sort by column
     * @param  {int} column - The column no.
     * @param  {string} direction - asc or desc
     * @return {void}
     */

  }, {
    key: "sortColumn",
    value: function sortColumn(column, direction) {
      // Use columns API until sortColumn method is removed
      this.columns().sort(column, direction);
    }
    /**
     * Add new row data
     * @param {object} data
     */

  }, {
    key: "insert",
    value: function insert(data) {
      var _this14 = this;

      var rows = [];

      if (isObject(data)) {
        if (data.headings) {
          if (!this.hasHeadings && !this.hasRows) {
            var tr = createElement("tr");
            data.headings.forEach(function (heading) {
              var th = createElement("th", {
                html: heading
              });
              tr.appendChild(th);
            });
            this.head.appendChild(tr);
            this.header = tr;
            this.headings = [].slice.call(tr.cells);
            this.hasHeadings = true; // Re-enable sorting if it was disabled due
            // to missing header

            this.options.sortable = this.initialSortable; // Allow sorting on new header

            this.render("header"); // Activate newly added headings

            this.activeHeadings = this.headings.slice();
          }
        }

        if (data.data && Array.isArray(data.data)) {
          rows = data.data;
        }
      } else if (Array.isArray(data)) {
        data.forEach(function (row) {
          var r = [];
          Object.entries(row).forEach(function (_ref4) {
            var _ref5 = _slicedToArray(_ref4, 2),
                heading = _ref5[0],
                cell = _ref5[1];

            var index = _this14.labels.indexOf(heading);

            if (index > -1) {
              r[index] = cell;
            }
          });
          rows.push(r);
        });
      }

      if (rows.length) {
        this.rows().add(rows);
        this.hasRows = true;
      }

      this.update();
      this.setColumns();
      this.fixColumns();
    }
    /**
     * Refresh the instance
     * @return {void}
     */

  }, {
    key: "refresh",
    value: function refresh() {
      if (this.options.searchable) {
        this.input.value = "";
        this.searching = false;
      }

      this.currentPage = 1;
      this.onFirstPage = true;
      this.update();
      this.emit("datatable.refresh");
    }
    /**
     * Truncate the table
     * @param  {mixes} html - HTML string or HTMLElement
     * @return {void}
     */

  }, {
    key: "clear",
    value: function clear(html) {
      if (this.body) {
        flush(this.body);
      }

      var parent = this.body;

      if (!this.body) {
        parent = this.dom;
      }

      if (html) {
        if (typeof html === "string") {
          var frag = document.createDocumentFragment();
          frag.innerHTML = html;
        }

        parent.appendChild(html);
      }
    }
    /**
     * Export table to various formats (csv, txt or sql)
     * @param  {Object} userOptions User options
     * @return {Boolean}
     */

  }, {
    key: "export",
    value: function _export(userOptions) {
      if (!this.hasHeadings && !this.hasRows) return false;
      var headers = this.activeHeadings;
      var rows = [];
      var arr = [];
      var i;
      var x;
      var str;
      var link;
      var defaults = {
        resourceId: 0,
        download: true,
        skipColumn: [],
        // csv
        lineDelimiter: "\n",
        columnDelimiter: ",",
        // sql
        tableName: "myTable",
        // json
        replacer: null,
        space: 4
      }; // Check for the options object

      if (!isObject(userOptions)) {
        return false;
      }

      var options = _objectSpread(_objectSpread({}, defaults), userOptions);

      if (options.type) {
        if (options.type === "txt" || options.type === "csv") {
          // Include headings
          rows[0] = this.header;
        } // Selection or whole table


        if (options.selection) {
          // Page number
          if (!isNaN(options.selection)) {
            rows = rows.concat(this.pages[options.selection - 1]);
          } else if (Array.isArray(options.selection)) {
            // Array of page numbers
            for (i = 0; i < options.selection.length; i++) {
              rows = rows.concat(this.pages[options.selection[i] - 1]);
            }
          }
        } else {
          rows = rows.concat(this.activeRows);
        } // Only proceed if we have data


        if (rows.length) {
          if (options.type === "txt" || options.type === "csv") {
            str = "";

            for (i = 0; i < rows.length; i++) {
              for (x = 0; x < rows[i].cells.length; x++) {
                // Check for column skip and visibility
                if (!options.skipColumn.includes(headers[x].originalCellIndex) && this.columns(headers[x].originalCellIndex).visible()) {
                  var text = rows[i].cells[x].textContent;
                  text = text.trim();
                  text = text.replace(/\s{2,}/g, " ");
                  text = text.replace(/\n/g, "  ");
                  text = text.replace(/"/g, "\"\""); //have to manually encode "#" as encodeURI leaves it as is.

                  text = text.replace(/#/g, "%23");
                  if (text.includes(",")) text = "\"".concat(text, "\"");
                  str += text + options.columnDelimiter;
                }
              } // Remove trailing column delimiter


              str = str.trim().substring(0, str.length - 1); // Apply line delimiter

              str += options.lineDelimiter;
            } // Remove trailing line delimiter


            str = str.trim().substring(0, str.length - 1);

            if (options.download) {
              str = "data:text/csv;charset=utf-8,".concat(str);
            }
          } else if (options.type === "sql") {
            // Begin INSERT statement
            str = "INSERT INTO `".concat(options.tableName, "` ("); // Convert table headings to column names

            for (i = 0; i < headers.length; i++) {
              // Check for column skip and column visibility
              if (!options.skipColumn.includes(headers[i].originalCellIndex) && this.columns(headers[i].originalCellIndex).visible()) {
                str += "`".concat(headers[i].textContent, "`,");
              }
            } // Remove trailing comma


            str = str.trim().substring(0, str.length - 1); // Begin VALUES

            str += ") VALUES "; // Iterate rows and convert cell data to column values

            for (i = 0; i < rows.length; i++) {
              str += "(";

              for (x = 0; x < rows[i].cells.length; x++) {
                // Check for column skip and column visibility
                if (!options.skipColumn.includes(headers[x].originalCellIndex) && this.columns(headers[x].originalCellIndex).visible()) {
                  str += "\"".concat(rows[i].cells[x].textContent, "\",");
                }
              } // Remove trailing comma


              str = str.trim().substring(0, str.length - 1); // end VALUES

              str += "),";
            } // Remove trailing comma


            str = str.trim().substring(0, str.length - 1); // Add trailing colon

            str += ";";

            if (options.download) {
              str = "data:application/sql;charset=utf-8,".concat(str);
            }
          } else if (options.type === "json") {
            // Iterate rows
            for (x = 0; x < rows.length; x++) {
              arr[x] = arr[x] || {}; // Iterate columns

              for (i = 0; i < headers.length; i++) {
                // Check for column skip and column visibility
                if (!options.skipColumn.includes(headers[i].originalCellIndex) && this.columns(headers[i].originalCellIndex).visible()) {
                  arr[x][headers[i].textContent] = rows[x].cells[i].textContent;
                }
              }
            } // Convert the array of objects to JSON string


            str = JSON.stringify(arr, options.replacer, options.space);

            if (options.download) {
              str = "data:application/json;charset=utf-8,".concat(str);
            }
          } // Download


          if (options.download) {
            // Filename
            options.filename = options.filename || "datatable_export";
            options.filename += ".".concat(options.type);
            str = encodeURI(str); // Create a link to trigger the download

            link = document.createElement("a");
            link.href = str;
            link.download = options.filename; // Append the link

            document.body.appendChild(link); // Trigger the download

            link.click(); // Remove the link

            document.body.removeChild(link);
          }

          return str;
        }
      }

      return false;
    }
    /**
     * Import data to the table
     * @param  {Object} userOptions User options
     * @return {Boolean}
     */

  }, {
    key: "import",
    value: function _import(userOptions) {
      var obj = false;
      var defaults = {
        // csv
        lineDelimiter: "\n",
        columnDelimiter: ","
      }; // Check for the options object

      if (!isObject(userOptions)) {
        return false;
      }

      var options = _objectSpread(_objectSpread({}, defaults), userOptions);

      if (options.data.length || isObject(options.data)) {
        // Import CSV
        if (options.type === "csv") {
          obj = {
            data: []
          }; // Split the string into rows

          var rows = options.data.split(options.lineDelimiter);

          if (rows.length) {
            if (options.headings) {
              obj.headings = rows[0].split(options.columnDelimiter);
              rows.shift();
            }

            rows.forEach(function (row, i) {
              obj.data[i] = []; // Split the rows into values

              var values = row.split(options.columnDelimiter);

              if (values.length) {
                values.forEach(function (value) {
                  obj.data[i].push(value);
                });
              }
            });
          }
        } else if (options.type === "json") {
          var json = isJson(options.data); // Valid JSON string

          if (json) {
            obj = {
              headings: [],
              data: []
            };
            json.forEach(function (data, i) {
              obj.data[i] = [];
              Object.entries(data).forEach(function (_ref6) {
                var _ref7 = _slicedToArray(_ref6, 2),
                    column = _ref7[0],
                    value = _ref7[1];

                if (!obj.headings.includes(column)) {
                  obj.headings.push(column);
                }

                obj.data[i].push(value);
              });
            });
          }
        }

        if (isObject(options.data)) {
          obj = options.data;
        }

        if (obj) {
          // Add the rows
          this.insert(obj);
        }
      }

      return false;
    }
    /**
     * Print the table
     * @return {void}
     */

  }, {
    key: "print",
    value: function print() {
      var headings = this.activeHeadings;
      var rows = this.activeRows;
      var table = createElement("table");
      var thead = createElement("thead");
      var tbody = createElement("tbody");
      var tr = createElement("tr");
      headings.forEach(function (th) {
        tr.appendChild(createElement("th", {
          html: th.textContent
        }));
      });
      thead.appendChild(tr);
      rows.forEach(function (row) {
        var tr = createElement("tr");
        Array.from(row.cells).forEach(function (cell) {
          tr.appendChild(createElement("td", {
            html: cell.textContent
          }));
        });
        tbody.appendChild(tr);
      });
      table.appendChild(thead);
      table.appendChild(tbody); // Open new window

      var w = window.open(); // Append the table to the body

      w.document.body.appendChild(table); // Print

      w.print();
    }
    /**
     * Show a message in the table
     * @param {string} message
     */

  }, {
    key: "setMessage",
    value: function setMessage(message) {
      var colspan = 1;

      if (this.hasRows) {
        colspan = this.data[0].cells.length;
      } else if (this.activeHeadings.length) {
        colspan = this.activeHeadings.length;
      }

      this.wrapper.classList.add("dataTable-empty");

      if (this.label) {
        this.label.innerHTML = "";
      }

      this.totalPages = 0;
      this.render("pager");
      this.clear(createElement("tr", {
        html: "<td class=\"dataTables-empty\" colspan=\"".concat(colspan, "\">").concat(message, "</td>")
      }));
    }
    /**
     * Columns API access
     * @return {Object} new Columns instance
     */

  }, {
    key: "columns",
    value: function columns(_columns) {
      return new Columns(this, _columns);
    }
    /**
     * Rows API access
     * @return {Object} new Rows instance
     */

  }, {
    key: "rows",
    value: function rows(_rows) {
      return new Rows(this, _rows);
    }
    /**
     * Add custom event listener
     * @param  {String} event
     * @param  {Function} callback
     * @return {Void}
     */

  }, {
    key: "on",
    value: function on(event, callback) {
      this.events = this.events || [];
      this.events[event] = this.events[event] || [];
      this.events[event].push(callback);
    }
    /**
     * Remove custom event listener
     * @param  {String} event
     * @param  {Function} callback
     * @return {Void}
     */

  }, {
    key: "off",
    value: function off(event, callback) {
      this.events = this.events || [];
      if (event in this.events === false) return;
      this.events[event].splice(this.events[event].indexOf(callback), 1);
    }
    /**
     * Fire custom event
     * @param  {String} event
     * @return {Void}
     */

  }, {
    key: "emit",
    value: function emit(event) {
      var _this16 = this;

      this.events = this.events || [];

      function btnClickDelete() {
        setTimeout(function () {
          var _this15 = this;

          document.querySelectorAll('.btn-delete').forEach(function (el) {
            el.addEventListener('click', function () {
              return _this15.Nova.$emit('btn-delete-clicked', el.id);
            }, false);
          });
        }, 800);
      }

      btnClickDelete();
      Nova.$on('btn-click-delete', function () {
        return btnClickDelete();
      });
      Nova.$on('tr-deleted', function (id) {
        _this16.update();
      });
      if (event in this.events === false) return;

      for (var i = 0; i < this.events[event].length; i++) {
        this.events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
      }
    }
  }], [{
    key: "extend",
    value: function extend(prop, val) {
      if (typeof val === "function") {
        DataTable.prototype[prop] = val;
      } else {
        DataTable[prop] = val;
      }
    }
  }]);

  return DataTable;
}();


/******/ })()
;