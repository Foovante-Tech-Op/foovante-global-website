import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/about/about.component').then(m => m.AboutComponent),
    title: 'Foovante Global — African carbon markets, built right'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Foovante Global — African carbon markets, built right'
  },
  {
    path: 'funders',
    loadComponent: () =>
      import('./features/funders/funders.component').then(m => m.FundersComponent),
    title: 'For Funders — Foovante Global'
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/projects.component').then(m => m.ProjectsComponent),
    title: 'For Project Developers — Foovante Global'
  },
  {
    path: 'investors',
    loadComponent: () =>
      import('./features/investors/investors.component').then(m => m.InvestorsComponent),
    title: 'For Investors — Foovante Global'
  },
  {
    path: 'founder-brief',
    loadComponent: () =>
      import('./features/founder-brief/founder-brief.component').then(m => m.FounderBriefComponent),
    title: 'The Founder Brief — Foovante Global'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
