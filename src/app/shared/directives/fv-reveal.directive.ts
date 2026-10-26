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
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Directive({
  selector: '[fvReveal]',
  standalone: true
})
export class FvRevealDirective implements AfterViewInit, OnDestroy {
  private el = inject(ElementRef<HTMLElement>);
  private platformId = inject(PLATFORM_ID);
  private st?: ScrollTrigger;

  @Input('fvReveal') preset: 'fade' | 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' = 'fadeUp';
  @Input() fvRevealDelay = 0;
  @Input() fvRevealDuration = 0.7;
  @Input() fvRevealStagger = 0;
  @Input() fvRevealDistance = 24;
  @Input() fvRevealOnce = true;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    gsap.registerPlugin(ScrollTrigger);

    const target = this.getTarget();
    const from = this.buildFrom(this.getTargetLength(target));

    const tween = gsap.from(target, {
      ...from,
      duration: this.fvRevealDuration,
      delay: this.fvRevealDelay,
      stagger: this.fvRevealStagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: this.el.nativeElement,
        start: 'top 85%',
        toggleActions: this.fvRevealOnce ? 'play none none none' : 'play reverse play reverse',
        onEnter: () => {},
      }
    });

    this.st = tween.scrollTrigger as ScrollTrigger;
  }

  ngOnDestroy(): void {
    this.st?.kill();
  }

  private getTarget(): Element | NodeListOf<Element> | HTMLElement {
    const element = this.el.nativeElement;
    const children = element.querySelectorAll('[fv-reveal-child]');
    return children.length ? (children as NodeListOf<Element>) : element;
  }

  private getTargetLength(target: Element | NodeListOf<Element> | HTMLElement): number {
    return target instanceof NodeList ? target.length : 1;
  }

  private buildFrom(length: number): gsap.TweenVars {
    const distance = this.fvRevealDistance;
    switch (this.preset) {
      case 'fade': return { opacity: 0, y: 0 };
      case 'fadeLeft': return { opacity: 0, x: -distance };
      case 'fadeRight': return { opacity: 0, x: distance };
      case 'scale': return { opacity: 0, scale: 0.92 };
      case 'fadeUp':
      default: return { opacity: 0, y: distance };
    }
  }
}
