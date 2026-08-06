import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'forge-footer',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly year = new Date().getFullYear();
  protected email = '';
  protected readonly subscribed = signal(false);

  /**
   * Wire this up to a real mailing-list provider (Mailchimp, Buttondown,
   * etc.) when ready. For now it just confirms the submission in the UI.
   */
  subscribe(): void {
    if (!this.email.trim()) return;
    this.subscribed.set(true);
    this.email = '';
  }
}
