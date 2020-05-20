import { MoviesModule } from './movies/movies.module';
import { MoviesRegisterComponent } from './movies/movies-register/movies-register.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'filmes',
    pathMatch: 'full',
  },
  {
    path: 'filmes',
    children: [
      {
        path: '',
        component: MoviesListComponent,
      },
      {
        path: 'cadastro',
        component: MoviesRegisterComponent,
        pathMatch: 'full',
      },
    ],
  },
  { path: '**', redirectTo: 'filmes' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MoviesModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
