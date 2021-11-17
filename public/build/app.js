"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/app.css */ "./assets/css/app.css");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Home */ "./assets/components/Home.js");
// /*
//  * Welcome to your app's main JavaScript file!
//  *
//  * We recommend including the built version of this JavaScript file
//  * (and its CSS file) in your base layout (base.html.twig).
//  */
//
// // any CSS you import will output into a single css file (app.css in this case)
// import './styles/app.css';
//
// // start the Stimulus application
// import './bootstrap';





react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_3__["default"], null)), document.getElementById('root'));

/***/ }),

/***/ "./assets/components/Home.js":
/*!***********************************!*\
  !*** ./assets/components/Home.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _Users__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Users */ "./assets/components/Users.js");
/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Posts */ "./assets/components/Posts.js");
/* harmony import */ var _Possessions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Possessions */ "./assets/components/Possessions.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var Home = /*#__PURE__*/function (_Component) {
  _inherits(Home, _Component);

  var _super = _createSuper(Home);

  function Home() {
    _classCallCheck(this, Home);

    return _super.apply(this, arguments);
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("nav", {
        className: "navbar navbar-expand-lg navbar-dark bg-dark"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
        className: "navbar-brand",
        to: "/"
      }, " Symfony React Project "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarText"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("ul", {
        className: "navbar-nav mr-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("li", {
        className: "nav-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
        className: "nav-link",
        to: "/home"
      }, " Home ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("li", {
        className: "nav-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
        className: "nav-link",
        to: "/users"
      }, " Users ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("li", {
        className: "nav-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
        className: "nav-link",
        to: "/possessions"
      }, " Possessions "))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Redirect, {
        exact: true,
        from: "/",
        to: "/home"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
        path: "/users",
        component: _Users__WEBPACK_IMPORTED_MODULE_13__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
        path: "/home",
        component: _Posts__WEBPACK_IMPORTED_MODULE_14__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
        path: "/possessions",
        component: _Possessions__WEBPACK_IMPORTED_MODULE_15__["default"]
      })));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_12__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./assets/components/Possessions.js":
/*!******************************************!*\
  !*** ./assets/components/Possessions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Possessions = /*#__PURE__*/function (_Component) {
  _inherits(Possessions, _Component);

  var _super = _createSuper(Possessions);

  function Possessions() {
    var _this;

    _classCallCheck(this, Possessions);

    _this = _super.call(this);
    _this.state = {
      possessions: [],
      loading: true
    };
    return _this;
  }

  _createClass(Possessions, [{
    key: "componentDidMount",
    value: function componentDidMount() {} // getPossessionsByUsers(id){
    //     axios.get(`http://localhost:8000/api/user/possessions`+ id
    //     ).then(possessions => {
    //         this.setState({ possessions: possessions.data, loading: false})
    //         console.log(possessions);
    //     });
    //
    // }

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("section", {
        className: "row-section"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("h2", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("span", null, "List of users possessions"), " Created with", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("i", {
        className: "fa fa-heart"
      }), " by Zak")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "panel"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "panel-heading"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "col col-sm-5 col-xs-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("h4", {
        className: "title"
      }, "Data ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("span", null, "List"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "panel-body table-responsive"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("table", {
        className: "table table-hover"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("tr", {
        className: "active"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("th", null, "Id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("th", null, "Nom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("th", null, "Valeur"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("th", null, "Type"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("tbody", null, this.state.possessions.map(function (possession) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("td", null, possession.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("td", null, possession.nom), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("td", null, possession.valeur), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("td", null, possession.type));
      }))))))))));
    }
  }]);

  return Possessions;
}(react__WEBPACK_IMPORTED_MODULE_13__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Possessions);

/***/ }),

/***/ "./assets/components/Posts.js":
/*!************************************!*\
  !*** ./assets/components/Posts.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");
/* harmony import */ var _public_images_magic_photo_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../public/images/magic-photo.png */ "./public/images/magic-photo.png");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

 //import axios from 'axios';




var Posts = /*#__PURE__*/function (_Component) {
  _inherits(Posts, _Component);

  var _super = _createSuper(Posts);

  function Posts() {
    _classCallCheck(this, Posts);

    return _super.apply(this, arguments);
  }

  _createClass(Posts, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "jumbotron-img jumbotron jumbotron-fluid"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("h1", {
        className: "display-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("a", {
        href: "/users"
      }, "Tableau Information Utilisateurs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("p", {
        className: "lead"
      }, "And even answers for those questions you didn't think to ask!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "row mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("a", {
        href: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("button", {
        className: "btn btn-question"
      }, "Ask a Question")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "q-container p-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "col-2 text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("img", {
        src: tisha,
        width: "100",
        height: "100"
      })))))))));
    }
  }]);

  return Posts;
}(react__WEBPACK_IMPORTED_MODULE_12__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Posts);

/***/ }),

/***/ "./assets/components/Users.js":
/*!************************************!*\
  !*** ./assets/components/Users.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Users = /*#__PURE__*/function (_Component) {
  _inherits(Users, _Component);

  var _super = _createSuper(Users);

  function Users() {
    var _this;

    _classCallCheck(this, Users);

    _this = _super.call(this);
    _this.state = {
      users: [],
      loading: true
    };
    return _this;
  }

  _createClass(Users, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.showUsers();
    }
  }, {
    key: "showUsers",
    value: function showUsers() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_14___default().get("http://localhost:8000/api/show/users").then(function (users) {
        _this2.setState({
          users: users.data,
          loading: false
        });
      });
    }
  }, {
    key: "deleteUser",
    value: function deleteUser(id) {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_14___default()["delete"]("http://localhost:8000/api/delete/user/" + id).then(function (response) {
        _this3.setState({
          users: response.data
        });
      });
    }
  }, {
    key: "getPossessionsByUsers",
    value: function getPossessionsByUsers(id) {
      axios__WEBPACK_IMPORTED_MODULE_14___default().get("http://localhost:8000/api/user/possessions/" + id).then(function (response) {
        console.log(response.data);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("section", {
        className: "row-section"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("h2", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("span", null, "List of users "), "Created with", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("i", {
        className: "fa fa-heart"
      }), " by Zak")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "panel"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "panel-heading"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "col col-sm-5 col-xs-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("h4", {
        className: "title"
      }, "Data ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("span", null, "List"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "panel-body table-responsive"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("table", {
        className: "table table-hover"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("tr", {
        className: "active"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("th", null, "Id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("th", null, "Nom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("th", null, "Pr\xE9nom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("th", null, "Adresse"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("th", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("th", null, "Tel"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("tbody", null, this.state.users.map(function (user) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("tr", {
          key: user.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("td", null, user.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("a", {
          onClick: function onClick() {
            return _this4.getPossessionsByUsers(user.id);
          }
        }, user.nom)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("td", null, user.prenom), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("span", {
          className: "label label-success"
        }, user.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("td", null, user.adresse), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("td", null, user.tel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("button", {
          className: "btn btn-default",
          onClick: function onClick() {
            return _this4.deleteUser(user.id);
          }
        }, "X")));
      }))))))))));
    }
  }]);

  return Users;
}(react__WEBPACK_IMPORTED_MODULE_13__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);

