"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDOM = require('react-dom');
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        return React.createElement("p", null, 
            "Hello from ", 
            this.props.compiler, 
            " & ", 
            this.props.framework, 
            "!");
    };
    return App;
}(React.Component));
ReactDOM.render(React.createElement(App, {compiler: 'Typescript', framework: 'React'}), document.getElementById('app'));
//# sourceMappingURL=index.js.map