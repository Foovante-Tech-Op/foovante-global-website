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

// src/app/features/terms-of-service/terms-of-service.component.ts
var _c0 = () => ({ label: "Talk to the founders", href: "https://form.jotform.com/261642531528052" });
var _c1 = () => ["The legal parameters", "for using the Crevy platform."];
var _c2 = () => ({ label: "Read the protocol", routerLink: "/terms-of-service" });
var _c3 = () => ({ label: "Talk to the founders", routerLink: "/founder-brief" });
var _forTrack0 = ($index, $item) => $item.id;
function TermsOfServiceComponent_For_28_Template(rf, ctx) {
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
var TermsOfServiceComponent = class _TermsOfServiceComponent {
  constructor() {
    this.lastRevised = "03 APR 2026";
    this.enforcementDate = "03 APR 2026";
    this.jurisdiction = "Republic of Ghana";
    this.heroSlides = [
      {
        img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1800&q=80&auto=format&fit=crop",
        lbl: "Governance protocol",
        ttl: "Terms of Service",
        sub: "Crevy platform \xB7 Foovante Global Ltd",
        live: "Effective 03 April 2026"
      },
      {
        img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1800&q=80&auto=format&fit=crop",
        lbl: "Jurisdiction",
        ttl: "Republic of Ghana",
        sub: "Binding arbitration \xB7 Ghana Arbitration Centre",
        live: "English language proceedings"
      },
      {
        img: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1800&q=80&auto=format&fit=crop",
        lbl: "Asset integrity",
        ttl: "Immutable on the Ledger",
        sub: "Cryptographically verified \xB7 Polygon-anchored",
        live: "dMRV \xB7 KYC \xB7 KYB compliant"
      }
    ];
    this.sections = [
      { id: "acceptance", label: "1. Acceptance of Terms", title: "1. Acceptance of Terms" },
      { id: "definitions", label: "2. Protocol Definitions", title: "2. Protocol Definitions" },
      { id: "eligibility", label: "3. Identity & Eligibility", title: "3. Identity & Eligibility" },
      { id: "platform-use", label: "4. Infrastructure Use", title: "4. Infrastructure Use" },
      { id: "prohibited", label: "5. Prohibited Vectors", title: "5. Prohibited Vectors" },
      { id: "carbon-credits", label: "6. Asset Immutability", title: "6. Asset Immutability & Status" },
      { id: "project-owners", label: "7. Originator Obligations", title: "7. Originator Obligations" },
      { id: "corporate-buyers", label: "8. Institutional Buyers", title: "8. Institutional Buyer Terms" },
      { id: "payments", label: "9. Settlement & Fees", title: "9. Settlement & Fees" },
      { id: "ip", label: "10. Intellectual Property", title: "10. Intellectual Property" },
      { id: "governing-law", label: "11. Governing Law", title: "11. Governing Law" },
      { id: "disputes", label: "12. Dispute Resolution", title: "12. Dispute Resolution" },
      { id: "changes", label: "13. Protocol Amendments", title: "13. Protocol Amendments" }
    ];
  }
  static {
    this.\u0275fac = function TermsOfServiceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TermsOfServiceComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TermsOfServiceComponent, selectors: [["fv-terms-of-service"]], decls: 130, vars: 13, consts: [[3, "dark", "cta"], ["eyebrow", "Governance Protocol", "lead", 'These Terms of Service ("Terms") dictate the legal parameters for accessing and utilizing the Crevy platform, an institutional-grade environmental asset registry operated by Foovante Global Ltd.', 3, "slides", "lines", "cta1", "cta2"], [1, "tos-meta"], [1, "wrap"], [1, "meta-row"], [1, "meta-cell"], [1, "meta-label"], [1, "meta-value"], [1, "tos-content"], [1, "wrap", "tos-grid"], [1, "tos-aside"], [1, "tos-aside-inner"], [1, "tos-index-label"], ["aria-label", "Terms of service sections", 1, "tos-index"], ["routerLink", "/terms-of-service", 3, "fragment"], [1, "tos-body"], ["id", "acceptance", 1, "tos-section"], ["id", "definitions", 1, "tos-section"], ["id", "eligibility", 1, "tos-section"], ["id", "platform-use", 1, "tos-section"], ["id", "prohibited", 1, "tos-section"], ["id", "carbon-credits", 1, "tos-section"], ["id", "project-owners", 1, "tos-section"], ["id", "corporate-buyers", 1, "tos-section"], ["id", "payments", 1, "tos-section"], ["id", "ip", 1, "tos-section"], ["id", "governing-law", 1, "tos-section"], ["id", "disputes", 1, "tos-section"], ["id", "changes", 1, "tos-section"], [1, "tos-footnote"], ["routerLink", "/founder-brief"]], template: function TermsOfServiceComponent_Template(rf, ctx) {
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
        \u0275\u0275text(17, "Jurisdiction");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 7);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(20, "section", 8)(21, "div", 9)(22, "aside", 10)(23, "div", 11)(24, "p", 12);
        \u0275\u0275text(25, "Protocol Index");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "nav", 13);
        \u0275\u0275repeaterCreate(27, TermsOfServiceComponent_For_28_Template, 2, 2, "a", 14, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 15)(30, "article", 16)(31, "h2");
        \u0275\u0275text(32, "1. Acceptance of Terms");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "p");
        \u0275\u0275text(34, ' By accessing, registering for, or utilizing the Crevy platform infrastructure (the "Platform"), you mathematically and legally bind yourself to these Terms. If you are accepting these Terms on behalf of a corporation, government entity, or other legal organization, you represent and warrant that you possess the requisite authority to bind said entity to this protocol. ');
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "article", 17)(36, "h2");
        \u0275\u0275text(37, "2. Protocol Definitions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "ul")(39, "li")(40, "strong");
        \u0275\u0275text(41, '"Carbon Asset" or "Credit"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(42, " refers to a cryptographically verified unit representing the removal or avoidance of one metric tonne of carbon dioxide equivalent (tCO\u2082e).");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li")(44, "strong");
        \u0275\u0275text(45, '"dMRV"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(46, " refers to digital Measurement, Reporting, and Verification utilizing IoT, satellite telemetry, and AI algorithms to establish asset integrity.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "li")(48, "strong");
        \u0275\u0275text(49, '"Originator"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(50, " refers to the individual or entity managing the land or project responsible for the carbon sequestration.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "li")(52, "strong");
        \u0275\u0275text(53, '"Institutional Buyer"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(54, " refers to a corporate entity utilizing the Platform to acquire Carbon Assets for ESG compliance or offset purposes.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "li")(56, "strong");
        \u0275\u0275text(57, '"Ledger"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(58, " refers to the Polygon public blockchain network utilized by Crevy for immutable data anchoring.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(59, "article", 18)(60, "h2");
        \u0275\u0275text(61, "3. Identity & Eligibility");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "p");
        \u0275\u0275text(63, " Access to the Platform is strictly gated by comprehensive Know Your Customer (KYC) and Know Your Business (KYB) protocols. You must be at least 18 years of age or a legally registered corporate entity. We reserve the sovereign right to deny platform access if identity verification fails or if the entity is subject to international financial sanctions. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "article", 19)(65, "h2");
        \u0275\u0275text(66, "4. Infrastructure Use");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "p");
        \u0275\u0275text(68, " You are granted a non-exclusive, non-transferable, revocable license to access the Platform. You are solely responsible for maintaining the cryptographic security of your account credentials (including TOTP/MFA devices). Foovante Global Ltd holds zero liability for asset loss stemming from compromised user credentials. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "article", 20)(70, "h2");
        \u0275\u0275text(71, "5. Prohibited Vectors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "p");
        \u0275\u0275text(73, "Under penalty of immediate account termination and legal prosecution, you agree NOT to:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "ul")(75, "li");
        \u0275\u0275text(76, "Tamper with, spoof, or manipulate dMRV IoT sensors or satellite telemetry data.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "li");
        \u0275\u0275text(78, "Attempt to register Carbon Assets that have already been issued, retired, or claimed on another registry (Double Counting).");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "li");
        \u0275\u0275text(80, "Utilize the Platform for money laundering, terrorist financing, or sanctions evasion.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "li");
        \u0275\u0275text(82, "Deploy automated scripts, bots, or scrapers against the Platform APIs without explicit, written authorization.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(83, "article", 21)(84, "h2");
        \u0275\u0275text(85, "6. Asset Immutability & Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "p");
        \u0275\u0275text(87, ' Carbon Assets issued on the Platform are immutable. Once an Institutional Buyer executes a "Retirement" action, the asset is permanently burned on the public Ledger to prevent double-spending. Retired assets cannot be reversed, refunded, or transferred under any circumstance. ');
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(88, "article", 22)(89, "h2");
        \u0275\u0275text(90, "7. Originator Obligations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "p");
        \u0275\u0275text(92, " Originators warrant that they hold undisputed legal title or carbon rights to the registered land. Originators must grant Crevy and authorized third-party auditors (VVBs) physical and digital access to the project site for verification purposes. Discovery of fraudulent land claims will result in immediate asset seizure and notification of local law enforcement. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "article", 23)(94, "h2");
        \u0275\u0275text(95, "8. Institutional Buyer Terms");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "p");
        \u0275\u0275text(97, " Institutional Buyers acknowledge that carbon markets carry inherent regulatory and pricing risks. Foovante Global Ltd does not guarantee the future market value of any acquired Carbon Asset. All acquisitions are final upon settlement. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(98, "article", 24)(99, "h2");
        \u0275\u0275text(100, "9. Settlement & Fees");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "p");
        \u0275\u0275text(102, " The Platform facilitates financial settlement via fiat gateways and USDC stablecoin infrastructure. We charge a dynamic platform fee on market acquisitions and payouts, which is explicitly displayed prior to transaction execution. Originator payouts are subject to minimum withdrawal thresholds and standard banking/Mobile Money settlement delays. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(103, "article", 25)(104, "h2");
        \u0275\u0275text(105, "10. Intellectual Property");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "p");
        \u0275\u0275text(107, " The Platform, including its underlying AI models, dMRV algorithms, UI/UX, and source code, remains the exclusive intellectual property of Foovante Global Ltd. Project data submitted by Originators grants us a perpetual, royalty-free license to utilize said data for verification, machine learning optimization, and public ledger anchoring. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(108, "article", 26)(109, "h2");
        \u0275\u0275text(110, "11. Governing Law");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "p");
        \u0275\u0275text(112, " This protocol and any systemic disputes arising from it shall be governed by and construed in accordance with the sovereign laws of the Republic of Ghana, without regard to its conflict of law principles. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(113, "article", 27)(114, "h2");
        \u0275\u0275text(115, "12. Dispute Resolution");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "p");
        \u0275\u0275text(117, " Any dispute, controversy, or claim arising out of this agreement shall be settled through binding arbitration in Accra, Ghana, in accordance with the rules of the Ghana Arbitration Centre. The language of arbitration shall be English. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(118, "article", 28)(119, "h2");
        \u0275\u0275text(120, "13. Protocol Amendments");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "p");
        \u0275\u0275text(122, " We reserve the right to modify these Terms to reflect updates in regulatory compliance or system architecture. Continued use of the Platform after an updated protocol has been published constitutes explicit acceptance of the new Terms. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(123, "div", 29)(124, "p");
        \u0275\u0275text(125, "Questions about these Terms? ");
        \u0275\u0275elementStart(126, "a", 30);
        \u0275\u0275text(127, "Contact the Foovante team");
        \u0275\u0275elementEnd();
        \u0275\u0275text(128, ".");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275element(129, "fv-footer");
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
        \u0275\u0275textInterpolate(ctx.jurisdiction);
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.sections);
      }
    }, dependencies: [NavComponent, FooterComponent, HeroComponent, RouterLink], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.tos-meta[_ngcontent-%COMP%] {\n  background: var(--paper);\n  border-bottom: 1px solid var(--line);\n  padding: 40px 0;\n}\n.meta-row[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-wrap: wrap;\n  gap: 1px;\n  background: var(--line);\n  border: 1px solid var(--line);\n}\n.meta-cell[_ngcontent-%COMP%] {\n  background: var(--paper);\n  padding: 16px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.meta-cell[_ngcontent-%COMP%]   .meta-label[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--ink-2);\n  opacity: 0.7;\n}\n.meta-cell[_ngcontent-%COMP%]   .meta-value[_ngcontent-%COMP%] {\n  font-family:\n    ui-monospace,\n    "SF Mono",\n    Menlo,\n    monospace;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--ink);\n  text-transform: uppercase;\n}\n.tos-content[_ngcontent-%COMP%] {\n  padding: 80px 0 120px;\n  background: #FAFAF7;\n}\n.tos-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  gap: 80px;\n  align-items: start;\n}\n.tos-aside-inner[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 120px;\n}\n.tos-index-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--ink-2);\n  opacity: 0.7;\n  border-bottom: 1px solid var(--line);\n  padding-bottom: 16px;\n  margin: 0 0 16px;\n}\n.tos-index[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.tos-index[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 12px 0 12px 16px;\n  border-left: 2px solid transparent;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--ink-2);\n  text-decoration: none;\n  transition:\n    color 0.2s ease,\n    border-color 0.2s ease,\n    background 0.2s ease;\n}\n.tos-index[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--ink);\n  border-color: var(--gold);\n  background: var(--paper);\n}\n.tos-body[_ngcontent-%COMP%] {\n  background: var(--paper);\n  border: 1px solid var(--line);\n  padding: 64px;\n  display: flex;\n  flex-direction: column;\n  gap: 80px;\n}\n.tos-section[_ngcontent-%COMP%] {\n  scroll-margin-top: 120px;\n}\n.tos-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(24px, 2.6vw, 34px);\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--ink);\n  margin: 0 0 24px;\n  padding-bottom: 16px;\n  border-bottom: 2px solid var(--ink);\n}\n.tos-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.75;\n  color: var(--ink-2);\n  margin: 0 0 16px;\n  font-weight: 300;\n}\n.tos-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.tos-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 16px 0 0;\n  padding-left: 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.tos-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.7;\n  color: var(--ink-2);\n  font-weight: 300;\n}\n.tos-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker {\n  color: var(--green);\n}\n.tos-section[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--ink);\n  font-weight: 600;\n}\n.tos-footnote[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--line);\n  padding-top: 32px;\n  margin-top: 16px;\n}\n.tos-footnote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ink-2);\n  margin: 0;\n}\n.tos-footnote[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--gold);\n  font-weight: 600;\n}\n@media (max-width: 960px) {\n  .tos-meta[_ngcontent-%COMP%] {\n    padding: 32px 0;\n  }\n  .tos-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 32px;\n  }\n  .tos-aside[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .tos-body[_ngcontent-%COMP%] {\n    padding: 32px;\n    gap: 56px;\n  }\n  .meta-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media (max-width: 520px) {\n  .tos-body[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n  .tos-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n/*# sourceMappingURL=terms-of-service.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TermsOfServiceComponent, [{
    type: Component,
    args: [{ selector: "fv-terms-of-service", imports: [NavComponent, FooterComponent, HeroComponent, RouterLink], template: `<fv-nav [dark]="true" [cta]="{label: 'Talk to the founders', href: 'https://form.jotform.com/261642531528052'}"></fv-nav>

<fv-hero
  [slides]="heroSlides"
  eyebrow="Governance Protocol"
  [lines]="['The legal parameters', 'for using the Crevy platform.']"
  lead='These Terms of Service ("Terms") dictate the legal parameters for accessing and utilizing the Crevy platform, an institutional-grade environmental asset registry operated by Foovante Global Ltd.'
  [cta1]="{label: 'Read the protocol', routerLink: '/terms-of-service'}"
  [cta2]="{label: 'Talk to the founders', routerLink: '/founder-brief'}"
></fv-hero>

<!-- Legal meta strip -->
<section class="tos-meta">
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
        <span class="meta-label">Jurisdiction</span>
        <span class="meta-value">{{ jurisdiction }}</span>
      </div>
    </div>
  </div>
</section>

<!-- Content -->
<section class="tos-content">
  <div class="wrap tos-grid">
    <!-- Index -->
    <aside class="tos-aside">
      <div class="tos-aside-inner">
        <p class="tos-index-label">Protocol Index</p>
        <nav class="tos-index" aria-label="Terms of service sections">
          @for (s of sections; track s.id) {
            <a routerLink="/terms-of-service" [fragment]="s.id">{{ s.label }}</a>
          }
        </nav>
      </div>
    </aside>

    <!-- Legal text -->
    <div class="tos-body">
      <article id="acceptance" class="tos-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing, registering for, or utilizing the Crevy platform infrastructure (the "Platform"), you mathematically and legally bind yourself to these Terms.
          If you are accepting these Terms on behalf of a corporation, government entity, or other legal organization, you represent and warrant that you possess the requisite authority to bind said entity to this protocol.
        </p>
      </article>

      <article id="definitions" class="tos-section">
        <h2>2. Protocol Definitions</h2>
        <ul>
          <li><strong>"Carbon Asset" or "Credit"</strong> refers to a cryptographically verified unit representing the removal or avoidance of one metric tonne of carbon dioxide equivalent (tCO\u2082e).</li>
          <li><strong>"dMRV"</strong> refers to digital Measurement, Reporting, and Verification utilizing IoT, satellite telemetry, and AI algorithms to establish asset integrity.</li>
          <li><strong>"Originator"</strong> refers to the individual or entity managing the land or project responsible for the carbon sequestration.</li>
          <li><strong>"Institutional Buyer"</strong> refers to a corporate entity utilizing the Platform to acquire Carbon Assets for ESG compliance or offset purposes.</li>
          <li><strong>"Ledger"</strong> refers to the Polygon public blockchain network utilized by Crevy for immutable data anchoring.</li>
        </ul>
      </article>

      <article id="eligibility" class="tos-section">
        <h2>3. Identity & Eligibility</h2>
        <p>
          Access to the Platform is strictly gated by comprehensive Know Your Customer (KYC) and Know Your Business (KYB) protocols.
          You must be at least 18 years of age or a legally registered corporate entity.
          We reserve the sovereign right to deny platform access if identity verification fails or if the entity is subject to international financial sanctions.
        </p>
      </article>

      <article id="platform-use" class="tos-section">
        <h2>4. Infrastructure Use</h2>
        <p>
          You are granted a non-exclusive, non-transferable, revocable license to access the Platform.
          You are solely responsible for maintaining the cryptographic security of your account credentials (including TOTP/MFA devices).
          Foovante Global Ltd holds zero liability for asset loss stemming from compromised user credentials.
        </p>
      </article>

      <article id="prohibited" class="tos-section">
        <h2>5. Prohibited Vectors</h2>
        <p>Under penalty of immediate account termination and legal prosecution, you agree NOT to:</p>
        <ul>
          <li>Tamper with, spoof, or manipulate dMRV IoT sensors or satellite telemetry data.</li>
          <li>Attempt to register Carbon Assets that have already been issued, retired, or claimed on another registry (Double Counting).</li>
          <li>Utilize the Platform for money laundering, terrorist financing, or sanctions evasion.</li>
          <li>Deploy automated scripts, bots, or scrapers against the Platform APIs without explicit, written authorization.</li>
        </ul>
      </article>

      <article id="carbon-credits" class="tos-section">
        <h2>6. Asset Immutability & Status</h2>
        <p>
          Carbon Assets issued on the Platform are immutable. Once an Institutional Buyer executes a "Retirement" action, the asset is permanently burned on the public Ledger to prevent double-spending.
          Retired assets cannot be reversed, refunded, or transferred under any circumstance.
        </p>
      </article>

      <article id="project-owners" class="tos-section">
        <h2>7. Originator Obligations</h2>
        <p>
          Originators warrant that they hold undisputed legal title or carbon rights to the registered land.
          Originators must grant Crevy and authorized third-party auditors (VVBs) physical and digital access to the project site for verification purposes.
          Discovery of fraudulent land claims will result in immediate asset seizure and notification of local law enforcement.
        </p>
      </article>

      <article id="corporate-buyers" class="tos-section">
        <h2>8. Institutional Buyer Terms</h2>
        <p>
          Institutional Buyers acknowledge that carbon markets carry inherent regulatory and pricing risks.
          Foovante Global Ltd does not guarantee the future market value of any acquired Carbon Asset.
          All acquisitions are final upon settlement.
        </p>
      </article>

      <article id="payments" class="tos-section">
        <h2>9. Settlement & Fees</h2>
        <p>
          The Platform facilitates financial settlement via fiat gateways and USDC stablecoin infrastructure.
          We charge a dynamic platform fee on market acquisitions and payouts, which is explicitly displayed prior to transaction execution.
          Originator payouts are subject to minimum withdrawal thresholds and standard banking/Mobile Money settlement delays.
        </p>
      </article>

      <article id="ip" class="tos-section">
        <h2>10. Intellectual Property</h2>
        <p>
          The Platform, including its underlying AI models, dMRV algorithms, UI/UX, and source code, remains the exclusive intellectual property of Foovante Global Ltd.
          Project data submitted by Originators grants us a perpetual, royalty-free license to utilize said data for verification, machine learning optimization, and public ledger anchoring.
        </p>
      </article>

      <article id="governing-law" class="tos-section">
        <h2>11. Governing Law</h2>
        <p>
          This protocol and any systemic disputes arising from it shall be governed by and construed in accordance with the sovereign laws of the Republic of Ghana, without regard to its conflict of law principles.
        </p>
      </article>

      <article id="disputes" class="tos-section">
        <h2>12. Dispute Resolution</h2>
        <p>
          Any dispute, controversy, or claim arising out of this agreement shall be settled through binding arbitration in Accra, Ghana, in accordance with the rules of the Ghana Arbitration Centre.
          The language of arbitration shall be English.
        </p>
      </article>

      <article id="changes" class="tos-section">
        <h2>13. Protocol Amendments</h2>
        <p>
          We reserve the right to modify these Terms to reflect updates in regulatory compliance or system architecture.
          Continued use of the Platform after an updated protocol has been published constitutes explicit acceptance of the new Terms.
        </p>
      </article>

      <div class="tos-footnote">
        <p>Questions about these Terms? <a routerLink="/founder-brief">Contact the Foovante team</a>.</p>
      </div>
    </div>
  </div>
</section>

<fv-footer></fv-footer>
`, styles: ['/* src/app/features/terms-of-service/terms-of-service.component.scss */\n:host {\n  display: block;\n}\n.tos-meta {\n  background: var(--paper);\n  border-bottom: 1px solid var(--line);\n  padding: 40px 0;\n}\n.meta-row {\n  display: inline-flex;\n  flex-wrap: wrap;\n  gap: 1px;\n  background: var(--line);\n  border: 1px solid var(--line);\n}\n.meta-cell {\n  background: var(--paper);\n  padding: 16px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.meta-cell .meta-label {\n  font-size: 9px;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--ink-2);\n  opacity: 0.7;\n}\n.meta-cell .meta-value {\n  font-family:\n    ui-monospace,\n    "SF Mono",\n    Menlo,\n    monospace;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--ink);\n  text-transform: uppercase;\n}\n.tos-content {\n  padding: 80px 0 120px;\n  background: #FAFAF7;\n}\n.tos-grid {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  gap: 80px;\n  align-items: start;\n}\n.tos-aside-inner {\n  position: sticky;\n  top: 120px;\n}\n.tos-index-label {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--ink-2);\n  opacity: 0.7;\n  border-bottom: 1px solid var(--line);\n  padding-bottom: 16px;\n  margin: 0 0 16px;\n}\n.tos-index {\n  display: flex;\n  flex-direction: column;\n}\n.tos-index a {\n  display: block;\n  padding: 12px 0 12px 16px;\n  border-left: 2px solid transparent;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--ink-2);\n  text-decoration: none;\n  transition:\n    color 0.2s ease,\n    border-color 0.2s ease,\n    background 0.2s ease;\n}\n.tos-index a:hover {\n  color: var(--ink);\n  border-color: var(--gold);\n  background: var(--paper);\n}\n.tos-body {\n  background: var(--paper);\n  border: 1px solid var(--line);\n  padding: 64px;\n  display: flex;\n  flex-direction: column;\n  gap: 80px;\n}\n.tos-section {\n  scroll-margin-top: 120px;\n}\n.tos-section h2 {\n  font-family: var(--font-display);\n  font-size: clamp(24px, 2.6vw, 34px);\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--ink);\n  margin: 0 0 24px;\n  padding-bottom: 16px;\n  border-bottom: 2px solid var(--ink);\n}\n.tos-section p {\n  font-size: 16px;\n  line-height: 1.75;\n  color: var(--ink-2);\n  margin: 0 0 16px;\n  font-weight: 300;\n}\n.tos-section p:last-child {\n  margin-bottom: 0;\n}\n.tos-section ul {\n  margin: 16px 0 0;\n  padding-left: 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.tos-section ul li {\n  font-size: 16px;\n  line-height: 1.7;\n  color: var(--ink-2);\n  font-weight: 300;\n}\n.tos-section ul li::marker {\n  color: var(--green);\n}\n.tos-section strong {\n  color: var(--ink);\n  font-weight: 600;\n}\n.tos-footnote {\n  border-top: 1px solid var(--line);\n  padding-top: 32px;\n  margin-top: 16px;\n}\n.tos-footnote p {\n  font-size: 14px;\n  color: var(--ink-2);\n  margin: 0;\n}\n.tos-footnote a {\n  color: var(--gold);\n  font-weight: 600;\n}\n@media (max-width: 960px) {\n  .tos-meta {\n    padding: 32px 0;\n  }\n  .tos-grid {\n    grid-template-columns: 1fr;\n    gap: 32px;\n  }\n  .tos-aside {\n    display: none;\n  }\n  .tos-body {\n    padding: 32px;\n    gap: 56px;\n  }\n  .meta-row {\n    flex-direction: column;\n  }\n}\n@media (max-width: 520px) {\n  .tos-body {\n    padding: 24px;\n  }\n  .tos-section h2 {\n    font-size: 22px;\n  }\n}\n/*# sourceMappingURL=terms-of-service.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TermsOfServiceComponent, { className: "TermsOfServiceComponent", filePath: "src/app/features/terms-of-service/terms-of-service.component.ts", lineNumber: 20 });
})();
export {
  TermsOfServiceComponent
};
//# sourceMappingURL=chunk-EB5HSFOI.js.map
