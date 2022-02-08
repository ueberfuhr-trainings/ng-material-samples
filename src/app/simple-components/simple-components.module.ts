import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleComponentsRoutingModule } from './simple-components-routing.module';
import { SimpleComponentsOverviewComponent } from './components/simple-components-overview/simple-components-overview.component';
import {MatBadgeModule} from "@angular/material/badge";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    SimpleComponentsOverviewComponent
  ],
  imports: [
    CommonModule,
    SimpleComponentsRoutingModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class SimpleComponentsModule { }
