import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { HeroSlide } from '../../core/models/hero-slide.model';

@Component({
    selector: 'fv-home',
    imports: [NavComponent, FooterComponent, HeroComponent, RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
  heroSlides: HeroSlide[] = [
    {
      img:  'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Forestry · REDD+',
      ttl:  'Kakum Forest Corridor',
      sub:  'Central Region, Ghana · Verra VCS',
      live: 'Live MRV · 24,200 tCO₂e/yr'
    },
    {
      img:  'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Renewable energy',
      ttl:  'Turkana Solar Microgrid',
      sub:  'Lodwar, Kenya · Verra VCS',
      live: 'Live MRV · 9,800 tCO₂e/yr'
    },
    {
      img:  'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Blue carbon',
      ttl:  'Volta Estuary Mangroves',
      sub:  'Keta, Ghana · Plan Vivo',
      live: 'Live MRV · 5,400 tCO₂e/yr'
    },
    {
      img:  'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Drylands restoration',
      ttl:  'Sahel Cookstoves',
      sub:  'Tamale, Northern Ghana · Gold Standard',
      live: 'Live MRV · 18,200 tCO₂e/yr'
    },
    {
      img:  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Agroforestry',
      ttl:  'Akagera Co-op',
      sub:  'Eastern Province, Rwanda · Verra VCS',
      live: 'Live MRV · 23,100 tCO₂e/yr'
    }
  ];

  picks = [
    {
      tag:      'For Funders',
      h:        'Pre-purchase verified African carbon credits.',
      lead:     'Foovante connects capital to high-integrity African carbon projects. Pre-purchase credits at fixed prices with a full audit trail per tonne.',
      features: ['Credit pre-purchase at fixed prices', 'Full audit trail per tonne', 'Satellite-verified baselines'],
      open:     'Browse projects',
      route:    '/funders',
      photo:    'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&q=80&auto=format&fit=crop'
    },
    {
      tag:      'For Projects',
      h:        'Turn your land work into real climate finance.',
      lead:     'African renewable-energy, agriculture, and forestry projects: register, baseline, verify, and list — without losing a large share to middlemen.',
      features: ['~12 weeks to first issuance', 'Competitive revenue share to project', 'Sentinel-2 baselining included'],
      open:     'Apply to list your project',
      route:    '/projects',
      photo:    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&q=80&auto=format&fit=crop'
    },
    {
      tag:      'For Investors',
      h:        'Back the verification layer of African carbon.',
      lead:     "We're raising the company building the rails for Africa's carbon markets. Pre-seed round open to thesis-aligned investors.",
      features: ['3 live projects · baseline phase', '8,100 ha under MRV by Q2 2026', 'Pre-seed round open'],
      open:     'Request the data room',
      route:    '/investors',
      photo:    'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1400&q=80&auto=format&fit=crop'
    }
  ];

  values = [
    {
      h: 'Continuous MRV, not annual paperwork',
      p: 'Every project polygon is monitored every 5 days at 10m resolution via Sentinel-2. Automatically, not on a clipboard.'
    },
    {
      h: 'Most of the money goes to the project',
      p: 'We are designing our fee structure so the majority of every credit sale flows back to project work. Industry average is around 40%; we intend to do significantly better.'
    },
    {
      h: 'Built on the continent',
      p: 'Headquartered in Accra, operating in Ghana today with expansion planned across the continent. No flying experts in from Geneva.'
    },
    {
      h: 'Standards-anchored',
      p: 'Every credit on Foovante is issued under Verra VCS, Gold Standard, or Plan Vivo, and serialised on-chain for traceability.'
    }
  ];
}
