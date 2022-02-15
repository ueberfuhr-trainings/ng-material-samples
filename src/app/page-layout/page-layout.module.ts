import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageLayoutComponent} from './page-layout/page-layout.component';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    PageLayoutComponent
  ],
  exports: [
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule
  ]
})
export class PageLayoutModule {
}
