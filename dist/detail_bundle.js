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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/detail.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./public/css/header.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/css/header.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Jura:wght@500&family=Thasadith:wght@700&display=swap&family=Bebas+Neue&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"\\r\\n:root{\\r\\n    --primary-color:#04B4AE;\\r\\n    --secondary-color:#FFBF00;\\r\\n}\\r\\n\\r\\n/* header */\\r\\n\\r\\nheader{\\r\\n    display: flex;\\r\\n    font-family: 'Bebas Neue', cursive;\\r\\n    color: #fff;\\r\\n    position: relative;\\r\\n    margin: 0;\\r\\n    padding: 20px 0;\\r\\n    height: 100px;\\r\\n    background-color: var(--primary-color);\\r\\n    z-index: 1;\\r\\n    transition: all 1s ease 0s;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\nheader.sticky{\\r\\n    position: fixed;\\r\\n    top:0;\\r\\n    width:100%;\\r\\n    opacity: 0.7;\\r\\n}\\r\\n\\r\\nheader #titleOfHeader{\\r\\n    font-size: 60px;\\r\\n    text-decoration: none;\\r\\n    color: #fff;\\r\\n}\\r\\n\\r\\nheader .toggle{\\r\\n    background-color: rgba(0,0,0,0.5);   \\r\\n    border: none;\\r\\n    position: absolute;\\r\\n    font-size: 10px;\\r\\n    padding: 7px 10px;\\r\\n    top:10px;\\r\\n    left:20px;\\r\\n}\\r\\n\\r\\n.SignIn{\\r\\n    position: absolute;\\r\\n    top: 20px;\\r\\n    right: 35px;\\r\\n    margin-top:10px;\\r\\n}\\r\\n\\r\\n.SignIn .login{\\r\\n    font-size:24px; \\r\\n    text-decoration:none;\\r\\n    color:#fff;\\r\\n    margin-right:10px;\\r\\n  }\\r\\n  \\r\\n  .SignIn .signUp{\\r\\n    color:var(--primary-color);\\r\\n    text-decoration:none;\\r\\n    background-color:#fff;\\r\\n    padding: 8px 15px;\\r\\n    border-radius: 5px;\\r\\n    font-size:24px;\\r\\n  }\\r\\n\\r\\n  .SignIn .logout{\\r\\n    font-size:24px; \\r\\n    text-decoration:none;\\r\\n    color:#fff;\\r\\n    margin-right:10px;\\r\\n  }\\r\\n\\r\\n\\r\\n  .SignIn .login:hover{\\r\\n    border-bottom: 2px solid #fff;\\r\\n  }\\r\\n\\r\\n\\r\\n\\r\\n@media (max-width:700px){\\r\\n   header{\\r\\n       height: 60px;\\r\\n       position: fixed;\\r\\n       top:0;\\r\\n       left:0;\\r\\n       width:100%;\\r\\n       z-index: 1;\\r\\n   }\\r\\n   header  #titleOfHeader{\\r\\n       font-size: 30px;\\r\\n   }\\r\\n   header #contents{\\r\\n       display: none;\\r\\n   }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./public/css/header.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./public/css/main-style.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/css/main-style.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Jura:wght@500&family=Thasadith:wght@700&display=swap&family=Bebas+Neue&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"\\r\\n:root{\\r\\n    --primary-color:#04B4AE;\\r\\n    --secondary-color:#FFBF00;\\r\\n}\\r\\n\\r\\n*{\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody{\\r\\n    overflow-x:hidden;\\r\\n    margin: 0;\\r\\n    padding:0;\\r\\n    transition: transform 0.3s ease;\\r\\n}\\r\\n\\r\\nbutton , .button, input[type='submit'], input[type='button']{\\r\\n    text-decoration: none;\\r\\n    color: black;\\r\\n    cursor: pointer;\\r\\n    background-color: var(--secondary-color);\\r\\n    border: none;\\r\\n    border-radius: 5px;\\r\\n    padding: 8px 20px;\\r\\n    font-size:20px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./public/css/main-style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./public/css/navigation.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/css/navigation.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Jura:wght@500&family=Thasadith:wght@700&display=swap&family=Bebas+Neue&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"\\r\\n:root{\\r\\n    --primary-color:#04B4AE;\\r\\n    --secondary-color:#FFBF00;\\r\\n}\\r\\n\\r\\nnav{\\r\\n    background-color: rgba(0,0,0,0.3);\\r\\n    position: fixed;\\r\\n    top:0;\\r\\n    bottom:0;\\r\\n    left:0;\\r\\n    right:0;\\r\\n    display: none;\\r\\n    z-index: 2;\\r\\n}\\r\\n\\r\\nnav.show-nav{\\r\\n    display: block;\\r\\n    \\r\\n}\\r\\n\\r\\nnav .nav-toggle{\\r\\n    background-color: rgba(0,0,0,0.5);   \\r\\n    font-size: 10px;\\r\\n    padding: 7px 10px;\\r\\n    border: none;\\r\\n    position: absolute;\\r\\n    top: 10px;\\r\\n    right: 5px;\\r\\n\\r\\n}\\r\\n\\r\\n\\r\\n.nav-container{\\r\\n    background-color: var(--primary-color);\\r\\n    width: 300px;\\r\\n    min-height: 100vh;\\r\\n    height:100%;\\r\\n    position: fixed;\\r\\n    top:0;\\r\\n    left:0;\\r\\n    font-family: 'Thasadith', sans-serif;\\r\\n}\\r\\n\\r\\n\\r\\n.nav-container .logo{\\r\\n    padding: 20px 0;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n\\r\\n.nav-container .logo p{\\r\\n    color: #fff;\\r\\n    font-size:24px;\\r\\n}\\r\\n\\r\\n.nav-container ul{\\r\\n    list-style-type: none;\\r\\n    margin :0;\\r\\n    padding : 0;\\r\\n}\\r\\n\\r\\n.nav-container li{\\r\\n    margin: 50px 0;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.nav-container ul li a{\\r\\n    color: #fff;\\r\\n    font-size:24px;\\r\\n    text-decoration: none;\\r\\n}\\r\\n\\r\\nnav ul li a:hover{\\r\\n    color: var(--secondary-color);\\r\\n    \\r\\n}\\r\\n\\r\\n\\r\\nnav .settingBtn{\\r\\n    position: absolute;\\r\\n    top : 10px;\\r\\n    left: 25px;\\r\\n    font-size: 25px;\\r\\n    color:#fff\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./public/css/navigation.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./public/css/todo-detail.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/css/todo-detail.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".post-container{\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    flex-direction: column;\\r\\n    position: relative;\\r\\n    margin : 50px 0;\\r\\n    padding : 15px;\\r\\n    max-width: 100%;\\r\\n    font-family: 'Thasadith', sans-serif;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.post-container h1{\\r\\n    margin:0;\\r\\n    color: var(--secondary-color);\\r\\n}\\r\\n\\r\\n.NotDone-list.hidden{\\r\\n \\r\\n     display: none;\\r\\n}\\r\\n\\r\\n.post-container .NotDone-logo.hidden{\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.Done-list.hidden{\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.post-container .Done-logo.hidden{\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.NotDone-list {\\r\\n    margin-bottom: 70px;\\r\\n    list-style-type: none;\\r\\n    background-color: #dfececc5;;\\r\\n    border: 1px solid #bbb8b8;\\r\\n    text-align: center;\\r\\n    width : 500px;\\r\\n    padding : 30px;\\r\\n    border-radius: 20px;\\r\\n}\\r\\n\\r\\n.Done-list{\\r\\n    list-style-type: none;\\r\\n    background-color: #dfececc5;;\\r\\n    border: 1px solid #bbb8b8;\\r\\n    text-align: center;\\r\\n    width : 500px;\\r\\n    padding : 30px;\\r\\n    border-radius: 20px;\\r\\n}\\r\\n.Done-list .post{\\r\\n    text-decoration: line-through;\\r\\n}\\r\\n.post{\\r\\n    margin-bottom: 10px;\\r\\n    font-size: 24px;\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./public/css/todo-detail.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./public/css/header.css":
/*!*******************************!*\
  !*** ./public/css/header.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./header.css */ \"./node_modules/css-loader/dist/cjs.js!./public/css/header.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./public/css/header.css?");

