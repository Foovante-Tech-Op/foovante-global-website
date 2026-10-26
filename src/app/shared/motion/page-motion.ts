import { DestroyRef, ElementRef, afterNextRender, inject } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const MOTION_OK = '(prefers-reduced-motion: no-preference)';
const EASE = 'power3.out';
const START = 'top 88%';

/** Section intros: eyebrow, heading and side copy rise in one after another. */
const HEADS = '.sec-head, .mrv-block-head, .journey-head, .tr-head, .model-head, .methods-head, .verify-head, .listing-head, .creds-head, .advisors-intro';

/** Two-column intros and standalone panels that reveal as one piece. */
const BLOCKS = [
  '.mission-statement',
  '.mission-body',
  '.prove-grid > *',
  '.what-title',
  '.moat-statement',
  '.moat-lead',
  '.split',
  '.dash-copy > h2',
  '.dash-lead',
  '.dash-mock',
  '.tr-foundation',
  '.letter-in > *',
  '.context-grid > *',
  '.values-grid > :not(.values-list)',
  '.model-grid > *',
  '.t2t-grid > *',
  '.apply-grid > *',
  '.dashboard-cta',
  '.tl-placeholder',
  '.partners-band .eyebrow'
].join(', ');

/** Repeating cards; ScrollTrigger.batch staggers whichever ones enter the viewport together. */
const ITEMS = [
  '.live-strip > div',
  '.stat',
  '.pick',
  '.v-item',
  '.what-card',
  '.advisor',
  '.cred-card',
  '.step',
  '.df-card',
  '.method',
  '.verify-card',
  '.pri',
  '.panel',
  '.moat-card',
  '.meta-cell',
  '.telemetry-card',
  '.formula-card',
  '.stop',
  '.feat',
  '.tl-step',
  '.mt-row',
  '.tr-fig',
  '.fee-list li'
].join(', ');

/** Figures that count up from zero, keeping any prefix/suffix such as "~12 wks" or "3,620 ha". */
const COUNTERS = '.stat .n, .big-n, .dm-n';

/**
 * Scroll-reveal animations for a routed page. Call from the page component's
 * constructor. Everything is scoped to the page's host element, skipped when
 * the visitor prefers reduced motion, and reverted when the page is destroyed.
 */
export function usePageMotion(): void {
  const host = inject(ElementRef<HTMLElement>).nativeElement as HTMLElement;
  const destroyRef = inject(DestroyRef);

  afterNextRender(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia(host);
    mm.add(MOTION_OK, (ctx) => revealPage(host, ctx));
    destroyRef.onDestroy(() => mm.revert());
  });
}

function revealPage(host: HTMLElement, ctx: gsap.Context): () => void {
  const all = (sel: string) => Array.from(host.querySelectorAll<HTMLElement>(sel));
  const cleanups: Array<() => void> = [];

  all(HEADS).forEach(head => {
    gsap.from(head.children, {
      opacity: 0,
      y: 28,
      duration: 0.9,
      stagger: 0.12,
      ease: EASE,
      scrollTrigger: { trigger: head, start: START }
    });
  });

  const blocks = all(BLOCKS);
  blocks.forEach((block, i) => {
    gsap.from(block, {
      opacity: 0,
      y: 36,
      duration: 1,
      // Siblings in the same row enter slightly apart
      delay: blocks[i - 1] === block.previousElementSibling ? 0.12 : 0,
      ease: EASE,
      scrollTrigger: { trigger: block, start: START }
    });
  });

  // Cards inside an animated block already move with it
  const items = all(ITEMS).filter(el => !blocks.some(b => b.contains(el)));
  if (items.length) {
    gsap.set(items, { opacity: 0, y: 40 });
    ScrollTrigger.batch(items, {
      start: START,
      once: true,
      onEnter: batch => ctx.add(() => {
        gsap.to(batch, { opacity: 1, y: 0, duration: 0.85, stagger: 0.1, ease: EASE, overwrite: true });
      })
    });
  }

  all('.cta-in').forEach(cta => {
    gsap.timeline({ scrollTrigger: { trigger: cta, start: 'top 85%' } })
      .from(cta, { opacity: 0, y: 40, scale: 0.97, duration: 1, ease: EASE })
      .from(cta.children, { opacity: 0, y: 20, duration: 0.7, stagger: 0.1, ease: EASE }, 0.25);
  });

  all(COUNTERS).forEach(el => {
    const restore = countUp(el);
    if (restore) cleanups.push(restore);
  });

  // Fonts change line heights, which shifts every trigger below the fold
  document.fonts?.ready.then(() => ScrollTrigger.refresh());

  return () => cleanups.forEach(fn => fn());
}

/** Counts a figure up from zero when it scrolls into view. Returns a function restoring the original text. */
function countUp(el: HTMLElement): (() => void) | null {
  const node = el.childNodes.length === 1 ? el.firstChild : null;
  if (!node || node.nodeType !== Node.TEXT_NODE) return null;

  const original = node.nodeValue ?? '';
  const match = original.match(/^(\D*?)(\d[\d,]*(?:\.\d+)?)([\s\S]*)$/);
  if (!match) return null;

  const [, prefix, digits, suffix] = match;
  // A year like 2028 reads wrong counting up from zero
  if (/^(19|20)\d{2}$/.test(digits)) return null;
  const target = parseFloat(digits.replace(/,/g, ''));
  const decimals = digits.includes('.') ? digits.split('.')[1].length : 0;
  const grouped = digits.includes(',');
  const format = (n: number) => {
    const fixed = n.toFixed(decimals);
    return grouped ? Number(fixed).toLocaleString('en-US', { minimumFractionDigits: decimals }) : fixed;
  };

  const counter = { v: 0 };
  node.nodeValue = prefix + format(0) + suffix;
  gsap.to(counter, {
    v: target,
    duration: 1.6,
    ease: 'power2.out',
    scrollTrigger: { trigger: el, start: START },
    onUpdate: () => { node.nodeValue = prefix + format(counter.v) + suffix; }
  });

  return () => { node.nodeValue = original; };
}
