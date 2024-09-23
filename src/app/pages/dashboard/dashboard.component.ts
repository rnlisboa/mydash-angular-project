import { Component, OnInit } from "@angular/core";
import { TaskModel } from "../../core/services/api/model/task.model";
import { TaskService } from "../../core/services/api/tasks.service";
import { UserService } from "../../core/services/api/user.service";
import { UserModel } from "../../core/services/api/model/user.model";
import { Router } from "@angular/router";

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

    user!: UserModel;

    constructor(private service: TaskService, private userService: UserService, private router: Router) {

    }

    ngOnInit(): void {
        this.loadTaskList();
        this.getUser()
    }

    loadTaskList() {
        this.service.getAll().subscribe(((tasks) => {
            this.taskList = tasks;
            this.todoTask = this.getTasksToDo(this.taskList).length;
            this.doneTask = this.getDoneTask(this.taskList).length;
            this.doingTask = this.getDoingTask(this.taskList).length;
            this.lateTask = this.getLateTask(this.taskList).length;
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

    getUser(){
        const email = localStorage.getItem("email");
        if(email){
            this.userService.getUserByEmail(email).subscribe(user => {
                this.user = user;
            })
        } else {
            this.router.navigate(['login']);
        }
    }
}