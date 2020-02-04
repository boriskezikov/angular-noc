import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { CutomerDetailsComponent } from './cutomer-details/cutomer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CutomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
