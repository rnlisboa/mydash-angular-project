import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard.component';
import { Task } from './pages/task/task.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: Dashboard },
    { path: 'tasks', component: Task },
];
