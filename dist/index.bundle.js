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

html {
    
    font-size: 100%;
}

input {
    width: 10rem; line-height: 1.5rem; font-size: 100%;
}
.form-label{
    color: rgb(53, 3, 3) !important;
}
body {
    /* background: linear-gradient(to right, rgb(49, 4, 75), rgb(11, 180, 202)); */
    background-image:  url('https://images.pexels.com/photos/3774895/pexels-photo-3774895.png?cs=srgb&dl=pexels-oandremoura-3774895.jpg&fm=jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 100vh;
    border: 2px solid black;

    display: flex;
    justify-content: center;
    align-items: center;
}

#mainBox {
    display: flex;
    height: 30rem;
    width: 90%;
    gap: 1rem;
    margin: 0 auto;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.inputHeader {
    /* Additional styles if needed */
}

.header {
    font-size: 2rem;
    text-align: center;
}

.grid {
    width: 70vw; height: 60vh; display: flex; overflow-x: scroll; overflow-y: hidden;  gap: 3rem; flex-wrap: nowrap;
}

.col {
    border: 2px solid brown; font-size: 1.5rem;
    border-radius: 2rem; min-width: 60%;
    height: 100%;  display: flex; justify-content: space-evenly; align-items: center; flex-direction: column;
    background-color: rgba(195, 213, 214, 0.281);
}

@media (min-width: 800px) {
    html {
        font-size: 30px;
    }
    .col{
        min-width: 30%;
    }
}

@media (max-width: 500px) {
    html {
        font-size: 18px;
    }
    .grid{
        flex-direction: column; overflow-y: scroll; overflow-x: hidden;
    }
    .col{
        min-height: 100%; 
    }
}

@media (max-width: 400px) {
    html {
        font-size: 12px;
    }
     .grid{
        flex-direction: column; overflow-y: scroll; overflow-x: hidden;
    }
}
@media(min-width: 1200px){
    .col{
        min-width: 30%;
    }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;IACT,oBAAoB;AACxB;;AAEA;;IAEI,eAAe;AACnB;;AAEA;IACI,YAAY,EAAE,mBAAmB,EAAE,eAAe;AACtD;AACA;IACI,+BAA+B;AACnC;AACA;IACI,8EAA8E;IAC9E,4IAA4I;IAC5I,sBAAsB;IACtB,4BAA4B;IAC5B,4BAA4B;IAC5B,aAAa;IACb,uBAAuB;;IAEvB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,UAAU;IACV,SAAS;IACT,cAAc;IACd,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,WAAW,EAAE,YAAY,EAAE,aAAa,EAAE,kBAAkB,EAAE,kBAAkB,GAAG,SAAS,EAAE,iBAAiB;AACnH;;AAEA;IACI,uBAAuB,EAAE,iBAAiB;IAC1C,mBAAmB,EAAE,cAAc;IACnC,YAAY,GAAG,aAAa,EAAE,6BAA6B,EAAE,mBAAmB,EAAE,sBAAsB;IACxG,4CAA4C;AAChD;;AAEA;IACI;QACI,eAAe;IACnB;IACA;QACI,cAAc;IAClB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;IACA;QACI,sBAAsB,EAAE,kBAAkB,EAAE,kBAAkB;IAClE;IACA;QACI,gBAAgB;IACpB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;KACC;QACG,sBAAsB,EAAE,kBAAkB,EAAE,kBAAkB;IAClE;AACJ;AACA;IACI;QACI,cAAc;IAClB;AACJ","sourcesContent":["* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    color: rgb(53, 3, 3);\n}\n\nhtml {\n    \n    font-size: 100%;\n}\n\ninput {\n    width: 10rem; line-height: 1.5rem; font-size: 100%;\n}\n.form-label{\n    color: rgb(53, 3, 3) !important;\n}\nbody {\n    /* background: linear-gradient(to right, rgb(49, 4, 75), rgb(11, 180, 202)); */\n    background-image:  url('https://images.pexels.com/photos/3774895/pexels-photo-3774895.png?cs=srgb&dl=pexels-oandremoura-3774895.jpg&fm=jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    height: 100vh;\n    border: 2px solid black;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#mainBox {\n    display: flex;\n    height: 30rem;\n    width: 90%;\n    gap: 1rem;\n    margin: 0 auto;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.inputHeader {\n    /* Additional styles if needed */\n}\n\n.header {\n    font-size: 2rem;\n    text-align: center;\n}\n\n.grid {\n    width: 70vw; height: 60vh; display: flex; overflow-x: scroll; overflow-y: hidden;  gap: 3rem; flex-wrap: nowrap;\n}\n\n.col {\n    border: 2px solid brown; font-size: 1.5rem;\n    border-radius: 2rem; min-width: 60%;\n    height: 100%;  display: flex; justify-content: space-evenly; align-items: center; flex-direction: column;\n    background-color: rgba(195, 213, 214, 0.281);\n}\n\n@media (min-width: 800px) {\n    html {\n        font-size: 30px;\n    }\n    .col{\n        min-width: 30%;\n    }\n}\n\n@media (max-width: 500px) {\n    html {\n        font-size: 18px;\n    }\n    .grid{\n        flex-direction: column; overflow-y: scroll; overflow-x: hidden;\n    }\n    .col{\n        min-height: 100%; \n    }\n}\n\n@media (max-width: 400px) {\n    html {\n        font-size: 12px;\n    }\n     .grid{\n        flex-direction: column; overflow-y: scroll; overflow-x: hidden;\n    }\n}\n@media(min-width: 1200px){\n    .col{\n        min-width: 30%;\n    }\n}\n"],"sourceRoot":""}]);
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
  message.textContent = data.message;
  feelslike_C.textContent ="Feels Like "+ data.feelslike_c + " °C";
  feelslike_F.textContent = "Feels Like "+data.feelslike_f + " °F";
  humidity.textContent = `humidity : ${data.humidity} %`;
  place.textContent = `${data.country},${data.city}` ;
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
 const humid = document.createElement('h3');humid.classList.add('humid');
 const message = document.createElement('h3');
 message.classList.add('message');
 infoDiv1.appendChild(place);
 infoDiv2.appendChild(feelsC);
 infoDiv2.appendChild(feelsF);
 infoDiv3.appendChild(humid);
 infoDiv3.appendChild(message);
 
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


// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";


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
    // console.log(weatherAllData);
  return {
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

module.exports = __webpack_require__.p + "92fcd368673a62909010.svg";

/***/ }),

/***/ "./src/sunny-svgrepo-com.svg":
/*!***********************************!*\
  !*** ./src/sunny-svgrepo-com.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b8dffa2b09cbe4e21cf.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGNBQWMsZUFBZSxvQkFBb0IscUJBQXFCLFdBQVc7QUFDbEc7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCLG1CQUFtQixlQUFlLCtCQUErQixxQkFBcUI7QUFDdEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msb0JBQW9CO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxvQkFBb0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlGQUFpRixZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxnQ0FBZ0MsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyw0RUFBNEUsT0FBTyxLQUFLLHdCQUF3Qix1QkFBdUIseURBQXlELGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLG9DQUFvQyxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLG9DQUFvQyxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsTUFBTSw0QkFBNEIsNkJBQTZCLGlCQUFpQixnQkFBZ0IsMkJBQTJCLEdBQUcsVUFBVSw0QkFBNEIsR0FBRyxXQUFXLG9CQUFvQixxQkFBcUIsZ0JBQWdCLEdBQUcsY0FBYyxzQ0FBc0MsR0FBRyxRQUFRLG1GQUFtRixxSkFBcUosNkJBQTZCLG1DQUFtQyxtQ0FBbUMsb0JBQW9CLDhCQUE4QixzQkFBc0IsOEJBQThCLDBCQUEwQixHQUFHLGNBQWMsb0JBQW9CLG9CQUFvQixpQkFBaUIsZ0JBQWdCLHFCQUFxQiw2QkFBNkIsb0NBQW9DLDBCQUEwQixHQUFHLGtCQUFrQiwwQ0FBMEMsYUFBYSxzQkFBc0IseUJBQXlCLEdBQUcsV0FBVyxtQkFBbUIsY0FBYyxlQUFlLG9CQUFvQixxQkFBcUIsV0FBVyxrQkFBa0IsR0FBRyxVQUFVLCtCQUErQixrQkFBa0IsMkJBQTJCLGVBQWUscUJBQXFCLGVBQWUsK0JBQStCLHFCQUFxQix1QkFBdUIsbURBQW1ELEdBQUcsK0JBQStCLFlBQVksMEJBQTBCLE9BQU8sV0FBVyx5QkFBeUIsT0FBTyxHQUFHLCtCQUErQixZQUFZLDBCQUEwQixPQUFPLFlBQVksa0NBQWtDLG9CQUFvQixtQkFBbUIsT0FBTyxXQUFXLDRCQUE0QixPQUFPLEdBQUcsK0JBQStCLFlBQVksMEJBQTBCLE9BQU8sYUFBYSxrQ0FBa0Msb0JBQW9CLG1CQUFtQixPQUFPLEdBQUcsNEJBQTRCLFdBQVcseUJBQXlCLE9BQU8sR0FBRyxxQkFBcUI7QUFDN2dHO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDeEcxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksdUZBQU8sVUFBVSx1RkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUN4QmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2J1QztBQUNLO0FBQzVDO0FBQ0EsVUFBVSw0QkFBNEIsRUFBRSxvREFBVTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix5REFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGVBQWU7QUFDdEQseUJBQXlCLGFBQWEsR0FBRyxVQUFVO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxrRkFBb0M7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxjQUFjLG1CQUFPLENBQUMsNERBQXlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHa0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RDBCO0FBQ3JDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsOENBQThDO0FBQzlDLDZDQUE2QztBQUM3Qyw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1RHFDOztBQUVyQztBQUNBO0FBQ3NCOztBQUV0QixvREFBTTs7Ozs7Ozs7Ozs7Ozs7OztBQ05xQztBQUM1QjtBQUNmLGtHQUFrRyxTQUFTO0FBQzNHLHdDQUF3QyxjQUFjO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1h1Qzs7QUFFdkM7QUFDQSwrQkFBK0Isd0RBQVU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvVWlfY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy93ZWF0aGVyX2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvd2VhdGhlcl9kYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiByZ2IoNTMsIDMsIDMpO1xufVxuXG5odG1sIHtcbiAgICBcbiAgICBmb250LXNpemU6IDEwMCU7XG59XG5cbmlucHV0IHtcbiAgICB3aWR0aDogMTByZW07IGxpbmUtaGVpZ2h0OiAxLjVyZW07IGZvbnQtc2l6ZTogMTAwJTtcbn1cbi5mb3JtLWxhYmVse1xuICAgIGNvbG9yOiByZ2IoNTMsIDMsIDMpICFpbXBvcnRhbnQ7XG59XG5ib2R5IHtcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYig0OSwgNCwgNzUpLCByZ2IoMTEsIDE4MCwgMjAyKSk7ICovXG4gICAgYmFja2dyb3VuZC1pbWFnZTogIHVybCgnaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMzc3NDg5NS9wZXhlbHMtcGhvdG8tMzc3NDg5NS5wbmc/Y3M9c3JnYiZkbD1wZXhlbHMtb2FuZHJlbW91cmEtMzc3NDg5NS5qcGcmZm09anBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI21haW5Cb3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAzMHJlbTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGdhcDogMXJlbTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbnB1dEhlYWRlciB7XG4gICAgLyogQWRkaXRpb25hbCBzdHlsZXMgaWYgbmVlZGVkICovXG59XG5cbi5oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ncmlkIHtcbiAgICB3aWR0aDogNzB2dzsgaGVpZ2h0OiA2MHZoOyBkaXNwbGF5OiBmbGV4OyBvdmVyZmxvdy14OiBzY3JvbGw7IG92ZXJmbG93LXk6IGhpZGRlbjsgIGdhcDogM3JlbTsgZmxleC13cmFwOiBub3dyYXA7XG59XG5cbi5jb2wge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJyb3duOyBmb250LXNpemU6IDEuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtOyBtaW4td2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDEwMCU7ICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NSwgMjEzLCAyMTQsIDAuMjgxKTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gICAgaHRtbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG4gICAgLmNvbHtcbiAgICAgICAgbWluLXdpZHRoOiAzMCU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICBodG1sIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgICAuZ3JpZHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgb3ZlcmZsb3cteTogc2Nyb2xsOyBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgfVxuICAgIC5jb2x7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7IFxuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICAgaHRtbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgIC5ncmlke1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBvdmVyZmxvdy15OiBzY3JvbGw7IG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB9XG59XG5AbWVkaWEobWluLXdpZHRoOiAxMjAwcHgpe1xuICAgIC5jb2x7XG4gICAgICAgIG1pbi13aWR0aDogMzAlO1xuICAgIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxlQUFlO0FBQ3REO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLDhFQUE4RTtJQUM5RSw0SUFBNEk7SUFDNUksc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHVCQUF1Qjs7SUFFdkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLFVBQVU7SUFDVixTQUFTO0lBQ1QsY0FBYztJQUNkLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVcsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixHQUFHLFNBQVMsRUFBRSxpQkFBaUI7QUFDbkg7O0FBRUE7SUFDSSx1QkFBdUIsRUFBRSxpQkFBaUI7SUFDMUMsbUJBQW1CLEVBQUUsY0FBYztJQUNuQyxZQUFZLEdBQUcsYUFBYSxFQUFFLDZCQUE2QixFQUFFLG1CQUFtQixFQUFFLHNCQUFzQjtJQUN4Ryw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksc0JBQXNCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCO0lBQ2xFO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtLQUNDO1FBQ0csc0JBQXNCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCO0lBQ2xFO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGNvbG9yOiByZ2IoNTMsIDMsIDMpO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgXFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuaW5wdXQge1xcbiAgICB3aWR0aDogMTByZW07IGxpbmUtaGVpZ2h0OiAxLjVyZW07IGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuLmZvcm0tbGFiZWx7XFxuICAgIGNvbG9yOiByZ2IoNTMsIDMsIDMpICFpbXBvcnRhbnQ7XFxufVxcbmJvZHkge1xcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYig0OSwgNCwgNzUpLCByZ2IoMTEsIDE4MCwgMjAyKSk7ICovXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICB1cmwoJ2h0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzM3NzQ4OTUvcGV4ZWxzLXBob3RvLTM3NzQ4OTUucG5nP2NzPXNyZ2ImZGw9cGV4ZWxzLW9hbmRyZW1vdXJhLTM3NzQ4OTUuanBnJmZtPWpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtYWluQm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAzMHJlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dEhlYWRlciB7XFxuICAgIC8qIEFkZGl0aW9uYWwgc3R5bGVzIGlmIG5lZWRlZCAqL1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ncmlkIHtcXG4gICAgd2lkdGg6IDcwdnc7IGhlaWdodDogNjB2aDsgZGlzcGxheTogZmxleDsgb3ZlcmZsb3cteDogc2Nyb2xsOyBvdmVyZmxvdy15OiBoaWRkZW47ICBnYXA6IDNyZW07IGZsZXgtd3JhcDogbm93cmFwO1xcbn1cXG5cXG4uY29sIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYnJvd247IGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtOyBtaW4td2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiAxMDAlOyAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk1LCAyMTMsIDIxNCwgMC4yODEpO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcXG4gICAgaHRtbCB7XFxuICAgICAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIH1cXG4gICAgLmNvbHtcXG4gICAgICAgIG1pbi13aWR0aDogMzAlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICBodG1sIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgfVxcbiAgICAuZ3JpZHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IG92ZXJmbG93LXk6IHNjcm9sbDsgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICB9XFxuICAgIC5jb2x7XFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlOyBcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gICAgaHRtbCB7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgIH1cXG4gICAgIC5ncmlke1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgb3ZlcmZsb3cteTogc2Nyb2xsOyBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIH1cXG59XFxuQG1lZGlhKG1pbi13aWR0aDogMTIwMHB4KXtcXG4gICAgLmNvbHtcXG4gICAgICAgIG1pbi13aWR0aDogMzAlO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IHsgc2hvd09iamVjdCB9IGZyb20gXCIuL3dlYXRoZXJfZGF0YVwiO1xuY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICBjb25zdCB7IGZvcm0sIGlucHV0LCBzdWJtaXRCdXR0b24gfSA9IGNyZWF0ZUZvcm0oKTtcbiAgc3VibWl0QnV0dG9uLm9uY2xpY2sgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjaXR5ID0gaW5wdXQudmFsdWU7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzaG93T2JqZWN0KGNpdHkpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBjbGVhckNhcmQoKTtcbiAgICAgIHVwZGF0ZUNhcmQoZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIEVudGVyIGEgVmFsaWQgQ2l0eVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG59O1xuXG5mdW5jdGlvbiB1cGRhdGVDYXJkKGRhdGEpIHtcbiAgY29uc3QgdGVtcEMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvdHRvbVwiKTtcbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3BcIik7XG4gIGNvbnN0IHBsYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGFjZVwiKTtcbiAgY29uc3QgZmVlbHNsaWtlX0MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWxzQ1wiKTtcbiAgY29uc3QgZmVlbHNsaWtlX0YgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWxzRlwiKTtcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkXCIpO1xuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZXNzYWdlXCIpO1xuICBtZXNzYWdlLnRleHRDb250ZW50ID0gZGF0YS5tZXNzYWdlO1xuICBmZWVsc2xpa2VfQy50ZXh0Q29udGVudCA9XCJGZWVscyBMaWtlIFwiKyBkYXRhLmZlZWxzbGlrZV9jICsgXCIgwrBDXCI7XG4gIGZlZWxzbGlrZV9GLnRleHRDb250ZW50ID0gXCJGZWVscyBMaWtlIFwiK2RhdGEuZmVlbHNsaWtlX2YgKyBcIiDCsEZcIjtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgaHVtaWRpdHkgOiAke2RhdGEuaHVtaWRpdHl9ICVgO1xuICBwbGFjZS50ZXh0Q29udGVudCA9IGAke2RhdGEuY291bnRyeX0sJHtkYXRhLmNpdHl9YCA7XG4gIHRlbXBDLnRleHRDb250ZW50ID0gZGF0YS50ZW1wX2MgKyBcIiDCsENcIjtcbiAgaWYgKCFkYXRhLmlzZGF5KSB7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWcuc3JjID0gcmVxdWlyZShcIi4vbmlnaHQtd2l0aC1zdGFycy1zdmdyZXBvLWNvbS5zdmdcIik7XG4gICAgaW1nLmFsdCA9IFwiUmFpbiBJY29uXCI7XG5cbiAgICB3aGlsZSAoc3ZnLmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgICBzdmcucmVtb3ZlQ2hpbGQoc3ZnLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICB9XG4gICAgc3ZnLmFwcGVuZENoaWxkKGltZyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWcuc3JjID0gcmVxdWlyZShcIi4vc3Vubnktc3ZncmVwby1jb20uc3ZnXCIpO1xuICAgIGltZy5hbHQgPSBcIlN1bm55IEljb25cIjtcbiAgICB3aGlsZSAoc3ZnLmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgICBzdmcucmVtb3ZlQ2hpbGQoc3ZnLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICB9XG4gICAgc3ZnLmFwcGVuZENoaWxkKGltZyk7XG4gIH1cbiAgXG4gIFxufVxuZnVuY3Rpb24gY2xlYXJDYXJkKCkge1xuICBjb25zdCBjYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3R0b21cIik7XG4gIGNhcmREaXYudGV4dENvbnRlbnQgPSBcIlwiO1xufVxuXG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHsgc2hvd09iamVjdCB9IGZyb20gXCIuL3dlYXRoZXJfZGF0YVwiO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY29uc3QgZGl2Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdkZvcm0uY2xhc3NMaXN0LmFkZChcIm1iLTNcIik7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IFwiRW50ZXIgQSBDaXR5OlwiO1xuICBsYWJlbC5zdHlsZS5jb2xvcj0gXCJ3aGl0ZVwiO1xuICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWxhYmVsJyk7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnY2l0eUlucHV0Jyk7XG4gIGRpdkZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBkaXZGb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXRidXR0b25cIik7XG4gIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGl2Rm9ybSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgY29uc3QgaW5wdXRIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRIZWFkZXInKTtcbiAgaW5wdXRIZWFkZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIHRlbXBDYXJkKCk7XG4gIHJldHVybiB7XG4gICAgZm9ybSxcbiAgICBpbnB1dCxcbiAgICBzdWJtaXRCdXR0b25cbiAgICAvLyBjYXJkQm9keSxcbiAgICAvLyBjYXJkRGl2LFxuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlRGlzcGxheUNhcmQoKXtcbiAgLy8gY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgLy8gdGV4dC50ZXh0Q29udGVudD1cIlRoZSBXZWF0aGVyIGlzIFBsZWFzYW50XCI7XG4gIC8vIHRleHQuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xuICAvLyBjYXJkRGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgLy8gY29uc3QgY2FyZEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy8gY2FyZEJvZHkuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5Jyk7XG4gIC8vIGNhcmRCb2R5LmFwcGVuZENoaWxkKHRleHQpO1xuICAvLyBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmRCb2R5KTtcbiAgLy8gcmV0dXJuIHtcbiAgLy8gICBjYXJkRGl2LGNhcmRCb2R5XG4gIC8vIH1cbn1cbmZ1bmN0aW9uIHRlbXBDYXJkKCl7XG4gY29uc3QgaW5mb0RpdjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY09uZScpO1xuIGNvbnN0IGluZm9EaXYyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NUd28nKTtcbiBjb25zdCBpbmZvRGl2MyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjVGhyZWUnKTtcbiBjb25zdCBwbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7IHBsYWNlLmNsYXNzTGlzdC5hZGQoJ3BsYWNlJyk7XG4gY29uc3QgZmVlbHNDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDYnKTsgZmVlbHNDLmNsYXNzTGlzdC5hZGQoJ2ZlZWxzQycpO1xuIGNvbnN0IGZlZWxzRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2Jyk7ZmVlbHNGLmNsYXNzTGlzdC5hZGQoXCJmZWVsc0ZcIik7XG4gY29uc3QgaHVtaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO2h1bWlkLmNsYXNzTGlzdC5hZGQoJ2h1bWlkJyk7XG4gY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlJyk7XG4gaW5mb0RpdjEuYXBwZW5kQ2hpbGQocGxhY2UpO1xuIGluZm9EaXYyLmFwcGVuZENoaWxkKGZlZWxzQyk7XG4gaW5mb0RpdjIuYXBwZW5kQ2hpbGQoZmVlbHNGKTtcbiBpbmZvRGl2My5hcHBlbmRDaGlsZChodW1pZCk7XG4gaW5mb0RpdjMuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gXG59XG5cbiIsImltcG9ydCB7cmVuZGVyfSBmcm9tIFwiLi9VaV9jb250cm9sc1wiO1xuXG4vLyBpbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbi8vIGltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxucmVuZGVyKCk7XG4iLCJpbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSBcIi4vVWlfY29udHJvbHNcIjtcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoIGxvY2F0aW9uKXtcbiAgY29uc3QgQVBJID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9MTk0ODU1NGE1MzMyNDMyNDkxOTIwNDA0MzI0MjcwNSZxPSR7bG9jYXRpb259YDtcbiAgY29uc3QgcmVzcG9uc2UgPSAgYXdhaXQgZmV0Y2ggKEFQSSAsIHttb2RlIDogXCJjb3JzXCJ9KTtcbiAgaWYoIXJlc3BvbnNlLm9rKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOZXR3b3JrIElzc3VlIGZvdW5kXCIpO1xuICB9XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICByZXR1cm4gZGF0YTtcbiAgXG59XG4gIiwiaW1wb3J0IGdldFdlYXRoZXIgZnJvbSBcIi4vd2VhdGhlcl9hcGlcIjtcblxuY29uc3Qgc2hvd09iamVjdCA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xuICBjb25zdCB3ZWF0aGVyQWxsRGF0YSA9IGF3YWl0IGdldFdlYXRoZXIobG9jYXRpb24pO1xuICAgIC8vIGNvbnNvbGUubG9nKHdlYXRoZXJBbGxEYXRhKTtcbiAgcmV0dXJuIHtcbiAgICBjb3VudHJ5OiB3ZWF0aGVyQWxsRGF0YS5sb2NhdGlvbi5jb3VudHJ5LFxuICAgIGNpdHk6IHdlYXRoZXJBbGxEYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgdGVtcF9jOiB3ZWF0aGVyQWxsRGF0YS5jdXJyZW50LnRlbXBfYyxcbiAgICBmZWVsc2xpa2VfYzogd2VhdGhlckFsbERhdGEuY3VycmVudC5mZWVsc2xpa2VfYyxcbiAgICB0ZW1wX2Y6IHdlYXRoZXJBbGxEYXRhLmN1cnJlbnQudGVtcF9mLFxuICAgIGZlZWxzbGlrZV9mOiB3ZWF0aGVyQWxsRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mLFxuICAgIG1lc3NhZ2UgOiB3ZWF0aGVyQWxsRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICAgIGh1bWlkaXR5OiB3ZWF0aGVyQWxsRGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxuICAgIGlzZGF5OiB3ZWF0aGVyQWxsRGF0YS5jdXJyZW50LmlzX2RheVxuICB9O1xufTtcblxuZXhwb3J0IHtzaG93T2JqZWN0fSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==