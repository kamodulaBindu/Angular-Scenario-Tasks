import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './Scenario1/component1/component1.component';
import { S2Component1Component } from './Scenario2/s2-component1/s2-component1.component';
import { FormsModule }   from '@angular/forms';
import { S3Component1Component } from './Scenario3/s3-component1/s3-component1.component';
import { S3Component2Component } from './Scenario3/s3-component2/s3-component2.component';
import { S4Component1Component } from './Scenario4/s4-component1/s4-component1.component';
import { S4Component2Component } from './Scenario4/s4-component2/s4-component2.component';
import { S5Component1Component } from './Scenario5/s5-component1/s5-component1.component';
import { S5Component2Component } from './Scenario5/s5-component2/s5-component2.component';
import { S5Component3Component } from './Scenario5/s5-component3/s5-component3.component';
import { S6Component1Component } from './Scenario6/s6-component1/s6-component1.component';
import { S6Component2Component } from './Scenario6/s6-component2/s6-component2.component';
import { S6Component3Component } from './Scenario6/s6-component3/s6-component3.component';


@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    S2Component1Component,
    S3Component1Component,
    S3Component2Component,
    S4Component1Component,
    S4Component2Component,
    S5Component1Component,
    S5Component2Component,
    S5Component3Component,
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
