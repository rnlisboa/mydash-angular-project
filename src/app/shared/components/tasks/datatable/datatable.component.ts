import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../../core/services/api/tasks.service';
import { TaskModel } from '../../../../core/services/api/model/task.model';
import { ModalStateService } from '../../../../core/services/state/state-modal.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html'
})
export class DatatableComponent implements OnInit {
  taskList!: TaskModel[];
  paginatedTasks!: TaskModel[];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  isTitleSortedAsc: boolean = true;
  Math = Math;

  constructor(private service: TaskService, private modalStateService: ModalStateService) {}

  ngOnInit(): void {
    try {
      this.loadTaskList();
    } catch (e) {
      console.log(e);
    }
  }

  loadTaskList() {
    this.service.getAll().subscribe((tasks) => {
      this.taskList = tasks;
      this.updatePaginatedTasks();
    });
  }

  updatePaginatedTasks() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedTasks = this.taskList.slice(startIndex, endIndex);
  }

  goToNextPage() {
    if (this.currentPage < Math.ceil(this.taskList.length / this.itemsPerPage)) {
      this.currentPage++;
      this.updatePaginatedTasks();
    }
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedTasks();
    }
  }

  sortListByTitle(): void {
 
    this.isTitleSortedAsc = !this.isTitleSortedAsc;

    this.taskList.sort((a, b) => {
      if (a.title > b.title) return this.isTitleSortedAsc ? 1 : -1;
      if (a.title < b.title) return this.isTitleSortedAsc ? -1 : 1;
      return 0;
    });

 
    this.updatePaginatedTasks();
  }

  sortListByDate(): void {
 
    this.isTitleSortedAsc = !this.isTitleSortedAsc;

    this.taskList.sort((a, b) => {
      if (a.deadline > b.deadline) return this.isTitleSortedAsc ? 1 : -1;
      if (a.deadline < b.deadline) return this.isTitleSortedAsc ? -1 : 1;
      return 0;
    });

 
    this.updatePaginatedTasks();
  }

  openTaskModal() {
    this.modalStateService.openModal();
}
}
