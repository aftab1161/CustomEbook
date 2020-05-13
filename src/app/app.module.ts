import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { PublisherBooksComponent } from './pages/publisher-books/publisher-books.component';
import { UserBooksComponent } from './pages/user-books/user-books.component';
import { UserSearchComponent } from './pages/user-search/user-search.component';
import { UploadComponent } from './pages/upload/upload.component';
import {MaterialModule} from './material/material.module';
import { BuildComponent } from './pages/build/build.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {AuthInterceptor} from './interceptor/auth.interceptor';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    MaterialModule,
    DragDropModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    UserLayoutComponent


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
