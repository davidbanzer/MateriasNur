import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabComponent } from './fab/fab.component';

const PAGES = [FabComponent];

@NgModule({
  declarations: PAGES,
  exports: PAGES,
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
