import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { FormService } from './form.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PersonalData } from './personal-data';
import { LoadDataListFail, LoadDataListSuccess, SendData, SendDataSuccess } from './form.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class FormEffects {
  constructor(private actions$: Actions,
              private service: FormService) {
  }

  @Effect() loadList$ = this.actions$.pipe(
    ofType('LOAD_DATA_LIST'),
    switchMap(() => this.service.loadData().pipe(
      map((res: PersonalData[]) => (new LoadDataListSuccess(res))),
      catchError((error: HttpErrorResponse) => of(new LoadDataListFail(error)))
    )));

  @Effect() sendData$ = this.actions$.pipe(
    ofType('SEND_DATA'),
    map((action: SendData) => action.payload as PersonalData[]),
    switchMap((payload: PersonalData[]) => this.service.sendPersonalData(payload).pipe(
      map(() => new SendDataSuccess())
    )));
}
