import * as fromFormState from './form/form.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { formReducer } from './form/form.reducers';

export interface AppState {
  formState: fromFormState.FormState;
}

export const reducers: ActionReducerMap<AppState> = {
  formState: formReducer
};
