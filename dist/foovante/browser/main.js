import {
  Component,
  RouterOutlet,
  bootstrapApplication,
  provideClientHydration,
  provideRouter,
  provideZoneChangeDetection,
  setClassMetadata,
  withComponentInputBinding,
  withInMemoryScrolling,
  withViewTransitions,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-SCSMG4QD.js";

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-4F6YU2G4.js").then((m) => m.AboutComponent),
    title: "Foovante Global \u2014 African carbon markets, built right"
  },
  {
    path: "home",
    loadComponent: () => import("./chunk-H4AHVWJV.js").then((m) => m.HomeComponent),
    title: "Foovante Global \u2014 African carbon markets, built right"
  },
  {
    path: "funders",
    loadComponent: () => import("./chunk-JCZ77KH2.js").then((m) => m.FundersComponent),
    title: "For Funders \u2014 Foovante Global"
  },
  {
    path: "projects",
    loadComponent: () => import("./chunk-AQLVV42F.js").then((m) => m.ProjectsComponent),
    title: "For Project Developers \u2014 Foovante Global"
  },
  {
    path: "investors",
    loadComponent: () => import("./chunk-SIWXUML7.js").then((m) => m.InvestorsComponent),
    title: "For Investors \u2014 Foovante Global"
  },
  {
    path: "founder-brief",
    loadComponent: () => import("./chunk-VP7KECI5.js").then((m) => m.FounderBriefComponent),
    title: "The Founder Brief \u2014 Foovante Global"
  },
  {
    path: "terms-of-service",
    loadComponent: () => import("./chunk-EB5HSFOI.js").then((m) => m.TermsOfServiceComponent),
    title: "Terms of Service \u2014 Foovante Global"
  },
  {
    path: "privacy-policy",
    loadComponent: () => import("./chunk-4EMLD2FZ.js").then((m) => m.PrivacyPolicyComponent),
    title: "Privacy Policy \u2014 Foovante Global"
  },
  {
    path: "how-mrv-works",
    loadComponent: () => import("./chunk-A2YY5M5C.js").then((m) => m.HowMrvWorksComponent),
    title: "How MRV works \u2014 Foovante Global"
  },
  {
    path: "**",
    redirectTo: ""
  }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions(), withInMemoryScrolling({ scrollPositionRestoration: "top", anchorScrolling: "enabled" })),
    provideClientHydration()
  ]
};

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["fv-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [RouterOutlet], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "fv-root", imports: [RouterOutlet], template: `<router-outlet></router-outlet>`, styles: ["/* angular:styles/component:css;c483ff224f1484acb700866912871b7e5c89b6f8fd751c798859cf5ef8b16b4a;/home/tollesoft/Documents/Project/foovante-angular/foovante-global-website/src/app/app.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
