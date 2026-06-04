import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { HeroSlide } from '../../core/models/hero-slide.model';
import { LEADERSHIP } from '../../core/data/team.data';
import { TeamMember } from '../../core/models/team.model';

@Component({
  selector: 'fv-founder-brief',
  imports: [NavComponent, FooterComponent, RouterLink, HeroComponent],
  templateUrl: './founder-brief.component.html',
  styleUrl: './founder-brief.component.scss'
})
export class FounderBriefComponent {
  founders: TeamMember[] = LEADERSHIP;

  heroSlides: HeroSlide[] = [
    {
      img:  'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1800&q=80&auto=format&fit=crop',
      lbl:  'The founders',
      ttl:  'The people behind Foovante',
      sub:  'Climate finance · Earth observation · Carbon verification',
      live: 'Building from Accra'
    },
    {
      img:  'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1800&q=80&auto=format&fit=crop',
      lbl:  'Why we built it',
      ttl:  'Infrastructure for African carbon',
      sub:  'The verification layer the continent was missing',
      live: 'Pre-seed · 2026'
    }
  ];
}
