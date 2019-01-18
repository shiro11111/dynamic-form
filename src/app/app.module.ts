import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { FormEffects } from './form/form.effects';
import { FormService } from './form/form.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EffectsModule.forRoot([
      FormEffects
    ])
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
