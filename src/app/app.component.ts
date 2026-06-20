import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeoService } from './core/services/seo.service';

@Component({
    selector: 'fv-root',
    imports: [RouterOutlet],
    template: `<router-outlet></router-outlet>`,
    styles: [`:host { display: block; }`]
})
export class AppComponent {
  constructor() {
    inject(SeoService).init();
  }
}
