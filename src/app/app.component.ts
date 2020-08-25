import { Component, OnInit } from '@angular/core';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'ZadanieNr2ToDo';

  public tasks: Task[] = [];
  public newTask = new Task();
  public projects: string[] = [];
  public newProject: string;

  public addTask(): void {
    this.newTask.createdDate = new Date();
    this.tasks.push(this.newTask);
    this.newTask = new Task();
    this.saveStorage();
  }


  public addProject(projectName: string): void {
    this.newProject = '';
    this.projects.push(projectName);
    this.saveStorage();
  }

  public makeTaskDone(task: Task) {
    task.isDone = true;
    task.finishDate = new Date();
    this.saveStorage();
  }

  public makeTaskAvailable(task: Task) {
    task.isDone = false;
    task.finishDate = null;
    this.saveStorage();
  }

  public filterTasks(isDone) {
    return this.tasks.filter(x => x.isDone === isDone);
  }

  ngOnInit(): void {
    this.newTask = new Task();
    if (localStorage) {
      let tasks = localStorage.getItem("tasks");
      if (tasks) this.tasks = JSON.parse(tasks);

      let projects = localStorage.getItem("projects");
      if (projects) this.projects = JSON.parse(projects);
    }
  }

  private saveStorage(): void {
    if (localStorage) {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
      localStorage.setItem("projects", JSON.stringify(this.projects));
    }
  }


}
