import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'header-layout',
    templateUrl: './header-layout.component.html'
})
export class HeaderLayout {
    @Input() title!: string;
}