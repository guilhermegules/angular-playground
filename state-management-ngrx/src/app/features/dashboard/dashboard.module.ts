import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LastTodosComponent } from './components/last-todos/last-todos.component';
import { ListComponent } from './components/list/list.component';
import { ListService } from './services/list.service';
import { reducer } from './state/list.reducer';
import { ListEffects } from './state/list.effects';

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
    FormsModule,
    // Creating dinamic feature for a respective module
    StoreModule.forFeature('list', reducer),
    EffectsModule.forFeature([ListEffects]),
  ],
})
export class DashboardModule {}
