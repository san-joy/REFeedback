(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-view/employee-management/employee-management.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/admin-view/employee-management/employee-management.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\n    width: 100%;\n}\n\nmat-card-title{\n    margin-right: 20px;\n}\n\n.add-button{\n    background: #e95f16;\n    color: #ffffff;\n}\n\n.edit{\n    color: #3bbcd2;\n}\n\n"

/***/ }),

/***/ "./src/app/admin-view/employee-management/employee-management.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/admin-view/employee-management/employee-management.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"main-container\">\n<mat-card>\n  <mat-toolbar>\n    <mat-card-title>List of employees</mat-card-title>\n    <a class=\"add-button\" mat-button routerLink=\"/addEmployee\">\n      Add <i class=\"material-icons\">add</i>\n    </a>\n  </mat-toolbar>\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"listData\">\n    <ng-container matColumnDef=\"fullname\">\n      <mat-header-cell *matHeaderCellDef>Full Name</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.fullname}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"email\">\n      <mat-header-cell *matHeaderCellDef>Email</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.email}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"position\">\n      <mat-header-cell *matHeaderCellDef>Position</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.position}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"action\">\n      <mat-header-cell *matHeaderCellDef></mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <a [routerLink]=\"['/edit', row.id]\" class=\"edit\"><mat-icon>edit</mat-icon></a>\n        <a (click)=\"onDelete(row.id)\" class=\"delete\"><mat-icon>delete_forever</mat-icon></a>\n      </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"loading\">\n      <mat-footer-cell *matFooterCellDef colspan=\"6\">\n        Loading employees information...\n      </mat-footer-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"noData\">\n      <mat-footer-cell *matFooterCellDef colspan=\"6\">\n        No data found.\n      </mat-footer-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide':listData != null}\"></mat-footer-row>\n    <mat-footer-row *matFooterRowDef=\"['noData']\" [ngClass]=\"{'hide':!(listData != null && listData.data.length == 0)}\"></mat-footer-row>\n  </table>\n  <mat-paginator [length]=\"totalEmployees\" [pageSize]= \"employeesPerPage\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"onChangedPage($event)\"> </mat-paginator>\n</div>\n</mat-card>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/admin-view/employee-management/employee-management.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/admin-view/employee-management/employee-management.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EmployeeManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeManagementComponent", function() { return EmployeeManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_employees_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/employees.service */ "./src/app/services/employees.service.ts");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notification.service */ "./src/app/services/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeManagementComponent = /** @class */ (function () {
    function EmployeeManagementComponent(employeesService, notificationService) {
        this.employeesService = employeesService;
        this.notificationService = notificationService;
        this.currentPage = 1;
        this.totalEmployees = 5;
        this.employeesPerPage = 5;
        this.pageSizeOptions = [5, 10, 20, 50, 100, 500];
        this.employees = [];
        this.displayedColumns = ['fullname', 'email', 'position', 'action'];
    }
    EmployeeManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeesService.getAllEmployees(this.employeesPerPage, this.currentPage);
        this.employeesSubscription = this.employeesService
            .getEmployeeUpdateListener()
            .subscribe(function (employeeData) {
            _this.totalEmployees = employeeData.employeeCount;
            _this.employees = employeeData.employees;
            _this.listData = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.employees);
        });
    };
    EmployeeManagementComponent.prototype.onChangedPage = function (pageData) {
        this.currentPage = pageData.pageIndex + 1;
        this.employeesPerPage = pageData.pageSize;
        this.employeesService.getAllEmployees(this.employeesPerPage, this.currentPage);
    };
    EmployeeManagementComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.employeesService.deleteEmployee(id).subscribe(function () {
            _this.employeesService.getAllEmployees(_this.employeesPerPage, _this.currentPage);
            _this.notificationService.warning('Employee deleted successfully');
        }, function (error) {
            console.log(error);
        });
    };
    EmployeeManagementComponent.prototype.ngOnDestroy = function () {
        this.employeesSubscription.unsubscribe();
    };
    EmployeeManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-management',
            template: __webpack_require__(/*! ./employee-management.component.html */ "./src/app/admin-view/employee-management/employee-management.component.html"),
            styles: [__webpack_require__(/*! ./employee-management.component.css */ "./src/app/admin-view/employee-management/employee-management.component.css")]
        }),
        __metadata("design:paramtypes", [_services_employees_service__WEBPACK_IMPORTED_MODULE_2__["EmployeesService"],
            src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])
    ], EmployeeManagementComponent);
    return EmployeeManagementComponent;
}());



/***/ }),

