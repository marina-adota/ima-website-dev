"use strict";
(self["webpackChunkima_website_angular"] = self["webpackChunkima_website_angular"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 424);
/* harmony import */ var _pages_how_to_adopt_how_to_adopt_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/how-to-adopt/how-to-adopt.component */ 4622);
/* harmony import */ var _pages_how_to_donate_how_to_donate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/how-to-donate/how-to-donate.component */ 236);
/* harmony import */ var _pages_how_to_help_how_to_help_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/how-to-help/how-to-help.component */ 3741);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);







const routes = [{
  path: '',
  component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'quero-ajudar',
  component: _pages_how_to_help_how_to_help_component__WEBPACK_IMPORTED_MODULE_3__.HowToHelpComponent
}, {
  path: 'quero-adotar',
  component: _pages_how_to_adopt_how_to_adopt_component__WEBPACK_IMPORTED_MODULE_1__.HowToAdoptComponent
}, {
  path: 'quero-doar',
  component: _pages_how_to_donate_how_to_donate_component__WEBPACK_IMPORTED_MODULE_2__.HowToDonateComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class AppComponent {
  constructor() {
    this.title = 'ima-website-angular';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ 424);
/* harmony import */ var _pages_how_to_adopt_how_to_adopt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/how-to-adopt/how-to-adopt.component */ 4622);
/* harmony import */ var _pages_how_to_donate_how_to_donate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/how-to-donate/how-to-donate.component */ 236);
/* harmony import */ var _pages_how_to_help_how_to_help_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/how-to-help/how-to-help.component */ 3741);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/header/header.component */ 1074);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/footer/footer.component */ 1777);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);













class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent, _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _pages_how_to_adopt_how_to_adopt_component__WEBPACK_IMPORTED_MODULE_3__.HowToAdoptComponent, _pages_how_to_help_how_to_help_component__WEBPACK_IMPORTED_MODULE_5__.HowToHelpComponent, _pages_how_to_donate_how_to_donate_component__WEBPACK_IMPORTED_MODULE_4__.HowToDonateComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule]
  });
})();

/***/ }),

/***/ 424:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/header/header.component */ 1074);




