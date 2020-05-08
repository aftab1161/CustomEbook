import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {UserLayoutRoutes} from './user-layout.routing';
import {UserBooksComponent} from '../../pages/user-books/user-books.component';
import {UserSearchComponent} from '../../pages/user-search/user-search.component';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatIconModule} from '@angular/material/icon';
// import { MatButtonModule} from '@angular/material/button';
// import {MatInputModule} from '@angular/material/input';
import {MaterialModule} from '../../material/material.module'


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    MaterialModule
    // MatFormFieldModule,
    // MatIconModule,
    // MatButtonModule,
    // MatInputModule,
  ],
  declarations: [
    UserBooksComponent,
    UserSearchComponent,
  ]
})

export class UserLayoutModule {}
