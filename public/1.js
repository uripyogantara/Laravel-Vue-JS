webpackJsonp([1],{

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(64)
/* template */
var __vue_template__ = __webpack_require__(65)
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
Component.options.__file = "resources\\assets\\js\\components\\PengarangComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c83010ce", Component.options)
  } else {
    hotAPI.reload("data-v-c83010ce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
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
            authors: {},
            url: '/api/author',
            addData: { 'name': '', 'address': '', 'phone': '' },
            editData: { 'id': '', 'name': '', 'address': '', 'phone': '' }
        };
    },
    created: function created() {
        this.fectAuthors();
    },
    mounted: function mounted() {
        console.log('Pengarang Component');
    },

    methods: {
        fectAuthors: function fectAuthors() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('' + this.url).then(function (response) {
                __WEBPACK_IMPORTED_MODULE_1_vue___default.a.set(vm.$data, 'authors', response.data);
                // console.log(response.data)
            });
        },
        addAuthor: function addAuthor() {
            var vm = this;
            var dataInput = vm.addData;
            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/author', dataInput).then(function (response) {
                vm.addData = { 'name': '', 'address': '', 'phone': '' };
                console.log('success');
                $('#exampleModal').modal('hide');
                vm.fectAuthors();
            });
        },
        edit: function edit(index) {
            var vm = this;
            var author = vm.authors[index];
            vm.editData = {
                'id': author.id,
                'name': author.name,
                'address': author.address,
                'phone': author.phone
            };
            $('#editModal').modal('show');
            // console.log(vm.editAuthor)
        },
        editAuthor: function editAuthor(id) {
            var vm = this;
            var dataInput = {
                'name': vm.editData.name,
                'address': vm.editData.address,
                'phone': vm.editData.phone
            };

            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.put('/api/author/' + id, dataInput).then(function (response) {
                console.log('sukses');
                vm.editData = { 'id': '', 'name': '', 'address': '', 'phone': '' };
                $('#editModal').modal('hide');
                vm.fectAuthors();
            }).catch(function (error) {
                console.log(error);
            });
        },
        deleteAuthor: function deleteAuthor(id) {
            // alert(id)
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.delete('/api/author/' + id).then(function (response) {
                vm.fectAuthors();
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
});

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-8 col-md-offset-2" }, [
        _c("div", { staticClass: "panel panel-default" }, [
          _c("div", { staticClass: "panel-heading" }, [_vm._v("Pengarang")]),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                attrs: {
                  type: "button",
                  "data-toggle": "modal",
                  "data-target": "#exampleModal"
                }
              },
              [
                _vm._v(
                  "\n                      Add Author\n                    "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "table",
              { staticClass: "table" },
              [
                _vm._m(0),
                _vm._v(" "),
                _vm._l(_vm.authors, function(author, key) {
                  return _c("tr", { key: key }, [
                    _c("td", [_vm._v(_vm._s(key + 1))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(author.name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(author.address))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(author.phone))]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-success",
                          on: {
                            click: function($event) {
                              _vm.edit(key)
                            }
                          }
                        },
                        [_vm._v("EDIT")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger",
                          on: {
                            click: function($event) {
                              _vm.deleteAuthor(author.id)
                            }
                          }
                        },
                        [_vm._v("DELETE")]
                      )
                    ])
                  ])
                })
              ],
              2
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "exampleModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        _vm.addAuthor()
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
                            value: _vm.addData.name,
                            expression: "addData.name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "name",
                          placeholder: "Name"
                        },
                        domProps: { value: _vm.addData.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.addData, "name", $event.target.value)
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
                            value: _vm.addData.address,
                            expression: "addData.address"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "address",
                          placeholder: "Address"
                        },
                        domProps: { value: _vm.addData.address },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.addData,
                              "address",
                              $event.target.value
                            )
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
                            value: _vm.addData.phone,
                            expression: "addData.phone"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          name: "phone",
                          placeholder: "Phone"
                        },
                        domProps: { value: _vm.addData.phone },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.addData, "phone", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Save")]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _vm._m(2)
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "editModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(3),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        _vm.editAuthor(_vm.editData.id)
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
                            value: _vm.editData.name,
                            expression: "editData.name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "name",
                          placeholder: "Name"
                        },
                        domProps: { value: _vm.editData.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.editData, "name", $event.target.value)
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
                            value: _vm.editData.address,
                            expression: "editData.address"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "address",
                          placeholder: "Address"
                        },
                        domProps: { value: _vm.editData.address },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.editData,
                              "address",
                              $event.target.value
                            )
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
                            value: _vm.editData.phone,
                            expression: "editData.phone"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          name: "phone",
                          placeholder: "Phone"
                        },
                        domProps: { value: _vm.editData.phone },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.editData, "phone", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Edit")]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _vm._m(4)
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Add Author")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "button" } },
        [_vm._v("Save changes")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Edit Author")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "button" } },
        [_vm._v("Save changes")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c83010ce", module.exports)
  }
}

/***/ })

});