import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {UserBooksComponent} from '../../pages/user-books/user-books.component';
import {UserSearchComponent} from '../../pages/user-search/user-search.component';

export const UserLayoutRoutes: Routes = [
  {
    path: '',
    redirectTo: 'userBook',
    pathMatch: 'full',
  },
  { path: 'userBook',      component: UserBooksComponent },
  { path: 'userSearch',   component: UserSearchComponent },
  { path: 'tables',         component: TablesComponent },
  { path: 'icons',          component: IconsComponent },
  { path: 'maps',           component: MapsComponent }
];
