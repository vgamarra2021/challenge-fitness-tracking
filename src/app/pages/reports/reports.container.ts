import { Component } from '@angular/core';

@Component({
  selector: 'app-reports-container',
  templateUrl: './reports.container.html',
  styles: [
    `
      :host {
        @apply h-full;
      }
    `,
  ],
})
export class ReportsContainer {}
