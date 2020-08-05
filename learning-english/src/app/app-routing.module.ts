import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./modules/game-board/game-board.module').then(m => m.GameBoardModule), pathMatch: 'full'
  },
  {
    path: 'result', loadChildren: () => import('./modules/game-result/game-result.module').then(m => m.GameResultModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
