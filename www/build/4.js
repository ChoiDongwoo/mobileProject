webpackJsonp([4],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkDetailsPageModule", function() { return ParkDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__park_details__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ParkDetailsPageModule = (function () {
    function ParkDetailsPageModule() {
    }
    ParkDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__park_details__["a" /* ParkDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__park_details__["a" /* ParkDetailsPage */]),
            ],
        })
    ], ParkDetailsPageModule);
    return ParkDetailsPageModule;
}());

//# sourceMappingURL=park-details.module.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParkDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_dialogs__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ParkDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ParkDetailsPage = (function () {
    function ParkDetailsPage(navCtrl, navParams, af, dialogs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.af = af;
        this.dialogs = dialogs;
        this.parkInfo = navParams.data.parkData;
        this.parkInfo = af.list('/korea');
        console.log(this.parkInfo);
    }
    ParkDetailsPage.prototype.addItem = function () {
        var _this = this;
        this.dialogs.prompt('Add a task', 'New space', ['Ok', 'Cancel'], '').then(function (theResult) {
            if ((theResult.buttonIndex == 1) && (theResult.input1 !== '')) {
                _this.parkInfo.push({ title: theResult.input1, loc: '' });
            }
        });
    };
    ParkDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ParkDetailsPage');
    };
    ParkDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-park-details',template:/*ion-inline-start:"D:\dev\mobileProject\mobileProject\src\pages\park-details\park-details.html"*/`<!--\n\n  Generated template for the ParkDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Parking Info</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-left (click) = "addItem()"> Add Item </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <h1 padding>{{parkInfo.title}}</h1>\n\n \n\n  <ion-list>\n\n    <ion-item *ngFor="let info of parkInfo | async">\n\n      <ion-label>{{info.title}}</ion-label>\n\n      <ion-toggle value="foo" checked="true"></ion-toggle>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n`/*ion-inline-end:"D:\dev\mobileProject\mobileProject\src\pages\park-details\park-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_dialogs__["a" /* Dialogs */]])
    ], ParkDetailsPage);
    return ParkDetailsPage;
}());

//# sourceMappingURL=park-details.js.map

/***/ })

});
//# sourceMappingURL=4.js.map