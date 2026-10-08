import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

export interface NavCta {
  label: string;
  href?: string;
  routerLink?: string;
}

@Component({
    selector: 'fv-nav',
    imports: [RouterLink, RouterLinkActive, NgClass],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss'
})
export class NavComponent {
  @Input() dark = false;
  @Input() cta: NavCta = { label: 'Browse projects', href: '/funders', routerLink: '/funders' };

  menuOpen = false;

  navLinks = [
    { label: 'About',         route: '/' },
    { label: 'For Buyers',   route: '/funders' },
    { label: 'For Projects',  route: '/projects' },
    { label: 'For Investors', route: '/investors' }
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