class HomeComponent {
  constructor(route) {
    this.route = route;
    this.title = "";
    this.isTransitionTitle = false;
    this.titles = ["Adoção de cachorros em Salvador", "Cada animal tem uma história,<br>ajude a escrever um final feliz", "Adote, salve uma vida e ganhe um amigo fiel", "Adote amor, salve vidas", "Com amor e cuidado, transformamos a vida de animais abandonados", "Nossa missão é proteger e cuidar dos animais, um de cada vez"];
    this.currentIndex = 0;
  }
  ngOnInit() {
    this.title = this.titles[this.currentIndex];
    setInterval(() => {
      this.changeTitile();
    }, 6000);
    this.route.fragment.subscribe(fragment => {
      this.scrollIntoView(fragment);
    });
  }
  changeTitile() {
    this.isTransitionTitle = true;
    setTimeout(() => {
      if (this.currentIndex == this.titles.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
      this.title = this.titles[this.currentIndex];
      this.isTransitionTitle = false;
    }, 1000);
  }
  scrollIntoView(fragment) {
    if (fragment) {
      setTimeout(() => {
        const targetElement = document.getElementById(fragment);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 100,
  vars: 4,
  consts: [[1, "continous-flow"], ["id", "page-main", 1, "section"], ["id", "carouselExampleCaptions", "data-mdb-ride", "carousel", 1, "d-none", "d-sm-block", "slide", 2, "height", "83vh"], [1, "carousel-inner", "fade-bottom"], [1, "row", "position-relative", 2, "height", "83vh"], [1, "col-7", "transition-title", "text-center", "text-black", "font-weight-bold", 3, "innerHTML"], [1, "bg-img", "card-animal", "rounded-7", "mt-auto", "mb-5", "mx-auto", "position-relative", 2, "left", "-5rem", "background-image", "url(assets/dog_8.jpeg)"], [1, "bg-img", "card-animal", "rounded-7", "mt-auto", "mb-0", "mx-auto", "position-relative", 2, "left", "-6rem", "bottom", "-3rem", "background-image", "url(assets/dog_1.jpeg)"], [1, "bg-img", "card-animal", "rounded-7", "mt-auto", "mb-0", "mx-auto", "position-relative", 2, "left", "-7rem", "bottom", "-7rem", "background-image", "url(assets/dog_7.jpeg)"], ["id", "btn-center", 1, "position-absolute", 2, "left", "0", "right", "0", "bottom", "2rem", "margin-left", "auto", "margin-right", "auto", "text-align", "center"], ["href", "#about-us", "role", "button", 1, "btn", "text-black", "btn-lg", "btn-floating", "bg-secondary", "bounce-animation"], [1, "fas", "fa-angle-down", "fa-xl"], [1, "bg-img", "card-animal", "rounded-7", "mt-auto", "mb-0", "mx-auto", "position-relative", 2, "right", "-7rem", "bottom", "-7rem", "background-image", "url(assets/dog_6.jpeg)"], [1, "bg-img", "card-animal", "rounded-7", "mt-auto", "mb-0", "mx-auto", "position-relative", 2, "right", "-6rem", "bottom", "-3rem", "background-image", "url(assets/dog_2.jpeg)"], [1, "bg-img", "card-animal", "rounded-7", "mt-auto", "mb-5", "mx-auto", "position-relative", 2, "right", "-5rem", "background-image", "url(assets/dog_5.jpeg)"], [1, "d-block", "d-sm-none", 2, "height", "85vh"], ["id", "carouselBasicExample", "data-mdb-ride", "carousel", 1, "carousel", "carousel-dark", "slide", "carousel-fade"], [1, "carousel-indicators"], ["type", "button", "data-mdb-target", "#carouselBasicExample", "data-mdb-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-mdb-target", "#carouselBasicExample", "data-mdb-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-mdb-target", "#carouselBasicExample", "data-mdb-slide-to", "2", "aria-label", "Slide 3"], ["type", "button", "data-mdb-target", "#carouselBasicExample", "data-mdb-slide-to", "3", "aria-label", "Slide 4"], ["type", "button", "data-mdb-target", "#carouselBasicExample", "data-mdb-slide-to", "4", "aria-label", "Slide 5"], ["type", "button", "data-mdb-target", "#carouselBasicExample", "data-mdb-slide-to", "5", "aria-label", "Slide 6"], [1, "carousel-inner", 2, "height", "100%"], [1, "carousel-item", "active"], [1, "bg-img", "d-block", "w-100"], ["src", "assets/dog_1.jpeg", "alt", "pet", 1, "d-block", "w-100", 2, "height", "85vh"], [1, "carousel-caption"], [2, "font-size", "medium"], [1, "carousel-item"], ["src", "assets/dog_2.jpeg", "alt", "pet", 1, "d-block", "w-100", 2, "height", "85vh"], ["src", "assets/dog_6.jpeg", "alt", "pet", 1, "d-block", "w-100", 2, "height", "85vh"], ["src", "assets/dog_5.jpeg", "alt", "pet", 1, "d-block", "w-100", 2, "height", "85vh"], ["src", "assets/dog_7.jpeg", "alt", "pet", 1, "d-block", "w-100", 2, "height", "85vh"], ["src", "assets/dog_8.jpeg", "alt", "pet", 1, "d-block", "w-100", 2, "height", "85vh"], ["type", "button", "data-mdb-target", "#carouselBasicExample", "data-mdb-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-mdb-target", "#carouselBasicExample", "data-mdb-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "bg-secondary", "d-flex", 2, "height", "6vh", "background-color", "rgba(0, 0, 0, 0.2)"], ["href", "#about-us", 1, "text-dark", "mx-auto", "my-auto"], [1, "ms-1", "fas", "fa-angle-down"], ["id", "about-us", 1, "big-section", "d-flex", "flex-column-reverse", "flex-sm-row", "col-12"], [1, "small-section", "bg-secondary", "col-12", "col-sm-6", "d-flex"], [1, "bg-img", "mx-auto", "my-auto", "col-12", "col-sm-10", 2, "background-image", "url('assets/dogs_about-us.png')"], [1, "small-section", "section-text", "d-flex", "flex-column", "mx-auto", "my-auto", "col-12", "col-sm-6"], [1, "mt-5", "mb-5", "text-center", "text-black", "mt-auto"], [1, "col-10", "mx-auto", "text-start", "mb-auto"], ["id", "goals", 1, "big-section", "d-flex", "flex-column", "flex-sm-row", "col-12"], [1, "small-section", "d-flex", "flex-column", "mx-auto", "my-auto", "col-12", "col-sm-6"], [1, "small-section", "bg-primary", "col-12", "col-sm-6", "d-flex"], [1, "bg-img", "mx-auto", "my-auto", "col-12", "col-sm-11", 2, "background-image", "url('assets/dogs_goals.png')"], ["id", "contact-us", 1, "section", 2, "height", "100vh"], [1, "d-flex", "flex-column", "bg-section-4", "bg-img", 2, "height", "95vh"], ["href", "#page-main", "role", "button", 1, "mx-auto", "mt-3", "btn", "text-black", "bg-secondary", "btn-lg", "btn-floating"], [1, "fas", "fa-angle-up"], [1, "position-relative", "text-center", "mx-auto", "mt-auto", "margin-page", "col-11", "col-sm-7", "side-by-side", 2, "height", "20vh"], ["id", "lastMessage", 1, "transition-title", "text-center", "text-white", "font-final", "col-12", "mx-auto", 3, "innerHTML"], [1, "position-relative", "col-12", "mb-auto", "mx-auto", "d-flex"], ["type", "button", "href", "https://www.instagram.com/marina.adota/", 1, "btn", "bg-white", "text-black", "rounded-9", "col-11", "col-sm-2", "mx-auto", "my-auto", 2, "height", "3rem", "font-size", "larger"], [1, "ms-2", "fa-md", "fas", "fa-arrow-right-long"], [1, "text-center", "bg-white", "p-3", "d-flex", 2, "height", "5vh"], ["href", "https://mdbootstrap.com/", 1, "text-black", "mx-auto", "my-auto", 2, "font-size", "small", "height", "4%", "display", "flex", "align-items", "center", "justify-content", "center"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 0)(1, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "h1", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9)(11, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 12)(14, "div", 13)(15, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 15)(17, "div", 16)(18, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "button", 18)(20, "button", 19)(21, "button", 20)(22, "button", 21)(23, "button", 22)(24, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 24)(26, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 26)(28, "img", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 28)(30, "p", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Ado\u00E7\u00E3o de cachorros em Salvador");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 28)(35, "p", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Adote amor, salve vidas");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 28)(40, "p", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Cada animal tem uma hist\u00F3ria,");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "ajude a escrever um final feliz");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 28)(47, "p", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Adote, salve uma vida e ganhe um amigo fiel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 28)(52, "p", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Com amor e cuidado, transformamos a vida de animais abandonados");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "img", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 28)(57, "p", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Nossa miss\u00E3o \u00E9 proteger e cuidar dos animais, um de cada vez");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Previous");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "button", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 41)(68, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " Sobre n\u00F3s ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "section", 44)(72, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 47)(75, "h2", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Quem somos?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "p", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Somos uma empresa apaixonada pelos animais, que h\u00E1 mais de dez anos, realiza a\u00E7\u00F5es em prol do bem-estar e dignidade dos c\u00E3es que est\u00E3o em situa\u00E7\u00E3o de vulnerabilidade ou que s\u00E3o v\u00EDtimas de maus-tratos.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "section", 50)(80, "div", 51)(81, "h2", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Nossos objetivos");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "p", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Promover o bem-estar e restaurar a dignidade dos cachorros que est\u00E3o em situa\u00E7\u00E3o de rua ou que s\u00E3o v\u00EDtimas de maus-tratos, assegurando-lhes, al\u00E9m de cuidados m\u00E9dicos, carinho, prote\u00E7\u00E3o afetiva e a possibilidade de ter um novo lar para morar.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "div", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "section", 54)(88, "div", 55)(89, "a", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "i", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "p", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 60)(94, "a", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Instagram ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "i", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 63)(98, "p", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Instituto Marina Adota \u00A9 2023");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fade", ctx.isTransitionTitle ? "hidden" : "visible")("innerHTML", ctx.title, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](86);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fade", ctx.isTransitionTitle ? "hidden" : "visible")("innerHTML", ctx.title, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    }
  },
  dependencies: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
  styles: ["\n\n.navbar.custom[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  height: 50px;\n}\n\n.continous-flow[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow-y: scroll;\n  scroll-snap-type: y mandatory;\n}\n\n.section[_ngcontent-%COMP%], .big-section[_ngcontent-%COMP%] {\n  height: 100vh;\n  scroll-snap-align: start;\n}\n\nbody[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: hidden;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 60px;\n  font-weight: bold;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 23px;\n  color: black;\n}\n\n.bg-section-4[_ngcontent-%COMP%] {\n  position: relative;\n  background-image: url('background_dogs.jpg');\n}\n\n.bg-section-4[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.lab-size[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: black;\n}\n\n.textarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n\n.font-final[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: bold;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  position: absolute;\n  top: 35%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 9999;\n}\n\n.card-animal[_ngcontent-%COMP%] {\n  width: 13rem;\n  height: 18rem;\n}\n\n.bounce-animation[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bounce 1.8s infinite;\n}\n\n.transition-title[_ngcontent-%COMP%] {\n  transition: opacity 0.5s;\n}\n\n@keyframes _ngcontent-%COMP%_bounce {\n\n  0%,\n  100% {\n      transform: translateY(0);\n  }\n\n  25% {\n      transform: translateY(-25px);\n  }\n}\n\n.fade-bottom[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n\n.fade-bottom[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 4rem;\n  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));\n  pointer-events: none;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  height: 2rem;\n}\n\n.section-text[_ngcontent-%COMP%] {\n  height: 60vh;\n}\n\n.small-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n  height: 90%;\n}\n\n.small-section[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%] {\n  height: 90%;\n}\n\n@media (max-width: 600px) {\n\n  .big-section[_ngcontent-%COMP%] {\n      height: auto;\n      scroll-snap-align: none;\n  }\n\n  .small-section[_ngcontent-%COMP%] {\n      height: 100vh;\n      scroll-snap-align: start;\n  }\n\n  .small-section[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%] {\n      height: 50%;\n  }\n\n  .small-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      font-size: 2.7rem;\n  }\n\n  .small-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      font-size: 1.2rem;\n  }\n\n  .carousel-caption[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{\n      font-size: small;\n  }\n\n  #lastMessage[_ngcontent-%COMP%] {\n      font-size: x-large;\n  }\n\n  .navbar-collapse-container[_ngcontent-%COMP%] {\n      z-index: 1000;\n    }\n\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUJBQXlCO0FBQ3pCO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw0Q0FBcUQ7QUFDdkQ7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRTs7TUFFSSx3QkFBd0I7RUFDNUI7O0VBRUE7TUFDSSw0QkFBNEI7RUFDaEM7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWiwyRUFBMkU7RUFDM0Usb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRTtNQUNJLFlBQVk7TUFDWix1QkFBdUI7RUFDM0I7O0VBRUE7TUFDSSxhQUFhO01BQ2Isd0JBQXdCO0VBQzVCOztFQUVBO01BQ0ksV0FBVztFQUNmOztFQUVBO01BQ0ksaUJBQWlCO0VBQ3JCOztFQUVBO01BQ0ksaUJBQWlCO0VBQ3JCOztFQUVBO01BQ0ksZ0JBQWdCO0VBQ3BCOztFQUVBO01BQ0ksa0JBQWtCO0VBQ3RCOztFQUVBO01BQ0ksYUFBYTtJQUNmOztBQUVKIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3R5bGUgZm9yIGluZGV4Lmh0bWwgKi9cbi5uYXZiYXIuY3VzdG9tIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmNvbnRpbm91cy1mbG93IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcbn1cblxuLnNlY3Rpb24sIC5iaWctc2VjdGlvbiB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYmctc2VjdGlvbi00IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3JjL2Fzc2V0cy9iYWNrZ3JvdW5kX2RvZ3MuanBnKTtcbn1cblxuLmJnLXNlY3Rpb24tNDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLmxhYi1zaXplIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuLmZvbnQtZmluYWwge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM1JTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmNhcmQtYW5pbWFsIHtcbiAgd2lkdGg6IDEzcmVtO1xuICBoZWlnaHQ6IDE4cmVtO1xufVxuXG4uYm91bmNlLWFuaW1hdGlvbiB7XG4gIGFuaW1hdGlvbjogYm91bmNlIDEuOHMgaW5maW5pdGU7XG59XG5cbi50cmFuc2l0aW9uLXRpdGxlIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XG5cbiAgMCUsXG4gIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG5cbiAgMjUlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjVweCk7XG4gIH1cbn1cblxuLmZhZGUtYm90dG9tIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZmFkZS1ib3R0b206YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogNHJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuaW5wdXQsXG5zZWxlY3Qge1xuICBoZWlnaHQ6IDJyZW07XG59XG5cbi5zZWN0aW9uLXRleHQge1xuICBoZWlnaHQ6IDYwdmg7XG59XG5cbi5zbWFsbC1zZWN0aW9uIGRpdntcbiAgaGVpZ2h0OiA5MCU7XG59XG5cbi5zbWFsbC1zZWN0aW9uIC5iZy1pbWcge1xuICBoZWlnaHQ6IDkwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgLmJpZy1zZWN0aW9uIHtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIHNjcm9sbC1zbmFwLWFsaWduOiBub25lO1xuICB9XG5cbiAgLnNtYWxsLXNlY3Rpb24ge1xuICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcbiAgfVxuXG4gIC5zbWFsbC1zZWN0aW9uIC5iZy1pbWcge1xuICAgICAgaGVpZ2h0OiA1MCU7XG4gIH1cblxuICAuc21hbGwtc2VjdGlvbiBoMiB7XG4gICAgICBmb250LXNpemU6IDIuN3JlbTtcbiAgfVxuXG4gIC5zbWFsbC1zZWN0aW9uIHAge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cblxuICAuY2Fyb3VzZWwtY2FwdGlvbiBoNSwgcHtcbiAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gIH1cblxuICAjbGFzdE1lc3NhZ2Uge1xuICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICB9XG5cbiAgLm5hdmJhci1jb2xsYXBzZS1jb250YWluZXIge1xuICAgICAgei1pbmRleDogMTAwMDtcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('fade', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 1
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 0
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('visible => hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('1s')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('hidden => visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('1s'))])]
  }
});


/***/ }),

