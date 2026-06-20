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

// src/app/features/how-mrv-works/how-mrv-works.component.ts
var _c0 = () => ({ label: "Apply to list", routerLink: "/projects" });
var _c1 = () => ["The scientific notebook", "behind every Crevy credit."];
var _c2 = () => ({ label: "Apply to list your project", routerLink: "/projects" });
var _c3 = () => ({ label: "Talk to the team", routerLink: "/founder-brief" });
var _forTrack0 = ($index, $item) => $item.title;
var _forTrack1 = ($index, $item) => $item.ix;
var _forTrack2 = ($index, $item) => $item.n;
var _forTrack3 = ($index, $item) => $item.sym;
function HowMrvWorksComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dl", 36)(4, "div")(5, "dt");
    \u0275\u0275text(6, "Resolution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "dd");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "dt");
    \u0275\u0275text(11, "Frequency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "dd");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "dt");
    \u0275\u0275text(16, "Error margin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "dd");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.title);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(s_r1.resolution);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(s_r1.frequency);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(s_r1.error);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.desc);
  }
}
function HowMrvWorksComponent_For_43_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r2.sym);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r2.def);
  }
}
function HowMrvWorksComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 15)(1, "div", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "dl", 40);
    \u0275\u0275repeaterCreate(10, HowMrvWorksComponent_For_43_For_11_Template, 5, 2, "div", null, _forTrack3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r3.ix);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r3.h);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r3.p);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r3.expr);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(f_r3.legend);
  }
}
function HowMrvWorksComponent_For_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 41);
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
    const s_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r4.n);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r4.h);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r4.p);
  }
}
var HowMrvWorksComponent = class _HowMrvWorksComponent {
  constructor() {
    this.heroSlides = [
      {
        img: "https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?w=1800&q=80&auto=format&fit=crop",
        lbl: "Optical telemetry",
        ttl: "Sentinel-2 multispectral",
        sub: "10 m / pixel \xB7 5-day revisit \xB7 \xB1 2.5% error",
        live: "Continuous canopy monitoring"
      },
      {
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1800&q=80&auto=format&fit=crop",
        lbl: "Edge IoT",
        ttl: "Cryptographically signed payloads",
        sub: "Sub-millimeter \xB7 15 min cadence",
        live: "Anti-tamper hardware attestation"
      },
      {
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&q=80&auto=format&fit=crop",
        lbl: "On-chain minting",
        ttl: "Immutable chain of custody",
        sub: "Polygon \xB7 ERC-1155 \xB7 Hash-anchored",
        live: "Every tonne traceable to the polygon"
      }
    ];
    this.telemetrySpecs = [
      {
        title: "Optical Satellite (Sentinel-2)",
        resolution: "10m / pixel",
        frequency: "5-Day Revisit",
        error: "\xB1 2.5%",
        desc: "Primary optical ingestion. Multispectral analysis (NDVI, EVI) to establish baseline canopy cover and continuous health monitoring."
      },
      {
        title: "SAR Mapping (Sentinel-1)",
        resolution: "10m \xD7 10m",
        frequency: "12-Day Revisit",
        error: "\xB1 4.1%",
        desc: "Synthetic Aperture Radar penetrates cloud cover, allowing us to continuously measure structural volume in equatorial regions year-round."
      },
      {
        title: "Edge IoT \xB7 Terrestrial",
        resolution: "Sub-millimeter",
        frequency: "Real-time \xB7 15 min",
        error: "\xB1 0.1%",
        desc: "Dendrometers and soil-moisture sensors installed in index plots. Cryptographically signed payloads via LoRaWAN to prevent data spoofing."
      }
    ];
    this.formulas = [
      {
        ix: "01 \xB7 Biomass Sequestration (AGB)",
        h: "Above-Ground Biomass Quantification",
        p: "Translates raw physical observations (LiDAR canopy dimensions or multispectral indices) into total vegetative mass.",
        expr: "AGB = 0.0673 \xD7 (\u03C1 \xB7 D\xB2 \xB7 H)^0.976",
        legend: [
          { sym: "AGB", def: "Above-Ground Biomass volume equivalent (kg)" },
          { sym: "\u03C1", def: "Mean wood density metric calibrated by ecosystem databases" },
          { sym: "D \xB7 H", def: "Extrapolated breast-height diameter and vertical structure height (m)" }
        ]
      },
      {
        ix: "02 \xB7 Conservatism Principle",
        h: "Net Asset Allocation Accounting",
        p: "Aligns directly with global standards (Verra VM0042 / Gold Standard). We explicitly subtract all risk factors before minting credits.",
        expr: "N_credits = G_removals \u2212 L_deduction \u2212 B_contribution",
        legend: [
          { sym: "N_credits", def: "Total finalised net carbon credits issued to the marketplace" },
          { sym: "G_removals", def: "Total calculated gross carbon offset (tCO\u2082e)" },
          { sym: "L \xB7 B", def: "Risk mitigations for project leakage and safety buffer pools" }
        ]
      }
    ];
    this.pipelineSteps = [
      {
        n: "1",
        h: "Edge Capture",
        p: "Hardware physically signs raw telemetry with a private key. Prevents data spoofing at the source."
      },
      {
        n: "2",
        h: "dMRV Ingestion & AI",
        p: "Satellite rasters and edge data are processed. Biomass and carbon equivalence are calculated automatically."
      },
      {
        n: "3",
        h: "On-Chain Minting",
        p: "The verified payload is hashed and a non-fungible digital credit is minted on Polygon for immutability."
      }
    ];
  }
  static {
    this.\u0275fac = function HowMrvWorksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HowMrvWorksComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HowMrvWorksComponent, selectors: [["fv-how-mrv-works"]], decls: 155, vars: 10, consts: [[3, "dark", "cta"], ["eyebrow", "Protocol v2.4.1 \xB7 How MRV works", "lead", 'We reject "estimated impact." Explore our exact data sources, Above-Ground Biomass (AGB) calculations, hardware integrity protocols, and the immutable chain-of-custody that powers every Crevy credit.', 3, "slides", "lines", "cta1", "cta2"], [1, "mrv-meta"], [1, "wrap"], [1, "meta-row"], [1, "meta-cell"], [1, "meta-label"], [1, "meta-value"], [1, "mrv-block"], [1, "mrv-block-head"], [1, "eyebrow"], [1, "telemetry-grid"], [1, "telemetry-card"], [1, "mrv-block", "mrv-block-alt"], [1, "formula-grid"], [1, "formula-card"], [1, "t2t-grid"], [1, "t2t-steps"], ["aria-label", "Sample ledger payload", 1, "t2t-console"], [1, "t2t-console-head"], [1, "dots"], [1, "t2t-file"], [1, "t2t-code"], [1, "t-p"], [1, "t-k"], [1, "t-s"], [1, "t-n"], [1, "t-k2"], [1, "t2t-console-foot"], [1, "ok-dot"], [1, "cta"], [1, "cta-in"], [1, "cta-actions"], ["routerLink", "/projects", 1, "btn", "btn-primary", "btn-lg"], [1, "arrow"], ["routerLink", "/founder-brief", 1, "btn", "btn-ghost", "btn-lg"], [1, "spec-list"], [1, "ix"], [1, "lead"], [1, "expr"], [1, "legend"], [1, "t2t-num"]], template: function HowMrvWorksComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "fv-nav", 0)(1, "fv-hero", 1);
        \u0275\u0275elementStart(2, "section", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "span", 6);
        \u0275\u0275text(7, "Standard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "span", 7);
        \u0275\u0275text(9, "ISO 14064 Compliant");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 5)(11, "span", 6);
        \u0275\u0275text(12, "Review");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 7);
        \u0275\u0275text(14, "Peer Reviewed");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 5)(16, "span", 6);
        \u0275\u0275text(17, "Alignment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 7);
        \u0275\u0275text(19, "Verra VM0042 \xB7 Gold Standard");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(20, "section", 8)(21, "div", 3)(22, "div", 9)(23, "div", 10);
        \u0275\u0275text(24, "Data ingestion pipeline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "h2");
        \u0275\u0275text(26, "Multi-modal planetary observation.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "p");
        \u0275\u0275text(28, "Continuous satellite and edge telemetry maps the physical world onto the digital ledger. Every measurement is signed, timestamped, and archived.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 11);
        \u0275\u0275repeaterCreate(30, HowMrvWorksComponent_For_31_Template, 21, 5, "div", 12, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "section", 13)(33, "div", 3)(34, "div", 9)(35, "div", 10);
        \u0275\u0275text(36, "Rigorous mathematical proofs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "h2");
        \u0275\u0275text(38, "Open-source accounting, validated.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "p");
        \u0275\u0275text(40, "Every credit traces back to a transparent calculation aligned with Verra VM0042 and Gold Standard. No black-box estimates.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 14);
        \u0275\u0275repeaterCreate(42, HowMrvWorksComponent_For_43_Template, 12, 4, "article", 15, _forTrack1);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "section", 8)(45, "div", 3)(46, "div", 9)(47, "div", 10);
        \u0275\u0275text(48, "Tree to token");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "h2");
        \u0275\u0275text(50, "Chain of custody.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "p");
        \u0275\u0275text(52, "Explore the exact path data takes from a remote forest to an immutable public registry. No manual spreadsheets. No human tampering.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 16)(54, "ol", 17);
        \u0275\u0275repeaterCreate(55, HowMrvWorksComponent_For_56_Template, 8, 3, "li", null, _forTrack2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "div", 18)(58, "div", 19)(59, "span", 20);
        \u0275\u0275element(60, "i")(61, "i")(62, "i");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "span", 21);
        \u0275\u0275text(64, "ledger_payload.json");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "pre", 22)(66, "span", 23);
        \u0275\u0275text(67, "{");
        \u0275\u0275elementEnd();
        \u0275\u0275text(68, "\n  ");
        \u0275\u0275elementStart(69, "span", 24);
        \u0275\u0275text(70, '"asset_id"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(71, ": ");
        \u0275\u0275elementStart(72, "span", 25);
        \u0275\u0275text(73, '"crv_0x8f2a...9b1c"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(74, ",\n  ");
        \u0275\u0275elementStart(75, "span", 24);
        \u0275\u0275text(76, '"project_did"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(77, ": ");
        \u0275\u0275elementStart(78, "span", 25);
        \u0275\u0275text(79, '"did:crevy:gh:brong-ahafo:82"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(80, ",\n  ");
        \u0275\u0275elementStart(81, "span", 24);
        \u0275\u0275text(82, '"vintage"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(83, ": ");
        \u0275\u0275elementStart(84, "span", 26);
        \u0275\u0275text(85, "2026");
        \u0275\u0275elementEnd();
        \u0275\u0275text(86, ",\n  ");
        \u0275\u0275elementStart(87, "span", 24);
        \u0275\u0275text(88, '"quantification"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(89, ": ");
        \u0275\u0275elementStart(90, "span", 23);
        \u0275\u0275text(91, "{");
        \u0275\u0275elementEnd();
        \u0275\u0275text(92, "\n    ");
        \u0275\u0275elementStart(93, "span", 27);
        \u0275\u0275text(94, '"mass_tco2e"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(95, ": ");
        \u0275\u0275elementStart(96, "span", 26);
        \u0275\u0275text(97, "1.000");
        \u0275\u0275elementEnd();
        \u0275\u0275text(98, ",\n    ");
        \u0275\u0275elementStart(99, "span", 27);
        \u0275\u0275text(100, '"confidence_score"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(101, ": ");
        \u0275\u0275elementStart(102, "span", 26);
        \u0275\u0275text(103, "0.962");
        \u0275\u0275elementEnd();
        \u0275\u0275text(104, ",\n    ");
        \u0275\u0275elementStart(105, "span", 27);
        \u0275\u0275text(106, '"satellite_cid"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(107, ": ");
        \u0275\u0275elementStart(108, "span", 25);
        \u0275\u0275text(109, '"ipfs://QmX..."');
        \u0275\u0275elementEnd();
        \u0275\u0275text(110, "\n  ");
        \u0275\u0275elementStart(111, "span", 23);
        \u0275\u0275text(112, "}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(113, ",\n  ");
        \u0275\u0275elementStart(114, "span", 24);
        \u0275\u0275text(115, '"hardware_attestation"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(116, ": ");
        \u0275\u0275elementStart(117, "span", 23);
        \u0275\u0275text(118, "{");
        \u0275\u0275elementEnd();
        \u0275\u0275text(119, "\n    ");
        \u0275\u0275elementStart(120, "span", 27);
        \u0275\u0275text(121, '"device_mac"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(122, ": ");
        \u0275\u0275elementStart(123, "span", 25);
        \u0275\u0275text(124, '"00:1B:44:11:3A:B7"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(125, ",\n    ");
        \u0275\u0275elementStart(126, "span", 27);
        \u0275\u0275text(127, '"signature"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(128, ": ");
        \u0275\u0275elementStart(129, "span", 25);
        \u0275\u0275text(130, '"0x3e8...f1a"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(131, "\n  ");
        \u0275\u0275elementStart(132, "span", 23);
        \u0275\u0275text(133, "}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(134, "\n");
        \u0275\u0275elementStart(135, "span", 23);
        \u0275\u0275text(136, "}");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(137, "div", 28);
        \u0275\u0275element(138, "span", 29);
        \u0275\u0275elementStart(139, "span");
        \u0275\u0275text(140, "Evidence complete \xB7 signature matches satellite hash");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(141, "section", 30)(142, "div", 31)(143, "h2");
        \u0275\u0275text(144, "Want this evidence trail for your project?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "p");
        \u0275\u0275text(146, "Every project listed on Crevy gets the same dMRV pipeline, the same auditable formulas, and the same on-chain custody.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "div", 32)(148, "a", 33);
        \u0275\u0275text(149, "Apply to list ");
        \u0275\u0275elementStart(150, "span", 34);
        \u0275\u0275text(151, "\u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(152, "a", 35);
        \u0275\u0275text(153, "Talk to the team");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(154, "fv-footer");
      }
      if (rf & 2) {
        \u0275\u0275property("dark", true)("cta", \u0275\u0275pureFunction0(6, _c0));
        \u0275\u0275advance();
        \u0275\u0275property("slides", ctx.heroSlides)("lines", \u0275\u0275pureFunction0(7, _c1))("cta1", \u0275\u0275pureFunction0(8, _c2))("cta2", \u0275\u0275pureFunction0(9, _c3));
        \u0275\u0275advance(29);
        \u0275\u0275repeater(ctx.telemetrySpecs);
        \u0275\u0275advance(12);
        \u0275\u0275repeater(ctx.formulas);
        \u0275\u0275advance(13);
        \u0275\u0275repeater(ctx.pipelineSteps);
      }
    }, dependencies: [NavComponent, FooterComponent, HeroComponent, RouterLink], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.mrv-meta[_ngcontent-%COMP%] {\n  background: var(--paper);\n  border-bottom: 1px solid var(--line);\n  padding: 40px 0;\n}\n.meta-row[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-wrap: wrap;\n  gap: 1px;\n  background: var(--line);\n  border: 1px solid var(--line);\n}\n.meta-cell[_ngcontent-%COMP%] {\n  background: var(--paper);\n  padding: 16px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.meta-cell[_ngcontent-%COMP%]   .meta-label[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--ink-2);\n  opacity: 0.7;\n}\n.meta-cell[_ngcontent-%COMP%]   .meta-value[_ngcontent-%COMP%] {\n  font-family:\n    ui-monospace,\n    "SF Mono",\n    Menlo,\n    monospace;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--ink);\n}\n.mrv-block[_ngcontent-%COMP%] {\n  padding: 96px 0;\n  background: var(--paper);\n}\n.mrv-block-alt[_ngcontent-%COMP%] {\n  background: #FAFAF7;\n}\n.mrv-block-head[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin-bottom: 48px;\n}\n.mrv-block-head[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--gold);\n}\n.mrv-block-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(28px, 3vw, 40px);\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  margin: 16px 0 16px;\n  color: var(--ink);\n  line-height: 1.15;\n}\n.mrv-block-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.7;\n  color: var(--ink-2);\n  margin: 0;\n}\n.telemetry-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0;\n  border: 1px solid var(--line);\n}\n.telemetry-card[_ngcontent-%COMP%] {\n  padding: 40px 32px;\n  background: var(--paper);\n  border-right: 1px solid var(--line);\n  display: flex;\n  flex-direction: column;\n}\n.telemetry-card[_ngcontent-%COMP%]:last-child {\n  border-right: 0;\n}\n.telemetry-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 17px;\n  font-weight: 700;\n  letter-spacing: -0.015em;\n  color: var(--ink);\n  margin: 0 0 24px;\n}\n.telemetry-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ink-2);\n  line-height: 1.65;\n  margin: 0;\n}\n.spec-list[_ngcontent-%COMP%] {\n  margin: 0 0 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-family:\n    ui-monospace,\n    "SF Mono",\n    Menlo,\n    monospace;\n}\n.spec-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  border-bottom: 1px solid var(--line-soft);\n  padding-bottom: 8px;\n  font-size: 11px;\n}\n.spec-list[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: var(--ink-2);\n  opacity: 0.7;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  margin: 0;\n}\n.spec-list[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  color: var(--ink);\n  font-weight: 700;\n  margin: 0;\n}\n.formula-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 24px;\n}\n.formula-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  background: var(--paper);\n  padding: 36px;\n  display: flex;\n  flex-direction: column;\n  transition: border-color 0.2s ease;\n}\n.formula-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--ink);\n}\n.formula-card[_ngcontent-%COMP%]   .ix[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--ink-2);\n  opacity: 0.7;\n  padding-bottom: 16px;\n  margin-bottom: 16px;\n  border-bottom: 1px solid var(--line-soft);\n}\n.formula-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: -0.015em;\n  margin: 0 0 12px;\n  color: var(--ink);\n}\n.formula-card[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ink-2);\n  line-height: 1.65;\n  margin: 0 0 28px;\n}\n.formula-card[_ngcontent-%COMP%]   .expr[_ngcontent-%COMP%] {\n  background: var(--line-soft);\n  border: 1px solid var(--line);\n  padding: 24px;\n  font-family:\n    ui-monospace,\n    "SF Mono",\n    Menlo,\n    monospace;\n  font-size: 16px;\n  color: var(--ink);\n  text-align: center;\n  margin-bottom: 28px;\n  overflow-x: auto;\n}\n.legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin: 0;\n}\n.legend[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 110px 1fr;\n  gap: 12px;\n  font-size: 13px;\n}\n.legend[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-family:\n    ui-monospace,\n    "SF Mono",\n    Menlo,\n    monospace;\n  color: var(--ink);\n  font-weight: 700;\n  margin: 0;\n}\n.legend[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  color: var(--ink-2);\n  line-height: 1.55;\n  margin: 0;\n}\n.t2t-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 5fr 7fr;\n  gap: 56px;\n  align-items: start;\n}\n.t2t-steps[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  position: relative;\n}\n.t2t-steps[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 23px;\n  top: 24px;\n  bottom: 24px;\n  width: 2px;\n  background: var(--line);\n}\n.t2t-steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: flex-start;\n  position: relative;\n}\n.t2t-num[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--paper);\n  border: 1px solid var(--line);\n  font-family: var(--font-display);\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--ink);\n  flex-shrink: 0;\n  position: relative;\n  z-index: 1;\n}\n.t2t-steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   .t2t-num[_ngcontent-%COMP%] {\n  background: var(--ink);\n  color: var(--paper);\n  border-color: var(--ink);\n}\n.t2t-steps[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: -0.015em;\n  color: var(--ink);\n  margin: 6px 0 8px;\n}\n.t2t-steps[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ink-2);\n  line-height: 1.65;\n  margin: 0;\n}\n.t2t-console[_ngcontent-%COMP%] {\n  background: #0E1916;\n  border: 1px solid #1F2F2A;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.t2t-console-head[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: #0A1311;\n  border-bottom: 1px solid #1F2F2A;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.t2t-console-head[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 6px;\n}\n.t2t-console-head[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #2A3D37;\n}\n.t2t-console-head[_ngcontent-%COMP%]   .t2t-file[_ngcontent-%COMP%] {\n  font-family:\n    ui-monospace,\n    "SF Mono",\n    Menlo,\n    monospace;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: #7C8C87;\n}\n.t2t-code[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 24px 28px;\n  font-family:\n    ui-monospace,\n    "SF Mono",\n    Menlo,\n    monospace;\n  font-size: 13px;\n  line-height: 1.85;\n  color: #B7C6C0;\n  overflow-x: auto;\n  white-space: pre;\n}\n.t2t-code[_ngcontent-%COMP%]   .t-k[_ngcontent-%COMP%] {\n  color: #5EE0B3;\n}\n.t2t-code[_ngcontent-%COMP%]   .t-k2[_ngcontent-%COMP%] {\n  color: #6FB1FF;\n}\n.t2t-code[_ngcontent-%COMP%]   .t-s[_ngcontent-%COMP%] {\n  color: #87CEFA;\n}\n.t2t-code[_ngcontent-%COMP%]   .t-n[_ngcontent-%COMP%] {\n  color: #FFB36B;\n}\n.t2t-code[_ngcontent-%COMP%]   .t-p[_ngcontent-%COMP%] {\n  color: #6B7C77;\n}\n.t2t-console-foot[_ngcontent-%COMP%] {\n  padding: 14px 24px;\n  background: #0A1311;\n  border-top: 1px solid #1F2F2A;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-family:\n    ui-monospace,\n    "SF Mono",\n    Menlo,\n    monospace;\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: #5EE0B3;\n  font-weight: 700;\n}\n.t2t-console-foot[_ngcontent-%COMP%]   .ok-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #5EE0B3;\n  box-shadow: 0 0 8px #5EE0B3;\n}\n@media (max-width: 1024px) {\n  .telemetry-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .telemetry-card[_ngcontent-%COMP%] {\n    border-right: 0;\n    border-bottom: 1px solid var(--line);\n  }\n  .telemetry-card[_ngcontent-%COMP%]:last-child {\n    border-bottom: 0;\n  }\n  .formula-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .t2t-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 40px;\n  }\n}\n@media (max-width: 640px) {\n  .mrv-block[_ngcontent-%COMP%] {\n    padding: 64px 0;\n  }\n  .meta-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .formula-card[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n  .formula-card[_ngcontent-%COMP%]   .expr[_ngcontent-%COMP%] {\n    font-size: 13px;\n    padding: 16px;\n  }\n  .legend[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    grid-template-columns: 90px 1fr;\n  }\n  .t2t-code[_ngcontent-%COMP%] {\n    font-size: 11.5px;\n    padding: 18px;\n  }\n}\n/*# sourceMappingURL=how-mrv-works.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HowMrvWorksComponent, [{
    type: Component,
    args: [{ selector: "fv-how-mrv-works", imports: [NavComponent, FooterComponent, HeroComponent, RouterLink], template: `<fv-nav [dark]="true" [cta]="{label: 'Apply to list', routerLink: '/projects'}"></fv-nav>

<fv-hero
  [slides]="heroSlides"
  eyebrow="Protocol v2.4.1 \xB7 How MRV works"
  [lines]="['The scientific notebook', 'behind every Crevy credit.']"
  lead='We reject "estimated impact." Explore our exact data sources, Above-Ground Biomass (AGB) calculations, hardware integrity protocols, and the immutable chain-of-custody that powers every Crevy credit.'
  [cta1]="{label: 'Apply to list your project', routerLink: '/projects'}"
  [cta2]="{label: 'Talk to the team', routerLink: '/founder-brief'}"
></fv-hero>

<!-- Compliance band -->
<section class="mrv-meta">
  <div class="wrap">
    <div class="meta-row">
      <div class="meta-cell"><span class="meta-label">Standard</span><span class="meta-value">ISO 14064 Compliant</span></div>
      <div class="meta-cell"><span class="meta-label">Review</span><span class="meta-value">Peer Reviewed</span></div>
      <div class="meta-cell"><span class="meta-label">Alignment</span><span class="meta-value">Verra VM0042 \xB7 Gold Standard</span></div>
    </div>
  </div>
</section>

<!-- Data Ingestion Pipeline -->
<section class="mrv-block">
  <div class="wrap">
    <div class="mrv-block-head">
      <div class="eyebrow">Data ingestion pipeline</div>
      <h2>Multi-modal planetary observation.</h2>
      <p>Continuous satellite and edge telemetry maps the physical world onto the digital ledger. Every measurement is signed, timestamped, and archived.</p>
    </div>
    <div class="telemetry-grid">
      @for (s of telemetrySpecs; track s.title) {
        <div class="telemetry-card">
          <h4>{{ s.title }}</h4>
          <dl class="spec-list">
            <div><dt>Resolution</dt><dd>{{ s.resolution }}</dd></div>
            <div><dt>Frequency</dt><dd>{{ s.frequency }}</dd></div>
            <div><dt>Error margin</dt><dd>{{ s.error }}</dd></div>
          </dl>
          <p>{{ s.desc }}</p>
        </div>
      }
    </div>
  </div>
</section>

<!-- Mathematical Proofs -->
<section class="mrv-block mrv-block-alt">
  <div class="wrap">
    <div class="mrv-block-head">
      <div class="eyebrow">Rigorous mathematical proofs</div>
      <h2>Open-source accounting, validated.</h2>
      <p>Every credit traces back to a transparent calculation aligned with Verra VM0042 and Gold Standard. No black-box estimates.</p>
    </div>
    <div class="formula-grid">
      @for (f of formulas; track f.ix) {
        <article class="formula-card">
          <div class="ix">{{ f.ix }}</div>
          <h4>{{ f.h }}</h4>
          <p class="lead">{{ f.p }}</p>
          <div class="expr">{{ f.expr }}</div>
          <dl class="legend">
            @for (l of f.legend; track l.sym) {
              <div>
                <dt>{{ l.sym }}</dt>
                <dd>{{ l.def }}</dd>
              </div>
            }
          </dl>
        </article>
      }
    </div>
  </div>
</section>

<!-- Tree to Token -->
<section class="mrv-block">
  <div class="wrap">
    <div class="mrv-block-head">
      <div class="eyebrow">Tree to token</div>
      <h2>Chain of custody.</h2>
      <p>Explore the exact path data takes from a remote forest to an immutable public registry. No manual spreadsheets. No human tampering.</p>
    </div>
    <div class="t2t-grid">
      <ol class="t2t-steps">
        @for (s of pipelineSteps; track s.n) {
          <li>
            <span class="t2t-num">{{ s.n }}</span>
            <div>
              <h4>{{ s.h }}</h4>
              <p>{{ s.p }}</p>
            </div>
          </li>
        }
      </ol>
      <div class="t2t-console" aria-label="Sample ledger payload">
        <div class="t2t-console-head">
          <span class="dots"><i></i><i></i><i></i></span>
          <span class="t2t-file">ledger_payload.json</span>
        </div>
<pre class="t2t-code"><span class="t-p">&#123;</span>
  <span class="t-k">"asset_id"</span>: <span class="t-s">"crv_0x8f2a...9b1c"</span>,
  <span class="t-k">"project_did"</span>: <span class="t-s">"did:crevy:gh:brong-ahafo:82"</span>,
  <span class="t-k">"vintage"</span>: <span class="t-n">2026</span>,
  <span class="t-k">"quantification"</span>: <span class="t-p">&#123;</span>
    <span class="t-k2">"mass_tco2e"</span>: <span class="t-n">1.000</span>,
    <span class="t-k2">"confidence_score"</span>: <span class="t-n">0.962</span>,
    <span class="t-k2">"satellite_cid"</span>: <span class="t-s">"ipfs://QmX..."</span>
  <span class="t-p">&#125;</span>,
  <span class="t-k">"hardware_attestation"</span>: <span class="t-p">&#123;</span>
    <span class="t-k2">"device_mac"</span>: <span class="t-s">"00:1B:44:11:3A:B7"</span>,
    <span class="t-k2">"signature"</span>: <span class="t-s">"0x3e8...f1a"</span>
  <span class="t-p">&#125;</span>
<span class="t-p">&#125;</span></pre>
        <div class="t2t-console-foot">
          <span class="ok-dot"></span>
          <span>Evidence complete \xB7 signature matches satellite hash</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta">
  <div class="cta-in">
    <h2>Want this evidence trail for your project?</h2>
    <p>Every project listed on Crevy gets the same dMRV pipeline, the same auditable formulas, and the same on-chain custody.</p>
    <div class="cta-actions">
      <a class="btn btn-primary btn-lg" routerLink="/projects">Apply to list <span class="arrow">\u2192</span></a>
      <a class="btn btn-ghost btn-lg" routerLink="/founder-brief">Talk to the team</a>
    </div>
  </div>
</section>

<fv-footer></fv-footer>
`, styles: ['/* src/app/features/how-mrv-works/how-mrv-works.component.scss */\n:host {\n  display: block;\n}\n.mrv-meta {\n  background: var(--paper);\n  border-bottom: 1px solid var(--line);\n  padding: 40px 0;\n}\n.meta-row {\n  display: inline-flex;\n  flex-wrap: wrap;\n  gap: 1px;\n  background: var(--line);\n  border: 1px solid var(--line);\n}\n.meta-cell {\n  background: var(--paper);\n  padding: 16px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.meta-cell .meta-label {\n  font-size: 9px;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--ink-2);\n  opacity: 0.7;\n}\n.meta-cell .meta-value {\n  font-family:\n    ui-monospace,\n    "SF Mono",\n    Menlo,\n    monospace;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--ink);\n}\n.mrv-block {\n  padding: 96px 0;\n  background: var(--paper);\n}\n.mrv-block-alt {\n  background: #FAFAF7;\n}\n.mrv-block-head {\n  max-width: 760px;\n  margin-bottom: 48px;\n}\n.mrv-block-head .eyebrow {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--gold);\n}\n.mrv-block-head h2 {\n  font-family: var(--font-display);\n  font-size: clamp(28px, 3vw, 40px);\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  margin: 16px 0 16px;\n  color: var(--ink);\n  line-height: 1.15;\n}\n.mrv-block-head p {\n  font-size: 16px;\n  line-height: 1.7;\n  color: var(--ink-2);\n  margin: 0;\n}\n.telemetry-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0;\n  border: 1px solid var(--line);\n}\n.telemetry-card {\n  padding: 40px 32px;\n  background: var(--paper);\n  border-right: 1px solid var(--line);\n  display: flex;\n  flex-direction: column;\n}\n.telemetry-card:last-child {\n  border-right: 0;\n}\n.telemetry-card h4 {\n  font-family: var(--font-display);\n  font-size: 17px;\n  font-weight: 700;\n  letter-spacing: -0.015em;\n  color: var(--ink);\n  margin: 0 0 24px;\n}\n.telemetry-card p {\n  font-size: 14px;\n  color: var(--ink-2);\n  line-height: 1.65;\n  margin: 0;\n}\n.spec-list {\n  margin: 0 0 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-family:\n    ui-monospace,\n    "SF Mono",\n    Menlo,\n    monospace;\n}\n.spec-list > div {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  border-bottom: 1px solid var(--line-soft);\n  padding-bottom: 8px;\n  font-size: 11px;\n}\n.spec-list dt {\n  color: var(--ink-2);\n  opacity: 0.7;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  margin: 0;\n}\n.spec-list dd {\n  color: var(--ink);\n  font-weight: 700;\n  margin: 0;\n}\n.formula-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 24px;\n}\n.formula-card {\n  border: 1px solid var(--line);\n  background: var(--paper);\n  padding: 36px;\n  display: flex;\n  flex-direction: column;\n  transition: border-color 0.2s ease;\n}\n.formula-card:hover {\n  border-color: var(--ink);\n}\n.formula-card .ix {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--ink-2);\n  opacity: 0.7;\n  padding-bottom: 16px;\n  margin-bottom: 16px;\n  border-bottom: 1px solid var(--line-soft);\n}\n.formula-card h4 {\n  font-family: var(--font-display);\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: -0.015em;\n  margin: 0 0 12px;\n  color: var(--ink);\n}\n.formula-card .lead {\n  font-size: 14px;\n  color: var(--ink-2);\n  line-height: 1.65;\n  margin: 0 0 28px;\n}\n.formula-card .expr {\n  background: var(--line-soft);\n  border: 1px solid var(--line);\n  padding: 24px;\n  font-family:\n    ui-monospace,\n    "SF Mono",\n    Menlo,\n    monospace;\n  font-size: 16px;\n  color: var(--ink);\n  text-align: center;\n  margin-bottom: 28px;\n  overflow-x: auto;\n}\n.legend {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin: 0;\n}\n.legend > div {\n  display: grid;\n  grid-template-columns: 110px 1fr;\n  gap: 12px;\n  font-size: 13px;\n}\n.legend dt {\n  font-family:\n    ui-monospace,\n    "SF Mono",\n    Menlo,\n    monospace;\n  color: var(--ink);\n  font-weight: 700;\n  margin: 0;\n}\n.legend dd {\n  color: var(--ink-2);\n  line-height: 1.55;\n  margin: 0;\n}\n.t2t-grid {\n  display: grid;\n  grid-template-columns: 5fr 7fr;\n  gap: 56px;\n  align-items: start;\n}\n.t2t-steps {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  position: relative;\n}\n.t2t-steps::before {\n  content: "";\n  position: absolute;\n  left: 23px;\n  top: 24px;\n  bottom: 24px;\n  width: 2px;\n  background: var(--line);\n}\n.t2t-steps li {\n  display: flex;\n  gap: 20px;\n  align-items: flex-start;\n  position: relative;\n}\n.t2t-num {\n  width: 48px;\n  height: 48px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--paper);\n  border: 1px solid var(--line);\n  font-family: var(--font-display);\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--ink);\n  flex-shrink: 0;\n  position: relative;\n  z-index: 1;\n}\n.t2t-steps li:last-child .t2t-num {\n  background: var(--ink);\n  color: var(--paper);\n  border-color: var(--ink);\n}\n.t2t-steps h4 {\n  font-family: var(--font-display);\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: -0.015em;\n  color: var(--ink);\n  margin: 6px 0 8px;\n}\n.t2t-steps p {\n  font-size: 14px;\n  color: var(--ink-2);\n  line-height: 1.65;\n  margin: 0;\n}\n.t2t-console {\n  background: #0E1916;\n  border: 1px solid #1F2F2A;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.t2t-console-head {\n  padding: 12px 16px;\n  background: #0A1311;\n  border-bottom: 1px solid #1F2F2A;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.t2t-console-head .dots {\n  display: inline-flex;\n  gap: 6px;\n}\n.t2t-console-head .dots i {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #2A3D37;\n}\n.t2t-console-head .t2t-file {\n  font-family:\n    ui-monospace,\n    "SF Mono",\n    Menlo,\n    monospace;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: #7C8C87;\n}\n.t2t-code {\n  margin: 0;\n  padding: 24px 28px;\n  font-family:\n    ui-monospace,\n    "SF Mono",\n    Menlo,\n    monospace;\n  font-size: 13px;\n  line-height: 1.85;\n  color: #B7C6C0;\n  overflow-x: auto;\n  white-space: pre;\n}\n.t2t-code .t-k {\n  color: #5EE0B3;\n}\n.t2t-code .t-k2 {\n  color: #6FB1FF;\n}\n.t2t-code .t-s {\n  color: #87CEFA;\n}\n.t2t-code .t-n {\n  color: #FFB36B;\n}\n.t2t-code .t-p {\n  color: #6B7C77;\n}\n.t2t-console-foot {\n  padding: 14px 24px;\n  background: #0A1311;\n  border-top: 1px solid #1F2F2A;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-family:\n    ui-monospace,\n    "SF Mono",\n    Menlo,\n    monospace;\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: #5EE0B3;\n  font-weight: 700;\n}\n.t2t-console-foot .ok-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #5EE0B3;\n  box-shadow: 0 0 8px #5EE0B3;\n}\n@media (max-width: 1024px) {\n  .telemetry-grid {\n    grid-template-columns: 1fr;\n  }\n  .telemetry-card {\n    border-right: 0;\n    border-bottom: 1px solid var(--line);\n  }\n  .telemetry-card:last-child {\n    border-bottom: 0;\n  }\n  .formula-grid {\n    grid-template-columns: 1fr;\n  }\n  .t2t-grid {\n    grid-template-columns: 1fr;\n    gap: 40px;\n  }\n}\n@media (max-width: 640px) {\n  .mrv-block {\n    padding: 64px 0;\n  }\n  .meta-row {\n    flex-direction: column;\n  }\n  .formula-card {\n    padding: 24px;\n  }\n  .formula-card .expr {\n    font-size: 13px;\n    padding: 16px;\n  }\n  .legend > div {\n    grid-template-columns: 90px 1fr;\n  }\n  .t2t-code {\n    font-size: 11.5px;\n    padding: 18px;\n  }\n}\n/*# sourceMappingURL=how-mrv-works.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HowMrvWorksComponent, { className: "HowMrvWorksComponent", filePath: "src/app/features/how-mrv-works/how-mrv-works.component.ts", lineNumber: 14 });
})();
export {
  HowMrvWorksComponent
};
//# sourceMappingURL=chunk-A2YY5M5C.js.map
