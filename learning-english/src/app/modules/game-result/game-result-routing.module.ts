import { DefeatComponent } from './components/defeat/defeat.component';
import { WinComponent } from './components/win/win.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'win', component: WinComponent
  },
  {
    path: 'defeat', component: DefeatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameResultRoutingModule { }
