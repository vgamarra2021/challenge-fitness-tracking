import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styles: [],
})
export class ButtonComponent {
  @Input() title!: string;
  @Input() type?: string;
  @Input() classes?: string;
  @Output() onClick = new EventEmitter<void>();
}
