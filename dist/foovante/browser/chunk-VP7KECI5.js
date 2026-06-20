import {
  LEADERSHIP
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
  ɵɵtext
} from "./chunk-SCSMG4QD.js";

// src/app/features/founder-brief/founder-brief.component.ts
var _c0 = () => ({ label: "Talk to the founders", href: "https://form.jotform.com/261642531528052" });
var _c1 = () => ["The people behind Foovante,", "and why they built it."];
var _c2 = () => ({ label: "Meet the founders", routerLink: "/founder-brief" });
var _c3 = () => ({ label: "Back to about", routerLink: "/" });
var FounderBriefComponent = class _FounderBriefComponent {
  constructor() {
    this.founders = LEADERSHIP;
    this.heroSlides = [
      {
        img: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1800&q=80&auto=format&fit=crop",
        lbl: "The founders",
        ttl: "The people behind Foovante",
        sub: "Climate finance \xB7 Earth observation \xB7 Carbon verification",
        live: "Building from Accra"
      },
      {
        img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1800&q=80&auto=format&fit=crop",
        lbl: "Why we built it",
        ttl: "Infrastructure for African carbon",
        sub: "The verification layer the continent was missing",
        live: "Pre-seed \xB7 2026"
      }
    ];
  }
  static {
    this.\u0275fac = function FounderBriefComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FounderBriefComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FounderBriefComponent, selectors: [["fv-founder-brief"]], decls: 28, vars: 10, consts: [[3, "dark", "cta"], ["eyebrow", "The founder brief", "lead", "Practitioners who spent their careers in climate finance, earth-observation engineering, climate-tech distribution, carbon market access, and carbon standards verification \u2014 and eventually decided to build the infrastructure they kept wishing existed.", 3, "slides", "lines", "cta1", "cta2"], [1, "context", 2, "background", "var(--paper)"], [1, "wrap", "context-grid"], [1, "eyebrow"], [2, "margin-top", "24px"], [1, "context-body"], ["id", "contact", 1, "cta"], [1, "cta-in"], [1, "cta-actions"], ["href", "https://form.jotform.com/261642531528052", "target", "_blank", "rel", "noopener", 1, "btn", "btn-primary", "btn-lg"], [1, "arrow"], ["routerLink", "/about", 1, "btn", "btn-ghost", "btn-lg"]], template: function FounderBriefComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "fv-nav", 0)(1, "fv-hero", 1);
        \u0275\u0275elementStart(2, "section", 2)(3, "div", 3)(4, "div")(5, "div", 4);
        \u0275\u0275text(6, "Why we exist");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "h2", 5);
        \u0275\u0275text(8, "We saw the same bottleneck from different angles.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 6)(10, "p");
        \u0275\u0275text(11, "Africa holds roughly 10% of the world's carbon credit potential but issues a fraction of that, not because the ecosystems are any less real, but because the verification, certification, and trading infrastructure was built for the global North. The four of us had each spent years watching high-quality African projects stall, under-price, or fail entirely at the verification stage.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p");
        \u0275\u0275text(13, "Foovante started as a single shared conviction: that continuous satellite monitoring, local field agents, and multi-standard issuance could solve the bottleneck and that building it from the continent itself was the only way to do it at the quality level the market deserves.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(14, "section", 7)(15, "div", 8)(16, "h2");
        \u0275\u0275text(17, "Want to speak with us directly?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p");
        \u0275\u0275text(19, "Our founders take introductions from funders, projects, partners, and press personally. Drop a note and we typically reply within one business day.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 9)(21, "a", 10);
        \u0275\u0275text(22, "Talk to the founders ");
        \u0275\u0275elementStart(23, "span", 11);
        \u0275\u0275text(24, "\u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "a", 12);
        \u0275\u0275text(26, "Back to about");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(27, "fv-footer");
      }
      if (rf & 2) {
        \u0275\u0275property("dark", true)("cta", \u0275\u0275pureFunction0(6, _c0));
        \u0275\u0275advance();
        \u0275\u0275property("slides", ctx.heroSlides)("lines", \u0275\u0275pureFunction0(7, _c1))("cta1", \u0275\u0275pureFunction0(8, _c2))("cta2", \u0275\u0275pureFunction0(9, _c3));
      }
    }, dependencies: [NavComponent, FooterComponent, RouterLink, HeroComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.brief-header[_ngcontent-%COMP%] {\n  padding: 160px 0 100px;\n}\n.brief-header[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.brief-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 0 28px;\n}\n.brief-header[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] {\n  max-width: 640px;\n  font-size: 18px;\n  line-height: 1.7;\n  color: var(--ink-2);\n  margin: 0;\n}\n.context[_ngcontent-%COMP%] {\n  padding: 100px 0;\n}\n.context-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 80px;\n  align-items: start;\n}\n@media (max-width: 768px) {\n  .context-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 40px;\n  }\n}\n.context-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--ink-2);\n  line-height: 1.75;\n  margin: 0 0 20px;\n}\n.context-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.founders[_ngcontent-%COMP%] {\n  padding: 100px 0;\n}\n.founder-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 32px;\n  margin-top: 64px;\n}\n@media (max-width: 900px) {\n  .founder-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.founder-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 180px 1fr;\n  gap: 32px;\n  padding: 36px;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  background: var(--bg);\n  align-items: start;\n}\n@media (max-width: 600px) {\n  .founder-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.founder-pic[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 220px;\n  border-radius: 12px;\n  background-size: cover;\n  background-position: center top;\n  flex-shrink: 0;\n}\n@media (max-width: 600px) {\n  .founder-pic[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 240px;\n  }\n}\n.founder-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.founder-body[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--gold);\n}\n.founder-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  margin: 0;\n}\n.founder-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.7;\n  color: var(--ink-2);\n  margin: 4px 0 0;\n}\n.founder-body[_ngcontent-%COMP%]   .prior[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ink-3);\n  margin-top: 4px;\n}\n/*# sourceMappingURL=founder-brief.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FounderBriefComponent, [{
    type: Component,
    args: [{ selector: "fv-founder-brief", imports: [NavComponent, FooterComponent, RouterLink, HeroComponent], template: `<fv-nav [dark]="true" [cta]="{label: 'Talk to the founders', href: 'https://form.jotform.com/261642531528052'}"></fv-nav>

<fv-hero
  [slides]="heroSlides"
  eyebrow="The founder brief"
  [lines]="['The people behind Foovante,', 'and why they built it.']"
  lead="Practitioners who spent their careers in climate finance, earth-observation engineering, climate-tech distribution, carbon market access, and carbon standards verification \u2014 and eventually decided to build the infrastructure they kept wishing existed."
  [cta1]="{label: 'Meet the founders', routerLink: '/founder-brief'}"
  [cta2]="{label: 'Back to about', routerLink: '/'}"
></fv-hero>

<!-- Founding Context -->
<section class="context" style="background:var(--paper)">
  <div class="wrap context-grid">
    <div>
      <div class="eyebrow">Why we exist</div>
      <h2 style="margin-top:24px">We saw the same bottleneck from different angles.</h2>
    </div>
    <div class="context-body">
      <p>Africa holds roughly 10% of the world's carbon credit potential but issues a fraction of that, not because the ecosystems are any less real, but because the verification, certification, and trading infrastructure was built for the global North. The four of us had each spent years watching high-quality African projects stall, under-price, or fail entirely at the verification stage.</p>
      <p>Foovante started as a single shared conviction: that continuous satellite monitoring, local field agents, and multi-standard issuance could solve the bottleneck and that building it from the continent itself was the only way to do it at the quality level the market deserves.</p>
    </div>
  </div>
</section>


<!-- Talk to the founders CTA -->
<section class="cta" id="contact">
  <div class="cta-in">
    <h2>Want to speak with us directly?</h2>
    <p>Our founders take introductions from funders, projects, partners, and press personally. Drop a note and we typically reply within one business day.</p>
    <div class="cta-actions">
      <a href="https://form.jotform.com/261642531528052" target="_blank" rel="noopener" class="btn btn-primary btn-lg">Talk to the founders <span class="arrow">\u2192</span></a>
      <a routerLink="/about" class="btn btn-ghost btn-lg">Back to about</a>
    </div>
  </div>
</section>

<fv-footer></fv-footer>
`, styles: ["/* src/app/features/founder-brief/founder-brief.component.scss */\n:host {\n  display: block;\n}\n.brief-header {\n  padding: 160px 0 100px;\n}\n.brief-header .eyebrow {\n  margin-bottom: 24px;\n}\n.brief-header h1 {\n  max-width: 720px;\n  margin: 0 0 28px;\n}\n.brief-header .lead {\n  max-width: 640px;\n  font-size: 18px;\n  line-height: 1.7;\n  color: var(--ink-2);\n  margin: 0;\n}\n.context {\n  padding: 100px 0;\n}\n.context-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 80px;\n  align-items: start;\n}\n@media (max-width: 768px) {\n  .context-grid {\n    grid-template-columns: 1fr;\n    gap: 40px;\n  }\n}\n.context-body p {\n  color: var(--ink-2);\n  line-height: 1.75;\n  margin: 0 0 20px;\n}\n.context-body p:last-child {\n  margin-bottom: 0;\n}\n.founders {\n  padding: 100px 0;\n}\n.founder-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 32px;\n  margin-top: 64px;\n}\n@media (max-width: 900px) {\n  .founder-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.founder-card {\n  display: grid;\n  grid-template-columns: 180px 1fr;\n  gap: 32px;\n  padding: 36px;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  background: var(--bg);\n  align-items: start;\n}\n@media (max-width: 600px) {\n  .founder-card {\n    grid-template-columns: 1fr;\n  }\n}\n.founder-pic {\n  width: 180px;\n  height: 220px;\n  border-radius: 12px;\n  background-size: cover;\n  background-position: center top;\n  flex-shrink: 0;\n}\n@media (max-width: 600px) {\n  .founder-pic {\n    width: 100%;\n    height: 240px;\n  }\n}\n.founder-body {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.founder-body .role {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--gold);\n}\n.founder-body h3 {\n  font-family: var(--font-display);\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  margin: 0;\n}\n.founder-body p {\n  font-size: 15px;\n  line-height: 1.7;\n  color: var(--ink-2);\n  margin: 4px 0 0;\n}\n.founder-body .prior {\n  font-size: 12px;\n  color: var(--ink-3);\n  margin-top: 4px;\n}\n/*# sourceMappingURL=founder-brief.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FounderBriefComponent, { className: "FounderBriefComponent", filePath: "src/app/features/founder-brief/founder-brief.component.ts", lineNumber: 16 });
})();
export {
  FounderBriefComponent
};
//# sourceMappingURL=chunk-VP7KECI5.js.map
