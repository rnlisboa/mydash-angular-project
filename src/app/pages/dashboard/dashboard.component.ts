import { Component, OnInit } from "@angular/core";
import { TaskModel } from "../../core/services/api/model/task.model";
import { TaskService } from "../../core/services/api/tasks.service";

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
})
export class Dashboard implements OnInit {
    todoTask!: number;
    doneTask!: number;
    lateTask!: number;
    doingTask!: number;
    taskList!: TaskModel[];

    constructor(private service: TaskService) {

    }

    ngOnInit(): void {
        this.loadTaskList();
    }

    loadTaskList() {
        this.service.getAll().subscribe(((tasks) => {
            this.taskList = tasks;
            this.todoTask = this.getTasksToDo(this.taskList).length;
            this.doneTask = this.getDoneTask(this.taskList).length;
            this.doingTask = this.getDoingTask(this.taskList).length;
            this.lateTask = this.getLateTask(this.taskList).length;
            console.log(this.taskList.length, this.todoTask, this.doneTask, this.doingTask, this.lateTask)
        }))
    }

    getTasksToDo(taskList: TaskModel[]): TaskModel[] {
        return taskList.filter(t => !t.finished)
    }

    getDoneTask(taskList: TaskModel[]): TaskModel[] {
        return taskList.filter(t => t.finished)
    }

    getDoingTask(taskList: TaskModel[]): TaskModel[] {
        return taskList.filter(t => !t.finished && new Date(t.deadline).getTime() > new Date().getTime())
    }

    getLateTask(taskList: TaskModel[]): TaskModel[] {
        return taskList.filter(t => !t.finished && new Date(t.deadline).getTime() <= new Date().getTime())
    }
}