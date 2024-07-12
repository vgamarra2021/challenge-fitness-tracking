import { ActionReducerMap } from '@ngrx/store';
import { ICompleteExercise } from '../interfaces/complete-exercise.interface';
import { exercisesReducer } from './reducers/exercises.reducer';
import { ExercisesState } from './exercises.state';

export interface AppState {
  exercises: ExercisesState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  exercises: exercisesReducer
};
