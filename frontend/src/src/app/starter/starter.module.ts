import { StarterRoutingModule } from './starter-routing/starter-routing.module';
import { StarterControlSidebarComponent } from './starter-control-sidebar/starter-control-sidebar.component';
import { StarterFooterComponent } from './starter-footer/starter-footer.component';
import { StarterContentComponent } from './starter-content/starter-content.component';
import { StarterLeftSideComponent } from './starter-left-side/starter-left-side.component';
import { StarterHeaderComponent } from './starter-header/starter-header.component';
import { StarterComponent } from './starter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { S3TableListComponent } from './s3-table-list/s3-table-list.component';
import { CognitoUserListComponent } from './cognito-user-list/cognito-user-list.component';
import { CognitoUserCreateComponent } from './cognito-user-create/cognito-user-create.component';

@NgModule({
  imports: [
    CommonModule,
    StarterRoutingModule
  ],
  declarations: [
    StarterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterControlSidebarComponent,
    S3TableListComponent,
    CognitoUserListComponent,
    CognitoUserCreateComponent,
  ],
  exports: [StarterComponent]
})
export class StarterModule { }
