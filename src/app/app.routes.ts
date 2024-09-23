import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard.component';
import { Task } from './pages/task/task.component';
import { Login } from './pages/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'login',component: Login },
    { path: 'dashboard', component: Dashboard, data: {breadcrumb: 'dashboard'} },
    { path: 'tasks', component: Task, data: {breadcrumb: 'tasks'} },
];
