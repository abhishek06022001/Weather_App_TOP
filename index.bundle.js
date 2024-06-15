"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  color: rgb(53, 3, 3);
}
input {
  width: 10rem;

}
.form-label {
  color: rgb(53, 3, 3) !important;
}
.label, button , input {
  font-size: inherit;
}
body {
  background-image: url("https://images.pexels.com/photos/3774895/pexels-photo-3774895.png?cs=srgb&dl=pexels-oandremoura-3774895.jpg&fm=jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#mainBox { 
  display: flex;
  height: 90%;
  width: 90%;
  gap: 1rem;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.header {
  font-size: 2rem;
  text-align: center;
}
.grid {
  width: 70%;
  height: 60%;
  display: flex;
  overflow-x: scroll; scrollbar-width: none;
  overflow-y: hidden;
  gap: 3rem;
  flex-wrap: nowrap;
}
.col { 
  font-size: 1.5rem;
  border-radius: 2rem;
  min-width: 15rem;
  height: 13rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background-color: rgba(228, 234, 235, 0.421);
  transition: all 0.5s ease;
}
.col:hover{
     background-color: rgba(103, 214, 234, 0.421);
}
@media (min-width: 800px) {
  html {
    font-size: 30px;
  }
  .col {
    min-width: 15rem;
  }
}
@media (max-width: 500px) {
  html {
    font-size: 18px;
  }
  .grid {
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .col {
    min-height: 100%;
    min-width: 100%;
  }
}
@media (max-width: 400px) {
  html {
    font-size: 12px;
  }
  .grid {
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .col {
    min-height: 15rem;
    min-width: 100%;
  }
}
@media (min-width: 1200px) {
  .col {
    min-width: 15rem;
    width: 3rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;EACT,oBAAoB;AACtB;AACA;EACE,YAAY;;AAEd;AACA;EACE,+BAA+B;AACjC;AACA;EACE,kBAAkB;AACpB;AACA;EACE,2IAA2I;EAC3I,sBAAsB;EACtB,4BAA4B;EAC5B,4BAA4B;EAC5B,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,WAAW;EACX,UAAU;EACV,SAAS;EACT,cAAc;EACd,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,UAAU;EACV,WAAW;EACX,aAAa;EACb,kBAAkB,EAAE,qBAAqB;EACzC,kBAAkB;EAClB,SAAS;EACT,iBAAiB;AACnB;AACA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,sBAAsB;EACtB,4CAA4C;EAC5C,yBAAyB;AAC3B;AACA;KACK,4CAA4C;AACjD;AACA;EACE;IACE,eAAe;EACjB;EACA;IACE,gBAAgB;EAClB;AACF;AACA;EACE;IACE,eAAe;EACjB;EACA;IACE,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;EACpB;EACA;IACE,gBAAgB;IAChB,eAAe;EACjB;AACF;AACA;EACE;IACE,eAAe;EACjB;EACA;IACE,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;EACpB;EACA;IACE,iBAAiB;IACjB,eAAe;EACjB;AACF;AACA;EACE;IACE,gBAAgB;IAChB,WAAW;EACb;AACF","sourcesContent":["* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  color: rgb(53, 3, 3);\n}\ninput {\n  width: 10rem;\n\n}\n.form-label {\n  color: rgb(53, 3, 3) !important;\n}\n.label, button , input {\n  font-size: inherit;\n}\nbody {\n  background-image: url(\"https://images.pexels.com/photos/3774895/pexels-photo-3774895.png?cs=srgb&dl=pexels-oandremoura-3774895.jpg&fm=jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#mainBox { \n  display: flex;\n  height: 90%;\n  width: 90%;\n  gap: 1rem;\n  margin: 0 auto;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.header {\n  font-size: 2rem;\n  text-align: center;\n}\n.grid {\n  width: 70%;\n  height: 60%;\n  display: flex;\n  overflow-x: scroll; scrollbar-width: none;\n  overflow-y: hidden;\n  gap: 3rem;\n  flex-wrap: nowrap;\n}\n.col { \n  font-size: 1.5rem;\n  border-radius: 2rem;\n  min-width: 15rem;\n  height: 13rem;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: column;\n  background-color: rgba(228, 234, 235, 0.421);\n  transition: all 0.5s ease;\n}\n.col:hover{\n     background-color: rgba(103, 214, 234, 0.421);\n}\n@media (min-width: 800px) {\n  html {\n    font-size: 30px;\n  }\n  .col {\n    min-width: 15rem;\n  }\n}\n@media (max-width: 500px) {\n  html {\n    font-size: 18px;\n  }\n  .grid {\n    flex-direction: column;\n    overflow-y: scroll;\n    overflow-x: hidden;\n  }\n  .col {\n    min-height: 100%;\n    min-width: 100%;\n  }\n}\n@media (max-width: 400px) {\n  html {\n    font-size: 12px;\n  }\n  .grid {\n    flex-direction: column;\n    overflow-y: scroll;\n    overflow-x: hidden;\n  }\n  .col {\n    min-height: 15rem;\n    min-width: 100%;\n  }\n}\n@media (min-width: 1200px) {\n  .col {\n    min-width: 15rem;\n    width: 3rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Ui_controls.js":
/*!****************************!*\
  !*** ./src/Ui_controls.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _weather_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather_data */ "./src/weather_data.js");


const render = () => {
  const { form, input, submitButton } = (0,_display__WEBPACK_IMPORTED_MODULE_0__.createForm)();
  submitButton.onclick = async (e) => {
    e.preventDefault();
    const city = input.value;
    try {
      const data = await (0,_weather_data__WEBPACK_IMPORTED_MODULE_1__.showObject)(city);
      console.log(data);
      clearCard();
      updateCard(data);
    } catch (error) {
      alert("Please Enter a Valid City");
      console.log(error);
    }
  };
};
function updateCard(data) {
  const tempC = document.querySelector(".bottom");
  const svg = document.querySelector(".top");
  const place = document.querySelector(".place");
  const feelslike_C = document.querySelector(".feelsC");
  const feelslike_F = document.querySelector(".feelsF");
  const humidity = document.querySelector(".humid");
  const message = document.querySelector(".message");
  const localtime = document.querySelector(".localtime");
  const last_updated = document.querySelector(".last_updated");
  message.textContent = data.message;
  localtime.textContent = data.localtime;
  last_updated.textContent = data.last_updated;
  feelslike_C.textContent = "Feels Like " + data.feelslike_c + " °C";
  feelslike_F.textContent = "Feels Like " + data.feelslike_f + " °F";
  humidity.textContent = `humidity : ${data.humidity} %`;
  place.textContent = `${data.country},${data.city}`;
  tempC.textContent = data.temp_c + " °C";
  if (!data.isday) {
    const img = document.createElement("img");
    img.src = __webpack_require__(/*! ./night-with-stars-svgrepo-com.svg */ "./src/night-with-stars-svgrepo-com.svg");
    img.alt = "Rain Icon";

    while (svg.firstElementChild) {
      svg.removeChild(svg.firstElementChild);
    }
    svg.appendChild(img);
    } else {
    const img = document.createElement("img");
    img.src = __webpack_require__(/*! ./sunny-svgrepo-com.svg */ "./src/sunny-svgrepo-com.svg");
    img.alt = "Sunny Icon";
    while (svg.firstElementChild) {
      svg.removeChild(svg.firstElementChild);
    }
    svg.appendChild(img);
  }
}
function clearCard() {
  const cardDiv = document.querySelector(".bottom");
  cardDiv.textContent = "";
}




/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createForm: () => (/* binding */ createForm)
/* harmony export */ });
/* harmony import */ var _weather_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather_data */ "./src/weather_data.js");

function createForm() {
  const form = document.createElement("form");
  const divForm = document.createElement("div");
  divForm.classList.add("mb-3");
  const label = document.createElement("label");
  label.textContent = "Enter A City:";
  label.style.color= "white";
  label.classList.add('form-label');
  const input = document.createElement("input");
  input.classList.add('form-control');
  input.classList.add('cityInput');
  divForm.appendChild(label);
  divForm.appendChild(input);
  const submitButton = document.createElement("button");
  submitButton.classList.add("submitbutton");
  submitButton.textContent = "Submit";
  form.appendChild(divForm);
  form.appendChild(submitButton);
  const inputHeader = document.querySelector('.inputHeader');
  inputHeader.appendChild(form);
  tempCard();
  return {
    form,
    input,
    submitButton
    // cardBody,
    // cardDiv,
  };
}
function createDisplayCard(){
  // const cardDiv = document.createElement('div');
  // const text = document.createElement('h3');
  // text.textContent="The Weather is Pleasant";
  // text.classList.add('text');
  // cardDiv.classList.add('card');
  // const cardBody = document.createElement('div');
  // cardBody.classList.add('card-body');
  // cardBody.appendChild(text);
  // cardDiv.appendChild(cardBody);
  // return {
  //   cardDiv,cardBody
  // }
}
function tempCard(){
 const infoDiv1 = document.querySelector('.descOne');
 const infoDiv2 = document.querySelector('.descTwo');
 const infoDiv3 = document.querySelector('.descThree');
 const place = document.createElement('h3'); place.classList.add('place');
 const feelsC = document.createElement('h6'); feelsC.classList.add('feelsC');
 const feelsF = document.createElement('h6');feelsF.classList.add("feelsF");
 const localtime = document.createElement('h6');localtime.classList.add("localtime");
 const last_updated = document.createElement('h6');last_updated.classList.add("last_updated");
 const humid = document.createElement('h3');humid.classList.add('humid');
 const message = document.createElement('h3');
 message.classList.add('message');
 infoDiv1.appendChild(place);
 infoDiv2.appendChild(feelsC);
 infoDiv2.appendChild(feelsF);
 infoDiv2.appendChild(localtime);
 infoDiv3.appendChild(humid);
 infoDiv3.appendChild(message);
 infoDiv3.appendChild(last_updated);
 
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ui_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ui_controls */ "./src/Ui_controls.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


(0,_Ui_controls__WEBPACK_IMPORTED_MODULE_0__.render)();


/***/ }),

/***/ "./src/weather_api.js":
/*!****************************!*\
  !*** ./src/weather_api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeather)
/* harmony export */ });
/* harmony import */ var _Ui_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ui_controls */ "./src/Ui_controls.js");

