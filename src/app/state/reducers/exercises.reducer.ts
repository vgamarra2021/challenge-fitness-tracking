import { createReducer, on } from '@ngrx/store';
import { addExercise } from '../actions/exercises.actions';
import { ExercisesState } from '../exercises.state';

export const initialState: ExercisesState = { exercises: [] };

export const exercisesReducer = createReducer(
  initialState,
  on(addExercise, (state, { exercise }) => {
    console.log(exercise);
    const newState = structuredClone(state);
    newState.exercises.push(exercise);
    console.log(newState);
    return newState;
  })
);
