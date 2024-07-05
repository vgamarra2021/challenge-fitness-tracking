import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      :host {
        @apply overflow-hidden bg-gray-900
      }
    `,
  ],
})
export class AppComponent {
  title = 'challenge-fitness-tracker';
}
