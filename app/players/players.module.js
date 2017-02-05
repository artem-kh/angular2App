"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var players_component_1 = require("./players.component");
// @NgModule - декоратор, который определяет данные для создаваемого модуля.
// Для того чтобы приложение могло выполняться в браузере, текущий модуль (корневой модуль)
// должен выполнить импорт модуля BrowserModule взятого из @angular/platform-browser
// Задача BrowserModule зарегистрировать основные сервис провайдеры приложения,
// а также добавить общие директивы такие как ngIf и ngFor
var PlayersModule = (function () {
    function PlayersModule() {
    }
    return PlayersModule;
}());
PlayersModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [players_component_1.PlayersComponent],
    })
], PlayersModule);
exports.PlayersModule = PlayersModule;
//# sourceMappingURL=players.module.js.map