import {
  FormActions,
  LOAD_DATA_LIST,
  LOAD_DATA_LIST_FAIL,
  LOAD_DATA_LIST_SUCCESS,
  SEND_DATA,
  SEND_DATA_FAIL,
  SEND_DATA_SUCCESS
} from './form.actions';
import { PersonalData } from './personal-data';

export interface FormState {
  personalData: PersonalData;
  dataList: PersonalData[];
}

const initialState: FormState = {
  personalData: null,
  dataList: []
};

export function formReducer (state = initialState, action: FormActions) {
  switch (action.type) {
    case SEND_DATA:
      return {
        ...state,
      };
    case SEND_DATA_SUCCESS:
      return {
        ...state,
        personalData: action.payload
      };
    case SEND_DATA_FAIL:
      return {
        ...state
      };
    case LOAD_DATA_LIST:
      return {
        ...state
      };
    case LOAD_DATA_LIST_SUCCESS:
      return {
        ...state,
        dataList: action.payload
      };
    case LOAD_DATA_LIST_FAIL:
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
}
