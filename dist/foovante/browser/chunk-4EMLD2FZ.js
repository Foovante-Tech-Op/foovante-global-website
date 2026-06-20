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

// src/app/features/privacy-policy/privacy-policy.component.ts
var _c0 = () => ({ label: "Talk to the founders", href: "https://form.jotform.com/261642531528052" });
var _c1 = () => ["Data privacy and", "protection policy."];
var _c2 = () => ({ label: "Read the protocol", routerLink: "/privacy-policy" });
var _c3 = () => ({ label: "Contact privacy team", href: "mailto:privacy@foovante-global.com" });
var _forTrack0 = ($index, $item) => $item.id;
function PrivacyPolicyComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275property("fragment", s_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1.label);
  }
}
var PrivacyPolicyComponent = class _PrivacyPolicyComponent {
  constructor() {
    this.lastRevised = "03 APR 2026";
    this.enforcementDate = "03 APR 2026";
    this.compliance = "GDPR & GH-DPA";
    this.heroSlides = [
      {
        img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1800&q=80&auto=format&fit=crop",
        lbl: "Data protection",
        ttl: "Cryptographic by default",
        sub: "AES-256 at rest \xB7 TLS 1.3 in transit",
        live: "RBAC \xB7 MFA \xB7 Role-based access"
      },
      {
        img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1800&q=80&auto=format&fit=crop",
        lbl: "Compliance",
        ttl: "GDPR & Ghana DPA aligned",
        sub: "KYC \xB7 KYB \xB7 AML obligations",
        live: "Verified identity vendors"
      },
      {
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&q=80&auto=format&fit=crop",
        lbl: "Ledger immutability",
        ttl: "Anchored to Polygon",
        sub: "Anonymised hashes \xB7 Public audit trail",
        live: "Mathematically tamper-proof"
      }
    ];
    this.sections = [
      { id: "overview", label: "1. Overview & Controller" },
      { id: "data-collected", label: "2. Data Telemetry" },
      { id: "how-we-use", label: "3. Operational Usage" },
      { id: "legal-basis", label: "4. Legal Basis" },
      { id: "data-sharing", label: "5. Third-Party Sharing" },
      { id: "blockchain", label: "6. Ledger Immutability" },
      { id: "cookies", label: "7. Cookies & Tracking" },
      { id: "your-rights", label: "8. Entity Rights" },
      { id: "data-retention", label: "9. Data Retention" },
      { id: "security", label: "10. Cryptographic Security" },
      { id: "changes", label: "11. Protocol Modifications" },
      { id: "contact", label: "12. Governance Contact" }
    ];
  }
  static {
    this.\u0275fac = function PrivacyPolicyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PrivacyPolicyComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrivacyPolicyComponent, selectors: [["fv-privacy-policy"]], decls: 205, vars: 13, consts: [[3, "dark", "cta"], ["eyebrow", "Governance Protocol", "lead", 'Foovante Global Ltd ("Crevy", "we", "us", "our") is committed to absolute cryptographic and legal protection of your data. This protocol dictates the collection, processing, and retention of entity data within the Crevy registry ecosystem.', 3, "slides", "lines", "cta1", "cta2"], [1, "pp-meta"], [1, "wrap"], [1, "meta-row"], [1, "meta-cell"], [1, "meta-label"], [1, "meta-value"], [1, "pp-content"], [1, "wrap", "pp-grid"], [1, "pp-aside"], [1, "pp-aside-inner"], [1, "pp-index-label"], ["aria-label", "Privacy policy sections", 1, "pp-index"], ["routerLink", "/privacy-policy", 3, "fragment"], [1, "pp-body"], ["id", "overview", 1, "pp-section"], [1, "mono", "accent"], [1, "info-box"], ["href", "mailto:legal@foovante-global.com", 1, "accent"], ["id", "data-collected", 1, "pp-section"], ["id", "how-we-use", 1, "pp-section"], ["id", "legal-basis", 1, "pp-section"], ["id", "data-sharing", 1, "pp-section"], [1, "info-box", "partner-list"], [1, "muted"], ["id", "blockchain", 1, "pp-section"], [1, "alert-box"], [1, "alert-head"], ["id", "cookies", 1, "pp-section"], ["id", "your-rights", 1, "pp-section"], ["id", "data-retention", 1, "pp-section"], ["id", "security", 1, "pp-section"], ["id", "changes", 1, "pp-section"], ["id", "contact", 1, "pp-section"], ["href", "mailto:privacy@foovante-global.com", 1, "contact-btn"], [1, "arrow"], [1, "pp-footnote"], ["routerLink", "/terms-of-service"]], template: function PrivacyPolicyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "fv-nav", 0)(1, "fv-hero", 1);
        \u0275\u0275elementStart(2, "section", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "span", 6);
        \u0275\u0275text(7, "Last Revised");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "span", 7);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 5)(11, "span", 6);
        \u0275\u0275text(12, "Enforcement Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 7);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 5)(16, "span", 6);
        \u0275\u0275text(17, "Compliance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 7);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(20, "section", 8)(21, "div", 9)(22, "aside", 10)(23, "div", 11)(24, "p", 12);
        \u0275\u0275text(25, "Protocol Index");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "nav", 13);
        \u0275\u0275repeaterCreate(27, PrivacyPolicyComponent_For_28_Template, 2, 2, "a", 14, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 15)(30, "article", 16)(31, "h2");
        \u0275\u0275text(32, "1. Overview & Data Controller");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "p");
        \u0275\u0275text(34, " This Privacy Policy applies to all systemic actors (Originators, Corporate Entities, Auditors) utilising the Crevy platform infrastructure, accessible at ");
        \u0275\u0275elementStart(35, "span", 17);
        \u0275\u0275text(36, "crevy.app");
        \u0275\u0275elementEnd();
        \u0275\u0275text(37, ". ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "p");
        \u0275\u0275text(39, " For the purposes of the General Data Protection Regulation (GDPR) and the Ghana Data Protection Act 2012 (Act 843), the data controller is: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 18)(41, "strong");
        \u0275\u0275text(42, "Foovante Global Ltd");
        \u0275\u0275elementEnd();
        \u0275\u0275element(43, "br");
        \u0275\u0275text(44, " Registration No: CS-2022-84920");
        \u0275\u0275element(45, "br");
        \u0275\u0275text(46, " Accra, Greater Accra, Ghana");
        \u0275\u0275element(47, "br");
        \u0275\u0275elementStart(48, "a", 19);
        \u0275\u0275text(49, "legal@foovante-global.com");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "article", 20)(51, "h2");
        \u0275\u0275text(52, "2. Telemetry & Data Collected");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "p");
        \u0275\u0275text(54, "We systematically collect and process the following categories of data to operate the registry:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "ul")(56, "li")(57, "strong");
        \u0275\u0275text(58, "Identity Metadata (KYC/KYB):");
        \u0275\u0275elementEnd();
        \u0275\u0275text(59, " Full legal names, corporate registration documents, government-issued IDs, and biometric liveness checks (processed via authorised third-party identity vendors).");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "li")(61, "strong");
        \u0275\u0275text(62, "Financial Vectors:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(63, " Mobile Money (MoMo) routing numbers, SWIFT/IBAN bank details, and Polygon/EVM wallet addresses for settlement.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "li")(65, "strong");
        \u0275\u0275text(66, "Spatial & Environmental Telemetry:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(67, " Precise GIS polygons, GPS coordinates of sensor deployments, and continuous IoT data streams (e.g., Soil Carbon, Biomass readings) tied to your identity.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "li")(69, "strong");
        \u0275\u0275text(70, "System Access Logs:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(71, " IP addresses, cryptographic signatures, browser types, and timestamped audit trails of platform actions.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(72, "article", 21)(73, "h2");
        \u0275\u0275text(74, "3. Operational Usage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "p");
        \u0275\u0275text(76, "The collected telemetry is utilised strictly for the following operational imperatives:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "ul")(78, "li");
        \u0275\u0275text(79, "To establish cryptographic proof of environmental assets (carbon credits).");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "li");
        \u0275\u0275text(81, "To execute identity verification to prevent double-counting and financial fraud in compliance with AML/CFT regulations.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "li");
        \u0275\u0275text(83, "To route corporate liquidity to local project originators seamlessly.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "li");
        \u0275\u0275text(85, "To generate ESRS and IFRS S2 compliant ESG reports for corporate buyers.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(86, "article", 22)(87, "h2");
        \u0275\u0275text(88, "4. Legal Basis for Processing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "p");
        \u0275\u0275text(90, "We ground our data processing in the following legal bases:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "ul")(92, "li")(93, "strong");
        \u0275\u0275text(94, "Contractual Necessity:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(95, " To fulfil our Terms of Service (e.g., issuing credits, executing payouts).");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "li")(97, "strong");
        \u0275\u0275text(98, "Legal Obligation:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(99, " To comply with Ghanaian and international financial regulations (KYC/AML).");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "li")(101, "strong");
        \u0275\u0275text(102, "Legitimate Interest:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(103, " To maintain platform security, prevent fraud, and optimise the dMRV algorithm.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "li")(105, "strong");
        \u0275\u0275text(106, "Explicit Consent:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(107, " For non-essential marketing communications and analytical cookies.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(108, "article", 23)(109, "h2");
        \u0275\u0275text(110, "5. Third-Party Sharing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "p");
        \u0275\u0275text(112, "We do not sell entity data. Telemetry is shared exclusively with authorised infrastructure partners:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "div", 24)(114, "ul")(115, "li")(116, "span");
        \u0275\u0275text(117, "Identity Verification");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "span", 25);
        \u0275\u0275text(119, "SmileID \xB7 Onfido");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(120, "li")(121, "span");
        \u0275\u0275text(122, "Validation Bodies (VVB)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "span", 25);
        \u0275\u0275text(124, "Verra \xB7 Gold Standard (anonymised)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(125, "li")(126, "span");
        \u0275\u0275text(127, "Financial Settlement");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "span", 25);
        \u0275\u0275text(129, "Paystack \xB7 Circle (USDC)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(130, "li")(131, "span");
        \u0275\u0275text(132, "Cloud Infrastructure");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "span", 25);
        \u0275\u0275text(134, "Oracle Cloud (OCI) \xB7 AWS");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(135, "article", 26)(136, "h2");
        \u0275\u0275text(137, "6. Ledger Immutability");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "div", 27)(139, "div", 28);
        \u0275\u0275text(140, "Web3 architectural notice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "p");
        \u0275\u0275text(142, " Crevy anchors carbon credit issuance data (including anonymised project IDs, GIS hashes, and credit volumes) to the public Polygon blockchain. Once data is anchored to a public ledger, it is mathematically impossible to delete or alter. By using our platform, you acknowledge this immutability. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(143, "article", 29)(144, "h2");
        \u0275\u0275text(145, "7. Cookies & Tracking");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "p");
        \u0275\u0275text(147, "We utilise cryptographic session tokens and minimal cookies to maintain state and secure access. We categorise these as:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "ul")(149, "li")(150, "strong");
        \u0275\u0275text(151, "Strictly Necessary:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(152, " Authentication tokens and CSRF protection. Cannot be disabled.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "li")(154, "strong");
        \u0275\u0275text(155, "Analytical (Optional):");
        \u0275\u0275elementEnd();
        \u0275\u0275text(156, " Aggregated telemetry to monitor platform latency and user flow.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(157, "article", 30)(158, "h2");
        \u0275\u0275text(159, "8. Entity Rights");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "p");
        \u0275\u0275text(161, "Under the GDPR and GH-DPA, you possess the right to:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "ul")(163, "li");
        \u0275\u0275text(164, "Request a cryptographic export of all your personal data (Right to Portability).");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "li");
        \u0275\u0275text(166, "Request correction of inaccurate identity profiles.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "li");
        \u0275\u0275text(168, "Request deletion of your data (Right to be Forgotten) \u2014 ");
        \u0275\u0275elementStart(169, "em");
        \u0275\u0275text(170, "Note: This does not apply to data already anchored to the public blockchain or data we must retain for AML compliance.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(171, "article", 31)(172, "h2");
        \u0275\u0275text(173, "9. Data Retention");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(174, "p");
        \u0275\u0275text(175, " We retain identity and financial transaction data for a minimum of ");
        \u0275\u0275elementStart(176, "strong");
        \u0275\u0275text(177, "seven (7) years");
        \u0275\u0275elementEnd();
        \u0275\u0275text(178, " following account termination to comply with international auditing and anti-money laundering statutes. Environmental telemetry used to generate active carbon credits is stored indefinitely to ensure the lifetime integrity of the issued asset. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(179, "article", 32)(180, "h2");
        \u0275\u0275text(181, "10. Cryptographic Security");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(182, "p");
        \u0275\u0275text(183, " Our infrastructure employs AES-256 encryption at rest and TLS 1.3 in transit. Access to sensitive corporate and personal data is governed by strict Role-Based Access Control (RBAC), requiring Multi-Factor Authentication (MFA) for all administrative operations. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(184, "article", 33)(185, "h2");
        \u0275\u0275text(186, "11. Protocol Modifications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "p");
        \u0275\u0275text(188, " We may update this policy periodically to reflect changes in legal frameworks or system architecture. Material changes will be communicated via the platform dashboard or email prior to enforcement. Continued use of the platform post-enforcement constitutes acceptance of the modified protocol. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(189, "article", 34)(190, "h2");
        \u0275\u0275text(191, "12. Governance Contact");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(192, "p");
        \u0275\u0275text(193, " For inquiries regarding this protocol, data subject access requests, or to contact our Data Protection Officer (DPO): ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(194, "a", 35);
        \u0275\u0275text(195, " Contact privacy team ");
        \u0275\u0275elementStart(196, "span", 36);
        \u0275\u0275text(197, "\u2192");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(198, "div", 37)(199, "p");
        \u0275\u0275text(200, "Reviewing our other policies? ");
        \u0275\u0275elementStart(201, "a", 38);
        \u0275\u0275text(202, "Terms of service");
        \u0275\u0275elementEnd();
        \u0275\u0275text(203, ".");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275element(204, "fv-footer");
      }
      if (rf & 2) {
        \u0275\u0275property("dark", true)("cta", \u0275\u0275pureFunction0(9, _c0));
        \u0275\u0275advance();
        \u0275\u0275property("slides", ctx.heroSlides)("lines", \u0275\u0275pureFunction0(10, _c1))("cta1", \u0275\u0275pureFunction0(11, _c2))("cta2", \u0275\u0275pureFunction0(12, _c3));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.lastRevised);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.enforcementDate);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.compliance);
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.sections);
      }
    }, dependencies: [NavComponent, FooterComponent, HeroComponent, RouterLink], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.pp-meta[_ngcontent-%COMP%] {\n  background: var(--paper);\n  border-bottom: 1px solid var(--line);\n  padding: 40px 0;\n}\n.meta-row[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-wrap: wrap;\n  gap: 1px;\n  background: var(--line);\n  border: 1px solid var(--line);\n}\n.meta-cell[_ngcontent-%COMP%] {\n  background: var(--paper);\n  padding: 16px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.meta-cell[_ngcontent-%COMP%]   .meta-label[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--ink-2);\n  opacity: 0.7;\n}\n.meta-cell[_ngcontent-%COMP%]   .meta-value[_ngcontent-%COMP%] {\n  font-family:\n    ui-monospace,\n    "SF Mono",\n    Menlo,\n    monospace;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--ink);\n  text-transform: uppercase;\n}\n.pp-content[_ngcontent-%COMP%] {\n  padding: 80px 0 120px;\n  background: #FAFAF7;\n}\n.pp-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  gap: 80px;\n  align-items: start;\n}\n.pp-aside-inner[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 120px;\n}\n.pp-index-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--ink-2);\n  opacity: 0.7;\n  border-bottom: 1px solid var(--line);\n  padding-bottom: 16px;\n  margin: 0 0 16px;\n}\n.pp-index[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.pp-index[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 12px 0 12px 16px;\n  border-left: 2px solid transparent;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--ink-2);\n  text-decoration: none;\n  transition:\n    color 0.2s ease,\n    border-color 0.2s ease,\n    background 0.2s ease;\n}\n.pp-index[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--ink);\n  border-color: var(--gold);\n  background: var(--paper);\n}\n.pp-body[_ngcontent-%COMP%] {\n  background: var(--paper);\n  border: 1px solid var(--line);\n  padding: 64px;\n  display: flex;\n  flex-direction: column;\n  gap: 80px;\n}\n.pp-section[_ngcontent-%COMP%] {\n  scroll-margin-top: 120px;\n}\n.pp-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(24px, 2.6vw, 34px);\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--ink);\n  margin: 0 0 24px;\n  padding-bottom: 16px;\n  border-bottom: 2px solid var(--ink);\n}\n.pp-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.75;\n  color: var(--ink-2);\n  margin: 0 0 16px;\n  font-weight: 300;\n}\n.pp-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.pp-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 16px 0 0;\n  padding-left: 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.pp-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.7;\n  color: var(--ink-2);\n  font-weight: 300;\n}\n.pp-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker {\n  color: var(--green);\n}\n.pp-section[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--ink);\n  font-weight: 600;\n}\n.pp-section[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--ink-2);\n}\n.mono[_ngcontent-%COMP%] {\n  font-family:\n    ui-monospace,\n    "SF Mono",\n    Menlo,\n    monospace;\n  font-size: 0.95em;\n}\n.accent[_ngcontent-%COMP%] {\n  color: var(--green);\n  font-weight: 600;\n}\n.info-box[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  background: #FAFAF7;\n  border: 1px solid var(--line);\n  padding: 28px 32px;\n  font-family:\n    ui-monospace,\n    "SF Mono",\n    Menlo,\n    monospace;\n  font-size: 13.5px;\n  line-height: 1.75;\n  color: var(--ink-2);\n}\n.info-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 16px;\n  color: var(--ink);\n  display: inline-block;\n  margin-bottom: 4px;\n}\n.partner-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.partner-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 16px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid var(--line-soft);\n  font-size: 12.5px;\n}\n.partner-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n  padding-bottom: 0;\n}\n.partner-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  color: var(--ink);\n  font-weight: 700;\n  letter-spacing: 0.04em;\n}\n.partner-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n  color: var(--ink-2);\n  text-align: right;\n  opacity: 0.85;\n}\n.alert-box[_ngcontent-%COMP%] {\n  background: #FFF6E5;\n  border: 1px solid #F1C77B;\n  padding: 28px 32px;\n  margin-top: 8px;\n}\n.alert-box[_ngcontent-%COMP%]   .alert-head[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: #8A5A0E;\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.alert-box[_ngcontent-%COMP%]   .alert-head[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #C2890F;\n}\n.alert-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family:\n    ui-monospace,\n    "SF Mono",\n    Menlo,\n    monospace;\n  font-size: 13.5px;\n  line-height: 1.7;\n  color: #6B4A0F;\n  margin: 0;\n}\n.contact-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 14px;\n  margin-top: 24px;\n  background: var(--ink);\n  color: var(--paper);\n  padding: 16px 28px;\n  font-family: var(--font-body);\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: background 0.2s ease;\n}\n.contact-btn[_ngcontent-%COMP%]:hover {\n  background: var(--gold);\n}\n.contact-btn[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease;\n}\n.contact-btn[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.pp-footnote[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--line);\n  padding-top: 32px;\n  margin-top: 16px;\n}\n.pp-footnote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ink-2);\n  margin: 0;\n}\n.pp-footnote[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--gold);\n  font-weight: 600;\n}\n@media (max-width: 960px) {\n  .pp-meta[_ngcontent-%COMP%] {\n    padding: 32px 0;\n  }\n  .pp-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 32px;\n  }\n  .pp-aside[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .pp-body[_ngcontent-%COMP%] {\n    padding: 32px;\n    gap: 56px;\n  }\n  .meta-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .partner-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n  }\n  .partner-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n@media (max-width: 520px) {\n  .pp-body[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n  .pp-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .info-box[_ngcontent-%COMP%], \n   .alert-box[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n/*# sourceMappingURL=privacy-policy.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrivacyPolicyComponent, [{
    type: Component,
    args: [{ selector: "fv-privacy-policy", imports: [NavComponent, FooterComponent, HeroComponent, RouterLink], template: `<fv-nav [dark]="true" [cta]="{label: 'Talk to the founders', href: 'https://form.jotform.com/261642531528052'}"></fv-nav>

<fv-hero
  [slides]="heroSlides"
  eyebrow="Governance Protocol"
  [lines]="['Data privacy and', 'protection policy.']"
  lead='Foovante Global Ltd ("Crevy", "we", "us", "our") is committed to absolute cryptographic and legal protection of your data. This protocol dictates the collection, processing, and retention of entity data within the Crevy registry ecosystem.'
  [cta1]="{label: 'Read the protocol', routerLink: '/privacy-policy'}"
  [cta2]="{label: 'Contact privacy team', href: 'mailto:privacy@foovante-global.com'}"
></fv-hero>

<!-- Legal meta strip -->
<section class="pp-meta">
  <div class="wrap">
    <div class="meta-row">
      <div class="meta-cell">
        <span class="meta-label">Last Revised</span>
        <span class="meta-value">{{ lastRevised }}</span>
      </div>
      <div class="meta-cell">
        <span class="meta-label">Enforcement Date</span>
        <span class="meta-value">{{ enforcementDate }}</span>
      </div>
      <div class="meta-cell">
        <span class="meta-label">Compliance</span>
        <span class="meta-value">{{ compliance }}</span>
      </div>
    </div>
  </div>
</section>

<!-- Content -->
<section class="pp-content">
  <div class="wrap pp-grid">
    <!-- Index -->
    <aside class="pp-aside">
      <div class="pp-aside-inner">
        <p class="pp-index-label">Protocol Index</p>
        <nav class="pp-index" aria-label="Privacy policy sections">
          @for (s of sections; track s.id) {
            <a routerLink="/privacy-policy" [fragment]="s.id">{{ s.label }}</a>
          }
        </nav>
      </div>
    </aside>

    <!-- Legal text -->
    <div class="pp-body">
      <article id="overview" class="pp-section">
        <h2>1. Overview & Data Controller</h2>
        <p>
          This Privacy Policy applies to all systemic actors (Originators, Corporate Entities, Auditors) utilising the Crevy platform infrastructure, accessible at <span class="mono accent">crevy.app</span>.
        </p>
        <p>
          For the purposes of the General Data Protection Regulation (GDPR) and the Ghana Data Protection Act 2012 (Act 843), the data controller is:
        </p>
        <div class="info-box">
          <strong>Foovante Global Ltd</strong><br />
          Registration No: CS-2022-84920<br />
          Accra, Greater Accra, Ghana<br />
          <a class="accent" href="mailto:legal@foovante-global.com">legal&#64;foovante-global.com</a>
        </div>
      </article>

      <article id="data-collected" class="pp-section">
        <h2>2. Telemetry & Data Collected</h2>
        <p>We systematically collect and process the following categories of data to operate the registry:</p>
        <ul>
          <li><strong>Identity Metadata (KYC/KYB):</strong> Full legal names, corporate registration documents, government-issued IDs, and biometric liveness checks (processed via authorised third-party identity vendors).</li>
          <li><strong>Financial Vectors:</strong> Mobile Money (MoMo) routing numbers, SWIFT/IBAN bank details, and Polygon/EVM wallet addresses for settlement.</li>
          <li><strong>Spatial & Environmental Telemetry:</strong> Precise GIS polygons, GPS coordinates of sensor deployments, and continuous IoT data streams (e.g., Soil Carbon, Biomass readings) tied to your identity.</li>
          <li><strong>System Access Logs:</strong> IP addresses, cryptographic signatures, browser types, and timestamped audit trails of platform actions.</li>
        </ul>
      </article>

      <article id="how-we-use" class="pp-section">
        <h2>3. Operational Usage</h2>
        <p>The collected telemetry is utilised strictly for the following operational imperatives:</p>
        <ul>
          <li>To establish cryptographic proof of environmental assets (carbon credits).</li>
          <li>To execute identity verification to prevent double-counting and financial fraud in compliance with AML/CFT regulations.</li>
          <li>To route corporate liquidity to local project originators seamlessly.</li>
          <li>To generate ESRS and IFRS S2 compliant ESG reports for corporate buyers.</li>
        </ul>
      </article>

      <article id="legal-basis" class="pp-section">
        <h2>4. Legal Basis for Processing</h2>
        <p>We ground our data processing in the following legal bases:</p>
        <ul>
          <li><strong>Contractual Necessity:</strong> To fulfil our Terms of Service (e.g., issuing credits, executing payouts).</li>
          <li><strong>Legal Obligation:</strong> To comply with Ghanaian and international financial regulations (KYC/AML).</li>
          <li><strong>Legitimate Interest:</strong> To maintain platform security, prevent fraud, and optimise the dMRV algorithm.</li>
          <li><strong>Explicit Consent:</strong> For non-essential marketing communications and analytical cookies.</li>
        </ul>
      </article>

      <article id="data-sharing" class="pp-section">
        <h2>5. Third-Party Sharing</h2>
        <p>We do not sell entity data. Telemetry is shared exclusively with authorised infrastructure partners:</p>
        <div class="info-box partner-list">
          <ul>
            <li><span>Identity Verification</span><span class="muted">SmileID \xB7 Onfido</span></li>
            <li><span>Validation Bodies (VVB)</span><span class="muted">Verra \xB7 Gold Standard (anonymised)</span></li>
            <li><span>Financial Settlement</span><span class="muted">Paystack \xB7 Circle (USDC)</span></li>
            <li><span>Cloud Infrastructure</span><span class="muted">Oracle Cloud (OCI) \xB7 AWS</span></li>
          </ul>
        </div>
      </article>

      <article id="blockchain" class="pp-section">
        <h2>6. Ledger Immutability</h2>
        <div class="alert-box">
          <div class="alert-head">Web3 architectural notice</div>
          <p>
            Crevy anchors carbon credit issuance data (including anonymised project IDs, GIS hashes, and credit volumes) to the public Polygon blockchain.
            Once data is anchored to a public ledger, it is mathematically impossible to delete or alter. By using our platform, you acknowledge this immutability.
          </p>
        </div>
      </article>

      <article id="cookies" class="pp-section">
        <h2>7. Cookies & Tracking</h2>
        <p>We utilise cryptographic session tokens and minimal cookies to maintain state and secure access. We categorise these as:</p>
        <ul>
          <li><strong>Strictly Necessary:</strong> Authentication tokens and CSRF protection. Cannot be disabled.</li>
          <li><strong>Analytical (Optional):</strong> Aggregated telemetry to monitor platform latency and user flow.</li>
        </ul>
      </article>

      <article id="your-rights" class="pp-section">
        <h2>8. Entity Rights</h2>
        <p>Under the GDPR and GH-DPA, you possess the right to:</p>
        <ul>
          <li>Request a cryptographic export of all your personal data (Right to Portability).</li>
          <li>Request correction of inaccurate identity profiles.</li>
          <li>Request deletion of your data (Right to be Forgotten) \u2014 <em>Note: This does not apply to data already anchored to the public blockchain or data we must retain for AML compliance.</em></li>
        </ul>
      </article>

      <article id="data-retention" class="pp-section">
        <h2>9. Data Retention</h2>
        <p>
          We retain identity and financial transaction data for a minimum of <strong>seven (7) years</strong> following account termination to comply with international auditing and anti-money laundering statutes.
          Environmental telemetry used to generate active carbon credits is stored indefinitely to ensure the lifetime integrity of the issued asset.
        </p>
      </article>

      <article id="security" class="pp-section">
        <h2>10. Cryptographic Security</h2>
        <p>
          Our infrastructure employs AES-256 encryption at rest and TLS 1.3 in transit.
          Access to sensitive corporate and personal data is governed by strict Role-Based Access Control (RBAC), requiring Multi-Factor Authentication (MFA) for all administrative operations.
        </p>
      </article>

      <article id="changes" class="pp-section">
        <h2>11. Protocol Modifications</h2>
        <p>
          We may update this policy periodically to reflect changes in legal frameworks or system architecture.
          Material changes will be communicated via the platform dashboard or email prior to enforcement.
          Continued use of the platform post-enforcement constitutes acceptance of the modified protocol.
        </p>
      </article>

      <article id="contact" class="pp-section">
        <h2>12. Governance Contact</h2>
        <p>
          For inquiries regarding this protocol, data subject access requests, or to contact our Data Protection Officer (DPO):
        </p>
        <a class="contact-btn" href="mailto:privacy@foovante-global.com">
          Contact privacy team <span class="arrow">\u2192</span>
        </a>
      </article>

      <div class="pp-footnote">
        <p>Reviewing our other policies? <a routerLink="/terms-of-service">Terms of service</a>.</p>
      </div>
    </div>
  </div>
</section>

<fv-footer></fv-footer>
`, styles: ['/* src/app/features/privacy-policy/privacy-policy.component.scss */\n:host {\n  display: block;\n}\n.pp-meta {\n  background: var(--paper);\n  border-bottom: 1px solid var(--line);\n  padding: 40px 0;\n}\n.meta-row {\n  display: inline-flex;\n  flex-wrap: wrap;\n  gap: 1px;\n  background: var(--line);\n  border: 1px solid var(--line);\n}\n.meta-cell {\n  background: var(--paper);\n  padding: 16px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.meta-cell .meta-label {\n  font-size: 9px;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--ink-2);\n  opacity: 0.7;\n}\n.meta-cell .meta-value {\n  font-family:\n    ui-monospace,\n    "SF Mono",\n    Menlo,\n    monospace;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--ink);\n  text-transform: uppercase;\n}\n.pp-content {\n  padding: 80px 0 120px;\n  background: #FAFAF7;\n}\n.pp-grid {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  gap: 80px;\n  align-items: start;\n}\n.pp-aside-inner {\n  position: sticky;\n  top: 120px;\n}\n.pp-index-label {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--ink-2);\n  opacity: 0.7;\n  border-bottom: 1px solid var(--line);\n  padding-bottom: 16px;\n  margin: 0 0 16px;\n}\n.pp-index {\n  display: flex;\n  flex-direction: column;\n}\n.pp-index a {\n  display: block;\n  padding: 12px 0 12px 16px;\n  border-left: 2px solid transparent;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--ink-2);\n  text-decoration: none;\n  transition:\n    color 0.2s ease,\n    border-color 0.2s ease,\n    background 0.2s ease;\n}\n.pp-index a:hover {\n  color: var(--ink);\n  border-color: var(--gold);\n  background: var(--paper);\n}\n.pp-body {\n  background: var(--paper);\n  border: 1px solid var(--line);\n  padding: 64px;\n  display: flex;\n  flex-direction: column;\n  gap: 80px;\n}\n.pp-section {\n  scroll-margin-top: 120px;\n}\n.pp-section h2 {\n  font-family: var(--font-display);\n  font-size: clamp(24px, 2.6vw, 34px);\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--ink);\n  margin: 0 0 24px;\n  padding-bottom: 16px;\n  border-bottom: 2px solid var(--ink);\n}\n.pp-section p {\n  font-size: 16px;\n  line-height: 1.75;\n  color: var(--ink-2);\n  margin: 0 0 16px;\n  font-weight: 300;\n}\n.pp-section p:last-child {\n  margin-bottom: 0;\n}\n.pp-section ul {\n  margin: 16px 0 0;\n  padding-left: 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.pp-section ul li {\n  font-size: 16px;\n  line-height: 1.7;\n  color: var(--ink-2);\n  font-weight: 300;\n}\n.pp-section ul li::marker {\n  color: var(--green);\n}\n.pp-section strong {\n  color: var(--ink);\n  font-weight: 600;\n}\n.pp-section em {\n  font-style: italic;\n  color: var(--ink-2);\n}\n.mono {\n  font-family:\n    ui-monospace,\n    "SF Mono",\n    Menlo,\n    monospace;\n  font-size: 0.95em;\n}\n.accent {\n  color: var(--green);\n  font-weight: 600;\n}\n.info-box {\n  margin-top: 24px;\n  background: #FAFAF7;\n  border: 1px solid var(--line);\n  padding: 28px 32px;\n  font-family:\n    ui-monospace,\n    "SF Mono",\n    Menlo,\n    monospace;\n  font-size: 13.5px;\n  line-height: 1.75;\n  color: var(--ink-2);\n}\n.info-box strong {\n  font-family: var(--font-display);\n  font-size: 16px;\n  color: var(--ink);\n  display: inline-block;\n  margin-bottom: 4px;\n}\n.partner-list ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.partner-list ul li {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 16px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid var(--line-soft);\n  font-size: 12.5px;\n}\n.partner-list ul li:last-child {\n  border-bottom: 0;\n  padding-bottom: 0;\n}\n.partner-list ul li > span:first-child {\n  color: var(--ink);\n  font-weight: 700;\n  letter-spacing: 0.04em;\n}\n.partner-list ul li .muted {\n  color: var(--ink-2);\n  text-align: right;\n  opacity: 0.85;\n}\n.alert-box {\n  background: #FFF6E5;\n  border: 1px solid #F1C77B;\n  padding: 28px 32px;\n  margin-top: 8px;\n}\n.alert-box .alert-head {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: #8A5A0E;\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.alert-box .alert-head::before {\n  content: "";\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #C2890F;\n}\n.alert-box p {\n  font-family:\n    ui-monospace,\n    "SF Mono",\n    Menlo,\n    monospace;\n  font-size: 13.5px;\n  line-height: 1.7;\n  color: #6B4A0F;\n  margin: 0;\n}\n.contact-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 14px;\n  margin-top: 24px;\n  background: var(--ink);\n  color: var(--paper);\n  padding: 16px 28px;\n  font-family: var(--font-body);\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: background 0.2s ease;\n}\n.contact-btn:hover {\n  background: var(--gold);\n}\n.contact-btn .arrow {\n  transition: transform 0.2s ease;\n}\n.contact-btn:hover .arrow {\n  transform: translateX(4px);\n}\n.pp-footnote {\n  border-top: 1px solid var(--line);\n  padding-top: 32px;\n  margin-top: 16px;\n}\n.pp-footnote p {\n  font-size: 14px;\n  color: var(--ink-2);\n  margin: 0;\n}\n.pp-footnote a {\n  color: var(--gold);\n  font-weight: 600;\n}\n@media (max-width: 960px) {\n  .pp-meta {\n    padding: 32px 0;\n  }\n  .pp-grid {\n    grid-template-columns: 1fr;\n    gap: 32px;\n  }\n  .pp-aside {\n    display: none;\n  }\n  .pp-body {\n    padding: 32px;\n    gap: 56px;\n  }\n  .meta-row {\n    flex-direction: column;\n  }\n  .partner-list ul li {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n  }\n  .partner-list ul li .muted {\n    text-align: left;\n  }\n}\n@media (max-width: 520px) {\n  .pp-body {\n    padding: 24px;\n  }\n  .pp-section h2 {\n    font-size: 22px;\n  }\n  .info-box,\n  .alert-box {\n    padding: 20px;\n  }\n}\n/*# sourceMappingURL=privacy-policy.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrivacyPolicyComponent, { className: "PrivacyPolicyComponent", filePath: "src/app/features/privacy-policy/privacy-policy.component.ts", lineNumber: 19 });
})();
export {
  PrivacyPolicyComponent
};
//# sourceMappingURL=chunk-4EMLD2FZ.js.map
