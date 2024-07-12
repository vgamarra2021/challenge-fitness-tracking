import { createAction, props } from '@ngrx/store';
import { ICompleteExercise } from 'src/app/interfaces/complete-exercise.interface';

export const addExercise = createAction(
  '[Exercises List] Add Exercise',
  props<{ exercise: ICompleteExercise }>()
);
