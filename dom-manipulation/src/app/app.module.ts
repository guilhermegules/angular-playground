import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfDirective } from './directives/if.directive';
import { ForDirective } from './directives/for.directive';
import { SwitchDirective } from './directives/switch.directive';
import { ChildComponent } from './components/child/child.component';
import { SwitchCaseDirective } from './directives/switch-case.directive';

@NgModule({
  declarations: [AppComponent, IfDirective, ForDirective, SwitchDirective, ChildComponent, SwitchCaseDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
