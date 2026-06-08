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

  partnerLogos: { name: string; logo: string }[] = [
    { name: 'EPA Ghana',              logo: 'assets/images/d.png' },
    { name: 'LbH',                    logo: 'assets/images/l.png' },
    { name: 'Crop Intellect',         logo: 'assets/images/c.png' },
    { name: 'CraftedClimate',         logo: 'assets/images/t.png' },
    { name: 'Startup Discovery Africa', logo: 'assets/images/s.png' },
    { name: 'ALX Ventures',           logo: 'assets/images/v.png' },
  ];

  whatCards = [
    {
      ix:   '01 · Document',
      h:    'Project documentation & evidence building.',
      p:    'Crevy enables project developers to document sustainable practices and build the verified evidence trail required for carbon credit issuance going from zero documentation to audit-ready in weeks, not years.',
      meta: '3 pilot projects onboarded · 3,620 hectares under active documentation · Ghana, Nigeria pipeline'
    },
    {
      ix:   '02 · Monitor',
      h:    'Real-time MRV data collection.',
      p:    'Project developers receive real-time IoT sensor data feeding into a continuous monitoring, reporting, and verification framework aligned with international standards. Every data point builds the evidence trail auditors need.',
      meta: 'MRV framework · IoT sensor integration · pre-verification pipeline'
    },
    {
      ix:   '03 · Marketplace',
      h:    'Carbon credit trading platform.',
      p:    'Verified African carbon assets connect directly to global buyers  fully traceable and independently verified. Buyers get CSRD-ready documentation. Project communities receive a minimum 25% of credit revenue.',
      meta: 'Agriculture · energy · waste projects · CSRD-ready · community benefit-sharing'
    }
  ];

  credCards = [
    { h: 'Legal Infrastructure',       v: 'Complete · In place',                    d: 'Our legal infrastructure is fully established — Privacy Policy, Terms of Use, and MOU templates are built and ready. This forms the foundation for all project and buyer agreements on the platform.' },
    { h: 'Financial Model',            v: 'Advisor-reviewed · Stress-tested',        d: 'Our five-year financial projections have been reviewed and stress-tested by our finance advisor, giving investors a credible path to profitability from 2028.' },
    { h: 'Theory of Change',           v: 'Impact-verified · 16 published references', d: 'Our Theory of Change has been reviewed and updated with our impact advisor, underpinned by 16 published references. Every claim we make is evidenced.' },
    { h: 'Community Benefit-Sharing',  v: 'Minimum 25% · Required for all projects', d: 'Every Foovante-supported project is required to have a community benefit-sharing arrangement, with a minimum of 25% of credit revenue returning to local households.' }
  ];
}