/***/ "./src/app/admin-view/employee-management/employee/employee.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/admin-view/employee-management/employee/employee.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-view/employee-management/employee/employee.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/admin-view/employee-management/employee/employee.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"main-container\">\n\n  <mat-card>\n    <mat-card-title>{{ mode }}</mat-card-title>\n    <mat-divider></mat-divider><br>\n  <form (submit)=\"onSubmit()\" [formGroup] = \"form\">\n\n    <mat-form-field>\n      <input matInput formControlName=\"fullname\" type=\"text\">\n      <mat-placeholder class=\"placeholder\">Fullname</mat-placeholder>\n      <mat-error *ngIf=\"form.get('fullname').invalid\">Fullname is required.</mat-error>\n    </mat-form-field><br>\n\n    <mat-form-field>\n      <input matInput formControlName=\"email\" type=\"email\">\n      <mat-placeholder class=\"placeholder\">E-Mail</mat-placeholder>\n      <mat-error *ngIf=\"form.get('email').invalid\">A valid email is required.</mat-error>\n    </mat-form-field><br>\n\n    <mat-form-field>\n      <input matInput formControlName=\"password\" type=\"password\">\n      <mat-placeholder class=\"placeholder\">Password</mat-placeholder>\n      <mat-error *ngIf=\"form.get('password').invalid\">Password is required.</mat-error>\n    </mat-form-field><br>\n    \n    <mat-form-field>\n        <input matInput formControlName=\"position\" type=\"text\" required>\n        <mat-placeholder class=\"placeholder\">Position</mat-placeholder>\n        <mat-error *ngIf=\"form.get('position').invalid\">position is required.</mat-error>\n    </mat-form-field><br><br>\n    \n    <button class=\"button\" [disabled]=\"form.invalid\" mat-raised-button type=\"submit\">Save</button><br>\n  </form>\n  </mat-card>\n\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/admin-view/employee-management/employee/employee.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/admin-view/employee-management/employee/employee.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_employees_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/employees.service */ "./src/app/services/employees.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(employeesService, activatedRoute, router) {
        this.employeesService = employeesService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.mode = 'Add employee';
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')] }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            position: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] })
        });
        this.activatedRoute.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('id')) {
                _this.mode = 'Edit employee';
                _this.employeeId = paramMap.get('id');
                _this.employeesService.getEmployee(_this.employeeId).subscribe(function (employeeData) {
                    _this.employee = {
                        id: employeeData._id,
                        fullname: employeeData.fullname,
                        email: employeeData.email,
                        password: employeeData.password,
                        position: employeeData.position
                    };
                    _this.form.setValue({
                        fullname: _this.employee.fullname,
                        email: _this.employee.email,
                        password: _this.employee.password,
                        position: _this.employee.position
                    });
                });
            }
            else {
                _this.mode = 'Add employee';
                _this.employeeId = null;
            }
        });
    };
    EmployeeComponent.prototype.onSubmit = function () {
        if (this.form.invalid) {
            return;
        }
        if (this.mode === 'Add employee') {
            this.employeesService.createEmployee(this.form.value.fullname, this.form.value.email, this.form.value.password, this.form.value.position);
        }
        else {
            this.employeesService.updateEmployee(this.employeeId, this.form.value.fullname, this.form.value.email, this.form.value.password, this.form.value.position);
        }
    };
    EmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/admin-view/employee-management/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/admin-view/employee-management/employee/employee.component.css")]
        }),
        __metadata("design:paramtypes", [_services_employees_service__WEBPACK_IMPORTED_MODULE_3__["EmployeesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/admin-view/feedback-management/feedback-management.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/admin-view/feedback-management/feedback-management.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\n    width: 100%;\n}\n\n.inviteButton{\n    background-color: #3bbcd2;\n    color: #ffffff;\n}"

/***/ }),

/***/ "./src/app/admin-view/feedback-management/feedback-management.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/admin-view/feedback-management/feedback-management.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"main-container\">\n<mat-card>\n    <mat-toolbar>\n        <mat-card-title>Feedback management</mat-card-title>\n    </mat-toolbar>\n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"listData\">\n      <ng-container matColumnDef=\"feedback-receiver\">\n        <mat-header-cell *matHeaderCellDef>Feedback Receiver</mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">{{element.fullname}}</mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"feedback-provider\">\n        <mat-header-cell *matHeaderCellDef>Feedback Provider</mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">No Provider</mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"feedback\">\n        <mat-header-cell *matHeaderCellDef>Feedback</mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">No Feedback </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"action\">\n        <mat-header-cell *matHeaderCellDef></mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <a class=\"inviteButton\" mat-button [routerLink]=\"['/feedback', row.id]\">Invite <mat-icon>assignment</mat-icon></a>\n        </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"loading\">\n        <mat-footer-cell *matFooterCellDef colspan=\"6\">\n          Loading feedback information...\n        </mat-footer-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"noData\">\n        <mat-footer-cell *matFooterCellDef colspan=\"6\">\n          No data found.\n        </mat-footer-cell>\n      </ng-container>\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide':listData != null}\"></mat-footer-row>\n      <mat-footer-row *matFooterRowDef=\"['noData']\" [ngClass]=\"{'hide':!(listData != null && listData.data.length == 0)}\"></mat-footer-row>\n    </table>\n    <mat-paginator [length]=\"totalEmployees\" [pageSize]= \"employeesPerPage\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"onChangedPage($event)\"> </mat-paginator>\n  </div>\n</mat-card>\n\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/admin-view/feedback-management/feedback-management.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/admin-view/feedback-management/feedback-management.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FeedbackManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackManagementComponent", function() { return FeedbackManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_employees_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/employees.service */ "./src/app/services/employees.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackManagementComponent = /** @class */ (function () {
    function FeedbackManagementComponent(employeesService) {
        this.employeesService = employeesService;
        this.currentPage = 1;
        this.totalEmployees = 5;
        this.employeesPerPage = 5;
        this.pageSizeOptions = [5, 10, 20, 50, 100, 500];
        this.employees = [];
        this.displayedColumns = ['feedback-receiver', 'action'];
    }
    FeedbackManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeesService.getAllEmployees(this.employeesPerPage, this.currentPage);
        this.employeesSubscription = this.employeesService
            .getEmployeeUpdateListener()
            .subscribe(function (employeeData) {
            _this.totalEmployees = employeeData.employeeCount;
            _this.employees = employeeData.employees;
            _this.listData = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.employees);
        });
    };
    FeedbackManagementComponent.prototype.onChangedPage = function (pageData) {
        this.currentPage = pageData.pageIndex + 1;
        this.employeesPerPage = pageData.pageSize;
        this.employeesService.getAllEmployees(this.employeesPerPage, this.currentPage);
    };
    FeedbackManagementComponent.prototype.ngOnDestroy = function () {
        this.employeesSubscription.unsubscribe();
    };
    FeedbackManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feedback-management',
            template: __webpack_require__(/*! ./feedback-management.component.html */ "./src/app/admin-view/feedback-management/feedback-management.component.html"),
            styles: [__webpack_require__(/*! ./feedback-management.component.css */ "./src/app/admin-view/feedback-management/feedback-management.component.css")]
        }),
        __metadata("design:paramtypes", [_services_employees_service__WEBPACK_IMPORTED_MODULE_2__["EmployeesService"]])
    ], FeedbackManagementComponent);
    return FeedbackManagementComponent;
}());



