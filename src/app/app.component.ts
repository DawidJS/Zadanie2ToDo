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

  public addTask(): void {
    this.newTask.createdDate = new Date();
    this.newTask.isDone = false;
    this.tasks.push(this.newTask);
    this.newTask = new Task();
  }

  public makeTaskDone(task: Task) {
    task.isDone = true;
    task.finishDate = new Date();
  }

  public makeTaskAvailable(task: Task) {
    task.isDone = false;
    task.finishDate = null;
  }

  public filterTasks(isDone) {
    return this.tasks.filter( x => x.isDone === isDone);
  }

  ngOnInit(): void {
    this.newTask = new Task();
  }


}
