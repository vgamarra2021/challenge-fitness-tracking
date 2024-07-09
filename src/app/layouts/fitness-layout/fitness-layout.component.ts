import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { NavBarComponent } from 'src/app/shared/nav-bar/nav-bar.component';

@Component({
  selector: 'app-fitness-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, NavBarComponent],
  templateUrl: './fitness-layout.component.html',
  styles: [
    `
      :host {
        @apply flex flex-col h-full w-full;
      }
    `,
  ],
})
export class FitnessLayoutComponent {}
