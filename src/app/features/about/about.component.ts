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
      lbl:  'For corporate buyers',
      ttl:  'Scope 3 insetting',
      sub:  'Cocoa · Agribusiness · FMCG',
      live: 'CSRD & SBTi-ready',
      eyebrow: 'For corporate buyers',
      lines: ['Meet your climate commitments', 'with credits that survive scrutiny.'],
      lead: 'Every tonne is backed by field-level data, an integrity grade and a full audit trail, so it holds up to CSRD, SBTi and your own ESG team.',
      ctaLabel: 'Request a credit pipeline briefing',
      ctaHref: 'https://form.jotform.com/261642531528052'
    },
    {
      img:  'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=80&auto=format&fit=crop',
      lbl:  'For project developers',
      ttl:  'Verification-ready docs',
      sub:  'Raw data to buyers before issuance',
      live: 'Audit-ready in weeks',
      eyebrow: 'For project developers',
      lines: ['Your project is worth more', 'than your paperwork shows.'],
      lead: 'We take you from raw project data to verification-ready documentation, and connect you to buyers before issuance.',
      ctaLabel: 'Get a free carbon-readiness assessment',
      ctaHref: 'https://form.jotform.com/261642531528052'
    },
    {
      img:  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&q=80&auto=format&fit=crop',
      lbl:  'For farming programmes',
      ttl:  'Farmers’ climate work to income',
      sub:  'Onboard · Train · Monitor digitally',
      live: 'Measurable & sellable',
      eyebrow: 'For farming programmes',
      lines: ['Turn your farmers’ climate work', 'into income.'],
      lead: 'We onboard, train and monitor your farmers digitally, so their practices become measurable, verifiable and sellable.',
      ctaLabel: 'Enrol your programme',
      ctaHref: 'https://form.jotform.com/261642531528052'
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

  repeatSets = [0, 1, 2, 3, 4]; // enough copies to fill any viewport

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
