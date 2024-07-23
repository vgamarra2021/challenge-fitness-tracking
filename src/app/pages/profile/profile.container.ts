import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICompleteExercise } from 'src/app/interfaces/complete-exercise.interface';
import { AppState } from 'src/app/state/app.state';
import {
  selectLastExerciseTime,
  selectTotalTime,
} from 'src/app/state/selectors/exercises.selector';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile.container.html',
  styles: [
    `
      :host {
        @apply h-full;
      }
    `,
  ],
})
export class ProfileContainer {
  totalSeconds$ = new Observable<number>();
  lastExerciseTime$ = new Observable<Date>();

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.totalSeconds$ = this.store.select(selectTotalTime);
    this.lastExerciseTime$ = this.store.select(selectLastExerciseTime);
  }
}
