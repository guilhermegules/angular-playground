import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HookComponent } from './hook/hook.component';
import { IceCreamComponent } from './ice-cream/ice-cream.component';

@NgModule({
  declarations: [
    AppComponent,
    HookComponent,
    IceCreamComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
