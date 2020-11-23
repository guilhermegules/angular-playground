import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar"

@NgModule({
  declarations: [NavigationMenuComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    NavigationMenuComponent
  ]
})
export class NavigationModule { }
