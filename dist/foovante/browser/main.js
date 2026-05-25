import {
  RouterOutlet,
  bootstrapApplication,
  provideClientHydration,
  provideRouter,
  provideZoneChangeDetection,
  withComponentInputBinding,
  withViewTransitions,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-SAJFQ2U5.js";
import "./chunk-WKYGNSYM.js";

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-GCN4WR7M.js").then((m) => m.AboutComponent),
    title: "Foovante Global \u2014 African carbon markets, built right"
  },
  {
    path: "home",
    loadComponent: () => import("./chunk-OCRHQ5TI.js").then((m) => m.HomeComponent),
    title: "Foovante Global \u2014 African carbon markets, built right"
  },
  {
    path: "funders",
    loadComponent: () => import("./chunk-MIT74J4U.js").then((m) => m.FundersComponent),
    title: "For Funders \u2014 Foovante Global"
  },
  {
    path: "projects",
    loadComponent: () => import("./chunk-HBS6EP2D.js").then((m) => m.ProjectsComponent),
    title: "For Project Developers \u2014 Foovante Global"
  },
  {
    path: "investors",
    loadComponent: () => import("./chunk-JWYFCYEV.js").then((m) => m.InvestorsComponent),
    title: "For Investors \u2014 Foovante Global"
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
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideClientHydration()
  ]
};

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["fv-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [RouterOutlet], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 11 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
