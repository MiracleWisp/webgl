/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style/main.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style/main.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n#wgl {\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/assets/style/main.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB","sourcesContent":["body {\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n#wgl {\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/assets/textures/ElsaTex.png":
/*!*****************************************!*\
  !*** ./src/assets/textures/ElsaTex.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "img/7e5d47e09c691d7fa956d540b1cd4a32.png");

/***/ }),

/***/ "./src/assets/textures/FajbNY.png":
/*!****************************************!*\
  !*** ./src/assets/textures/FajbNY.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "img/0f4876770ef440c22b44aab76dccdf27.png");

/***/ }),

/***/ "./src/assets/textures/bzz.png":
/*!*************************************!*\
  !*** ./src/assets/textures/bzz.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "img/d23daf6c99fab64123a7f41c53c4e815.png");

/***/ }),

/***/ "./src/assets/textures/planeta.png":
/*!*****************************************!*\
  !*** ./src/assets/textures/planeta.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "img/2de2645894a076d3e1c83de5ce7c6f0c.png");

/***/ }),

/***/ "./src/assets/textures/texture-18.png":
/*!********************************************!*\
  !*** ./src/assets/textures/texture-18.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "img/73947149a157ef1320435b53d7809333.png");

/***/ }),

/***/ "./node_modules/gl-matrix/esm/common.js":
/*!**********************************************!*\
  !*** ./node_modules/gl-matrix/esm/common.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EPSILON": () => /* binding */ EPSILON,
/* harmony export */   "ARRAY_TYPE": () => /* binding */ ARRAY_TYPE,
/* harmony export */   "RANDOM": () => /* binding */ RANDOM,
/* harmony export */   "setMatrixArrayType": () => /* binding */ setMatrixArrayType,
/* harmony export */   "toRadian": () => /* binding */ toRadian,
/* harmony export */   "equals": () => /* binding */ equals
/* harmony export */ });
/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */

function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
  return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */

function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function () {
  var y = 0,
      i = arguments.length;

  while (i--) {
    y += arguments[i] * arguments[i];
  }

  return Math.sqrt(y);
};

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat3.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat3.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => /* binding */ create,
/* harmony export */   "fromMat4": () => /* binding */ fromMat4,
/* harmony export */   "clone": () => /* binding */ clone,
/* harmony export */   "copy": () => /* binding */ copy,
/* harmony export */   "fromValues": () => /* binding */ fromValues,
/* harmony export */   "set": () => /* binding */ set,
/* harmony export */   "identity": () => /* binding */ identity,
/* harmony export */   "transpose": () => /* binding */ transpose,
/* harmony export */   "invert": () => /* binding */ invert,
/* harmony export */   "adjoint": () => /* binding */ adjoint,
/* harmony export */   "determinant": () => /* binding */ determinant,
/* harmony export */   "multiply": () => /* binding */ multiply,
/* harmony export */   "translate": () => /* binding */ translate,
/* harmony export */   "rotate": () => /* binding */ rotate,
/* harmony export */   "scale": () => /* binding */ scale,
/* harmony export */   "fromTranslation": () => /* binding */ fromTranslation,
/* harmony export */   "fromRotation": () => /* binding */ fromRotation,
/* harmony export */   "fromScaling": () => /* binding */ fromScaling,
/* harmony export */   "fromMat2d": () => /* binding */ fromMat2d,
/* harmony export */   "fromQuat": () => /* binding */ fromQuat,
/* harmony export */   "normalFromMat4": () => /* binding */ normalFromMat4,
/* harmony export */   "projection": () => /* binding */ projection,
/* harmony export */   "str": () => /* binding */ str,
/* harmony export */   "frob": () => /* binding */ frob,
/* harmony export */   "add": () => /* binding */ add,
/* harmony export */   "subtract": () => /* binding */ subtract,
/* harmony export */   "multiplyScalar": () => /* binding */ multiplyScalar,
/* harmony export */   "multiplyScalarAndAdd": () => /* binding */ multiplyScalarAndAdd,
/* harmony export */   "exactEquals": () => /* binding */ exactEquals,
/* harmony export */   "equals": () => /* binding */ equals,
/* harmony export */   "mul": () => /* binding */ mul,
/* harmony export */   "sub": () => /* binding */ sub
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(9);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }

  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {ReadonlyMat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */

function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}
/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */

function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */

function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

  var det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}
/**
 * Calculates the determinant of a mat3
 *
 * @param {ReadonlyMat3} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  var b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  var b20 = b[6],
      b21 = b[7],
      b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to translate
 * @param {ReadonlyVec2} v vector to translate by
 * @returns {mat3} out
 */

function translate(out, a, v) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function rotate(out, a, rad) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat3} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = -s;
  out[4] = c;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat3} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to copy
 * @returns {mat3} out
 **/

function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;
  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;
  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}
/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat3} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}
/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyMat4} a Mat4 to derive the normal matrix from
 *
 * @returns {mat3} out
 */

function normalFromMat4(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */

function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}
/**
 * Returns a string representation of a mat3
 *
 * @param {ReadonlyMat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")";
}
/**
 * Returns Frobenius norm of a mat3
 *
 * @param {ReadonlyMat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
}
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}
/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7],
      a8 = a[8];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7],
      b8 = b[8];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}
/**
 * Alias for {@link mat3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat3.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat4.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat4.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => /* binding */ create,
/* harmony export */   "clone": () => /* binding */ clone,
/* harmony export */   "copy": () => /* binding */ copy,
/* harmony export */   "fromValues": () => /* binding */ fromValues,
/* harmony export */   "set": () => /* binding */ set,
/* harmony export */   "identity": () => /* binding */ identity,
/* harmony export */   "transpose": () => /* binding */ transpose,
/* harmony export */   "invert": () => /* binding */ invert,
/* harmony export */   "adjoint": () => /* binding */ adjoint,
/* harmony export */   "determinant": () => /* binding */ determinant,
/* harmony export */   "multiply": () => /* binding */ multiply,
/* harmony export */   "translate": () => /* binding */ translate,
/* harmony export */   "scale": () => /* binding */ scale,
/* harmony export */   "rotate": () => /* binding */ rotate,
/* harmony export */   "rotateX": () => /* binding */ rotateX,
/* harmony export */   "rotateY": () => /* binding */ rotateY,
/* harmony export */   "rotateZ": () => /* binding */ rotateZ,
/* harmony export */   "fromTranslation": () => /* binding */ fromTranslation,
/* harmony export */   "fromScaling": () => /* binding */ fromScaling,
/* harmony export */   "fromRotation": () => /* binding */ fromRotation,
/* harmony export */   "fromXRotation": () => /* binding */ fromXRotation,
/* harmony export */   "fromYRotation": () => /* binding */ fromYRotation,
/* harmony export */   "fromZRotation": () => /* binding */ fromZRotation,
/* harmony export */   "fromRotationTranslation": () => /* binding */ fromRotationTranslation,
/* harmony export */   "fromQuat2": () => /* binding */ fromQuat2,
/* harmony export */   "getTranslation": () => /* binding */ getTranslation,
/* harmony export */   "getScaling": () => /* binding */ getScaling,
/* harmony export */   "getRotation": () => /* binding */ getRotation,
/* harmony export */   "fromRotationTranslationScale": () => /* binding */ fromRotationTranslationScale,
/* harmony export */   "fromRotationTranslationScaleOrigin": () => /* binding */ fromRotationTranslationScaleOrigin,
/* harmony export */   "fromQuat": () => /* binding */ fromQuat,
/* harmony export */   "frustum": () => /* binding */ frustum,
/* harmony export */   "perspective": () => /* binding */ perspective,
/* harmony export */   "perspectiveFromFieldOfView": () => /* binding */ perspectiveFromFieldOfView,
/* harmony export */   "ortho": () => /* binding */ ortho,
/* harmony export */   "lookAt": () => /* binding */ lookAt,
/* harmony export */   "targetTo": () => /* binding */ targetTo,
/* harmony export */   "str": () => /* binding */ str,
/* harmony export */   "frob": () => /* binding */ frob,
/* harmony export */   "add": () => /* binding */ add,
/* harmony export */   "subtract": () => /* binding */ subtract,
/* harmony export */   "multiplyScalar": () => /* binding */ multiplyScalar,
/* harmony export */   "multiplyScalarAndAdd": () => /* binding */ multiplyScalarAndAdd,
/* harmony export */   "exactEquals": () => /* binding */ exactEquals,
/* harmony export */   "equals": () => /* binding */ equals,
/* harmony export */   "mul": () => /* binding */ mul,
/* harmony export */   "sub": () => /* binding */ sub
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }

  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */

function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */

function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {ReadonlyMat4} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {mat4} out
 */

function translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {ReadonlyVec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function rotate(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Scaling vector
 * @returns {mat4} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function fromRotation(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c; // Perform rotation-specific matrix multiplication

  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {ReadonlyQuat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */

function fromQuat2(out, a) {
  var translation = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense

  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }

  fromRotationTranslation(out, a, translation);
  return out;
}
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */

function getRotation(out, mat) {
  var scaling = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }

  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @returns {mat4} out
 */

function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */

function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */

function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspective(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }

  return out;
}
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function ortho(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyey - centery) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyez - centerz) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.hypot(z0, z1, z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.hypot(x0, x1, x2);

  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.hypot(y0, y1, y2);

  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];
  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];
  var len = z0 * z0 + z1 * z1 + z2 * z2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
/**
 * Returns a string representation of a mat4
 *
 * @param {ReadonlyMat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
/**
 * Alias for {@link mat4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat4.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec3.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec3.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => /* binding */ create,
/* harmony export */   "clone": () => /* binding */ clone,
/* harmony export */   "length": () => /* binding */ length,
/* harmony export */   "fromValues": () => /* binding */ fromValues,
/* harmony export */   "copy": () => /* binding */ copy,
/* harmony export */   "set": () => /* binding */ set,
/* harmony export */   "add": () => /* binding */ add,
/* harmony export */   "subtract": () => /* binding */ subtract,
/* harmony export */   "multiply": () => /* binding */ multiply,
/* harmony export */   "divide": () => /* binding */ divide,
/* harmony export */   "ceil": () => /* binding */ ceil,
/* harmony export */   "floor": () => /* binding */ floor,
/* harmony export */   "min": () => /* binding */ min,
/* harmony export */   "max": () => /* binding */ max,
/* harmony export */   "round": () => /* binding */ round,
/* harmony export */   "scale": () => /* binding */ scale,
/* harmony export */   "scaleAndAdd": () => /* binding */ scaleAndAdd,
/* harmony export */   "distance": () => /* binding */ distance,
/* harmony export */   "squaredDistance": () => /* binding */ squaredDistance,
/* harmony export */   "squaredLength": () => /* binding */ squaredLength,
/* harmony export */   "negate": () => /* binding */ negate,
/* harmony export */   "inverse": () => /* binding */ inverse,
/* harmony export */   "normalize": () => /* binding */ normalize,
/* harmony export */   "dot": () => /* binding */ dot,
/* harmony export */   "cross": () => /* binding */ cross,
/* harmony export */   "lerp": () => /* binding */ lerp,
/* harmony export */   "hermite": () => /* binding */ hermite,
/* harmony export */   "bezier": () => /* binding */ bezier,
/* harmony export */   "random": () => /* binding */ random,
/* harmony export */   "transformMat4": () => /* binding */ transformMat4,
/* harmony export */   "transformMat3": () => /* binding */ transformMat3,
/* harmony export */   "transformQuat": () => /* binding */ transformQuat,
/* harmony export */   "rotateX": () => /* binding */ rotateX,
/* harmony export */   "rotateY": () => /* binding */ rotateY,
/* harmony export */   "rotateZ": () => /* binding */ rotateZ,
/* harmony export */   "angle": () => /* binding */ angle,
/* harmony export */   "zero": () => /* binding */ zero,
/* harmony export */   "str": () => /* binding */ str,
/* harmony export */   "exactEquals": () => /* binding */ exactEquals,
/* harmony export */   "equals": () => /* binding */ equals,
/* harmony export */   "sub": () => /* binding */ sub,
/* harmony export */   "mul": () => /* binding */ mul,
/* harmony export */   "div": () => /* binding */ div,
/* harmony export */   "dist": () => /* binding */ dist,
/* harmony export */   "sqrDist": () => /* binding */ sqrDist,
/* harmony export */   "len": () => /* binding */ len,
/* harmony export */   "sqrLen": () => /* binding */ sqrLen,
/* harmony export */   "forEach": () => /* binding */ forEach
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  return out;
}
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {ReadonlyVec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */

function fromValues(x, y, z) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the source vector
 * @returns {vec3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */

function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to ceil
 * @returns {vec3} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to floor
 * @returns {vec3} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to round
 * @returns {vec3} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to negate
 * @returns {vec3} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to invert
 * @returns {vec3} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 * Math.PI;
  var z = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec3} out
 */

function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var x = a[0],
      y = a[1],
      z = a[2]; // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);

  var uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

  var uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2; // vec3.scale(uuv, uuv, 2);

  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateX(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
  r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateY(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateZ(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
  r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
  r[2] = p[2]; //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {ReadonlyVec3} a The first operand
 * @param {ReadonlyVec3} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      bx = b[0],
      by = b[1],
      bz = b[2],
      mag1 = Math.sqrt(ax * ax + ay * ay + az * az),
      mag2 = Math.sqrt(bx * bx + by * by + bz * bz),
      mag = mag1 * mag2,
      cosine = mag && dot(a, b) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
/**
 * Alias for {@link vec3.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec3.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec3.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec3.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }

    return a;
  };
}();

/***/ }),

/***/ "./src/assets/models/Elsa.obj":
/*!************************************!*\
  !*** ./src/assets/models/Elsa.obj ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("v 0.015438 1.619229 -0.05404\nv 0.017015 1.613816 -0.036741\nv 0.034143 1.590715 -0.030115\nv 0.030477 1.600212 -0.062569\nv 0.007985 1.609193 -0.016164\nv 0.016162 1.585069 -0.00999\nv -0.006941 1.605649 -0.006044\nv -0.003147 1.582672 0.001449\nv -0.022055 1.583153 0.003283\nv -0.022057 1.604874 -0.002399\nv 0.008922 1.602754 -0.079717\nv 0.001435 1.620872 -0.072206\nv -0.022099 1.60206 -0.086502\nv -0.022095 1.618466 -0.078997\nv 0.030477 1.600212 -0.062569\nv 0.034143 1.590715 -0.030115\nv 0.061349 1.577399 -0.021197\nv 0.055865 1.589337 -0.064643\nv 0.034956 1.564558 0.002575\nv 0.016162 1.585069 -0.00999\nv 0.004124 1.55841 0.016463\nv -0.003147 1.582672 0.001449\nv -0.022047 1.55379 0.019629\nv -0.022055 1.583153 0.003283\nv 0.088619 1.583844 -0.062172\nv 0.090528 1.57798 -0.030686\nv -0.022029 1.50911 0.056771\nv 0.018683 1.512448 0.054706\nv 0.057157 1.521463 0.028224\nv 0.116937 1.575889 -0.064806\nv 0.118489 1.572453 -0.033662\nv 0.084422 1.563419 -0.012226\nv 0.112096 1.555666 -0.011361\nv 0.087358 1.527982 0.006472\nv 0.076551 1.482023 0.048741\nv 0.091553 1.492292 0.005019\nv 0.153071 1.543761 -0.039798\nv 0.147219 1.541498 -0.076716\nv 0.140451 1.534482 -0.015626\nv 0.122898 1.513452 -0.003822\nv 0.103662 1.491006 -0.00921\nv 0.09652 1.477395 -0.03247\nv 0.094505 1.46666 -0.017153\nv 0.089069 1.426281 0.017954\nv 0.090856 1.406373 -0.048443\nv 0.095246 1.454377 -0.061356\nv 0.077673 1.368591 0.010639\nv 0.083329 1.369116 -0.039877\nv 0.091679 1.472768 -0.056558\nv 0.052371 1.25395 0.008748\nv 0.048055 1.26059 -0.036475\nv 0.064342 1.368628 0.052677\nv 0.032751 1.239128 0.052982\nv 0.02888 1.368367 0.07944\nv -0.022036 1.226624 0.071208\nv -0.022017 1.368321 0.087755\nv 0.066703 1.216963 0.011656\nv 0.053567 1.222414 -0.041218\nv 0.042273 1.192138 0.058093\nv -0.022026 1.131425 0.077479\nv 0.008922 1.602754 -0.079717\nv 0.030477 1.600212 -0.062569\nv 0.055865 1.589337 -0.064643\nv 0.025391 1.566852 -0.097282\nv -0.022099 1.60206 -0.086502\nv -0.022105 1.557882 -0.098486\nv 0.090717 1.567021 -0.087723\nv 0.036629 1.481692 -0.107592\nv 0.075904 1.489344 -0.100792\nv 0.05514 1.427047 -0.095123\nv 0.082946 1.459332 -0.088439\nv 0.071651 1.412006 -0.081001\nv 0.095246 1.454377 -0.061356\nv 0.090856 1.406373 -0.048443\nv 0.083329 1.369116 -0.039877\nv 0.06391 1.370873 -0.070695\nv 0.017334 1.370401 -0.086774\nv -0.02211 1.473091 -0.108591\nv -0.0221 1.368899 -0.089125\nv 0.123727 1.519758 -0.097529\nv 0.099878 1.485934 -0.091478\nv 0.091679 1.472768 -0.056558\nv 0.048055 1.26059 -0.036475\nv 0.014266 1.263983 -0.063106\nv -0.022091 1.265813 -0.07162\nv 0.053567 1.222414 -0.041218\nv 0.018902 1.223315 -0.067856\nv -0.022181 1.220595 -0.075285\nv 0.116937 1.575889 -0.064806\nv 0.088619 1.583844 -0.062172\nv 0.147219 1.541498 -0.076716\nv 0.147219 1.541498 -0.076716\nv 0.153071 1.543761 -0.039798\nv 0.173371 1.497655 -0.074631\nv 0.149725 1.484238 -0.093611\nv 0.123727 1.519758 -0.097529\nv 0.099878 1.485934 -0.091478\nv 0.128694 1.467753 -0.096066\nv 0.091679 1.472768 -0.056558\nv 0.110972 1.454969 -0.063264\nv 0.174538 1.499377 -0.04305\nv 0.158588 1.487999 -0.01584\nv 0.140451 1.534482 -0.015626\nv 0.122898 1.513452 -0.003822\nv 0.129268 1.469517 -0.016062\nv 0.103662 1.491006 -0.00921\nv 0.117254 1.460117 -0.028978\nv 0.09652 1.477395 -0.03247\nv 0.110972 1.454969 -0.063264\nv 0.091679 1.472768 -0.056558\nv 0.252823 1.34199 -0.024296\nv 0.270783 1.351331 -0.043463\nv 0.23128 1.327539 -0.022172\nv 0.213103 1.315196 -0.042658\nv 0.212725 1.314202 -0.066879\nv 0.262223 1.329134 -0.022955\nv 0.303479 1.265029 -0.023702\nv 0.323696 1.277131 -0.044436\nv 0.282408 1.251231 -0.024487\nv 0.240556 1.313425 -0.021616\nv 0.218423 1.307015 -0.043116\nv 0.267625 1.238897 -0.054747\nv 0.39948 1.132664 -0.037732\nv 0.319447 1.27466 -0.075239\nv 0.402109 1.133267 -0.062262\nv 0.388169 1.128086 -0.027819\nv 0.374366 1.122275 -0.035496\nv 0.373788 1.120225 -0.059513\nv 0.303535 1.263237 -0.089878\nv 0.392482 1.128573 -0.074138\nv 0.283765 1.246804 -0.090564\nv 0.378514 1.122646 -0.074396\nv 0.267625 1.238897 -0.054747\nv 0.373788 1.120225 -0.059513\nv 0.258957 1.324651 -0.092139\nv 0.276844 1.338379 -0.071163\nv 0.265141 1.356484 -0.070878\nv 0.255577 1.371202 -0.071269\nv 0.244787 1.344779 -0.092322\nv 0.230552 1.365653 -0.092515\nv 0.209916 1.344973 -0.089134\nv 0.221025 1.328195 -0.088181\nv 0.212725 1.314202 -0.066879\nv 0.23395 1.311435 -0.089796\nv 0.077614 1.425188 0.071239\nv 0.038541 1.424163 0.100642\nv -0.022008 1.423042 0.100838\nv -0.02201 1.453611 0.096905\nv 0.036405 1.466867 0.088689\nv -0.059604 1.619229 -0.054003\nv -0.077719 1.5915 -0.029955\nv -0.061164 1.613816 -0.036702\nv -0.074092 1.601014 -0.062409\nv -0.052114 1.609193 -0.016134\nv -0.060285 1.585121 -0.009985\nv -0.037177 1.605649 -0.006029\nv -0.040964 1.582672 0.001468\nv -0.022055 1.583153 0.003283\nv -0.022057 1.604874 -0.002399\nv -0.045618 1.620872 -0.072183\nv -0.053089 1.602842 -0.07971\nv -0.022095 1.618466 -0.078997\nv -0.022099 1.60206 -0.086502\nv -0.074092 1.601014 -0.062409\nv -0.099929 1.58947 -0.064531\nv -0.105654 1.57716 -0.02114\nv -0.077719 1.5915 -0.029955\nv -0.07895 1.564688 0.002665\nv -0.060285 1.585121 -0.009985\nv -0.048221 1.55841 0.016488\nv -0.040964 1.582672 0.001468\nv -0.132962 1.583602 -0.062091\nv -0.134842 1.577743 -0.030602\nv -0.062743 1.512449 0.054746\nv -0.101724 1.520943 0.028178\nv -0.159335 1.574973 -0.064744\nv -0.161336 1.571616 -0.033566\nv -0.12872 1.563184 -0.012145\nv -0.155875 1.554422 -0.011293\nv -0.13113 1.528405 0.006527\nv -0.120618 1.482024 0.048838\nv -0.139295 1.48981 0.004959\nv -0.197298 1.544032 -0.039669\nv -0.191621 1.541703 -0.076596\nv -0.185371 1.534707 -0.015529\nv -0.167529 1.512484 -0.00376\nv -0.154631 1.488303 -0.00921\nv -0.149132 1.473998 -0.032485\nv -0.145719 1.463915 -0.01716\nv -0.133166 1.426282 0.018062\nv -0.135018 1.406374 -0.048333\nv -0.141986 1.453233 -0.061276\nv -0.121781 1.368591 0.010733\nv -0.127484 1.369078 -0.039762\nv -0.148301 1.468194 -0.056661\nv -0.096489 1.253865 0.008834\nv -0.09221 1.26059 -0.036421\nv -0.108408 1.368664 0.052748\nv -0.076837 1.239128 0.053024\nv -0.072921 1.368294 0.079512\nv -0.110992 1.216958 0.011804\nv -0.098017 1.22244 -0.041055\nv -0.086822 1.191789 0.058127\nv -0.053089 1.602842 -0.07971\nv -0.06903 1.567536 -0.097071\nv -0.099929 1.58947 -0.064531\nv -0.074092 1.601014 -0.062409\nv -0.136437 1.567026 -0.087618\nv -0.080535 1.482069 -0.107521\nv -0.119801 1.48933 -0.100669\nv -0.099348 1.427048 -0.095048\nv -0.128437 1.458577 -0.088356\nv -0.115592 1.412103 -0.080905\nv -0.141986 1.453233 -0.061276\nv -0.135018 1.406374 -0.048333\nv -0.127484 1.369078 -0.039762\nv -0.108093 1.37095 -0.07064\nv -0.061533 1.370403 -0.086737\nv -0.168395 1.519044 -0.097412\nv -0.14518 1.484767 -0.091355\nv -0.148301 1.468194 -0.056661\nv -0.09221 1.26059 -0.036421\nv -0.058441 1.263995 -0.063081\nv -0.098017 1.22244 -0.041055\nv -0.06332 1.223387 -0.067736\nv -0.159335 1.574973 -0.064744\nv -0.132962 1.583602 -0.062091\nv -0.191621 1.541703 -0.076596\nv -0.191621 1.541703 -0.076596\nv -0.222081 1.50188 -0.074538\nv -0.197298 1.544032 -0.039669\nv -0.197591 1.484956 -0.093479\nv -0.168395 1.519044 -0.097412\nv -0.14518 1.484767 -0.091355\nv -0.177665 1.467154 -0.095958\nv -0.148301 1.468194 -0.056661\nv -0.16078 1.453238 -0.063175\nv -0.221345 1.50163 -0.042891\nv -0.206139 1.489234 -0.015699\nv -0.185371 1.534707 -0.015529\nv -0.167529 1.512484 -0.00376\nv -0.178069 1.468905 -0.015952\nv -0.154631 1.488303 -0.00921\nv -0.169831 1.459049 -0.028947\nv -0.149132 1.473998 -0.032485\nv -0.16078 1.453238 -0.063175\nv -0.148301 1.468194 -0.056661\nv -0.309498 1.349692 -0.024164\nv -0.326869 1.360129 -0.043313\nv -0.289055 1.333711 -0.022065\nv -0.271667 1.320311 -0.04257\nv -0.271373 1.319309 -0.066792\nv -0.319748 1.337403 -0.022824\nv -0.365067 1.276042 -0.023575\nv -0.384479 1.289432 -0.044288\nv -0.344928 1.260918 -0.024383\nv -0.299161 1.320293 -0.021509\nv -0.277502 1.312489 -0.043029\nv -0.33099 1.247677 -0.05466\nv -0.469661 1.149731 -0.037599\nv -0.380418 1.28671 -0.075095\nv -0.472263 1.15052 -0.062126\nv -0.458924 1.144073 -0.02769\nv -0.445531 1.137389 -0.035381\nv -0.445101 1.135328 -0.0594\nv -0.365284 1.274296 -0.089752\nv -0.462669 1.145616 -0.074019\nv -0.346613 1.256626 -0.090461\nv -0.44967 1.138063 -0.074278\nv -0.33099 1.247677 -0.05466\nv -0.445101 1.135328 -0.0594\nv -0.31685 1.332723 -0.092013\nv -0.333777 1.347597 -0.071016\nv -0.320888 1.364982 -0.070729\nv -0.310065 1.379498 -0.071134\nv -0.301419 1.351902 -0.092194\nv -0.288134 1.368919 -0.092359\nv -0.269963 1.345426 -0.088771\nv -0.278771 1.33382 -0.08808\nv -0.271373 1.319309 -0.066792\nv -0.292743 1.317926 -0.089695\nv -0.121659 1.425189 0.071336\nv -0.080433 1.466868 0.088746\nv -0.082557 1.424163 0.100701\nv 0.404823 1.086021 -0.010104\nv 0.389397 1.090145 -0.010419\nv 0.392509 1.075345 -0.002663\nv 0.403008 1.069591 -0.005204\nv 0.376441 1.079433 -0.020983\nv 0.383286 1.064157 -0.009804\nv 0.411355 1.099502 -0.020793\nv 0.393444 1.119272 -0.024793\nv 0.415965 1.056321 -0.016398\nv 0.410877 1.05379 -0.014386\nv 0.374002 1.110687 -0.031392\nv 0.418015 1.107293 -0.035738\nv 0.403535 1.127647 -0.036758\nv 0.405661 1.129609 -0.06133\nv 0.418017 1.109585 -0.059512\nv 0.396262 1.124086 -0.074871\nv 0.411425 1.106994 -0.072481\nv 0.403463 1.101131 -0.080678\nv 0.452019 1.058405 -0.052673\nv 0.450833 1.059907 -0.032253\nv 0.444589 1.058539 -0.017073\nv 0.451684 1.055872 -0.069989\nv 0.433782 1.049739 -0.014959\nv 0.443511 1.055585 -0.084837\nv 0.465006 1.020397 -0.069097\nv 0.461695 1.018091 -0.078652\nv 0.435552 1.045141 -0.083342\nv 0.453083 1.013966 -0.076139\nv 0.471125 1.019234 -0.053023\nv 0.469902 1.019176 -0.066832\nv 0.47457 1.024643 -0.037435\nv 0.475244 1.024088 -0.05105\nv 0.464906 1.016218 -0.036822\nv 0.460234 1.016576 -0.018974\nv 0.483044 0.978608 -0.0393\nv 0.466208 0.99152 -0.073065\nv 0.460042 0.994353 -0.072468\nv 0.467095 0.987766 -0.06902\nv 0.46095 0.990699 -0.068475\nv 0.493855 0.975229 -0.04373\nv 0.492388 0.979272 -0.048909\nv 0.483218 0.978576 -0.04942\nv 0.491732 0.979266 -0.03951\nv 0.480811 0.980555 -0.055549\nv 0.479701 0.983524 -0.059826\nv 0.460583 1.016528 -0.06679\nv 0.43848 1.041099 -0.068879\nv 0.472596 0.982799 -0.059873\nv 0.473778 0.979833 -0.055579\nv 0.479156 0.982895 -0.051491\nv 0.4722 0.982178 -0.051505\nv 0.459756 1.016171 -0.053012\nv 0.439258 1.039185 -0.052813\nv 0.415965 1.056321 -0.016398\nv 0.410877 1.05379 -0.014386\nv 0.396329 1.05098 -0.021424\nv 0.399529 1.062514 -0.032851\nv 0.376441 1.079433 -0.020983\nv 0.397215 1.075499 -0.051517\nv 0.374002 1.110687 -0.031392\nv 0.375748 1.110199 -0.059314\nv 0.389641 1.086467 -0.063458\nv 0.393404 1.09361 -0.079501\nv 0.382708 1.114974 -0.075231\nv 0.439258 1.039185 -0.052813\nv 0.43848 1.041099 -0.068879\nv 0.438533 1.040177 -0.033912\nv 0.433782 1.049739 -0.014959\nv 0.435552 1.045141 -0.083342\nv 0.453083 1.013966 -0.076139\nv 0.453841 1.014369 -0.067117\nv 0.460583 1.016528 -0.06679\nv 0.459756 1.016171 -0.053012\nv 0.465342 1.015514 -0.051997\nv 0.464906 1.016218 -0.036822\nv 0.461813 1.01764 -0.033717\nv 0.460234 1.016576 -0.018974\nv 0.460042 0.994353 -0.072468\nv 0.46095 0.990699 -0.068475\nv 0.46152 0.995135 -0.06531\nv 0.482596 0.977671 -0.029928\nv 0.481579 0.980618 -0.025929\nv 0.481028 0.980113 -0.033515\nv 0.473778 0.979833 -0.055579\nv 0.4722 0.982178 -0.051505\nv 0.472596 0.982799 -0.059873\nv 0.48493 0.974552 -0.04388\nv 0.483044 0.978608 -0.0393\nv 0.483218 0.978576 -0.04942\nv 0.490603 0.981374 -0.030497\nv 0.482596 0.977671 -0.029928\nv 0.481028 0.980113 -0.033515\nv 0.488597 0.983821 -0.026433\nv 0.481579 0.980618 -0.025929\nv 0.469164 1.022398 -0.01947\nv 0.472265 1.025007 -0.03431\nv 0.488411 0.983533 -0.034032\nv 0.438533 1.040177 -0.033912\nv 0.461813 1.01764 -0.033717\nv 0.453841 1.014369 -0.067117\nv 0.46152 0.995135 -0.06531\nv 0.467641 0.992109 -0.065805\nv 0.465342 1.015514 -0.051997\nv 0.48493 0.974552 -0.04388\nv 0.392482 1.128573 -0.074138\nv 0.402109 1.133267 -0.062262\nv 0.378514 1.122646 -0.074396\nv 0.382708 1.114974 -0.075231\nv 0.39948 1.132664 -0.037732\nv 0.388169 1.128086 -0.027819\nv 0.374366 1.122275 -0.035496\nv 0.393404 1.09361 -0.079501\nv 0.373788 1.120225 -0.059513\nv 0.378514 1.122646 -0.074396\nv 0.374366 1.122275 -0.035496\nv 0.405965 1.043945 0.000926\nv 0.41014 1.044221 -0.011175\nv 0.396084 1.041974 -0.000882\nv 0.418207 1.017341 0.003979\nv 0.420872 1.014525 -0.001982\nv 0.414688 1.011243 0.00554\nv 0.416257 1.010087 -0.003587\nv 0.406986 1.014881 0.003614\nv 0.408446 1.014423 -0.003384\nv 0.41014 1.044221 -0.011175\nv 0.396596 1.042251 -0.013922\nv 0.383286 1.064157 -0.009804\nv 0.396084 1.041974 -0.000882\nv 0.408446 1.014423 -0.003384\nv 0.412042 1.023739 -0.012602\nv 0.406986 1.014881 0.003614\nv 0.420872 1.014525 -0.001982\nv 0.416257 1.010087 -0.003587\nv -0.477695 1.103894 -0.010014\nv -0.476941 1.087377 -0.005128\nv -0.466091 1.09244 -0.002587\nv -0.462035 1.107016 -0.010334\nv -0.449802 1.0955 -0.020913\nv -0.457612 1.080687 -0.009743\nv -0.48335 1.117777 -0.020688\nv -0.464204 1.136355 -0.024681\nv -0.490731 1.074979 -0.016326\nv -0.485815 1.072124 -0.014319\nv -0.44536 1.12654 -0.031298\nv -0.489501 1.125994 -0.035623\nv -0.474013 1.14501 -0.036626\nv -0.476012 1.147138 -0.061196\nv -0.489367 1.1283 -0.059395\nv -0.466731 1.141383 -0.074754\nv -0.482962 1.125302 -0.072369\nv -0.475399 1.118945 -0.080576\nv -0.526626 1.07941 -0.052578\nv -0.52532 1.080821 -0.032158\nv -0.519171 1.079027 -0.016983\nv -0.526465 1.076875 -0.069896\nv -0.509073 1.069393 -0.014875\nv -0.518612 1.07574 -0.084733\nv -0.539988 1.048128 -0.069845\nv -0.538469 1.044134 -0.079306\nv -0.511067 1.065126 -0.083267\nv -0.53202 1.037143 -0.076784\nv -0.550115 1.044123 -0.052937\nv -0.548337 1.044252 -0.066708\nv -0.551442 1.047085 -0.037344\nv -0.55208 1.046661 -0.050963\nv -0.542287 1.038127 -0.036746\nv -0.545256 1.045595 -0.020211\nv -0.548914 1.048262 -0.03491\nv -0.536311 1.039814 -0.020053\nv -0.557231 1.003658 -0.026721\nv -0.564316 1.006748 -0.02697\nv -0.562867 1.001779 -0.03923\nv -0.545763 1.015668 -0.072632\nv -0.538962 1.01591 -0.072476\nv -0.558326 1.000736 -0.030718\nv -0.566406 1.004308 -0.030995\nv -0.556914 1.003242 -0.034325\nv -0.564365 1.006544 -0.034573\nv -0.540946 1.013143 -0.068185\nv -0.547768 1.012795 -0.068282\nv -0.514333 1.060329 -0.03384\nv -0.538285 1.04111 -0.034733\nv -0.546412 1.017186 -0.065391\nv -0.531295 1.038653 -0.066837\nv -0.539568 1.017626 -0.06535\nv -0.514247 1.061278 -0.068806\nv -0.490731 1.074979 -0.016326\nv -0.473938 1.080114 -0.032782\nv -0.471483 1.068389 -0.021367\nv -0.485815 1.072124 -0.014319\nv -0.449802 1.0955 -0.020913\nv -0.470801 1.092939 -0.051439\nv -0.44536 1.12654 -0.031298\nv -0.447146 1.12619 -0.05922\nv -0.462542 1.103406 -0.063376\nv -0.465844 1.110786 -0.07941\nv -0.453792 1.131417 -0.075128\nv -0.515151 1.059403 -0.05274\nv -0.514247 1.061278 -0.068806\nv -0.514333 1.060329 -0.03384\nv -0.509073 1.069393 -0.014875\nv -0.511067 1.065126 -0.083267\nv -0.53202 1.037143 -0.076784\nv -0.531295 1.038653 -0.066837\nv -0.540574 1.038609 -0.064575\nv -0.538997 1.040101 -0.052656\nv -0.542858 1.037387 -0.051917\nv -0.542287 1.038127 -0.036746\nv -0.538285 1.04111 -0.034733\nv -0.536311 1.039814 -0.020053\nv -0.538962 1.01591 -0.072476\nv -0.540946 1.013143 -0.068185\nv -0.539568 1.017626 -0.06535\nv -0.558326 1.000736 -0.030718\nv -0.557231 1.003658 -0.026721\nv -0.556914 1.003242 -0.034325\nv -0.556168 1.005314 -0.056103\nv -0.554498 1.007464 -0.051956\nv -0.554598 1.008206 -0.060323\nv -0.565016 0.997856 -0.043811\nv -0.562867 1.001779 -0.03923\nv -0.563049 1.001763 -0.04935\nv -0.538997 1.040101 -0.052656\nv -0.515151 1.059403 -0.05274\nv -0.554498 1.007464 -0.051956\nv -0.561359 1.00881 -0.052124\nv -0.556168 1.005314 -0.056103\nv -0.563102 1.006678 -0.056257\nv -0.554598 1.008206 -0.060323\nv -0.561603 1.00958 -0.060461\nv -0.540574 1.038609 -0.064575\nv -0.542858 1.037387 -0.051917\nv -0.572154 1.003053 -0.048833\nv -0.573878 0.999111 -0.043655\nv -0.563049 1.001763 -0.04935\nv -0.571494 1.002998 -0.039434\nv -0.565016 0.997856 -0.043811\nv -0.472263 1.15052 -0.062126\nv -0.462669 1.145616 -0.074019\nv -0.44967 1.138063 -0.074278\nv -0.453792 1.131417 -0.075128\nv -0.469661 1.149731 -0.037599\nv -0.458924 1.144073 -0.02769\nv -0.445531 1.137389 -0.035381\nv -0.465844 1.110786 -0.07941\nv -0.44967 1.138063 -0.074278\nv -0.445101 1.135328 -0.0594\nv -0.445531 1.137389 -0.035381\nv -0.485695 1.062525 -0.011116\nv -0.481541 1.06197 0.000982\nv -0.471808 1.059367 -0.000833\nv -0.49547 1.036207 0.004021\nv -0.498315 1.033574 -0.001941\nv -0.49235 1.029894 0.005574\nv -0.493996 1.028849 -0.003553\nv -0.484431 1.033029 0.003647\nv -0.485922 1.032672 -0.00335\nv -0.472307 1.059688 -0.013872\nv -0.485695 1.062525 -0.011116\nv -0.457612 1.080687 -0.009743\nv -0.471808 1.059367 -0.000833\nv -0.485922 1.032672 -0.00335\nv -0.488915 1.042208 -0.012558\nv -0.484431 1.033029 0.003647\nv -0.498315 1.033574 -0.001941\nv -0.493996 1.028849 -0.003553\nv -0.087339 1.860334 0.070405\nv -0.083686 1.878817 0.070453\nv -0.110164 1.890572 0.042625\nv -0.119613 1.849997 0.04441\nv -0.14552 1.853736 0.002481\nv -0.126288 1.905061 0.01104\nv -0.137587 1.89657 -0.044938\nv -0.12258 1.923711 -0.029497\nv -0.124095 1.906562 -0.074302\nv -0.112017 1.930233 -0.073937\nv -0.111348 1.836466 0.04219\nv -0.138807 1.831861 -0.004425\nv -0.138141 1.80902 0.003502\nv -0.110862 1.82181 0.029947\nv -0.12837 1.792769 0.007241\nv -0.143009 1.82155 -0.053845\nv -0.155468 1.79071 -0.049336\nv -0.140614 1.767056 -0.040523\nv -0.155064 1.786727 -0.109446\nv -0.144899 1.82415 -0.107634\nv -0.103476 1.822031 -0.159484\nv -0.113932 1.841089 -0.143672\nv -0.083228 1.846194 0.053978\nv -0.085664 1.848551 0.062906\nv -0.04033 1.849416 0.069538\nv -0.051267 1.855397 0.079217\nv -0.047119 1.864431 0.083758\nv -0.029463 1.844317 0.074513\nv -0.061831 1.894772 0.066357\nv -0.037103 1.867939 0.074303\nv -0.076196 1.912373 0.050328\nv -0.082078 1.933187 0.027413\nv -0.09128 1.925258 -0.013663\nv -0.074592 1.951817 -0.001184\nv -0.067869 1.929903 -0.068486\nv -0.039993 1.960376 -0.066638\nv -0.067869 1.929903 -0.068486\nv -0.022744 1.918905 -0.136892\nv -0.068314 1.892394 -0.12365\nv -0.104981 1.901673 -0.121928\nv -0.068314 1.892394 -0.12365\nv -0.112344 1.886311 -0.114744\nv 0.009556 1.952748 -0.067407\nv 0.014964 1.917749 -0.130877\nv -0.000499 1.948515 0.000319\nv -0.027286 1.943289 0.023093\nv 0.008363 1.939155 0.037637\nv 0.035614 1.942886 0.006178\nv -0.028112 1.934129 0.03995\nv -0.03348 1.917466 0.059075\nv -0.03077 1.874122 0.069678\nv -0.02128 1.914931 0.066027\nv 0.049719 1.91114 -0.11141\nv 0.05739 1.926973 -0.05967\nv 0.077206 1.881552 -0.06365\nv 0.070918 1.899485 -0.028468\nv 0.093279 1.853672 -0.026675\nv 0.083787 1.86581 0.002199\nv 0.086862 1.860411 -0.056649\nv 0.105464 1.845133 -0.052908\nv 0.069189 1.8702 -0.098725\nv 0.082454 1.849448 -0.103667\nv 0.050047 1.848262 -0.137183\nv 0.06146 1.828814 -0.145841\nv 0.041385 1.881765 -0.111745\nv 0.024948 1.86615 -0.144654\nv -0.016433 1.870527 -0.165966\nv -0.066273 1.858955 -0.145036\nv -0.019736 1.797134 -0.172875\nv 0.01686 1.78928 -0.157436\nv 0.05961 1.800477 -0.138182\nv 0.077567 1.769098 -0.153713\nv -0.129705 1.75664 -0.102312\nv -0.085797 1.786029 -0.152723\nv -0.089315 1.841269 -0.125352\nv -0.019736 1.797134 -0.172875\nv -0.066273 1.858955 -0.145036\nv -0.11544 1.775166 -0.035741\nv -0.046576 1.892912 0.094201\nv -0.033205 1.932302 0.087261\nv -0.02128 1.914931 0.066027\nv -0.03077 1.874122 0.069678\nv 0.012214 1.950915 0.047283\nv -0.037103 1.867939 0.074303\nv -0.029463 1.844317 0.074513\nv -0.051217 1.920349 0.112667\nv -0.037325 1.939775 0.100214\nv -0.023151 1.937646 0.105021\nv -0.010464 1.953158 0.074914\nv -0.00114 1.951719 0.081144\nv 0.000001 1.919575 0.090878\nv -0.032169 1.912749 0.118592\nv 0.02087 1.949145 0.057274\nv 0.055253 1.933786 0.017668\nv 0.030061 1.929356 0.058264\nv 0.012889 1.903153 0.069859\nv -0.001832 1.886657 0.077169\nv -0.016778 1.891129 0.102268\nv 0.033532 1.900829 0.055576\nv 0.057815 1.913493 0.022664\nv 0.059865 1.888597 0.035032\nv -0.032691 1.888549 0.118794\nv -0.021487 1.844182 0.07493\nv -0.051177 1.887327 0.113081\nv -0.008439 1.851845 0.071799\nv 0.083787 1.86581 0.002199\nv 0.070918 1.899485 -0.028468\nv 0.074033 1.920963 0.000148\nv 0.048047 1.941471 0.009793\nv 0.063667 1.936997 -0.020416\nv 0.073621 1.920751 -0.032552\nv 0.05739 1.926973 -0.05967\nv 0.047438 1.949905 -0.031662\nv 0.023762 1.945504 -0.035873\nv 0.043951 1.952329 -0.013083\nv 0.025753 1.946107 -0.012309\nv 0.035614 1.942886 0.006178\nv 0.008363 1.939155 0.037637\nv 0.034888 1.881383 0.078435\nv 0.033532 1.900829 0.055576\nv 0.012889 1.903153 0.069859\nv -0.001832 1.886657 0.077169\nv 0.059865 1.888597 0.035032\nv 0.073496 1.86734 0.059193\nv 0.039343 1.845922 0.053825\nv 0.014341 1.854774 0.063882\nv -0.008439 1.851845 0.071799\nv 0.094129 1.847117 0.02867\nv 0.058864 1.820068 0.023034\nv 0.102247 1.808595 -0.007056\nv 0.10893 1.837488 -0.011553\nv 0.083787 1.86581 0.002199\nv 0.093279 1.853672 -0.026675\nv 0.082372 1.794082 -0.001004\nv 0.096627 1.770927 -0.032463\nv 0.111845 1.78867 -0.034698\nv 0.097181 1.757468 -0.094267\nv 0.104837 1.787862 -0.103273\nv 0.105464 1.845133 -0.052908\nv 0.103784 1.819647 -0.063012\nv 0.111154 1.829174 -0.058712\nv 0.090617 1.804054 -0.101831\nv 0.082454 1.849448 -0.103667\nv 0.06146 1.828814 -0.145841\nv 0.05961 1.800477 -0.138182\nv 0.086862 1.860411 -0.056649\nv 0.077567 1.769098 -0.153713\nv 0.066261 1.796431 -0.010815\nv 0.07136 1.76807 -0.029995\nv 0.076114 1.762154 -0.060046\nv 0.03614 1.728825 -0.055554\nv 0.093112 1.742062 -0.074409\nv 0.072307 1.749339 -0.059882\nv 0.097497 1.728171 -0.084629\nv -0.052815 1.696106 -0.037967\nv -0.045625 1.649027 -0.07637\nv -0.020686 1.682293 -0.038983\nv -0.069509 1.668916 -0.076332\nv -0.061376 1.656375 -0.130607\nv 0.046372 1.708979 -0.045568\nv 0.089649 1.710982 -0.084148\nv 0.077958 1.731911 -0.124671\nv 0.077567 1.769098 -0.153713\nv 0.097181 1.757468 -0.094267\nv -0.021225 1.745546 -0.191861\nv 0.01686 1.78928 -0.157436\nv -0.019736 1.797134 -0.172875\nv 0.08886 1.690764 -0.105231\nv 0.057343 1.639921 -0.098485\nv -0.012866 1.659819 -0.034632\nv 0.050334 1.695473 -0.046469\nv 0.039245 1.680129 -0.051742\nv 0.11165 1.688098 -0.059856\nv 0.098329 1.662988 -0.051692\nv 0.104459 1.62677 -0.038161\nv 0.011312 1.662227 -0.049072\nv 0.123274 1.644185 -0.069201\nv 0.074729 1.601999 -0.054774\nv 0.071097 1.604775 -0.031561\nv 0.127464 1.603695 -0.00872\nv 0.074602 1.564863 -0.021933\nv 0.097825 1.570071 0.014677\nv 0.068961 1.552484 0.010005\nv 0.10131 1.537808 0.039962\nv 0.05528 1.517335 0.030311\nv 0.116955 1.652458 -0.016679\nv 0.0913 1.624194 0.007964\nv 0.100562 1.587619 0.043921\nv 0.078116 1.613992 0.026292\nv 0.069767 1.640006 -0.0087\nv 0.034297 1.626846 0.013098\nv 0.037914 1.635373 -0.010281\nv 0.019378 1.613175 -0.0098\nv 0.007792 1.582194 0.006965\nv 0.019616 1.667719 -0.031718\nv 0.070098 1.67872 -0.036579\nv -0.002734 1.627801 -0.062425\nv -0.00918 1.618849 -0.024865\nv 0.043176 1.57931 -0.013887\nv 0.04765 1.59551 0.024748\nv 0.024452 1.570489 0.021591\nv 0.040128 1.578134 0.053521\nv 0.005903 1.553316 0.042209\nv 0.063844 1.569936 0.040849\nv 0.054057 1.561978 0.079595\nv 0.080922 1.552879 0.060953\nv 0.074783 1.522599 0.089048\nv 0.036051 1.554271 0.062925\nv 0.012243 1.533337 0.06454\nv 0.024603 1.520473 0.105221\nv 0.004684 1.503353 0.08896\nv 0.021436 1.504283 0.070489\nv 0.015292 1.476033 0.084489\nv 0.036828 1.480249 0.089367\nv 0.035015 1.467755 0.093116\nv 0.046972 1.526689 0.084207\nv 0.05105 1.507301 0.108523\nv 0.063368 1.509921 0.092184\nv 0.05809 1.479601 0.105873\nv 0.050373 1.479584 0.089631\nv 0.04639 1.469754 0.099743\nv 0.035015 1.467755 0.093116\nv 0.036828 1.480249 0.089367\nv 0.03442 1.460468 0.115419\nv 0.028089 1.459357 0.110662\nv 0.033351 1.457125 0.10512\nv 0.040666 1.458458 0.11074\nv 0.033351 1.457125 0.10512\nv 0.044434 1.496962 0.063339\nv 0.068333 1.490667 0.069266\nv 0.070739 1.527544 0.055108\nv 0.046261 1.515591 0.058381\nv -0.11544 1.775166 -0.035741\nv -0.129705 1.75664 -0.102312\nv -0.115839 1.736485 -0.067018\nv -0.104519 1.700725 -0.125035\nv -0.099618 1.691384 -0.071705\nv -0.021225 1.745546 -0.191861\nv 0.009792 1.635862 -0.108861\nv -0.085797 1.786029 -0.152723\nv -0.019736 1.797134 -0.172875\nv 0.057343 1.639921 -0.098485\nv 0.005319 1.606038 -0.092565\nv 0.074729 1.601999 -0.054774\nv 0.029145 1.618738 -0.049542\nv -0.020517 1.619624 -0.079055\nv 0.025614 1.585285 -0.047631\nv 0.071097 1.604775 -0.031561\nv 0.074602 1.564863 -0.021933\nv 0.068961 1.552484 0.010005\nv 0.033048 1.548552 -0.000776\nv 0.05528 1.517335 0.030311\nv 0.032916 1.533596 0.02669\nv 0.046261 1.515591 0.058381\nv 0.044434 1.496962 0.063339\nv 0.016562 1.513637 0.034863\nv 0.025753 1.946107 -0.012309\nv 0.023762 1.945504 -0.035873\nv 0.03442 1.460468 0.115419\nv 0.028089 1.459357 0.110662\nv 0.005111 1.433557 0.115924\nv 0.015149 1.435804 0.130537\nv 0.033351 1.457125 0.10512\nv 0.033288 1.428793 0.092043\nv 0.002618 1.400311 0.111792\nv 0.010751 1.400721 0.123362\nv 0.026024 1.399245 0.092371\nv 0.034118 1.436027 0.135408\nv 0.050619 1.434374 0.129743\nv 0.026322 1.40071 0.127041\nv 0.039981 1.400351 0.122226\nv 0.05649 1.43161 0.115597\nv 0.040666 1.458458 0.11074\nv 0.033351 1.457125 0.10512\nv 0.033288 1.428793 0.092043\nv 0.044955 1.399817 0.110789\nv 0.026024 1.399245 0.092371\nv 0.020241 1.371464 0.105528\nv 0.024308 1.371662 0.111314\nv 0.031944 1.370934 0.095818\nv 0.032093 1.371652 0.113152\nv 0.038922 1.371479 0.110745\nv 0.031944 1.370934 0.095818\nv 0.041409 1.37122 0.105026\nv 0.022534 1.338623 0.108923\nv -0.097793 1.768065 0.038448\nv -0.093668 1.775882 0.048037\nv -0.100834 1.779125 0.054593\nv -0.104997 1.769384 0.03936\nv -0.08976 1.78422 0.066826\nv -0.084708 1.779558 0.057941\nv -0.072466 1.780007 0.071108\nv -0.072732 1.779573 0.064166\nv -0.060304 1.775042 0.07198\nv -0.060715 1.776481 0.066447\nv -0.051444 1.766686 0.068987\nv -0.051683 1.7669 0.065095\nv -0.048391 1.75584 0.061915\nv -0.047797 1.755939 0.064643\nv -0.108367 1.783623 0.054295\nv -0.111933 1.772403 0.038647\nv -0.093324 1.790284 0.070423\nv -0.071002 1.782253 0.077413\nv -0.059292 1.77619 0.075705\nv -0.049688 1.767266 0.071485\nv -0.045883 1.755755 0.066096\nv 0.053692 1.768064 0.038373\nv 0.060869 1.769383 0.039277\nv 0.056722 1.779124 0.054514\nv 0.049606 1.775881 0.047966\nv 0.045658 1.784219 0.066758\nv 0.040669 1.779557 0.057868\nv 0.028368 1.780007 0.071059\nv 0.028677 1.779572 0.064118\nv 0.016208 1.775042 0.071943\nv 0.016646 1.776468 0.066407\nv 0.007347 1.766674 0.068958\nv 0.007635 1.766906 0.065089\nv 0.004371 1.755901 0.061917\nv 0.003695 1.755939 0.064617\nv 0.064255 1.783622 0.054209\nv 0.067805 1.772401 0.038558\nv 0.049228 1.790283 0.070352\nv 0.026911 1.782252 0.077364\nv 0.0152 1.776201 0.075668\nv 0.005592 1.767254 0.071456\nv 0.001782 1.755743 0.066071\nv -0.103476 1.822031 -0.159484\nv -0.113932 1.841089 -0.143672\nv -0.087835 1.850415 -0.146004\nv -0.085712 1.841276 -0.165\nv -0.053634 1.890014 -0.127864\nv -0.042657 1.883977 -0.15265\nv -0.062166 1.811488 -0.177335\nv -0.086438 1.787903 -0.152699\nv -0.027222 1.865081 -0.166108\nv 0.009436 1.841227 0.080278\nv 0.001206 1.861295 0.097565\nv -0.020931 1.858528 0.083224\nv -0.021487 1.844182 0.07493\nv -0.020375 1.872875 0.091517\nv 0.003186 1.881352 0.089425\nv 0.039287 1.877862 0.083808\nv 0.031019 1.85029 0.094243\nv 0.059674 1.817108 0.044725\nv 0.049484 1.804165 0.059326\nv 0.076114 1.762154 -0.060046\nv -0.102166 1.727551 -0.040636\nv 0.059505 1.735409 -0.046574\nv -0.081789 1.482246 -0.115289\nv -0.076502 1.553878 -0.102819\nv -0.136437 1.567026 -0.087618\nv -0.121174 1.489298 -0.105557\nv -0.081789 1.482246 -0.115289\nv -0.136437 1.567026 -0.087618\nv -0.106408 1.367579 -0.154789\nv -0.106408 1.367579 -0.154789\nv -0.121174 1.489298 -0.105557\nv -0.133909 1.369127 -0.064729\nv -0.023376 1.542822 -0.100958\nv -0.023441 1.473238 -0.120056\nv -0.023553 1.367664 -0.182964\nv -0.023441 1.473238 -0.120056\nv -0.081789 1.482246 -0.115289\nv -0.023553 1.367664 -0.182964\nv -0.133909 1.369127 -0.064729\nv -0.118038 1.247846 -0.067587\nv -0.14354 1.368529 0.010764\nv -0.133909 1.369127 -0.064729\nv -0.133909 1.369127 -0.064729\nv -0.146636 1.444283 -0.017086\nv -0.142633 1.426307 0.018058\nv -0.143466 1.451135 0.005744\nv -0.140219 1.251975 -0.198024\nv -0.118038 1.247846 -0.067587\nv -0.195669 1.138273 -0.09561\nv -0.140219 1.251975 -0.198024\nv -0.206262 1.128679 0.008406\nv -0.142175 1.242221 0.007698\nv -0.190707 1.143895 -0.257205\nv -0.023652 1.14161 -0.397002\nv -0.125141 1.482025 0.051175\nv -0.13075 1.4252 0.05204\nv -0.127941 1.368638 0.039876\nv -0.244668 1.020273 0.011522\nv -0.253865 1.029755 -0.11204\nv -0.335538 0.668437 -0.013592\nv -0.37098 0.701878 -0.216882\nv -0.253865 1.029755 -0.11204\nv -0.37098 0.701878 -0.216882\nv -0.249164 1.031967 -0.337868\nv -0.407725 0.722131 -0.593414\nv -0.023644 1.029807 -0.531976\nv -0.023791 0.731695 -0.924921\nv -0.430654 0.395719 -0.031722\nv -0.504349 0.422451 -0.306574\nv -0.577446 0.432879 -0.836147\nv -0.538479 0.07607 -0.038052\nv -0.739821 0.092176 -0.426575\nv -0.835653 0.099386 -1.19482\nv -0.021697 0.402769 -1.35456\nv -0.019352 0.087271 -1.8066\nv -0.133909 1.369127 -0.064729\nv -0.131636 1.45585 -0.095249\nv -0.145273 1.437409 -0.061223\nv -0.023644 1.252083 -0.279673\nv 0.029702 1.5536 -0.102937\nv 0.034747 1.482426 -0.115354\nv 0.089696 1.56763 -0.08772\nv 0.072975 1.490833 -0.105641\nv 0.05941 1.36753 -0.154863\nv 0.086987 1.369102 -0.064833\nv 0.070887 1.247848 -0.067708\nv 0.086987 1.369102 -0.064833\nv 0.05941 1.36753 -0.154863\nv 0.096619 1.36853 0.010649\nv 0.09199 1.447233 -0.0171\nv 0.093329 1.427132 0.017977\nv 0.090481 1.453762 0.005742\nv 0.092684 1.252088 -0.198238\nv 0.148562 1.138843 -0.096135\nv 0.159229 1.129632 0.007714\nv 0.095106 1.242268 0.007554\nv 0.143512 1.144082 -0.257458\nv 0.078262 1.482024 0.051076\nv 0.083871 1.425191 0.051938\nv 0.081048 1.368628 0.039779\nv 0.198096 1.020947 0.011096\nv 0.207077 1.030161 -0.112402\nv 0.290683 0.66957 -0.014163\nv 0.32577 0.703184 -0.217486\nv 0.202159 1.032329 -0.338195\nv 0.36206 0.723626 -0.594051\nv 0.387114 0.397328 -0.032378\nv 0.460417 0.42444 -0.307301\nv 0.533057 0.435251 -0.836882\nv 0.496474 0.078278 -0.038754\nv 0.692778 0.092152 -0.427191\nv 0.787951 0.099359 -1.19552\nv 0.082648 1.457228 -0.095334\nv 0.087452 1.441291 -0.061193\nv -0.023644 1.252083 -0.279673\nv -0.136437 1.567026 -0.087618\nv -0.076502 1.553878 -0.102819\nv -0.081789 1.482246 -0.115289\nv -0.136437 1.567026 -0.087618\nv -0.081789 1.482246 -0.115289\nv -0.121174 1.489298 -0.105557\nv -0.106408 1.367579 -0.154789\nv -0.133909 1.369127 -0.064729\nv -0.121174 1.489298 -0.105557\nv -0.106408 1.367579 -0.154789\nv -0.023376 1.542822 -0.100958\nv -0.023441 1.473238 -0.120056\nv -0.023553 1.367664 -0.182964\nv -0.023553 1.367664 -0.182964\nv -0.081789 1.482246 -0.115289\nv -0.023441 1.473238 -0.120056\nv -0.118038 1.247846 -0.067587\nv -0.133909 1.369127 -0.064729\nv -0.133909 1.369127 -0.064729\nv -0.14354 1.368529 0.010764\nv -0.146636 1.444283 -0.017086\nv -0.133909 1.369127 -0.064729\nv -0.142633 1.426307 0.018058\nv -0.143466 1.451135 0.005744\nv -0.140219 1.251975 -0.198024\nv -0.140219 1.251975 -0.198024\nv -0.195669 1.138273 -0.09561\nv -0.118038 1.247846 -0.067587\nv -0.206262 1.128679 0.008406\nv -0.142175 1.242221 0.007698\nv -0.190707 1.143895 -0.257205\nv -0.023652 1.14161 -0.397002\nv -0.125141 1.482025 0.051175\nv -0.13075 1.4252 0.05204\nv -0.127941 1.368638 0.039876\nv -0.244668 1.020273 0.011522\nv -0.253865 1.029755 -0.11204\nv -0.335538 0.668437 -0.013592\nv -0.37098 0.701878 -0.216882\nv -0.249164 1.031967 -0.337868\nv -0.37098 0.701878 -0.216882\nv -0.253865 1.029755 -0.11204\nv -0.407725 0.722131 -0.593414\nv -0.023644 1.029807 -0.531976\nv -0.023791 0.731695 -0.924921\nv -0.430654 0.395719 -0.031722\nv -0.504349 0.422451 -0.306574\nv -0.577446 0.432879 -0.836147\nv -0.538479 0.07607 -0.038052\nv -0.739821 0.092176 -0.426575\nv -0.835653 0.099386 -1.19482\nv -0.021697 0.402769 -1.35456\nv -0.019352 0.087271 -1.8066\nv -0.145273 1.437409 -0.061223\nv -0.131636 1.45585 -0.095249\nv -0.133909 1.369127 -0.064729\nv -0.023644 1.252083 -0.279673\nv 0.089696 1.56763 -0.08772\nv 0.034747 1.482426 -0.115354\nv 0.029702 1.5536 -0.102937\nv 0.072975 1.490833 -0.105641\nv 0.05941 1.36753 -0.154863\nv 0.086987 1.369102 -0.064833\nv 0.05941 1.36753 -0.154863\nv 0.086987 1.369102 -0.064833\nv 0.070887 1.247848 -0.067708\nv 0.096619 1.36853 0.010649\nv 0.09199 1.447233 -0.0171\nv 0.093329 1.427132 0.017977\nv 0.090481 1.453762 0.005742\nv 0.092684 1.252088 -0.198238\nv 0.148562 1.138843 -0.096135\nv 0.159229 1.129632 0.007714\nv 0.095106 1.242268 0.007554\nv 0.143512 1.144082 -0.257458\nv 0.078262 1.482024 0.051076\nv 0.083871 1.425191 0.051938\nv 0.081048 1.368628 0.039779\nv 0.198096 1.020947 0.011096\nv 0.207077 1.030161 -0.112402\nv 0.290683 0.66957 -0.014163\nv 0.32577 0.703184 -0.217486\nv 0.202159 1.032329 -0.338195\nv 0.36206 0.723626 -0.594051\nv 0.387114 0.397328 -0.032378\nv 0.460417 0.42444 -0.307301\nv 0.533057 0.435251 -0.836882\nv 0.496474 0.078278 -0.038754\nv 0.692778 0.092152 -0.427191\nv 0.787951 0.099359 -1.19552\nv 0.087452 1.441291 -0.061193\nv 0.082648 1.457228 -0.095334\nv -0.023644 1.252083 -0.279673\nv -0.000881 1.680833 0.057256\nv 0.002385 1.683883 0.044059\nv 0.000837 1.692688 0.046573\nv -0.002191 1.689845 0.058903\nv -0.009835 1.679061 0.06678\nv -0.010559 1.687754 0.067956\nv -0.02202 1.677783 0.070462\nv -0.021913 1.687017 0.071199\nv -0.033929 1.679109 0.066653\nv -0.033328 1.687787 0.067872\nv -0.043016 1.680886 0.057128\nv -0.041694 1.689881 0.058821\nv -0.046297 1.683936 0.043936\nv -0.044745 1.692742 0.046449\nv -0.04655 1.686966 0.030799\nv -0.045038 1.695557 0.034195\nv 0.002565 1.686933 0.030864\nv 0.001006 1.695541 0.034214\nv 0.000837 1.692688 0.046573\nv 0.001676 1.704592 0.035643\nv 0.001501 1.701653 0.048359\nv -0.002191 1.689845 0.058903\nv -0.001645 1.698714 0.061077\nv -0.010559 1.687754 0.067956\nv -0.010254 1.696574 0.070391\nv -0.021913 1.687017 0.071199\nv -0.022019 1.695787 0.073804\nv -0.033328 1.687787 0.067872\nv -0.033705 1.696601 0.070326\nv -0.041694 1.689881 0.058821\nv -0.04228 1.698756 0.060981\nv -0.044745 1.692742 0.046449\nv -0.045409 1.701706 0.048237\nv -0.045038 1.695557 0.034195\nv -0.045718 1.704604 0.035635\nv 0.001006 1.695541 0.034214\nv -0.01448 1.685648 0.078428\nv -0.021705 1.685478 0.078822\nv -0.022019 1.69718 0.07382\nv -0.010889 1.697191 0.072328\nv -0.006751 1.686142 0.074601\nv 0.000034 1.687195 0.068237\nv 0.004635 1.697091 0.059552\nv 0.005193 1.687435 0.065615\nv 0.006905 1.68875 0.059505\nv 0.005193 1.687435 0.065615\nv 0.006823 1.687038 0.059381\nv 0.001337 1.681873 0.059525\nv 0.000034 1.687195 0.068237\nv -0.005602 1.686327 0.07481\nv -0.009835 1.679061 0.06678\nv -0.01448 1.685648 0.078428\nv -0.021705 1.685478 0.078822\nv -0.022021 1.678867 0.069369\nv 0.011074 1.700939 0.043505\nv 0.010182 1.690172 0.048095\nv 0.007225 1.682239 0.05009\nv -0.007898 1.679437 0.049988\nv -0.022031 1.677269 0.050174\nv 0.003606 1.689606 0.030007\nv -0.022046 1.683703 0.018818\nv -0.029017 1.685552 0.078714\nv -0.03315 1.697191 0.072339\nv -0.022019 1.69718 0.07382\nv -0.021705 1.685478 0.078822\nv -0.037074 1.686157 0.074571\nv -0.043859 1.687209 0.068218\nv -0.048446 1.697114 0.059512\nv -0.049018 1.687448 0.065606\nv -0.050712 1.688773 0.059471\nv -0.049018 1.687448 0.065606\nv -0.050629 1.68706 0.059348\nv -0.045145 1.681897 0.05948\nv -0.043859 1.687209 0.068218\nv -0.038223 1.686342 0.074782\nv -0.033929 1.679109 0.066653\nv -0.029017 1.685552 0.078714\nv -0.021705 1.685478 0.078822\nv -0.022021 1.678867 0.069369\nv -0.053975 1.690185 0.048091\nv -0.054953 1.700925 0.043576\nv -0.051046 1.682263 0.050053\nv -0.022031 1.677269 0.050174\nv -0.036163 1.679438 0.050002\nv -0.047593 1.68964 0.029943\nv -0.022046 1.683703 0.018818\nv -0.022035 1.706443 0.041008\nv -0.008004 1.704914 0.039127\nv -0.022046 1.683703 0.018818\nv -0.036067 1.704915 0.039141\nv -0.022035 1.706443 0.041008\nv -0.022046 1.683703 0.018818\nv 0.020325 1.762012 0.059795\nv 0.020326 1.770392 0.062205\nv 0.0144 1.76794 0.062209\nv 0.011945 1.762013 0.062213\nv 0.0144 1.756086 0.062214\nv 0.020326 1.753621 0.062212\nv 0.026253 1.756086 0.062208\nv 0.028708 1.762013 0.062204\nv 0.026253 1.76794 0.062203\nv 0.012042 1.776355 0.060227\nv 0.016037 1.778006 0.060224\nv 0.020325 1.778573 0.060222\nv 0.00861 1.77373 0.06023\nv 0.005978 1.770292 0.060233\nv 0.004322 1.7663 0.060236\nv 0.003757 1.762012 0.060238\nv 0.004322 1.757724 0.06024\nv 0.005978 1.753719 0.060241\nv 0.00861 1.750294 0.060241\nv 0.02861 1.747657 0.060232\nv 0.024613 1.746005 0.060235\nv 0.020325 1.745439 0.060237\nv 0.016037 1.746005 0.060239\nv 0.012042 1.747657 0.06024\nv 0.03204 1.750293 0.060229\nv 0.034674 1.753719 0.060226\nv 0.036328 1.757724 0.060224\nv 0.036893 1.762012 0.060221\nv 0.036329 1.7663 0.06022\nv 0.034674 1.770292 0.060219\nv 0.032041 1.77373 0.060218\nv 0.02861 1.776355 0.060219\nv 0.024613 1.778006 0.06022\nv 0.014258 1.739374 0.054977\nv 0.008607 1.741715 0.054979\nv 0.003755 1.745436 0.054979\nv 0.000031 1.750291 0.054979\nv 0.000031 1.773728 0.054968\nv 0.003755 1.77857 0.054964\nv 0.008608 1.782304 0.05496\nv 0.014258 1.784633 0.054956\nv 0.020323 1.785433 0.054953\nv 0.026387 1.784633 0.05495\nv 0.032038 1.782304 0.054948\nv 0.036891 1.77857 0.054948\nv 0.040614 1.773728 0.054948\nv 0.042955 1.768072 0.054949\nv 0.043753 1.762009 0.054953\nv 0.042955 1.755935 0.054955\nv 0.040614 1.750291 0.054959\nv 0.036891 1.745436 0.054963\nv 0.032038 1.741715 0.054967\nv 0.026387 1.739374 0.054971\nv 0.020323 1.738573 0.054974\nv -0.007399 1.754576 0.048118\nv -0.00231 1.755935 0.054977\nv -0.003108 1.76201 0.054975\nv -0.008377 1.762006 0.048115\nv -0.00231 1.768072 0.054972\nv -0.007399 1.769424 0.048111\nv -0.004532 1.776349 0.048107\nv 0.000028 1.782301 0.048102\nv 0.005972 1.786847 0.048097\nv 0.012892 1.789719 0.048092\nv 0.020319 1.790704 0.048088\nv 0.027747 1.789718 0.048085\nv 0.034668 1.786847 0.048082\nv 0.040612 1.7823 0.048081\nv 0.045172 1.776349 0.048082\nv 0.048039 1.769424 0.048084\nv 0.049015 1.762006 0.048088\nv 0.048039 1.754576 0.048091\nv 0.045172 1.747651 0.048095\nv -0.007403 1.745996 0.04013\nv -0.004532 1.747651 0.04812\nv -0.0106 1.75371 0.040128\nv -0.011691 1.762003 0.040125\nv -0.0106 1.770283 0.040121\nv -0.007403 1.777997 0.040116\nv -0.002317 1.784626 0.04011\nv 0.004312 1.789715 0.040104\nv 0.012032 1.792919 0.040099\nv 0.020317 1.794003 0.040094\nv 0.0286 1.792918 0.040091\nv 0.03632 1.789715 0.040088\nv 0.042949 1.784626 0.040087\nv 0.048035 1.777996 0.040089\nv 0.051232 1.770283 0.040091\nv 0.052323 1.762002 0.040094\nv 0.051232 1.75371 0.040099\nv 0.003744 1.733301 0.031554\nv 0.004312 1.734278 0.04013\nv -0.002317 1.739367 0.040131\nv -0.003118 1.738562 0.031556\nv -0.008384 1.745426 0.031555\nv -0.011696 1.753423 0.031553\nv -0.012824 1.761999 0.03155\nv 0.011736 1.793999 0.031523\nv 0.020312 1.795133 0.031518\nv 0.003744 1.790697 0.031528\nv -0.003118 1.785423 0.031534\nv -0.008384 1.77856 0.03154\nv -0.011696 1.770575 0.031545\nv 0.028888 1.793999 0.031514\nv 0.03688 1.790697 0.031512\nv 0.043743 1.785423 0.031511\nv 0.049009 1.778559 0.031511\nv 0.052319 1.770575 0.031514\nv 0.020308 1.793268 0.022943\nv -0.00181 1.784113 0.022958\nv -0.010972 1.761995 0.022973\nv -0.00181 1.739877 0.022978\nv 0.020308 1.730709 0.022971\nv 0.011736 1.729986 0.031552\nv 0.042426 1.739877 0.022956\nv 0.028888 1.729986 0.031544\nv 0.03688 1.733301 0.031538\nv 0.051588 1.761995 0.022941\nv 0.049009 1.745425 0.031526\nv 0.052319 1.753422 0.031522\nv 0.053448 1.761999 0.031518\nv 0.042426 1.784113 0.022936\nv 0.020304 1.790036 0.014952\nv 0.000473 1.781817 0.014966\nv -0.007741 1.761991 0.014979\nv 0.040134 1.781817 0.014946\nv 0.048348 1.761991 0.014951\nv 0.020298 1.778177 0.002829\nv 0.03649 1.761986 0.002828\nv 0.040134 1.742153 0.014964\nv 0.020296 1.761984 -0.001603\nv 0.004106 1.761986 0.002845\nv 0.000472 1.742153 0.014984\nv 0.020298 1.745794 0.002844\nv 0.020304 1.733946 0.014978\nv -0.058449 1.756086 0.062251\nv -0.055994 1.762001 0.062247\nv -0.064377 1.762 0.059838\nv -0.064375 1.753622 0.062255\nv -0.070302 1.756086 0.062256\nv -0.072757 1.762001 0.062255\nv -0.070302 1.767928 0.062251\nv -0.064375 1.770392 0.062247\nv -0.058449 1.767928 0.062245\nv -0.048373 1.757724 0.060266\nv -0.047809 1.762 0.060264\nv -0.050028 1.753719 0.060269\nv -0.052661 1.750294 0.060271\nv -0.056092 1.747657 0.060274\nv -0.060089 1.746006 0.060277\nv -0.064376 1.745439 0.060279\nv -0.068665 1.746006 0.060281\nv -0.072661 1.747657 0.060283\nv -0.076092 1.750294 0.060283\nv -0.078725 1.75372 0.060283\nv -0.08038 1.757724 0.060282\nv -0.080944 1.762 0.06028\nv -0.08038 1.7663 0.060278\nv -0.078725 1.770293 0.060275\nv -0.076092 1.773718 0.060272\nv -0.072661 1.776355 0.060269\nv -0.068665 1.778006 0.060268\nv -0.064376 1.778573 0.060265\nv -0.060088 1.778006 0.060263\nv -0.056093 1.776355 0.060262\nv -0.052661 1.773718 0.060262\nv -0.050029 1.770293 0.060262\nv -0.048373 1.7663 0.060262\nv -0.087011 1.768072 0.055014\nv -0.08781 1.761998 0.055017\nv -0.087011 1.755935 0.05502\nv -0.084671 1.750292 0.055021\nv -0.080947 1.745437 0.05502\nv -0.076094 1.741716 0.05502\nv -0.070444 1.739374 0.055018\nv -0.064379 1.738573 0.055016\nv -0.058315 1.739374 0.055013\nv -0.052664 1.741715 0.055009\nv -0.047811 1.745437 0.055005\nv -0.044088 1.750291 0.055001\nv -0.041747 1.755935 0.054997\nv -0.041747 1.768072 0.054993\nv -0.040949 1.761997 0.054995\nv -0.044088 1.773716 0.054991\nv -0.047811 1.778571 0.054991\nv -0.052664 1.782292 0.054992\nv -0.058315 1.784633 0.054993\nv -0.064379 1.785434 0.054996\nv -0.070443 1.784633 0.055\nv -0.076094 1.782292 0.055003\nv -0.080947 1.778571 0.055006\nv -0.08467 1.773716 0.05501\nv -0.092101 1.769425 0.048154\nv -0.093079 1.761995 0.048157\nv -0.092101 1.754577 0.04816\nv -0.089234 1.747652 0.048161\nv -0.084674 1.741713 0.048161\nv -0.03953 1.776349 0.048125\nv -0.036664 1.769424 0.048127\nv -0.044091 1.782289 0.048125\nv -0.050034 1.786848 0.048126\nv -0.056955 1.789719 0.048128\nv -0.064382 1.790692 0.048131\nv -0.07181 1.789719 0.048135\nv -0.07873 1.786848 0.04814\nv -0.084674 1.782289 0.048144\nv -0.089234 1.77635 0.048149\nv -0.095302 1.770284 0.040163\nv -0.096393 1.761991 0.040167\nv -0.095302 1.753711 0.04017\nv -0.092105 1.745997 0.040171\nv -0.03238 1.761991 0.040136\nv -0.036664 1.754576 0.048133\nv -0.03347 1.75371 0.04014\nv -0.035686 1.761994 0.04813\nv -0.03347 1.770283 0.040133\nv -0.036668 1.777997 0.040131\nv -0.041754 1.784626 0.040131\nv -0.048383 1.789715 0.040132\nv -0.056102 1.792919 0.040134\nv -0.064386 1.794003 0.040138\nv -0.07267 1.792919 0.040142\nv -0.08039 1.789715 0.040148\nv -0.087019 1.784626 0.040152\nv -0.092105 1.777997 0.040158\nv -0.096397 1.770576 0.031587\nv -0.093087 1.77856 0.031582\nv -0.087821 1.785423 0.031576\nv -0.080959 1.790697 0.031572\nv -0.072967 1.793999 0.031566\nv -0.06439 1.795133 0.031561\nv -0.055815 1.793999 0.031558\nv -0.047823 1.790697 0.031555\nv -0.04096 1.785423 0.031554\nv -0.035694 1.77856 0.031555\nv -0.032383 1.770575 0.031557\nv -0.031255 1.761999 0.03156\nv -0.032383 1.753423 0.031563\nv -0.036668 1.745997 0.040145\nv -0.035694 1.745426 0.031569\nv -0.041755 1.739367 0.04015\nv -0.04096 1.738563 0.031574\nv -0.097527 1.761999 0.031592\nv -0.033114 1.761995 0.022984\nv -0.042276 1.739877 0.022998\nv -0.047823 1.733301 0.03158\nv -0.055815 1.729987 0.031584\nv -0.064395 1.73071 0.023012\nv -0.072967 1.729987 0.031593\nv -0.080959 1.733301 0.031595\nv -0.086513 1.739877 0.023019\nv -0.093087 1.745426 0.031596\nv -0.096398 1.753423 0.031594\nv -0.095675 1.761995 0.023015\nv -0.086513 1.784113 0.023\nv -0.064395 1.793269 0.022986\nv -0.042276 1.784113 0.022979\nv -0.084229 1.781818 0.015008\nv -0.092444 1.761992 0.015021\nv -0.064398 1.790037 0.014996\nv -0.044568 1.781818 0.01499\nv -0.036353 1.761992 0.014993\nv -0.064404 1.778177 0.002871\nv -0.048212 1.761986 0.002871\nv -0.044568 1.742153 0.015007\nv -0.064406 1.761984 -0.001561\nv -0.064404 1.745795 0.002886\nv -0.064398 1.733947 0.015019\nv -0.084229 1.742153 0.015025\nv -0.080595 1.761986 0.002887\nv 0.020319 1.733308 0.048114\nv 0.012892 1.734282 0.048117\nv 0.005971 1.737153 0.048119\nv 0.000028 1.741712 0.04812\nv 0.040612 1.741712 0.0481\nv 0.034668 1.737153 0.048105\nv 0.027746 1.734282 0.04811\nv 0.0286 1.731087 0.040119\nv 0.020315 1.72999 0.040124\nv 0.012032 1.731087 0.040127\nv 0.048035 1.745996 0.040104\nv 0.042949 1.739367 0.040108\nv 0.03632 1.734278 0.040114\nv 0.020312 1.728852 0.031548\nv 0.043742 1.738562 0.031532\nv -0.07873 1.737153 0.048161\nv -0.07181 1.734282 0.048158\nv -0.064382 1.733309 0.048155\nv -0.056955 1.734282 0.048151\nv -0.050034 1.737153 0.048147\nv -0.044091 1.741712 0.048142\nv -0.03953 1.747651 0.048137\nv -0.087019 1.739368 0.040172\nv -0.08039 1.734279 0.040171\nv -0.07267 1.731087 0.040168\nv -0.064386 1.729991 0.040165\nv -0.056102 1.731087 0.04016\nv -0.048383 1.734278 0.040156\nv -0.064391 1.728853 0.031589\nv -0.087821 1.738563 0.031596\nv -0.110242 1.033787 -0.120056\nv -0.022045 1.11258 -0.113336\nv -0.021531 1.025422 -0.127662\nv -0.119694 1.109616 -0.085534\nv -0.146818 1.022879 -0.08698\nv -0.168829 1.021137 -0.025484\nv -0.156449 0.982165 -0.067892\nv -0.173267 0.942775 -0.020566\nv -0.152984 0.942762 -0.063591\nv -0.15685 0.769356 -0.06854\nv -0.110275 0.770709 -0.093939\nv -0.110486 0.658577 -0.083892\nv -0.052907 0.769677 -0.068986\nv -0.062052 0.654367 -0.065578\nv -0.045868 0.767723 -0.027935\nv -0.062422 0.596284 -0.029041\nv -0.081001 0.636949 -0.004174\nv -0.081025 0.588621 -0.002249\nv -0.104282 0.585208 0.004857\nv -0.103835 0.541618 -0.011356\nv -0.12777 0.588512 -0.002118\nv -0.124095 0.547142 -0.016856\nv -0.143588 0.596038 -0.028817\nv -0.136472 0.554734 -0.034757\nv -0.142679 0.565934 -0.076287\nv -0.152295 0.463824 -0.091278\nv -0.106302 0.482626 -0.117601\nv -0.102691 0.431738 -0.023282\nv -0.084358 0.54726 -0.016966\nv -0.062555 0.439782 -0.046561\nv -0.070737 0.554933 -0.034938\nv -0.057791 0.458633 -0.091886\nv -0.065185 0.566168 -0.076501\nv -0.106284 0.57104 -0.094328\nv -0.151165 0.654097 -0.065332\nv -0.162185 0.767374 -0.027663\nv -0.129667 0.636559 0.001191\nv -0.141427 0.77014 0.019535\nv -0.107507 0.766314 0.031013\nv -0.141018 0.942803 0.03335\nv -0.104245 0.942827 0.049785\nv -0.127463 1.081218 0.030257\nv -0.134842 0.104291 0.016308\nv -0.132862 0.146545 -0.024115\nv -0.142132 0.075789 0.001266\nv -0.099534 0.120856 0.024664\nv -0.100298 0.153902 -0.010666\nv -0.068714 0.147997 -0.024368\nv -0.099246 0.178301 -0.031931\nv -0.076063 0.201942 -0.061182\nv -0.102574 0.195302 -0.051643\nv -0.102691 0.431738 -0.023282\nv -0.119903 0.202104 -0.061686\nv -0.146715 0.441592 -0.045976\nv -0.143854 0.341093 -0.093832\nv -0.152295 0.463824 -0.091278\nv -0.106302 0.482626 -0.117601\nv -0.04711 0.942782 -0.063915\nv -0.052907 0.769677 -0.068986\nv -0.108578 0.942759 -0.091588\nv -0.048065 0.961319 -0.069076\nv -0.107225 0.968182 -0.097091\nv -0.063349 0.97587 -0.094731\nv -0.097227 0.991944 -0.118838\nv -0.020827 0.982685 -0.100414\nv -0.124147 0.198796 -0.094042\nv -0.103003 0.328379 -0.11366\nv -0.064238 0.338172 -0.09457\nv -0.057791 0.458633 -0.091886\nv -0.062555 0.439782 -0.046561\nv -0.021424 1.005406 0.050511\nv -0.073407 1.012817 0.052106\nv -0.020828 0.962647 0.033704\nv -0.077562 1.07018 0.06475\nv -0.10353 1.077187 0.046571\nv -0.142132 0.075789 0.001266\nv -0.051301 0.077924 0.000894\nv -0.064063 0.071032 0.072933\nv -0.132921 0.097021 -0.079887\nv -0.06421 0.102365 -0.08083\nv -0.069102 0.765437 0.0182\nv -0.104867 0.640139 0.007923\nv -0.035648 0.942805 -0.020847\nv -0.045868 0.767723 -0.027935\nv -0.035344 0.959618 -0.021837\nv -0.021138 0.965461 -0.056116\nv -0.13173 0.146609 -0.1169\nv -0.099749 0.203604 -0.112122\nv -0.098545 0.146223 -0.130979\nv -0.066266 0.146803 -0.117213\nv -0.070016 0.105841 -0.117391\nv -0.06421 0.102365 -0.08083\nv -0.132921 0.097021 -0.079887\nv -0.127793 0.105681 -0.117246\nv -0.09869 0.106381 -0.130189\nv -0.061578 0.942818 0.032191\nv -0.069102 0.765437 0.0182\nv -0.043601 0.96129 0.025121\nv -0.035648 0.942805 -0.020847\nv -0.045868 0.767723 -0.027935\nv -0.077248 0.202762 -0.09826\nv -0.118696 0.999149 -0.107657\nv -0.021495 0.952785 0.022323\nv -0.035344 0.959618 -0.021837\nv -0.128138 0.974635 -0.086954\nv -0.092018 0.073204 0.079965\nv -0.092077 0.097133 0.079788\nv -0.125475 0.071649 0.066633\nv -0.064163 0.092509 0.07158\nv -0.099534 0.120856 0.024664\nv -0.061176 0.105958 0.016016\nv -0.064063 0.071032 0.072933\nv -0.051301 0.077924 0.000894\nv -0.12532 0.092207 0.065427\nv -0.134842 0.104291 0.016308\nv -0.142132 0.075789 0.001266\nv -0.061176 0.105958 0.016016\nv -0.051301 0.077924 0.000894\nv -0.021728 1.065804 0.060503\nv -0.092018 0.073204 0.079965\nv -0.125475 0.071649 0.066633\nv -0.154804 1.090506 -0.020768\nv -0.146715 0.441592 -0.045976\nv -0.021138 0.965461 -0.056116\nv -0.021495 0.952785 0.022323\nv -0.113261 0.094568 -0.096104\nv -0.127793 0.105681 -0.117246\nv -0.111437 0.094738 -0.115134\nv -0.080732 0.094672 -0.095677\nv -0.084001 0.094735 -0.114462\nv -0.070016 0.105841 -0.117391\nv -0.09869 0.106381 -0.130189\nv -0.097776 0.094745 -0.121129\nv -0.105022 0.071392 -0.103212\nv -0.104138 0.071468 -0.111435\nv -0.088859 0.071439 -0.102995\nv -0.090502 0.071467 -0.111119\nv -0.097354 0.071472 -0.114006\nv 0.067183 1.034003 -0.120652\nv 0.075716 1.109618 -0.085953\nv 0.103909 1.023391 -0.087684\nv 0.126268 1.022417 -0.026487\nv 0.115095 0.983482 -0.069385\nv 0.132913 0.944518 -0.022072\nv 0.112605 0.944006 -0.065082\nv 0.120733 0.770748 -0.070037\nv 0.07412 0.770955 -0.095402\nv 0.077098 0.658862 -0.085356\nv 0.016813 0.768511 -0.070406\nv 0.028796 0.653461 -0.067006\nv 0.009855 0.766385 -0.029349\nv 0.030612 0.595404 -0.030468\nv 0.048201 0.636572 -0.00561\nv 0.049417 0.588202 -0.00369\nv 0.072756 0.585363 0.003399\nv 0.07337 0.541774 -0.012814\nv 0.096151 0.589243 -0.003594\nv 0.093485 0.547795 -0.01833\nv 0.11176 0.597155 -0.030305\nv 0.105657 0.555689 -0.036239\nv 0.111555 0.567038 -0.077774\nv 0.12367 0.465196 -0.092773\nv 0.077209 0.482859 -0.119062\nv 0.053756 0.546935 -0.01841\nv 0.074922 0.431899 -0.02474\nv 0.034583 0.438953 -0.047989\nv 0.039937 0.554271 -0.036372\nv 0.029322 0.45768 -0.09331\nv 0.03408 0.565365 -0.07793\nv 0.075033 0.571246 -0.095788\nv 0.117889 0.655384 -0.066827\nv 0.126146 0.768898 -0.029163\nv 0.096867 0.637373 -0.000281\nv 0.105361 0.771152 0.01805\nv 0.071554 0.766493 0.029553\nv 0.100714 0.943753 0.031867\nv 0.063964 0.942873 0.04833\nv 0.083708 1.081427 0.029496\nv 0.11201 0.147795 -0.025552\nv 0.115025 0.105603 0.014871\nv 0.123003 0.077286 -0.000171\nv 0.079325 0.121303 0.023232\nv 0.079279 0.154358 -0.012099\nv 0.047845 0.147686 -0.025796\nv 0.07763 0.178723 -0.033364\nv 0.053874 0.201792 -0.062611\nv 0.08054 0.195799 -0.053076\nv 0.074922 0.431899 -0.02474\nv 0.097697 0.203021 -0.063122\nv 0.118673 0.442833 -0.047467\nv 0.11825 0.342294 -0.095321\nv 0.12367 0.465196 -0.092773\nv 0.077209 0.482859 -0.119062\nv 0.006762 0.941421 -0.065327\nv 0.016813 0.768511 -0.070406\nv 0.068191 0.942911 -0.093046\nv 0.007198 0.959975 -0.070316\nv 0.066187 0.96829 -0.098478\nv 0.021881 0.975007 -0.095789\nv 0.054727 0.991867 -0.119447\nv 0.102016 0.199817 -0.095479\nv 0.07771 0.328578 -0.115119\nv 0.03873 0.337414 -0.095999\nv 0.029322 0.45768 -0.09331\nv 0.034583 0.438953 -0.047989\nv 0.030639 1.012686 0.051255\nv 0.033905 1.070931 0.064531\nv 0.059781 1.07712 0.045393\nv 0.032147 0.07721 -0.00053\nv 0.123003 0.077286 -0.000171\nv 0.045083 0.070632 0.071508\nv 0.113267 0.098286 -0.081323\nv 0.044445 0.101956 -0.082256\nv 0.033173 0.764671 0.016769\nv 0.07199 0.640383 0.006473\nv -0.004665 0.941162 -0.02225\nv 0.009855 0.766385 -0.029349\nv -0.00556 0.958077 -0.023115\nv 0.110863 0.147829 -0.118337\nv 0.077506 0.204029 -0.113555\nv 0.077696 0.146635 -0.132411\nv 0.045413 0.14643 -0.118641\nv 0.05016 0.105571 -0.118818\nv 0.044445 0.101956 -0.082256\nv 0.113267 0.098286 -0.081323\nv 0.107923 0.106817 -0.118681\nv 0.078811 0.106808 -0.13162\nv 0.021296 0.941813 0.030768\nv 0.033173 0.764671 0.016769\nv 0.002865 0.959837 0.023712\nv -0.004665 0.941162 -0.02225\nv 0.009855 0.766385 -0.029349\nv 0.055033 0.20264 -0.09969\nv 0.076117 0.999344 -0.108515\nv -0.00556 0.958077 -0.023115\nv 0.086943 0.975255 -0.088361\nv 0.072456 0.097407 0.078358\nv 0.072979 0.073485 0.078536\nv 0.106462 0.072743 0.065199\nv 0.044661 0.092105 0.070154\nv 0.079325 0.121303 0.023232\nv 0.041339 0.105476 0.014591\nv 0.045083 0.070632 0.071508\nv 0.032147 0.07721 -0.00053\nv 0.105806 0.093291 0.063992\nv 0.115025 0.105603 0.014871\nv 0.123003 0.077286 -0.000171\nv 0.041339 0.105476 0.014591\nv 0.032147 0.07721 -0.00053\nv 0.072979 0.073485 0.078536\nv 0.106462 0.072743 0.065199\nv 0.111064 1.090987 -0.021473\nv 0.118673 0.442833 -0.047467\nv 0.091839 0.095479 -0.116567\nv 0.107923 0.106817 -0.118681\nv 0.09367 0.095355 -0.097537\nv 0.061147 0.094667 -0.097106\nv 0.05016 0.105571 -0.118818\nv 0.064411 0.094808 -0.115891\nv 0.078181 0.095154 -0.12256\nv 0.078811 0.106808 -0.13162\nv 0.085109 0.072039 -0.112866\nv 0.085996 0.071985 -0.104643\nv 0.069837 0.071638 -0.104424\nv 0.071477 0.071706 -0.112548\nv 0.078326 0.071878 -0.115437\nv 0.121987 0.672944 0.022856\nv 0.072591 0.667896 0.062293\nv 0.078196 0.531581 0.061237\nv 0.135845 0.536715 0.014715\nv 0.085602 0.395299 0.060142\nv 0.152809 0.400551 0.006556\nv 0.098709 0.27784 0.063817\nv 0.165929 0.284495 0.004862\nv 0.113851 0.158655 0.067646\nv 0.182467 0.166797 0.003228\nv 0.124093 0.077961 0.070156\nv 0.193634 0.087092 0.002048\nv -0.021378 0.077987 0.103513\nv -0.01595 0.157031 0.100668\nv -0.002469 0.273176 0.095834\nv -0.005291 0.388687 0.092181\nv -0.008624 0.525118 0.088858\nv -0.021409 0.663611 0.086894\nv 0.076793 0.760631 0.063062\nv -0.019609 0.746928 0.084755\nv 0.080915 0.851606 0.063816\nv 0.1089 1.129808 -0.010416\nv 0.13941 1.026606 -0.025964\nv 0.106989 1.033688 -0.111479\nv 0.080023 1.146734 -0.075234\nv 0.080023 1.146734 -0.075234\nv 0.106989 1.033688 -0.111479\nv 0.051777 1.030619 -0.152383\nv 0.030034 1.149091 -0.099605\nv -0.021566 1.031536 -0.157053\nv -0.022175 1.145639 -0.116908\nv 0.018902 1.223315 -0.067856\nv -0.022181 1.220595 -0.075285\nv -0.074582 1.149056 -0.099455\nv -0.021566 1.031536 -0.157053\nv -0.094798 1.030572 -0.151779\nv -0.124336 1.146717 -0.074841\nv -0.150033 1.033138 -0.11078\nv -0.150033 1.033138 -0.11078\nv -0.153221 1.129478 -0.009936\nv -0.124336 1.146717 -0.074841\nv -0.18187 1.024691 -0.024811\nv -0.110992 1.216958 0.011804\nv -0.098017 1.22244 -0.041055\nv -0.141176 0.856916 0.048498\nv -0.196942 0.875604 -0.037316\nv -0.129139 0.98956 0.066887\nv -0.166146 0.535023 0.016219\nv -0.211142 0.672683 -0.057256\nv -0.220262 0.53762 -0.075507\nv -0.179759 0.398482 0.008071\nv -0.233543 0.402765 -0.093717\nv -0.190021 0.282139 0.006386\nv -0.251863 0.283033 -0.104886\nv -0.203757 0.163826 0.004676\nv -0.274892 0.161302 -0.116311\nv -0.21298 0.083873 0.003496\nv -0.29038 0.079023 -0.12401\nv -0.109319 1.092987 0.067445\nv -0.086822 1.191789 0.058127\nv -0.022026 1.131425 0.077479\nv -0.021466 1.05101 0.080656\nv -0.020471 0.966157 0.084226\nv -0.167072 0.671088 -0.146827\nv -0.111726 0.779068 -0.200167\nv -0.118233 0.685927 -0.219853\nv -0.162776 0.77452 -0.13551\nv -0.06332 1.223387 -0.067736\nv -0.098017 1.22244 -0.041055\nv -0.166095 0.173544 -0.405403\nv -0.155744 0.295458 -0.357746\nv -0.011012 0.290927 -0.407926\nv -0.017833 0.169762 -0.463393\nv -0.172682 0.091883 -0.437395\nv -0.017449 0.088177 -0.500977\nv -0.248625 0.158237 -0.263644\nv -0.227036 0.279355 -0.236558\nv -0.262762 0.077111 -0.281809\nv -0.227036 0.279355 -0.236558\nv -0.248625 0.158237 -0.263644\nv -0.262762 0.077111 -0.281809\nv -0.148695 0.41429 -0.311211\nv -0.013849 0.409577 -0.353172\nv -0.210218 0.397408 -0.210142\nv -0.210218 0.397408 -0.210142\nv -0.105343 0.87044 -0.180854\nv -0.01969 0.854677 -0.199199\nv -0.021532 0.770478 -0.224932\nv -0.021166 0.684263 -0.251643\nv -0.162776 0.77452 -0.13551\nv -0.167072 0.671088 -0.146827\nv -0.162776 0.77452 -0.13551\nv -0.158562 0.875992 -0.124411\nv -0.105343 0.87044 -0.180854\nv -0.203974 0.775003 -0.047201\nv -0.196942 0.875604 -0.037316\nv -0.158562 0.875992 -0.124411\nv -0.162776 0.77452 -0.13551\nv -0.211142 0.672683 -0.057256\nv -0.13223 0.550112 -0.265587\nv -0.118233 0.685927 -0.219853\nv -0.021166 0.684263 -0.251643\nv -0.015511 0.546571 -0.302752\nv -0.148695 0.41429 -0.311211\nv -0.13223 0.550112 -0.265587\nv -0.015511 0.546571 -0.302752\nv -0.013849 0.409577 -0.353172\nv -0.186813 0.534252 -0.178517\nv -0.167072 0.671088 -0.146827\nv -0.118233 0.685927 -0.219853\nv -0.210218 0.397408 -0.210142\nv -0.220262 0.53762 -0.075507\nv -0.211142 0.672683 -0.057256\nv -0.167072 0.671088 -0.146827\nv -0.186813 0.534252 -0.178517\nv -0.233543 0.402765 -0.093717\nv -0.210218 0.397408 -0.210142\nv -0.021566 1.031536 -0.157053\nv -0.01969 0.854677 -0.199199\nv -0.105343 0.87044 -0.180854\nv -0.094798 1.030572 -0.151779\nv -0.158562 0.875992 -0.124411\nv -0.150033 1.033138 -0.11078\nv -0.150033 1.033138 -0.11078\nv -0.158562 0.875992 -0.124411\nv -0.196942 0.875604 -0.037316\nv -0.18187 1.024691 -0.024811\nv -0.141176 0.856916 0.048498\nv -0.118934 0.851171 0.065284\nv -0.129139 0.98956 0.066887\nv 0.087404 0.990084 0.06569\nv -0.020471 0.966157 0.084226\nv -0.020357 0.829379 0.083069\nv 0.080915 0.851606 0.063816\nv -0.019609 0.746928 0.084755\nv 0.102996 0.857896 0.047014\nv 0.158221 0.87795 -0.038841\nv 0.13941 1.026606 -0.025964\nv 0.206394 0.406155 -0.095273\nv 0.183122 0.400224 -0.21168\nv 0.15638 0.53645 -0.180037\nv -0.021566 1.031536 -0.157053\nv 0.06667 0.870533 -0.182311\nv -0.01969 0.854677 -0.199199\nv 0.051777 1.030619 -0.152383\nv 0.119779 0.877393 -0.125907\nv 0.106989 1.033688 -0.111479\nv 0.106989 1.033688 -0.111479\nv 0.119779 0.877393 -0.125907\nv -0.06332 1.223387 -0.067736\nv -0.022181 1.220595 -0.075285\nv -0.022175 1.145639 -0.116908\nv -0.074582 1.149056 -0.099455\nv -0.129139 0.98956 0.066887\nv -0.118934 0.851171 0.065284\nv -0.112575 0.760326 0.064526\nv -0.021409 0.663611 0.086894\nv -0.106092 0.667906 0.06377\nv -0.008624 0.525118 0.088858\nv -0.108353 0.53131 0.062698\nv -0.005291 0.388687 0.092181\nv -0.112404 0.394886 0.061607\nv -0.002469 0.273176 0.095834\nv -0.122614 0.277139 0.06529\nv -0.01595 0.157031 0.100668\nv -0.134953 0.157355 0.069084\nv -0.021378 0.077987 0.103513\nv -0.143228 0.076436 0.071593\nv -0.203757 0.163826 0.004676\nv -0.21298 0.083873 0.003496\nv -0.190021 0.282139 0.006386\nv -0.179759 0.398482 0.008071\nv -0.166146 0.535023 0.016219\nv -0.155628 0.67169 0.024366\nv -0.148332 0.76512 0.036542\nv -0.141176 0.856916 0.048498\nv -0.196942 0.875604 -0.037316\nv -0.203974 0.775003 -0.047201\nv -0.211142 0.672683 -0.057256\nv 0.080023 1.146734 -0.075234\nv 0.053567 1.222414 -0.041218\nv 0.066703 1.216963 0.011656\nv 0.1089 1.129808 -0.010416\nv 0.072591 0.667896 0.062293\nv 0.121987 0.672944 0.022856\nv 0.1124 0.766304 0.035051\nv 0.076793 0.760631 0.063062\nv 0.102996 0.857896 0.047014\nv 0.080915 0.851606 0.063816\nv 0.158221 0.87795 -0.038841\nv 0.16772 0.777553 -0.048732\nv 0.177402 0.675212 -0.058815\nv 0.135845 0.536715 0.014715\nv 0.189812 0.540642 -0.077052\nv 0.152809 0.400551 0.006556\nv 0.206394 0.406155 -0.095273\nv 0.227647 0.286909 -0.106456\nv 0.165929 0.284495 0.004862\nv 0.182467 0.166797 0.003228\nv 0.253625 0.166003 -0.117769\nv 0.193634 0.087092 0.002048\nv 0.27111 0.084124 -0.125469\nv 0.065188 1.093056 0.066255\nv 0.087404 0.990084 0.06569\nv 0.13941 1.026606 -0.025964\nv 0.042273 1.192138 0.058093\nv -0.022026 1.131425 0.077479\nv -0.021466 1.05101 0.080656\nv -0.020471 0.966157 0.084226\nv 0.133312 0.672761 -0.148332\nv 0.084068 0.686393 -0.221322\nv 0.075286 0.779346 -0.20163\nv 0.126481 0.776056 -0.137011\nv 0.018902 1.223315 -0.067856\nv 0.053567 1.222414 -0.041218\nv 0.080023 1.146734 -0.075234\nv 0.030034 1.149091 -0.099605\nv 0.126155 0.173948 -0.405804\nv -0.011012 0.290927 -0.407926\nv 0.131063 0.296961 -0.359245\nv -0.017833 0.169762 -0.463393\nv 0.133113 0.092324 -0.437801\nv -0.017449 0.088177 -0.500977\nv 0.20887 0.159044 -0.264112\nv 0.20282 0.28262 -0.238109\nv 0.223386 0.077992 -0.282288\nv 0.20282 0.28262 -0.238109\nv 0.20887 0.159044 -0.264112\nv 0.223386 0.077992 -0.282288\nv -0.013849 0.409577 -0.353172\nv 0.121127 0.415585 -0.312704\nv 0.183122 0.400224 -0.21168\nv 0.183122 0.400224 -0.21168\nv -0.01969 0.854677 -0.199199\nv 0.06667 0.870533 -0.182311\nv -0.021532 0.770478 -0.224932\nv 0.126481 0.776056 -0.137011\nv 0.133312 0.672761 -0.148332\nv 0.084068 0.686393 -0.221322\nv -0.021166 0.684263 -0.251643\nv -0.021532 0.770478 -0.224932\nv 0.126481 0.776056 -0.137011\nv 0.06667 0.870533 -0.182311\nv 0.119779 0.877393 -0.125907\nv 0.16772 0.777553 -0.048732\nv 0.119779 0.877393 -0.125907\nv 0.158221 0.87795 -0.038841\nv 0.126481 0.776056 -0.137011\nv 0.101359 0.550961 -0.267067\nv -0.015511 0.546571 -0.302752\nv 0.121127 0.415585 -0.312704\nv -0.015511 0.546571 -0.302752\nv 0.101359 0.550961 -0.267067\nv -0.013849 0.409577 -0.353172\nv 0.15638 0.53645 -0.180037\nv 0.084068 0.686393 -0.221322\nv 0.133312 0.672761 -0.148332\nv 0.183122 0.400224 -0.21168\nv 0.189812 0.540642 -0.077052\nv 0.133312 0.672761 -0.148332\nv 0.177402 0.675212 -0.058815\nv 0.15638 0.53645 -0.180037\nv 0.206394 0.406155 -0.095273\nv -0.050267 1.68677 0.066464\nv -0.049018 1.687448 0.065606\nv -0.050791 1.688115 0.067165\nv 0.006444 1.686758 0.06647\nv 0.006972 1.688101 0.067175\nv 0.005193 1.687435 0.065615\nv -0.050791 1.688115 0.067165\nv -0.053946 1.685079 0.065828\nv -0.051758 1.68641 0.066406\nv 0.006972 1.688101 0.067175\nv 0.007963 1.686389 0.066435\nv 0.010152 1.685058 0.065853\nv -0.013787 1.706751 0.094079\nv -0.015409 1.70872 0.089125\nv -0.013393 1.709028 0.08862\nv -0.048097 1.746831 0.059085\nv -0.052604 1.745559 0.054229\nv -0.05129 1.743159 0.058787\nv -0.049796 1.7488 0.054492\nv -0.095577 1.755314 0.044285\nv -0.093532 1.764035 0.036753\nv -0.097757 1.764122 0.038944\nv -0.091612 1.756274 0.041457\nv -0.086327 1.7479 0.053318\nv -0.083466 1.749747 0.049412\nv -0.075552 1.744514 0.058142\nv -0.073976 1.746767 0.053661\nv -0.061533 1.742863 0.059487\nv -0.06163 1.745313 0.054846\nv -0.090391 1.720818 0.056418\nv -0.073382 1.70479 0.065245\nv -0.070349 1.718626 0.069245\nv -0.032773 1.707042 0.084502\nv -0.030629 1.709028 0.088629\nv -0.03256 1.708682 0.087384\nv -0.029065 1.706686 0.085979\nv -0.028173 1.707882 0.088191\nv -0.028613 1.70872 0.089132\nv -0.071109 1.72949 -0.084987\nv -0.022097 1.708757 -0.082595\nv -0.056645 1.712218 -0.076853\nv -0.022111 1.742613 -0.112143\nv -0.045213 1.641304 -0.066843\nv -0.022095 1.618466 -0.078997\nv -0.045618 1.620872 -0.072183\nv -0.022093 1.641694 -0.075538\nv -0.044961 1.657092 -0.066051\nv -0.022093 1.656225 -0.075029\nv -0.043502 1.675352 -0.068765\nv -0.022093 1.675274 -0.075336\nv -0.079682 1.750172 -0.098757\nv -0.055342 1.639242 -0.05071\nv -0.059604 1.619229 -0.054003\nv -0.056009 1.655857 -0.047963\nv -0.061015 1.679626 -0.048645\nv -0.076212 1.707115 -0.05356\nv -0.091421 1.724366 -0.055045\nv -0.102372 1.75755 -0.08009\nv -0.056685 1.649441 -0.032759\nv -0.047004 1.656498 -0.013364\nv -0.062132 1.673277 -0.031168\nv -0.047253 1.644902 -0.015412\nv -0.048902 1.630078 -0.016936\nv -0.056848 1.63612 -0.035187\nv -0.052114 1.609193 -0.016134\nv -0.034752 1.652299 -0.006781\nv -0.035512 1.643685 -0.008222\nv -0.036248 1.628598 -0.008271\nv -0.037177 1.605649 -0.006029\nv -0.022058 1.641143 -0.005152\nv -0.022058 1.65142 -0.00412\nv -0.022058 1.627256 -0.005015\nv -0.022057 1.604874 -0.002399\nv -0.061164 1.613816 -0.036702\nv -0.025674 1.706161 0.09654\nv -0.025531 1.703916 0.092234\nv -0.034326 1.704282 0.08324\nv -0.027479 1.700796 0.086336\nv -0.03023 1.706751 0.094088\nv -0.034041 1.707119 0.089818\nv -0.035256 1.706316 0.086792\nv -0.036845 1.703874 0.081604\nv -0.022012 1.699835 0.087277\nv -0.022008 1.703387 0.094485\nv -0.022012 1.698036 0.086429\nv -0.028463 1.698196 0.085479\nv -0.031031 1.708279 0.094947\nv -0.035467 1.708216 0.091296\nv -0.037311 1.706945 0.086881\nv -0.035879 1.710767 0.091761\nv -0.039907 1.708891 0.08506\nv -0.040719 1.706646 0.079978\nv -0.036312 1.699488 0.081601\nv -0.043056 1.702567 0.078945\nv -0.029408 1.694905 0.085008\nv -0.022013 1.694955 0.086149\nv -0.036863 1.695384 0.081394\nv -0.049261 1.696665 0.074142\nv -0.047013 1.746006 0.0603\nv -0.050939 1.74189 0.059959\nv -0.050406 1.740006 0.062226\nv -0.061912 1.740978 0.060027\nv -0.061177 1.738626 0.061326\nv -0.075913 1.740041 0.058824\nv -0.075987 1.742407 0.058395\nv -0.088681 1.742196 0.053607\nv -0.087463 1.7453 0.053253\nv -0.097277 1.754008 0.043402\nv -0.099511 1.752689 0.042009\nv -0.099867 1.763419 0.036759\nv -0.101481 1.76295 0.035142\nv 0.004046 1.746831 0.059059\nv 0.008548 1.745559 0.054198\nv 0.005741 1.7488 0.054464\nv 0.007238 1.743158 0.058757\nv 0.051511 1.755313 0.044211\nv 0.049459 1.764034 0.036681\nv 0.047543 1.756273 0.041387\nv 0.053685 1.764121 0.038869\nv 0.04227 1.7479 0.053254\nv 0.039405 1.749746 0.04935\nv 0.0315 1.744514 0.058089\nv 0.029919 1.746766 0.053609\nv 0.017482 1.742863 0.059447\nv 0.017575 1.745313 0.054807\nv 0.002963 1.746006 0.060275\nv 0.006889 1.74189 0.05993\nv 0.055442 1.752688 0.041931\nv 0.055794 1.763418 0.036681\nv 0.05321 1.754007 0.043327\nv 0.044624 1.742195 0.053541\nv 0.043405 1.7453 0.053187\nv 0.031935 1.742407 0.058341\nv 0.031861 1.740053 0.05877\nv 0.017861 1.740978 0.059987\nv 0.017128 1.738625 0.061287\nv 0.006357 1.740005 0.062197\nv -0.011254 1.707042 0.084492\nv -0.011464 1.708682 0.087373\nv -0.014961 1.706686 0.085972\nv -0.01585 1.707882 0.088185\nv 0.026914 1.729489 -0.085036\nv 0.012458 1.712368 -0.076851\nv -0.022097 1.708757 -0.082595\nv -0.022111 1.742613 -0.112143\nv 0.001035 1.641304 -0.066866\nv -0.022095 1.618466 -0.078997\nv -0.022093 1.641694 -0.075538\nv 0.001435 1.620872 -0.072206\nv 0.000783 1.657006 -0.066079\nv -0.022093 1.656225 -0.075029\nv -0.000678 1.675352 -0.068787\nv -0.022093 1.675274 -0.075336\nv 0.035473 1.750172 -0.098814\nv 0.01118 1.639242 -0.050743\nv 0.015438 1.619229 -0.05404\nv 0.01185 1.655857 -0.047997\nv 0.016856 1.679626 -0.048683\nv 0.032047 1.707151 -0.053605\nv 0.047255 1.724365 -0.055114\nv 0.058182 1.757549 -0.08017\nv 0.072526 1.753848 -0.033629\nv 0.066275 1.741426 -0.038429\nv 0.063395 1.756681 -0.037655\nv 0.070934 1.760418 -0.029895\nv -0.045939 1.687302 0.070971\nv -0.021705 1.685478 0.078822\nv -0.021599 1.685883 0.082911\nv -0.028984 1.686291 0.081574\nv -0.043859 1.687209 0.068218\nv -0.037074 1.686157 0.074571\nv -0.038627 1.686847 0.077138\nv -0.029017 1.685552 0.078714\nv -0.014553 1.6864 0.081248\nv 0.002115 1.687288 0.070986\nv 0.000034 1.687195 0.068237\nv -0.006751 1.686142 0.074601\nv -0.0052 1.686832 0.077165\nv -0.01448 1.685648 0.078428\nv 0.059253 1.83734 0.014542\nv 0.069852 1.786195 -0.00385\nv 0.072346 1.797191 -0.047171\nv 0.060399 1.81774 0.024811\nv 0.039486 1.849655 0.053218\nv 0.039753 1.828206 0.061032\nv 0.01513 1.858064 0.06416\nv 0.067587 1.773821 -0.064287\nv 0.072325 1.783243 -0.045368\nv 0.083724 1.787814 -0.046081\nv 0.08768 1.781062 -0.046679\nv 0.092109 1.772688 -0.063109\nv 0.058253 1.733301 -0.048242\nv 0.089208 1.748241 -0.06247\nv 0.078677 1.727238 -0.049432\nv 0.063621 1.753945 -0.064512\nv 0.058518 1.718539 -0.023237\nv 0.057168 1.720395 -0.032355\nv 0.069083 1.720865 -0.028718\nv 0.083446 1.751128 -0.053458\nv 0.078137 1.731353 -0.050956\nv 0.084476 1.768823 -0.053871\nv 0.073624 1.769005 -0.032416\nv 0.080833 1.775282 -0.047517\nv 0.071316 1.754234 -0.02562\nv 0.076315 1.770757 -0.027546\nv 0.072003 1.732898 -0.039487\nv 0.074551 1.721488 -0.038992\nv 0.068514 1.735849 -0.026887\nv 0.06782 1.736043 -0.034609\nv 0.070717 1.74256 -0.036057\nv 0.074329 1.775355 -0.024047\nv 0.071907 1.777241 -0.021767\nv 0.070655 1.753374 -0.020929\nv 0.066219 1.736512 -0.006319\nv 0.066916 1.735445 -0.020253\nv 0.035767 1.686674 0.035409\nv 0.046851 1.693118 0.003368\nv 0.060816 1.716556 0.007689\nv 0.047073 1.711891 -0.036872\nv 0.04455 1.696298 -0.021061\nv 0.028026 1.675698 0.006025\nv 0.019088 1.669084 0.031745\nv 0.012664 1.667534 0.046273\nv 0.028062 1.68545 0.049389\nv 0.022943 1.684508 0.055711\nv -0.127879 1.787816 -0.045976\nv -0.136282 1.772689 -0.062995\nv -0.131836 1.781063 -0.04657\nv -0.111761 1.773822 -0.064198\nv -0.11648 1.783245 -0.045274\nv -0.102652 1.718539 -0.023156\nv -0.113222 1.720866 -0.028627\nv -0.101311 1.720396 -0.032276\nv -0.115074 1.760419 -0.029802\nv -0.12761 1.75113 -0.053353\nv -0.112308 1.756682 -0.037567\nv -0.122299 1.731354 -0.050856\nv -0.110423 1.741427 -0.038341\nv -0.116152 1.732899 -0.039393\nv -0.111965 1.736044 -0.034519\nv -0.112651 1.73585 -0.026797\nv -0.118701 1.721489 -0.038896\nv -0.122837 1.727239 -0.049331\nv -0.107795 1.753946 -0.064427\nv -0.133381 1.748242 -0.062359\nv -0.102412 1.733302 -0.048162\nv -0.11667 1.75385 -0.033535\nv -0.128639 1.768824 -0.053765\nv -0.117766 1.769006 -0.032321\nv -0.12499 1.775284 -0.047415\nv -0.115452 1.754235 -0.025527\nv -0.120453 1.770758 -0.027448\nv -0.114864 1.742561 -0.035965\nv -0.111047 1.735447 -0.020164\nv -0.118463 1.775356 -0.023951\nv -0.116039 1.777242 -0.021673\nv -0.113625 1.759296 -0.005949\nv -0.114786 1.753375 -0.020836\nv -0.110336 1.736513 -0.006231\nv -0.109833 1.734998 0.023802\nv -0.104919 1.716557 0.007771\nv -0.090959 1.693145 0.003443\nv -0.048538 1.660011 0.034769\nv -0.072074 1.675598 0.00599\nv -0.049522 1.665257 0.011028\nv -0.048109 1.666076 -0.006099\nv -0.070464 1.679642 -0.016055\nv -0.088682 1.696299 -0.020994\nv -0.062644 1.669084 0.031789\nv -0.046461 1.659321 0.046227\nv -0.079714 1.6867 0.035472\nv -0.031992 1.65417 0.047566\nv -0.021829 1.65498 0.038219\nv -0.021616 1.653406 0.048116\nv -0.056155 1.66753 0.04632\nv -0.090131 1.706902 0.04916\nv -0.071826 1.685454 0.049431\nv -0.021613 1.653211 0.054826\nv -0.044155 1.660485 0.054292\nv -0.031132 1.654197 0.05511\nv -0.05367 1.668944 0.053673\nv -0.066726 1.684519 0.055724\nv -0.066984 1.700466 0.067159\nv -0.0305 1.657168 0.062965\nv -0.021608 1.655985 0.064041\nv -0.041279 1.66312 0.061136\nv -0.062208 1.696425 0.067728\nv -0.062174 1.684509 0.060559\nv -0.029601 1.663145 0.068261\nv -0.021606 1.661482 0.068948\nv -0.040456 1.667482 0.065325\nv -0.049962 1.673926 0.062872\nv -0.051912 1.671472 0.058771\nv -0.05886 1.684436 0.06311\nv -0.032152 1.655634 0.036951\nv -0.022049 1.659906 0.013459\nv -0.033516 1.660281 -0.00161\nv -0.033864 1.660929 0.012746\nv -0.022055 1.659961 0.001073\nv -0.084049 1.703488 -0.036635\nv -0.09122 1.711892 -0.036803\nv -0.113966 1.786196 -0.003759\nv -0.113116 1.781604 -0.075068\nv -0.116502 1.797192 -0.047077\nv -0.103348 1.837341 0.014623\nv -0.104483 1.817741 0.024893\nv -0.083542 1.849656 0.053279\nv -0.083801 1.828207 0.061094\nv -0.059174 1.858064 0.064197\nv -0.11037 1.779244 0.019031\nv -0.105327 1.802724 0.032316\nv -0.087092 1.813396 0.061883\nv -0.051752 1.82246 0.077968\nv -0.036208 1.860703 0.069113\nv -0.022013 1.82431 0.083103\nv -0.02202 1.860888 0.070238\nv -0.032717 1.824137 0.082461\nv -0.022013 1.808551 0.084609\nv -0.041334 1.806961 0.082826\nv -0.031538 1.807812 0.08422\nv -0.022013 1.793555 0.084537\nv -0.028588 1.769648 0.079448\nv -0.030092 1.793666 0.084125\nv -0.042235 1.794256 0.081876\nv -0.059658 1.811074 0.076883\nv -0.034985 1.769906 0.076978\nv -0.035665 1.732077 0.075747\nv -0.031454 1.741194 0.074962\nv -0.038697 1.744322 0.069361\nv -0.032566 1.756117 0.074703\nv -0.039574 1.755917 0.069102\nv -0.042425 1.769016 0.070877\nv -0.047684 1.788291 0.077902\nv -0.064793 1.800845 0.074391\nv -0.08736 1.805313 0.06218\nv -0.102878 1.792575 0.041369\nv -0.105047 1.774284 0.029983\nv -0.106652 1.763403 0.028383\nv -0.106272 1.750652 0.03437\nv -0.11189 1.760907 0.014099\nv -0.09095 1.735037 0.054833\nv -0.07493 1.731147 0.064154\nv -0.059556 1.730447 0.068227\nv -0.056995 1.721663 0.073069\nv -0.048349 1.733466 0.068965\nv -0.044242 1.726876 0.074484\nv -0.041709 1.738912 0.06897\nv -0.1007 1.768926 0.034461\nv -0.095736 1.781868 0.04327\nv -0.084214 1.788157 0.054774\nv -0.068271 1.78683 0.06283\nv -0.056404 1.780338 0.065711\nv -0.04953 1.769383 0.065596\nv -0.045523 1.755397 0.063675\nv -0.045253 1.745736 0.06241\nv -0.061481 1.711079 0.072716\nv -0.053532 1.714838 0.07521\nv -0.041715 1.719928 0.078277\nv -0.034811 1.724082 0.08023\nv -0.055559 1.701897 0.072847\nv -0.049328 1.706509 0.076133\nv -0.039741 1.71505 0.080431\nv -0.036303 1.716222 0.084053\nv -0.031579 1.718736 0.085775\nv -0.030322 1.726965 0.080973\nv -0.022015 1.769735 0.079923\nv -0.022017 1.756056 0.077409\nv -0.026991 1.755575 0.076892\nv -0.026401 1.739668 0.077429\nv -0.015443 1.769648 0.079441\nv -0.017042 1.755575 0.076887\nv -0.017633 1.739668 0.077424\nv -0.022016 1.739717 0.077794\nv -0.022014 1.72773 0.082167\nv -0.024753 1.727791 0.082013\nv -0.024294 1.721337 0.086312\nv -0.022013 1.721879 0.085937\nv -0.02201 1.718049 0.090842\nv -0.025757 1.717925 0.090253\nv -0.01799 1.713997 0.096541\nv -0.022007 1.713838 0.097708\nv -0.026025 1.713997 0.096545\nv -0.026656 1.709119 0.098483\nv -0.022007 1.705619 0.097269\nv -0.022006 1.7087 0.099213\nv -0.027029 1.711867 0.0982\nv -0.022006 1.711362 0.099827\nv -0.031692 1.711397 0.095151\nv -0.030269 1.714797 0.092661\nv -0.029462 1.717727 0.088605\nv -0.03503 1.713686 0.089664\nv -0.038975 1.71292 0.084248\nv -0.041479 1.711082 0.079549\nv -0.04778 1.704242 0.07632\nv -0.053729 1.700052 0.072908\nv -0.058671 1.693531 0.068052\nv -0.029836 1.673597 0.072936\nv -0.021604 1.673103 0.073527\nv -0.04094 1.675092 0.069371\nv -0.048001 1.677729 0.066332\nv -0.056152 1.684782 0.064827\nv -0.055993 1.69092 0.067818\nv -0.053512 1.689417 0.06768\nv -0.038767 1.691515 0.080605\nv -0.046896 1.690554 0.073486\nv -0.030031 1.692133 0.085208\nv -0.022013 1.691986 0.086337\nv -0.039411 1.688965 0.079836\nv -0.030685 1.690075 0.085208\nv -0.022013 1.688696 0.086326\nv -0.046785 1.688152 0.07212\nv -0.01834 1.70616 0.096536\nv -0.018488 1.703916 0.09223\nv -0.009702 1.704281 0.083228\nv -0.016546 1.700796 0.08633\nv -0.00998 1.707119 0.089806\nv -0.008768 1.706316 0.086779\nv -0.007185 1.703874 0.081589\nv -0.015562 1.698195 0.085472\nv -0.017357 1.709119 0.098478\nv -0.012986 1.708279 0.094938\nv -0.008553 1.708216 0.091282\nv -0.006714 1.706945 0.086866\nv -0.016984 1.711866 0.098195\nv -0.012323 1.711397 0.095141\nv -0.008141 1.710767 0.091747\nv -0.004119 1.708891 0.085042\nv -0.003646 1.706646 0.079959\nv -0.007718 1.699487 0.081587\nv -0.000842 1.702554 0.078924\nv -0.014618 1.694905 0.085001\nv -0.007167 1.695384 0.081379\nv 0.005693 1.697081 0.074228\nv 0.012541 1.649441 -0.032793\nv 0.002897 1.656491 -0.013372\nv 0.003143 1.644895 -0.01542\nv 0.004774 1.629988 -0.016966\nv 0.012701 1.636119 -0.035221\nv 0.007985 1.609193 -0.016164\nv -0.009351 1.652293 -0.006779\nv -0.008593 1.643679 -0.00822\nv -0.007872 1.628511 -0.008289\nv -0.006941 1.605649 -0.006044\nv -0.022058 1.65142 -0.00412\nv -0.022058 1.641143 -0.005152\nv -0.022058 1.627256 -0.005015\nv -0.022057 1.604874 -0.002399\nv 0.017015 1.613816 -0.036741\nv 0.01799 1.672968 -0.031285\nv -0.022055 1.659961 0.001073\nv 0.039901 1.703522 -0.036689\nv 0.026337 1.679469 -0.016146\nv 0.004009 1.666069 -0.006108\nv 0.005502 1.665388 0.011118\nv -0.010597 1.66028 -0.001621\nv -0.010235 1.660929 0.012734\nv -0.022049 1.659906 0.013459\nv -0.011506 1.655803 0.037419\nv -0.021829 1.65498 0.038219\nv 0.005021 1.660009 0.034746\nv -0.011241 1.65417 0.047556\nv -0.021616 1.653406 0.048116\nv 0.003227 1.65932 0.046203\nv -0.012093 1.654197 0.0551\nv 0.000868 1.660505 0.054212\nv 0.010053 1.668988 0.053517\nv -0.012718 1.657168 0.062956\nv -0.002242 1.663141 0.061057\nv 0.008298 1.671514 0.05862\nv -0.013612 1.663145 0.068253\nv -0.003067 1.667503 0.065244\nv 0.006348 1.673966 0.06273\nv 0.015087 1.684425 0.063106\nv 0.018397 1.684497 0.060551\nv 0.018321 1.696428 0.067678\nv 0.023044 1.700477 0.067081\nv 0.029399 1.704788 0.065196\nv 0.046133 1.706901 0.049092\nv 0.065746 1.734997 0.023714\nv 0.069509 1.759295 -0.006041\nv 0.068931 1.781603 -0.075159\nv 0.067794 1.760906 0.014009\nv 0.066279 1.779243 0.018943\nv 0.06125 1.802723 0.032233\nv 0.043044 1.813395 0.061818\nv 0.00772 1.822459 0.077939\nv -0.007832 1.860703 0.069099\nv -0.011311 1.824137 0.08245\nv -0.002693 1.80696 0.082807\nv -0.012487 1.807811 0.08421\nv -0.013934 1.793666 0.084116\nv -0.001793 1.794256 0.081856\nv 0.015625 1.811073 0.076845\nv -0.009048 1.769906 0.076965\nv 0.003652 1.78829 0.077876\nv 0.020757 1.800845 0.074349\nv 0.043313 1.805312 0.062115\nv 0.05881 1.792574 0.041289\nv 0.060967 1.774283 0.029901\nv 0.06257 1.763402 0.028298\nv 0.062196 1.750651 0.034286\nv 0.046337 1.720817 0.056349\nv 0.046894 1.735036 0.054765\nv 0.030883 1.731147 0.064101\nv 0.026331 1.718618 0.069219\nv 0.015513 1.730446 0.06819\nv 0.012957 1.721663 0.073035\nv 0.004308 1.733466 0.068939\nv -0.002332 1.738912 0.06895\nv 0.000206 1.726876 0.074462\nv -0.00837 1.732077 0.075733\nv -0.005345 1.744322 0.069344\nv -0.012582 1.741194 0.074953\nv 0.017443 1.711078 0.072677\nv 0.009497 1.714838 0.075178\nv -0.002318 1.719928 0.078257\nv -0.00922 1.724082 0.080217\nv -0.013708 1.726965 0.080964\nv 0.011626 1.701886 0.072843\nv 0.005293 1.706508 0.076106\nv -0.00429 1.71505 0.080413\nv -0.007724 1.716222 0.084039\nv -0.012446 1.718736 0.085765\nv -0.019731 1.721337 0.08631\nv -0.018263 1.717925 0.090249\nv -0.014561 1.717727 0.088597\nv -0.013749 1.714796 0.092652\nv -0.008992 1.713686 0.089651\nv -0.005052 1.71292 0.084232\nv -0.002552 1.711081 0.07953\nv 0.003745 1.704241 0.076295\nv 0.009809 1.700038 0.072916\nv 0.014828 1.693521 0.068041\nv -0.013971 1.673521 0.073149\nv -0.002702 1.675086 0.069368\nv 0.00444 1.677748 0.066249\nv 0.012357 1.684762 0.06485\nv 0.012195 1.690897 0.067847\nv 0.009715 1.689395 0.067711\nv -0.005188 1.69149 0.080659\nv 0.003065 1.69054 0.0735\nv -0.013995 1.692133 0.0852\nv -0.004446 1.68897 0.079804\nv -0.013341 1.690075 0.085199\nv 0.002959 1.688138 0.072135\nv -0.019276 1.727791 0.08201\nv -0.01147 1.756116 0.074693\nv -0.004467 1.755917 0.069084\nv -0.001612 1.769003 0.070857\nv 0.001205 1.745735 0.062387\nv 0.00147 1.755421 0.063653\nv 0.005492 1.76937 0.065567\nv 0.012357 1.780276 0.065678\nv 0.024182 1.786879 0.06279\nv 0.040159 1.788156 0.054712\nv 0.051669 1.781867 0.043196\nv 0.056624 1.768925 0.034383\nv 0.057406 1.762949 0.035063\nv -0.049018 1.687448 0.065606\nv -0.046132 1.685479 0.069902\nv -0.043859 1.687209 0.068218\nv -0.039837 1.683597 0.075046\nv -0.038223 1.686342 0.074782\nv -0.029854 1.682287 0.080026\nv -0.029017 1.685552 0.078714\nv -0.0216 1.682137 0.081029\nv -0.021705 1.685478 0.078822\nv -0.01448 1.685648 0.078428\nv -0.013642 1.682383 0.079739\nv -0.005602 1.686327 0.07481\nv -0.00388 1.683612 0.074984\nv 0.000034 1.687195 0.068237\nv 0.002313 1.685465 0.069918\nv 0.005193 1.687435 0.065615\nv -0.029654 1.67515 0.074427\nv -0.021603 1.674495 0.07455\nv -0.040838 1.67775 0.071115\nv -0.047104 1.681031 0.068311\nv -0.03059 1.677984 0.078751\nv -0.0216 1.677651 0.080483\nv -0.041018 1.681628 0.073905\nv -0.046483 1.68373 0.069586\nv -0.002815 1.677748 0.071101\nv -0.013736 1.67521 0.074245\nv 0.002668 1.683716 0.069602\nv 0.003384 1.681047 0.068239\nv -0.012837 1.678057 0.078528\nv -0.002687 1.681641 0.073849\nv -0.051683 1.7669 0.065095\nv -0.050119 1.756638 0.057004\nv -0.048391 1.75584 0.061915\nv -0.052991 1.766177 0.059794\nv -0.060715 1.776481 0.066447\nv -0.060926 1.774753 0.060964\nv -0.072732 1.779573 0.064166\nv -0.071493 1.777476 0.058969\nv -0.084708 1.779558 0.057941\nv -0.082053 1.777597 0.053475\nv -0.093668 1.775882 0.048037\nv -0.089932 1.774377 0.044761\nv -0.097793 1.768065 0.038448\nv -0.093539 1.767497 0.036316\nv -0.050708 1.768631 0.065384\nv -0.047103 1.755618 0.062681\nv -0.057899 1.779216 0.065565\nv -0.069813 1.783651 0.063452\nv -0.084556 1.784424 0.0554\nv -0.094457 1.778517 0.044837\nv -0.099372 1.768397 0.036048\nv 0.007635 1.766906 0.065089\nv 0.00606 1.756663 0.056977\nv 0.008947 1.766176 0.059762\nv 0.004371 1.755901 0.061917\nv 0.016646 1.776468 0.066407\nv 0.01691 1.774617 0.060918\nv 0.028677 1.779572 0.064118\nv 0.027436 1.777463 0.058919\nv 0.040669 1.779557 0.057868\nv 0.037996 1.777596 0.053415\nv 0.049606 1.775881 0.047966\nv 0.045866 1.774376 0.044694\nv 0.053692 1.768064 0.038373\nv 0.049465 1.767496 0.036244\nv 0.055298 1.768396 0.03597\nv 0.050392 1.778516 0.044764\nv 0.040501 1.784423 0.055338\nv 0.025723 1.7837 0.06341\nv 0.013873 1.779117 0.065525\nv 0.006667 1.768619 0.065355\nv 0.003047 1.755655 0.062657\n\nvt 0.767335 0.656269 0\nvt 0.511 0.022248 0\nvt 0.507731 0.021228 0\nvt 0.936591 0.027558 0\nvt 0.506479 0.016875 0\nvt 0.764493 0.652686 0\nvt 0.512611 0.018665 0\nvt 0.931648 0.03104 0\nvt 0.503843 0.020357 0\nvt 0.933193 0.026494 0\nvt 0.928828 0.030372 0\nvt 0.929545 0.026043 0\nvt 0.925972 0.026133 0\nvt 0.925971 0.030226 0\nvt 0.768566 0.653165 0\nvt 0.769981 0.656579 0\nvt 0.774427 0.653034 0\nvt 0.774427 0.656125 0\nvt 0.046496 0.076145 0\nvt 0.047189 0.070029 0\nvt 0.471946 0.352786 0\nvt 0.05233 0.068349 0\nvt 0.051293 0.076535 0\nvt 0.466959 0.350366 0\nvt 0.047342 0.06387 0\nvt 0.463408 0.354231 0\nvt 0.043791 0.066238 0\nvt 0.461133 0.349208 0\nvt 0.459759 0.353779 0\nvt 0.456188 0.348337 0\nvt 0.456186 0.35387 0\nvt 0.057482 0.07607 0\nvt 0.057843 0.070137 0\nvt 0.456191 0.339919 0\nvt 0.463884 0.340548 0\nvt 0.471154 0.342246 0\nvt 0.062833 0.076566 0\nvt 0.482743 0.351854 0\nvt 0.063127 0.070698 0\nvt 0.476306 0.350152 0\nvt 0.056689 0.066659 0\nvt 0.481535 0.348691 0\nvt 0.061919 0.066496 0\nvt 0.476861 0.343475 0\nvt 0.299143 0.192477 0\nvt 0.291156 0.183817 0\nvt 0.474819 0.334815 0\nvt 0.299418 0.185752 0\nvt 0.069661 0.071854 0\nvt 0.068555 0.07881 0\nvt 0.486893 0.344699 0\nvt 0.067276 0.067299 0\nvt 0.483576 0.340737 0\nvt 0.302106 0.18551 0\nvt 0.479941 0.336508 0\nvt 0.306502 0.182945 0\nvt 0.303607 0.180923 0\nvt 0.296974 0.173314 0\nvt 0.30952 0.169563 0\nvt 0.31196 0.178608 0\nvt 0.298356 0.162444 0\nvt 0.307901 0.162543 0\nvt 0.311053 0.182073 0\nvt 0.298713 0.140843 0\nvt 0.307258 0.142094 0\nvt 0.472512 0.313449 0\nvt 0.290413 0.162451 0\nvt 0.466542 0.289048 0\nvt 0.290355 0.13805 0\nvt 0.465811 0.3134 0\nvt 0.45619 0.286692 0\nvt 0.456193 0.313391 0\nvt 0.298164 0.133874 0\nvt 0.308155 0.134901 0\nvt 0.468341 0.280194 0\nvt 0.289389 0.129196 0\nvt 0.456192 0.268755 0\nvt 0.608254 0.354224 0\nvt 0.604181 0.353745 0\nvt 0.292664 0.208789 0\nvt 0.599384 0.351696 0\nvt 0.605143 0.34746 0\nvt 0.286905 0.214939 0\nvt 0.614116 0.354094 0\nvt 0.614117 0.345769 0\nvt 0.299249 0.213138 0\nvt 0.592799 0.347491 0\nvt 0.603019 0.331414 0\nvt 0.595598 0.332855 0\nvt 0.599521 0.321117 0\nvt 0.594267 0.3272 0\nvt 0.81196 0.704848 0\nvt 0.596401 0.318283 0\nvt 0.810555 0.695931 0\nvt 0.806843 0.703915 0\nvt 0.804403 0.69487 0\nvt 0.802784 0.68785 0\nvt 0.597864 0.310533 0\nvt 0.808608 0.688181 0\nvt 0.606665 0.310444 0\nvt 0.614118 0.329793 0\nvt 0.614116 0.310161 0\nvt 0.586561 0.338586 0\nvt 0.812535 0.709861 0\nvt 0.591068 0.332213 0\nvt 0.805936 0.70738 0\nvt 0.60086 0.289753 0\nvt 0.802141 0.667401 0\nvt 0.607245 0.290392 0\nvt 0.614114 0.290737 0\nvt 0.599818 0.28256 0\nvt 0.606369 0.28273 0\nvt 0.614131 0.282217 0\nvt 0.587844 0.349162 0\nvt 0.304204 0.20882 0\nvt 0.298853 0.208324 0\nvt 0.582122 0.342682 0\nvt 0.786661 0.354241 0\nvt 0.8864 0.854512 0\nvt 0.879424 0.854938 0\nvt 0.886006 0.846251 0\nvt 0.781719 0.34598 0\nvt 0.786187 0.343452 0\nvt 0.7911 0.350145 0\nvt 0.657102 0.258059 0\nvt 0.795606 0.343771 0\nvt 0.790161 0.340346 0\nvt 0.656235 0.254634 0\nvt 0.6637 0.255579 0\nvt 0.662433 0.252225 0\nvt 0.880039 0.846575 0\nvt 0.595515 0.259756 0\nvt 0.592501 0.257612 0\nvt 0.874897 0.844431 0\nvt 0.589074 0.26637 0\nvt 0.874857 0.85319 0\nvt 0.585757 0.262408 0\nvt 0.586961 0.25413 0\nvt 0.04043 0.048023 0\nvt 0.582122 0.258179 0\nvt 0.918588 0.610164 0\nvt 0.584691 0.252358 0\nvt 0.042998 0.044299 0\nvt 0.03908 0.043641 0\nvt 0.912109 0.609194 0\nvt 0.041811 0.037838 0\nvt 0.038166 0.039102 0\nvt 0.610307 0.230101 0\nvt 0.876495 0.81692 0\nvt 0.880117 0.81868 0\nvt 0.613701 0.231861 0\nvt 0.606237 0.227378 0\nvt 0.916003 0.582857 0\nvt 0.602802 0.225052 0\nvt 0.911426 0.58267 0\nvt 0.612083 0.227678 0\nvt 0.619879 0.215599 0\nvt 0.880301 0.804699 0\nvt 0.623699 0.21788 0\nvt 0.919436 0.570805 0\nvt 0.615897 0.213 0\nvt 0.607989 0.224718 0\nvt 0.915916 0.581316 0\nvt 0.603807 0.223511 0\nvt 0.913718 0.568481 0\nvt 0.638019 0.190659 0\nvt 0.879034 0.777479 0\nvt 0.886121 0.804234 0\nvt 0.754117 0.303963 0\nvt 0.738498 0.277321 0\nvt 0.883669 0.777592 0\nvt 0.635882 0.189796 0\nvt 0.917356 0.546507 0\nvt 0.633274 0.188701 0\nvt 0.912818 0.546121 0\nvt 0.757124 0.30181 0\nvt 0.740317 0.276437 0\nvt 0.657275 0.213002 0\nvt 0.76086 0.298714 0\nvt 0.66033 0.189608 0\nvt 0.742956 0.27532 0\nvt 0.664043 0.211512 0\nvt 0.663142 0.189152 0\nvt 0.765547 0.313382 0\nvt 0.885351 0.81624 0\nvt 0.762167 0.315969 0\nvt 0.764379 0.31938 0\nvt 0.885297 0.819651 0\nvt 0.885371 0.822424 0\nvt 0.766186 0.322153 0\nvt 0.768225 0.317175 0\nvt 0.770914 0.321108 0\nvt 0.774814 0.317211 0\nvt 0.657545 0.231499 0\nvt 0.657725 0.228338 0\nvt 0.772715 0.31405 0\nvt 0.66175 0.225701 0\nvt 0.65742 0.22518 0\nvt 0.770272 0.310892 0\nvt 0.286905 0.173108 0\nvt 0.475019 0.324106 0\nvt 0.467636 0.323913 0\nvt 0.456195 0.323702 0\nvt 0.456195 0.329461 0\nvt 0.467233 0.331959 0\nvt 0.931026 0.276886 0\nvt 0.953746 0.027706 0\nvt 0.93557 0.271661 0\nvt 0.934295 0.275866 0\nvt 0.929438 0.273454 0\nvt 0.958585 0.03104 0\nvt 0.938182 0.274995 0\nvt 0.957041 0.026504 0\nvt 0.961407 0.030372 0\nvt 0.960692 0.026043 0\nvt 0.964265 0.026133 0\nvt 0.964264 0.030226 0\nvt 0.927591 0.277196 0\nvt 0.988139 0.444097 0\nvt 0.926169 0.273798 0\nvt 0.983694 0.443644 0\nvt 0.924886 0.273651 0\nvt 0.983695 0.440553 0\nvt 0.749659 0.078393 0\nvt 0.744777 0.078793 0\nvt 0.44039 0.352741 0\nvt 0.743695 0.070617 0\nvt 0.748973 0.072278 0\nvt 0.445436 0.350391 0\nvt 0.748741 0.066131 0\nvt 0.448963 0.354241 0\nvt 0.752268 0.068515 0\nvt 0.451242 0.349208 0\nvt 0.452613 0.353779 0\nvt 0.738535 0.078333 0\nvt 0.738179 0.0724 0\nvt 0.448498 0.340548 0\nvt 0.441132 0.342148 0\nvt 0.733551 0.078833 0\nvt 0.733173 0.072958 0\nvt 0.436031 0.350107 0\nvt 0.739336 0.068922 0\nvt 0.4309 0.348457 0\nvt 0.734205 0.068761 0\nvt 0.435576 0.343554 0\nvt 0.340663 0.192622 0\nvt 0.437562 0.334815 0\nvt 0.348658 0.183883 0\nvt 0.340367 0.18535 0\nvt 0.434033 0.336282 0\nvt 0.726378 0.074108 0\nvt 0.727451 0.081066 0\nvt 0.425327 0.344742 0\nvt 0.728632 0.06956 0\nvt 0.428698 0.340554 0\nvt 0.431135 0.335998 0\nvt 0.333292 0.182371 0\nvt 0.432174 0.333303 0\nvt 0.336187 0.180471 0\nvt 0.342843 0.17338 0\nvt 0.330297 0.169629 0\nvt 0.327852 0.178458 0\nvt 0.341458 0.16251 0\nvt 0.331917 0.162602 0\nvt 0.328723 0.181277 0\nvt 0.341099 0.140893 0\nvt 0.332548 0.14216 0\nvt 0.349397 0.162524 0\nvt 0.439869 0.313456 0\nvt 0.445835 0.289048 0\nvt 0.349449 0.138116 0\nvt 0.446575 0.313386 0\nvt 0.34166 0.133939 0\nvt 0.331672 0.134972 0\nvt 0.443948 0.280128 0\nvt 0.350414 0.129196 0\nvt 0.619972 0.354241 0\nvt 0.622984 0.347588 0\nvt 0.352909 0.21506 0\nvt 0.347071 0.208929 0\nvt 0.628822 0.351721 0\nvt 0.62394 0.353896 0\nvt 0.340172 0.213279 0\nvt 0.635721 0.347492 0\nvt 0.625158 0.331485 0\nvt 0.632577 0.332853 0\nvt 0.628713 0.321117 0\nvt 0.634209 0.327058 0\nvt 0.624758 0.119501 0\nvt 0.631782 0.318301 0\nvt 0.626166 0.110744 0\nvt 0.629875 0.118494 0\nvt 0.632321 0.109665 0\nvt 0.633941 0.102638 0\nvt 0.630365 0.310547 0\nvt 0.628106 0.10299 0\nvt 0.621567 0.310444 0\nvt 0.64176 0.338452 0\nvt 0.624192 0.124436 0\nvt 0.637373 0.331993 0\nvt 0.630747 0.121313 0\nvt 0.627364 0.289753 0\nvt 0.634572 0.082196 0\nvt 0.620983 0.290395 0\nvt 0.628461 0.282565 0\nvt 0.621905 0.282743 0\nvt 0.640048 0.34899 0\nvt 0.335846 0.208969 0\nvt 0.340829 0.208469 0\nvt 0.646148 0.342721 0\nvt 0.513201 0.354241 0\nvt 0.878171 0.497139 0\nvt 0.518957 0.346737 0\nvt 0.878559 0.489635 0\nvt 0.885148 0.497578 0\nvt 0.514329 0.343549 0\nvt 0.508813 0.349971 0\nvt 0.91836 0.709455 0\nvt 0.504426 0.343513 0\nvt 0.919229 0.706136 0\nvt 0.510564 0.340194 0\nvt 0.911804 0.706332 0\nvt 0.913035 0.703514 0\nvt 0.884539 0.489588 0\nvt 0.708961 0.348009 0\nvt 0.711834 0.345673 0\nvt 0.889677 0.487253 0\nvt 0.715758 0.354241 0\nvt 0.88971 0.495821 0\nvt 0.71913 0.350054 0\nvt 0.717138 0.341842 0\nvt 0.721567 0.345497 0\nvt 0.912285 0.527457 0\nvt 0.718695 0.339985 0\nvt 0.756195 0.017682 0\nvt 0.912954 0.530274 0\nvt 0.722606 0.342802 0\nvt 0.918753 0.526362 0\nvt 0.761994 0.01377 0\nvt 0.760763 0.016589 0\nvt 0.692304 0.31938 0\nvt 0.888078 0.46096 0\nvt 0.88446 0.462926 0\nvt 0.689021 0.321347 0\nvt 0.696167 0.316369 0\nvt 0.914859 0.501316 0\nvt 0.699452 0.313844 0\nvt 0.919436 0.501127 0\nvt 0.690367 0.317065 0\nvt 0.681804 0.305503 0\nvt 0.884275 0.449606 0\nvt 0.678136 0.308026 0\nvt 0.911423 0.490125 0\nvt 0.685609 0.302653 0\nvt 0.694257 0.313841 0\nvt 0.914946 0.499842 0\nvt 0.69835 0.31237 0\nvt 0.917144 0.48763 0\nvt 0.66204 0.281703 0\nvt 0.885539 0.423283 0\nvt 0.878454 0.449093 0\nvt 0.548876 0.306195 0\nvt 0.566231 0.280533 0\nvt 0.880905 0.423431 0\nvt 0.664069 0.280637 0\nvt 0.913501 0.466849 0\nvt 0.666599 0.279377 0\nvt 0.918039 0.466461 0\nvt 0.546016 0.303856 0\nvt 0.564418 0.279609 0\nvt 0.918191 0.666468 0\nvt 0.542488 0.300526 0\nvt 0.915133 0.644128 0\nvt 0.561961 0.278186 0\nvt 0.911426 0.664782 0\nvt 0.912322 0.643613 0\nvt 0.536864 0.314864 0\nvt 0.879225 0.460565 0\nvt 0.540063 0.317667 0\nvt 0.537627 0.320943 0\nvt 0.879279 0.463841 0\nvt 0.535582 0.323678 0\nvt 0.879203 0.466576 0\nvt 0.533948 0.318478 0\nvt 0.531438 0.321685 0\nvt 0.917872 0.6832 0\nvt 0.528005 0.317258 0\nvt 0.917741 0.681013 0\nvt 0.529669 0.315071 0\nvt 0.913718 0.678279 0\nvt 0.918046 0.678018 0\nvt 0.532309 0.312076 0\nvt 0.352909 0.173174 0\nvt 0.437365 0.324106 0\nvt 0.445155 0.331959 0\nvt 0.444754 0.323913 0\nvt 0.694657 0.116773 0\nvt 0.532466 0.021772 0\nvt 0.691742 0.11755 0\nvt 0.69233 0.114761 0\nvt 0.533932 0.018983 0\nvt 0.983767 0.27449 0\nvt 0.694314 0.113677 0\nvt 0.53047 0.019754 0\nvt 0.690587 0.112653 0\nvt 0.532582 0.016875 0\nvt 0.695891 0.119313 0\nvt 0.086256 0.087286 0\nvt 0.692506 0.123038 0\nvt 0.087011 0.091011 0\nvt 0.696762 0.111177 0\nvt 0.985501 0.271513 0\nvt 0.695801 0.1107 0\nvt 0.688833 0.121421 0\nvt 0.528503 0.025642 0\nvt 0.08908 0.088754 0\nvt 0.697149 0.120781 0\nvt 0.694413 0.124616 0\nvt 0.089272 0.092589 0\nvt 0.093915 0.092959 0\nvt 0.923894 0.991387 0\nvt 0.093572 0.089186 0\nvt 0.92567 0.990347 0\nvt 0.096474 0.091918 0\nvt 0.922804 0.987126 0\nvt 0.096022 0.088697 0\nvt 0.924309 0.986022 0\nvt 0.965391 0.360746 0\nvt 0.160534 0.042797 0\nvt 0.09228 0.079542 0\nvt 0.960074 0.455871 0\nvt 0.965478 0.329858 0\nvt 0.088421 0.079825 0\nvt 0.085553 0.079568 0\nvt 0.702171 0.111595 0\nvt 0.21163 0.180839 0\nvt 0.186847 0.042203 0\nvt 0.095552 0.079065 0\nvt 0.700129 0.109937 0\nvt 0.916742 0.97744 0\nvt 0.098357 0.079011 0\nvt 0.095383 0.072381 0\nvt 0.214148 0.174155 0\nvt 0.097188 0.071946 0\nvt 0.913306 0.970375 0\nvt 0.918246 0.975472 0\nvt 0.914933 0.969598 0\nvt 0.092346 0.072162 0\nvt 0.164144 0.035416 0\nvt 0.183405 0.035288 0\nvt 0.094955 0.072151 0\nvt 0.964559 0.449226 0\nvt 0.0894 0.073181 0\nvt 0.961003 0.35428 0\nvt 0.091973 0.073076 0\nvt 0.962733 0.447639 0\nvt 0.705127 0.103688 0\nvt 0.989842 0.935177 0\nvt 0.966161 0.440553 0\nvt 0.912453 0.965368 0\nvt 0.096133 0.06694 0\nvt 0.913618 0.965902 0\nvt 0.095368 0.066232 0\nvt 0.214542 0.168006 0\nvt 0.912285 0.964661 0\nvt 0.213381 0.168559 0\nvt 0.913446 0.965214 0\nvt 0.991885 0.934342 0\nvt 0.09059 0.06387 0\nvt 0.957763 0.345836 0\nvt 0.991608 0.933366 0\nvt 0.091568 0.064632 0\nvt 0.989875 0.93327 0\nvt 0.959496 0.345705 0\nvt 0.991484 0.935137 0\nvt 0.967802 0.440676 0\nvt 0.089792 0.064631 0\nvt 0.092823 0.064874 0\nvt 0.590831 0.01023 0\nvt 0.590621 0.009424 0\nvt 0.181553 0.028571 0\nvt 0.093631 0.065433 0\nvt 0.185166 0.034789 0\nvt 0.209135 0.178055 0\nvt 0.189342 0.039419 0\nvt 0.589278 0.009415 0\nvt 0.182896 0.028434 0\nvt 0.589502 0.010224 0\nvt 0.092056 0.065314 0\nvt 0.165662 0.028569 0\nvt 0.590518 0.010994 0\nvt 0.164347 0.028434 0\nvt 0.589204 0.010992 0\nvt 0.161996 0.034839 0\nvt 0.967802 0.357125 0\nvt 0.158123 0.039176 0\nvt 0.927261 0.0595 0\nvt 0.982952 0.061422 0\nvt 0.926299 0.059879 0\nvt 0.169822 0.065532 0\nvt 0.985701 0.060893 0\nvt 0.92355 0.058553 0\nvt 0.924155 0.0564 0\nvt 0.167663 0.067705 0\nvt 0.169906 0.070893 0\nvt 0.923718 0.052883 0\nvt 0.164136 0.070152 0\nvt 0.167939 0.076782 0\nvt 0.162663 0.07669 0\nvt 0.922287 0.050633 0\nvt 0.16188 0.072219 0\nvt 0.158848 0.073565 0\nvt 0.159655 0.07759 0\nvt 0.931662 0.052639 0\nvt 0.113968 0.042436 0\nvt 0.110932 0.042797 0\nvt 0.989256 0.68703 0\nvt 0.931515 0.049612 0\nvt 0.931525 0.0562 0\nvt 0.978392 0.964699 0\nvt 0.930627 0.059771 0\nvt 0.986523 0.687792 0\nvt 0.930962 0.046887 0\nvt 0.158123 0.064432 0\nvt 0.987884 0.681918 0\nvt 0.989589 0.681994 0\nvt 0.111327 0.038167 0\nvt 0.11393 0.0381 0\nvt 0.980903 0.152902 0\nvt 0.936591 0.052793 0\nvt 0.98377 0.153034 0\nvt 0.936508 0.055652 0\nvt 0.974848 0.958651 0\nvt 0.935924 0.056237 0\nvt 0.977634 0.958451 0\nvt 0.988578 0.678222 0\nvt 0.989332 0.677534 0\nvt 0.98993 0.67837 0\nvt 0.975564 0.95112 0\nvt 0.976319 0.951675 0\nvt 0.974886 0.95158 0\nvt 0.113445 0.031253 0\nvt 0.114215 0.031695 0\nvt 0.112634 0.031812 0\nvt 0.982437 0.145183 0\nvt 0.983302 0.145948 0\nvt 0.98139 0.145942 0\nvt 0.435424 0.00859 0\nvt 0.088089 0.065028 0\nvt 0.433911 0.008697 0\nvt 0.959773 0.314823 0\nvt 0.433615 0.008021 0\nvt 0.087321 0.065489 0\nvt 0.710486 0.097516 0\nvt 0.435045 0.009355 0\nvt 0.70916 0.096913 0\nvt 0.433719 0.00945 0\nvt 0.086006 0.072758 0\nvt 0.706814 0.104785 0\nvt 0.961429 0.323282 0\nvt 0.08881 0.073249 0\nvt 0.958378 0.315467 0\nvt 0.43501 0.007923 0\nvt 0.088757 0.065435 0\nvt 0.95775 0.452154 0\nvt 0.967802 0.32614 0\nvt 0.963403 0.321894 0\nvt 0.212038 0.173019 0\nvt 0.213489 0.169394 0\nvt 0.094761 0.067051 0\nvt 0.214645 0.168824 0\nvt 0.962874 0.352665 0\nvt 0.990198 0.934314 0\nvt 0.926384 0.991192 0\nvt 0.094091 0.093648 0\nvt 0.924565 0.992077 0\nvt 0.929023 0.990075 0\nvt 0.928231 0.98863 0\nvt 0.693647 0.125562 0\nvt 0.089456 0.093534 0\nvt 0.69151 0.124699 0\nvt 0.688902 0.123604 0\nvt 0.92621 0.984604 0\nvt 0.162625 0.078579 0\nvt 0.159813 0.079036 0\nvt 0.167163 0.078965 0\nvt 0.694872 0.108845 0\nvt 0.982608 0.269657 0\nvt 0.984895 0.269709 0\nvt 0.693005 0.108474 0\nvt 0.697186 0.103832 0\nvt 0.982031 0.264645 0\nvt 0.697689 0.103302 0\nvt 0.983158 0.264114 0\nvt 0.696521 0.102683 0\nvt 0.626173 0.009415 0\nvt 0.696817 0.102465 0\nvt 0.695065 0.103369 0\nvt 0.624421 0.010772 0\nvt 0.624697 0.009453 0\nvt 0.983091 0.059619 0\nvt 0.98565 0.059248 0\nvt 0.17124 0.063887 0\nvt 0.172018 0.068015 0\nvt 0.173704 0.063835 0\nvt 0.983411 0.054005 0\nvt 0.173231 0.058644 0\nvt 0.982731 0.05576 0\nvt 0.174553 0.05873 0\nvt 0.981063 0.054024 0\nvt 0.981935 0.053188 0\nvt 0.666831 0.115799 0\nvt 0.988201 0.713776 0\nvt 0.666974 0.112687 0\nvt 0.669024 0.113641 0\nvt 0.980076 0.292551 0\nvt 0.66979 0.116387 0\nvt 0.98154 0.295297 0\nvt 0.983539 0.293128 0\nvt 0.670626 0.111427 0\nvt 0.981429 0.290336 0\nvt 0.665763 0.118415 0\nvt 0.937482 0.206354 0\nvt 0.66938 0.121916 0\nvt 0.936727 0.209855 0\nvt 0.664368 0.110351 0\nvt 0.986465 0.710902 0\nvt 0.665297 0.109813 0\nvt 0.672941 0.120066 0\nvt 0.985501 0.298976 0\nvt 0.93466 0.207902 0\nvt 0.6646 0.119963 0\nvt 0.667527 0.123546 0\nvt 0.93447 0.211486 0\nvt 0.929828 0.211886 0\nvt 0.895092 0.104699 0\nvt 0.930168 0.208337 0\nvt 0.893338 0.103614 0\nvt 0.927266 0.210802 0\nvt 0.927716 0.207772 0\nvt 0.896405 0.100584 0\nvt 0.894976 0.099387 0\nvt 0.061058 0.048023 0\nvt 0.968821 0.65734 0\nvt 0.931456 0.199125 0\nvt 0.963547 0.225538 0\nvt 0.087629 0.04801 0\nvt 0.935314 0.199391 0\nvt 0.658994 0.111114 0\nvt 0.938182 0.199053 0\nvt 0.743262 0.046841 0\nvt 0.973525 0.825452 0\nvt 0.928184 0.198647 0\nvt 0.660902 0.109298 0\nvt 0.903141 0.091246 0\nvt 0.92538 0.198434 0\nvt 0.970969 0.820036 0\nvt 0.928193 0.193231 0\nvt 0.926406 0.192478 0\nvt 0.906893 0.085291 0\nvt 0.901716 0.089246 0\nvt 0.905675 0.083973 0\nvt 0.931388 0.192476 0\nvt 0.964383 0.650692 0\nvt 0.928786 0.1925 0\nvt 0.747395 0.040694 0\nvt 0.958611 0.219182 0\nvt 0.934335 0.193034 0\nvt 0.065868 0.041853 0\nvt 0.931761 0.192954 0\nvt 0.960341 0.217494 0\nvt 0.937572 0.192754 0\nvt 0.654065 0.104815 0\nvt 0.092087 0.041876 0\nvt 0.934794 0.193256 0\nvt 0.655755 0.103725 0\nvt 0.453049 0.009403 0\nvt 0.651802 0.096913 0\nvt 0.936295 0.185434 0\nvt 0.451711 0.009356 0\nvt 0.650464 0.097495 0\nvt 0.956452 0.210645 0\nvt 0.991885 0.917423 0\nvt 0.927667 0.187115 0\nvt 0.908272 0.079927 0\nvt 0.906987 0.079973 0\nvt 0.452843 0.00865 0\nvt 0.451316 0.008597 0\nvt 0.935534 0.184974 0\nvt 0.093599 0.033393 0\nvt 0.453109 0.00797 0\nvt 0.095007 0.034015 0\nvt 0.451701 0.007923 0\nvt 0.934858 0.185396 0\nvt 0.970788 0.813444 0\nvt 0.907361 0.079451 0\nvt 0.969499 0.813378 0\nvt 0.928488 0.186573 0\nvt 0.90865 0.079386 0\nvt 0.965623 0.221677 0\nvt 0.085553 0.044149 0\nvt 0.090079 0.040528 0\nvt 0.969755 0.814205 0\nvt 0.929035 0.187401 0\nvt 0.972612 0.81825 0\nvt 0.971049 0.814288 0\nvt 0.740954 0.043902 0\nvt 0.975833 0.822513 0\nvt 0.565578 0.065971 0\nvt 0.568751 0.06287 0\nvt 0.436994 0.070971 0\nvt 0.9787 0.128633 0\nvt 0.569215 0.065021 0\nvt 0.981408 0.129337 0\nvt 0.566507 0.066349 0\nvt 0.436909 0.076079 0\nvt 0.952483 0.05261 0\nvt 0.573312 0.065107 0\nvt 0.569344 0.059355 0\nvt 0.958251 0.052127 0\nvt 0.954445 0.058458 0\nvt 0.959721 0.058392 0\nvt 0.960506 0.054099 0\nvt 0.570905 0.057106 0\nvt 0.963536 0.05549 0\nvt 0.962727 0.059377 0\nvt 0.560964 0.05911 0\nvt 0.561135 0.056083 0\nvt 0.987534 0.652854 0\nvt 0.561118 0.062671 0\nvt 0.977954 0.194799 0\nvt 0.562112 0.066244 0\nvt 0.990267 0.653579 0\nvt 0.964265 0.046887 0\nvt 0.561736 0.053358 0\nvt 0.989042 0.648306 0\nvt 0.987162 0.648591 0\nvt 0.986078 0.424425 0\nvt 0.55616 0.05688 0\nvt 0.983826 0.424706 0\nvt 0.556458 0.059126 0\nvt 0.988094 0.580017 0\nvt 0.555728 0.059265 0\nvt 0.985227 0.580156 0\nvt 0.555836 0.062124 0\nvt 0.981706 0.189469 0\nvt 0.556593 0.062503 0\nvt 0.978932 0.189225 0\nvt 0.988228 0.644306 0\nvt 0.987417 0.643784 0\nvt 0.986881 0.644629 0\nvt 0.980947 0.181862 0\nvt 0.980192 0.182413 0\nvt 0.981629 0.182334 0\nvt 0.984478 0.418151 0\nvt 0.983694 0.418556 0\nvt 0.985275 0.418696 0\nvt 0.986562 0.572568 0\nvt 0.985696 0.573307 0\nvt 0.987609 0.573304 0\nvt 0.966484 0.649934 0\nvt 0.05889 0.044254 0\nvt 0.97099 0.653571 0\nvt 0.555799 0.011017 0\nvt 0.963555 0.643784 0\nvt 0.931542 0.185822 0\nvt 0.554503 0.010986 0\nvt 0.962258 0.644038 0\nvt 0.555483 0.010236 0\nvt 0.930761 0.185421 0\nvt 0.554173 0.010207 0\nvt 0.748578 0.033902 0\nvt 0.55578 0.009441 0\nvt 0.749902 0.034161 0\nvt 0.929966 0.185967 0\nvt 0.554456 0.009415 0\nvt 0.745928 0.039631 0\nvt 0.064125 0.040105 0\nvt 0.069661 0.033636 0\nvt 0.99013 0.915614 0\nvt 0.932164 0.184738 0\nvt 0.989804 0.916589 0\nvt 0.933142 0.183995 0\nvt 0.99185 0.915516 0\nvt 0.067941 0.033393 0\nvt 0.954822 0.210875 0\nvt 0.990255 0.917385 0\nvt 0.93394 0.184727 0\nvt 0.991479 0.91656 0\nvt 0.929652 0.212524 0\nvt 0.894383 0.105336 0\nvt 0.89257 0.104412 0\nvt 0.890114 0.102989 0\nvt 0.890893 0.101737 0\nvt 0.668349 0.124436 0\nvt 0.934286 0.212375 0\nvt 0.670378 0.12337 0\nvt 0.672909 0.12211 0\nvt 0.89317 0.097849 0\nvt 0.962566 0.060629 0\nvt 0.959755 0.060114 0\nvt 0.955216 0.060502 0\nvt 0.98707 0.709094 0\nvt 0.666104 0.1079 0\nvt 0.989356 0.708989 0\nvt 0.667944 0.107409 0\nvt 0.663473 0.103046 0\nvt 0.98993 0.704135 0\nvt 0.662935 0.102549 0\nvt 0.988804 0.703639 0\nvt 0.664062 0.101856 0\nvt 0.606722 0.009415 0\nvt 0.663751 0.101659 0\nvt 0.665558 0.102447 0\nvt 0.60853 0.010772 0\nvt 0.608248 0.009453 0\nvt 0.978856 0.126993 0\nvt 0.435578 0.069331 0\nvt 0.981386 0.127528 0\nvt 0.434798 0.073288 0\nvt 0.433114 0.069271 0\nvt 0.981429 0.121903 0\nvt 0.43359 0.064241 0\nvt 0.981994 0.1237 0\nvt 0.432268 0.064308 0\nvt 0.98377 0.122073 0\nvt 0.982954 0.121183 0\nvt 0.694931 0.067339 0\nvt 0.695621 0.070821 0\nvt 0.938375 0.626011 0\nvt 0.690618 0.073036 0\nvt 0.736151 0.702388 0\nvt 0.688833 0.065391 0\nvt 0.736488 0.694743 0\nvt 0.728565 0.695447 0\nvt 0.935328 0.631962 0\nvt 0.730183 0.705118 0\nvt 0.719605 0.703518 0\nvt 0.936029 0.6396 0\nvt 0.722523 0.708632 0\nvt 0.714057 0.705401 0\nvt 0.938025 0.647973 0\nvt 0.714126 0.709861 0\nvt 0.690395 0.062842 0\nvt 0.878235 0.879446 0\nvt 0.736068 0.692193 0\nvt 0.72726 0.691325 0\nvt 0.728758 0.687022 0\nvt 0.873173 0.874275 0\nvt 0.940964 0.500988 0\nvt 0.878327 0.876685 0\nvt 0.937656 0.49671 0\nvt 0.729465 0.68396 0\nvt 0.875019 0.871213 0\nvt 0.717922 0.689383 0\nvt 0.718774 0.683572 0\nvt 0.935342 0.48771 0\nvt 0.720439 0.679115 0\nvt 0.707416 0.682821 0\nvt 0.707758 0.689872 0\nvt 0.990267 0.624347 0\nvt 0.697961 0.689473 0\nvt 0.987279 0.627937 0\nvt 0.672941 0.069651 0\nvt 0.700949 0.693064 0\nvt 0.883549 0.881279 0\nvt 0.946185 0.505516 0\nvt 0.883089 0.881723 0\nvt 0.695248 0.065119 0\nvt 0.891655 0.881886 0\nvt 0.703814 0.065282 0\nvt 0.701747 0.066409 0\nvt 0.702531 0.068111 0\nvt 0.705867 0.064321 0\nvt 0.699751 0.073828 0\nvt 0.704424 0.068772 0\nvt 0.697037 0.077144 0\nvt 0.727489 0.144367 0\nvt 0.726378 0.148684 0\nvt 0.527827 0.080997 0\nvt 0.943682 0.628877 0\nvt 0.695925 0.081066 0\nvt 0.941943 0.636616 0\nvt 0.520065 0.079502 0\nvt 0.727792 0.154073 0\nvt 0.522423 0.084507 0\nvt 0.509706 0.080378 0\nvt 0.73433 0.166405 0\nvt 0.510055 0.08612 0\nvt 0.946366 0.646946 0\nvt 0.22809 0.133638 0\nvt 0.73759 0.179643 0\nvt 0.49678 0.078305 0\nvt 0.236701 0.128642 0\nvt 0.499282 0.07331 0\nvt 0.939354 0.657016 0\nvt 0.67125 0.081066 0\nvt 0.705057 0.704479 0\nvt 0.664321 0.079318 0\nvt 0.946282 0.65734 0\nvt 0.672641 0.078171 0\nvt 0.706415 0.701585 0\nvt 0.743693 0.16655 0\nvt 0.220965 0.13342 0\nvt 0.699079 0.046995 0\nvt 0.744715 0.178509 0\nvt 0.741793 0.153789 0\nvt 0.736731 0.149498 0\nvt 0.743467 0.146758 0\nvt 0.748617 0.152685 0\nvt 0.736575 0.146322 0\nvt 0.735561 0.142718 0\nvt 0.705108 0.078104 0\nvt 0.70562 0.069937 0\nvt 0.737866 0.141408 0\nvt 0.707414 0.077626 0\nvt 0.692512 0.04575 0\nvt 0.474383 0.083136 0\nvt 0.751282 0.174841 0\nvt 0.752731 0.165092 0\nvt 0.464606 0.08612 0\nvt 0.465358 0.077561 0\nvt 0.45871 0.08094 0\nvt 0.458371 0.072308 0\nvt 0.452915 0.074595 0\nvt 0.464035 0.073578 0\nvt 0.463328 0.070699 0\nvt 0.688833 0.038036 0\nvt 0.471986 0.075422 0\nvt 0.472919 0.071512 0\nvt 0.214335 0.120327 0\nvt 0.69245 0.033902 0\nvt 0.479253 0.071289 0\nvt 0.212179 0.116663 0\nvt 0.480889 0.067624 0\nvt 0.694086 0.040215 0\nvt 0.215972 0.12664 0\nvt 0.219078 0.123698 0\nvt 0.697192 0.037272 0\nvt 0.226897 0.124522 0\nvt 0.236315 0.122342 0\nvt 0.227521 0.110693 0\nvt 0.220606 0.109213 0\nvt 0.212528 0.111323 0\nvt 0.209135 0.105411 0\nvt 0.937403 0.476067 0\nvt 0.708764 0.677152 0\nvt 0.988989 0.617563 0\nvt 0.667625 0.059276 0\nvt 0.699238 0.68269 0\nvt 0.66829 0.069685 0\nvt 0.655142 0.061368 0\nvt 0.663936 0.073017 0\nvt 0.940099 0.488611 0\nvt 0.018634 0.063794 0\nvt 0.017323 0.071216 0\nvt 0.01331 0.067943 0\nvt 0.014 0.060253 0\nvt 0.009769 0.074723 0\nvt 0.053152 0.105536 0\nvt 0.014874 0.059088 0\nvt 0.326284 0.056794 0\nvt 0.014914 0.054638 0\nvt 0.985837 0.472854 0\nvt 0.022123 0.068964 0\nvt 0.322173 0.07112 0\nvt 0.01977 0.072624 0\nvt 0.324798 0.074781 0\nvt 0.043791 0.095563 0\nvt 0.327477 0.074379 0\nvt 0.04647 0.094657 0\nvt 0.01499 0.075146 0\nvt 0.048867 0.10033 0\nvt 0.331636 0.077031 0\nvt 0.050629 0.099156 0\nvt 0.331851 0.070974 0\nvt 0.96441 0.685949 0\nvt 0.960493 0.550148 0\nvt 0.325773 0.069688 0\nvt 0.335795 0.076546 0\nvt 0.905106 0.795443 0\nvt 0.054788 0.103653 0\nvt 0.061284 0.111116 0\nvt 0.91259 0.792549 0\nvt 0.904919 0.791714 0\nvt 0.970573 0.687792 0\nvt 0.337531 0.072817 0\nvt 0.902728 0.786777 0\nvt 0.968382 0.682855 0\nvt 0.967001 0.679747 0\nvt 0.963578 0.546075 0\nvt 0.962258 0.680589 0\nvt 0.328681 0.065615 0\nvt 0.905427 0.786339 0\nvt 0.911646 0.788725 0\nvt 0.909309 0.784034 0\nvt 0.325674 0.065128 0\nvt 0.985227 0.481198 0\nvt 0.960455 0.545588 0\nvt 0.968744 0.537229 0\nvt 0.987344 0.472933 0\nvt 0.322181 0.064898 0\nvt 0.022201 0.062742 0\nvt 0.969335 0.538673 0\nvt 0.968016 0.673187 0\nvt 0.915513 0.77974 0\nvt 0.921308 0.786085 0\nvt 0.915901 0.790132 0\nvt 0.064833 0.114417 0\nvt 0.059923 0.1126 0\nvt 0.062874 0.118292 0\nvt 0.919786 0.793154 0\nvt 0.92208 0.790092 0\nvt 0.927204 0.791265 0\nvt 0.061688 0.125688 0\nvt 0.059808 0.120411 0\nvt 0.921911 0.795586 0\nvt 0.055334 0.121204 0\nvt 0.059149 0.11691 0\nvt 0.05571 0.116764 0\nvt 0.057573 0.113281 0\nvt 0.007946 0.072507 0\nvt 0.052424 0.107354 0\nvt 0.951282 0.759792 0\nvt 0.951026 0.763456 0\nvt 0.947125 0.763894 0\nvt 0.944344 0.760785 0\nvt 0.012511 0.166243 0\nvt 0.956002 0.761151 0\nvt 0.007946 0.162237 0\nvt 0.83993 0.070126 0\nvt 0.958578 0.757146 0\nvt 0.833476 0.06609 0\nvt 0.952124 0.75311 0\nvt 0.9474 0.754778 0\nvt 0.943095 0.754226 0\nvt 0.013713 0.158427 0\nvt 0.843829 0.066316 0\nvt 0.954822 0.194799 0\nvt 0.837165 0.061219 0\nvt 0.020464 0.151169 0\nvt 0.845363 0.059057 0\nvt 0.021314 0.156613 0\nvt 0.018715 0.161949 0\nvt 0.024171 0.159662 0\nvt 0.959264 0.190269 0\nvt 0.841607 0.056323 0\nvt 0.961958 0.184342 0\nvt 0.025265 0.144071 0\nvt 0.844301 0.05196 0\nvt 0.025687 0.147414 0\nvt 0.962062 0.172696 0\nvt 0.036943 0.141535 0\nvt 0.191892 0.070258 0\nvt 0.190445 0.075985 0\nvt 0.038645 0.147262 0\nvt 0.029128 0.158053 0\nvt 0.031037 0.153251 0\nvt 0.030225 0.155046 0\nvt 0.193132 0.079036 0\nvt 0.038372 0.150313 0\nvt 0.038719 0.158866 0\nvt 0.046688 0.154978 0\nvt 0.045241 0.149639 0\nvt 0.029835 0.160932 0\nvt 0.048176 0.143726 0\nvt 0.95622 0.188421 0\nvt 0.957183 0.184807 0\nvt 0.958081 0.179144 0\nvt 0.268402 0.012853 0\nvt 0.649775 0.160638 0\nvt 0.503629 0.12369 0\nvt 0.66054 0.163132 0\nvt 0.275236 0.012038 0\nvt 0.500885 0.125061 0\nvt 0.656609 0.164503 0\nvt 0.505561 0.121072 0\nvt 0.661368 0.160515 0\nvt 0.924412 0.812322 0\nvt 0.632966 0.154473 0\nvt 0.956824 0.992077 0\nvt 0.967795 0.414965 0\nvt 0.325149 0.103097 0\nvt 0.634324 0.145602 0\nvt 0.639037 0.15187 0\nvt 0.329862 0.110142 0\nvt 0.967802 0.418712 0\nvt 0.953669 0.984848 0\nvt 0.629811 0.14935 0\nvt 0.957547 0.416349 0\nvt 0.322173 0.092878 0\nvt 0.778098 0.683339 0\nvt 0.651708 0.156898 0\nvt 0.50547 0.117834 0\nvt 0.659885 0.157276 0\nvt 0.513127 0.121777 0\nvt 0.456684 0.160683 0\nvt 0.456758 0.16769 0\nvt 0.518615 0.128784 0\nvt 0.507382 0.126593 0\nvt 0.475425 0.163252 0\nvt 0.468229 0.171493 0\nvt 0.475144 0.172973 0\nvt 0.509454 0.114024 0\nvt 0.454624 0.15293 0\nvt 0.460579 0.14335 0\nvt 0.33134 0.110962 0\nvt 0.640515 0.147635 0\nvt 0.652457 0.154353 0\nvt 0.707111 0.659292 0\nvt 0.650361 0.151462 0\nvt 0.50088 0.113522 0\nvt 0.664043 0.152964 0\nvt 0.930047 0.255815 0\nvt 0.718275 0.659283 0\nvt 0.661526 0.148233 0\nvt 0.49678 0.101966 0\nvt 0.928889 0.24899 0\nvt 0.091857 0.016303 0\nvt 0.451676 0.140872 0\nvt 0.662684 0.141408 0\nvt 0.645083 0.148089 0\nvt 0.701833 0.658789 0\nvt 0.502645 0.105248 0\nvt 0.448121 0.144154 0\nvt 0.086239 0.013172 0\nvt 0.457294 0.136205 0\nvt 0.935193 0.244846 0\nvt 0.085553 0.017546 0\nvt 0.389603 0.099213 0\nvt 0.924542 0.244642 0\nvt 0.934531 0.237326 0\nvt 0.905716 0.05747 0\nvt 0.384002 0.092878 0\nvt 0.930143 0.238307 0\nvt 0.935597 0.234993 0\nvt 0.142231 0.06283 0\nvt 0.906375 0.052706 0\nvt 0.929484 0.232228 0\nvt 0.133533 0.058972 0\nvt 0.938182 0.22837 0\nvt 0.926528 0.253831 0\nvt 0.721795 0.652686 0\nvt 0.387617 0.108401 0\nvt 0.382769 0.103076 0\nvt 0.904483 0.058735 0\nvt 0.14209 0.072215 0\nvt 0.906233 0.05196 0\nvt 0.137848 0.077185 0\nvt 0.901992 0.055282 0\nvt 0.3787 0.106055 0\nvt 0.900415 0.061875 0\nvt 0.129568 0.079607 0\nvt 0.893712 0.057768 0\nvt 0.372681 0.105182 0\nvt 0.894396 0.062173 0\nvt 0.870623 0.070018 0\nvt 0.369179 0.101 0\nvt 0.890893 0.062082 0\nvt 0.872812 0.06418 0\nvt 0.958829 0.378052 0\nvt 0.12456 0.071193 0\nvt 0.888704 0.058923 0\nvt 0.369224 0.111277 0\nvt 0.703402 0.65552 0\nvt 0.712941 0.656435 0\nvt 0.378763 0.11335 0\nvt 0.333254 0.105725 0\nvt 0.642429 0.141603 0\nvt 0.699179 0.661305 0\nvt 0.332036 0.112802 0\nvt 0.49678 0.050893 0\nvt 0.90865 0.291952 0\nvt 0.363783 0.102069 0\nvt 0.697961 0.654228 0\nvt 0.506673 0.052962 0\nvt 0.866126 0.063637 0\nvt 0.373676 0.094619 0\nvt 0.132091 0.073702 0\nvt 0.968703 0.89967 0\nvt 0.924542 0.142543 0\nvt 0.961977 0.380807 0\nvt 0.127708 0.068988 0\nvt 0.839564 0.036113 0\nvt 0.967282 0.894248 0\nvt 0.13067 0.070428 0\nvt 0.928438 0.139307 0\nvt 0.837427 0.031437 0\nvt 0.124203 0.065752 0\nvt 0.135151 0.068884 0\nvt 0.971763 0.896636 0\nvt 0.835095 0.381341 0\nvt 0.844491 0.033069 0\nvt 0.969913 0.889335 0\nvt 0.138378 0.06567 0\nvt 0.952503 0.797531 0\nvt 0.840172 0.379627 0\nvt 0.97499 0.892848 0\nvt 0.947194 0.791826 0\nvt 0.839012 0.373922 0\nvt 0.841341 0.031617 0\nvt 0.462509 0.035178 0\nvt 0.932658 0.135543 0\nvt 0.458011 0.034874 0\nvt 0.841646 0.027672 0\nvt 0.718735 0.045587 0\nvt 0.460346 0.027209 0\nvt 0.940345 0.133119 0\nvt 0.937272 0.129893 0\nvt 0.714971 0.042361 0\nvt 0.933782 0.130068 0\nvt 0.48679 0.025761 0\nvt 0.487951 0.020438 0\nvt 0.936427 0.124745 0\nvt 0.937349 0.12554 0\nvt 0.964316 0.393578 0\nvt 0.483882 0.021232 0\nvt 0.484224 0.018878 0\nvt 0.833757 0.374692 0\nvt 0.464573 0.031168 0\nvt 0.845363 0.02642 0\nvt 0.723732 0.043105 0\nvt 0.943514 0.788943 0\nvt 0.465343 0.026587 0\nvt 0.946602 0.789437 0\nvt 0.836855 0.371533 0\nvt 0.467671 0.029665 0\nvt 0.944015 0.783724 0\nvt 0.725062 0.037886 0\nvt 0.947084 0.783721 0\nvt 0.977371 0.736607 0\nvt 0.98691 0.345705 0\nvt 0.986158 0.34761 0\nvt 0.945173 0.781869 0\nvt 0.984008 0.346361 0\nvt 0.974469 0.737263 0\nvt 0.974812 0.736557 0\nvt 0.72059 0.034281 0\nvt 0.941373 0.121603 0\nvt 0.719393 0.034071 0\nvt 0.484539 0.016875 0\nvt 0.940325 0.121183 0\nvt 0.985076 0.349682 0\nvt 0.943095 0.77974 0\nvt 0.72177 0.033902 0\nvt 0.983694 0.348623 0\nvt 0.976249 0.731652 0\nvt 0.950932 0.785809 0\nvt 0.980765 0.732769 0\nvt 0.98122 0.730102 0\nvt 0.136454 0.060896 0\nvt 0.953607 0.792758 0\nvt 0.131829 0.058644 0\nvt 0.976594 0.730718 0\nvt 0.924833 0.827219 0\nvt 0.912254 0.823728 0\nvt 0.918923 0.81993 0\nvt 0.944915 0.986603 0\nvt 0.78625 0.691695 0\nvt 0.90796 0.813192 0\nvt 0.9586 0.424706 0\nvt 0.947054 0.975671 0\nvt 0.94798 0.98572 0\nvt 0.918037 0.811432 0\nvt 0.770511 0.70014 0\nvt 0.76465 0.679474 0\nvt 0.782712 0.707768 0\nvt 0.902728 0.829266 0\nvt 0.770229 0.709861 0\nvt 0.755665 0.680238 0\nvt 0.334776 0.100046 0\nvt 0.765495 0.673854 0\nvt 0.347891 0.107166 0\nvt 0.75238 0.673093 0\nvt 0.339278 0.108152 0\nvt 0.901409 0.291931 0\nvt 0.329894 0.102591 0\nvt 0.967288 0.409425 0\nvt 0.503355 0.046603 0\nvt 0.902076 0.285627 0\nvt 0.347205 0.11154 0\nvt 0.893482 0.2893 0\nvt 0.512611 0.051446 0\nvt 0.892819 0.281779 0\nvt 0.511545 0.057464 0\nvt 0.861254 0.058583 0\nvt 0.963601 0.376593 0\nvt 0.86804 0.057842 0\nvt 0.967802 0.38245 0\nvt 0.863839 0.05196 0\nvt 0.963577 0.381768 0\nvt 0.925506 0.135592 0\nvt 0.966098 0.387739 0\nvt 0.965753 0.388674 0\nvt 0.92705 0.131831 0\nvt 0.960487 0.383308 0\nvt 0.746753 0.156169 0\nvt 0.746377 0.160609 0\nvt 0.94627 0.864729 0\nvt 0.812535 0.650658 0\nvt 0.959372 0.298976 0\nvt 0.811338 0.651554 0\nvt 0.963714 0.294115 0\nvt 0.2111 0.214573 0\nvt 0.940732 0.859658 0\nvt 0.806996 0.650563 0\nvt 0.942629 0.860082 0\nvt 0.213861 0.214996 0\nvt 0.958378 0.298556 0\nvt 0.95839 0.293217 0\nvt 0.964185 0.287851 0\nvt 0.210319 0.208309 0\nvt 0.941798 0.853471 0\nvt 0.212505 0.208386 0\nvt 0.959762 0.28765 0\nvt 0.946213 0.860124 0\nvt 0.949331 0.859812 0\nvt 0.355706 0.069304 0\nvt 0.94474 0.853469 0\nvt 0.357127 0.062894 0\nvt 0.947321 0.853401 0\nvt 0.358379 0.068784 0\nvt 0.359297 0.073842 0\nvt 0.94745 0.86435 0\nvt 0.360359 0.073591 0\nvt 0.486094 0.210986 0\nvt 0.36283 0.068253 0\nvt 0.359288 0.062793 0\nvt 0.48389 0.205526 0\nvt 0.487467 0.205418 0\nvt 0.960855 0.282415 0\nvt 0.209135 0.202873 0\nvt 0.944359 0.847996 0\nvt 0.210229 0.202911 0\nvt 0.958643 0.282315 0\nvt 0.94583 0.847994 0\nvt 0.359296 0.057454 0\nvt 0.947121 0.847961 0\nvt 0.486348 0.200084 0\nvt 0.360377 0.057405 0\nvt 0.48456 0.200137 0\nvt 0.35964 0.051263 0\nvt 0.488126 0.193995 0\nvt 0.944024 0.84177 0\nvt 0.960422 0.276227 0\nvt 0.209777 0.196685 0\nvt 0.809231 0.028766 0\nvt 0.810011 0.030573 0\nvt 0.926061 0.409425 0\nvt 0.808657 0.031808 0\nvt 0.80787 0.028938 0\nvt 0.928154 0.410385 0\nvt 0.810749 0.034113 0\nvt 0.811704 0.032439 0\nvt 0.814017 0.03492 0\nvt 0.813967 0.033612 0\nvt 0.816315 0.035084 0\nvt 0.808461 0.011961 0\nvt 0.816238 0.034042 0\nvt 0.807416 0.012232 0\nvt 0.807896 0.010386 0\nvt 0.817989 0.03452 0\nvt 0.80716 0.010427 0\nvt 0.80656 0.008343 0\nvt 0.807075 0.008361 0\nvt 0.924638 0.410272 0\nvt 0.807233 0.031752 0\nvt 0.80656 0.028804 0\nvt 0.92748 0.411527 0\nvt 0.814294 0.036108 0\nvt 0.931698 0.410014 0\nvt 0.816506 0.035786 0\nvt 0.808368 0.010495 0\nvt 0.818321 0.034991 0\nvt 0.80735 0.008327 0\nvt 0.788001 0.028766 0\nvt 0.789357 0.028937 0\nvt 0.164238 0.010485 0\nvt 0.788574 0.031808 0\nvt 0.787229 0.030574 0\nvt 0.786483 0.034114 0\nvt 0.162148 0.011445 0\nvt 0.78554 0.032439 0\nvt 0.783216 0.034925 0\nvt 0.783274 0.033617 0\nvt 0.780918 0.035092 0\nvt 0.861898 0.013382 0\nvt 0.781001 0.034048 0\nvt 0.862944 0.013651 0\nvt 0.862462 0.011805 0\nvt 0.779244 0.034529 0\nvt 0.863193 0.011849 0\nvt 0.863792 0.009775 0\nvt 0.863282 0.009782 0\nvt 0.165662 0.011332 0\nvt 0.789997 0.03175 0\nvt 0.790668 0.028801 0\nvt 0.162822 0.012587 0\nvt 0.782941 0.036113 0\nvt 0.158605 0.011074 0\nvt 0.780728 0.035793 0\nvt 0.86199 0.011914 0\nvt 0.778912 0.035 0\nvt 0.863007 0.009745 0\nvt 0.273465 0.063973 0\nvt 0.261973 0.040656 0\nvt 0.259997 0.037677 0\nvt 0.264928 0.038116 0\nvt 0.270108 0.067599 0\nvt 0.265329 0.041695 0\nvt 0.271391 0.034698 0\nvt 0.261973 0.075645 0\nvt 0.273465 0.039369 0\nvt 0.265659 0.061986 0\nvt 0.270245 0.057542 0\nvt 0.259056 0.072084 0\nvt 0.626236 0.058537 0\nvt 0.62468 0.062319 0\nvt 0.620498 0.061797 0\nvt 0.620393 0.059094 0\nvt 0.620603 0.0645 0\nvt 0.625055 0.066098 0\nvt 0.631876 0.06544 0\nvt 0.630314 0.060245 0\nvt 0.635728 0.053993 0\nvt 0.633803 0.051554 0\nvt 0.500916 0.127476 0\nvt 0.923908 0.818247 0\nvt 0.623641 0.160398 0\nvt 0.272817 0.014545 0\nvt 0.65419 0.161878 0\nvt 0.18224 0.213668 0\nvt 0.340954 0.694215 0\nvt 0.341953 0.707712 0\nvt 0.330628 0.71019 0\nvt 0.066474 0.166243 0\nvt 0.174797 0.214996 0\nvt 0.531387 0.042818 0\nvt 0.538829 0.041489 0\nvt 0.528503 0.057464 0\nvt 0.177588 0.192062 0\nvt 0.743395 0.119473 0\nvt 0.941655 0.370643 0\nvt 0.932352 0.393578 0\nvt 0.064068 0.1436 0\nvt 0.969335 0.565995 0\nvt 0.924638 0.370935 0\nvt 0.351992 0.705629 0\nvt 0.351979 0.692518 0\nvt 0.351958 0.672625 0\nvt 0.193244 0.192078 0\nvt 0.790668 0.071852 0\nvt 0.779643 0.07355 0\nvt 0.790647 0.05196 0\nvt 0.726378 0.119765 0\nvt 0.353233 0.947952 0\nvt 0.726918 0.096913 0\nvt 0.338427 0.970691 0\nvt 0.352692 0.970804 0\nvt 0.352692 0.970804 0\nvt 0.960333 0.580156 0\nvt 0.34369 0.984965 0\nvt 0.337049 0.981578 0\nvt 0.339376 0.986256 0\nvt 0.171199 0.17028 0\nvt 0.377879 0.94873 0\nvt 0.751565 0.097691 0\nvt 0.80656 0.110042 0\nvt 0.358528 0.927306 0\nvt 0.811855 0.089396 0\nvt 0.831206 0.11082 0\nvt 0.338873 0.925499 0\nvt 0.339007 0.946892 0\nvt 0.129813 0.662028 0\nvt 0.389062 0.928366 0\nvt 0.161659 0.149915 0\nvt 0.161379 0.635687 0\nvt 0.193225 0.149485 0\nvt 0.330792 0.992077 0\nvt 0.330628 0.98137 0\nvt 0.332927 0.970712 0\nvt 0.338284 0.905072 0\nvt 0.361632 0.906859 0\nvt 0.34303 0.838779 0\nvt 0.381443 0.84508 0\nvt 0.679934 0.257643 0\nvt 0.699745 0.195863 0\nvt 0.118767 0.646829 0\nvt 0.404304 0.907276 0\nvt 0.722606 0.258059 0\nvt 0.088806 0.598679 0\nvt 0.452591 0.848896 0\nvt 0.16138 0.610255 0\nvt 0.161352 0.536215 0\nvt 0.346456 0.787393 0\nvt 0.398391 0.792429 0\nvt 0.056736 0.552942 0\nvt 0.498457 0.794394 0\nvt 0.347652 0.727164 0\nvt 0.421066 0.730198 0\nvt 0.007946 0.485361 0\nvt 0.566231 0.731557 0\nvt 0.161748 0.455262 0\nvt 0.162191 0.370088 0\nvt 0.963568 0.505041 0\nvt 0.064497 0.15994 0\nvt 0.969335 0.521382 0\nvt 0.968673 0.578861 0\nvt 0.962906 0.517907 0\nvt 0.193226 0.1703 0\nvt 0.362021 0.70766 0\nvt 0.362975 0.694249 0\nvt 0.373358 0.710303 0\nvt 0.563259 0.26234 0\nvt 0.370198 0.695833 0\nvt 0.367635 0.6726 0\nvt 0.778761 0.970503 0\nvt 0.565906 0.239403 0\nvt 0.795773 0.9708 0\nvt 0.372846 0.672896 0\nvt 0.79523 0.947953 0\nvt 0.941112 0.33195 0\nvt 0.941655 0.354797 0\nvt 0.924643 0.3545 0\nvt 0.810036 0.970692 0\nvt 0.804792 0.985521 0\nvt 0.811421 0.981734 0\nvt 0.809108 0.986751 0\nvt 0.183361 0.673139 0\nvt 0.373922 0.650848 0\nvt 0.770565 0.948752 0\nvt 0.789858 0.927414 0\nvt 0.809481 0.925678 0\nvt 0.809451 0.946901 0\nvt 0.192965 0.66198 0\nvt 0.759375 0.928401 0\nvt 0.817675 0.992077 0\nvt 0.817838 0.981368 0\nvt 0.81554 0.97071 0\nvt 0.81012 0.9052 0\nvt 0.786784 0.906936 0\nvt 0.805347 0.838992 0\nvt 0.766928 0.845326 0\nvt 0.204047 0.646768 0\nvt 0.744119 0.907344 0\nvt 0.234262 0.598559 0\nvt 0.695774 0.849178 0\nvt 0.801906 0.787696 0\nvt 0.749957 0.792804 0\nvt 0.266573 0.552804 0\nvt 0.649889 0.794841 0\nvt 0.800701 0.72758 0\nvt 0.727303 0.730194 0\nvt 0.314736 0.485229 0\nvt 0.582122 0.731552 0\nvt 0.565086 0.256008 0\nvt 0.79001 0.987405 0\nvt 0.796461 0.984402 0\nvt 0.16138 0.657794 0\nvt 0.351941 0.650847 0\nvt 0.433107 0.71019 0\nvt 0.421782 0.707712 0\nvt 0.779627 0.178314 0\nvt 0.422781 0.694215 0\nvt 0.962809 0.105336 0\nvt 0.952483 0.089362 0\nvt 0.5635 0.223556 0\nvt 0.787069 0.179643 0\nvt 0.959925 0.09069 0\nvt 0.784279 0.156708 0\nvt 0.841926 0.419749 0\nvt 0.565906 0.200913 0\nvt 0.960333 0.596003 0\nvt 0.92844 0.427972 0\nvt 0.920725 0.450615 0\nvt 0.911423 0.42768 0\nvt 0.411744 0.705629 0\nvt 0.411756 0.692518 0\nvt 0.411777 0.672625 0\nvt 0.768623 0.156724 0\nvt 0.806581 0.05196 0\nvt 0.817585 0.07355 0\nvt 0.80656 0.071852 0\nvt 0.543626 0.590876 0\nvt 0.858404 0.397188 0\nvt 0.858944 0.42004 0\nvt 0.544166 0.613728 0\nvt 0.558431 0.613616 0\nvt 0.969335 0.610164 0\nvt 0.553169 0.627889 0\nvt 0.544166 0.613728 0\nvt 0.559809 0.624502 0\nvt 0.557483 0.62918 0\nvt 0.139353 0.688985 0\nvt 0.790668 0.134926 0\nvt 0.518979 0.591654 0\nvt 0.833757 0.397966 0\nvt 0.405494 0.11335 0\nvt 0.538331 0.57023 0\nvt 0.424846 0.091926 0\nvt 0.430141 0.112572 0\nvt 0.557986 0.568423 0\nvt 0.557852 0.589816 0\nvt 0.129813 0.700136 0\nvt 0.507797 0.57129 0\nvt 0.161379 0.726477 0\nvt 0.566067 0.635001 0\nvt 0.566231 0.624294 0\nvt 0.563932 0.613636 0\nvt 0.558574 0.547996 0\nvt 0.535227 0.549783 0\nvt 0.553829 0.481703 0\nvt 0.515416 0.488004 0\nvt 0.118767 0.715335 0\nvt 0.492555 0.5502 0\nvt 0.425327 0.252908 0\nvt 0.448188 0.190712 0\nvt 0.467998 0.252491 0\nvt 0.088806 0.763486 0\nvt 0.444268 0.49182 0\nvt 0.16138 0.751909 0\nvt 0.161352 0.825949 0\nvt 0.550403 0.430317 0\nvt 0.498468 0.435354 0\nvt 0.056736 0.809222 0\nvt 0.398402 0.437318 0\nvt 0.549207 0.370088 0\nvt 0.475793 0.373122 0\nvt 0.007946 0.876804 0\nvt 0.330628 0.374481 0\nvt 0.161748 0.906902 0\nvt 0.162191 0.992077 0\nvt 0.960995 0.608869 0\nvt 0.969335 0.48572 0\nvt 0.565477 0.217254 0\nvt 0.962906 0.489195 0\nvt 0.968673 0.472854 0\nvt 0.16138 0.70437 0\nvt 0.76864 0.134946 0\nvt 0.390378 0.710303 0\nvt 0.400761 0.694249 0\nvt 0.401714 0.70766 0\nvt 0.393538 0.695833 0\nvt 0.396101 0.6726 0\nvt 0.621199 0.613011 0\nvt 0.39089 0.672896 0\nvt 0.604187 0.613307 0\nvt 0.941655 0.315807 0\nvt 0.924643 0.316103 0\nvt 0.60473 0.59046 0\nvt 0.925187 0.293256 0\nvt 0.589924 0.6132 0\nvt 0.595167 0.628029 0\nvt 0.588539 0.624242 0\nvt 0.590851 0.629259 0\nvt 0.183361 0.689026 0\nvt 0.389814 0.650848 0\nvt 0.629395 0.591259 0\nvt 0.610102 0.569922 0\nvt 0.590479 0.568186 0\nvt 0.590509 0.589409 0\nvt 0.192965 0.700184 0\nvt 0.640585 0.570909 0\nvt 0.582285 0.634584 0\nvt 0.582122 0.623876 0\nvt 0.58442 0.613218 0\nvt 0.58984 0.547707 0\nvt 0.613175 0.549443 0\nvt 0.594613 0.4815 0\nvt 0.633032 0.487834 0\nvt 0.204047 0.715397 0\nvt 0.65584 0.549852 0\nvt 0.234262 0.763606 0\nvt 0.704186 0.491686 0\nvt 0.598054 0.430204 0\nvt 0.650003 0.435312 0\nvt 0.266573 0.80936 0\nvt 0.750071 0.437349 0\nvt 0.599259 0.370088 0\nvt 0.672657 0.372702 0\nvt 0.314736 0.876936 0\nvt 0.817838 0.37406 0\nvt 0.603499 0.626909 0\nvt 0.39171 0.689501 0\nvt 0.60995 0.629912 0\nvt 0.16138 0.70437 0\nvt 0.411795 0.650847 0\nvt 0.29315 0.012372 0\nvt 0.295643 0.012946 0\nvt 0.295168 0.014605 0\nvt 0.292838 0.01407 0\nvt 0.966811 0.626293 0\nvt 0.29135 0.012038 0\nvt 0.966674 0.627931 0\nvt 0.291128 0.013676 0\nvt 0.964508 0.626052 0\nvt 0.964529 0.627792 0\nvt 0.136882 0.011867 0\nvt 0.962258 0.626302 0\nvt 0.137112 0.013502 0\nvt 0.962372 0.627937 0\nvt 0.135082 0.012202 0\nvt 0.135402 0.013897 0\nvt 0.132589 0.012776 0\nvt 0.133064 0.014436 0\nvt 0.130107 0.013347 0\nvt 0.130748 0.014966 0\nvt 0.298137 0.013521 0\nvt 0.297504 0.015143 0\nvt 0.318529 0.0129 0\nvt 0.320594 0.015143 0\nvt 0.318191 0.014589 0\nvt 0.316199 0.012364 0\nvt 0.315788 0.014035 0\nvt 0.20696 0.010519 0\nvt 0.314488 0.01197 0\nvt 0.207018 0.012181 0\nvt 0.314028 0.013632 0\nvt 0.204815 0.01038 0\nvt 0.204795 0.012033 0\nvt 0.991591 0.596003 0\nvt 0.202658 0.010525 0\nvt 0.992054 0.597664 0\nvt 0.202587 0.012186 0\nvt 0.98988 0.596397 0\nvt 0.990288 0.59807 0\nvt 0.987542 0.596936 0\nvt 0.98788 0.598625 0\nvt 0.985227 0.597467 0\nvt 0.985499 0.599171 0\nvt 0.320864 0.013437 0\nvt 0.18527 0.010412 0\nvt 0.186636 0.01038 0\nvt 0.978703 0.105336 0\nvt 0.186695 0.012585 0\nvt 0.980807 0.105055 0\nvt 0.184592 0.012587 0\nvt 0.18381 0.010506 0\nvt 0.182528 0.010704 0\nvt 0.98374 0.102648 0\nvt 0.716527 0.016638 0\nvt 0.181659 0.012569 0\nvt 0.717673 0.014819 0\nvt 0.181553 0.010749 0\nvt 0.716518 0.015066 0\nvt 0.880659 0.010239 0\nvt 0.717673 0.014819 0\nvt 0.880967 0.011414 0\nvt 0.716495 0.014744 0\nvt 0.978888 0.756746 0\nvt 0.716522 0.01377 0\nvt 0.87993 0.011387 0\nvt 0.978642 0.755105 0\nvt 0.879684 0.009745 0\nvt 0.977577 0.753866 0\nvt 0.976777 0.755379 0\nvt 0.975899 0.753184 0\nvt 0.974534 0.75311 0\nvt 0.974474 0.754891 0\nvt 0.672941 0.017018 0\nvt 0.984957 0.099624 0\nvt 0.713495 0.017363 0\nvt 0.714362 0.015334 0\nvt 0.881601 0.013541 0\nvt 0.98 0.758524 0\nvt 0.714739 0.013839 0\nvt 0.977143 0.758543 0\nvt 0.974472 0.758508 0\nvt 0.67153 0.014883 0\nvt 0.979317 0.762308 0\nvt 0.710945 0.015228 0\nvt 0.974469 0.764416 0\nvt 0.985076 0.327665 0\nvt 0.985634 0.24764 0\nvt 0.985857 0.329858 0\nvt 0.987738 0.247919 0\nvt 0.983753 0.329856 0\nvt 0.983694 0.327651 0\nvt 0.986598 0.327779 0\nvt 0.98788 0.327977 0\nvt 0.982744 0.245224 0\nvt 0.734716 0.016638 0\nvt 0.988747 0.329843 0\nvt 0.988855 0.328022 0\nvt 0.733565 0.014816 0\nvt 0.734724 0.015066 0\nvt 0.89843 0.010238 0\nvt 0.733565 0.014816 0\nvt 0.898125 0.011417 0\nvt 0.734747 0.014743 0\nvt 0.958379 0.124827 0\nvt 0.899161 0.011392 0\nvt 0.734722 0.01377 0\nvt 0.958623 0.123181 0\nvt 0.899404 0.009745 0\nvt 0.959687 0.121944 0\nvt 0.960499 0.123476 0\nvt 0.961427 0.121203 0\nvt 0.962809 0.121183 0\nvt 0.962749 0.122964 0\nvt 0.736874 0.015332 0\nvt 0.897493 0.013538 0\nvt 0.688833 0.017016 0\nvt 0.981515 0.242221 0\nvt 0.737727 0.017356 0\nvt 0.957265 0.126603 0\nvt 0.736503 0.013839 0\nvt 0.962747 0.126581 0\nvt 0.960077 0.126613 0\nvt 0.690224 0.014889 0\nvt 0.957917 0.130393 0\nvt 0.740303 0.015229 0\nvt 0.962744 0.132489 0\nvt 0.666685 0.018055 0\nvt 0.9787 0.099154 0\nvt 0.669336 0.017767 0\nvt 0.981351 0.098799 0\nvt 0.666683 0.01377 0\nvt 0.692401 0.017767 0\nvt 0.985083 0.241385 0\nvt 0.695053 0.018055 0\nvt 0.987735 0.241737 0\nvt 0.695051 0.01377 0\nvt 0.568885 0.031294 0\nvt 0.568885 0.032873 0\nvt 0.567765 0.032411 0\nvt 0.567301 0.031294 0\nvt 0.567765 0.030177 0\nvt 0.568885 0.029713 0\nvt 0.570005 0.030177 0\nvt 0.570469 0.031294 0\nvt 0.570005 0.032411 0\nvt 0.56732 0.033997 0\nvt 0.568075 0.034308 0\nvt 0.568885 0.034415 0\nvt 0.566671 0.033502 0\nvt 0.566174 0.032854 0\nvt 0.565861 0.032102 0\nvt 0.565754 0.031294 0\nvt 0.565861 0.030486 0\nvt 0.566174 0.029732 0\nvt 0.566671 0.029086 0\nvt 0.57045 0.028589 0\nvt 0.569695 0.028278 0\nvt 0.568885 0.028171 0\nvt 0.568075 0.028278 0\nvt 0.56732 0.028589 0\nvt 0.571099 0.029086 0\nvt 0.571596 0.029732 0\nvt 0.571909 0.030486 0\nvt 0.572016 0.031294 0\nvt 0.571909 0.032102 0\nvt 0.571596 0.032854 0\nvt 0.571099 0.033502 0\nvt 0.570451 0.033997 0\nvt 0.569695 0.034308 0\nvt 0.317312 0.040812 0\nvt 0.567739 0.027029 0\nvt 0.316244 0.040813 0\nvt 0.566671 0.02747 0\nvt 0.36283 0.027882 0\nvt 0.315327 0.040813 0\nvt 0.565754 0.028171 0\nvt 0.36283 0.028796 0\nvt 0.56505 0.029086 0\nvt 0.56505 0.033502 0\nvt 0.362828 0.033212 0\nvt 0.231279 0.028434 0\nvt 0.362827 0.034125 0\nvt 0.565754 0.034414 0\nvt 0.232196 0.028435 0\nvt 0.566671 0.035118 0\nvt 0.233264 0.028436 0\nvt 0.567739 0.035556 0\nvt 0.23441 0.028436 0\nvt 0.568885 0.035707 0\nvt 0.235555 0.028437 0\nvt 0.570031 0.035556 0\nvt 0.236623 0.028437 0\nvt 0.571098 0.035118 0\nvt 0.379754 0.034125 0\nvt 0.23754 0.028437 0\nvt 0.572015 0.034414 0\nvt 0.379754 0.033212 0\nvt 0.572719 0.033502 0\nvt 0.379754 0.032147 0\nvt 0.573161 0.032436 0\nvt 0.379753 0.031004 0\nvt 0.573312 0.031294 0\nvt 0.379753 0.02986 0\nvt 0.573161 0.030149 0\nvt 0.379752 0.028796 0\nvt 0.572719 0.029086 0\nvt 0.379751 0.027882 0\nvt 0.321588 0.04081 0\nvt 0.572015 0.028171 0\nvt 0.320671 0.040811 0\nvt 0.571098 0.02747 0\nvt 0.319603 0.040811 0\nvt 0.57003 0.027029 0\nvt 0.318458 0.040812 0\nvt 0.568885 0.026878 0\nvt 0.361534 0.029604 0\nvt 0.36283 0.02986 0\nvt 0.564608 0.030149 0\nvt 0.564457 0.031294 0\nvt 0.362829 0.031005 0\nvt 0.361533 0.031004 0\nvt 0.564608 0.032436 0\nvt 0.362829 0.032147 0\nvt 0.361532 0.032401 0\nvt 0.361531 0.033706 0\nvt 0.230575 0.029727 0\nvt 0.36153 0.034828 0\nvt 0.231698 0.029728 0\nvt 0.233005 0.029729 0\nvt 0.234409 0.02973 0\nvt 0.235812 0.02973 0\nvt 0.23712 0.029731 0\nvt 0.381052 0.034828 0\nvt 0.238243 0.029731 0\nvt 0.381052 0.033706 0\nvt 0.381051 0.032401 0\nvt 0.381051 0.031004 0\nvt 0.38105 0.029604 0\nvt 0.381049 0.028299 0\nvt 0.360024 0.027987 0\nvt 0.361534 0.028299 0\nvt 0.360024 0.029441 0\nvt 0.360023 0.031003 0\nvt 0.360022 0.032563 0\nvt 0.360021 0.034017 0\nvt 0.36002 0.035266 0\nvt 0.230132 0.031233 0\nvt 0.231384 0.031234 0\nvt 0.232843 0.031235 0\nvt 0.234408 0.031236 0\nvt 0.235974 0.031237 0\nvt 0.237432 0.031237 0\nvt 0.382562 0.035266 0\nvt 0.238685 0.031237 0\nvt 0.382562 0.034017 0\nvt 0.382562 0.032563 0\nvt 0.382561 0.031003 0\nvt 0.38256 0.029441 0\nvt 0.315325 0.036399 0\nvt 0.315432 0.038015 0\nvt 0.360024 0.026738 0\nvt 0.31418 0.038015 0\nvt 0.314028 0.036399 0\nvt 0.358404 0.026586 0\nvt 0.358404 0.02788 0\nvt 0.358403 0.029387 0\nvt 0.358403 0.031002 0\nvt 0.232787 0.032851 0\nvt 0.234408 0.032852 0\nvt 0.231277 0.03285 0\nvt 0.3584 0.035416 0\nvt 0.22998 0.032849 0\nvt 0.358401 0.034123 0\nvt 0.358402 0.032618 0\nvt 0.236028 0.032853 0\nvt 0.237538 0.032853 0\nvt 0.238835 0.032853 0\nvt 0.384183 0.035416 0\nvt 0.384183 0.034123 0\nvt 0.384182 0.032618 0\nvt 0.234407 0.034468 0\nvt 0.356779 0.035169 0\nvt 0.230227 0.034465 0\nvt 0.356782 0.031002 0\nvt 0.314275 0.034783 0\nvt 0.356783 0.026834 0\nvt 0.318455 0.034782 0\nvt 0.316835 0.036399 0\nvt 0.322634 0.034779 0\nvt 0.385799 0.026834 0\nvt 0.320076 0.036397 0\nvt 0.321586 0.036396 0\nvt 0.385802 0.031002 0\nvt 0.38418 0.02788 0\nvt 0.384181 0.029386 0\nvt 0.384182 0.031002 0\nvt 0.385803 0.035169 0\nvt 0.238586 0.034469 0\nvt 0.234406 0.035973 0\nvt 0.355269 0.034737 0\nvt 0.970573 0.711112 0\nvt 0.230659 0.035971 0\nvt 0.355272 0.031001 0\nvt 0.387313 0.034737 0\nvt 0.963079 0.711112 0\nvt 0.238153 0.035974 0\nvt 0.387312 0.031001 0\nvt 0.966827 0.710426 0\nvt 0.234405 0.038257 0\nvt 0.963767 0.707376 0\nvt 0.389603 0.031 0\nvt 0.387309 0.027263 0\nvt 0.322201 0.033273 0\nvt 0.963079 0.703639 0\nvt 0.966827 0.707375 0\nvt 0.969886 0.707376 0\nvt 0.352979 0.031 0\nvt 0.355273 0.027263 0\nvt 0.314707 0.033277 0\nvt 0.970573 0.703639 0\nvt 0.318453 0.03099 0\nvt 0.966827 0.704325 0\nvt 0.318454 0.033276 0\nvt 0.594751 0.030177 0\nvt 0.595215 0.031292 0\nvt 0.593631 0.031292 0\nvt 0.593632 0.029713 0\nvt 0.592512 0.030177 0\nvt 0.592048 0.031292 0\nvt 0.592512 0.032409 0\nvt 0.593632 0.032873 0\nvt 0.594751 0.032409 0\nvt 0.596655 0.030486 0\nvt 0.596762 0.031292 0\nvt 0.596343 0.029732 0\nvt 0.595845 0.029086 0\nvt 0.595197 0.028589 0\nvt 0.594442 0.028278 0\nvt 0.593631 0.028171 0\nvt 0.592821 0.028278 0\nvt 0.592066 0.028589 0\nvt 0.591418 0.029086 0\nvt 0.59092 0.029732 0\nvt 0.590607 0.030486 0\nvt 0.590501 0.031292 0\nvt 0.590607 0.032102 0\nvt 0.59092 0.032854 0\nvt 0.591418 0.0335 0\nvt 0.592066 0.033997 0\nvt 0.592821 0.034308 0\nvt 0.593632 0.034415 0\nvt 0.594442 0.034308 0\nvt 0.595197 0.033997 0\nvt 0.595845 0.0335 0\nvt 0.596343 0.032854 0\nvt 0.596655 0.032102 0\nvt 0.416375 0.032147 0\nvt 0.589354 0.032436 0\nvt 0.416375 0.031002 0\nvt 0.589204 0.031291 0\nvt 0.416376 0.02986 0\nvt 0.589354 0.030149 0\nvt 0.416376 0.028797 0\nvt 0.589797 0.029086 0\nvt 0.966521 0.864729 0\nvt 0.416376 0.027882 0\nvt 0.5905 0.028171 0\nvt 0.967438 0.864729 0\nvt 0.591417 0.02747 0\nvt 0.968506 0.864728 0\nvt 0.592485 0.027029 0\nvt 0.969652 0.864728 0\nvt 0.593631 0.026878 0\nvt 0.970798 0.864727 0\nvt 0.594777 0.027029 0\nvt 0.971866 0.864727 0\nvt 0.595845 0.02747 0\nvt 0.432268 0.027882 0\nvt 0.972783 0.864726 0\nvt 0.596762 0.028171 0\nvt 0.432269 0.028796 0\nvt 0.597465 0.029086 0\nvt 0.432269 0.02986 0\nvt 0.597907 0.030149 0\nvt 0.43227 0.032147 0\nvt 0.597907 0.032436 0\nvt 0.43227 0.031002 0\nvt 0.598058 0.031291 0\nvt 0.43227 0.03321 0\nvt 0.597465 0.033499 0\nvt 0.212794 0.028437 0\nvt 0.43227 0.034125 0\nvt 0.596762 0.034414 0\nvt 0.211877 0.028437 0\nvt 0.595845 0.035115 0\nvt 0.210809 0.028437 0\nvt 0.594777 0.035556 0\nvt 0.209663 0.028436 0\nvt 0.593631 0.035707 0\nvt 0.208518 0.028435 0\nvt 0.592485 0.035556 0\nvt 0.20745 0.028435 0\nvt 0.591417 0.035115 0\nvt 0.416373 0.034125 0\nvt 0.206533 0.028434 0\nvt 0.5905 0.034414 0\nvt 0.416374 0.03321 0\nvt 0.589797 0.033499 0\nvt 0.415078 0.032402 0\nvt 0.415079 0.031002 0\nvt 0.41508 0.029604 0\nvt 0.41508 0.028299 0\nvt 0.965817 0.863436 0\nvt 0.41508 0.02718 0\nvt 0.433568 0.033706 0\nvt 0.433567 0.032401 0\nvt 0.213497 0.029731 0\nvt 0.433568 0.034826 0\nvt 0.212374 0.029731 0\nvt 0.211066 0.02973 0\nvt 0.209663 0.02973 0\nvt 0.208259 0.029729 0\nvt 0.206952 0.029728 0\nvt 0.415077 0.034826 0\nvt 0.205829 0.029727 0\nvt 0.415078 0.033707 0\nvt 0.413569 0.032564 0\nvt 0.413569 0.031001 0\nvt 0.41357 0.029441 0\nvt 0.41357 0.027987 0\nvt 0.435077 0.031001 0\nvt 0.433566 0.029604 0\nvt 0.435077 0.029441 0\nvt 0.433567 0.031001 0\nvt 0.435078 0.032563 0\nvt 0.435078 0.034017 0\nvt 0.435078 0.035266 0\nvt 0.213939 0.031237 0\nvt 0.212686 0.031237 0\nvt 0.211227 0.031236 0\nvt 0.209662 0.031236 0\nvt 0.208097 0.031235 0\nvt 0.206638 0.031234 0\nvt 0.205385 0.031233 0\nvt 0.413566 0.035266 0\nvt 0.413568 0.034017 0\nvt 0.411948 0.032619 0\nvt 0.411947 0.034123 0\nvt 0.205234 0.032849 0\nvt 0.411946 0.035416 0\nvt 0.206531 0.03285 0\nvt 0.208041 0.032851 0\nvt 0.209661 0.032852 0\nvt 0.211282 0.032852 0\nvt 0.212792 0.032853 0\nvt 0.436699 0.035416 0\nvt 0.214089 0.032853 0\nvt 0.436699 0.034123 0\nvt 0.436698 0.032618 0\nvt 0.436698 0.031002 0\nvt 0.436697 0.029387 0\nvt 0.435076 0.027987 0\nvt 0.436696 0.02788 0\nvt 0.973927 0.861927 0\nvt 0.435075 0.026738 0\nvt 0.974077 0.860311 0\nvt 0.436695 0.026587 0\nvt 0.411949 0.031002 0\nvt 0.438318 0.031002 0\nvt 0.438316 0.026834 0\nvt 0.973829 0.858695 0\nvt 0.97278 0.860312 0\nvt 0.573312 0.009416 0\nvt 0.97127 0.860313 0\nvt 0.571691 0.011031 0\nvt 0.969649 0.858698 0\nvt 0.968029 0.860314 0\nvt 0.966519 0.860315 0\nvt 0.410329 0.026834 0\nvt 0.96547 0.858699 0\nvt 0.41195 0.02788 0\nvt 0.411949 0.029387 0\nvt 0.410328 0.031002 0\nvt 0.410325 0.035169 0\nvt 0.205481 0.034465 0\nvt 0.20966 0.034467 0\nvt 0.438319 0.035169 0\nvt 0.21384 0.034469 0\nvt 0.964759 0.155809 0\nvt 0.408815 0.034737 0\nvt 0.205913 0.035971 0\nvt 0.408818 0.031001 0\nvt 0.20966 0.035973 0\nvt 0.439829 0.034737 0\nvt 0.957265 0.155809 0\nvt 0.213407 0.035974 0\nvt 0.439828 0.031001 0\nvt 0.961013 0.155123 0\nvt 0.209659 0.038257 0\nvt 0.957953 0.152073 0\nvt 0.442119 0.031 0\nvt 0.439826 0.027263 0\nvt 0.973396 0.857189 0\nvt 0.957265 0.148336 0\nvt 0.961013 0.152072 0\nvt 0.961013 0.149022 0\nvt 0.969647 0.854906 0\nvt 0.969649 0.857192 0\nvt 0.408819 0.027263 0\nvt 0.964759 0.148336 0\nvt 0.965901 0.857193 0\nvt 0.964072 0.152073 0\nvt 0.406525 0.031 0\nvt 0.318457 0.039519 0\nvt 0.317053 0.03952 0\nvt 0.315746 0.039521 0\nvt 0.361534 0.02718 0\nvt 0.314623 0.039521 0\nvt 0.381048 0.02718 0\nvt 0.322291 0.039517 0\nvt 0.321168 0.039518 0\nvt 0.31986 0.039519 0\nvt 0.320022 0.038013 0\nvt 0.318456 0.038014 0\nvt 0.316891 0.038015 0\nvt 0.382559 0.027987 0\nvt 0.382558 0.026738 0\nvt 0.322733 0.038011 0\nvt 0.32148 0.038012 0\nvt 0.318456 0.036398 0\nvt 0.322883 0.036395 0\nvt 0.384179 0.026586 0\nvt 0.96694 0.863436 0\nvt 0.968248 0.863436 0\nvt 0.969651 0.863435 0\nvt 0.971055 0.863434 0\nvt 0.972363 0.863434 0\nvt 0.433564 0.02718 0\nvt 0.973486 0.863433 0\nvt 0.433565 0.028299 0\nvt 0.41357 0.026738 0\nvt 0.965374 0.861931 0\nvt 0.966627 0.861931 0\nvt 0.968085 0.86193 0\nvt 0.969651 0.86193 0\nvt 0.971216 0.861929 0\nvt 0.972675 0.861928 0\nvt 0.571691 0.009415 0\nvt 0.96965 0.860314 0\nvt 0.41195 0.026587 0\nvt 0.965222 0.860315 0\nvt 0.205858 0.339395 0\nvt 0.811498 0.339953 0\nvt 0.189193 0.354241 0\nvt 0.189095 0.337818 0\nvt 0.818021 0.354241 0\nvt 0.207644 0.353682 0\nvt 0.212769 0.337339 0\nvt 0.817748 0.337898 0\nvt 0.829368 0.33757 0\nvt 0.214589 0.329668 0\nvt 0.821355 0.330226 0\nvt 0.830297 0.322804 0\nvt 0.213934 0.322243 0\nvt 0.822167 0.322802 0\nvt 0.821232 0.290128 0\nvt 0.214665 0.28957 0\nvt 0.205864 0.289825 0\nvt 0.205904 0.268697 0\nvt 0.385276 0.191356 0\nvt 0.195024 0.28963 0\nvt 0.196752 0.267903 0\nvt 0.384632 0.169629 0\nvt 0.377519 0.190988 0\nvt 0.377728 0.158685 0\nvt 0.31518 0.270491 0\nvt 0.373029 0.166347 0\nvt 0.372665 0.157241 0\nvt 0.315175 0.261385 0\nvt 0.310781 0.260742 0\nvt 0.310865 0.252529 0\nvt 0.833783 0.256053 0\nvt 0.306342 0.261365 0\nvt 0.830998 0.248258 0\nvt 0.307037 0.25357 0\nvt 0.828738 0.257471 0\nvt 0.827616 0.249689 0\nvt 0.819768 0.251799 0\nvt 0.211987 0.251241 0\nvt 0.816936 0.232559 0\nvt 0.213804 0.232001 0\nvt 0.205113 0.235544 0\nvt 0.311081 0.231825 0\nvt 0.375446 0.149448 0\nvt 0.314545 0.253592 0\nvt 0.381038 0.129196 0\nvt 0.318665 0.233341 0\nvt 0.378842 0.150893 0\nvt 0.195947 0.231023 0\nvt 0.389603 0.132748 0\nvt 0.197344 0.251285 0\nvt 0.386695 0.15301 0\nvt 0.20511 0.252203 0\nvt 0.821838 0.268411 0\nvt 0.213591 0.267853 0\nvt 0.828956 0.289755 0\nvt 0.305984 0.270418 0\nvt 0.834408 0.265107 0\nvt 0.837875 0.290276 0\nvt 0.303762 0.295587 0\nvt 0.310171 0.294866 0\nvt 0.840485 0.32281 0\nvt 0.303839 0.328121 0\nvt 0.310788 0.328125 0\nvt 0.8399 0.34889 0\nvt 0.3064 0.354201 0\nvt 0.944658 0.729599 0\nvt 0.858965 0.782849 0\nvt 0.851327 0.79081 0\nvt 0.941486 0.813378 0\nvt 0.945032 0.737216 0\nvt 0.856123 0.777479 0\nvt 0.95133 0.728025 0\nvt 0.947639 0.814764 0\nvt 0.951185 0.734682 0\nvt 0.841388 0.614164 0\nvt 0.957153 0.737263 0\nvt 0.953607 0.813652 0\nvt 0.947838 0.819362 0\nvt 0.903476 0.309641 0\nvt 0.848344 0.624328 0\nvt 0.952219 0.823816 0\nvt 0.947209 0.822565 0\nvt 0.898466 0.30839 0\nvt 0.898444 0.35294 0\nvt 0.943935 0.823847 0\nvt 0.844228 0.801279 0\nvt 0.895192 0.309672 0\nvt 0.847196 0.846404 0\nvt 0.890126 0.354797 0\nvt 0.872639 0.352747 0\nvt 0.838154 0.827468 0\nvt 0.874234 0.375872 0\nvt 0.838636 0.850593 0\nvt 0.865543 0.379415 0\nvt 0.943466 0.606671 0\nvt 0.193929 0.322247 0\nvt 0.944424 0.574054 0\nvt 0.195024 0.28963 0\nvt 0.205544 0.322243 0\nvt 0.4593 0.111457 0\nvt 0.944441 0.610164 0\nvt 0.194109 0.32574 0\nvt 0.205288 0.327033 0\nvt 0.448121 0.106179 0\nvt 0.456412 0.106623 0\nvt 0.203399 0.33151 0\nvt 0.45001 0.102081 0\nvt 0.464447 0.105553 0\nvt 0.188962 0.329766 0\nvt 0.868915 0.325935 0\nvt 0.838114 0.800656 0\nvt 0.86492 0.350351 0\nvt 0.857595 0.352197 0\nvt 0.854653 0.649997 0\nvt 0.854146 0.672694 0\nvt 0.856377 0.374894 0\nvt 0.906028 0.354456 0\nvt 0.845581 0.669142 0\nvt 0.326437 0.339917 0\nvt 0.316615 0.341313 0\nvt 0.29366 0.041695 0\nvt 0.32655 0.33186 0\nvt 0.31583 0.352122 0\nvt 0.310923 0.353442 0\nvt 0.891487 0.14354 0\nvt 0.90865 0.14347 0\nvt 0.906239 0.157044 0\nvt 0.893228 0.128249 0\nvt 0.906211 0.128072 0\nvt 0.317428 0.294701 0\nvt 0.368801 0.190557 0\nvt 0.31067 0.271092 0\nvt 0.935328 0.606675 0\nvt 0.936667 0.573686 0\nvt 0.461704 0.120358 0\nvt 0.935515 0.609843 0\nvt 0.464388 0.113899 0\nvt 0.870348 0.316102 0\nvt 0.833795 0.790823 0\nvt 0.864305 0.326841 0\nvt 0.864078 0.316029 0\nvt 0.857978 0.316138 0\nvt 0.858932 0.613939 0\nvt 0.858687 0.30842 0\nvt 0.858965 0.60622 0\nvt 0.852057 0.605565 0\nvt 0.840788 0.781479 0\nvt 0.869604 0.30839 0\nvt 0.833729 0.783111 0\nvt 0.864105 0.308522 0\nvt 0.913472 0.931155 0\nvt 0.31885 0.328124 0\nvt 0.916115 0.897733 0\nvt 0.317428 0.294701 0\nvt 0.914808 0.934636 0\nvt 0.289356 0.040078 0\nvt 0.322247 0.331604 0\nvt 0.923493 0.931153 0\nvt 0.924833 0.898164 0\nvt 0.860053 0.326682 0\nvt 0.85535 0.624482 0\nvt 0.207455 0.332868 0\nvt 0.293534 0.039551 0\nvt 0.967282 0.921975 0\nvt 0.923681 0.934321 0\nvt 0.290917 0.03123 0\nvt 0.20924 0.328249 0\nvt 0.014268 0.032619 0\nvt 0.014257 0.037128 0\nvt 0.598662 0.051554 0\nvt 0.592351 0.054033 0\nvt 0.007946 0.032326 0\nvt 0.019531 0.036257 0\nvt 0.603936 0.053101 0\nvt 0.597253 0.061941 0\nvt 0.020096 0.038791 0\nvt 0.604501 0.06357 0\nvt 0.01955 0.03221 0\nvt 0.021962 0.033509 0\nvt 0.59238 0.05426 0\nvt 0.007975 0.0362 0\nvt 0.590581 0.063515 0\nvt 0.589204 0.066349 0\nvt 0.833757 0.606242 0\nvt 0.958578 0.729654 0\nvt 0.836614 0.60096 0\nvt 0.32638 0.351297 0\nvt 0.900957 0.158369 0\nvt 0.894635 0.155857 0\nvt 0.830259 0.35064 0\nvt 0.825496 0.22837 0\nvt 0.302763 0.233682 0\nvt 0.969966 0.915516 0\nvt 0.969898 0.930296 0\nvt 0.108068 0.015326 0\nvt 0.896876 0.033864 0\nvt 0.896943 0.125194 0\nvt 0.899621 0.035958 0\nvt 0.894197 0.12121 0\nvt 0.896531 0.033896 0\nvt 0.897287 0.121608 0\nvt 0.114215 0.015406 0\nvt 0.903089 0.125274 0\nvt 0.891347 0.033896 0\nvt 0.113597 0.011867 0\nvt 0.902472 0.121735 0\nvt 0.888704 0.035988 0\nvt 0.905114 0.121183 0\nvt 0.894122 0.03609 0\nvt 0.893949 0.033898 0\nvt 0.109625 0.013987 0\nvt 0.895319 0.029497 0\nvt 0.109792 0.012437 0\nvt 0.895152 0.029512 0\nvt 0.112679 0.014027 0\nvt 0.112369 0.012497 0\nvt 0.892575 0.029511 0\nvt 0.111074 0.011953 0\nvt 0.89387 0.029512 0\nvt 0.172332 0.339435 0\nvt 0.855992 0.992077 0\nvt 0.17072 0.353683 0\nvt 0.165393 0.337436 0\nvt 0.856319 0.97583 0\nvt 0.844756 0.975646 0\nvt 0.163279 0.329916 0\nvt 0.852862 0.96831 0\nvt 0.843922 0.960968 0\nvt 0.16375 0.322478 0\nvt 0.852049 0.960872 0\nvt 0.852985 0.928226 0\nvt 0.162214 0.289832 0\nvt 0.171022 0.289871 0\nvt 0.170459 0.26875 0\nvt 0.087871 0.187664 0\nvt 0.18185 0.289411 0\nvt 0.179586 0.267733 0\nvt 0.088514 0.165986 0\nvt 0.095629 0.187264 0\nvt 0.095418 0.155047 0\nvt 0.339593 0.27042 0\nvt 0.100115 0.162804 0\nvt 0.100478 0.15369 0\nvt 0.339823 0.261306 0\nvt 0.344233 0.260771 0\nvt 0.344349 0.252558 0\nvt 0.84043 0.894026 0\nvt 0.348654 0.261502 0\nvt 0.843214 0.886217 0\nvt 0.34815 0.253693 0\nvt 0.845477 0.895517 0\nvt 0.846599 0.887704 0\nvt 0.854447 0.889843 0\nvt 0.163948 0.251449 0\nvt 0.857281 0.870653 0\nvt 0.161659 0.232259 0\nvt 0.170438 0.235587 0\nvt 0.097696 0.145915 0\nvt 0.340643 0.253531 0\nvt 0.344642 0.231855 0\nvt 0.092107 0.125568 0\nvt 0.33702 0.233184 0\nvt 0.094302 0.147297 0\nvt 0.179486 0.230843 0\nvt 0.083543 0.129097 0\nvt 0.178587 0.251133 0\nvt 0.086449 0.149387 0\nvt 0.170849 0.252242 0\nvt 0.852378 0.906489 0\nvt 0.162751 0.268095 0\nvt 0.845262 0.927877 0\nvt 0.348789 0.270571 0\nvt 0.839804 0.903095 0\nvt 0.83634 0.928302 0\nvt 0.350394 0.295778 0\nvt 0.344006 0.2949 0\nvt 0.833729 0.960824 0\nvt 0.349516 0.3283 0\nvt 0.342572 0.328134 0\nvt 0.834177 0.986765 0\nvt 0.346303 0.354241 0\nvt 0.841368 0.701826 0\nvt 0.142231 0.032391 0\nvt 0.958269 0.959778 0\nvt 0.958838 0.952162 0\nvt 0.83373 0.693877 0\nvt 0.836572 0.688541 0\nvt 0.952093 0.950586 0\nvt 0.136046 0.033628 0\nvt 0.952084 0.957243 0\nvt 0.851334 0.526704 0\nvt 0.946144 0.959824 0\nvt 0.130107 0.032371 0\nvt 0.135735 0.038219 0\nvt 0.88329 0.54725 0\nvt 0.844377 0.536899 0\nvt 0.131246 0.042565 0\nvt 0.136284 0.041436 0\nvt 0.888329 0.546121 0\nvt 0.887267 0.590607 0\nvt 0.139526 0.042797 0\nvt 0.848467 0.712232 0\nvt 0.891571 0.547482 0\nvt 0.845509 0.757418 0\nvt 0.895534 0.592667 0\nvt 0.857401 0.186038 0\nvt 0.854551 0.738474 0\nvt 0.856377 0.209196 0\nvt 0.85407 0.761632 0\nvt 0.865156 0.212524 0\nvt 0.936301 0.554343 0\nvt 0.183749 0.321991 0\nvt 0.935342 0.521763 0\nvt 0.18185 0.289411 0\nvt 0.172142 0.322271 0\nvt 0.469742 0.111224 0\nvt 0.935359 0.557839 0\nvt 0.183667 0.325487 0\nvt 0.172521 0.327053 0\nvt 0.480889 0.105917 0\nvt 0.472517 0.106424 0\nvt 0.180892 0.328319 0\nvt 0.174686 0.331496 0\nvt 0.478723 0.101966 0\nvt 0.860468 0.159192 0\nvt 0.854581 0.711628 0\nvt 0.865061 0.183454 0\nvt 0.872427 0.185119 0\nvt 0.838068 0.562453 0\nvt 0.838577 0.585113 0\nvt 0.874204 0.207779 0\nvt 0.879645 0.591936 0\nvt 0.84714 0.581585 0\nvt 0.336275 0.341289 0\nvt 0.336892 0.352263 0\nvt 0.341781 0.353429 0\nvt 0.252592 0.11874 0\nvt 0.26976 0.118808 0\nvt 0.255037 0.132313 0\nvt 0.26792 0.103517 0\nvt 0.254916 0.103341 0\nvt 0.336754 0.294557 0\nvt 0.104343 0.186941 0\nvt 0.344088 0.271138 0\nvt 0.944441 0.554294 0\nvt 0.9431 0.521363 0\nvt 0.467331 0.120117 0\nvt 0.944278 0.557482 0\nvt 0.858797 0.149397 0\nvt 0.8589 0.701833 0\nvt 0.8651 0.159986 0\nvt 0.865064 0.149172 0\nvt 0.871164 0.149133 0\nvt 0.83379 0.526467 0\nvt 0.870267 0.141434 0\nvt 0.833757 0.518768 0\nvt 0.840665 0.518087 0\nvt 0.851906 0.692498 0\nvt 0.859352 0.141669 0\nvt 0.858965 0.694105 0\nvt 0.864853 0.141667 0\nvt 0.924833 0.87849 0\nvt 0.334509 0.327934 0\nvt 0.922188 0.845112 0\nvt 0.336754 0.294557 0\nvt 0.9235 0.881886 0\nvt 0.298137 0.039813 0\nvt 0.331027 0.331331 0\nvt 0.914815 0.878367 0\nvt 0.913473 0.845435 0\nvt 0.869346 0.159724 0\nvt 0.837371 0.537058 0\nvt 0.170644 0.332905 0\nvt 0.972909 0.921734 0\nvt 0.914651 0.881554 0\nvt 0.296545 0.03099 0\nvt 0.168599 0.328366 0\nvt 0.666515 0.038947 0\nvt 0.885525 0.515477 0\nvt 0.666614 0.03444 0\nvt 0.89195 0.517957 0\nvt 0.672941 0.0343 0\nvt 0.661264 0.037948 0\nvt 0.880273 0.517023 0\nvt 0.886823 0.525864 0\nvt 0.660636 0.040467 0\nvt 0.879645 0.527493 0\nvt 0.661343 0.033902 0\nvt 0.658899 0.035141 0\nvt 0.891826 0.518184 0\nvt 0.672817 0.038171 0\nvt 0.893568 0.52744 0\nvt 0.895076 0.530274 0\nvt 0.858965 0.51875 0\nvt 0.944915 0.952215 0\nvt 0.856108 0.513425 0\nvt 0.260308 0.133638 0\nvt 0.266634 0.131125 0\nvt 0.843808 0.988566 0\nvt 0.84872 0.86644 0\nvt 0.352909 0.233916 0\nvt 0.864937 0.033977 0\nvt 0.263871 0.096876 0\nvt 0.861898 0.036113 0\nvt 0.266911 0.096478 0\nvt 0.264217 0.100462 0\nvt 0.864591 0.033953 0\nvt 0.258072 0.100543 0\nvt 0.872812 0.035878 0\nvt 0.255996 0.096452 0\nvt 0.87012 0.03385 0\nvt 0.258689 0.097003 0\nvt 0.867518 0.033915 0\nvt 0.867399 0.036111 0\nvt 0.225795 0.010865 0\nvt 0.866208 0.02956 0\nvt 0.225963 0.012414 0\nvt 0.262767 0.099123 0\nvt 0.866041 0.02955 0\nvt 0.22291 0.012455 0\nvt 0.259714 0.099164 0\nvt 0.22322 0.010925 0\nvt 0.868784 0.029497 0\nvt 0.260024 0.097633 0\nvt 0.224514 0.01038 0\nvt 0.86749 0.02953 0\nvt 0.395897 0.320577 0\nvt 0.386563 0.319626 0\nvt 0.387622 0.293941 0\nvt 0.398515 0.294909 0\nvt 0.389022 0.268263 0\nvt 0.401721 0.269252 0\nvt 0.391498 0.246131 0\nvt 0.4042 0.247385 0\nvt 0.394359 0.223674 0\nvt 0.407325 0.225208 0\nvt 0.396295 0.208469 0\nvt 0.409435 0.21019 0\nvt 0.368807 0.208474 0\nvt 0.369833 0.223368 0\nvt 0.37238 0.245252 0\nvt 0.371847 0.267017 0\nvt 0.371217 0.292723 0\nvt 0.368801 0.318818 0\nvt 0.387357 0.337099 0\nvt 0.369141 0.334517 0\nvt 0.388136 0.354241 0\nvt 0.589204 0.101641 0\nvt 0.592142 0.082196 0\nvt 0.6083 0.08353 0\nvt 0.601451 0.104831 0\nvt 0.878268 0.919611 0\nvt 0.873173 0.898311 0\nvt 0.883605 0.897733 0\nvt 0.887714 0.920055 0\nvt 0.897464 0.897906 0\nvt 0.897579 0.919405 0\nvt 0.889817 0.934041 0\nvt 0.89758 0.933528 0\nvt 0.884875 0.747626 0\nvt 0.874857 0.725483 0\nvt 0.888694 0.725301 0\nvt 0.894276 0.747186 0\nvt 0.899132 0.725785 0\nvt 0.230557 0.190507 0\nvt 0.249612 0.208659 0\nvt 0.237347 0.211907 0\nvt 0.246801 0.188915 0\nvt 0.25372 0.225142 0\nvt 0.243731 0.226175 0\nvt 0.260653 0.157302 0\nvt 0.244438 0.160824 0\nvt 0.875001 0.612924 0\nvt 0.264128 0.182296 0\nvt 0.286871 0.328303 0\nvt 0.306282 0.057843 0\nvt 0.272987 0.354241 0\nvt 0.269539 0.328792 0\nvt 0.285331 0.302575 0\nvt 0.266098 0.303382 0\nvt 0.285013 0.280654 0\nvt 0.263987 0.280822 0\nvt 0.28469 0.258361 0\nvt 0.261828 0.257885 0\nvt 0.284467 0.243296 0\nvt 0.260374 0.242382 0\nvt 0.878746 0.632412 0\nvt 0.264233 0.201784 0\nvt 0.882997 0.651028 0\nvt 0.262473 0.2204 0\nvt 0.895241 0.639654 0\nvt 0.895346 0.624502 0\nvt 0.895534 0.608514 0\nvt 0.906512 0.22837 0\nvt 0.896433 0.248716 0\nvt 0.907516 0.388507 0\nvt 0.908746 0.370957 0\nvt 0.892713 0.231166 0\nvt 0.90865 0.247859 0\nvt 0.882747 0.761632 0\nvt 0.889303 0.761453 0\nvt 0.510471 0.216978 0\nvt 0.83924 0.167162 0\nvt 0.519476 0.239949 0\nvt 0.837284 0.190133 0\nvt 0.809936 0.189279 0\nvt 0.811225 0.166449 0\nvt 0.504426 0.201591 0\nvt 0.840485 0.151775 0\nvt 0.811153 0.151077 0\nvt 0.537257 0.214094 0\nvt 0.542376 0.236915 0\nvt 0.533825 0.198808 0\nvt 0.239107 0.280129 0\nvt 0.233989 0.257308 0\nvt 0.230557 0.242022 0\nvt 0.528269 0.26234 0\nvt 0.835953 0.212524 0\nvt 0.810472 0.211636 0\nvt 0.547367 0.259159 0\nvt 0.244098 0.302373 0\nvt 0.900082 0.265933 0\nvt 0.90631 0.405723 0\nvt 0.890126 0.402753 0\nvt 0.890474 0.386888 0\nvt 0.890405 0.370643 0\nvt 0.291495 0.077031 0\nvt 0.289356 0.057542 0\nvt 0.949293 0.915516 0\nvt 0.95139 0.934636 0\nvt 0.940725 0.93359 0\nvt 0.906783 0.193495 0\nvt 0.90865 0.212451 0\nvt 0.892193 0.212524 0\nvt 0.890096 0.193404 0\nvt 0.904883 0.174216 0\nvt 0.556561 0.102633 0\nvt 0.553916 0.128224 0\nvt 0.535575 0.12791 0\nvt 0.534506 0.101966 0\nvt 0.456928 0.659121 0\nvt 0.465549 0.684713 0\nvt 0.458526 0.684046 0\nvt 0.448999 0.658233 0\nvt 0.482001 0.681724 0\nvt 0.487989 0.707507 0\nvt 0.474191 0.710303 0\nvt 0.476026 0.65594 0\nvt 0.583919 0.684412 0\nvt 0.587367 0.709861 0\nvt 0.570442 0.70956 0\nvt 0.564454 0.683777 0\nvt 0.580478 0.659002 0\nvt 0.558479 0.657993 0\nvt 0.167357 0.133638 0\nvt 0.167003 0.100313 0\nvt 0.183188 0.103284 0\nvt 0.924542 0.104853 0\nvt 0.181195 0.133456 0\nvt 0.936591 0.075726 0\nvt 0.193244 0.10433 0\nvt 0.934979 0.105336 0\nvt 0.774423 0.119079 0\nvt 0.771848 0.089469 0\nvt 0.788305 0.089396 0\nvt 0.790668 0.117487 0\nvt 0.48389 0.227915 0\nvt 0.488093 0.226832 0\nvt 0.486164 0.252908 0\nvt 0.064705 0.354241 0\nvt 0.511163 0.174745 0\nvt 0.044322 0.349733 0\nvt 0.044343 0.323961 0\nvt 0.063479 0.328149 0\nvt 0.044485 0.308425 0\nvt 0.067652 0.329334 0\nvt 0.514692 0.149838 0\nvt 0.530915 0.153616 0\nvt 0.528482 0.181627 0\nvt 0.120235 0.096571 0\nvt 0.142231 0.095453 0\nvt 0.136252 0.121121 0\nvt 0.917186 0.727745 0\nvt 0.607749 0.164098 0\nvt 0.591076 0.133761 0\nvt 0.607395 0.130773 0\nvt 0.59389 0.163925 0\nvt 0.581041 0.135054 0\nvt 0.583458 0.164503 0\nvt 0.544641 0.182961 0\nvt 0.547367 0.153511 0\nvt 0.925076 0.763894 0\nvt 0.917302 0.763368 0\nvt 0.917301 0.749244 0\nvt 0.927204 0.749888 0\nvt 0.023788 0.354142 0\nvt 0.025716 0.328067 0\nvt 0.026918 0.310949 0\nvt 0.044144 0.292726 0\nvt 0.028143 0.293535 0\nvt 0.04656 0.266631 0\nvt 0.027716 0.267798 0\nvt 0.04719 0.240924 0\nvt 0.02695 0.242092 0\nvt 0.047723 0.21916 0\nvt 0.025021 0.219906 0\nvt 0.045176 0.197275 0\nvt 0.02269 0.197336 0\nvt 0.04415 0.182382 0\nvt 0.021126 0.182089 0\nvt 0.009689 0.198556 0\nvt 0.007946 0.183491 0\nvt 0.012284 0.220848 0\nvt 0.014223 0.24277 0\nvt 0.87026 0.22837 0\nvt 0.016795 0.268497 0\nvt 0.8718 0.254122 0\nvt 0.018783 0.294248 0\nvt 0.8741 0.271726 0\nvt 0.020162 0.311853 0\nvt 0.87636 0.289022 0\nvt 0.021514 0.329149 0\nvt 0.860144 0.292543 0\nvt 0.858277 0.273588 0\nvt 0.856377 0.254309 0\nvt 0.43223 0.158713 0\nvt 0.425802 0.172973 0\nvt 0.415811 0.171945 0\nvt 0.419982 0.155524 0\nvt 0.937033 0.673187 0\nvt 0.088108 0.315613 0\nvt 0.946366 0.674138 0\nvt 0.085804 0.333204 0\nvt 0.944555 0.691729 0\nvt 0.937827 0.69066 0\nvt 0.083543 0.350462 0\nvt 0.942778 0.708987 0\nvt 0.938606 0.707802 0\nvt 0.099766 0.354241 0\nvt 0.101635 0.335324 0\nvt 0.10354 0.316041 0\nvt 0.089647 0.289945 0\nvt 0.106986 0.290685 0\nvt 0.091188 0.264288 0\nvt 0.110429 0.265344 0\nvt 0.112542 0.242876 0\nvt 0.091508 0.242421 0\nvt 0.091817 0.220244 0\nvt 0.11468 0.220094 0\nvt 0.09204 0.205226 0\nvt 0.116135 0.204666 0\nvt 0.891336 0.690785 0\nvt 0.405494 0.148599 0\nvt 0.895534 0.671383 0\nvt 0.405601 0.129196 0\nvt 0.42292 0.136078 0\nvt 0.887006 0.709455 0\nvt 0.407037 0.167268 0\nvt 0.874857 0.698015 0\nvt 0.874963 0.682863 0\nvt 0.875151 0.666875 0\nvt 0.858516 0.088323 0\nvt 0.007946 0.090992 0\nvt 0.872308 0.090891 0\nvt 0.868587 0.108406 0\nvt 0.009605 0.108507 0\nvt 0.856377 0.107786 0\nvt 0.965623 0.255815 0\nvt 0.959073 0.255645 0\nvt 0.954074 0.241385 0\nvt 0.963519 0.241829 0\nvt 0.775179 0.213944 0\nvt 0.835071 0.452048 0\nvt 0.86099 0.47409 0\nvt 0.766381 0.237122 0\nvt 0.834144 0.475226 0\nvt 0.862279 0.451259 0\nvt 0.781225 0.198564 0\nvt 0.833757 0.436668 0\nvt 0.862206 0.435887 0\nvt 0.748405 0.211135 0\nvt 0.743492 0.23442 0\nvt 0.75184 0.195863 0\nvt 0.137419 0.242068 0\nvt 0.142333 0.218783 0\nvt 0.145767 0.203511 0\nvt 0.861526 0.496446 0\nvt 0.757587 0.259473 0\nvt 0.836022 0.497578 0\nvt 0.738498 0.256579 0\nvt 0.132425 0.264227 0\nvt 0.027551 0.122701 0\nvt 0.864936 0.125588 0\nvt 0.011233 0.125688 0\nvt 0.0279 0.106836 0\nvt 0.118316 0.335042 0\nvt 0.120455 0.315579 0\nvt 0.87644 0.976233 0\nvt 0.896325 0.975832 0\nvt 0.896394 0.992077 0\nvt 0.94283 0.880575 0\nvt 0.95139 0.898377 0\nvt 0.940732 0.89967 0\nvt 0.289601 0.09316 0\nvt 0.304183 0.111972 0\nvt 0.287732 0.112077 0\nvt 0.306282 0.092878 0\nvt 0.873173 0.950715 0\nvt 0.895256 0.949888 0\nvt 0.53494 0.658834 0\nvt 0.53306 0.683515 0\nvt 0.526317 0.684342 0\nvt 0.542587 0.657702 0\nvt 0.509872 0.681608 0\nvt 0.517673 0.709861 0\nvt 0.503881 0.707292 0\nvt 0.515851 0.65594 0\nvt 0.123681 0.162308 0\nvt 0.13715 0.187203 0\nvt 0.120235 0.187664 0\nvt 0.143141 0.161519 0\nvt 0.127124 0.136968 0\nvt 0.689875 0.147209 0\nvt 0.361889 0.00954 0\nvt 0.738022 0.652686 0\nvt 0.690112 0.147337 0\nvt 0.737687 0.652979 0\nvt 0.689776 0.147462 0\nvt 0.700592 0.147207 0\nvt 0.345997 0.009528 0\nvt 0.748601 0.652981 0\nvt 0.700691 0.14746 0\nvt 0.748265 0.652687 0\nvt 0.700355 0.147334 0\nvt 0.689776 0.147462 0\nvt 0.68918 0.14689 0\nvt 0.689594 0.147141 0\nvt 0.700691 0.14746 0\nvt 0.700879 0.147137 0\nvt 0.701292 0.146886 0\nvt 0.984634 0.012545 0\nvt 0.380612 0.010277 0\nvt 0.380305 0.009343 0\nvt 0.39924 0.009416 0\nvt 0.380686 0.009248 0\nvt 0.984687 0.396718 0\nvt 0.690286 0.158526 0\nvt 0.069413 0.015139 0\nvt 0.98377 0.396478 0\nvt 0.689682 0.157834 0\nvt 0.069661 0.014281 0\nvt 0.984631 0.396026 0\nvt 0.983819 0.397089 0\nvt 0.681314 0.160124 0\nvt 0.061293 0.017013 0\nvt 0.6817 0.161767 0\nvt 0.67663 0.693744 0\nvt 0.680902 0.161784 0\nvt 0.062042 0.017546 0\nvt 0.682063 0.160305 0\nvt 0.683062 0.158727 0\nvt 0.063041 0.015311 0\nvt 0.063581 0.016047 0\nvt 0.685098 0.158089 0\nvt 0.065077 0.014402 0\nvt 0.065374 0.015247 0\nvt 0.687747 0.157778 0\nvt 0.067725 0.014149 0\nvt 0.067707 0.015023 0\nvt 0.682294 0.153624 0\nvt 0.679932 0.685585 0\nvt 0.685508 0.150604 0\nvt 0.6816 0.682565 0\nvt 0.686081 0.153211 0\nvt 0.406996 0.189672 0\nvt 0.693181 0.151029 0\nvt 0.407401 0.190449 0\nvt 0.407036 0.190215 0\nvt 0.415728 0.009033 0\nvt 0.693882 0.150962 0\nvt 0.407696 0.18995 0\nvt 0.416146 0.009259 0\nvt 0.407865 0.190367 0\nvt 0.407782 0.190544 0\nvt 0.416324 0.009416 0\nvt 0.653213 0.687219 0\nvt 0.414756 0.072182 0\nvt 0.405495 0.068276 0\nvt 0.65475 0.683964 0\nvt 0.412023 0.068928 0\nvt 0.405498 0.074655 0\nvt 0.656641 0.670603 0\nvt 0.409863 0.055566 0\nvt 0.405495 0.051263 0\nvt 0.655632 0.666753 0\nvt 0.409939 0.051716 0\nvt 0.405494 0.055639 0\nvt 0.656791 0.673577 0\nvt 0.409815 0.058541 0\nvt 0.405494 0.058377 0\nvt 0.656278 0.677018 0\nvt 0.40954 0.061981 0\nvt 0.405494 0.061967 0\nvt 0.650611 0.691116 0\nvt 0.416376 0.076079 0\nvt 0.65969 0.670214 0\nvt 0.659067 0.666443 0\nvt 0.660209 0.673345 0\nvt 0.66008 0.677823 0\nvt 0.659151 0.683003 0\nvt 0.65887 0.686253 0\nvt 0.654138 0.692506 0\nvt 0.663082 0.672136 0\nvt 0.666746 0.673466 0\nvt 0.971119 0.795727 0\nvt 0.663382 0.676627 0\nvt 0.214582 0.071625 0\nvt 0.971072 0.793542 0\nvt 0.666359 0.671281 0\nvt 0.97076 0.790749 0\nvt 0.666071 0.668487 0\nvt 0.662623 0.669626 0\nvt 0.666223 0.664552 0\nvt 0.970153 0.786813 0\nvt 0.973434 0.794935 0\nvt 0.973291 0.793312 0\nvt 0.973151 0.79047 0\nvt 0.972976 0.786146 0\nvt 0.975833 0.792833 0\nvt 0.975833 0.79477 0\nvt 0.975833 0.790217 0\nvt 0.975833 0.786 0\nvt 0.662336 0.665423 0\nvt 0.242196 0.012304 0\nvt 0.982387 0.012434 0\nvt 0.408337 0.19194 0\nvt 0.417723 0.008934 0\nvt 0.242223 0.011493 0\nvt 0.41691 0.008511 0\nvt 0.406702 0.189434 0\nvt 0.692888 0.150509 0\nvt 0.694182 0.149852 0\nvt 0.241855 0.010381 0\nvt 0.415795 0.007923 0\nvt 0.407476 0.191478 0\nvt 0.981527 0.012545 0\nvt 0.406756 0.190673 0\nvt 0.406526 0.190103 0\nvt 0.692412 0.150432 0\nvt 0.406226 0.189126 0\nvt 0.242888 0.010559 0\nvt 0.695215 0.149671 0\nvt 0.242888 0.011917 0\nvt 0.695214 0.149332 0\nvt 0.693995 0.149362 0\nvt 0.981375 0.012833 0\nvt 0.989207 0.497614 0\nvt 0.980537 0.012821 0\nvt 0.406487 0.190952 0\nvt 0.406138 0.19012 0\nvt 0.988372 0.497374 0\nvt 0.980459 0.013302 0\nvt 0.209325 0.150705 0\nvt 0.989294 0.498095 0\nvt 0.988028 0.497741 0\nvt 0.987068 0.497318 0\nvt 0.69168 0.150954 0\nvt 0.405494 0.188819 0\nvt 0.692512 0.149605 0\nvt 0.691238 0.150185 0\nvt 0.693817 0.148742 0\nvt 0.695214 0.148751 0\nvt 0.692408 0.148832 0\nvt 0.690066 0.149073 0\nvt 0.69049 0.15837 0\nvt 0.984917 0.396562 0\nvt 0.991247 0.877552 0\nvt 0.991183 0.876776 0\nvt 0.689748 0.157595 0\nvt 0.991611 0.876421 0\nvt 0.689849 0.15724 0\nvt 0.687675 0.157423 0\nvt 0.687814 0.15698 0\nvt 0.68503 0.157246 0\nvt 0.685016 0.157692 0\nvt 0.682617 0.157652 0\nvt 0.682847 0.158237 0\nvt 0.680993 0.159878 0\nvt 0.677473 0.691839 0\nvt 0.677209 0.69159 0\nvt 0.680571 0.159629 0\nvt 0.676217 0.693612 0\nvt 0.680503 0.161651 0\nvt 0.675912 0.693523 0\nvt 0.98516 0.374595 0\nvt 0.700138 0.158526 0\nvt 0.565194 0.083185 0\nvt 0.986078 0.374355 0\nvt 0.986028 0.374966 0\nvt 0.700741 0.157834 0\nvt 0.564946 0.082326 0\nvt 0.985217 0.373903 0\nvt 0.709107 0.160124 0\nvt 0.573312 0.085067 0\nvt 0.708719 0.161767 0\nvt 0.572562 0.085599 0\nvt 0.708357 0.160305 0\nvt 0.608703 0.693744 0\nvt 0.709518 0.161784 0\nvt 0.707361 0.158727 0\nvt 0.571566 0.083363 0\nvt 0.571024 0.084099 0\nvt 0.705326 0.158089 0\nvt 0.569531 0.082452 0\nvt 0.569232 0.083296 0\nvt 0.702677 0.157778 0\nvt 0.566882 0.082196 0\nvt 0.566899 0.083071 0\nvt 0.699934 0.15837 0\nvt 0.98493 0.374439 0\nvt 0.573247 0.102576 0\nvt 0.700675 0.157595 0\nvt 0.573312 0.101801 0\nvt 0.608124 0.69159 0\nvt 0.70985 0.159629 0\nvt 0.609116 0.693612 0\nvt 0.709916 0.161651 0\nvt 0.709428 0.159878 0\nvt 0.607861 0.691838 0\nvt 0.707806 0.157652 0\nvt 0.707576 0.158237 0\nvt 0.705408 0.157692 0\nvt 0.705394 0.157249 0\nvt 0.702749 0.157423 0\nvt 0.70261 0.15698 0\nvt 0.700575 0.15724 0\nvt 0.572884 0.101446 0\nvt 0.381091 0.00847 0\nvt 0.697247 0.151029 0\nvt 0.381051 0.009013 0\nvt 0.399836 0.009033 0\nvt 0.696547 0.150962 0\nvt 0.38039 0.008749 0\nvt 0.399418 0.009259 0\nvt 0.380222 0.009166 0\nvt 0.632115 0.687219 0\nvt 0.380339 0.072182 0\nvt 0.630569 0.683993 0\nvt 0.383071 0.068956 0\nvt 0.3896 0.068276 0\nvt 0.389603 0.074655 0\nvt 0.628682 0.670603 0\nvt 0.385229 0.055566 0\nvt 0.3896 0.051263 0\nvt 0.389599 0.055639 0\nvt 0.629691 0.666753 0\nvt 0.385153 0.051716 0\nvt 0.628533 0.673561 0\nvt 0.385276 0.058525 0\nvt 0.389599 0.058377 0\nvt 0.629045 0.677018 0\nvt 0.385553 0.061981 0\nvt 0.389599 0.061967 0\nvt 0.634719 0.691116 0\nvt 0.378722 0.076079 0\nvt 0.625636 0.670214 0\nvt 0.626259 0.666443 0\nvt 0.625117 0.673345 0\nvt 0.625246 0.677823 0\nvt 0.626176 0.68301 0\nvt 0.626462 0.686253 0\nvt 0.631196 0.692506 0\nvt 0.622402 0.691808 0\nvt 0.788943 0.011681 0\nvt 0.790124 0.009341 0\nvt 0.623309 0.689468 0\nvt 0.623163 0.692342 0\nvt 0.790668 0.012215 0\nvt 0.621696 0.693046 0\nvt 0.789244 0.012919 0\nvt 0.738603 0.653697 0\nvt 0.743183 0.655176 0\nvt 0.743203 0.655946 0\nvt 0.741807 0.655694 0\nvt 0.738996 0.653178 0\nvt 0.740278 0.654375 0\nvt 0.739985 0.654859 0\nvt 0.741801 0.655156 0\nvt 0.744534 0.655633 0\nvt 0.747684 0.6537 0\nvt 0.74729 0.653181 0\nvt 0.746008 0.654381 0\nvt 0.746301 0.654864 0\nvt 0.744548 0.655102 0\nvt 0.6133 0.70754 0\nvt 0.616775 0.697903 0\nvt 0.624961 0.699975 0\nvt 0.611359 0.703847 0\nvt 0.706835 0.1779 0\nvt 0.605992 0.709861 0\nvt 0.706885 0.173859 0\nvt 0.604515 0.705819 0\nvt 0.702233 0.179484 0\nvt 0.628195 0.695572 0\nvt 0.640875 0.035655 0\nvt 0.038365 0.021992 0\nvt 0.62462 0.697347 0\nvt 0.03926 0.018427 0\nvt 0.041414 0.018561 0\nvt 0.624755 0.698208 0\nvt 0.624868 0.696936 0\nvt 0.627972 0.695358 0\nvt 0.636242 0.035441 0\nvt 0.042998 0.02177 0\nvt 0.625163 0.687937 0\nvt 0.010058 0.011652 0\nvt 0.642639 0.02802 0\nvt 0.627852 0.690752 0\nvt 0.63679 0.030835 0\nvt 0.013918 0.011428 0\nvt 0.625388 0.686795 0\nvt 0.990984 0.895168 0\nvt 0.63878 0.026878 0\nvt 0.628237 0.691827 0\nvt 0.641625 0.03191 0\nvt 0.010109 0.016363 0\nvt 0.620438 0.685155 0\nvt 0.622161 0.685505 0\nvt 0.009853 0.014645 0\nvt 0.621474 0.685594 0\nvt 0.012105 0.01533 0\nvt 0.626149 0.691296 0\nvt 0.991885 0.89967 0\nvt 0.625676 0.68757 0\nvt 0.990882 0.895944 0\nvt 0.626227 0.69463 0\nvt 0.622173 0.694664 0\nvt 0.625026 0.695847 0\nvt 0.620888 0.691881 0\nvt 0.621252 0.694995 0\nvt 0.623509 0.687861 0\nvt 0.623415 0.685711 0\nvt 0.013138 0.013394 0\nvt 0.621128 0.688417 0\nvt 0.622587 0.688454 0\nvt 0.789832 0.008327 0\nvt 0.622861 0.689682 0\nvt 0.789284 0.009555 0\nvt 0.620591 0.695861 0\nvt 0.039639 0.014409 0\nvt 0.62016 0.696216 0\nvt 0.620002 0.691719 0\nvt 0.617241 0.688542 0\nvt 0.619874 0.688341 0\nvt 0.609357 0.679151 0\nvt 0.233081 0.084169 0\nvt 0.615411 0.680366 0\nvt 0.235175 0.078132 0\nvt 0.614595 0.684782 0\nvt 0.623015 0.683903 0\nvt 0.007946 0.013794 0\nvt 0.234741 0.073529 0\nvt 0.620027 0.680965 0\nvt 0.231618 0.078633 0\nvt 0.229929 0.083479 0\nvt 0.610049 0.675837 0\nvt 0.607304 0.675545 0\nvt 0.228716 0.086216 0\nvt 0.606715 0.678921 0\nvt 0.704676 0.14696 0\nvt 0.60552 0.678743 0\nvt 0.703709 0.146783 0\nvt 0.982655 0.033908 0\nvt 0.660584 0.698209 0\nvt 0.657368 0.695359 0\nvt 0.62035 0.035441 0\nvt 0.981067 0.037114 0\nvt 0.660472 0.696936 0\nvt 0.657141 0.695572 0\nvt 0.615717 0.035655 0\nvt 0.985701 0.037341 0\nvt 0.660717 0.697348 0\nvt 0.984809 0.033775 0\nvt 0.664896 0.685155 0\nvt 0.989041 0.521382 0\nvt 0.663862 0.685594 0\nvt 0.987044 0.520351 0\nvt 0.663173 0.685505 0\nvt 0.989294 0.519664 0\nvt 0.66364 0.693047 0\nvt 0.987596 0.543481 0\nvt 0.65919 0.691296 0\nvt 0.985227 0.54173 0\nvt 0.662173 0.692342 0\nvt 0.563954 0.165412 0\nvt 0.988118 0.542776 0\nvt 0.98623 0.538004 0\nvt 0.659662 0.68757 0\nvt 0.563598 0.162538 0\nvt 0.662027 0.689468 0\nvt 0.988475 0.539902 0\nvt 0.661828 0.687861 0\nvt 0.662749 0.688454 0\nvt 0.563889 0.161523 0\nvt 0.664208 0.688417 0\nvt 0.661922 0.685711 0\nvt 0.986009 0.518416 0\nvt 0.985227 0.51645 0\nvt 0.65995 0.686795 0\nvt 0.617809 0.026878 0\nvt 0.986129 0.537229 0\nvt 0.657098 0.691827 0\nvt 0.614967 0.03191 0\nvt 0.657488 0.690752 0\nvt 0.619802 0.030835 0\nvt 0.660171 0.687937 0\nvt 0.61395 0.02802 0\nvt 0.989086 0.51667 0\nvt 0.662935 0.691809 0\nvt 0.564778 0.164878 0\nvt 0.659112 0.69463 0\nvt 0.663164 0.694665 0\nvt 0.660312 0.695848 0\nvt 0.664448 0.691881 0\nvt 0.664085 0.694995 0\nvt 0.662476 0.689682 0\nvt 0.564437 0.162751 0\nvt 0.665461 0.688341 0\nvt 0.664746 0.695861 0\nvt 0.984434 0.029757 0\nvt 0.665176 0.696216 0\nvt 0.668147 0.692835 0\nvt 0.665334 0.691719 0\nvt 0.668094 0.688542 0\nvt 0.673769 0.688257 0\nvt 0.67074 0.684782 0\nvt 0.669922 0.680371 0\nvt 0.209135 0.078146 0\nvt 0.217151 0.084049 0\nvt 0.212704 0.078626 0\nvt 0.216965 0.079575 0\nvt 0.217232 0.076348 0\nvt 0.668119 0.67527 0\nvt 0.97091 0.797531 0\nvt 0.213008 0.074472 0\nvt 0.666238 0.677826 0\nvt 0.665304 0.680965 0\nvt 0.209566 0.073542 0\nvt 0.214486 0.083487 0\nvt 0.217543 0.086208 0\nvt 0.675974 0.679156 0\nvt 0.21126 0.084181 0\nvt 0.220277 0.08646 0\nvt 0.222198 0.084699 0\nvt 0.222238 0.086563 0\nvt 0.678024 0.675544 0\nvt 0.215712 0.086225 0\nvt 0.678561 0.682963 0\nvt 0.678612 0.678922 0\nvt 0.685802 0.146961 0\nvt 0.222239 0.087828 0\nvt 0.217979 0.087727 0\nvt 0.22044 0.087881 0\nvt 0.216181 0.08761 0\nvt 0.679413 0.675811 0\nvt 0.679801 0.678745 0\nvt 0.686765 0.146785 0\nvt 0.686717 0.14979 0\nvt 0.681962 0.68175 0\nvt 0.693611 0.141631 0\nvt 0.220559 0.089361 0\nvt 0.695291 0.141408 0\nvt 0.22224 0.089564 0\nvt 0.691574 0.142753 0\nvt 0.218523 0.089017 0\nvt 0.687619 0.149028 0\nvt 0.682069 0.680989 0\nvt 0.687626 0.146783 0\nvt 0.680715 0.678743 0\nvt 0.693781 0.142757 0\nvt 0.695291 0.142444 0\nvt 0.691729 0.143575 0\nvt 0.689933 0.144789 0\nvt 0.216513 0.088571 0\nvt 0.680377 0.676287 0\nvt 0.689565 0.144326 0\nvt 0.688252 0.146769 0\nvt 0.220247 0.08446 0\nvt 0.222156 0.080033 0\nvt 0.973668 0.796439 0\nvt 0.21999 0.077194 0\nvt 0.219924 0.079899 0\nvt 0.975833 0.796379 0\nvt 0.222155 0.0777 0\nvt 0.662349 0.68232 0\nvt 0.210441 0.070594 0\nvt 0.662317 0.683903 0\nvt 0.668561 0.697904 0\nvt 0.655087 0.697038 0\nvt 0.660376 0.699975 0\nvt 0.672035 0.70754 0\nvt 0.673975 0.703847 0\nvt 0.683588 0.1779 0\nvt 0.679339 0.709861 0\nvt 0.683539 0.173859 0\nvt 0.680816 0.705819 0\nvt 0.688192 0.179484 0\nvt 0.672868 0.696594 0\nvt 0.675378 0.701018 0\nvt 0.680965 0.703029 0\nvt 0.682917 0.171068 0\nvt 0.689595 0.172776 0\nvt 0.692532 0.179982 0\nvt 0.695214 0.173125 0\nvt 0.695213 0.180017 0\nvt 0.693192 0.173092 0\nvt 0.695214 0.170155 0\nvt 0.691563 0.169856 0\nvt 0.693414 0.170016 0\nvt 0.695214 0.16733 0\nvt 0.693972 0.162825 0\nvt 0.693688 0.167351 0\nvt 0.691393 0.167462 0\nvt 0.688101 0.170631 0\nvt 0.692763 0.162874 0\nvt 0.692635 0.155746 0\nvt 0.69343 0.157464 0\nvt 0.692062 0.158053 0\nvt 0.69322 0.160275 0\nvt 0.691896 0.160238 0\nvt 0.691357 0.162706 0\nvt 0.690364 0.166338 0\nvt 0.687131 0.168703 0\nvt 0.682866 0.169545 0\nvt 0.681021 0.701506 0\nvt 0.679934 0.167145 0\nvt 0.677088 0.699106 0\nvt 0.674937 0.695659 0\nvt 0.674635 0.693609 0\nvt 0.675766 0.691206 0\nvt 0.671936 0.693139 0\nvt 0.679633 0.688264 0\nvt 0.682188 0.156304 0\nvt 0.685215 0.155571 0\nvt 0.68812 0.155439 0\nvt 0.688604 0.153784 0\nvt 0.690238 0.156008 0\nvt 0.691014 0.154766 0\nvt 0.691493 0.157034 0\nvt 0.675783 0.69465 0\nvt 0.677448 0.697088 0\nvt 0.681284 0.165128 0\nvt 0.679621 0.698273 0\nvt 0.683461 0.166312 0\nvt 0.686474 0.166062 0\nvt 0.688716 0.164839 0\nvt 0.690015 0.162775 0\nvt 0.690772 0.16014 0\nvt 0.991885 0.879321 0\nvt 0.690823 0.158319 0\nvt 0.991646 0.877501 0\nvt 0.687757 0.151789 0\nvt 0.689259 0.152498 0\nvt 0.691492 0.153457 0\nvt 0.692796 0.154239 0\nvt 0.987116 0.500603 0\nvt 0.688876 0.150059 0\nvt 0.690053 0.150928 0\nvt 0.691865 0.152537 0\nvt 0.987154 0.498901 0\nvt 0.987838 0.499122 0\nvt 0.209245 0.152157 0\nvt 0.692514 0.152758 0\nvt 0.210138 0.151832 0\nvt 0.693407 0.153232 0\nvt 0.693644 0.154783 0\nvt 0.695214 0.162841 0\nvt 0.695214 0.160264 0\nvt 0.694274 0.160173 0\nvt 0.694385 0.157176 0\nvt 0.696456 0.162825 0\nvt 0.696154 0.160173 0\nvt 0.696042 0.157176 0\nvt 0.695214 0.157185 0\nvt 0.695214 0.154927 0\nvt 0.694697 0.154938 0\nvt 0.211514 0.151731 0\nvt 0.694783 0.153722 0\nvt 0.695214 0.153824 0\nvt 0.211946 0.151802 0\nvt 0.211946 0.150878 0\nvt 0.211238 0.150989 0\nvt 0.212706 0.149804 0\nvt 0.983839 0.013911 0\nvt 0.98308 0.013881 0\nvt 0.211947 0.149584 0\nvt 0.211187 0.149803 0\nvt 0.982321 0.013911 0\nvt 0.982202 0.012992 0\nvt 0.98308 0.012332 0\nvt 0.242889 0.012442 0\nvt 0.983081 0.012913 0\nvt 0.210998 0.149491 0\nvt 0.982131 0.013509 0\nvt 0.983081 0.013414 0\nvt 0.98125 0.013421 0\nvt 0.210116 0.150066 0\nvt 0.210385 0.150535 0\nvt 0.210538 0.151299 0\nvt 0.209486 0.1511 0\nvt 0.988898 0.498644 0\nvt 0.987875 0.4985 0\nvt 0.986987 0.498154 0\nvt 0.691536 0.15179 0\nvt 0.690345 0.150501 0\nvt 0.689221 0.149711 0\nvt 0.688288 0.148483 0\nvt 0.693736 0.144727 0\nvt 0.695292 0.144634 0\nvt 0.691638 0.145009 0\nvt 0.690304 0.145505 0\nvt 0.688763 0.146834 0\nvt 0.688793 0.147991 0\nvt 0.689262 0.147708 0\nvt 0.692048 0.148103 0\nvt 0.690512 0.147922 0\nvt 0.693699 0.148219 0\nvt 0.695214 0.148192 0\nvt 0.691927 0.147622 0\nvt 0.739837 0.655367 0\nvt 0.741486 0.656379 0\nvt 0.693576 0.147832 0\nvt 0.743124 0.65659 0\nvt 0.695214 0.147572 0\nvt 0.690533 0.147469 0\nvt 0.738444 0.653913 0\nvt 0.983773 0.012434 0\nvt 0.243582 0.012303 0\nvt 0.379751 0.01074 0\nvt 0.39784 0.008934 0\nvt 0.243554 0.011492 0\nvt 0.398654 0.008511 0\nvt 0.381384 0.008232 0\nvt 0.697541 0.150508 0\nvt 0.243921 0.01038 0\nvt 0.696247 0.149852 0\nvt 0.399769 0.007923 0\nvt 0.381331 0.009472 0\nvt 0.38156 0.008901 0\nvt 0.698016 0.150432 0\nvt 0.565517 0.181259 0\nvt 0.381859 0.007923 0\nvt 0.696433 0.149362 0\nvt 0.983959 0.012992 0\nvt 0.984785 0.012833 0\nvt 0.563686 0.182077 0\nvt 0.985623 0.012821 0\nvt 0.381601 0.00975 0\nvt 0.56452 0.181837 0\nvt 0.381948 0.008918 0\nvt 0.98403 0.013509 0\nvt 0.212896 0.149492 0\nvt 0.213776 0.150067 0\nvt 0.98491 0.013421 0\nvt 0.214567 0.150707 0\nvt 0.563598 0.182558 0\nvt 0.985701 0.013302 0\nvt 0.564865 0.182204 0\nvt 0.565825 0.181781 0\nvt 0.698685 0.150954 0\nvt 0.697915 0.149605 0\nvt 0.699215 0.150183 0\nvt 0.696612 0.148742 0\nvt 0.69802 0.148832 0\nvt 0.700449 0.149152 0\nvt 0.622244 0.672136 0\nvt 0.977431 0.990272 0\nvt 0.618574 0.673464 0\nvt 0.977477 0.988087 0\nvt 0.618961 0.671279 0\nvt 0.977785 0.985278 0\nvt 0.619253 0.668471 0\nvt 0.622703 0.669626 0\nvt 0.619102 0.664552 0\nvt 0.978392 0.98136 0\nvt 0.975116 0.989481 0\nvt 0.97526 0.987858 0\nvt 0.975396 0.985 0\nvt 0.975572 0.980692 0\nvt 0.972715 0.989316 0\nvt 0.972715 0.98738 0\nvt 0.972715 0.984763 0\nvt 0.972716 0.980546 0\nvt 0.62299 0.665423 0\nvt 0.621959 0.676569 0\nvt 0.229722 0.071603 0\nvt 0.222155 0.0777 0\nvt 0.972716 0.990926 0\nvt 0.62298 0.682326 0\nvt 0.233862 0.070584 0\nvt 0.231299 0.074455 0\nvt 0.619098 0.677794 0\nvt 0.977641 0.992077 0\nvt 0.22708 0.076347 0\nvt 0.617202 0.675269 0\nvt 0.227362 0.079592 0\nvt 0.22432 0.077192 0\nvt 0.974881 0.990986 0\nvt 0.224389 0.079897 0\nvt 0.222156 0.080033 0\nvt 0.224148 0.084548 0\nvt 0.222198 0.084699 0\nvt 0.227271 0.084044 0\nvt 0.224199 0.086458 0\nvt 0.222238 0.086563 0\nvt 0.226932 0.086203 0\nvt 0.224037 0.087879 0\nvt 0.226487 0.087712 0\nvt 0.605935 0.675819 0\nvt 0.228222 0.087581 0\nvt 0.696971 0.141631 0\nvt 0.223919 0.08936 0\nvt 0.69895 0.142757 0\nvt 0.225899 0.089002 0\nvt 0.604971 0.676295 0\nvt 0.700942 0.144334 0\nvt 0.227891 0.088543 0\nvt 0.696802 0.142757 0\nvt 0.698794 0.143579 0\nvt 0.700573 0.144796 0\nvt 0.702225 0.146767 0\nvt 0.70285 0.146781 0\nvt 0.604606 0.678741 0\nvt 0.702836 0.149029 0\nvt 0.603259 0.680989 0\nvt 0.703728 0.149792 0\nvt 0.603372 0.681752 0\nvt 0.704929 0.150604 0\nvt 0.603728 0.682564 0\nvt 0.606771 0.682963 0\nvt 0.611566 0.688257 0\nvt 0.617189 0.692835 0\nvt 0.630249 0.697038 0\nvt 0.6134 0.693138 0\nvt 0.612468 0.696593 0\nvt 0.609957 0.701018 0\nvt 0.604366 0.703028 0\nvt 0.707507 0.171068 0\nvt 0.700833 0.172776 0\nvt 0.697894 0.179982 0\nvt 0.697237 0.173092 0\nvt 0.698865 0.169855 0\nvt 0.697014 0.170016 0\nvt 0.696741 0.167351 0\nvt 0.699035 0.167462 0\nvt 0.702326 0.17063 0\nvt 0.697664 0.162874 0\nvt 0.700064 0.166337 0\nvt 0.703296 0.168703 0\nvt 0.707558 0.169545 0\nvt 0.60431 0.701505 0\nvt 0.608246 0.699105 0\nvt 0.710486 0.167145 0\nvt 0.610398 0.695659 0\nvt 0.6107 0.693609 0\nvt 0.609569 0.691206 0\nvt 0.708129 0.153624 0\nvt 0.6054 0.685585 0\nvt 0.605699 0.688264 0\nvt 0.708235 0.156303 0\nvt 0.705209 0.155571 0\nvt 0.704349 0.15321 0\nvt 0.702305 0.155438 0\nvt 0.701822 0.153784 0\nvt 0.700188 0.156008 0\nvt 0.698933 0.157034 0\nvt 0.699413 0.154766 0\nvt 0.697792 0.155746 0\nvt 0.698364 0.158053 0\nvt 0.696996 0.157464 0\nvt 0.70267 0.151789 0\nvt 0.701168 0.152498 0\nvt 0.698936 0.153457 0\nvt 0.697632 0.154239 0\nvt 0.565776 0.185066 0\nvt 0.696784 0.154783 0\nvt 0.701571 0.150057 0\nvt 0.700374 0.150928 0\nvt 0.698563 0.152537 0\nvt 0.565739 0.183365 0\nvt 0.565054 0.183585 0\nvt 0.214645 0.152159 0\nvt 0.697914 0.152758 0\nvt 0.213753 0.151834 0\nvt 0.697022 0.153232 0\nvt 0.695646 0.153722 0\nvt 0.212377 0.151731 0\nvt 0.212654 0.150989 0\nvt 0.213354 0.151301 0\nvt 0.213507 0.150536 0\nvt 0.214406 0.151102 0\nvt 0.563994 0.183108 0\nvt 0.565018 0.182963 0\nvt 0.565906 0.182617 0\nvt 0.698892 0.15179 0\nvt 0.700082 0.150501 0\nvt 0.701227 0.149709 0\nvt 0.702176 0.148481 0\nvt 0.696734 0.144713 0\nvt 0.698863 0.145007 0\nvt 0.700213 0.145509 0\nvt 0.701709 0.146831 0\nvt 0.701678 0.147987 0\nvt 0.701209 0.147704 0\nvt 0.698394 0.148098 0\nvt 0.699953 0.147919 0\nvt 0.696729 0.148219 0\nvt 0.698534 0.147623 0\nvt 0.746444 0.655361 0\nvt 0.744763 0.656378 0\nvt 0.696853 0.147832 0\nvt 0.699933 0.147467 0\nvt 0.747843 0.653916 0\nvt 0.695731 0.154938 0\nvt 0.697206 0.160275 0\nvt 0.69853 0.160238 0\nvt 0.699069 0.162703 0\nvt 0.699601 0.158319 0\nvt 0.572848 0.102525 0\nvt 0.699652 0.160144 0\nvt 0.572609 0.10435 0\nvt 0.700412 0.162773 0\nvt 0.701709 0.164827 0\nvt 0.703943 0.166072 0\nvt 0.706962 0.166312 0\nvt 0.605709 0.698273 0\nvt 0.607885 0.697088 0\nvt 0.709137 0.165127 0\nvt 0.609551 0.694649 0\nvt 0.609422 0.693523 0\nvt 0.362125 0.009702 0\nvt 0.690657 0.146966 0\nvt 0.36267 0.008893 0\nvt 0.691086 0.147292 0\nvt 0.3631 0.00921 0\nvt 0.691846 0.146611 0\nvt 0.36386 0.007923 0\nvt 0.692151 0.147128 0\nvt 0.693733 0.146364 0\nvt 0.693891 0.146979 0\nvt 0.695292 0.146336 0\nvt 0.695272 0.146966 0\nvt 0.696638 0.146997 0\nvt 0.696796 0.146382 0\nvt 0.698315 0.147125 0\nvt 0.698641 0.146614 0\nvt 0.344046 0.007923 0\nvt 0.344786 0.009195 0\nvt 0.69938 0.147289 0\nvt 0.699811 0.146963 0\nvt 0.345217 0.008878 0\nvt 0.345761 0.009689 0\nvt 0.69377 0.145019 0\nvt 0.914341 0.626119 0\nvt 0.915862 0.626143 0\nvt 0.695292 0.144896 0\nvt 0.691657 0.145509 0\nvt 0.690473 0.146128 0\nvt 0.693594 0.145553 0\nvt 0.914164 0.626934 0\nvt 0.695292 0.145491 0\nvt 0.915863 0.627261 0\nvt 0.691623 0.14624 0\nvt 0.912193 0.626021 0\nvt 0.690591 0.146636 0\nvt 0.698842 0.145509 0\nvt 0.917349 0.626085 0\nvt 0.696778 0.145031 0\nvt 0.699878 0.146634 0\nvt 0.700013 0.146131 0\nvt 0.696948 0.145567 0\nvt 0.917518 0.626892 0\nvt 0.698866 0.146242 0\nvt 0.919436 0.626011 0\nvt 0.689608 0.162307 0\nvt 0.985823 0.400499 0\nvt 0.984294 0.398566 0\nvt 0.69023 0.160223 0\nvt 0.985222 0.398415 0\nvt 0.984821 0.400363 0\nvt 0.687901 0.164112 0\nvt 0.988521 0.225538 0\nvt 0.986078 0.402304 0\nvt 0.988481 0.224505 0\nvt 0.985042 0.401979 0\nvt 0.685631 0.164695 0\nvt 0.98625 0.225109 0\nvt 0.986484 0.22413 0\nvt 0.68022 0.696653 0\nvt 0.683368 0.164692 0\nvt 0.983987 0.223936 0\nvt 0.984489 0.223094 0\nvt 0.678348 0.69596 0\nvt 0.982294 0.22207 0\nvt 0.983 0.221452 0\nvt 0.676537 0.694487 0\nvt 0.680895 0.162527 0\nvt 0.981515 0.220263 0\nvt 0.681699 0.16242 0\nvt 0.982318 0.219861 0\nvt 0.689792 0.162633 0\nvt 0.690473 0.160181 0\nvt 0.688433 0.164628 0\nvt 0.686182 0.165463 0\nvt 0.67974 0.69757 0\nvt 0.683396 0.165609 0\nvt 0.677744 0.696457 0\nvt 0.676083 0.69455 0\nvt 0.700816 0.162308 0\nvt 0.984021 0.378377 0\nvt 0.985553 0.376447 0\nvt 0.985027 0.37824 0\nvt 0.7002 0.160235 0\nvt 0.98462 0.376304 0\nvt 0.702519 0.16411 0\nvt 0.9787 0.082952 0\nvt 0.983771 0.380179 0\nvt 0.97875 0.081918 0\nvt 0.984809 0.37983 0\nvt 0.704793 0.164695 0\nvt 0.980974 0.082521 0\nvt 0.980739 0.081541 0\nvt 0.605113 0.696653 0\nvt 0.707059 0.164692 0\nvt 0.98324 0.081343 0\nvt 0.982735 0.080504 0\nvt 0.606984 0.69596 0\nvt 0.984928 0.079478 0\nvt 0.984222 0.078861 0\nvt 0.608797 0.694487 0\nvt 0.709519 0.162526 0\nvt 0.985701 0.07767 0\nvt 0.708721 0.162419 0\nvt 0.984902 0.077269 0\nvt 0.609251 0.69455 0\nvt 0.607589 0.696456 0\nvt 0.605591 0.697569 0\nvt 0.707027 0.165609 0\nvt 0.704234 0.165473 0\nvt 0.701995 0.164609 0\nvt 0.700634 0.162631 0\nvt 0.69995 0.160188 0\n\nf 1/2 2/3 3/5 \nf 1/2 3/5 4/7 \nf 3/5 2/3 5/9 \nf 3/4 5/8 6/10 \nf 7/11 6/10 5/8 \nf 7/11 8/12 6/10 \nf 7/11 9/13 8/12 \nf 7/11 10/14 9/13 \nf 1/1 11/15 12/16 \nf 1/1 4/6 11/15 \nf 12/16 11/15 13/17 \nf 12/16 13/17 14/18 \nf 15/19 16/20 17/22 \nf 15/19 17/22 18/23 \nf 16/20 19/25 17/22 \nf 16/20 20/27 19/25 \nf 20/26 21/28 19/24 \nf 20/26 22/29 21/28 \nf 22/29 23/30 21/28 \nf 22/29 24/31 23/30 \nf 17/22 25/32 18/23 \nf 17/22 26/33 25/32 \nf 21/28 23/30 27/34 \nf 21/28 27/34 28/35 \nf 19/24 21/28 28/35 \nf 19/24 28/35 29/36 \nf 17/21 19/24 29/36 \nf 26/33 30/37 25/32 \nf 26/33 31/39 30/37 \nf 32/41 31/39 26/33 \nf 32/41 33/43 31/39 \nf 34/44 33/42 32/40 \nf 32/40 29/36 34/44 \nf 26/33 17/22 32/41 \nf 32/40 17/21 29/36 \nf 29/36 35/47 34/44 \nf 28/35 35/47 29/36 \nf 35/46 36/48 34/45 \nf 30/37 31/39 37/49 \nf 30/37 37/49 38/50 \nf 39/52 37/49 31/39 \nf 39/51 31/38 33/42 \nf 39/51 33/42 34/44 \nf 39/51 34/44 40/53 \nf 34/45 36/48 41/54 \nf 34/44 41/55 40/53 \nf 36/48 42/56 41/54 \nf 36/48 43/57 42/56 \nf 36/48 44/58 43/57 \nf 43/57 44/58 45/59 \nf 43/57 45/59 46/60 \nf 45/59 44/58 47/61 \nf 45/59 47/61 48/62 \nf 43/57 46/60 49/63 \nf 43/57 49/63 42/56 \nf 48/62 47/61 50/64 \nf 48/62 50/64 51/65 \nf 47/61 52/67 50/64 \nf 44/58 52/67 47/61 \nf 52/67 53/69 50/64 \nf 52/66 54/70 53/68 \nf 54/70 55/71 53/68 \nf 54/70 56/72 55/71 \nf 51/65 50/64 57/73 \nf 51/65 57/73 58/74 \nf 50/64 53/69 59/76 \nf 50/64 59/76 57/73 \nf 53/68 55/71 60/77 \nf 53/68 60/77 59/75 \nf 61/78 62/79 63/81 \nf 61/78 63/81 64/82 \nf 65/84 61/78 64/82 \nf 65/84 64/82 66/85 \nf 64/83 63/80 67/86 \nf 67/87 68/88 64/82 \nf 68/88 66/85 64/82 \nf 67/87 69/89 68/88 \nf 69/89 70/90 68/88 \nf 71/91 70/90 69/89 \nf 71/91 72/93 70/90 \nf 73/95 72/94 71/92 \nf 73/95 74/96 72/94 \nf 75/97 72/94 74/96 \nf 75/97 76/99 72/94 \nf 70/90 72/93 76/98 \nf 70/90 76/98 77/100 \nf 68/88 70/90 77/100 \nf 68/88 78/101 66/85 \nf 79/102 78/101 68/88 \nf 79/102 68/88 77/100 \nf 69/89 67/87 80/103 \nf 69/89 80/103 81/105 \nf 73/95 71/92 81/104 \nf 71/91 69/89 81/105 \nf 73/95 81/104 82/106 \nf 76/99 75/97 83/108 \nf 77/100 76/98 83/107 \nf 77/100 83/107 84/109 \nf 79/102 77/100 84/109 \nf 79/102 84/109 85/110 \nf 84/109 83/107 86/111 \nf 84/109 86/111 87/112 \nf 85/110 84/109 87/112 \nf 85/110 87/112 88/113 \nf 89/115 67/86 90/116 \nf 67/87 89/114 91/117 \nf 67/87 91/117 80/103 \nf 67/86 63/80 90/116 \nf 92/119 93/120 94/121 \nf 92/118 94/122 95/123 \nf 96/124 92/118 95/123 \nf 97/126 96/124 95/123 \nf 97/126 95/123 98/127 \nf 99/129 97/125 98/128 \nf 99/129 98/128 100/130 \nf 93/120 101/131 94/121 \nf 93/120 102/134 101/131 \nf 93/120 103/136 102/134 \nf 103/135 104/137 102/133 \nf 104/137 105/138 102/133 \nf 104/137 106/140 105/138 \nf 106/140 107/142 105/138 \nf 106/139 108/144 107/143 \nf 108/144 109/146 107/143 \nf 108/144 110/147 109/146 \nf 101/131 102/134 111/149 \nf 101/132 111/148 112/151 \nf 102/133 105/138 113/152 \nf 102/133 113/152 111/148 \nf 105/138 107/142 114/154 \nf 105/138 114/154 113/152 \nf 107/141 109/145 115/155 \nf 107/141 115/155 114/153 \nf 112/151 111/148 116/156 \nf 112/151 116/156 117/157 \nf 112/151 117/157 118/159 \nf 119/161 117/157 116/156 \nf 119/161 116/156 120/162 \nf 111/148 113/152 120/162 \nf 111/148 120/162 116/156 \nf 121/164 119/161 120/162 \nf 113/152 114/154 121/164 \nf 113/152 121/164 120/162 \nf 121/163 114/153 115/155 \nf 121/163 122/165 119/160 \nf 115/155 122/165 121/163 \nf 117/157 123/166 118/159 \nf 123/167 124/168 118/158 \nf 112/150 118/158 124/168 \nf 123/167 125/171 124/168 \nf 117/157 126/172 123/166 \nf 127/174 126/172 117/157 \nf 127/174 117/157 119/161 \nf 122/165 127/173 119/160 \nf 122/165 128/175 127/173 \nf 125/170 129/176 124/169 \nf 125/170 130/177 129/176 \nf 130/177 131/179 129/176 \nf 130/177 132/181 131/179 \nf 132/180 133/182 131/178 \nf 132/180 134/183 133/182 \nf 124/169 129/176 135/184 \nf 135/184 129/176 131/179 \nf 124/169 135/184 136/186 \nf 137/187 136/186 135/184 \nf 137/188 112/150 136/185 \nf 112/150 124/168 136/185 \nf 112/150 137/188 138/189 \nf 138/190 137/187 139/191 \nf 137/187 135/184 139/191 \nf 138/190 139/191 140/192 \nf 139/191 141/193 140/192 \nf 139/191 142/196 141/193 \nf 141/194 142/195 143/197 \nf 131/178 133/182 143/197 \nf 139/191 135/184 144/199 \nf 139/191 144/199 142/196 \nf 143/197 142/195 144/198 \nf 135/184 131/179 144/199 \nf 131/178 143/197 144/198 \nf 100/130 141/194 143/197 \nf 100/130 98/128 141/194 \nf 98/127 140/192 141/193 \nf 98/127 95/123 140/192 \nf 140/192 95/123 94/122 \nf 140/192 94/122 138/190 \nf 94/121 112/150 138/189 \nf 94/121 101/131 112/150 \nf 36/48 145/200 44/58 \nf 44/58 145/200 52/67 \nf 145/201 54/70 52/66 \nf 145/201 146/202 54/70 \nf 147/203 54/70 146/202 \nf 146/202 148/204 147/203 \nf 146/202 149/205 148/204 \nf 149/205 146/202 145/201 \nf 149/205 27/34 148/204 \nf 149/205 28/35 27/34 \nf 147/203 56/72 54/70 \nf 28/35 149/205 35/47 \nf 35/47 149/205 145/201 \nf 36/48 35/46 145/200 \nf 150/206 151/208 152/209 \nf 150/206 153/210 151/208 \nf 151/208 154/212 152/209 \nf 151/207 155/213 154/211 \nf 156/214 154/211 155/213 \nf 156/214 155/213 157/215 \nf 156/214 157/215 158/216 \nf 156/214 158/216 159/217 \nf 150/206 160/218 161/220 \nf 150/206 161/220 153/210 \nf 160/219 162/221 163/223 \nf 160/218 163/222 161/220 \nf 164/224 165/225 166/227 \nf 164/224 166/227 167/228 \nf 167/228 166/227 168/230 \nf 167/228 168/230 169/232 \nf 169/231 168/229 170/233 \nf 169/231 170/233 171/234 \nf 171/234 170/233 23/30 \nf 171/234 23/30 24/31 \nf 166/227 165/225 172/235 \nf 166/227 172/235 173/236 \nf 170/233 27/34 23/30 \nf 170/233 174/237 27/34 \nf 168/229 174/237 170/233 \nf 168/229 175/238 174/237 \nf 166/226 175/238 168/229 \nf 173/236 172/235 176/239 \nf 173/236 176/239 177/240 \nf 178/242 173/236 177/240 \nf 178/242 177/240 179/244 \nf 180/245 178/241 179/243 \nf 178/241 180/245 175/238 \nf 173/236 178/242 166/227 \nf 178/241 175/238 166/226 \nf 175/238 180/245 181/247 \nf 174/237 175/238 181/247 \nf 181/248 180/246 182/249 \nf 176/239 183/251 177/240 \nf 176/239 184/252 183/251 \nf 185/254 179/244 177/240 \nf 185/254 177/240 183/251 \nf 185/253 180/245 179/243 \nf 185/253 186/255 180/245 \nf 180/245 186/255 187/256 \nf 180/245 187/256 182/250 \nf 182/250 187/256 188/258 \nf 182/249 188/257 189/259 \nf 182/249 189/259 190/260 \nf 189/259 191/261 190/260 \nf 189/259 192/262 191/261 \nf 191/261 193/263 190/260 \nf 191/261 194/264 193/263 \nf 189/259 188/257 195/265 \nf 189/259 195/265 192/262 \nf 194/264 196/266 193/263 \nf 194/264 197/267 196/266 \nf 193/263 196/266 198/268 \nf 190/260 193/263 198/268 \nf 198/268 196/266 199/271 \nf 198/269 199/270 200/272 \nf 200/272 199/270 55/71 \nf 200/272 55/71 56/72 \nf 197/267 201/273 196/266 \nf 197/267 202/274 201/273 \nf 196/266 201/273 203/276 \nf 196/266 203/276 199/271 \nf 199/270 203/275 60/77 \nf 199/270 60/77 55/71 \nf 204/277 205/278 206/281 \nf 204/277 206/281 207/282 \nf 65/84 205/278 204/277 \nf 65/84 66/85 205/278 \nf 205/279 208/283 206/280 \nf 208/284 205/278 209/285 \nf 209/285 205/278 66/85 \nf 208/284 209/285 210/286 \nf 210/286 209/285 211/287 \nf 212/288 210/286 211/287 \nf 212/288 211/287 213/290 \nf 214/292 212/289 213/291 \nf 214/292 213/291 215/293 \nf 216/294 215/293 213/291 \nf 216/294 213/291 217/296 \nf 211/287 217/295 213/290 \nf 211/287 218/297 217/295 \nf 209/285 218/297 211/287 \nf 209/285 66/85 78/101 \nf 79/102 218/297 209/285 \nf 79/102 209/285 78/101 \nf 210/286 219/298 208/284 \nf 210/286 220/300 219/298 \nf 214/292 220/299 212/289 \nf 212/288 220/300 210/286 \nf 214/292 221/301 220/299 \nf 217/296 222/303 216/294 \nf 218/297 222/302 217/295 \nf 218/297 223/304 222/302 \nf 79/102 223/304 218/297 \nf 79/102 85/110 223/304 \nf 223/304 224/305 222/302 \nf 223/304 225/306 224/305 \nf 85/110 225/306 223/304 \nf 85/110 88/113 225/306 \nf 226/308 227/309 208/283 \nf 208/284 228/310 226/307 \nf 208/284 219/298 228/310 \nf 208/283 227/309 206/280 \nf 229/312 230/314 231/315 \nf 232/316 230/313 229/311 \nf 233/317 232/316 229/311 \nf 234/319 232/316 233/317 \nf 234/319 235/321 232/316 \nf 236/322 235/320 234/318 \nf 236/322 237/323 235/320 \nf 230/314 238/324 231/315 \nf 231/315 238/324 239/327 \nf 231/315 239/327 240/329 \nf 240/328 239/326 241/330 \nf 241/330 239/326 242/331 \nf 241/330 242/331 243/332 \nf 243/332 242/331 244/334 \nf 243/332 244/334 245/337 \nf 245/336 244/333 246/338 \nf 245/335 246/339 247/340 \nf 238/324 248/342 239/327 \nf 238/325 249/344 248/341 \nf 239/326 248/341 250/345 \nf 239/326 250/345 242/331 \nf 242/331 250/345 251/347 \nf 242/331 251/347 244/334 \nf 244/333 251/346 252/348 \nf 244/333 252/348 246/338 \nf 249/344 253/349 248/341 \nf 249/344 254/350 253/349 \nf 249/344 255/352 254/350 \nf 256/354 253/349 254/350 \nf 256/354 257/355 253/349 \nf 248/341 253/349 257/355 \nf 248/341 257/355 250/345 \nf 258/357 257/355 256/354 \nf 250/345 257/355 258/357 \nf 250/345 258/357 251/347 \nf 258/356 252/348 251/346 \nf 258/356 256/353 259/358 \nf 252/348 258/356 259/358 \nf 254/350 255/352 260/359 \nf 260/360 255/351 261/361 \nf 249/343 261/361 255/351 \nf 260/360 261/361 262/364 \nf 254/350 260/359 263/365 \nf 264/367 256/354 254/350 \nf 264/367 254/350 263/365 \nf 259/358 256/353 264/366 \nf 259/358 264/366 265/368 \nf 262/363 261/362 266/369 \nf 262/363 266/369 267/370 \nf 267/370 266/369 268/372 \nf 267/370 268/372 269/374 \nf 269/373 268/371 270/375 \nf 269/373 270/375 271/376 \nf 261/362 272/377 266/369 \nf 272/377 268/372 266/369 \nf 261/362 273/379 272/377 \nf 274/380 272/377 273/379 \nf 274/381 273/378 249/343 \nf 249/343 273/378 261/361 \nf 275/383 274/381 249/343 \nf 276/384 274/380 275/382 \nf 274/380 276/384 272/377 \nf 276/384 275/382 277/385 \nf 278/387 276/384 277/385 \nf 278/387 279/389 276/384 \nf 280/390 279/388 278/386 \nf 268/371 280/390 270/375 \nf 276/384 279/389 281/392 \nf 276/384 281/392 272/377 \nf 280/390 281/391 279/388 \nf 272/377 281/392 268/372 \nf 268/371 281/391 280/390 \nf 230/314 275/383 249/343 \nf 230/313 277/385 275/382 \nf 230/314 249/343 238/324 \nf 230/313 232/316 277/385 \nf 277/385 232/316 235/321 \nf 277/385 235/321 278/387 \nf 278/386 235/320 237/323 \nf 278/386 237/323 280/390 \nf 182/249 282/393 181/248 \nf 181/247 282/394 283/395 \nf 174/237 181/247 283/395 \nf 283/395 27/34 174/237 \nf 283/395 148/204 27/34 \nf 284/396 148/204 283/395 \nf 283/395 282/394 284/396 \nf 284/396 147/203 148/204 \nf 147/203 284/396 200/272 \nf 282/394 200/272 284/396 \nf 147/203 200/272 56/72 \nf 282/394 198/269 200/272 \nf 190/260 198/268 282/393 \nf 182/249 190/260 282/393 \nf 285/397 286/399 287/400 \nf 285/397 287/400 288/403 \nf 287/401 286/398 289/404 \nf 287/401 289/404 290/406 \nf 286/399 285/397 291/407 \nf 286/399 291/407 292/409 \nf 288/403 293/411 285/397 \nf 288/403 294/413 293/411 \nf 286/399 292/409 295/414 \nf 286/398 295/415 289/404 \nf 292/410 291/408 296/416 \nf 292/409 296/417 297/418 \nf 296/416 298/420 297/419 \nf 296/416 299/422 298/420 \nf 299/422 300/424 298/420 \nf 299/422 301/426 300/424 \nf 301/425 302/427 300/423 \nf 303/430 299/422 296/416 \nf 303/430 296/416 304/433 \nf 304/433 296/416 291/408 \nf 304/433 291/408 305/434 \nf 299/422 303/430 306/438 \nf 299/422 306/438 301/426 \nf 305/435 291/407 285/397 \nf 305/435 285/397 307/439 \nf 301/426 306/438 308/441 \nf 301/425 308/440 302/427 \nf 307/439 285/397 293/411 \nf 308/441 306/438 309/442 \nf 308/441 309/442 310/444 \nf 311/446 308/440 310/445 \nf 311/446 310/445 312/447 \nf 306/438 303/430 313/448 \nf 306/438 313/448 314/451 \nf 303/430 304/433 315/453 \nf 303/430 315/453 316/455 \nf 304/431 317/456 315/452 \nf 305/435 307/439 318/457 \nf 315/452 317/456 319/459 \nf 312/447 310/445 320/460 \nf 312/447 320/460 321/462 \nf 310/444 322/463 320/461 \nf 310/444 309/442 322/463 \nf 323/467 321/462 320/460 \nf 323/467 320/460 322/465 \nf 316/455 315/453 324/469 \nf 316/455 324/469 325/472 \nf 326/473 325/471 324/468 \nf 315/453 327/477 324/469 \nf 314/451 313/448 328/478 \nf 314/451 328/478 329/482 \nf 330/483 314/450 329/481 \nf 331/485 314/450 330/483 \nf 331/485 306/437 314/450 \nf 330/483 329/481 332/487 \nf 332/486 329/480 328/479 \nf 332/486 328/479 333/488 \nf 334/491 333/488 328/479 \nf 334/491 335/493 333/488 \nf 313/449 335/492 334/490 \nf 313/449 336/494 335/492 \nf 303/429 336/494 313/449 \nf 303/429 337/496 336/494 \nf 313/448 334/489 328/478 \nf 338/497 339/499 340/502 \nf 338/497 340/502 341/503 \nf 341/504 340/500 342/505 \nf 343/507 341/504 342/505 \nf 343/507 342/505 344/508 \nf 343/507 344/508 345/509 \nf 343/507 345/509 346/511 \nf 347/512 346/511 345/509 \nf 347/512 345/509 348/513 \nf 346/510 349/514 343/506 \nf 349/514 341/503 343/506 \nf 346/510 350/518 349/514 \nf 349/514 351/519 341/503 \nf 341/503 351/519 338/497 \nf 351/519 352/521 338/497 \nf 346/511 347/512 353/524 \nf 346/510 353/523 350/518 \nf 350/517 353/522 354/525 \nf 350/517 354/525 355/526 \nf 349/515 350/516 356/527 \nf 349/515 356/527 357/528 \nf 351/519 349/514 358/530 \nf 351/519 358/530 359/532 \nf 352/521 351/519 360/534 \nf 352/520 360/533 361/535 \nf 355/526 354/525 362/536 \nf 355/526 362/536 363/537 \nf 355/526 363/537 364/538 \nf 361/535 360/533 365/539 \nf 361/535 365/539 366/540 \nf 360/533 367/541 365/539 \nf 357/528 356/527 368/542 \nf 357/528 368/542 369/543 \nf 356/527 370/544 368/542 \nf 359/531 358/529 371/545 \nf 359/531 371/545 372/546 \nf 358/529 373/547 371/545 \nf 374/548 375/550 376/552 \nf 377/555 375/550 374/548 \nf 377/555 378/557 375/550 \nf 379/559 378/556 377/554 \nf 379/558 377/553 374/549 \nf 379/559 318/457 378/556 \nf 305/435 318/457 379/559 \nf 304/433 305/434 379/558 \nf 304/433 379/558 380/561 \nf 380/561 379/558 374/549 \nf 380/561 374/549 381/564 \nf 374/548 376/552 381/563 \nf 382/566 304/432 380/560 \nf 382/566 380/560 383/567 \nf 383/567 380/560 381/562 \nf 383/567 381/562 376/551 \nf 306/436 331/484 384/568 \nf 306/436 384/568 309/443 \nf 309/443 384/568 385/569 \nf 309/443 385/569 386/571 \nf 385/569 322/464 386/571 \nf 385/569 323/466 322/464 \nf 309/442 386/570 322/463 \nf 304/431 382/565 317/456 \nf 337/495 303/428 316/454 \nf 337/495 316/454 387/572 \nf 387/572 316/454 325/470 \nf 387/572 325/470 326/474 \nf 315/452 319/459 327/476 \nf 327/475 319/458 388/573 \nf 327/475 388/573 324/468 \nf 326/473 324/468 388/573 \nf 298/421 300/423 389/574 \nf 298/421 389/574 390/576 \nf 300/423 391/577 389/574 \nf 300/423 392/578 391/577 \nf 297/419 298/420 390/575 \nf 297/419 390/575 393/580 \nf 292/409 297/418 393/579 \nf 292/409 393/579 394/581 \nf 295/414 292/409 394/581 \nf 295/414 394/581 395/582 \nf 302/427 392/578 300/423 \nf 302/427 396/583 392/578 \nf 396/583 302/427 308/440 \nf 396/583 308/440 311/446 \nf 348/513 345/509 397/584 \nf 348/513 397/584 398/585 \nf 345/509 399/586 397/584 \nf 345/509 344/508 399/586 \nf 288/403 287/400 400/587 \nf 288/402 400/588 401/589 \nf 287/400 402/590 400/587 \nf 287/400 290/405 402/590 \nf 294/412 288/402 401/589 \nf 401/589 400/588 403/592 \nf 401/589 403/592 404/594 \nf 400/587 405/595 403/591 \nf 400/587 402/590 405/595 \nf 403/591 405/595 406/597 \nf 403/591 406/597 404/593 \nf 407/598 406/597 405/595 \nf 407/599 408/600 406/596 \nf 402/590 407/598 405/595 \nf 340/501 339/498 409/601 \nf 340/501 409/601 410/602 \nf 411/604 340/500 410/603 \nf 411/604 410/603 412/605 \nf 412/605 410/603 413/607 \nf 410/602 414/608 413/606 \nf 410/602 409/601 414/608 \nf 412/605 413/607 415/609 \nf 409/601 416/610 414/608 \nf 416/610 417/611 414/608 \nf 414/608 417/611 413/606 \nf 340/500 411/604 342/505 \nf 418/612 419/614 420/615 \nf 418/612 420/615 421/617 \nf 420/616 422/619 421/618 \nf 420/616 423/621 422/619 \nf 421/617 424/622 418/612 \nf 421/617 425/624 424/622 \nf 419/614 418/612 426/626 \nf 419/614 426/626 427/628 \nf 421/618 422/619 428/630 \nf 421/617 428/629 425/624 \nf 425/625 429/631 424/623 \nf 425/624 430/633 429/632 \nf 429/631 430/634 431/635 \nf 429/631 431/635 432/637 \nf 432/637 431/635 433/639 \nf 432/637 433/639 434/640 \nf 434/641 433/638 435/642 \nf 436/645 429/631 432/637 \nf 436/645 437/648 429/631 \nf 437/648 424/623 429/631 \nf 437/648 438/650 424/623 \nf 432/637 434/640 439/653 \nf 432/637 439/653 436/645 \nf 438/649 418/612 424/622 \nf 438/649 440/654 418/612 \nf 440/654 426/626 418/612 \nf 434/641 435/642 441/655 \nf 434/640 441/656 439/653 \nf 441/656 442/658 439/653 \nf 441/656 443/659 442/658 \nf 444/661 443/660 441/655 \nf 444/661 445/662 443/660 \nf 439/653 446/663 436/645 \nf 439/653 447/665 446/663 \nf 436/645 448/668 437/648 \nf 436/645 449/670 448/668 \nf 437/646 448/667 450/671 \nf 437/648 451/672 438/650 \nf 437/648 452/675 451/672 \nf 438/649 451/673 453/676 \nf 438/649 453/676 440/654 \nf 451/673 454/678 453/676 \nf 451/673 455/681 454/678 \nf 448/667 456/682 450/671 \nf 445/662 457/685 443/660 \nf 445/662 458/686 457/685 \nf 455/680 459/687 454/677 \nf 455/680 460/688 459/687 \nf 452/675 460/689 451/672 \nf 451/672 460/689 455/679 \nf 460/688 461/691 459/687 \nf 452/675 462/694 460/689 \nf 460/688 462/693 461/691 \nf 463/696 457/685 458/686 \nf 463/696 464/699 457/685 \nf 443/659 457/684 464/698 \nf 465/701 452/674 437/647 \nf 465/701 466/702 452/674 \nf 466/702 461/690 462/692 \nf 466/702 462/692 452/674 \nf 443/659 464/698 442/658 \nf 442/658 464/698 467/704 \nf 439/652 442/657 468/705 \nf 442/657 469/706 468/705 \nf 442/657 467/703 469/706 \nf 469/706 467/703 464/697 \nf 469/706 464/697 463/695 \nf 439/652 468/705 470/708 \nf 471/709 472/710 473/713 \nf 471/709 473/713 474/715 \nf 472/710 475/718 473/713 \nf 476/719 475/718 472/710 \nf 476/720 477/721 475/717 \nf 476/720 478/722 477/721 \nf 476/720 479/723 478/722 \nf 480/725 478/722 479/723 \nf 480/725 481/726 478/722 \nf 479/724 476/719 482/727 \nf 482/727 476/719 472/710 \nf 479/724 482/727 483/728 \nf 482/727 472/710 484/730 \nf 472/710 471/709 484/730 \nf 484/730 471/709 485/732 \nf 479/724 483/728 486/735 \nf 479/723 486/734 480/725 \nf 483/729 487/736 486/733 \nf 483/729 488/737 487/736 \nf 482/727 489/739 483/728 \nf 482/727 490/741 489/739 \nf 484/730 491/743 482/727 \nf 484/730 492/745 491/743 \nf 485/732 493/747 484/730 \nf 485/731 494/748 493/746 \nf 488/737 495/749 487/736 \nf 488/737 496/750 495/749 \nf 488/737 497/751 496/750 \nf 494/748 498/752 493/746 \nf 494/748 499/753 498/752 \nf 493/746 498/752 500/754 \nf 490/740 501/755 489/738 \nf 490/740 502/756 501/755 \nf 489/738 501/755 503/757 \nf 492/744 504/758 491/742 \nf 492/744 505/759 504/758 \nf 491/742 504/758 506/760 \nf 436/644 446/664 507/761 \nf 436/644 507/761 508/763 \nf 446/664 509/765 507/761 \nf 446/664 510/768 509/765 \nf 510/767 511/769 509/764 \nf 510/767 512/771 511/769 \nf 513/773 511/769 512/771 \nf 513/773 512/771 514/776 \nf 447/665 514/775 512/770 \nf 515/777 513/772 514/774 \nf 515/777 514/774 447/666 \nf 470/707 515/777 447/666 \nf 470/707 447/666 439/651 \nf 447/665 512/770 446/663 \nf 446/663 512/770 510/766 \nf 437/646 450/671 465/700 \nf 508/762 516/778 449/669 \nf 508/762 449/669 436/643 \nf 449/670 517/781 518/783 \nf 516/778 519/785 517/779 \nf 519/784 518/782 517/780 \nf 449/670 518/783 448/668 \nf 448/668 518/783 520/788 \nf 516/778 517/779 449/669 \nf 520/787 518/782 521/789 \nf 520/787 521/789 456/683 \nf 519/784 521/789 518/782 \nf 448/667 520/786 456/682 \nf 431/636 522/791 523/792 \nf 431/636 523/792 433/638 \nf 433/638 523/792 524/793 \nf 433/638 524/793 525/794 \nf 430/634 522/790 431/635 \nf 430/634 526/796 522/790 \nf 425/624 526/795 430/633 \nf 425/624 527/797 526/795 \nf 428/629 527/797 425/624 \nf 428/629 528/798 527/797 \nf 435/642 433/638 525/794 \nf 435/642 525/794 529/799 \nf 529/799 441/655 435/642 \nf 529/799 444/661 441/655 \nf 481/726 530/800 531/801 \nf 481/726 531/801 478/722 \nf 478/722 531/801 532/802 \nf 478/722 532/802 477/721 \nf 419/613 533/803 534/805 \nf 419/614 534/804 420/615 \nf 420/615 534/804 535/806 \nf 420/615 535/806 423/620 \nf 427/627 533/803 419/613 \nf 533/803 536/808 534/805 \nf 533/803 537/810 536/808 \nf 534/804 536/807 538/811 \nf 534/804 538/811 535/806 \nf 536/807 537/809 539/813 \nf 536/807 539/813 538/811 \nf 540/814 538/811 539/813 \nf 540/815 539/812 541/816 \nf 535/806 538/811 540/814 \nf 473/712 542/817 543/819 \nf 473/712 543/819 474/714 \nf 544/820 542/818 473/711 \nf 544/820 545/821 542/818 \nf 545/821 546/823 542/818 \nf 542/817 546/822 547/824 \nf 542/817 547/824 543/819 \nf 545/821 548/825 546/823 \nf 543/819 547/824 549/826 \nf 549/826 547/824 550/827 \nf 547/824 546/822 550/827 \nf 473/711 475/716 544/820 \nf 1086/1688 1087/1689 1088/1690 \nf 1086/1688 1088/1690 1089/1691 \nf 1090/1693 1086/1688 1089/1691 \nf 1090/1693 1089/1691 1091/1695 \nf 1092/1696 1090/1692 1091/1694 \nf 1092/1696 1091/1694 1093/1697 \nf 1094/1699 1092/1696 1093/1697 \nf 1094/1699 1093/1697 1095/1701 \nf 1096/1702 1094/1698 1095/1700 \nf 1096/1702 1095/1700 1097/1703 \nf 1098/1704 1096/1702 1097/1703 \nf 1098/1704 1097/1703 1099/1705 \nf 1100/1706 1098/1704 1099/1705 \nf 1100/1706 1099/1705 1101/1707 \nf 1087/1689 1102/1708 1103/1709 \nf 1087/1689 1103/1709 1088/1690 \nf 1104/1710 1105/1711 1106/1712 \nf 1107/1713 1104/1710 1106/1712 \nf 1107/1713 1106/1712 1108/1714 \nf 1109/1716 1107/1713 1108/1714 \nf 1109/1716 1108/1714 1110/1718 \nf 1111/1719 1109/1715 1110/1717 \nf 1111/1719 1110/1717 1112/1720 \nf 1113/1722 1111/1719 1112/1720 \nf 1113/1722 1112/1720 1114/1724 \nf 1115/1725 1113/1721 1114/1723 \nf 1115/1725 1114/1723 1116/1726 \nf 1117/1727 1115/1725 1116/1726 \nf 1117/1727 1116/1726 1118/1728 \nf 1119/1729 1117/1727 1118/1728 \nf 1119/1729 1118/1728 1120/1730 \nf 1121/1731 1105/1711 1104/1710 \nf 1122/1732 1123/1733 1124/1735 \nf 1122/1732 1124/1735 1125/1737 \nf 1126/1738 1122/1732 1125/1737 \nf 1127/1739 1126/1738 1125/1737 \nf 1127/1739 1125/1737 1128/1742 \nf 1129/1744 1127/1739 1128/1742 \nf 1129/1743 1128/1741 1130/1745 \nf 1131/1747 1130/1745 1132/1749 \nf 1133/1752 1134/1754 1131/1746 \nf 1133/1752 1131/1746 1132/1748 \nf 1135/1755 1134/1753 1133/1750 \nf 1135/1755 1133/1750 1136/1756 \nf 1137/1757 1135/1755 1136/1756 \nf 1138/1758 1137/1757 1136/1756 \nf 1138/1758 1136/1756 1139/1759 \nf 1130/1745 1128/1741 1140/1762 \nf 1130/1745 1140/1762 1141/1763 \nf 1132/1749 1130/1745 1141/1763 \nf 1133/1752 1132/1748 1141/1764 \nf 1133/1751 1141/1763 1142/1766 \nf 1136/1756 1133/1750 1142/1765 \nf 1136/1756 1142/1765 1143/1767 \nf 1139/1759 1136/1756 1143/1767 \nf 1139/1759 1143/1767 1144/1768 \nf 1141/1763 1140/1762 1145/1771 \nf 1142/1766 1141/1763 1145/1771 \nf 1143/1767 1142/1765 1145/1770 \nf 1144/1768 1143/1767 1145/1770 \nf 1144/1768 1145/1770 1146/1772 \nf 1147/1773 1148/1775 1149/1777 \nf 1147/1773 1149/1777 1150/1778 \nf 1151/1779 1148/1775 1147/1773 \nf 1152/1780 1153/1783 1148/1775 \nf 1152/1780 1148/1775 1151/1779 \nf 1154/1785 1155/1786 1153/1782 \nf 1154/1784 1153/1783 1152/1780 \nf 1156/1788 1157/1790 1155/1786 \nf 1158/1792 1157/1789 1156/1787 \nf 1158/1792 1156/1787 1159/1795 \nf 1160/1796 1161/1797 1158/1791 \nf 1160/1796 1158/1791 1159/1794 \nf 1162/1798 1161/1797 1160/1796 \nf 1163/1799 1164/1800 1161/1797 \nf 1163/1799 1161/1797 1162/1798 \nf 1155/1786 1165/1801 1166/1805 \nf 1155/1786 1166/1805 1153/1782 \nf 1157/1790 1165/1801 1155/1786 \nf 1158/1793 1167/1807 1165/1801 \nf 1158/1792 1165/1802 1157/1789 \nf 1161/1797 1167/1806 1158/1791 \nf 1164/1800 1168/1808 1169/1809 \nf 1164/1800 1169/1809 1161/1797 \nf 1165/1801 1170/1812 1166/1805 \nf 1167/1807 1170/1812 1165/1801 \nf 1169/1809 1170/1811 1167/1806 \nf 1168/1808 1171/1813 1170/1811 \nf 1168/1808 1170/1811 1169/1809 \nf 1161/1797 1169/1809 1167/1806 \nf 1125/1736 1124/1734 1172/1815 \nf 1125/1736 1172/1815 1173/1817 \nf 1128/1740 1125/1736 1173/1817 \nf 1128/1740 1173/1817 1140/1761 \nf 1173/1816 1172/1814 1174/1818 \nf 1173/1816 1174/1818 1145/1769 \nf 1140/1760 1173/1816 1145/1769 \nf 1148/1774 1175/1820 1176/1822 \nf 1148/1774 1176/1822 1149/1776 \nf 1153/1781 1166/1804 1175/1820 \nf 1153/1781 1175/1820 1148/1774 \nf 1175/1819 1170/1810 1177/1823 \nf 1175/1819 1177/1823 1176/1821 \nf 1166/1803 1170/1810 1175/1819 \nf 1178/1824 1179/1825 1180/1826 \nf 1178/1824 1180/1826 1181/1827 \nf 1178/1824 1181/1827 1182/1828 \nf 1178/1824 1182/1828 1183/1829 \nf 1178/1824 1183/1829 1184/1830 \nf 1178/1824 1184/1830 1185/1831 \nf 1178/1824 1185/1831 1186/1832 \nf 1179/1825 1178/1824 1186/1832 \nf 1180/1826 1179/1825 1187/1833 \nf 1187/1833 1179/1825 1188/1834 \nf 1179/1825 1189/1835 1188/1834 \nf 1180/1826 1187/1833 1190/1836 \nf 1180/1826 1190/1836 1191/1837 \nf 1192/1838 1181/1827 1180/1826 \nf 1192/1838 1180/1826 1191/1837 \nf 1181/1827 1192/1838 1193/1839 \nf 1181/1827 1193/1839 1194/1840 \nf 1195/1841 1182/1828 1181/1827 \nf 1195/1841 1181/1827 1194/1840 \nf 1182/1828 1195/1841 1196/1842 \nf 1197/1843 1184/1830 1183/1829 \nf 1197/1843 1183/1829 1198/1844 \nf 1183/1829 1199/1845 1198/1844 \nf 1183/1829 1200/1846 1199/1845 \nf 1200/1846 1183/1829 1182/1828 \nf 1182/1828 1196/1842 1201/1847 \nf 1200/1846 1182/1828 1201/1847 \nf 1184/1830 1197/1843 1202/1848 \nf 1184/1830 1202/1848 1203/1849 \nf 1204/1850 1184/1830 1203/1849 \nf 1204/1850 1185/1831 1184/1830 \nf 1185/1831 1204/1850 1205/1851 \nf 1185/1831 1205/1851 1206/1852 \nf 1207/1853 1185/1831 1206/1852 \nf 1207/1853 1186/1832 1185/1831 \nf 1186/1832 1207/1853 1208/1854 \nf 1186/1832 1208/1854 1209/1855 \nf 1210/1856 1186/1832 1209/1855 \nf 1210/1856 1179/1825 1186/1832 \nf 1179/1825 1210/1856 1189/1835 \nf 1211/1858 1200/1846 1201/1847 \nf 1211/1858 1201/1847 1212/1860 \nf 1212/1860 1201/1847 1196/1842 \nf 1212/1860 1196/1842 1213/1863 \nf 1213/1863 1196/1842 1195/1841 \nf 1213/1863 1195/1841 1214/1865 \nf 1214/1865 1195/1841 1194/1840 \nf 1215/1866 1191/1837 1190/1836 \nf 1215/1866 1190/1836 1216/1870 \nf 1216/1870 1190/1836 1187/1833 \nf 1216/1870 1187/1833 1217/1872 \nf 1217/1872 1187/1833 1188/1834 \nf 1217/1872 1188/1834 1218/1874 \nf 1218/1874 1188/1834 1189/1835 \nf 1218/1874 1189/1835 1219/1876 \nf 1219/1876 1189/1835 1210/1856 \nf 1219/1876 1210/1856 1220/1878 \nf 1220/1878 1210/1856 1209/1855 \nf 1220/1878 1209/1855 1221/1880 \nf 1221/1880 1209/1855 1208/1854 \nf 1221/1880 1208/1854 1222/1883 \nf 1222/1883 1208/1854 1207/1853 \nf 1222/1883 1207/1853 1223/1885 \nf 1223/1885 1207/1853 1206/1852 \nf 1223/1885 1206/1852 1224/1887 \nf 1224/1887 1206/1852 1205/1851 \nf 1224/1887 1205/1851 1225/1889 \nf 1225/1889 1205/1851 1204/1850 \nf 1225/1889 1204/1850 1226/1891 \nf 1226/1891 1204/1850 1203/1849 \nf 1226/1891 1203/1849 1227/1893 \nf 1227/1893 1203/1849 1202/1848 \nf 1227/1893 1202/1848 1228/1896 \nf 1228/1896 1202/1848 1197/1843 \nf 1228/1896 1197/1843 1229/1898 \nf 1229/1898 1197/1843 1198/1844 \nf 1229/1898 1198/1844 1230/1900 \nf 1230/1900 1198/1844 1199/1845 \nf 1230/1900 1199/1845 1231/1902 \nf 1231/1902 1199/1845 1200/1846 \nf 1231/1902 1200/1846 1211/1858 \nf 1232/1903 1233/1904 1234/1907 \nf 1232/1903 1234/1907 1235/1908 \nf 1235/1908 1234/1907 1236/1910 \nf 1235/1908 1236/1910 1237/1911 \nf 1237/1911 1236/1910 1215/1867 \nf 1237/1911 1215/1867 1238/1912 \nf 1238/1912 1215/1867 1216/1869 \nf 1238/1912 1216/1869 1239/1914 \nf 1239/1913 1216/1868 1217/1871 \nf 1239/1913 1217/1871 1240/1915 \nf 1240/1915 1217/1871 1218/1873 \nf 1240/1915 1218/1873 1241/1916 \nf 1241/1916 1218/1873 1219/1875 \nf 1241/1916 1219/1875 1242/1917 \nf 1242/1917 1219/1875 1220/1877 \nf 1242/1917 1220/1877 1243/1918 \nf 1243/1918 1220/1877 1221/1879 \nf 1243/1918 1221/1879 1244/1919 \nf 1244/1919 1221/1879 1222/1882 \nf 1244/1919 1222/1882 1245/1921 \nf 1245/1920 1222/1881 1223/1884 \nf 1245/1920 1223/1884 1246/1922 \nf 1246/1922 1223/1884 1224/1886 \nf 1246/1922 1224/1886 1247/1923 \nf 1247/1923 1224/1886 1225/1888 \nf 1247/1923 1225/1888 1248/1924 \nf 1248/1924 1225/1888 1226/1890 \nf 1248/1924 1226/1890 1249/1925 \nf 1249/1925 1226/1890 1227/1892 \nf 1249/1925 1227/1892 1250/1926 \nf 1250/1926 1227/1892 1228/1894 \nf 1251/1927 1252/1928 1232/1903 \nf 1251/1927 1232/1903 1253/1929 \nf 1253/1929 1232/1903 1235/1908 \nf 1253/1929 1235/1908 1254/1930 \nf 1254/1930 1235/1908 1237/1911 \nf 1254/1930 1237/1911 1255/1931 \nf 1255/1931 1237/1911 1238/1912 \nf 1255/1931 1238/1912 1256/1932 \nf 1256/1932 1238/1912 1239/1914 \nf 1256/1932 1239/1914 1257/1933 \nf 1257/1934 1239/1913 1240/1915 \nf 1257/1934 1240/1915 1258/1935 \nf 1258/1935 1240/1915 1241/1916 \nf 1258/1935 1241/1916 1259/1936 \nf 1259/1936 1241/1916 1242/1917 \nf 1259/1936 1242/1917 1260/1937 \nf 1260/1937 1242/1917 1243/1918 \nf 1260/1937 1243/1918 1261/1938 \nf 1261/1938 1243/1918 1244/1919 \nf 1261/1938 1244/1919 1262/1939 \nf 1262/1939 1244/1919 1245/1921 \nf 1262/1939 1245/1921 1263/1941 \nf 1263/1940 1245/1920 1246/1922 \nf 1263/1940 1246/1922 1264/1942 \nf 1264/1942 1246/1922 1247/1923 \nf 1264/1942 1247/1923 1265/1943 \nf 1265/1943 1247/1923 1248/1924 \nf 1265/1943 1248/1924 1266/1944 \nf 1266/1944 1248/1924 1249/1925 \nf 1266/1944 1249/1925 1267/1945 \nf 1267/1945 1249/1925 1250/1926 \nf 1268/1946 1269/1947 1270/1949 \nf 1268/1946 1270/1949 1271/1950 \nf 1271/1951 1270/1948 1251/1927 \nf 1271/1951 1251/1927 1272/1952 \nf 1272/1952 1251/1927 1253/1929 \nf 1272/1952 1253/1929 1273/1953 \nf 1273/1953 1253/1929 1254/1930 \nf 1273/1953 1254/1930 1274/1954 \nf 1275/1955 1259/1936 1260/1937 \nf 1275/1955 1260/1937 1276/1956 \nf 1277/1957 1259/1936 1275/1955 \nf 1277/1957 1258/1935 1259/1936 \nf 1278/1959 1258/1935 1277/1957 \nf 1278/1959 1257/1934 1258/1935 \nf 1279/1960 1257/1933 1278/1958 \nf 1279/1960 1256/1932 1257/1933 \nf 1280/1961 1256/1932 1279/1960 \nf 1280/1961 1255/1931 1256/1932 \nf 1276/1956 1260/1937 1261/1938 \nf 1276/1956 1261/1938 1281/1962 \nf 1281/1962 1261/1938 1262/1939 \nf 1281/1962 1262/1939 1282/1963 \nf 1282/1963 1262/1939 1263/1941 \nf 1282/1963 1263/1941 1283/1964 \nf 1283/1965 1263/1940 1264/1942 \nf 1283/1965 1264/1942 1284/1966 \nf 1284/1966 1264/1942 1265/1943 \nf 1284/1966 1265/1943 1285/1967 \nf 1274/1954 1254/1930 1255/1931 \nf 1274/1954 1255/1931 1280/1961 \nf 1285/1967 1265/1943 1266/1944 \nf 1276/1956 1286/1968 1275/1955 \nf 1287/1970 1275/1955 1286/1968 \nf 1287/1970 1277/1957 1275/1955 \nf 1277/1957 1287/1970 1278/1959 \nf 1278/1958 1287/1969 1279/1960 \nf 1288/1971 1279/1960 1287/1969 \nf 1288/1971 1280/1961 1279/1960 \nf 1280/1961 1288/1971 1274/1954 \nf 1274/1954 1288/1971 1273/1953 \nf 1289/1973 1273/1953 1288/1971 \nf 1289/1973 1272/1952 1273/1953 \nf 1272/1952 1289/1973 1271/1951 \nf 1271/1950 1289/1972 1268/1946 \nf 1290/1974 1268/1946 1289/1972 \nf 1290/1974 1291/1975 1268/1946 \nf 1292/1976 1293/1978 1290/1974 \nf 1292/1976 1294/1979 1293/1978 \nf 1295/1980 1296/1981 1292/1977 \nf 1295/1980 1297/1982 1296/1981 \nf 1298/1983 1295/1980 1285/1967 \nf 1299/1984 1285/1967 1295/1980 \nf 1299/1984 1284/1966 1285/1967 \nf 1284/1966 1299/1984 1283/1965 \nf 1283/1964 1299/1985 1282/1963 \nf 1286/1968 1282/1963 1299/1985 \nf 1286/1968 1281/1962 1282/1963 \nf 1281/1962 1286/1968 1276/1956 \nf 1300/1986 1286/1968 1299/1985 \nf 1301/1989 1286/1968 1300/1986 \nf 1301/1989 1287/1970 1286/1968 \nf 1302/1990 1287/1969 1301/1987 \nf 1302/1990 1288/1971 1287/1969 \nf 1300/1986 1299/1985 1303/1993 \nf 1303/1991 1299/1984 1295/1980 \nf 1303/1991 1295/1980 1304/1994 \nf 1300/1986 1305/1996 1301/1989 \nf 1303/1993 1305/1996 1300/1986 \nf 1303/1992 1306/1997 1305/1995 \nf 1304/1994 1306/1998 1303/1991 \nf 1307/1999 1306/1998 1304/1994 \nf 1306/1997 1308/2002 1305/1995 \nf 1305/1995 1308/2002 1309/2003 \nf 1301/1988 1305/1995 1309/2003 \nf 1301/1987 1309/2004 1302/1990 \nf 1302/1990 1309/2004 1310/2005 \nf 1309/2003 1308/2002 1311/2009 \nf 1311/2009 1308/2002 1306/1997 \nf 1307/2001 1311/2009 1306/1997 \nf 1310/2007 1309/2003 1311/2009 \nf 1310/2006 1311/2008 1312/2010 \nf 1312/2010 1311/2008 1307/2000 \nf 1312/2010 1289/1972 1310/2006 \nf 1310/2005 1289/1973 1288/1971 \nf 1310/2005 1288/1971 1302/1990 \nf 1312/2010 1290/1974 1289/1972 \nf 1307/2000 1290/1974 1312/2010 \nf 1307/2000 1292/1976 1290/1974 \nf 1304/1994 1292/1977 1307/1999 \nf 1304/1994 1295/1980 1292/1977 \nf 1313/2011 1314/2012 1315/2013 \nf 1316/2014 1313/2011 1315/2013 \nf 1317/2015 1316/2014 1315/2013 \nf 1318/2016 1317/2015 1315/2013 \nf 1319/2017 1318/2016 1315/2013 \nf 1320/2018 1319/2017 1315/2013 \nf 1321/2019 1320/2018 1315/2013 \nf 1314/2012 1321/2019 1315/2013 \nf 1322/2020 1314/2012 1313/2011 \nf 1322/2020 1323/2021 1314/2012 \nf 1322/2020 1313/2011 1324/2022 \nf 1325/2023 1324/2022 1313/2011 \nf 1326/2024 1325/2023 1313/2011 \nf 1326/2024 1313/2011 1316/2014 \nf 1326/2024 1316/2014 1327/2025 \nf 1328/2026 1327/2025 1316/2014 \nf 1329/2027 1328/2026 1316/2014 \nf 1329/2027 1316/2014 1317/2015 \nf 1329/2027 1317/2015 1330/2028 \nf 1331/2029 1330/2028 1317/2015 \nf 1332/2030 1331/2029 1317/2015 \nf 1332/2030 1317/2015 1318/2016 \nf 1332/2030 1318/2016 1333/2031 \nf 1334/2032 1333/2031 1318/2016 \nf 1335/2033 1334/2032 1318/2016 \nf 1335/2033 1318/2016 1319/2017 \nf 1335/2033 1319/2017 1336/2034 \nf 1337/2035 1336/2034 1319/2017 \nf 1338/2036 1337/2035 1319/2017 \nf 1338/2036 1319/2017 1320/2018 \nf 1338/2036 1320/2018 1339/2037 \nf 1340/2038 1339/2037 1320/2018 \nf 1341/2039 1340/2038 1320/2018 \nf 1341/2039 1320/2018 1321/2019 \nf 1341/2039 1321/2019 1342/2040 \nf 1343/2041 1342/2040 1321/2019 \nf 1344/2042 1343/2041 1321/2019 \nf 1344/2042 1321/2019 1314/2012 \nf 1344/2042 1314/2012 1345/2043 \nf 1323/2021 1345/2043 1314/2012 \nf 1346/2045 1335/2033 1336/2034 \nf 1347/2047 1335/2033 1346/2045 \nf 1347/2047 1334/2032 1335/2033 \nf 1348/2049 1334/2032 1347/2047 \nf 1348/2049 1333/2031 1334/2032 \nf 1349/2051 1333/2031 1348/2049 \nf 1349/2051 1332/2030 1333/2031 \nf 1350/2054 1332/2030 1349/2051 \nf 1350/2054 1331/2029 1332/2030 \nf 1351/2056 1331/2029 1350/2054 \nf 1351/2056 1330/2028 1331/2029 \nf 1352/2058 1330/2028 1351/2056 \nf 1352/2058 1329/2027 1330/2028 \nf 1353/2060 1329/2027 1352/2058 \nf 1353/2060 1328/2026 1329/2027 \nf 1354/2062 1328/2026 1353/2060 \nf 1354/2062 1327/2025 1328/2026 \nf 1355/2064 1327/2025 1354/2062 \nf 1355/2064 1326/2024 1327/2025 \nf 1356/2067 1326/2024 1355/2064 \nf 1356/2067 1325/2023 1326/2024 \nf 1357/2069 1325/2023 1356/2067 \nf 1357/2069 1324/2022 1325/2023 \nf 1358/2071 1324/2022 1357/2069 \nf 1358/2071 1322/2020 1324/2022 \nf 1359/2073 1323/2021 1360/2075 \nf 1361/2077 1345/2043 1359/2073 \nf 1361/2077 1344/2042 1345/2043 \nf 1362/2080 1344/2042 1361/2077 \nf 1362/2080 1343/2041 1344/2042 \nf 1363/2082 1343/2041 1362/2080 \nf 1363/2082 1342/2040 1343/2041 \nf 1364/2084 1342/2040 1363/2082 \nf 1364/2084 1341/2039 1342/2040 \nf 1365/2086 1341/2039 1364/2084 \nf 1365/2086 1340/2038 1341/2039 \nf 1366/2088 1340/2038 1365/2086 \nf 1366/2088 1339/2037 1340/2038 \nf 1367/2090 1339/2037 1366/2088 \nf 1367/2090 1338/2036 1339/2037 \nf 1368/2093 1338/2036 1367/2090 \nf 1368/2093 1337/2035 1338/2036 \nf 1369/2095 1337/2035 1368/2093 \nf 1369/2095 1336/2034 1337/2035 \nf 1346/2045 1336/2034 1369/2095 \nf 1370/2096 1346/2044 1369/2094 \nf 1371/2097 1346/2044 1370/2096 \nf 1371/2097 1347/2046 1346/2044 \nf 1372/2098 1347/2046 1371/2097 \nf 1372/2098 1348/2048 1347/2046 \nf 1373/2099 1348/2048 1372/2098 \nf 1373/2099 1349/2050 1348/2048 \nf 1374/2101 1349/2050 1373/2099 \nf 1374/2101 1350/2053 1349/2050 \nf 1375/2102 1359/2072 1376/2103 \nf 1375/2102 1361/2076 1359/2072 \nf 1377/2105 1361/2076 1375/2102 \nf 1377/2105 1362/2079 1361/2076 \nf 1378/2106 1362/2078 1377/2104 \nf 1378/2106 1363/2081 1362/2078 \nf 1379/2107 1363/2081 1378/2106 \nf 1379/2107 1364/2083 1363/2081 \nf 1380/2108 1364/2083 1379/2107 \nf 1380/2108 1365/2085 1364/2083 \nf 1381/2109 1365/2085 1380/2108 \nf 1381/2109 1366/2087 1365/2085 \nf 1382/2110 1366/2087 1381/2109 \nf 1382/2110 1367/2089 1366/2087 \nf 1383/2112 1367/2089 1382/2110 \nf 1383/2112 1368/2092 1367/2089 \nf 1384/2113 1368/2091 1383/2111 \nf 1384/2113 1369/2094 1368/2091 \nf 1370/2096 1369/2094 1384/2113 \nf 1385/2114 1370/2096 1384/2113 \nf 1386/2115 1370/2096 1385/2114 \nf 1386/2115 1371/2097 1370/2096 \nf 1387/2116 1371/2097 1386/2115 \nf 1387/2116 1372/2098 1371/2097 \nf 1388/2117 1372/2098 1387/2116 \nf 1388/2117 1373/2099 1372/2098 \nf 1389/2118 1390/2119 1391/2120 \nf 1389/2118 1392/2121 1390/2119 \nf 1393/2122 1392/2121 1389/2118 \nf 1393/2122 1376/2103 1392/2121 \nf 1394/2123 1376/2103 1393/2122 \nf 1394/2123 1375/2102 1376/2103 \nf 1395/2124 1375/2102 1394/2123 \nf 1395/2124 1377/2105 1375/2102 \nf 1396/2126 1377/2104 1395/2125 \nf 1396/2126 1378/2106 1377/2104 \nf 1397/2127 1378/2106 1396/2126 \nf 1397/2127 1379/2107 1378/2106 \nf 1398/2128 1379/2107 1397/2127 \nf 1398/2128 1380/2108 1379/2107 \nf 1399/2129 1380/2108 1398/2128 \nf 1399/2129 1381/2109 1380/2108 \nf 1400/2130 1381/2109 1399/2129 \nf 1400/2130 1382/2110 1381/2109 \nf 1401/2131 1382/2110 1400/2130 \nf 1401/2131 1383/2112 1382/2110 \nf 1402/2133 1383/2111 1401/2132 \nf 1402/2133 1384/2113 1383/2111 \nf 1403/2134 1402/2133 1404/2135 \nf 1404/2135 1402/2133 1401/2132 \nf 1404/2135 1401/2132 1405/2137 \nf 1405/2136 1401/2131 1400/2130 \nf 1405/2136 1400/2130 1406/2138 \nf 1406/2138 1400/2130 1399/2129 \nf 1406/2138 1399/2129 1407/2139 \nf 1407/2139 1399/2129 1398/2128 \nf 1407/2139 1398/2128 1408/2140 \nf 1408/2140 1398/2128 1397/2127 \nf 1408/2140 1397/2127 1409/2141 \nf 1409/2141 1397/2127 1396/2126 \nf 1409/2141 1396/2126 1410/2142 \nf 1410/2142 1396/2126 1395/2125 \nf 1410/2142 1395/2125 1411/2144 \nf 1411/2143 1395/2124 1394/2123 \nf 1411/2143 1394/2123 1412/2145 \nf 1412/2145 1394/2123 1393/2122 \nf 1412/2145 1393/2122 1413/2146 \nf 1413/2146 1393/2122 1389/2118 \nf 1413/2146 1389/2118 1414/2147 \nf 1414/2147 1389/2118 1391/2120 \nf 1414/2147 1391/2120 1415/2148 \nf 1415/2148 1391/2120 1416/2149 \nf 1415/2148 1416/2149 1417/2150 \nf 1417/2150 1416/2149 1418/2152 \nf 1417/2150 1418/2152 1419/2154 \nf 1420/2155 1386/2115 1385/2114 \nf 1415/2148 1421/2156 1414/2147 \nf 1421/2156 1415/2148 1417/2150 \nf 1421/2156 1417/2150 1422/2157 \nf 1419/2154 1422/2157 1417/2150 \nf 1423/2159 1422/2158 1419/2153 \nf 1422/2158 1423/2159 1424/2161 \nf 1422/2158 1424/2161 1425/2163 \nf 1425/2163 1426/2164 1427/2165 \nf 1425/2163 1427/2165 1428/2167 \nf 1428/2166 1429/2168 1430/2169 \nf 1428/2166 1430/2169 1431/2170 \nf 1420/2155 1431/2170 1430/2169 \nf 1403/2134 1431/2170 1420/2155 \nf 1431/2170 1403/2134 1404/2135 \nf 1431/2170 1404/2135 1432/2171 \nf 1405/2137 1432/2171 1404/2135 \nf 1406/2138 1432/2172 1405/2136 \nf 1432/2172 1406/2138 1407/2139 \nf 1432/2172 1407/2139 1433/2173 \nf 1408/2140 1433/2173 1407/2139 \nf 1409/2141 1433/2173 1408/2140 \nf 1433/2173 1409/2141 1410/2142 \nf 1433/2173 1410/2142 1434/2175 \nf 1411/2144 1434/2175 1410/2142 \nf 1412/2145 1434/2174 1411/2143 \nf 1434/2174 1412/2145 1413/2146 \nf 1434/2174 1413/2146 1421/2156 \nf 1414/2147 1421/2156 1413/2146 \nf 1435/2178 1432/2172 1433/2173 \nf 1436/2179 1432/2171 1435/2177 \nf 1436/2179 1431/2170 1432/2171 \nf 1435/2178 1433/2173 1437/2180 \nf 1437/2180 1433/2173 1434/2175 \nf 1437/2180 1434/2175 1438/2183 \nf 1438/2181 1434/2174 1421/2156 \nf 1438/2181 1421/2156 1439/2184 \nf 1437/2180 1440/2186 1435/2178 \nf 1438/2183 1440/2186 1437/2180 \nf 1441/2187 1440/2185 1438/2182 \nf 1439/2184 1441/2188 1438/2181 \nf 1442/2189 1441/2188 1439/2184 \nf 1441/2187 1443/2192 1440/2185 \nf 1444/2193 1443/2192 1441/2187 \nf 1444/2193 1441/2187 1442/2191 \nf 1445/2195 1444/2194 1442/2190 \nf 1442/2190 1425/2163 1445/2195 \nf 1442/2190 1422/2158 1425/2163 \nf 1439/2184 1422/2157 1442/2189 \nf 1439/2184 1421/2156 1422/2157 \nf 1445/2195 1425/2163 1428/2167 \nf 1445/2195 1428/2167 1446/2198 \nf 1446/2198 1444/2194 1445/2195 \nf 1446/2196 1428/2166 1431/2170 \nf 1446/2196 1431/2170 1436/2179 \nf 1447/2199 1443/2192 1444/2193 \nf 1440/2185 1443/2192 1447/2199 \nf 1447/2199 1444/2193 1446/2197 \nf 1436/2179 1447/2200 1446/2196 \nf 1435/2177 1447/2200 1436/2179 \nf 1440/2185 1447/2199 1435/2176 \nf 1214/1865 1194/1840 1233/1905 \nf 1233/1905 1194/1840 1193/1839 \nf 1233/1905 1193/1839 1234/1906 \nf 1234/1906 1193/1839 1192/1838 \nf 1234/1906 1192/1838 1236/1909 \nf 1236/1909 1192/1838 1191/1837 \nf 1236/1909 1191/1837 1215/1866 \nf 1448/2201 1231/1901 1211/1857 \nf 1448/2201 1211/1857 1449/2202 \nf 1449/2202 1211/1857 1212/1859 \nf 1449/2202 1212/1859 1450/2203 \nf 1450/2203 1212/1859 1213/1862 \nf 1450/2203 1213/1862 1451/2205 \nf 1451/2204 1213/1861 1214/1864 \nf 1451/2204 1214/1864 1252/1928 \nf 1252/1928 1214/1864 1233/1904 \nf 1252/1928 1233/1904 1232/1903 \nf 1452/2207 1228/1895 1229/1897 \nf 1452/2207 1229/1897 1453/2208 \nf 1453/2208 1229/1897 1230/1899 \nf 1453/2208 1230/1899 1454/2209 \nf 1454/2209 1230/1899 1231/1901 \nf 1454/2209 1231/1901 1448/2201 \nf 1455/2210 1454/2209 1448/2201 \nf 1455/2210 1448/2201 1456/2211 \nf 1456/2211 1448/2201 1449/2202 \nf 1456/2211 1449/2202 1457/2212 \nf 1457/2212 1449/2202 1450/2203 \nf 1457/2212 1450/2203 1269/1947 \nf 1269/1947 1450/2203 1451/2205 \nf 1269/1947 1451/2205 1270/1949 \nf 1270/1948 1451/2204 1252/1928 \nf 1270/1948 1252/1928 1251/1927 \nf 1267/1945 1250/1926 1458/2213 \nf 1458/2213 1250/1926 1452/2206 \nf 1458/2213 1452/2206 1459/2214 \nf 1459/2215 1452/2207 1453/2208 \nf 1459/2215 1453/2208 1460/2216 \nf 1460/2216 1453/2208 1454/2209 \nf 1460/2216 1454/2209 1455/2210 \nf 1294/1979 1460/2216 1455/2210 \nf 1294/1979 1455/2210 1293/1978 \nf 1293/1978 1455/2210 1456/2211 \nf 1293/1978 1456/2211 1461/2217 \nf 1461/2217 1456/2211 1457/2212 \nf 1461/2217 1457/2212 1291/1975 \nf 1291/1975 1457/2212 1269/1947 \nf 1285/1967 1266/1944 1298/1983 \nf 1462/2218 1459/2215 1460/2216 \nf 1462/2218 1460/2216 1294/1979 \nf 1296/1981 1459/2214 1462/2219 \nf 1296/1981 1458/2213 1459/2214 \nf 1297/1982 1458/2213 1296/1981 \nf 1297/1982 1267/1945 1458/2213 \nf 1298/1983 1266/1944 1267/1945 \nf 1298/1983 1267/1945 1297/1982 \nf 1462/2219 1292/1977 1296/1981 \nf 1291/1975 1269/1947 1268/1946 \nf 1291/1975 1290/1974 1461/2217 \nf 1461/2217 1290/1974 1293/1978 \nf 1294/1979 1292/1976 1462/2218 \nf 1297/1982 1295/1980 1298/1983 \nf 1250/1926 1228/1894 1452/2206 \nf 1360/2075 1322/2020 1358/2071 \nf 1360/2075 1323/2021 1322/2020 \nf 1359/2073 1345/2043 1323/2021 \nf 1463/2220 1350/2052 1374/2100 \nf 1463/2220 1351/2055 1350/2052 \nf 1464/2221 1351/2055 1463/2220 \nf 1464/2221 1352/2057 1351/2055 \nf 1465/2222 1352/2057 1464/2221 \nf 1465/2222 1353/2059 1352/2057 \nf 1466/2223 1353/2059 1465/2222 \nf 1466/2223 1354/2061 1353/2059 \nf 1467/2224 1354/2061 1466/2223 \nf 1467/2224 1355/2063 1354/2061 \nf 1468/2226 1355/2063 1467/2224 \nf 1468/2226 1356/2066 1355/2063 \nf 1469/2227 1356/2065 1468/2225 \nf 1469/2227 1357/2068 1356/2065 \nf 1390/2119 1357/2068 1469/2227 \nf 1390/2119 1358/2070 1357/2068 \nf 1392/2121 1358/2070 1390/2119 \nf 1392/2121 1360/2074 1358/2070 \nf 1376/2103 1360/2074 1392/2121 \nf 1376/2103 1359/2072 1360/2074 \nf 1470/2228 1373/2099 1388/2117 \nf 1470/2228 1374/2101 1373/2099 \nf 1471/2230 1374/2100 1470/2229 \nf 1471/2230 1463/2220 1374/2100 \nf 1472/2231 1463/2220 1471/2230 \nf 1472/2231 1464/2221 1463/2220 \nf 1473/2232 1464/2221 1472/2231 \nf 1473/2232 1465/2222 1464/2221 \nf 1474/2233 1465/2222 1473/2232 \nf 1474/2233 1466/2223 1465/2222 \nf 1475/2234 1466/2223 1474/2233 \nf 1475/2234 1467/2224 1466/2223 \nf 1418/2151 1467/2224 1475/2234 \nf 1418/2151 1468/2226 1467/2224 \nf 1416/2149 1468/2225 1418/2152 \nf 1416/2149 1469/2227 1468/2225 \nf 1391/2120 1469/2227 1416/2149 \nf 1391/2120 1390/2119 1469/2227 \nf 1419/2153 1418/2151 1475/2234 \nf 1419/2153 1475/2234 1423/2159 \nf 1423/2159 1475/2234 1474/2233 \nf 1423/2159 1474/2233 1424/2161 \nf 1424/2161 1474/2233 1473/2232 \nf 1424/2161 1473/2232 1476/2236 \nf 1476/2236 1473/2232 1472/2231 \nf 1476/2236 1472/2231 1426/2164 \nf 1426/2164 1472/2231 1471/2230 \nf 1426/2164 1471/2230 1427/2165 \nf 1427/2165 1471/2230 1470/2229 \nf 1427/2165 1470/2229 1477/2238 \nf 1477/2237 1470/2228 1388/2117 \nf 1477/2237 1388/2117 1429/2168 \nf 1429/2168 1388/2117 1387/2116 \nf 1429/2168 1387/2116 1430/2169 \nf 1430/2169 1387/2116 1386/2115 \nf 1430/2169 1386/2115 1420/2155 \nf 1426/2164 1425/2163 1476/2236 \nf 1385/2114 1384/2113 1402/2133 \nf 1403/2134 1385/2114 1402/2133 \nf 1420/2155 1385/2114 1403/2134 \nf 1477/2238 1428/2167 1427/2165 \nf 1429/2168 1428/2166 1477/2237 \nf 1425/2162 1476/2235 1424/2160 \nf 1744/2665 1745/2666 1746/2667 \nf 1747/2668 1744/2665 1746/2667 \nf 1748/2669 1749/2670 1747/2668 \nf 1747/2668 1746/2667 1748/2669 \nf 1749/2670 1748/2669 1750/2671 \nf 1750/2671 1751/2672 1749/2670 \nf 1752/2673 1753/2674 1751/2672 \nf 1751/2672 1750/2671 1752/2673 \nf 1753/2674 1752/2673 1754/2675 \nf 1754/2675 1755/2676 1753/2674 \nf 1756/2677 1754/2675 1752/2673 \nf 1752/2673 1757/2678 1756/2677 \nf 1750/2671 1758/2679 1757/2678 \nf 1757/2678 1752/2673 1750/2671 \nf 1748/2669 1759/2680 1758/2679 \nf 1758/2679 1750/2671 1748/2669 \nf 1759/2680 1748/2669 1746/2667 \nf 1746/2667 1760/2681 1759/2680 \nf 1746/2667 1745/2666 1760/2681 \nf 1745/2666 1761/2682 1760/2681 \nf 1761/2682 1745/2666 1762/2683 \nf 1762/2683 1763/2684 1761/2682 \nf 1763/2684 1762/2683 1764/2685 \nf 1765/2686 1766/2687 1767/2688 \nf 1767/2688 1768/2689 1765/2686 \nf 1769/2690 1770/2691 1771/2692 \nf 1771/2692 1772/2693 1769/2690 \nf 1771/2692 1773/2694 1772/2693 \nf 1773/2694 1774/2695 1772/2693 \nf 1775/2696 1772/2693 1774/2695 \nf 1774/2695 1776/2697 1775/2696 \nf 1777/2698 1778/2699 1779/2700 \nf 1780/2701 1777/2698 1779/2700 \nf 1780/2701 1779/2700 1781/2702 \nf 1782/2703 1783/2704 1784/2705 \nf 1782/2703 1785/2706 1783/2704 \nf 1784/2705 1786/2707 1787/2708 \nf 1786/2707 1784/2705 1783/2704 \nf 1788/2709 1785/2706 1789/2710 \nf 1785/2706 1788/2709 1790/2712 \nf 1791/2713 1792/2715 1793/2716 \nf 1793/2716 1794/2717 1791/2713 \nf 1794/2717 1793/2716 1795/2718 \nf 1796/2719 1795/2718 1797/2720 \nf 1795/2718 1796/2719 1794/2717 \nf 1798/2721 1797/2720 1799/2722 \nf 1797/2720 1798/2721 1796/2719 \nf 1799/2722 1800/2723 1798/2721 \nf 1800/2723 1799/2722 1801/2724 \nf 1802/2726 1785/2706 1790/2712 \nf 1785/2706 1802/2726 1783/2704 \nf 1803/2728 1783/2704 1802/2726 \nf 1783/2704 1803/2728 1786/2707 \nf 1802/2725 1804/2729 1803/2727 \nf 1804/2729 1802/2725 1805/2730 \nf 1790/2711 1805/2730 1802/2725 \nf 1790/2711 1806/2731 1805/2730 \nf 1807/2732 1808/2733 1809/2736 \nf 1808/2733 1807/2732 1810/2737 \nf 1811/2738 1780/2701 1812/2739 \nf 1811/2738 1777/2698 1780/2701 \nf 1813/2741 1814/2743 1815/2744 \nf 1813/2741 1815/2744 1816/2745 \nf 1817/2747 1813/2741 1816/2745 \nf 1817/2747 1816/2745 1818/2748 \nf 1819/2749 1820/2750 1814/2742 \nf 1819/2749 1814/2742 1813/2740 \nf 1821/2751 1819/2749 1813/2740 \nf 1821/2751 1813/2740 1817/2746 \nf 1799/2722 1797/2720 1822/2752 \nf 1799/2722 1822/2752 1823/2753 \nf 1801/2724 1799/2722 1823/2753 \nf 1801/2724 1823/2753 1824/2754 \nf 1814/2743 1825/2756 1826/2757 \nf 1814/2743 1826/2757 1815/2744 \nf 1820/2750 1827/2758 1825/2755 \nf 1820/2750 1825/2755 1814/2742 \nf 1797/2720 1795/2718 1828/2759 \nf 1797/2720 1828/2759 1822/2752 \nf 1808/2734 1829/2761 1830/2762 \nf 1808/2734 1830/2762 1831/2763 \nf 1809/2735 1808/2734 1831/2763 \nf 1809/2735 1831/2763 1832/2764 \nf 1810/2737 1829/2760 1808/2733 \nf 1792/2714 1833/2765 1834/2766 \nf 1835/2767 1836/2768 1837/2769 \nf 1838/2770 1839/2771 1840/2772 \nf 1838/2770 1840/2772 1841/2773 \nf 1842/2774 1838/2770 1841/2773 \nf 1843/2775 1844/2776 1845/2777 \nf 1843/2775 1845/2777 1846/2778 \nf 1847/2779 1848/2780 1849/2781 \nf 1847/2779 1849/2781 1850/2782 \nf 1851/2783 1852/2784 1853/2785 \nf 1851/2783 1853/2785 1848/2780 \nf 1854/2786 1851/2783 1848/2780 \nf 1854/2786 1848/2780 1847/2779 \nf 1855/2787 1856/2788 1857/2789 \nf 1855/2787 1857/2789 1858/2790 \nf 1859/2791 1855/2787 1858/2790 \nf 1859/2791 1858/2790 1860/2792 \nf 1861/2793 1862/2794 1863/2795 \nf 1861/2793 1863/2795 1864/2797 \nf 1864/2797 1863/2795 1865/2799 \nf 1864/2796 1865/2798 1866/2800 \nf 1867/2801 1868/2802 1869/2803 \nf 1869/2803 1870/2804 1867/2801 \nf 1871/2805 1872/2806 1873/2807 \nf 1874/2808 1875/2810 1876/2811 \nf 1877/2812 1874/2808 1876/2811 \nf 1877/2812 1876/2811 1878/2813 \nf 1879/2815 1880/2816 1881/2817 \nf 1881/2817 1874/2809 1879/2815 \nf 1882/2818 1883/2819 1884/2820 \nf 1885/2822 1886/2823 1887/2824 \nf 1885/2822 1888/2825 1886/2823 \nf 1888/2825 1889/2826 1886/2823 \nf 1888/2825 1890/2827 1889/2826 \nf 1891/2828 1880/2816 1892/2829 \nf 1891/2828 1881/2817 1880/2816 \nf 1879/2814 1874/2808 1877/2812 \nf 1893/2830 1894/2831 1895/2832 \nf 1893/2830 1895/2832 1896/2833 \nf 1885/2821 1896/2833 1895/2832 \nf 1897/2834 1876/2811 1875/2810 \nf 1876/2811 1897/2834 1898/2835 \nf 1898/2835 1878/2813 1876/2811 \nf 1878/2813 1898/2835 1899/2836 \nf 1899/2836 1900/2837 1878/2813 \nf 1900/2837 1899/2836 1901/2838 \nf 1901/2838 1902/2839 1900/2837 \nf 1902/2839 1901/2838 1903/2840 \nf 1903/2840 1904/2841 1902/2839 \nf 1904/2841 1903/2840 1905/2842 \nf 1906/2843 1905/2842 1907/2844 \nf 1905/2842 1906/2843 1904/2841 \nf 1908/2845 1907/2844 1909/2846 \nf 1907/2844 1908/2845 1906/2843 \nf 1909/2846 1910/2847 1908/2845 \nf 1910/2847 1909/2846 1911/2848 \nf 1911/2848 1912/2849 1913/2850 \nf 1912/2849 1911/2848 1909/2846 \nf 1914/2851 1909/2846 1907/2844 \nf 1909/2846 1914/2851 1912/2849 \nf 1907/2844 1915/2852 1914/2851 \nf 1915/2852 1907/2844 1905/2842 \nf 1916/2854 1905/2842 1903/2840 \nf 1905/2842 1916/2854 1915/2852 \nf 1917/2856 1916/2854 1903/2840 \nf 1917/2856 1903/2840 1901/2838 \nf 1901/2838 1918/2858 1917/2856 \nf 1918/2858 1901/2838 1899/2836 \nf 1919/2860 1899/2836 1898/2835 \nf 1899/2836 1919/2860 1918/2858 \nf 1920/2861 1918/2857 1919/2859 \nf 1918/2857 1920/2861 1921/2862 \nf 1921/2862 1917/2855 1918/2857 \nf 1917/2855 1921/2862 1922/2863 \nf 1922/2863 1916/2853 1917/2855 \nf 1923/2864 1924/2865 1925/2866 \nf 1926/2867 1923/2864 1925/2866 \nf 1927/2868 1928/2870 1929/2872 \nf 1929/2872 1930/2873 1927/2868 \nf 1931/2875 1932/2876 1930/2873 \nf 1930/2873 1929/2872 1931/2875 \nf 1933/2877 1931/2874 1929/2871 \nf 1929/2871 1934/2878 1933/2877 \nf 1934/2878 1929/2871 1928/2869 \nf 1928/2869 1935/2879 1934/2878 \nf 1936/2880 1937/2881 1935/2879 \nf 1935/2879 1928/2869 1936/2880 \nf 1937/2881 1936/2880 1938/2882 \nf 1938/2882 1939/2883 1937/2881 \nf 1940/2884 1939/2883 1941/2885 \nf 1939/2883 1938/2882 1941/2885 \nf 1942/2886 1943/2887 1940/2884 \nf 1940/2884 1941/2885 1942/2886 \nf 1943/2887 1942/2886 1944/2888 \nf 1944/2888 1945/2889 1943/2887 \nf 1946/2891 1947/2893 1948/2894 \nf 1948/2894 1926/2867 1946/2891 \nf 1949/2896 1946/2891 1926/2867 \nf 1926/2867 1925/2866 1949/2896 \nf 1946/2890 1949/2895 1950/2897 \nf 1950/2897 1951/2898 1946/2890 \nf 1947/2892 1946/2890 1951/2898 \nf 1951/2898 1952/2899 1947/2892 \nf 1953/2900 1954/2902 1955/2903 \nf 1955/2903 1956/2905 1953/2900 \nf 1957/2906 1958/2907 1959/2908 \nf 1959/2908 1960/2909 1957/2906 \nf 1961/2911 1962/2912 1963/2914 \nf 1961/2911 1964/2915 1962/2912 \nf 1965/2917 1964/2915 1961/2911 \nf 1965/2917 1966/2918 1964/2915 \nf 1967/2919 1963/2913 1968/2920 \nf 1967/2919 1961/2910 1963/2913 \nf 1969/2921 1961/2910 1967/2919 \nf 1969/2921 1965/2916 1961/2910 \nf 1943/2887 1970/2922 1940/2884 \nf 1943/2887 1971/2923 1970/2922 \nf 1945/2889 1971/2923 1943/2887 \nf 1945/2889 1972/2924 1971/2923 \nf 1963/2914 1973/2925 1974/2927 \nf 1963/2914 1962/2912 1973/2925 \nf 1968/2920 1974/2926 1975/2928 \nf 1968/2920 1963/2913 1974/2926 \nf 1976/2929 1939/2883 1940/2884 \nf 1940/2884 1970/2922 1976/2929 \nf 1955/2904 1977/2930 1978/2932 \nf 1955/2904 1979/2933 1977/2930 \nf 1954/2901 1979/2933 1955/2904 \nf 1956/2905 1955/2903 1978/2931 \nf 1935/2879 1980/2934 1934/2878 \nf 1935/2879 1981/2935 1980/2934 \nf 1982/2936 1983/2937 1984/2938 \nf 1985/2939 1986/2940 1987/2941 \nf 1988/2942 1989/2943 1990/2944 \nf 1988/2942 1991/2945 1989/2943 \nf 1992/2946 1983/2937 1982/2936 \nf 1992/2946 1993/2947 1983/2937 \nf 1994/2948 1995/2949 1996/2950 \nf 1994/2948 1997/2951 1995/2949 \nf 1998/2952 1999/2953 2000/2954 \nf 1998/2952 1996/2950 1999/2953 \nf 2001/2955 1996/2950 1998/2952 \nf 2001/2955 1994/2948 1996/2950 \nf 2002/2956 2003/2957 2004/2958 \nf 2002/2956 2005/2959 2003/2957 \nf 2006/2960 2005/2959 2002/2956 \nf 2007/2961 2008/2964 2009/2966 \nf 2010/2967 2011/2970 2012/2972 \nf 2013/2973 2014/2974 2015/2975 \nf 2015/2975 2007/2961 2009/2966 \nf 2016/2976 2017/2977 2018/2978 \nf 2011/2970 2010/2967 2017/2977 \nf 2019/2980 2020/2981 2021/2983 \nf 2022/2984 2023/2987 2024/2990 \nf 2022/2984 2025/2991 2023/2987 \nf 2026/2992 2027/2994 2028/2996 \nf 2026/2992 2029/2998 2027/2994 \nf 2030/3000 2029/2997 2026/2993 \nf 2030/3000 2031/3001 2029/2997 \nf 2032/3003 2031/3001 2030/3000 \nf 2032/3003 2033/3004 2031/3001 \nf 2034/3006 2033/3004 2032/3003 \nf 2034/3006 2035/3007 2033/3004 \nf 2024/2989 2035/3007 2034/3006 \nf 2024/2989 2023/2986 2035/3007 \nf 2036/3008 2037/3010 2038/3012 \nf 2039/3013 2040/3015 2041/3016 \nf 2039/3013 2042/3019 2040/3015 \nf 2043/3021 2040/3015 2042/3019 \nf 2043/3021 2044/3022 2040/3015 \nf 2045/3025 2046/3026 2047/3028 \nf 2045/3025 2048/3029 2046/3026 \nf 2049/3031 2050/3032 2051/3034 \nf 2049/3031 2052/3035 2050/3032 \nf 2053/3037 2052/3035 2049/3031 \nf 2053/3037 2054/3038 2052/3035 \nf 2055/3040 2054/3038 2053/3037 \nf 2055/3040 2056/3041 2054/3038 \nf 2047/3028 2046/3026 2056/3041 \nf 2047/3028 2056/3041 2055/3040 \nf 2057/3043 2048/3029 2045/3025 \nf 2058/3044 2051/3033 2059/3045 \nf 2058/3044 2049/3030 2051/3033 \nf 2060/3046 2049/3030 2058/3044 \nf 2060/3046 2053/3036 2049/3030 \nf 2061/3047 2053/3036 2060/3046 \nf 2061/3047 2055/3039 2053/3036 \nf 2062/3048 2055/3039 2061/3047 \nf 2062/3048 2047/3027 2055/3039 \nf 2063/3049 2047/3027 2062/3048 \nf 2063/3049 2045/3024 2047/3027 \nf 2064/3050 2045/3024 2063/3049 \nf 2064/3050 2057/3042 2045/3024 \nf 2065/3051 2066/3052 2067/3054 \nf 2065/3051 2068/3057 2066/3052 \nf 2069/3059 2065/3051 2070/3060 \nf 2069/3059 2068/3057 2065/3051 \nf 2071/3061 2069/3059 2070/3060 \nf 2072/3063 2066/3053 2068/3056 \nf 2072/3063 2068/3056 2073/3064 \nf 2074/3065 2068/3056 2069/3058 \nf 2074/3065 2073/3064 2068/3056 \nf 2075/3066 2069/3058 2071/3062 \nf 2075/3066 2074/3065 2069/3058 \nf 2072/3063 2076/3067 2077/3068 \nf 2072/3063 2073/3064 2076/3067 \nf 2073/3064 2078/3069 2076/3067 \nf 2073/3064 2074/3065 2078/3069 \nf 2074/3065 2079/3070 2078/3069 \nf 2074/3065 2075/3066 2079/3070 \nf 2071/3061 2070/3060 2080/3071 \nf 2058/3044 2059/3045 2080/3071 \nf 2058/3044 2080/3071 2070/3060 \nf 2060/3046 2058/3044 2070/3060 \nf 2060/3046 2070/3060 2065/3051 \nf 2061/3047 2065/3051 2067/3054 \nf 2061/3047 2060/3046 2065/3051 \nf 2081/3075 2043/3020 2082/3077 \nf 2081/3075 2044/3023 2043/3020 \nf 2082/3077 2043/3020 2042/3017 \nf 2083/3079 2042/3018 2039/3014 \nf 2083/3079 2084/3080 2042/3018 \nf 2082/3077 2042/3017 2084/3082 \nf 2085/3083 2044/3022 2081/3074 \nf 2085/3083 2040/3015 2044/3022 \nf 2086/3085 2040/3015 2085/3083 \nf 2086/3085 2041/3016 2040/3015 \nf 2087/3086 2083/3078 2039/3013 \nf 2087/3086 2039/3013 2041/3016 \nf 2087/3086 2041/3016 2086/3085 \nf 2084/3080 2083/3079 2088/3087 \nf 2088/3088 2083/3078 2087/3086 \nf 2082/3076 2089/3089 2090/3091 \nf 2081/3072 2082/3076 2090/3091 \nf 2082/3076 2084/3081 2089/3089 \nf 2084/3080 2091/3092 2089/3090 \nf 2092/3093 2084/3080 2088/3087 \nf 2084/3080 2092/3093 2091/3092 \nf 2093/3094 2085/3084 2081/3073 \nf 2094/3096 2085/3084 2093/3094 \nf 2094/3097 2086/3085 2085/3083 \nf 2095/3098 2086/3085 2094/3097 \nf 2095/3098 2087/3086 2086/3085 \nf 2088/3088 2087/3086 2095/3098 \nf 2096/3100 2094/3096 2093/3094 \nf 2097/3103 2094/3095 2096/3102 \nf 2097/3103 2095/3099 2094/3095 \nf 2098/3104 2095/3099 2097/3103 \nf 2098/3106 2088/3088 2095/3098 \nf 2092/3093 2088/3087 2099/3107 \nf 2098/3105 2099/3107 2088/3087 \nf 2098/3105 2100/3108 2099/3107 \nf 2101/3109 2102/3110 2091/3092 \nf 2101/3109 2091/3092 2092/3093 \nf 2103/3111 2101/3109 2092/3093 \nf 2103/3111 2092/3093 2099/3107 \nf 2103/3111 2100/3108 2104/3112 \nf 2103/3111 2099/3107 2100/3108 \nf 2024/2988 2105/3113 2022/2985 \nf 2024/2988 2106/3117 2105/3113 \nf 2107/3119 2106/3117 2108/3120 \nf 2107/3119 2108/3120 2109/3121 \nf 2108/3120 2110/3122 2109/3121 \nf 2108/3120 2111/3123 2110/3122 \nf 2111/3123 2112/3124 2110/3122 \nf 2111/3123 2113/3125 2112/3124 \nf 2112/3124 2113/3125 2114/3126 \nf 2112/3124 2114/3126 2115/3129 \nf 2115/3129 2114/3126 2116/3131 \nf 2115/3128 2116/3130 2117/3132 \nf 2114/3127 2028/2995 2116/3130 \nf 2114/3126 2026/2992 2028/2996 \nf 2030/2999 2026/2992 2114/3126 \nf 2030/2999 2114/3126 2113/3125 \nf 2032/3002 2030/2999 2113/3125 \nf 2032/3002 2113/3125 2111/3123 \nf 2034/3005 2032/3002 2111/3123 \nf 2034/3005 2111/3123 2108/3120 \nf 2106/3117 2034/3005 2108/3120 \nf 2106/3117 2024/2988 2034/3005 \nf 2118/3133 2119/3136 2120/3137 \nf 2118/3133 2121/3140 2119/3136 \nf 2122/3141 2123/3143 2124/3145 \nf 2122/3141 2125/3147 2123/3143 \nf 2126/3149 2124/3144 2127/3150 \nf 2126/3149 2122/3142 2124/3144 \nf 2128/3152 2126/3149 2127/3150 \nf 2128/3152 2127/3150 2129/3153 \nf 2130/3155 2129/3153 2131/3156 \nf 2130/3155 2128/3152 2129/3153 \nf 2121/3139 2131/3156 2119/3135 \nf 2121/3139 2130/3155 2131/3156 \nf 2121/3138 2118/3134 2132/3157 \nf 2121/3138 2132/3157 2133/3160 \nf 2134/3163 2135/3165 2136/3166 \nf 2137/3168 2134/3163 2136/3166 \nf 2137/3168 2136/3166 2138/3169 \nf 2139/3170 2137/3168 2138/3169 \nf 2139/3170 2140/3171 2137/3168 \nf 2141/3172 2140/3171 2139/3170 \nf 2141/3172 2142/3173 2140/3171 \nf 2143/3174 2141/3172 2133/3160 \nf 2142/3173 2141/3172 2143/3174 \nf 2021/2983 2144/3176 2145/3178 \nf 2021/2983 2146/3181 2144/3176 \nf 2021/2983 2147/3183 2146/3181 \nf 2021/2983 2020/2981 2147/3183 \nf 2148/3185 2149/3187 2150/3188 \nf 2148/3185 2150/3188 2151/3189 \nf 2152/3191 2153/3192 2154/3193 \nf 2152/3191 2155/3195 2153/3192 \nf 2156/3197 2154/3193 2157/3198 \nf 2156/3197 2152/3191 2154/3193 \nf 2158/3200 2157/3198 2159/3201 \nf 2158/3200 2156/3197 2157/3198 \nf 2149/3187 2159/3201 2150/3188 \nf 2149/3187 2158/3200 2159/3201 \nf 2160/3203 2148/3185 2151/3189 \nf 2161/3204 2162/3205 2155/3194 \nf 2161/3204 2155/3194 2152/3190 \nf 2163/3206 2161/3204 2152/3190 \nf 2163/3206 2152/3190 2156/3196 \nf 2164/3207 2163/3206 2156/3196 \nf 2164/3207 2156/3196 2158/3199 \nf 2165/3208 2164/3207 2158/3199 \nf 2165/3208 2158/3199 2149/3186 \nf 2166/3209 2165/3208 2149/3186 \nf 2166/3209 2149/3186 2148/3184 \nf 2167/3210 2148/3184 2160/3202 \nf 2167/3210 2166/3209 2148/3184 \nf 2168/3212 2169/3213 2170/3216 \nf 2171/3218 2168/3212 2170/3216 \nf 2008/2963 2172/3219 2009/2965 \nf 2173/3220 2174/3221 2175/3222 \nf 2008/2963 2176/3223 2172/3219 \nf 2177/3224 2172/3219 2176/3223 \nf 2177/3224 2178/3225 2172/3219 \nf 2179/3226 2178/3225 2177/3224 \nf 2179/3226 2175/3222 2178/3225 \nf 2173/3220 2175/3222 2179/3226 \nf 2173/3220 2180/3227 2174/3221 \nf 2012/2971 2011/2969 2181/3228 \nf 2012/2971 2181/3228 2182/3229 \nf 2183/3230 2182/3229 2181/3228 \nf 2183/3230 2181/3228 2184/3231 \nf 2185/3232 2183/3230 2184/3231 \nf 2185/3232 2184/3231 2180/3227 \nf 2173/3220 2185/3232 2180/3227 \nf 2186/3233 2187/3234 2188/3235 \nf 2186/3233 2189/3236 2187/3234 \nf 2190/3238 2189/3236 2186/3233 \nf 2190/3238 2191/3240 2189/3236 \nf 2192/3241 2191/3239 2190/3237 \nf 2193/3244 2194/3246 2195/3247 \nf 2195/3248 2196/3249 2197/3250 \nf 2198/3255 2199/3257 2200/3261 \nf 2193/3244 2195/3247 2197/3252 \nf 2201/3263 2193/3243 2197/3251 \nf 2201/3263 2197/3251 2199/3257 \nf 2198/3255 2201/3263 2199/3257 \nf 2202/3264 2203/3267 2204/3269 \nf 2203/3267 2198/3254 2204/3269 \nf 2204/3269 2198/3254 2200/3258 \nf 2171/3217 2170/3215 2205/3270 \nf 2170/3215 2169/3214 2206/3272 \nf 2170/3215 2206/3272 2205/3270 \nf 2207/3274 2197/3250 2196/3249 \nf 2199/3256 2197/3250 2207/3274 \nf 2200/3259 2199/3256 2205/3270 \nf 2199/3256 2207/3274 2205/3270 \nf 2171/3217 2205/3270 2208/3275 \nf 2200/3260 2205/3271 2206/3273 \nf 2207/3274 2208/3275 2205/3270 \nf 2207/3274 2196/3249 2209/3276 \nf 2207/3274 2209/3276 2208/3275 \nf 2196/3249 2208/3275 2209/3276 \nf 2210/3277 2171/3217 2208/3275 \nf 2210/3277 2208/3275 2211/3278 \nf 2196/3249 2211/3278 2208/3275 \nf 2169/3214 2212/3279 2206/3272 \nf 2212/3279 2200/3259 2206/3272 \nf 2212/3279 2213/3280 2200/3259 \nf 2214/3282 2212/3279 2215/3283 \nf 2169/3214 2215/3283 2212/3279 \nf 2214/3282 2213/3280 2212/3279 \nf 2168/3212 2216/3286 2169/3213 \nf 2215/3284 2169/3213 2216/3286 \nf 2215/3283 2216/3285 2214/3282 \nf 2171/3217 2210/3277 2168/3211 \nf 2210/3277 2216/3285 2168/3211 \nf 2210/3277 2214/3282 2216/3285 \nf 2204/3269 2200/3258 2213/3281 \nf 2195/3248 2211/3278 2196/3249 \nf 2217/3287 2210/3277 2211/3278 \nf 2195/3248 2217/3287 2211/3278 \nf 2194/3246 2217/3288 2195/3247 \nf 2194/3245 2218/3289 2217/3287 \nf 2218/3289 2219/3290 2217/3287 \nf 2217/3287 2219/3290 2210/3277 \nf 2219/3290 2214/3282 2210/3277 \nf 2220/3291 2221/3292 2219/3290 \nf 2219/3290 2221/3292 2214/3282 \nf 2221/3292 2213/3280 2214/3282 \nf 2221/3292 2204/3268 2213/3280 \nf 2202/3265 2204/3268 2221/3292 \nf 2220/3291 2202/3265 2221/3292 \nf 2222/3293 2223/3295 2224/3297 \nf 2202/3265 2224/3297 2223/3295 \nf 2225/3298 2202/3265 2226/3301 \nf 2226/3301 2202/3265 2223/3295 \nf 2226/3300 2223/3296 2227/3302 \nf 2228/3303 2227/3302 2223/3296 \nf 2222/3293 2228/3304 2223/3295 \nf 2229/3306 2228/3303 2222/3294 \nf 2230/3307 2229/3305 2222/3293 \nf 2231/3309 2229/3305 2230/3307 \nf 2232/3312 2233/3313 2234/3316 \nf 2235/3319 2232/3311 2236/3321 \nf 2237/3323 2238/3325 2239/3327 \nf 2240/3329 2241/3331 2242/3334 \nf 2242/3334 2241/3331 2243/3335 \nf 2242/3334 2243/3335 2244/3339 \nf 2244/3338 2245/3340 2246/3341 \nf 2244/3338 2243/3336 2245/3340 \nf 2247/3343 2246/3341 2245/3340 \nf 2247/3343 2245/3340 2248/3344 \nf 2245/3340 2249/3347 2248/3344 \nf 2245/3340 2243/3336 2249/3347 \nf 2249/3349 2243/3335 2241/3331 \nf 2235/3319 2233/3315 2232/3311 \nf 2250/3351 2233/3314 2235/3318 \nf 2250/3351 2251/3353 2233/3314 \nf 2252/3355 2251/3353 2250/3351 \nf 2239/3327 2238/3325 2252/3356 \nf 2238/3325 2249/3346 2252/3356 \nf 2252/3355 2249/3348 2251/3353 \nf 2249/3347 2241/3330 2251/3352 \nf 2253/3358 2242/3333 2244/3337 \nf 2251/3352 2241/3330 2254/3359 \nf 2240/3328 2255/3360 2241/3330 \nf 2254/3359 2241/3330 2255/3360 \nf 2251/3352 2254/3359 2233/3313 \nf 2254/3359 2234/3316 2233/3313 \nf 2254/3359 2256/3361 2234/3316 \nf 2254/3359 2255/3360 2256/3361 \nf 2234/3316 2256/3361 2255/3360 \nf 2257/3362 2255/3360 2240/3328 \nf 2234/3316 2255/3360 2258/3363 \nf 2257/3362 2258/3363 2255/3360 \nf 2253/3358 2244/3337 2259/3365 \nf 2246/3342 2259/3365 2244/3337 \nf 2246/3341 2247/3343 2259/3364 \nf 2240/3328 2242/3332 2253/3357 \nf 2240/3328 2253/3357 2257/3362 \nf 2257/3362 2253/3357 2259/3364 \nf 2257/3362 2259/3364 2247/3343 \nf 2238/3325 2248/3345 2249/3346 \nf 2237/3322 2260/3366 2238/3324 \nf 2260/3366 2248/3344 2238/3324 \nf 2260/3366 2247/3343 2248/3344 \nf 2232/3312 2234/3316 2258/3363 \nf 2261/3367 2258/3363 2257/3362 \nf 2232/3312 2258/3363 2261/3367 \nf 2236/3321 2232/3311 2261/3368 \nf 2236/3320 2261/3367 2262/3369 \nf 2263/3370 2262/3369 2264/3371 \nf 2262/3369 2261/3367 2264/3371 \nf 2261/3367 2257/3362 2264/3371 \nf 2264/3371 2257/3362 2247/3343 \nf 2264/3371 2247/3343 2260/3366 \nf 2265/3372 2264/3371 2260/3366 \nf 2265/3372 2260/3366 2237/3322 \nf 2263/3370 2264/3371 2265/3372 \nf 2263/3370 2265/3372 2266/3373 \nf 2265/3372 2267/3374 2266/3373 \nf 2265/3372 2237/3322 2267/3374 \nf 2237/3322 2268/3375 2267/3374 \nf 2269/3377 2270/3378 2271/3379 \nf 2272/3380 2271/3379 2270/3378 \nf 2272/3380 2270/3378 2273/3383 \nf 2273/3383 2270/3378 2274/3386 \nf 2274/3386 2270/3378 2268/3376 \nf 2275/3387 2268/3376 2270/3378 \nf 2275/3387 2270/3378 2269/3377 \nf 2276/3388 2275/3387 2269/3377 \nf 2277/3389 2267/3374 2268/3375 \nf 2277/3390 2268/3376 2275/3387 \nf 2278/3391 2279/3392 2280/3393 \nf 2281/3395 2277/3390 2275/3387 \nf 2281/3395 2275/3387 2276/3388 \nf 2282/3396 2267/3374 2277/3389 \nf 2283/3397 2277/3389 2281/3394 \nf 2282/3396 2277/3389 2283/3397 \nf 2282/3396 2266/3373 2267/3374 \nf 2282/3396 2036/3009 2266/3373 \nf 2036/3009 2282/3396 2037/3011 \nf 2282/3396 2283/3397 2037/3011 \nf 2278/3391 2280/3393 2284/3399 \nf 2285/3400 2278/3391 2286/3401 \nf 2278/3391 2284/3399 2286/3401 \nf 2287/3402 2281/3395 2276/3388 \nf 2288/3404 2281/3394 2287/3403 \nf 2288/3404 2283/3397 2281/3394 \nf 2289/3406 2037/3010 2283/3398 \nf 2289/3407 2283/3397 2288/3404 \nf 2290/3409 2284/3399 2291/3411 \nf 2290/3409 2286/3401 2284/3399 \nf 2292/3413 2286/3401 2290/3409 \nf 2292/3413 2285/3400 2286/3401 \nf 2293/3414 2289/3406 2288/3405 \nf 2293/3415 2288/3404 2294/3417 \nf 2294/3417 2288/3404 2287/3403 \nf 2295/3418 2291/3410 2296/3419 \nf 2295/3418 2290/3408 2291/3410 \nf 2297/3420 2290/3408 2295/3418 \nf 2297/3420 2292/3412 2290/3408 \nf 2298/3421 2292/3412 2297/3420 \nf 2299/3422 2285/3400 2292/3413 \nf 2298/3421 2299/3424 2292/3412 \nf 2300/3425 2299/3424 2298/3421 \nf 2300/3425 2294/3416 2299/3424 \nf 2294/3417 2287/3403 2299/3423 \nf 2299/3422 2287/3402 2285/3400 \nf 2287/3402 2276/3388 2285/3400 \nf 2285/3400 2276/3388 2278/3391 \nf 2276/3388 2269/3377 2278/3391 \nf 2278/3391 2269/3377 2301/3426 \nf 2278/3391 2301/3426 2279/3392 \nf 2301/3426 2302/3427 2279/3392 \nf 2303/3429 2271/3379 2272/3380 \nf 2303/3429 2304/3430 2271/3379 \nf 2269/3377 2271/3379 2304/3430 \nf 2269/3377 2304/3430 2301/3426 \nf 2301/3426 2304/3430 2302/3427 \nf 2305/3432 2302/3427 2304/3430 \nf 2305/3432 2304/3430 2303/3429 \nf 2274/3385 2268/3375 2237/3322 \nf 2072/3063 2077/3068 2305/3431 \nf 2072/3063 2305/3431 2303/3428 \nf 2066/3053 2072/3063 2303/3428 \nf 2066/3053 2303/3428 2272/3382 \nf 2067/3054 2066/3052 2272/3381 \nf 2067/3055 2272/3380 2273/3383 \nf 2062/3048 2061/3047 2067/3054 \nf 2062/3048 2067/3054 2306/3433 \nf 2306/3433 2067/3054 2273/3384 \nf 2306/3434 2273/3383 2274/3386 \nf 2063/3049 2062/3048 2306/3433 \nf 2307/3435 2274/3385 2237/3322 \nf 2307/3435 2306/3433 2274/3385 \nf 2063/3049 2306/3433 2307/3435 \nf 2239/3326 2307/3435 2237/3322 \nf 2063/3049 2307/3435 2239/3326 \nf 2063/3049 2239/3326 2252/3354 \nf 2063/3049 2252/3354 2250/3350 \nf 2063/3049 2250/3350 2064/3050 \nf 2308/3436 2262/3369 2263/3370 \nf 2064/3050 2250/3350 2235/3317 \nf 2064/3050 2235/3317 2309/3437 \nf 2309/3437 2235/3317 2236/3320 \nf 2309/3437 2236/3320 2310/3438 \nf 2310/3438 2236/3320 2262/3369 \nf 2310/3438 2262/3369 2308/3436 \nf 2311/3439 2310/3438 2308/3436 \nf 2311/3439 2308/3436 2312/3440 \nf 2313/3442 2311/3439 2312/3440 \nf 2313/3442 2312/3440 2314/3444 \nf 2315/3445 2313/3441 2314/3443 \nf 2312/3440 2308/3436 2316/3446 \nf 2312/3440 2316/3446 2317/3447 \nf 2314/3444 2312/3440 2317/3447 \nf 2314/3444 2317/3447 2318/3448 \nf 2319/3450 2314/3443 2318/3449 \nf 2315/3445 2314/3443 2319/3450 \nf 2320/3451 2315/3445 2319/3450 \nf 2321/3452 2322/3453 2320/3451 \nf 2320/3451 2319/3450 2323/3454 \nf 2321/3452 2320/3451 2323/3454 \nf 2324/3455 2321/3452 2323/3454 \nf 2325/3456 2323/3454 2319/3450 \nf 2325/3456 2326/3457 2323/3454 \nf 2324/3455 2323/3454 2326/3457 \nf 2327/3458 2324/3455 2326/3457 \nf 2328/3459 2327/3458 2329/3460 \nf 2327/3458 2326/3457 2329/3460 \nf 2330/3461 2326/3457 2325/3456 \nf 2330/3461 2329/3460 2326/3457 \nf 2330/3461 2325/3456 2319/3450 \nf 2319/3450 2318/3449 2331/3462 \nf 2330/3461 2319/3450 2331/3462 \nf 2332/3463 2328/3459 2329/3460 \nf 2332/3463 2329/3460 2330/3461 \nf 2333/3464 2334/3465 2335/3466 \nf 2335/3466 2334/3465 2336/3467 \nf 2335/3466 2336/3467 2337/3468 \nf 2337/3468 2336/3467 2332/3463 \nf 2337/3468 2332/3463 2338/3469 \nf 2339/3470 2338/3469 2332/3463 \nf 2339/3470 2332/3463 2330/3461 \nf 2340/3471 2339/3470 2330/3461 \nf 2340/3471 2330/3461 2331/3462 \nf 2341/3472 2340/3471 2331/3462 \nf 2341/3472 2331/3462 2318/3449 \nf 2342/3475 2341/3473 2318/3448 \nf 2342/3475 2318/3448 2317/3447 \nf 2343/3476 2342/3475 2317/3447 \nf 2343/3476 2317/3447 2316/3446 \nf 2344/3477 2343/3476 2316/3446 \nf 2345/3478 2344/3477 2346/3479 \nf 2344/3477 2316/3446 2346/3479 \nf 2308/3436 2346/3479 2316/3446 \nf 2308/3436 2263/3370 2346/3479 \nf 2263/3370 2266/3373 2346/3479 \nf 2345/3478 2346/3479 2266/3373 \nf 2036/3009 2345/3478 2266/3373 \nf 2347/3480 2345/3478 2036/3009 \nf 2348/3482 2036/3008 2038/3012 \nf 2348/3482 2347/3481 2036/3008 \nf 2038/3012 2349/3483 2348/3482 \nf 2038/3012 2350/3484 2349/3483 \nf 2350/3484 2351/3485 2349/3483 \nf 2350/3484 2352/3486 2351/3485 \nf 2353/3487 2351/3485 2352/3486 \nf 2353/3487 2107/3119 2351/3485 \nf 2109/3121 2351/3485 2107/3119 \nf 2109/3121 2349/3483 2351/3485 \nf 2110/3122 2349/3483 2109/3121 \nf 2110/3122 2348/3482 2349/3483 \nf 2112/3124 2348/3482 2110/3122 \nf 2112/3124 2347/3481 2348/3482 \nf 2115/3129 2347/3481 2112/3124 \nf 2115/3128 2345/3478 2347/3480 \nf 2117/3132 2345/3478 2115/3128 \nf 2117/3132 2344/3477 2345/3478 \nf 2354/3488 2344/3477 2117/3132 \nf 2354/3488 2343/3476 2344/3477 \nf 2355/3489 2343/3476 2354/3488 \nf 2355/3489 2342/3475 2343/3476 \nf 2356/3492 2342/3474 2355/3490 \nf 2356/3492 2341/3472 2342/3474 \nf 2357/3493 2341/3472 2356/3492 \nf 2357/3493 2340/3471 2341/3472 \nf 2358/3494 2340/3471 2357/3493 \nf 2358/3494 2339/3470 2340/3471 \nf 2359/3495 2339/3470 2358/3494 \nf 2359/3495 2338/3469 2339/3470 \nf 2360/3496 2338/3469 2359/3495 \nf 2360/3496 2337/3468 2338/3469 \nf 2353/3487 2361/3498 2107/3119 \nf 2106/3116 2107/3118 2361/3499 \nf 2106/3116 2361/3499 2105/3115 \nf 2105/3115 2361/3499 2360/3497 \nf 2361/3498 2337/3468 2360/3496 \nf 2361/3498 2335/3466 2337/3468 \nf 2361/3498 2353/3487 2335/3466 \nf 2333/3464 2335/3466 2353/3487 \nf 2353/3487 2352/3486 2333/3464 \nf 2038/3012 2037/3010 2289/3406 \nf 2038/3012 2289/3406 2362/3500 \nf 2350/3484 2038/3012 2362/3500 \nf 2350/3484 2362/3500 2363/3501 \nf 2352/3486 2350/3484 2363/3501 \nf 2352/3486 2363/3501 2364/3502 \nf 2333/3464 2352/3486 2364/3502 \nf 2333/3464 2364/3502 2365/3503 \nf 2334/3465 2333/3464 2365/3503 \nf 2362/3500 2289/3406 2293/3414 \nf 2362/3500 2293/3414 2366/3505 \nf 2363/3501 2362/3500 2366/3505 \nf 2363/3501 2366/3505 2367/3506 \nf 2364/3502 2363/3501 2367/3506 \nf 2364/3502 2367/3506 2368/3507 \nf 2365/3503 2364/3502 2368/3507 \nf 2365/3504 2368/3508 2369/3509 \nf 2365/3503 2369/3511 2370/3513 \nf 2334/3465 2365/3503 2371/3514 \nf 2365/3503 2370/3513 2371/3514 \nf 2328/3459 2332/3463 2336/3467 \nf 2328/3459 2372/3515 2327/3458 \nf 2373/3516 2328/3459 2374/3517 \nf 2373/3516 2372/3515 2328/3459 \nf 2328/3459 2336/3467 2374/3517 \nf 2374/3517 2336/3467 2334/3465 \nf 2375/3518 2373/3516 2374/3517 \nf 2374/3517 2334/3465 2375/3518 \nf 2371/3514 2375/3518 2334/3465 \nf 2376/3519 2327/3458 2372/3515 \nf 2373/3516 2376/3519 2372/3515 \nf 2373/3516 2377/3520 2376/3519 \nf 2378/3521 2377/3520 2373/3516 \nf 2375/3518 2379/3522 2373/3516 \nf 2378/3521 2373/3516 2379/3522 \nf 2378/3521 2379/3522 2380/3523 \nf 2375/3518 2380/3523 2379/3522 \nf 2371/3514 2381/3524 2375/3518 \nf 2375/3518 2381/3524 2380/3523 \nf 2382/3526 2371/3514 2370/3513 \nf 2382/3526 2381/3524 2371/3514 \nf 2382/3526 2380/3523 2381/3524 \nf 2382/3526 2383/3527 2380/3523 \nf 2384/3529 2383/3528 2382/3525 \nf 2385/3530 2382/3525 2370/3512 \nf 2384/3529 2382/3525 2385/3530 \nf 2386/3531 2384/3529 2387/3534 \nf 2388/3535 2384/3529 2385/3530 \nf 2388/3535 2387/3534 2384/3529 \nf 2389/3537 2390/3538 2391/3540 \nf 2392/3542 2391/3540 2393/3543 \nf 2392/3542 2389/3537 2391/3540 \nf 2394/3544 2389/3537 2392/3542 \nf 2392/3542 2393/3543 2387/3533 \nf 2392/3542 2387/3533 2388/3536 \nf 2394/3545 2392/3541 2388/3535 \nf 2394/3545 2388/3535 2395/3546 \nf 2395/3546 2388/3535 2385/3530 \nf 2385/3530 2370/3512 2396/3547 \nf 2395/3546 2385/3530 2396/3547 \nf 2396/3547 2397/3548 2395/3546 \nf 2396/3547 2370/3512 2397/3548 \nf 2397/3548 2370/3512 2369/3510 \nf 2397/3549 2369/3509 2398/3550 \nf 2398/3550 2369/3509 2368/3508 \nf 2398/3550 2368/3508 2399/3551 \nf 2399/3552 2368/3507 2367/3506 \nf 2399/3552 2367/3506 2400/3553 \nf 2401/3554 2400/3553 2367/3506 \nf 2401/3554 2367/3506 2366/3505 \nf 2401/3554 2366/3505 2293/3414 \nf 2401/3554 2293/3414 2402/3555 \nf 2402/3555 2293/3414 2294/3416 \nf 2402/3555 2294/3416 2300/3425 \nf 2403/3556 2296/3419 2404/3557 \nf 2403/3556 2295/3418 2296/3419 \nf 2405/3558 2295/3418 2403/3556 \nf 2405/3558 2297/3420 2295/3418 \nf 2406/3559 2297/3420 2405/3558 \nf 2406/3559 2298/3421 2297/3420 \nf 2407/3560 2298/3421 2406/3559 \nf 2407/3560 2300/3425 2298/3421 \nf 2408/3561 2402/3555 2300/3425 \nf 2408/3561 2300/3425 2407/3560 \nf 2409/3562 2408/3561 2407/3560 \nf 2014/2974 2407/3560 2406/3559 \nf 2409/3562 2407/3560 2014/2974 \nf 2013/2973 2409/3562 2014/2974 \nf 2410/3563 2104/3112 2411/3564 \nf 2410/3563 2103/3111 2104/3112 \nf 2412/3565 2103/3111 2410/3563 \nf 2412/3565 2101/3109 2103/3111 \nf 2413/3566 2102/3110 2101/3109 \nf 2413/3566 2101/3109 2412/3565 \nf 2414/3567 2410/3563 2411/3564 \nf 2415/3570 2410/3563 2414/3567 \nf 2415/3570 2412/3565 2410/3563 \nf 2413/3566 2412/3565 2415/3570 \nf 2413/3566 2415/3570 2416/3572 \nf 2417/3573 2409/3562 2013/2973 \nf 2417/3574 2009/2965 2172/3219 \nf 2178/3225 2417/3574 2172/3219 \nf 2416/3571 2175/3222 2174/3221 \nf 2416/3571 2415/3569 2175/3222 \nf 2175/3222 2415/3569 2414/3568 \nf 2175/3222 2414/3568 2178/3225 \nf 2178/3225 2414/3568 2417/3574 \nf 2414/3567 2411/3564 2417/3573 \nf 2417/3573 2411/3564 2409/3562 \nf 2104/3112 2409/3562 2411/3564 \nf 2104/3112 2408/3561 2409/3562 \nf 2104/3112 2402/3555 2408/3561 \nf 2104/3112 2401/3554 2402/3555 \nf 2104/3112 2400/3553 2401/3554 \nf 2104/3112 2100/3108 2400/3553 \nf 2100/3108 2399/3552 2400/3553 \nf 2100/3108 2098/3105 2399/3552 \nf 2098/3104 2398/3550 2399/3551 \nf 2098/3104 2097/3103 2398/3550 \nf 2097/3103 2397/3549 2398/3550 \nf 2097/3103 2096/3102 2397/3549 \nf 2096/3101 2395/3546 2397/3548 \nf 2096/3101 2394/3545 2395/3546 \nf 2096/3100 2093/3094 2394/3544 \nf 2394/3544 2093/3094 2389/3537 \nf 2093/3094 2081/3073 2389/3537 \nf 2389/3537 2081/3073 2390/3538 \nf 2081/3072 2090/3091 2390/3539 \nf 2418/3578 2147/3182 2020/2982 \nf 2418/3578 2419/3580 2147/3182 \nf 2419/3580 2146/3179 2147/3182 \nf 2420/3582 2146/3180 2421/3584 \nf 2420/3582 2144/3177 2146/3180 \nf 2419/3580 2421/3585 2146/3179 \nf 2019/2980 2418/3577 2020/2981 \nf 2422/3586 2021/2983 2145/3178 \nf 2422/3586 2019/2980 2021/2983 \nf 2423/3587 2144/3176 2420/3581 \nf 2423/3587 2145/3178 2144/3176 \nf 2423/3587 2422/3586 2145/3178 \nf 2421/3584 2424/3588 2420/3582 \nf 2424/3590 2423/3587 2420/3581 \nf 2425/3591 2424/3588 2421/3584 \nf 2421/3584 2091/3092 2425/3591 \nf 2421/3584 2089/3090 2091/3092 \nf 2419/3579 2089/3089 2421/3583 \nf 2419/3579 2090/3091 2089/3089 \nf 2418/3576 2090/3091 2419/3579 \nf 2418/3576 2390/3539 2090/3091 \nf 2426/3592 2390/3538 2418/3575 \nf 2426/3592 2391/3540 2390/3538 \nf 2427/3593 2418/3575 2019/2979 \nf 2427/3593 2426/3592 2418/3575 \nf 2428/3596 2019/2980 2422/3586 \nf 2428/3595 2427/3593 2019/2979 \nf 2429/3598 2422/3586 2423/3587 \nf 2429/3598 2428/3596 2422/3586 \nf 2424/3590 2429/3598 2423/3587 \nf 2430/3599 2391/3540 2426/3592 \nf 2430/3599 2393/3543 2391/3540 \nf 2430/3599 2387/3533 2393/3543 \nf 2430/3599 2386/3532 2387/3533 \nf 2431/3601 2386/3531 2430/3600 \nf 2431/3602 2430/3599 2426/3592 \nf 2431/3602 2426/3592 2427/3593 \nf 2432/3605 2431/3602 2427/3593 \nf 2432/3605 2427/3593 2428/3595 \nf 2433/3606 2432/3604 2428/3594 \nf 2433/3606 2428/3594 2429/3597 \nf 2434/3607 2433/3606 2429/3597 \nf 2434/3607 2429/3597 2424/3589 \nf 2425/3591 2435/3609 2424/3588 \nf 2434/3608 2424/3588 2435/3609 \nf 2434/3608 2435/3609 2436/3610 \nf 2437/3611 2091/3092 2102/3110 \nf 2437/3611 2425/3591 2091/3092 \nf 2438/3612 2425/3591 2437/3611 \nf 2438/3612 2435/3609 2425/3591 \nf 2438/3612 2436/3610 2435/3609 \nf 2438/3612 2439/3613 2436/3610 \nf 2440/3614 2441/3616 2442/3618 \nf 2443/3620 2440/3614 2442/3618 \nf 2443/3620 2444/3621 2440/3614 \nf 2445/3622 2444/3621 2443/3620 \nf 2446/3624 2442/3617 2441/3615 \nf 2446/3624 2447/3625 2442/3617 \nf 2448/3626 2442/3617 2447/3625 \nf 2448/3626 2443/3619 2442/3617 \nf 2449/3627 2443/3619 2448/3626 \nf 2449/3627 2445/3623 2443/3619 \nf 2446/3624 2450/3628 2451/3629 \nf 2446/3624 2451/3629 2447/3625 \nf 2447/3625 2451/3629 2452/3630 \nf 2447/3625 2452/3630 2448/3626 \nf 2448/3626 2452/3630 2453/3631 \nf 2448/3626 2453/3631 2449/3627 \nf 2445/3622 2454/3632 2444/3621 \nf 2161/3204 2454/3632 2162/3205 \nf 2161/3204 2444/3621 2454/3632 \nf 2163/3206 2444/3621 2161/3204 \nf 2163/3206 2440/3614 2444/3621 \nf 2164/3207 2440/3614 2163/3206 \nf 2440/3614 2455/3633 2441/3616 \nf 2164/3207 2455/3633 2440/3614 \nf 2446/3624 2456/3636 2450/3628 \nf 2165/3208 2455/3633 2164/3207 \nf 2165/3208 2457/3637 2455/3633 \nf 2166/3209 2457/3637 2165/3208 \nf 2166/3209 2225/3298 2457/3637 \nf 2225/3298 2226/3301 2457/3637 \nf 2458/3639 2226/3300 2227/3302 \nf 2457/3638 2226/3300 2458/3639 \nf 2457/3637 2458/3640 2455/3633 \nf 2459/3642 2458/3639 2227/3302 \nf 2455/3634 2458/3639 2459/3642 \nf 2455/3633 2459/3643 2441/3616 \nf 2459/3642 2227/3302 2460/3644 \nf 2461/3645 2459/3642 2460/3644 \nf 2441/3615 2459/3641 2461/3646 \nf 2441/3615 2461/3646 2446/3624 \nf 2446/3624 2461/3646 2456/3636 \nf 2461/3645 2460/3644 2462/3647 \nf 2456/3635 2461/3645 2462/3647 \nf 2456/3635 2462/3647 2463/3648 \nf 2464/3649 2463/3648 2462/3647 \nf 2464/3649 2465/3650 2463/3648 \nf 2466/3651 2460/3644 2227/3302 \nf 2466/3651 2462/3647 2460/3644 \nf 2466/3651 2464/3649 2462/3647 \nf 2228/3303 2466/3651 2227/3302 \nf 2467/3652 2464/3649 2466/3651 \nf 2467/3652 2465/3650 2464/3649 \nf 2467/3652 2468/3653 2465/3650 \nf 2469/3654 2466/3651 2228/3303 \nf 2469/3654 2467/3652 2466/3651 \nf 2229/3306 2469/3654 2228/3303 \nf 2467/3652 2284/3399 2468/3653 \nf 2467/3652 2470/3655 2284/3399 \nf 2471/3656 2467/3652 2469/3654 \nf 2471/3656 2470/3655 2467/3652 \nf 2472/3658 2469/3654 2229/3306 \nf 2472/3658 2471/3656 2469/3654 \nf 2231/3309 2472/3657 2229/3305 \nf 2473/3660 2284/3399 2470/3655 \nf 2473/3660 2291/3411 2284/3399 \nf 2474/3662 2470/3655 2471/3656 \nf 2474/3662 2473/3660 2470/3655 \nf 2475/3665 2471/3656 2472/3658 \nf 2475/3665 2474/3662 2471/3656 \nf 2476/3666 2296/3419 2291/3410 \nf 2476/3666 2291/3410 2473/3659 \nf 2477/3667 2476/3666 2473/3659 \nf 2477/3667 2473/3659 2474/3661 \nf 2478/3668 2477/3667 2474/3661 \nf 2478/3668 2474/3661 2475/3664 \nf 2479/3669 2478/3668 2475/3664 \nf 2479/3669 2475/3664 2480/3670 \nf 2480/3671 2475/3663 2472/3657 \nf 2480/3671 2472/3657 2231/3309 \nf 2481/3673 2480/3671 2231/3309 \nf 2481/3672 2231/3310 2482/3674 \nf 2482/3675 2231/3309 2230/3307 \nf 2482/3674 2230/3308 2483/3676 \nf 2484/3678 2483/3677 2230/3307 \nf 2484/3678 2230/3307 2222/3293 \nf 2484/3678 2222/3293 2224/3297 \nf 2484/3678 2224/3297 2485/3679 \nf 2220/3291 2485/3679 2224/3297 \nf 2220/3291 2224/3297 2202/3265 \nf 2203/3267 2202/3264 2225/3299 \nf 2166/3209 2203/3266 2225/3298 \nf 2166/3209 2198/3253 2203/3266 \nf 2166/3209 2201/3262 2198/3253 \nf 2166/3209 2167/3210 2201/3262 \nf 2486/3680 2219/3290 2218/3289 \nf 2486/3680 2220/3291 2219/3290 \nf 2167/3210 2193/3242 2201/3262 \nf 2167/3210 2487/3681 2193/3242 \nf 2487/3681 2194/3245 2193/3242 \nf 2487/3681 2188/3235 2194/3245 \nf 2188/3235 2218/3289 2194/3245 \nf 2188/3235 2187/3234 2218/3289 \nf 2187/3234 2486/3680 2218/3289 \nf 2486/3680 2485/3679 2220/3291 \nf 2486/3680 2488/3682 2485/3679 \nf 2187/3234 2488/3682 2486/3680 \nf 2187/3234 2489/3683 2488/3682 \nf 2189/3236 2489/3683 2187/3234 \nf 2189/3236 2490/3684 2489/3683 \nf 2191/3240 2490/3684 2189/3236 \nf 2191/3240 2491/3685 2490/3684 \nf 2492/3687 2491/3686 2191/3239 \nf 2192/3241 2492/3687 2191/3239 \nf 2493/3688 2492/3687 2192/3241 \nf 2321/3452 2493/3688 2322/3453 \nf 2493/3688 2494/3689 2492/3687 \nf 2321/3452 2494/3689 2493/3688 \nf 2324/3455 2494/3689 2321/3452 \nf 2495/3690 2494/3689 2496/3691 \nf 2495/3690 2492/3687 2494/3689 \nf 2324/3455 2496/3691 2494/3689 \nf 2327/3458 2496/3691 2324/3455 \nf 2376/3519 2497/3692 2327/3458 \nf 2327/3458 2497/3692 2496/3691 \nf 2498/3693 2496/3691 2497/3692 \nf 2498/3693 2495/3690 2496/3691 \nf 2498/3693 2492/3687 2495/3690 \nf 2492/3687 2499/3694 2491/3686 \nf 2498/3693 2499/3694 2492/3687 \nf 2500/3695 2497/3692 2376/3519 \nf 2500/3695 2498/3693 2497/3692 \nf 2501/3696 2498/3693 2500/3695 \nf 2502/3697 2498/3693 2501/3696 \nf 2502/3697 2499/3694 2498/3693 \nf 2503/3698 2499/3694 2502/3697 \nf 2503/3698 2491/3686 2499/3694 \nf 2504/3700 2491/3685 2503/3699 \nf 2504/3700 2490/3684 2491/3685 \nf 2505/3702 2490/3684 2504/3700 \nf 2505/3702 2489/3683 2490/3684 \nf 2506/3703 2489/3683 2505/3702 \nf 2506/3703 2488/3682 2489/3683 \nf 2507/3704 2488/3682 2506/3703 \nf 2507/3704 2485/3679 2488/3682 \nf 2508/3706 2485/3679 2507/3704 \nf 2484/3678 2485/3679 2508/3706 \nf 2509/3707 2508/3706 2507/3704 \nf 2508/3706 2483/3677 2484/3678 \nf 2510/3709 2508/3705 2509/3708 \nf 2508/3705 2511/3710 2483/3676 \nf 2510/3709 2511/3710 2508/3705 \nf 2511/3710 2510/3709 2512/3711 \nf 2511/3710 2512/3711 2513/3712 \nf 2513/3712 2512/3711 2514/3713 \nf 2515/3714 2514/3713 2143/3174 \nf 2513/3712 2514/3713 2516/3715 \nf 2515/3714 2516/3715 2514/3713 \nf 2515/3714 2517/3716 2516/3715 \nf 2517/3716 2515/3714 2518/3717 \nf 2517/3716 2518/3717 2519/3718 \nf 2511/3710 2482/3674 2483/3676 \nf 2511/3710 2520/3719 2482/3674 \nf 2513/3712 2520/3719 2511/3710 \nf 2513/3712 2521/3720 2520/3719 \nf 2516/3715 2521/3720 2513/3712 \nf 2516/3715 2522/3721 2521/3720 \nf 2517/3716 2522/3721 2516/3715 \nf 2517/3716 2523/3722 2522/3721 \nf 2519/3718 2523/3722 2517/3716 \nf 2519/3718 2524/3724 2523/3722 \nf 2520/3719 2481/3672 2482/3674 \nf 2520/3719 2525/3725 2481/3672 \nf 2521/3720 2525/3725 2520/3719 \nf 2521/3720 2526/3726 2525/3725 \nf 2522/3721 2526/3726 2521/3720 \nf 2522/3721 2527/3727 2526/3726 \nf 2523/3722 2527/3727 2522/3721 \nf 2523/3723 2528/3729 2527/3728 \nf 2523/3722 2529/3733 2528/3731 \nf 2523/3722 2524/3724 2529/3733 \nf 2530/3734 2529/3733 2524/3724 \nf 2531/3736 2529/3732 2530/3735 \nf 2531/3736 2532/3737 2529/3732 \nf 2533/3738 2532/3737 2531/3736 \nf 2532/3737 2533/3738 2534/3739 \nf 2532/3737 2534/3739 2529/3732 \nf 2534/3739 2528/3730 2529/3732 \nf 2534/3740 2535/3741 2528/3729 \nf 2535/3741 2527/3728 2528/3729 \nf 2535/3741 2536/3742 2527/3728 \nf 2536/3743 2526/3726 2527/3727 \nf 2536/3743 2537/3744 2526/3726 \nf 2538/3745 2526/3726 2537/3744 \nf 2538/3745 2525/3725 2526/3726 \nf 2538/3745 2481/3672 2525/3725 \nf 2538/3745 2539/3746 2481/3672 \nf 2539/3746 2480/3670 2481/3672 \nf 2539/3746 2479/3669 2480/3670 \nf 2540/3747 2296/3419 2476/3666 \nf 2540/3747 2404/3557 2296/3419 \nf 2541/3748 2476/3666 2477/3667 \nf 2541/3748 2540/3747 2476/3666 \nf 2542/3749 2477/3667 2478/3668 \nf 2542/3749 2541/3748 2477/3667 \nf 2543/3750 2478/3668 2479/3669 \nf 2543/3750 2542/3749 2478/3668 \nf 2544/3751 2479/3669 2539/3746 \nf 2544/3751 2543/3750 2479/3669 \nf 2545/3752 2543/3750 2544/3751 \nf 2018/2978 2542/3749 2543/3750 \nf 2545/3752 2018/2978 2543/3750 \nf 2016/2976 2018/2978 2545/3752 \nf 2546/3753 2439/3613 2438/3612 \nf 2546/3753 2547/3754 2439/3613 \nf 2548/3755 2438/3612 2437/3611 \nf 2548/3755 2546/3753 2438/3612 \nf 2413/3566 2437/3611 2102/3110 \nf 2413/3566 2548/3755 2437/3611 \nf 2549/3756 2547/3754 2546/3753 \nf 2550/3759 2549/3756 2546/3753 \nf 2550/3759 2546/3753 2548/3755 \nf 2413/3566 2550/3759 2548/3755 \nf 2413/3566 2416/3572 2550/3759 \nf 2551/3760 2016/2976 2545/3752 \nf 2551/3761 2181/3228 2011/2969 \nf 2184/3231 2181/3228 2551/3761 \nf 2416/3571 2174/3221 2180/3227 \nf 2416/3571 2180/3227 2550/3758 \nf 2180/3227 2549/3757 2550/3758 \nf 2180/3227 2184/3231 2549/3757 \nf 2184/3231 2551/3761 2549/3757 \nf 2549/3756 2551/3760 2547/3754 \nf 2551/3760 2545/3752 2547/3754 \nf 2439/3613 2547/3754 2545/3752 \nf 2439/3613 2545/3752 2544/3751 \nf 2439/3613 2544/3751 2539/3746 \nf 2439/3613 2539/3746 2538/3745 \nf 2439/3613 2538/3745 2537/3744 \nf 2439/3613 2537/3744 2436/3610 \nf 2436/3610 2537/3744 2536/3743 \nf 2436/3610 2536/3743 2434/3608 \nf 2434/3607 2536/3742 2535/3741 \nf 2434/3607 2535/3741 2433/3606 \nf 2433/3606 2535/3741 2534/3740 \nf 2433/3606 2534/3740 2432/3604 \nf 2432/3603 2534/3739 2533/3738 \nf 2432/3603 2533/3738 2431/3601 \nf 2431/3601 2533/3738 2386/3531 \nf 2533/3738 2531/3736 2386/3531 \nf 2386/3531 2531/3736 2384/3529 \nf 2384/3529 2531/3736 2530/3735 \nf 2384/3529 2530/3735 2383/3528 \nf 2530/3734 2380/3523 2383/3527 \nf 2378/3521 2380/3523 2552/3762 \nf 2530/3734 2552/3762 2380/3523 \nf 2530/3734 2524/3724 2552/3762 \nf 2524/3724 2378/3521 2552/3762 \nf 2524/3724 2519/3718 2378/3521 \nf 2377/3520 2378/3521 2519/3718 \nf 2518/3717 2553/3763 2519/3718 \nf 2377/3520 2519/3718 2553/3763 \nf 2376/3519 2377/3520 2553/3763 \nf 2376/3519 2553/3763 2500/3695 \nf 2518/3717 2554/3764 2553/3763 \nf 2554/3764 2500/3695 2553/3763 \nf 2501/3696 2500/3695 2555/3765 \nf 2554/3764 2555/3765 2500/3695 \nf 2515/3714 2143/3174 2556/3766 \nf 2556/3766 2518/3717 2515/3714 \nf 2556/3766 2554/3764 2518/3717 \nf 2133/3161 2556/3767 2143/3175 \nf 2133/3161 2132/3159 2556/3767 \nf 2132/3159 2557/3769 2556/3767 \nf 2556/3766 2557/3768 2554/3764 \nf 2557/3768 2555/3765 2554/3764 \nf 2557/3768 2558/3770 2555/3765 \nf 2558/3770 2501/3696 2555/3765 \nf 2558/3770 2559/3771 2501/3696 \nf 2559/3771 2502/3697 2501/3696 \nf 2559/3771 2560/3772 2502/3697 \nf 2560/3772 2503/3698 2502/3697 \nf 2560/3772 2561/3773 2503/3698 \nf 2561/3773 2504/3701 2503/3698 \nf 2561/3773 2562/3776 2504/3701 \nf 2562/3775 2505/3702 2504/3700 \nf 2562/3775 2563/3777 2505/3702 \nf 2563/3777 2506/3703 2505/3702 \nf 2563/3777 2564/3778 2506/3703 \nf 2564/3778 2507/3704 2506/3703 \nf 2142/3173 2143/3174 2514/3713 \nf 2142/3173 2514/3713 2512/3711 \nf 2140/3171 2142/3173 2512/3711 \nf 2140/3171 2512/3711 2510/3709 \nf 2137/3168 2140/3171 2510/3709 \nf 2137/3168 2510/3709 2509/3708 \nf 2134/3163 2137/3168 2509/3708 \nf 2134/3162 2509/3707 2507/3704 \nf 2564/3778 2134/3162 2507/3704 \nf 2134/3162 2564/3778 2135/3164 \nf 2136/3167 2135/3164 2125/3146 \nf 2136/3166 2125/3147 2122/3141 \nf 2126/3148 2136/3166 2122/3141 \nf 2126/3148 2138/3169 2136/3166 \nf 2128/3151 2138/3169 2126/3148 \nf 2128/3151 2139/3170 2138/3169 \nf 2130/3154 2139/3170 2128/3151 \nf 2130/3154 2141/3172 2139/3170 \nf 2133/3160 2130/3154 2121/3138 \nf 2133/3160 2141/3172 2130/3154 \nf 2565/3779 2007/2962 2566/3781 \nf 2565/3779 2566/3781 2567/3783 \nf 2567/3783 2566/3781 2568/3785 \nf 2567/3782 2568/3784 2569/3786 \nf 2569/3786 2568/3784 2570/3787 \nf 2569/3786 2570/3787 2571/3788 \nf 2571/3788 2570/3787 2572/3789 \nf 2571/3788 2572/3789 2573/3790 \nf 2574/3791 2573/3790 2572/3789 \nf 2574/3791 2572/3789 2575/3792 \nf 2576/3793 2574/3791 2575/3792 \nf 2576/3793 2575/3792 2577/3794 \nf 2578/3797 2576/3793 2577/3794 \nf 2578/3796 2577/3795 2579/3799 \nf 2580/3800 2578/3796 2579/3799 \nf 2580/3800 2579/3799 2010/2968 \nf 2581/3801 2404/3557 2582/3804 \nf 2581/3801 2403/3556 2404/3557 \nf 2583/3805 2403/3556 2581/3801 \nf 2583/3805 2405/3558 2403/3556 \nf 2015/2975 2014/2974 2584/3806 \nf 2014/2974 2406/3559 2584/3806 \nf 2584/3806 2406/3559 2405/3558 \nf 2584/3806 2405/3558 2583/3805 \nf 2585/3808 2582/3803 2586/3810 \nf 2585/3808 2581/3802 2582/3803 \nf 2587/3812 2581/3802 2585/3808 \nf 2587/3811 2583/3805 2581/3801 \nf 2588/3813 2583/3805 2587/3811 \nf 2588/3813 2584/3806 2583/3805 \nf 2015/2975 2584/3806 2588/3813 \nf 2585/3807 2586/3809 2572/3789 \nf 2585/3807 2572/3789 2570/3787 \nf 2568/3784 2585/3807 2570/3787 \nf 2568/3784 2587/3811 2585/3807 \nf 2566/3780 2587/3811 2568/3784 \nf 2566/3780 2588/3813 2587/3811 \nf 2007/2961 2588/3813 2566/3780 \nf 2007/2961 2015/2975 2588/3813 \nf 2589/3814 2590/3816 2540/3747 \nf 2589/3814 2540/3747 2541/3748 \nf 2590/3816 2404/3557 2540/3747 \nf 2590/3816 2582/3804 2404/3557 \nf 2017/2977 2591/3817 2592/3818 \nf 2017/2977 2592/3818 2018/2978 \nf 2018/2978 2592/3818 2542/3749 \nf 2592/3818 2541/3748 2542/3749 \nf 2592/3818 2589/3814 2541/3748 \nf 2593/3820 2582/3803 2590/3815 \nf 2593/3820 2586/3810 2582/3803 \nf 2594/3821 2590/3816 2589/3814 \nf 2594/3822 2593/3820 2590/3815 \nf 2591/3817 2589/3814 2592/3818 \nf 2591/3817 2594/3821 2589/3814 \nf 2593/3819 2572/3789 2586/3809 \nf 2593/3819 2575/3792 2572/3789 \nf 2577/3794 2575/3792 2593/3819 \nf 2577/3794 2593/3819 2594/3821 \nf 2579/3798 2577/3794 2594/3821 \nf 2594/3821 2591/3817 2579/3798 \nf 2579/3798 2591/3817 2010/2967 \nf 2010/2967 2591/3817 2017/2977 \nf 2595/3824 2596/3825 2597/3827 \nf 2595/3824 2598/3828 2596/3825 \nf 2599/3831 2598/3828 2595/3824 \nf 2599/3831 2600/3833 2598/3828 \nf 2601/3835 2600/3832 2599/3830 \nf 2601/3835 2602/3836 2600/3832 \nf 2603/3839 2602/3836 2601/3835 \nf 2603/3839 2604/3840 2602/3836 \nf 2605/3842 2604/3840 2603/3839 \nf 2605/3842 2606/3843 2604/3840 \nf 2607/3846 2606/3843 2605/3842 \nf 2607/3846 2608/3848 2606/3843 \nf 2597/3827 2025/2991 2022/2984 \nf 2597/3827 2596/3825 2025/2991 \nf 2028/2996 2608/3847 2607/3845 \nf 2028/2996 2027/2994 2608/3847 \nf 2609/3849 2610/3850 2360/3496 \nf 2609/3849 2360/3496 2359/3495 \nf 2611/3851 2609/3849 2359/3495 \nf 2611/3851 2359/3495 2358/3494 \nf 2357/3493 2611/3851 2358/3494 \nf 2357/3493 2612/3852 2611/3851 \nf 2356/3492 2612/3852 2357/3493 \nf 2356/3492 2613/3854 2612/3852 \nf 2355/3489 2613/3853 2356/3491 \nf 2355/3489 2614/3855 2613/3853 \nf 2615/3856 2614/3855 2355/3489 \nf 2615/3856 2355/3489 2354/3488 \nf 2117/3132 2615/3856 2354/3488 \nf 2105/3114 2597/3827 2022/2984 \nf 2105/3113 2610/3850 2597/3826 \nf 2117/3132 2116/3130 2615/3856 \nf 2595/3823 2597/3826 2610/3850 \nf 2595/3823 2610/3850 2609/3849 \nf 2611/3851 2595/3823 2609/3849 \nf 2611/3851 2599/3829 2595/3823 \nf 2612/3852 2599/3829 2611/3851 \nf 2612/3852 2601/3834 2599/3829 \nf 2613/3854 2601/3834 2612/3852 \nf 2613/3854 2603/3838 2601/3834 \nf 2605/3841 2603/3837 2613/3853 \nf 2605/3841 2613/3853 2614/3855 \nf 2607/3844 2605/3841 2614/3855 \nf 2607/3844 2614/3855 2615/3856 \nf 2116/3130 2607/3844 2615/3856 \nf 2116/3130 2028/2995 2607/3844 \nf 2616/3858 2617/3859 2618/3860 \nf 2616/3858 2619/3862 2617/3859 \nf 2620/3865 2618/3860 2621/3867 \nf 2620/3865 2616/3858 2618/3860 \nf 2622/3869 2621/3866 2623/3870 \nf 2622/3869 2620/3864 2621/3866 \nf 2624/3873 2623/3870 2625/3874 \nf 2624/3873 2622/3869 2623/3870 \nf 2626/3876 2625/3874 2627/3877 \nf 2626/3876 2624/3873 2625/3874 \nf 2628/3880 2627/3877 2629/3882 \nf 2628/3880 2626/3876 2627/3877 \nf 2619/3862 2120/3137 2617/3859 \nf 2619/3862 2118/3133 2120/3137 \nf 2125/3147 2629/3881 2123/3143 \nf 2125/3147 2628/3879 2629/3881 \nf 2563/3777 2630/3883 2564/3778 \nf 2630/3883 2563/3777 2562/3775 \nf 2630/3883 2562/3775 2631/3884 \nf 2562/3775 2632/3885 2631/3884 \nf 2562/3775 2561/3774 2632/3885 \nf 2561/3773 2633/3887 2632/3886 \nf 2561/3773 2560/3772 2633/3887 \nf 2560/3772 2634/3888 2633/3887 \nf 2560/3772 2559/3771 2634/3888 \nf 2634/3888 2559/3771 2558/3770 \nf 2634/3888 2558/3770 2635/3889 \nf 2635/3889 2558/3770 2557/3768 \nf 2635/3889 2557/3768 2636/3890 \nf 2132/3157 2619/3861 2636/3890 \nf 2132/3158 2118/3133 2619/3862 \nf 2105/3113 2360/3496 2610/3850 \nf 2132/3157 2636/3890 2557/3768 \nf 2630/3883 2135/3164 2564/3778 \nf 2616/3857 2636/3890 2619/3861 \nf 2616/3857 2635/3889 2636/3890 \nf 2634/3888 2635/3889 2616/3857 \nf 2634/3888 2616/3857 2620/3863 \nf 2633/3887 2634/3888 2620/3863 \nf 2633/3887 2620/3863 2622/3868 \nf 2632/3886 2633/3887 2622/3868 \nf 2632/3886 2622/3868 2624/3872 \nf 2626/3875 2632/3885 2624/3871 \nf 2626/3875 2631/3884 2632/3885 \nf 2628/3878 2631/3884 2626/3875 \nf 2628/3878 2630/3883 2631/3884 \nf 2135/3164 2630/3883 2628/3878 \nf 2135/3164 2628/3878 2125/3146 \nf 551/828 552/829 553/831 \nf 551/828 553/831 554/833 \nf 555/835 554/834 553/832 \nf 555/835 553/832 556/837 \nf 556/837 557/838 555/835 \nf 556/837 558/840 557/838 \nf 559/841 557/838 558/840 \nf 559/841 558/840 560/843 \nf 561/846 554/834 555/835 \nf 561/846 555/835 562/847 \nf 561/846 562/847 563/848 \nf 561/845 563/849 564/851 \nf 565/854 564/851 563/849 \nf 563/848 562/847 566/855 \nf 555/835 557/838 566/855 \nf 555/835 566/855 562/847 \nf 566/855 557/838 559/841 \nf 563/848 566/855 567/856 \nf 568/858 565/853 563/848 \nf 568/858 563/848 567/856 \nf 566/855 569/859 567/856 \nf 569/859 568/858 567/856 \nf 566/855 570/860 569/859 \nf 566/855 559/841 570/860 \nf 570/860 571/862 569/859 \nf 570/860 572/865 571/862 \nf 573/866 561/845 564/851 \nf 573/866 574/868 561/845 \nf 574/869 554/833 561/844 \nf 574/869 551/828 554/833 \nf 575/871 551/828 574/869 \nf 576/872 551/828 575/871 \nf 552/829 551/828 576/872 \nf 552/829 576/872 577/873 \nf 575/871 577/873 576/872 \nf 575/871 578/874 577/873 \nf 579/875 552/829 577/873 \nf 577/873 580/876 579/875 \nf 577/873 578/874 580/876 \nf 552/829 579/875 581/877 \nf 552/829 581/877 553/831 \nf 582/882 553/831 581/877 \nf 582/881 556/836 553/830 \nf 583/883 556/836 582/881 \nf 583/884 582/880 584/886 \nf 583/883 558/839 556/836 \nf 584/886 585/887 583/884 \nf 584/886 586/889 585/887 \nf 583/883 560/842 558/839 \nf 583/883 587/890 560/842 \nf 585/887 586/889 588/893 \nf 585/887 588/893 589/895 \nf 590/896 587/890 591/900 \nf 590/898 559/841 560/843 \nf 590/898 592/902 559/841 \nf 570/860 559/841 592/902 \nf 570/860 592/902 572/865 \nf 588/892 586/888 593/903 \nf 588/892 593/903 594/906 \nf 595/907 593/903 586/888 \nf 595/907 586/888 584/885 \nf 596/908 595/907 584/885 \nf 595/907 596/908 597/909 \nf 595/907 597/909 598/910 \nf 599/911 597/909 596/908 \nf 582/879 599/911 596/908 \nf 596/908 584/885 582/879 \nf 582/879 581/878 599/911 \nf 581/878 600/912 599/911 \nf 581/877 579/875 600/913 \nf 579/875 601/914 600/913 \nf 579/875 580/876 601/914 \nf 602/915 597/909 599/911 \nf 600/913 601/914 602/916 \nf 603/919 594/906 593/903 \nf 603/919 593/903 604/920 \nf 605/922 603/918 604/921 \nf 605/922 604/921 606/923 \nf 606/923 607/924 605/922 \nf 606/923 608/925 607/924 \nf 607/924 609/926 605/922 \nf 607/924 610/927 609/926 \nf 609/926 611/929 605/922 \nf 611/929 603/918 605/922 \nf 609/926 612/930 611/929 \nf 612/930 613/933 611/929 \nf 612/930 614/935 613/933 \nf 613/932 615/936 611/928 \nf 611/928 615/936 603/917 \nf 594/905 603/917 615/936 \nf 594/904 615/937 616/938 \nf 613/932 616/939 615/936 \nf 617/940 594/904 616/938 \nf 617/940 588/891 594/904 \nf 617/940 589/894 588/891 \nf 617/940 618/941 589/894 \nf 619/942 617/940 616/938 \nf 618/941 617/940 619/942 \nf 619/942 616/938 613/931 \nf 619/942 613/931 620/943 \nf 621/944 620/943 613/931 \nf 621/944 613/931 614/934 \nf 622/945 620/943 621/944 \nf 569/859 623/947 568/858 \nf 569/859 624/950 623/947 \nf 569/859 571/862 624/950 \nf 624/949 625/951 626/952 \nf 627/953 626/952 625/951 \nf 625/951 590/897 627/953 \nf 590/897 591/899 627/953 \nf 590/897 625/951 592/901 \nf 625/951 572/864 592/901 \nf 624/949 572/864 625/951 \nf 568/857 628/954 565/852 \nf 628/954 564/850 565/852 \nf 628/954 573/867 564/850 \nf 628/954 568/857 623/946 \nf 572/863 624/948 571/861 \nf 629/955 630/956 631/957 \nf 629/955 631/957 632/958 \nf 631/957 630/956 633/959 \nf 634/961 629/955 632/958 \nf 634/961 635/963 629/955 \nf 630/956 629/955 636/965 \nf 630/956 636/965 637/967 \nf 638/971 639/973 637/969 \nf 638/971 640/975 639/973 \nf 641/976 640/974 638/970 \nf 638/970 642/979 641/976 \nf 643/982 639/973 640/975 \nf 641/976 643/980 640/974 \nf 643/982 633/960 639/973 \nf 633/960 643/982 644/983 \nf 645/985 644/984 643/981 \nf 641/976 645/987 643/980 \nf 645/986 641/977 646/989 \nf 647/990 646/989 641/977 \nf 647/990 641/977 648/992 \nf 642/979 648/993 641/976 \nf 645/985 646/988 649/994 \nf 645/985 650/995 644/984 \nf 649/994 650/995 645/985 \nf 649/994 651/996 650/995 \nf 642/979 638/970 637/968 \nf 642/979 637/968 636/966 \nf 652/997 642/979 636/966 \nf 642/978 652/999 648/991 \nf 653/1000 648/991 652/999 \nf 652/998 635/964 653/1001 \nf 652/997 636/966 654/1002 \nf 655/1005 647/990 648/992 \nf 655/1004 648/991 653/1000 \nf 656/1006 650/995 651/996 \nf 656/1006 657/1007 650/995 \nf 650/995 657/1007 658/1008 \nf 650/995 658/1008 644/984 \nf 658/1009 659/1010 644/983 \nf 633/960 644/983 659/1010 \nf 658/1009 660/1011 659/1010 \nf 660/1012 658/1008 661/1013 \nf 657/1007 661/1013 658/1008 \nf 662/1014 660/1012 661/1013 \nf 662/1014 663/1017 660/1012 \nf 664/1018 663/1016 662/1015 \nf 664/1018 665/1019 663/1016 \nf 663/1016 665/1019 660/1011 \nf 659/1010 660/1011 665/1019 \nf 664/1018 666/1020 665/1019 \nf 666/1020 667/1021 665/1019 \nf 667/1021 659/1010 665/1019 \nf 668/1023 659/1010 667/1021 \nf 668/1023 633/960 659/1010 \nf 631/957 633/959 668/1022 \nf 662/1014 661/1013 657/1007 \nf 639/972 633/959 630/956 \nf 635/963 654/1003 629/955 \nf 629/955 654/1003 636/965 \nf 652/997 654/1002 635/962 \nf 669/1024 670/1025 671/1026 \nf 669/1024 671/1026 672/1027 \nf 669/1024 673/1029 670/1025 \nf 669/1024 674/1032 673/1029 \nf 669/1024 675/1034 674/1032 \nf 669/1024 676/1035 675/1034 \nf 676/1035 669/1024 677/1036 \nf 669/1024 672/1027 677/1036 \nf 678/1038 674/1031 675/1033 \nf 678/1038 675/1033 679/1040 \nf 680/1042 678/1038 679/1040 \nf 680/1041 681/1043 678/1037 \nf 682/1044 673/1028 674/1030 \nf 682/1044 674/1030 678/1037 \nf 681/1043 682/1044 678/1037 \nf 681/1043 683/1045 682/1044 \nf 684/1047 680/1042 679/1040 \nf 680/1042 684/1047 685/1050 \nf 680/1041 685/1049 686/1051 \nf 687/1053 686/1051 685/1049 \nf 687/1053 688/1056 686/1051 \nf 681/1043 689/1057 683/1045 \nf 680/1041 686/1051 690/1058 \nf 680/1041 690/1058 681/1043 \nf 688/1056 690/1058 686/1051 \nf 681/1043 690/1058 691/1059 \nf 681/1043 691/1059 689/1057 \nf 688/1056 692/1061 690/1058 \nf 691/1059 690/1058 692/1061 \nf 691/1059 692/1061 693/1062 \nf 694/1063 693/1062 692/1061 \nf 694/1063 692/1061 695/1064 \nf 687/1053 695/1064 692/1061 \nf 691/1059 693/1062 696/1065 \nf 691/1059 696/1065 689/1057 \nf 687/1054 692/1060 688/1055 \nf 687/1053 697/1066 695/1064 \nf 698/1067 685/1048 684/1046 \nf 679/1039 698/1067 684/1046 \nf 698/1067 699/1068 685/1048 \nf 685/1048 699/1068 700/1069 \nf 685/1048 700/1069 687/1052 \nf 701/1071 702/1073 703/1076 \nf 702/1073 701/1071 704/1078 \nf 705/1080 706/1084 707/1085 \nf 705/1080 708/1089 706/1084 \nf 708/1087 709/1090 706/1082 \nf 701/1071 707/1085 710/1093 \nf 704/1078 701/1071 710/1093 \nf 704/1078 710/1093 711/1095 \nf 712/1096 704/1077 711/1094 \nf 712/1096 713/1099 702/1072 \nf 712/1096 702/1072 704/1077 \nf 714/1100 702/1072 713/1099 \nf 715/1101 713/1098 712/1097 \nf 715/1101 716/1102 713/1098 \nf 717/1103 716/1102 715/1101 \nf 715/1101 712/1097 718/1105 \nf 712/1096 711/1094 718/1104 \nf 715/1101 718/1105 719/1106 \nf 720/1107 707/1086 706/1083 \nf 711/1095 710/1093 721/1109 \nf 721/1109 710/1093 707/1085 \nf 721/1109 707/1085 720/1108 \nf 722/1111 721/1109 720/1108 \nf 723/1113 721/1109 722/1111 \nf 723/1113 722/1111 724/1116 \nf 725/1121 723/1113 724/1116 \nf 722/1111 720/1108 726/1122 \nf 719/1106 718/1105 727/1125 \nf 719/1106 727/1125 728/1127 \nf 728/1127 727/1125 725/1120 \nf 728/1126 725/1119 729/1129 \nf 718/1104 723/1112 727/1124 \nf 711/1095 721/1109 723/1113 \nf 718/1104 711/1094 723/1112 \nf 729/1128 725/1118 730/1131 \nf 729/1128 730/1131 731/1132 \nf 731/1132 730/1131 732/1135 \nf 731/1132 732/1135 733/1136 \nf 734/1139 733/1136 732/1135 \nf 734/1139 735/1141 733/1136 \nf 725/1118 736/1142 730/1131 \nf 732/1134 730/1130 736/1144 \nf 732/1134 736/1144 737/1145 \nf 738/1148 732/1133 737/1146 \nf 739/1150 738/1148 737/1146 \nf 739/1150 737/1146 740/1152 \nf 738/1148 734/1138 732/1133 \nf 741/1154 739/1150 740/1152 \nf 741/1154 740/1152 742/1156 \nf 743/1159 741/1154 742/1156 \nf 743/1159 744/1163 741/1154 \nf 742/1155 745/1164 743/1158 \nf 736/1144 740/1151 737/1145 \nf 736/1144 746/1167 740/1151 \nf 746/1167 745/1164 742/1155 \nf 746/1167 742/1155 740/1151 \nf 724/1115 746/1166 736/1143 \nf 724/1115 722/1110 746/1166 \nf 722/1110 745/1165 746/1166 \nf 722/1110 726/1123 745/1165 \nf 745/1165 726/1123 747/1170 \nf 745/1165 747/1170 748/1175 \nf 745/1164 748/1174 743/1158 \nf 743/1158 748/1174 749/1178 \nf 744/1162 750/1179 741/1153 \nf 744/1162 751/1183 750/1179 \nf 751/1183 752/1186 750/1179 \nf 751/1183 753/1189 752/1186 \nf 752/1185 754/1191 750/1180 \nf 752/1185 755/1194 754/1191 \nf 755/1194 756/1198 754/1191 \nf 755/1192 757/1200 756/1197 \nf 750/1179 754/1190 739/1149 \nf 754/1190 738/1147 739/1149 \nf 754/1190 756/1195 738/1147 \nf 750/1179 739/1149 741/1153 \nf 753/1188 758/1201 752/1184 \nf 758/1201 755/1193 752/1184 \nf 753/1188 759/1205 758/1201 \nf 759/1204 760/1207 758/1202 \nf 759/1203 761/1209 760/1208 \nf 762/1211 761/1209 759/1203 \nf 762/1211 763/1214 761/1209 \nf 764/1217 763/1213 762/1212 \nf 764/1217 765/1218 763/1213 \nf 766/1220 758/1202 760/1207 \nf 758/1201 766/1221 755/1193 \nf 766/1220 760/1207 767/1224 \nf 767/1224 768/1227 766/1220 \nf 767/1223 769/1228 768/1225 \nf 769/1228 770/1230 768/1225 \nf 769/1228 771/1234 770/1230 \nf 770/1232 771/1233 772/1235 \nf 770/1231 772/1236 773/1237 \nf 761/1210 774/1238 760/1206 \nf 774/1238 769/1229 767/1222 \nf 760/1206 774/1238 767/1222 \nf 761/1210 775/1240 774/1238 \nf 763/1214 775/1239 761/1209 \nf 763/1214 776/1242 775/1239 \nf 774/1238 777/1245 769/1229 \nf 777/1244 771/1234 769/1228 \nf 766/1219 768/1226 757/1200 \nf 766/1219 757/1200 755/1192 \nf 771/1233 778/1246 772/1235 \nf 777/1243 778/1246 771/1233 \nf 770/1231 773/1237 779/1247 \nf 770/1231 779/1247 780/1249 \nf 768/1225 770/1230 780/1248 \nf 757/1199 780/1248 781/1252 \nf 757/1199 781/1252 756/1196 \nf 756/1195 781/1251 734/1137 \nf 756/1195 734/1137 738/1147 \nf 734/1137 781/1251 782/1253 \nf 780/1249 779/1247 782/1254 \nf 780/1249 782/1254 781/1250 \nf 734/1137 782/1253 735/1140 \nf 768/1225 780/1248 757/1199 \nf 783/1255 784/1256 785/1257 \nf 786/1260 785/1257 784/1256 \nf 786/1260 787/1264 785/1257 \nf 785/1258 787/1263 705/1081 \nf 786/1262 708/1088 787/1263 \nf 787/1263 708/1088 705/1081 \nf 786/1261 709/1090 708/1087 \nf 709/1092 786/1259 788/1265 \nf 709/1092 788/1265 789/1266 \nf 786/1260 784/1256 790/1268 \nf 790/1267 788/1265 786/1259 \nf 790/1267 791/1269 788/1265 \nf 788/1265 792/1270 789/1266 \nf 793/1272 789/1266 792/1270 \nf 709/1092 789/1266 793/1272 \nf 793/1272 792/1270 794/1274 \nf 795/1275 793/1271 794/1273 \nf 747/1168 793/1271 795/1275 \nf 747/1168 796/1277 793/1271 \nf 709/1091 793/1271 796/1277 \nf 797/1280 795/1276 798/1282 \nf 720/1107 706/1083 796/1277 \nf 709/1090 796/1278 706/1082 \nf 797/1280 798/1282 799/1284 \nf 800/1286 801/1288 749/1177 \nf 749/1177 801/1288 743/1157 \nf 800/1286 802/1290 801/1288 \nf 801/1287 803/1291 751/1182 \nf 801/1287 751/1182 744/1161 \nf 801/1288 744/1160 743/1157 \nf 804/1293 805/1294 806/1296 \nf 804/1293 806/1296 803/1291 \nf 805/1294 764/1216 806/1296 \nf 764/1215 762/1211 806/1295 \nf 806/1295 762/1211 759/1203 \nf 806/1295 759/1203 753/1187 \nf 806/1295 753/1187 751/1181 \nf 595/907 598/910 807/1297 \nf 593/903 595/907 807/1297 \nf 593/903 807/1297 808/1298 \nf 808/1298 604/920 593/903 \nf 725/1118 724/1114 736/1142 \nf 725/1117 727/1124 723/1112 \nf 809/1300 810/1302 811/1306 \nf 809/1299 811/1305 812/1307 \nf 813/1309 811/1303 810/1301 \nf 813/1309 814/1310 811/1303 \nf 812/1308 811/1304 815/1312 \nf 812/1308 815/1312 816/1314 \nf 811/1303 814/1310 817/1315 \nf 811/1303 817/1315 815/1311 \nf 818/1316 812/1307 816/1313 \nf 812/1307 818/1316 809/1299 \nf 809/1299 818/1316 819/1317 \nf 819/1317 818/1316 820/1319 \nf 818/1316 816/1313 820/1319 \nf 819/1317 820/1319 821/1321 \nf 822/1322 819/1318 821/1320 \nf 823/1323 819/1318 822/1322 \nf 823/1324 809/1299 819/1317 \nf 824/1325 823/1323 822/1322 \nf 824/1325 822/1322 825/1327 \nf 825/1327 822/1322 826/1328 \nf 822/1322 821/1320 826/1328 \nf 825/1326 826/1329 827/1330 \nf 816/1314 815/1312 828/1332 \nf 817/1315 828/1331 815/1311 \nf 816/1314 828/1332 829/1334 \nf 817/1315 830/1335 828/1331 \nf 821/1321 820/1319 831/1336 \nf 821/1321 831/1336 832/1338 \nf 826/1329 833/1339 827/1330 \nf 826/1329 834/1341 833/1339 \nf 821/1320 832/1337 834/1340 \nf 821/1320 834/1340 826/1328 \nf 816/1313 829/1333 831/1336 \nf 816/1313 831/1336 820/1319 \nf 828/1332 835/1346 829/1334 \nf 830/1335 835/1345 828/1331 \nf 831/1336 835/1344 832/1338 \nf 829/1333 835/1344 831/1336 \nf 834/1341 835/1343 833/1339 \nf 832/1337 835/1342 834/1340 \nf 836/1347 837/1348 838/1350 \nf 836/1347 838/1350 839/1351 \nf 837/1348 840/1353 838/1350 \nf 837/1348 841/1354 840/1353 \nf 841/1354 842/1355 840/1353 \nf 841/1354 843/1356 842/1355 \nf 843/1356 844/1357 842/1355 \nf 845/1360 846/1361 844/1358 \nf 845/1360 847/1363 846/1361 \nf 848/1364 846/1361 847/1363 \nf 848/1364 849/1365 846/1361 \nf 839/1351 838/1350 850/1367 \nf 839/1351 850/1367 851/1368 \nf 838/1349 840/1352 852/1369 \nf 838/1349 852/1369 850/1366 \nf 840/1353 842/1355 853/1370 \nf 840/1352 853/1371 852/1369 \nf 842/1355 844/1357 854/1372 \nf 842/1355 854/1372 853/1370 \nf 844/1357 846/1362 855/1374 \nf 844/1357 855/1374 854/1372 \nf 849/1365 855/1373 846/1361 \nf 849/1365 856/1375 855/1373 \nf 857/1376 858/1377 859/1379 \nf 857/1376 859/1379 860/1380 \nf 860/1380 859/1379 861/1381 \nf 860/1380 861/1381 862/1383 \nf 862/1383 861/1381 863/1384 \nf 862/1383 863/1384 864/1385 \nf 864/1385 863/1384 865/1386 \nf 866/1389 865/1387 867/1390 \nf 866/1389 867/1390 868/1392 \nf 869/1393 868/1392 867/1390 \nf 869/1393 867/1390 870/1394 \nf 858/1377 871/1396 859/1379 \nf 858/1377 872/1397 871/1396 \nf 859/1378 871/1395 873/1398 \nf 859/1378 873/1398 861/1382 \nf 861/1382 873/1398 874/1400 \nf 861/1381 874/1399 863/1384 \nf 863/1384 874/1399 875/1401 \nf 863/1384 875/1401 865/1386 \nf 865/1386 875/1401 876/1403 \nf 865/1386 876/1403 867/1391 \nf 870/1394 867/1390 876/1402 \nf 870/1394 876/1402 877/1404 \nf 878/1406 879/1407 880/1408 \nf 878/1406 880/1408 881/1410 \nf 881/1410 880/1408 882/1411 \nf 881/1410 882/1411 883/1413 \nf 884/1414 881/1409 883/1412 \nf 878/1405 881/1409 884/1414 \nf 885/1415 878/1405 884/1414 \nf 884/1414 883/1412 886/1416 \nf 887/1417 888/1418 889/1419 \nf 887/1417 889/1419 890/1420 \nf 888/1418 891/1421 889/1419 \nf 888/1418 892/1422 891/1421 \nf 893/1423 892/1422 888/1418 \nf 893/1423 888/1418 894/1424 \nf 888/1418 887/1417 894/1424 \nf 893/1423 894/1424 895/1425 \nf 894/1424 896/1426 895/1425 \nf 894/1424 887/1417 896/1426 \nf 590/896 560/842 587/890 \nf 602/915 599/911 600/912 \nf 637/967 639/972 630/956 \nf 714/1100 897/1427 703/1075 \nf 714/1100 703/1075 702/1072 \nf 795/1275 794/1273 798/1281 \nf 748/1173 795/1276 797/1280 \nf 748/1172 797/1279 749/1176 \nf 749/1176 799/1283 800/1285 \nf 803/1292 806/1295 751/1181 \nf 802/1289 804/1293 803/1291 \nf 574/868 573/866 575/870 \nf 748/1171 747/1168 795/1275 \nf 749/1176 797/1279 799/1283 \nf 726/1122 720/1108 747/1169 \nf 720/1107 796/1277 747/1168 \nf 765/1218 776/1241 763/1213 \nf 802/1289 803/1291 801/1287 \nf 843/1356 845/1359 844/1357 \nf 864/1385 865/1386 866/1388 \nf 898/1429 701/1071 899/1431 \nf 898/1429 705/1080 701/1071 \nf 701/1071 705/1080 707/1085 \nf 785/1257 898/1428 783/1255 \nf 785/1257 705/1079 898/1428 \nf 701/1070 703/1074 899/1430 \nf 900/1433 901/1434 902/1435 \nf 903/1438 904/1439 905/1440 \nf 906/1441 900/1432 903/1437 \nf 907/1443 908/1444 909/1447 \nf 910/1448 901/1434 900/1433 \nf 911/1449 910/1448 900/1433 \nf 900/1432 906/1441 912/1451 \nf 913/1452 914/1453 915/1454 \nf 916/1455 917/1457 906/1442 \nf 918/1458 917/1456 919/1459 \nf 918/1458 920/1460 921/1462 \nf 922/1463 918/1458 921/1462 \nf 922/1463 921/1462 923/1464 \nf 917/1457 924/1467 906/1442 \nf 906/1441 924/1465 912/1451 \nf 925/1468 926/1470 927/1471 \nf 928/1472 926/1469 917/1456 \nf 929/1473 928/1472 917/1456 \nf 929/1473 917/1456 918/1458 \nf 926/1469 930/1475 924/1466 \nf 924/1465 930/1476 931/1478 \nf 932/1479 922/1463 923/1464 \nf 922/1463 932/1479 933/1480 \nf 934/1481 918/1458 922/1463 \nf 933/1480 934/1481 922/1463 \nf 934/1481 929/1473 918/1458 \nf 928/1472 935/1482 926/1469 \nf 935/1482 936/1483 926/1469 \nf 926/1469 936/1483 930/1475 \nf 935/1482 937/1484 936/1483 \nf 937/1484 938/1485 936/1483 \nf 939/1486 940/1487 941/1490 \nf 936/1483 941/1489 930/1475 \nf 938/1485 942/1492 941/1489 \nf 941/1488 942/1491 943/1493 \nf 930/1474 941/1488 943/1493 \nf 931/1477 930/1474 943/1493 \nf 942/1491 944/1494 943/1493 \nf 937/1484 945/1495 938/1485 \nf 945/1495 946/1496 938/1485 \nf 938/1485 946/1496 942/1492 \nf 946/1496 947/1498 942/1492 \nf 942/1491 947/1497 944/1494 \nf 945/1495 948/1499 946/1496 \nf 948/1499 949/1500 946/1496 \nf 946/1496 949/1500 947/1498 \nf 949/1500 950/1502 947/1498 \nf 947/1497 950/1501 951/1503 \nf 947/1497 951/1503 944/1494 \nf 950/1501 952/1504 951/1503 \nf 953/1505 954/1507 955/1509 \nf 909/1446 955/1508 921/1461 \nf 903/1436 954/1506 909/1445 \nf 924/1465 956/1510 912/1451 \nf 956/1510 924/1465 931/1478 \nf 957/1511 958/1512 959/1513 \nf 958/1512 960/1515 959/1513 \nf 958/1512 961/1516 960/1515 \nf 960/1515 961/1516 962/1520 \nf 957/1511 910/1448 958/1512 \nf 910/1448 911/1449 958/1512 \nf 961/1516 958/1512 912/1450 \nf 958/1512 911/1449 912/1450 \nf 963/1522 964/1523 965/1524 \nf 963/1521 966/1525 962/1519 \nf 962/1519 966/1525 967/1526 \nf 966/1525 968/1527 967/1526 \nf 967/1526 968/1527 969/1528 \nf 970/1531 963/1521 961/1517 \nf 970/1530 961/1516 912/1450 \nf 971/1532 963/1521 970/1531 \nf 971/1532 972/1533 963/1521 \nf 972/1533 973/1534 963/1521 \nf 963/1521 973/1534 966/1525 \nf 974/1536 971/1532 970/1531 \nf 974/1535 970/1529 931/1477 \nf 968/1527 975/1537 969/1528 \nf 975/1537 968/1527 976/1538 \nf 966/1525 977/1539 968/1527 \nf 977/1539 976/1538 968/1527 \nf 973/1534 977/1539 966/1525 \nf 978/1540 972/1533 971/1532 \nf 979/1541 978/1540 971/1532 \nf 979/1541 971/1532 974/1536 \nf 980/1542 978/1540 979/1541 \nf 981/1543 980/1542 979/1541 \nf 981/1543 979/1541 982/1545 \nf 982/1545 979/1541 974/1536 \nf 983/1547 981/1543 982/1545 \nf 983/1546 982/1544 943/1493 \nf 982/1544 974/1535 943/1493 \nf 974/1535 931/1477 943/1493 \nf 944/1494 983/1546 943/1493 \nf 984/1548 980/1542 981/1543 \nf 985/1549 984/1548 981/1543 \nf 985/1549 981/1543 983/1547 \nf 986/1551 985/1549 983/1547 \nf 986/1550 983/1546 944/1494 \nf 987/1552 984/1548 985/1549 \nf 988/1553 987/1552 985/1549 \nf 988/1553 985/1549 986/1551 \nf 989/1555 988/1553 986/1551 \nf 989/1554 986/1550 951/1503 \nf 951/1503 986/1550 944/1494 \nf 952/1504 989/1554 951/1503 \nf 990/1557 962/1519 991/1558 \nf 991/1558 962/1519 967/1526 \nf 990/1556 960/1514 962/1518 \nf 992/1560 970/1530 912/1450 \nf 970/1529 992/1559 931/1477 \nf 993/1561 994/1562 995/1564 \nf 996/1565 997/1566 998/1569 \nf 998/1568 995/1563 999/1570 \nf 1000/1574 1001/1575 1002/1576 \nf 995/1564 994/1562 1003/1577 \nf 995/1564 1003/1577 1004/1578 \nf 1005/1580 999/1570 995/1563 \nf 1006/1581 1007/1582 1008/1583 \nf 999/1571 1009/1585 1010/1586 \nf 1011/1587 1009/1584 1012/1588 \nf 1013/1590 1014/1591 1012/1588 \nf 1013/1590 1012/1588 1015/1592 \nf 1016/1593 1013/1590 1015/1592 \nf 999/1571 1017/1597 1009/1585 \nf 1005/1580 1017/1595 999/1570 \nf 1018/1598 1019/1600 1020/1601 \nf 1009/1584 1019/1599 1021/1602 \nf 1009/1584 1021/1602 1022/1603 \nf 1012/1588 1009/1584 1022/1603 \nf 1017/1596 1023/1605 1019/1599 \nf 1024/1606 1023/1604 1017/1594 \nf 1016/1593 1015/1592 1025/1607 \nf 1026/1608 1025/1607 1015/1592 \nf 1015/1592 1012/1588 1027/1609 \nf 1015/1592 1027/1609 1026/1608 \nf 1012/1588 1022/1603 1027/1609 \nf 1019/1599 1028/1610 1021/1602 \nf 1019/1599 1029/1611 1028/1610 \nf 1023/1605 1029/1611 1019/1599 \nf 1029/1611 1030/1612 1028/1610 \nf 1029/1611 1031/1613 1030/1612 \nf 1032/1616 1033/1617 1034/1618 \nf 1023/1605 1032/1615 1029/1611 \nf 1032/1615 1035/1620 1031/1613 \nf 1036/1621 1035/1619 1032/1614 \nf 1036/1621 1032/1614 1023/1604 \nf 1036/1621 1023/1604 1024/1606 \nf 1036/1621 1037/1622 1035/1619 \nf 1031/1613 1038/1623 1030/1612 \nf 1031/1613 1039/1624 1038/1623 \nf 1035/1620 1039/1624 1031/1613 \nf 1035/1620 1040/1626 1039/1624 \nf 1037/1622 1040/1625 1035/1619 \nf 1039/1624 1041/1627 1038/1623 \nf 1039/1624 1042/1628 1041/1627 \nf 1040/1626 1042/1628 1039/1624 \nf 1040/1626 1043/1630 1042/1628 \nf 1044/1631 1043/1629 1040/1625 \nf 1037/1622 1044/1631 1040/1625 \nf 1044/1631 1045/1632 1043/1629 \nf 1046/1634 1047/1636 1048/1637 \nf 1013/1589 1046/1633 1000/1573 \nf 1000/1572 1047/1635 998/1567 \nf 1005/1580 1049/1639 1017/1595 \nf 1024/1606 1017/1594 1049/1638 \nf 1050/1640 1051/1641 1052/1642 \nf 1050/1640 1053/1643 1051/1641 \nf 1053/1643 1054/1644 1051/1641 \nf 1055/1646 1054/1644 1053/1643 \nf 1051/1641 1003/1577 1052/1642 \nf 1051/1641 1004/1578 1003/1577 \nf 1005/1579 1051/1641 1054/1644 \nf 1005/1579 1004/1578 1051/1641 \nf 1056/1648 1057/1649 1058/1651 \nf 1055/1647 1059/1652 1058/1650 \nf 1060/1653 1059/1652 1055/1647 \nf 1060/1653 1061/1654 1059/1652 \nf 1062/1655 1061/1654 1060/1653 \nf 1054/1645 1058/1650 1063/1658 \nf 1005/1579 1054/1644 1063/1657 \nf 1063/1658 1058/1650 1064/1659 \nf 1058/1650 1065/1660 1064/1659 \nf 1058/1650 1066/1661 1065/1660 \nf 1059/1652 1066/1661 1058/1650 \nf 1063/1658 1064/1659 1067/1663 \nf 1024/1606 1063/1656 1067/1662 \nf 1062/1655 1068/1664 1061/1654 \nf 1069/1665 1061/1654 1068/1664 \nf 1061/1654 1070/1666 1059/1652 \nf 1061/1654 1069/1665 1070/1666 \nf 1059/1652 1070/1666 1066/1661 \nf 1064/1659 1065/1660 1071/1667 \nf 1064/1659 1071/1667 1072/1668 \nf 1067/1663 1064/1659 1072/1668 \nf 1072/1668 1071/1667 1073/1669 \nf 1072/1668 1073/1669 1074/1670 \nf 1075/1672 1072/1668 1074/1670 \nf 1067/1663 1072/1668 1075/1672 \nf 1075/1672 1074/1670 1076/1674 \nf 1036/1621 1075/1671 1076/1673 \nf 1036/1621 1067/1662 1075/1671 \nf 1036/1621 1024/1606 1067/1662 \nf 1036/1621 1076/1673 1037/1622 \nf 1074/1670 1073/1669 1077/1675 \nf 1074/1670 1077/1675 1078/1676 \nf 1076/1674 1074/1670 1078/1676 \nf 1076/1674 1078/1676 1079/1678 \nf 1037/1622 1076/1673 1079/1677 \nf 1078/1676 1077/1675 1080/1679 \nf 1078/1676 1080/1679 1081/1680 \nf 1079/1678 1078/1676 1081/1680 \nf 1079/1678 1081/1680 1082/1682 \nf 1044/1631 1079/1677 1082/1681 \nf 1037/1622 1079/1677 1044/1631 \nf 1044/1631 1082/1681 1045/1632 \nf 1083/1683 1055/1647 1084/1685 \nf 1060/1653 1055/1647 1083/1683 \nf 1055/1646 1053/1643 1084/1684 \nf 1005/1579 1063/1657 1085/1687 \nf 1024/1606 1085/1686 1063/1656 \nf 1478/2239 1479/2241 1480/2242 \nf 1479/2241 1478/2239 1481/2244 \nf 1481/2243 1478/2240 1482/2246 \nf 1482/2246 1483/2247 1481/2243 \nf 1484/2249 1483/2247 1482/2246 \nf 1484/2249 1485/2250 1483/2247 \nf 1486/2252 1485/2250 1484/2249 \nf 1486/2252 1487/2253 1485/2250 \nf 1488/2255 1487/2254 1486/2251 \nf 1488/2255 1489/2256 1487/2254 \nf 1490/2258 1489/2256 1488/2255 \nf 1490/2258 1491/2259 1489/2256 \nf 1492/2261 1491/2260 1490/2257 \nf 1492/2261 1493/2262 1491/2260 \nf 1494/2264 1493/2262 1492/2261 \nf 1494/2264 1495/2265 1493/2262 \nf 1496/2267 1495/2266 1494/2263 \nf 1496/2267 1497/2268 1495/2266 \nf 1498/2270 1497/2268 1496/2267 \nf 1498/2270 1499/2272 1497/2268 \nf 1500/2273 1499/2271 1498/2269 \nf 1500/2273 1501/2274 1499/2271 \nf 1502/2275 1501/2274 1500/2273 \nf 1502/2275 1503/2277 1501/2274 \nf 1504/2279 1503/2278 1502/2276 \nf 1505/2280 1506/2282 1497/2268 \nf 1507/2284 1506/2282 1505/2280 \nf 1507/2283 1508/2285 1506/2281 \nf 1509/2287 1508/2285 1507/2283 \nf 1509/2287 1510/2289 1508/2285 \nf 1504/2279 1510/2288 1509/2286 \nf 1504/2279 1511/2290 1510/2288 \nf 1502/2276 1511/2290 1504/2279 \nf 1502/2276 1512/2292 1511/2290 \nf 1500/2273 1512/2291 1502/2275 \nf 1500/2273 1513/2293 1512/2291 \nf 1514/2295 1513/2293 1500/2273 \nf 1514/2295 1515/2296 1513/2293 \nf 1516/2298 1515/2297 1514/2294 \nf 1516/2298 1517/2300 1515/2297 \nf 1518/2301 1517/2300 1516/2298 \nf 1518/2301 1519/2303 1517/2300 \nf 1520/2305 1521/2306 1522/2309 \nf 1523/2310 1521/2308 1520/2304 \nf 1523/2310 1524/2312 1521/2308 \nf 1525/2314 1524/2312 1523/2310 \nf 1525/2315 1526/2316 1524/2311 \nf 1527/2319 1526/2316 1525/2315 \nf 1527/2319 1528/2320 1526/2316 \nf 1529/2322 1528/2321 1527/2317 \nf 1529/2322 1530/2325 1528/2321 \nf 1531/2327 1530/2325 1529/2322 \nf 1531/2326 1532/2329 1530/2324 \nf 1533/2331 1532/2329 1531/2326 \nf 1533/2330 1534/2332 1532/2328 \nf 1488/2255 1535/2334 1536/2336 \nf 1537/2337 1535/2334 1488/2255 \nf 1537/2337 1538/2340 1535/2334 \nf 1539/2341 1538/2340 1537/2337 \nf 1539/2342 1540/2343 1538/2338 \nf 1541/2345 1540/2343 1539/2342 \nf 1541/2345 1542/2346 1540/2343 \nf 1480/2242 1542/2347 1541/2344 \nf 1508/2285 1493/2262 1506/2281 \nf 1510/2289 1493/2262 1508/2285 \nf 1510/2289 1491/2260 1493/2262 \nf 1511/2290 1491/2259 1510/2288 \nf 1511/2290 1489/2256 1491/2259 \nf 1512/2292 1489/2256 1511/2290 \nf 1512/2292 1487/2254 1489/2256 \nf 1513/2293 1487/2253 1512/2291 \nf 1513/2293 1485/2250 1487/2253 \nf 1517/2299 1485/2250 1513/2293 \nf 1517/2299 1483/2247 1485/2250 \nf 1519/2302 1483/2247 1517/2299 \nf 1526/2316 1521/2307 1524/2311 \nf 1530/2323 1521/2307 1526/2316 \nf 1530/2324 1543/2349 1521/2306 \nf 1532/2329 1543/2349 1530/2324 \nf 1532/2328 1544/2350 1543/2348 \nf 1534/2332 1544/2350 1532/2328 \nf 1534/2332 1545/2351 1544/2350 \nf 1546/2354 1545/2351 1534/2332 \nf 1546/2353 1547/2356 1545/2352 \nf 1548/2357 1549/2358 1550/2360 \nf 1551/2361 1549/2358 1548/2357 \nf 1551/2361 1552/2362 1549/2358 \nf 1553/2363 1554/2364 1555/2365 \nf 1556/2366 1554/2364 1553/2363 \nf 1556/2366 1557/2367 1554/2364 \nf 1558/2369 1494/2264 1492/2261 \nf 1559/2370 1494/2263 1558/2368 \nf 1559/2370 1496/2267 1494/2263 \nf 1514/2294 1496/2267 1559/2370 \nf 1514/2294 1498/2270 1496/2267 \nf 1500/2273 1498/2269 1514/2295 \nf 1536/2335 1560/2371 1561/2372 \nf 1535/2333 1560/2371 1536/2335 \nf 1535/2333 1562/2374 1560/2371 \nf 1538/2339 1562/2374 1535/2333 \nf 1538/2338 1563/2375 1562/2373 \nf 1542/2346 1563/2375 1538/2338 \nf 1543/2349 1564/2377 1521/2306 \nf 1565/2378 1564/2376 1543/2348 \nf 1565/2378 1566/2379 1564/2376 \nf 1567/2380 1566/2379 1565/2378 \nf 1567/2380 1568/2382 1566/2379 \nf 1569/2384 1568/2383 1567/2381 \nf 1521/2306 1570/2385 1522/2309 \nf 1564/2377 1570/2385 1521/2306 \nf 1564/2377 1571/2387 1570/2385 \nf 1566/2379 1571/2386 1564/2376 \nf 1566/2379 1572/2388 1571/2386 \nf 1568/2382 1572/2388 1566/2379 \nf 1519/2303 1549/2358 1552/2362 \nf 1518/2301 1549/2358 1519/2303 \nf 1518/2301 1573/2390 1549/2358 \nf 1516/2298 1573/2390 1518/2301 \nf 1516/2298 1574/2392 1573/2390 \nf 1549/2358 1575/2395 1550/2360 \nf 1573/2390 1575/2395 1549/2358 \nf 1573/2389 1576/2396 1575/2393 \nf 1574/2391 1576/2396 1573/2389 \nf 1574/2391 1577/2397 1576/2396 \nf 1567/2381 1525/2313 1569/2384 \nf 1578/2399 1525/2313 1567/2381 \nf 1578/2399 1527/2318 1525/2313 \nf 1545/2352 1527/2318 1578/2399 \nf 1545/2352 1547/2356 1527/2318 \nf 1541/2344 1478/2239 1480/2242 \nf 1579/2400 1478/2239 1541/2344 \nf 1482/2245 1478/2239 1579/2400 \nf 1484/2248 1482/2245 1579/2400 \nf 1575/2394 1580/2401 1550/2359 \nf 1575/2394 1581/2404 1580/2401 \nf 1576/2396 1581/2403 1575/2393 \nf 1539/2341 1579/2400 1541/2344 \nf 1582/2405 1579/2400 1539/2341 \nf 1582/2405 1484/2248 1579/2400 \nf 1486/2251 1484/2248 1582/2405 \nf 1583/2406 1584/2407 1585/2410 \nf 1586/2411 1584/2407 1583/2406 \nf 1586/2412 1587/2413 1584/2408 \nf 1588/2415 1587/2413 1586/2412 \nf 1565/2378 1578/2398 1567/2380 \nf 1544/2350 1578/2398 1565/2378 \nf 1544/2350 1545/2351 1578/2398 \nf 1589/2416 1586/2411 1583/2406 \nf 1590/2417 1586/2411 1589/2416 \nf 1590/2417 1588/2414 1586/2411 \nf 1587/2413 1591/2418 1584/2408 \nf 1592/2420 1591/2418 1587/2413 \nf 1592/2420 1593/2421 1591/2418 \nf 1594/2423 1525/2314 1523/2310 \nf 1595/2424 1525/2313 1594/2422 \nf 1595/2424 1569/2384 1525/2313 \nf 1551/2361 1548/2357 1596/2425 \nf 1516/2298 1559/2370 1558/2368 \nf 1514/2294 1559/2370 1516/2298 \nf 1553/2363 1597/2426 1598/2427 \nf 1555/2365 1597/2426 1553/2363 \nf 1591/2419 1585/2410 1584/2407 \nf 1593/2421 1585/2409 1591/2418 \nf 1486/2251 1537/2337 1488/2255 \nf 1539/2341 1537/2337 1486/2251 \nf 1483/2247 1599/2428 1481/2243 \nf 1519/2302 1599/2428 1483/2247 \nf 1505/2280 1499/2272 1600/2430 \nf 1497/2268 1499/2272 1505/2280 \nf 1506/2282 1495/2266 1497/2268 \nf 1493/2262 1495/2265 1506/2281 \nf 1600/2429 1501/2274 1503/2277 \nf 1499/2271 1501/2274 1600/2429 \nf 1601/2431 1602/2432 1581/2402 \nf 1542/2346 1538/2338 1540/2343 \nf 1486/2251 1582/2405 1539/2341 \nf 1528/2320 1530/2323 1526/2316 \nf 1543/2348 1544/2350 1565/2378 \nf 1527/2317 1547/2355 1529/2322 \nf 1513/2293 1515/2296 1517/2299 \nf 1603/2435 1604/2437 1605/2439 \nf 1603/2435 1556/2366 1604/2437 \nf 1606/2441 1556/2366 1603/2435 \nf 1606/2441 1557/2367 1556/2366 \nf 1607/2444 1557/2367 1606/2441 \nf 1607/2444 1608/2446 1557/2367 \nf 1605/2438 1609/2447 1610/2448 \nf 1605/2438 1604/2436 1609/2447 \nf 1610/2448 1608/2445 1607/2442 \nf 1610/2448 1609/2447 1608/2445 \nf 1611/2450 1605/2438 1612/2452 \nf 1611/2450 1603/2434 1605/2438 \nf 1613/2453 1603/2433 1611/2449 \nf 1613/2453 1606/2440 1603/2433 \nf 1612/2451 1613/2453 1611/2449 \nf 1614/2454 1606/2440 1613/2453 \nf 1614/2454 1607/2443 1606/2440 \nf 1612/2451 1614/2454 1613/2453 \nf 1612/2452 1610/2448 1615/2457 \nf 1612/2452 1605/2438 1610/2448 \nf 1615/2457 1607/2442 1614/2455 \nf 1615/2457 1610/2448 1607/2442 \nf 1615/2456 1614/2454 1612/2451 \nf 1479/2241 1616/2458 1480/2242 \nf 1616/2458 1479/2241 1617/2460 \nf 1617/2460 1618/2461 1616/2458 \nf 1619/2463 1618/2462 1617/2459 \nf 1619/2463 1620/2465 1618/2462 \nf 1621/2466 1620/2465 1619/2463 \nf 1621/2466 1622/2468 1620/2465 \nf 1623/2469 1622/2468 1621/2466 \nf 1623/2470 1624/2471 1622/2467 \nf 1625/2472 1624/2471 1623/2470 \nf 1625/2472 1626/2474 1624/2471 \nf 1627/2475 1626/2474 1625/2472 \nf 1627/2476 1628/2477 1626/2473 \nf 1629/2478 1628/2477 1627/2476 \nf 1629/2478 1630/2480 1628/2477 \nf 1631/2481 1630/2480 1629/2478 \nf 1631/2482 1632/2483 1630/2479 \nf 1633/2484 1632/2483 1631/2482 \nf 1633/2484 1634/2486 1632/2483 \nf 1635/2488 1634/2486 1633/2484 \nf 1635/2487 1636/2489 1634/2485 \nf 1637/2490 1636/2489 1635/2487 \nf 1637/2490 1638/2491 1636/2489 \nf 1639/2493 1638/2491 1637/2490 \nf 1639/2494 1640/2495 1638/2492 \nf 1641/2497 1642/2498 1633/2484 \nf 1641/2497 1643/2500 1642/2498 \nf 1644/2501 1643/2499 1641/2496 \nf 1644/2501 1645/2503 1643/2499 \nf 1646/2505 1645/2503 1644/2501 \nf 1646/2504 1640/2495 1645/2502 \nf 1647/2506 1640/2495 1646/2504 \nf 1647/2506 1638/2492 1640/2495 \nf 1648/2508 1638/2492 1647/2506 \nf 1648/2507 1636/2489 1638/2491 \nf 1649/2509 1636/2489 1648/2507 \nf 1649/2509 1650/2511 1636/2489 \nf 1651/2512 1650/2511 1649/2509 \nf 1651/2513 1652/2514 1650/2510 \nf 1653/2516 1652/2514 1651/2513 \nf 1653/2516 1654/2517 1652/2514 \nf 1655/2519 1654/2517 1653/2516 \nf 1656/2520 1657/2524 1658/2525 \nf 1656/2522 1659/2526 1657/2523 \nf 1660/2528 1659/2526 1656/2522 \nf 1660/2528 1661/2530 1659/2526 \nf 1662/2532 1661/2531 1660/2527 \nf 1662/2532 1663/2535 1661/2531 \nf 1664/2536 1663/2535 1662/2532 \nf 1664/2537 1665/2538 1663/2533 \nf 1666/2541 1665/2538 1664/2537 \nf 1666/2541 1667/2543 1665/2538 \nf 1668/2545 1667/2542 1666/2540 \nf 1668/2545 1669/2547 1667/2542 \nf 1670/2548 1669/2546 1668/2544 \nf 1671/2550 1624/2471 1672/2552 \nf 1671/2550 1673/2553 1624/2471 \nf 1674/2556 1673/2553 1671/2550 \nf 1674/2556 1675/2557 1673/2553 \nf 1676/2559 1675/2558 1674/2554 \nf 1676/2560 1677/2561 1675/2557 \nf 1542/2346 1677/2562 1676/2559 \nf 1542/2347 1480/2242 1677/2561 \nf 1629/2478 1644/2501 1641/2496 \nf 1629/2478 1646/2505 1644/2501 \nf 1627/2476 1646/2505 1629/2478 \nf 1627/2475 1647/2506 1646/2504 \nf 1625/2472 1647/2506 1627/2475 \nf 1625/2472 1648/2508 1647/2506 \nf 1623/2470 1648/2508 1625/2472 \nf 1623/2469 1649/2509 1648/2507 \nf 1621/2466 1649/2509 1623/2469 \nf 1621/2466 1653/2515 1649/2509 \nf 1619/2463 1653/2515 1621/2466 \nf 1619/2463 1655/2518 1653/2515 \nf 1656/2521 1662/2532 1660/2527 \nf 1656/2521 1666/2539 1662/2532 \nf 1678/2564 1666/2540 1656/2520 \nf 1678/2564 1668/2545 1666/2540 \nf 1679/2565 1668/2544 1678/2563 \nf 1679/2565 1670/2548 1668/2544 \nf 1680/2566 1670/2548 1679/2565 \nf 1680/2566 1681/2569 1670/2548 \nf 1682/2571 1681/2568 1680/2567 \nf 1683/2572 1548/2357 1550/2360 \nf 1683/2572 1684/2573 1548/2357 \nf 1685/2574 1684/2573 1683/2572 \nf 1686/2575 1687/2576 1688/2577 \nf 1686/2575 1689/2578 1687/2576 \nf 1690/2579 1689/2578 1686/2575 \nf 1630/2480 1691/2581 1628/2477 \nf 1630/2479 1692/2582 1691/2580 \nf 1632/2483 1692/2582 1630/2479 \nf 1632/2483 1650/2510 1692/2582 \nf 1634/2486 1650/2510 1632/2483 \nf 1634/2485 1636/2489 1650/2511 \nf 1693/2583 1672/2551 1694/2584 \nf 1693/2583 1671/2549 1672/2551 \nf 1695/2586 1671/2549 1693/2583 \nf 1695/2586 1674/2555 1671/2549 \nf 1563/2375 1674/2554 1695/2585 \nf 1563/2375 1542/2346 1674/2554 \nf 1696/2588 1678/2564 1656/2520 \nf 1696/2587 1697/2589 1678/2563 \nf 1698/2590 1697/2589 1696/2587 \nf 1698/2590 1699/2591 1697/2589 \nf 1700/2593 1699/2591 1698/2590 \nf 1700/2594 1701/2595 1699/2592 \nf 1702/2596 1656/2520 1658/2525 \nf 1702/2596 1696/2588 1656/2520 \nf 1703/2598 1696/2588 1702/2596 \nf 1703/2597 1698/2590 1696/2587 \nf 1704/2599 1698/2590 1703/2597 \nf 1704/2599 1700/2593 1698/2590 \nf 1683/2572 1655/2519 1685/2574 \nf 1683/2572 1654/2517 1655/2519 \nf 1705/2601 1654/2517 1683/2572 \nf 1705/2601 1652/2514 1654/2517 \nf 1706/2603 1652/2514 1705/2601 \nf 1707/2606 1683/2572 1550/2360 \nf 1707/2606 1705/2601 1683/2572 \nf 1708/2607 1705/2600 1707/2604 \nf 1708/2607 1706/2602 1705/2600 \nf 1709/2608 1706/2602 1708/2607 \nf 1661/2529 1699/2592 1701/2595 \nf 1661/2529 1710/2610 1699/2592 \nf 1663/2534 1710/2610 1661/2529 \nf 1663/2534 1680/2567 1710/2610 \nf 1682/2571 1680/2567 1663/2534 \nf 1616/2458 1677/2561 1480/2242 \nf 1616/2458 1711/2611 1677/2561 \nf 1618/2461 1711/2611 1616/2458 \nf 1618/2461 1620/2464 1711/2611 \nf 1580/2401 1707/2605 1550/2359 \nf 1712/2614 1707/2605 1580/2401 \nf 1712/2613 1708/2607 1707/2604 \nf 1711/2611 1675/2557 1677/2561 \nf 1711/2611 1713/2615 1675/2557 \nf 1620/2464 1713/2615 1711/2611 \nf 1620/2464 1622/2467 1713/2615 \nf 1714/2616 1715/2618 1716/2620 \nf 1714/2616 1717/2621 1715/2618 \nf 1718/2623 1717/2622 1714/2617 \nf 1718/2623 1719/2625 1717/2622 \nf 1710/2609 1697/2589 1699/2591 \nf 1710/2609 1679/2565 1697/2589 \nf 1680/2566 1679/2565 1710/2609 \nf 1717/2621 1720/2626 1715/2618 \nf 1717/2621 1721/2627 1720/2626 \nf 1719/2624 1721/2627 1717/2621 \nf 1722/2628 1718/2623 1714/2617 \nf 1722/2628 1723/2630 1718/2623 \nf 1724/2631 1723/2630 1722/2628 \nf 1661/2530 1725/2633 1659/2526 \nf 1661/2529 1726/2634 1725/2632 \nf 1701/2595 1726/2634 1661/2529 \nf 1548/2357 1684/2573 1596/2425 \nf 1692/2582 1652/2514 1691/2580 \nf 1692/2582 1650/2510 1652/2514 \nf 1727/2635 1687/2576 1728/2636 \nf 1727/2635 1688/2577 1687/2576 \nf 1716/2620 1722/2629 1714/2616 \nf 1716/2619 1724/2631 1722/2628 \nf 1673/2553 1622/2467 1624/2471 \nf 1673/2553 1675/2557 1622/2467 \nf 1729/2637 1619/2463 1617/2459 \nf 1729/2637 1655/2518 1619/2463 \nf 1635/2488 1642/2498 1730/2639 \nf 1635/2488 1633/2484 1642/2498 \nf 1631/2482 1641/2497 1633/2484 \nf 1631/2481 1629/2478 1641/2496 \nf 1637/2490 1730/2638 1639/2493 \nf 1637/2490 1635/2487 1730/2638 \nf 1602/2432 1601/2431 1712/2612 \nf 1674/2554 1542/2346 1676/2559 \nf 1713/2615 1622/2467 1675/2557 \nf 1666/2539 1664/2536 1662/2532 \nf 1679/2565 1678/2563 1697/2589 \nf 1682/2570 1663/2533 1665/2538 \nf 1651/2512 1649/2509 1653/2515 \nf 1689/2578 1731/2641 1732/2643 \nf 1689/2578 1733/2644 1731/2641 \nf 1690/2579 1733/2644 1689/2578 \nf 1690/2579 1734/2646 1733/2644 \nf 1735/2648 1734/2646 1690/2579 \nf 1735/2648 1736/2650 1734/2646 \nf 1732/2642 1737/2651 1738/2652 \nf 1732/2642 1731/2640 1737/2651 \nf 1738/2652 1736/2649 1735/2647 \nf 1738/2652 1737/2651 1736/2649 \nf 1733/2645 1739/2654 1731/2640 \nf 1733/2645 1740/2657 1739/2654 \nf 1734/2646 1740/2656 1733/2644 \nf 1734/2646 1741/2659 1740/2656 \nf 1741/2658 1739/2653 1740/2655 \nf 1736/2650 1741/2659 1734/2646 \nf 1736/2650 1742/2662 1741/2659 \nf 1742/2660 1739/2653 1741/2658 \nf 1731/2640 1743/2664 1737/2651 \nf 1731/2640 1739/2654 1743/2664 \nf 1737/2651 1742/2661 1736/2649 \nf 1737/2651 1743/2664 1742/2661 \nf 1742/2660 1743/2663 1739/2653 \n\n");

/***/ }),

/***/ "./src/shaders/fragmentShader.glsl":
/*!*****************************************!*\
  !*** ./src/shaders/fragmentShader.glsl ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("precision highp float;\nvarying vec2 textureCoords;\nvarying vec3 lightWeighting;\nuniform sampler2D Sampler;\n\nvoid main(void) {\n    vec4 texelColor = texture2D(Sampler, textureCoords);\n    gl_FragColor = vec4(lightWeighting.rgb * texelColor.rgb, 1);\n    gl_FragColor.rgb *= gl_FragColor.a;\n}\n");

/***/ }),

/***/ "./src/shaders/vertexShader.glsl":
/*!***************************************!*\
  !*** ./src/shaders/vertexShader.glsl ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("attribute vec3 vertexPosition;\nattribute vec3 vertexNormal;\nattribute vec2 vertexTextureCoords;\n\nuniform mat4 ViewMatrix;\nuniform mat4 PerspectiveMatrix;\nuniform mat4 ModelMatrix;\nuniform mat3 NormalMatrix;\n\nuniform vec3 lightPosition;\nuniform vec3 ambientLightColor;\nuniform vec3 diffuseLightColor;\nuniform vec3 specularLightColor;\n\nvarying vec2 textureCoords;\nvarying vec3 lightWeighting;\n\nconst float shininess = 16.0;\nvoid main(void) {\n    // установка позиции наблюдателя сцены\n    vec4 vertexPositionEye4 = ViewMatrix * ModelMatrix * vec4(vertexPosition, 1.0);\n    vec3 vertexPositionEye3 = vertexPositionEye4.xyz / vertexPositionEye4.w;\n\n    // получаем вектор направления света\n    vec3 lightDirection = normalize(lightPosition - vertexPositionEye3);\n\n    // получаем нормаль\n    vec3 normal = normalize(NormalMatrix * vertexNormal);\n\n    // получаем скалярное произведение векторов нормали и направления света\n    float diffuseLightDot = max(dot(normal, lightDirection), 0.0);\n\n    // получаем вектор отраженного луча и нормализуем его\n    vec3 reflectionVector = normalize(reflect(-lightDirection, normal));\n\n    // установка вектора камеры\n    vec3 viewVectorEye = -normalize(vertexPositionEye3);\n\n    float specularLightDot = max(dot(reflectionVector, viewVectorEye), 0.0);\n\n    float specularLightParam = pow(specularLightDot, shininess);\n\n    // отраженный свет равен сумме фонового, диффузного и зеркального отражений света\n    lightWeighting = ambientLightColor + diffuseLightColor * diffuseLightDot +\n    specularLightColor * specularLightParam;\n\n    // Finally transform the geometry\n    gl_Position = PerspectiveMatrix * ViewMatrix * ModelMatrix * vec4(vertexPosition, 1.0);\n    textureCoords = vertexTextureCoords;\n}\n");

/***/ }),

/***/ "./src/assets/style/main.css":
/*!***********************************!*\
  !*** ./src/assets/style/main.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/style/main.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/app/index.ts":
/*!**************************!*\
  !*** ./src/app/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_style_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/style/main.css */ "./src/assets/style/main.css");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/util */ "./src/app/utils/util.ts");
/* harmony import */ var _shapes_cube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shapes/cube */ "./src/app/shapes/cube.ts");
/* harmony import */ var _utils_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/camera */ "./src/app/utils/camera.ts");
/* harmony import */ var _utils_scene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/scene */ "./src/app/utils/scene.ts");
/* harmony import */ var _shapes_sphere__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shapes/sphere */ "./src/app/shapes/sphere.ts");
/* harmony import */ var _shapes_custom_object__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shapes/custom-object */ "./src/app/shapes/custom-object.ts");
/* harmony import */ var _assets_models_Elsa_obj__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/models/Elsa.obj */ "./src/assets/models/Elsa.obj");
/* harmony import */ var _shapes_ground__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shapes/ground */ "./src/app/shapes/ground.ts");
/* harmony import */ var _shapes_snow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shapes/snow */ "./src/app/shapes/snow.ts");










/*
1. Средствами библиотеки OpenGL реализовать несколько типов источников света, движение камеры, динамику (движение некоторых объектов, например, снег). В центре сцены поставить объекты, на некоторые из них наложить текстуры. Объекты:
    а) несколько различных примитивов, например, сферу, куб, тор.
    б) выгруженный из 3d редактора объект.
*/
const gl = (0,_utils_util__WEBPACK_IMPORTED_MODULE_1__.getGlContext)();
const camera = new _utils_camera__WEBPACK_IMPORTED_MODULE_3__.Camera();
const scene = new _utils_scene__WEBPACK_IMPORTED_MODULE_4__.Scene(gl, camera);
const cube = new _shapes_cube__WEBPACK_IMPORTED_MODULE_2__.Cube([
    // лицевая часть
    -0.25, -0.25, 0.25,
    -0.25, 0.25, 0.25,
    0.25, 0.25, 0.25,
    0.25, -0.25, 0.25,
    // задняя часть 
    -0.25, -0.25, -0.25,
    -0.25, 0.25, -0.25,
    0.25, 0.25, -0.25,
    0.25, -0.25, -0.25,
    // левая боковая часть
    -0.25, -0.25, 0.25,
    -0.25, 0.25, 0.25,
    -0.25, 0.25, -0.25,
    -0.25, -0.25, -0.25,
    // правая боковая часть
    0.25, -0.25, 0.25,
    0.25, 0.25, 0.25,
    0.25, 0.25, -0.25,
    0.25, -0.25, -0.25
]);
scene.addShape(cube);
scene.addShape(new _shapes_ground__WEBPACK_IMPORTED_MODULE_8__.Ground());
scene.addShape(new _shapes_snow__WEBPACK_IMPORTED_MODULE_9__.Snow());
scene.addShape(new _shapes_sphere__WEBPACK_IMPORTED_MODULE_5__.Sphere([0, 0, 0], 0.5));
scene.addShape(new _shapes_custom_object__WEBPACK_IMPORTED_MODULE_6__.CustomObject(_assets_models_Elsa_obj__WEBPACK_IMPORTED_MODULE_7__.default));
scene.start();


/***/ }),

/***/ "./src/app/mesh/layout.ts":
/*!********************************!*\
  !*** ./src/app/mesh/layout.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TYPES": () => /* binding */ TYPES,
/* harmony export */   "DuplicateAttributeException": () => /* binding */ DuplicateAttributeException,
/* harmony export */   "Attribute": () => /* binding */ Attribute,
/* harmony export */   "Layout": () => /* binding */ Layout
/* harmony export */ });
var TYPES;
(function (TYPES) {
    TYPES["BYTE"] = "BYTE";
    TYPES["UNSIGNED_BYTE"] = "UNSIGNED_BYTE";
    TYPES["SHORT"] = "SHORT";
    TYPES["UNSIGNED_SHORT"] = "UNSIGNED_SHORT";
    TYPES["FLOAT"] = "FLOAT";
})(TYPES || (TYPES = {}));
/**
 * An exception for when two or more of the same attributes are found in the
 * same layout.
 * @private
 */
class DuplicateAttributeException extends Error {
    /**
     * Create a DuplicateAttributeException
     * @param {Attribute} attribute - The attribute that was found more than
     *        once in the {@link Layout}
     */
    constructor(attribute) {
        super(`found duplicate attribute: ${attribute.key}`);
    }
}
/**
 * Represents how a vertex attribute should be packed into an buffer.
 * @private
 */
class Attribute {
    /**
     * Create an attribute. Do not call this directly, use the predefined
     * constants.
     * @param {string} key - The name of this attribute as if it were a key in
     *        an Object. Use the camel case version of the upper snake case
     *        const name.
     * @param {number} size - The number of components per vertex attribute.
     *        Must be 1, 2, 3, or 4.
     * @param {string} type - The data type of each component for this
     *        attribute. Possible values:<br/>
     *        "BYTE": signed 8-bit integer, with values in [-128, 127]<br/>
     *        "SHORT": signed 16-bit integer, with values in
     *            [-32768, 32767]<br/>
     *        "UNSIGNED_BYTE": unsigned 8-bit integer, with values in
     *            [0, 255]<br/>
     *        "UNSIGNED_SHORT": unsigned 16-bit integer, with values in
     *            [0, 65535]<br/>
     *        "FLOAT": 32-bit floating point number
     * @param {boolean} normalized - Whether integer data values should be
     *        normalized when being casted to a float.<br/>
     *        If true, signed integers are normalized to [-1, 1].<br/>
     *        If true, unsigned integers are normalized to [0, 1].<br/>
     *        For type "FLOAT", this parameter has no effect.
     */
    constructor(key, size, type, normalized = false) {
        this.key = key;
        this.size = size;
        this.type = type;
        this.normalized = normalized;
        switch (type) {
            case "BYTE":
            case "UNSIGNED_BYTE":
                this.sizeOfType = 1;
                break;
            case "SHORT":
            case "UNSIGNED_SHORT":
                this.sizeOfType = 2;
                break;
            case "FLOAT":
                this.sizeOfType = 4;
                break;
            default:
                throw new Error(`Unknown gl type: ${type}`);
        }
        this.sizeInBytes = this.sizeOfType * size;
    }
}
/**
 * A class to represent the memory layout for a vertex attribute array. Used by
 * {@link Mesh}'s TBD(...) method to generate a packed array from mesh data.
 * <p>
 * Layout can sort of be thought of as a C-style struct declaration.
 * {@link Mesh}'s TBD(...) method will use the {@link Layout} instance to
 * pack an array in the given attribute order.
 * <p>
 * Layout also is very helpful when calling a WebGL context's
 * <code>vertexAttribPointer</code> method. If you've created a buffer using
 * a Layout instance, then the same Layout instance can be used to determine
 * the size, type, normalized, stride, and offset parameters for
 * <code>vertexAttribPointer</code>.
 * <p>
 * For example:
 * <pre><code>
 *
 * const index = glctx.getAttribLocation(shaderProgram, "pos");
 * glctx.vertexAttribPointer(
 *   layout.position.size,
 *   glctx[layout.position.type],
 *   layout.position.normalized,
 *   layout.position.stride,
 *   layout.position.offset);
 * </code></pre>
 * @see {@link Mesh}
 */
class Layout {
    /**
     * Create a Layout object. This constructor will throw if any duplicate
     * attributes are given.
     * @param {Array} ...attributes - An ordered list of attributes that
     *        describe the desired memory layout for each vertex attribute.
     *        <p>
     *
     * @see {@link Mesh}
     */
    constructor(...attributes) {
        this.attributes = attributes;
        this.attributeMap = {};
        let offset = 0;
        let maxStrideMultiple = 0;
        for (const attribute of attributes) {
            if (this.attributeMap[attribute.key]) {
                throw new DuplicateAttributeException(attribute);
            }
            // Add padding to satisfy WebGL's requirement that all
            // vertexAttribPointer calls have an offset that is a multiple of
            // the type size.
            if (offset % attribute.sizeOfType !== 0) {
                offset += attribute.sizeOfType - (offset % attribute.sizeOfType);
                console.warn("Layout requires padding before " + attribute.key + " attribute");
            }
            this.attributeMap[attribute.key] = {
                attribute: attribute,
                size: attribute.size,
                type: attribute.type,
                normalized: attribute.normalized,
                offset: offset,
            };
            offset += attribute.sizeInBytes;
            maxStrideMultiple = Math.max(maxStrideMultiple, attribute.sizeOfType);
        }
        // Add padding to the end to satisfy WebGL's requirement that all
        // vertexAttribPointer calls have a stride that is a multiple of the
        // type size. Because we're putting differently sized attributes into
        // the same buffer, it must be padded to a multiple of the largest
        // type size.
        if (offset % maxStrideMultiple !== 0) {
            offset += maxStrideMultiple - (offset % maxStrideMultiple);
            console.warn("Layout requires padding at the back");
        }
        this.stride = offset;
        for (const attribute of attributes) {
            this.attributeMap[attribute.key].stride = this.stride;
        }
    }
}
// Geometry attributes
/**
 * Attribute layout to pack a vertex's x, y, & z as floats
 *
 * @see {@link Layout}
 */
Layout.POSITION = new Attribute("position", 3, TYPES.FLOAT);
/**
 * Attribute layout to pack a vertex's normal's x, y, & z as floats
 *
 * @see {@link Layout}
 */
Layout.NORMAL = new Attribute("normal", 3, TYPES.FLOAT);
/**
 * Attribute layout to pack a vertex's normal's x, y, & z as floats.
 * <p>
 * This value will be computed on-the-fly based on the texture coordinates.
 * If no texture coordinates are available, the generated value will default to
 * 0, 0, 0.
 *
 * @see {@link Layout}
 */
Layout.TANGENT = new Attribute("tangent", 3, TYPES.FLOAT);
/**
 * Attribute layout to pack a vertex's normal's bitangent x, y, & z as floats.
 * <p>
 * This value will be computed on-the-fly based on the texture coordinates.
 * If no texture coordinates are available, the generated value will default to
 * 0, 0, 0.
 * @see {@link Layout}
 */
Layout.BITANGENT = new Attribute("bitangent", 3, TYPES.FLOAT);
/**
 * Attribute layout to pack a vertex's texture coordinates' u & v as floats
 *
 * @see {@link Layout}
 */
Layout.UV = new Attribute("uv", 2, TYPES.FLOAT);
// Material attributes
/**
 * Attribute layout to pack an unsigned short to be interpreted as a the index
 * into a {@link Mesh}'s materials list.
 * <p>
 * The intention of this value is to send all of the {@link Mesh}'s materials
 * into multiple shader uniforms and then reference the current one by this
 * vertex attribute.
 * <p>
 * example glsl code:
 *
 * <pre><code>
 *  // this is bound using MATERIAL_INDEX
 *  attribute int materialIndex;
 *
 *  struct Material {
 *    vec3 diffuse;
 *    vec3 specular;
 *    vec3 specularExponent;
 *  };
 *
 *  uniform Material materials[MAX_MATERIALS];
 *
 *  // ...
 *
 *  vec3 diffuse = materials[materialIndex];
 *
 * </code></pre>
 * TODO: More description & test to make sure subscripting by attributes even
 * works for webgl
 *
 * @see {@link Layout}
 */
Layout.MATERIAL_INDEX = new Attribute("materialIndex", 1, TYPES.SHORT);
Layout.MATERIAL_ENABLED = new Attribute("materialEnabled", 1, TYPES.UNSIGNED_SHORT);
Layout.AMBIENT = new Attribute("ambient", 3, TYPES.FLOAT);
Layout.DIFFUSE = new Attribute("diffuse", 3, TYPES.FLOAT);
Layout.SPECULAR = new Attribute("specular", 3, TYPES.FLOAT);
Layout.SPECULAR_EXPONENT = new Attribute("specularExponent", 3, TYPES.FLOAT);
Layout.EMISSIVE = new Attribute("emissive", 3, TYPES.FLOAT);
Layout.TRANSMISSION_FILTER = new Attribute("transmissionFilter", 3, TYPES.FLOAT);
Layout.DISSOLVE = new Attribute("dissolve", 1, TYPES.FLOAT);
Layout.ILLUMINATION = new Attribute("illumination", 1, TYPES.UNSIGNED_SHORT);
Layout.REFRACTION_INDEX = new Attribute("refractionIndex", 1, TYPES.FLOAT);
Layout.SHARPNESS = new Attribute("sharpness", 1, TYPES.FLOAT);
Layout.MAP_DIFFUSE = new Attribute("mapDiffuse", 1, TYPES.SHORT);
Layout.MAP_AMBIENT = new Attribute("mapAmbient", 1, TYPES.SHORT);
Layout.MAP_SPECULAR = new Attribute("mapSpecular", 1, TYPES.SHORT);
Layout.MAP_SPECULAR_EXPONENT = new Attribute("mapSpecularExponent", 1, TYPES.SHORT);
Layout.MAP_DISSOLVE = new Attribute("mapDissolve", 1, TYPES.SHORT);
Layout.ANTI_ALIASING = new Attribute("antiAliasing", 1, TYPES.UNSIGNED_SHORT);
Layout.MAP_BUMP = new Attribute("mapBump", 1, TYPES.SHORT);
Layout.MAP_DISPLACEMENT = new Attribute("mapDisplacement", 1, TYPES.SHORT);
Layout.MAP_DECAL = new Attribute("mapDecal", 1, TYPES.SHORT);
Layout.MAP_EMISSIVE = new Attribute("mapEmissive", 1, TYPES.SHORT);


/***/ }),

/***/ "./src/app/mesh/mesh.ts":
/*!******************************!*\
  !*** ./src/app/mesh/mesh.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Mesh
/* harmony export */ });
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "./src/app/mesh/layout.ts");

/**
 * The main Mesh class. The constructor will parse through the OBJ file data
 * and collect the vertex, vertex normal, texture, and face information. This
 * information can then be used later on when creating your VBOs. See
 * OBJ.initMeshBuffers for an example of how to use the newly created Mesh
 */
class Mesh {
    /**
     * Create a Mesh
     * @param {String} objectData - a string representation of an OBJ file with
     *     newlines preserved.
     * @param {Object} options - a JS object containing valid options. See class
     *     documentation for options.
     * @param {bool} options.enableWTextureCoord - Texture coordinates can have
     *     an optional "w" coordinate after the u and v coordinates. This extra
     *     value can be used in order to perform fancy transformations on the
     *     textures themselves. Default is to truncate to only the u an v
     *     coordinates. Passing true will provide a default value of 0 in the
     *     event that any or all texture coordinates don't provide a w value.
     *     Always use the textureStride attribute in order to determine the
     *     stride length of the texture coordinates when rendering the element
     *     array.
     * @param {bool} options.calcTangentsAndBitangents - Calculate the tangents
     *     and bitangents when loading of the OBJ is completed. This adds two new
     *     attributes to the Mesh instance: `tangents` and `bitangents`.
     */
    constructor(objectData, options) {
        this.name = "";
        this.indicesPerMaterial = [];
        this.materialsByIndex = {};
        this.tangents = [];
        this.bitangents = [];
        options = options || {};
        options.materials = options.materials || {};
        options.enableWTextureCoord = !!options.enableWTextureCoord;
        // the list of unique vertex, normal, texture, attributes
        this.vertexNormals = [];
        this.textures = [];
        // the indicies to draw the faces
        this.indices = [];
        this.textureStride = options.enableWTextureCoord ? 3 : 2;
        /*
        The OBJ file format does a sort of compression when saving a model in a
        program like Blender. There are at least 3 sections (4 including textures)
        within the file. Each line in a section begins with the same string:
          * 'v': indicates vertex section
          * 'vn': indicates vertex normal section
          * 'f': indicates the faces section
          * 'vt': indicates vertex texture section (if textures were used on the model)
        Each of the above sections (except for the faces section) is a list/set of
        unique vertices.

        Each line of the faces section contains a list of
        (vertex, [texture], normal) groups.

        **Note:** The following documentation will use a capital "V" Vertex to
        denote the above (vertex, [texture], normal) groups whereas a lowercase
        "v" vertex is used to denote an X, Y, Z coordinate.

        Some examples:
            // the texture index is optional, both formats are possible for models
            // without a texture applied
            f 1/25 18/46 12/31
            f 1//25 18//46 12//31

            // A 3 vertex face with texture indices
            f 16/92/11 14/101/22 1/69/1

            // A 4 vertex face
            f 16/92/11 40/109/40 38/114/38 14/101/22

        The first two lines are examples of a 3 vertex face without a texture applied.
        The second is an example of a 3 vertex face with a texture applied.
        The third is an example of a 4 vertex face. Note: a face can contain N
        number of vertices.

        Each number that appears in one of the groups is a 1-based index
        corresponding to an item from the other sections (meaning that indexing
        starts at one and *not* zero).

        For example:
            `f 16/92/11` is saying to
              - take the 16th element from the [v] vertex array
              - take the 92nd element from the [vt] texture array
              - take the 11th element from the [vn] normal array
            and together they make a unique vertex.
        Using all 3+ unique Vertices from the face line will produce a polygon.

        Now, you could just go through the OBJ file and create a new vertex for
        each face line and WebGL will draw what appears to be the same model.
        However, vertices will be overlapped and duplicated all over the place.

        Consider a cube in 3D space centered about the origin and each side is
        2 units long. The front face (with the positive Z-axis pointing towards
        you) would have a Top Right vertex (looking orthogonal to its normal)
        mapped at (1,1,1) The right face would have a Top Left vertex (looking
        orthogonal to its normal) at (1,1,1) and the top face would have a Bottom
        Right vertex (looking orthogonal to its normal) at (1,1,1). Each face
        has a vertex at the same coordinates, however, three distinct vertices
        will be drawn at the same spot.

        To solve the issue of duplicate Vertices (the `(vertex, [texture], normal)`
        groups), while iterating through the face lines, when a group is encountered
        the whole group string ('16/92/11') is checked to see if it exists in the
        packed.hashindices object, and if it doesn't, the indices it specifies
        are used to look up each attribute in the corresponding attribute arrays
        already created. The values are then copied to the corresponding unpacked
        array (flattened to play nice with WebGL's ELEMENT_ARRAY_BUFFER indexing),
        the group string is added to the hashindices set and the current unpacked
        index is used as this hashindices value so that the group of elements can
        be reused. The unpacked index is incremented. If the group string already
        exists in the hashindices object, its corresponding value is the index of
        that group and is appended to the unpacked indices array.
       */
        const verts = [];
        const vertNormals = [];
        const textures = [];
        const materialNamesByIndex = [];
        const materialIndicesByName = {};
        // keep track of what material we've seen last
        let currentMaterialIndex = -1;
        let currentObjectByMaterialIndex = 0;
        // unpacking stuff
        const unpacked = {
            verts: [],
            norms: [],
            textures: [],
            hashindices: {},
            indices: [[]],
            materialIndices: [],
            index: 0,
        };
        const VERTEX_RE = /^v\s/;
        const NORMAL_RE = /^vn\s/;
        const TEXTURE_RE = /^vt\s/;
        const FACE_RE = /^f\s/;
        const WHITESPACE_RE = /\s+/;
        const USE_MATERIAL_RE = /^usemtl/;
        // array of lines separated by the newline
        const lines = objectData.split("\n");
        for (let line of lines) {
            line = line.trim();
            if (!line || line.startsWith("#")) {
                continue;
            }
            const elements = line.split(WHITESPACE_RE);
            elements.shift();
            if (VERTEX_RE.test(line)) {
                // if this is a vertex
                verts.push(...elements);
            }
            else if (NORMAL_RE.test(line)) {
                // if this is a vertex normal
                vertNormals.push(...elements);
            }
            else if (TEXTURE_RE.test(line)) {
                let coords = elements;
                // by default, the loader will only look at the U and V
                // coordinates of the vt declaration. So, this truncates the
                // elements to only those 2 values. If W texture coordinate
                // support is enabled, then the texture coordinate is
                // expected to have three values in it.
                if (elements.length > 2 && !options.enableWTextureCoord) {
                    coords = elements.slice(0, 2);
                }
                else if (elements.length === 2 && options.enableWTextureCoord) {
                    // If for some reason W texture coordinate support is enabled
                    // and only the U and V coordinates are given, then we supply
                    // the default value of 0 so that the stride length is correct
                    // when the textures are unpacked below.
                    coords.push("0");
                }
                textures.push(...coords);
            }
            else if (USE_MATERIAL_RE.test(line)) {
                const materialName = elements[0];
                // check to see if we've ever seen it before
                if (!(materialName in materialIndicesByName)) {
                    // new material we've never seen
                    materialNamesByIndex.push(materialName);
                    materialIndicesByName[materialName] = materialNamesByIndex.length - 1;
                    // push new array into indices
                    // already contains an array at index zero, don't add
                    if (materialIndicesByName[materialName] > 0) {
                        unpacked.indices.push([]);
                    }
                }
                // keep track of the current material index
                currentMaterialIndex = materialIndicesByName[materialName];
                // update current index array
                currentObjectByMaterialIndex = currentMaterialIndex;
            }
            else if (FACE_RE.test(line)) {
                // if this is a face
                /*
                split this face into an array of Vertex groups
                for example:
                   f 16/92/11 14/101/22 1/69/1
                becomes:
                  ['16/92/11', '14/101/22', '1/69/1'];
                */
                const triangles = triangulate(elements);
                for (const triangle of triangles) {
                    for (let j = 0, eleLen = triangle.length; j < eleLen; j++) {
                        const hash = triangle[j] + "," + currentMaterialIndex;
                        if (hash in unpacked.hashindices) {
                            unpacked.indices[currentObjectByMaterialIndex].push(unpacked.hashindices[hash]);
                        }
                        else {
                            /*
                        Each element of the face line array is a Vertex which has its
                        attributes delimited by a forward slash. This will separate
                        each attribute into another array:
                            '19/92/11'
                        becomes:
                            Vertex = ['19', '92', '11'];
                        where
                            Vertex[0] is the vertex index
                            Vertex[1] is the texture index
                            Vertex[2] is the normal index
                         Think of faces having Vertices which are comprised of the
                         attributes location (v), texture (vt), and normal (vn).
                         */
                            const vertex = triangle[j].split("/");
                            // it's possible for faces to only specify the vertex
                            // and the normal. In this case, vertex will only have
                            // a length of 2 and not 3 and the normal will be the
                            // second item in the list with an index of 1.
                            const normalIndex = vertex.length - 1;
                            /*
                         The verts, textures, and vertNormals arrays each contain a
                         flattend array of coordinates.

                         Because it gets confusing by referring to Vertex and then
                         vertex (both are different in my descriptions) I will explain
                         what's going on using the vertexNormals array:

                         vertex[2] will contain the one-based index of the vertexNormals
                         section (vn). One is subtracted from this index number to play
                         nice with javascript's zero-based array indexing.

                         Because vertexNormal is a flattened array of x, y, z values,
                         simple pointer arithmetic is used to skip to the start of the
                         vertexNormal, then the offset is added to get the correct
                         component: +0 is x, +1 is y, +2 is z.

                         This same process is repeated for verts and textures.
                         */
                            // Vertex position
                            unpacked.verts.push(+verts[(+vertex[0] - 1) * 3 + 0]);
                            unpacked.verts.push(+verts[(+vertex[0] - 1) * 3 + 1]);
                            unpacked.verts.push(+verts[(+vertex[0] - 1) * 3 + 2]);
                            // Vertex textures
                            if (textures.length) {
                                const stride = options.enableWTextureCoord ? 3 : 2;
                                unpacked.textures.push(+textures[(+vertex[1] - 1) * stride + 0]);
                                unpacked.textures.push(+textures[(+vertex[1] - 1) * stride + 1]);
                                if (options.enableWTextureCoord) {
                                    unpacked.textures.push(+textures[(+vertex[1] - 1) * stride + 2]);
                                }
                            }
                            // Vertex normals
                            unpacked.norms.push(+vertNormals[(+vertex[normalIndex] - 1) * 3 + 0]);
                            unpacked.norms.push(+vertNormals[(+vertex[normalIndex] - 1) * 3 + 1]);
                            unpacked.norms.push(+vertNormals[(+vertex[normalIndex] - 1) * 3 + 2]);
                            // Vertex material indices
                            unpacked.materialIndices.push(currentMaterialIndex);
                            // add the newly created Vertex to the list of indices
                            unpacked.hashindices[hash] = unpacked.index;
                            unpacked.indices[currentObjectByMaterialIndex].push(unpacked.hashindices[hash]);
                            // increment the counter
                            unpacked.index += 1;
                        }
                    }
                }
            }
        }
        this.vertices = unpacked.verts;
        this.vertexNormals = unpacked.norms;
        this.textures = unpacked.textures;
        this.vertexMaterialIndices = unpacked.materialIndices;
        this.indices = unpacked.indices[currentObjectByMaterialIndex];
        this.indicesPerMaterial = unpacked.indices;
        this.materialNames = materialNamesByIndex;
        this.materialIndices = materialIndicesByName;
        this.materialsByIndex = {};
        if (options.calcTangentsAndBitangents) {
            this.calculateTangentsAndBitangents();
        }
    }
    /**
     * Calculates the tangents and bitangents of the mesh that forms an orthogonal basis together with the
     * normal in the direction of the texture coordinates. These are useful for setting up the TBN matrix
     * when distorting the normals through normal maps.
     * Method derived from: http://www.opengl-tutorial.org/intermediate-tutorials/tutorial-13-normal-mapping/
     *
     * This method requires the normals and texture coordinates to be parsed and set up correctly.
     * Adds the tangents and bitangents as members of the class instance.
     */
    calculateTangentsAndBitangents() {
        console.assert(!!(this.vertices &&
            this.vertices.length &&
            this.vertexNormals &&
            this.vertexNormals.length &&
            this.textures &&
            this.textures.length), "Missing attributes for calculating tangents and bitangents");
        const unpacked = {
            tangents: [...new Array(this.vertices.length)].map(_ => 0),
            bitangents: [...new Array(this.vertices.length)].map(_ => 0),
        };
        // Loop through all faces in the whole mesh
        const indices = this.indices;
        const vertices = this.vertices;
        const normals = this.vertexNormals;
        const uvs = this.textures;
        for (let i = 0; i < indices.length; i += 3) {
            const i0 = indices[i + 0];
            const i1 = indices[i + 1];
            const i2 = indices[i + 2];
            const x_v0 = vertices[i0 * 3 + 0];
            const y_v0 = vertices[i0 * 3 + 1];
            const z_v0 = vertices[i0 * 3 + 2];
            const x_uv0 = uvs[i0 * 2 + 0];
            const y_uv0 = uvs[i0 * 2 + 1];
            const x_v1 = vertices[i1 * 3 + 0];
            const y_v1 = vertices[i1 * 3 + 1];
            const z_v1 = vertices[i1 * 3 + 2];
            const x_uv1 = uvs[i1 * 2 + 0];
            const y_uv1 = uvs[i1 * 2 + 1];
            const x_v2 = vertices[i2 * 3 + 0];
            const y_v2 = vertices[i2 * 3 + 1];
            const z_v2 = vertices[i2 * 3 + 2];
            const x_uv2 = uvs[i2 * 2 + 0];
            const y_uv2 = uvs[i2 * 2 + 1];
            const x_deltaPos1 = x_v1 - x_v0;
            const y_deltaPos1 = y_v1 - y_v0;
            const z_deltaPos1 = z_v1 - z_v0;
            const x_deltaPos2 = x_v2 - x_v0;
            const y_deltaPos2 = y_v2 - y_v0;
            const z_deltaPos2 = z_v2 - z_v0;
            const x_uvDeltaPos1 = x_uv1 - x_uv0;
            const y_uvDeltaPos1 = y_uv1 - y_uv0;
            const x_uvDeltaPos2 = x_uv2 - x_uv0;
            const y_uvDeltaPos2 = y_uv2 - y_uv0;
            const rInv = x_uvDeltaPos1 * y_uvDeltaPos2 - y_uvDeltaPos1 * x_uvDeltaPos2;
            const r = 1.0 / Math.abs(rInv < 0.0001 ? 1.0 : rInv);
            // Tangent
            const x_tangent = (x_deltaPos1 * y_uvDeltaPos2 - x_deltaPos2 * y_uvDeltaPos1) * r;
            const y_tangent = (y_deltaPos1 * y_uvDeltaPos2 - y_deltaPos2 * y_uvDeltaPos1) * r;
            const z_tangent = (z_deltaPos1 * y_uvDeltaPos2 - z_deltaPos2 * y_uvDeltaPos1) * r;
            // Bitangent
            const x_bitangent = (x_deltaPos2 * x_uvDeltaPos1 - x_deltaPos1 * x_uvDeltaPos2) * r;
            const y_bitangent = (y_deltaPos2 * x_uvDeltaPos1 - y_deltaPos1 * x_uvDeltaPos2) * r;
            const z_bitangent = (z_deltaPos2 * x_uvDeltaPos1 - z_deltaPos1 * x_uvDeltaPos2) * r;
            // Gram-Schmidt orthogonalize
            //t = glm::normalize(t - n * glm:: dot(n, t));
            const x_n0 = normals[i0 * 3 + 0];
            const y_n0 = normals[i0 * 3 + 1];
            const z_n0 = normals[i0 * 3 + 2];
            const x_n1 = normals[i1 * 3 + 0];
            const y_n1 = normals[i1 * 3 + 1];
            const z_n1 = normals[i1 * 3 + 2];
            const x_n2 = normals[i2 * 3 + 0];
            const y_n2 = normals[i2 * 3 + 1];
            const z_n2 = normals[i2 * 3 + 2];
            // Tangent
            const n0_dot_t = x_tangent * x_n0 + y_tangent * y_n0 + z_tangent * z_n0;
            const n1_dot_t = x_tangent * x_n1 + y_tangent * y_n1 + z_tangent * z_n1;
            const n2_dot_t = x_tangent * x_n2 + y_tangent * y_n2 + z_tangent * z_n2;
            const x_resTangent0 = x_tangent - x_n0 * n0_dot_t;
            const y_resTangent0 = y_tangent - y_n0 * n0_dot_t;
            const z_resTangent0 = z_tangent - z_n0 * n0_dot_t;
            const x_resTangent1 = x_tangent - x_n1 * n1_dot_t;
            const y_resTangent1 = y_tangent - y_n1 * n1_dot_t;
            const z_resTangent1 = z_tangent - z_n1 * n1_dot_t;
            const x_resTangent2 = x_tangent - x_n2 * n2_dot_t;
            const y_resTangent2 = y_tangent - y_n2 * n2_dot_t;
            const z_resTangent2 = z_tangent - z_n2 * n2_dot_t;
            const magTangent0 = Math.sqrt(x_resTangent0 * x_resTangent0 + y_resTangent0 * y_resTangent0 + z_resTangent0 * z_resTangent0);
            const magTangent1 = Math.sqrt(x_resTangent1 * x_resTangent1 + y_resTangent1 * y_resTangent1 + z_resTangent1 * z_resTangent1);
            const magTangent2 = Math.sqrt(x_resTangent2 * x_resTangent2 + y_resTangent2 * y_resTangent2 + z_resTangent2 * z_resTangent2);
            // Bitangent
            const n0_dot_bt = x_bitangent * x_n0 + y_bitangent * y_n0 + z_bitangent * z_n0;
            const n1_dot_bt = x_bitangent * x_n1 + y_bitangent * y_n1 + z_bitangent * z_n1;
            const n2_dot_bt = x_bitangent * x_n2 + y_bitangent * y_n2 + z_bitangent * z_n2;
            const x_resBitangent0 = x_bitangent - x_n0 * n0_dot_bt;
            const y_resBitangent0 = y_bitangent - y_n0 * n0_dot_bt;
            const z_resBitangent0 = z_bitangent - z_n0 * n0_dot_bt;
            const x_resBitangent1 = x_bitangent - x_n1 * n1_dot_bt;
            const y_resBitangent1 = y_bitangent - y_n1 * n1_dot_bt;
            const z_resBitangent1 = z_bitangent - z_n1 * n1_dot_bt;
            const x_resBitangent2 = x_bitangent - x_n2 * n2_dot_bt;
            const y_resBitangent2 = y_bitangent - y_n2 * n2_dot_bt;
            const z_resBitangent2 = z_bitangent - z_n2 * n2_dot_bt;
            const magBitangent0 = Math.sqrt(x_resBitangent0 * x_resBitangent0 +
                y_resBitangent0 * y_resBitangent0 +
                z_resBitangent0 * z_resBitangent0);
            const magBitangent1 = Math.sqrt(x_resBitangent1 * x_resBitangent1 +
                y_resBitangent1 * y_resBitangent1 +
                z_resBitangent1 * z_resBitangent1);
            const magBitangent2 = Math.sqrt(x_resBitangent2 * x_resBitangent2 +
                y_resBitangent2 * y_resBitangent2 +
                z_resBitangent2 * z_resBitangent2);
            unpacked.tangents[i0 * 3 + 0] += x_resTangent0 / magTangent0;
            unpacked.tangents[i0 * 3 + 1] += y_resTangent0 / magTangent0;
            unpacked.tangents[i0 * 3 + 2] += z_resTangent0 / magTangent0;
            unpacked.tangents[i1 * 3 + 0] += x_resTangent1 / magTangent1;
            unpacked.tangents[i1 * 3 + 1] += y_resTangent1 / magTangent1;
            unpacked.tangents[i1 * 3 + 2] += z_resTangent1 / magTangent1;
            unpacked.tangents[i2 * 3 + 0] += x_resTangent2 / magTangent2;
            unpacked.tangents[i2 * 3 + 1] += y_resTangent2 / magTangent2;
            unpacked.tangents[i2 * 3 + 2] += z_resTangent2 / magTangent2;
            unpacked.bitangents[i0 * 3 + 0] += x_resBitangent0 / magBitangent0;
            unpacked.bitangents[i0 * 3 + 1] += y_resBitangent0 / magBitangent0;
            unpacked.bitangents[i0 * 3 + 2] += z_resBitangent0 / magBitangent0;
            unpacked.bitangents[i1 * 3 + 0] += x_resBitangent1 / magBitangent1;
            unpacked.bitangents[i1 * 3 + 1] += y_resBitangent1 / magBitangent1;
            unpacked.bitangents[i1 * 3 + 2] += z_resBitangent1 / magBitangent1;
            unpacked.bitangents[i2 * 3 + 0] += x_resBitangent2 / magBitangent2;
            unpacked.bitangents[i2 * 3 + 1] += y_resBitangent2 / magBitangent2;
            unpacked.bitangents[i2 * 3 + 2] += z_resBitangent2 / magBitangent2;
            // TODO: check handedness
        }
        this.tangents = unpacked.tangents;
        this.bitangents = unpacked.bitangents;
    }
    /**
     * @param layout - A {@link Layout} object that describes the
     * desired memory layout of the generated buffer
     * @return The packed array in the ... TODO
     */
    makeBufferData(layout) {
        const numItems = this.vertices.length / 3;
        const buffer = new ArrayBuffer(layout.stride * numItems);
        buffer.numItems = numItems;
        const dataView = new DataView(buffer);
        for (let i = 0, vertexOffset = 0; i < numItems; i++) {
            vertexOffset = i * layout.stride;
            // copy in the vertex data in the order and format given by the
            // layout param
            for (const attribute of layout.attributes) {
                const offset = vertexOffset + layout.attributeMap[attribute.key].offset;
                switch (attribute.key) {
                    case _layout__WEBPACK_IMPORTED_MODULE_0__.Layout.POSITION.key:
                        dataView.setFloat32(offset, this.vertices[i * 3], true);
                        dataView.setFloat32(offset + 4, this.vertices[i * 3 + 1], true);
                        dataView.setFloat32(offset + 8, this.vertices[i * 3 + 2], true);
                        break;
                    case _layout__WEBPACK_IMPORTED_MODULE_0__.Layout.UV.key:
                        dataView.setFloat32(offset, this.textures[i * 2], true);
                        dataView.setFloat32(offset + 4, this.textures[i * 2 + 1], true);
                        break;
                    case _layout__WEBPACK_IMPORTED_MODULE_0__.Layout.NORMAL.key:
                        dataView.setFloat32(offset, this.vertexNormals[i * 3], true);
                        dataView.setFloat32(offset + 4, this.vertexNormals[i * 3 + 1], true);
                        dataView.setFloat32(offset + 8, this.vertexNormals[i * 3 + 2], true);
                        break;
                    case _layout__WEBPACK_IMPORTED_MODULE_0__.Layout.MATERIAL_INDEX.key:
                        dataView.setInt16(offset, this.vertexMaterialIndices[i], true);
                        break;
                    case _layout__WEBPACK_IMPORTED_MODULE_0__.Layout.AMBIENT.key: {
                        const materialIndex = this.vertexMaterialIndices[i];
                        const material = this.materialsByIndex[materialIndex];
                        if (!material) {
                            console.warn('Material "' +
                                this.materialNames[materialIndex] +
                                '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                            break;
                        }
                        dataView.setFloat32(offset, material.ambient[0], true);
                        dataView.setFloat32(offset + 4, material.ambient[1], true);
                        dataView.setFloat32(offset + 8, material.ambient[2], true);
                        break;
                    }
                    case _layout__WEBPACK_IMPORTED_MODULE_0__.Layout.DIFFUSE.key: {
                        const materialIndex = this.vertexMaterialIndices[i];
                        const material = this.materialsByIndex[materialIndex];
                        if (!material) {
                            console.warn('Material "' +
                                this.materialNames[materialIndex] +
                                '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                            break;
                        }
                        dataView.setFloat32(offset, material.diffuse[0], true);
                        dataView.setFloat32(offset + 4, material.diffuse[1], true);
                        dataView.setFloat32(offset + 8, material.diffuse[2], true);
                        break;
                    }
                    case _layout__WEBPACK_IMPORTED_MODULE_0__.Layout.SPECULAR.key: {
                        const materialIndex = this.vertexMaterialIndices[i];
                        const material = this.materialsByIndex[materialIndex];
                        if (!material) {
                            console.warn('Material "' +
                                this.materialNames[materialIndex] +
                                '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                            break;
                        }
                        dataView.setFloat32(offset, material.specular[0], true);
                        dataView.setFloat32(offset + 4, material.specular[1], true);
                        dataView.setFloat32(offset + 8, material.specular[2], true);
                        break;
                    }
                    case _layout__WEBPACK_IMPORTED_MODULE_0__.Layout.SPECULAR_EXPONENT.key: {
                        const materialIndex = this.vertexMaterialIndices[i];
                        const material = this.materialsByIndex[materialIndex];
                        if (!material) {
                            console.warn('Material "' +
                                this.materialNames[materialIndex] +
                                '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                            break;
                        }
                        dataView.setFloat32(offset, material.specularExponent, true);
                        break;
                    }
                    case _layout__WEBPACK_IMPORTED_MODULE_0__.Layout.EMISSIVE.key: {
                        const materialIndex = this.vertexMaterialIndices[i];
                        const material = this.materialsByIndex[materialIndex];
                        if (!material) {
                            console.warn('Material "' +
                                this.materialNames[materialIndex] +
                                '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                            break;
                        }
                        dataView.setFloat32(offset, material.emissive[0], true);
                        dataView.setFloat32(offset + 4, material.emissive[1], true);
                        dataView.setFloat32(offset + 8, material.emissive[2], true);
                        break;
                    }
                    case _layout__WEBPACK_IMPORTED_MODULE_0__.Layout.TRANSMISSION_FILTER.key: {
                        const materialIndex = this.vertexMaterialIndices[i];
                        const material = this.materialsByIndex[materialIndex];
                        if (!material) {
                            console.warn('Material "' +
                                this.materialNames[materialIndex] +
                                '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                            break;
                        }
                        dataView.setFloat32(offset, material.transmissionFilter[0], true);
                        dataView.setFloat32(offset + 4, material.transmissionFilter[1], true);
                        dataView.setFloat32(offset + 8, material.transmissionFilter[2], true);
                        break;
                    }
                    case _layout__WEBPACK_IMPORTED_MODULE_0__.Layout.DISSOLVE.key: {
                        const materialIndex = this.vertexMaterialIndices[i];
                        const material = this.materialsByIndex[materialIndex];
                        if (!material) {
                            console.warn('Material "' +
                                this.materialNames[materialIndex] +
                                '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                            break;
                        }
                        dataView.setFloat32(offset, material.dissolve, true);
                        break;
                    }
                    case _layout__WEBPACK_IMPORTED_MODULE_0__.Layout.ILLUMINATION.key: {
                        const materialIndex = this.vertexMaterialIndices[i];
                        const material = this.materialsByIndex[materialIndex];
                        if (!material) {
                            console.warn('Material "' +
                                this.materialNames[materialIndex] +
                                '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                            break;
                        }
                        dataView.setInt16(offset, material.illumination, true);
                        break;
                    }
                    case _layout__WEBPACK_IMPORTED_MODULE_0__.Layout.REFRACTION_INDEX.key: {
                        const materialIndex = this.vertexMaterialIndices[i];
                        const material = this.materialsByIndex[materialIndex];
                        if (!material) {
                            console.warn('Material "' +
                                this.materialNames[materialIndex] +
                                '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                            break;
                        }
                        dataView.setFloat32(offset, material.refractionIndex, true);
                        break;
                    }
                    case _layout__WEBPACK_IMPORTED_MODULE_0__.Layout.SHARPNESS.key: {
                        const materialIndex = this.vertexMaterialIndices[i];
                        const material = this.materialsByIndex[materialIndex];
                        if (!material) {
                            console.warn('Material "' +
                                this.materialNames[materialIndex] +
                                '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                            break;
                        }
                        dataView.setFloat32(offset, material.sharpness, true);
                        break;
                    }
                    case _layout__WEBPACK_IMPORTED_MODULE_0__.Layout.ANTI_ALIASING.key: {
                        const materialIndex = this.vertexMaterialIndices[i];
                        const material = this.materialsByIndex[materialIndex];
                        if (!material) {
                            console.warn('Material "' +
                                this.materialNames[materialIndex] +
                                '" not found in mesh. Did you forget to call addMaterialLibrary(...)?"');
                            break;
                        }
                        dataView.setInt16(offset, material.antiAliasing ? 1 : 0, true);
                        break;
                    }
                }
            }
        }
        return buffer;
    }
    makeIndexBufferData() {
        const buffer = new Uint16Array(this.indices);
        buffer.numItems = this.indices.length;
        return buffer;
    }
    makeIndexBufferDataForMaterials(...materialIndices) {
        const indices = new Array().concat(...materialIndices.map(mtlIdx => this.indicesPerMaterial[mtlIdx]));
        const buffer = new Uint16Array(indices);
        buffer.numItems = indices.length;
        return buffer;
    }
    addMaterialLibrary(mtl) {
        for (const name in mtl.materials) {
            if (!(name in this.materialIndices)) {
                // This material is not referenced by the mesh
                continue;
            }
            const material = mtl.materials[name];
            // Find the material index for this material
            const materialIndex = this.materialIndices[material.name];
            // Put the material into the materialsByIndex object at the right
            // spot as determined when the obj file was parsed
            this.materialsByIndex[materialIndex] = material;
        }
    }
}
function* triangulate(elements) {
    if (elements.length <= 3) {
        yield elements;
    }
    else if (elements.length === 4) {
        yield [elements[0], elements[1], elements[2]];
        yield [elements[2], elements[3], elements[0]];
    }
    else {
        for (let i = 1; i < elements.length - 1; i++) {
            yield [elements[0], elements[i], elements[i + 1]];
        }
    }
}


/***/ }),

/***/ "./src/app/shapes/cube.ts":
/*!********************************!*\
  !*** ./src/app/shapes/cube.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cube": () => /* binding */ Cube
/* harmony export */ });
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./src/app/shapes/shape.ts");
/* harmony import */ var _assets_textures_bzz_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/textures/bzz.png */ "./src/assets/textures/bzz.png");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat4.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat3.js");



class Cube extends _shape__WEBPACK_IMPORTED_MODULE_0__.Shape {
    constructor(vertices) {
        super();
        this.vertices = vertices;
        this.indices = [
            0, 1, 2,
            2, 3, 0,
            // задняя часть
            4, 5, 6,
            6, 7, 4,
            //левая боковая часть
            8, 9, 10,
            10, 11, 8,
            // правая боковая часть
            12, 13, 14,
            14, 15, 12
        ];
        this.textureCoords = [
            0.0, 0.0,
            0.0, 1.0,
            1.0, 1.0,
            1.0, 0.0,
            0.0, 0.0,
            0.0, 1.0,
            1.0, 1.0,
            1.0, 0.0,
            0.0, 0.0,
            0.0, 1.0,
            1.0, 1.0,
            1.0, 0.0,
            0.0, 0.0,
            0.0, 1.0,
            1.0, 1.0,
            1.0, 0.0
        ];
        this.normals = [
            // Лицевая сторона
            0.0, 0.0, 1.0,
            0.0, 0.0, 1.0,
            0.0, 0.0, 1.0,
            0.0, 0.0, 1.0,
            // Задняя сторона
            0.0, 0.0, -1.0,
            0.0, 0.0, -1.0,
            0.0, 0.0, -1.0,
            0.0, 0.0, -1.0,
            // Левая боковая сторона
            -1.0, 0.0, 0.0,
            -1.0, 0.0, 0.0,
            -1.0, 0.0, 0.0,
            -1.0, 0.0, 0.0,
            // Правая боковая сторона
            1.0, 0.0, 0.0,
            1.0, 0.0, 0.0,
            1.0, 0.0, 0.0,
            1.0, 0.0, 0.0,
        ];
    }
    draw(gl) {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.vertexAttribPointer(this.vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
        // создание буфера индексов
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        // буфер нормалей
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexNormalBuffer);
        gl.vertexAttribPointer(this.vertexNormalAttribute, 3, gl.FLOAT, false, 0, 0);
        // текстурка
        gl.bindBuffer(gl.ARRAY_BUFFER, this.textureCoordsBuffer);
        gl.vertexAttribPointer(this.vertexTextureAttribute, 2, gl.FLOAT, false, 0, 0);
        gl.activeTexture(gl.TEXTURE2);
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.uniform1i(gl.getUniformLocation(this.shaderProgram, "Sampler"), 2);
        gl.enable(gl.DEPTH_TEST);
        gl_matrix__WEBPACK_IMPORTED_MODULE_2__.identity(this.modelMatrix);
        // mat4.scale(this.modelMatrix, this.modelMatrix, [0.5, 0.5, 0.5]);
        gl_matrix__WEBPACK_IMPORTED_MODULE_2__.translate(this.modelMatrix, this.modelMatrix, [2, -0.25, 0]);
        gl_matrix__WEBPACK_IMPORTED_MODULE_3__.normalFromMat4(this.normalMatrix, this.modelMatrix);
        gl.uniformMatrix4fv(this.modelMatrixLocation, false, this.modelMatrix);
        gl.uniformMatrix3fv(this.normalMatrixLocation, false, this.normalMatrix);
        gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_SHORT, 0);
    }
    fillBuffers(gl) {
        this.initTexture(gl, _assets_textures_bzz_png__WEBPACK_IMPORTED_MODULE_1__.default);
        this.initFields(gl);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
        // создание буфера индексов
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), gl.STATIC_DRAW);
        // буфер нормалей
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexNormalBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.normals), gl.STATIC_DRAW);
        // текстурка
        gl.bindBuffer(gl.ARRAY_BUFFER, this.textureCoordsBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.textureCoords), gl.STATIC_DRAW);
    }
}


/***/ }),

/***/ "./src/app/shapes/custom-object.ts":
/*!*****************************************!*\
  !*** ./src/app/shapes/custom-object.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomObject": () => /* binding */ CustomObject
/* harmony export */ });
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./src/app/shapes/shape.ts");
/* harmony import */ var _mesh_mesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mesh/mesh */ "./src/app/mesh/mesh.ts");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat4.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat3.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var _assets_textures_ElsaTex_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/textures/ElsaTex.png */ "./src/assets/textures/ElsaTex.png");




class CustomObject extends _shape__WEBPACK_IMPORTED_MODULE_0__.Shape {
    constructor(objString) {
        super();
        this.scaleArray = [0.5, 0.5, 0.5];
        this.translateArray = [2, -1, 0.3];
        this.mesh = new _mesh_mesh__WEBPACK_IMPORTED_MODULE_1__.default(objString);
        this.mesh.vertexNormals = this.getNormals(this.mesh.vertices, this.mesh.indices);
    }
    draw(gl) {
        // initMeshBuffers(gl, this.mesh);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.vertexAttribPointer(this.vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
        // создание буфера индексов
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        // текстурка
        gl.bindBuffer(gl.ARRAY_BUFFER, this.textureCoordsBuffer);
        gl.vertexAttribPointer(this.vertexTextureAttribute, 2, gl.FLOAT, false, 0, 0);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.uniform1i(gl.getUniformLocation(this.shaderProgram, "Sampler"), 0);
        gl.enable(gl.DEPTH_TEST);
        // буфер нормалей
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexNormalBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.mesh.vertexNormals), gl.STATIC_DRAW);
        gl.vertexAttribPointer(this.vertexNormalAttribute, 3, gl.FLOAT, false, 0, 0);
        gl_matrix__WEBPACK_IMPORTED_MODULE_3__.identity(this.modelMatrix);
        gl_matrix__WEBPACK_IMPORTED_MODULE_3__.scale(this.modelMatrix, this.modelMatrix, this.scaleArray);
        gl_matrix__WEBPACK_IMPORTED_MODULE_3__.translate(this.modelMatrix, this.modelMatrix, this.translateArray);
        gl_matrix__WEBPACK_IMPORTED_MODULE_4__.normalFromMat4(this.normalMatrix, this.modelMatrix);
        gl.uniformMatrix4fv(this.modelMatrixLocation, false, this.modelMatrix);
        gl.uniformMatrix3fv(this.normalMatrixLocation, false, this.normalMatrix);
        gl.drawElements(gl.TRIANGLES, this.mesh.indices.length, gl.UNSIGNED_SHORT, 0);
    }
    getNormals(coords, indices) {
        const vNormals = [];
        const fNormals = [];
        const vertices = [];
        for (let i = 0; i < coords.length; i += 3) {
            vertices.push([coords[i], coords[i + 1], coords[i + 2]]);
            vNormals.push(gl_matrix__WEBPACK_IMPORTED_MODULE_5__.create());
        }
        for (let i = 0; i < indices.length; i += 3) {
            const normal = gl_matrix__WEBPACK_IMPORTED_MODULE_5__.create();
            const sideA = gl_matrix__WEBPACK_IMPORTED_MODULE_5__.create();
            gl_matrix__WEBPACK_IMPORTED_MODULE_5__.sub(sideA, vertices[indices[i + 1]], vertices[indices[i]]);
            const sideB = gl_matrix__WEBPACK_IMPORTED_MODULE_5__.create();
            gl_matrix__WEBPACK_IMPORTED_MODULE_5__.sub(sideB, vertices[indices[i + 2]], vertices[indices[i]]);
            gl_matrix__WEBPACK_IMPORTED_MODULE_5__.cross(normal, sideA, sideB);
            gl_matrix__WEBPACK_IMPORTED_MODULE_5__.normalize(normal, normal);
            fNormals.push(normal);
        }
        for (let i = 0; i < indices.length; i++) {
            const f = Math.floor(i / 3); // which face is this index part of (3 per face?)
            const v = indices[i]; // which vertex number is being used
            gl_matrix__WEBPACK_IMPORTED_MODULE_5__.add(vNormals[v], vNormals[v], fNormals[f]);
        }
        vNormals.forEach(normal => gl_matrix__WEBPACK_IMPORTED_MODULE_5__.normalize(normal, normal));
        /*        vNormals.forEach(normal => {
                    if (normal[1] < 0) {
                        normal[1] *= -1;
                    }
                })*/
        // vNormals.forEach(normal => vec3.normalize(normal, normal));
        console.log("norm:", vNormals);
        console.log("flat:", vNormals.flat());
        const res = vNormals.map(normal => Array.from(normal));
        return res.flat();
    }
    fillBuffers(gl) {
        this.initTexture(gl, _assets_textures_ElsaTex_png__WEBPACK_IMPORTED_MODULE_2__.default);
        this.initFields(gl);
        // initMeshBuffers(gl, this.mesh);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.mesh.vertices), gl.STATIC_DRAW);
        // создание буфера индексов
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.mesh.indices), gl.STATIC_DRAW);
        // текстурка
        gl.bindBuffer(gl.ARRAY_BUFFER, this.textureCoordsBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.mesh.textures), gl.STATIC_DRAW);
        // буфер нормалей
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexNormalBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.mesh.vertexNormals), gl.STATIC_DRAW);
    }
}


/***/ }),

/***/ "./src/app/shapes/ground.ts":
/*!**********************************!*\
  !*** ./src/app/shapes/ground.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ground": () => /* binding */ Ground
/* harmony export */ });
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./src/app/shapes/shape.ts");
/* harmony import */ var _assets_textures_texture_18_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/textures/texture-18.png */ "./src/assets/textures/texture-18.png");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat4.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat3.js");



class Ground extends _shape__WEBPACK_IMPORTED_MODULE_0__.Shape {
    constructor() {
        super(...arguments);
        this.indices = [
            0, 1, 2,
            2, 3, 0,
        ];
        this.textureCoords = [
            0.0, 0.0,
            0.0, 1.0,
            1.0, 1.0,
            1.0, 0.0
        ];
        this.vertices = [
            3, -0.5, 3,
            3, -0.5, -3,
            -3, -0.5, -3,
            -3, -0.5, 3
        ];
        this.normals = [
            0.0, 1.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 1.0, 0.0
        ];
    }
    draw(gl) {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.vertexAttribPointer(this.vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
        // создание буфера индексов
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        // буфер нормалей
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexNormalBuffer);
        gl.vertexAttribPointer(this.vertexNormalAttribute, 3, gl.FLOAT, false, 0, 0);
        // текстурка
        gl.bindBuffer(gl.ARRAY_BUFFER, this.textureCoordsBuffer);
        gl.vertexAttribPointer(this.vertexTextureAttribute, 2, gl.FLOAT, false, 0, 0);
        gl.activeTexture(gl.TEXTURE2);
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.uniform1i(gl.getUniformLocation(this.shaderProgram, "Sampler"), 2);
        gl.enable(gl.DEPTH_TEST);
        gl_matrix__WEBPACK_IMPORTED_MODULE_2__.identity(this.modelMatrix);
        // mat4.scale(modelMatrix, modelMatrix, [0.5, 0.5, 0.5]);
        // mat4.translate(modelMatrix, modelMatrix, [2, 0, 0]);
        gl_matrix__WEBPACK_IMPORTED_MODULE_3__.normalFromMat4(this.normalMatrix, this.modelMatrix);
        gl.uniformMatrix4fv(this.modelMatrixLocation, false, this.modelMatrix);
        gl.uniformMatrix3fv(this.normalMatrixLocation, false, this.normalMatrix);
        gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_SHORT, 0);
    }
    fillBuffers(gl) {
        this.initTexture(gl, _assets_textures_texture_18_png__WEBPACK_IMPORTED_MODULE_1__.default);
        this.initFields(gl);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
        // создание буфера индексов
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), gl.STATIC_DRAW);
        // буфер нормалей
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexNormalBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.normals), gl.STATIC_DRAW);
        // текстурка
        gl.bindBuffer(gl.ARRAY_BUFFER, this.textureCoordsBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.textureCoords), gl.STATIC_DRAW);
    }
}


/***/ }),

/***/ "./src/app/shapes/shape.ts":
/*!*********************************!*\
  !*** ./src/app/shapes/shape.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Shape": () => /* binding */ Shape
/* harmony export */ });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat4.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat3.js");

class Shape {
    constructor() {
        this.modelMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
        this.normalMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
    }
    initFields(gl) {
        this.shaderProgram = gl.getParameter(gl.CURRENT_PROGRAM);
        this.vertexPositionAttribute = gl.getAttribLocation(this.shaderProgram, "vertexPosition");
        this.vertexTextureAttribute = gl.getAttribLocation(this.shaderProgram, "vertexTextureCoords");
        this.vertexNormalAttribute = gl.getAttribLocation(this.shaderProgram, "vertexNormal");
        this.modelMatrixLocation = gl.getUniformLocation(this.shaderProgram, "ModelMatrix");
        this.normalMatrixLocation = gl.getUniformLocation(this.shaderProgram, "NormalMatrix");
        this.vertexBuffer = gl.createBuffer();
        this.indexBuffer = gl.createBuffer();
        this.vertexNormalBuffer = gl.createBuffer();
        this.textureCoordsBuffer = gl.createBuffer();
    }
    initTexture(gl, imageSrc) {
        this.texture = gl.createTexture();
        console.log(this.texture);
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        const image = new Image();
        image.onload = () => {
            gl.bindTexture(gl.TEXTURE_2D, this.texture);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
            gl.bindTexture(gl.TEXTURE_2D, null);
        };
        image.src = imageSrc;
    }
}


/***/ }),

/***/ "./src/app/shapes/snow.ts":
/*!********************************!*\
  !*** ./src/app/shapes/snow.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Snow": () => /* binding */ Snow
/* harmony export */ });
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./src/app/shapes/shape.ts");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat4.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat3.js");
/* harmony import */ var _assets_textures_FajbNY_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/textures/FajbNY.png */ "./src/assets/textures/FajbNY.png");



class Snow extends _shape__WEBPACK_IMPORTED_MODULE_0__.Shape {
    constructor() {
        super();
        this.indices = [
            0, 1, 2, 3, 4, 5, 6, 7
        ];
        this.textureCoords = [
            0.0, 0.0,
            0.0, 1.0,
            1.0, 1.0,
            1.0, 0.0
        ];
        this.normals = [
            0.0, 1.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 1.0, 0.0
        ];
        this.flakes = [];
        this.radius = 0.013;
        this.vertices = [
            this.radius, 0, this.radius,
            -this.radius, 0, -this.radius,
            -this.radius, 0, this.radius,
            this.radius, 0, -this.radius,
            0, 0, this.radius,
            0, 0, -this.radius,
            -this.radius, 0, 0,
            this.radius, 0, 0
        ];
        for (let i = 0; i < 1000; i++) {
            this.flakes.push({
                offset: [this.getRandom(-3, 3), this.getRandom(-0.5, 3), this.getRandom(-3, 3)],
                rotationVector: [Math.random(), Math.random(), Math.random()],
                rotationAngle: 0,
                scale: [1, 1, 1]
            });
        }
    }
    draw(gl) {
        // создание буфера индексов
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        // буфер нормалей
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexNormalBuffer);
        gl.vertexAttribPointer(this.vertexNormalAttribute, 3, gl.FLOAT, false, 0, 0);
        // текстурка
        gl.bindBuffer(gl.ARRAY_BUFFER, this.textureCoordsBuffer);
        gl.vertexAttribPointer(this.vertexTextureAttribute, 2, gl.FLOAT, false, 0, 0);
        gl.activeTexture(gl.TEXTURE3);
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.uniform1i(gl.getUniformLocation(this.shaderProgram, "Sampler"), 3);
        gl.disable(gl.DEPTH_TEST);
        this.flakes.forEach(flake => {
            this.drawFlake(gl, flake, this.vertexPositionAttribute, this.modelMatrixLocation, this.normalMatrixLocation);
            this.moveFlake(flake);
        });
    }
    drawFlake(gl, flake, vertexPositionAttribute, modelMatrixLocation, normalMatrixLocation) {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
        gl_matrix__WEBPACK_IMPORTED_MODULE_2__.identity(this.modelMatrix);
        gl_matrix__WEBPACK_IMPORTED_MODULE_2__.translate(this.modelMatrix, this.modelMatrix, flake.offset);
        // mat4.scale(this.modelMatrix, this.modelMatrix, flake.scale);
        gl_matrix__WEBPACK_IMPORTED_MODULE_2__.rotate(this.modelMatrix, this.modelMatrix, flake.rotationAngle, flake.rotationVector);
        gl_matrix__WEBPACK_IMPORTED_MODULE_3__.normalFromMat4(this.normalMatrix, this.modelMatrix);
        gl.uniformMatrix4fv(this.modelMatrixLocation, false, this.modelMatrix);
        gl.uniformMatrix3fv(normalMatrixLocation, false, this.normalMatrix);
        gl.disable(gl.DEPTH_TEST);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.drawElements(gl.LINES, this.indices.length, gl.UNSIGNED_SHORT, 0);
    }
    fillBuffers(gl) {
        this.initTexture(gl, _assets_textures_FajbNY_png__WEBPACK_IMPORTED_MODULE_1__.default);
        this.initFields(gl);
        // создание буфера индексов
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
        // буфер нормалей
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexNormalBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.normals), gl.STATIC_DRAW);
        // текстурка
        gl.bindBuffer(gl.ARRAY_BUFFER, this.textureCoordsBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.textureCoords), gl.STATIC_DRAW);
    }
    moveFlake(flake) {
        flake.rotationAngle += this.getRandom(0, 0.03);
        flake.rotationAngle = flake.rotationAngle > 2 * Math.PI ? 0 : flake.rotationAngle;
        flake.offset = [
            flake.offset[0] + this.getRandom(-0.0008, 0.0008),
            flake.offset[1] - this.getRandom(0, 0.0008),
            flake.offset[2] + this.getRandom(-0.0008, 0.0008)
        ];
        if (flake.offset[1] < -0.5) {
            flake.offset[1] = 3;
        }
        // flake.rotation += this.getRandom(-0.03, 0.03);
        // flake.scale = [
        //     1 + this.getRandom(-0.05, 0.05),
        //     1 + this.getRandom(-0.05, 0.05),
        //     1 + this.getRandom(-0.05, 0.05),
        // ]
    }
    getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }
}


/***/ }),

/***/ "./src/app/shapes/sphere.ts":
/*!**********************************!*\
  !*** ./src/app/shapes/sphere.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sphere": () => /* binding */ Sphere
/* harmony export */ });
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./src/app/shapes/shape.ts");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat4.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat3.js");
/* harmony import */ var _assets_textures_planeta_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/textures/planeta.png */ "./src/assets/textures/planeta.png");



class Sphere extends _shape__WEBPACK_IMPORTED_MODULE_0__.Shape {
    constructor(center, radius) {
        super();
        this.center = center;
        this.radius = radius;
        this.sectorsCount = 20;
        this.stacksCount = 10;
        this.vertices = [];
        this.normals = [];
        this.texCoords = [];
        this.indices = [];
        this.getVertices();
        this.getIndices();
    }
    draw(gl) {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.vertexAttribPointer(this.vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
        // создание буфера индексов
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        // буфер нормалей
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexNormalBuffer);
        gl.vertexAttribPointer(this.vertexNormalAttribute, 3, gl.FLOAT, false, 0, 0);
        // текстурка
        gl.bindBuffer(gl.ARRAY_BUFFER, this.textureCoordsBuffer);
        gl.vertexAttribPointer(this.vertexTextureAttribute, 2, gl.FLOAT, false, 0, 0);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.uniform1i(gl.getUniformLocation(this.shaderProgram, "Sampler"), 1);
        gl.enable(gl.DEPTH_TEST);
        gl_matrix__WEBPACK_IMPORTED_MODULE_2__.identity(this.modelMatrix);
        gl_matrix__WEBPACK_IMPORTED_MODULE_3__.normalFromMat4(this.normalMatrix, this.modelMatrix);
        gl.uniformMatrix4fv(this.modelMatrixLocation, false, this.modelMatrix);
        gl.uniformMatrix3fv(this.normalMatrixLocation, false, this.normalMatrix);
        gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_SHORT, 0);
    }
    fillBuffers(gl) {
        this.initTexture(gl, _assets_textures_planeta_png__WEBPACK_IMPORTED_MODULE_1__.default);
        this.initFields(gl);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
        // создание буфера индексов
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), gl.STATIC_DRAW);
        // буфер нормалей
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexNormalBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.normals), gl.STATIC_DRAW);
        // текстурка
        gl.bindBuffer(gl.ARRAY_BUFFER, this.textureCoordsBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.texCoords), gl.STATIC_DRAW);
    }
    getVertices() {
        const sectorStep = 2 * Math.PI / this.sectorsCount;
        const stackStep = Math.PI / this.stacksCount;
        let sectorAngle;
        let stackAngle;
        let x, y, z, xy;
        let nx, ny, nz;
        const lengthInv = 1.0 / this.radius;
        let s, t;
        for (let i = 0; i <= this.stacksCount; i++) {
            stackAngle = Math.PI / 2 - i * stackStep; // starting from pi/2 to -pi/2
            xy = this.radius * Math.cos(stackAngle); // r * cos(u)
            z = this.radius * Math.sin(stackAngle); // r * sin(u)
            for (let j = 0; j <= this.sectorsCount; j++) {
                sectorAngle = j * sectorStep; // starting from 0 to 2pi
                // vertex position (x, y, z)
                x = xy * Math.cos(sectorAngle); // r * cos(u) * cos(v)
                y = xy * Math.sin(sectorAngle); // r * cos(u) * sin(v)
                this.vertices.push(x);
                this.vertices.push(y);
                this.vertices.push(z);
                // normalized vertex normal (nx, ny, nz)
                nx = x * lengthInv;
                ny = y * lengthInv;
                nz = z * lengthInv;
                this.normals.push(nx);
                this.normals.push(ny);
                this.normals.push(nz);
                // vertex tex coord (s, t) range between [0, 1]
                s = j / this.sectorsCount;
                t = i / this.stacksCount;
                this.texCoords.push(s);
                this.texCoords.push(t);
            }
        }
    }
    getIndices() {
        let k1, k2;
        for (let i = 0; i <= this.stacksCount; i++) {
            k1 = i * (this.sectorsCount + 1); // beginning of current stack
            k2 = k1 + this.sectorsCount + 1; // beginning of next stack
            for (let j = 0; j < this.sectorsCount; j++, k1++, k2++) {
                // 2 triangles per sector excluding first and last stacks
                // k1 => k2 => k1+1
                if (i != 0) {
                    this.indices.push(k1);
                    this.indices.push(k2);
                    this.indices.push(k1 + 1);
                }
                // k1+1 => k2 => k2+1
                if (i != (this.stacksCount - 1)) {
                    this.indices.push(k1 + 1);
                    this.indices.push(k2);
                    this.indices.push(k2 + 1);
                }
            }
        }
    }
}


/***/ }),

/***/ "./src/app/utils/camera.ts":
/*!*********************************!*\
  !*** ./src/app/utils/camera.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Camera": () => /* binding */ Camera
/* harmony export */ });
class Camera {
    constructor() {
        this.eye = [0, 0.0, 0];
        this.center = [0, 0, 0];
        this.up = [0, 1, 0];
        this.angle = 0;
        this.distance = 2;
        this.height = 0;
        this.handleKeyDown = (e) => {
            switch (e.code) {
                case "KeyW":
                    this.distance -= 0.1;
                    break;
                case "KeyS":
                    this.distance += 0.1;
                    break;
                case "KeyA":
                    this.angle += 0.1;
                    break;
                case "KeyD":
                    this.angle -= 0.1;
                    break;
                case "KeyR":
                    this.height += 0.1;
                    break;
                case "KeyF":
                    this.height -= 0.1;
                    break;
            }
            this.updateVectors();
        };
        this.updateVectors();
        document.addEventListener('keydown', this.handleKeyDown, false);
    }
    updateVectors() {
        this.distance = this.distance > 0.3 ? this.distance : 0.3;
        this.angle %= 2 * Math.PI;
        this.eye = [this.distance * Math.cos(this.angle), this.height, this.distance * Math.sin(this.angle)];
    }
}


/***/ }),

/***/ "./src/app/utils/scene.ts":
/*!********************************!*\
  !*** ./src/app/utils/scene.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scene": () => /* binding */ Scene
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/app/utils/util.ts");
/* harmony import */ var _shaders_vertexShader_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaders/vertexShader.glsl */ "./src/shaders/vertexShader.glsl");
/* harmony import */ var _shaders_fragmentShader_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaders/fragmentShader.glsl */ "./src/shaders/fragmentShader.glsl");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat4.js");




class Scene {
    constructor(gl, camera) {
        this.gl = gl;
        this.camera = camera;
        this.shapes = new Set();
        this.shaderProgram = gl.createProgram();
        gl.attachShader(this.shaderProgram, (0,_util__WEBPACK_IMPORTED_MODULE_0__.createAndCompileShader)(gl, _shaders_vertexShader_glsl__WEBPACK_IMPORTED_MODULE_1__.default, gl.VERTEX_SHADER));
        gl.attachShader(this.shaderProgram, (0,_util__WEBPACK_IMPORTED_MODULE_0__.createAndCompileShader)(gl, _shaders_fragmentShader_glsl__WEBPACK_IMPORTED_MODULE_2__.default, gl.FRAGMENT_SHADER));
        gl.linkProgram(this.shaderProgram);
        this.viewport = this.gl.getParameter(this.gl.VIEWPORT);
        this.vertexPositionAttribute = gl.getAttribLocation(this.shaderProgram, "vertexPosition");
        gl.enableVertexAttribArray(this.vertexPositionAttribute);
        this.vertexTextureAttribute = gl.getAttribLocation(this.shaderProgram, "vertexTextureCoords");
        gl.enableVertexAttribArray(this.vertexTextureAttribute);
        this.vertexNormalAttribute = gl.getAttribLocation(this.shaderProgram, "vertexNormal");
        gl.enableVertexAttribArray(this.vertexNormalAttribute);
        this.ViewMatrix = gl.getUniformLocation(this.shaderProgram, "ViewMatrix");
        this.ProjMatrix = gl.getUniformLocation(this.shaderProgram, "PerspectiveMatrix");
        gl.useProgram(this.shaderProgram);
        gl.disable(gl.DEPTH_TEST);
        this.setupLight();
        const perspectiveMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_3__.create();
        gl_matrix__WEBPACK_IMPORTED_MODULE_3__.perspective(perspectiveMatrix, 1.04, this.viewport[2] / this.viewport[3], 0.1, 100.0);
        this.gl.uniformMatrix4fv(this.ProjMatrix, false, perspectiveMatrix);
    }
    addShape(shape) {
        this.shapes.add(shape);
        shape.fillBuffers(this.gl);
    }
    deleteShape(shape) {
        this.shapes.delete(shape);
    }
    start() {
        this.gl.clearColor(0.5, 0.5, 0.5, 1.0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.setupCamera();
        this.drawShapes();
        requestAnimationFrame(() => {
            this.start();
        });
    }
    setupCamera() {
        const viewMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_3__.create();
        // const viewport: number[] = this.gl.getParameter(this.gl.VIEWPORT);
        gl_matrix__WEBPACK_IMPORTED_MODULE_3__.identity(viewMatrix);
        gl_matrix__WEBPACK_IMPORTED_MODULE_3__.lookAt(viewMatrix, this.camera.eye, this.camera.center, this.camera.up);
        this.gl.uniformMatrix4fv(this.ViewMatrix, false, viewMatrix);
    }
    drawShapes() {
        this.shapes.forEach(shape => shape.draw(this.gl));
    }
    setupLight() {
        // Позиция источника
        const uniformLightPosition = this.gl.getUniformLocation(this.shaderProgram, "lightPosition");
        // фоновое отражение света
        const uniformAmbientLightColor = this.gl.getUniformLocation(this.shaderProgram, "ambientLightColor");
        // диффузное отражение света
        const uniformDiffuseLightColor = this.gl.getUniformLocation(this.shaderProgram, "diffuseLightColor");
        // зеркальное отражение света
        const uniformSpecularLightColor = this.gl.getUniformLocation(this.shaderProgram, "specularLightColor");
        this.gl.uniform3fv(uniformLightPosition, [2.0, 1.0, 0]);
        this.gl.uniform3fv(uniformAmbientLightColor, [0.1, 0.1, 0.1]);
        this.gl.uniform3fv(uniformDiffuseLightColor, [0.7, 0.7, 0.7]);
        this.gl.uniform3fv(uniformSpecularLightColor, [1.0, 1.0, 1.0]);
    }
}


/***/ }),

/***/ "./src/app/utils/util.ts":
/*!*******************************!*\
  !*** ./src/app/utils/util.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGlContext": () => /* binding */ getGlContext,
/* harmony export */   "loadTextResource": () => /* binding */ loadTextResource,
/* harmony export */   "createAndCompileShader": () => /* binding */ createAndCompileShader
/* harmony export */ });
function getGlContext() {
    const canvas = document.createElement("canvas");
    canvas.id = "wgl";
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(canvas);
    const gl = canvas.getContext("webgl", {
        premultipliedAlpha: false
    });
    if (!gl) {
        throw "No WebGL support";
    }
    canvas.height = canvas.clientHeight;
    canvas.width = canvas.clientWidth;
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    return gl;
}
function loadTextResource(url) {
    return fetch(url).then(res => {
        return res.text();
    });
}
function createAndCompileShader(gl, shaderSrc, type) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, shaderSrc);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const log = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        throw "Ошибка компиляции шейдера: " + log;
    }
    return shader;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/app/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;