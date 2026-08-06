import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BooksService } from '../../core/services/books.service';
import { BookCardComponent } from '../../shared/components/book-card/book-card.component';
import { GENRE_META } from '../../core/data/genres.data';

@Component({
  selector: 'forge-home',
  standalone: true,
  imports: [RouterLink, BookCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly booksService = inject(BooksService);

  protected readonly books = this.booksService.getAll();
  protected readonly featured = this.booksService.getFeatured();
  protected readonly genreEntries = Object.entries(GENRE_META);
}