/***/ }),

/***/ "./src/app/admin-view/feedback-management/invite-feedback-form/invite-feedback-form.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/admin-view/feedback-management/invite-feedback-form/invite-feedback-form.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-view/feedback-management/invite-feedback-form/invite-feedback-form.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/admin-view/feedback-management/invite-feedback-form/invite-feedback-form.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n  <div class=\"main-container\">\n    <mat-card>\n        <mat-card-title>Invite employee(s) to give feedback to {{ employeeName }}</mat-card-title>\n        <mat-divider></mat-divider><br>\n        <form (submit)=\"onSubmit()\" [formGroup] = \"form\">\n          <div formArrayName=\"feedbackProvider\" *ngFor=\"let employee of employees\">\n            <div *ngIf=\"employee.fullname != employeeName\">\n              <mat-checkbox (change)=\"checkbox($event, empName)\" #empName [value] = \"employee\">{{ employee.fullname }}</mat-checkbox>\n            <br><br>\n            </div>\n          </div>\n          <button class=\"button\" [disabled]=\"form.invalid\" mat-raised-button type=\"submit\">Send Invite</button><br>\n        </form>\n    </mat-card>\n  </div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/admin-view/feedback-management/invite-feedback-form/invite-feedback-form.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/admin-view/feedback-management/invite-feedback-form/invite-feedback-form.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: InviteFeedbackFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteFeedbackFormComponent", function() { return InviteFeedbackFormComponent; });
/* harmony import */ var _services_feedback_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/feedback.service */ "./src/app/services/feedback.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_employees_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/employees.service */ "./src/app/services/employees.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/notification.service */ "./src/app/services/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InviteFeedbackFormComponent = /** @class */ (function () {
    function InviteFeedbackFormComponent(employeesService, activatedRoute, feedbackService, router, notificationService) {
        this.employeesService = employeesService;
        this.activatedRoute = activatedRoute;
        this.feedbackService = feedbackService;
        this.router = router;
        this.notificationService = notificationService;
        this.currentPage = 1;
        this.totalEmployees = 5;
        this.employeesPerPage = 5;
        this.pageSizeOptions = [5, 10, 20, 50, 100, 500];
        this.employees = [];
        this.selectedEmployeeNameArray = [];
        this.getFeedbackReceiverDate = [];
    }
    InviteFeedbackFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            feedbackProvider: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([
                new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
                new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null)
            ])
        });
        this.employeesService.getAllEmployees(this.employeesPerPage, this.currentPage);
        this.employeesSubscription = this.employeesService
            .getEmployeeUpdateListener()
            .subscribe(function (employeeData) {
            _this.totalEmployees = employeeData.employeeCount;
            _this.employees = employeeData.employees;
        });
        this.activatedRoute.paramMap.subscribe(function (paramMap) {
            _this.employeeId = paramMap.get('id');
            _this.employeesService.getEmployee(_this.employeeId).subscribe(function (employeeData) {
                if (paramMap.has('id')) {
                    _this.employeeName = employeeData.fullname;
                    _this.employeeId = employeeData._id;
                }
            });
        });
    };
    InviteFeedbackFormComponent.prototype.checkbox = function (e, empName) {
        if (e.checked && empName.value != "") {
            var selectedEmployee = empName.value.id;
            this.selectedEmployeeNameArray.push(selectedEmployee);
        }
        if (!e.checked) {
            var index = this.selectedEmployeeNameArray.findIndex(function (i) { return i.id === empName.value.id; });
            if (index > -1) {
                this.selectedEmployeeNameArray.splice(index, 1);
            }
        }
    };
    InviteFeedbackFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.selectedEmployeeNameArray.forEach(function (value, key) {
            var formData = { receiverId: _this.employeeId, providerId: value };
            _this.feedbackService.inviteToGiveFeedback(formData).subscribe(function (response) {
                _this.router.navigate(["/feedbackManagement"]);
                _this.notificationService.onSuccess('Invitation sent successfully!');
            }, function (error) {
                console.log(error);
            });
        });
    };
    InviteFeedbackFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invite-feedback-form',
            template: __webpack_require__(/*! ./invite-feedback-form.component.html */ "./src/app/admin-view/feedback-management/invite-feedback-form/invite-feedback-form.component.html"),
            styles: [__webpack_require__(/*! ./invite-feedback-form.component.css */ "./src/app/admin-view/feedback-management/invite-feedback-form/invite-feedback-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_employees_service__WEBPACK_IMPORTED_MODULE_2__["EmployeesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_feedback_service__WEBPACK_IMPORTED_MODULE_0__["FeedbackService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
    ], InviteFeedbackFormComponent);
    return InviteFeedbackFormComponent;
}());



