import { GameResultModule } from './modules/game-result/game-result.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { GameBoardModule } from './modules/game-board/game-board.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameResultModule,
    GameBoardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
