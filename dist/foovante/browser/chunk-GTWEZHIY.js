import {
  ChangeDetectorRef,
  NgClass,
  NgStyle,
  RouterLink,
  RouterLinkActive,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-SAJFQ2U5.js";

// src/app/shared/components/nav/nav.component.ts
var _forTrack0 = ($index, $item) => $item.route;
var _c0 = (a0) => ({ "nav": true, "dark": a0 });
var _c1 = () => ({ exact: true });
var _c2 = () => ({ exact: false });
function NavComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", link_r1.route)("routerLinkActiveOptions", link_r1.route === "/" ? \u0275\u0275pureFunction0(3, _c1) : \u0275\u0275pureFunction0(4, _c2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r1.label);
  }
}
var NavComponent = class _NavComponent {
  constructor() {
    this.dark = false;
    this.cta = { label: "Browse projects", href: "/funders", routerLink: "/funders" };
    this.navLinks = [
      { label: "About", route: "/" },
      { label: "For Funders", route: "/funders" },
      { label: "For Projects", route: "/projects" },
      { label: "For Investors", route: "/investors" }
    ];
  }
  static {
    this.\u0275fac = function NavComponent_Factory(t) {
      return new (t || _NavComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavComponent, selectors: [["fv-nav"]], inputs: { dark: "dark", cta: "cta" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 5, consts: [[3, "ngClass"], [1, "nav-in"], ["routerLink", "/", 1, "brand"], ["src", "assets/images/LOGO .png", "alt", "Foovante Logo", 1, ""], [1, "nav-links"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], [1, "nav-cta"], ["routerLink", "/", 1, "btn", "btn-ghost", "btn-sm"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"]], template: function NavComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "nav", 4);
        \u0275\u0275repeaterCreate(5, NavComponent_For_6_Template, 2, 5, "a", 5, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6)(8, "a", 7);
        \u0275\u0275text(9, "Sign in");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "a", 8);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c0, ctx.dark));
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.navLinks);
        \u0275\u0275advance(5);
        \u0275\u0275property("routerLink", ctx.cta.routerLink || "/About");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.cta.label, " ");
      }
    }, dependencies: [RouterLink, RouterLinkActive, NgClass], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=nav.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavComponent, { className: "NavComponent", filePath: "src/app/shared/components/nav/nav.component.ts", lineNumber: 18 });
})();

// src/app/shared/components/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  constructor() {
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  }
  static {
    this.\u0275fac = function FooterComponent_Factory(t) {
      return new (t || _FooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["fv-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 95, vars: 1, consts: [[1, "wrap"], [1, "ft-grid"], ["routerLink", "/", 1, "brand", 2, "margin-bottom", "20px", "display", "inline-flex"], ["src", "assets/images/LOGO .png", "alt", "Foovante Logo", 1, ""], [2, "font-size", "14px", "color", "var(--ink-2)", "line-height", "1.6", "max-width", "28ch", "margin", "0"], [2, "font-size", "12px", "color", "var(--muted)", "margin-top", "20px"], ["routerLink", "/funders"], ["routerLink", "/projects"], ["routerLink", "/investors"], ["href", "#"], ["routerLink", "/"], [1, "ft-bottom"], [1, "partners"]], template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer")(1, "div", 0)(2, "div", 1)(3, "div")(4, "a", 2);
        \u0275\u0275element(5, "img", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " The verification, marketplace, and capital layer for African carbon. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9, " Registered: Ghana SEC \xB7 MSR-2023-091 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div")(11, "h5");
        \u0275\u0275text(12, "Platform");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "ul")(14, "li")(15, "a", 6);
        \u0275\u0275text(16, "For Funders");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "li")(18, "a", 7);
        \u0275\u0275text(19, "For Projects");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "li")(21, "a", 8);
        \u0275\u0275text(22, "For Investors");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "li")(24, "a", 9);
        \u0275\u0275text(25, "Pricing");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "li")(27, "a", 9);
        \u0275\u0275text(28, "Data room");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(29, "div")(30, "h5");
        \u0275\u0275text(31, "Learn");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "ul")(33, "li")(34, "a", 9);
        \u0275\u0275text(35, "How MRV works");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "li")(37, "a", 9);
        \u0275\u0275text(38, "Methodology library");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "li")(40, "a", 9);
        \u0275\u0275text(41, "Credit lifecycle");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "li")(43, "a", 9);
        \u0275\u0275text(44, "SDG co-benefits");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "li")(46, "a", 9);
        \u0275\u0275text(47, "Blog");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(48, "div")(49, "h5");
        \u0275\u0275text(50, "Company");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "ul")(52, "li")(53, "a", 10);
        \u0275\u0275text(54, "About");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "li")(56, "a", 9);
        \u0275\u0275text(57, "Team");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "li")(59, "a", 9);
        \u0275\u0275text(60, "Careers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "li")(62, "a", 9);
        \u0275\u0275text(63, "Press");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "li")(65, "a", 9);
        \u0275\u0275text(66, "Contact");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(67, "div")(68, "h5");
        \u0275\u0275text(69, "Legal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "ul")(71, "li")(72, "a", 9);
        \u0275\u0275text(73, "Privacy policy");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "li")(75, "a", 9);
        \u0275\u0275text(76, "Terms of service");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "li")(78, "a", 9);
        \u0275\u0275text(79, "Risk disclosure");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(80, "li")(81, "a", 9);
        \u0275\u0275text(82, "Cookie policy");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(83, "div", 11)(84, "div");
        \u0275\u0275text(85);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "div", 12)(87, "span");
        \u0275\u0275text(88, "LinkedIn");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "span");
        \u0275\u0275text(90, "Twitter");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "span");
        \u0275\u0275text(92, "Instagram");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "span");
        \u0275\u0275text(94, "Facebook");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(85);
        \u0275\u0275textInterpolate1("\xA9 ", ctx.currentYear, " Foovante Global Ltd. All rights reserved.");
      }
    }, dependencies: [RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/shared/components/footer/footer.component.ts", lineNumber: 11 });
})();

