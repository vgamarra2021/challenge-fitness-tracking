import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { ICompleteExercise } from 'src/app/interfaces/complete-exercise.interface';

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
export class ProfileComponent {
  @Input() totalSeconds$!: Observable<number>;
  @Input() lastExerciseTime$!: Observable<Date>;
}
