import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LastTodosComponent } from './components/last-todos/last-todos.component';
import { ListComponent } from './components/list/list.component';
import { ListService } from './services/list.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateTodoComponent, DashboardComponent, LastTodosComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      },
    ]),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ListService]
})
export class DashboardModule { }
