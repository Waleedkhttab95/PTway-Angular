(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-project-add-project-module"],{

/***/ "./src/app/add-project/add-project.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-project/add-project.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-project/add-project.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-project/add-project.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  add-project works!\n</p>\n"

/***/ }),

/***/ "./src/app/add-project/add-project.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-project/add-project.component.ts ***!
  \******************************************************/
/*! exports provided: AddProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectComponent", function() { return AddProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddProjectComponent = /** @class */ (function () {
    function AddProjectComponent() {
    }
    AddProjectComponent.prototype.ngOnInit = function () {
    };
    AddProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-project',
            template: __webpack_require__(/*! ./add-project.component.html */ "./src/app/add-project/add-project.component.html"),
            styles: [__webpack_require__(/*! ./add-project.component.css */ "./src/app/add-project/add-project.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddProjectComponent);
    return AddProjectComponent;
}());



/***/ }),

/***/ "./src/app/add-project/add-project.module.ts":
/*!***************************************************!*\
  !*** ./src/app/add-project/add-project.module.ts ***!
  \***************************************************/
/*! exports provided: AddProjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectModule", function() { return AddProjectModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_project_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-project.component */ "./src/app/add-project/add-project.component.ts");
/* harmony import */ var _add_project_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-project.routing */ "./src/app/add-project/add-project.routing.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AddProjectModule = /** @class */ (function () {
    function AddProjectModule() {
    }
    AddProjectModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_add_project_component__WEBPACK_IMPORTED_MODULE_2__["AddProjectComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_add_project_routing__WEBPACK_IMPORTED_MODULE_3__["AddProjectRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
            ]
        })
    ], AddProjectModule);
    return AddProjectModule;
}());



/***/ }),

/***/ "./src/app/add-project/add-project.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/add-project/add-project.routing.ts ***!
  \****************************************************/
/*! exports provided: AddProjectRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectRoutes", function() { return AddProjectRoutes; });
/* harmony import */ var _add_project_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-project.component */ "./src/app/add-project/add-project.component.ts");

var AddProjectRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: _add_project_component__WEBPACK_IMPORTED_MODULE_0__["AddProjectComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=add-project-add-project-module.js.map