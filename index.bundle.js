/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/styles.less":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/styles.less ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: #121212;\\n}\\n.header {\\n  display: flex;\\n  justify-content: space-between;\\n  width: 100%;\\n  height: 5vw;\\n  background-color: #3b3b3b;\\n  opacity: 80%;\\n  box-shadow: 0px 11px 15px -7px black;\\n}\\n.header .head-text {\\n  color: white;\\n  font-size: 2.5em;\\n  padding-top: 5px;\\n  padding-left: 15px;\\n}\\n.header .git-text {\\n  color: white;\\n  height: fit-content;\\n  font-size: 1em;\\n  padding-top: 45px;\\n  padding-right: 10px;\\n}\\n.header #git-icon {\\n  cursor: pointer;\\n}\\n.app-body {\\n  display: flex;\\n  justify-content: space-between;\\n  margin-top: 15px;\\n  height: 400px;\\n  width: 80vw;\\n}\\n.app-body .list-area {\\n  height: 30vw;\\n  width: 75vw;\\n}\\n.app-body .card-list {\\n  margin-top: 20px;\\n  height: inherit;\\n  overflow-y: auto;\\n}\\n.app-body .add-button {\\n  cursor: pointer;\\n  width: fit-content;\\n}\\n.app-body .add-button #add-item {\\n  margin-top: 425px;\\n}\\n.side-bar {\\n  color: white;\\n  border-right: 1px solid white;\\n  width: 30vw;\\n  height: 35vw;\\n}\\n.side-bar .project-list-title {\\n  border-bottom: 1px dotted white;\\n  font-size: 24px;\\n  margin-top: 0px;\\n}\\n.side-bar .project-list {\\n  height: 435px;\\n  overflow-y: auto;\\n  margin-right: 20px;\\n}\\n.side-bar .project-list .project-card {\\n  display: flex;\\n  height: fit-content;\\n  background: #6b6b6b;\\n  margin: 10px;\\n  padding: 5px;\\n}\\n.side-bar .project-list .project-card :hover {\\n  border: 2px solid blue;\\n  color: blue;\\n  font-weight: bold;\\n  display: flex;\\n  height: fit-content;\\n  background: #6b6b6b;\\n}\\n.side-bar .project-list .project-card .project-name {\\n  font-size: 20px;\\n  width: 100%;\\n  color: black;\\n  cursor: pointer;\\n}\\n.side-bar .project-list .project-card .remove-list {\\n  display: block;\\n  background-color: #787878;\\n  outline: black solid 1px;\\n  border: none;\\n  color: red;\\n  cursor: pointer;\\n  text-shadow: 1px 1px black;\\n}\\n.side-bar .project-selected {\\n  border: 2px solid blue;\\n  color: blue;\\n  font-weight: bold;\\n  display: flex;\\n  height: fit-content;\\n  background: #6b6b6b;\\n  margin: 10px;\\n  padding: 5px;\\n}\\n.side-bar .project-selected .project-name {\\n  font-size: 20px;\\n  width: 100%;\\n  color: black;\\n  cursor: pointer;\\n}\\n.side-bar .project-selected .remove-list {\\n  display: block;\\n  background-color: #787878;\\n  outline: black solid 1px;\\n  border: none;\\n  color: red;\\n  cursor: pointer;\\n  text-shadow: 1px 1px black;\\n}\\n.side-bar .add-project {\\n  height: 20px;\\n  cursor: pointer;\\n  background: #787878;\\n  color: black;\\n  text-align: center;\\n  padding: 10px;\\n  border: 1px solid black;\\n}\\n.side-bar .add-project :hover {\\n  color: white;\\n  border: 1px solid white;\\n}\\n.todo-form {\\n  position: absolute;\\n  height: fit-content;\\n  width: 400px;\\n  border: 1px solid black;\\n  box-shadow: 5px 11px 15px -7px black;\\n  background-color: #332940;\\n  text-align: center;\\n  margin-top: 4vw;\\n  margin-left: 40vw;\\n}\\n.todo-form .form-text {\\n  font-size: 20px;\\n  color: white;\\n  padding: 5px;\\n}\\n.todo-form .form-submit {\\n  cursor: pointer;\\n  display: block;\\n  text-align: center;\\n  margin-top: 20px;\\n  margin-bottom: 30px;\\n  margin-left: 170px;\\n}\\n.todo-card {\\n  display: flex;\\n  cursor: pointer;\\n  background-color: #525252;\\n  color: white;\\n  box-shadow: 0px 11px 15px -7px black;\\n  justify-content: space-between;\\n  padding: 10px 5px 0px 5px;\\n  margin: 15px;\\n  height: 30px;\\n  width: 650px;\\n}\\n.completed {\\n  display: flex;\\n  color: green;\\n  text-decoration: line-through;\\n  outline: green solid 1px;\\n  background: #121212;\\n  justify-content: space-between;\\n  padding: 10px 5px 0px 5px;\\n  margin: 15px;\\n  height: 30px;\\n  width: 650px;\\n}\\n.card-buttons {\\n  height: 30px;\\n  width: fit-content;\\n}\\n.card-buttons .complete {\\n  cursor: pointer;\\n  background-color: green;\\n  color: white;\\n  height: fit-content;\\n  width: fit-content;\\n}\\n.card-buttons .remove {\\n  cursor: pointer;\\n  background-color: red;\\n  color: black;\\n  height: fit-content;\\n  width: fit-content;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://list-it/./src/styles.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://list-it/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles.less":
/*!*************************!*\
  !*** ./src/styles.less ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_styles_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./styles.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/styles.less\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_styles_less__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_styles_less__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_styles_less__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_styles_less__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://list-it/./src/styles.less?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://list-it/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://list-it/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://list-it/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://list-it/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://list-it/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://list-it/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/2x/outline_add_circle_outline_white_24dp.png":
/*!**********************************************************!*\
  !*** ./src/2x/outline_add_circle_outline_white_24dp.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8e35a78632716a12637f.png\";\n\n//# sourceURL=webpack://list-it/./src/2x/outline_add_circle_outline_white_24dp.png?");

/***/ }),