/***/ 4622:
/*!**************************************************************!*\
  !*** ./src/app/pages/how-to-adopt/how-to-adopt.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HowToAdoptComponent: () => (/* binding */ HowToAdoptComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_model_animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/model/animal */ 4574);
/* harmony import */ var src_app_shared_model_sex_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/model/sex.enum */ 2506);
/* harmony import */ var src_app_shared_model_size_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/model/size.enum */ 3613);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_animal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/animal.service */ 4781);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/header/header.component */ 1074);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 1777);









function HowToAdoptComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 42)(3, "h5", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HowToAdoptComponent_div_54_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const animal_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.getAnimal(animal_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Sobre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const animal_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("src", "https://dev-services.marinaadota.com.br/files/", animal_r2.googleDriveFileId, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", animal_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", animal_r2.age, " Anos - ", animal_r2.sex == "MALE" ? "Macho" : "F\u00EAmea", "");
  }
}
function HowToAdoptComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7)(1, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HowToAdoptComponent_div_65_Template_img_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const fileId_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.mudarImagem(fileId_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fileId_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate2"]("src", "https://dev-services.marinaadota.com.br/files/", ctx_r1.animal.folderId, "/", fileId_r5, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
class HowToAdoptComponent {
  constructor(animalService) {
    this.animalService = animalService;
    this.imgWay = "";
    this.filterAge = "";
    this.filterSex = "";
    this.filterSize = "";
    this.animals = [];
    this.animal = new src_app_shared_model_animal__WEBPACK_IMPORTED_MODULE_0__.Animal("", 0, "", src_app_shared_model_sex_enum__WEBPACK_IMPORTED_MODULE_1__.Sex.MALE, src_app_shared_model_size_enum__WEBPACK_IMPORTED_MODULE_2__.Size.BIG, [], "", "", []);
  }
  ngOnInit() {
    this.getAnimals();
  }
  getAnimals() {
    this.animalService.getAnimals(this.filterAge, this.filterSex, this.filterSize).subscribe(response => {
      this.animals = response;
    }, error => {
      console.error(error);
    });
  }
  getAnimal(id) {
    this.animalService.getAnimal(id).subscribe(response => {
      this.imgWay = response.filesId[0];
      this.animal = response;
    }, error => console.error(error));
  }
  mudarImagem(novaImagem) {
    this.imgWay = novaImagem;
  }
}
HowToAdoptComponent.ɵfac = function HowToAdoptComponent_Factory(t) {
  return new (t || HowToAdoptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_animal_service__WEBPACK_IMPORTED_MODULE_3__.AnimalService));
};
HowToAdoptComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: HowToAdoptComponent,
  selectors: [["app-how-to-adopt"]],
  decls: 83,
  vars: 13,
  consts: [[1, "mx-auto", "col-12", "row", "bg-page", 2, "height", "auto"], [1, "mt-5", "col-6", "mx-auto"], [1, "mt-3", "col-1", "mx-auto"], [1, "mb-5"], [1, "mt-5", "col-10", "mx-auto"], [1, "fas", "fa-arrow-right-long"], [1, "mt-5", "mb-4", "row", "justify-content-center", "col-12"], [1, "col-3"], ["aria-label", "Default select example", "name", "filterAge", 1, "form-select", 3, "ngModel", "ngModelChange"], ["selected", "", "disabled", ""], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["aria-label", "Default select example", "name", "filterSex", 1, "form-select", 3, "ngModel", "ngModelChange"], ["value", "MALE"], ["value", "FEMALE"], ["aria-label", "Default select example", "name", "filterSize", 1, "form-select", 3, "ngModel", "ngModelChange"], ["value", "SMALL"], ["value", "MEDIUM"], ["value", "BIG"], ["type", "submit", 1, "col-1", "btn", "btn-secondary", "text-dark", 3, "click"], [1, "vh-100"], [1, "mx-auto", "px-auto", "col-12", "row", "justify-content-center"], ["class", "mt-4 col-2 mx-3 text-center card", 4, "ngFor", "ngForOf"], ["id", "exampleModal1", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-mdb-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "container"], [1, "row"], ["class", "col-3", 4, "ngFor", "ngForOf"], [1, "col-9"], ["id", "imagemPrincipal", "alt", "Extens\u00E3o de pet", 1, "img-fluid", 3, "src"], [1, "ms-5"], [1, "modal-footer"], ["id", "nav-btn-instagram", "type", "button", "href", "https://www.instagram.com/marina.adota/", 1, "nav-text-size", "shadow-none", "btn", "btn-primary", "text-dark", "mx-auto", "me-sm-3"], [1, "mt-4", "col-2", "mx-3", "text-center", "card"], ["alt", "Miniatura de pet", 1, "card-img-top", "h-50", 3, "src"], [1, "card-body"], [1, "mx-auto", "card-title"], [1, "card-text"], ["type", "button", "data-mdb-toggle", "modal", "data-mdb-target", "#exampleModal1", 1, "btn", "btn-primary", 3, "click"], ["alt", "Miniatura de pet", 1, "thumbnail", "my-2", 3, "src", "click"]],
  template: function HowToAdoptComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0)(2, "div")(3, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Gostou de algum pet e quer adotar?");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div")(6, "h5", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\u00C9 bem simples");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 3)(9, "h5", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Vejas os animais dispon\u00EDveis abaixo\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "\u00A0Mande uma mensagem no instagram informando qual pet voc\u00EA tem interesse\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "\u00A0Mande seu Whatsapp e entraremos em contato ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "form", 6)(16, "div", 7)(17, "select", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function HowToAdoptComponent_Template_select_ngModelChange_17_listener($event) {
        return ctx.filterAge = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Idade");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Todas");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "0 a 5 meses");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "6 meses a 1 ano");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Acima de 1 ano");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 7)(29, "select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function HowToAdoptComponent_Template_select_ngModelChange_29_listener($event) {
        return ctx.filterSex = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Sexo");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Masculino");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Feminino");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 7)(39, "select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function HowToAdoptComponent_Template_select_ngModelChange_39_listener($event) {
        return ctx.filterSize = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Porte");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Pequeno");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "M\u00E9dio");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Grande");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HowToAdoptComponent_Template_button_click_50_listener() {
        return ctx.getAnimals();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Filtrar");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "section", 22)(53, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, HowToAdoptComponent_div_54_Template, 9, 4, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 25)(56, "div", 26)(57, "div", 27)(58, "div", 28)(59, "h5", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](61, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 31)(63, "div", 32)(64, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](65, HowToAdoptComponent_div_65_Template, 2, 2, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](67, "img", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "div", 37)(69, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 38)(80, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, " Instagram ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](82, "app-footer");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.filterAge);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.filterSex);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.filterSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.animals);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.animal.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.animal.filesId);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate2"]("src", "https://dev-services.marinaadota.com.br/files/", ctx.animal.folderId, "/", ctx.imgWay, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.animal.age, " Anos ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.animal.sex == "MALE" ? "Macho" : "F\u00EAmea", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.animal.breed, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.animal.healthInformation, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.animal.description, " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent],
  styles: ["h2[_ngcontent-%COMP%] {\n    font-size: 250%;\n    color: black;\n}\n\nh5[_ngcontent-%COMP%] {\n    font-size: medium;\n    \n}\n\n.bg-color[_ngcontent-%COMP%] {\n    background-color: grey;\n}\n\n.bg-page[_ngcontent-%COMP%] {\n    background-color: #F3F3F3;\n}\n\n.button-color[_ngcontent-%COMP%] {\n    color: black;\n    background-color: #D8AFCC;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG93LXRvLWFkb3B0L2hvdy10by1hZG9wdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgICBmb250LXNpemU6IDI1MCU7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5oNSB7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgXG59XG5cbi5iZy1jb2xvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cblxuLmJnLXBhZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0YzRjM7XG59XG5cbi5idXR0b24tY29sb3Ige1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDhBRkNDO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */", "\n\n                    .thumbnail[_ngcontent-%COMP%] {\n                        width: 100px;\n                        height: 100px;\n                        margin-right: 10px;\n                        cursor: pointer;\n                    }\n\n                    \n\n                    #imagemPrincipal[_ngcontent-%COMP%] {\n                        max-width: 400px;\n                        max-height: 400px;\n                        transition: all 0.3s ease-in-out;\n                    }"]
});


