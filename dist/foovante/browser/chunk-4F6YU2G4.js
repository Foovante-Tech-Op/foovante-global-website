import {
  ADVISORS,
  LEADERSHIP,
  OPS_TEAM
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
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-SCSMG4QD.js";

// src/app/features/about/about.component.ts
var _c0 = () => ({ label: "Talk to the founders", href: "https://form.jotform.com/261642531528052" });
var _c1 = () => ["We're building the verification layer", "for African carbon."];
var _c2 = () => ({ label: "Take a tour", routerLink: "/home" });
var _c3 = () => ({ label: "Read the founder brief", routerLink: "/founder-brief" });
var _forTrack0 = ($index, $item) => $item.ix;
var _forTrack1 = ($index, $item) => $item.nm;
var _forTrack2 = ($index, $item) => $item.name;
var _forTrack3 = ($index, $item) => $item.name + "_dup";
var _forTrack4 = ($index, $item) => $item.h;
function AboutComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 37);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const w_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(w_r1.ix);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(w_r1.h);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(w_r1.p);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(w_r1.meta);
  }
}
function AboutComponent_For_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 39);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.ix);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.nm);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.from);
  }
}
function AboutComponent_For_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "img", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", p_r3.logo, \u0275\u0275sanitizeUrl)("alt", p_r3.name);
  }
}
function AboutComponent_For_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "img", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", p_r4.logo, \u0275\u0275sanitizeUrl)("alt", p_r4.name);
  }
}
function AboutComponent_For_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.h);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.v);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.d);
  }
}
var AboutComponent = class _AboutComponent {
  constructor() {
    this.leadership = LEADERSHIP;
    this.opsTeam = OPS_TEAM;
    this.advisors = ADVISORS;
    this.heroSlides = [
      {
        img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1800&q=80&auto=format&fit=crop",
        lbl: "Energy",
        ttl: "Renewable energy projects",
        sub: "Solar \xB7 Wind \xB7 Clean energy infrastructure",
        live: "Renewable energy carbon credits"
      },
      {
        img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=80&auto=format&fit=crop",
        lbl: "Agriculture",
        ttl: "Forestry & agroforestry",
        sub: "Forest conservation \xB7 Agroforestry systems",
        live: "3 active projects \xB7 scaling"
      },
      {
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&q=80&auto=format&fit=crop",
        lbl: "Blue carbon",
        ttl: "Mangroves & coastal ecosystems",
        sub: "Oceans \xB7 Wetlands \xB7 Coastal carbon",
        live: "Blue carbon credits across varying markets"
      }
    ];
    this.timeline = [];
    this.partnerLogos = [
      { name: "EPA Ghana", logo: "assets/images/d.png" },
      { name: "LbH", logo: "assets/images/l.png" },
      { name: "Crop Intellect", logo: "assets/images/c.png" },
      { name: "CraftedClimate", logo: "assets/images/t.png" },
      { name: "Startup Discovery Africa", logo: "assets/images/s.png" },
      { name: "ALX Ventures", logo: "assets/images/v.png" }
    ];
    this.whatCards = [
      {
        ix: "01 \xB7 Document",
        h: "Project documentation & evidence building.",
        p: "Crevy enables project developers to document sustainable practices and build the verified evidence trail required for carbon credit issuance going from zero documentation to audit-ready in weeks, not years.",
        meta: "3 pilot projects onboarded \xB7 3,620 hectares under active documentation \xB7 Ghana, Nigeria pipeline"
      },
      {
        ix: "02 \xB7 Monitor",
        h: "Real-time MRV data collection.",
        p: "Project developers receive real-time IoT sensor data feeding into a continuous monitoring, reporting, and verification framework aligned with international standards. Every data point builds the evidence trail auditors need.",
        meta: "MRV framework \xB7 IoT sensor integration \xB7 pre-verification pipeline"
      },
      {
        ix: "03 \xB7 Marketplace",
        h: "Carbon credit trading platform.",
        p: "Verified African carbon assets connect directly to global buyers  fully traceable and independently verified. Buyers get CSRD-ready documentation. Project communities receive a minimum 25% of credit revenue.",
        meta: "Agriculture \xB7 energy \xB7 waste projects \xB7 CSRD-ready \xB7 community benefit-sharing"
      }
    ];
    this.credCards = [
      { h: "Legal Infrastructure", v: "Complete \xB7 In place", d: "Our legal infrastructure is fully established \u2014 Privacy Policy, Terms of Use, and MOU templates are built and ready. This forms the foundation for all project and buyer agreements on the platform." },
      { h: "Financial Model", v: "Advisor-reviewed \xB7 Stress-tested", d: "Our five-year financial projections have been reviewed and stress-tested by our finance advisor, giving investors a credible path to profitability from 2028." },
      { h: "Theory of Change", v: "Impact-verified \xB7 16 published references", d: "Our Theory of Change has been reviewed and updated with our impact advisor, underpinned by 16 published references. Every claim we make is evidenced." },
      { h: "Community Benefit-Sharing", v: "Minimum 25% \xB7 Required for all projects", d: "Every Foovante-supported project is required to have a community benefit-sharing arrangement, with a minimum of 25% of credit revenue returning to local households." }
    ];
  }
  static {
    this.\u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AboutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["fv-about"]], decls: 110, vars: 10, consts: [["carouselTrack", ""], [3, "dark", "cta"], ["eyebrow", "About Foovante Global", "lead", "Foovante is a climate-tech company building the verification, marketplace, and capital infrastructure for African carbon projects.", 3, "slides", "lines", "cta1", "cta2"], ["id", "mission", 1, "mission"], [1, "wrap", "mission-grid"], [1, "eyebrow"], [2, "margin-top", "24px"], [1, "mission-body"], [1, "what", 2, "background", "var(--paper)"], [1, "wrap"], [1, "sec-head"], [1, "what-grid"], [1, "what-card"], ["id", "milestones", 1, "timeline"], [1, "right"], [1, "tl-placeholder"], ["routerLink", "/founder-brief", "fragment", "contact", 1, "btn", "btn-primary", 2, "margin-top", "24px", "display", "inline-flex", "align-items", "center", "gap", "8px"], [1, "arrow"], [1, "advisors-band"], [1, "advisors-grid"], [1, "advisor"], [1, "partners-band"], [1, "eyebrow", 2, "margin-bottom", "40px"], [1, "carousel-track-wrap"], [1, "carousel-track"], [1, "carousel-item"], ["aria-hidden", "true", 1, "carousel-item"], ["id", "credentials", 1, "creds"], [1, "creds-grid"], [1, "cred-card"], ["id", "cta", 1, "cta"], [1, "cta-in"], [1, "cta-actions"], ["href", "https://form.jotform.com/261642531528052", "target", "_blank", "rel", "noopener", 1, "btn", "btn-primary", "btn-lg"], ["href", "mailto:press@foovante.com", 1, "btn", "btn-ghost", "btn-lg"], ["href", "mailto:careers@foovante.com", 1, "btn", "btn-ghost", "btn-lg"], [1, "ix"], [1, "meta"], [1, "nm"], [1, "from"], ["height", "110", 3, "src", "alt"], [1, "v"]], template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "fv-nav", 1)(1, "fv-hero", 2);
        \u0275\u0275elementStart(2, "section", 3)(3, "div", 4)(4, "div")(5, "div", 5);
        \u0275\u0275text(6, "Our mission");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "blockquote", 6);
        \u0275\u0275text(8, " Africa holds ");
        \u0275\u0275elementStart(9, "em");
        \u0275\u0275text(10, "significant carbon credit potential");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, ", yet only ");
        \u0275\u0275elementStart(12, "em");
        \u0275\u0275text(13, "5% of its nature-based capacity has been unlocked as of 2025");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, ". We exist to help close that gap. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 7)(16, "p");
        \u0275\u0275text(17, "The voluntary carbon market is projected to reach $23.99B by 2030, and African ecosystems forests, mangroves, drylands, and agroforestry systems represent some of the highest-quality natural carbon assets on Earth. They should be the supply side of that market.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p");
        \u0275\u0275text(19, "They are not. Today, African projects remain severely underrepresented in global carbon markets, because the verification, certification, and trading infrastructure was built for the global North not for a cooperative in Rwanda or a community forest in Ghana. The result: $2.6B in value lost to verification delays by 2030 if nothing changes.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "p")(21, "strong");
        \u0275\u0275text(22, "Foovante Global is building that infrastructure from Accra.");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, " Through Crevy, our digital platform, project developers can document sustainable practices, receive real-time IoT monitoring data, and build the verified evidence trail required for carbon credit issuance going from zero documentation to audit-ready in weeks, not years.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "p");
        \u0275\u0275text(25, "We are building the operating system for African carbon. And we are building it from the continent itself.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(26, "section", 8)(27, "div", 9)(28, "div", 10)(29, "div")(30, "div", 5);
        \u0275\u0275text(31, "What we do");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "h2", 6);
        \u0275\u0275text(33, "Three capabilities. One platform.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 11);
        \u0275\u0275repeaterCreate(35, AboutComponent_For_36_Template, 9, 4, "div", 12, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "section", 13)(38, "div", 9)(39, "div", 10)(40, "div")(41, "div", 5);
        \u0275\u0275text(42, "Achievements & milestones");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "h2", 6);
        \u0275\u0275text(44, "Expanding from West Africa across emerging carbon markets globally.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 14)(46, "p");
        \u0275\u0275text(47, "From West Africa to the Caribbean and South America, Foovante is building the infrastructure for carbon markets that have long been underserved. Full updates available in the data room.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "div", 15)(49, "p");
        \u0275\u0275text(50, "A detailed milestones view is coming soon. Contact us for the full partner and investor update.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "a", 16);
        \u0275\u0275text(52, "Talk to the team ");
        \u0275\u0275elementStart(53, "span", 17);
        \u0275\u0275text(54, "\u2192");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(55, "section", 18)(56, "div", 9)(57, "div", 10)(58, "div")(59, "div", 5);
        \u0275\u0275text(60, "Advisory board");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "h2", 6);
        \u0275\u0275text(62, "Backed by senior voices from standards, capital, and climate.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 14)(64, "p");
        \u0275\u0275text(65, "Our advisory board provides governance, standards-body relationships, and capital-allocator perspective: quarterly cadence, with full board observation rights for lead investors.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(66, "div", 19);
        \u0275\u0275repeaterCreate(67, AboutComponent_For_68_Template, 7, 3, "div", 20, _forTrack1);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(69, "section", 21)(70, "div", 9)(71, "div", 22);
        \u0275\u0275text(72, "Our partners");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "div", 23)(74, "div", 24, 0);
        \u0275\u0275repeaterCreate(76, AboutComponent_For_77_Template, 2, 2, "div", 25, _forTrack2);
        \u0275\u0275repeaterCreate(78, AboutComponent_For_79_Template, 2, 2, "div", 26, _forTrack3);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(80, "section", 27)(81, "div", 9)(82, "div", 10)(83, "div")(84, "div", 5);
        \u0275\u0275text(85, "Credentials & compliance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "h2", 6);
        \u0275\u0275text(87, "Built to meet the standards the market requires.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(88, "div", 14)(89, "p");
        \u0275\u0275text(90, "We are building the compliance foundation expected of any platform handling verified carbon assets. Securing these credentials is part of our pre-seed roadmap.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(91, "div", 28);
        \u0275\u0275repeaterCreate(92, AboutComponent_For_93_Template, 7, 3, "div", 29, _forTrack4);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(94, "section", 30)(95, "div", 31)(96, "h2");
        \u0275\u0275text(97, "Want to talk to us directly?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "p");
        \u0275\u0275text(99, "Our founders take introductions from funders, projects, partners, and press personally. Drop a note; we typically reply within one business day.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "div", 32)(101, "a", 33);
        \u0275\u0275text(102, "Talk to the founders ");
        \u0275\u0275elementStart(103, "span", 17);
        \u0275\u0275text(104, "\u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(105, "a", 34);
        \u0275\u0275text(106, "Press & media");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "a", 35);
        \u0275\u0275text(108, "Careers");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(109, "fv-footer");
      }
      if (rf & 2) {
        \u0275\u0275property("dark", true)("cta", \u0275\u0275pureFunction0(6, _c0));
        \u0275\u0275advance();
        \u0275\u0275property("slides", ctx.heroSlides)("lines", \u0275\u0275pureFunction0(7, _c1))("cta1", \u0275\u0275pureFunction0(8, _c2))("cta2", \u0275\u0275pureFunction0(9, _c3));
        \u0275\u0275advance(34);
        \u0275\u0275repeater(ctx.whatCards);
        \u0275\u0275advance(32);
        \u0275\u0275repeater(ctx.advisors);
        \u0275\u0275advance(9);
        \u0275\u0275repeater(ctx.partnerLogos);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.partnerLogos);
        \u0275\u0275advance(14);
        \u0275\u0275repeater(ctx.credCards);
      }
    }, dependencies: [NavComponent, FooterComponent, HeroComponent, RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.mission[_ngcontent-%COMP%] {\n  padding: 120px 0;\n}\n.mission-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 80px;\n  align-items: start;\n}\n.mission-grid[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(22px, 3vw, 36px);\n  font-weight: 600;\n  letter-spacing: -0.025em;\n  line-height: 1.2;\n  color: var(--ink);\n  margin: 0;\n}\n.mission-grid[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: normal;\n  color: var(--gold);\n}\n.mission-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.mission-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--ink-2);\n  line-height: 1.7;\n  margin: 0;\n}\n.mission-body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--ink);\n}\n.what[_ngcontent-%COMP%] {\n  padding: 120px 0;\n}\n.what-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0;\n  border-top: 1px solid var(--line);\n}\n.what-card[_ngcontent-%COMP%] {\n  padding: 48px 32px 48px 0;\n  border-right: 1px solid var(--line);\n}\n.what-card[_ngcontent-%COMP%]:last-child {\n  border-right: 0;\n  padding-right: 0;\n}\n.what-card[_ngcontent-%COMP%]:not(:first-child) {\n  padding-left: 32px;\n}\n.what-card[_ngcontent-%COMP%]   .ix[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--gold);\n  margin-bottom: 20px;\n}\n.what-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  margin-bottom: 14px;\n}\n.what-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ink-2);\n  margin: 0;\n  line-height: 1.65;\n}\n.what-card[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  font-size: 12px;\n  color: var(--muted);\n  font-weight: 500;\n  letter-spacing: 0.02em;\n}\n.timeline[_ngcontent-%COMP%] {\n  padding: 120px 0;\n}\n.tl-placeholder[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--line);\n  padding: 64px 0;\n}\n.tl-placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--muted);\n  font-weight: 500;\n  margin: 0;\n}\n.lead-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n.lead-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  overflow: hidden;\n  background: var(--paper);\n}\n.lead-pic[_ngcontent-%COMP%] {\n  aspect-ratio: 3/4;\n  background-size: cover;\n  background-position: center top;\n  background-color: var(--sage);\n}\n.lead-body[_ngcontent-%COMP%] {\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.lead-body[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--gold);\n}\n.lead-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 26px;\n  font-weight: 700;\n  letter-spacing: -0.025em;\n  line-height: 1.1;\n  margin: 0;\n}\n.lead-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ink-2);\n  line-height: 1.55;\n  margin: 0;\n  flex: 1;\n}\n.lead-body[_ngcontent-%COMP%]   .prior[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--muted);\n  font-weight: 500;\n  padding-top: 14px;\n  border-top: 1px solid var(--line-soft);\n}\n.ops[_ngcontent-%COMP%] {\n  padding: 120px 0;\n  background: var(--paper);\n}\n.ops-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n.person[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.person[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  border-radius: 12px;\n  background-size: cover;\n  background-position: center;\n  background-color: var(--sage);\n}\n.person[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  margin: 0;\n}\n.person[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--muted);\n  font-weight: 500;\n  margin: -8px 0 0;\n}\n.person[_ngcontent-%COMP%]   .prior[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ink-2);\n  font-weight: 500;\n  margin: 0;\n  line-height: 1.45;\n}\n.person[_ngcontent-%COMP%]   .loc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  color: var(--gold);\n  text-transform: uppercase;\n  margin: 0;\n}\n.partners-band[_ngcontent-%COMP%] {\n  padding: 64px 0;\n  background: var(--paper);\n  border-top: 1px solid var(--line-soft);\n  border-bottom: 1px solid var(--line-soft);\n  overflow: hidden;\n}\n.carousel-track-wrap[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 100%;\n  cursor: default;\n}\n.carousel-track-wrap[_ngcontent-%COMP%]:hover   .carousel-track[_ngcontent-%COMP%] {\n  animation-play-state: paused;\n}\n.carousel-track[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 48px;\n  width: max-content;\n  animation: _ngcontent-%COMP%_carousel-scroll 28s linear infinite;\n}\n.carousel-item[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n}\n.carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 110px;\n  width: auto;\n  object-fit: contain;\n  opacity: 0.75;\n  transition: opacity 0.2s;\n}\n.carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n@keyframes _ngcontent-%COMP%_carousel-scroll {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-50%);\n  }\n}\n.advisors-band[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background: var(--bg);\n  border-top: 1px solid var(--line-soft);\n  border-bottom: 1px solid var(--line-soft);\n}\n.advisors-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 24px;\n}\n.advisor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 24px;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  background: var(--paper);\n}\n.advisor[_ngcontent-%COMP%]   .nm[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n}\n.advisor[_ngcontent-%COMP%]   .from[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--muted);\n  font-weight: 500;\n}\n.advisor[_ngcontent-%COMP%]   .ix[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  color: var(--gold);\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n.creds[_ngcontent-%COMP%] {\n  padding: 120px 0;\n  background: var(--gold);\n  color: #fff;\n}\n.creds[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  color: var(--salmon-soft);\n}\n.creds[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%]::before {\n  background: var(--salmon-soft);\n}\n.creds[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.creds[_ngcontent-%COMP%]   .sec-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.82);\n}\n.creds-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.16);\n}\n.cred-card[_ngcontent-%COMP%] {\n  padding: 48px 28px 48px 0;\n  border-right: 1px solid rgba(255, 255, 255, 0.16);\n}\n.cred-card[_ngcontent-%COMP%]:not(:first-child) {\n  padding-left: 28px;\n}\n.cred-card[_ngcontent-%COMP%]:last-child {\n  border-right: 0;\n  padding-right: 0;\n}\n.cred-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  color: var(--green-light);\n  text-transform: uppercase;\n  margin: 0 0 18px;\n}\n.cred-card[_ngcontent-%COMP%]   .v[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 28px;\n  font-weight: 700;\n  letter-spacing: -0.025em;\n  line-height: 1.1;\n  color: #fff;\n  margin: 0 0 12px;\n}\n.cred-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.75);\n  line-height: 1.55;\n}\n@media (max-width: 980px) {\n  .mission-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 48px;\n  }\n  .what-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .what-card[_ngcontent-%COMP%] {\n    border-right: 0;\n    border-bottom: 1px solid var(--line);\n    padding: 32px 0;\n  }\n  .what-card[_ngcontent-%COMP%]:not(:first-child) {\n    padding-left: 0;\n  }\n  .tl-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 14px;\n  }\n  .tl-year[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n  .tl-stats[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .lead-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .lead-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .lead-pic[_ngcontent-%COMP%] {\n    aspect-ratio: 5/3;\n  }\n  .ops-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .advisors-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .creds-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .cred-card[_ngcontent-%COMP%] {\n    border-right: 0;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.16);\n    padding: 28px 0 !important;\n  }\n}\n@media (max-width: 640px) {\n  .advisors-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .creds-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cred-card[_ngcontent-%COMP%]   .v[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n/*# sourceMappingURL=about.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutComponent, [{
    type: Component,
    args: [{ selector: "fv-about", imports: [NavComponent, FooterComponent, HeroComponent, RouterLink], template: `<fv-nav [dark]="true" [cta]="{label: 'Talk to the founders', href: 'https://form.jotform.com/261642531528052'}"></fv-nav>

<fv-hero
  [slides]="heroSlides"
  eyebrow="About Foovante Global"
  [lines]="['We\\'re building the verification layer', 'for African carbon.']"
  lead="Foovante is a climate-tech company building the verification, marketplace, and capital infrastructure for African carbon projects."
  [cta1]="{label: 'Take a tour', routerLink: '/home'}"
  [cta2]="{label: 'Read the founder brief', routerLink: '/founder-brief'}"
></fv-hero>

<!-- Mission Section -->
<section class="mission" id="mission">
  <div class="wrap mission-grid">
    <div>
      <div class="eyebrow">Our mission</div>
      <blockquote style="margin-top:24px">
        Africa holds <em>significant carbon credit potential</em>, yet only <em>5% of its nature-based capacity has been unlocked as of 2025</em>. We exist to help close that gap.
      </blockquote>
    </div>
    <div class="mission-body">
      <p>The voluntary carbon market is projected to reach $23.99B by 2030, and African ecosystems forests, mangroves, drylands, and agroforestry systems represent some of the highest-quality natural carbon assets on Earth. They should be the supply side of that market.</p>
      <p>They are not. Today, African projects remain severely underrepresented in global carbon markets, because the verification, certification, and trading infrastructure was built for the global North not for a cooperative in Rwanda or a community forest in Ghana. The result: $2.6B in value lost to verification delays by 2030 if nothing changes.</p>
      <p><strong>Foovante Global is building that infrastructure from Accra.</strong> Through Crevy, our digital platform, project developers can document sustainable practices, receive real-time IoT monitoring data, and build the verified evidence trail required for carbon credit issuance going from zero documentation to audit-ready in weeks, not years.</p>
      <p>We are building the operating system for African carbon. And we are building it from the continent itself.</p>
    </div>
  </div>
</section>

<!-- What We Do -->
<section class="what" style="background:var(--paper)">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <div class="eyebrow">What we do</div>
        <h2 style="margin-top:24px">Three capabilities. One platform.</h2>
      </div>
    </div>
    <div class="what-grid">
      @for (w of whatCards; track w.ix) {
        <div class="what-card">
          <div class="ix">{{ w.ix }}</div>
          <h3>{{ w.h }}</h3>
          <p>{{ w.p }}</p>
          <div class="meta">{{ w.meta }}</div>
        </div>
      }
    </div>
  </div>
</section>

<!-- Timeline -->
<section class="timeline" id="milestones">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <div class="eyebrow">Achievements & milestones</div>
        <h2 style="margin-top:24px">Expanding from West Africa across emerging carbon markets globally.</h2>
      </div>
      <div class="right">
        <p>From West Africa to the Caribbean and South America, Foovante is building the infrastructure for carbon markets that have long been underserved. Full updates available in the data room.</p>
      </div>
    </div>
    <div class="tl-placeholder">
      <p>A detailed milestones view is coming soon. Contact us for the full partner and investor update.</p>
      <a routerLink="/founder-brief" fragment="contact" class="btn btn-primary" style="margin-top:24px;display:inline-flex;align-items:center;gap:8px">Talk to the team <span class="arrow">\u2192</span></a>
    </div>
  </div>
</section>


<!-- Advisory Board -->
<section class="advisors-band">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <div class="eyebrow">Advisory board</div>
        <h2 style="margin-top:24px">Backed by senior voices from standards, capital, and climate.</h2>
      </div>
      <div class="right">
        <p>Our advisory board provides governance, standards-body relationships, and capital-allocator perspective: quarterly cadence, with full board observation rights for lead investors.</p>
      </div>
    </div>
    <div class="advisors-grid">
      @for (a of advisors; track a.nm) {
        <div class="advisor">
          <div class="ix">{{ a.ix }}</div>
          <div class="nm">{{ a.nm }}</div>
          <div class="from">{{ a.from }}</div>
        </div>
      }
    </div>
  </div>
</section>

<!-- Partners -->
<section class="partners-band">
  <div class="wrap">
    <div class="eyebrow" style="margin-bottom:40px">Our partners</div>
  </div>
  <div class="carousel-track-wrap">
    <div class="carousel-track" #carouselTrack>
      @for (p of partnerLogos; track p.name) {
        <div class="carousel-item">
          <img [src]="p.logo" [alt]="p.name" height="110" />
        </div>
      }
      @for (p of partnerLogos; track p.name + '_dup') {
        <div class="carousel-item" aria-hidden="true">
          <img [src]="p.logo" [alt]="p.name" height="110" />
        </div>
      }
    </div>
  </div>
</section>

<!-- Credentials -->
<section class="creds" id="credentials">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <div class="eyebrow">Credentials &amp; compliance</div>
        <h2 style="margin-top:24px">Built to meet the standards the market requires.</h2>
      </div>
      <div class="right">
        <p>We are building the compliance foundation expected of any platform handling verified carbon assets. Securing these credentials is part of our pre-seed roadmap.</p>
      </div>
    </div>
    <div class="creds-grid">
      @for (c of credCards; track c.h) {
        <div class="cred-card">
          <h4>{{ c.h }}</h4>
          <div class="v">{{ c.v }}</div>
          <p>{{ c.d }}</p>
        </div>
      }
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta" id="cta">
  <div class="cta-in">
    <h2>Want to talk to us directly?</h2>
    <p>Our founders take introductions from funders, projects, partners, and press personally. Drop a note; we typically reply within one business day.</p>
    <div class="cta-actions">
      <a href="https://form.jotform.com/261642531528052" target="_blank" rel="noopener" class="btn btn-primary btn-lg">Talk to the founders <span class="arrow">\u2192</span></a>
      <a href="mailto:press@foovante.com" class="btn btn-ghost btn-lg">Press &amp; media</a>
      <a href="mailto:careers@foovante.com" class="btn btn-ghost btn-lg">Careers</a>
    </div>
  </div>
</section>

<fv-footer></fv-footer>
`, styles: ["/* src/app/features/about/about.component.scss */\n:host {\n  display: block;\n}\n.mission {\n  padding: 120px 0;\n}\n.mission-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 80px;\n  align-items: start;\n}\n.mission-grid blockquote {\n  font-family: var(--font-display);\n  font-size: clamp(22px, 3vw, 36px);\n  font-weight: 600;\n  letter-spacing: -0.025em;\n  line-height: 1.2;\n  color: var(--ink);\n  margin: 0;\n}\n.mission-grid blockquote em {\n  font-style: normal;\n  color: var(--gold);\n}\n.mission-body {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.mission-body p {\n  font-size: 16px;\n  color: var(--ink-2);\n  line-height: 1.7;\n  margin: 0;\n}\n.mission-body strong {\n  color: var(--ink);\n}\n.what {\n  padding: 120px 0;\n}\n.what-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0;\n  border-top: 1px solid var(--line);\n}\n.what-card {\n  padding: 48px 32px 48px 0;\n  border-right: 1px solid var(--line);\n}\n.what-card:last-child {\n  border-right: 0;\n  padding-right: 0;\n}\n.what-card:not(:first-child) {\n  padding-left: 32px;\n}\n.what-card .ix {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--gold);\n  margin-bottom: 20px;\n}\n.what-card h3 {\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  margin-bottom: 14px;\n}\n.what-card p {\n  font-size: 14px;\n  color: var(--ink-2);\n  margin: 0;\n  line-height: 1.65;\n}\n.what-card .meta {\n  margin-top: 24px;\n  font-size: 12px;\n  color: var(--muted);\n  font-weight: 500;\n  letter-spacing: 0.02em;\n}\n.timeline {\n  padding: 120px 0;\n}\n.tl-placeholder {\n  border-top: 1px solid var(--line);\n  padding: 64px 0;\n}\n.tl-placeholder p {\n  font-size: 16px;\n  color: var(--muted);\n  font-weight: 500;\n  margin: 0;\n}\n.lead-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n.lead-card {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  overflow: hidden;\n  background: var(--paper);\n}\n.lead-pic {\n  aspect-ratio: 3/4;\n  background-size: cover;\n  background-position: center top;\n  background-color: var(--sage);\n}\n.lead-body {\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.lead-body .role {\n  font-family: var(--font-display);\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--gold);\n}\n.lead-body h3 {\n  font-family: var(--font-display);\n  font-size: 26px;\n  font-weight: 700;\n  letter-spacing: -0.025em;\n  line-height: 1.1;\n  margin: 0;\n}\n.lead-body p {\n  font-size: 14px;\n  color: var(--ink-2);\n  line-height: 1.55;\n  margin: 0;\n  flex: 1;\n}\n.lead-body .prior {\n  font-size: 12px;\n  color: var(--muted);\n  font-weight: 500;\n  padding-top: 14px;\n  border-top: 1px solid var(--line-soft);\n}\n.ops {\n  padding: 120px 0;\n  background: var(--paper);\n}\n.ops-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n.person {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.person .pic {\n  aspect-ratio: 1;\n  border-radius: 12px;\n  background-size: cover;\n  background-position: center;\n  background-color: var(--sage);\n}\n.person .name {\n  font-family: var(--font-display);\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  margin: 0;\n}\n.person .role {\n  font-size: 13px;\n  color: var(--muted);\n  font-weight: 500;\n  margin: -8px 0 0;\n}\n.person .prior {\n  font-size: 12px;\n  color: var(--ink-2);\n  font-weight: 500;\n  margin: 0;\n  line-height: 1.45;\n}\n.person .loc {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  color: var(--gold);\n  text-transform: uppercase;\n  margin: 0;\n}\n.partners-band {\n  padding: 64px 0;\n  background: var(--paper);\n  border-top: 1px solid var(--line-soft);\n  border-bottom: 1px solid var(--line-soft);\n  overflow: hidden;\n}\n.carousel-track-wrap {\n  overflow: hidden;\n  width: 100%;\n  cursor: default;\n}\n.carousel-track-wrap:hover .carousel-track {\n  animation-play-state: paused;\n}\n.carousel-track {\n  display: flex;\n  align-items: center;\n  gap: 48px;\n  width: max-content;\n  animation: carousel-scroll 28s linear infinite;\n}\n.carousel-item {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n}\n.carousel-item img {\n  height: 110px;\n  width: auto;\n  object-fit: contain;\n  opacity: 0.75;\n  transition: opacity 0.2s;\n}\n.carousel-item img:hover {\n  opacity: 1;\n}\n@keyframes carousel-scroll {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-50%);\n  }\n}\n.advisors-band {\n  padding: 80px 0;\n  background: var(--bg);\n  border-top: 1px solid var(--line-soft);\n  border-bottom: 1px solid var(--line-soft);\n}\n.advisors-grid {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 24px;\n}\n.advisor {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 24px;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  background: var(--paper);\n}\n.advisor .nm {\n  font-family: var(--font-display);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n}\n.advisor .from {\n  font-size: 13px;\n  color: var(--muted);\n  font-weight: 500;\n}\n.advisor .ix {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  color: var(--gold);\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n.creds {\n  padding: 120px 0;\n  background: var(--gold);\n  color: #fff;\n}\n.creds .eyebrow {\n  color: var(--salmon-soft);\n}\n.creds .eyebrow::before {\n  background: var(--salmon-soft);\n}\n.creds h2 {\n  color: #fff;\n}\n.creds .sec-head p {\n  color: rgba(255, 255, 255, 0.82);\n}\n.creds-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.16);\n}\n.cred-card {\n  padding: 48px 28px 48px 0;\n  border-right: 1px solid rgba(255, 255, 255, 0.16);\n}\n.cred-card:not(:first-child) {\n  padding-left: 28px;\n}\n.cred-card:last-child {\n  border-right: 0;\n  padding-right: 0;\n}\n.cred-card h4 {\n  font-family: var(--font-display);\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  color: var(--green-light);\n  text-transform: uppercase;\n  margin: 0 0 18px;\n}\n.cred-card .v {\n  font-family: var(--font-display);\n  font-size: 28px;\n  font-weight: 700;\n  letter-spacing: -0.025em;\n  line-height: 1.1;\n  color: #fff;\n  margin: 0 0 12px;\n}\n.cred-card p {\n  margin: 0;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.75);\n  line-height: 1.55;\n}\n@media (max-width: 980px) {\n  .mission-grid {\n    grid-template-columns: 1fr;\n    gap: 48px;\n  }\n  .what-grid {\n    grid-template-columns: 1fr;\n  }\n  .what-card {\n    border-right: 0;\n    border-bottom: 1px solid var(--line);\n    padding: 32px 0;\n  }\n  .what-card:not(:first-child) {\n    padding-left: 0;\n  }\n  .tl-row {\n    grid-template-columns: 1fr;\n    gap: 14px;\n  }\n  .tl-year {\n    font-size: 36px;\n  }\n  .tl-stats {\n    text-align: left;\n  }\n  .lead-grid {\n    grid-template-columns: 1fr;\n  }\n  .lead-card {\n    grid-template-columns: 1fr;\n  }\n  .lead-pic {\n    aspect-ratio: 5/3;\n  }\n  .ops-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n  .advisors-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n  .creds-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n  .cred-card {\n    border-right: 0;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.16);\n    padding: 28px 0 !important;\n  }\n}\n@media (max-width: 640px) {\n  .advisors-grid {\n    grid-template-columns: 1fr;\n  }\n  .creds-grid {\n    grid-template-columns: 1fr;\n  }\n  .cred-card .v {\n    font-size: 22px;\n  }\n}\n/*# sourceMappingURL=about.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src/app/features/about/about.component.ts", lineNumber: 16 });
})();
export {
  AboutComponent
};
//# sourceMappingURL=chunk-4F6YU2G4.js.map
