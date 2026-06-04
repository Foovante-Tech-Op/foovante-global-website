import {
  MapSectionComponent
} from "./chunk-GNLJLWMX.js";
import {
  FooterComponent,
  HeroComponent,
  NavComponent
} from "./chunk-J4Q2IEXS.js";
import {
  Component,
  DecimalPipe,
  RouterLink,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
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
var _c0 = () => ({ label: "Browse projects", routerLink: "/funders" });
var _c1 = () => ["Buy credits.", "Back projects.", "Claim real impact."];
var _c2 = () => ({ label: "Browse all projects", routerLink: "/funders" });
var _c3 = () => ({ label: "How it works", routerLink: "/funders" });
var _forTrack0 = ($index, $item) => $item.id;
function FundersComponent_For_86_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "span", 49);
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
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sdg_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("SDG ", sdg_r2);
  }
}
function FundersComponent_For_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275conditionalCreate(1, FundersComponent_For_86_Conditional_1_Template, 3, 3, "div", 33);
    \u0275\u0275elementStart(2, "div", 34)(3, "div", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 36);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 37)(10, "div", 38);
    \u0275\u0275element(11, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 40)(13, "span")(14, "strong");
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
    \u0275\u0275elementStart(23, "div", 41)(24, "div", 42)(25, "span", 43);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 44);
    \u0275\u0275text(28, "/tCO\u2082e");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 42)(30, "span", 43);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 44);
    \u0275\u0275text(33, "Target IRR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 42)(35, "span", 43);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 44);
    \u0275\u0275text(38, "Available");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 45);
    \u0275\u0275repeaterCreate(40, FundersComponent_For_86_For_41_Template, 2, 1, "span", 46, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 47);
    \u0275\u0275text(43, " Fund this project ");
    \u0275\u0275elementStart(44, "span", 27);
    \u0275\u0275text(45, "\u2192");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r1.img ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r1.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", p_r1.place);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r2.getRaisedPct(p_r1), "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.getRaisedPct(p_r1), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind1(19, 12, p_r1.raised));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" of $", \u0275\u0275pipeBind1(22, 14, p_r1.target));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", p_r1.price);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", p_r1.irr, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", (p_r1.available / 1e3).toFixed(0), "k");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(p_r1.sdg);
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
    this.\u0275fac = function FundersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FundersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FundersComponent, selectors: [["fv-funders"]], decls: 163, vars: 10, consts: [[3, "dark", "cta"], ["eyebrow", "For funders & corporates", "lead", "The cleanest way to put capital into African carbon. Foovante lets you pre-purchase verified credits at fixed prices with a full audit trail per tonne.", 3, "slides", "lines", "cta1", "cta2"], [1, "stats"], [1, "wrap"], [1, "stats-grid"], [1, "stat"], [1, "n"], [1, "l"], [1, "sec-head"], [1, "eyebrow"], [2, "margin-top", "24px"], [1, "right"], [1, "steps"], [1, "step"], [1, "step-n"], [1, "meta"], ["id", "portfolio", 1, "portfolio"], [1, "project-grid"], [1, "project-card"], [2, "background", "var(--paper)"], [1, "dashboard-features"], [1, "df-card"], [1, "df-icon"], [1, "dashboard-cta", 2, "margin-top", "56px", "padding", "40px", "background", "var(--sage-2)", "border-radius", "16px", "display", "flex", "justify-content", "space-between", "align-items", "center", "flex-wrap", "wrap", "gap", "24px"], [2, "font-family", "var(--font-display)", "font-size", "20px", "font-weight", "600", "letter-spacing", "-0.02em"], [2, "font-size", "15px", "color", "var(--ink-2)", "margin", "8px 0 0"], ["routerLink", "/founder-brief", 1, "btn", "btn-primary"], [1, "arrow"], [1, "cta"], [1, "cta-in"], [1, "cta-actions"], ["routerLink", "/founder-brief", 1, "btn", "btn-primary", "btn-lg"], ["routerLink", "/founder-brief", 1, "btn", "btn-ghost", "btn-lg"], [1, "proj-img", 3, "background-image"], [1, "proj-body"], [1, "proj-type"], [1, "proj-place"], [1, "proj-funding"], [1, "proj-bar"], [1, "proj-fill"], [1, "proj-meta"], [1, "proj-stats"], [1, "ps"], [1, "ps-n"], [1, "ps-l"], [1, "proj-sdg"], [1, "sdg-chip"], [1, "btn", "btn-primary", 2, "width", "100%", "justify-content", "center"], [1, "proj-img"], [1, "proj-badge"]], template: function FundersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "fv-nav", 0)(1, "fv-hero", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        \u0275\u0275text(7, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 7);
        \u0275\u0275text(9, "Active projects \xB7 baseline phase");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 5)(11, "div", 6);
        \u0275\u0275text(12, "8,100 ha");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 7);
        \u0275\u0275text(14, "Under MRV by Q2 2026");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 5)(16, "div", 6);
        \u0275\u0275text(17, "T+1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 7);
        \u0275\u0275text(19, "Target settlement cycle");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 5)(21, "div", 6);
        \u0275\u0275text(22, "6");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 7);
        \u0275\u0275text(24, "Core methodologies supported");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(25, "section")(26, "div", 3)(27, "div", 8)(28, "div")(29, "div", 9);
        \u0275\u0275text(30, "How it works");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "h2", 10);
        \u0275\u0275text(32, "How to deploy capital.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 11)(34, "p");
        \u0275\u0275text(35, "Pre-purchase verified credits at fixed prices. Every transaction settles with a full audit trail. Choose the project that fits your mandate.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 12)(37, "div", 13)(38, "div", 14);
        \u0275\u0275text(39, "01. Browse");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "h3");
        \u0275\u0275text(41, "Filter by methodology, region, or vintage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "p");
        \u0275\u0275text(43, "Browse verified African projects. Filter by type, standard, or co-benefits. Full MRV documentation attached to every listing.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 15);
        \u0275\u0275text(45, "Verra \xB7 Gold Standard \xB7 Plan Vivo");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 13)(47, "div", 14);
        \u0275\u0275text(48, "02. Choose");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "h3");
        \u0275\u0275text(50, "Credit pre-purchase");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "p");
        \u0275\u0275text(52, "Pre-purchase future credits at a fixed price. Revenue flows to the project as credits are issued, with a full audit trail per tonne.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 15);
        \u0275\u0275text(54, "Fixed-price forward purchases");
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
        \u0275\u0275text(63, "SOC 2 certification targeted \xB7 GDPR-aligned");
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
        \u0275\u0275text(83, "Our active listings. Each will come with a satellite-verified baseline, independent verifier audit, and a live MRV feed from the field.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(84, "div", 17);
        \u0275\u0275repeaterCreate(85, FundersComponent_For_86_Template, 46, 16, "div", 18, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(87, "section", 19)(88, "div", 3)(89, "div", 8)(90, "div")(91, "div", 9);
        \u0275\u0275text(92, "Your portfolio, fully visible");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "h2", 10);
        \u0275\u0275text(94, "Every tonne. Every project. Every claim.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "div", 11)(96, "p");
        \u0275\u0275text(97, "We are building a funder dashboard that shows you exactly what you own, what has been retired, and the live impact of every project you have backed. Here is what it will include.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(98, "div", 20)(99, "div", 21)(100, "div", 22);
        \u0275\u0275text(101, "\u25CE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "h4");
        \u0275\u0275text(103, "Tonne-level portfolio view");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "p");
        \u0275\u0275text(105, "See every tonne you hold across all projects \u2014 polygon, vintage, standard, and current retirement status \u2014 in one place.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(106, "div", 21)(107, "div", 22);
        \u0275\u0275text(108, "\u25C8");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "h4");
        \u0275\u0275text(110, "Capital & credit tracking");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "p");
        \u0275\u0275text(112, "Track your pre-purchases from commitment through to issuance. Full audit trail per tonne from satellite baseline to on-chain certificate.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(113, "div", 21)(114, "div", 22);
        \u0275\u0275text(115, "\u25C9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "h4");
        \u0275\u0275text(117, "Live MRV feed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "p");
        \u0275\u0275text(119, "Satellite imagery refreshed every five days. See canopy change, biomass estimates, and field agent updates for every project you have backed.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(120, "div", 21)(121, "div", 22);
        \u0275\u0275text(122, "\u25D0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "h4");
        \u0275\u0275text(124, "Impact metrics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "p");
        \u0275\u0275text(126, "Hectares protected, households reached, SDG alignment, and co-benefit scores \u2014 the numbers you need for your own reporting.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(127, "div", 23)(128, "div")(129, "div", 24);
        \u0275\u0275text(130, "Dashboard launching with our first credit issuances.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(131, "p", 25);
        \u0275\u0275text(132, "Early funders will get access as soon as projects complete baseline. Talk to us to get on the list.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(133, "a", 26);
        \u0275\u0275text(134, "Talk to us ");
        \u0275\u0275elementStart(135, "span", 27);
        \u0275\u0275text(136, "\u2192");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(137, "section")(138, "div", 3)(139, "div", 8)(140, "div")(141, "div", 9);
        \u0275\u0275text(142, "Live project network");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "h2", 10);
        \u0275\u0275text(144, "Active projects \xB7 growing across the continent.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(145, "div", 11)(146, "p");
        \u0275\u0275text(147, "From Senegal mangrove restoration to Ethiopian highland reforestation, the Foovante network spans the continent and grows weekly.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(148, "fv-map-section");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(149, "section", 28)(150, "div", 29)(151, "h2");
        \u0275\u0275text(152, "Start with a single project.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "p");
        \u0275\u0275text(154, "Create a free funder account, browse 282 verified projects, and make your first commitment in under 10 minutes.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "div", 30)(156, "a", 31);
        \u0275\u0275text(157, "Create funder account ");
        \u0275\u0275elementStart(158, "span", 27);
        \u0275\u0275text(159, "\u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(160, "a", 32);
        \u0275\u0275text(161, "Talk to the team");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(162, "fv-footer");
      }
      if (rf & 2) {
        \u0275\u0275property("dark", true)("cta", \u0275\u0275pureFunction0(6, _c0));
        \u0275\u0275advance();
        \u0275\u0275property("slides", ctx.heroSlides)("lines", \u0275\u0275pureFunction0(7, _c1))("cta1", \u0275\u0275pureFunction0(8, _c2))("cta2", \u0275\u0275pureFunction0(9, _c3));
        \u0275\u0275advance(84);
        \u0275\u0275repeater(ctx.projects);
      }
    }, dependencies: [NavComponent, FooterComponent, HeroComponent, MapSectionComponent, RouterLink, DecimalPipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.project-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.project-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  overflow: hidden;\n  background: var(--paper);\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 32px -8px rgba(0, 0, 0, 0.15);\n  transform: translateY(-2px);\n}\n.proj-img[_ngcontent-%COMP%] {\n  aspect-ratio: 16/9;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n}\n.proj-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  background: rgba(255, 255, 255, 0.92);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  padding: 4px 10px;\n  border-radius: 99px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  color: var(--ink);\n}\n.proj-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.proj-type[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--green);\n}\n.proj-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  margin: 0;\n}\n.proj-place[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--muted);\n  font-weight: 500;\n}\n.proj-funding[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.proj-bar[_ngcontent-%COMP%] {\n  height: 5px;\n  background: var(--sage-2);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.proj-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--green);\n  border-radius: 99px;\n}\n.proj-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: var(--muted);\n}\n.proj-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--ink);\n  font-weight: 600;\n}\n.proj-meta[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--muted);\n  font-weight: 400;\n}\n.proj-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  border-top: 1px solid var(--line-soft);\n  padding-top: 14px;\n}\n.ps[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex: 1;\n}\n.ps-n[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 20px;\n  font-weight: 700;\n  letter-spacing: -0.025em;\n  line-height: 1;\n}\n.ps-l[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--muted);\n  font-weight: 500;\n}\n.proj-sdg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.sdg-chip[_ngcontent-%COMP%] {\n  padding: 3px 8px;\n  background: var(--sage-2);\n  color: var(--green);\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n}\n.portfolio[_ngcontent-%COMP%] {\n  padding: 120px 0;\n}\n.impact-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: auto auto;\n  gap: 1px;\n  background: var(--line);\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  overflow: hidden;\n}\n.impact-grid[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  min-height: 280px;\n}\n.impact-grid[_ngcontent-%COMP%]   .panel.half[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.dashboard-features[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n.df-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 28px;\n  background: var(--bg);\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.df-card[_ngcontent-%COMP%]   .df-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: var(--green);\n  line-height: 1;\n}\n.df-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 17px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  margin: 0;\n}\n.df-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ink-2);\n  line-height: 1.6;\n  margin: 0;\n}\n@media (max-width: 980px) {\n  .project-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .dashboard-features[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .project-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .dashboard-features[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=funders.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FundersComponent, [{
    type: Component,
    args: [{ selector: "fv-funders", imports: [NavComponent, FooterComponent, HeroComponent, MapSectionComponent, DecimalPipe, RouterLink], template: `<fv-nav [dark]="true" [cta]="{label: 'Browse projects', routerLink: '/funders'}"></fv-nav>

<fv-hero
  [slides]="heroSlides"
  eyebrow="For funders & corporates"
  [lines]="['Buy credits.', 'Back projects.', 'Claim real impact.']"
  lead="The cleanest way to put capital into African carbon. Foovante lets you pre-purchase verified credits at fixed prices with a full audit trail per tonne."
  [cta1]="{label: 'Browse all projects', routerLink: '/funders'}"
  [cta2]="{label: 'How it works', routerLink: '/funders'}"
></fv-hero>

<!-- Stats -->
<div class="stats">
  <div class="wrap">
    <div class="stats-grid">
      <div class="stat"><div class="n">3</div><div class="l">Active projects \xB7 baseline phase</div></div>
      <div class="stat"><div class="n">8,100 ha</div><div class="l">Under MRV by Q2 2026</div></div>
      <div class="stat"><div class="n">T+1</div><div class="l">Target settlement cycle</div></div>
      <div class="stat"><div class="n">6</div><div class="l">Core methodologies supported</div></div>
    </div>
  </div>
</div>

<!-- How It Works -->
<section>
  <div class="wrap">
    <div class="sec-head">
      <div>
        <div class="eyebrow">How it works</div>
        <h2 style="margin-top:24px">How to deploy capital.</h2>
      </div>
      <div class="right">
        <p>Pre-purchase verified credits at fixed prices. Every transaction settles with a full audit trail. Choose the project that fits your mandate.</p>
      </div>
    </div>
    <div class="steps">
      <div class="step">
        <div class="step-n">01. Browse</div>
        <h3>Filter by methodology, region, or vintage</h3>
        <p>Browse verified African projects. Filter by type, standard, or co-benefits. Full MRV documentation attached to every listing.</p>
        <div class="meta">Verra \xB7 Gold Standard \xB7 Plan Vivo</div>
      </div>
      <div class="step">
        <div class="step-n">02. Choose</div>
        <h3>Credit pre-purchase</h3>
        <p>Pre-purchase future credits at a fixed price. Revenue flows to the project as credits are issued, with a full audit trail per tonne.</p>
        <div class="meta">Fixed-price forward purchases</div>
      </div>
      <div class="step">
        <div class="step-n">03. Settle</div>
        <h3>T+1 with on-chain certificate</h3>
        <p>Every transaction settles in one business day. On-chain serialised certificate maps each tonne to its polygon, vintage, and verification record.</p>
        <div class="meta">SOC 2 certification targeted \xB7 GDPR-aligned</div>
      </div>
      <div class="step">
        <div class="step-n">04. Track</div>
        <h3>Live portfolio dashboard</h3>
        <p>Your portfolio dashboard shows every tonne you own, what's been retired, and live impact metrics: hectares, households, SDG alignment.</p>
        <div class="meta">Updated every 5 days from orbit</div>
      </div>
    </div>
  </div>
</section>

<!-- Project Listings -->
<section id="portfolio" class="portfolio">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <div class="eyebrow">Featured projects</div>
        <h2 style="margin-top:24px">Ready to fund now.</h2>
      </div>
      <div class="right">
        <p>Our active listings. Each will come with a satellite-verified baseline, independent verifier audit, and a live MRV feed from the field.</p>
      </div>
    </div>

    <div class="project-grid">
      @for (p of projects; track p.id) {
        <div class="project-card">
          @if (p.img) {
            <div class="proj-img" [style.background-image]="'url(' + p.img + ')'">
              <span class="proj-badge">{{ p.standard }}</span>
            </div>
          }
          <div class="proj-body">
            <div class="proj-type">{{ p.type }}</div>
            <h3>{{ p.name }}</h3>
            <div class="proj-place">\u{1F4CD} {{ p.place }}</div>

            <div class="proj-funding">
              <div class="proj-bar">
                <div class="proj-fill" [style.width.%]="getRaisedPct(p)"></div>
              </div>
              <div class="proj-meta">
                <span><strong>{{ getRaisedPct(p) }}%</strong> funded</span>
                <span>\${{ p.raised | number }}<small> of \${{ p.target | number }}</small></span>
              </div>
            </div>

            <div class="proj-stats">
              <div class="ps"><span class="ps-n">\${{ p.price }}</span><span class="ps-l">/tCO\u2082e</span></div>
              <div class="ps"><span class="ps-n">{{ p.irr }}%</span><span class="ps-l">Target IRR</span></div>
              <div class="ps"><span class="ps-n">{{ (p.available / 1000).toFixed(0) }}k</span><span class="ps-l">Available</span></div>
            </div>

            <div class="proj-sdg">
              @for (sdg of p.sdg; track sdg) {
                <span class="sdg-chip">SDG {{ sdg }}</span>
              }
            </div>

            <button class="btn btn-primary" style="width:100%;justify-content:center">
              Fund this project <span class="arrow">\u2192</span>
            </button>
          </div>
        </div>
      }
    </div>
  </div>
</section>

<!-- Portfolio Dashboard Preview -->
<section style="background:var(--paper)">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <div class="eyebrow">Your portfolio, fully visible</div>
        <h2 style="margin-top:24px">Every tonne. Every project. Every claim.</h2>
      </div>
      <div class="right">
        <p>We are building a funder dashboard that shows you exactly what you own, what has been retired, and the live impact of every project you have backed. Here is what it will include.</p>
      </div>
    </div>

    <div class="dashboard-features">
      <div class="df-card">
        <div class="df-icon">\u25CE</div>
        <h4>Tonne-level portfolio view</h4>
        <p>See every tonne you hold across all projects \u2014 polygon, vintage, standard, and current retirement status \u2014 in one place.</p>
      </div>
      <div class="df-card">
        <div class="df-icon">\u25C8</div>
        <h4>Capital & credit tracking</h4>
        <p>Track your pre-purchases from commitment through to issuance. Full audit trail per tonne from satellite baseline to on-chain certificate.</p>
      </div>
      <div class="df-card">
        <div class="df-icon">\u25C9</div>
        <h4>Live MRV feed</h4>
        <p>Satellite imagery refreshed every five days. See canopy change, biomass estimates, and field agent updates for every project you have backed.</p>
      </div>
      <div class="df-card">
        <div class="df-icon">\u25D0</div>
        <h4>Impact metrics</h4>
        <p>Hectares protected, households reached, SDG alignment, and co-benefit scores \u2014 the numbers you need for your own reporting.</p>
      </div>
    </div>

    <div class="dashboard-cta" style="margin-top:56px;padding:40px;background:var(--sage-2);border-radius:16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:24px">
      <div>
        <div style="font-family:var(--font-display);font-size:20px;font-weight:600;letter-spacing:-0.02em">Dashboard launching with our first credit issuances.</div>
        <p style="font-size:15px;color:var(--ink-2);margin:8px 0 0">Early funders will get access as soon as projects complete baseline. Talk to us to get on the list.</p>
      </div>
      <a class="btn btn-primary" routerLink="/founder-brief">Talk to us <span class="arrow">\u2192</span></a>
    </div>
  </div>
</section>

<!-- Map Network -->
<section>
  <div class="wrap">
    <div class="sec-head">
      <div>
        <div class="eyebrow">Live project network</div>
        <h2 style="margin-top:24px">Active projects \xB7 growing across the continent.</h2>
      </div>
      <div class="right">
        <p>From Senegal mangrove restoration to Ethiopian highland reforestation, the Foovante network spans the continent and grows weekly.</p>
      </div>
    </div>
    <fv-map-section></fv-map-section>
  </div>
</section>

<!-- CTA -->
<section class="cta">
  <div class="cta-in">
    <h2>Start with a single project.</h2>
    <p>Create a free funder account, browse 282 verified projects, and make your first commitment in under 10 minutes.</p>
    <div class="cta-actions">
      <a class="btn btn-primary btn-lg" routerLink="/founder-brief">Create funder account <span class="arrow">\u2192</span></a>
      <a class="btn btn-ghost btn-lg" routerLink="/founder-brief">Talk to the team</a>
    </div>
  </div>
</section>

<fv-footer></fv-footer>
`, styles: ["/* src/app/features/funders/funders.component.scss */\n:host {\n  display: block;\n}\n.project-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.project-card {\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  overflow: hidden;\n  background: var(--paper);\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.project-card:hover {\n  box-shadow: 0 8px 32px -8px rgba(0, 0, 0, 0.15);\n  transform: translateY(-2px);\n}\n.proj-img {\n  aspect-ratio: 16/9;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n}\n.proj-badge {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  background: rgba(255, 255, 255, 0.92);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  padding: 4px 10px;\n  border-radius: 99px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  color: var(--ink);\n}\n.proj-body {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.proj-type {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--green);\n}\n.proj-body h3 {\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  margin: 0;\n}\n.proj-place {\n  font-size: 13px;\n  color: var(--muted);\n  font-weight: 500;\n}\n.proj-funding {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.proj-bar {\n  height: 5px;\n  background: var(--sage-2);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.proj-fill {\n  height: 100%;\n  background: var(--green);\n  border-radius: 99px;\n}\n.proj-meta {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: var(--muted);\n}\n.proj-meta strong {\n  color: var(--ink);\n  font-weight: 600;\n}\n.proj-meta small {\n  color: var(--muted);\n  font-weight: 400;\n}\n.proj-stats {\n  display: flex;\n  gap: 16px;\n  border-top: 1px solid var(--line-soft);\n  padding-top: 14px;\n}\n.ps {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex: 1;\n}\n.ps-n {\n  font-family: var(--font-display);\n  font-size: 20px;\n  font-weight: 700;\n  letter-spacing: -0.025em;\n  line-height: 1;\n}\n.ps-l {\n  font-size: 11px;\n  color: var(--muted);\n  font-weight: 500;\n}\n.proj-sdg {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.sdg-chip {\n  padding: 3px 8px;\n  background: var(--sage-2);\n  color: var(--green);\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n}\n.portfolio {\n  padding: 120px 0;\n}\n.impact-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: auto auto;\n  gap: 1px;\n  background: var(--line);\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  overflow: hidden;\n}\n.impact-grid .panel {\n  min-height: 280px;\n}\n.impact-grid .panel.half {\n  grid-column: span 2;\n}\n.dashboard-features {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n.df-card {\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 28px;\n  background: var(--bg);\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.df-card .df-icon {\n  font-size: 22px;\n  color: var(--green);\n  line-height: 1;\n}\n.df-card h4 {\n  font-family: var(--font-display);\n  font-size: 17px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  margin: 0;\n}\n.df-card p {\n  font-size: 14px;\n  color: var(--ink-2);\n  line-height: 1.6;\n  margin: 0;\n}\n@media (max-width: 980px) {\n  .project-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n  .dashboard-features {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .project-grid {\n    grid-template-columns: 1fr;\n  }\n  .dashboard-features {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=funders.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FundersComponent, { className: "FundersComponent", filePath: "src/app/features/funders/funders.component.ts", lineNumber: 18 });
})();
export {
  FundersComponent
};
//# sourceMappingURL=chunk-EAMVFL4U.js.map
