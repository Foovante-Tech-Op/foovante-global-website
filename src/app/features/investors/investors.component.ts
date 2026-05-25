import { Component } from '@angular/core';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { GrowthChartComponent } from '../../shared/components/growth-chart/growth-chart.component';
import { HeroSlide } from '../../core/models/hero-slide.model';

@Component({
    selector: 'fv-investors',
    imports: [NavComponent, FooterComponent, HeroComponent, GrowthChartComponent],
    templateUrl: './investors.component.html',
    styleUrl: './investors.component.scss'
})
export class InvestorsComponent {
  heroSlides: HeroSlide[] = [
    {
      img:  'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Series A · 2026',
      ttl:  'Back the verification layer',
      sub:  'The operating system for African carbon',
      live: '$12M · Open through Q3 2026'
    },
    {
      img:  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Traction',
      ttl:  '$1.4M ARR · 38% MoM',
      sub:  '282 projects · 14 countries',
      live: '20× growth in 18 months'
    }
  ];

  moatCards = [
    {
      n: '7.1y',
      h: 'Satellite baseline history',
      p: "Every project polygon backed by 7+ years of Sentinel-2 imagery. New entrants can't manufacture history they don't have."
    },
    {
      n: '630k',
      h: 'Hectares under live MRV',
      p: 'Every 5 days at 10m resolution. More monitored land than the next three African MRV operators combined.'
    },
    {
      n: '3',
      h: 'Standards integrations',
      p: 'Verra, Gold Standard, and Plan Vivo each took 8–14 months to onboard. We are the only African platform certified for all three.'
    },
    {
      n: '38',
      h: 'In-country agents',
      p: 'Local field teams across 14 countries. Trust is built in person, and our agent network is what makes 12-week issuance possible.'
    }
  ];

  feeStreams = [
    { pct: '72%', h: 'To project owners.',        d: 'The highest payout rate in African carbon. Projects keep the majority of what their work generates.' },
    { pct: '15%', h: 'Platform fee.',             d: 'Covers MRV monitoring, project listing, marketplace, and T+1 settlement. ~$2.78 per tCO₂e at platform-average pricing.' },
    { pct: '10%', h: 'Verification & issuance.',  d: 'Passed through at cost to your chosen standard body: Verra, Gold Standard, or Plan Vivo.' }
  ];
}
