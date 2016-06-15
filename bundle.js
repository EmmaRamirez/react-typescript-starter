!function(t){function e(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return t[o].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([/*!**********************!*\
  !*** ./js/index.tsx ***!
  \**********************/
function(t,e,r){"use strict";var o=function(t,e){function r(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},n=r(1),p=r(2),c=function(t){function e(){t.apply(this,arguments)}return o(e,t),e.prototype.render=function(){return n.createElement("p",null,"Hello from ",this.props.compiler," & ",this.props.framework,"!")},e}(n.Component);p.render(n.createElement(c,{compiler:"Typescript",framework:"React"}),document.getElementById("app"))},/*!************************!*\
  !*** external "React" ***!
  \************************/
function(t,e){t.exports=React},/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
function(t,e){t.exports=ReactDOM}]);
//# sourceMappingURL=bundle.js.map