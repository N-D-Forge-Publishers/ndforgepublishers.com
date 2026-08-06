import { Injectable, signal } from '@angular/core';
import { BOOKS } from '../data/books.data';
import { Book } from '../models/book.model';

/**
 * Reads from the static BOOKS array today. If the catalog ever moves to a
 * real API, this is the only file that needs to change — swap the signal's
 * source for an HttpClient call and every component keeps working as-is.
 */
@Injectable({ providedIn: 'root' })
export class BooksService {
  private readonly books = signal<Book[]>(BOOKS);

  getAll() {
    return this.books.asReadonly();
  }

  getFeatured(): Book[] {
    return this.books().filter((b) => b.featured);
  }

  getBySlug(slug: string): Book | undefined {
    return this.books().find((b) => b.slug === slug);
  }

  getGenres(): string[] {
    return Array.from(new Set(this.books().map((b) => b.genre)));
  }
}
