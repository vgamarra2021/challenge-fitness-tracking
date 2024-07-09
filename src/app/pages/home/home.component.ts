import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IExercise } from 'src/app/interfaces/exercise.interface';

@Component({
  selector: 'app-home-ui',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  @Input() maxTime!: number;
  @Input() formGroup!: FormGroup;
  @Input() exercises!: IExercise[];
  @Input() initButtonTitle!: string;
  @Output() initExercise = new EventEmitter<void>();
  @Output() pauseExercise = new EventEmitter<void>();
  @Output() finishExercise = new EventEmitter<void>();
}
