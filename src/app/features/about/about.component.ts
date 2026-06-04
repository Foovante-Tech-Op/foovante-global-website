import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { HeroSlide } from '../../core/models/hero-slide.model';
import { LEADERSHIP, OPS_TEAM, ADVISORS } from '../../core/data/team.data';
import { TeamMember, Advisor } from '../../core/models/team.model';

@Component({
    selector: 'fv-about',
    imports: [NavComponent, FooterComponent, HeroComponent, RouterLink],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent {
  leadership: TeamMember[] = LEADERSHIP;
  opsTeam:    TeamMember[] = OPS_TEAM;
  advisors:   Advisor[]    = ADVISORS;

  heroSlides: HeroSlide[] = [
    {
      img:  'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Energy',
      ttl:  'Renewable energy projects',
      sub:  'Solar · Wind · Clean energy infrastructure',
      live: 'Renewable energy carbon credits'
    },
    {
      img:  'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Agriculture',
      ttl:  'Forestry & agroforestry',
      sub:  'Forest conservation · Agroforestry systems',
      live: '3 active projects · scaling'
    },
    {
      img:  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Blue carbon',
      ttl:  'Mangroves & coastal ecosystems',
      sub:  'Oceans · Wetlands · Coastal carbon',
      live: 'Blue carbon credits across varying markets'
    }
  ];

  timeline: { year: string; h: string; d: string; stats: { n: string; l: string }[] }[] = [];

  whatCards = [
    {
      ix:   '01 · Verification',
      h:    'Continuous MRV stack.',
      p:    'Sentinel-2 satellite imagery refreshed every 5 days at 10m resolution, fused with field data from local agents and lab-grade soil sampling. We baseline projects in days, not months.',
      meta: '8,100 ha live by Q2 2026 · 3 projects · 10 smallholder programs'
    },
    {
      ix:   '02 · Marketplace',
      h:    'Credit trading platform.',
      p:    'We are building a platform where funders can pre-purchase credits at fixed prices and track issuance in real time. The marketplace connects verified projects directly to buyers, with a full audit trail per tonne.',
      meta: 'In development · credit pre-purchase · audit trail per tonne'
    },
    {
      ix:   '03 · Capital',
      h:    'Project finance + structured products.',
      p:    'We are developing capital structures — including forward purchases and blended portfolios — to connect African carbon projects with development banks, climate funds, and corporate buyers.',
      meta: 'Forward purchases · blended portfolios · jurisdictional REDD+'
    }
  ];

  credCards = [
    { h: 'Registration', v: 'Ghana SEC · Targeted', d: 'We are pursuing registration with the Ghana Securities & Exchange Commission as a Market Service Provider. Application preparation is underway, funded by our pre-seed round.' },
    { h: 'Standards',    v: 'Verra · GS · PV · Targeted', d: 'We are working toward operator approval under Verra, Gold Standard, and Puro.earth. Achieving full triple certification across major voluntary carbon standards is a defined milestone in our pre-seed roadmap.' },
    { h: 'Audit',        v: 'Big Four · Planned', d: 'We plan to appoint a Big Four firm for financial and operational audit and ISO 14064 inventory verification as part of our pre-seed compliance programme.' },
    { h: 'Data & security', v: 'SOC 2 · Planned', d: 'SOC 2 Type II certification, GDPR compliance, and NDPR alignment are all targeted milestones. All field data is already encrypted at rest and in transit while formal certification is in progress.' }
  ];
}