/***/ }),

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./public/images/magic-photo.png":
/*!***************************************!*\
  !*** ./public/images/magic-photo.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/magic-photo.bd682a12.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_map_js-node_modules-981528"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0VBTkosQ0FESixDQURKLGVBV0ksaUVBQ0UsS0FBS2hCLEtBQUwsQ0FBV1csS0FBWCxDQUFpQlIsR0FBakIsQ0FBcUIsVUFBQWlCLElBQUk7QUFBQSw0QkFDdkI7QUFBSSxhQUFHLEVBQUVBLElBQUksQ0FBQ2Y7QUFBZCx3QkFDSSw4REFBS2UsSUFBSSxDQUFDZixFQUFWLENBREosZUFFSSwyRUFBSTtBQUFHLGlCQUFPLEVBQUU7QUFBQSxtQkFBTSxNQUFJLENBQUNnQixxQkFBTCxDQUEyQkQsSUFBSSxDQUFDZixFQUFoQyxDQUFOO0FBQUE7QUFBWixXQUF3RGUsSUFBSSxDQUFDZCxHQUE3RCxDQUFKLENBRkosZUFHSSw4REFBS2MsSUFBSSxDQUFDRSxNQUFWLENBSEosZUFJSSwyRUFBSTtBQUFNLG1CQUFTLEVBQUM7QUFBaEIsV0FBdUNGLElBQUksQ0FBQ0csS0FBNUMsQ0FBSixDQUpKLGVBS0ksOERBQUtILElBQUksQ0FBQ0ksT0FBVixDQUxKLGVBTUksOERBQUtKLElBQUksQ0FBQ0ssR0FBVixDQU5KLGVBT0ksMkVBQUk7QUFBUSxtQkFBUyxFQUFDLGlCQUFsQjtBQUFvQyxpQkFBTyxFQUFFO0FBQUEsbUJBQU0sTUFBSSxDQUFDQyxVQUFMLENBQWdCTixJQUFJLENBQUNmLEVBQXJCLENBQU47QUFBQTtBQUE3QyxlQUFKLENBUEosQ0FEdUI7QUFBQSxPQUF6QixDQURGLENBWEosQ0FESixDQVJKLENBREosQ0FESixDQUxSLENBREosQ0FESixDQURKO0FBb0RIOzs7O0VBaEdlZjs7QUFrR3BCLGlFQUFlTSxLQUFmOzs7Ozs7Ozs7OztBQ3hHQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Qb3NzZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Qb3N0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Vc2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gLypcbi8vICAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbi8vICAqXG4vLyAgKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4vLyAgKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuLy8gICovXG4vL1xuLy8gLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuLy8gaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcbi8vXG4vLyAvLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbi8vIGltcG9ydCAnLi9ib290c3RyYXAnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCAnLi9jc3MvYXBwLmNzcyc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5cblJlYWN0RE9NLnJlbmRlcig8Um91dGVyPjxIb21lIC8+PC9Sb3V0ZXI+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtSb3V0ZSwgU3dpdGNoLFJlZGlyZWN0LCBMaW5rLCB3aXRoUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IFVzZXJzIGZyb20gJy4vVXNlcnMnO1xyXG5pbXBvcnQgUG9zdHMgZnJvbSAnLi9Qb3N0cyc7XHJcbmltcG9ydCBQb3NzZXNzaW9ucyBmcm9tIFwiLi9Qb3NzZXNzaW9uc1wiO1xyXG5cclxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLWRhcmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e1wibmF2YmFyLWJyYW5kXCJ9IHRvPXtcIi9cIn0+IFN5bWZvbnkgUmVhY3QgUHJvamVjdCA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtcIm5hdi1saW5rXCJ9IHRvPXtcIi9ob21lXCJ9PiBIb21lIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtcIm5hdi1saW5rXCJ9IHRvPXtcIi91c2Vyc1wifT4gVXNlcnMgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e1wibmF2LWxpbmtcIn0gdG89e1wiL3Bvc3Nlc3Npb25zXCJ9PiBQb3NzZXNzaW9ucyA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWRpcmVjdCBleGFjdCBmcm9tPVwiL1wiIHRvPVwiL2hvbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3VzZXJzXCIgY29tcG9uZW50PXtVc2Vyc30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9ob21lXCIgY29tcG9uZW50PXtQb3N0c30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wb3NzZXNzaW9uc1wiIGNvbXBvbmVudD17UG9zc2Vzc2lvbnN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy9hcHAuY3NzJztcclxuXHJcblxyXG5jbGFzcyBQb3NzZXNzaW9ucyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7cG9zc2Vzc2lvbnM6IFtdLCBsb2FkaW5nOiB0cnVlfTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBnZXRQb3NzZXNzaW9uc0J5VXNlcnMoaWQpe1xyXG4gICAgLy8gICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS91c2VyL3Bvc3Nlc3Npb25zYCsgaWRcclxuICAgIC8vICAgICApLnRoZW4ocG9zc2Vzc2lvbnMgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHsgcG9zc2Vzc2lvbnM6IHBvc3Nlc3Npb25zLmRhdGEsIGxvYWRpbmc6IGZhbHNlfSlcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocG9zc2Vzc2lvbnMpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy9cclxuICAgIC8vIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicm93LXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+PHNwYW4+TGlzdCBvZiB1c2VycyBwb3NzZXNzaW9uczwvc3Bhbj4gQ3JlYXRlZCB3aXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWhlYXJ0XCI+PC9pPiBieSBaYWs8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGNvbC1zbS01IGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj5EYXRhIDxzcGFuPkxpc3Q8L3NwYW4+PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ib2R5IHRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ob208L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VmFsZXVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlR5cGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLnBvc3Nlc3Npb25zLm1hcChwb3NzZXNzaW9uID0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Bvc3Nlc3Npb24uaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cG9zc2Vzc2lvbi5ub219PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cG9zc2Vzc2lvbi52YWxldXJ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cG9zc2Vzc2lvbi50eXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3NzZXNzaW9ucztcclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbi8vaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0ICcuLi9jc3MvYXBwLmNzcyc7XHJcbmltcG9ydCBtYWdpYyBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2VzL21hZ2ljLXBob3RvLnBuZyc7XHJcblxyXG5cclxuY2xhc3MgUG9zdHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb24taW1nIGp1bWJvdHJvbiBqdW1ib3Ryb24tZmx1aWRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNFwiPjxhIGhyZWY9XCIvdXNlcnNcIj5UYWJsZWF1IEluZm9ybWF0aW9uIFV0aWxpc2F0ZXVyczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPkFuZCBldmVuIGFuc3dlcnMgZm9yIHRob3NlIHF1ZXN0aW9ucyB5b3UgZGlkbid0IHRoaW5rIHRvIGFzayE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1xdWVzdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBc2sgYSBRdWVzdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicS1jb250YWluZXIgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aXNoYX0gd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0czsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0ICcuLi9jc3MvYXBwLmNzcyc7XHJcblxyXG5cclxuXHJcbmNsYXNzIFVzZXJzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7dXNlcnM6IFtdLCBsb2FkaW5nOiB0cnVlfTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93VXNlcnMoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2hvd1VzZXJzKCkge1xyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9zaG93L3VzZXJzYCkudGhlbih1c2VycyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VyczogdXNlcnMuZGF0YSwgbG9hZGluZzogZmFsc2V9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgICBkZWxldGVVc2VyKGlkKSB7XHJcbiAgICAgICAgICAgIGF4aW9zLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9kZWxldGUvdXNlci9gKyBpZFxyXG4gICAgICAgICAgICApLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcnM6IHJlc3BvbnNlLmRhdGFcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRQb3NzZXNzaW9uc0J5VXNlcnMoaWQpe1xyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS91c2VyL3Bvc3Nlc3Npb25zL2ArIGlkXHJcbiAgICAgICAgKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyb3ctc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj48c3Bhbj5MaXN0IG9mIHVzZXJzIDwvc3Bhbj5DcmVhdGVkIHdpdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1oZWFydFwiPjwvaT4gYnkgWmFrPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBjb2wtc20tNSBjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPkRhdGEgPHNwYW4+TGlzdDwvc3Bhbj48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ib2R5IHRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5vbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlByw6lub208L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BZHJlc3NlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RW1haWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UZWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUudXNlcnMubWFwKHVzZXIgPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXt1c2VyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIuaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGEgb25DbGljaz17KCkgPT4gdGhpcy5nZXRQb3NzZXNzaW9uc0J5VXNlcnModXNlci5pZCl9Pnt1c2VyLm5vbX08L2E+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIucHJlbm9tfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxzcGFuIGNsYXNzTmFtZT1cImxhYmVsIGxhYmVsLXN1Y2Nlc3NcIj57dXNlci5lbWFpbH08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIuYWRyZXNzZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlci50ZWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmRlbGV0ZVVzZXIodXNlci5pZCl9ID5YPC9idXR0b24+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJIb21lIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkNvbXBvbmVudCIsIlJvdXRlIiwiU3dpdGNoIiwiUmVkaXJlY3QiLCJMaW5rIiwid2l0aFJvdXRlciIsIlVzZXJzIiwiUG9zdHMiLCJQb3NzZXNzaW9ucyIsImF4aW9zIiwic3RhdGUiLCJwb3NzZXNzaW9ucyIsImxvYWRpbmciLCJtYXAiLCJwb3NzZXNzaW9uIiwiaWQiLCJub20iLCJ2YWxldXIiLCJ0eXBlIiwibWFnaWMiLCJ0aXNoYSIsInVzZXJzIiwic2hvd1VzZXJzIiwiZ2V0IiwidGhlbiIsInNldFN0YXRlIiwiZGF0YSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJnZXRQb3NzZXNzaW9uc0J5VXNlcnMiLCJwcmVub20iLCJlbWFpbCIsImFkcmVzc2UiLCJ0ZWwiLCJkZWxldGVVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==