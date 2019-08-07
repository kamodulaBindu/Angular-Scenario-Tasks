import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { S3Component1Component } from './Scenario3/s3-component1/s3-component1.component';
import { S3Component2Component } from './Scenario3/s3-component2/s3-component2.component';


@NgModule({
  declarations: [
    AppComponent,
    S3Component1Component,
    S3Component2Component,
    
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
