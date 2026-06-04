import {
  ChangeDetectorRef,
  Component,
  Input,
  NgClass,
  NgStyle,
  Router,
  RouterLink,
  RouterLinkActive,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-CPO33PGZ.js";

// src/app/shared/components/nav/nav.component.ts
var _c0 = (a0) => ({ "nav": true, "dark": a0 });
var _c1 = () => ({ exact: true });
var _c2 = () => ({ exact: false });
var _forTrack0 = ($index, $item) => $item.route;
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
    this.\u0275fac = function NavComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavComponent, selectors: [["fv-nav"]], inputs: { dark: "dark", cta: "cta" }, decls: 12, vars: 5, consts: [[3, "ngClass"], [1, "nav-in"], ["routerLink", "/", 1, "brand"], ["src", "assets/images/LOGO .png", "alt", "Foovante Logo", 1, ""], [1, "nav-links"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], [1, "nav-cta"], ["routerLink", "/", 1, "btn", "btn-ghost", "btn-sm"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"]], template: function NavComponent_Template(rf, ctx) {
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
    }, dependencies: [RouterLink, RouterLinkActive, NgClass], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=nav.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavComponent, [{
    type: Component,
    args: [{ selector: "fv-nav", imports: [RouterLink, RouterLinkActive, NgClass], template: `<nav [ngClass]="{'nav': true, 'dark': dark}">
  <div class="nav-in">
    <a routerLink="/" class="brand">
      <img src="assets/images/LOGO .png" alt="Foovante Logo" class="" />
      
    </a>

    <nav class="nav-links">
      @for (link of navLinks; track link.route) {
        <a [routerLink]="link.route" routerLinkActive="active"
           [routerLinkActiveOptions]="link.route === '/' ? {exact: true} : {exact: false}">{{ link.label }}</a>
      }
    </nav>

    <div class="nav-cta">
      <a routerLink="/" class="btn btn-ghost btn-sm">Sign in</a>
      <a [routerLink]="cta.routerLink || '/About'" class="btn btn-primary btn-sm">
        {{ cta.label }}
      </a>
    </div>
  </div>
</nav>
`, styles: ["/* src/app/shared/components/nav/nav.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=nav.component.css.map */\n"] }]
  }], null, { dark: [{
    type: Input
  }], cta: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavComponent, { className: "NavComponent", filePath: "src/app/shared/components/nav/nav.component.ts", lineNumber: 17 });
})();

