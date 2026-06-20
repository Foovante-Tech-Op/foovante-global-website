import {
  FooterComponent,
  HeroComponent,
  NavComponent
} from "./chunk-EOORU742.js";
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-SCSMG4QD.js";

// src/app/features/investors/investors.component.ts
var _c0 = () => ({ label: "Request data room", routerLink: "/investors" });
var _c1 = () => ["Back the verification", "layer of African carbon."];
var _c2 = () => ({ label: "Request the data room", routerLink: "/founder-brief" });
var _c3 = () => ({ label: "Talk to the founders", href: "https://form.jotform.com/261642531528052" });
var _forTrack0 = ($index, $item) => $item.n;
var _forTrack1 = ($index, $item) => $item.pct;
function InvestorsComponent_For_115_Template(rf, ctx) {
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
function InvestorsComponent_For_161_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate1(" ", f_r2.d);
  }
}
var InvestorsComponent = class _InvestorsComponent {
  constructor() {
    this.heroSlides = [
      {
        img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=80&auto=format&fit=crop",
        lbl: "Pre-seed \xB7 2026",
        ttl: "Back the verification layer",
        sub: "The operating system for African carbon",
        live: "Pre-seed round open \xB7 thesis-aligned investors"
      },
      {
        img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&q=80&auto=format&fit=crop",
        lbl: "Early traction",
        ttl: "3 pilots. 3,620 ha. Ghana.",
        sub: "3 pilot projects \xB7 active documentation \xB7 Ghana",
        live: "Break-even projected 2028"
      }
    ];
    this.moatCards = [
      {
        n: "3",
        h: "Pilot projects onboarded",
        p: "Three projects are actively onboarded to Crevy and building their verification evidence trail the hardest part of launching a carbon platform in Africa."
      },
      {
        n: "3,620 ha",
        h: "Hectares under active documentation",
        p: "Project developers are documenting sustainable practices across 3,620 hectares spanning Northern Savanna, Bono, and Ameyawkope farmlands measured and evidenced for the first time."
      },
      {
        n: "3",
        h: "Carbon economies covered",
        p: "Green, Blue, and Brown carbon project types are all supported on the platform. Agriculture, energy, and waste the early-stage projects global buyers cannot easily reach or verify on their own."
      },
      {
        n: "16",
        h: "Published references behind our Theory of Change",
        p: "Our Theory of Change has been reviewed and updated with our impact advisor, underpinned by 16 published references. Every impact claim we make is evidenced."
      }
    ];
    this.feeStreams = [
      { pct: "72%", h: "To project owners.", d: "The highest payout rate in African carbon. Projects keep the majority of what their work generates." },
      { pct: "15%", h: "Platform fee.", d: "Covers MRV monitoring, project listing, marketplace, and T+1 settlement. ~$2.78 per tCO\u2082e at platform-average pricing." },
      { pct: "10%", h: "Verification & issuance.", d: "Passed through at cost to your chosen standard body: Verra, Gold Standard, or Plan Vivo." }
    ];
  }
  static {
    this.\u0275fac = function InvestorsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InvestorsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvestorsComponent, selectors: [["fv-investors"]], decls: 176, vars: 10, consts: [[3, "dark", "cta"], ["eyebrow", "For investors", "lead", "We're raising the pre-seed round for the company building the verification and marketplace infrastructure for African carbon. Open to thesis-aligned investors.", 3, "slides", "lines", "cta1", "cta2"], [1, "stats"], [1, "wrap"], [1, "stats-grid"], [1, "stat"], [1, "n"], [1, "l"], ["id", "traction", 1, "traction"], [1, "sec-head"], [1, "eyebrow"], [2, "margin-top", "24px"], [1, "right"], [1, "traction-grid"], [1, "panel"], [2, "font-size", "14px", "color", "var(--muted)", "margin-top", "4px"], [1, "sub"], [1, "big-n"], [2, "margin-top", "auto", "font-size", "14px", "color", "var(--ink-2)"], [2, "display", "flex", "flex-direction", "column", "gap", "12px", "margin-top", "24px"], [2, "font-size", "14px", "color", "var(--ink-2)"], [1, "panel", "panel-image"], ["src", "assets/images/forest.jpg", "alt", "Plantation in Ghana"], ["id", "moat", 1, "moat", 2, "background", "var(--paper)"], [1, "moat-grid"], [1, "moat-card"], ["id", "model"], [1, "model-grid"], [1, "model-visual"], [1, "credit-stack"], [1, "cs-row"], [2, "background", "var(--green)"], [2, "background", "var(--gold)"], [2, "background", "var(--ink-2)"], [2, "background", "var(--muted)"], [1, "credit-label"], [2, "font-family", "var(--font-display)", "font-size", "28px", "font-weight", "600", "letter-spacing", "-0.025em", "margin", "0 0 24px"], [1, "fee-list"], [1, "cta"], [1, "cta-in"], [1, "cta-actions"], ["routerLink", "/founder-brief", 1, "btn", "btn-primary", "btn-lg"], [1, "arrow"], ["href", "https://form.jotform.com/261642531528052", "target", "_blank", "rel", "noopener", 1, "btn", "btn-ghost", "btn-lg"], [1, "num"], [1, "fee-pct"]], template: function InvestorsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "fv-nav", 0)(1, "fv-hero", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        \u0275\u0275text(7, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 7);
        \u0275\u0275text(9, "Pilot projects \xB7 active documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 5)(11, "div", 6);
        \u0275\u0275text(12, "3,620 ha");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 7);
        \u0275\u0275text(14, "Hectares under active documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 5)(16, "div", 6);
        \u0275\u0275text(17, "2028");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 7);
        \u0275\u0275text(19, "Projected break-even");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 5)(21, "div", 6);
        \u0275\u0275text(22, "16");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 7);
        \u0275\u0275text(24, "Published references \xB7 Theory of Change");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(25, "section", 8)(26, "div", 3)(27, "div", 9)(28, "div")(29, "div", 10);
        \u0275\u0275text(30, "Traction");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "h2", 11);
        \u0275\u0275text(32, "Pre-seed stage. Real foundations.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 12)(34, "p");
        \u0275\u0275text(35, "We are pre-revenue, building the infrastructure and pilot track record that unlocks the carbon market opportunity. Here is what is real and verified today.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 13)(37, "div", 14)(38, "div")(39, "h3");
        \u0275\u0275text(40, "Pilot projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "p", 15);
        \u0275\u0275text(42, "The first step in our onboarding process. We review every application personally.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "p", 16);
        \u0275\u0275text(44, "Onboarded to Crevy \xB7 active documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 17);
        \u0275\u0275text(46, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 18);
        \u0275\u0275text(48, " Ghana active \xB7 ");
        \u0275\u0275elementStart(49, "strong");
        \u0275\u0275text(50, "Nigeria pipeline");
        \u0275\u0275elementEnd();
        \u0275\u0275text(51, " for Q2 2027 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 14)(53, "div")(54, "h3");
        \u0275\u0275text(55, "Hectares documented");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "p", 15);
        \u0275\u0275text(57, "Verified evidence trail in Crevy for thousands of hectares of carbon projects.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "p", 16);
        \u0275\u0275text(59, "Under active MRV documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 17);
        \u0275\u0275text(61, "3,620");
        \u0275\u0275elementStart(62, "small");
        \u0275\u0275text(63, " ha");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "div", 18);
        \u0275\u0275text(65, " Agriculture \xB7 forestry \xB7 waste project types ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "div", 14)(67, "div")(68, "h3");
        \u0275\u0275text(69, "Projected 2026 revenue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "p", 15);
        \u0275\u0275text(71, "Revenue in 2026 will come from pilot projects and early platform fees as we build the foundation for growth.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "p", 16);
        \u0275\u0275text(73, "Financial model \xB7 advisor-reviewed");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "div", 17);
        \u0275\u0275text(75, "$28");
        \u0275\u0275elementStart(76, "small");
        \u0275\u0275text(77, "k");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(78, "div", 18);
        \u0275\u0275text(79, " Break-even projected ");
        \u0275\u0275elementStart(80, "strong");
        \u0275\u0275text(81, "2028");
        \u0275\u0275elementEnd();
        \u0275\u0275text(82, " \xB7 stress-tested model ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "div", 14)(84, "div")(85, "h3");
        \u0275\u0275text(86, "Foundation work complete");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "p", 15);
        \u0275\u0275text(88, "The legal, compliance, and evidence-gathering foundation for a credible carbon platform.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "p", 16);
        \u0275\u0275text(90, "Compliance, legal & evidence base");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(91, "div", 19)(92, "div", 20);
        \u0275\u0275text(93, "\u2713 Legal infrastructure \u2014 Privacy Policy, T&Cs, MOU templates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "div", 20);
        \u0275\u0275text(95, "\u2713 Financial model reviewed & stress-tested by finance advisor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "div", 20);
        \u0275\u0275text(97, "\u2713 Theory of Change \u2014 16 published references, impact-advisor reviewed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "div", 20);
        \u0275\u0275text(99, "\u2713 25% community benefit-sharing \u2014 required for all projects");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(100, "div", 21);
        \u0275\u0275element(101, "img", 22);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(102, "section", 23)(103, "div", 3)(104, "div", 9)(105, "div")(106, "div", 10);
        \u0275\u0275text(107, "The product moat");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "h2", 11);
        \u0275\u0275text(109, "We're not a marketplace. We're the verification layer.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(110, "div", 12)(111, "p");
        \u0275\u0275text(112, "The defensible asset in carbon markets is not the trading interface it is the verified evidence trail. Crevy is built to create that trail for African projects that have never had access to it.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(113, "div", 24);
        \u0275\u0275repeaterCreate(114, InvestorsComponent_For_115_Template, 7, 3, "div", 25, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(116, "section", 26)(117, "div", 3)(118, "div", 9)(119, "div")(120, "div", 10);
        \u0275\u0275text(121, "Business model");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "h2", 11);
        \u0275\u0275text(123, "Three fee streams. One platform.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(124, "div", 12)(125, "p");
        \u0275\u0275text(126, "Every dollar of revenue is attached to real carbon infrastructure work, not arbitrage. As the market grows, so do our take rates.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(127, "div", 27)(128, "div", 28)(129, "div", 29)(130, "div", 30);
        \u0275\u0275element(131, "i", 31);
        \u0275\u0275elementStart(132, "strong");
        \u0275\u0275text(133, "$13.32");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "span");
        \u0275\u0275text(135, "Project owner \xB7 72% of credit value");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(136, "div", 30);
        \u0275\u0275element(137, "i", 32);
        \u0275\u0275elementStart(138, "strong");
        \u0275\u0275text(139, "$2.78");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "span");
        \u0275\u0275text(141, "Foovante platform fee \xB7 15%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(142, "div", 30);
        \u0275\u0275element(143, "i", 33);
        \u0275\u0275elementStart(144, "strong");
        \u0275\u0275text(145, "$1.85");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "span");
        \u0275\u0275text(147, "Verification & issuance \xB7 10%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(148, "div", 30);
        \u0275\u0275element(149, "i", 34);
        \u0275\u0275elementStart(150, "strong");
        \u0275\u0275text(151, "$0.55");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "span");
        \u0275\u0275text(153, "Methodology & spec costs");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(154, "div", 35);
        \u0275\u0275text(155, "Per $18.50 credit \xB7 illustrative");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(156, "div")(157, "p", 36);
        \u0275\u0275text(158, " Three platform-fee streams. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(159, "ul", 37);
        \u0275\u0275repeaterCreate(160, InvestorsComponent_For_161_Template, 7, 3, "li", null, _forTrack1);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(162, "section", 38)(163, "div", 39)(164, "h2");
        \u0275\u0275text(165, "Ready to see the data room?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(166, "p");
        \u0275\u0275text(167, "We share financials, cap table, investor update, and full technical documentation with thesis-aligned funds. Drop your details and we'll send access within one business day.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(168, "div", 40)(169, "a", 41);
        \u0275\u0275text(170, "Request data room ");
        \u0275\u0275elementStart(171, "span", 42);
        \u0275\u0275text(172, "\u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(173, "a", 43);
        \u0275\u0275text(174, "Talk to the founders");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(175, "fv-footer");
      }
      if (rf & 2) {
        \u0275\u0275property("dark", true)("cta", \u0275\u0275pureFunction0(6, _c0));
        \u0275\u0275advance();
        \u0275\u0275property("slides", ctx.heroSlides)("lines", \u0275\u0275pureFunction0(7, _c1))("cta1", \u0275\u0275pureFunction0(8, _c2))("cta2", \u0275\u0275pureFunction0(9, _c3));
        \u0275\u0275advance(113);
        \u0275\u0275repeater(ctx.moatCards);
        \u0275\u0275advance(46);
        \u0275\u0275repeater(ctx.feeStreams);
      }
    }, dependencies: [NavComponent, FooterComponent, HeroComponent, RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.traction[_ngcontent-%COMP%] {\n  padding: 120px 0;\n}\n.traction-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 1px;\n  background: var(--line);\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  overflow: hidden;\n}\n.traction-grid[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  min-height: 280px;\n  overflow: hidden;\n}\n.traction-grid[_ngcontent-%COMP%]   .panel.large[_ngcontent-%COMP%] {\n  grid-column: span 3;\n  min-height: 320px;\n}\n.traction-grid[_ngcontent-%COMP%]   .panel-image[_ngcontent-%COMP%] {\n  grid-column: span 2;\n  padding: 0;\n}\n.traction-grid[_ngcontent-%COMP%]   .panel-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.growth-chart[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-height: 200px;\n  margin-top: 16px;\n}\n.moat[_ngcontent-%COMP%] {\n  padding: 120px 0;\n}\n.moat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n.moat-card[_ngcontent-%COMP%] {\n  padding: 32px;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  background: var(--bg);\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.moat-card[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 36px;\n  font-weight: 700;\n  letter-spacing: -0.04em;\n  line-height: 1;\n  color: var(--gold);\n}\n.moat-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 17px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  margin: 0;\n}\n.moat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ink-2);\n  margin: 0;\n  line-height: 1.6;\n}\n.model-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 80px;\n  align-items: center;\n}\n.model-visual[_ngcontent-%COMP%] {\n  background: var(--paper);\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 36px;\n}\n.credit-stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  border: 1px solid var(--line);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.cs-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px;\n  font-size: 14px;\n  border-bottom: 1px solid var(--line-soft);\n}\n.cs-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.cs-row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.cs-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  min-width: 64px;\n  flex-shrink: 0;\n}\n.cs-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--ink-2);\n  flex: 1;\n  min-width: 0;\n  line-height: 1.45;\n}\n.credit-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--muted);\n  margin-top: 16px;\n  text-align: center;\n  font-weight: 500;\n}\n.fee-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.fee-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  font-size: 15px;\n  color: var(--ink-2);\n  line-height: 1.55;\n  align-items: flex-start;\n  overflow-wrap: break-word;\n}\n.fee-pct[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  color: var(--gold);\n  font-size: 22px;\n  font-weight: 700;\n  flex-shrink: 0;\n  min-width: 56px;\n  line-height: 1.2;\n}\n@media (max-width: 980px) {\n  .traction-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .panel.large[_ngcontent-%COMP%] {\n    grid-column: span 2;\n  }\n  .panel-image[_ngcontent-%COMP%] {\n    grid-column: span 2;\n  }\n  .moat-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .model-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 48px;\n  }\n}\n/*# sourceMappingURL=investors.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvestorsComponent, [{
    type: Component,
    args: [{ selector: "fv-investors", imports: [NavComponent, FooterComponent, HeroComponent, RouterLink], template: `<fv-nav [dark]="true" [cta]="{label: 'Request data room', routerLink: '/investors'}"></fv-nav>

<fv-hero
  [slides]="heroSlides"
  eyebrow="For investors"
  [lines]="['Back the verification', 'layer of African carbon.']"
  lead="We're raising the pre-seed round for the company building the verification and marketplace infrastructure for African carbon. Open to thesis-aligned investors."
  [cta1]="{label: 'Request the data room', routerLink: '/founder-brief'}"
  [cta2]="{label: 'Talk to the founders', href: 'https://form.jotform.com/261642531528052'}"
></fv-hero>

<!-- Stats Band -->
<div class="stats">
  <div class="wrap">
    <div class="stats-grid">
      <div class="stat"><div class="n">3</div><div class="l">Pilot projects \xB7 active documentation</div></div>
      <div class="stat"><div class="n">3,620 ha</div><div class="l">Hectares under active documentation</div></div>
      <div class="stat"><div class="n">2028</div><div class="l">Projected break-even</div></div>
      <div class="stat"><div class="n">16</div><div class="l">Published references \xB7 Theory of Change</div></div>
    </div>
  </div>
</div>

<!-- Traction Section -->
<section class="traction" id="traction">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <div class="eyebrow">Traction</div>
        <h2 style="margin-top:24px">Pre-seed stage. Real foundations.</h2>
      </div>
      <div class="right">
        <p>We are pre-revenue, building the infrastructure and pilot track record that unlocks the carbon market opportunity. Here is what is real and verified today.</p>
      </div>
    </div>

    <div class="traction-grid">
      <div class="panel">
        <div>
          <h3>Pilot projects</h3>
          <p style="font-size:14px;color:var(--muted);margin-top:4px">The first step in our onboarding process. We review every application personally.</p>

          
          <p class="sub">Onboarded to Crevy \xB7 active documentation</p>
        </div>
        <div class="big-n">3</div>
        <div style="margin-top:auto;font-size:14px;color:var(--ink-2)">
          Ghana active \xB7 <strong>Nigeria pipeline</strong> for Q2 2027
        </div>
      </div>

      <div class="panel">
        <div>
          <h3>Hectares documented</h3>
          <p style="font-size:14px;color:var(--muted);margin-top:4px">Verified evidence trail in Crevy for thousands of hectares of carbon projects.</p>
          <p class="sub">Under active MRV documentation</p>
        </div>
        <div class="big-n">3,620<small> ha</small></div>
        <div style="margin-top:auto;font-size:14px;color:var(--ink-2)">
          Agriculture \xB7 forestry \xB7 waste project types
        </div>
      </div>

      <div class="panel">
        <div>
          <h3>Projected 2026 revenue</h3>
          <p style="font-size:14px;color:var(--muted);margin-top:4px">Revenue in 2026 will come from pilot projects and early platform fees as we build the foundation for growth.</p>
          <p class="sub">Financial model \xB7 advisor-reviewed</p>
        </div>
        <div class="big-n">$28<small>k</small></div>
        <div style="margin-top:auto;font-size:14px;color:var(--ink-2)">
          Break-even projected <strong>2028</strong> \xB7 stress-tested model
        </div>
      </div>

      <div class="panel">
        <div>
          <h3>Foundation work complete</h3>
          <p style="font-size:14px;color:var(--muted);margin-top:4px">The legal, compliance, and evidence-gathering foundation for a credible carbon platform.</p>
          <p class="sub">Compliance, legal & evidence base</p>
        </div>
        <div style="display:flex;flex-direction:column;gap:12px;margin-top:24px">
          <div style="font-size:14px;color:var(--ink-2)">\u2713 Legal infrastructure \u2014 Privacy Policy, T&amp;Cs, MOU templates</div>
          <div style="font-size:14px;color:var(--ink-2)">\u2713 Financial model reviewed &amp; stress-tested by finance advisor</div>
          <div style="font-size:14px;color:var(--ink-2)">\u2713 Theory of Change \u2014 16 published references, impact-advisor reviewed</div>
          <div style="font-size:14px;color:var(--ink-2)">\u2713 25% community benefit-sharing \u2014 required for all projects</div>
        </div>
      </div>
      <div class="panel panel-image">
        <img src="assets/images/forest.jpg" alt="Plantation in Ghana" />
      </div>
    </div>
  </div>
</section>

<!-- Moat Section -->
<section class="moat" id="moat" style="background:var(--paper)">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <div class="eyebrow">The product moat</div>
        <h2 style="margin-top:24px">We're not a marketplace. We're the verification layer.</h2>
      </div>
      <div class="right">
        <p>The defensible asset in carbon markets is not the trading interface it is the verified evidence trail. Crevy is built to create that trail for African projects that have never had access to it.</p>
      </div>
    </div>
    <div class="moat-grid">
      @for (m of moatCards; track m.n) {
        <div class="moat-card">
          <div class="num">{{ m.n }}</div>
          <h4>{{ m.h }}</h4>
          <p>{{ m.p }}</p>
        </div>
      }
    </div>
  </div>
</section>

<!-- Business Model -->
<section id="model">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <div class="eyebrow">Business model</div>
        <h2 style="margin-top:24px">Three fee streams. One platform.</h2>
      </div>
      <div class="right">
        <p>Every dollar of revenue is attached to real carbon infrastructure work, not arbitrage. As the market grows, so do our take rates.</p>
      </div>
    </div>

    <div class="model-grid">
      <div class="model-visual">
        <div class="credit-stack">
          <div class="cs-row">
            <i style="background:var(--green)"></i>
            <strong>$13.32</strong>
            <span>Project owner \xB7 72% of credit value</span>
          </div>
          <div class="cs-row">
            <i style="background:var(--gold)"></i>
            <strong>$2.78</strong>
            <span>Foovante platform fee \xB7 15%</span>
          </div>
          <div class="cs-row">
            <i style="background:var(--ink-2)"></i>
            <strong>$1.85</strong>
            <span>Verification &amp; issuance \xB7 10%</span>
          </div>
          <div class="cs-row">
            <i style="background:var(--muted)"></i>
            <strong>$0.55</strong>
            <span>Methodology &amp; spec costs</span>
          </div>
        </div>
        <div class="credit-label">Per $18.50 credit \xB7 illustrative</div>
      </div>

      <div>
        <p style="font-family:var(--font-display);font-size:28px;font-weight:600;letter-spacing:-0.025em;margin:0 0 24px">
          Three platform-fee streams.
        </p>
        <ul class="fee-list">
          @for (f of feeStreams; track f.pct) {
            <li>
              <strong class="fee-pct">{{ f.pct }}</strong>
              <span><strong>{{ f.h }}</strong> {{ f.d }}</span>
            </li>
          }
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta">
  <div class="cta-in">
    <h2>Ready to see the data room?</h2>
    <p>We share financials, cap table, investor update, and full technical documentation with thesis-aligned funds. Drop your details and we'll send access within one business day.</p>
    <div class="cta-actions">
      <a class="btn btn-primary btn-lg" routerLink="/founder-brief">Request data room <span class="arrow">\u2192</span></a>
      <a class="btn btn-ghost btn-lg" href="https://form.jotform.com/261642531528052" target="_blank" rel="noopener">Talk to the founders</a>
    </div>
  </div>
</section>

<fv-footer></fv-footer>
`, styles: ["/* src/app/features/investors/investors.component.scss */\n:host {\n  display: block;\n}\n.traction {\n  padding: 120px 0;\n}\n.traction-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 1px;\n  background: var(--line);\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  overflow: hidden;\n}\n.traction-grid .panel {\n  min-height: 280px;\n  overflow: hidden;\n}\n.traction-grid .panel.large {\n  grid-column: span 3;\n  min-height: 320px;\n}\n.traction-grid .panel-image {\n  grid-column: span 2;\n  padding: 0;\n}\n.traction-grid .panel-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.growth-chart {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-height: 200px;\n  margin-top: 16px;\n}\n.moat {\n  padding: 120px 0;\n}\n.moat-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n.moat-card {\n  padding: 32px;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  background: var(--bg);\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.moat-card .num {\n  font-family: var(--font-display);\n  font-size: 36px;\n  font-weight: 700;\n  letter-spacing: -0.04em;\n  line-height: 1;\n  color: var(--gold);\n}\n.moat-card h4 {\n  font-family: var(--font-display);\n  font-size: 17px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  margin: 0;\n}\n.moat-card p {\n  font-size: 14px;\n  color: var(--ink-2);\n  margin: 0;\n  line-height: 1.6;\n}\n.model-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 80px;\n  align-items: center;\n}\n.model-visual {\n  background: var(--paper);\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 36px;\n}\n.credit-stack {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  border: 1px solid var(--line);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.cs-row {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px;\n  font-size: 14px;\n  border-bottom: 1px solid var(--line-soft);\n}\n.cs-row:last-child {\n  border-bottom: 0;\n}\n.cs-row i {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.cs-row strong {\n  font-family: var(--font-display);\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  min-width: 64px;\n  flex-shrink: 0;\n}\n.cs-row span {\n  color: var(--ink-2);\n  flex: 1;\n  min-width: 0;\n  line-height: 1.45;\n}\n.credit-label {\n  font-size: 12px;\n  color: var(--muted);\n  margin-top: 16px;\n  text-align: center;\n  font-weight: 500;\n}\n.fee-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.fee-list li {\n  display: flex;\n  gap: 20px;\n  font-size: 15px;\n  color: var(--ink-2);\n  line-height: 1.55;\n  align-items: flex-start;\n  overflow-wrap: break-word;\n}\n.fee-pct {\n  font-family: var(--font-display);\n  color: var(--gold);\n  font-size: 22px;\n  font-weight: 700;\n  flex-shrink: 0;\n  min-width: 56px;\n  line-height: 1.2;\n}\n@media (max-width: 980px) {\n  .traction-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n  .panel.large {\n    grid-column: span 2;\n  }\n  .panel-image {\n    grid-column: span 2;\n  }\n  .moat-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n  .model-grid {\n    grid-template-columns: 1fr;\n    gap: 48px;\n  }\n}\n/*# sourceMappingURL=investors.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvestorsComponent, { className: "InvestorsComponent", filePath: "src/app/features/investors/investors.component.ts", lineNumber: 14 });
})();
export {
  InvestorsComponent
};
//# sourceMappingURL=chunk-SIWXUML7.js.map
