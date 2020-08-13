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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/today.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./public/css/edit-modal.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/css/edit-modal.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Jura:wght@500&family=Thasadith:wght@700&display=swap&family=Bebas+Neue&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"\\r\\n:root{\\r\\n    --primary-color:#04B4AE;\\r\\n    --secondary-color:#FFBF00;\\r\\n}\\r\\n.modal-container{ /* modal 외부 */\\r\\n    background-color: rgba(0,0,0,0.6);\\r\\n    position: fixed;\\r\\n    display: none;\\r\\n    top:0;\\r\\n    left:0;\\r\\n    right:0;\\r\\n    bottom:0;\\r\\n    padding:20px;\\r\\n}\\r\\n\\r\\n.modal-container.show-modal{\\r\\n    display: block;\\r\\n}\\r\\n\\r\\n\\r\\n.modal{\\r\\n    font-family: 'Thasadith', sans-serif;\\r\\n    background-color: #fff;\\r\\n    position: absolute;\\r\\n    border-radius: 5px;\\r\\n    box-shadow:0 0 10px rgba(0, 0, 0, 0.3); \\r\\n    overflow: hidden;\\r\\n    top:50%;\\r\\n    left:50%;\\r\\n    max-width: 100%;\\r\\n    transform: translate(-50%, -50%);\\r\\n    width:500px;\\r\\n}\\r\\n\\r\\n\\r\\n.modal-header{\\r\\n    background-color: var(--primary-color);\\r\\n    font-size: 24px;\\r\\n    padding: 10px;\\r\\n    margin:0;\\r\\n}\\r\\n\\r\\n.close{\\r\\n    background-color: transparent;\\r\\n    position: absolute;\\r\\n    top:5px;\\r\\n    right:5px;\\r\\n    font-size: 25px;\\r\\n    padding:0 10px;\\r\\n}\\r\\n\\r\\n.modal-form input{\\r\\n    padding : 8px;\\r\\n}\\r\\n\\r\\n.modal-form #contents{\\r\\n    margin-top: 20px;\\r\\n    width: 80%;\\r\\n    font-size: 20px;\\r\\n    border:none;\\r\\n    border-bottom: 1px solid black;\\r\\n}\\r\\n\\r\\n.form-control{\\r\\n    display: block;\\r\\n    margin:15px 0;\\r\\n    text-align: center;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./public/css/edit-modal.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

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