async function getWeather( location){
  const API = `https://api.weatherapi.com/v1/current.json?key=1948554a53324324919204043242705&q=${location}`;
  const response =  await fetch (API , {mode : "cors"});
  if(!response.ok){
    throw new Error("Network Issue found");
  }
  const data = await response.json();
   return data;
}
 

/***/ }),

/***/ "./src/weather_data.js":
/*!*****************************!*\
  !*** ./src/weather_data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showObject: () => (/* binding */ showObject)
/* harmony export */ });
/* harmony import */ var _weather_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather_api */ "./src/weather_api.js");

const showObject = async (location) => {
  const weatherAllData = await (0,_weather_api__WEBPACK_IMPORTED_MODULE_0__["default"])(location);
  console.log(weatherAllData);
  document.querySelector('input').value= "";
  return {
    last_updated : weatherAllData.current.last_updated,
    localtime : weatherAllData.location.localtime,
    country: weatherAllData.location.country,
    city: weatherAllData.location.name,
    temp_c: weatherAllData.current.temp_c,
    feelslike_c: weatherAllData.current.feelslike_c,
    temp_f: weatherAllData.current.temp_f,
    feelslike_f: weatherAllData.current.feelslike_f,
    message : weatherAllData.current.condition.text,
    humidity: weatherAllData.current.humidity,
    isday: weatherAllData.current.is_day
  };
};



