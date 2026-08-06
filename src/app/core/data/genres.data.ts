import { Genre } from '../models/book.model';

/**
 * One entry per genre the catalog uses. Each maps to a CSS custom property
 * declared in src/styles.scss (--color-genre-...), so to change a genre's
 * color, edit it there — everything referencing this map updates together.
 * Add a new genre by adding a case here, a matching --color-genre-* token
 * in styles.scss, and adding the Genre string to core/models/book.model.ts.
 */
export const GENRE_META: Record<Genre, { cssVar: string; blurb: string }> = {
  'Literary Fiction': {
    cssVar: '--color-genre-literary',
    blurb: 'Character-driven novels with ambitious prose.',
  },
  'Historical Fiction': {
    cssVar: '--color-genre-historical',
    blurb: 'Research-grounded stories set against real periods.',
  },
  Poetry: {
    cssVar: '--color-genre-poetry',
    blurb: 'Single-author collections and select anthologies.',
  },
  Memoir: {
    cssVar: '--color-genre-memoir',
    blurb: 'First-person accounts, plainly and carefully told.',
  },
  Thriller: {
    cssVar: '--color-genre-thriller',
    blurb: 'Plot-forward fiction built to keep you up past midnight.',
  },
  Essays: {
    cssVar: '--color-genre-essays',
    blurb: 'Nonfiction collections on culture, craft, and place.',
  },
};
