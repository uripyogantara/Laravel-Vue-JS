webpackJsonp([5],{

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 42,
	"./": 42,
	"./index": 42,
	"./index.js": 42
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 70;

/***/ })

});