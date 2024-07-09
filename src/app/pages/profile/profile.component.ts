import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-ui',
  templateUrl: './profile.component.html',
  styles: [
    `
      :host {
        @apply w-full;
      }
    `,
  ],
})
export class ProfileComponent {}