/***/ }),

/***/ "./src/app/angular-material.module.ts":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"]
            ]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _employees_view_feedback_assignment_feedback_assignment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employees-view/feedback-assignment/feedback-assignment.component */ "./src/app/employees-view/feedback-assignment/feedback-assignment.component.ts");
/* harmony import */ var _employees_view_feedback_form_feedback_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employees-view/feedback-form/feedback-form.component */ "./src/app/employees-view/feedback-form/feedback-form.component.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _admin_view_feedback_management_feedback_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-view/feedback-management/feedback-management.component */ "./src/app/admin-view/feedback-management/feedback-management.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_view_employee_management_employee_employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-view/employee-management/employee/employee.component */ "./src/app/admin-view/employee-management/employee/employee.component.ts");
/* harmony import */ var _admin_view_employee_management_employee_management_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-view/employee-management/employee-management.component */ "./src/app/admin-view/employee-management/employee-management.component.ts");
/* harmony import */ var _admin_view_feedback_management_invite_feedback_form_invite_feedback_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-view/feedback-management/invite-feedback-form/invite-feedback-form.component */ "./src/app/admin-view/feedback-management/invite-feedback-form/invite-feedback-form.component.ts");
/* harmony import */ var _guard_role_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guard/role.guard */ "./src/app/guard/role.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: "", component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: "employeeManagement", component: _admin_view_employee_management_employee_management_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeManagementComponent"], canActivate: [_guard_role_guard__WEBPACK_IMPORTED_MODULE_10__["RoleGuard"]] },
    { path: "addEmployee", component: _admin_view_employee_management_employee_employee_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeComponent"], canActivate: [_guard_role_guard__WEBPACK_IMPORTED_MODULE_10__["RoleGuard"]] },
    { path: "edit/:id", component: _admin_view_employee_management_employee_employee_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeComponent"], canActivate: [_guard_role_guard__WEBPACK_IMPORTED_MODULE_10__["RoleGuard"]] },
    { path: "feedbackManagement", component: _admin_view_feedback_management_feedback_management_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackManagementComponent"], canActivate: [_guard_role_guard__WEBPACK_IMPORTED_MODULE_10__["RoleGuard"]] },
    { path: "feedback/:id", component: _admin_view_feedback_management_invite_feedback_form_invite_feedback_form_component__WEBPACK_IMPORTED_MODULE_9__["InviteFeedbackFormComponent"], canActivate: [_guard_role_guard__WEBPACK_IMPORTED_MODULE_10__["RoleGuard"]] },
    { path: "feedbackForm/:id", component: _employees_view_feedback_form_feedback_form_component__WEBPACK_IMPORTED_MODULE_1__["FeedbackFormComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: "feedbackAssignment", component: _employees_view_feedback_assignment_feedback_assignment_component__WEBPACK_IMPORTED_MODULE_0__["FeedbackAssignmentComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
            providers: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _guard_role_guard__WEBPACK_IMPORTED_MODULE_10__["RoleGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _employees_view_feedback_form_feedback_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employees-view/feedback-form/feedback-form.component */ "./src/app/employees-view/feedback-form/feedback-form.component.ts");
/* harmony import */ var _admin_view_feedback_management_feedback_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-view/feedback-management/feedback-management.component */ "./src/app/admin-view/feedback-management/feedback-management.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _admin_view_employee_management_employee_employee_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin-view/employee-management/employee/employee.component */ "./src/app/admin-view/employee-management/employee/employee.component.ts");
/* harmony import */ var _admin_view_employee_management_employee_management_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-view/employee-management/employee-management.component */ "./src/app/admin-view/employee-management/employee-management.component.ts");
/* harmony import */ var _admin_view_feedback_management_invite_feedback_form_invite_feedback_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin-view/feedback-management/invite-feedback-form/invite-feedback-form.component */ "./src/app/admin-view/feedback-management/invite-feedback-form/invite-feedback-form.component.ts");
/* harmony import */ var _employees_view_feedback_assignment_feedback_assignment_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./employees-view/feedback-assignment/feedback-assignment.component */ "./src/app/employees-view/feedback-assignment/feedback-assignment.component.ts");
/* harmony import */ var _login_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/auth-interceptor */ "./src/app/login/auth-interceptor.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./error-interceptor */ "./src/app/error-interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _admin_view_employee_management_employee_employee_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeComponent"],
                _admin_view_employee_management_employee_management_component__WEBPACK_IMPORTED_MODULE_14__["EmployeeManagementComponent"],
                _admin_view_feedback_management_feedback_management_component__WEBPACK_IMPORTED_MODULE_1__["FeedbackManagementComponent"],
                _admin_view_feedback_management_invite_feedback_form_invite_feedback_form_component__WEBPACK_IMPORTED_MODULE_15__["InviteFeedbackFormComponent"],
                _employees_view_feedback_assignment_feedback_assignment_component__WEBPACK_IMPORTED_MODULE_16__["FeedbackAssignmentComponent"],
                _employees_view_feedback_form_feedback_form_component__WEBPACK_IMPORTED_MODULE_0__["FeedbackFormComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_18__["ErrorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"], useClass: _login_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__["AuthInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"], useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_19__["ErrorInterceptor"], multi: true }
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            entryComponents: [
                _error_error_component__WEBPACK_IMPORTED_MODULE_18__["ErrorComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/employees-view/feedback-assignment/feedback-assignment.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/employees-view/feedback-assignment/feedback-assignment.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button{\n    background-color: #3bbcd2;\n    color: #ffffff;\n}\n\n.feedbackSection{\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/employees-view/feedback-assignment/feedback-assignment.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/employees-view/feedback-assignment/feedback-assignment.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"main-container\">\n<mat-card>\n  <mat-card-title>Welcome {{ feedbackProviderName }}</mat-card-title>\n  <mat-divider></mat-divider><br>\n  <div *ngIf=\"hideMessage\">\n  <div *ngFor=\"let feedbackReceiver of feedbackReceivers\" class=\"feedbackSection\">\n    You are invited to give feedback to {{ feedbackReceiver[0].fullname }}\n    <a class=\"button\" mat-button [routerLink]=\"['/feedbackForm', feedbackReceiver[1]]\">Feedback</a><br><br>\n    <mat-divider></mat-divider><br>\n  </div>\n  </div>\n  <div class=\"feedbackSection\" *ngIf=\"!hideMessage\">\n    No feedback to complete.\n  </div>\n</mat-card>\n\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/employees-view/feedback-assignment/feedback-assignment.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/employees-view/feedback-assignment/feedback-assignment.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FeedbackAssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackAssignmentComponent", function() { return FeedbackAssignmentComponent; });
/* harmony import */ var _services_employees_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/employees.service */ "./src/app/services/employees.service.ts");
/* harmony import */ var _services_feedback_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/feedback.service */ "./src/app/services/feedback.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedbackAssignmentComponent = /** @class */ (function () {
    function FeedbackAssignmentComponent(feedbackService, employeesService) {
        this.feedbackService = feedbackService;
        this.employeesService = employeesService;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
        this.feedbackReceivers = [];
        this.hideMessage = false;
    }
    FeedbackAssignmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = localStorage.getItem('token');
        this.decodedToken = this.jwtHelper.decodeToken(token);
        this.employeeId = this.decodedToken.employeeId;
        this.feedbackProviderName = this.decodedToken.employeeFullname;
        this.feedbackService.getFeedbackProvider(this.employeeId).subscribe(function (response) {
            _this.feedbackDbs = response;
            var _loop_1 = function (i) {
                var feedbackReceiverId = response[i].receiverId;
                _this.employeesService.getEmployee(feedbackReceiverId).subscribe(function (result) {
                    if (result) {
                        _this.feedbackReceivers.push([result, response[i]._id]);
                        console.log(_this.feedbackReceivers);
                        // this.feedbackReceivers.push(result);
                        _this.hideMessage = true;
                    }
                });
            };
            for (var i = 0; i < _this.feedbackDbs.length; i++) {
                _loop_1(i);
            }
        });
    };
    FeedbackAssignmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-feedback-assignment',
            template: __webpack_require__(/*! ./feedback-assignment.component.html */ "./src/app/employees-view/feedback-assignment/feedback-assignment.component.html"),
            styles: [__webpack_require__(/*! ./feedback-assignment.component.css */ "./src/app/employees-view/feedback-assignment/feedback-assignment.component.css")]
        }),
        __metadata("design:paramtypes", [_services_feedback_service__WEBPACK_IMPORTED_MODULE_1__["FeedbackService"], _services_employees_service__WEBPACK_IMPORTED_MODULE_0__["EmployeesService"]])
    ], FeedbackAssignmentComponent);
    return FeedbackAssignmentComponent;
}());



