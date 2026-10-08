import {
  Component, Input, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy, PLATFORM_ID, inject
} from '@angular/core';
import { NgStyle, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { HeroSlide } from '../../../core/models/hero-slide.model';

export interface HeroCta {
  label: string;
  href?: string;
  routerLink?: string;
}

@Component({
    selector: 'fv-hero',
    imports: [NgStyle],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit, OnDestroy {
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

  constructor(private cdr: ChangeDetectorRef, private router: Router) {}

  ngOnInit(): void {
    if (this.isBrowser && this.slides.length > 1) {
      this.startTimer();
    }
  }

  ngOnDestroy(): void {
    this.clearTimer();
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
    this.previousSlide = this.currentSlide;
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.cdr.markForCheck();
  }

  goTo(index: number): void {
    if (index === this.currentSlide) return;
    this.previousSlide = this.currentSlide;
    this.currentSlide = index;
    if (this.isBrowser) {
      this.startTimer();
    }
    this.cdr.markForCheck();
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
    if (cta.href && this.isBrowser) {
      window.open(cta.href, '_blank', 'noopener');
    } else if (cta.routerLink) {
      this.router.navigate([cta.routerLink]);
    }
  }
}