/***/ }),

/***/ "./public/css/main-style.css":
/*!***********************************!*\
  !*** ./public/css/main-style.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main-style.css */ \"./node_modules/css-loader/dist/cjs.js!./public/css/main-style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./public/css/main-style.css?");

/***/ }),

/***/ "./public/css/navigation.css":
/*!***********************************!*\
  !*** ./public/css/navigation.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./navigation.css */ \"./node_modules/css-loader/dist/cjs.js!./public/css/navigation.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./public/css/navigation.css?");

/***/ }),

/***/ "./public/css/todo-detail.css":
/*!************************************!*\
  !*** ./public/css/todo-detail.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./todo-detail.css */ \"./node_modules/css-loader/dist/cjs.js!./public/css/todo-detail.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./public/css/todo-detail.css?");

/***/ }),

/***/ "./public/js/detail.js":
/*!*****************************!*\
  !*** ./public/js/detail.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main-style.css */ \"./public/css/main-style.css\");\n/* harmony import */ var _css_main_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_todo_detail_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/todo-detail.css */ \"./public/css/todo-detail.css\");\n/* harmony import */ var _css_todo_detail_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_todo_detail_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_navigation_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/navigation.css */ \"./public/css/navigation.css\");\n/* harmony import */ var _css_navigation_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_navigation_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/header.css */ \"./public/css/header.css\");\n/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_header_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _originSource_todo_detail_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./originSource/todo-detail.js */ \"./public/js/originSource/todo-detail.js\");\n/* harmony import */ var _originSource_todo_detail_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_originSource_todo_detail_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _originSource_nav_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./originSource/nav.js */ \"./public/js/originSource/nav.js\");\n/* harmony import */ var _originSource_nav_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_originSource_nav_js__WEBPACK_IMPORTED_MODULE_5__);\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./public/js/detail.js?");

