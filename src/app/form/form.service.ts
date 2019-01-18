import { Injectable } from '@angular/core';
import { PersonalData } from './personal-data';
import { Observable, of } from 'rxjs';

Injectable({
  providedIn: 'root'
});

const dataList: PersonalData[] = [];

export class FormService {

  loadData(): Observable<PersonalData[]> {
    return of(dataList);
  }

  sendPersonalData(data: PersonalData[]): Observable<any> {
    data.map((item: PersonalData) => dataList.push(item));
    return of([]);
  }
}
