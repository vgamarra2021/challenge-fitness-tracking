import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ExercisesState } from '../exercises.state';

export const selectExercisesState = (state: AppState) => state.exercises;

export const selectListExercises = createSelector(
  selectExercisesState,
  (state: ExercisesState) => state.exercises
);