/***/ "./node_modules/css-loader/dist/cjs.js!./public/css/naviagtion.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/css/naviagtion.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Jura:wght@500&family=Thasadith:wght@700&display=swap&family=Bebas+Neue&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"\\r\\n:root{\\r\\n    --primary-color:#04B4AE;\\r\\n    --secondary-color:#FFBF00;\\r\\n}\\r\\n\\r\\nnav{\\r\\n    background-color: rgba(0,0,0,0.3);\\r\\n    position: fixed;\\r\\n    top:0;\\r\\n    bottom:0;\\r\\n    left:0;\\r\\n    right:0;\\r\\n    display: none;\\r\\n    z-index: 2;\\r\\n}\\r\\n\\r\\nnav.show-nav{\\r\\n    display: block;\\r\\n}\\r\\n\\r\\nnav .nav-toggle{\\r\\n    background-color: rgba(0,0,0,0.5);   \\r\\n    font-size: 10px;\\r\\n    padding: 7px 10px;\\r\\n    border: none;\\r\\n    position: absolute;\\r\\n    top: 10px;\\r\\n    right: 5px;\\r\\n\\r\\n}\\r\\n\\r\\n\\r\\n.nav-container{\\r\\n    background-color: var(--primary-color);\\r\\n    width: 300px;\\r\\n    min-height: 100vh;\\r\\n    height:100%;\\r\\n    position: fixed;\\r\\n    top:0;\\r\\n    left:0;\\r\\n    font-family: 'Thasadith', sans-serif;\\r\\n}\\r\\n\\r\\n\\r\\n.nav-container .logo{\\r\\n    padding: 20px 0;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n\\r\\n.nav-container .logo p{\\r\\n    color: #fff;\\r\\n    font-size:24px;\\r\\n}\\r\\n\\r\\n.nav-container ul{\\r\\n    list-style-type: none;\\r\\n    margin :0;\\r\\n    padding : 0;\\r\\n}\\r\\n\\r\\n.nav-container li{\\r\\n    margin: 50px 0;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.nav-container ul li a{\\r\\n    color: #fff;\\r\\n    font-size:24px;\\r\\n    text-decoration: none;\\r\\n}\\r\\n\\r\\nnav ul li a:hover{\\r\\n    color: var(--secondary-color);\\r\\n    \\r\\n}\\r\\n\\r\\n\\r\\nnav .settingBtn{\\r\\n    position: absolute;\\r\\n    top : 10px;\\r\\n    left: 25px;\\r\\n    font-size: 25px;\\r\\n    color:#fff\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./public/css/naviagtion.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./public/css/todolist.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/css/todolist.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Jura:wght@500&family=Thasadith:wght@700&display=swap&family=Bebas+Neue&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"\\r\\n:root{\\r\\n    --primary-color:#04B4AE;\\r\\n    --secondary-color:#FFBF00;\\r\\n}\\r\\n\\r\\n.todo-container{\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    flex-direction: column;\\r\\n    position: relative;\\r\\n    margin : 50px auto;\\r\\n    padding : 15px;\\r\\n    max-width: 100%;\\r\\n    font-family: 'Thasadith', sans-serif;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.add-todo .newTask{\\r\\n    background-color: transparent;\\r\\n    border:none;\\r\\n    font-size:35px;\\r\\n    border-bottom:1px solid black;\\r\\n}\\r\\n\\r\\n.todo-list{\\r\\n    margin: 50px auto;\\r\\n    list-style-type: none;\\r\\n    font-size: 30px;\\r\\n    text-align: center;\\r\\n    width: 600px;\\r\\n    background-color: #fff;\\r\\n    border-radius: 5px;\\r\\n    box-shadow:0 5px 30px rgba(0,0,0,0.2);\\r\\n}\\r\\n\\r\\n.todo{\\r\\n    display: block;\\r\\n  position: relative;\\r\\n  padding: 1em 1em 1em 16%;\\r\\n  margin: 0 auto;\\r\\n  cursor: pointer;\\r\\n  border-bottom: solid 1px #ddd;\\r\\n}\\r\\n\\r\\n.todo:last-child{\\r\\n    border-bottom: none;\\r\\n}\\r\\n\\r\\n.todo__state{\\r\\n    cursor: pointer;\\r\\n    position: absolute;\\r\\n    top: 30px;\\r\\n    left: 15px;\\r\\n    width: 400px;\\r\\n    height:30px;\\r\\n    z-index: 1;\\r\\n    opacity: 0;\\r\\n}\\r\\n.todo #contents{\\r\\n    color: #135156;\\r\\n    -webkit-transition: all 0.4s linear 0.4s;\\r\\n    transition: all 0.4s linear 0.4s;\\r\\n}\\r\\n\\r\\n.todo__icon {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    bottom: 0;\\r\\n    left: 0;\\r\\n    width: 500px;\\r\\n    height: auto;\\r\\n    margin: auto;\\r\\n    fill: none;\\r\\n    stroke: #27FDC7;\\r\\n    stroke-width: 2;\\r\\n    stroke-linejoin: round;\\r\\n    stroke-linecap: round;\\r\\n  }\\r\\n  .todo__line,\\r\\n  .todo__box,\\r\\n  .todo__check {\\r\\n    -webkit-transition: stroke-dashoffset 0.8s cubic-bezier(0.9, 0, 0.5, 1);\\r\\n    transition: stroke-dashoffset 0.8s cubic-bezier(0.9, 0, 0.5, 1);\\r\\n  }\\r\\n  .todo__circle {\\r\\n    stroke: #27FDC7;\\r\\n    stroke-dasharray: 1 6;\\r\\n    stroke-width: 0;\\r\\n    -webkit-transform-origin: 13.5px 12.5px;\\r\\n            transform-origin: 13.5px 12.5px;\\r\\n    -webkit-transform: scale(0.4) rotate(0deg);\\r\\n            transform: scale(0.4) rotate(0deg);\\r\\n    -webkit-animation: none 0.8s linear;\\r\\n            animation: none 0.8s linear;\\r\\n  }\\r\\n  @-webkit-keyframes explode {\\r\\n    30% {\\r\\n      stroke-width: 3;\\r\\n      stroke-opacity: 1;\\r\\n      -webkit-transform: scale(0.8) rotate(40deg);\\r\\n              transform: scale(0.8) rotate(40deg);\\r\\n    }\\r\\n    100% {\\r\\n      stroke-width: 0;\\r\\n      stroke-opacity: 0;\\r\\n      -webkit-transform: scale(1.1) rotate(60deg);\\r\\n              transform: scale(1.1) rotate(60deg);\\r\\n    }\\r\\n  }\\r\\n  @keyframes explode {\\r\\n    30% {\\r\\n      stroke-width: 3;\\r\\n      stroke-opacity: 1;\\r\\n      -webkit-transform: scale(0.8) rotate(40deg);\\r\\n              transform: scale(0.8) rotate(40deg);\\r\\n    }\\r\\n    100% {\\r\\n      stroke-width: 0;\\r\\n      stroke-opacity: 0;\\r\\n      -webkit-transform: scale(1.1) rotate(60deg);\\r\\n              transform: scale(1.1) rotate(60deg);\\r\\n    }\\r\\n  }\\r\\n  .todo__box {\\r\\n    stroke-dasharray: 56.1053, 56.1053;\\r\\n    stroke-dashoffset: 0;\\r\\n    -webkit-transition-delay: 0.16s;\\r\\n            transition-delay: 0.16s;\\r\\n  }\\r\\n  .todo__check {\\r\\n    stroke: #27FDC7;\\r\\n    stroke-dasharray: 9.8995, 9.8995;\\r\\n    stroke-dashoffset: 9.8995;\\r\\n    -webkit-transition-duration: 0.32s;\\r\\n            transition-duration: 0.32s;\\r\\n  }\\r\\n  .todo__line {\\r\\n    stroke-dasharray: 168, 1684;\\r\\n    stroke-dashoffset: 168;\\r\\n  }\\r\\n  .todo__circle {\\r\\n    -webkit-animation-delay: 0.56s;\\r\\n            animation-delay: 0.56s;\\r\\n    -webkit-animation-duration: 0.56s;\\r\\n            animation-duration: 0.56s;\\r\\n  }\\r\\n  .todo__state:checked ~ #contents {\\r\\n    -webkit-transition-delay: 0s;\\r\\n            transition-delay: 0s;\\r\\n    color: #5EBEC1;\\r\\n    opacity: 0.6;\\r\\n  }\\r\\n  .todo__state:checked~ .todo__icon .todo__box {\\r\\n    stroke-dashoffset: 56.1053;\\r\\n    -webkit-transition-delay: 0s;\\r\\n            transition-delay: 0s;\\r\\n  }\\r\\n  .todo__state:checked ~ .todo__icon .todo__line {\\r\\n    stroke-dashoffset: -8;\\r\\n  }\\r\\n  .todo__state:checked ~ .todo__icon .todo__check {\\r\\n    stroke-dashoffset: 0;\\r\\n    -webkit-transition-delay: 0.48s;\\r\\n            transition-delay: 0.48s;\\r\\n  }\\r\\n  .todo__state:checked ~ .todo__icon .todo__circle {\\r\\n    -webkit-animation-name: explode;\\r\\n            animation-name: explode;\\r\\n  }\\r\\n\\r\\n.add-todo .newTask{\\r\\n    background-color: transparent;\\r\\n    border:none;\\r\\n    font-size:35px;\\r\\n    border-bottom:1px solid black;\\r\\n}\\r\\n\\r\\n\\r\\n.radio-box{\\r\\n    margin-top: 20px;\\r\\n    padding: 5px;\\r\\n}\\r\\n\\r\\n.radio-box :hover{\\r\\n    color: #04B4AE;\\r\\n}\\r\\n\\r\\n.dropdown{\\r\\n    float: right;\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\n.dropdown .dropbtn{\\r\\n    font-size: 16px;\\r\\n    border: none;\\r\\n    outline: none;\\r\\n    color: #04B4AE;\\r\\n    padding: 14px 16px;\\r\\n    background-color: inherit;\\r\\n    font-family: inherit;\\r\\n    margin:0;\\r\\n}\\r\\n\\r\\n.dropdown-content{\\r\\n    display: none;\\r\\n    position : absolute;\\r\\n    background-color: #f9f9f9;\\r\\n    min-width:130px;\\r\\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\\r\\n    z-index: 1;\\r\\n}\\r\\n\\r\\n\\r\\n.dropdown-content a{\\r\\n    cursor: pointer;\\r\\n    color:black;\\r\\n    padding: 12px 16px;\\r\\n    text-decoration: none;\\r\\n    display: block;\\r\\n    text-align: left;\\r\\n    float:none;\\r\\n    font-size: 20px;\\r\\n}\\r\\n\\r\\n.dropdown-content a:hover{\\r\\n    background-color: #ddd;\\r\\n}\\r\\n\\r\\n.dropdown:hover .dropdown-content{\\r\\n    display: block;\\r\\n}\\r\\n\\r\\n#clear.removed{\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.todo-list.hidden{\\r\\n   display: none;\\r\\n}\\r\\n\\r\\n\\r\\n#sort{\\r\\n   text-decoration: none;\\r\\n   position: relative;\\r\\n   color: #04B4AE;\\r\\n   left:230px;\\r\\n   top:45px;\\r\\n   background-color: #ddd;\\r\\n   margin-bottom: 5px;\\r\\n   border-radius: 7px; \\r\\n   padding:5px;\\r\\n}\\r\\n\\r\\n#sort:hover{\\r\\n    background-color: #04B4AE;\\r\\n    color: #ddd;\\r\\n}\\r\\n\\r\\n#sort.removed{\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n@media (max-width:700px){\\r\\n    #sort{\\r\\n        left: 140px;\\r\\n    }\\r\\n    .todo-list{\\r\\n        width: 400px;\\r\\n    }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./public/css/todolist.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./public/css/edit-modal.css":
/*!***********************************!*\
  !*** ./public/css/edit-modal.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./edit-modal.css */ \"./node_modules/css-loader/dist/cjs.js!./public/css/edit-modal.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./public/css/edit-modal.css?");

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

