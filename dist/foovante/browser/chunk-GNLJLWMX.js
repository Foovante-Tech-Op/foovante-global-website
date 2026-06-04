import {
  Component,
  Inject,
  NgZone,
  PLATFORM_ID,
  ViewChild,
  isPlatformBrowser,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-CPO33PGZ.js";
import {
  __async
} from "./chunk-3OV72XIM.js";

// src/app/core/data/map.data.ts
var FV_MAP = [
  { name: "Kakum REDD+", country: "Ghana", type: "forestry", lat: 5.35, lng: -1.38 },
  { name: "Volta Mangroves", country: "Ghana", type: "forestry", lat: 5.8, lng: 0.5 },
  { name: "Sahel Cookstoves", country: "Ghana", type: "energy", lat: 9.4, lng: -0.85 },
  { name: "Lagos Biogas", country: "Nigeria", type: "waste", lat: 6.52, lng: 3.38 },
  { name: "Cross River REDD", country: "Nigeria", type: "forestry", lat: 5.9, lng: 8.6 },
  { name: "Turkana Solar", country: "Kenya", type: "energy", lat: 3.1, lng: 36.1 },
  { name: "Mt Kenya ARR", country: "Kenya", type: "agri", lat: -0.15, lng: 37.3 },
  { name: "Akagera Agroforestry", country: "Rwanda", type: "agri", lat: -1.47, lng: 30.47 },
  { name: "Selous Carbon", country: "Tanzania", type: "forestry", lat: -8.5, lng: 37.6 },
  { name: "Bale Mountains", country: "Ethiopia", type: "forestry", lat: 6.9, lng: 40 },
  { name: "Lalibela Cookstove", country: "Ethiopia", type: "energy", lat: 12, lng: 39.05 },
  { name: "Casamance Mangroves", country: "Senegal", type: "forestry", lat: 12.55, lng: -15.3 },
  { name: "Mopti Agro Co-op", country: "Mali", type: "agri", lat: 14.5, lng: -4.2 },
  { name: "Ouaga Cookstoves", country: "Burkina Faso", type: "energy", lat: 12.37, lng: -1.53 },
  { name: "Bwindi REDD+", country: "Uganda", type: "forestry", lat: -0.93, lng: 29.67 },
  { name: "Ta\xEF Forest", country: "C\xF4te d'Ivoire", type: "forestry", lat: 5.7, lng: -7.45 },
  { name: "Dja Reserve", country: "Cameroon", type: "forestry", lat: 3.15, lng: 13.3 },
  { name: "Kafue ARR", country: "Zambia", type: "agri", lat: -14.5, lng: 26.4 },
  { name: "Lilongwe Agro", country: "Malawi", type: "agri", lat: -13.97, lng: 33.79 },
  { name: "Gorongosa", country: "Mozambique", type: "forestry", lat: -18.97, lng: 34.36 },
  { name: "Karoo Solar", country: "South Africa", type: "energy", lat: -32.3, lng: 22.5 },
  { name: "Andasibe Forest", country: "Madagascar", type: "forestry", lat: -18.94, lng: 48.42 }
];

// src/app/shared/components/map-section/map-section.component.ts
var _c0 = ["mapEl"];
var ACTIVE_COUNTRIES = [
  "Senegal",
  "C\xF4te d'Ivoire",
  "Ghana",
  "Nigeria",
  "Cameroon",
  "Ethiopia",
  "Uganda",
  "Rwanda",
  "Kenya",
  "Tanzania",
  "Zambia",
  "Malawi",
  "Mozambique",
  "South Africa",
  "Madagascar",
  "Mali",
  "Burkina Faso"
];
var TYPE_COLORS = {
  forestry: "#2D6A4F",
  energy: "#D4870A",
  agri: "#5C7259",
  waste: "#4A4A5A"
};
var MapSectionComponent = class _MapSectionComponent {
  constructor(platformId, zone) {
    this.platformId = platformId;
    this.zone = zone;
  }
  ngAfterViewInit() {
    return __async(this, null, function* () {
      if (!isPlatformBrowser(this.platformId))
        return;
      const L = yield import("./chunk-QM5SC4NC.js");
      this.L = L;
      this.zone.runOutsideAngular(() => {
        this.map = L.map(this.mapEl.nativeElement, {
          center: [2, 22],
          zoom: 3,
          zoomControl: false,
          attributionControl: false,
          scrollWheelZoom: false,
          dragging: false,
          doubleClickZoom: false,
          touchZoom: false
        });
        L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
          subdomains: "abcd",
          maxZoom: 6
        }).addTo(this.map);
        setTimeout(() => this.map?.invalidateSize(), 0);
        this.resizeObserver = new ResizeObserver(() => this.map?.invalidateSize());
        this.resizeObserver.observe(this.mapEl.nativeElement);
      });
      yield this.addCountryLayer();
      this.addProjectMarkers(L);
    });
  }
  addCountryLayer() {
    return __async(this, null, function* () {
      try {
        const res = yield fetch("https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson");
        const geoJson = yield res.json();
        const L = this.L;
        L.geoJSON(geoJson, {
          filter: (feature) => ACTIVE_COUNTRIES.includes(feature.properties.ADMIN),
          style: () => ({
            fillColor: "#F5A623",
            fillOpacity: 0.35,
            color: "#D4870A",
            weight: 1.2
          })
        }).addTo(this.map);
      } catch (e) {
      }
    });
  }
  addProjectMarkers(L) {
    for (const point of FV_MAP) {
      const color = TYPE_COLORS[point.type] ?? "#2D6A4F";
      const icon = L.divIcon({
        className: "",
        html: `<div style="
          width:10px;height:10px;border-radius:50%;
          background:${color};border:2px solid #fff;
          box-shadow:0 1px 4px rgba(0,0,0,0.35);
          cursor:pointer;
        "></div>`,
        iconSize: [10, 10],
        iconAnchor: [5, 5]
      });
      L.marker([point.lat, point.lng], { icon }).addTo(this.map).bindPopup(`<strong>${point.name}</strong><br><span style="color:#666;font-size:12px">${point.country}</span>`, {
        closeButton: false,
        className: "fv-popup"
      });
    }
  }
  ngOnDestroy() {
    this.resizeObserver?.disconnect();
    this.map?.remove();
  }
  static {
    this.\u0275fac = function MapSectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MapSectionComponent)(\u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapSectionComponent, selectors: [["fv-map-section"]], viewQuery: function MapSectionComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mapEl = _t.first);
      }
    }, decls: 30, vars: 0, consts: [["mapEl", ""], [1, "map-wrap"], [1, "leaflet-map"], [1, "map-overlay"], [1, "legend"], [2, "background", "#2D6A4F"], [2, "background", "#D4870A"], [2, "background", "#5C7259"], [2, "background", "#4A4A5A"], [1, "map-stats"], [1, "map-stat"], [1, "n"], [1, "l"]], template: function MapSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 1);
        \u0275\u0275domElement(1, "div", 2, 0);
        \u0275\u0275domElementStart(3, "div", 3)(4, "h4");
        \u0275\u0275text(5, "Project types");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(6, "div", 4)(7, "div");
        \u0275\u0275domElement(8, "i", 5);
        \u0275\u0275text(9, " Forestry / REDD+");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(10, "div");
        \u0275\u0275domElement(11, "i", 6);
        \u0275\u0275text(12, " Energy / Solar");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(13, "div");
        \u0275\u0275domElement(14, "i", 7);
        \u0275\u0275text(15, " Agriculture");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(16, "div");
        \u0275\u0275domElement(17, "i", 8);
        \u0275\u0275text(18, " Waste / Biogas");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(19, "div", 9)(20, "div", 10)(21, "div", 11);
        \u0275\u0275text(22, "282");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(23, "div", 12);
        \u0275\u0275text(24, "Active projects");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(25, "div", 10)(26, "div", 11);
        \u0275\u0275text(27, "14");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(28, "div", 12);
        \u0275\u0275text(29, "Countries");
        \u0275\u0275domElementEnd()()()();
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.map-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);\n}\n.leaflet-map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 520px;\n}\n.map-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  z-index: 1000;\n  background: rgba(255, 255, 255, 0.93);\n  border-radius: 8px;\n  padding: 12px 16px;\n  font-size: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.map-overlay[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--ink-2);\n}\n.map-overlay[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.map-overlay[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--ink);\n}\n.map-overlay[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.map-stats[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 16px;\n  left: 16px;\n  z-index: 1000;\n  display: flex;\n  gap: 12px;\n}\n.map-stats[_ngcontent-%COMP%]   .map-stat[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.93);\n  border-radius: 8px;\n  padding: 10px 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n.map-stats[_ngcontent-%COMP%]   .map-stat[_ngcontent-%COMP%]   .n[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--gold);\n  line-height: 1;\n}\n.map-stats[_ngcontent-%COMP%]   .map-stat[_ngcontent-%COMP%]   .l[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--ink-2);\n  margin-top: 2px;\n}\n[_nghost-%COMP%]     .fv-popup .leaflet-popup-content-wrapper {\n  border-radius: 6px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);\n  padding: 0;\n}\n[_nghost-%COMP%]     .fv-popup .leaflet-popup-content {\n  margin: 10px 14px;\n  font-family: inherit;\n}\n[_nghost-%COMP%]     .fv-popup .leaflet-popup-tip-container {\n  display: none;\n}\n/*# sourceMappingURL=map-section.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapSectionComponent, [{
    type: Component,
    args: [{ selector: "fv-map-section", imports: [], template: '<div class="map-wrap">\n  <div #mapEl class="leaflet-map"></div>\n\n  <!-- Legend -->\n  <div class="map-overlay">\n    <h4>Project types</h4>\n    <div class="legend">\n      <div><i style="background:#2D6A4F"></i> Forestry / REDD+</div>\n      <div><i style="background:#D4870A"></i> Energy / Solar</div>\n      <div><i style="background:#5C7259"></i> Agriculture</div>\n      <div><i style="background:#4A4A5A"></i> Waste / Biogas</div>\n    </div>\n  </div>\n\n  <!-- Stats -->\n  <div class="map-stats">\n    <div class="map-stat"><div class="n">282</div><div class="l">Active projects</div></div>\n    <div class="map-stat"><div class="n">14</div><div class="l">Countries</div></div>\n  </div>\n</div>\n', styles: ["/* src/app/shared/components/map-section/map-section.component.scss */\n:host {\n  display: block;\n}\n.map-wrap {\n  position: relative;\n  width: 100%;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);\n}\n.leaflet-map {\n  width: 100%;\n  height: 520px;\n}\n.map-overlay {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  z-index: 1000;\n  background: rgba(255, 255, 255, 0.93);\n  border-radius: 8px;\n  padding: 12px 16px;\n  font-size: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.map-overlay h4 {\n  margin: 0 0 8px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--ink-2);\n}\n.map-overlay .legend {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.map-overlay .legend div {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--ink);\n}\n.map-overlay .legend i {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.map-stats {\n  position: absolute;\n  bottom: 16px;\n  left: 16px;\n  z-index: 1000;\n  display: flex;\n  gap: 12px;\n}\n.map-stats .map-stat {\n  background: rgba(255, 255, 255, 0.93);\n  border-radius: 8px;\n  padding: 10px 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n.map-stats .map-stat .n {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--gold);\n  line-height: 1;\n}\n.map-stats .map-stat .l {\n  font-size: 11px;\n  color: var(--ink-2);\n  margin-top: 2px;\n}\n:host ::ng-deep .fv-popup .leaflet-popup-content-wrapper {\n  border-radius: 6px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);\n  padding: 0;\n}\n:host ::ng-deep .fv-popup .leaflet-popup-content {\n  margin: 10px 14px;\n  font-family: inherit;\n}\n:host ::ng-deep .fv-popup .leaflet-popup-tip-container {\n  display: none;\n}\n/*# sourceMappingURL=map-section.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: NgZone }], { mapEl: [{
    type: ViewChild,
    args: ["mapEl", { static: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapSectionComponent, { className: "MapSectionComponent", filePath: "src/app/shared/components/map-section/map-section.component.ts", lineNumber: 25 });
})();

export {
  MapSectionComponent
};
//# sourceMappingURL=chunk-GNLJLWMX.js.map
