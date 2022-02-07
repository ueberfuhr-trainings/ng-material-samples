import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: 'simple',
  loadChildren:
    () => import('./simple-components/simple-components.module')
      .then(m => m.SimpleComponentsModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