/***/ "./public/css/naviagtion.css":
/*!***********************************!*\
  !*** ./public/css/naviagtion.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./naviagtion.css */ \"./node_modules/css-loader/dist/cjs.js!./public/css/naviagtion.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./public/css/naviagtion.css?");

/***/ }),

/***/ "./public/css/todolist.css":
/*!*********************************!*\
  !*** ./public/css/todolist.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./todolist.css */ \"./node_modules/css-loader/dist/cjs.js!./public/css/todolist.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./public/css/todolist.css?");

/***/ }),

/***/ "./public/js/originSource/header.js":
/*!******************************************!*\
  !*** ./public/js/originSource/header.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const headerBar = document.querySelector('header');\r\nconst sticky = headerBar.offsetTop;\r\n\r\nwindow.addEventListener(\"scroll\",editHeader);\r\n\r\nfunction editHeader(){\r\n    console.log(sticky);\r\n    if(window.pageYOffset > sticky){\r\n        headerBar.classList.add(\"sticky\");\r\n    }else{\r\n        headerBar.classList.remove(\"sticky\");\r\n    }\r\n}\n\n//# sourceURL=webpack:///./public/js/originSource/header.js?");

/***/ }),

/***/ "./public/js/originSource/nav.js":
/*!***************************************!*\
  !*** ./public/js/originSource/nav.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const nav_bar= document.querySelector('nav');\r\nconst close_btn =document.getElementById('nav-toggle');\r\nconst nav_btn = document.getElementById('toggle');\r\n\r\nnav_btn.addEventListener('click', ()=>{\r\n    nav_bar.classList.add('show-nav');\r\n})\r\n\r\nclose_btn.addEventListener('click', ()=>{\r\n    nav_bar.classList.remove('show-nav');\r\n})\r\n\r\nwindow.addEventListener('click', (e)=>{\r\n    console.log(e.target);\r\n    if(e.target.className ==='show-nav'){\r\n        nav_bar.classList.remove('show-nav');\r\n    } \r\n})\n\n//# sourceURL=webpack:///./public/js/originSource/nav.js?");

/***/ }),

