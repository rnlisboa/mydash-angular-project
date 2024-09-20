import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard } from './dashboard/dashboard.component';
import { Task } from './task/task.component';
import { SharedModule } from "../shared/shared.module";
import { ChartLine } from "../shared/components/dashboard/chart/chat.component";

@NgModule({
  declarations: [
    Dashboard,
    Task
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChartLine
],
  exports: [
    Dashboard,
    Task
  ]
})
export class PagesModule {}
