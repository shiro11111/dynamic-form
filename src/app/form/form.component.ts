import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AppState } from '../app.reducers';
import { select, Store } from '@ngrx/store';
import { LoadDataList, SendData } from './form.actions';
import { Observable } from 'rxjs';
import { PersonalData } from './personal-data';
import { FormState } from './form.reducers';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  dataList$: Observable<PersonalData[]>;

  constructor(private fb: FormBuilder,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.createForm();

    this.dataList$ = this.store.pipe(select('formState')).pipe(
      map((state: FormState) => state && state.dataList));

    this.store.dispatch(new LoadDataList());
  }

  addToField(): void {
    const arr = this.form.get('data') as FormArray;
    arr.push(this.fb.group({
      name: null,
      surname: null,
      address: null
    }));
  }

  private createForm(): void {
    this.form = this.fb.group({
      data: this.fb.array([])
    });
  }

  onSubmit(): void {
    const payload = this.form.get('data').value;
    this.store.dispatch(new SendData(payload));
  }
}


