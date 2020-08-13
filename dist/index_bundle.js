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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/index.js");
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

/***/ "./node_modules/css-loader/dist/cjs.js!./public/css/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/css/index.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_background_img_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/background-img.webp */ \"./public/css/images/background-img.webp\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Raleway+Dots&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_background_img_webp__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* body content */\\r\\n.container{\\r\\n    background-image:url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n    background-repeat: no-repeat;\\r\\n    background-size: cover;\\r\\n    color:#fff;\\r\\n    margin : 0 auto;\\r\\n    padding : 15px;\\r\\n    max-width: 100%;\\r\\n    height: 100vh;\\r\\n    overflow: hidden;\\r\\n    text-align: center;\\r\\n    font-family: 'Thasadith', sans-serif;\\r\\n}\\r\\n.container #logoTitle{\\r\\n    font-family: 'Raleway Dots', cursive;\\r\\n    font-size: 140px;\\r\\n    font-weight: bold;\\r\\n    margin-top:100px;\\r\\n    margin-bottom: 30px;\\r\\n    background: linear-gradient(to right, #fff, #fff 50%, #FFBF00 50%);\\r\\n    background-clip: text;\\r\\n    -webkit-background-clip: text;\\r\\n    -webkit-text-fill-color: transparent;\\r\\n    background-size: 200% 100%;\\r\\n    background-position: 100%;\\r\\n    transition: background-position 300ms ease;\\r\\n    text-decoration: none;\\r\\n}\\r\\n\\r\\n.container #logoTitle:hover{\\r\\n    background-position: 0 100%;\\r\\n}\\r\\n.container #line{\\r\\n    margin : 50px auto;\\r\\n    width:30%;\\r\\n    text-align: center;\\r\\n    border-top: 1px solid #fff;\\r\\n}\\r\\n.container #quotes{\\r\\n    \\r\\n    margin-top: 50px;\\r\\n    font-size: 30px;\\r\\n    animation: fadeIn ease 5s;\\r\\n    -webkit-animation: fadeIn ease 5s;\\r\\n    -moz-animation: fadeIn ease 5s;\\r\\n    -o-animation: fadeIn ease 5s;\\r\\n    -ms-animation:fadeIn ease 5s;\\r\\n}\\r\\n\\r\\n.container .signUp{\\r\\n    text-decoration:none;\\r\\n    color: black;\\r\\n    background-color:#FFBF00;\\r\\n    font-size:30px;\\r\\n    padding: 8px 20px;\\r\\n    border-radius: 5px;\\r\\n  }\\r\\n\\r\\n@keyframes fadeIn {\\r\\n    0% {opacity: 0;}\\r\\n    100% {opacity: 1;}\\r\\n}\\r\\n@-moz-keyframes fadeIn {\\r\\n    0% {opacity:0;}\\r\\n    100% {opacity:1;}\\r\\n}\\r\\n@-webkit-keyframes fadeIn {\\r\\n    0% {opacity:0;}\\r\\n    100% {opacity:1;}\\r\\n}\\r\\n\\r\\n  \\r\\n@-o-keyframes fadeIn {\\r\\n    0% {opacity:0;}\\r\\n    100% {opacity:1;}\\r\\n}\\r\\n    \\r\\n@-ms-keyframes fadeIn {\\r\\n    0% {opacity:0;}\\r\\n    100% {opacity:1;}\\r\\n}\\r\\n\\r\\n\\r\\n@media (max-width:700px){\\r\\n    .container #quotes{\\r\\n        display: none;\\r\\n    }\\r\\n    .container {\\r\\n        background-size:100% 100%;\\r\\n    }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./public/css/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./public/css/main-style.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/css/main-style.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Jura:wght@500&family=Thasadith:wght@700&display=swap&family=Bebas+Neue&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"\\r\\n:root{\\r\\n    --primary-color:#04B4AE;\\r\\n    --secondary-color:#FFBF00;\\r\\n}\\r\\n\\r\\n*{\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody{\\r\\n    overflow-x:hidden;\\r\\n    margin: 0;\\r\\n    padding:0;\\r\\n    transition: transform 0.3s ease;\\r\\n}\\r\\n\\r\\nbody.show-nav{\\r\\n    transform: translateX(300px);\\r\\n}\\r\\n\\r\\nbutton , .button, input[type='submit'], input[type='button']{\\r\\n    text-decoration: none;\\r\\n    color: black;\\r\\n    cursor: pointer;\\r\\n    background-color: var(--secondary-color);\\r\\n    border: none;\\r\\n    border-radius: 5px;\\r\\n    padding: 8px 20px;\\r\\n    font-size:20px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./public/css/main-style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./public/css/naviagtion.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/css/naviagtion.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Jura:wght@500&family=Thasadith:wght@700&display=swap&family=Bebas+Neue&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"\\r\\n:root{\\r\\n    --primary-color:#04B4AE;\\r\\n    --secondary-color:#FFBF00;\\r\\n}\\r\\n\\r\\nnav{\\r\\n    background-color: var(--primary-color);\\r\\n    width: 300px;\\r\\n    min-height: 100vh;\\r\\n    height:100%;\\r\\n    position: fixed;\\r\\n    top:0;\\r\\n    left:0;\\r\\n    border-right: 1px solid #fff;\\r\\n    z-index: 100;\\r\\n    font-family: 'Thasadith', sans-serif;\\r\\n    transform: translateX(-100%);\\r\\n}\\r\\n\\r\\n\\r\\nnav .logo{\\r\\n    padding: 20px 0;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n\\r\\nnav .logo p{\\r\\n    color: #fff;\\r\\n    font-size:24px;\\r\\n}\\r\\n\\r\\nnav ul{\\r\\n    list-style-type: none;\\r\\n    margin :0;\\r\\n    padding : 0;\\r\\n}\\r\\n\\r\\nnav li{\\r\\n    margin: 50px 0;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\nnav ul li a{\\r\\n    color: #fff;\\r\\n    font-size:24px;\\r\\n    text-decoration: none;\\r\\n}\\r\\n\\r\\nnav ul li a:hover{\\r\\n    color: var(--secondary-color);\\r\\n    \\r\\n}\\r\\n\\r\\nnav .signin{\\r\\n    position: absolute;\\r\\n    top: 8px;\\r\\n    left:10px;\\r\\n}\\r\\n\\r\\nnav .signin a{\\r\\n    color: var(--secondary-color);\\r\\n    text-decoration: none;\\r\\n    font-size: 24px;\\r\\n}\\r\\n\\r\\nnav .settingBtn{\\r\\n    position: absolute;\\r\\n    top : 10px;\\r\\n    left: 25px;\\r\\n    font-size: 25px;\\r\\n    color:#fff\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./public/css/naviagtion.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

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

/***/ "./public/css/images/background-img.webp":
/*!***********************************************!*\
  !*** ./public/css/images/background-img.webp ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"230e66bbe3234f9735c33a6f8594a612.webp\");\n\n//# sourceURL=webpack:///./public/css/images/background-img.webp?");

/***/ }),

