import {
  Component, Input, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy, ElementRef, PLATFORM_ID, inject, AfterViewInit
} from '@angular/core';
import { NgStyle, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroSlide } from '../../../core/models/hero-slide.model';
import { MOTION_OK } from '../../motion/page-motion';

export interface HeroCta {
  label: string;
  href?: string;
  routerLink?: string;
  fragment?: string;
}

@Component({
  selector: 'fv-hero',
  imports: [NgStyle],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() slides: HeroSlide[] = [];
  @Input() eyebrow = '';
  @Input() lines: string[] = [];
  @Input() lead = '';
  @Input() cta1: HeroCta = { label: 'Browse projects', routerLink: '/funders' };
  @Input() cta2: HeroCta = { label: 'Apply to list a project', routerLink: '/projects' };
  @Input() dynamicContent = false;

  currentSlide = 0;
  previousSlide = -1;
  private timer: ReturnType<typeof setInterval> | null = null;
  slideDuration = 6000;
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private host = inject(ElementRef<HTMLElement>).nativeElement as HTMLElement;
  private mm?: gsap.MatchMedia;
  private motionOk = false;

  constructor(private cdr: ChangeDetectorRef, private router: Router) {}

  ngOnInit(): void {
    if (this.isBrowser && this.slides.length > 1) {
      this.startTimer();
    }
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    gsap.registerPlugin(ScrollTrigger);

    // The headline, lead and buttons enter through CSS so they show without waiting for JS
    this.mm = gsap.matchMedia(this.host);
    this.mm.add(MOTION_OK, () => {
      this.motionOk = true;

      gsap.from('.hero-dots button', {
        opacity: 0,
        y: 12,
        duration: 0.6,
        stagger: 0.08,
        delay: 0.9,
        ease: 'power3.out'
      });

      // Parallax: the photo drifts slower than the page while the copy lifts away and fades
      const scrub = { trigger: this.host.querySelector('.hero'), start: 'top top', end: 'bottom top', scrub: true };
      gsap.to('.hero-bg', { yPercent: 18, ease: 'none', scrollTrigger: scrub });
      gsap.to('.wrap', { y: 90, opacity: 0, ease: 'none', scrollTrigger: { ...scrub, end: 'bottom 15%' } });

      return () => { this.motionOk = false; };
    });
  }

  ngOnDestroy(): void {
    this.clearTimer();
    this.mm?.revert();
  }

  private startTimer(): void {
    this.clearTimer();
    this.timer = setInterval(() => {
      this.advance();
    }, this.slideDuration);
  }

  private clearTimer(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  advance(): void {
    this.showSlide((this.currentSlide + 1) % this.slides.length);
  }

  goTo(index: number): void {
    if (index === this.currentSlide) return;
    this.showSlide(index);
    if (this.isBrowser) {
      this.startTimer();
    }
  }

  private showSlide(index: number): void {
    const apply = () => {
      this.previousSlide = this.currentSlide;
      this.currentSlide = index;
      this.cdr.markForCheck();
    };
    if (!this.dynamicContent || !this.motionOk) {
      apply();
      return;
    }

    // Copy that changes per slide steps out, swaps, then steps back in; new headline lines replay their CSS entrance
    const copy = this.host.querySelectorAll('.wrap .eyebrow, .wrap .lead, .wrap .hero-cta');
    const lines = this.host.querySelectorAll('.wrap h1 .reveal > span');
    gsap.to([...copy, ...lines], {
      opacity: 0,
      y: -14,
      duration: 0.3,
      stagger: 0.03,
      ease: 'power2.in',
      overwrite: true,
      onComplete: () => {
        apply();
        this.cdr.detectChanges();
        gsap.set(lines, { clearProps: 'opacity,transform' });
        gsap.fromTo(copy,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, delay: 0.25, ease: 'power3.out', overwrite: true });
      }
    });
  }

  getSlideState(index: number): string {
    if (index === this.currentSlide) return 'on';
    if (index === this.previousSlide) return 'prev';
    return '';
  }

  get currentSlideData(): HeroSlide {
    return this.slides[this.currentSlide];
  }

  get activeEyebrow(): string {
    if (!this.dynamicContent) return this.eyebrow;
    return this.currentSlideData?.eyebrow ?? this.eyebrow;
  }

  get activeLines(): string[] {
    if (!this.dynamicContent) return this.lines;
    return this.currentSlideData?.lines ?? this.lines;
  }

  get activeLead(): string {
    if (!this.dynamicContent) return this.lead;
    return this.currentSlideData?.lead ?? this.lead;
  }

  get activeCta1(): HeroCta {
    if (!this.dynamicContent) return this.cta1;
    const s = this.currentSlideData;
    if (s?.ctaLabel) return { label: s.ctaLabel, href: s.ctaHref ?? this.cta1.href, routerLink: s.ctaHref ? undefined : this.cta1.routerLink };
    return this.cta1;
  }

  navigateTo(cta: HeroCta): void {
    if (cta.href && this.isBrowser && /^https?:\/\//i.test(cta.href) && !/^javascript:/i.test(cta.href)) {
      window.open(cta.href, '_blank', 'noopener,noreferrer');
    } else if (cta.routerLink) {
      this.router.navigate([cta.routerLink], { fragment: cta.fragment, onSameUrlNavigation: 'reload' });
    }
  }
}