/***/ }),

/***/ "./src/night-with-stars-svgrepo-com.svg":
/*!**********************************************!*\
  !*** ./src/night-with-stars-svgrepo-com.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9bed1bb5effe386afcc9.svg";

/***/ }),

/***/ "./src/sunny-svgrepo-com.svg":
/*!***********************************!*\
  !*** ./src/sunny-svgrepo-com.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a62d1312678602f3faa6.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NERBQXlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtCOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUQwQjtBQUNyQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDLDhDQUE4QztBQUM5Qyw2Q0FBNkM7QUFDN0MsZ0RBQWdEO0FBQ2hELG1EQUFtRDtBQUNuRCw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEV1QztBQUNqQjtBQUN0QixvREFBTTs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZxQztBQUM1QjtBQUNmLGtHQUFrRyxTQUFTO0FBQzNHLHdDQUF3QyxjQUFjO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNWdUM7QUFDdkM7QUFDQSwrQkFBK0Isd0RBQVU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvVWlfY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy93ZWF0aGVyX2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvd2VhdGhlcl9kYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogcmdiKDUzLCAzLCAzKTtcbn1cbmlucHV0IHtcbiAgd2lkdGg6IDEwcmVtO1xuXG59XG4uZm9ybS1sYWJlbCB7XG4gIGNvbG9yOiByZ2IoNTMsIDMsIDMpICFpbXBvcnRhbnQ7XG59XG4ubGFiZWwsIGJ1dHRvbiAsIGlucHV0IHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuYm9keSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzM3NzQ4OTUvcGV4ZWxzLXBob3RvLTM3NzQ4OTUucG5nP2NzPXNyZ2ImZGw9cGV4ZWxzLW9hbmRyZW1vdXJhLTM3NzQ4OTUuanBnJmZtPWpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jbWFpbkJveCB7IFxuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDkwJTtcbiAgZ2FwOiAxcmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZ3JpZCB7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy14OiBzY3JvbGw7IHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBnYXA6IDNyZW07XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuLmNvbCB7IFxuICBmb250LXNpemU6IDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgbWluLXdpZHRoOiAxNXJlbTtcbiAgaGVpZ2h0OiAxM3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI4LCAyMzQsIDIzNSwgMC40MjEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufVxuLmNvbDpob3ZlcntcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDMsIDIxNCwgMjM0LCAwLjQyMSk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG4gIC5jb2wge1xuICAgIG1pbi13aWR0aDogMTVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICBodG1sIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgLmdyaWQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgfVxuICAuY29sIHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAuZ3JpZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB9XG4gIC5jb2wge1xuICAgIG1pbi1oZWlnaHQ6IDE1cmVtO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY29sIHtcbiAgICBtaW4td2lkdGg6IDE1cmVtO1xuICAgIHdpZHRoOiAzcmVtO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0VBQ1Qsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxZQUFZOztBQUVkO0FBQ0E7RUFDRSwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsMklBQTJJO0VBQzNJLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxVQUFVO0VBQ1YsU0FBUztFQUNULGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCLEVBQUUscUJBQXFCO0VBQ3pDLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDRDQUE0QztFQUM1Qyx5QkFBeUI7QUFDM0I7QUFDQTtLQUNLLDRDQUE0QztBQUNqRDtBQUNBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztFQUNiO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiByZ2IoNTMsIDMsIDMpO1xcbn1cXG5pbnB1dCB7XFxuICB3aWR0aDogMTByZW07XFxuXFxufVxcbi5mb3JtLWxhYmVsIHtcXG4gIGNvbG9yOiByZ2IoNTMsIDMsIDMpICFpbXBvcnRhbnQ7XFxufVxcbi5sYWJlbCwgYnV0dG9uICwgaW5wdXQge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMzc3NDg5NS9wZXhlbHMtcGhvdG8tMzc3NDg5NS5wbmc/Y3M9c3JnYiZkbD1wZXhlbHMtb2FuZHJlbW91cmEtMzc3NDg5NS5qcGcmZm09anBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI21haW5Cb3ggeyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA5MCU7XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZ3JpZCB7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiA2MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsOyBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICBnYXA6IDNyZW07XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuLmNvbCB7IFxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgbWluLXdpZHRoOiAxNXJlbTtcXG4gIGhlaWdodDogMTNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI4LCAyMzQsIDIzNSwgMC40MjEpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuLmNvbDpob3ZlcntcXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAzLCAyMTQsIDIzNCwgMC40MjEpO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICB9XFxuICAuY29sIHtcXG4gICAgbWluLXdpZHRoOiAxNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgfVxcbiAgLmdyaWQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIH1cXG4gIC5jb2wge1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gIH1cXG4gIC5ncmlkIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICB9XFxuICAuY29sIHtcXG4gICAgbWluLWhlaWdodDogMTVyZW07XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgLmNvbCB7XFxuICAgIG1pbi13aWR0aDogMTVyZW07XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCB7IHNob3dPYmplY3QgfSBmcm9tIFwiLi93ZWF0aGVyX2RhdGFcIjtcbmNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgY29uc3QgeyBmb3JtLCBpbnB1dCwgc3VibWl0QnV0dG9uIH0gPSBjcmVhdGVGb3JtKCk7XG4gIHN1Ym1pdEJ1dHRvbi5vbmNsaWNrID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY2l0eSA9IGlucHV0LnZhbHVlO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgc2hvd09iamVjdChjaXR5KTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgY2xlYXJDYXJkKCk7XG4gICAgICB1cGRhdGVDYXJkKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhbGVydChcIlBsZWFzZSBFbnRlciBhIFZhbGlkIENpdHlcIik7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xufTtcbmZ1bmN0aW9uIHVwZGF0ZUNhcmQoZGF0YSkge1xuICBjb25zdCB0ZW1wQyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm90dG9tXCIpO1xuICBjb25zdCBzdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvcFwiKTtcbiAgY29uc3QgcGxhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYWNlXCIpO1xuICBjb25zdCBmZWVsc2xpa2VfQyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmVlbHNDXCIpO1xuICBjb25zdCBmZWVsc2xpa2VfRiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmVlbHNGXCIpO1xuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRcIik7XG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lc3NhZ2VcIik7XG4gIGNvbnN0IGxvY2FsdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYWx0aW1lXCIpO1xuICBjb25zdCBsYXN0X3VwZGF0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxhc3RfdXBkYXRlZFwiKTtcbiAgbWVzc2FnZS50ZXh0Q29udGVudCA9IGRhdGEubWVzc2FnZTtcbiAgbG9jYWx0aW1lLnRleHRDb250ZW50ID0gZGF0YS5sb2NhbHRpbWU7XG4gIGxhc3RfdXBkYXRlZC50ZXh0Q29udGVudCA9IGRhdGEubGFzdF91cGRhdGVkO1xuICBmZWVsc2xpa2VfQy50ZXh0Q29udGVudCA9IFwiRmVlbHMgTGlrZSBcIiArIGRhdGEuZmVlbHNsaWtlX2MgKyBcIiDCsENcIjtcbiAgZmVlbHNsaWtlX0YudGV4dENvbnRlbnQgPSBcIkZlZWxzIExpa2UgXCIgKyBkYXRhLmZlZWxzbGlrZV9mICsgXCIgwrBGXCI7XG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYGh1bWlkaXR5IDogJHtkYXRhLmh1bWlkaXR5fSAlYDtcbiAgcGxhY2UudGV4dENvbnRlbnQgPSBgJHtkYXRhLmNvdW50cnl9LCR7ZGF0YS5jaXR5fWA7XG4gIHRlbXBDLnRleHRDb250ZW50ID0gZGF0YS50ZW1wX2MgKyBcIiDCsENcIjtcbiAgaWYgKCFkYXRhLmlzZGF5KSB7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWcuc3JjID0gcmVxdWlyZShcIi4vbmlnaHQtd2l0aC1zdGFycy1zdmdyZXBvLWNvbS5zdmdcIik7XG4gICAgaW1nLmFsdCA9IFwiUmFpbiBJY29uXCI7XG5cbiAgICB3aGlsZSAoc3ZnLmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgICBzdmcucmVtb3ZlQ2hpbGQoc3ZnLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICB9XG4gICAgc3ZnLmFwcGVuZENoaWxkKGltZyk7XG4gICAgfSBlbHNlIHtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZy5zcmMgPSByZXF1aXJlKFwiLi9zdW5ueS1zdmdyZXBvLWNvbS5zdmdcIik7XG4gICAgaW1nLmFsdCA9IFwiU3VubnkgSWNvblwiO1xuICAgIHdoaWxlIChzdmcuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgIHN2Zy5yZW1vdmVDaGlsZChzdmcuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cbiAgICBzdmcuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgfVxufVxuZnVuY3Rpb24gY2xlYXJDYXJkKCkge1xuICBjb25zdCBjYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3R0b21cIik7XG4gIGNhcmREaXYudGV4dENvbnRlbnQgPSBcIlwiO1xufVxuXG5leHBvcnQgeyByZW5kZXIgfTtcbiIsImltcG9ydCB7IHNob3dPYmplY3QgfSBmcm9tIFwiLi93ZWF0aGVyX2RhdGFcIjtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3JtKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IGRpdkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXZGb3JtLmNsYXNzTGlzdC5hZGQoXCJtYi0zXCIpO1xuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBcIkVudGVyIEEgQ2l0eTpcIjtcbiAgbGFiZWwuc3R5bGUuY29sb3I9IFwid2hpdGVcIjtcbiAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1sYWJlbCcpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2NpdHlJbnB1dCcpO1xuICBkaXZGb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgZGl2Rm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic3VibWl0YnV0dG9uXCIpO1xuICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICBmb3JtLmFwcGVuZENoaWxkKGRpdkZvcm0pO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG4gIGNvbnN0IGlucHV0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0SGVhZGVyJyk7XG4gIGlucHV0SGVhZGVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICB0ZW1wQ2FyZCgpO1xuICByZXR1cm4ge1xuICAgIGZvcm0sXG4gICAgaW5wdXQsXG4gICAgc3VibWl0QnV0dG9uXG4gICAgLy8gY2FyZEJvZHksXG4gICAgLy8gY2FyZERpdixcbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZURpc3BsYXlDYXJkKCl7XG4gIC8vIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy8gY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIC8vIHRleHQudGV4dENvbnRlbnQ9XCJUaGUgV2VhdGhlciBpcyBQbGVhc2FudFwiO1xuICAvLyB0ZXh0LmNsYXNzTGlzdC5hZGQoJ3RleHQnKTtcbiAgLy8gY2FyZERpdi5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gIC8vIGNvbnN0IGNhcmRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vIGNhcmRCb2R5LmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpO1xuICAvLyBjYXJkQm9keS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgLy8gY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkQm9keSk7XG4gIC8vIHJldHVybiB7XG4gIC8vICAgY2FyZERpdixjYXJkQm9keVxuICAvLyB9XG59XG5mdW5jdGlvbiB0ZW1wQ2FyZCgpe1xuIGNvbnN0IGluZm9EaXYxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NPbmUnKTtcbiBjb25zdCBpbmZvRGl2MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjVHdvJyk7XG4gY29uc3QgaW5mb0RpdjMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY1RocmVlJyk7XG4gY29uc3QgcGxhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpOyBwbGFjZS5jbGFzc0xpc3QuYWRkKCdwbGFjZScpO1xuIGNvbnN0IGZlZWxzQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2Jyk7IGZlZWxzQy5jbGFzc0xpc3QuYWRkKCdmZWVsc0MnKTtcbiBjb25zdCBmZWVsc0YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpO2ZlZWxzRi5jbGFzc0xpc3QuYWRkKFwiZmVlbHNGXCIpO1xuIGNvbnN0IGxvY2FsdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2Jyk7bG9jYWx0aW1lLmNsYXNzTGlzdC5hZGQoXCJsb2NhbHRpbWVcIik7XG4gY29uc3QgbGFzdF91cGRhdGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDYnKTtsYXN0X3VwZGF0ZWQuY2xhc3NMaXN0LmFkZChcImxhc3RfdXBkYXRlZFwiKTtcbiBjb25zdCBodW1pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7aHVtaWQuY2xhc3NMaXN0LmFkZCgnaHVtaWQnKTtcbiBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UnKTtcbiBpbmZvRGl2MS5hcHBlbmRDaGlsZChwbGFjZSk7XG4gaW5mb0RpdjIuYXBwZW5kQ2hpbGQoZmVlbHNDKTtcbiBpbmZvRGl2Mi5hcHBlbmRDaGlsZChmZWVsc0YpO1xuIGluZm9EaXYyLmFwcGVuZENoaWxkKGxvY2FsdGltZSk7XG4gaW5mb0RpdjMuYXBwZW5kQ2hpbGQoaHVtaWQpO1xuIGluZm9EaXYzLmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuIGluZm9EaXYzLmFwcGVuZENoaWxkKGxhc3RfdXBkYXRlZCk7XG4gXG59XG5cbiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1VpX2NvbnRyb2xzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbnJlbmRlcigpO1xuIiwiaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gXCIuL1VpX2NvbnRyb2xzXCI7XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKCBsb2NhdGlvbil7XG4gIGNvbnN0IEFQSSA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTE5NDg1NTRhNTMzMjQzMjQ5MTkyMDQwNDMyNDI3MDUmcT0ke2xvY2F0aW9ufWA7XG4gIGNvbnN0IHJlc3BvbnNlID0gIGF3YWl0IGZldGNoIChBUEkgLCB7bW9kZSA6IFwiY29yc1wifSk7XG4gIGlmKCFyZXNwb25zZS5vayl7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTmV0d29yayBJc3N1ZSBmb3VuZFwiKTtcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgcmV0dXJuIGRhdGE7XG59XG4gIiwiaW1wb3J0IGdldFdlYXRoZXIgZnJvbSBcIi4vd2VhdGhlcl9hcGlcIjtcbmNvbnN0IHNob3dPYmplY3QgPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgY29uc3Qgd2VhdGhlckFsbERhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKGxvY2F0aW9uKTtcbiAgY29uc29sZS5sb2cod2VhdGhlckFsbERhdGEpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlPSBcIlwiO1xuICByZXR1cm4ge1xuICAgIGxhc3RfdXBkYXRlZCA6IHdlYXRoZXJBbGxEYXRhLmN1cnJlbnQubGFzdF91cGRhdGVkLFxuICAgIGxvY2FsdGltZSA6IHdlYXRoZXJBbGxEYXRhLmxvY2F0aW9uLmxvY2FsdGltZSxcbiAgICBjb3VudHJ5OiB3ZWF0aGVyQWxsRGF0YS5sb2NhdGlvbi5jb3VudHJ5LFxuICAgIGNpdHk6IHdlYXRoZXJBbGxEYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgdGVtcF9jOiB3ZWF0aGVyQWxsRGF0YS5jdXJyZW50LnRlbXBfYyxcbiAgICBmZWVsc2xpa2VfYzogd2VhdGhlckFsbERhdGEuY3VycmVudC5mZWVsc2xpa2VfYyxcbiAgICB0ZW1wX2Y6IHdlYXRoZXJBbGxEYXRhLmN1cnJlbnQudGVtcF9mLFxuICAgIGZlZWxzbGlrZV9mOiB3ZWF0aGVyQWxsRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mLFxuICAgIG1lc3NhZ2UgOiB3ZWF0aGVyQWxsRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICAgIGh1bWlkaXR5OiB3ZWF0aGVyQWxsRGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxuICAgIGlzZGF5OiB3ZWF0aGVyQWxsRGF0YS5jdXJyZW50LmlzX2RheVxuICB9O1xufTtcblxuZXhwb3J0IHtzaG93T2JqZWN0fSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==