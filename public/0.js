webpackJsonp([0],{

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(61)
/* template */
var __vue_template__ = __webpack_require__(62)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\publisher\\ListPublisher.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-731d8ef7", Component.options)
  } else {
    hotAPI.reload("data-v-731d8ef7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            // publishers:[],
        };
    },
    created: function created() {
        this.$store.dispatch('getPublishers');
    },
    computed: {
        publishers: function publishers() {
            return this.$store.state.publisherStore.publishers;
        }
    },
    methods: {
        deletePublisher: function deletePublisher(publisher) {
            this.$store.dispatch('deletePublisher', publisher);
            console.log(publisher);
        },
        updatePublisher: function updatePublisher(publisher) {
            this.$store.commit('doUpdate', publisher);
        }
    }
});

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("table", { staticClass: "table" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.publishers, function(publisher, key) {
          return _c("tr", { key: key }, [
            _c("td", [_vm._v(_vm._s(key + 1))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(publisher.name))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(publisher.address))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(publisher.phone))]),
            _vm._v(" "),
            _c("td", [
              _c(
                "button",
                {
                  staticClass: "btn btn-danger",
                  on: {
                    click: function($event) {
                      _vm.deletePublisher(publisher)
                    }
                  }
                },
                [_vm._v("DELETE")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-warning",
                  on: {
                    click: function($event) {
                      _vm.updatePublisher(publisher)
                    }
                  }
                },
                [_vm._v("UPDATE")]
              )
            ])
          ])
        })
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nama")]),
        _vm._v(" "),
        _c("th", [_vm._v("Alamat")]),
        _vm._v(" "),
        _c("th", [_vm._v("Telepon")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-731d8ef7", module.exports)
  }
}

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(81)
/* template */
var __vue_template__ = __webpack_require__(82)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\publisher\\PublisherComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e2bfc690", Component.options)
  } else {
    hotAPI.reload("data-v-e2bfc690", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormPublisher_vue__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormPublisher_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FormPublisher_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListPublisher_vue__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListPublisher_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ListPublisher_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        'form-publisher': __WEBPACK_IMPORTED_MODULE_0__FormPublisher_vue___default.a,
        'list-publisher': __WEBPACK_IMPORTED_MODULE_1__ListPublisher_vue___default.a
    }
});

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-4" }, [_c("form-publisher")], 1),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-8" }, [_c("list-publisher")], 1)
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e2bfc690", module.exports)
  }
}

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(86)
/* template */
var __vue_template__ = __webpack_require__(87)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\publisher\\FormPublisher.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-51a1a091", Component.options)
  } else {
    hotAPI.reload("data-v-51a1a091", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },
    computed: {
        isInsert: function isInsert() {
            return this.$store.state.publisherStore.isInsert;
        },

        newPublisher: {
            get: function get() {
                return this.$store.state.publisherStore.newPublisher;
            },
            set: function set(value) {
                this.$store.commit('updateNewPublisher', value);
            }
        }
    },
    methods: {
        addPublisher: function addPublisher() {
            var vm = this;
            if (vm.isInsert) {
                this.$store.dispatch('addPublisher');
            } else {
                this.$store.dispatch('updatePublisher');
            }
        },
        doInsert: function doInsert() {
            this.$store.commit('doInsert');
        }
    }
});

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h2", [_vm._v("Form Tambah Publisher")]),
    _vm._v(" "),
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            _vm.addPublisher($event)
          }
        }
      },
      [
        _c("div", { staticClass: "form-group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.newPublisher.name,
                expression: "newPublisher.name"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", name: "name", placeholder: "Name" },
            domProps: { value: _vm.newPublisher.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.newPublisher, "name", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.newPublisher.address,
                expression: "newPublisher.address"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", name: "address", placeholder: "Address" },
            domProps: { value: _vm.newPublisher.address },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.newPublisher, "address", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.newPublisher.phone,
                expression: "newPublisher.phone"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "number", name: "phone", placeholder: "Phone" },
            domProps: { value: _vm.newPublisher.phone },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.newPublisher, "phone", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _vm.isInsert
          ? _c("input", {
              staticClass: "btn btn-primary btn-block",
              attrs: { type: "submit", value: "Simpan" }
            })
          : _c("div", [
              _c("input", {
                staticClass: "btn btn-warning btn-block",
                attrs: { type: "submit", value: "Update" }
              }),
              _vm._v(" "),
              _c("input", {
                staticClass: "btn btn-danger btn-block",
                attrs: { type: "button", value: "Cancel" },
                on: {
                  click: function($event) {
                    _vm.doInsert()
                  }
                }
              })
            ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-51a1a091", module.exports)
  }
}

/***/ })

});