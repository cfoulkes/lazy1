import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Lazy1RoutingModule } from './app-routing.module'
import { Lazy1Module } from './lazy1/lazy1.module'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Lazy1RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
