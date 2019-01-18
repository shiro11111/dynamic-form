import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { PersonalData } from './personal-data';

export const SEND_DATA = 'SEND_DATA';
export const SEND_DATA_SUCCESS = 'SEND_DATA_SUCCESS';
export const SEND_DATA_FAIL = 'SEND_DATA_FAIL';
export const LOAD_DATA_LIST = 'LOAD_DATA_LIST';
export const LOAD_DATA_LIST_SUCCESS = 'LOAD_DATA_LIST_SUCCESS';
export const LOAD_DATA_LIST_FAIL = 'LOAD_DATA_LIST_FAIL';

export class SendData implements Action {
  readonly type = SEND_DATA;
  constructor(public payload: PersonalData[]) {}
}

export class SendDataSuccess implements Action {
  readonly type = SEND_DATA_SUCCESS;
  constructor(public payload: any = null) {}
}

export class SendDataFail implements Action {
  readonly type = SEND_DATA_FAIL;
  constructor(public payload: HttpErrorResponse) {}
}

export class LoadDataList implements Action {
  readonly type = LOAD_DATA_LIST;
  constructor(public payload: any = null) {}
}

export class LoadDataListSuccess implements Action {
  readonly type = LOAD_DATA_LIST_SUCCESS;
  constructor(public payload: PersonalData[]) {}
}

export class LoadDataListFail implements Action {
  readonly type = LOAD_DATA_LIST_FAIL;
  constructor(public payload: HttpErrorResponse) {}
}



export type FormActions = SendData | SendDataSuccess | SendDataFail | LoadDataList | LoadDataListSuccess | LoadDataListFail;
