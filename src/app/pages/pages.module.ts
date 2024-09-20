import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard } from './dashboard/dashboard.component';
import { Task } from './task/task.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    Dashboard,
    Task
  ],
  imports: [
    CommonModule,
    SharedModule
],
  exports: [
    Dashboard,
    Task
  ]
})
export class PagesModule {}
