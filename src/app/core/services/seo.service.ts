import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

const SITE_URL = 'https://foovanteglobal.earth';

const DEFAULT_TITLE = 'Foovante Global — African carbon markets, built right';
const DEFAULT_DESCRIPTION =
  'Foovante is the verification, marketplace, and capital layer for African carbon. High-integrity carbon credits across energy, forests, and blue carbon.';
const DEFAULT_OG_IMAGE = '/assets/images/logo_2.png';
const SITE_NAME = 'Foovante Global';

interface RouteSeoData {
  title?: string;
  description?: string;
  ogImage?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private title = inject(Title);
  private meta = inject(Meta);
  private document = inject(DOCUMENT);

  init(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.update());
  }

  private update(): void {
    const data = this.readLeafData();
    const title = data.title ?? DEFAULT_TITLE;
    const description = data.description ?? DEFAULT_DESCRIPTION;
    const ogImage = this.absoluteUrl(data.ogImage ?? DEFAULT_OG_IMAGE);
    const canonical = SITE_URL + this.router.url.split('?')[0].split('#')[0];

    this.title.setTitle(title);

    this.meta.updateTag({ name: 'description', content: description });

    this.setCanonical(canonical);

    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: canonical });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: SITE_NAME });
    this.meta.updateTag({ property: 'og:image', content: ogImage });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: ogImage });
  }

  private readLeafData(): RouteSeoData {
    let route = this.activatedRoute;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return (route.snapshot.data ?? {}) as RouteSeoData;
  }

  private setCanonical(href: string): void {
    let link = this.document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }

  private absoluteUrl(path: string): string {
    if (/^https?:\/\//i.test(path)) return path;
    return SITE_URL + (path.startsWith('/') ? path : '/' + path);
  }
}
