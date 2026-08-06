import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

interface Milestone {
  year: string;
  text: string;
}

@Component({
  selector: 'forge-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  /** Add, remove, or edit team members here — the About page updates automatically. */
  protected readonly team: TeamMember[] = [
    {
      name: 'Naomi Ferris',
      role: 'Publisher & Editor-in-Chief',
      bio: 'Acquires literary and historical fiction. At Forge since founding it in 2005.',
    },
    {
      name: 'Julian Cho',
      role: 'Senior Editor',
      bio: 'Acquires poetry and essays. Previously an editor at two literary magazines.',
    },
    {
      name: 'Rosa Delgado',
      role: 'Managing Editor',
      bio: 'Runs production and the submissions desk. The first read on every manuscript.',
    },
  ];

  /** A real chronological sequence, so a numbered/dated list is appropriate here. */
  protected readonly milestones: Milestone[] = [
    { year: '2005', text: 'Forge Publishers founded in Providence, Rhode Island.' },
    { year: '2006', text: 'First title published: a debut short-story collection.' },
    { year: '2012', text: 'Poetry list launched with our first annual open reading period.' },
    { year: '2019', text: 'Essays and memoir added as a dedicated list.' },
    { year: '2025', text: 'Forty-plus titles in print across six genres.' },
  ];
}
