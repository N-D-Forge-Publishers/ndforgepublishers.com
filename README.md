# Forge Publishers

An Angular website for Forge Publishers: a home page that showcases the
catalog, an About page, a Contact page (with a submissions and rights
section), and a shared header/footer across every page. Each book links
to its own page at `/books/<slug>`.

## Running it

```bash
npm install
npm start
```

Then open `http://localhost:4200`.

To build for production:

```bash
npm run build
```

Output goes to `dist/forge-publishers`.

## Adding a book

Everything about the catalog lives in one file:
`src/app/core/data/books.data.ts`

Copy one of the existing objects, change every field, and give it a
unique `slug` (used in the URL, e.g. `the-quiet-furnace` becomes
`/books/the-quiet-furnace`). It will automatically show up:

- in the "Full Catalog" grid on the home page
- in "Featured Titles" too, if you set `featured: true`
- at its own page, with the description, specs, and formats you gave it

No other file needs to change.

## Adding a genre

1. Add the new genre name to the `Genre` type in
   `src/app/core/models/book.model.ts`.
2. Add a matching entry to `GENRE_META` in
   `src/app/core/data/genres.data.ts` (a CSS variable name and a short
   blurb).
3. Add that CSS variable, with a color, to `:root` in `src/styles.scss`
   (look for the `--color-genre-*` lines).

The genre will then show up automatically in the "What We Publish"
section and get its own color-coded tag on every book that uses it.

## Adding a page

1. Create a component under `src/app/features/<name>/`.
2. Add a route for it in `src/app/app.routes.ts`.
3. Add a link to it in the header
   (`src/app/shared/components/header/header.component.html`) and, if
   it belongs there, the footer too.

## Changing colors and fonts

Everything is driven by CSS custom properties defined once at the top
of `src/styles.scss`, under `:root`. Change a color or font there and
it updates everywhere it's used — no need to hunt through component
files.

## Wiring up the contact form and newsletter signup

Both `src/app/features/contact/contact.component.ts` and
`src/app/shared/components/footer/footer.component.ts` currently just
confirm submission in the UI. Each has a short comment marking where
to plug in a real backend (a form service like Formspree, your own
API, a serverless function, a mailing-list provider, etc.).

## Project structure

```
src/app/
  core/
    models/       TypeScript interfaces (Book, Genre)
    data/         Static data — the book catalog and genre metadata
    services/     BooksService — reads the catalog data
  shared/
    components/   Header, footer, and the reusable book card
  features/
    home/         Home page — hero, featured titles, full catalog, genres
    about/        About page — story, timeline, editorial team
    contact/      Contact page — form, submissions, rights & permissions
    book-detail/  One book's page, at /books/:slug
    not-found/    404 page
```
# ndforgepublishers.com
