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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/app.jsx":
/*!***************************************!*\
  !*** ./client/src/components/app.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tableColumn_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tableColumn.jsx */ \"./client/src/components/tableColumn.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.clickHandler = _this.clickHandler.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"clickHandler\",\n    value: function clickHandler(event) {\n      event.preventDefault();\n      console.log(\"circleId: \".concat(event.target.id));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, React.createElement(\"h1\", null, \"Connect 4!\"), React.createElement(\"table\", {\n        className: \"column\",\n        id: \"column0\",\n        onClick: this.clickHandler\n      }, React.createElement(_tableColumn_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null)), React.createElement(\"table\", {\n        className: \"column\",\n        id: \"column1\",\n        onClick: this.clickHandler\n      }, React.createElement(_tableColumn_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null)), React.createElement(\"table\", {\n        className: \"column\",\n        id: \"column1\",\n        onClick: this.clickHandler\n      }, React.createElement(_tableColumn_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null)), React.createElement(\"table\", {\n        className: \"column\",\n        id: \"column3\",\n        onClick: this.clickHandler\n      }, React.createElement(_tableColumn_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null)), React.createElement(\"table\", {\n        className: \"column\",\n        id: \"column4\",\n        onClick: this.clickHandler\n      }, React.createElement(_tableColumn_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null)), React.createElement(\"table\", {\n        className: \"column\",\n        id: \"column5\",\n        onClick: this.clickHandler\n      }, React.createElement(_tableColumn_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null)), React.createElement(\"table\", {\n        className: \"column\",\n        id: \"column6\",\n        onClick: this.clickHandler\n      }, React.createElement(_tableColumn_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null)));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvYXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9hcHAuanN4P2I2MzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhYmxlQ29sdW1uIGZyb20gXCIuL3RhYmxlQ29sdW1uLmpzeFwiO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmNsaWNrSGFuZGxlciA9IHRoaXMuY2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBjbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGBjaXJjbGVJZDogJHtldmVudC50YXJnZXQuaWR9YCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5Db25uZWN0IDQhPC9oMT5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImNvbHVtblwiIGlkPVwiY29sdW1uMFwiIG9uQ2xpY2s9e3RoaXMuY2xpY2tIYW5kbGVyfT5cbiAgICAgICAgICA8VGFibGVDb2x1bW4gLz5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImNvbHVtblwiIGlkPVwiY29sdW1uMVwiIG9uQ2xpY2s9e3RoaXMuY2xpY2tIYW5kbGVyfT5cbiAgICAgICAgICA8VGFibGVDb2x1bW4gLz5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImNvbHVtblwiIGlkPVwiY29sdW1uMVwiIG9uQ2xpY2s9e3RoaXMuY2xpY2tIYW5kbGVyfT5cbiAgICAgICAgICA8VGFibGVDb2x1bW4gLz5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImNvbHVtblwiIGlkPVwiY29sdW1uM1wiIG9uQ2xpY2s9e3RoaXMuY2xpY2tIYW5kbGVyfT5cbiAgICAgICAgICA8VGFibGVDb2x1bW4gLz5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImNvbHVtblwiIGlkPVwiY29sdW1uNFwiIG9uQ2xpY2s9e3RoaXMuY2xpY2tIYW5kbGVyfT5cbiAgICAgICAgICA8VGFibGVDb2x1bW4gLz5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImNvbHVtblwiIGlkPVwiY29sdW1uNVwiIG9uQ2xpY2s9e3RoaXMuY2xpY2tIYW5kbGVyfT5cbiAgICAgICAgICA8VGFibGVDb2x1bW4gLz5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImNvbHVtblwiIGlkPVwiY29sdW1uNlwiIG9uQ2xpY2s9e3RoaXMuY2xpY2tIYW5kbGVyfT5cbiAgICAgICAgICA8VGFibGVDb2x1bW4gLz5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFLQTs7OztBQXRDQTtBQUNBO0FBd0NBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/app.jsx\n");

/***/ }),

