'use strict';

var React = require('react');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
// var IconicJs = ExecutionEnvironment.canUseDOM && require('../vendor/iconic.min');
var IconicJs = function IconicJs() {
  throw new Error("Yuzu port of react-foundation-apps does not support iconic");
};
var cloneWithProps = require('react/lib/cloneWithProps');

var Iconic = React.createClass({
  displayName: 'Iconic',

  inject: function inject() {
    var ico = IconicJs();
    ico.inject(this.getDOMNode());
  },
  componentDidMount: function componentDidMount() {
    this.inject();
  },
  componentDidUpdate: function componentDidUpdate() {
    this.inject();
  },
  render: function render() {
    return React.Children.only(this.props.children);
  }
});

module.exports = Iconic;