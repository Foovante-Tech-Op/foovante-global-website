import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'fv-not-found',
  imports: [RouterLink, NavComponent, FooterComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  constructor() {
    inject(Title).setTitle('Page not found — Foovante Global');
    inject(Meta).updateTag({ name: 'robots', content: 'noindex, nofollow' });
  }
}
