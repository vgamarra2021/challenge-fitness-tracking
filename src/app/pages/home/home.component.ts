import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-ui',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  value: number = 60;
  @Input() exercises!: { name: string; durationInSeconds: number }[];
}