/***/ }),

/***/ 236:
/*!****************************************************************!*\
  !*** ./src/app/pages/how-to-donate/how-to-donate.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HowToDonateComponent: () => (/* binding */ HowToDonateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/clipboard */ 4362);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/header/header.component */ 1074);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 1777);





const _c0 = function (a0, a1, a2) {
  return {
    "btn-outline-dark": a0,
    "btn-secondary": a1,
    "text-black": a2
  };
};
class HowToDonateComponent {
  constructor(clipboard) {
    this.clipboard = clipboard;
    this.effect = false;
    this.buttonText = "Copiar";
  }
  copyText() {
    this.clipboard.copy("43584462000106");
    this.buttonText = 'Copiado !';
    this.effect = true;
    setTimeout(() => {
      this.buttonText = 'Copiar';
      this.effect = false;
    }, 2000);
  }
}
HowToDonateComponent.ɵfac = function HowToDonateComponent_Factory(t) {
  return new (t || HowToDonateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__.Clipboard));
};
HowToDonateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HowToDonateComponent,
  selectors: [["app-how-to-donate"]],
  decls: 66,
  vars: 6,
  consts: [[1, "m-auto", "revert", "height-main", "row", "col-12"], ["id", "text", 1, "col-sm-4", "col-8"], [1, "size-text", "text-black"], [1, "d-none", "d-sm-flex", "me-auto", "mt-4", "text-start"], [1, "d-none", "d-sm-block"], [1, "mt-5", "mb-0"], [1, "mt-0", "mb-0"], [1, "mt-0", "mb-5"], [1, "d-none", "d-sm-flex", "d-flex", "flex-sm-row", "me-auto", "text-start"], [1, "col-11", "col-sm-3", "section-card"], [1, "card", "shadow", "bg-secondary", 2, "height", "100%", "width", "100%", "position", "static"], [1, "text-center", "card-body", "d-flex", "flex-column"], [1, "mt-2", "card-title", "text-black"], [1, "pix-size", "my-auto"], ["src", "assets/QR-code.svg", 1, "shadow", "mx-auto", "mt-2", "mt-auto", 2, "width", "10rem"], [1, "mt-3"], [1, "mt-5", "mb-3"], ["id", "text-to-copy", 1, "text-black"], ["id", "btn-click-to-copy", 1, "pulse-button", "pulse-button:hover", "btn", "btn-copy", "btn-outline-dark", "col-8", "col-sm-7", 3, "ngClass", "click"], [1, "d-sm-none", "col-12", 2, "height", "100vh"], [1, "sect"], [1, "desp-help"], [1, "desp-help", "mb-4"], [1, "mt-5", "sect"]],
  template: function HowToDonateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "main", 0)(2, "div", 1)(3, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Voc\u00EA pode doar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " algum valor?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "A doa\u00E7\u00E3o pode ajudar com nossas despesas:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ul", 4)(10, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Aluguel; ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Funcion\u00E1rios; ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " \u00C1gua; ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Energia; ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Ra\u00E7\u00E3o; ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Medicamentos; ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Veterin\u00E1rio; ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Material de limpeza. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "h6", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Precisamos de ajuda para continuar mantendo o abrigo e os resgatados.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 9)(29, "div", 10)(30, "div", 11)(31, "h2", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "PIX");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "QR code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Chave CNPJ:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "p", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "43.584.462/0001-06");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HowToDonateComponent_Template_button_click_41_listener() {
        return ctx.copyText();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "section", 19)(44, "h6", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "A doa\u00E7\u00E3o pode ajudar com nossas despesas:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "ul")(47, "li", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " Aluguel; ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "li", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " Funcion\u00E1rios; ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "li", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " \u00C1gua; ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "li", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, " Energia; ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "li", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, " Ra\u00E7\u00E3o; ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "li", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, " Medicamentos; ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "li", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " Veterin\u00E1rio; ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "li", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " Material de limpeza. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "h6", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Precisamos de ajuda para continuar mantendo o abrigo e os resgatados.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "app-footer");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](2, _c0, !ctx.effect, ctx.effect, ctx.effect));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.buttonText);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: [".heigh-nav[_ngcontent-%COMP%] {\n    height: 11vh;\n}\n\n.ft-size[_ngcontent-%COMP%] {\n    margin-top: 0vh;\n}\n\n.height-main[_ngcontent-%COMP%] {\n    height: 89vh;\n}\n\n#text[_ngcontent-%COMP%] {\n    margin-top: auto;\n    margin-bottom: auto;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.section-card[_ngcontent-%COMP%] {\n    height: 80%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: auto;\n    margin-bottom: auto;\n}\n\n.sect[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 8vh;\n    text-align: center;\n    font-size: large;\n}\n\n.desp-help[_ngcontent-%COMP%] {\n    margin-top: 5vh;\n}\n\n.d-li[_ngcontent-%COMP%] {\n    display: block;\n}\n\n\n@media (max-width: 600px) {\n\n    .height-main[_ngcontent-%COMP%] {\n        height: 91vh;\n    }\n\n    .revert[_ngcontent-%COMP%] {\n        flex-direction: row-reverse;\n    }\n\n    .size-text[_ngcontent-%COMP%] {\n        height: 11vh;\n        font-size: 45px;\n        text-align: center;\n\n    }\n\n    #text[_ngcontent-%COMP%] {\n        height: 7rem;\n        width: 23rem;\n        margin-top: 2rem;\n\n    }\n\n    .heigh-nav[_ngcontent-%COMP%] {\n        height: 9vh;\n    }\n\n    .section-card[_ngcontent-%COMP%] {\n        height: 70%;\n        margin-left: auto;\n        margin-right: auto;\n        margin-top: 5vh;\n        margin-bottom: auto;\n    }\n\n    .ft-size[_ngcontent-%COMP%] {\n        margin-top: 100vh;\n    }\n\n    .d-li[_ngcontent-%COMP%] {\n        display: none\n    }\n\n    .pix-size[_ngcontent-%COMP%] {\n        font-size:larger;\n    }\n\n    .pix-size[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        font-size:medium;\n        height: 7vh;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG93LXRvLWRvbmF0ZS9ob3ctdG8tZG9uYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFHQTs7SUFFSTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSxZQUFZO1FBQ1osZUFBZTtRQUNmLGtCQUFrQjs7SUFFdEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osWUFBWTtRQUNaLGdCQUFnQjs7SUFFcEI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixXQUFXO0lBQ2Y7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5oZWlnaC1uYXYge1xuICAgIGhlaWdodDogMTF2aDtcbn1cblxuLmZ0LXNpemUge1xuICAgIG1hcmdpbi10b3A6IDB2aDtcbn1cblxuLmhlaWdodC1tYWluIHtcbiAgICBoZWlnaHQ6IDg5dmg7XG59XG5cbiN0ZXh0IHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uc2VjdGlvbi1jYXJkIHtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuXG4uc2VjdCB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDh2aDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLmRlc3AtaGVscCB7XG4gICAgbWFyZ2luLXRvcDogNXZoO1xufVxuXG4uZC1saSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgICAuaGVpZ2h0LW1haW4ge1xuICAgICAgICBoZWlnaHQ6IDkxdmg7XG4gICAgfVxuXG4gICAgLnJldmVydCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICB9XG5cbiAgICAuc2l6ZS10ZXh0IHtcbiAgICAgICAgaGVpZ2h0OiAxMXZoO1xuICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIH1cblxuICAgICN0ZXh0IHtcbiAgICAgICAgaGVpZ2h0OiA3cmVtO1xuICAgICAgICB3aWR0aDogMjNyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG5cbiAgICB9XG5cbiAgICAuaGVpZ2gtbmF2IHtcbiAgICAgICAgaGVpZ2h0OiA5dmg7XG4gICAgfVxuXG4gICAgLnNlY3Rpb24tY2FyZCB7XG4gICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgfVxuXG4gICAgLmZ0LXNpemUge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMDB2aDtcbiAgICB9XG5cbiAgICAuZC1saSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICB9XG5cbiAgICAucGl4LXNpemUge1xuICAgICAgICBmb250LXNpemU6bGFyZ2VyO1xuICAgIH1cblxuICAgIC5waXgtc2l6ZSBidXR0b24ge1xuICAgICAgICBmb250LXNpemU6bWVkaXVtO1xuICAgICAgICBoZWlnaHQ6IDd2aDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 3741:
/*!************************************************************!*\
  !*** ./src/app/pages/how-to-help/how-to-help.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HowToHelpComponent: () => (/* binding */ HowToHelpComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/header/header.component */ 1074);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 1777);



