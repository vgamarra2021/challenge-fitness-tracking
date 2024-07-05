import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primary-button.component.html',
  styles: [],
})
export class PrimaryButtonComponent {
  @Input() title!: string;
  @Output() onClick = new EventEmitter<void>();
}
