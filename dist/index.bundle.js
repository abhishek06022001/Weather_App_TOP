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
.loading{
  background-color: rgba(194, 189, 189, 0.5);
display: none; position: absolute; top: 0;  left:  0; width: 100vw; height: 100vh;
 justify-content: center; align-items: center;
 font-size: 9rem; font-style: oblique;
}
input {
  width: 10rem;
  border: none;
  border-radius: 1rem;
  padding: 0.2rem;
}
input:focus {
  outline: none;
}

body.loading {
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent grey background */
  overflow: hidden; /* Prevent scrolling while loader is shown */
}
.form-label {
  color: rgb(53, 3, 3) !important;
}
.label,
button,
input {
  font-size: inherit;
}
.loader {
  background-color: white;
  width: 100vw;
  height: 100vh;
}
body {
  background-image: url("https://images.pexels.com/photos/3774895/pexels-photo-3774895.png?cs=srgb&dl=pexels-oandremoura-3774895.jpg&fm=jpg");
  background-size: cover;
  background-repeat: no-repeat;
  /* idk below property bro Abhishek */
  background-attachment: scroll;
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
  font-size: 2rem; margin-bottom: 0.2rem;
  text-align: center;
}
.grid {
  width: 70%;
  height: 60%;
  display: flex;
  overflow-x: scroll;
  scrollbar-width: none;
  overflow-y: hidden;
  gap: 3rem;
  flex-wrap: nowrap;
}
.col {
  font-size: 1.5rem;
  border-radius: 2rem;
  min-width: 15rem;
  text-align: center;
  padding: 0.5rem;
  height: 13rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background-color: rgba(228, 234, 235, 0.421);
  transition: all 0.5s ease;
}
.bottom {
  font-size: 3.2rem;
}
.col:hover {
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
  .loading{
    font-size: 2rem;
  }
  img {
    width: 4rem;
    height: 4rem;
  }
}
@media (max-width: 400px) {
  html {
    font-size: 30px;
    font-size: 15px;
  }
  .loading{
    font-size: 2rem;
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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;EACT,oBAAoB;AACtB;AACA;EACE,0CAA0C;AAC5C,aAAa,EAAE,kBAAkB,EAAE,MAAM,GAAG,QAAQ,EAAE,YAAY,EAAE,aAAa;CAChF,uBAAuB,EAAE,mBAAmB;CAC5C,eAAe,EAAE,mBAAmB;AACrC;AACA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,aAAa;AACf;;AAEA;EACE,oCAAoC,EAAE,qCAAqC;EAC3E,gBAAgB,EAAE,4CAA4C;AAChE;AACA;EACE,+BAA+B;AACjC;AACA;;;EAGE,kBAAkB;AACpB;AACA;EACE,uBAAuB;EACvB,YAAY;EACZ,aAAa;AACf;AACA;EACE,2IAA2I;EAC3I,sBAAsB;EACtB,4BAA4B;EAC5B,oCAAoC;EACpC,6BAA6B;EAC7B,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,WAAW;EACX,UAAU;EACV,SAAS;EACT,cAAc;EACd,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;AACrB;AACA;EACE,eAAe,EAAE,qBAAqB;EACtC,kBAAkB;AACpB;AACA;EACE,UAAU;EACV,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,qBAAqB;EACrB,kBAAkB;EAClB,SAAS;EACT,iBAAiB;AACnB;AACA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,sBAAsB;EACtB,4CAA4C;EAC5C,yBAAyB;AAC3B;AACA;EACE,iBAAiB;AACnB;AACA;EACE,4CAA4C;AAC9C;AACA;EACE;IACE,eAAe;EACjB;EACA;IACE,gBAAgB;EAClB;;AAEF;AACA;EACE;IACE,eAAe;EACjB;EACA;IACE,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;EACpB;EACA;IACE,gBAAgB;IAChB,eAAe;EACjB;EACA;IACE,eAAe;EACjB;EACA;IACE,WAAW;IACX,YAAY;EACd;AACF;AACA;EACE;IACE,eAAe;IACf,eAAe;EACjB;EACA;IACE,eAAe;EACjB;EACA;IACE,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;EACpB;EACA;IACE,iBAAiB;IACjB,eAAe;EACjB;AACF;AACA;EACE;IACE,gBAAgB;IAChB,WAAW;EACb;AACF","sourcesContent":["* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  color: rgb(53, 3, 3);\n}\n.loading{\n  background-color: rgba(194, 189, 189, 0.5);\ndisplay: none; position: absolute; top: 0;  left:  0; width: 100vw; height: 100vh;\n justify-content: center; align-items: center;\n font-size: 9rem; font-style: oblique;\n}\ninput {\n  width: 10rem;\n  border: none;\n  border-radius: 1rem;\n  padding: 0.2rem;\n}\ninput:focus {\n  outline: none;\n}\n\nbody.loading {\n  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent grey background */\n  overflow: hidden; /* Prevent scrolling while loader is shown */\n}\n.form-label {\n  color: rgb(53, 3, 3) !important;\n}\n.label,\nbutton,\ninput {\n  font-size: inherit;\n}\n.loader {\n  background-color: white;\n  width: 100vw;\n  height: 100vh;\n}\nbody {\n  background-image: url(\"https://images.pexels.com/photos/3774895/pexels-photo-3774895.png?cs=srgb&dl=pexels-oandremoura-3774895.jpg&fm=jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  /* idk below property bro Abhishek */\n  background-attachment: scroll;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#mainBox {\n  display: flex;\n  height: 90%;\n  width: 90%;\n  gap: 1rem;\n  margin: 0 auto;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.header {\n  font-size: 2rem; margin-bottom: 0.2rem;\n  text-align: center;\n}\n.grid {\n  width: 70%;\n  height: 60%;\n  display: flex;\n  overflow-x: scroll;\n  scrollbar-width: none;\n  overflow-y: hidden;\n  gap: 3rem;\n  flex-wrap: nowrap;\n}\n.col {\n  font-size: 1.5rem;\n  border-radius: 2rem;\n  min-width: 15rem;\n  text-align: center;\n  padding: 0.5rem;\n  height: 13rem;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: column;\n  background-color: rgba(228, 234, 235, 0.421);\n  transition: all 0.5s ease;\n}\n.bottom {\n  font-size: 3.2rem;\n}\n.col:hover {\n  background-color: rgba(103, 214, 234, 0.421);\n}\n@media (min-width: 800px) {\n  html {\n    font-size: 30px;\n  }\n  .col {\n    min-width: 15rem;\n  }\n  \n}\n@media (max-width: 500px) {\n  html {\n    font-size: 18px;\n  }\n  .grid {\n    flex-direction: column;\n    overflow-y: scroll;\n    overflow-x: hidden;\n  }\n  .col {\n    min-height: 100%;\n    min-width: 100%;\n  }\n  .loading{\n    font-size: 2rem;\n  }\n  img {\n    width: 4rem;\n    height: 4rem;\n  }\n}\n@media (max-width: 400px) {\n  html {\n    font-size: 30px;\n    font-size: 15px;\n  }\n  .loading{\n    font-size: 2rem;\n  }\n  .grid {\n    flex-direction: column;\n    overflow-y: scroll;\n    overflow-x: hidden;\n  }\n  .col {\n    min-height: 15rem;\n    min-width: 100%;\n  }\n}\n@media (min-width: 1200px) {\n  .col {\n    min-width: 15rem;\n    width: 3rem;\n  }\n}\n"],"sourceRoot":""}]);
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
    startLoader();
    try {
      const data = await (0,_weather_data__WEBPACK_IMPORTED_MODULE_1__.showObject)(city);
      console.log(data);
      clearCard();
      updateCard(data);
      console.log("hey updateCard called");
    } catch (error) {
      // alert("Please Enter a Valid City");
      console.log(error);
    } finally {
      stopLoader();
    }
    // alert("onclick complete thread will get free after this ")
  };
};

