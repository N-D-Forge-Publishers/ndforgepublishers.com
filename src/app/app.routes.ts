import { Routes } from '@angular/router';

/**
 * ADDING A NEW PAGE
 * ------------------
 * 1. Generate/create a component under src/app/features/<name>/
 * 2. Add a route below pointing at it.
 * 3. Add a link to it in shared/components/header (and footer, if it
 *    belongs there too).
 * That's it — no other file needs to change.
 */
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'Forge Publishers — Stories, forged to last.',
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent),
    title: 'About — Forge Publishers',
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact — Forge Publishers',
  },
  {
    path: 'books/:slug',
    loadComponent: () =>
      import('./features/book-detail/book-detail.component').then((m) => m.BookDetailComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent),
    title: 'Page not found — Forge Publishers',
  },
];
