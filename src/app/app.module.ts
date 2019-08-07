import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { S5Component1Component } from './Scenario5/s5-component1/s5-component1.component';
import { S5Component2Component } from './Scenario5/s5-component2/s5-component2.component';
import { S5Component3Component } from './Scenario5/s5-component3/s5-component3.component';


@NgModule({
  declarations: [
    AppComponent,
    
    S5Component1Component,
    S5Component2Component,
    S5Component3Component,
    
   
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
