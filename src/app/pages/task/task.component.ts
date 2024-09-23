import { Component, OnInit } from "@angular/core";
import { UserService } from "../../core/services/api/user.service";
import { Router } from "@angular/router";
import { UserModel } from "../../core/services/api/model/user.model";

@Component({
    selector: 'task',
    templateUrl: './task.component.html',
})
export class Task implements OnInit {

    user!: UserModel;
    
    constructor(private userService: UserService, private router: Router){

    }

    ngOnInit(): void {
        this.getUser();
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