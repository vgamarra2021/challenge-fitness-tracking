import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      :host {
        @apply flex overflow-hidden w-full h-full
      }
    `,
  ],
})
export class AppComponent {
  title = 'challenge-fitness-tracker';
}