/***/ "./src/GitHub-Mark-Light-32px.png":
/*!****************************************!*\
  !*** ./src/GitHub-Mark-Light-32px.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"436194cd245fc1e751e0.png\";\n\n//# sourceURL=webpack://list-it/./src/GitHub-Mark-Light-32px.png?");

/***/ }),

/***/ "./src/List.js":
/*!*********************!*\
  !*** ./src/List.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n//List class for all user created To-Do Lists\nclass List {\n\n    constructor(name){\n        this.name=name;\n        this.items=[];\n        this.isDisplayed=false;\n        this.isListed=false;\n    }\n\n    displayLists(listArr){\n\n        for (let i=0; i<listArr.length; i++){\n\n            if(!listArr[i].isListed) {\n\n                const projectList= document.querySelector(\".project-list\");\n                const projectCard = document.createElement(\"div\");\n                const projectName= document.createElement(\"div\");\n                const remove = document.createElement(\"button\");\n\n                projectCard.classList.add(\"project-card\");\n               \n              \n                projectName.classList.add(\"project-name\");\n                remove.classList.add(\"remove-list\");\n                projectName.textContent = listArr[i].name;\n                remove.textContent=\"Delete\";\n\n                projectCard.appendChild(projectName);\n                projectList.appendChild(projectCard);\n\n                if(i==0){\n                    projectCard.classList.add(\"project-selected\");\n                }\n\n                if(i>0){\n                    projectCard.addEventListener(\"mouseenter\",()=>{\n                        projectCard.appendChild(remove);\n                    });\n                    \n                    projectCard.addEventListener(\"mouseleave\",()=>{\n                        projectCard.removeChild(remove);\n                    });\n\n                };\n                \n\n                remove.addEventListener(\"click\",()=>{\n                    const cardList = document.querySelector(\".card-list\");\n\n                    while(cardList.firstChild){\n                        cardList.removeChild(cardList.lastChild);\n                    };\n                \n                    projectList.removeChild(projectCard);\n                    this.removeItem(listArr[i],listArr);\n                    this.displayLists(listArr);\n                    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(listArr);\n                    console.log(listArr);\n                });\n\n                projectName.addEventListener(\"click\",()=>{\n                    const cardList = document.querySelector(\".card-list\");\n                    const projects =document.querySelectorAll(\".project-card\");\n\n                    while(cardList.firstChild){\n                        cardList.removeChild(cardList.lastChild);\n                    };\n\n                    listArr.forEach(list => list.isDisplayed=false);\n                  \n                    for (let k=0; k<projects.length;k++) {\n                        projects[k].classList.remove(\"project-selected\");\n                    }\n\n                    projectCard.classList.add(\"project-selected\");\n                 \n                   \n                    listArr[i].isDisplayed=true;\n                    \n                    listArr[i].displayItems(listArr[i].items);\n                    \n                }); \n            }\n\n            listArr[i].isListed=true;\n        }\n    }\n\n\n    addItem(item){\n        this.items.push(item);\n    };\n\n\n    displayItems(list) {\n\n        const cardList= document.querySelector(\".card-list\");\n        list.forEach(item => item.listed=false);\n\n        while(cardList.firstChild){\n            cardList.removeChild(cardList.lastChild);\n        }\n\n        for (let i =0; i<list.length;i++){\n\n            if (!list[i].listed) {\n\n                const card = document.createElement('div');\n                let cardName = document.createElement(\"div\");\n                let cardDesc = document.createElement(\"div\");\n                let cardDueDate = document.createElement(\"div\");\n                let cardCreatedDate = document.createElement(\"div\");\n                card.classList.add(\"todo-card\");\n\n                cardName.textContent=list[i].name;\n                cardDesc.textContent=list[i].desc;\n                cardDueDate.textContent=`Due by: ${list[i].dueDate}`;\n                cardCreatedDate.textContent=`Created: ${list[i].createdDate}`;\n    \n                card.appendChild(cardName);\n                card.appendChild(cardDesc);\n                card.appendChild(cardDueDate);\n                card.appendChild(cardCreatedDate);\n\n                cardList.appendChild(card);\n\n                card.addEventListener(\"mouseenter\",()=>{\n\n                    let buttonDiv = document.createElement(\"div\");\n                    const complete = document.createElement(\"button\");\n                    const remove = document.createElement(\"button\");\n        \n                    buttonDiv.classList.add(\"card-buttons\");\n                    complete.classList.add(\"complete\");\n                    remove.classList.add(\"remove\")\n                    complete.textContent=\"Complete\";\n                    remove.textContent=\"Delete\";\n                    buttonDiv.appendChild(complete);\n                    buttonDiv.appendChild(remove);\n                    card.appendChild(buttonDiv);\n\n                    complete.addEventListener(\"click\", ()=>{\n                  \n\n                        if(complete.textContent=\"complete\") {\n                            complete.textContent=\"In Progress\";\n                            card.classList.remove(\"todo-card\");\n                            card.classList.add(\"completed\");\n                        }\n                        else if( complete.textContent=\"In Progress\") {\n                            complete.textContent=\"complete\";\n                            card.classList.add(\"todo-card\");\n                            card.classList.remove(\"completed\");\n                        }\n                    });\n\n                    remove.addEventListener(\"click\",()=>{\n                        cardList.removeChild(card);\n                        this.removeItem(list[i],list);\n                        this.displayItems(list);\n                        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(_index_js__WEBPACK_IMPORTED_MODULE_0__.toDoLists);\n                    })\n                });\n                \n                card.addEventListener(\"mouseleave\", ()=>{\n                    const buttonDiv = document.querySelector(\".card-buttons\");\n                    card.removeChild(buttonDiv);\n                });  \n            };\n\n            list[i].listed = true;\n        };\n\n    };\n    \n    removeItem(item,list) {\n    \n        let index = list.indexOf(item)\n        if(list.length===1){\n            list.pop()\n        }\n        else{\n            list.splice(index,1);\n        }\n        return list;\n    };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);\n\n//# sourceURL=webpack://list-it/./src/List.js?");

/***/ }),

