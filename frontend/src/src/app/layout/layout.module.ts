
import { LayoutHeaderComponent } from './header/header.component';
import { LayoutFooterComponent } from './footer/footer.component';

import { LayoutLeftSideComponent } from './left-side/left-side.component';
import { LayoutControlSidebarComponent } from './control-sidebar/control-sidebar.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LayoutLeftSideComponent,
    LayoutControlSidebarComponent
  ],
  exports: [
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LayoutLeftSideComponent,
    LayoutControlSidebarComponent
  ]
})
export class LayoutModule { }
