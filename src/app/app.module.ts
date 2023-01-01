import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './feture/child/child.component';
import { Child2Component } from './feture/child2/child2.component';
import { HomeComponent } from './shared/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Child2Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("App Module Running")
  }
 }