class HowToHelpComponent {}
HowToHelpComponent.ɵfac = function HowToHelpComponent_Factory(t) {
  return new (t || HowToHelpComponent)();
};
HowToHelpComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HowToHelpComponent,
  selectors: [["app-how-to-help"]],
  decls: 38,
  vars: 0,
  consts: [[1, "col-11", "col-sm-8", "mx-auto", "ms-sm-0", "mt-5", "mb-4"], [1, "col-12", "mx-auto", "d-flex", "flex-column", "flex-sm-row"], [1, "col-11", "col-sm-3", "mx-auto", "ms-sm-0", "card", "shadow-none"], [1, "card-body"], [1, "font-como-ajudar", "card-title"], [1, "card-text"], [1, "col-11", "col-sm-3", "mx-auto", "card", "shadow-none"], [1, "col-11", "col-sm-3", "mx-auto", "me-sm-0", "card", "shadow-none"], [1, "ms-3", "ms-sm-0", "mt-3", "mb-5", "mb-sm-0"], ["href", "./doacao.html", 1, "button-size", "btn", "btn-rounded", "btn-dark", 2, "height", "45px", "width", "150px"]],
  template: function HowToHelpComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section")(2, "h2", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Nossos animais precisam de um lar e de muito amor.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Voc\u00EA pode ajudar? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 1)(7, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3)(10, "h5", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Doando Ra\u00E7\u00E3o");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Usamos 50 KG de ra\u00E7\u00E3o por dia para alimentar os resgatados.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Se voc\u00EA puder doar ra\u00E7\u00E3o para o abrigo, vai estar ajudando a alimentar v\u00E1rios cachorros.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 3)(19, "h5", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Doando algum item");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "A doa\u00E7\u00E3o de qualquer dos itens abaixo ajudar\u00E1 bastante.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Medicamentos, Papel\u00E3o, Len\u00E7ol, Tecidos, Material de Limpeza, Comedouros.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 3)(28, "h5", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Doando algum valor");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Temos despesas mensais alt\u00EDssimas. Portanto, toda ajuda \u00E9 muito bem-vinda.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Obrigada!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 8)(35, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Quero Doar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "app-footer");
    }
  },
  dependencies: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: ["h2[_ngcontent-%COMP%]{\n    font-size: 2.8rem;\n    color:black;\n    font-weight: bold;\n}\n\n.font-como-ajudar[_ngcontent-%COMP%]{\n    color:black;\n    font-weight: bold;\n}\n\n.button-size[_ngcontent-%COMP%]{\n    font-size: larger;\n}\n\nsection[_ngcontent-%COMP%] {\n    height: 89vh;\n    padding-left: 11rem; padding-right: 11rem;\n}\n\n@media (max-width: 600px) {\n    h2[_ngcontent-%COMP%] {\n        font-size: x-large;\n    }\n\n    section[_ngcontent-%COMP%] {\n        height: auto;\n        padding: 0;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG93LXRvLWhlbHAvaG93LXRvLWhlbHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUIsRUFBRSxvQkFBb0I7QUFDN0M7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWixVQUFVO0lBQ2Q7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImgye1xuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZm9udC1jb21vLWFqdWRhcntcbiAgICBjb2xvcjpibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ1dHRvbi1zaXple1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG5zZWN0aW9uIHtcbiAgICBoZWlnaHQ6IDg5dmg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMXJlbTsgcGFkZGluZy1yaWdodDogMTFyZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgIH1cblxuICAgIHNlY3Rpb24ge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 4781:
/*!********************************************!*\
  !*** ./src/app/services/animal.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimalService: () => (/* binding */ AnimalService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class AnimalService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getAnimals(age, sex, size) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
    params = params.set("age", age);
    params = params.set("sex", sex);
    params = params.set("size", size);
    return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + "/short", {
      params
    });
  }
  getAnimal(id) {
    return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + "/show/" + id);
  }
}
AnimalService.ɵfac = function AnimalService_Factory(t) {
  return new (t || AnimalService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
AnimalService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AnimalService,
  factory: AnimalService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 1777:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 49,
  vars: 0,
  consts: [[1, "ft-size", "bg-primary", "text-dark", "text-center", "text-lg-start"], [1, "container", "p-4"], [1, "row"], [1, "d-flex", "flex-column", "f-size", "col-12", "col-sm-3", "mb-md-0", "mx-auto"], ["routerLink", ""], ["src", "assets/logo.svg", "alt", "Logo marina adota", 1, "bg-white", "shadow-sm", "rounded-3", "col-lg-6", "col-md-10", "mb-md-0", 2, "width", "80%"], [1, "mt-4"], ["href", "https://www.instagram.com/marina.adota/", "id", "Instragram", 1, "insta-size", "footer-link"], [1, "fa-brands", "fa-instagram", "text-dark"], [1, "col-12", "col-sm-4", "mb-5", "mb-md-0", "ms-0", "me-auto", "mx-sm-auto", "d-flex", "flex-column", "text-black", 2, "margin", "1rem"], [1, "ms-1", "me-auto", "mx-sm-auto"], [1, "text-uppercase"], [1, "list-unstyled", "mb-0"], ["routerLink", "", "fragment", "about-us", 1, "text-dark"], ["routerLink", "", "fragment", "goals", 1, "text-dark"], ["routerLink", "", "fragment", "contact-us", 1, "text-dark"], ["routerLink", "/quero-ajudar", 1, "text-dark"], ["routerLink", "/quero-adotar", 1, "text-dark"], [1, "col-12", "col-sm-4", "mb-4", "mb-md-0", "ms-0", "me-auto", "d-flex", "flex-column", "text-black", 2, "margin", "1rem"], [1, "ms-0", "me-auto", "mx-sm-auto"], ["href", "#"], [1, "list-unstyled", "mx-auto"], ["href", "quero-ajudar", 1, "text-dark"], ["href", "quero-doar", 1, "text-dark"], [1, "text-center", "p-3", "bg-primary", 2, "height", "2rem"], ["href", "https://mdbootstrap.com/", 1, "text-black", 2, "font-size", "90%", "height", "4%", "display", "flex", "align-items", "center", "justify-content", "center"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Somos uma empresa apaixonada pelos animais, que h\u00E1 mais de dez anos, realiza a\u00E7\u00F5es em prol do bem-estar e dignidade dos c\u00E3es que est\u00E3o em situa\u00E7\u00E3o de vulnerabilidade ou que s\u00E3o v\u00EDtimas de maus-tratos. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "div")(13, "h6", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 12)(16, "li")(17, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Quem somos");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li")(20, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Nossos objetivos");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li")(23, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Entre em contato");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li")(26, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Como ajudar ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li")(29, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Quero Adotar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18)(32, "div", 19)(33, "div", 20)(34, "h6", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Como ajudar?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 21)(37, "li")(38, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Doando Ra\u00E7\u00E3o");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li")(41, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Doando algum item");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li")(44, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Doando algum valor");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24)(47, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Instituto Marina Adota \u00A9 2023");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */", ".list-unstyled[_ngcontent-%COMP%] {\n                            display: flex;\n                            flex-direction: column;\n                            justify-content: space-evenly;\n                        }\n\n                        .text-uppercase[_ngcontent-%COMP%] {\n                            display: flex;\n                            flex-direction: column;\n                            justify-content: space-evenly;\n                        }"]
});