/***/ "./public/js/originSource/todayTodo.js":
/*!*********************************************!*\
  !*** ./public/js/originSource/todayTodo.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const ul = document.querySelector('.todo-list');\r\nconst clearBtn= document.querySelector('#clear');\r\nconst modal_container =document.querySelector('.modal-container'); \r\nconst close = document.querySelector('.close');\r\nconst csrf=document.querySelector('[name=_csrf]').value;\r\nconst sortBtn = document.querySelector('#sort');\r\n// ---------------- Helper 함수 --------------------------------------\r\nwindow.closeModal= function (){ // modal 닫는 함수 \r\n    modal_container.classList.remove('show-modal');\r\n}\r\n\r\n// ul 삭제해주는 함수 \r\nwindow.removeUl=function (){\r\n    ul.innerHTML='';\r\n    ul.classList.add('hidden'); // ul 안보이게 바꾸기 \r\n    clearBtn.classList.add('removed'); // clear all button 안보이게 바꾸기 \r\n    sortBtn.classList.add('removed'); // /sort button 안보이게 바꾸기 \r\n}\r\n\r\n// li 변경 함수 \r\nwindow.updateli=function(li,contents,id)\r\n{\r\n    li.innerHTML= \r\n    `<input type=\"checkbox\" id=\"doneToggle\" class=\"todo__state\" onClick=\"DoneCheck(this)\">\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 200 25\" class=\"todo__icon\">\r\n            <use xlink:href=\"#todo__line\" class=\"todo__line\"></use>\r\n            <use xlink:href=\"#todo__box\" class=\"todo__box\"></use>\r\n            <use xlink:href=\"#todo__check\" class=\"todo__check\"></use>\r\n            <use xlink:href=\"#todo__circle\" class=\"todo__circle\"></use>\r\n        </svg>\r\n        <input type=\"hidden\" name=\"postId\" id=\"postId\" value=\"${id}\"\">\r\n        <span id='contents'>${contents}</span>\r\n        <div class=\"dropdown\">\r\n            <button class=\"dropbtn\">\r\n                <i class=\"fas fa-ellipsis-v\"></i>\r\n            </button>\r\n            <div class=\"dropdown-content\">\r\n                <a href=\"#\" onclick=\"removeOne(this);return false;\">delete</a>\r\n                <a href=\"#\" onclick=\"popUpModal(this);return false;\" >edit</a>\r\n            </div>\r\n        </div>\r\n    `\r\n}\r\n\r\n// Edit 후 변경된 contents를 적용해주는 함수 \r\nwindow.updatedUI=function(contents, id)\r\n{\r\n    const AllToDos=ul.querySelectorAll('li'); // ul에서 li들을 모두 가져옴 \r\n    AllToDos.forEach(li=>{\r\n        if(id === li.querySelector('#postId').value){  // li 태그 중에서 변경된 항목의 id와일치하는 곳의 html을 변경해준다.\r\n           updateli(li,contents,id);\r\n            return;\r\n        }\r\n    })\r\n}\r\n\r\n// ----------------------- Onclick event 함수 ------------------------------\r\n// to do 추가 함수 \r\nwindow.addTodo=async function(dom){\r\n    const contents = document.querySelector('input[name=\"task\"]').value;\r\n    if(contents.length <=0){ // contents 입력 안하고 submit 할 시\r\n        return alert('please type contents of your todo!');\r\n    }\r\n    let importance=document.querySelector('input[name=\"importance\"]:checked');\r\n    if(importance===null){ // importance check 안할시 not 으로 자동 설정 \r\n        importance='not';\r\n    }else{\r\n        importance=importance.id;\r\n    }\r\n    const sendingData = {contents: contents, importance: importance};\r\n    const csrf=dom.parentNode.querySelector('[name=_csrf]').value;\r\n    const method =\"POST\"; // post request 보낸다. \r\n    try{\r\n        const result=await fetch('/add-todo',\r\n        {\r\n            method:method,\r\n            body:JSON.stringify(sendingData),\r\n            headers:{\r\n                'Accept': 'application/json',\r\n                'csrf-token':csrf,\r\n                'Content-Type':'application/json;charset=utf-8'\r\n            }\r\n        });\r\n        const data= await result.json(); \r\n        if(data.message === 'succeed'){ // dom 에다가 추가 \r\n            const post = data.post;\r\n            const li = document.createElement('li'); \r\n            if(ul.classList.contains('hidden')){ // 첫번째 todo로 등록될 경우 \r\n                ul.classList.remove('hidden'); // 숨겨졌던 ul visible하게 바꾸기 \r\n            }\r\n            if(clearBtn.classList.contains('removed')){ // 첫번째 todo 로 등록될 경우\r\n                clearBtn.classList.remove('removed'); //숨겨졌던 clear all visible하게 바꾸기 \r\n            } \r\n            if(sortBtn.classList.contains('removed')){\r\n                sortBtn.classList.remove('removed');\r\n            }\r\n            li.classList.add('todo');\r\n            updateli(li,post.contents,post._id);\r\n            ul.appendChild(li);\r\n            document.querySelector('input[name=\"task\"]').value='';\r\n        }\r\n    }catch(err){\r\n        console.log(err);\r\n    }\r\n}\r\n\r\n// check status 저장 -> html에서 해결해줌 \r\n// toto is done 체크 저장 함수 \r\nwindow.DoneCheck=async function(dom){\r\n    const li = dom.parentNode; // is done 체크된 항목 \r\n    const checked =dom.checked;\r\n    const id = li.querySelector('input[name=\"postId\"]').value;\r\n    if(checked===true){ // 체크 되었다면 \r\n        li.classList.add('done'); // done 클래스 추가 \r\n    }\r\n    else{ // uncheck 되었다면 \r\n        li.classList.remove('done'); //done class 삭제 \r\n    }\r\n    method='PUT';\r\n    sendingData ={done:checked, id:id };\r\n    const result = await fetch('/done-check',{  // 데이터베이스에 변경 사항 저장 \r\n        method:method,\r\n        body:JSON.stringify(sendingData),\r\n        headers:{\r\n            'Accept': 'application/json',\r\n            'csrf-token':csrf,\r\n            'Content-Type':'application/json;charset=utf-8'\r\n        }\r\n    })\r\n    const data = await result.json();\r\n}\r\n\r\n\r\n// to do 모두 삭제 함수 \r\nwindow.clearAll=async function (dom){\r\n    const method = \"DELETE\"\r\n   try{\r\n    const result = await fetch('/delete-all', \r\n    {\r\n        method:method,\r\n        headers:{\r\n            'Accept': 'application/json',\r\n            'csrf-token':csrf\r\n        }\r\n    });\r\n    const  data = await result.json();\r\n    removeUl();\r\n    }catch(err){console.log(err)}\r\n}\r\n\r\n// 특정 항목 삭제 함수 \r\nwindow.removeOne=async function(dom){\r\n    const dropdown = dom.parentNode;\r\n    const li =dropdown.parentNode.parentNode;\r\n    const id = li.querySelector('#postId').value;\r\n    const method = 'DELETE';\r\n    try{\r\n        const result =await fetch('/delete-one/'+id,\r\n        {\r\n            method:method,\r\n            headers:{\r\n                'Accept': 'application/json',\r\n                'csrf-token':csrf\r\n            }\r\n        })\r\n        const data = await result.json();\r\n        ul.removeChild(li); // 삭제되었으니 해당 li 삭제 \r\n        if(data.length === 0){ // 전달받은 남은 post 개수가 0이라면 ul과 button도 삭제해줘야함 \r\n            removeUl();\r\n        }\r\n    }catch(err){\r\n        console.log(err);\r\n    }\r\n    \r\n}\r\n// modal을 띄우는 함수\r\nwindow.popUpModal=function(dom)\r\n{\r\n    const dropdown = dom.parentNode;\r\n    const li =dropdown.parentNode.parentNode;\r\n    const id = li.querySelector('#postId').value;\r\n    const originContents = li.querySelector('#contents').innerText;\r\n    const modal_contents = modal_container.querySelector('.modal-content');\r\n    const ContentsInput= modal_contents.querySelector('#contents');\r\n    ContentsInput.value=originContents; // 원래 contents 내용을 input value로 담아놓기\r\n    localStorage.setItem('updateId', id); // 변경하는 항목의 id를 저장해놓기 \r\n    modal_container.classList.add('show-modal');\r\n}\r\n\r\n\r\n// modal 내에서 edit submit을 누르면 실행되는 함수 \r\nwindow.updatePost=async function(dom){\r\n    const id = localStorage.getItem('updateId'); // localstroage 에 저장해놓은 id 가져오기 \r\n    const modal_contents = modal_container.querySelector('.modal-content');\r\n    const contents = modal_contents.querySelector('#contents').value;\r\n    const importance =modal_contents.querySelector('input[name=\"importance\"]:checked').id;\r\n    const method=\"PUT\";\r\n    const sendingData={id:id, contents: contents, importance:importance};\r\n    if(contents.length <=0){ // contents 입력 안하고 submit 할 시\r\n        return alert('please type contents of your todo!');\r\n    }\r\n    if(importance===null){ // importance check 안할시 not 으로 자동 설정 \r\n        importance='not';\r\n    }\r\n    try{\r\n        const result = await fetch('/update-post',\r\n        {\r\n            method:method,\r\n            headers:{\r\n                'Accept': 'application/json',\r\n                'csrf-token':csrf,\r\n                'Content-Type':'application/json;charset=utf-8'\r\n            },\r\n            body:JSON.stringify(sendingData)\r\n        })\r\n        const data = await result.json();\r\n        updatedUI(contents,id);\r\n        closeModal(); // modal 닫기\r\n    }catch(err){\r\n        console.log(err);\r\n    }\r\n}\r\n\r\nwindow.sortByImportance=async function () // 중요도 순으로 정렬해주는 함수 \r\n{\r\n    const result = await fetch('/sort-post');\r\n    const data = await result.json();\r\n    const post = data.post;\r\n    ul.innerHTML=''; // 일단 ul 모두 비우고, \r\n    post.forEach(p=>{ // 새로 받은 값으로 ul - li 채우기 \r\n        const li = document.createElement('li');\r\n        li.classList.add('todo');\r\n        updateli(li,p.contents, p._id); // li 새로 생성 \r\n        ul.appendChild(li);\r\n    });\r\n}\r\n\r\n// --------- event listeners ----------------\r\nclose.addEventListener('click',closeModal);\r\n\r\n// modal 외부를 눌렀을 때도 modal 닫기\r\nwindow.addEventListener('click',(e)=>{\r\n    e.target == modal_container? closeModal() : false;\r\n})\n\n//# sourceURL=webpack:///./public/js/originSource/todayTodo.js?");

/***/ }),

/***/ "./public/js/today.js":
/*!****************************!*\
  !*** ./public/js/today.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _originSource_nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./originSource/nav.js */ \"./public/js/originSource/nav.js\");\n/* harmony import */ var _originSource_nav_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_originSource_nav_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _originSource_todayTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./originSource/todayTodo.js */ \"./public/js/originSource/todayTodo.js\");\n/* harmony import */ var _originSource_todayTodo_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_originSource_todayTodo_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_main_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/main-style.css */ \"./public/css/main-style.css\");\n/* harmony import */ var _css_main_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_main_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/header.css */ \"./public/css/header.css\");\n/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_header_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_naviagtion_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/naviagtion.css */ \"./public/css/naviagtion.css\");\n/* harmony import */ var _css_naviagtion_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_naviagtion_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_todolist_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/todolist.css */ \"./public/css/todolist.css\");\n/* harmony import */ var _css_todolist_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_todolist_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _css_edit_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/edit-modal.css */ \"./public/css/edit-modal.css\");\n/* harmony import */ var _css_edit_modal_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_edit_modal_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _originSource_header_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./originSource/header.js */ \"./public/js/originSource/header.js\");\n/* harmony import */ var _originSource_header_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_originSource_header_js__WEBPACK_IMPORTED_MODULE_7__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./public/js/today.js?");

/***/ })

/******/ });