import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICompleteExercise } from 'src/app/interfaces/complete-exercise.interface';
import { AppState } from 'src/app/state/app.state';
import { selectListExercises } from 'src/app/state/selectors/exercises.selector';

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
export class ReportsContainer implements OnInit {
  listExercises$ = new Observable<ICompleteExercise[]>();

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.listExercises$ = this.store.select(selectListExercises);
  }
}
