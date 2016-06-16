"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Immutable = require('immutable');
exports.map = Immutable.Map({ a: 1, b: 2, c: 3 });
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        return React.createElement("p", null, 
            exports.map.get('b'), 
            " Hello from ", 
            this.props.compiler, 
            " & ", 
            this.props.framework, 
            "!");
    };
    return App;
}(React.Component));
exports.App = App;
//# sourceMappingURL=hello.js.map