import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class ModalStateService {

  private modalVisibleSubject = new BehaviorSubject<boolean>(false);

  modalVisible$ = this.modalVisibleSubject.asObservable();

  toggleModal() {
    const currentState = this.modalVisibleSubject.value;
    this.modalVisibleSubject.next(!currentState);
  }
  closeModal() {
    this.modalVisibleSubject.next(false);
  }

  openModal() {
    this.modalVisibleSubject.next(true);
  }
}
