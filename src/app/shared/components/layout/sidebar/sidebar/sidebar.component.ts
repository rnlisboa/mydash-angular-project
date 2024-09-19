import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'sidebar-principal',
    templateUrl: './sidebar.component.html'
})
export class SidebarPrincipal {
    sidebarOpen = true;

    constructor(private router: Router) { }

    isActive(route: string): boolean {
        console.log(this.router.url)
        return this.router.url === route;
    }

    toggleSidebar() {
        this.sidebarOpen = !this.sidebarOpen;
    }
}