/***/ "./src/ToDoItem.js":
/*!*************************!*\
  !*** ./src/ToDoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*Factory Function that creates a ToDo Object with a name, \na description, a due date, and a date that the object was created.*/\n\nconst ToDoItem = (name,desc,dueDate,createdDate,listed) => {\n\n    \n    const getTodayDate = ()=>{\n        let date = new Date();\n        let today = String( String(date.getFullYear())+ \"-\"+ '0'+String((date.getMonth()+1))+ \"-\"+ String(date.getDate()));\n\n        return today;\n    }\n\n    return {name,desc,dueDate,createdDate,listed,getTodayDate}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoItem);\n\n//# sourceURL=webpack://list-it/./src/ToDoItem.js?");

/***/ }),

/***/ "./src/createToDoItem.js":
/*!*******************************!*\
  !*** ./src/createToDoItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ToDoItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoItem.js */ \"./src/ToDoItem.js\");\n\n\n\n\n\n//Function that creates a To Do Item object and returns the object with the user inputted values\nfunction createToDoItem () {\n\n    const nameInput = document.querySelector('#name-input');\n    const descInput = document.querySelector('#desc-input');\n    const dateInput = document.querySelector('#date-input');\n\n    \n        let name = nameInput.value;\n        let desc = descInput.value;\n        let date = dateInput.value;\n\n        let item = (0,_ToDoItem_js__WEBPACK_IMPORTED_MODULE_0__.default)(name,desc,date);\n        let today = item.getTodayDate();\n\n        item.listed = false;\n        item.createdDate = today;\n\n        //if(compareAsc(parseISO(date),today)!=-1){\n          //  alert(\"Due Date cannot be before today! Enter new due date\");\n        \n            //  return;\n         //}\n       \n        return item;\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createToDoItem);\n\n//# sourceURL=webpack://list-it/./src/createToDoItem.js?");

