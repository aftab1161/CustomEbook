import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
// import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
// import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AddBookComponent} from '../../pages/add-book/add-book.component';
import {PublisherBooksComponent} from '../../pages/publisher-books/publisher-books.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    // DashboardComponent,
    // UserProfileComponent,
    AddBookComponent,
    PublisherBooksComponent
  ]
})

export class AdminLayoutModule {}
