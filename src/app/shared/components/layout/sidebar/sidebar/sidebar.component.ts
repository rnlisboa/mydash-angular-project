import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'sidebar-principal',
    templateUrl: './sidebar.component.html'
})
export class SidebarPrincipal {
    sidebarOpen = true;


    constructor(public router: Router) { }


    isActive(route: string): boolean {
        return this.router.url === route;
    }

    toggleSidebar() {
        this.sidebarOpen = !this.sidebarOpen;
    }


}