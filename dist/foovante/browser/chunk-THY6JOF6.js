import {
  ADVISORS,
  LEADERSHIP,
  OPS_TEAM
} from "./chunk-Y6X7OOBV.js";
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
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CPO33PGZ.js";
import "./chunk-3OV72XIM.js";

// src/app/features/about/about.component.ts
var _c0 = () => ({ label: "Talk to the founders", routerLink: "/" });
var _c1 = () => ["We're building the verification layer", "for African carbon."];
var _c2 = () => ({ label: "Take a tour", routerLink: "/home" });
var _c3 = () => ({ label: "Read the founder brief", routerLink: "/founder-brief" });
var _forTrack0 = ($index, $item) => $item.ix;
var _forTrack1 = ($index, $item) => $item.name;
var _forTrack2 = ($index, $item) => $item.nm;
var _forTrack3 = ($index, $item) => $item.h;
function AboutComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 33);
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
function AboutComponent_For_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "div", 34);
    \u0275\u0275elementStart(2, "div", 35)(3, "div", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 37);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(" + p_r2.pic + ")");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r2.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.bio);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.prior);
  }
}
function AboutComponent_For_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 32);
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
    const a_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.ix);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.nm);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.from);
  }
}
function AboutComponent_For_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.h);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.v);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.d);
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
    this.whatCards = [
      {
        ix: "01 \xB7 Verification",
        h: "Continuous MRV stack.",
        p: "Sentinel-2 satellite imagery refreshed every 5 days at 10m resolution, fused with field data from local agents and lab-grade soil sampling. We baseline projects in days, not months.",
        meta: "8,100 ha live by Q2 2026 \xB7 3 projects \xB7 10 smallholder programs"
      },
      {
        ix: "02 \xB7 Marketplace",
        h: "Credit trading platform.",
        p: "We are building a platform where funders can pre-purchase credits at fixed prices and track issuance in real time. The marketplace connects verified projects directly to buyers, with a full audit trail per tonne.",
        meta: "In development \xB7 credit pre-purchase \xB7 audit trail per tonne"
      },
      {
        ix: "03 \xB7 Capital",
        h: "Project finance + structured products.",
        p: "We are developing capital structures \u2014 including forward purchases and blended portfolios \u2014 to connect African carbon projects with development banks, climate funds, and corporate buyers.",
        meta: "Forward purchases \xB7 blended portfolios \xB7 jurisdictional REDD+"
      }
    ];
    this.credCards = [
      { h: "Registration", v: "Ghana SEC \xB7 Targeted", d: "We are pursuing registration with the Ghana Securities & Exchange Commission as a Market Service Provider. Application preparation is underway, funded by our pre-seed round." },
      { h: "Standards", v: "Verra \xB7 GS \xB7 PV \xB7 Targeted", d: "We are working toward operator approval under Verra, Gold Standard, and Puro.earth. Achieving full triple certification across major voluntary carbon standards is a defined milestone in our pre-seed roadmap." },
      { h: "Audit", v: "Big Four \xB7 Planned", d: "We plan to appoint a Big Four firm for financial and operational audit and ISO 14064 inventory verification as part of our pre-seed compliance programme." },
      { h: "Data & security", v: "SOC 2 \xB7 Planned", d: "SOC 2 Type II certification, GDPR compliance, and NDPR alignment are all targeted milestones. All field data is already encrypted at rest and in transit while formal certification is in progress." }
    ];
  }
  static {
    this.\u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AboutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["fv-about"]], decls: 111, vars: 10, consts: [[3, "dark", "cta"], ["eyebrow", "About Foovante Global", "lead", "Foovante is a climate-tech company building the verification, marketplace, and capital infrastructure for African carbon projects.", 3, "slides", "lines", "cta1", "cta2"], ["id", "mission", 1, "mission"], [1, "wrap", "mission-grid"], [1, "eyebrow"], [2, "margin-top", "24px"], [1, "mission-body"], [1, "what", 2, "background", "var(--paper)"], [1, "wrap"], [1, "sec-head"], [1, "what-grid"], [1, "what-card"], ["id", "milestones", 1, "timeline"], [1, "right"], [1, "tl-placeholder"], ["routerLink", "/founder-brief", "fragment", "contact", 1, "btn", "btn-primary", 2, "margin-top", "24px", "display", "inline-flex", "align-items", "center", "gap", "8px"], [1, "arrow"], ["id", "team", 2, "background", "var(--paper)"], [1, "lead-grid"], [1, "lead-card"], [1, "advisors-band"], [1, "advisors-grid"], [1, "advisor"], ["id", "credentials", 1, "creds"], [1, "creds-grid"], [1, "cred-card"], ["id", "cta", 1, "cta"], [1, "cta-in"], [1, "cta-actions"], ["routerLink", "/founder-brief", 1, "btn", "btn-primary", "btn-lg"], ["href", "mailto:press@foovante.com", 1, "btn", "btn-ghost", "btn-lg"], ["href", "mailto:careers@foovante.com", 1, "btn", "btn-ghost", "btn-lg"], [1, "ix"], [1, "meta"], [1, "lead-pic"], [1, "lead-body"], [1, "role"], [1, "prior"], [1, "nm"], [1, "from"], [1, "v"]], template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "fv-nav", 0)(1, "fv-hero", 1);
        \u0275\u0275elementStart(2, "section", 2)(3, "div", 3)(4, "div")(5, "div", 4);
        \u0275\u0275text(6, "Our mission");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "blockquote", 5);
        \u0275\u0275text(8, " Africa holds ");
        \u0275\u0275elementStart(9, "em");
        \u0275\u0275text(10, "10% of global carbon credit potential");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " and now issues ");
        \u0275\u0275elementStart(12, "em");
        \u0275\u0275text(13, "close to 5% as of 2025");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, ". We exist to help close that gap further. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 6)(16, "p");
        \u0275\u0275text(17, "The voluntary carbon market is on track to reach $50\u2013$200B by 2030, and African ecosystems (forests, mangroves, drylands, agroforestry systems) are the highest-quality natural carbon assets on Earth. They should be the supply side of that market.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p");
        \u0275\u0275text(19, "They are not. Today, African projects generate fewer than 2% of global credits, because the verification, certification, and trading infrastructure was built for the global North, not for a cooperative in Rwanda or a community forest in Ghana.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "p")(21, "strong");
        \u0275\u0275text(22, "Foovante is building that infrastructure from Accra.");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, " Continuous satellite monitoring, on-the-ground verification by local agents, multi-standard issuance, and a marketplace that pays projects most of what their credits sell for. We are building the operating system for African carbon. And we are building it from the continent itself.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(24, "section", 7)(25, "div", 8)(26, "div", 9)(27, "div")(28, "div", 4);
        \u0275\u0275text(29, "What we do");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "h2", 5);
        \u0275\u0275text(31, "Three products. One stack.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 10);
        \u0275\u0275repeaterCreate(33, AboutComponent_For_34_Template, 9, 4, "div", 11, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "section", 12)(36, "div", 8)(37, "div", 9)(38, "div")(39, "div", 4);
        \u0275\u0275text(40, "Achievements & milestones");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "h2", 5);
        \u0275\u0275text(42, "Expanding from West Africa across emerging carbon markets globally.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 13)(44, "p");
        \u0275\u0275text(45, "From West Africa to the Caribbean and South America, Foovante is building the infrastructure for carbon markets that have long been underserved. Full updates available in the data room.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "div", 14)(47, "p");
        \u0275\u0275text(48, "A detailed milestones view is coming soon. Contact us for the full partner and investor update.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "a", 15);
        \u0275\u0275text(50, "Talk to the team ");
        \u0275\u0275elementStart(51, "span", 16);
        \u0275\u0275text(52, "\u2192");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(53, "section", 17)(54, "div", 8)(55, "div", 9)(56, "div")(57, "div", 4);
        \u0275\u0275text(58, "Leadership");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "h2", 5);
        \u0275\u0275text(60, "The founders and functional leads.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 13)(62, "p");
        \u0275\u0275text(63, "Our leadership team brings deep backgrounds in climate finance, earth-observation engineering, climate-tech distribution, carbon market access, and carbon standards verification.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(64, "div", 18);
        \u0275\u0275repeaterCreate(65, AboutComponent_For_66_Template, 11, 6, "div", 19, _forTrack1);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(67, "section", 20)(68, "div", 8)(69, "div", 9)(70, "div")(71, "div", 4);
        \u0275\u0275text(72, "Advisory board");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "h2", 5);
        \u0275\u0275text(74, "Backed by senior voices from standards, capital, and climate.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "div", 13)(76, "p");
        \u0275\u0275text(77, "Our advisory board provides governance, standards-body relationships, and capital-allocator perspective: quarterly cadence, with full board observation rights for lead investors.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(78, "div", 21);
        \u0275\u0275repeaterCreate(79, AboutComponent_For_80_Template, 7, 3, "div", 22, _forTrack2);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(81, "section", 23)(82, "div", 8)(83, "div", 9)(84, "div")(85, "div", 4);
        \u0275\u0275text(86, "Credentials & compliance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "h2", 5);
        \u0275\u0275text(88, "Built to meet the highest bar.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "div", 13)(90, "p");
        \u0275\u0275text(91, "We are on the path to holding the registrations and certifications you would expect of any infrastructure operator handling climate capital. Securing these credentials is a primary use of funds from our pre-seed round.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(92, "div", 24);
        \u0275\u0275repeaterCreate(93, AboutComponent_For_94_Template, 7, 3, "div", 25, _forTrack3);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(95, "section", 26)(96, "div", 27)(97, "h2");
        \u0275\u0275text(98, "Want to talk to us directly?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "p");
        \u0275\u0275text(100, "Our founders take introductions from funders, projects, partners, and press personally. Drop a note; we typically reply within one business day.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "div", 28)(102, "a", 29);
        \u0275\u0275text(103, "Talk to the founders ");
        \u0275\u0275elementStart(104, "span", 16);
        \u0275\u0275text(105, "\u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(106, "a", 30);
        \u0275\u0275text(107, "Press & media");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "a", 31);
        \u0275\u0275text(109, "Careers");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(110, "fv-footer");
      }
      if (rf & 2) {
        \u0275\u0275property("dark", true)("cta", \u0275\u0275pureFunction0(6, _c0));
        \u0275\u0275advance();
        \u0275\u0275property("slides", ctx.heroSlides)("lines", \u0275\u0275pureFunction0(7, _c1))("cta1", \u0275\u0275pureFunction0(8, _c2))("cta2", \u0275\u0275pureFunction0(9, _c3));
        \u0275\u0275advance(32);
        \u0275\u0275repeater(ctx.whatCards);
        \u0275\u0275advance(32);
        \u0275\u0275repeater(ctx.leadership);
        \u0275\u0275advance(14);
        \u0275\u0275repeater(ctx.advisors);
        \u0275\u0275advance(14);
        \u0275\u0275repeater(ctx.credCards);
      }
    }, dependencies: [NavComponent, FooterComponent, HeroComponent, RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.mission[_ngcontent-%COMP%] {\n  padding: 120px 0;\n}\n.mission-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 80px;\n  align-items: start;\n}\n.mission-grid[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(22px, 3vw, 36px);\n  font-weight: 600;\n  letter-spacing: -0.025em;\n  line-height: 1.2;\n  color: var(--ink);\n  margin: 0;\n}\n.mission-grid[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: normal;\n  color: var(--gold);\n}\n.mission-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.mission-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--ink-2);\n  line-height: 1.7;\n  margin: 0;\n}\n.mission-body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--ink);\n}\n.what[_ngcontent-%COMP%] {\n  padding: 120px 0;\n}\n.what-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0;\n  border-top: 1px solid var(--line);\n}\n.what-card[_ngcontent-%COMP%] {\n  padding: 48px 32px 48px 0;\n  border-right: 1px solid var(--line);\n}\n.what-card[_ngcontent-%COMP%]:last-child {\n  border-right: 0;\n  padding-right: 0;\n}\n.what-card[_ngcontent-%COMP%]:not(:first-child) {\n  padding-left: 32px;\n}\n.what-card[_ngcontent-%COMP%]   .ix[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--gold);\n  margin-bottom: 20px;\n}\n.what-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  margin-bottom: 14px;\n}\n.what-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ink-2);\n  margin: 0;\n  line-height: 1.65;\n}\n.what-card[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  font-size: 12px;\n  color: var(--muted);\n  font-weight: 500;\n  letter-spacing: 0.02em;\n}\n.timeline[_ngcontent-%COMP%] {\n  padding: 120px 0;\n}\n.tl-placeholder[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--line);\n  padding: 64px 0;\n}\n.tl-placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--muted);\n  font-weight: 500;\n  margin: 0;\n}\n.lead-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n.lead-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  overflow: hidden;\n  background: var(--paper);\n}\n.lead-pic[_ngcontent-%COMP%] {\n  aspect-ratio: 3/4;\n  background-size: cover;\n  background-position: center top;\n  background-color: var(--sage);\n}\n.lead-body[_ngcontent-%COMP%] {\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.lead-body[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--gold);\n}\n.lead-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 26px;\n  font-weight: 700;\n  letter-spacing: -0.025em;\n  line-height: 1.1;\n  margin: 0;\n}\n.lead-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ink-2);\n  line-height: 1.55;\n  margin: 0;\n  flex: 1;\n}\n.lead-body[_ngcontent-%COMP%]   .prior[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--muted);\n  font-weight: 500;\n  padding-top: 14px;\n  border-top: 1px solid var(--line-soft);\n}\n.ops[_ngcontent-%COMP%] {\n  padding: 120px 0;\n  background: var(--paper);\n}\n.ops-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n.person[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.person[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  border-radius: 12px;\n  background-size: cover;\n  background-position: center;\n  background-color: var(--sage);\n}\n.person[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  margin: 0;\n}\n.person[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--muted);\n  font-weight: 500;\n  margin: -8px 0 0;\n}\n.person[_ngcontent-%COMP%]   .prior[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ink-2);\n  font-weight: 500;\n  margin: 0;\n  line-height: 1.45;\n}\n.person[_ngcontent-%COMP%]   .loc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  color: var(--gold);\n  text-transform: uppercase;\n  margin: 0;\n}\n.advisors-band[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background: var(--bg);\n  border-top: 1px solid var(--line-soft);\n  border-bottom: 1px solid var(--line-soft);\n}\n.advisors-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n.advisor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 24px;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  background: var(--paper);\n}\n.advisor[_ngcontent-%COMP%]   .nm[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n}\n.advisor[_ngcontent-%COMP%]   .from[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--muted);\n  font-weight: 500;\n}\n.advisor[_ngcontent-%COMP%]   .ix[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  color: var(--gold);\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n.creds[_ngcontent-%COMP%] {\n  padding: 120px 0;\n  background: var(--gold);\n  color: #fff;\n}\n.creds[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  color: var(--salmon-soft);\n}\n.creds[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%]::before {\n  background: var(--salmon-soft);\n}\n.creds[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.creds[_ngcontent-%COMP%]   .sec-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.82);\n}\n.creds-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.16);\n}\n.cred-card[_ngcontent-%COMP%] {\n  padding: 48px 28px 48px 0;\n  border-right: 1px solid rgba(255, 255, 255, 0.16);\n}\n.cred-card[_ngcontent-%COMP%]:not(:first-child) {\n  padding-left: 28px;\n}\n.cred-card[_ngcontent-%COMP%]:last-child {\n  border-right: 0;\n  padding-right: 0;\n}\n.cred-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  color: var(--green-light);\n  text-transform: uppercase;\n  margin: 0 0 18px;\n}\n.cred-card[_ngcontent-%COMP%]   .v[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 28px;\n  font-weight: 700;\n  letter-spacing: -0.025em;\n  line-height: 1.1;\n  color: #fff;\n  margin: 0 0 12px;\n}\n.cred-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.75);\n  line-height: 1.55;\n}\n@media (max-width: 980px) {\n  .mission-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 48px;\n  }\n  .what-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .what-card[_ngcontent-%COMP%] {\n    border-right: 0;\n    border-bottom: 1px solid var(--line);\n    padding: 32px 0;\n  }\n  .what-card[_ngcontent-%COMP%]:not(:first-child) {\n    padding-left: 0;\n  }\n  .tl-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 14px;\n  }\n  .tl-year[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n  .tl-stats[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .lead-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .lead-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .lead-pic[_ngcontent-%COMP%] {\n    aspect-ratio: 5/3;\n  }\n  .ops-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .advisors-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .creds-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .cred-card[_ngcontent-%COMP%] {\n    border-right: 0;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.16);\n    padding: 28px 0 !important;\n  }\n}\n@media (max-width: 640px) {\n  .advisors-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .creds-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cred-card[_ngcontent-%COMP%]   .v[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n/*# sourceMappingURL=about.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutComponent, [{
    type: Component,
    args: [{ selector: "fv-about", imports: [NavComponent, FooterComponent, HeroComponent, RouterLink], template: `<fv-nav [dark]="true" [cta]="{label: 'Talk to the founders', routerLink: '/'}"></fv-nav>

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
        Africa holds <em>10% of global carbon credit potential</em> and now issues <em>close to 5% as of 2025</em>. We exist to help close that gap further.
      </blockquote>
    </div>
    <div class="mission-body">
      <p>The voluntary carbon market is on track to reach $50\u2013$200B by 2030, and African ecosystems (forests, mangroves, drylands, agroforestry systems) are the highest-quality natural carbon assets on Earth. They should be the supply side of that market.</p>
      <p>They are not. Today, African projects generate fewer than 2% of global credits, because the verification, certification, and trading infrastructure was built for the global North, not for a cooperative in Rwanda or a community forest in Ghana.</p>
      <p><strong>Foovante is building that infrastructure from Accra.</strong> Continuous satellite monitoring, on-the-ground verification by local agents, multi-standard issuance, and a marketplace that pays projects most of what their credits sell for. We are building the operating system for African carbon. And we are building it from the continent itself.</p>
    </div>
  </div>
</section>

<!-- What We Do -->
<section class="what" style="background:var(--paper)">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <div class="eyebrow">What we do</div>
        <h2 style="margin-top:24px">Three products. One stack.</h2>
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

<!-- Leadership Team -->
<section id="team" style="background:var(--paper)">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <div class="eyebrow">Leadership</div>
        <h2 style="margin-top:24px">The founders and functional leads.</h2>
      </div>
      <div class="right">
        <p>Our leadership team brings deep backgrounds in climate finance, earth-observation engineering, climate-tech distribution, carbon market access, and carbon standards verification.</p>
      </div>
    </div>
    <div class="lead-grid">
      @for (p of leadership; track p.name) {
        <div class="lead-card">
          <div class="lead-pic" [style.background-image]="'url(' + p.pic + ')'"></div>
          <div class="lead-body">
            <div class="role">{{ p.role }}</div>
            <h3>{{ p.name }}</h3>
            <p>{{ p.bio }}</p>
            <div class="prior">{{ p.prior }}</div>
          </div>
        </div>
      }
    </div>
  </div>
</section>

<!-- Operating Team: hidden until regional track record is established -->

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

<!-- Credentials -->
<section class="creds" id="credentials">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <div class="eyebrow">Credentials &amp; compliance</div>
        <h2 style="margin-top:24px">Built to meet the highest bar.</h2>
      </div>
      <div class="right">
        <p>We are on the path to holding the registrations and certifications you would expect of any infrastructure operator handling climate capital. Securing these credentials is a primary use of funds from our pre-seed round.</p>
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
      <a routerLink="/founder-brief" class="btn btn-primary btn-lg">Talk to the founders <span class="arrow">\u2192</span></a>
      <a href="mailto:press@foovante.com" class="btn btn-ghost btn-lg">Press &amp; media</a>
      <a href="mailto:careers@foovante.com" class="btn btn-ghost btn-lg">Careers</a>
    </div>
  </div>
</section>

<fv-footer></fv-footer>
`, styles: ["/* src/app/features/about/about.component.scss */\n:host {\n  display: block;\n}\n.mission {\n  padding: 120px 0;\n}\n.mission-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 80px;\n  align-items: start;\n}\n.mission-grid blockquote {\n  font-family: var(--font-display);\n  font-size: clamp(22px, 3vw, 36px);\n  font-weight: 600;\n  letter-spacing: -0.025em;\n  line-height: 1.2;\n  color: var(--ink);\n  margin: 0;\n}\n.mission-grid blockquote em {\n  font-style: normal;\n  color: var(--gold);\n}\n.mission-body {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.mission-body p {\n  font-size: 16px;\n  color: var(--ink-2);\n  line-height: 1.7;\n  margin: 0;\n}\n.mission-body strong {\n  color: var(--ink);\n}\n.what {\n  padding: 120px 0;\n}\n.what-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0;\n  border-top: 1px solid var(--line);\n}\n.what-card {\n  padding: 48px 32px 48px 0;\n  border-right: 1px solid var(--line);\n}\n.what-card:last-child {\n  border-right: 0;\n  padding-right: 0;\n}\n.what-card:not(:first-child) {\n  padding-left: 32px;\n}\n.what-card .ix {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--gold);\n  margin-bottom: 20px;\n}\n.what-card h3 {\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  margin-bottom: 14px;\n}\n.what-card p {\n  font-size: 14px;\n  color: var(--ink-2);\n  margin: 0;\n  line-height: 1.65;\n}\n.what-card .meta {\n  margin-top: 24px;\n  font-size: 12px;\n  color: var(--muted);\n  font-weight: 500;\n  letter-spacing: 0.02em;\n}\n.timeline {\n  padding: 120px 0;\n}\n.tl-placeholder {\n  border-top: 1px solid var(--line);\n  padding: 64px 0;\n}\n.tl-placeholder p {\n  font-size: 16px;\n  color: var(--muted);\n  font-weight: 500;\n  margin: 0;\n}\n.lead-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n.lead-card {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  overflow: hidden;\n  background: var(--paper);\n}\n.lead-pic {\n  aspect-ratio: 3/4;\n  background-size: cover;\n  background-position: center top;\n  background-color: var(--sage);\n}\n.lead-body {\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.lead-body .role {\n  font-family: var(--font-display);\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--gold);\n}\n.lead-body h3 {\n  font-family: var(--font-display);\n  font-size: 26px;\n  font-weight: 700;\n  letter-spacing: -0.025em;\n  line-height: 1.1;\n  margin: 0;\n}\n.lead-body p {\n  font-size: 14px;\n  color: var(--ink-2);\n  line-height: 1.55;\n  margin: 0;\n  flex: 1;\n}\n.lead-body .prior {\n  font-size: 12px;\n  color: var(--muted);\n  font-weight: 500;\n  padding-top: 14px;\n  border-top: 1px solid var(--line-soft);\n}\n.ops {\n  padding: 120px 0;\n  background: var(--paper);\n}\n.ops-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n.person {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.person .pic {\n  aspect-ratio: 1;\n  border-radius: 12px;\n  background-size: cover;\n  background-position: center;\n  background-color: var(--sage);\n}\n.person .name {\n  font-family: var(--font-display);\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n  margin: 0;\n}\n.person .role {\n  font-size: 13px;\n  color: var(--muted);\n  font-weight: 500;\n  margin: -8px 0 0;\n}\n.person .prior {\n  font-size: 12px;\n  color: var(--ink-2);\n  font-weight: 500;\n  margin: 0;\n  line-height: 1.45;\n}\n.person .loc {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  color: var(--gold);\n  text-transform: uppercase;\n  margin: 0;\n}\n.advisors-band {\n  padding: 80px 0;\n  background: var(--bg);\n  border-top: 1px solid var(--line-soft);\n  border-bottom: 1px solid var(--line-soft);\n}\n.advisors-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n.advisor {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 24px;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  background: var(--paper);\n}\n.advisor .nm {\n  font-family: var(--font-display);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: -0.015em;\n}\n.advisor .from {\n  font-size: 13px;\n  color: var(--muted);\n  font-weight: 500;\n}\n.advisor .ix {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  color: var(--gold);\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n.creds {\n  padding: 120px 0;\n  background: var(--gold);\n  color: #fff;\n}\n.creds .eyebrow {\n  color: var(--salmon-soft);\n}\n.creds .eyebrow::before {\n  background: var(--salmon-soft);\n}\n.creds h2 {\n  color: #fff;\n}\n.creds .sec-head p {\n  color: rgba(255, 255, 255, 0.82);\n}\n.creds-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.16);\n}\n.cred-card {\n  padding: 48px 28px 48px 0;\n  border-right: 1px solid rgba(255, 255, 255, 0.16);\n}\n.cred-card:not(:first-child) {\n  padding-left: 28px;\n}\n.cred-card:last-child {\n  border-right: 0;\n  padding-right: 0;\n}\n.cred-card h4 {\n  font-family: var(--font-display);\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  color: var(--green-light);\n  text-transform: uppercase;\n  margin: 0 0 18px;\n}\n.cred-card .v {\n  font-family: var(--font-display);\n  font-size: 28px;\n  font-weight: 700;\n  letter-spacing: -0.025em;\n  line-height: 1.1;\n  color: #fff;\n  margin: 0 0 12px;\n}\n.cred-card p {\n  margin: 0;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.75);\n  line-height: 1.55;\n}\n@media (max-width: 980px) {\n  .mission-grid {\n    grid-template-columns: 1fr;\n    gap: 48px;\n  }\n  .what-grid {\n    grid-template-columns: 1fr;\n  }\n  .what-card {\n    border-right: 0;\n    border-bottom: 1px solid var(--line);\n    padding: 32px 0;\n  }\n  .what-card:not(:first-child) {\n    padding-left: 0;\n  }\n  .tl-row {\n    grid-template-columns: 1fr;\n    gap: 14px;\n  }\n  .tl-year {\n    font-size: 36px;\n  }\n  .tl-stats {\n    text-align: left;\n  }\n  .lead-grid {\n    grid-template-columns: 1fr;\n  }\n  .lead-card {\n    grid-template-columns: 1fr;\n  }\n  .lead-pic {\n    aspect-ratio: 5/3;\n  }\n  .ops-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n  .advisors-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n  .creds-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n  .cred-card {\n    border-right: 0;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.16);\n    padding: 28px 0 !important;\n  }\n}\n@media (max-width: 640px) {\n  .advisors-grid {\n    grid-template-columns: 1fr;\n  }\n  .creds-grid {\n    grid-template-columns: 1fr;\n  }\n  .cred-card .v {\n    font-size: 22px;\n  }\n}\n/*# sourceMappingURL=about.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src/app/features/about/about.component.ts", lineNumber: 16 });
})();
export {
  AboutComponent
};
//# sourceMappingURL=chunk-THY6JOF6.js.map
