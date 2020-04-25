import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiModule } from 'angular-client';
import { HttpClientModule } from '@angular/common/http';
import { ListBurgersComponent } from './list-burgers/list-burgers.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBurgersComponent
  ],
  imports: [
    BrowserModule,
    ApiModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
