import { Routes } from '@angular/router';

const DEFAULT_DESCRIPTION =
  'Foovante is the verification, marketplace, and capital layer for African carbon. High-integrity carbon credits across energy, forests, and blue carbon.';

const DEFAULT_OG_IMAGE = '/assets/images/logo_2.png';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/about/about.component').then(m => m.AboutComponent),
    data: {
      title: 'Foovante Global — African carbon markets, built right',
      description: DEFAULT_DESCRIPTION,
      ogImage: DEFAULT_OG_IMAGE
    }
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent),
    data: {
      title: 'Home — Foovante Global',
      description: 'Foovante Global — high-integrity African carbon credits across energy, forests, and blue carbon. Live MRV from project to registry.',
      ogImage: DEFAULT_OG_IMAGE
    }
  },
  {
    path: 'funders',
    loadComponent: () =>
      import('./features/funders/funders.component').then(m => m.FundersComponent),
    data: {
      title: 'For Funders — Foovante Global',
      description: 'Buy verified African carbon credits with full provenance — agroforestry, mangroves, solar, and more. CSRD-ready documentation and minimum 25% community benefit-sharing.',
      ogImage: DEFAULT_OG_IMAGE
    }
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/projects.component').then(m => m.ProjectsComponent),
    data: {
      title: 'For Project Developers — Foovante Global',
      description: 'List your African renewable-energy, agriculture, or forestry project on Foovante. Zero documentation to audit-ready in weeks, not years.',
      ogImage: DEFAULT_OG_IMAGE
    }
  },
  {
    path: 'investors',
    loadComponent: () =>
      import('./features/investors/investors.component').then(m => m.InvestorsComponent),
    data: {
      title: 'For Investors — Foovante Global',
      description: 'Back Foovante Global — the verification, marketplace, and capital infrastructure for African carbon. Read the investor brief.',
      ogImage: DEFAULT_OG_IMAGE
    }
  },
  {
    path: 'founder-brief',
    loadComponent: () =>
      import('./features/founder-brief/founder-brief.component').then(m => m.FounderBriefComponent),
    data: {
      title: 'The Founder Brief — Foovante Global',
      description: 'The founder brief: the thesis behind Foovante Global and the operating system for African carbon markets.',
      ogImage: DEFAULT_OG_IMAGE
    }
  },
  {
    path: 'terms-of-service',
    loadComponent: () =>
      import('./features/terms-of-service/terms-of-service.component').then(m => m.TermsOfServiceComponent),
    data: {
      title: 'Terms of Service — Foovante Global',
      description: 'Terms of Service for the Crevy platform — the institutional carbon asset registry operated by Foovante Global Ltd.',
      ogImage: DEFAULT_OG_IMAGE
    }
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./features/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent),
    data: {
      title: 'Privacy Policy — Foovante Global',
      description: 'Privacy Policy for the Crevy platform — how Foovante Global collects, processes, and protects entity data under GDPR and Ghana DPA.',
      ogImage: DEFAULT_OG_IMAGE
    }
  },
  {
    path: 'how-mrv-works',
    loadComponent: () =>
      import('./features/how-mrv-works/how-mrv-works.component').then(m => m.HowMrvWorksComponent),
    data: {
      title: 'How MRV works — Foovante Global',
      description: 'The scientific notebook: Sentinel-2 + SAR + IoT telemetry, Above-Ground Biomass formulas, and the tree-to-token chain of custody on Polygon.',
      ogImage: DEFAULT_OG_IMAGE
    }
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found.component').then(m => m.NotFoundComponent),
    data: {
      title: 'Page not found — Foovante Global',
      description: 'The page you were looking for doesn\'t exist or has moved.',
      ogImage: DEFAULT_OG_IMAGE
    }
  }
];
