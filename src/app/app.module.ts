import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';

import { S4Component1Component } from './Scenario4/s4-component1/s4-component1.component';
import { S4Component2Component } from './Scenario4/s4-component2/s4-component2.component';



@NgModule({
  declarations: [
    AppComponent,
   
    S4Component1Component,
    S4Component2Component,
    
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
