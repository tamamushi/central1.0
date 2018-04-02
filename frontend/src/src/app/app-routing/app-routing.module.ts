import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopComponent } from '../top/top.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'top', pathMatch: 'full' },
      { path: 'top', component: TopComponent },
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
