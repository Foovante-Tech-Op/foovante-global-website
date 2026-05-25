import { Component } from '@angular/core';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { MapSectionComponent } from '../../shared/components/map-section/map-section.component';
import { HeroSlide } from '../../core/models/hero-slide.model';
import { METHODS } from '../../core/data/team.data';
import { Method } from '../../core/models/team.model';

@Component({
  selector: 'fv-projects',
  standalone: true,
  imports: [NavComponent, FooterComponent, HeroComponent, MapSectionComponent],
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
      h: 'Submit intake form',
      p: 'Ten-minute application. Polygon (or KML), project type, primary contact, and any prior verification work. We review within 48 hours.',
      meta: 'Free · No commitment'
    },
    {
      n: '02',
      h: 'Satellite baseline',
      p: 'Our team runs 7+ years of Sentinel-2 imagery on your polygon and delivers a preliminary baseline report within two weeks.',
      meta: '10m resolution · 5-day cadence'
    },
    {
      n: '03',
      h: 'Verification dossier',
      p: 'Field agents capture soil samples, biomass plots, and household surveys via the Foovante mobile app. We assemble the verifier dossier.',
      meta: '6-week avg. review cycle'
    },
    {
      n: '04',
      h: 'List and fund',
      p: 'Your project goes live on the Foovante marketplace. Funders can pre-purchase credits or stake into the project. Revenue flows to you T+1.',
      meta: '78% of credit revenue to project'
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
