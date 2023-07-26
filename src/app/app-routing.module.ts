import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListShellComponent } from './task-list-shell/task-list-shell.component';
import { TaskEditShellComponent } from './task-edit-shell/task-edit-shell.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'task',
    pathMatch: 'full'
  },
  {
    path: 'task',
    component: TaskListShellComponent

  },

  {
    path: 'task/:id/edit',
    component: TaskEditShellComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
