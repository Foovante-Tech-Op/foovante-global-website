import {
  FooterComponent,
  HeroComponent,
  NavComponent
} from "./chunk-GTWEZHIY.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-SAJFQ2U5.js";
import "./chunk-WKYGNSYM.js";

// src/app/shared/components/growth-chart/growth-chart.component.ts
var _forTrack0 = ($index, $item) => $item.month;
function GrowthChartComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 3);
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bar_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", bar_r1.value, "k");
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", bar_r1.height);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bar_r1.month);
  }
}
var GrowthChartComponent = class _GrowthChartComponent {
  constructor() {
    this.rawValues = [38, 52, 71, 96, 130, 177, 241, 327, 445, 604, 820, 1115];
    this.months = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    this.maxVal = Math.max(...this.rawValues);
    this.bars = this.rawValues.map((v, i) => ({
      month: this.months[i],
      value: v,
      height: v / this.maxVal * 160 + "px"
    }));
  }
  static {
    this.\u0275fac = function GrowthChartComponent_Factory(t) {
      return new (t || _GrowthChartComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GrowthChartComponent, selectors: [["fv-growth-chart"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 0, consts: [[1, "growth-bars"], [1, "g-bar"], [1, "g-val"], [1, "g-fill"], [1, "g-lbl"]], template: function GrowthChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, GrowthChartComponent_For_2_Template, 6, 4, "div", 1, _forTrack0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.bars);
      }
    }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.growth-bars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 6px;\n  height: 200px;\n  padding-top: 32px;\n  width: 100%;\n}\n.g-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  position: relative;\n}\n.g-val[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: var(--muted);\n  font-weight: 500;\n  white-space: nowrap;\n}\n.g-fill[_ngcontent-%COMP%] {\n  width: 100%;\n  background:\n    linear-gradient(\n      180deg,\n      var(--green) 0%,\n      var(--green-deep) 100%);\n  border-radius: 3px 3px 0 0;\n  transition: height 0.8s ease;\n  min-height: 4px;\n}\n.g-lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--muted);\n  font-weight: 500;\n}\n/*# sourceMappingURL=growth-chart.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GrowthChartComponent, { className: "GrowthChartComponent", filePath: "src/app/shared/components/growth-chart/growth-chart.component.ts", lineNumber: 15 });
})();

// src/app/features/investors/investors.component.ts
var _forTrack02 = ($index, $item) => $item.n;
var _forTrack1 = ($index, $item) => $item.pct;
var _c0 = () => ({ label: "Request data room", routerLink: "/investors" });
var _c1 = () => ["Back the verification", "layer of African carbon."];
var _c2 = () => ({ label: "Request the data room" });
var _c3 = () => ({ label: "Read the investor update" });
function InvestorsComponent_For_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r1.n);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r1.h);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r1.p);
  }
}
function InvestorsComponent_For_148_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "strong", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r2.pct);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r2.h);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r2.d, "");
  }
}
var InvestorsComponent = class _InvestorsComponent {
  constructor() {
    this.heroSlides = [
      {
        img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=80&auto=format&fit=crop",
        lbl: "Series A \xB7 2026",
        ttl: "Back the verification layer",
        sub: "The operating system for African carbon",
        live: "$12M \xB7 Open through Q3 2026"
      },
      {
        img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&q=80&auto=format&fit=crop",
        lbl: "Traction",
        ttl: "$1.4M ARR \xB7 38% MoM",
        sub: "282 projects \xB7 14 countries",
        live: "20\xD7 growth in 18 months"
      }
    ];
    this.moatCards = [
      {
        n: "7.1y",
        h: "Satellite baseline history",
        p: "Every project polygon backed by 7+ years of Sentinel-2 imagery. New entrants can't manufacture history they don't have."
      },
      {
        n: "630k",
        h: "Hectares under live MRV",
        p: "Every 5 days at 10m resolution. More monitored land than the next three African MRV operators combined."
      },
      {
        n: "3",
        h: "Standards integrations",
        p: "Verra, Gold Standard, and Plan Vivo each took 8\u201314 months to onboard. We are the only African platform certified for all three."
      },
      {
        n: "38",
        h: "In-country agents",
        p: "Local field teams across 14 countries. Trust is built in person, and our agent network is what makes 12-week issuance possible."
      }
    ];
    this.feeStreams = [
      { pct: "72%", h: "To project owners.", d: "The highest payout rate in African carbon. Projects keep the majority of what their work generates." },
      { pct: "15%", h: "Platform fee.", d: "Covers MRV monitoring, project listing, marketplace, and T+1 settlement. ~$2.78 per tCO\u2082e at platform-average pricing." },
      { pct: "10%", h: "Verification & issuance.", d: "Passed through at cost to your chosen standard body: Verra, Gold Standard, or Plan Vivo." }
    ];
  }
  static {
    this.\u0275fac = function InvestorsComponent_Factory(t) {
      return new (t || _InvestorsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvestorsComponent, selectors: [["fv-investors"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 163, vars: 10, consts: [[3, "dark", "cta"], ["eyebrow", "For investors", "lead", "We're raising the company building the rails for Africa's carbon markets. $12M Series A, open to thesis-aligned funds through Q3 2026.", 3, "slides", "lines", "cta1", "cta2"], [1, "stats"], [1, "wrap"], [1, "stats-grid"], [1, "stat"], [1, "n"], [1, "l"], ["id", "traction", 1, "traction"], [1, "sec-head"], [1, "eyebrow"], [2, "margin-top", "24px"], [1, "right"], [1, "traction-grid"], [1, "panel"], [1, "sub"], [1, "big-n"], [2, "margin-top", "auto"], [1, "delta"], [2, "margin-top", "auto", "font-size", "14px", "color", "var(--ink-2)"], [1, "panel", "large"], [2, "display", "flex", "justify-content", "space-between", "align-items", "flex-start"], [1, "growth-chart"], ["id", "moat", 1, "moat", 2, "background", "var(--paper)"], [1, "moat-grid"], [1, "moat-card"], ["id", "model"], [1, "model-grid"], [1, "model-visual"], [1, "credit-stack"], [1, "cs-row"], [2, "background", "var(--green)"], [2, "background", "var(--gold)"], [2, "background", "var(--ink-2)"], [2, "background", "var(--muted)"], [1, "credit-label"], [2, "font-family", "var(--font-display)", "font-size", "28px", "font-weight", "600", "letter-spacing", "-0.025em", "margin", "0 0 24px"], [1, "fee-list"], [1, "cta"], [1, "cta-in"], [1, "cta-actions"], [1, "btn", "btn-primary", "btn-lg"], [1, "arrow"], [1, "btn", "btn-ghost", "btn-lg"], [1, "num"], [1, "fee-pct"]], template: function InvestorsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "fv-nav", 0)(1, "fv-hero", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        \u0275\u0275text(7, "$1.4M");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 7);
        \u0275\u0275text(9, "ARR run-rate \xB7 Q2 2026");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 5)(11, "div", 6);
        \u0275\u0275text(12, "38%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 7);
        \u0275\u0275text(14, "MoM growth \xB7 9 straight months");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 5)(16, "div", 6);
        \u0275\u0275text(17, "282");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 7);
        \u0275\u0275text(19, "Active projects");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 5)(21, "div", 6);
        \u0275\u0275text(22, "96%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 7);
        \u0275\u0275text(24, "Revenue retention");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(25, "section", 8)(26, "div", 3)(27, "div", 9)(28, "div")(29, "div", 10);
        \u0275\u0275text(30, "Traction");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "h2", 11);
        \u0275\u0275text(32, "Real GMV. Real growth. Real signals.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 12)(34, "p");
        \u0275\u0275text(35, "$1.4M ARR run-rate as of Q2 2026, growing 38% month-over-month for nine straight months. Below: live dashboard you'll see in the data room.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 13)(37, "div", 14)(38, "div")(39, "h3");
        \u0275\u0275text(40, "Annualised revenue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "p", 15);
        \u0275\u0275text(42, "Run-rate \xB7 Q2 2026");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 16);
        \u0275\u0275text(44, "$1.4");
        \u0275\u0275elementStart(45, "small");
        \u0275\u0275text(46, "M ARR");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 17)(48, "span", 18);
        \u0275\u0275text(49, "\u2191 38% MoM avg.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "div", 14)(51, "div")(52, "h3");
        \u0275\u0275text(53, "Active projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "p", 15);
        \u0275\u0275text(55, "Across 14 African countries");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "div", 16);
        \u0275\u0275text(57, "282");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 19);
        \u0275\u0275text(59, " From ");
        \u0275\u0275elementStart(60, "strong");
        \u0275\u0275text(61, "14 at YE2023");
        \u0275\u0275elementEnd();
        \u0275\u0275text(62, " \xB7 20\xD7 in 18 months ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 14)(64, "div")(65, "h3");
        \u0275\u0275text(66, "Renewal rate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "p", 15);
        \u0275\u0275text(68, "Project developers \xB7 trailing 12M");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 16);
        \u0275\u0275text(70, "96");
        \u0275\u0275elementStart(71, "small");
        \u0275\u0275text(72, "%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "div", 19);
        \u0275\u0275text(74, " Net-revenue retention ");
        \u0275\u0275elementStart(75, "strong");
        \u0275\u0275text(76, "132%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(77, " across funder cohort. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(78, "div", 20)(79, "div", 21)(80, "div")(81, "h3");
        \u0275\u0275text(82, "Monthly GMV ($k) \xB7 trailing 12 months");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "p", 15);
        \u0275\u0275text(84, "Total platform credit volume settled \xB7 Jul 2025 \u2192 Jun 2026");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(85, "span", 18);
        \u0275\u0275text(86, "+38% MoM");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(87, "div", 22);
        \u0275\u0275element(88, "fv-growth-chart");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(89, "section", 23)(90, "div", 3)(91, "div", 9)(92, "div")(93, "div", 10);
        \u0275\u0275text(94, "The product moat");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "h2", 11);
        \u0275\u0275text(96, "We're not a marketplace. We're the verification layer.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "div", 12)(98, "p");
        \u0275\u0275text(99, "Anyone can build a marketplace. The defensible asset is the MRV stack; it's a 7-year, multi-million-dollar effort to replicate. We're three years in.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(100, "div", 24);
        \u0275\u0275repeaterCreate(101, InvestorsComponent_For_102_Template, 7, 3, "div", 25, _forTrack02);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(103, "section", 26)(104, "div", 3)(105, "div", 9)(106, "div")(107, "div", 10);
        \u0275\u0275text(108, "Business model");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "h2", 11);
        \u0275\u0275text(110, "Three fee streams. One platform.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(111, "div", 12)(112, "p");
        \u0275\u0275text(113, "Every dollar of revenue is attached to real carbon infrastructure work, not arbitrage. As the market grows, so do our take rates.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(114, "div", 27)(115, "div", 28)(116, "div", 29)(117, "div", 30);
        \u0275\u0275element(118, "i", 31);
        \u0275\u0275elementStart(119, "strong");
        \u0275\u0275text(120, "$13.32");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "span");
        \u0275\u0275text(122, "Project owner \xB7 72% of credit value");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(123, "div", 30);
        \u0275\u0275element(124, "i", 32);
        \u0275\u0275elementStart(125, "strong");
        \u0275\u0275text(126, "$2.78");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "span");
        \u0275\u0275text(128, "Foovante platform fee \xB7 15%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(129, "div", 30);
        \u0275\u0275element(130, "i", 33);
        \u0275\u0275elementStart(131, "strong");
        \u0275\u0275text(132, "$1.85");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "span");
        \u0275\u0275text(134, "Verification & issuance \xB7 10%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(135, "div", 30);
        \u0275\u0275element(136, "i", 34);
        \u0275\u0275elementStart(137, "strong");
        \u0275\u0275text(138, "$0.55");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "span");
        \u0275\u0275text(140, "Methodology & spec costs");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(141, "div", 35);
        \u0275\u0275text(142, "Per $18.50 credit \xB7 illustrative");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(143, "div")(144, "p", 36);
        \u0275\u0275text(145, " Three platform-fee streams. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "ul", 37);
        \u0275\u0275repeaterCreate(147, InvestorsComponent_For_148_Template, 7, 3, "li", null, _forTrack1);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(149, "section", 38)(150, "div", 39)(151, "h2");
        \u0275\u0275text(152, "Ready to see the data room?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "p");
        \u0275\u0275text(154, "We share financials, cap table, investor update, and full technical documentation with thesis-aligned funds. Drop your details and we'll send access within one business day.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "div", 40)(156, "a", 41);
        \u0275\u0275text(157, "Request data room ");
        \u0275\u0275elementStart(158, "span", 42);
        \u0275\u0275text(159, "\u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(160, "a", 43);
        \u0275\u0275text(161, "Talk to the founders");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(162, "fv-footer");
      }
      if (rf & 2) {
        \u0275\u0275property("dark", true)("cta", \u0275\u0275pureFunction0(6, _c0));
        \u0275\u0275advance();
        \u0275\u0275property("slides", ctx.heroSlides)("lines", \u0275\u0275pureFunction0(7, _c1))("cta1", \u0275\u0275pureFunction0(8, _c2))("cta2", \u0275\u0275pureFunction0(9, _c3));
        \u0275\u0275advance(100);
        \u0275\u0275repeater(ctx.moatCards);
        \u0275\u0275advance(46);
        \u0275\u0275repeater(ctx.feeStreams);
      }
    }, dependencies: [NavComponent, FooterComponent, HeroComponent, GrowthChartComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.traction[_ngcontent-%COMP%] {\n  padding: 120px 0;\n}\n.traction-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 1px;\n  background: var(--line);\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  overflow: hidden;\n}\n.traction-grid[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  min-height: 280px;\n  overflow: hidden;\n}\n.traction-grid[_ngcontent-%COMP%]   .panel.large[_ngcontent-%COMP%] {\n  grid-column: span 3;\n  min-height: 320px;\n}\n.growth-chart[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-height: 200px;\n  margin-top: 16px;\n}\n.moat[_ngcontent-%COMP%] {\n  padding: 120px 0;\n}\n.moat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n.moat-card[_ngcontent-%COMP%] {\n  padding: 32px;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  background: var(--bg);\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.moat-card[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 36px;\n  font-weight: 700;\n  letter-spacing: -0.04em;\n  line-height: 1;\n  color: var(--gold);\n}\n.moat-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 17px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  margin: 0;\n}\n.moat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ink-2);\n  margin: 0;\n  line-height: 1.6;\n}\n.model-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 80px;\n  align-items: center;\n}\n.model-visual[_ngcontent-%COMP%] {\n  background: var(--paper);\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 36px;\n}\n.credit-stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  border: 1px solid var(--line);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.cs-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px;\n  font-size: 14px;\n  border-bottom: 1px solid var(--line-soft);\n}\n.cs-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.cs-row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.cs-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  min-width: 64px;\n  flex-shrink: 0;\n}\n.cs-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--ink-2);\n  flex: 1;\n  min-width: 0;\n  line-height: 1.45;\n}\n.credit-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--muted);\n  margin-top: 16px;\n  text-align: center;\n  font-weight: 500;\n}\n.fee-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.fee-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  font-size: 15px;\n  color: var(--ink-2);\n  line-height: 1.55;\n  align-items: flex-start;\n  overflow-wrap: break-word;\n}\n.fee-pct[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  color: var(--gold);\n  font-size: 22px;\n  font-weight: 700;\n  flex-shrink: 0;\n  min-width: 56px;\n  line-height: 1.2;\n}\n@media (max-width: 980px) {\n  .traction-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .panel.large[_ngcontent-%COMP%] {\n    grid-column: span 2;\n  }\n  .moat-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .model-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 48px;\n  }\n}\n/*# sourceMappingURL=investors.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvestorsComponent, { className: "InvestorsComponent", filePath: "src/app/features/investors/investors.component.ts", lineNumber: 15 });
})();
export {
  InvestorsComponent
};
//# sourceMappingURL=chunk-JWYFCYEV.js.map
