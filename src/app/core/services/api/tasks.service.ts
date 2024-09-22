import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TaskModel } from "./model/task.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private apiUrl = 'http://localhost:3000/tasks'
    constructor(private http: HttpClient) {

    }

    getAll(): Observable<TaskModel[]>{
        return this.http.get<TaskModel[]>(this.apiUrl);
    }


}