/***/ "./client/src/components/tableCell.jsx":
/*!*********************************************!*\
  !*** ./client/src/components/tableCell.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nvar TableCell =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(TableCell, _React$Component);\n\n  function TableCell(props) {\n    var _this;\n\n    _classCallCheck(this, TableCell);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(TableCell).call(this, props));\n    _this.clickHandler = _this.clickHandler.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.state = {\n      occupied: null\n    };\n    return _this;\n  }\n\n  _createClass(TableCell, [{\n    key: \"clickHandler\",\n    value: function clickHandler(event) {\n      event.preventDefault();\n      this.placePiece();\n    }\n  }, {\n    key: \"placePiece\",\n    value: function placePiece() {\n      this.setState({\n        occupied: 'player1'\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var className = 'cell';\n\n      if (this.state.occupied !== null) {\n        className += ' red';\n      }\n\n      return React.createElement(\"tr\", {\n        className: \"row\"\n      }, React.createElement(\"td\", {\n        className: className,\n        id: this.props.row,\n        onClick: this.clickHandler\n      }));\n    }\n  }]);\n\n  return TableCell;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableCell);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvdGFibGVDZWxsLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy90YWJsZUNlbGwuanN4P2Q2ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVGFibGVDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jbGlja0hhbmRsZXIgPSB0aGlzLmNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvY2N1cGllZDogbnVsbCxcbiAgICB9XG4gIH1cblxuICBjbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucGxhY2VQaWVjZSgpO1xuICB9XG5cbiAgcGxhY2VQaWVjZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG9jY3VwaWVkOiAncGxheWVyMScsXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNsYXNzTmFtZSA9ICdjZWxsJztcbiAgICBpZiAodGhpcy5zdGF0ZS5vY2N1cGllZCAhPT0gbnVsbCkge1xuICAgICAgY2xhc3NOYW1lICs9ICcgcmVkJ1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPHRyIGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPXt0aGlzLnByb3BzLnJvd30gb25DbGljaz17dGhpcy5jbGlja0hhbmRsZXJ9PjwvdGQ+XG4gICAgICA8L3RyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVDZWxsOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFNQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7O0FBOUJBO0FBQ0E7QUFnQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/tableCell.jsx\n");

/***/ }),

/***/ "./client/src/components/tableColumn.jsx":
/*!***********************************************!*\
  !*** ./client/src/components/tableColumn.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tableCell_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tableCell.jsx */ \"./client/src/components/tableCell.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\nvar TableColumn =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(TableColumn, _React$Component);\n\n  function TableColumn(props) {\n    var _this;\n\n    _classCallCheck(this, TableColumn);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(TableColumn).call(this, props));\n    _this.clickHandler = _this.clickHandler.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(TableColumn, [{\n    key: \"clickHandler\",\n    value: function clickHandler(event) {\n      event.preventDefault();\n      this.props.onclick;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"tbody\", {\n        onClick: this.clickHandler\n      }, React.createElement(_tableCell_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        row: \"5\"\n      }), React.createElement(_tableCell_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        row: \"4\"\n      }), React.createElement(_tableCell_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        row: \"3\"\n      }), React.createElement(_tableCell_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        row: \"2\"\n      }), React.createElement(_tableCell_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        row: \"1\"\n      }), React.createElement(_tableCell_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        row: \"0\"\n      }));\n    }\n  }]);\n\n  return TableColumn;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableColumn);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvdGFibGVDb2x1bW4uanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL3RhYmxlQ29sdW1uLmpzeD9iZDBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYWJsZUNlbGwgZnJvbSBcIi4vdGFibGVDZWxsLmpzeFwiO1xuXG5jbGFzcyBUYWJsZUNvbHVtbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gdGhpcy5jbGlja0hhbmRsZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNsaWNrSGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5vbmNsaWNrO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dGJvZHkgb25DbGljaz17dGhpcy5jbGlja0hhbmRsZXJ9PlxuICAgICAgICA8VGFibGVDZWxsIHJvdz1cIjVcIi8+XG4gICAgICAgIDxUYWJsZUNlbGwgcm93PVwiNFwiLz5cbiAgICAgICAgPFRhYmxlQ2VsbCByb3c9XCIzXCIvPlxuICAgICAgICA8VGFibGVDZWxsIHJvdz1cIjJcIi8+XG4gICAgICAgIDxUYWJsZUNlbGwgcm93PVwiMVwiLz5cbiAgICAgICAgPFRhYmxlQ2VsbCByb3c9XCIwXCIvPlxuICAgICAgPC90Ym9keT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlQ29sdW1uOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBOzs7O0FBdEJBO0FBQ0E7QUF3QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/tableColumn.jsx\n");

/***/ }),

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_app_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app.jsx */ \"./client/src/components/app.jsx\");\n// import React from 'react';\n// import ReactDOM from 'react-dom';\n\nReactDOM.render(React.createElement(_components_app_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvaW5kZXguanN4P2QwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwLmpzeCc7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });