import { Component } from '@angular/core';

@Component({
  selector: 'app-profile.container',
  templateUrl: './profile.container.html',
  styles: [
    `
      :host {
        @apply h-full
      }
    `,
  ],
})
export class ProfileContainer {

}
