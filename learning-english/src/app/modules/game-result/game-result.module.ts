import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameResultRoutingModule } from './game-result-routing.module';
import { WinComponent } from './components/win/win.component';
import { DefeatComponent } from './components/defeat/defeat.component';


@NgModule({
  declarations: [WinComponent, DefeatComponent],
  imports: [
    CommonModule,
    GameResultRoutingModule
  ]
})
export class GameResultModule { }
