import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SimpleComponentsOverviewComponent} from "./components/simple-components-overview/simple-components-overview.component";

const routes: Routes = [{ path: '', component: SimpleComponentsOverviewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleComponentsRoutingModule { }
