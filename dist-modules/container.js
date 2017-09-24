'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bars = require('react-icons/lib/fa/bars');

var _bars2 = _interopRequireDefault(_bars);

require('../style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_Component) {
   _inherits(Container, _Component);

   function Container(props) {
      _classCallCheck(this, Container);

      var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props));

      _this.state = _extends({}, props, {
         selected: "",
         showBar: true
      });
      return _this;
   }

   _createClass(Container, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(newProps) {
         if (this.props !== newProps) {
            this.setState(_extends({}, newProps));
         }
      }
   }, {
      key: '_onPress',
      value: function _onPress(x) {
         if (this.props.onMenuSelect) {
            this.setState({ selected: x.label });
            this.props.onMenuSelect(x);
         }
      }
   }, {
      key: 'renderMenuItems',
      value: function renderMenuItems() {
         var _this2 = this;

         return this.state.menu.map(function (x) {
            return _react2.default.createElement(
               'li',
               { className: _this2.state.selected === x.label ? "ms-menu-item ms-menu-item-selected" : "ms-menu-item", onClick: _this2._onPress.bind(_this2, x) },
               x.label
            );
         });
      }
   }, {
      key: 'changeBarState',
      value: function changeBarState() {
         this.setState({
            showBar: !this.state.showBar
         });
         console.log("Changed hamburger state");
      }
   }, {
      key: 'render',
      value: function render() {
         return _react2.default.createElement(
            'div',
            { className: 'ms-container' },
            _react2.default.createElement(
               'div',
               { className: 'ms-header', style: { height: this.props.menuStyle ? this.props.menuStyle.height : '50px' } },
               _react2.default.createElement(
                  'div',
                  { className: 'ms-header-menu' },
                  _react2.default.createElement(_bars2.default, { className: 'hamburger', onClick: this.changeBarState.bind(this) })
               ),
               this.props.header
            ),
            _react2.default.createElement(
               'div',
               { className: 'ms-body' },
               _react2.default.createElement(
                  'div',
                  { className: this.state.showBar ? "ms-menu" : "ms-menu-hidden" },
                  _react2.default.createElement(
                     'ul',
                     { className: 'ms-menu-list' },
                     this.renderMenuItems()
                  )
               ),
               _react2.default.createElement(
                  'div',
                  { className: 'ms-body-container' },
                  this.props.children
               )
            )
         );
      }
   }]);

   return Container;
}(_react.Component);

exports.default = Container;