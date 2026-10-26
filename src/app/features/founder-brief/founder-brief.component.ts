import { Component, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { HeroSlide } from '../../core/models/hero-slide.model';
import { LEADERSHIP } from '../../core/data/team.data';
import { TeamMember } from '../../core/models/team.model';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'fv-founder-brief',
  imports: [NavComponent, FooterComponent, RouterLink, HeroComponent],
  templateUrl: './founder-brief.component.html',
  styleUrl: './founder-brief.component.scss'
})
export class FounderBriefComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  founders: TeamMember[] = LEADERSHIP;

  heroSlides: HeroSlide[] = [
    {
      img: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1800&q=80&auto=format&fit=crop',
      lbl: 'The founders',
      ttl: 'The people behind Foovante',
      sub: 'Climate finance · Earth observation · Carbon verification',
      live: 'Building from Accra'
    },
    {
      img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1800&q=80&auto=format&fit=crop',
      lbl: 'Why we built it',
      ttl: 'Infrastructure for African carbon',
      sub: 'The verification layer the continent was missing',
      live: 'Pre-seed · 2026'
    }
  ];

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.context-grid', {
      opacity: 0,
      y: 28,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: { trigger: '.context', start: 'top 80%' }
    });

    gsap.from('.cta .cta-in', {
      opacity: 0,
      y: 28,
      scale: 0.98,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: { trigger: '.cta', start: 'top 80%' }
    });
  }

  private animateStagger(sectionSelector: string, childSelector: string, opts: { y: number; stagger: number }): void {
    const section = document.querySelector(sectionSelector);
    if (!section) return;
    const children = section.querySelectorAll(childSelector);
    if (!children.length) return;
    gsap.from(children, {
      opacity: 0,
      y: opts.y,
      duration: 0.6,
      stagger: opts.stagger,
      ease: 'power2.out',
      scrollTrigger: { trigger: section, start: 'top 85%' }
    });
  }
}