/***/ }),

/***/ "./src/app/employees-view/feedback-form/feedback-form.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/employees-view/feedback-form/feedback-form.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employees-view/feedback-form/feedback-form.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/employees-view/feedback-form/feedback-form.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"main-container\">\n\n<mat-card>\n  <mat-card-title>Feedback form</mat-card-title>\n  <mat-divider></mat-divider><br>\n\n<form (submit)=\"onSubmit()\" [formGroup] = \"feedbackForm\">\n  <mat-form-field>\n    <textarea matInput formControlName=\"feedback\" type=\"password\"></textarea>\n    <mat-placeholder class=\"placeholder\">Please type your feedback</mat-placeholder>\n    <mat-error *ngIf=\"feedbackForm.get('feedback').invalid\">Feedback is required.</mat-error>\n  </mat-form-field><br><br>\n  \n  <button class=\"button\" [disabled]=\"feedbackForm.invalid\" mat-raised-button type=\"submit\">Send feedback</button><br>\n</form>\n</mat-card>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/employees-view/feedback-form/feedback-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/employees-view/feedback-form/feedback-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: FeedbackFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackFormComponent", function() { return FeedbackFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_feedback_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/feedback.service */ "./src/app/services/feedback.service.ts");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/notification.service */ "./src/app/services/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeedbackFormComponent = /** @class */ (function () {
    function FeedbackFormComponent(activatedRoute, feedbackService, notificationService) {
        this.activatedRoute = activatedRoute;
        this.feedbackService = feedbackService;
        this.notificationService = notificationService;
    }
    FeedbackFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.feedbackForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            feedback: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] })
        });
        this.activatedRoute.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('id')) {
                _this.feedbackId = paramMap.get('id');
            }
        });
    };
    FeedbackFormComponent.prototype.onSubmit = function () {
        if (this.feedbackForm.invalid) {
            return;
        }
        this.feedbackService.employeeFeedbackReceiver(this.feedbackId, this.feedbackForm.value.feedback);
        this.notificationService.onSuccess('Feedback sent successfully!');
    };
    FeedbackFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feedback-form',
            template: __webpack_require__(/*! ./feedback-form.component.html */ "./src/app/employees-view/feedback-form/feedback-form.component.html"),
            styles: [__webpack_require__(/*! ./feedback-form.component.css */ "./src/app/employees-view/feedback-form/feedback-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_feedback_service__WEBPACK_IMPORTED_MODULE_3__["FeedbackService"],
            src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], FeedbackFormComponent);
    return FeedbackFormComponent;
}());



