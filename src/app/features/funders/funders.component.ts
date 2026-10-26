import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { HeroSlide } from '../../core/models/hero-slide.model';
import { FV_PROJECTS } from '../../core/data/projects.data';
import { Project } from '../../core/models/project.model';
import { usePageMotion } from '../../shared/motion/page-motion';

@Component({
  selector: 'fv-funders',
  imports: [NavComponent, FooterComponent, HeroComponent, RouterLink, DecimalPipe],
  templateUrl: './funders.component.html',
  styleUrl: './funders.component.scss'
})
export class FundersComponent {
  constructor() {
    usePageMotion();
  }

  projects: Project[] = FV_PROJECTS;
  portfolio = FV_PROJECTS.slice(0, 4);
  portfolioTonnes = this.portfolio.reduce((sum, p) => sum + p.available, 0);

  journey = [
    { stage: 'Document', h: 'Projects submit to Crevy', p: 'Developers bring their land or energy work onto Crevy, and our team builds the documentation foundation verification needs.', meta: 'Agriculture, energy and waste projects' },
    { stage: 'Monitor', h: 'Real-time data collection', p: 'IoT sensor data feeds continuously into each project record. Every data point is timestamped and tamper-evident.', meta: 'MRV framework with IoT integration' },
    { stage: 'Verify', h: 'Pre-verification and audit-readiness', p: 'Projects move through a pre-verification pipeline aligned with international carbon standards, in weeks rather than years.', meta: 'Ghana CMO aligned' },
    { stage: 'Buy', h: 'You buy with full traceability', p: 'Verified African credits reach you directly, with CSRD-ready documentation. Communities receive at least 25% of credit revenue.', meta: 'Independently verified, CSRD-ready' }
  ];

  dashFeatures = [
    { h: 'Credit portfolio', p: 'Every credit you hold across all projects, with project type, verification status and retirement status in one place.' },
    { h: 'Commitment tracking', p: 'Follow each pre-purchase from commitment to issuance, with a full audit trail per tonne.' },
    { h: 'MRV data feed', p: 'The live monitoring data behind every project you have backed — the same evidence auditors and regulators see.' },
    { h: 'Impact metrics', p: 'Hectares documented, communities with benefit-sharing agreements and SDG alignment, ready for your CSRD reporting.' }
  ];

  heroSlides: HeroSlide[] = [
    {
      img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=80&auto=format&fit=crop',
      lbl: 'Forestry · REDD+',
      ttl: 'Kakum Forest Corridor',
      sub: 'Central Region, Ghana · Verra VCS',
      live: '65% funded · 32 buyers'
    },
    {
      img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1800&q=80&auto=format&fit=crop',
      lbl: 'Renewable energy',
      ttl: 'Turkana Solar Microgrid',
      sub: 'Lodwar, Kenya · Verra VCS',
      live: '22% funded · 14 buyers'
    },
    {
      img: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1800&q=80&auto=format&fit=crop',
      lbl: 'Blue carbon',
      ttl: 'Volta Estuary Mangroves',
      sub: 'Keta, Ghana · Plan Vivo',
      live: '88% funded · 47 buyers'
    },
    {
      img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&q=80&auto=format&fit=crop',
      lbl: 'Agroforestry',
      ttl: 'Akagera Co-op',
      sub: 'Eastern Province, Rwanda · Verra VCS',
      live: '23% funded · 9 buyers'
    }
  ];

  spotlight = {
    name: 'Akagera Agroforestry Co-op',
    place: 'Eastern Province, Rwanda · Verra VCS',
    hero: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&q=80&auto=format&fit=crop',
    pct: 65,
    raised: 312,
    target: 480,
    irr: 9.4,
    daysLeft: 18,
    price: 19.75,
    available: 23.1
  };

  barData = [12, 18, 22, 28, 34, 42, 38, 46, 52, 58, 62, 68];
  months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

  donutLegend = [
    { label: 'Forestry / REDD+', color: 'var(--green)', pct: '31%' },
    { label: 'Energy', color: 'var(--gold)', pct: '47%' },
    { label: 'Agriculture', color: '#5C7259', pct: '14%' },
    { label: 'Blue carbon', color: 'var(--sage)', pct: '8%' }
  ];

  getBarHeight(v: number): string {
    return (v / 68 * 120) + 'px';
  }

  getRaisedPct(project: Project): number {
    return Math.round((project.raised / project.target) * 100);
  }
}
