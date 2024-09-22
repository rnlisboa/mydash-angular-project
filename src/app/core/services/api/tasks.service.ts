import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TaskModel } from "./model/task.model";
import { Observable } from "rxjs";
import { UserModel } from "./model/user.model";

@Injectable({
    providedIn: 'root'
  })
  export class TaskService {
    private apiUrl = 'http://localhost:3000/tasks';
    private userUrl = 'http://localhost:3000/users';  // Endpoint para buscar usuários
  
    constructor(private http: HttpClient) { }
  
    getAll(): Observable<TaskModel[]> {
      return this.http.get<TaskModel[]>(this.apiUrl);
    }
  
    searchUsers(term: string): Observable<UserModel[]> {
      return this.http.get<UserModel[]>(`${this.userUrl}?name_like=${term}`);
    }
  
    createTask(task: TaskModel): Observable<TaskModel> {
      return this.http.post<TaskModel>(this.apiUrl, task);
    }
  }
  