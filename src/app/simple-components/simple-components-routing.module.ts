import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleComponentsComponent } from './simple-components.component';

const routes: Routes = [{ path: '', component: SimpleComponentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleComponentsRoutingModule { }
