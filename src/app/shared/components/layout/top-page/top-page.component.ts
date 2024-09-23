import { Component, Input } from "@angular/core";

@Component({
    selector: 'top-page',
    templateUrl: './top-page.component.html'
})
export class TopPageComponent {
    @Input() avatar!: string;
    @Input() nome!: string;
}