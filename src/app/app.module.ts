import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule }   from '@angular/forms';

import { S6Component1Component } from './Scenario6/s6-component1/s6-component1.component';
import { S6Component2Component } from './Scenario6/s6-component2/s6-component2.component';
import { S6Component3Component } from './Scenario6/s6-component3/s6-component3.component';


@NgModule({
  declarations: [
    AppComponent,
    S6Component1Component,
    S6Component2Component,
    S6Component3Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
