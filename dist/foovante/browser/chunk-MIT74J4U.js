import {
  MapSectionComponent
} from "./chunk-YG7CO3AS.js";
import {
  FooterComponent,
  HeroComponent,
  NavComponent
} from "./chunk-GTWEZHIY.js";
import {
  DecimalPipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-SAJFQ2U5.js";
import "./chunk-WKYGNSYM.js";

// src/app/shared/components/donut-chart/donut-chart.component.ts
var _forTrack0 = ($index, $item) => $item.color;
function DonutChartComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 3);
  }
  if (rf & 2) {
    const slice_r1 = ctx.$implicit;
    \u0275\u0275attribute("stroke", slice_r1.color)("stroke-dasharray", slice_r1.dashArray)("stroke-dashoffset", slice_r1.dashOffset);
  }
}
var DonutChartComponent = class _DonutChartComponent {
  constructor() {
    this.slices = [];
    this.radius = 56;
    this.circumference = 2 * Math.PI * this.radius;
    this.rawSlices = [
      { v: 31, c: "var(--green)" },
      { v: 47, c: "var(--gold)" },
      { v: 14, c: "#5C7259" },
      { v: 8, c: "var(--sage)" }
    ];
  }
  ngOnInit() {
    let cumulative = 0;
    this.slices = this.rawSlices.map((s) => {
      const len = s.v / 100 * this.circumference;
      const offset = -cumulative;
      cumulative += len;
      return {
        value: s.v,
        color: s.c,
        dashArray: `${len} ${this.circumference}`,
        dashOffset: offset
      };
    });
  }
  static {
    this.\u0275fac = function DonutChartComponent_Factory(t) {
      return new (t || _DonutChartComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DonutChartComponent, selectors: [["fv-donut-chart"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 0, consts: [[1, "donut-wrap"], ["viewBox", "0 0 140 140", 2, "transform", "rotate(-90deg)"], ["cx", "70", "cy", "70", "r", "56", "fill", "none", "stroke", "var(--sage-2)", "stroke-width", "16"], ["cx", "70", "cy", "70", "r", "56", "fill", "none", "stroke-width", "16"], [1, "donut-center"], [1, "donut-n"], [1, "donut-l"]], template: function DonutChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(1, "svg", 1);
        \u0275\u0275element(2, "circle", 2);
        \u0275\u0275repeaterCreate(3, DonutChartComponent_For_4_Template, 1, 3, ":svg:circle", 3, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(5, "div", 4)(6, "div", 5);
        \u0275\u0275text(7, "49.2k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6);
        \u0275\u0275text(9, "Households");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.slices);
      }
    }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  flex-shrink: 0;\n}\n.donut-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 140px;\n  height: 140px;\n  flex-shrink: 0;\n}\n.donut-wrap[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.donut-center[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  place-items: center;\n  text-align: center;\n}\n.donut-n[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 1;\n  letter-spacing: -0.025em;\n}\n.donut-l[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--muted);\n  font-weight: 500;\n  margin-top: 4px;\n}\n/*# sourceMappingURL=donut-chart.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DonutChartComponent, { className: "DonutChartComponent", filePath: "src/app/shared/components/donut-chart/donut-chart.component.ts", lineNumber: 18 });
})();

// src/app/core/data/projects.data.ts
var FV_PROJECTS = [
  {
    id: "kakum",
    name: "Kakum Forest Corridor",
    place: "Central Region, Ghana",
    type: "Forestry \xB7 REDD+",
    standard: "Verra VCS",
    vintage: "2024",
    price: 18.4,
    available: 42500,
    target: 48e4,
    raised: 312e3,
    irr: 9.4,
    sdg: [13, 15, 8],
    img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&q=80&auto=format&fit=crop"
  },
  {
    id: "sahel",
    name: "Sahel Clean Cookstoves",
    place: "Tamale, Northern Ghana",
    type: "Community \xB7 Energy",
    standard: "Gold Standard",
    vintage: "2024",
    price: 14.1,
    available: 18200,
    target: 22e4,
    raised: 182e3,
    irr: 11.2,
    sdg: [5, 7, 13],
    img: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=900&q=80&auto=format&fit=crop"
  },
  {
    id: "turkana",
    name: "Turkana Solar Microgrid",
    place: "Lodwar, Kenya",
    type: "Renewable \xB7 Solar",
    standard: "Verra VCS",
    vintage: "2024",
    price: 22.8,
    available: 9800,
    target: 56e4,
    raised: 124e3,
    irr: 8.7,
    sdg: [7, 8, 13],
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=80&auto=format&fit=crop"
  },
  {
    id: "volta",
    name: "Volta Estuary Mangroves",
    place: "Keta, Ghana",
    type: "Blue Carbon",
    standard: "Plan Vivo",
    vintage: "2023",
    price: 26.5,
    available: 5400,
    target: 34e4,
    raised: 298e3,
    irr: 10.5,
    sdg: [13, 14, 15],
    img: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=900&q=80&auto=format&fit=crop"
  },
  {
    id: "akagera",
    name: "Akagera Agroforestry Co-op",
    place: "Eastern Province, Rwanda",
    type: "Agriculture \xB7 ARR",
    standard: "Verra VCS",
    vintage: "2024",
    price: 19.75,
    available: 23100,
    target: 41e4,
    raised: 96e3,
    irr: 9.1,
    sdg: [2, 13, 15],
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80&auto=format&fit=crop"
  },
  {
    id: "lagos",
    name: "Lagos Biogas Recovery",
    place: "Lagos, Nigeria",
    type: "Waste \xB7 Methane",
    standard: "Gold Standard",
    vintage: "2024",
    price: 16.2,
    available: 12800,
    target: 28e4,
    raised: 24e4,
    irr: 12,
    sdg: [7, 11, 13],
    img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=900&q=80&auto=format&fit=crop"
  }
];

// src/app/features/funders/funders.component.ts
var _forTrack02 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.label;
var _c0 = () => ({ label: "Browse projects", routerLink: "/funders" });
var _c1 = () => ["Buy credits.", "Back projects.", "Claim real impact."];
var _c2 = () => ({ label: "Browse all projects", routerLink: "/funders" });
var _c3 = () => ({ label: "How staking works" });
function FundersComponent_For_86_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "span", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("background-image", "url(" + p_r1.img + ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.standard);
  }
}
function FundersComponent_For_86_For_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sdg_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("SDG ", sdg_r2, "");
  }
}
function FundersComponent_For_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, FundersComponent_For_86_Conditional_1_Template, 3, 3, "div", 48);
    \u0275\u0275elementStart(2, "div", 49)(3, "div", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 51);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 52)(10, "div", 53);
    \u0275\u0275element(11, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 55)(13, "span")(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " funded");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementStart(20, "small");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 56)(24, "div", 57)(25, "span", 58);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 59);
    \u0275\u0275text(28, "/tCO\u2082e");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 57)(30, "span", 58);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 59);
    \u0275\u0275text(33, "Target IRR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 57)(35, "span", 58);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 59);
    \u0275\u0275text(38, "Available");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 60);
    \u0275\u0275repeaterCreate(40, FundersComponent_For_86_For_41_Template, 2, 1, "span", 61, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 62);
    \u0275\u0275text(43, " Fund this project ");
    \u0275\u0275elementStart(44, "span", 46);
    \u0275\u0275text(45, "\u2192");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, p_r1.img ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r1.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", p_r1.place, "");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r2.getRaisedPct(p_r1), "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.getRaisedPct(p_r1), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind1(19, 12, p_r1.raised), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" of $", \u0275\u0275pipeBind1(22, 14, p_r1.target), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", p_r1.price, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", p_r1.irr, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", (p_r1.available / 1e3).toFixed(0), "k");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(p_r1.sdg);
  }
}
function FundersComponent_For_173_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "div", 65);
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r4 = ctx.$implicit;
    const i_r5 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(i_r5 % 3 === 2 ? "bar alt" : "bar");
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", ctx_r2.getBarHeight(v_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.months[i_r5]);
  }
}
function FundersComponent_For_184_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "span", 66);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 67);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", item_r6.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.pct);
  }
}
var FundersComponent = class _FundersComponent {
  constructor() {
    this.projects = FV_PROJECTS;
    this.heroSlides = [
      {
        img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=80&auto=format&fit=crop",
        lbl: "Forestry \xB7 REDD+",
        ttl: "Kakum Forest Corridor",
        sub: "Central Region, Ghana \xB7 Verra VCS",
        live: "65% funded \xB7 32 funders"
      },
      {
        img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1800&q=80&auto=format&fit=crop",
        lbl: "Renewable energy",
        ttl: "Turkana Solar Microgrid",
        sub: "Lodwar, Kenya \xB7 Verra VCS",
        live: "22% funded \xB7 14 funders"
      },
      {
        img: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1800&q=80&auto=format&fit=crop",
        lbl: "Blue carbon",
        ttl: "Volta Estuary Mangroves",
        sub: "Keta, Ghana \xB7 Plan Vivo",
        live: "88% funded \xB7 47 funders"
      },
      {
        img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&q=80&auto=format&fit=crop",
        lbl: "Agroforestry",
        ttl: "Akagera Co-op",
        sub: "Eastern Province, Rwanda \xB7 Verra VCS",
        live: "23% funded \xB7 9 funders"
      }
    ];
    this.spotlight = {
      name: "Akagera Agroforestry Co-op",
      place: "Eastern Province, Rwanda \xB7 Verra VCS",
      hero: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&q=80&auto=format&fit=crop",
      pct: 65,
      raised: 312,
      target: 480,
      irr: 9.4,
      daysLeft: 18,
      price: 19.75,
      available: 23.1
    };
    this.barData = [12, 18, 22, 28, 34, 42, 38, 46, 52, 58, 62, 68];
    this.months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
    this.donutLegend = [
      { label: "Forestry / REDD+", color: "var(--green)", pct: "31%" },
      { label: "Energy", color: "var(--gold)", pct: "47%" },
      { label: "Agriculture", color: "#5C7259", pct: "14%" },
      { label: "Blue carbon", color: "var(--sage)", pct: "8%" }
    ];
  }
  getBarHeight(v) {
    return v / 68 * 120 + "px";
  }
  getRaisedPct(project) {
    return Math.round(project.raised / project.target * 100);
  }
  static {
    this.\u0275fac = function FundersComponent_Factory(t) {
      return new (t || _FundersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FundersComponent, selectors: [["fv-funders"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 211, vars: 10, consts: [[3, "dark", "cta"], ["eyebrow", "For funders & corporates", "lead", "The cleanest way to put capital into African carbon. Foovante lets you pre-purchase credits at fixed prices or take a stake in a project and earn as it issues, with a full audit trail per tonne.", 3, "slides", "lines", "cta1", "cta2"], [1, "stats"], [1, "wrap"], [1, "stats-grid"], [1, "stat"], [1, "n"], [1, "l"], [1, "sec-head"], [1, "eyebrow"], [2, "margin-top", "24px"], [1, "right"], [1, "steps"], [1, "step"], [1, "step-n"], [1, "meta"], ["id", "portfolio", 1, "portfolio"], [1, "project-grid"], [1, "project-card"], [2, "background", "var(--paper)"], [1, "impact-grid"], [1, "panel"], [1, "sub"], [1, "big-n"], [2, "margin-top", "auto", "display", "flex", "gap", "12px"], [1, "delta"], [2, "margin-top", "auto", "font-size", "14px", "color", "var(--ink-2)"], [2, "margin-top", "auto", "display", "flex", "flex-direction", "column", "gap", "10px"], [1, "progress-row"], [1, "lbl"], [1, "track"], [1, "fill", 2, "width", "72%"], [1, "v"], [1, "fill", 2, "width", "94%"], [1, "fill", 2, "width", "78%"], [1, "panel", "half"], [2, "display", "flex", "justify-content", "space-between", "align-items", "flex-start"], [1, "bars"], [3, "class"], [2, "display", "flex", "align-items", "center", "gap", "24px", "margin-top", "auto"], [2, "display", "flex", "flex-direction", "column", "gap", "10px", "font-size", "13px", "color", "var(--ink-2)"], [2, "display", "flex", "align-items", "center", "gap", "8px"], [1, "cta"], [1, "cta-in"], [1, "cta-actions"], [1, "btn", "btn-primary", "btn-lg"], [1, "arrow"], [1, "btn", "btn-ghost", "btn-lg"], [1, "proj-img", 3, "background-image"], [1, "proj-body"], [1, "proj-type"], [1, "proj-place"], [1, "proj-funding"], [1, "proj-bar"], [1, "proj-fill"], [1, "proj-meta"], [1, "proj-stats"], [1, "ps"], [1, "ps-n"], [1, "ps-l"], [1, "proj-sdg"], [1, "sdg-chip"], [1, "btn", "btn-primary", 2, "width", "100%", "justify-content", "center"], [1, "proj-img"], [1, "proj-badge"], [1, "b"], [2, "width", "8px", "height", "8px", "border-radius", "50%", "display", "inline-block", "flex-shrink", "0"], [2, "margin-left", "auto", "font-weight", "600", "color", "var(--ink)"]], template: function FundersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "fv-nav", 0)(1, "fv-hero", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        \u0275\u0275text(7, "282");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 7);
        \u0275\u0275text(9, "Verified projects");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 5)(11, "div", 6);
        \u0275\u0275text(12, "$18.40");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 7);
        \u0275\u0275text(14, "Avg. price / tCO\u2082e");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 5)(16, "div", 6);
        \u0275\u0275text(17, "96%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 7);
        \u0275\u0275text(19, "Funder renewal rate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 5)(21, "div", 6);
        \u0275\u0275text(22, "T+1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 7);
        \u0275\u0275text(24, "Settlement cycle");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(25, "section")(26, "div", 3)(27, "div", 8)(28, "div")(29, "div", 9);
        \u0275\u0275text(30, "How it works");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "h2", 10);
        \u0275\u0275text(32, "Two ways to deploy capital.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 11)(34, "p");
        \u0275\u0275text(35, "Credit purchase or stake: both settle T+1 with on-chain serialised certificates. Both give you the same audit trail. Choose the structure that fits your mandate.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 12)(37, "div", 13)(38, "div", 14);
        \u0275\u0275text(39, "01. Browse");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "h3");
        \u0275\u0275text(41, "Filter by methodology, region, or vintage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "p");
        \u0275\u0275text(43, "282 projects across 14 countries. Filter by type, standard, IRR target, or co-benefits. Full MRV documentation attached to every listing.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 15);
        \u0275\u0275text(45, "Verra \xB7 Gold Standard \xB7 Plan Vivo");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 13)(47, "div", 14);
        \u0275\u0275text(48, "02. Choose");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "h3");
        \u0275\u0275text(50, "Credit purchase or stake");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "p");
        \u0275\u0275text(52, "Pre-purchase future credits at a fixed price, or stake into a project and earn a proportion of every tonne it issues over its lifetime.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 15);
        \u0275\u0275text(54, "Forward purchases up to 5 years");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "div", 13)(56, "div", 14);
        \u0275\u0275text(57, "03. Settle");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "h3");
        \u0275\u0275text(59, "T+1 with on-chain certificate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "p");
        \u0275\u0275text(61, "Every transaction settles in one business day. On-chain serialised certificate maps each tonne to its polygon, vintage, and verification record.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "div", 15);
        \u0275\u0275text(63, "SOC 2 Type II \xB7 GDPR-compliant");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "div", 13)(65, "div", 14);
        \u0275\u0275text(66, "04. Track");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "h3");
        \u0275\u0275text(68, "Live portfolio dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "p");
        \u0275\u0275text(70, "Your portfolio dashboard shows every tonne you own, what's been retired, and live impact metrics: hectares, households, SDG alignment.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "div", 15);
        \u0275\u0275text(72, "Updated every 5 days from orbit");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(73, "section", 16)(74, "div", 3)(75, "div", 8)(76, "div")(77, "div", 9);
        \u0275\u0275text(78, "Featured projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "h2", 10);
        \u0275\u0275text(80, "Ready to fund now.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "div", 11)(82, "p");
        \u0275\u0275text(83, "Six of 282 active listings. Each comes with satellite-verified baseline, independent verifier audit, and a live MRV feed from the field.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(84, "div", 17);
        \u0275\u0275repeaterCreate(85, FundersComponent_For_86_Template, 46, 16, "div", 18, _forTrack02);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(87, "section", 19)(88, "div", 3)(89, "div", 8)(90, "div")(91, "div", 9);
        \u0275\u0275text(92, "Your portfolio, fully visible");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "h2", 10);
        \u0275\u0275text(94, "Every tonne. Every project. Every claim.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "div", 11)(96, "p");
        \u0275\u0275text(97, "Foovante's funder dashboard shows you exactly what you own, what's been retired, and the live impact of every project you've backed.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(98, "div", 20)(99, "div", 21)(100, "div")(101, "h3");
        \u0275\u0275text(102, "Tonnes in your portfolio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "p", 22);
        \u0275\u0275text(104, "Across all funded projects");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(105, "div", 23);
        \u0275\u0275text(106, "12,840 ");
        \u0275\u0275elementStart(107, "small");
        \u0275\u0275text(108, "tCO\u2082e");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(109, "div", 24)(110, "span", 25);
        \u0275\u0275text(111, "\u2191 28% QoQ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(112, "div", 21)(113, "div")(114, "h3");
        \u0275\u0275text(115, "Capital deployed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "p", 22);
        \u0275\u0275text(117, "Stakes & pre-purchases combined");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(118, "div", 23);
        \u0275\u0275text(119, "$246");
        \u0275\u0275elementStart(120, "small");
        \u0275\u0275text(121, "k");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(122, "div", 26);
        \u0275\u0275text(123, " Across ");
        \u0275\u0275elementStart(124, "strong");
        \u0275\u0275text(125, "9 active projects");
        \u0275\u0275elementEnd();
        \u0275\u0275text(126, " in ");
        \u0275\u0275elementStart(127, "strong");
        \u0275\u0275text(128, "5 African countries");
        \u0275\u0275elementEnd();
        \u0275\u0275text(129, ". ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(130, "div", 21)(131, "div")(132, "h3");
        \u0275\u0275text(133, "Live IRR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "p", 22);
        \u0275\u0275text(135, "Trailing weighted across stakes");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(136, "div", 23);
        \u0275\u0275text(137, "9.7");
        \u0275\u0275elementStart(138, "small");
        \u0275\u0275text(139, "%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(140, "div", 27)(141, "div", 28)(142, "div", 29);
        \u0275\u0275text(143, "Forestry");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "div", 30);
        \u0275\u0275element(145, "div", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "div", 32);
        \u0275\u0275text(147, "8.9%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(148, "div", 28)(149, "div", 29);
        \u0275\u0275text(150, "Energy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "div", 30);
        \u0275\u0275element(152, "div", 33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "div", 32);
        \u0275\u0275text(154, "11.2%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(155, "div", 28)(156, "div", 29);
        \u0275\u0275text(157, "Agri");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "div", 30);
        \u0275\u0275element(159, "div", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "div", 32);
        \u0275\u0275text(161, "9.4%");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(162, "div", 35)(163, "div", 36)(164, "div")(165, "h3");
        \u0275\u0275text(166, "Quarterly credit issuance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "p", 22);
        \u0275\u0275text(168, "Tonnes issued \xB7 trailing 12 months");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(169, "span", 25);
        \u0275\u0275text(170, "+38% YoY");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(171, "div", 37);
        \u0275\u0275repeaterCreate(172, FundersComponent_For_173_Template, 4, 5, "div", 38, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(174, "div", 21)(175, "div")(176, "h3");
        \u0275\u0275text(177, "Household impact");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "p", 22);
        \u0275\u0275text(179, "Lives directly touched");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(180, "div", 39);
        \u0275\u0275element(181, "fv-donut-chart");
        \u0275\u0275elementStart(182, "div", 40);
        \u0275\u0275repeaterCreate(183, FundersComponent_For_184_Template, 6, 4, "div", 41, _forTrack1);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(185, "section")(186, "div", 3)(187, "div", 8)(188, "div")(189, "div", 9);
        \u0275\u0275text(190, "Live project network");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(191, "h2", 10);
        \u0275\u0275text(192, "282 projects across 14 African countries.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(193, "div", 11)(194, "p");
        \u0275\u0275text(195, "From Senegal mangrove restoration to Ethiopian highland reforestation, the Foovante network spans the continent and grows weekly.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(196, "fv-map-section");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(197, "section", 42)(198, "div", 43)(199, "h2");
        \u0275\u0275text(200, "Start with a single project.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(201, "p");
        \u0275\u0275text(202, "Create a free funder account, browse 282 verified projects, and make your first commitment in under 10 minutes.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(203, "div", 44)(204, "a", 45);
        \u0275\u0275text(205, "Create funder account ");
        \u0275\u0275elementStart(206, "span", 46);
        \u0275\u0275text(207, "\u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(208, "a", 47);
        \u0275\u0275text(209, "Talk to the team");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(210, "fv-footer");
      }
      if (rf & 2) {
        \u0275\u0275property("dark", true)("cta", \u0275\u0275pureFunction0(6, _c0));
        \u0275\u0275advance();
        \u0275\u0275property("slides", ctx.heroSlides)("lines", \u0275\u0275pureFunction0(7, _c1))("cta1", \u0275\u0275pureFunction0(8, _c2))("cta2", \u0275\u0275pureFunction0(9, _c3));
        \u0275\u0275advance(84);
        \u0275\u0275repeater(ctx.projects);
        \u0275\u0275advance(87);
        \u0275\u0275repeater(ctx.barData);
        \u0275\u0275advance(11);
        \u0275\u0275repeater(ctx.donutLegend);
      }
    }, dependencies: [NavComponent, FooterComponent, HeroComponent, MapSectionComponent, DonutChartComponent, DecimalPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.project-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.project-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  overflow: hidden;\n  background: var(--paper);\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 32px -8px rgba(0, 0, 0, 0.15);\n  transform: translateY(-2px);\n}\n.proj-img[_ngcontent-%COMP%] {\n  aspect-ratio: 16/9;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n}\n.proj-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  background: rgba(255, 255, 255, 0.92);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  padding: 4px 10px;\n  border-radius: 99px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  color: var(--ink);\n}\n.proj-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.proj-type[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--green);\n}\n.proj-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  margin: 0;\n}\n.proj-place[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--muted);\n  font-weight: 500;\n}\n.proj-funding[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.proj-bar[_ngcontent-%COMP%] {\n  height: 5px;\n  background: var(--sage-2);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.proj-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--green);\n  border-radius: 99px;\n}\n.proj-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: var(--muted);\n}\n.proj-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--ink);\n  font-weight: 600;\n}\n.proj-meta[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--muted);\n  font-weight: 400;\n}\n.proj-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  border-top: 1px solid var(--line-soft);\n  padding-top: 14px;\n}\n.ps[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex: 1;\n}\n.ps-n[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 20px;\n  font-weight: 700;\n  letter-spacing: -0.025em;\n  line-height: 1;\n}\n.ps-l[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--muted);\n  font-weight: 500;\n}\n.proj-sdg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.sdg-chip[_ngcontent-%COMP%] {\n  padding: 3px 8px;\n  background: var(--sage-2);\n  color: var(--green);\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n}\n.portfolio[_ngcontent-%COMP%] {\n  padding: 120px 0;\n}\n.impact-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: auto auto;\n  gap: 1px;\n  background: var(--line);\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  overflow: hidden;\n}\n.impact-grid[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  min-height: 280px;\n}\n.impact-grid[_ngcontent-%COMP%]   .panel.half[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n@media (max-width: 980px) {\n  .project-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .impact-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .panel.half[_ngcontent-%COMP%] {\n    grid-column: span 2;\n  }\n}\n@media (max-width: 640px) {\n  .project-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .impact-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .panel.half[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=funders.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FundersComponent, { className: "FundersComponent", filePath: "src/app/features/funders/funders.component.ts", lineNumber: 19 });
})();
export {
  FundersComponent
};
//# sourceMappingURL=chunk-MIT74J4U.js.map
