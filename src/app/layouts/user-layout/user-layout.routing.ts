import { Routes } from '@angular/router';

// import { TablesComponent } from '../../pages/tables/tables.component';
import {UserBooksComponent} from '../../pages/user-books/user-books.component';
import {UserSearchComponent} from '../../pages/user-search/user-search.component';
import {BuildComponent} from '../../pages/build/build.component';

export const UserLayoutRoutes: Routes = [
  {
    path: '',
    redirectTo: 'userBook',
    pathMatch: 'full',
  },
  { path: 'userBook',      component: UserBooksComponent },
  { path: 'userSearch',   component: UserSearchComponent },
  { path: 'build',   component: BuildComponent }
  // { path: 'tables',         component: TablesComponent },

];