function startLoader(){
  const loading = document.querySelector('.loading');
  loading.style.display = "flex";
}

function stopLoader() 
{
const loading = document.querySelector(".loading");
loading.style.display = "none";  
}
function updateCard(data) {
  // alert(" updateCard called");
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
  localtime.textContent =`The Current time is ${data.localtime}`;
  last_updated.textContent ="Last Update at: " +data.last_updated;
  feelslike_C.textContent = "Feels Like " + data.feelslike_c + " °C";
  feelslike_F.textContent = "Feels Like " + data.feelslike_f + " °F";
  humidity.textContent = `humidity : ${data.humidity} %`;
  place.textContent = `The Country is  ${data.country} and the City is  ${data.city}`;
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
  // alert("  updateCard  done");
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
 const place = document.createElement('h5'); place.classList.add('place');
 const feelsC = document.createElement('h5'); feelsC.classList.add('feelsC');
 const feelsF = document.createElement('h5');feelsF.classList.add("feelsF");
 const localtime = document.createElement('h5');localtime.classList.add("localtime");
 const last_updated = document.createElement('h5');last_updated.classList.add("last_updated");
 const humid = document.createElement('h5');humid.classList.add('humid');
 const message = document.createElement('h5');
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
  await delay(3000);
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
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}



/***/ }),

