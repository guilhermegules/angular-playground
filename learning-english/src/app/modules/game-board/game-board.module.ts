import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameBoardRoutingModule } from './game-board-routing.module';
import { PanelComponent } from './components/panel/panel.component';
import { AttemptsComponent } from './components/attempts/attempts.component';
import { ProgressComponent } from './components/progress/progress.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { GameBoardComponent } from './components/game-board/game-board.component';


@NgModule({
  declarations: [
    PanelComponent,
    AttemptsComponent,
    ProgressComponent,
    WrapperComponent,
    GameBoardComponent
  ],
  imports: [
    CommonModule,
    GameBoardRoutingModule
  ]
})
export class GameBoardModule { }
