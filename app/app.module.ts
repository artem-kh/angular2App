// Класс AppModule - точка входа в данное приложение 
// Angular модуль - класс с декоратором NgModule

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule],
  declarations: [ AppComponent, LoginComponent ], // корневой компонент данного приложения
  bootstrap:    [ AppComponent ]  // компонент с которого начинается отображение приложения
})

export class AppModule { } 
