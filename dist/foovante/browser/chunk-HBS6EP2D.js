import {
  METHODS
} from "./chunk-Y6X7OOBV.js";
import {
  MapSectionComponent
} from "./chunk-YG7CO3AS.js";
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
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-SAJFQ2U5.js";
import "./chunk-WKYGNSYM.js";

// src/app/features/projects/projects.component.ts
var _forTrack0 = ($index, $item) => $item.n;
var _forTrack1 = ($index, $item) => $item.badge;
var _c0 = () => ({ label: "Apply to list", routerLink: "/projects" });
var _c1 = () => ["Turn your land work into", "real climate finance."];
var _c2 = () => ({ label: "Apply to list your project", routerLink: "/projects" });
var _c3 = () => ({ label: "See methodology library" });
function ProjectsComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 71);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 72);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.n);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.h);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.p);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.meta);
  }
}
function ProjectsComponent_For_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 73);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 74);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 75)(8, "span");
    \u0275\u0275text(9, "Min. size ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "Crediting ");
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r2.badge);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r2.h);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r2.desc);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(m_r2.minSize);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(m_r2.dur);
  }
}
function ProjectsComponent_For_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.n);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r3.h);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.p);
  }
}
var ProjectsComponent = class _ProjectsComponent {
  constructor() {
    this.methods = METHODS;
    this.heroSlides = [
      {
        img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&q=80&auto=format&fit=crop",
        lbl: "Agroforestry \xB7 ARR",
        ttl: "Akagera Agroforestry Co-op",
        sub: "Eastern Province, Rwanda \xB7 Verra VCS",
        live: "~12 weeks to first issuance"
      },
      {
        img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=80&auto=format&fit=crop",
        lbl: "Forestry \xB7 REDD+",
        ttl: "Kakum Forest Corridor",
        sub: "Central Region, Ghana \xB7 Verra VCS",
        live: "78% of revenue to project"
      },
      {
        img: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1800&q=80&auto=format&fit=crop",
        lbl: "Blue carbon",
        ttl: "Volta Estuary Mangroves",
        sub: "Keta, Ghana \xB7 Plan Vivo",
        live: "Sentinel-2 baselining included"
      }
    ];
    this.steps = [
      {
        n: "01",
        h: "Submit intake form",
        p: "Ten-minute application. Polygon (or KML), project type, primary contact, and any prior verification work. We review within 48 hours.",
        meta: "Free \xB7 No commitment"
      },
      {
        n: "02",
        h: "Satellite baseline",
        p: "Our team runs 7+ years of Sentinel-2 imagery on your polygon and delivers a preliminary baseline report within two weeks.",
        meta: "10m resolution \xB7 5-day cadence"
      },
      {
        n: "03",
        h: "Verification dossier",
        p: "Field agents capture soil samples, biomass plots, and household surveys via the Foovante mobile app. We assemble the verifier dossier.",
        meta: "6-week avg. review cycle"
      },
      {
        n: "04",
        h: "List and fund",
        p: "Your project goes live on the Foovante marketplace. Funders can pre-purchase credits or stake into the project. Revenue flows to you T+1.",
        meta: "78% of credit revenue to project"
      }
    ];
    this.priorities = [
      {
        n: "P1",
        h: "African projects only",
        p: "We focus exclusively on Sub-Saharan African projects. Every member of our verification team operates on the continent."
      },
      {
        n: "P2",
        h: "Land tenure and community consent documented",
        p: "We require proof of land rights and free, prior, and informed consent from affected communities before listing."
      },
      {
        n: "P3",
        h: "Eligible under at least one major standard",
        p: "Projects must be eligible for Verra VCS, Gold Standard, or Plan Vivo certification. We'll help you find the right methodology."
      },
      {
        n: "P4",
        h: "Standards-anchored, on-chain serialised",
        p: "Every credit issued under Verra, Gold Standard, or Plan Vivo. Every tonne hashed and serialised so any buyer can trace it back to the polygon it came from."
      }
    ];
  }
  static {
    this.\u0275fac = function ProjectsComponent_Factory(t) {
      return new (t || _ProjectsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsComponent, selectors: [["fv-projects"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 262, vars: 10, consts: [[3, "dark", "cta"], ["eyebrow", "For project developers", "lead", "Foovante helps African renewable-energy, agriculture, and forestry projects generate, verify, and sell carbon credits, without London middlemen taking 40%. Built in Accra, for projects on the continent.", 3, "slides", "lines", "cta1", "cta2"], [1, "stats"], [1, "wrap"], [1, "stats-grid"], [1, "stat"], [1, "n"], [1, "l"], [1, "sec-head"], [1, "eyebrow"], [2, "margin-top", "24px"], [1, "right"], [1, "steps"], [1, "step"], ["id", "verify", 1, "verify-band"], [1, "verify-grid"], [1, "verify-card"], [1, "num"], ["id", "methodology", 1, "methods"], [1, "method-grid"], [1, "method"], ["id", "network"], [1, "priority-sec"], [1, "pri-grid"], [1, "pri"], ["id", "apply", 1, "apply"], [1, "apply-grid"], [1, "story"], [2, "margin-top", "24px", "font-size", "28px"], [1, "attrib"], [1, "av"], [1, "nm"], [1, "ro"], [2, "display", "flex", "gap", "48px", "margin-top", "48px", "flex-wrap", "wrap"], [2, "font-family", "var(--font-display)", "font-size", "36px", "font-weight", "700", "letter-spacing", "-0.03em", "line-height", "1"], [2, "font-size", "13px", "color", "var(--muted)", "margin-top", "8px", "font-weight", "500"], [1, "apply-form"], [1, "sub"], [1, "stepper"], [1, "dot", "active"], [1, "seg", "active"], [1, "dot"], [1, "seg"], [1, "field"], ["type", "text", "placeholder", "e.g. Volta Estuary Mangroves"], [1, "field-row"], ["value", "gh"], ["value", "ng"], ["value", "ke"], ["value", "rw"], ["value", "et"], ["value", "tz"], ["value", "ug"], ["value", "sn"], ["value", "ci"], ["value", "cm"], ["value", "za"], ["value", "mz"], ["value", "mw"], ["value", "zm"], ["type", "number", "placeholder", "e.g. 2500"], ["type", "text", "placeholder", "e.g. Kwame Asante \xB7 Project Manager"], ["type", "email", "placeholder", "you@project.org"], [1, "btn", "btn-primary", 2, "width", "100%", "justify-content", "center"], [1, "arrow"], [2, "font-size", "12px", "color", "var(--muted)", "text-align", "center", "margin", "0"], [1, "cta"], [1, "cta-in"], [1, "cta-actions"], [1, "btn", "btn-primary", "btn-lg"], [1, "btn", "btn-ghost", "btn-lg"], [1, "step-n"], [1, "meta"], [1, "badge"], [1, "desc"], [1, "footer"]], template: function ProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "fv-nav", 0)(1, "fv-hero", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        \u0275\u0275text(7, "~12 wks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 7);
        \u0275\u0275text(9, "Time to first credit issuance");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 5)(11, "div", 6);
        \u0275\u0275text(12, "72%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 7);
        \u0275\u0275text(14, "Of revenue returned to project");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 5)(16, "div", 6);
        \u0275\u0275text(17, "54");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 7);
        \u0275\u0275text(19, "Supported methodologies");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 5)(21, "div", 6);
        \u0275\u0275text(22, "96%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 7);
        \u0275\u0275text(24, "Developer renewal rate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(25, "section")(26, "div", 3)(27, "div", 8)(28, "div")(29, "div", 9);
        \u0275\u0275text(30, "How to list");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "h2", 10);
        \u0275\u0275text(32, "Four steps from land to listed.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 11)(34, "p");
        \u0275\u0275text(35, "Most platforms take 18\u201324 months to get a project to first issuance. Foovante's unified MRV and standards pipeline averages twelve weeks, because we've already done the standards work for you.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 12);
        \u0275\u0275repeaterCreate(37, ProjectsComponent_For_38_Template, 9, 4, "div", 13, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "section", 14)(40, "div", 3)(41, "div", 8)(42, "div")(43, "div", 9);
        \u0275\u0275text(44, "How we verify");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "h2", 10);
        \u0275\u0275text(46, "Every tonne, watched from orbit and the ground.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 11)(48, "p");
        \u0275\u0275text(49, "You shouldn't have to take our word for any credit. Foovante runs a four-layer verification stack: satellite, field, third-party, on-chain. Every funder gets the full audit trail, per tonne.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "div", 15)(51, "div", 16)(52, "div", 17);
        \u0275\u0275text(53, "01");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "h4");
        \u0275\u0275text(55, "Satellite baseline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "p");
        \u0275\u0275text(57, "7+ years of Sentinel-2 imagery for every project polygon. Monitored every 5 days at 10m resolution, automatically.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "div", 16)(59, "div", 17);
        \u0275\u0275text(60, "02");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "h4");
        \u0275\u0275text(62, "Field truth");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "p");
        \u0275\u0275text(64, "Local agents capture soil samples, biomass plots, and household surveys via the Foovante mobile app. Lab results upload directly to the audit trail.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "div", 16)(66, "div", 17);
        \u0275\u0275text(67, "03");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "h4");
        \u0275\u0275text(69, "Independent verifier");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "p");
        \u0275\u0275text(71, "Verra, Gold Standard, and Plan Vivo verifiers receive a unified dossier. Average review cycle: six weeks, not six months.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "div", 16)(73, "div", 17);
        \u0275\u0275text(74, "04");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "h4");
        \u0275\u0275text(76, "On-chain serialisation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "p");
        \u0275\u0275text(78, "Every issued credit hashed and serialised. You see the exact tonne, polygon, and vintage; so does anyone you share it with.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(79, "section", 18)(80, "div", 3)(81, "div", 8)(82, "div")(83, "div", 9);
        \u0275\u0275text(84, "Methodology library");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "h2", 10);
        \u0275\u0275text(86, "54 methodologies. Pick the one that fits your land.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(87, "div", 11)(88, "p");
        \u0275\u0275text(89, "Foovante supports the full Verra, Gold Standard, and Plan Vivo catalog. Below are the six most common methodologies for African projects; there are 48 more.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(90, "div", 19);
        \u0275\u0275repeaterCreate(91, ProjectsComponent_For_92_Template, 16, 5, "div", 20, _forTrack1);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(93, "section", 21)(94, "div", 3)(95, "div", 8)(96, "div")(97, "div", 9);
        \u0275\u0275text(98, "Live project network");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "h2", 10);
        \u0275\u0275text(100, "You'd be joining 282 projects in 14 countries.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(101, "div", 11)(102, "p");
        \u0275\u0275text(103, "From Senegal mangroves to Ethiopian highland reforestation, every project on Foovante is monitored from the same Accra-based operations center.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(104, "fv-map-section");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(105, "section", 22)(106, "div", 3)(107, "div", 8)(108, "div")(109, "div", 9);
        \u0275\u0275text(110, "What we look for");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "h2", 10);
        \u0275\u0275text(112, "Four things every listed project must have.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(113, "div", 11)(114, "p");
        \u0275\u0275text(115, "We review every application individually. These are the four non-negotiables; everything else we can work with you on.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(116, "div", 23);
        \u0275\u0275repeaterCreate(117, ProjectsComponent_For_118_Template, 8, 3, "div", 24, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(119, "section", 25)(120, "div", 3)(121, "div", 8)(122, "div")(123, "div", 9);
        \u0275\u0275text(124, "Start your application");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "h2", 10);
        \u0275\u0275text(126, "Tell us about your project. We'll be back within 24 hours.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(127, "div", 11)(128, "p");
        \u0275\u0275text(129, "A quick application. You'll need a rough outline of your project area, your contact details, and any existing verification documents if available.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(130, "div", 26)(131, "div")(132, "div", 27)(133, "div", 9);
        \u0275\u0275text(134, "From the network");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "blockquote", 28);
        \u0275\u0275text(136, ' "Before Foovante we waited 18 months for our first credit issuance. With them, ');
        \u0275\u0275elementStart(137, "em");
        \u0275\u0275text(138, "eleven weeks");
        \u0275\u0275elementEnd();
        \u0275\u0275text(139, '. The team in Accra actually understood what our co-op needed." ');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "div", 29);
        \u0275\u0275element(141, "div", 30);
        \u0275\u0275elementStart(142, "div")(143, "div", 31);
        \u0275\u0275text(144, "Kwame Boadi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "div", 32);
        \u0275\u0275text(146, "Lead, Akagera Agroforestry Co-op");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(147, "div", 33)(148, "div")(149, "div", 34);
        \u0275\u0275text(150, "11 wks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "div", 35);
        \u0275\u0275text(152, "Time to first issuance");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(153, "div")(154, "div", 34);
        \u0275\u0275text(155, "72%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "div", 35);
        \u0275\u0275text(157, "To project work");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(158, "div")(159, "div", 34);
        \u0275\u0275text(160, "96%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(161, "div", 35);
        \u0275\u0275text(162, "Renewal rate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(163, "div", 36)(164, "div")(165, "h3");
        \u0275\u0275text(166, "Project intake");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "p", 37);
        \u0275\u0275text(168, "Step 1 of 3 \xB7 Basic project details");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(169, "div", 38);
        \u0275\u0275element(170, "span", 39)(171, "span", 40)(172, "span", 41)(173, "span", 42)(174, "span", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(175, "div", 43)(176, "label");
        \u0275\u0275text(177, "Project name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(178, "input", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(179, "div", 45)(180, "div", 43)(181, "label");
        \u0275\u0275text(182, "Country");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "select")(184, "option", 46);
        \u0275\u0275text(185, "Ghana");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(186, "option", 47);
        \u0275\u0275text(187, "Nigeria");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(188, "option", 48);
        \u0275\u0275text(189, "Kenya");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(190, "option", 49);
        \u0275\u0275text(191, "Rwanda");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(192, "option", 50);
        \u0275\u0275text(193, "Ethiopia");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(194, "option", 51);
        \u0275\u0275text(195, "Tanzania");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(196, "option", 52);
        \u0275\u0275text(197, "Uganda");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(198, "option", 53);
        \u0275\u0275text(199, "Senegal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(200, "option", 54);
        \u0275\u0275text(201, "C\xF4te d'Ivoire");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(202, "option", 55);
        \u0275\u0275text(203, "Cameroon");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(204, "option", 56);
        \u0275\u0275text(205, "South Africa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(206, "option", 57);
        \u0275\u0275text(207, "Mozambique");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(208, "option", 58);
        \u0275\u0275text(209, "Malawi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(210, "option", 59);
        \u0275\u0275text(211, "Zambia");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(212, "div", 43)(213, "label");
        \u0275\u0275text(214, "Methodology type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(215, "select")(216, "option");
        \u0275\u0275text(217, "Forestry \xB7 REDD+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(218, "option");
        \u0275\u0275text(219, "Agriculture \xB7 ARR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(220, "option");
        \u0275\u0275text(221, "Renewable energy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(222, "option");
        \u0275\u0275text(223, "Cookstoves");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(224, "option");
        \u0275\u0275text(225, "Blue carbon");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(226, "option");
        \u0275\u0275text(227, "Biogas / waste");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(228, "option");
        \u0275\u0275text(229, "Other");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(230, "div", 43)(231, "label");
        \u0275\u0275text(232, "Estimated project area (hectares)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(233, "input", 60);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(234, "div", 43)(235, "label");
        \u0275\u0275text(236, "Your name & role");
        \u0275\u0275elementEnd();
        \u0275\u0275element(237, "input", 61);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(238, "div", 43)(239, "label");
        \u0275\u0275text(240, "Email address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(241, "input", 62);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(242, "button", 63);
        \u0275\u0275text(243, " Submit application ");
        \u0275\u0275elementStart(244, "span", 64);
        \u0275\u0275text(245, "\u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(246, "p", 65);
        \u0275\u0275text(247, " We review every application personally. Response within 24 hours. ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(248, "section", 66)(249, "div", 67)(250, "h2");
        \u0275\u0275text(251, "Ready to list your project?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(252, "p");
        \u0275\u0275text(253, "Join 282 projects already verified and funded on Foovante. Apply in 10 minutes; we'll be back within 24 hours.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(254, "div", 68)(255, "a", 69);
        \u0275\u0275text(256, "Apply to list ");
        \u0275\u0275elementStart(257, "span", 64);
        \u0275\u0275text(258, "\u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(259, "a", 70);
        \u0275\u0275text(260, "Talk to the team");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(261, "fv-footer");
      }
      if (rf & 2) {
        \u0275\u0275property("dark", true)("cta", \u0275\u0275pureFunction0(6, _c0));
        \u0275\u0275advance();
        \u0275\u0275property("slides", ctx.heroSlides)("lines", \u0275\u0275pureFunction0(7, _c1))("cta1", \u0275\u0275pureFunction0(8, _c2))("cta2", \u0275\u0275pureFunction0(9, _c3));
        \u0275\u0275advance(36);
        \u0275\u0275repeater(ctx.steps);
        \u0275\u0275advance(54);
        \u0275\u0275repeater(ctx.methods);
        \u0275\u0275advance(26);
        \u0275\u0275repeater(ctx.priorities);
      }
    }, dependencies: [NavComponent, FooterComponent, HeroComponent, MapSectionComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.verify-band[_ngcontent-%COMP%] {\n  padding: 120px 0;\n  background: var(--paper);\n}\n.verify-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0;\n  border-top: 1px solid var(--line);\n}\n.verify-card[_ngcontent-%COMP%] {\n  padding: 40px 28px 40px 0;\n  border-right: 1px solid var(--line);\n}\n.verify-card[_ngcontent-%COMP%]:last-child {\n  border-right: 0;\n  padding-right: 0;\n}\n.verify-card[_ngcontent-%COMP%]:not(:first-child) {\n  padding-left: 28px;\n}\n.verify-card[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 32px;\n  font-weight: 700;\n  letter-spacing: -0.04em;\n  color: var(--green);\n  margin-bottom: 20px;\n  line-height: 1;\n}\n.verify-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  margin: 0 0 12px;\n}\n.verify-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ink-2);\n  margin: 0;\n  line-height: 1.6;\n}\n.methods[_ngcontent-%COMP%] {\n  padding: 120px 0;\n}\n.method-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.method[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 28px;\n  background: var(--paper);\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.method[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-self: flex-start;\n  padding: 5px 10px;\n  background: var(--sage-2);\n  color: var(--green);\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.method[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 17px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  margin: 0;\n}\n.method[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--ink-2);\n  line-height: 1.6;\n  margin: 0;\n  flex: 1;\n}\n.method[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: var(--muted);\n  padding-top: 14px;\n  border-top: 1px solid var(--line-soft);\n  margin-top: auto;\n}\n.method[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--ink);\n  font-weight: 600;\n}\n.priority-sec[_ngcontent-%COMP%] {\n  padding: 120px 0;\n  background: var(--paper);\n}\n.pri-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0;\n  border-top: 1px solid var(--line);\n  border-left: 1px solid var(--line);\n}\n.pri[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  padding: 40px;\n  border-right: 1px solid var(--line);\n  border-bottom: 1px solid var(--line);\n}\n.pri[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--green);\n  letter-spacing: 0.04em;\n  flex-shrink: 0;\n  padding-top: 2px;\n}\n.pri[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  margin: 0 0 10px;\n}\n.pri[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ink-2);\n  margin: 0;\n  line-height: 1.6;\n}\n.apply[_ngcontent-%COMP%] {\n  padding: 120px 0;\n}\n.apply-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 80px;\n  align-items: start;\n}\n.story[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-weight: 600;\n  letter-spacing: -0.025em;\n  line-height: 1.2;\n  color: var(--ink);\n  margin: 0;\n}\n.story[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: normal;\n  color: var(--green);\n}\n.attrib[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-top: 32px;\n}\n.attrib[_ngcontent-%COMP%]   .av[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: var(--sage);\n  flex-shrink: 0;\n}\n.attrib[_ngcontent-%COMP%]   .nm[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 15px;\n  letter-spacing: -0.01em;\n}\n.attrib[_ngcontent-%COMP%]   .ro[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--muted);\n  margin-top: 2px;\n}\n.apply-form[_ngcontent-%COMP%] {\n  background: var(--paper);\n  border: 1px solid var(--line);\n  border-radius: 20px;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.apply-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 0;\n}\n.apply-form[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--muted);\n  margin: -16px 0 0;\n}\n.stepper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.stepper[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: var(--line);\n}\n.stepper[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%] {\n  background: var(--green);\n}\n.stepper[_ngcontent-%COMP%]   .seg[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 2px;\n  background: var(--line);\n  border-radius: 2px;\n}\n.stepper[_ngcontent-%COMP%]   .seg.active[_ngcontent-%COMP%] {\n  background: var(--green);\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--ink);\n  letter-spacing: -0.005em;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border: 1px solid var(--line);\n  border-radius: 8px;\n  font-family: var(--font-body);\n  font-size: 14px;\n  color: var(--ink);\n  background: var(--bg);\n  transition: border-color 0.15s;\n  outline: none;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--green);\n  background: var(--paper);\n}\n.field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 980px) {\n  .verify-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .verify-card[_ngcontent-%COMP%] {\n    border-right: 0;\n    border-bottom: 1px solid var(--line);\n    padding: 28px 0;\n  }\n  .verify-card[_ngcontent-%COMP%]:not(:first-child) {\n    padding-left: 0;\n  }\n  .method-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .pri-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .apply-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 48px;\n  }\n}\n/*# sourceMappingURL=projects.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsComponent, { className: "ProjectsComponent", filePath: "src/app/features/projects/projects.component.ts", lineNumber: 17 });
})();
export {
  ProjectsComponent
};
//# sourceMappingURL=chunk-HBS6EP2D.js.map
