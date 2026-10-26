import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from './core/services/seo.service';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
    selector: 'fv-root',
    imports: [RouterOutlet],
    template: `<router-outlet></router-outlet>`,
    styles: [`:host { display: block; }`]
})
export class AppComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);

  constructor() {
    inject(SeoService).init();
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);
    }
  }
}
