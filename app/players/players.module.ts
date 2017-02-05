import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PlayersComponent} from "./players.component";

// @NgModule - декоратор, который определяет данные для создаваемого модуля.
// Для того чтобы приложение могло выполняться в браузере, текущий модуль (корневой модуль)
// должен выполнить импорт модуля BrowserModule взятого из @angular/platform-browser
// Задача BrowserModule зарегистрировать основные сервис провайдеры приложения,
// а также добавить общие директивы такие как ngIf и ngFor
@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ PlayersComponent ], // корневой компонент данного приложения
})

export class PlayersModule { }