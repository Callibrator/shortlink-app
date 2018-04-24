var require = meteorInstall({"client":{"template.main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// client/template.main.js                                                                     //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //

Template.body.addContent((function() {
  var view = this;
  return HTML.Raw('<div id="app">\n\n  </div>');
}));
Meteor.startup(Template.body.renderToDocument);

/////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// client/main.js                                                                              //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var React;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  }
}, 1);
var ReactDOM;
module.watch(require("react-dom"), {
  "default": function (v) {
    ReactDOM = v;
  }
}, 2);
var Signup;
module.watch(require("./../imports/ui/Signup"), {
  "default": function (v) {
    Signup = v;
  }
}, 3);
var Link;
module.watch(require("./../imports/ui/Link"), {
  "default": function (v) {
    Link = v;
  }
}, 4);
Meteor.startup(function () {
  ReactDOM.render(React.createElement(Link, null), document.getElementById("app"));
});
/////////////////////////////////////////////////////////////////////////////////////////////////

}},"imports":{"ui":{"Link.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// imports/ui/Link.js                                                                          //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

module.export({
  "default": function () {
    return Link;
  }
});
var React;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  }
}, 0);

var Link =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Link, _React$Component);

  function Link() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Link.prototype;

  _proto.render = function () {
    function render() {
      return React.createElement("div", null, "Test Link");
    }

    return render;
  }();

  return Link;
}(React.Component);
/////////////////////////////////////////////////////////////////////////////////////////////////

},"Signup.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// imports/ui/Signup.js                                                                        //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

module.export({
  "default": function () {
    return Signup;
  }
});
var React;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  }
}, 0);

var Signup =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Signup, _React$Component);

  function Signup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Signup.prototype;

  _proto.render = function () {
    function render() {
      return React.createElement("div", null, "Test");
    }

    return render;
  }();

  return Signup;
}(React.Component);
/////////////////////////////////////////////////////////////////////////////////////////////////

}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css"
  ]
});
require("/client/template.main.js");
require("/client/main.js");