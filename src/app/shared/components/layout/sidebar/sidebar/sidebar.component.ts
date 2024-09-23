import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'sidebar-principal',
    templateUrl: './sidebar.component.html'
})
export class SidebarPrincipal implements OnInit {
    sidebarOpen = true;

    showPages = false;

    constructor(public router: Router) { }

    ngOnInit(): void {
        this.isAuth();
    }

    isActive(route: string): boolean {
        return this.router.url === route;
    }

    toggleSidebar() {
        this.sidebarOpen = !this.sidebarOpen;
    }

    isAuth(){
        const email = localStorage.getItem("email");
        this.showPages = !!email;
    }
}