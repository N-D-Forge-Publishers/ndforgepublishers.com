import { Book } from '../models/book.model';

/**
 * THE CATALOG
 * ------------
 * This array is the entire book list for the site. To publish a new title,
 * copy one of the objects below, change every field, and give it a unique
 * `slug`. It will automatically appear:
 *   - on the Home page catalog grid
 *   - at its own page, /books/<slug>
 * Set `featured: true` to also show it in the Home page's top row.
 * No other file needs to change.
 */
export const BOOKS: Book[] = [
  {
    slug: 'the-quiet-furnace',
    title: 'The Quiet Furnace',
    author: 'Mira Ashworth',
    genre: 'Literary Fiction',
    year: 2025,
    price: '$24.00',
    synopsis:
      'A foundry town empties out over one long winter, and the family that owns it has to decide what, if anything, is worth keeping.',
    description:
      'When the last furnace at Kesler Iron goes cold, three generations of the Kesler family are forced back under one roof for the first time in a decade. Told across a single winter and narrated in turns by a daughter who left, a father who stayed, and a grandmother who remembers when the town had a reason to exist, The Quiet Furnace is a patient, unsentimental novel about what a place owes the people who built it — and what they owe it back.',
    isbn: '978-1-64872-101-4',
    pages: 328,
    formats: ['Hardcover', 'Paperback', 'E-book'],
    featured: true,
  },
  {
    slug: 'salt-and-iron',
    title: 'Salt and Iron',
    author: 'Callum Reyes',
    genre: 'Historical Fiction',
    year: 2024,
    price: '$27.50',
    synopsis:
      'A blacksmith and a salt merchant build an unlikely partnership on a contested 17th-century coastline.',
    description:
      'Along a stretch of coast claimed by three competing crowns, a blacksmith exiled for his politics and a salt merchant hiding a debt she cannot repay strike a bargain that will either save both their households or ruin them completely. Drawing on years of archival research, Salt and Iron reconstructs the working life of a period rarely written about from the trades up rather than the throne down.',
    isbn: '978-1-64872-102-1',
    pages: 412,
    formats: ['Hardcover', 'Paperback', 'E-book', 'Audiobook'],
    featured: true,
  },
  {
    slug: 'autumn-ledger',
    title: 'Autumn Ledger',
    author: 'Priya Natarajan',
    genre: 'Poetry',
    year: 2025,
    price: '$18.00',
    synopsis:
      "A debut collection that keeps accounts — of harvests, of debts, of a mother's hands — in short, exact lines.",
    description:
      "Autumn Ledger arrives in four sections, each structured like an entry in a household book: what came in, what went out, what was owed, what was forgiven. Natarajan writes in short, unadorned lines that build, poem by poem, into a record of a family's working year. Widely circulated in journals before this debut, her work has been praised for its restraint and its precision.",
    isbn: '978-1-64872-103-8',
    pages: 96,
    formats: ['Paperback', 'E-book'],
    featured: true,
  },
  {
    slug: 'the-long-apprenticeship',
    title: 'The Long Apprenticeship',
    author: 'Daniel Okafor',
    genre: 'Memoir',
    year: 2023,
    price: '$26.00',
    synopsis:
      'Fifteen years learning a trade from a master who almost never spoke — and what silence taught him anyway.',
    description:
      'Daniel Okafor spent his twenties and thirties apprenticed to a furniture maker who believed a tool explained more than a sentence ever could. The Long Apprenticeship is his account of that education: the failures, the years of repetition, and the slow realization that patience was the actual subject being taught. It is a memoir about work, mentorship, and the kind of knowledge that only comes from doing something badly for a very long time.',
    isbn: '978-1-64872-104-5',
    pages: 256,
    formats: ['Hardcover', 'E-book', 'Audiobook'],
  },
  {
    slug: 'nine-doors-north',
    title: 'Nine Doors North',
    author: 'Elin Vasko',
    genre: 'Thriller',
    year: 2025,
    price: '$22.00',
    synopsis:
      "A locksmith who never asks questions finally asks one — and every door she's ever opened becomes a liability.",
    description:
      "For nine years, Ren Kovacs has made a good, quiet living opening doors for people who pay her not to ask why. When a routine job turns up a body, the questions she's spent a career avoiding become impossible to put off. Nine Doors North moves between nine break-ins, each one narrowing the list of people Ren can still trust — including, increasingly, herself.",
    isbn: '978-1-64872-105-2',
    pages: 344,
    formats: ['Hardcover', 'Paperback', 'E-book', 'Audiobook'],
    featured: true,
  },
  {
    slug: 'the-cartographers-debt',
    title: "The Cartographer's Debt",
    author: 'Soo-Min Park',
    genre: 'Literary Fiction',
    year: 2022,
    price: '$25.00',
    synopsis:
      'A mapmaker is commissioned to survey a border that both governments deny exists.',
    description:
      "Hired by two governments who each insist the other doesn't know the job is happening, a mapmaker spends a season surveying a mountain border that appears on no official document. The Cartographer's Debt is a spare, exact novel about the lines we draw to make land — and each other — legible, and what gets lost in the act of drawing them.",
    isbn: '978-1-64872-106-9',
    pages: 288,
    formats: ['Paperback', 'E-book'],
  },
  {
    slug: 'under-a-working-sky',
    title: 'Under a Working Sky',
    author: 'Thomas Grieve',
    genre: 'Essays',
    year: 2024,
    price: '$23.50',
    synopsis:
      'Twelve essays on trades, tools, and the disappearing vocabulary of physical work.',
    description:
      'From a shift on a fishing boat to a week shadowing a glassblower, Under a Working Sky collects twelve essays written from inside jobs that are rarely written about with any care. Grieve is less interested in nostalgia than in precision: what a trade actually requires, in the body and in the head, and what is lost when that knowledge has nowhere left to be passed on.',
    isbn: '978-1-64872-107-6',
    pages: 232,
    formats: ['Paperback', 'E-book'],
  },
  {
    slug: 'the-tempering',
    title: 'The Tempering',
    author: 'Adaeze Chukwu',
    genre: 'Literary Fiction',
    year: 2023,
    price: '$24.50',
    synopsis:
      "Three former classmates, one inherited workshop, and a year to decide who it actually belongs to.",
    description:
      "When a metalworking studio is left jointly to three people who haven't spoken since school, the terms of the will require them to run it together for a year before selling. The Tempering follows that year in alternating voices, as old resentments are worked over like the studio's own materials — heated, hammered, and, slowly, reshaped into something none of them expected to keep.",
    isbn: '978-1-64872-108-3',
    pages: 302,
    formats: ['Hardcover', 'Paperback', 'E-book'],
  },
];
