import { Component } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home.container.html',
  styles: [
    `
      :host {
        @apply h-full
      }
    `,
  ],
})
export class HomeContainer {}
