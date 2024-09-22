import { Component, OnInit } from '@angular/core';
import { ModalStateService } from '../../../../core/services/state/state-modal.service';

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {
    visible: boolean = false;

    constructor(private modalStateService: ModalStateService) { }

    ngOnInit() {
        this.modalStateService.modalVisible$.subscribe(isVisible => {
            this.visible = isVisible;
        });
    }

    hideDialog() {
        this.modalStateService.closeModal();
    }
}
