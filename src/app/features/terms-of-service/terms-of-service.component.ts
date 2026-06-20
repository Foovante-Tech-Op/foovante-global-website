import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { HeroSlide } from '../../core/models/hero-slide.model';

interface TermsSection {
  id: string;
  label: string;
  title: string;
}

@Component({
  selector: 'fv-terms-of-service',
  imports: [NavComponent, FooterComponent, HeroComponent, RouterLink],
  templateUrl: './terms-of-service.component.html',
  styleUrl: './terms-of-service.component.scss'
})
export class TermsOfServiceComponent {
  lastRevised = '03 APR 2026';
  enforcementDate = '03 APR 2026';
  jurisdiction = 'Republic of Ghana';

  heroSlides: HeroSlide[] = [
    {
      img:  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Governance protocol',
      ttl:  'Terms of Service',
      sub:  'Crevy platform · Foovante Global Ltd',
      live: 'Effective 03 April 2026'
    },
    {
      img:  'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Jurisdiction',
      ttl:  'Republic of Ghana',
      sub:  'Binding arbitration · Ghana Arbitration Centre',
      live: 'English language proceedings'
    },
    {
      img:  'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Asset integrity',
      ttl:  'Immutable on the Ledger',
      sub:  'Cryptographically verified · Polygon-anchored',
      live: 'dMRV · KYC · KYB compliant'
    }
  ];

  sections: TermsSection[] = [
    { id: 'acceptance',       label: '1. Acceptance of Terms',        title: '1. Acceptance of Terms' },
    { id: 'definitions',      label: '2. Protocol Definitions',       title: '2. Protocol Definitions' },
    { id: 'eligibility',      label: '3. Identity & Eligibility',     title: '3. Identity & Eligibility' },
    { id: 'platform-use',     label: '4. Infrastructure Use',         title: '4. Infrastructure Use' },
    { id: 'prohibited',       label: '5. Prohibited Vectors',         title: '5. Prohibited Vectors' },
    { id: 'carbon-credits',   label: '6. Asset Immutability',         title: '6. Asset Immutability & Status' },
    { id: 'project-owners',   label: '7. Originator Obligations',     title: '7. Originator Obligations' },
    { id: 'corporate-buyers', label: '8. Institutional Buyers',       title: '8. Institutional Buyer Terms' },
    { id: 'payments',         label: '9. Settlement & Fees',          title: '9. Settlement & Fees' },
    { id: 'ip',               label: '10. Intellectual Property',     title: '10. Intellectual Property' },
    { id: 'governing-law',    label: '11. Governing Law',             title: '11. Governing Law' },
    { id: 'disputes',         label: '12. Dispute Resolution',        title: '12. Dispute Resolution' },
    { id: 'changes',          label: '13. Protocol Amendments',       title: '13. Protocol Amendments' }
  ];
}
