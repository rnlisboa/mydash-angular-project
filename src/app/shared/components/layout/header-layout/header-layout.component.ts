import { Component, Input, OnInit } from "@angular/core";
import { ModalStateService } from "../../../../core/services/state/state-modal.service";

@Component({
    selector: 'header-layout',
    templateUrl: './header-layout.component.html'
})
export class HeaderLayout {
    @Input() title!: string;

    constructor(private modalStateService: ModalStateService) { }

    openTaskModal() {
        this.modalStateService.openModal();
    }

}