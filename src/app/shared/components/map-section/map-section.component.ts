import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild, PLATFORM_ID, Inject, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import type * as Leaflet from 'leaflet';
import type { Feature, GeoJsonProperties, Geometry } from 'geojson';
import { FV_MAP } from '../../../core/data/map.data';
import { MapPoint } from '../../../core/models/map.model';

const ACTIVE_COUNTRIES = [
  'Senegal','Côte d\'Ivoire','Ghana','Nigeria','Cameroon',
  'Ethiopia','Uganda','Rwanda','Kenya','Tanzania',
  'Zambia','Malawi','Mozambique','South Africa','Madagascar','Mali','Burkina Faso'
];

const TYPE_COLORS: Record<MapPoint['type'], string> = {
  forestry: '#2D6A4F',
  energy:   '#D4870A',
  agri:     '#5C7259',
  waste:    '#4A4A5A',
};

@Component({
    selector: 'fv-map-section',
    imports: [],
    templateUrl: './map-section.component.html',
    styleUrl: './map-section.component.scss'
})
export class MapSectionComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mapEl', { static: true }) mapEl!: ElementRef<HTMLDivElement>;

  private map?: Leaflet.Map;
  private L?: typeof Leaflet;
  private resizeObserver?: ResizeObserver;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private zone: NgZone,
  ) {}

  async ngAfterViewInit(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) return;

    const L = await import('leaflet');
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
        touchZoom: false,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd',
        maxZoom: 6,
      }).addTo(this.map);

      // Recalculate size once the browser has painted the container
      setTimeout(() => this.map?.invalidateSize(), 0);

      // Keep map correct if the container resizes (e.g. sidebar open/close)
      this.resizeObserver = new ResizeObserver(() => this.map?.invalidateSize());
      this.resizeObserver.observe(this.mapEl.nativeElement);
    });

    await this.addCountryLayer();
    this.addProjectMarkers(L);
  }

  private async addCountryLayer(): Promise<void> {
    try {
      const res = await fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson');
      const geoJson = await res.json();

      const L = this.L;
      if (!L || !this.map) return;
      L.geoJSON(geoJson, {
        filter: (feature: Feature<Geometry, GeoJsonProperties>) =>
          !!feature.properties && ACTIVE_COUNTRIES.includes(feature.properties['ADMIN']),
        style: () => ({
          fillColor: '#F5A623',
          fillOpacity: 0.35,
          color: '#D4870A',
          weight: 1.2,
        }),
      }).addTo(this.map);
    } catch {
      // silently skip country highlight if fetch fails
    }
  }

  private addProjectMarkers(L: typeof Leaflet): void {
    if (!this.map) return;
    for (const point of FV_MAP) {
      const color = TYPE_COLORS[point.type] ?? '#2D6A4F';
      const icon = L.divIcon({
        className: '',
        html: `<div style="
          width:10px;height:10px;border-radius:50%;
          background:${color};border:2px solid #fff;
          box-shadow:0 1px 4px rgba(0,0,0,0.35);
          cursor:pointer;
        "></div>`,
        iconSize: [10, 10],
        iconAnchor: [5, 5],
      });

      L.marker([point.lat, point.lng], { icon })
        .addTo(this.map)
        .bindPopup(`<strong>${point.name}</strong><br><span style="color:#666;font-size:12px">${point.country}</span>`, {
          closeButton: false,
          className: 'fv-popup',
        });
    }
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    this.map?.remove();
  }
}
