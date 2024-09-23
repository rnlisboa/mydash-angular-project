import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { UserModel } from "./model/user.model";
import { LoginDTO } from "./dto/login.dto";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUserByEmail(email: string): Observable<UserModel> {
    return this.http.get<UserModel[]>(`${this.userUrl}?email=${email}`).pipe(
      map(users => {
        if (!users.length) {
          throw new Error('User not found');
        }
        return users[0];
      })
    );
  }

  login(credentials: LoginDTO): Observable<boolean> {
    return this.getUserByEmail(credentials.email).pipe(
      map(user => {
        const isAuthenticated = user && user.password === credentials.password;
        if (isAuthenticated) {
          localStorage.setItem('email', credentials.email);
        }
        return isAuthenticated;
      }),
      catchError(() => of(false))
    );
  }
  
  
}