/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _2x_outline_add_circle_outline_white_24dp_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./2x/outline_add_circle_outline_white_24dp.png */ \"./src/2x/outline_add_circle_outline_white_24dp.png\");\n/* harmony import */ var _GitHub_Mark_Light_32px_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GitHub-Mark-Light-32px.png */ \"./src/GitHub-Mark-Light-32px.png\");\n\n\n\n//Display Module that renders app layout and forms to the page\nconst Display = (()=>{\n\n    //Displays the web app header.\n    const header = ()=> {\n        const header = document.createElement('div');\n        const title = document.createElement('div');\n        const git = document.createElement('div');\n        const gitLink = document.createElement('a');\n\n        header.classList.add(\"header\");\n        title.classList.add(\"head-text\");\n        git.classList.add(\"git-text\");\n\n        title.textContent=\"List-it\";\n        git.textContent=\"Check out my github for more  \";\n\n        const gitIcon = new Image();\n        gitIcon.src=_GitHub_Mark_Light_32px_png__WEBPACK_IMPORTED_MODULE_1__;\n        gitIcon.id=\"git-icon\";\n\n        gitLink.href=\"https://github.com/tmullin6\";\n\n        document.body.appendChild(header);\n        header.appendChild(title);\n        header.appendChild(git);\n        gitLink.appendChild(gitIcon);\n        git.appendChild(gitLink);\n        \n    };\n\n    //Displays the main body of the web app.\n    const appBody =()=>{\n\n        const appArea = document.createElement('div');\n        const sideBar = document.createElement('div');\n        const projectTitles = document.createElement(\"p\");\n        const projectList = document.createElement(\"div\");\n        const addProject = document.createElement('div');\n        const toDoArea = document.createElement('div');\n    \n        const cardList = document.createElement('div');\n        const addItemDiv = document.createElement('div');\n    \n        appArea.classList.add(\"app-body\");\n        toDoArea.classList.add(\"list-area\");\n        cardList.classList.add(\"card-list\");\n    \n        sideBar.classList.add(\"side-bar\");\n        projectTitles.classList.add(\"project-list-title\");\n        projectList.classList.add(\"project-list\");\n        addProject.classList.add(\"add-project\");\n       \n       \n        projectTitles.textContent=\"Your Lists:\"\n        addProject.textContent = \"Add New List\";\n    \n        const addItem = new Image();\n        addItem.src=_2x_outline_add_circle_outline_white_24dp_png__WEBPACK_IMPORTED_MODULE_0__;\n        addItem.id =\"add-item\";\n    \n        addItemDiv.classList.add('add-button');\n        document.body.appendChild(appArea);\n        appArea.appendChild(sideBar);\n        appArea.appendChild(toDoArea);\n        appArea.appendChild(addItemDiv);\n        toDoArea.appendChild(cardList);\n        addItemDiv.appendChild(addItem);\n    \n        sideBar.appendChild(projectTitles);\n        sideBar.appendChild(projectList);\n        sideBar.appendChild(addProject);\n    };\n\n    //Displays a form for the user to input To-Do Item information.\n    const toDoForm =(list)=> {\n        const appArea = document.querySelector('.app-body');\n\n        //Creates all DOM Elements of the Input Form\n        const todoForm = document.createElement(\"div\");\n        const title = document.createElement(\"p\");\n        const name = document.createElement('p');\n        const enterName = document.createElement('input');\n        const desc = document.createElement('p');\n        const enterDesc = document.createElement('input');\n        const dueDate = document.createElement('p');\n        const enterDate = document.createElement('input');\n        const submit = document.createElement('button');\n    \n        //Text Content for Input Headers\n        title.textContent=`Add Task to ${list}`;\n        name.textContent=\"Task:\"\n        desc.textContent=\"Description:\";\n        dueDate.textContent=\"Select Due Date:\";\n        submit.textContent=\"Submit\";\n    \n        title.classList.add(\"form-text\");\n        name.classList.add(\"form-text\");\n        desc.classList.add(\"form-text\");\n        dueDate.classList.add(\"form-text\");\n    \n        //Set Type, Placeholder text, and Id for each input element\n        enterName.type=\"input\";\n        enterName.placeholder = \"Enter Task\";\n        enterName.id = \"name-input\";\n    \n        enterDesc.type=\"input\";\n        enterDesc.placeholder = \"Description (optional)\";\n        enterDesc.id = \"desc-input\";\n    \n        enterDate.type=\"date\";\n        enterDate.id = \"date-input\";\n    \n        submit.type='submit';\n        submit.classList.add('form-submit');\n        \n       \n    \n        todoForm.classList.add('todo-form');\n    \n        appArea.appendChild(todoForm);\n    \n        todoForm.appendChild(title);\n        todoForm.appendChild(name);\n        todoForm.appendChild(enterName);\n        todoForm.appendChild(desc);\n        todoForm.appendChild(enterDesc);\n        todoForm.appendChild(dueDate);\n        todoForm.appendChild(enterDate);\n        todoForm.appendChild(submit);\n    };\n    \n    //Displays a form for the user to input informaion for new List objects\n    const projectForm= ()=>{\n        const appArea = document.querySelector('.app-body');\n\n        //Creates all DOM Elements of the Input Form\n        const projectForm = document.createElement(\"div\");\n        const title = document.createElement('p');\n        const name = document.createElement('p');\n        const enterName = document.createElement('input');\n        const submit = document.createElement('button');\n\n        //Text Content for Input Headers\n        title.textContent=\"Enter New To Do List\"\n        name.textContent=\"Name:\"\n        submit.textContent=\"Submit\";\n\n        title.classList.add(\"form-text\");\n        name.classList.add(\"form-text\");\n\n        //Set Type, Placeholder text, and Id for each input element\n        enterName.type=\"input\";\n        enterName.placeholder = \"Enter List Name\";\n        enterName.id = \"name-input\";\n\n\n        submit.type='submit';\n        submit.classList.add('form-submit');\n    \n   \n\n        projectForm.classList.add('todo-form');\n\n        appArea.appendChild(projectForm);\n\n        projectForm.appendChild(title);\n        projectForm.appendChild(name);\n        projectForm.appendChild(enterName);\n        projectForm.appendChild(submit);\n\n    };\n  \n    return{header,appBody,toDoForm,projectForm}\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Display);\n\n//# sourceURL=webpack://list-it/./src/displayController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveToLocalStorage\": () => (/* binding */ saveToLocalStorage),\n/* harmony export */   \"toDoLists\": () => (/* binding */ toDoLists)\n/* harmony export */ });\n/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.js */ \"./src/List.js\");\n/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController.js */ \"./src/displayController.js\");\n/* harmony import */ var _createToDoItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createToDoItem.js */ \"./src/createToDoItem.js\");\n/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.less */ \"./src/styles.less\");\n\n\n\n\n\n\n//Render Web App Layout\n_displayController_js__WEBPACK_IMPORTED_MODULE_1__.default.header();\n_displayController_js__WEBPACK_IMPORTED_MODULE_1__.default.appBody(); \n\n\n//Create an array to save List objects\nlet toDoLists = [];\nlet selectedList;\n//:)\n\n//Load To-Do lists stored in local storage and display the default list when page is loaded.\nif (localStorage.length > 0) {\n\n    let storedLists= JSON.parse(localStorage.getItem(\"Lists\"));\n\n    for (let i=0; i<storedLists.length; i++){\n\n        let newList= new _List_js__WEBPACK_IMPORTED_MODULE_0__.default(`${storedLists[i].name}`);\n        newList.isDisplayed=false;\n        newList.items = storedLists[i].items;\n        toDoLists.push(newList);\n    };\n\n    toDoLists[0].isDisplayed = true;\n    toDoLists[0].displayLists(toDoLists);\n    toDoLists[0].displayItems(toDoLists[0].items); \n   \n}\n\n//If no lists exist in storage, create a default list and add it to the page.\nelse {\n\n    let defaultList = new _List_js__WEBPACK_IMPORTED_MODULE_0__.default('Default');\n    defaultList.isDisplayed=true;\n    toDoLists.push(defaultList);\n    defaultList.displayLists(toDoLists);\n};\n    \n\n\n\n\n\n//Event Listener that creates the pop up form to enter a new item to the to do list\nconst addItem = document.querySelector(\"#add-item\");\nconst addProject = document.querySelector(\".add-project\");\n\n\naddItem.addEventListener('click', ()=>{\n   \n    //Find which list has been selected by the user and set that list as the active list for adding new items.\n    for (let i =0;i<toDoLists.length;i++){\n        \n        if(toDoLists[i].isDisplayed==true){\n\n            selectedList = toDoLists[i];\n    \n        };\n    };\n\n    _displayController_js__WEBPACK_IMPORTED_MODULE_1__.default.toDoForm(selectedList.name);\n\n    const submit = document.querySelector('.form-submit');\n   \n    /*Takes the user input information and creates a new ToDo object and adds it to the user selected list. \n    After submit, the lists are saved to user's local storage*/\n    submit.addEventListener('click',()=>{\n\n        let newItem = (0,_createToDoItem_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n       \n\n        selectedList.addItem(newItem);\n        selectedList.displayItems(selectedList.items);\n\n        const form = document.querySelector(\".todo-form\");\n        const toDoArea = document.querySelector(\".app-body\");\n        toDoArea.removeChild(form); \n        saveToLocalStorage(toDoLists);   \n    });\n      \n});\n\n\n//Event Listener for the \"Add New Project\" Button. \naddProject.addEventListener(\"click\",()=>{\n\n    _displayController_js__WEBPACK_IMPORTED_MODULE_1__.default.projectForm();\n\n    const submit = document.querySelector(\".form-submit\");\n    const form = document.querySelector(\".todo-form\");\n    const toDoArea = document.querySelector(\".app-body\");\n\n    //Takes user inputs and create a new List Object with the name provided by the user. \n    //Displays list to side bar and saves the list to the user's local storage.\n\n    submit.addEventListener(\"click\", ()=>{\n        const projectName = document.querySelector(\"#name-input\");\n        let newList = new _List_js__WEBPACK_IMPORTED_MODULE_0__.default(projectName.value);\n        toDoArea.removeChild(form);\n        toDoLists.push(newList);\n        newList.displayLists(toDoLists);\n        saveToLocalStorage(toDoLists); \n    });\n});\n\n\n//Function that takes an array and saves the information to local storage.\nfunction saveToLocalStorage(lists) {\n    localStorage.clear();\n    localStorage.setItem(\"Lists\",JSON.stringify(lists));\n};\n\n\n\n//# sourceURL=webpack://list-it/./src/index.js?");

/***/ })

/******/ 	});
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
/******/ 			id: moduleId,
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;