/***/ "./public/css/index.css":
/*!******************************!*\
  !*** ./public/css/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./public/css/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./public/css/index.css?");

/***/ }),

/***/ "./public/css/main-style.css":
/*!***********************************!*\
  !*** ./public/css/main-style.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main-style.css */ \"./node_modules/css-loader/dist/cjs.js!./public/css/main-style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./public/css/main-style.css?");

/***/ }),

/***/ "./public/css/naviagtion.css":
/*!***********************************!*\
  !*** ./public/css/naviagtion.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./naviagtion.css */ \"./node_modules/css-loader/dist/cjs.js!./public/css/naviagtion.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./public/css/naviagtion.css?");

/***/ }),

/***/ "./public/js/index.js":
/*!****************************!*\
  !*** ./public/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _originSource_nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./originSource/nav.js */ \"./public/js/originSource/nav.js\");\n/* harmony import */ var _originSource_nav_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_originSource_nav_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_main_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main-style.css */ \"./public/css/main-style.css\");\n/* harmony import */ var _css_main_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_main_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/header.css */ \"./public/css/header.css\");\n/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_header_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_naviagtion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/naviagtion.css */ \"./public/css/naviagtion.css\");\n/* harmony import */ var _css_naviagtion_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_naviagtion_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/index.css */ \"./public/css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\n// this is index.ejs's entry file\r\n\n\n//# sourceURL=webpack:///./public/js/index.js?");

/***/ }),

/***/ "./public/js/originSource/nav.js":
/*!***************************************!*\
  !*** ./public/js/originSource/nav.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const nav_btn = document.getElementById('toggle');\r\nnav_btn.addEventListener('click', ()=>{\r\n    document.body.classList.toggle('show-nav');\r\n})\r\n\n\n//# sourceURL=webpack:///./public/js/originSource/nav.js?");

/***/ })

/******/ });