"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var task_1 = require("./models/task");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ZadanieNr2ToDo';
        this.tasks = [];
        this.newTask = new task_1.Task();
        this.projects = [];
    }
    AppComponent.prototype.addTask = function () {
        this.newTask.createdDate = new Date();
        this.tasks.push(this.newTask);
        this.newTask = new task_1.Task();
        this.saveStorage();
    };
    AppComponent.prototype.addProject = function (projectName) {
        this.newProject = '';
        this.projects.push(projectName);
        this.saveStorage();
    };
    AppComponent.prototype.makeTaskDone = function (task) {
        task.isDone = true;
        task.finishDate = new Date();
        this.saveStorage();
    };
    AppComponent.prototype.makeTaskAvailable = function (task) {
        task.isDone = false;
        task.finishDate = null;
        this.saveStorage();
    };
    AppComponent.prototype.filterTasks = function (isDone) {
        return this.tasks.filter(function (x) { return x.isDone === isDone; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.newTask = new task_1.Task();
        if (localStorage) {
            var tasks = localStorage.getItem("tasks");
            if (tasks)
                this.tasks = JSON.parse(tasks);
            var projects = localStorage.getItem("projects");
            if (projects)
                this.projects = JSON.parse(projects);
        }
    };
    AppComponent.prototype.saveStorage = function () {
        if (localStorage) {
            localStorage.setItem("tasks", JSON.stringify(this.tasks));
            localStorage.setItem("projects", JSON.stringify(this.projects));
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.less']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
