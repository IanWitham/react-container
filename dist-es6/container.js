var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';
import Bar from 'react-icons/lib/fa/bars';
import '../style.css';

var Container = function (_Component) {
   _inherits(Container, _Component);

   function Container(props) {
      _classCallCheck(this, Container);

      var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props));

      _this.state = _extends({}, props, {
         receivedFirstUpdate: false,
         selected: "",
         showBar: true,
         userName: 'Example User'
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

         /*Handle the selection of the first item in the menu*/
         if (this.state.menu && !this.state.receivedFirstUpdate) {
            if (typeof this.state.menu[0] !== 'undefined') {
               this._onPress(this.state.menu[0]);
               this.setState({ receivedFirstUpdate: true });
            }
         }
         /*Then render the items*/
         return this.state.menu.map(function (x) {
            return React.createElement(
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
      }
   }, {
      key: 'render',
      value: function render() {
         return React.createElement(
            'div',
            { className: 'ms-container' },
            React.createElement(
               'div',
               { className: 'ms-header', style: { height: this.props.menuStyle ? this.props.menuStyle.height : '50px' } },
               React.createElement(
                  'div',
                  { className: 'ms-header-menu' },
                  React.createElement(Bar, { className: 'hamburger', onClick: this.changeBarState.bind(this) })
               ),
               this.props.header
            ),
            React.createElement(
               'div',
               { className: 'ms-body' },
               React.createElement(
                  'div',
                  { className: this.state.showBar ? "ms-menu" : "ms-menu-hidden" },
                  React.createElement(
                     'ul',
                     { className: 'ms-menu-list' },
                     this.renderMenuItems()
                  )
               ),
               React.createElement(
                  'div',
                  { className: 'ms-body-container' },
                  this.props.children
               )
            )
         );
      }
   }]);

   return Container;
}(Component);

export default Container;