/***/ "./src/night-with-stars-svgrepo-com.svg":
/*!**********************************************!*\
  !*** ./src/night-with-stars-svgrepo-com.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38268f786154959e6812.svg";

/***/ }),

/***/ "./src/sunny-svgrepo-com.svg":
/*!***********************************!*\
  !*** ./src/sunny-svgrepo-com.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc57c517dcc42fc33b19.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVrQjs7Ozs7Ozs7Ozs7Ozs7OztBQzlFMEI7QUFDckM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3Qyw4Q0FBOEM7QUFDOUMsNkNBQTZDO0FBQzdDLGdEQUFnRDtBQUNoRCxtREFBbUQ7QUFDbkQsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hFdUM7QUFDakI7QUFDdEIsb0RBQU07Ozs7Ozs7Ozs7Ozs7Ozs7QUNGcUM7QUFDNUI7QUFDZixrR0FBa0csU0FBUztBQUMzRyx3Q0FBd0MsY0FBYztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVnVDO0FBQ3ZDO0FBQ0EsK0JBQStCLHdEQUFVO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvVWlfY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy93ZWF0aGVyX2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvd2VhdGhlcl9kYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogcmdiKDUzLCAzLCAzKTtcbn1cbi5sb2FkaW5ne1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NCwgMTg5LCAxODksIDAuNSk7XG5kaXNwbGF5OiBub25lOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgIGxlZnQ6ICAwOyB3aWR0aDogMTAwdnc7IGhlaWdodDogMTAwdmg7XG4ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gZm9udC1zaXplOiA5cmVtOyBmb250LXN0eWxlOiBvYmxpcXVlO1xufVxuaW5wdXQge1xuICB3aWR0aDogMTByZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcGFkZGluZzogMC4ycmVtO1xufVxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5ib2R5LmxvYWRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIFNlbWktdHJhbnNwYXJlbnQgZ3JleSBiYWNrZ3JvdW5kICovXG4gIG92ZXJmbG93OiBoaWRkZW47IC8qIFByZXZlbnQgc2Nyb2xsaW5nIHdoaWxlIGxvYWRlciBpcyBzaG93biAqL1xufVxuLmZvcm0tbGFiZWwge1xuICBjb2xvcjogcmdiKDUzLCAzLCAzKSAhaW1wb3J0YW50O1xufVxuLmxhYmVsLFxuYnV0dG9uLFxuaW5wdXQge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG59XG4ubG9hZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8zNzc0ODk1L3BleGVscy1waG90by0zNzc0ODk1LnBuZz9jcz1zcmdiJmRsPXBleGVscy1vYW5kcmVtb3VyYS0zNzc0ODk1LmpwZyZmbT1qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIC8qIGlkayBiZWxvdyBwcm9wZXJ0eSBicm8gQWJoaXNoZWsgKi9cbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI21haW5Cb3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDkwJTtcbiAgZ2FwOiAxcmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyIHtcbiAgZm9udC1zaXplOiAycmVtOyBtYXJnaW4tYm90dG9tOiAwLjJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ncmlkIHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA2MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIGdhcDogM3JlbTtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG4uY29sIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIG1pbi13aWR0aDogMTVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC41cmVtO1xuICBoZWlnaHQ6IDEzcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjgsIDIzNCwgMjM1LCAwLjQyMSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG4uYm90dG9tIHtcbiAgZm9udC1zaXplOiAzLjJyZW07XG59XG4uY29sOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDMsIDIxNCwgMjM0LCAwLjQyMSk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG4gIC5jb2wge1xuICAgIG1pbi13aWR0aDogMTVyZW07XG4gIH1cbiAgXG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC5ncmlkIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cbiAgLmNvbCB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cbiAgLmxvYWRpbmd7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG4gIGltZyB7XG4gICAgd2lkdGg6IDRyZW07XG4gICAgaGVpZ2h0OiA0cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAubG9hZGluZ3tcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgLmdyaWQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgfVxuICAuY29sIHtcbiAgICBtaW4taGVpZ2h0OiAxNXJlbTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNvbCB7XG4gICAgbWluLXdpZHRoOiAxNXJlbTtcbiAgICB3aWR0aDogM3JlbTtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztFQUNULG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsMENBQTBDO0FBQzVDLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEdBQUcsUUFBUSxFQUFFLFlBQVksRUFBRSxhQUFhO0NBQ2hGLHVCQUF1QixFQUFFLG1CQUFtQjtDQUM1QyxlQUFlLEVBQUUsbUJBQW1CO0FBQ3JDO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQ0FBb0MsRUFBRSxxQ0FBcUM7RUFDM0UsZ0JBQWdCLEVBQUUsNENBQTRDO0FBQ2hFO0FBQ0E7RUFDRSwrQkFBK0I7QUFDakM7QUFDQTs7O0VBR0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0UsMklBQTJJO0VBQzNJLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsb0NBQW9DO0VBQ3BDLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVM7RUFDVCxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWUsRUFBRSxxQkFBcUI7RUFDdEMsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsNENBQTRDO0VBQzVDLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSw0Q0FBNEM7QUFDOUM7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztBQUVGO0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtBQUNGO0FBQ0E7RUFDRTtJQUNFLGVBQWU7SUFDZixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztFQUNiO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiByZ2IoNTMsIDMsIDMpO1xcbn1cXG4ubG9hZGluZ3tcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk0LCAxODksIDE4OSwgMC41KTtcXG5kaXNwbGF5OiBub25lOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgIGxlZnQ6ICAwOyB3aWR0aDogMTAwdnc7IGhlaWdodDogMTAwdmg7XFxuIGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyO1xcbiBmb250LXNpemU6IDlyZW07IGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxufVxcbmlucHV0IHtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBwYWRkaW5nOiAwLjJyZW07XFxufVxcbmlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmJvZHkubG9hZGluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIFNlbWktdHJhbnNwYXJlbnQgZ3JleSBiYWNrZ3JvdW5kICovXFxuICBvdmVyZmxvdzogaGlkZGVuOyAvKiBQcmV2ZW50IHNjcm9sbGluZyB3aGlsZSBsb2FkZXIgaXMgc2hvd24gKi9cXG59XFxuLmZvcm0tbGFiZWwge1xcbiAgY29sb3I6IHJnYig1MywgMywgMykgIWltcG9ydGFudDtcXG59XFxuLmxhYmVsLFxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcbi5sb2FkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMzc3NDg5NS9wZXhlbHMtcGhvdG8tMzc3NDg5NS5wbmc/Y3M9c3JnYiZkbD1wZXhlbHMtb2FuZHJlbW91cmEtMzc3NDg5NS5qcGcmZm09anBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIC8qIGlkayBiZWxvdyBwcm9wZXJ0eSBicm8gQWJoaXNoZWsgKi9cXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNtYWluQm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA5MCU7XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXIge1xcbiAgZm9udC1zaXplOiAycmVtOyBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ncmlkIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICBnYXA6IDNyZW07XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuLmNvbCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBtaW4td2lkdGg6IDE1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgaGVpZ2h0OiAxM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjgsIDIzNCwgMjM1LCAwLjQyMSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG4uYm90dG9tIHtcXG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xcbn1cXG4uY29sOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAzLCAyMTQsIDIzNCwgMC40MjEpO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICB9XFxuICAuY29sIHtcXG4gICAgbWluLXdpZHRoOiAxNXJlbTtcXG4gIH1cXG4gIFxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuICAuZ3JpZCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgfVxcbiAgLmNvbCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5sb2FkaW5ne1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuICBpbWcge1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gIH1cXG4gIC5sb2FkaW5ne1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuICAuZ3JpZCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgfVxcbiAgLmNvbCB7XFxuICAgIG1pbi1oZWlnaHQ6IDE1cmVtO1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5jb2wge1xcbiAgICBtaW4td2lkdGg6IDE1cmVtO1xcbiAgICB3aWR0aDogM3JlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgeyBzaG93T2JqZWN0IH0gZnJvbSBcIi4vd2VhdGhlcl9kYXRhXCI7XG5jb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZm9ybSwgaW5wdXQsIHN1Ym1pdEJ1dHRvbiB9ID0gY3JlYXRlRm9ybSgpO1xuICBzdWJtaXRCdXR0b24ub25jbGljayA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGNpdHkgPSBpbnB1dC52YWx1ZTtcbiAgICBzdGFydExvYWRlcigpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgc2hvd09iamVjdChjaXR5KTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgY2xlYXJDYXJkKCk7XG4gICAgICB1cGRhdGVDYXJkKGRhdGEpO1xuICAgICAgY29uc29sZS5sb2coXCJoZXkgdXBkYXRlQ2FyZCBjYWxsZWRcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIGFsZXJ0KFwiUGxlYXNlIEVudGVyIGEgVmFsaWQgQ2l0eVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc3RvcExvYWRlcigpO1xuICAgIH1cbiAgICAvLyBhbGVydChcIm9uY2xpY2sgY29tcGxldGUgdGhyZWFkIHdpbGwgZ2V0IGZyZWUgYWZ0ZXIgdGhpcyBcIilcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIHN0YXJ0TG9hZGVyKCl7XG4gIGNvbnN0IGxvYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZycpO1xuICBsb2FkaW5nLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn1cblxuZnVuY3Rpb24gc3RvcExvYWRlcigpIFxue1xuY29uc3QgbG9hZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGluZ1wiKTtcbmxvYWRpbmcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAgXG59XG5mdW5jdGlvbiB1cGRhdGVDYXJkKGRhdGEpIHtcbiAgLy8gYWxlcnQoXCIgdXBkYXRlQ2FyZCBjYWxsZWRcIik7XG4gIGNvbnN0IHRlbXBDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3R0b21cIik7XG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9wXCIpO1xuICBjb25zdCBwbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2VcIik7XG4gIGNvbnN0IGZlZWxzbGlrZV9DID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVsc0NcIik7XG4gIGNvbnN0IGZlZWxzbGlrZV9GID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVsc0ZcIik7XG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZFwiKTtcbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVzc2FnZVwiKTtcbiAgY29uc3QgbG9jYWx0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhbHRpbWVcIik7XG4gIGNvbnN0IGxhc3RfdXBkYXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFzdF91cGRhdGVkXCIpO1xuICBtZXNzYWdlLnRleHRDb250ZW50ID0gZGF0YS5tZXNzYWdlO1xuICBsb2NhbHRpbWUudGV4dENvbnRlbnQgPWBUaGUgQ3VycmVudCB0aW1lIGlzICR7ZGF0YS5sb2NhbHRpbWV9YDtcbiAgbGFzdF91cGRhdGVkLnRleHRDb250ZW50ID1cIkxhc3QgVXBkYXRlIGF0OiBcIiArZGF0YS5sYXN0X3VwZGF0ZWQ7XG4gIGZlZWxzbGlrZV9DLnRleHRDb250ZW50ID0gXCJGZWVscyBMaWtlIFwiICsgZGF0YS5mZWVsc2xpa2VfYyArIFwiIMKwQ1wiO1xuICBmZWVsc2xpa2VfRi50ZXh0Q29udGVudCA9IFwiRmVlbHMgTGlrZSBcIiArIGRhdGEuZmVlbHNsaWtlX2YgKyBcIiDCsEZcIjtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgaHVtaWRpdHkgOiAke2RhdGEuaHVtaWRpdHl9ICVgO1xuICBwbGFjZS50ZXh0Q29udGVudCA9IGBUaGUgQ291bnRyeSBpcyAgJHtkYXRhLmNvdW50cnl9IGFuZCB0aGUgQ2l0eSBpcyAgJHtkYXRhLmNpdHl9YDtcbiAgdGVtcEMudGV4dENvbnRlbnQgPSBkYXRhLnRlbXBfYyArIFwiIMKwQ1wiO1xuICBpZiAoIWRhdGEuaXNkYXkpIHtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZy5zcmMgPSByZXF1aXJlKFwiLi9uaWdodC13aXRoLXN0YXJzLXN2Z3JlcG8tY29tLnN2Z1wiKTtcbiAgICBpbWcuYWx0ID0gXCJSYWluIEljb25cIjtcblxuICAgIHdoaWxlIChzdmcuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgIHN2Zy5yZW1vdmVDaGlsZChzdmcuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cbiAgICBzdmcuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZy5zcmMgPSByZXF1aXJlKFwiLi9zdW5ueS1zdmdyZXBvLWNvbS5zdmdcIik7XG4gICAgaW1nLmFsdCA9IFwiU3VubnkgSWNvblwiO1xuICAgIHdoaWxlIChzdmcuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgIHN2Zy5yZW1vdmVDaGlsZChzdmcuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cbiAgICBzdmcuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgfVxuICAvLyBhbGVydChcIiAgdXBkYXRlQ2FyZCAgZG9uZVwiKTtcbn1cbmZ1bmN0aW9uIGNsZWFyQ2FyZCgpIHtcbiAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm90dG9tXCIpO1xuICBjYXJkRGl2LnRleHRDb250ZW50ID0gXCJcIjtcbn1cblxuZXhwb3J0IHsgcmVuZGVyIH07XG4iLCJpbXBvcnQgeyBzaG93T2JqZWN0IH0gZnJvbSBcIi4vd2VhdGhlcl9kYXRhXCI7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9ybSgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjb25zdCBkaXZGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2Rm9ybS5jbGFzc0xpc3QuYWRkKFwibWItM1wiKTtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gXCJFbnRlciBBIENpdHk6XCI7XG4gIGxhYmVsLnN0eWxlLmNvbG9yPSBcIndoaXRlXCI7XG4gIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tbGFiZWwnKTtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpO1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdjaXR5SW5wdXQnKTtcbiAgZGl2Rm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIGRpdkZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInN1Ym1pdGJ1dHRvblwiKTtcbiAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChkaXZGb3JtKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuICBjb25zdCBpbnB1dEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dEhlYWRlcicpO1xuICBpbnB1dEhlYWRlci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgdGVtcENhcmQoKTtcbiAgcmV0dXJuIHtcbiAgICBmb3JtLFxuICAgIGlucHV0LFxuICAgIHN1Ym1pdEJ1dHRvblxuICAgIC8vIGNhcmRCb2R5LFxuICAgIC8vIGNhcmREaXYsXG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVEaXNwbGF5Q2FyZCgpe1xuICAvLyBjb25zdCBjYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAvLyB0ZXh0LnRleHRDb250ZW50PVwiVGhlIFdlYXRoZXIgaXMgUGxlYXNhbnRcIjtcbiAgLy8gdGV4dC5jbGFzc0xpc3QuYWRkKCd0ZXh0Jyk7XG4gIC8vIGNhcmREaXYuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAvLyBjb25zdCBjYXJkQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyBjYXJkQm9keS5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKTtcbiAgLy8gY2FyZEJvZHkuYXBwZW5kQ2hpbGQodGV4dCk7XG4gIC8vIGNhcmREaXYuYXBwZW5kQ2hpbGQoY2FyZEJvZHkpO1xuICAvLyByZXR1cm4ge1xuICAvLyAgIGNhcmREaXYsY2FyZEJvZHlcbiAgLy8gfVxufVxuZnVuY3Rpb24gdGVtcENhcmQoKXtcbiBjb25zdCBpbmZvRGl2MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjT25lJyk7XG4gY29uc3QgaW5mb0RpdjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY1R3bycpO1xuIGNvbnN0IGluZm9EaXYzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NUaHJlZScpO1xuIGNvbnN0IHBsYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTsgcGxhY2UuY2xhc3NMaXN0LmFkZCgncGxhY2UnKTtcbiBjb25zdCBmZWVsc0MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpOyBmZWVsc0MuY2xhc3NMaXN0LmFkZCgnZmVlbHNDJyk7XG4gY29uc3QgZmVlbHNGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtmZWVsc0YuY2xhc3NMaXN0LmFkZChcImZlZWxzRlwiKTtcbiBjb25zdCBsb2NhbHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO2xvY2FsdGltZS5jbGFzc0xpc3QuYWRkKFwibG9jYWx0aW1lXCIpO1xuIGNvbnN0IGxhc3RfdXBkYXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7bGFzdF91cGRhdGVkLmNsYXNzTGlzdC5hZGQoXCJsYXN0X3VwZGF0ZWRcIik7XG4gY29uc3QgaHVtaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO2h1bWlkLmNsYXNzTGlzdC5hZGQoJ2h1bWlkJyk7XG4gY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlJyk7XG4gaW5mb0RpdjEuYXBwZW5kQ2hpbGQocGxhY2UpO1xuIGluZm9EaXYyLmFwcGVuZENoaWxkKGZlZWxzQyk7XG4gaW5mb0RpdjIuYXBwZW5kQ2hpbGQoZmVlbHNGKTtcbiBpbmZvRGl2Mi5hcHBlbmRDaGlsZChsb2NhbHRpbWUpO1xuIGluZm9EaXYzLmFwcGVuZENoaWxkKGh1bWlkKTtcbiBpbmZvRGl2My5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiBpbmZvRGl2My5hcHBlbmRDaGlsZChsYXN0X3VwZGF0ZWQpO1xuIFxufVxuXG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9VaV9jb250cm9sc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5yZW5kZXIoKTtcbiIsImltcG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tIFwiLi9VaV9jb250cm9sc1wiO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlciggbG9jYXRpb24pe1xuICBjb25zdCBBUEkgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0xOTQ4NTU0YTUzMzI0MzI0OTE5MjA0MDQzMjQyNzA1JnE9JHtsb2NhdGlvbn1gO1xuICBjb25zdCByZXNwb25zZSA9ICBhd2FpdCBmZXRjaCAoQVBJICwge21vZGUgOiBcImNvcnNcIn0pO1xuICBpZighcmVzcG9uc2Uub2spe1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5ldHdvcmsgSXNzdWUgZm91bmRcIik7XG4gIH1cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgIHJldHVybiBkYXRhO1xufVxuICIsImltcG9ydCBnZXRXZWF0aGVyIGZyb20gXCIuL3dlYXRoZXJfYXBpXCI7XG5jb25zdCBzaG93T2JqZWN0ID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gIGNvbnN0IHdlYXRoZXJBbGxEYXRhID0gYXdhaXQgZ2V0V2VhdGhlcihsb2NhdGlvbik7XG4gIGF3YWl0IGRlbGF5KDMwMDApO1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyQWxsRGF0YSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWU9IFwiXCI7XG4gIHJldHVybiB7XG4gICAgbGFzdF91cGRhdGVkIDogd2VhdGhlckFsbERhdGEuY3VycmVudC5sYXN0X3VwZGF0ZWQsXG4gICAgbG9jYWx0aW1lIDogd2VhdGhlckFsbERhdGEubG9jYXRpb24ubG9jYWx0aW1lLFxuICAgIGNvdW50cnk6IHdlYXRoZXJBbGxEYXRhLmxvY2F0aW9uLmNvdW50cnksXG4gICAgY2l0eTogd2VhdGhlckFsbERhdGEubG9jYXRpb24ubmFtZSxcbiAgICB0ZW1wX2M6IHdlYXRoZXJBbGxEYXRhLmN1cnJlbnQudGVtcF9jLFxuICAgIGZlZWxzbGlrZV9jOiB3ZWF0aGVyQWxsRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jLFxuICAgIHRlbXBfZjogd2VhdGhlckFsbERhdGEuY3VycmVudC50ZW1wX2YsXG4gICAgZmVlbHNsaWtlX2Y6IHdlYXRoZXJBbGxEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2YsXG4gICAgbWVzc2FnZSA6IHdlYXRoZXJBbGxEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXG4gICAgaHVtaWRpdHk6IHdlYXRoZXJBbGxEYXRhLmN1cnJlbnQuaHVtaWRpdHksXG4gICAgaXNkYXk6IHdlYXRoZXJBbGxEYXRhLmN1cnJlbnQuaXNfZGF5XG4gIH07XG59O1xuZnVuY3Rpb24gZGVsYXkobXMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG5cbmV4cG9ydCB7c2hvd09iamVjdH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=