/***/ }),

/***/ 1074:
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class HeaderComponent {
  constructor(ellement, router, renderer) {
    this.ellement = ellement;
    this.router = router;
    this.renderer = renderer;
  }
  ngOnInit() {
    // Se estiver na página principal
    if (this.router.url === "/") {
      // Remove a sombra do menu
      this.renderer.addClass(this.ellement.nativeElement.querySelector('.shadow-sm'), 'shadow-none');
    }
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 16,
  vars: 0,
  consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-white", "shadow-sm"], ["routerLink", "/", 1, "navbar-brand", "ms-2", "me-auto", "my-auto"], ["id", "logo", "src", "assets/logo.svg", "alt", "Logo", "loading", "lazy"], ["type", "button", "data-mdb-toggle", "collapse", "data-mdb-target", "#navbarButtonsExample", "aria-controls", "navbarButtonsExample", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "my-auto"], [1, "fas", "fa-bars", "fa-xl"], ["id", "navbarButtonsExample", 1, "collapse", "navbar-collapse", "bg-white", "navbar-collapse-container"], [1, "d-flex", "flex-column", "flex-sm-row", "ms-auto", "text-capitalize"], ["type", "button", "routerLink", "/quero-ajudar", 1, "nav-text-size", "text-black", "nav-link", "px-3", "me-2", "my-2", "my-sm-auto"], ["type", "button", "routerLink", "/quero-adotar", 1, "nav-text-size", "text-black", "nav-link", "px-3", "me-2", "my-2", "my-sm-auto"], ["type", "button", "routerLink", "/quero-doar", 1, "nav-text-size", "text-black", "nav-link", "px-3", "me-2", "my-2", "my-sm-auto"], [1, "hr", "d-block", "d-sm-none", "bg-dark", "mx-auto", "mt-3", "mb-5", 2, "height", "0.3rem", "width", "90%"], ["id", "nav-btn-instagram", "type", "button", "href", "https://www.instagram.com/marina.adota/", 1, "nav-text-size", "shadow-none", "btn", "btn-primary", "btn-rounded", "text-dark", "mx-auto", "me-sm-3"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " como ajudar? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Quero Adotar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Quero Doar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Instagram ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["\n\n\n.navbar.custom[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    height: 50px;\n}\n\n.continous-flow[_ngcontent-%COMP%] {\n    height: 100vh;\n    overflow-y: scroll;\n    scroll-snap-type: y mandatory;\n}\n\n.section[_ngcontent-%COMP%], .big-section[_ngcontent-%COMP%] {\n    height: 100vh;\n    scroll-snap-align: start;\n}\n\nbody[_ngcontent-%COMP%] {\n    height: 100vh;\n    overflow: hidden;\n}\n\nh2[_ngcontent-%COMP%] {\n    font-size: 60px;\n    font-weight: bold;\n}\n\np[_ngcontent-%COMP%] {\n    font-size: 23px;\n    color: black;\n}\n\n.bg-section-4[_ngcontent-%COMP%] {\n    position: relative;\n    background-image: url('background_dogs.jpg');\n}\n\n.bg-section-4[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.6);\n}\n\n.lab-size[_ngcontent-%COMP%] {\n    font-size: 13px;\n    color: black;\n}\n\n.textarea[_ngcontent-%COMP%] {\n    resize: none;\n}\n\n.font-final[_ngcontent-%COMP%] {\n    font-size: 40px;\n    font-weight: bold;\n}\n\nh1[_ngcontent-%COMP%] {\n    font-size: 3rem;\n    position: absolute;\n    top: 35%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 9999;\n}\n\n.card-animal[_ngcontent-%COMP%] {\n    width: 13rem;\n    height: 18rem;\n}\n\n.bounce-animation[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_bounce 1.8s infinite;\n}\n\n.transition-title[_ngcontent-%COMP%] {\n    transition: opacity 0.5s;\n}\n\n@keyframes _ngcontent-%COMP%_bounce {\n\n    0%,\n    100% {\n        transform: translateY(0);\n    }\n\n    25% {\n        transform: translateY(-25px);\n    }\n}\n\n.fade-bottom[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n}\n\n.fade-bottom[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 4rem;\n    background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));\n    pointer-events: none;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n    height: 2rem;\n}\n\n.section-text[_ngcontent-%COMP%] {\n    height: 60vh;\n}\n\n.small-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n    height: 90%;\n}\n\n.small-section[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%] {\n    height: 90%;\n}\n\n@media (max-width: 600px) {\n\n    .big-section[_ngcontent-%COMP%] {\n        height: auto;\n        scroll-snap-align: none;\n    }\n\n    .small-section[_ngcontent-%COMP%] {\n        height: 100vh;\n        scroll-snap-align: start;\n    }\n\n    .small-section[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%] {\n        height: 50%;\n    }\n\n    .small-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 2.7rem;\n    }\n\n    .small-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 1.2rem;\n    }\n\n    .carousel-caption[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{\n        font-size: small;\n    }\n\n    #lastMessage[_ngcontent-%COMP%] {\n        font-size: x-large;\n    }\n\n    .navbar-collapse-container[_ngcontent-%COMP%] {\n        z-index: 1000;\n      }\n\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQ0FBc0M7O0FBRXRDO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDRDQUEwRDtBQUM5RDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTs7SUFFSTs7UUFFSSx3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSw0QkFBNEI7SUFDaEM7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWiwyRUFBMkU7SUFDM0Usb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBOztJQUVJO1FBQ0ksWUFBWTtRQUNaLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLGFBQWE7UUFDYix3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxhQUFhO01BQ2Y7O0FBRU4iLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUT0RPIFJlbW92ZXIgZXN0aWxvIGRlc25lY2Vzc2FyaW8gKi9cblxuLm5hdmJhci5jdXN0b20ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLmNvbnRpbm91cy1mbG93IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcbn1cblxuLnNlY3Rpb24sIC5iaWctc2VjdGlvbiB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XG59XG5cbmJvZHkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxucCB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmJnLXNlY3Rpb24tNCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvYmFja2dyb3VuZF9kb2dzLmpwZyk7XG59XG5cbi5iZy1zZWN0aW9uLTQ6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLmxhYi1zaXplIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4udGV4dGFyZWEge1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cblxuLmZvbnQtZmluYWwge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNSU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHotaW5kZXg6IDk5OTk7XG59XG5cbi5jYXJkLWFuaW1hbCB7XG4gICAgd2lkdGg6IDEzcmVtO1xuICAgIGhlaWdodDogMThyZW07XG59XG5cbi5ib3VuY2UtYW5pbWF0aW9uIHtcbiAgICBhbmltYXRpb246IGJvdW5jZSAxLjhzIGluZmluaXRlO1xufVxuXG4udHJhbnNpdGlvbi10aXRsZSB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XG5cbiAgICAwJSxcbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cblxuICAgIDI1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjVweCk7XG4gICAgfVxufVxuXG4uZmFkZS1ib3R0b20ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZmFkZS1ib3R0b206YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbmlucHV0LFxuc2VsZWN0IHtcbiAgICBoZWlnaHQ6IDJyZW07XG59XG5cbi5zZWN0aW9uLXRleHQge1xuICAgIGhlaWdodDogNjB2aDtcbn1cblxuLnNtYWxsLXNlY3Rpb24gZGl2e1xuICAgIGhlaWdodDogOTAlO1xufVxuXG4uc21hbGwtc2VjdGlvbiAuYmctaW1nIHtcbiAgICBoZWlnaHQ6IDkwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgICAuYmlnLXNlY3Rpb24ge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHNjcm9sbC1zbmFwLWFsaWduOiBub25lO1xuICAgIH1cblxuICAgIC5zbWFsbC1zZWN0aW9uIHtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xuICAgIH1cblxuICAgIC5zbWFsbC1zZWN0aW9uIC5iZy1pbWcge1xuICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICB9XG5cbiAgICAuc21hbGwtc2VjdGlvbiBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi43cmVtO1xuICAgIH1cblxuICAgIC5zbWFsbC1zZWN0aW9uIHAge1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB9XG5cbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiBoNSwgcHtcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICB9XG5cbiAgICAjbGFzdE1lc3NhZ2Uge1xuICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgfVxuXG4gICAgLm5hdmJhci1jb2xsYXBzZS1jb250YWluZXIge1xuICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 4574:
/*!****************************************!*\
  !*** ./src/app/shared/model/animal.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animal: () => (/* binding */ Animal)
/* harmony export */ });
class Animal {
  constructor(name, age, breed, sex, size, healthInformation, description, folderId, filesId) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.sex = sex;
    this.size = size;
    this.healthInformation = healthInformation;
    this.description = description;
    this.folderId = folderId;
    this.filesId = filesId;
  }
}

/***/ }),

/***/ 2506:
/*!******************************************!*\
  !*** ./src/app/shared/model/sex.enum.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sex: () => (/* binding */ Sex)
/* harmony export */ });
var Sex;
(function (Sex) {
  Sex["MALE"] = "MALE";
  Sex["FEMALE"] = "FEMALE";
})(Sex || (Sex = {}));

/***/ }),

/***/ 3613:
/*!*******************************************!*\
  !*** ./src/app/shared/model/size.enum.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Size: () => (/* binding */ Size)
/* harmony export */ });
var Size;
(function (Size) {
  Size["SMALL"] = "Pequeno";
  Size["MEDIUM"] = "M\u00E9dio";
  Size["BIG"] = "Grande";
})(Size || (Size = {}));

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  API_URL: "https://dev-services.marinaadota.com.br/api/website/"
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map