// src/app/shared/components/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  constructor() {
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  }
  static {
    this.\u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["fv-footer"]], decls: 84, vars: 1, consts: [[1, "wrap"], [1, "ft-grid"], ["routerLink", "/", 1, "brand", 2, "margin-bottom", "20px", "display", "inline-flex"], ["src", "assets/images/LOGO .png", "alt", "Foovante Logo", 1, ""], [2, "font-size", "14px", "color", "var(--ink-2)", "line-height", "1.6", "max-width", "28ch", "margin", "0"], [2, "font-size", "12px", "color", "var(--muted)", "margin-top", "20px"], ["routerLink", "/funders"], ["routerLink", "/projects"], ["routerLink", "/investors"], ["routerLink", "/projects", "fragment", "verify"], ["routerLink", "/projects", "fragment", "methodology"], [1, "ft-soon"], ["routerLink", "/"], ["routerLink", "/", "fragment", "team"], ["href", "mailto:press@foovante.com"], ["routerLink", "/founder-brief"], [1, "ft-bottom"], [1, "partners"]], template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer")(1, "div", 0)(2, "div", 1)(3, "div")(4, "a", 2);
        \u0275\u0275element(5, "img", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " The verification, marketplace, and capital layer for African carbon. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9, " Registration in progress \xB7 Ghana SEC \xB7 Pre-seed 2026 ");
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
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(23, "div")(24, "h5");
        \u0275\u0275text(25, "Learn");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "ul")(27, "li")(28, "a", 9);
        \u0275\u0275text(29, "How MRV works");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "li")(31, "a", 10);
        \u0275\u0275text(32, "Methodology library");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "li")(34, "span", 11);
        \u0275\u0275text(35, "Blog \xB7 coming soon");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(36, "div")(37, "h5");
        \u0275\u0275text(38, "Company");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "ul")(40, "li")(41, "a", 12);
        \u0275\u0275text(42, "About");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "li")(44, "a", 13);
        \u0275\u0275text(45, "Team");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "li")(47, "a", 14);
        \u0275\u0275text(48, "Press");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "li")(50, "a", 15);
        \u0275\u0275text(51, "Contact");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(52, "div")(53, "h5");
        \u0275\u0275text(54, "Legal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "ul")(56, "li")(57, "span", 11);
        \u0275\u0275text(58, "Privacy policy \xB7 coming soon");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "li")(60, "span", 11);
        \u0275\u0275text(61, "Terms of service \xB7 coming soon");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "li")(63, "span", 11);
        \u0275\u0275text(64, "Risk disclosure \xB7 coming soon");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "li")(66, "span", 11);
        \u0275\u0275text(67, "Cookie policy \xB7 coming soon");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(68, "div", 16)(69, "div");
        \u0275\u0275text(70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "div", 17)(72, "span");
        \u0275\u0275text(73, "LinkedIn");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "span");
        \u0275\u0275text(75, "Twitter");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "span");
        \u0275\u0275text(77, "Instagram");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "span");
        \u0275\u0275text(79, "Facebook");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "span");
        \u0275\u0275text(81, "YouTube");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "span");
        \u0275\u0275text(83, "TikTok");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(70);
        \u0275\u0275textInterpolate1("\xA9 ", ctx.currentYear, " Foovante Global Ltd. All rights reserved.");
      }
    }, dependencies: [RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.ft-soon[_ngcontent-%COMP%] {\n  color: var(--muted);\n  font-size: 13px;\n  font-style: italic;\n  cursor: default;\n  opacity: 0.7;\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "fv-footer", imports: [RouterLink], template: '<footer>\n  <div class="wrap">\n    <div class="ft-grid">\n      <div>\n        <a routerLink="/" class="brand" style="margin-bottom:20px;display:inline-flex">\n          <img src="assets/images/LOGO .png" alt="Foovante Logo" class="" />\n        </a>\n        <p style="font-size:14px;color:var(--ink-2);line-height:1.6;max-width:28ch;margin:0">\n          The verification, marketplace, and capital layer for African carbon.\n        </p>\n        <p style="font-size:12px;color:var(--muted);margin-top:20px">\n          Registration in progress \xB7 Ghana SEC \xB7 Pre-seed 2026\n        </p>\n      </div>\n      <div>\n        <h5>Platform</h5>\n        <ul>\n          <li><a routerLink="/funders">For Funders</a></li>\n          <li><a routerLink="/projects">For Projects</a></li>\n          <li><a routerLink="/investors">For Investors</a></li>\n        \n        </ul>\n      </div>\n      <div>\n        <h5>Learn</h5>\n        <ul>\n          <li><a routerLink="/projects" fragment="verify">How MRV works</a></li>\n          <li><a routerLink="/projects" fragment="methodology">Methodology library</a></li>\n          <li><span class="ft-soon">Blog \xB7 coming soon</span></li>\n        </ul>\n      </div>\n      <div>\n        <h5>Company</h5>\n        <ul>\n          <li><a routerLink="/">About</a></li>\n          <li><a routerLink="/" fragment="team">Team</a></li>\n          <li><a href="mailto:press@foovante.com">Press</a></li>\n          <li><a routerLink="/founder-brief">Contact</a></li>\n        </ul>\n      </div>\n      <div>\n        <h5>Legal</h5>\n        <ul>\n          <li><span class="ft-soon">Privacy policy \xB7 coming soon</span></li>\n          <li><span class="ft-soon">Terms of service \xB7 coming soon</span></li>\n          <li><span class="ft-soon">Risk disclosure \xB7 coming soon</span></li>\n          <li><span class="ft-soon">Cookie policy \xB7 coming soon</span></li>\n        </ul>\n      </div>\n    </div>\n\n    <div class="ft-bottom">\n      <div>\xA9 {{ currentYear }} Foovante Global Ltd. All rights reserved.</div>\n      <div class="partners">\n        <span>LinkedIn</span>\n        <span>Twitter</span>\n        <span>Instagram</span>\n        <span>Facebook</span>\n        <span>YouTube</span>\n        <span>TikTok</span>\n\n      </div>\n    </div>\n  </div>\n</footer>\n', styles: ["/* src/app/shared/components/footer/footer.component.scss */\n:host {\n  display: block;\n}\n.ft-soon {\n  color: var(--muted);\n  font-size: 13px;\n  font-style: italic;\n  cursor: default;\n  opacity: 0.7;\n}\n/*# sourceMappingURL=footer.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/shared/components/footer/footer.component.ts", lineNumber: 10 });
})();

