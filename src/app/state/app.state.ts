import { ActionReducerMap } from '@ngrx/store';
import { ExercisesState } from './exercises.state';
import { exercisesReducer } from './reducers/exercises.reducer';

export interface AppState {
  exercises: ExercisesState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  exercises: exercisesReducer,
};
