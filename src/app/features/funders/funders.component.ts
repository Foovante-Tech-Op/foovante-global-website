import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { MapSectionComponent } from '../../shared/components/map-section/map-section.component';
import { DonutChartComponent } from '../../shared/components/donut-chart/donut-chart.component';
import { HeroSlide } from '../../core/models/hero-slide.model';
import { FV_PROJECTS } from '../../core/data/projects.data';
import { Project } from '../../core/models/project.model';

@Component({
    selector: 'fv-funders',
    imports: [NavComponent, FooterComponent, HeroComponent, MapSectionComponent, DonutChartComponent, DecimalPipe],
    templateUrl: './funders.component.html',
    styleUrl: './funders.component.scss'
})
export class FundersComponent {
  projects: Project[] = FV_PROJECTS;

  heroSlides: HeroSlide[] = [
    {
      img:  'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Forestry · REDD+',
      ttl:  'Kakum Forest Corridor',
      sub:  'Central Region, Ghana · Verra VCS',
      live: '65% funded · 32 funders'
    },
    {
      img:  'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Renewable energy',
      ttl:  'Turkana Solar Microgrid',
      sub:  'Lodwar, Kenya · Verra VCS',
      live: '22% funded · 14 funders'
    },
    {
      img:  'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Blue carbon',
      ttl:  'Volta Estuary Mangroves',
      sub:  'Keta, Ghana · Plan Vivo',
      live: '88% funded · 47 funders'
    },
    {
      img:  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Agroforestry',
      ttl:  'Akagera Co-op',
      sub:  'Eastern Province, Rwanda · Verra VCS',
      live: '23% funded · 9 funders'
    }
  ];

  spotlight = {
    name:     'Akagera Agroforestry Co-op',
    place:    'Eastern Province, Rwanda · Verra VCS',
    hero:     'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&q=80&auto=format&fit=crop',
    pct:      65,
    raised:   312,
    target:   480,
    irr:      9.4,
    daysLeft: 18,
    price:    19.75,
    available: 23.1
  };

  barData = [12, 18, 22, 28, 34, 42, 38, 46, 52, 58, 62, 68];
  months  = ['J','F','M','A','M','J','J','A','S','O','N','D'];

  getBarHeight(v: number): string {
    return (v / 68 * 120) + 'px';
  }

  getRaisedPct(project: Project): number {
    return Math.round((project.raised / project.target) * 100);
  }

  donutLegend = [
    { label: 'Forestry / REDD+', color: 'var(--green)',  pct: '31%' },
    { label: 'Energy',           color: 'var(--gold)',   pct: '47%' },
    { label: 'Agriculture',      color: '#5C7259',       pct: '14%' },
    { label: 'Blue carbon',      color: 'var(--sage)',   pct: '8%'  }
  ];
}
