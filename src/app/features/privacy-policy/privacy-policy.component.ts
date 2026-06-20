import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { HeroSlide } from '../../core/models/hero-slide.model';

interface PolicySection {
  id: string;
  label: string;
}

@Component({
  selector: 'fv-privacy-policy',
  imports: [NavComponent, FooterComponent, HeroComponent, RouterLink],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  lastRevised = '03 APR 2026';
  enforcementDate = '03 APR 2026';
  compliance = 'GDPR & GH-DPA';

  heroSlides: HeroSlide[] = [
    {
      img:  'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Data protection',
      ttl:  'Cryptographic by default',
      sub:  'AES-256 at rest · TLS 1.3 in transit',
      live: 'RBAC · MFA · Role-based access'
    },
    {
      img:  'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Compliance',
      ttl:  'GDPR & Ghana DPA aligned',
      sub:  'KYC · KYB · AML obligations',
      live: 'Verified identity vendors'
    },
    {
      img:  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Ledger immutability',
      ttl:  'Anchored to Polygon',
      sub:  'Anonymised hashes · Public audit trail',
      live: 'Mathematically tamper-proof'
    }
  ];

  sections: PolicySection[] = [
    { id: 'overview',       label: '1. Overview & Controller' },
    { id: 'data-collected', label: '2. Data Telemetry' },
    { id: 'how-we-use',     label: '3. Operational Usage' },
    { id: 'legal-basis',    label: '4. Legal Basis' },
    { id: 'data-sharing',   label: '5. Third-Party Sharing' },
    { id: 'blockchain',     label: '6. Ledger Immutability' },
    { id: 'cookies',        label: '7. Cookies & Tracking' },
    { id: 'your-rights',    label: '8. Entity Rights' },
    { id: 'data-retention', label: '9. Data Retention' },
    { id: 'security',       label: '10. Cryptographic Security' },
    { id: 'changes',        label: '11. Protocol Modifications' },
    { id: 'contact',        label: '12. Governance Contact' }
  ];
}
