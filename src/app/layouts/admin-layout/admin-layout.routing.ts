import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import {AddBookComponent} from '../../pages/add-book/add-book.component';
import {PublisherBooksComponent} from '../../pages/publisher-books/publisher-books.component';
import {UploadComponent} from '../../pages/upload/upload.component';

export const AdminLayoutRoutes: Routes = [
  {
    path: '',
    redirectTo: 'addBook',
    pathMatch: 'full',
  },
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    { path: 'addBook',         component: AddBookComponent },
    { path: 'publisherBooks',          component: PublisherBooksComponent },
    { path: 'upload/:id',      component: UploadComponent },

];