/***/ }),

/***/ "./src/app/error-interceptor.ts":
/*!**************************************!*\
  !*** ./src/app/error-interceptor.ts ***!
  \**************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _error_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error/error.service */ "./src/app/error/error.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(dialog, errorService) {
        this.dialog = dialog;
        this.errorService = errorService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
            var errorMessage = "An unknown error occurred!";
            if (error.error.message) {
                errorMessage = error.error.message;
            }
            _this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"], { data: { message: errorMessage } });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _error_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    position: fixed;\n    top: 150px;\n    left: 40%;\n    width: 20%;\n    background: white;\n    padding: 5px;\n    text-align: center;\n    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);\n  }\n\n  button{\n      width: 100%;\n      background-color: #3bbcd2 !important;\n      color: #ffffff;\n  }"

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>An Error Occurred!</h1>\n<div mat-dialog-content>\n  <p class=\"mat-body-1\">{{ data?.message }}</p>\n  <div mat-dialog-actions>\n    <button mat-button mat-dialog-close>Okay</button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(data) {
        this.data = data;
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/error/error.service.ts":
/*!****************************************!*\
  !*** ./src/app/error/error.service.ts ***!
  \****************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ErrorService = /** @class */ (function () {
    function ErrorService() {
        this.errorListener = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    ErrorService.prototype.getErrorListener = function () {
        return this.errorListener.asObservable();
    };
    ErrorService.prototype.throwError = function (message) {
        this.errorListener.next(message);
    };
    ErrorService.prototype.handleError = function () {
        this.errorListener.next(null);
    };
    ErrorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
    ], ErrorService);
    return ErrorService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".copyright{\n    float: right;\n}\n.copyright p{\n    font-weight: 100;\n    font-size: 14px;\n    padding-right: 10px;\n    color: #555555;\n}\nmat-divider{\n    float: left;\n    width: 100%;\n    clear: both;\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-divider></mat-divider>\n<div class=\"copyright\"><p>Copyright © 2019 REFeedback.</p></div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isAuth = this.authService.getIsAuth();
        if (!isAuth) {
            this.router.navigate(['/']);
        }
        return isAuth;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guard/role.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guard/role.guard.ts ***!
  \*************************************/
/*! exports provided: RoleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuard", function() { return RoleGuard; });
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoleGuard = /** @class */ (function () {
    function RoleGuard(authService, router) {
        this.authService = authService;
        this.router = router;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__["JwtHelperService"]();
    }
    RoleGuard.prototype.canActivate = function (route) {
        var isAuth = this.authService.getIsAuth();
        var token = localStorage.getItem('token');
        this.decodedToken = this.jwtHelper.decodeToken(token);
        if (!isAuth || this.decodedToken.employeePermission !== "admin") {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    };
    RoleGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RoleGuard);
    return RoleGuard;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\n    width: 96%;\n    padding: 1% 2%;\n    float: left;\n}\n\n.logo{\n    width: 50%;\n    float: left;\n}\n\n.logout-notify{\n    width: 50%;\n    float: right;\n}\n\n.logout-notify a{\n    float: right;\n    padding: 40px 10px 0; \n    color: #555555;\n}\n\n.tooltip-color{\n    background: #e95f16;\n}\n\n.navigation{\n    width: 100%;\n    background: #3bbcd2;\n    float: left;\n    text-align: center;\n}\n\nul{\n    margin: 0;\n    padding: 0;\n    text-decoration: none;\n}\n\nul li{\n    display: inline-block;\n}\n\nul li a{\n    text-decoration: none;\n    color: #fff;\n    display: block;\n    padding: 20px;\n    align-items: center;\n    border-bottom: 1px solid #3fc5dd;\n    transition: background-color 2s ease-out;\n}\n\nul li a:hover{\n    background-color: #309caf;\n}\n\nul li a .material-icons{\n    float: left;\n}\n\nul li a p{\n    display: inline;\n    position: relative;\n    left: 5px;\n    bottom: -5px;\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <div class=\"logo\">\n      <a routerLink=\"/dashboard\"><img src=\"../../assets/re-feedback-logo.png\"></a>\n    </div>\n    <div class=\"logout-notify\">\n        <a matTooltip=\"Logout\" matTooltipClass=\"tooltip-color\" [matTooltipPosition]=\"position.value\" (click)=\"onLogout()\"> \n            <mat-icon>power_settings_new</mat-icon>\n        </a>\n    </div>\n</div>\n<div class=\"navigation\">\n  <ul>\n    <li>\n      <a *ngIf=\"!adminPermission\" routerLink=\"/feedbackAssignment\" class=\"nav-link\">\n        <i class=\"material-icons\">chat</i><p>Feedback</p>\n      </a>\n    </li>\n    <li>\n      <a  *ngIf=\"adminPermission\" routerLink=\"/employeeManagement\" class=\"nav-link\">\n        <i class=\"material-icons\">group</i><p>Employees</p>\n      </a>\n    </li>\n    <li *ngIf=\"adminPermission\">\n      <a routerLink=\"/feedbackManagement\" class=\"nav-link\">\n        <i class=\"material-icons\">chat</i><p>Feedback</p>\n      </a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
        this.positionOptions = ['after', 'before', 'above', 'below', 'left', 'right'];
        this.position = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.positionOptions[3]);
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
        this.adminPermission = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        this.decodedToken = this.jwtHelper.decodeToken(token);
        if (this.decodedToken.employeePermission === "admin") {
            this.adminPermission = true;
        }
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")],
            // Need to remove view encapsulation so that the custom tooltip style defined in
            // `tooltip-custom-class-example.css` will not be scoped to this component's view.
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/auth-interceptor.ts":
/*!*******************************************!*\
  !*** ./src/app/login/auth-interceptor.ts ***!
  \*******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        var authToken = this.authService.getToken();
        var authRequest = request.clone({
            headers: request.headers.set("Authorization", "Bearer " + authToken)
        });
        return next.handle(authRequest);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginPage{\n\theight:auto;\n\tmin-height:100vh;\n\tbackground-image:url('refeedback-bg.jpg');\n\tbackground-size:cover;\n    background-position:center;\n    overflow: hidden;\n}\n\n.loginPage img{\n    display: block;\n    margin: 100px auto 30px auto;\n}\n\nmat-card {\n    width: 360px;\n    margin: 0 auto;\n}\n\n.copyrightText{\n    text-align: center;\n    color:#555555;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loginPage\">\n  <div><img src=\"../../assets/re-feedback-logo.png\" alt=\"logo\"></div>\n  <mat-card>\n    <mat-card-title>Welcome back!</mat-card-title>\n    <mat-divider></mat-divider><br>\n\n  <form (submit)=\"onLogin()\" [formGroup] = \"loginForm\">\n    <mat-form-field>\n      <input matInput formControlName=\"email\" type=\"email\" required>\n      <mat-placeholder class=\"placeholder\">E-Mail</mat-placeholder>\n      <mat-error *ngIf=\"loginForm.get('email').invalid\">A valid email is required.</mat-error>\n    </mat-form-field><br>\n\n    <mat-form-field>\n      <input matInput formControlName=\"password\" type=\"password\" required>\n      <mat-placeholder class=\"placeholder\">Password</mat-placeholder>\n      <mat-error *ngIf=\"loginForm.get('password').invalid\">Password is required.</mat-error>\n    </mat-form-field><br><br>\n    \n    <button class=\"button\" [disabled]=\"loginForm.invalid\" mat-raised-button type=\"submit\">Sign in to my account</button><br>\n  </form>\n  </mat-card>\n  <p class=\"copyrightText\">Copyright © 2019 REFeedback</p>\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')] }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] })
        });
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (authStatus) {
        });
    };
    LoginComponent.prototype.onLogin = function () {
        if (this.loginForm.invalid) {
            return;
        }
        this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.authStatusSub.unsubscribe();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]();
    }
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.getIsAuth = function () {
        return this.isAuthenticated;
    };
    AuthService.prototype.getEmployeeId = function () {
        return this.employeeId;
    };
    AuthService.prototype.getAuthStatusListener = function () {
        return this.authStatusListener.asObservable();
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var loginData = { email: email, password: password };
        this.http.post(BACKEND_URL + "/employees/login/", loginData)
            .subscribe(function (response) {
            var token = response.token;
            _this.token = token;
            if (token) {
                var expiresInDuration = response.expiresIn;
                _this.setAuthTimer(expiresInDuration);
                _this.isAuthenticated = true;
                _this.employeeId = response.employeeId;
                _this.authStatusListener.next(true);
                var now = new Date();
                var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                _this.saveAuthData(token, expirationDate, _this.employeeId);
                _this.decodedToken = _this.jwtHelper.decodeToken(token);
                if (_this.decodedToken.employeePermission == 'admin') {
                    _this.router.navigate(["/employeeManagement"]);
                }
                else {
                    _this.router.navigate(["/feedbackAssignment"]);
                }
            }
        }, function (error) {
            _this.authStatusListener.next(false);
        });
    };
    AuthService.prototype.setAuthTimer = function (duration) {
        var _this = this;
        this.tokenTimer = setTimeout(function () {
            _this.logout();
        }, duration * 1000);
    };
    AuthService.prototype.saveAuthData = function (token, expirationDate, employeeId) {
        localStorage.setItem("token", token);
        localStorage.setItem("expiration", expirationDate.toISOString());
        localStorage.setItem("employeeId", employeeId);
    };
    AuthService.prototype.autoAuthUser = function () {
        var authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        var now = new Date();
        var expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.employeeId = authInformation.employeeId;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    };
    AuthService.prototype.getAuthData = function () {
        var token = localStorage.getItem("token");
        var expirationDate = localStorage.getItem("expiration");
        var employeeId = localStorage.getItem("employeeId");
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            employeeId: employeeId
        };
    };
    AuthService.prototype.logout = function () {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.employeeId = null;
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(["/"]);
    };
    AuthService.prototype.clearAuthData = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
        localStorage.removeItem("employeeId");
    };
    AuthService.prototype.getUserPermission = function () {
        var localStorageToken = localStorage.getItem('token');
        this.decodedToken = this.jwtHelper.decodeToken(localStorageToken);
        this.employeePermission = this.decodedToken.employeePermission;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/employees.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/employees.service.ts ***!
  \***********************************************/
/*! exports provided: EmployeesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesService", function() { return EmployeesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/employees/";
var EmployeesService = /** @class */ (function () {
    function EmployeesService(http, router) {
        this.http = http;
        this.router = router;
        this.employees = [];
        this.employeesUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    EmployeesService.prototype.getAllEmployees = function (employeesPerPage, currentPage) {
        var _this = this;
        var queryParams = "?pagesize=" + employeesPerPage + "&page=" + currentPage;
        return this.http.get(BACKEND_URL + queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (employeesDate) {
            return {
                employees: employeesDate.employees.map(function (employee) {
                    return {
                        id: employee._id,
                        fullname: employee.fullname,
                        email: employee.email,
                        password: employee.password,
                        position: employee.position
                    };
                }),
                maxEmployees: employeesDate.maxEmployees
            };
        }))
            .subscribe(function (transformedEmployeeData) {
            _this.employees = transformedEmployeeData.employees;
            _this.employeesUpdated.next({
                employees: _this.employees.slice(),
                employeeCount: transformedEmployeeData.maxEmployees
            });
        }, function (error) {
            console.log('Error retrieving data.');
        });
    };
    EmployeesService.prototype.getEmployeeUpdateListener = function () {
        return this.employeesUpdated.asObservable();
    };
    EmployeesService.prototype.getEmployee = function (id) {
        return this.http.get(BACKEND_URL + "/employee/" + id);
    };
    EmployeesService.prototype.createEmployee = function (fullname, email, password, position) {
        var _this = this;
        var employeeData = { fullname: fullname, email: email, password: password, position: position };
        this.http.post(BACKEND_URL + "/createEmployee/", employeeData).subscribe(function (responseData) {
            _this.router.navigate(["/employeeManagement"]);
        }, function (error) {
            console.log(error);
        });
    };
    EmployeesService.prototype.updateEmployee = function (id, fullname, email, password, position) {
        var _this = this;
        var employeeData;
        employeeData = {
            id: id,
            fullname: fullname,
            email: email,
            password: password,
            position: position
        };
        this.http
            .put(BACKEND_URL + "/employee/" + id, employeeData)
            .subscribe(function (response) {
            _this.router.navigate(["/employeeManagement"]);
        });
    };
    EmployeesService.prototype.deleteEmployee = function (id) {
        return this.http.delete(BACKEND_URL + "/employee/" + id);
    };
    EmployeesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmployeesService);
    return EmployeesService;
}());



/***/ }),