// src/app/shared/components/hero/hero.component.ts
var _forTrack02 = ($index, $item) => $item.img;
var _c02 = (a0) => ({ "background-image": a0 });
function HeroComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    const i_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-on", ctx_r2.getSlideState(i_r2) || null);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(2, _c02, "url(" + slide_r1.img + ")"));
  }
}
function HeroComponent_For_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " From the ");
    \u0275\u0275elementStart(1, "em");
    \u0275\u0275text(2, "soil up.");
    \u0275\u0275elementEnd();
  }
}
function HeroComponent_For_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const line_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", line_r4, " ");
  }
}
function HeroComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6)(1, "span");
    \u0275\u0275template(2, HeroComponent_For_11_Conditional_2_Template, 3, 0, "em")(3, HeroComponent_For_11_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r5 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("animation-delay", 0.18 + i_r5 * 0.14 + "s");
    \u0275\u0275advance();
    \u0275\u0275conditional(2, i_r5 === ctx_r2.lines.length - 1 && ctx_r2.lines.length > 1 ? 2 : 3);
  }
}
function HeroComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function HeroComponent_For_25_Template_button_click_0_listener() {
      const i_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goTo(i_r7));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r7 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-on", i_r7 === ctx_r2.currentSlide ? "1" : null)("aria-label", "Go to slide " + (i_r7 + 1));
  }
}
var HeroComponent = class _HeroComponent {
  constructor(cdr) {
    this.cdr = cdr;
    this.slides = [];
    this.eyebrow = "";
    this.lines = [];
    this.lead = "";
    this.cta1 = { label: "Browse projects", routerLink: "/funders" };
    this.cta2 = { label: "Apply to list a project", routerLink: "/projects" };
    this.currentSlide = 0;
    this.previousSlide = -1;
    this.timer = null;
    this.slideDuration = 6e3;
  }
  ngOnInit() {
    if (this.slides.length > 1) {
      this.startTimer();
    }
  }
  ngOnDestroy() {
    this.clearTimer();
  }
  startTimer() {
    this.clearTimer();
    this.timer = setInterval(() => {
      this.advance();
    }, this.slideDuration);
  }
  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
  advance() {
    this.previousSlide = this.currentSlide;
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.cdr.markForCheck();
  }
  goTo(index) {
    if (index === this.currentSlide)
      return;
    this.previousSlide = this.currentSlide;
    this.currentSlide = index;
    this.startTimer();
    this.cdr.markForCheck();
  }
  getSlideState(index) {
    if (index === this.currentSlide)
      return "on";
    if (index === this.previousSlide)
      return "prev";
    return "";
  }
  get currentSlideData() {
    return this.slides[this.currentSlide];
  }
  navigateTo(cta) {
    if (cta.routerLink) {
      window.location.href = cta.routerLink;
    } else if (cta.href) {
      window.location.href = cta.href;
    }
  }
  static {
    this.\u0275fac = function HeroComponent_Factory(t) {
      return new (t || _HeroComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroComponent, selectors: [["fv-hero"]], inputs: { slides: "slides", eyebrow: "eyebrow", lines: "lines", lead: "lead", cta1: "cta1", cta2: "cta2" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 6, consts: [[1, "hero"], [1, "hero-bg"], [1, "hero-slide"], [1, "hero-counter"], [1, "wrap"], [1, "eyebrow"], [1, "reveal"], [1, "lead"], [1, "hero-cta"], [1, "btn", "btn-primary", "btn-lg", 3, "click"], [1, "arrow"], [1, "btn-link", 3, "click"], [1, "hero-dots"], [1, "hero-progress"], [1, "fill"], [1, "hero-img", 3, "ngStyle"], [3, "click"]], template: function HeroComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275repeaterCreate(2, HeroComponent_For_3_Template, 2, 4, "div", 2, _forTrack02);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "h1");
        \u0275\u0275repeaterCreate(10, HeroComponent_For_11_Template, 4, 3, "span", 6, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p", 7);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 8)(15, "a", 9);
        \u0275\u0275listener("click", function HeroComponent_Template_a_click_15_listener() {
          return ctx.navigateTo(ctx.cta1);
        });
        \u0275\u0275text(16);
        \u0275\u0275elementStart(17, "span", 10);
        \u0275\u0275text(18, "\u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "button", 11);
        \u0275\u0275listener("click", function HeroComponent_Template_button_click_19_listener() {
          return ctx.navigateTo(ctx.cta2);
        });
        \u0275\u0275text(20);
        \u0275\u0275elementStart(21, "span", 10);
        \u0275\u0275text(22, "\u2192");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(23, "div", 12);
        \u0275\u0275repeaterCreate(24, HeroComponent_For_25_Template, 1, 2, "button", null, _forTrack02);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 13);
        \u0275\u0275element(27, "div", 14);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.slides);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" ", (ctx.currentSlide + 1).toString().padStart(2, "0"), " / ", ctx.slides.length.toString().padStart(2, "0"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.eyebrow);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.lines);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.lead);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.cta1.label, " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.cta2.label, " ");
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.slides);
      }
    }, dependencies: [NgStyle], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0;\n  min-height: 760px;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  color: #fff;\n}\n.hero[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  padding-top: 120px;\n  padding-bottom: 120px;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 24px 0 32px;\n  max-width: 18ch;\n  color: #fff;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: normal;\n  color: var(--green-light);\n}\n.hero[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  max-width: 54ch;\n  color: rgba(255, 255, 255, 0.86);\n}\n.hero[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  color: var(--green-light);\n}\n.hero[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%]::before {\n  background: var(--green-light);\n}\n.hero[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: #fff;\n  color: var(--green);\n}\n.hero[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background: #F2EFE8;\n}\n.hero[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.hero[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:hover {\n  color: var(--green-light);\n}\n.hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  overflow: hidden;\n  background: #0F1A14;\n}\n.hero-bg[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  pointer-events: none;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(8, 18, 12, 0.78) 0%,\n      rgba(8, 18, 12, 0.55) 38%,\n      rgba(8, 18, 12, 0.18) 70%,\n      rgba(8, 18, 12, 0.32) 100%),\n    linear-gradient(\n      180deg,\n      rgba(8, 18, 12, 0.4) 0%,\n      rgba(8, 18, 12, 0) 22%,\n      rgba(8, 18, 12, 0) 60%,\n      rgba(8, 18, 12, 0.55) 100%);\n}\n.hero-slide[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n  clip-path: inset(0 0 0 100%);\n  transition: clip-path 1.4s cubic-bezier(0.77, 0, 0.18, 1);\n}\n.hero-slide[data-on=on][_ngcontent-%COMP%] {\n  clip-path: inset(0 0 0 0%);\n}\n.hero-slide[data-on=prev][_ngcontent-%COMP%] {\n  clip-path: inset(0 100% 0 0);\n}\n.hero-img[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -4%;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scale(1.05);\n  transition: transform 7s linear;\n}\n.hero-slide[data-on=on][_ngcontent-%COMP%]   .hero-img[_ngcontent-%COMP%] {\n  transform: scale(1.16);\n  transition: transform 7.5s linear;\n}\n.hero[_ngcontent-%COMP%]   .reveal[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n}\n.hero[_ngcontent-%COMP%]   .reveal[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-block;\n  transform: translateY(110%) skewY(6deg);\n  opacity: 0;\n  will-change: transform;\n  animation: _ngcontent-%COMP%_heroLineUp 1.05s cubic-bezier(0.22, 1, 0.36, 1) forwards;\n}\n.hero[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  opacity: 0;\n  animation: _ngcontent-%COMP%_heroFade 0.9s ease-out 0.1s forwards;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .reveal[_ngcontent-%COMP%]:nth-child(1)    > span[_ngcontent-%COMP%] {\n  animation-delay: 0.18s;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .reveal[_ngcontent-%COMP%]:nth-child(2)    > span[_ngcontent-%COMP%] {\n  animation-delay: 0.32s;\n}\n.hero[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(16px);\n  animation: _ngcontent-%COMP%_heroFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.55s forwards;\n}\n.hero-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n  opacity: 0;\n  transform: translateY(14px);\n  animation: _ngcontent-%COMP%_heroFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.72s forwards;\n}\n.hero-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 32px;\n  margin-top: 48px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.65);\n  flex-wrap: wrap;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_heroFade 1s ease-out 1.05s forwards;\n}\n.hero-meta[_ngcontent-%COMP%]   .partners[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  align-items: center;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.85);\n  letter-spacing: 0.02em;\n}\n@keyframes _ngcontent-%COMP%_heroLineUp {\n  to {\n    transform: translateY(0) skewY(0deg);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_heroFade {\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_heroFadeUp {\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.hero-cap[_ngcontent-%COMP%] {\n  position: absolute;\n  right: var(--pad);\n  bottom: 48px;\n  z-index: 3;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  text-align: right;\n  color: #fff;\n  max-width: 320px;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_heroFadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) 1.2s forwards;\n}\n.hero-cap[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.6);\n}\n.hero-cap[_ngcontent-%COMP%]   .ttl[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 20px;\n  font-weight: 600;\n  letter-spacing: -0.02em;\n}\n.hero-cap[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero-cap[_ngcontent-%COMP%]   .live[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-self: flex-end;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--green-light);\n  font-weight: 600;\n  margin-top: 4px;\n}\n.hero-cap[_ngcontent-%COMP%]   .live[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--green-light);\n}\n.hero-dots[_ngcontent-%COMP%] {\n  position: absolute;\n  left: var(--pad);\n  bottom: 48px;\n  z-index: 3;\n  display: flex;\n  gap: 6px;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_heroFade 0.9s ease-out 1.3s forwards;\n}\n.hero-dots[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  appearance: none;\n  border: 0;\n  width: 32px;\n  height: 3px;\n  border-radius: 2px;\n  background: rgba(255, 255, 255, 0.32);\n  cursor: pointer;\n  padding: 0;\n  transition: background 0.2s, width 0.3s;\n}\n.hero-dots[_ngcontent-%COMP%]   button[data-on="1"][_ngcontent-%COMP%] {\n  background: #fff;\n  width: 48px;\n}\n.hero-counter[_ngcontent-%COMP%] {\n  position: absolute;\n  left: var(--pad);\n  top: 32px;\n  z-index: 3;\n  font-family: var(--font-display);\n  font-size: 13px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.7);\n  letter-spacing: 0.08em;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_heroFade 0.9s ease-out 1.4s forwards;\n}\n.hero-progress[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 2px;\n  z-index: 3;\n  background: rgba(255, 255, 255, 0.08);\n}\n.hero-progress[_ngcontent-%COMP%]   .fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--green-light),\n      #fff);\n  width: 0;\n  animation: _ngcontent-%COMP%_heroProg 6s linear forwards;\n}\n@keyframes _ngcontent-%COMP%_heroProg {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=hero.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroComponent, { className: "HeroComponent", filePath: "src/app/shared/components/hero/hero.component.ts", lineNumber: 20 });
})();

export {
  NavComponent,
  FooterComponent,
  HeroComponent
};
//# sourceMappingURL=chunk-GTWEZHIY.js.map
