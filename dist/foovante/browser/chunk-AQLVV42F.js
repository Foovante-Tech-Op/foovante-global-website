import {
  METHODS
} from "./chunk-H3WTE4TY.js";
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
  ɵɵtextInterpolate
} from "./chunk-SCSMG4QD.js";

// src/app/features/projects/projects.component.ts
var _c0 = () => ({ label: "Apply to list", routerLink: "/projects" });
var _c1 = () => ["Turn your land work into", "real climate finance."];
var _c2 = () => ({ label: "Apply to list your project", routerLink: "/projects" });
var _c3 = () => ({ label: "See methodology library" });
var _forTrack0 = ($index, $item) => $item.n;
var _forTrack1 = ($index, $item) => $item.badge;
function ProjectsComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 74);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 18);
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
function ProjectsComponent_For_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 75);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 76);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 77)(8, "span");
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
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 17);
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
        h: "Submit Your Project",
        p: "Tell us about your project. Share your project type, location, and any prior documentation. Our team reviews your submission and onboards you to the Crevy platform.",
        meta: "Free \xB7 No commitment \xB7 Agriculture, Energy, Waste"
      },
      {
        n: "02",
        h: "Build Your Evidence Trail",
        p: "IoT monitoring begins and your project record starts accumulating real-time MRV data. Every data point is timestamped and feeds directly into your verification dossier.",
        meta: "MRV framework \xB7 IoT integration \xB7 International standards aligned"
      },
      {
        n: "03",
        h: "Pre-Verification",
        p: "Your project moves through our pre-verification pipeline. Our team including our Verification Lead and Article 6 Expert assembles your audit-ready dossier aligned with Ghana CMO and international frameworks.",
        meta: "Ghana CMO aligned \xB7 International frameworks \xB7 Local verification agents"
      },
      {
        n: "04",
        h: "List and Connect to Buyers",
        p: "Your verified project connects to global buyers through the Crevy marketplace. Buyers receive full traceability and CSRD-ready documentation. Your community receives a minimum 25% of credit revenue.",
        meta: "Fully traceable \xB7 CSRD-ready \xB7 25% community benefit-sharing"
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
    this.\u0275fac = function ProjectsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsComponent, selectors: [["fv-projects"]], decls: 264, vars: 10, consts: [[3, "dark", "cta"], ["eyebrow", "For project developers", "lead", "Foovante helps African renewable-energy, agriculture, and forestry projects generate, verify, and sell carbon credits, without London middlemen taking 40%. Built in Accra, for projects on the continent.", 3, "slides", "lines", "cta1", "cta2"], [1, "stats"], [1, "wrap"], [1, "stats-grid"], [1, "stat"], [1, "n"], [1, "l"], [1, "sec-head"], [1, "eyebrow"], [2, "margin-top", "24px"], [1, "right"], [1, "steps"], [1, "step"], ["id", "verify", 1, "verify-band"], [1, "verify-grid"], [1, "verify-card"], [1, "num"], [1, "meta"], [1, "verify-deepdive"], ["routerLink", "/how-mrv-works"], ["id", "methodology", 1, "methods"], [1, "method-grid"], [1, "method"], [1, "priority-sec"], [1, "pri-grid"], [1, "pri"], ["id", "apply", 1, "apply"], [1, "apply-grid"], [1, "story"], [2, "margin-top", "24px", "font-size", "28px"], [1, "attrib"], [1, "av"], [1, "nm"], [1, "ro"], [2, "display", "flex", "gap", "32px", "margin-top", "48px", "flex-wrap", "wrap"], [2, "font-family", "var(--font-display)", "font-size", "36px", "font-weight", "700", "letter-spacing", "-0.03em", "line-height", "1"], [2, "font-size", "13px", "color", "var(--muted)", "margin-top", "8px", "font-weight", "500"], [1, "apply-form"], [2, "font-size", "14px", "color", "var(--muted)", "margin-top", "4px"], [1, "sub"], [1, "stepper"], [1, "dot", "active"], [1, "seg", "active"], [1, "dot"], [1, "seg"], [1, "field"], ["type", "text", "placeholder", "e.g. Volta Estuary Mangroves"], [1, "field-row"], ["value", "gh"], ["value", "ng"], ["value", "ke"], ["value", "rw"], ["value", "et"], ["value", "tz"], ["value", "ug"], ["value", "sn"], ["value", "ci"], ["value", "cm"], ["value", "za"], ["value", "mz"], ["value", "mw"], ["value", "zm"], ["type", "number", "placeholder", "e.g. 2500"], ["type", "text", "placeholder", "e.g. Kwame Asante \xB7 Project Manager"], ["type", "email", "placeholder", "you@project.org"], [1, "btn", "btn-primary", 2, "width", "100%", "justify-content", "center"], [1, "arrow"], [2, "font-size", "12px", "color", "var(--muted)", "text-align", "center", "margin", "0"], [1, "cta"], [1, "cta-in"], [1, "cta-actions"], ["href", "https://form.jotform.com/261642531528052", "target", "_blank", "rel", "noopener", 1, "btn", "btn-primary", "btn-lg"], ["href", "https://form.jotform.com/261642531528052", "target", "_blank", "rel", "noopener", 1, "btn", "btn-ghost", "btn-lg"], [1, "step-n"], [1, "badge"], [1, "desc"], [1, "footer"]], template: function ProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "fv-nav", 0)(1, "fv-hero", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        \u0275\u0275text(7, "~12 wks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 7);
        \u0275\u0275text(9, "Target time to first credit issuance");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 5)(11, "div", 6);
        \u0275\u0275text(12, "6");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 7);
        \u0275\u0275text(14, "Core methodologies supported");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 5)(16, "div", 6);
        \u0275\u0275text(17, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 7);
        \u0275\u0275text(19, "Active projects \xB7 baseline phase");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 5)(21, "div", 6);
        \u0275\u0275text(22, "10");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 7);
        \u0275\u0275text(24, "Smallholder programs");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(25, "section")(26, "div", 3)(27, "div", 8)(28, "div")(29, "div", 9);
        \u0275\u0275text(30, "How to list");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "h2", 10);
        \u0275\u0275text(32, "Four steps from project to verified carbon asset.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 11)(34, "p");
        \u0275\u0275text(35, "The carbon verification process has historically taken years. Crevy is built to get African projects from zero documentation to audit-ready in weeks, not years because we have already built the standards framework for you.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 12);
        \u0275\u0275repeaterCreate(37, ProjectsComponent_For_38_Template, 9, 4, "div", 13, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "section", 14)(40, "div", 3)(41, "div", 8)(42, "div")(43, "div", 9);
        \u0275\u0275text(44, "How we verify");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "h2", 10);
        \u0275\u0275text(46, "Every project, documented and evidenced.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 11)(48, "p");
        \u0275\u0275text(49, "You shouldn't have to take our word for any credit. Crevy builds a continuous evidence trail from the moment a project is onboarded \u2014 combining IoT monitoring, on-the-ground verification, and international framework alignment. Every buyer gets the full audit trail.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "div", 15)(51, "div", 16)(52, "div", 17);
        \u0275\u0275text(53, "01");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "h4");
        \u0275\u0275text(55, "Project Documentation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "p");
        \u0275\u0275text(57, "Project developers document their sustainable practices on Crevy from day one. Every activity is recorded, timestamped, and stored as part of the verification evidence trail.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 18);
        \u0275\u0275text(59, "Document \xB7 Monitor \xB7 Report \xB7 Verify");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 16)(61, "div", 17);
        \u0275\u0275text(62, "02");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "h4");
        \u0275\u0275text(64, "Real-Time MRV Monitoring");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "p");
        \u0275\u0275text(66, "IoT sensor data feeds continuously into your project record. Every data point builds the evidence auditors and standards bodies need to issue credits.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div", 18);
        \u0275\u0275text(68, "MRV framework \xB7 IoT integration \xB7 Real-time data");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 16)(70, "div", 17);
        \u0275\u0275text(71, "03");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "h4");
        \u0275\u0275text(73, "Local Verification");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "p");
        \u0275\u0275text(75, "Our on-the-ground team \u2014 including our Verification Lead and Article 6 Expert \u2014 conducts assessments and assembles the verification dossier. We work with local agents who know the land and the communities.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "div", 18);
        \u0275\u0275text(77, "Ghana CMO aligned \xB7 Local agents \xB7 International frameworks");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(78, "div", 16)(79, "div", 17);
        \u0275\u0275text(80, "04");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "h4");
        \u0275\u0275text(82, "Pre-Verification Pipeline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "p");
        \u0275\u0275text(84, "Projects move through our structured pre-verification process aligned with international carbon standards. From zero documentation to audit-ready in weeks, not years.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "div", 18);
        \u0275\u0275text(86, "International frameworks \xB7 Ghana CMO \xB7 CSRD-ready output");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(87, "p", 19);
        \u0275\u0275text(88, " Want the full protocol \u2014 telemetry specs, AGB formulas, and the on-chain payload schema? ");
        \u0275\u0275elementStart(89, "a", 20);
        \u0275\u0275text(90, "Read the scientific notebook \u2192");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(91, "section", 21)(92, "div", 3)(93, "div", 8)(94, "div")(95, "div", 9);
        \u0275\u0275text(96, "Methodology library");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "h2", 10);
        \u0275\u0275text(98, "6 core methodologies. Pick the one that fits your land.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(99, "div", 11)(100, "p");
        \u0275\u0275text(101, "Foovante is building toward full Verra, Gold Standard, and Plan Vivo catalog coverage. These six methodologies cover the vast majority of qualifying African land types and are supported on the platform today.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(102, "div", 22);
        \u0275\u0275repeaterCreate(103, ProjectsComponent_For_104_Template, 16, 5, "div", 23, _forTrack1);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(105, "section", 24)(106, "div", 3)(107, "div", 8)(108, "div")(109, "div", 9);
        \u0275\u0275text(110, "What we look for");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "h2", 10);
        \u0275\u0275text(112, "Four things every listed project must have.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(113, "div", 11)(114, "p");
        \u0275\u0275text(115, "We review every application individually. These are the four non-negotiables everything else we can work with you on.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(116, "div", 25);
        \u0275\u0275repeaterCreate(117, ProjectsComponent_For_118_Template, 8, 3, "div", 26, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(119, "section", 27)(120, "div", 3)(121, "div", 8)(122, "div")(123, "div", 9);
        \u0275\u0275text(124, "Start your application");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "h2", 10);
        \u0275\u0275text(126, "Tell us about your project. We'll be back within 24 hours.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(127, "div", 11)(128, "p");
        \u0275\u0275text(129, "A quick application. You'll need a rough outline of your project area, your contact details, and any existing verification documents if available.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(130, "div", 28)(131, "div")(132, "div", 29)(133, "div", 9);
        \u0275\u0275text(134, "From the network");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "blockquote", 30);
        \u0275\u0275text(136, ' "Before Foovante we waited 18 months for our first credit issuance. With them, ');
        \u0275\u0275elementStart(137, "em");
        \u0275\u0275text(138, "eleven weeks");
        \u0275\u0275elementEnd();
        \u0275\u0275text(139, '. The team in Accra actually understood what our co-op needed." ');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "div", 31);
        \u0275\u0275element(141, "div", 32);
        \u0275\u0275elementStart(142, "div")(143, "div", 33);
        \u0275\u0275text(144, "Kwame Boadi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "div", 34);
        \u0275\u0275text(146, "Lead, Akagera Agroforestry Co-op");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(147, "div", 35)(148, "div")(149, "div", 36);
        \u0275\u0275text(150, "~12 wks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "div", 37);
        \u0275\u0275text(152, "Target time to first issuance");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(153, "div")(154, "div", 36);
        \u0275\u0275text(155, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "div", 37);
        \u0275\u0275text(157, "Active projects \xB7 baseline phase");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(158, "div")(159, "div", 36);
        \u0275\u0275text(160, "10");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(161, "div", 37);
        \u0275\u0275text(162, "Smallholder programs");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(163, "div", 38)(164, "div")(165, "h3");
        \u0275\u0275text(166, "Project intake");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "p", 39);
        \u0275\u0275text(168, "The first step in our onboarding process. We review every application personally.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(169, "p", 40);
        \u0275\u0275text(170, "Step 1 of 3 \xB7 Basic project details");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(171, "div", 41);
        \u0275\u0275element(172, "span", 42)(173, "span", 43)(174, "span", 44)(175, "span", 45)(176, "span", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(177, "div", 46)(178, "label");
        \u0275\u0275text(179, "Project name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(180, "input", 47);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(181, "div", 48)(182, "div", 46)(183, "label");
        \u0275\u0275text(184, "Country");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(185, "select")(186, "option", 49);
        \u0275\u0275text(187, "Ghana");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(188, "option", 50);
        \u0275\u0275text(189, "Nigeria");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(190, "option", 51);
        \u0275\u0275text(191, "Kenya");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(192, "option", 52);
        \u0275\u0275text(193, "Rwanda");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(194, "option", 53);
        \u0275\u0275text(195, "Ethiopia");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(196, "option", 54);
        \u0275\u0275text(197, "Tanzania");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(198, "option", 55);
        \u0275\u0275text(199, "Uganda");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(200, "option", 56);
        \u0275\u0275text(201, "Senegal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(202, "option", 57);
        \u0275\u0275text(203, "C\xF4te d'Ivoire");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(204, "option", 58);
        \u0275\u0275text(205, "Cameroon");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(206, "option", 59);
        \u0275\u0275text(207, "South Africa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(208, "option", 60);
        \u0275\u0275text(209, "Mozambique");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(210, "option", 61);
        \u0275\u0275text(211, "Malawi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(212, "option", 62);
        \u0275\u0275text(213, "Zambia");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(214, "div", 46)(215, "label");
        \u0275\u0275text(216, "Methodology type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(217, "select")(218, "option");
        \u0275\u0275text(219, "Forestry \xB7 REDD+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(220, "option");
        \u0275\u0275text(221, "Agriculture \xB7 ARR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(222, "option");
        \u0275\u0275text(223, "Renewable energy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(224, "option");
        \u0275\u0275text(225, "Cookstoves");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(226, "option");
        \u0275\u0275text(227, "Blue carbon");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(228, "option");
        \u0275\u0275text(229, "Biogas / waste");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(230, "option");
        \u0275\u0275text(231, "Other");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(232, "div", 46)(233, "label");
        \u0275\u0275text(234, "Estimated project area (hectares)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(235, "input", 63);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(236, "div", 46)(237, "label");
        \u0275\u0275text(238, "Your name & role");
        \u0275\u0275elementEnd();
        \u0275\u0275element(239, "input", 64);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(240, "div", 46)(241, "label");
        \u0275\u0275text(242, "Email address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(243, "input", 65);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(244, "button", 66);
        \u0275\u0275text(245, " Submit application ");
        \u0275\u0275elementStart(246, "span", 67);
        \u0275\u0275text(247, "\u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(248, "p", 68);
        \u0275\u0275text(249, " We review every application personally. Response within 24 hours. ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(250, "section", 69)(251, "div", 70)(252, "h2");
        \u0275\u0275text(253, "Ready to list your project?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(254, "p");
        \u0275\u0275text(255, "Be among the first projects verified on Foovante. Apply in 10 minutes; we'll be back within 24 hours.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(256, "div", 71)(257, "a", 72);
        \u0275\u0275text(258, "Apply to list ");
        \u0275\u0275elementStart(259, "span", 67);
        \u0275\u0275text(260, "\u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(261, "a", 73);
        \u0275\u0275text(262, "Talk to the team");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(263, "fv-footer");
      }
      if (rf & 2) {
        \u0275\u0275property("dark", true)("cta", \u0275\u0275pureFunction0(6, _c0));
        \u0275\u0275advance();
        \u0275\u0275property("slides", ctx.heroSlides)("lines", \u0275\u0275pureFunction0(7, _c1))("cta1", \u0275\u0275pureFunction0(8, _c2))("cta2", \u0275\u0275pureFunction0(9, _c3));
        \u0275\u0275advance(36);
        \u0275\u0275repeater(ctx.steps);
        \u0275\u0275advance(66);
        \u0275\u0275repeater(ctx.methods);
        \u0275\u0275advance(14);
        \u0275\u0275repeater(ctx.priorities);
      }
    }, dependencies: [NavComponent, FooterComponent, HeroComponent, RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.verify-band[_ngcontent-%COMP%] {\n  padding: 120px 0;\n  background: var(--paper);\n}\n.verify-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0;\n  border-top: 1px solid var(--line);\n}\n.verify-card[_ngcontent-%COMP%] {\n  padding: 40px 28px 40px 0;\n  border-right: 1px solid var(--line);\n}\n.verify-card[_ngcontent-%COMP%]:last-child {\n  border-right: 0;\n  padding-right: 0;\n}\n.verify-card[_ngcontent-%COMP%]:not(:first-child) {\n  padding-left: 28px;\n}\n.verify-card[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 32px;\n  font-weight: 700;\n  letter-spacing: -0.04em;\n  color: var(--green);\n  margin-bottom: 20px;\n  line-height: 1;\n}\n.verify-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  margin: 0 0 12px;\n}\n.verify-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ink-2);\n  margin: 0;\n  line-height: 1.6;\n}\n.verify-card[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--muted);\n}\n.verify-deepdive[_ngcontent-%COMP%] {\n  margin: 48px 0 0;\n  padding-top: 32px;\n  border-top: 1px solid var(--line);\n  font-size: 15px;\n  color: var(--ink-2);\n  line-height: 1.6;\n}\n.verify-deepdive[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--gold);\n  font-weight: 700;\n  text-decoration: none;\n}\n.verify-deepdive[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.methods[_ngcontent-%COMP%] {\n  padding: 120px 0;\n}\n.method-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.method[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 28px;\n  background: var(--paper);\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.method[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-self: flex-start;\n  padding: 5px 10px;\n  background: var(--sage-2);\n  color: var(--green);\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.method[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 17px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  margin: 0;\n}\n.method[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--ink-2);\n  line-height: 1.6;\n  margin: 0;\n  flex: 1;\n}\n.method[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: var(--muted);\n  padding-top: 14px;\n  border-top: 1px solid var(--line-soft);\n  margin-top: auto;\n}\n.method[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--ink);\n  font-weight: 600;\n}\n.priority-sec[_ngcontent-%COMP%] {\n  padding: 120px 0;\n  background: var(--paper);\n}\n.pri-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0;\n  border-top: 1px solid var(--line);\n  border-left: 1px solid var(--line);\n}\n.pri[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  padding: 40px;\n  border-right: 1px solid var(--line);\n  border-bottom: 1px solid var(--line);\n}\n.pri[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--green);\n  letter-spacing: 0.04em;\n  flex-shrink: 0;\n  padding-top: 2px;\n}\n.pri[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  margin: 0 0 10px;\n}\n.pri[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ink-2);\n  margin: 0;\n  line-height: 1.6;\n}\n.apply[_ngcontent-%COMP%] {\n  padding: 120px 0;\n}\n.apply-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 80px;\n  align-items: start;\n}\n.story[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-weight: 600;\n  letter-spacing: -0.025em;\n  line-height: 1.2;\n  color: var(--ink);\n  margin: 0;\n}\n.story[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: normal;\n  color: var(--green);\n}\n.attrib[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-top: 32px;\n}\n.attrib[_ngcontent-%COMP%]   .av[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: var(--sage);\n  flex-shrink: 0;\n}\n.attrib[_ngcontent-%COMP%]   .nm[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 15px;\n  letter-spacing: -0.01em;\n}\n.attrib[_ngcontent-%COMP%]   .ro[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--muted);\n  margin-top: 2px;\n}\n.apply-form[_ngcontent-%COMP%] {\n  background: var(--paper);\n  border: 1px solid var(--line);\n  border-radius: 20px;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.apply-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 0;\n}\n.apply-form[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--muted);\n  margin: -16px 0 0;\n}\n.stepper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.stepper[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: var(--line);\n}\n.stepper[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%] {\n  background: var(--green);\n}\n.stepper[_ngcontent-%COMP%]   .seg[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 2px;\n  background: var(--line);\n  border-radius: 2px;\n}\n.stepper[_ngcontent-%COMP%]   .seg.active[_ngcontent-%COMP%] {\n  background: var(--green);\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--ink);\n  letter-spacing: -0.005em;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border: 1px solid var(--line);\n  border-radius: 8px;\n  font-family: var(--font-body);\n  font-size: 14px;\n  color: var(--ink);\n  background: var(--bg);\n  transition: border-color 0.15s;\n  outline: none;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--green);\n  background: var(--paper);\n}\n.field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 980px) {\n  .verify-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .verify-card[_ngcontent-%COMP%] {\n    border-right: 0;\n    border-bottom: 1px solid var(--line);\n    padding: 28px 0;\n  }\n  .verify-card[_ngcontent-%COMP%]:not(:first-child) {\n    padding-left: 0;\n  }\n  .method-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .pri-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .apply-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 48px;\n  }\n}\n@media (max-width: 640px) {\n  .verify-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .verify-card[_ngcontent-%COMP%] {\n    border-bottom: 1px solid var(--line);\n    padding: 24px 0;\n  }\n  .verify-card[_ngcontent-%COMP%]:last-child {\n    border-bottom: 0;\n  }\n  .verify-card[_ngcontent-%COMP%]:not(:first-child) {\n    padding-left: 0;\n  }\n  .method-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .field-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .apply-grid[_ngcontent-%COMP%] {\n    gap: 32px;\n  }\n  .apply-form[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n  .pri[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n}\n/*# sourceMappingURL=projects.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectsComponent, [{
    type: Component,
    args: [{ selector: "fv-projects", imports: [NavComponent, FooterComponent, HeroComponent, RouterLink], template: `<fv-nav [dark]="true" [cta]="{label: 'Apply to list', routerLink: '/projects'}"></fv-nav>

<fv-hero
  [slides]="heroSlides"
  eyebrow="For project developers"
  [lines]="['Turn your land work into', 'real climate finance.']"
  lead="Foovante helps African renewable-energy, agriculture, and forestry projects generate, verify, and sell carbon credits, without London middlemen taking 40%. Built in Accra, for projects on the continent."
  [cta1]="{label: 'Apply to list your project', routerLink: '/projects'}"
  [cta2]="{label: 'See methodology library'}"
></fv-hero>

<!-- Stats Band -->
<div class="stats">
  <div class="wrap">
    <div class="stats-grid">
      <div class="stat"><div class="n">~12 wks</div><div class="l">Target time to first credit issuance</div></div>
      <div class="stat"><div class="n">6</div><div class="l">Core methodologies supported</div></div>
      <div class="stat"><div class="n">3</div><div class="l">Active projects \xB7 baseline phase</div></div>
      <div class="stat"><div class="n">10</div><div class="l">Smallholder programs</div></div>
    </div>
  </div>
</div>

<!-- How It Works -->
<section>
  <div class="wrap">
    <div class="sec-head">
      <div>
        <div class="eyebrow">How to list</div>
        <h2 style="margin-top:24px">Four steps from project to verified carbon asset.</h2>
      </div>
      <div class="right">
        <p>The carbon verification process has historically taken years. Crevy is built to get African projects from zero documentation to audit-ready in weeks, not years because we have already built the standards framework for you.</p>
      </div>
    </div>
    <div class="steps">
      @for (s of steps; track s.n) {
        <div class="step">
          <div class="step-n">{{ s.n }}</div>
          <h3>{{ s.h }}</h3>
          <p>{{ s.p }}</p>
          <div class="meta">{{ s.meta }}</div>
        </div>
      }
    </div>
  </div>
</section>

<!-- Verify Section -->
<section class="verify-band" id="verify">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <div class="eyebrow">How we verify</div>
        <h2 style="margin-top:24px">Every project, documented and evidenced.</h2>
      </div>
      <div class="right">
        <p>You shouldn't have to take our word for any credit. Crevy builds a continuous evidence trail from the moment a project is onboarded \u2014 combining IoT monitoring, on-the-ground verification, and international framework alignment. Every buyer gets the full audit trail.</p>
      </div>
    </div>
    <div class="verify-grid">
      <div class="verify-card">
        <div class="num">01</div>
        <h4>Project Documentation</h4>
        <p>Project developers document their sustainable practices on Crevy from day one. Every activity is recorded, timestamped, and stored as part of the verification evidence trail.</p>
        <div class="meta">Document \xB7 Monitor \xB7 Report \xB7 Verify</div>
      </div>
      <div class="verify-card">
        <div class="num">02</div>
        <h4>Real-Time MRV Monitoring</h4>
        <p>IoT sensor data feeds continuously into your project record. Every data point builds the evidence auditors and standards bodies need to issue credits.</p>
        <div class="meta">MRV framework \xB7 IoT integration \xB7 Real-time data</div>
      </div>
      <div class="verify-card">
        <div class="num">03</div>
        <h4>Local Verification</h4>
        <p>Our on-the-ground team \u2014 including our Verification Lead and Article 6 Expert \u2014 conducts assessments and assembles the verification dossier. We work with local agents who know the land and the communities.</p>
        <div class="meta">Ghana CMO aligned \xB7 Local agents \xB7 International frameworks</div>
      </div>
      <div class="verify-card">
        <div class="num">04</div>
        <h4>Pre-Verification Pipeline</h4>
        <p>Projects move through our structured pre-verification process aligned with international carbon standards. From zero documentation to audit-ready in weeks, not years.</p>
        <div class="meta">International frameworks \xB7 Ghana CMO \xB7 CSRD-ready output</div>
      </div>
    </div>
    <p class="verify-deepdive">
      Want the full protocol \u2014 telemetry specs, AGB formulas, and the on-chain payload schema? <a routerLink="/how-mrv-works">Read the scientific notebook \u2192</a>
    </p>
  </div>
</section>

<!-- Methodology Library -->
<section class="methods" id="methodology">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <div class="eyebrow">Methodology library</div>
        <h2 style="margin-top:24px">6 core methodologies. Pick the one that fits your land.</h2>
      </div>
      <div class="right">
        <p>Foovante is building toward full Verra, Gold Standard, and Plan Vivo catalog coverage. These six methodologies cover the vast majority of qualifying African land types and are supported on the platform today.</p>
      </div>
    </div>
    <div class="method-grid">
      @for (m of methods; track m.badge) {
        <div class="method">
          <div class="badge">{{ m.badge }}</div>
          <h4>{{ m.h }}</h4>
          <p class="desc">{{ m.desc }}</p>
          <div class="footer">
            <span>Min. size <strong>{{ m.minSize }}</strong></span>
            <span>Crediting <strong>{{ m.dur }}</strong></span>
          </div>
        </div>
      }
    </div>
  </div>
</section>

<!-- Priority Requirements -->
<section class="priority-sec">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <div class="eyebrow">What we look for</div>
        <h2 style="margin-top:24px">Four things every listed project must have.</h2>
      </div>
      <div class="right">
        <p>We review every application individually. These are the four non-negotiables everything else we can work with you on.</p>
      </div>
    </div>
    <div class="pri-grid">
      @for (p of priorities; track p.n) {
        <div class="pri">
          <div class="num">{{ p.n }}</div>
          <div>
            <h4>{{ p.h }}</h4>
            <p>{{ p.p }}</p>
          </div>
        </div>
      }
    </div>
  </div>
</section>

<!-- Apply Form Section -->
<section class="apply" id="apply">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <div class="eyebrow">Start your application</div>
        <h2 style="margin-top:24px">Tell us about your project. We'll be back within 24 hours.</h2>
      </div>
      <div class="right">
        <p>A quick application. You'll need a rough outline of your project area, your contact details, and any existing verification documents if available.</p>
      </div>
    </div>

    <div class="apply-grid">
      <!-- Testimonial side -->
      <div>
        <div class="story">
          <div class="eyebrow">From the network</div>
          <blockquote style="margin-top:24px;font-size:28px">
            "Before Foovante we waited 18 months for our first credit issuance. With them, <em>eleven weeks</em>. The team in Accra actually understood what our co-op needed."
          </blockquote>
          <div class="attrib">
            <div class="av"></div>
            <div>
              <div class="nm">Kwame Boadi</div>
              <div class="ro">Lead, Akagera Agroforestry Co-op</div>
            </div>
          </div>
          <div style="display:flex;gap:32px;margin-top:48px;flex-wrap:wrap">
            <div>
              <div style="font-family:var(--font-display);font-size:36px;font-weight:700;letter-spacing:-0.03em;line-height:1">~12 wks</div>
              <div style="font-size:13px;color:var(--muted);margin-top:8px;font-weight:500">Target time to first issuance</div>
            </div>
            <div>
              <div style="font-family:var(--font-display);font-size:36px;font-weight:700;letter-spacing:-0.03em;line-height:1">3</div>
              <div style="font-size:13px;color:var(--muted);margin-top:8px;font-weight:500">Active projects \xB7 baseline phase</div>
            </div>
            <div>
              <div style="font-family:var(--font-display);font-size:36px;font-weight:700;letter-spacing:-0.03em;line-height:1">10</div>
              <div style="font-size:13px;color:var(--muted);margin-top:8px;font-weight:500">Smallholder programs</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Apply Form -->
      <div class="apply-form">
        <div>
          <h3>Project intake</h3>
          <p style="font-size:14px;color:var(--muted);margin-top:4px">The first step in our onboarding process. We review every application personally.</p>
          <p class="sub">Step 1 of 3 \xB7 Basic project details</p>
        </div>
        <div class="stepper">
          <span class="dot active"></span>
          <span class="seg active"></span>
          <span class="dot"></span>
          <span class="seg"></span>
          <span class="dot"></span>
        </div>
        <div class="field">
          <label>Project name</label>
          <input type="text" placeholder="e.g. Volta Estuary Mangroves">
        </div>
        <div class="field-row">
          <div class="field">
            <label>Country</label>
            <select>
              <option value="gh">Ghana</option>
              <option value="ng">Nigeria</option>
              <option value="ke">Kenya</option>
              <option value="rw">Rwanda</option>
              <option value="et">Ethiopia</option>
              <option value="tz">Tanzania</option>
              <option value="ug">Uganda</option>
              <option value="sn">Senegal</option>
              <option value="ci">C\xF4te d'Ivoire</option>
              <option value="cm">Cameroon</option>
              <option value="za">South Africa</option>
              <option value="mz">Mozambique</option>
              <option value="mw">Malawi</option>
              <option value="zm">Zambia</option>
            </select>
          </div>
          <div class="field">
            <label>Methodology type</label>
            <select>
              <option>Forestry \xB7 REDD+</option>
              <option>Agriculture \xB7 ARR</option>
              <option>Renewable energy</option>
              <option>Cookstoves</option>
              <option>Blue carbon</option>
              <option>Biogas / waste</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div class="field">
          <label>Estimated project area (hectares)</label>
          <input type="number" placeholder="e.g. 2500">
        </div>
        <div class="field">
          <label>Your name & role</label>
          <input type="text" placeholder="e.g. Kwame Asante \xB7 Project Manager">
        </div>
        <div class="field">
          <label>Email address</label>
          <input type="email" placeholder="you@project.org">
        </div>
        <button class="btn btn-primary" style="width:100%;justify-content:center">
          Submit application <span class="arrow">\u2192</span>
        </button>
        <p style="font-size:12px;color:var(--muted);text-align:center;margin:0">
          We review every application personally. Response within 24 hours.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta">
  <div class="cta-in">
    <h2>Ready to list your project?</h2>
    <p>Be among the first projects verified on Foovante. Apply in 10 minutes; we'll be back within 24 hours.</p>
    <div class="cta-actions">
      <a class="btn btn-primary btn-lg" href="https://form.jotform.com/261642531528052" target="_blank" rel="noopener">Apply to list <span class="arrow">\u2192</span></a>
      <a class="btn btn-ghost btn-lg" href="https://form.jotform.com/261642531528052" target="_blank" rel="noopener">Talk to the team</a>
    </div>
  </div>
</section>

<fv-footer></fv-footer>
`, styles: ["/* src/app/features/projects/projects.component.scss */\n:host {\n  display: block;\n}\n.verify-band {\n  padding: 120px 0;\n  background: var(--paper);\n}\n.verify-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0;\n  border-top: 1px solid var(--line);\n}\n.verify-card {\n  padding: 40px 28px 40px 0;\n  border-right: 1px solid var(--line);\n}\n.verify-card:last-child {\n  border-right: 0;\n  padding-right: 0;\n}\n.verify-card:not(:first-child) {\n  padding-left: 28px;\n}\n.verify-card .num {\n  font-family: var(--font-display);\n  font-size: 32px;\n  font-weight: 700;\n  letter-spacing: -0.04em;\n  color: var(--green);\n  margin-bottom: 20px;\n  line-height: 1;\n}\n.verify-card h4 {\n  font-family: var(--font-display);\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  margin: 0 0 12px;\n}\n.verify-card p {\n  font-size: 14px;\n  color: var(--ink-2);\n  margin: 0;\n  line-height: 1.6;\n}\n.verify-card .meta {\n  margin-top: 16px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--muted);\n}\n.verify-deepdive {\n  margin: 48px 0 0;\n  padding-top: 32px;\n  border-top: 1px solid var(--line);\n  font-size: 15px;\n  color: var(--ink-2);\n  line-height: 1.6;\n}\n.verify-deepdive a {\n  color: var(--gold);\n  font-weight: 700;\n  text-decoration: none;\n}\n.verify-deepdive a:hover {\n  text-decoration: underline;\n}\n.methods {\n  padding: 120px 0;\n}\n.method-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.method {\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 28px;\n  background: var(--paper);\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.method .badge {\n  display: inline-flex;\n  align-self: flex-start;\n  padding: 5px 10px;\n  background: var(--sage-2);\n  color: var(--green);\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.method h4 {\n  font-family: var(--font-display);\n  font-size: 17px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  margin: 0;\n}\n.method .desc {\n  font-size: 13px;\n  color: var(--ink-2);\n  line-height: 1.6;\n  margin: 0;\n  flex: 1;\n}\n.method .footer {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: var(--muted);\n  padding-top: 14px;\n  border-top: 1px solid var(--line-soft);\n  margin-top: auto;\n}\n.method .footer strong {\n  color: var(--ink);\n  font-weight: 600;\n}\n.priority-sec {\n  padding: 120px 0;\n  background: var(--paper);\n}\n.pri-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0;\n  border-top: 1px solid var(--line);\n  border-left: 1px solid var(--line);\n}\n.pri {\n  display: flex;\n  gap: 24px;\n  padding: 40px;\n  border-right: 1px solid var(--line);\n  border-bottom: 1px solid var(--line);\n}\n.pri .num {\n  font-family: var(--font-display);\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--green);\n  letter-spacing: 0.04em;\n  flex-shrink: 0;\n  padding-top: 2px;\n}\n.pri h4 {\n  font-family: var(--font-display);\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  margin: 0 0 10px;\n}\n.pri p {\n  font-size: 14px;\n  color: var(--ink-2);\n  margin: 0;\n  line-height: 1.6;\n}\n.apply {\n  padding: 120px 0;\n}\n.apply-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 80px;\n  align-items: start;\n}\n.story blockquote {\n  font-family: var(--font-display);\n  font-weight: 600;\n  letter-spacing: -0.025em;\n  line-height: 1.2;\n  color: var(--ink);\n  margin: 0;\n}\n.story blockquote em {\n  font-style: normal;\n  color: var(--green);\n}\n.attrib {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-top: 32px;\n}\n.attrib .av {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: var(--sage);\n  flex-shrink: 0;\n}\n.attrib .nm {\n  font-weight: 600;\n  font-size: 15px;\n  letter-spacing: -0.01em;\n}\n.attrib .ro {\n  font-size: 13px;\n  color: var(--muted);\n  margin-top: 2px;\n}\n.apply-form {\n  background: var(--paper);\n  border: 1px solid var(--line);\n  border-radius: 20px;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.apply-form h3 {\n  font-size: 20px;\n  margin: 0;\n}\n.apply-form .sub {\n  font-size: 13px;\n  color: var(--muted);\n  margin: -16px 0 0;\n}\n.stepper {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.stepper .dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: var(--line);\n}\n.stepper .dot.active {\n  background: var(--green);\n}\n.stepper .seg {\n  flex: 1;\n  height: 2px;\n  background: var(--line);\n  border-radius: 2px;\n}\n.stepper .seg.active {\n  background: var(--green);\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.field label {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--ink);\n  letter-spacing: -0.005em;\n}\n.field input,\n.field select,\n.field textarea {\n  padding: 12px 16px;\n  border: 1px solid var(--line);\n  border-radius: 8px;\n  font-family: var(--font-body);\n  font-size: 14px;\n  color: var(--ink);\n  background: var(--bg);\n  transition: border-color 0.15s;\n  outline: none;\n}\n.field input:focus,\n.field select:focus,\n.field textarea:focus {\n  border-color: var(--green);\n  background: var(--paper);\n}\n.field-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 980px) {\n  .verify-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n  .verify-card {\n    border-right: 0;\n    border-bottom: 1px solid var(--line);\n    padding: 28px 0;\n  }\n  .verify-card:not(:first-child) {\n    padding-left: 0;\n  }\n  .method-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n  .pri-grid {\n    grid-template-columns: 1fr;\n  }\n  .apply-grid {\n    grid-template-columns: 1fr;\n    gap: 48px;\n  }\n}\n@media (max-width: 640px) {\n  .verify-grid {\n    grid-template-columns: 1fr;\n  }\n  .verify-card {\n    border-bottom: 1px solid var(--line);\n    padding: 24px 0;\n  }\n  .verify-card:last-child {\n    border-bottom: 0;\n  }\n  .verify-card:not(:first-child) {\n    padding-left: 0;\n  }\n  .method-grid {\n    grid-template-columns: 1fr;\n  }\n  .field-row {\n    grid-template-columns: 1fr;\n  }\n  .apply-grid {\n    gap: 32px;\n  }\n  .apply-form {\n    padding: 24px;\n  }\n  .pri {\n    padding: 24px;\n  }\n}\n/*# sourceMappingURL=projects.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsComponent, { className: "ProjectsComponent", filePath: "src/app/features/projects/projects.component.ts", lineNumber: 16 });
})();
export {
  ProjectsComponent
};
//# sourceMappingURL=chunk-AQLVV42F.js.map
