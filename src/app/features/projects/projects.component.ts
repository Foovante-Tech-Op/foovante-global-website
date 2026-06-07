import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { MapSectionComponent } from '../../shared/components/map-section/map-section.component';
import { HeroSlide } from '../../core/models/hero-slide.model';
import { METHODS } from '../../core/data/team.data';
import { Method } from '../../core/models/team.model';

@Component({
    selector: 'fv-projects',
    imports: [NavComponent, FooterComponent, HeroComponent, MapSectionComponent, RouterLink],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  methods: Method[] = METHODS;

  heroSlides: HeroSlide[] = [
    {
      img:  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Agroforestry · ARR',
      ttl:  'Akagera Agroforestry Co-op',
      sub:  'Eastern Province, Rwanda · Verra VCS',
      live: '~12 weeks to first issuance'
    },
    {
      img:  'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Forestry · REDD+',
      ttl:  'Kakum Forest Corridor',
      sub:  'Central Region, Ghana · Verra VCS',
      live: '78% of revenue to project'
    },
    {
      img:  'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Blue carbon',
      ttl:  'Volta Estuary Mangroves',
      sub:  'Keta, Ghana · Plan Vivo',
      live: 'Sentinel-2 baselining included'
    }
  ];

  steps = [
    {
      n: '01',
      h: 'Submit Your Project',
      p: 'Tell us about your project. Share your project type, location, and any prior documentation. Our team reviews your submission and onboards you to the Crevy platform.',
      meta: 'Free · No commitment · Agriculture, Energy, Waste'
    },
    {
      n: '02',
      h: 'Build Your Evidence Trail',
      p: 'IoT monitoring begins and your project record starts accumulating real-time MRV data. Every data point is timestamped and feeds directly into your verification dossier.',
      meta: 'MRV framework · IoT integration · International standards aligned'
    },
    {
      n: '03',
      h: 'Pre-Verification',
      p: 'Your project moves through our pre-verification pipeline. Our team including our Verification Lead and Article 6 Expert assembles your audit-ready dossier aligned with Ghana CMO and international frameworks.',
      meta: 'Ghana CMO aligned · International frameworks · Local verification agents'
    },
    {
      n: '04',
      h: 'List and Connect to Buyers',
      p: 'Your verified project connects to global buyers through the Crevy marketplace. Buyers receive full traceability and CSRD-ready documentation. Your community receives a minimum 25% of credit revenue.',
      meta: 'Fully traceable · CSRD-ready · 25% community benefit-sharing'
    }
  ];

  priorities = [
    {
      n:  'P1',
      h:  'African projects only',
      p:  'We focus exclusively on Sub-Saharan African projects. Every member of our verification team operates on the continent.'
    },
    {
      n:  'P2',
      h:  'Land tenure and community consent documented',
      p:  'We require proof of land rights and free, prior, and informed consent from affected communities before listing.'
    },
    {
      n:  'P3',
      h:  'Eligible under at least one major standard',
      p:  'Projects must be eligible for Verra VCS, Gold Standard, or Plan Vivo certification. We\'ll help you find the right methodology.'
    },
    {
      n:  'P4',
      h:  'Standards-anchored, on-chain serialised',
      p:  'Every credit issued under Verra, Gold Standard, or Plan Vivo. Every tonne hashed and serialised so any buyer can trace it back to the polygon it came from.'
    }
  ];
}
