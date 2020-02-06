import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
// import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {TreeTableModule} from 'primeng/treetable';
import {FileUploadModule} from 'primeng/fileupload';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatOptionModule
} from '@angular/material';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FilesComponent } from 'app/files/files.component';
import { UploadFileComponent } from 'app/upload-file/upload-file.component';
import { FormAgentComponent } from 'app/form-agent/form-agent.component';
import { UserListComponent } from 'app/user-list/user-list.component';
import { FormUserComponent } from 'app/form-user/form-user.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    HttpModule,
    HttpClientModule,
    TreeTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FileUploadModule,
    MatIconModule,
    MatOptionModule
    
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    // MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    FilesComponent,
    UploadFileComponent,
    FormAgentComponent,
    UserListComponent,
    FormUserComponent
  ]
})

export class AdminLayoutModule {}
