import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  PLATFORM_ID,
  inject
} from '@angular/core';
import gsap from 'gsap';

@Directive({
  selector: '[fvStagger]',
  standalone: true
})
export class FvStaggerDirective implements AfterViewInit, OnDestroy {
  private el = inject(ElementRef<HTMLElement>);
  private platformId = inject(PLATFORM_ID);
  private tween?: gsap.core.Tween;

  @Input('fvStagger') preset: 'fadeUp' | 'fadeLeft' | 'fadeRight' = 'fadeUp';
  @Input() fvStaggerSelector: string | null = '[fv-stagger-child]';
  @Input() fvStaggerDuration = 0.6;
  @Input() fvStaggerGap = 0.1;
  @Input() fvStaggerDistance = 20;
  @Input() fvStaggerDelay = 0;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const children = this.fvStaggerSelector
      ? this.el.nativeElement.querySelectorAll(this.fvStaggerSelector)
      : this.el.nativeElement.children;

    if (!children.length) return;

    const distance = this.fvStaggerDistance;
    let from: gsap.TweenVars;
    switch (this.preset) {
      case 'fadeLeft': from = { opacity: 0, x: -distance }; break;
      case 'fadeRight': from = { opacity: 0, x: distance }; break;
      case 'fadeUp':
      default: from = { opacity: 0, y: distance }; break;
    }

    this.tween = gsap.from(children, {
      ...from,
      duration: this.fvStaggerDuration,
      stagger: this.fvStaggerGap,
      delay: this.fvStaggerDelay,
      ease: 'power3.out'
    });
  }

  ngOnDestroy(): void {
    this.tween?.kill();
  }
}
