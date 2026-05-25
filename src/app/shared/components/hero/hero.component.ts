import {
  Component, Input, OnInit, OnDestroy, ChangeDetectorRef
} from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
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
    styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  @Input() slides: HeroSlide[] = [];
  @Input() eyebrow = '';
  @Input() lines: string[] = [];
  @Input() lead = '';
  @Input() cta1: HeroCta = { label: 'Browse projects', routerLink: '/funders' };
  @Input() cta2: HeroCta = { label: 'Apply to list a project', routerLink: '/projects' };

  currentSlide = 0;
  previousSlide = -1;
  private timer: ReturnType<typeof setInterval> | null = null;
  slideDuration = 6000;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (this.slides.length > 1) {
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
    this.startTimer();
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

  navigateTo(cta: HeroCta): void {
    if (cta.routerLink) {
      window.location.href = cta.routerLink;
    } else if (cta.href) {
      window.location.href = cta.href;
    }
  }
}
