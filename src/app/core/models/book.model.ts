export type Genre =
  | 'Literary Fiction'
  | 'Historical Fiction'
  | 'Poetry'
  | 'Memoir'
  | 'Thriller'
  | 'Essays';

export interface Book {
  /** Used in the URL — /books/<slug> — keep it lowercase, hyphenated, unique. */
  slug: string;
  title: string;
  author: string;
  genre: Genre;
  year: number;
  price: string;
  /** One or two sentences, shown on the catalog card. */
  synopsis: string;
  /** Longer copy, shown only on the book's own page. */
  description: string;
  isbn: string;
  pages: number;
  formats: string[];
  /** Set true to feature it in the Home page's top row. */
  featured?: boolean;
}
