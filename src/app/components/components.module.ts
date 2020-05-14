import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarUserComponent } from './sidebar-user/sidebar-user.component';
import {MaterialModule} from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    MaterialModule
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    SidebarUserComponent
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    SidebarUserComponent
  ]
})
export class ComponentsModule { }
