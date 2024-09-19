import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard } from './dashboard/dashboard.component';
import { Task } from './task/task.component';

@NgModule({
  declarations: [
    Dashboard,
    Task
  ],
  imports: [
    CommonModule
   
  ],
  exports: [
    Dashboard,
    Task
  ]
})
export class PagesModule {}
