import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Book } from '../../../core/models/book.model';
import { GENRE_META } from '../../../core/data/genres.data';

@Component({
  selector: 'forge-book-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
  readonly book = input.required<Book>();

  protected readonly genreVar = computed(() => GENRE_META[this.book().genre].cssVar);

  /** Initials shown on the procedural cover, e.g. "The Quiet Furnace" -> "TQF". */
  protected readonly initials = computed(() =>
    this.book()
      .title.split(' ')
      .filter((w) => w.length > 2 || w === w.toUpperCase())
      .slice(0, 3)
      .map((w) => w[0])
      .join('')
      .toUpperCase()
  );
}
