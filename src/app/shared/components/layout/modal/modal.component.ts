import { Component, OnInit } from '@angular/core';
import { ModalStateService } from '../../../../core/services/state/state-modal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { TaskService } from '../../../../core/services/api/tasks.service';
import { UserModel } from '../../../../core/services/api/model/user.model';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {
  visible: boolean = false;
  taskForm: FormGroup;
  filteredUsers: UserModel[] = [];

  constructor(
    private modalStateService: ModalStateService,
    private taskService: TaskService,
    private fb: FormBuilder
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      detail: ['', Validators.required],
      deadline: ['', Validators.required],
      priority: ['', Validators.required],
      responsible: ['', Validators.required],
      finished: [false]
    });
  }

  ngOnInit() {
    this.modalStateService.modalVisible$.subscribe(isVisible => {
      this.visible = isVisible;
    });

    // Responsável search
    this.taskForm.get('responsible')?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(value => this.taskService.searchUsers(value))
    ).subscribe(users => {
      this.filteredUsers = users;
    });
  }

  hideDialog() {
    this.modalStateService.closeModal();
  }

  selectUser(user: UserModel) {
  this.taskForm.patchValue({ responsible: user.name });
  this.filteredUsers = []; // Esvazia a lista para que ela desapareça
}


  onSubmit() {
    if (this.taskForm.valid) {
      const task = this.taskForm.value;
      this.taskService.createTask(task).subscribe(response => {
        console.log('Tarefa criada com sucesso!', response);
        this.hideDialog();
      });
    }
  }
}
