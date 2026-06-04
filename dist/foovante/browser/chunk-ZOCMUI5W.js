import {
  FooterComponent,
  HeroComponent,
  NavComponent
} from "./chunk-J4Q2IEXS.js";
import {
  Component,
  RouterLink,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CPO33PGZ.js";
import "./chunk-3OV72XIM.js";

// src/app/features/home/home.component.ts
var _c0 = () => ({ label: "Browse projects", routerLink: "/funders" });
var _c1 = () => ["High-integrity carbon credits.", "Across energy, forests, and blue carbon."];
var _c2 = () => ({ label: "Apply to list a project", routerLink: "/projects" });
var _forTrack0 = ($index, $item) => $item.tag;
var _forTrack1 = ($index, $item) => $item.h;
function HomeComponent_For_34_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r1);
  }
}
function HomeComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275element(1, "div", 24);
    \u0275\u0275elementStart(2, "div", 25)(3, "span", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 27);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ul", 28);
    \u0275\u0275repeaterCreate(10, HomeComponent_For_34_For_11_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 29);
    \u0275\u0275text(13);
    \u0275\u0275elementStart(14, "span", 21);
    \u0275\u0275text(15, "\u2192");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", p_r2.route);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(" + p_r2.photo + ")");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r2.tag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.h);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.lead);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(p_r2.features);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", p_r2.open, " ");
  }
}
function HomeComponent_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r3.h);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r3.p);
  }
}
var HomeComponent = class _HomeComponent {
  constructor() {
    this.heroSlides = [
      {
        img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=80&auto=format&fit=crop",
        lbl: "Forestry \xB7 REDD+",
        ttl: "Kakum Forest Corridor",
        sub: "Central Region, Ghana \xB7 Verra VCS",
        live: "Live MRV \xB7 24,200 tCO\u2082e/yr"
      },
      {
        img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1800&q=80&auto=format&fit=crop",
        lbl: "Renewable energy",
        ttl: "Turkana Solar Microgrid",
        sub: "Lodwar, Kenya \xB7 Verra VCS",
        live: "Live MRV \xB7 9,800 tCO\u2082e/yr"
      },
      {
        img: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1800&q=80&auto=format&fit=crop",
        lbl: "Blue carbon",
        ttl: "Volta Estuary Mangroves",
        sub: "Keta, Ghana \xB7 Plan Vivo",
        live: "Live MRV \xB7 5,400 tCO\u2082e/yr"
      },
      {
        img: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=1800&q=80&auto=format&fit=crop",
        lbl: "Drylands restoration",
        ttl: "Sahel Cookstoves",
        sub: "Tamale, Northern Ghana \xB7 Gold Standard",
        live: "Live MRV \xB7 18,200 tCO\u2082e/yr"
      },
      {
        img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&q=80&auto=format&fit=crop",
        lbl: "Agroforestry",
        ttl: "Akagera Co-op",
        sub: "Eastern Province, Rwanda \xB7 Verra VCS",
        live: "Live MRV \xB7 23,100 tCO\u2082e/yr"
      }
    ];
    this.picks = [
      {
        tag: "For Funders",
        h: "Pre-purchase verified African carbon credits.",
        lead: "Foovante connects capital to high-integrity African carbon projects. Pre-purchase credits at fixed prices with a full audit trail per tonne.",
        features: ["Credit pre-purchase at fixed prices", "Full audit trail per tonne", "Satellite-verified baselines"],
        open: "Browse projects",
        route: "/funders",
        photo: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&q=80&auto=format&fit=crop"
      },
      {
        tag: "For Projects",
        h: "Turn your land work into real climate finance.",
        lead: "African renewable-energy, agriculture, and forestry projects: register, baseline, verify, and list \u2014 without losing a large share to middlemen.",
        features: ["~12 weeks to first issuance", "Competitive revenue share to project", "Sentinel-2 baselining included"],
        open: "Apply to list your project",
        route: "/projects",
        photo: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&q=80&auto=format&fit=crop"
      },
      {
        tag: "For Investors",
        h: "Back the verification layer of African carbon.",
        lead: "We're raising the company building the rails for Africa's carbon markets. Pre-seed round open to thesis-aligned investors.",
        features: ["3 live projects \xB7 baseline phase", "8,100 ha under MRV by Q2 2026", "Pre-seed round open"],
        open: "Request the data room",
        route: "/investors",
        photo: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1400&q=80&auto=format&fit=crop"
      }
    ];
    this.values = [
      {
        h: "Continuous MRV, not annual paperwork",
        p: "Every project polygon is monitored every 5 days at 10m resolution via Sentinel-2. Automatically, not on a clipboard."
      },
      {
        h: "Most of the money goes to the project",
        p: "We are designing our fee structure so the majority of every credit sale flows back to project work. Industry average is around 40%; we intend to do significantly better."
      },
      {
        h: "Built on the continent",
        p: "Headquartered in Accra, operating in Ghana today with expansion planned across the continent. No flying experts in from Geneva."
      },
      {
        h: "Standards-anchored",
        p: "Every credit on Foovante is issued under Verra VCS, Gold Standard, or Plan Vivo, and serialised on-chain for traceability."
      }
    ];
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["fv-home"]], decls: 67, vars: 10, consts: [[3, "dark", "cta"], ["eyebrow", "African carbon markets, built right", "lead", "Foovante is the verification, marketplace, and capital layer for African carbon. Whether you fund projects, run one, or want to invest in the company: start here.", 3, "slides", "lines", "cta1", "cta2"], [1, "live-band"], [1, "wrap"], [1, "live-strip"], [1, "picker"], [1, "sec-head"], [1, "eyebrow"], [2, "margin-top", "24px"], [1, "right"], [1, "picker-grid"], [1, "pick", 3, "routerLink"], [1, "values"], [1, "wrap", "values-grid"], [1, "lead", 2, "margin-top", "24px"], [1, "values-list"], [1, "v-item"], [1, "cta"], [1, "cta-in"], [1, "cta-actions"], ["routerLink", "/funders", 1, "btn", "btn-primary", "btn-lg"], [1, "arrow"], ["routerLink", "/projects", 1, "btn", "btn-ghost", "btn-lg"], ["routerLink", "/investors", 1, "btn", "btn-ghost", "btn-lg"], [1, "photo"], [1, "body"], [1, "tag"], [1, "pick-lead"], [1, "features"], [1, "open"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "fv-nav", 0)(1, "fv-hero", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div")(6, "strong");
        \u0275\u0275text(7, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275text(8, " active projects \xB7 baseline phase");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div")(10, "strong");
        \u0275\u0275text(11, "8,100 ha");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " under MRV by Q2 2026");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div")(14, "strong");
        \u0275\u0275text(15, "10");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, " smallholder programs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div")(18, "strong");
        \u0275\u0275text(19, "Accra, Ghana");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, " \xB7 operational");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(21, "section", 5)(22, "div", 3)(23, "div", 6)(24, "div")(25, "div", 7);
        \u0275\u0275text(26, "Three audiences. One platform.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "h2", 8);
        \u0275\u0275text(28, "Tell us who you are.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 9)(30, "p");
        \u0275\u0275text(31, "Foovante serves the people who fund carbon work, the people who run it, and the people backing the company itself. Pick the door that fits.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 10);
        \u0275\u0275repeaterCreate(33, HomeComponent_For_34_Template, 16, 7, "a", 11, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "section", 12)(36, "div", 13)(37, "div")(38, "div", 7);
        \u0275\u0275text(39, "Why Foovante");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "h2", 8);
        \u0275\u0275text(41, "African carbon, run by people on the ground.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "p", 14);
        \u0275\u0275text(43, " The carbon market is broken because verification is broken. We're rebuilding it from Accra, with satellites, soil samples, and local agents, so credits issued in Africa stand up to any scrutiny, anywhere. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 15);
        \u0275\u0275repeaterCreate(45, HomeComponent_For_46_Template, 5, 2, "div", 16, _forTrack1);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "section", 17)(48, "div", 18)(49, "h2");
        \u0275\u0275text(50, "One platform. Three doors. The same goal.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "p");
        \u0275\u0275text(52, "Pick the door that fits, and start moving real climate capital into real African projects, with real verification behind it.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 19)(54, "a", 20);
        \u0275\u0275text(55, "For Funders ");
        \u0275\u0275elementStart(56, "span", 21);
        \u0275\u0275text(57, "\u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "a", 22);
        \u0275\u0275text(59, "For Projects ");
        \u0275\u0275elementStart(60, "span", 21);
        \u0275\u0275text(61, "\u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "a", 23);
        \u0275\u0275text(63, "For Investors ");
        \u0275\u0275elementStart(64, "span", 21);
        \u0275\u0275text(65, "\u2192");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275element(66, "fv-footer");
      }
      if (rf & 2) {
        \u0275\u0275property("dark", true)("cta", \u0275\u0275pureFunction0(6, _c0));
        \u0275\u0275advance();
        \u0275\u0275property("slides", ctx.heroSlides)("lines", \u0275\u0275pureFunction0(7, _c1))("cta1", \u0275\u0275pureFunction0(8, _c0))("cta2", \u0275\u0275pureFunction0(9, _c2));
        \u0275\u0275advance(32);
        \u0275\u0275repeater(ctx.picks);
        \u0275\u0275advance(12);
        \u0275\u0275repeater(ctx.values);
      }
    }, dependencies: [NavComponent, FooterComponent, HeroComponent, RouterLink], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.live-band[_ngcontent-%COMP%] {\n  padding: 32px 0;\n  border-bottom: 1px solid var(--line-soft);\n  background: var(--paper);\n}\n.live-strip[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 48px;\n  align-items: center;\n  font-size: 14px;\n  color: var(--ink-2);\n  font-weight: 500;\n  flex-wrap: wrap;\n}\n.live-strip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-weight: 700;\n  color: var(--ink);\n  font-size: 16px;\n  margin-right: 4px;\n}\n.picker[_ngcontent-%COMP%] {\n  padding: 120px 0;\n}\n.picker-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.pick[_ngcontent-%COMP%] {\n  position: relative;\n  border: 1px solid var(--line);\n  border-radius: 20px;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  min-height: 480px;\n  overflow: hidden;\n  cursor: pointer;\n  background: var(--paper);\n  transition:\n    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),\n    box-shadow 0.35s,\n    border-color 0.35s;\n}\n.pick[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 22px 40px -28px rgba(0, 0, 0, 0.25);\n  border-color: var(--ink-2);\n}\n.pick[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-size: cover;\n  background-position: center;\n  opacity: 0;\n  transition: opacity 0.4s ease;\n}\n.pick[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(8, 18, 12, 0.35) 0%,\n      rgba(8, 18, 12, 0.85) 100%);\n}\n.pick[_ngcontent-%COMP%]:hover   .photo[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.pick[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  height: 100%;\n  transition: color 0.35s;\n}\n.pick[_ngcontent-%COMP%]:hover   .body[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.pick[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-self: flex-start;\n  padding: 6px 12px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--green);\n  background: var(--sage-2);\n  border-radius: 99px;\n  transition: background 0.35s, color 0.35s;\n}\n.pick[_ngcontent-%COMP%]:hover   .tag[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.pick[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 36px;\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  line-height: 1.02;\n  margin: 0;\n  color: var(--ink);\n  transition: color 0.35s;\n}\n.pick[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.pick[_ngcontent-%COMP%]   .pick-lead[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.55;\n  color: var(--ink-2);\n  margin: 0;\n  flex: 1;\n  transition: color 0.35s;\n}\n.pick[_ngcontent-%COMP%]:hover   .pick-lead[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n}\n.pick[_ngcontent-%COMP%]   .features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--ink-2);\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  transition: color 0.35s;\n}\n.pick[_ngcontent-%COMP%]   .features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pick[_ngcontent-%COMP%]   .features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 14px;\n  height: 1px;\n  background: var(--green);\n  flex-shrink: 0;\n  transition: background 0.35s;\n}\n.pick[_ngcontent-%COMP%]:hover   .features[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.78);\n}\n.pick[_ngcontent-%COMP%]:hover   .features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  background: var(--green-light);\n}\n.pick[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  color: var(--green);\n  margin-top: auto;\n  transition: color 0.35s;\n}\n.pick[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  transition: transform 0.25s ease;\n}\n.pick[_ngcontent-%COMP%]:hover   .open[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.pick[_ngcontent-%COMP%]:hover   .open[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.values[_ngcontent-%COMP%] {\n  padding: 120px 0;\n}\n.values-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 80px;\n  align-items: start;\n}\n.values-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  border-top: 1px solid var(--line);\n}\n.v-item[_ngcontent-%COMP%] {\n  padding: 28px 0;\n  border-bottom: 1px solid var(--line);\n}\n.v-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 17px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  margin: 0 0 8px;\n}\n.v-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ink-2);\n  margin: 0;\n  line-height: 1.6;\n}\n@media (max-width: 980px) {\n  .picker-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .values-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 48px;\n  }\n}\n@media (max-width: 640px) {\n  .pick[_ngcontent-%COMP%] {\n    min-height: 380px;\n    padding: 28px;\n  }\n  .pick[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .live-strip[_ngcontent-%COMP%] {\n    gap: 20px;\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "fv-home", imports: [NavComponent, FooterComponent, HeroComponent, RouterLink], template: `<fv-nav [dark]="true" [cta]="{label: 'Browse projects', routerLink: '/funders'}"></fv-nav>

<fv-hero
  [slides]="heroSlides"
  eyebrow="African carbon markets, built right"
  [lines]="['High-integrity carbon credits.', 'Across energy, forests, and blue carbon.']"
  lead="Foovante is the verification, marketplace, and capital layer for African carbon. Whether you fund projects, run one, or want to invest in the company: start here."
  [cta1]="{label: 'Browse projects', routerLink: '/funders'}"
  [cta2]="{label: 'Apply to list a project', routerLink: '/projects'}"
></fv-hero>

<!-- Live Band -->
<div class="live-band">
  <div class="wrap">
    <div class="live-strip">
      <div><strong>3</strong> active projects \xB7 baseline phase</div>
      <div><strong>8,100 ha</strong> under MRV by Q2 2026</div>
      <div><strong>10</strong> smallholder programs</div>
      <div><strong>Accra, Ghana</strong> \xB7 operational</div>
    </div>
  </div>
</div>

<!-- Picker Section -->
<section class="picker">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <div class="eyebrow">Three audiences. One platform.</div>
        <h2 style="margin-top:24px">Tell us who you are.</h2>
      </div>
      <div class="right">
        <p>Foovante serves the people who fund carbon work, the people who run it, and the people backing the company itself. Pick the door that fits.</p>
      </div>
    </div>

    <div class="picker-grid">
      @for (p of picks; track p.tag) {
        <a [routerLink]="p.route" class="pick">
          <div class="photo" [style.background-image]="'url(' + p.photo + ')'"></div>
          <div class="body">
            <span class="tag">{{ p.tag }}</span>
            <h3>{{ p.h }}</h3>
            <p class="pick-lead">{{ p.lead }}</p>
            <ul class="features">
              @for (f of p.features; track f) {
                <li>{{ f }}</li>
              }
            </ul>
            <span class="open">{{ p.open }} <span class="arrow">\u2192</span></span>
          </div>
        </a>
      }
    </div>
  </div>
</section>

<!-- Values Section -->
<section class="values">
  <div class="wrap values-grid">
    <div>
      <div class="eyebrow">Why Foovante</div>
      <h2 style="margin-top:24px">African carbon, run by people on the ground.</h2>
      <p class="lead" style="margin-top:24px">
        The carbon market is broken because verification is broken. We're rebuilding it from Accra, with satellites, soil samples, and local agents, so credits issued in Africa stand up to any scrutiny, anywhere.
      </p>
    </div>
    <div class="values-list">
      @for (v of values; track v.h) {
        <div class="v-item">
          <h4>{{ v.h }}</h4>
          <p>{{ v.p }}</p>
        </div>
      }
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="cta">
  <div class="cta-in">
    <h2>One platform. Three doors. The same goal.</h2>
    <p>Pick the door that fits, and start moving real climate capital into real African projects, with real verification behind it.</p>
    <div class="cta-actions">
      <a routerLink="/funders" class="btn btn-primary btn-lg">For Funders <span class="arrow">\u2192</span></a>
      <a routerLink="/projects" class="btn btn-ghost btn-lg">For Projects <span class="arrow">\u2192</span></a>
      <a routerLink="/investors" class="btn btn-ghost btn-lg">For Investors <span class="arrow">\u2192</span></a>
    </div>
  </div>
</section>

<fv-footer></fv-footer>
`, styles: ['/* src/app/features/home/home.component.scss */\n:host {\n  display: block;\n}\n.live-band {\n  padding: 32px 0;\n  border-bottom: 1px solid var(--line-soft);\n  background: var(--paper);\n}\n.live-strip {\n  display: flex;\n  gap: 48px;\n  align-items: center;\n  font-size: 14px;\n  color: var(--ink-2);\n  font-weight: 500;\n  flex-wrap: wrap;\n}\n.live-strip strong {\n  font-family: var(--font-display);\n  font-weight: 700;\n  color: var(--ink);\n  font-size: 16px;\n  margin-right: 4px;\n}\n.picker {\n  padding: 120px 0;\n}\n.picker-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.pick {\n  position: relative;\n  border: 1px solid var(--line);\n  border-radius: 20px;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  min-height: 480px;\n  overflow: hidden;\n  cursor: pointer;\n  background: var(--paper);\n  transition:\n    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),\n    box-shadow 0.35s,\n    border-color 0.35s;\n}\n.pick:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 22px 40px -28px rgba(0, 0, 0, 0.25);\n  border-color: var(--ink-2);\n}\n.pick .photo {\n  position: absolute;\n  inset: 0;\n  background-size: cover;\n  background-position: center;\n  opacity: 0;\n  transition: opacity 0.4s ease;\n}\n.pick .photo::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(8, 18, 12, 0.35) 0%,\n      rgba(8, 18, 12, 0.85) 100%);\n}\n.pick:hover .photo {\n  opacity: 1;\n}\n.pick .body {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  height: 100%;\n  transition: color 0.35s;\n}\n.pick:hover .body {\n  color: #fff;\n}\n.pick .tag {\n  display: inline-flex;\n  align-self: flex-start;\n  padding: 6px 12px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--green);\n  background: var(--sage-2);\n  border-radius: 99px;\n  transition: background 0.35s, color 0.35s;\n}\n.pick:hover .tag {\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.pick h3 {\n  font-family: var(--font-display);\n  font-size: 36px;\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  line-height: 1.02;\n  margin: 0;\n  color: var(--ink);\n  transition: color 0.35s;\n}\n.pick:hover h3 {\n  color: #fff;\n}\n.pick .pick-lead {\n  font-size: 15px;\n  line-height: 1.55;\n  color: var(--ink-2);\n  margin: 0;\n  flex: 1;\n  transition: color 0.35s;\n}\n.pick:hover .pick-lead {\n  color: rgba(255, 255, 255, 0.85);\n}\n.pick .features {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--ink-2);\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  transition: color 0.35s;\n}\n.pick .features li {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pick .features li::before {\n  content: "";\n  width: 14px;\n  height: 1px;\n  background: var(--green);\n  flex-shrink: 0;\n  transition: background 0.35s;\n}\n.pick:hover .features {\n  color: rgba(255, 255, 255, 0.78);\n}\n.pick:hover .features li::before {\n  background: var(--green-light);\n}\n.pick .open {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  color: var(--green);\n  margin-top: auto;\n  transition: color 0.35s;\n}\n.pick .open .arrow {\n  transition: transform 0.25s ease;\n}\n.pick:hover .open {\n  color: #fff;\n}\n.pick:hover .open .arrow {\n  transform: translateX(4px);\n}\n.values {\n  padding: 120px 0;\n}\n.values-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 80px;\n  align-items: start;\n}\n.values-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  border-top: 1px solid var(--line);\n}\n.v-item {\n  padding: 28px 0;\n  border-bottom: 1px solid var(--line);\n}\n.v-item h4 {\n  font-family: var(--font-display);\n  font-size: 17px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  margin: 0 0 8px;\n}\n.v-item p {\n  font-size: 14px;\n  color: var(--ink-2);\n  margin: 0;\n  line-height: 1.6;\n}\n@media (max-width: 980px) {\n  .picker-grid {\n    grid-template-columns: 1fr;\n  }\n  .values-grid {\n    grid-template-columns: 1fr;\n    gap: 48px;\n  }\n}\n@media (max-width: 640px) {\n  .pick {\n    min-height: 380px;\n    padding: 28px;\n  }\n  .pick h3 {\n    font-size: 26px;\n  }\n  .live-strip {\n    gap: 20px;\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/features/home/home.component.ts", lineNumber: 14 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-ZOCMUI5W.js.map
