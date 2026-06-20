import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { HeroSlide } from '../../core/models/hero-slide.model';

@Component({
  selector: 'fv-how-mrv-works',
  imports: [NavComponent, FooterComponent, HeroComponent, RouterLink],
  templateUrl: './how-mrv-works.component.html',
  styleUrl: './how-mrv-works.component.scss'
})
export class HowMrvWorksComponent {
  heroSlides: HeroSlide[] = [
    {
      img:  'https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Optical telemetry',
      ttl:  'Sentinel-2 multispectral',
      sub:  '10 m / pixel · 5-day revisit · ± 2.5% error',
      live: 'Continuous canopy monitoring'
    },
    {
      img:  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Edge IoT',
      ttl:  'Cryptographically signed payloads',
      sub:  'Sub-millimeter · 15 min cadence',
      live: 'Anti-tamper hardware attestation'
    },
    {
      img:  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&q=80&auto=format&fit=crop',
      lbl:  'On-chain minting',
      ttl:  'Immutable chain of custody',
      sub:  'Polygon · ERC-1155 · Hash-anchored',
      live: 'Every tonne traceable to the polygon'
    }
  ];

  telemetrySpecs = [
    {
      title:      'Optical Satellite (Sentinel-2)',
      resolution: '10m / pixel',
      frequency:  '5-Day Revisit',
      error:      '± 2.5%',
      desc:       'Primary optical ingestion. Multispectral analysis (NDVI, EVI) to establish baseline canopy cover and continuous health monitoring.'
    },
    {
      title:      'SAR Mapping (Sentinel-1)',
      resolution: '10m × 10m',
      frequency:  '12-Day Revisit',
      error:      '± 4.1%',
      desc:       'Synthetic Aperture Radar penetrates cloud cover, allowing us to continuously measure structural volume in equatorial regions year-round.'
    },
    {
      title:      'Edge IoT · Terrestrial',
      resolution: 'Sub-millimeter',
      frequency:  'Real-time · 15 min',
      error:      '± 0.1%',
      desc:       'Dendrometers and soil-moisture sensors installed in index plots. Cryptographically signed payloads via LoRaWAN to prevent data spoofing.'
    }
  ];

  formulas: { ix: string; h: string; p: string; expr: string; legend: { sym: string; def: string }[] }[] = [
    {
      ix:   '01 · Biomass Sequestration (AGB)',
      h:    'Above-Ground Biomass Quantification',
      p:    'Translates raw physical observations (LiDAR canopy dimensions or multispectral indices) into total vegetative mass.',
      expr: 'AGB = 0.0673 × (ρ · D² · H)^0.976',
      legend: [
        { sym: 'AGB',   def: 'Above-Ground Biomass volume equivalent (kg)' },
        { sym: 'ρ',     def: 'Mean wood density metric calibrated by ecosystem databases' },
        { sym: 'D · H', def: 'Extrapolated breast-height diameter and vertical structure height (m)' }
      ]
    },
    {
      ix:   '02 · Conservatism Principle',
      h:    'Net Asset Allocation Accounting',
      p:    'Aligns directly with global standards (Verra VM0042 / Gold Standard). We explicitly subtract all risk factors before minting credits.',
      expr: 'N_credits = G_removals − L_deduction − B_contribution',
      legend: [
        { sym: 'N_credits',  def: 'Total finalised net carbon credits issued to the marketplace' },
        { sym: 'G_removals', def: 'Total calculated gross carbon offset (tCO₂e)' },
        { sym: 'L · B',      def: 'Risk mitigations for project leakage and safety buffer pools' }
      ]
    }
  ];

  pipelineSteps = [
    {
      n: '1',
      h: 'Edge Capture',
      p: 'Hardware physically signs raw telemetry with a private key. Prevents data spoofing at the source.'
    },
    {
      n: '2',
      h: 'dMRV Ingestion & AI',
      p: 'Satellite rasters and edge data are processed. Biomass and carbon equivalence are calculated automatically.'
    },
    {
      n: '3',
      h: 'On-Chain Minting',
      p: 'The verified payload is hashed and a non-fungible digital credit is minted on Polygon for immutability.'
    }
  ];
}
