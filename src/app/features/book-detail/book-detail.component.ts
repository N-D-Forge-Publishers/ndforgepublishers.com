import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { BooksService } from '../../core/services/books.service';
import { GENRE_META } from '../../core/data/genres.data';

@Component({
  selector: 'forge-book-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss',
})
export class BookDetailComponent {
  /** Bound automatically from the :slug route param (withComponentInputBinding). */
  readonly slug = input<string>();

  private readonly booksService = inject(BooksService);
  private readonly titleService = inject(Title);

  protected readonly book = computed(() => {
    const found = this.booksService.getBySlug(this.slug() ?? '');
    if (found) this.titleService.setTitle(`${found.title} — Forge Publishers`);
    return found;
  });

  protected readonly genreVar = computed(() => {
    const b = this.book();
    return b ? GENRE_META[b.genre].cssVar : '--color-genre-literary';
  });

  protected readonly initials = computed(() => {
    const b = this.book();
    if (!b) return '';
    return b.title
      .split(' ')
      .filter((w) => w.length > 2 || w === w.toUpperCase())
      .slice(0, 3)
      .map((w) => w[0])
      .join('')
      .toUpperCase();
  });
}
