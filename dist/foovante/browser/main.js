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
} from "./chunk-CPO33PGZ.js";
import "./chunk-3OV72XIM.js";

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-THY6JOF6.js").then((m) => m.AboutComponent),
    title: "Foovante Global \u2014 African carbon markets, built right"
  },
  {
    path: "home",
    loadComponent: () => import("./chunk-ZOCMUI5W.js").then((m) => m.HomeComponent),
    title: "Foovante Global \u2014 African carbon markets, built right"
  },
  {
    path: "funders",
    loadComponent: () => import("./chunk-EAMVFL4U.js").then((m) => m.FundersComponent),
    title: "For Funders \u2014 Foovante Global"
  },
  {
    path: "projects",
    loadComponent: () => import("./chunk-Y7HHCFEQ.js").then((m) => m.ProjectsComponent),
    title: "For Project Developers \u2014 Foovante Global"
  },
  {
    path: "investors",
    loadComponent: () => import("./chunk-ORFVJZKB.js").then((m) => m.InvestorsComponent),
    title: "For Investors \u2014 Foovante Global"
  },
  {
    path: "founder-brief",
    loadComponent: () => import("./chunk-LDFWAJUA.js").then((m) => m.FounderBriefComponent),
    title: "The Founder Brief \u2014 Foovante Global"
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
