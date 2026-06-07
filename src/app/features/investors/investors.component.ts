import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { HeroSlide } from '../../core/models/hero-slide.model';

@Component({
    selector: 'fv-investors',
    imports: [NavComponent, FooterComponent, HeroComponent, RouterLink],
    templateUrl: './investors.component.html',
    styleUrl: './investors.component.scss'
})
export class InvestorsComponent {
  heroSlides: HeroSlide[] = [
    {
      img:  'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Pre-seed · 2026',
      ttl:  'Back the verification layer',
      sub:  'The operating system for African carbon',
      live: 'Pre-seed round open · thesis-aligned investors'
    },
    {
      img:  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Early traction',
      ttl:  '3 pilots. 3,620 ha. Ghana.',
      sub:  '3 pilot projects · active documentation · Ghana',
      live: 'Break-even projected 2028'
    }
  ];

  moatCards = [
    {
      n: '3',
      h: 'Pilot projects onboarded',
      p: 'Three projects are actively onboarded to Crevy and building their verification evidence trail the hardest part of launching a carbon platform in Africa.'
    },
    {
      n: '3,620 ha',
      h: 'Hectares under active documentation',
      p: 'Project developers are documenting sustainable practices across 3,620 hectares spanning Northern Savanna, Bono, and Ameyawkope farmlands measured and evidenced for the first time.'
    },
    {
      n: '3',
      h: 'Carbon economies covered',
      p: 'Green, Blue, and Brown carbon project types are all supported on the platform. Agriculture, energy, and waste the early-stage projects global buyers cannot easily reach or verify on their own.'
    },
    {
      n: '16',
      h: 'Published references behind our Theory of Change',
      p: 'Our Theory of Change has been reviewed and updated with our impact advisor, underpinned by 16 published references. Every impact claim we make is evidenced.'
    }
  ];

  feeStreams = [
    { pct: '72%', h: 'To project owners.',        d: 'The highest payout rate in African carbon. Projects keep the majority of what their work generates.' },
    { pct: '15%', h: 'Platform fee.',             d: 'Covers MRV monitoring, project listing, marketplace, and T+1 settlement. ~$2.78 per tCO₂e at platform-average pricing.' },
    { pct: '10%', h: 'Verification & issuance.',  d: 'Passed through at cost to your chosen standard body: Verra, Gold Standard, or Plan Vivo.' }
  ];
}
