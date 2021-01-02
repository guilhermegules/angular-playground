import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { SquareAnimatedComponent } from './square-animated/square-animated.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    SquareAnimatedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
