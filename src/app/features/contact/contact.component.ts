import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  reason: string;
  message: string;
}

@Component({
  selector: 'forge-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  protected readonly form: ContactForm = {
    name: '',
    email: '',
    reason: 'General inquiry',
    message: '',
  };

  protected readonly submitted = signal(false);

  /**
   * Wire this up to a real backend or form service (Formspree, a Cloud
   * Function, your own API, etc.) when ready. For now it just confirms
   * the submission in the UI.
   */
  submit(): void {
    if (!this.form.name || !this.form.email || !this.form.message) return;
    this.submitted.set(true);
  }
}