/***/ "./src/app/services/feedback.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/feedback.service.ts ***!
  \**********************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/feedback/";
var FeedbackService = /** @class */ (function () {
    function FeedbackService(http, router) {
        this.http = http;
        this.router = router;
    }
    FeedbackService.prototype.inviteToGiveFeedback = function (formData) {
        return this.http.post(BACKEND_URL + "inviteToGiveFeedback", formData);
    };
    FeedbackService.prototype.getFeedbackReceiver = function (id) {
        return this.http.get(BACKEND_URL + "/feedbackReceiver/" + id);
    };
    FeedbackService.prototype.getFeedbackProvider = function (id) {
        return this.http.get(BACKEND_URL + "/feedbackProvider/" + id);
    };
    FeedbackService.prototype.employeeFeedbackReceiver = function (id, feedback) {
        var _this = this;
        var feedbackData = {
            id: id,
            feedback: feedback,
        };
        console.log(feedbackData);
        this.http
            .put(BACKEND_URL + "/feedbackReceive/" + id, feedbackData)
            .subscribe(function (response) {
            _this.router.navigate(["/feedbackAssignment"]);
        });
    };
    FeedbackService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FeedbackService);
    return FeedbackService;
}());



/***/ }),

/***/ "./src/app/services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationService = /** @class */ (function () {
    function NotificationService(notification) {
        this.notification = notification;
        this.animationConfigaration = {
            duration: 2500,
            horizontalPosition: 'right',
            verticalPosition: 'bottom'
        };
    }
    NotificationService.prototype.onSuccess = function (message) {
        this.animationConfigaration['panelClass'] = ['notification', 'success'];
        this.notification.open(message, '', this.animationConfigaration);
    };
    NotificationService.prototype.warning = function (message) {
        this.animationConfigaration['panelClass'] = ['notification', 'warning'];
        this.notification.open(message, '', this.animationConfigaration);
    };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: "http://localhost:3000/api"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/SnowDesignHouse/Desktop/REF/REFeedback/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map