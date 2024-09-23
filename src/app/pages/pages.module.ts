import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard } from './dashboard/dashboard.component';
import { Task } from './task/task.component';
import { SharedModule } from "../shared/shared.module";
import { ChartLine } from "../shared/components/dashboard/chart/chat.component";
import { Login } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Dashboard,
    Task,
    Login
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChartLine,
    ReactiveFormsModule
],
  exports: [
    Dashboard,
    Task,
    Login
  ]
})
export class PagesModule {}
