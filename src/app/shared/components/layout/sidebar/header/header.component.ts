import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'header-sidebar',
    templateUrl: './header.component.html',
})
export class HeaderSidebar {
    @Output() toggle = new EventEmitter<void>();
    @Input() sidebarOpen: boolean = true;
    
    toggleSidebar() {
        this.toggle.emit();
    }
}