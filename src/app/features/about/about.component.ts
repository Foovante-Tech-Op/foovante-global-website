import { Component } from '@angular/core';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { HeroSlide } from '../../core/models/hero-slide.model';
import { LEADERSHIP, OPS_TEAM, ADVISORS } from '../../core/data/team.data';
import { TeamMember, Advisor } from '../../core/models/team.model';

@Component({
    selector: 'fv-about',
    imports: [NavComponent, FooterComponent, HeroComponent],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent {
  leadership: TeamMember[] = LEADERSHIP;
  opsTeam:    TeamMember[] = OPS_TEAM;
  advisors:   Advisor[]    = ADVISORS;

  heroSlides: HeroSlide[] = [
    {
      img:  'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Headquartered',
      ttl:  'Accra, Ghana',
      sub:  'West African Trade Centre · Independence Avenue',
      live: 'Headquartered in Accra'
    },
    {
      img:  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Field operations',
      ttl:  '14 African countries',
      sub:  '38 in-country agents · regional teams',
      live: '282 active projects'
    },
    {
      img:  'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=80&auto=format&fit=crop',
      lbl:  'MRV operations',
      ttl:  '412,000 ha monitored',
      sub:  'Sentinel-2 every 5 days · 10m resolution',
      live: '630k ha under live MRV'
    }
  ];

  timeline: { year: string; h: string; d: string; stats: { n: string; l: string }[] }[] = [];

  whatCards = [
    {
      ix:   '01 · Verification',
      h:    'Continuous MRV stack.',
      p:    'Sentinel-2 satellite imagery refreshed every 5 days at 10m resolution, fused with field data from local agents and lab-grade soil sampling. We baseline projects in days, not months.',
      meta: '412,000 ha live · 282 projects · 14 countries'
    },
    {
      ix:   '02 · Marketplace',
      h:    'Credit & stake platform.',
      p:    'Funders can pre-purchase credits at fixed prices or take a stake in a project and earn as it issues. All transactions clear T+1, with on-chain serialised certificates.',
      meta: '$14.6M climate finance unlocked · 72% to projects'
    },
    {
      ix:   '03 · Capital',
      h:    'Project finance + structured products.',
      p:    'We work with development banks, climate funds, and corporates on bespoke structures: forward purchases, blended portfolios, jurisdictional REDD+ tranches.',
      meta: 'Mandates with Hydra, Norrsken, Climate Investor One'
    }
  ];

  credCards = [
    { h: 'Registration', v: 'Ghana SEC', d: 'Registered with the Ghana Securities & Exchange Commission as a Market Service Provider, license MSR-2023-091.' },
    { h: 'Standards',    v: 'Verra · GS · PV', d: 'Approved operator under all three major voluntary carbon standards. Only Pan-African platform with full triple certification.' },
    { h: 'Audit',        v: 'Big Four', d: 'Annual financial and operational audit by a Big Four firm. ISO 14064 inventory verification annually since 2023.' },
    { h: 'Data & security', v: 'SOC 2 Type II', d: 'SOC 2 Type II certified. GDPR-compliant, NDPR-aligned. All field data encrypted at rest and in transit.' }
  ];
}