// src/app/shared/components/hero/hero.component.ts
var _c02 = (a0) => ({ "background-image": a0 });
var _forTrack02 = ($index, $item) => $item.img;
function HeroComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    const \u0275$index_5_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-on", ctx_r2.getSlideState(\u0275$index_5_r2) || null);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(2, _c02, "url(" + slide_r1.img + ")"));
  }
}
function HeroComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r4 = ctx.$implicit;
    const \u0275$index_20_r5 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275styleProp("animation-delay", 0.18 + \u0275$index_20_r5 * 0.14 + "s");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r4);
  }
}
function HeroComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function HeroComponent_For_25_Template_button_click_0_listener() {
      const \u0275$index_45_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goTo(\u0275$index_45_r7));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_45_r7 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-on", \u0275$index_45_r7 === ctx_r2.currentSlide ? "1" : null)("aria-label", "Go to slide " + (\u0275$index_45_r7 + 1));
  }
}
var HeroComponent = class _HeroComponent {
  constructor(cdr, router) {
    this.cdr = cdr;
    this.router = router;
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
      this.router.navigate([cta.routerLink]);
    } else if (cta.href) {
      window.location.href = cta.href;
    }
  }
  static {
    this.\u0275fac = function HeroComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeroComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroComponent, selectors: [["fv-hero"]], inputs: { slides: "slides", eyebrow: "eyebrow", lines: "lines", lead: "lead", cta1: "cta1", cta2: "cta2" }, decls: 28, vars: 6, consts: [[1, "hero"], [1, "hero-bg"], [1, "hero-slide"], [1, "hero-counter"], [1, "wrap"], [1, "eyebrow"], [1, "reveal"], [1, "lead"], [1, "hero-cta"], [1, "btn", "btn-primary", "btn-lg", 3, "click"], [1, "arrow"], [1, "btn-link", 3, "click"], [1, "hero-dots"], [1, "hero-progress"], [1, "fill"], [1, "hero-img", 3, "ngStyle"], [3, "click"]], template: function HeroComponent_Template(rf, ctx) {
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
        \u0275\u0275repeaterCreate(10, HeroComponent_For_11_Template, 3, 3, "span", 6, \u0275\u0275repeaterTrackByIdentity);
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
    }, dependencies: [NgStyle], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0;\n  min-height: 760px;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  color: #fff;\n}\n.hero[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  padding-top: 120px;\n  padding-bottom: 120px;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 24px 0 32px;\n  max-width: 18ch;\n  color: #fff;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: normal;\n  color: var(--green-light);\n}\n.hero[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  max-width: 54ch;\n  color: rgba(255, 255, 255, 0.86);\n}\n.hero[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  color: var(--green-light);\n}\n.hero[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%]::before {\n  background: var(--green-light);\n}\n.hero[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: #fff;\n  color: var(--green);\n}\n.hero[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background: #F2EFE8;\n}\n.hero[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.hero[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:hover {\n  color: var(--green-light);\n}\n.hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  overflow: hidden;\n  background: #0F1A14;\n}\n.hero-bg[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  pointer-events: none;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(8, 18, 12, 0.78) 0%,\n      rgba(8, 18, 12, 0.55) 38%,\n      rgba(8, 18, 12, 0.18) 70%,\n      rgba(8, 18, 12, 0.32) 100%),\n    linear-gradient(\n      180deg,\n      rgba(8, 18, 12, 0.4) 0%,\n      rgba(8, 18, 12, 0) 22%,\n      rgba(8, 18, 12, 0) 60%,\n      rgba(8, 18, 12, 0.55) 100%);\n}\n.hero-slide[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n  clip-path: inset(0 0 0 100%);\n  transition: clip-path 1.4s cubic-bezier(0.77, 0, 0.18, 1);\n}\n.hero-slide[data-on=on][_ngcontent-%COMP%] {\n  clip-path: inset(0 0 0 0%);\n}\n.hero-slide[data-on=prev][_ngcontent-%COMP%] {\n  clip-path: inset(0 100% 0 0);\n}\n.hero-img[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -4%;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scale(1.05);\n  transition: transform 7s linear;\n}\n.hero-slide[data-on=on][_ngcontent-%COMP%]   .hero-img[_ngcontent-%COMP%] {\n  transform: scale(1.16);\n  transition: transform 7.5s linear;\n}\n.hero[_ngcontent-%COMP%]   .reveal[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n}\n.hero[_ngcontent-%COMP%]   .reveal[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-block;\n  transform: translateY(110%) skewY(6deg);\n  opacity: 0;\n  will-change: transform;\n  animation: _ngcontent-%COMP%_heroLineUp 1.05s cubic-bezier(0.22, 1, 0.36, 1) forwards;\n}\n.hero[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  opacity: 0;\n  animation: _ngcontent-%COMP%_heroFade 0.9s ease-out 0.1s forwards;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .reveal[_ngcontent-%COMP%]:nth-child(1)    > span[_ngcontent-%COMP%] {\n  animation-delay: 0.18s;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .reveal[_ngcontent-%COMP%]:nth-child(2)    > span[_ngcontent-%COMP%] {\n  animation-delay: 0.32s;\n}\n.hero[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(16px);\n  animation: _ngcontent-%COMP%_heroFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.55s forwards;\n}\n.hero-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n  opacity: 0;\n  transform: translateY(14px);\n  animation: _ngcontent-%COMP%_heroFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.72s forwards;\n}\n.hero-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 32px;\n  margin-top: 48px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.65);\n  flex-wrap: wrap;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_heroFade 1s ease-out 1.05s forwards;\n}\n.hero-meta[_ngcontent-%COMP%]   .partners[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  align-items: center;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.85);\n  letter-spacing: 0.02em;\n}\n@keyframes _ngcontent-%COMP%_heroLineUp {\n  to {\n    transform: translateY(0) skewY(0deg);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_heroFade {\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_heroFadeUp {\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.hero-cap[_ngcontent-%COMP%] {\n  position: absolute;\n  right: var(--pad);\n  bottom: 48px;\n  z-index: 3;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  text-align: right;\n  color: #fff;\n  max-width: 320px;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_heroFadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) 1.2s forwards;\n}\n.hero-cap[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.6);\n}\n.hero-cap[_ngcontent-%COMP%]   .ttl[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 20px;\n  font-weight: 600;\n  letter-spacing: -0.02em;\n}\n.hero-cap[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero-cap[_ngcontent-%COMP%]   .live[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-self: flex-end;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--green-light);\n  font-weight: 600;\n  margin-top: 4px;\n}\n.hero-cap[_ngcontent-%COMP%]   .live[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--green-light);\n}\n.hero-dots[_ngcontent-%COMP%] {\n  position: absolute;\n  left: var(--pad);\n  bottom: 48px;\n  z-index: 3;\n  display: flex;\n  gap: 6px;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_heroFade 0.9s ease-out 1.3s forwards;\n}\n.hero-dots[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  appearance: none;\n  border: 0;\n  width: 32px;\n  height: 3px;\n  border-radius: 2px;\n  background: rgba(255, 255, 255, 0.32);\n  cursor: pointer;\n  padding: 0;\n  transition: background 0.2s, width 0.3s;\n}\n.hero-dots[_ngcontent-%COMP%]   button[data-on="1"][_ngcontent-%COMP%] {\n  background: #fff;\n  width: 48px;\n}\n.hero-counter[_ngcontent-%COMP%] {\n  position: absolute;\n  left: var(--pad);\n  top: 32px;\n  z-index: 3;\n  font-family: var(--font-display);\n  font-size: 13px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.7);\n  letter-spacing: 0.08em;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_heroFade 0.9s ease-out 1.4s forwards;\n}\n.hero-progress[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 2px;\n  z-index: 3;\n  background: rgba(255, 255, 255, 0.08);\n}\n.hero-progress[_ngcontent-%COMP%]   .fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--green-light),\n      #fff);\n  width: 0;\n  animation: _ngcontent-%COMP%_heroProg 6s linear forwards;\n}\n@keyframes _ngcontent-%COMP%_heroProg {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n@media (max-width: 640px) {\n  .hero[_ngcontent-%COMP%] {\n    min-height: 600px;\n  }\n  .hero[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n    padding-top: 80px;\n    padding-bottom: 72px;\n  }\n  .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 38px;\n    max-width: none;\n  }\n  .hero[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .hero-cap[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hero-counter[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hero-dots[_ngcontent-%COMP%] {\n    bottom: 20px;\n  }\n  .hero-cta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n}\n/*# sourceMappingURL=hero.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroComponent, [{
    type: Component,
    args: [{ selector: "fv-hero", imports: [NgStyle], template: `<section class="hero">
  <!-- Background Slideshow -->
  <div class="hero-bg">
    @for (slide of slides; track slide.img; let i = $index) {
      <div
        class="hero-slide"
        [attr.data-on]="getSlideState(i) || null"
      >
        <div
          class="hero-img"
          [ngStyle]="{'background-image': 'url(' + slide.img + ')'}"
        ></div>
      </div>
    }
  </div>

  <!-- Counter -->
  <div class="hero-counter">
    {{ (currentSlide + 1).toString().padStart(2, '0') }} / {{ slides.length.toString().padStart(2, '0') }}
  </div>

  <!-- Main Content -->
  <div class="wrap">
    <div class="eyebrow">{{ eyebrow }}</div>

    <h1>
      @for (line of lines; track line; let i = $index) {
        <span class="reveal">
          <span [style.animation-delay]="(0.18 + i * 0.14) + 's'">{{ line }}</span>
        </span>
      }
    </h1>

    <p class="lead">{{ lead }}</p>

    <div class="hero-cta">
      <a class="btn btn-primary btn-lg" (click)="navigateTo(cta1)">
        {{ cta1.label }} <span class="arrow">\u2192</span>
      </a>
      <button class="btn-link" (click)="navigateTo(cta2)">
        {{ cta2.label }} <span class="arrow">\u2192</span>
      </button>
    </div>


  </div>

  

  <!-- Dots Navigation -->
  <div class="hero-dots">
    @for (slide of slides; track slide.img; let i = $index) {
      <button
        [attr.data-on]="i === currentSlide ? '1' : null"
        (click)="goTo(i)"
        [attr.aria-label]="'Go to slide ' + (i + 1)"
      ></button>
    }
  </div>

  <!-- Progress Bar -->
  <div class="hero-progress">
    <div class="fill"></div>
  </div>
</section>
`, styles: ['/* src/app/shared/components/hero/hero.component.scss */\n:host {\n  display: block;\n}\n.hero {\n  position: relative;\n  padding: 0;\n  min-height: 760px;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  color: #fff;\n}\n.hero .wrap {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  padding-top: 120px;\n  padding-bottom: 120px;\n}\n.hero h1 {\n  margin: 24px 0 32px;\n  max-width: 18ch;\n  color: #fff;\n}\n.hero h1 em {\n  font-style: normal;\n  color: var(--green-light);\n}\n.hero .lead {\n  margin-bottom: 40px;\n  max-width: 54ch;\n  color: rgba(255, 255, 255, 0.86);\n}\n.hero .eyebrow {\n  color: var(--green-light);\n}\n.hero .eyebrow::before {\n  background: var(--green-light);\n}\n.hero .btn-primary {\n  background: #fff;\n  color: var(--green);\n}\n.hero .btn-primary:hover {\n  background: #F2EFE8;\n}\n.hero .btn-link {\n  color: #fff;\n}\n.hero .btn-link:hover {\n  color: var(--green-light);\n}\n.hero-bg {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  overflow: hidden;\n  background: #0F1A14;\n}\n.hero-bg::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  pointer-events: none;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(8, 18, 12, 0.78) 0%,\n      rgba(8, 18, 12, 0.55) 38%,\n      rgba(8, 18, 12, 0.18) 70%,\n      rgba(8, 18, 12, 0.32) 100%),\n    linear-gradient(\n      180deg,\n      rgba(8, 18, 12, 0.4) 0%,\n      rgba(8, 18, 12, 0) 22%,\n      rgba(8, 18, 12, 0) 60%,\n      rgba(8, 18, 12, 0.55) 100%);\n}\n.hero-slide {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n  clip-path: inset(0 0 0 100%);\n  transition: clip-path 1.4s cubic-bezier(0.77, 0, 0.18, 1);\n}\n.hero-slide[data-on=on] {\n  clip-path: inset(0 0 0 0%);\n}\n.hero-slide[data-on=prev] {\n  clip-path: inset(0 100% 0 0);\n}\n.hero-img {\n  position: absolute;\n  inset: -4%;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scale(1.05);\n  transition: transform 7s linear;\n}\n.hero-slide[data-on=on] .hero-img {\n  transform: scale(1.16);\n  transition: transform 7.5s linear;\n}\n.hero .reveal {\n  display: block;\n  overflow: hidden;\n}\n.hero .reveal > span {\n  display: inline-block;\n  transform: translateY(110%) skewY(6deg);\n  opacity: 0;\n  will-change: transform;\n  animation: heroLineUp 1.05s cubic-bezier(0.22, 1, 0.36, 1) forwards;\n}\n.hero .eyebrow {\n  opacity: 0;\n  animation: heroFade 0.9s ease-out 0.1s forwards;\n}\n.hero h1 .reveal:nth-child(1) > span {\n  animation-delay: 0.18s;\n}\n.hero h1 .reveal:nth-child(2) > span {\n  animation-delay: 0.32s;\n}\n.hero .lead {\n  opacity: 0;\n  transform: translateY(16px);\n  animation: heroFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.55s forwards;\n}\n.hero-cta {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n  opacity: 0;\n  transform: translateY(14px);\n  animation: heroFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.72s forwards;\n}\n.hero-meta {\n  display: flex;\n  align-items: center;\n  gap: 32px;\n  margin-top: 48px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.65);\n  flex-wrap: wrap;\n  opacity: 0;\n  animation: heroFade 1s ease-out 1.05s forwards;\n}\n.hero-meta .partners {\n  display: flex;\n  gap: 24px;\n  align-items: center;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.85);\n  letter-spacing: 0.02em;\n}\n@keyframes heroLineUp {\n  to {\n    transform: translateY(0) skewY(0deg);\n    opacity: 1;\n  }\n}\n@keyframes heroFade {\n  to {\n    opacity: 1;\n  }\n}\n@keyframes heroFadeUp {\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.hero-cap {\n  position: absolute;\n  right: var(--pad);\n  bottom: 48px;\n  z-index: 3;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  text-align: right;\n  color: #fff;\n  max-width: 320px;\n  opacity: 0;\n  animation: heroFadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) 1.2s forwards;\n}\n.hero-cap .lbl {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.6);\n}\n.hero-cap .ttl {\n  font-family: var(--font-display);\n  font-size: 20px;\n  font-weight: 600;\n  letter-spacing: -0.02em;\n}\n.hero-cap .sub {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero-cap .live {\n  display: inline-flex;\n  align-self: flex-end;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--green-light);\n  font-weight: 600;\n  margin-top: 4px;\n}\n.hero-cap .live i {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--green-light);\n}\n.hero-dots {\n  position: absolute;\n  left: var(--pad);\n  bottom: 48px;\n  z-index: 3;\n  display: flex;\n  gap: 6px;\n  opacity: 0;\n  animation: heroFade 0.9s ease-out 1.3s forwards;\n}\n.hero-dots button {\n  appearance: none;\n  border: 0;\n  width: 32px;\n  height: 3px;\n  border-radius: 2px;\n  background: rgba(255, 255, 255, 0.32);\n  cursor: pointer;\n  padding: 0;\n  transition: background 0.2s, width 0.3s;\n}\n.hero-dots button[data-on="1"] {\n  background: #fff;\n  width: 48px;\n}\n.hero-counter {\n  position: absolute;\n  left: var(--pad);\n  top: 32px;\n  z-index: 3;\n  font-family: var(--font-display);\n  font-size: 13px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.7);\n  letter-spacing: 0.08em;\n  opacity: 0;\n  animation: heroFade 0.9s ease-out 1.4s forwards;\n}\n.hero-progress {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 2px;\n  z-index: 3;\n  background: rgba(255, 255, 255, 0.08);\n}\n.hero-progress .fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--green-light),\n      #fff);\n  width: 0;\n  animation: heroProg 6s linear forwards;\n}\n@keyframes heroProg {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n@media (max-width: 640px) {\n  .hero {\n    min-height: 600px;\n  }\n  .hero .wrap {\n    padding-top: 80px;\n    padding-bottom: 72px;\n  }\n  .hero h1 {\n    font-size: 38px;\n    max-width: none;\n  }\n  .hero .lead {\n    font-size: 16px;\n  }\n  .hero-cap {\n    display: none;\n  }\n  .hero-counter {\n    display: none;\n  }\n  .hero-dots {\n    bottom: 20px;\n  }\n  .hero-cta {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n}\n/*# sourceMappingURL=hero.component.css.map */\n'] }]
  }], () => [{ type: ChangeDetectorRef }, { type: Router }], { slides: [{
    type: Input
  }], eyebrow: [{
    type: Input
  }], lines: [{
    type: Input
  }], lead: [{
    type: Input
  }], cta1: [{
    type: Input
  }], cta2: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroComponent, { className: "HeroComponent", filePath: "src/app/shared/components/hero/hero.component.ts", lineNumber: 20 });
})();

export {
  NavComponent,
  FooterComponent,
  HeroComponent
};
//# sourceMappingURL=chunk-J4Q2IEXS.js.map