/***/ }),

/***/ "./public/js/originSource/nav.js":
/*!***************************************!*\
  !*** ./public/js/originSource/nav.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const nav_bar= document.querySelector('nav');\r\nconst close_btn =document.getElementById('nav-toggle');\r\nconst nav_btn = document.getElementById('toggle');\r\n\r\nnav_btn.addEventListener('click', ()=>{\r\n    nav_bar.classList.add('show-nav');\r\n})\r\n\r\nclose_btn.addEventListener('click', ()=>{\r\n    nav_bar.classList.remove('show-nav');\r\n})\r\n\r\nwindow.addEventListener('click', (e)=>{\r\n    console.log(e.target);\r\n    if(e.target.className ==='show-nav'){\r\n        nav_bar.classList.remove('show-nav');\r\n    } \r\n})\n\n//# sourceURL=webpack:///./public/js/originSource/nav.js?");

/***/ }),

/***/ "./public/js/originSource/todo-detail.js":
/*!***********************************************!*\
  !*** ./public/js/originSource/todo-detail.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const NotDoneUl = document.querySelector('.NotDone-list');\r\nconst DoneUl = document.querySelector('.Done-list');\r\nconst NotDoneLogo=document.querySelector('.NotDone-logo');\r\nconst DoneLogo =document.querySelector('.Done-logo');\r\nconst csrf=document.querySelector('[name=_csrf]').value;\r\nconst date = document.querySelector('[name=date]').value;\r\n\r\nwindow.createli=function(contents,id,checked){  // li 생성해주는 함수 \r\n    const li = document.createElement('li');\r\n    li.className='post';\r\n    li.innerHTML = `\r\n    <li class=\"post\">\r\n        <input type=\"hidden\"  name=\"_csrf\"  value=\"${csrf}\"  >\r\n        <input type=\"hidden\"  name=\"date\"  value=\"${date}\"  >\r\n        <input type=\"checkbox\" id=\"doneToggle\" onClick=\"doneCheck(this)\" ${checked}>\r\n        <input type=\"hidden\" name=\"postId\" id=\"postId\" value=\"${id}\">\r\n        ${contents}\r\n    </li>\r\n    `;\r\n    return li;\r\n}\r\n\r\nwindow.toNotDone=function(contents, id){  // 아직 완료 안되었음 으로 바꿔주는 함수 \r\n    const li = createli(contents,id,'');\r\n    NotDoneUl.appendChild(li);\r\n       // ul과 logo가 hidden 되어있다면 --> 첫번째 요소라면 \r\n    if(NotDoneUl.classList.contains('hidden')){ \r\n        NotDoneUl.classList.remove('hidden');\r\n        NotDoneLogo.classList.remove('hidden');\r\n    }\r\n}\r\n\r\nwindow.toDone=function(contents,id){ // 완료되었음 으로 바꿔주는 함수 \r\n    const li = createli(contents,id,'checked');\r\n    DoneUl.appendChild(li);\r\n    if(DoneUl.classList.contains('hidden')){\r\n        DoneUl.classList.remove('hidden');\r\n        DoneLogo .classList.remove('hidden');\r\n    }\r\n}\r\n\r\nwindow.doneCheck=async function(dom){ // 체크박스 onclick 이벤트 \r\n    const li = dom.parentNode;\r\n    const ParentUl= li.parentNode;\r\n    const checked = dom.checked;\r\n    const contents = li.innerText;\r\n    const id = li.querySelector('input[name=\"postId\"]').value;\r\n    const method= 'PUT';\r\n    const sendingData = {'id':id, 'isDone':checked, 'date':date};\r\n    try{ // put fetch \r\n        const result = await fetch('/done-check-detail', \r\n        {\r\n            method:method,\r\n            headers:{\r\n                'Accept': 'application/json',\r\n                'csrf-token':csrf,\r\n                'Content-Type':'application/json;charset=utf-8'\r\n            },\r\n            body: JSON.stringify(sendingData)\r\n        });\r\n        const data = await result.json();\r\n        const DoneLength=data.DoneLength; // 완료된 포스트 개수\r\n        const NotDoneLength=data.NotDoneLength; // 미완료된 포스트 개수 \r\n        if(checked === true){ // Not Done-> done\r\n            ParentUl.removeChild(li);\r\n            toDone(contents,id);\r\n            // 해당 li를 현재 Not Done에서 빼주고,\r\n            // li를 Done으로 옮겨주기 \r\n            if(NotDoneLength===0){\r\n                NotDoneUl.classList.add('hidden');\r\n                NotDoneLogo.classList.add('hidden');\r\n            }\r\n        }\r\n        else{ // done -> Not done\r\n            ParentUl.removeChild(li);\r\n            toNotDone(contents,id);\r\n            if(DoneLength===0){\r\n                DoneUl.classList.add('hidden');\r\n                DoneLogo.classList.add('hidden');\r\n            }\r\n        }\r\n    }catch(err) \r\n    {\r\n        console.log(err);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./public/js/originSource/todo-detail.js?");

/***/ })

/******/ });