import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ExercisesState } from '../exercises.state';

export const selectExercisesState = (state: AppState) => state.exercises;

export const selectListExercises = createSelector(
  selectExercisesState,
  (state: ExercisesState) => state.exercises
);

export const selectTotalTime = createSelector(
  selectExercisesState,
  (state: ExercisesState) => {
    const totalTime = state.exercises.reduce(
      (acum, exercise) => acum + exercise.timeSeconds,
      0
    );
    return totalTime;
  }
);

export const selectLastExerciseTime = createSelector(
  selectExercisesState,
  (state: ExercisesState) => {
    const [lastExercise] = state.exercises.slice(-1);
    return lastExercise?.date;
  }
);
