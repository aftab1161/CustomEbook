import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {AddBookComponent} from '../../pages/add-book/add-book.component';
import {PublisherBooksComponent} from '../../pages/publisher-books/publisher-books.component';

export const AdminLayoutRoutes: Routes = [
  {
    path: '',
    redirectTo: 'addBook',
    pathMatch: 'full',
  },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'addBook',         component: AddBookComponent },
    { path: 'publisherBooks',          component: PublisherBooksComponent },
    { path: 'maps',           component: MapsComponent }
];
