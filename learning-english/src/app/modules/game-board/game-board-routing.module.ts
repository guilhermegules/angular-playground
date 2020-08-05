import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameBoardComponent } from './components/game-board/game-board.component';

const routes: Routes = [
  {
    path: '', component: GameBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameBoardRoutingModule { }
