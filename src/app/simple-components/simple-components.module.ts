import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleComponentsRoutingModule } from './simple-components-routing.module';
import { SimpleComponentsComponent } from './simple-components.component';


@NgModule({
  declarations: [
    SimpleComponentsComponent
  ],
  imports: [
    CommonModule,
    SimpleComponentsRoutingModule
  ]
})
export class SimpleComponentsModule { }
