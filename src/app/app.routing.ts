import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import {UserLayoutComponent} from './layouts/user-layout/user-layout.component';
import {UserGuard} from './guards/user.guard';
import {PublisherGuard} from './guards/publisher.guard';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  }, {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
    ],
    canActivate: [PublisherGuard]
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/user-layout/user-layout.module#UserLayoutModule'
      }
    ],
    canActivate: [UserGuard]
  },

  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ],
    canActivate: [AuthGuard]
  }, {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes
    //   , {
    //   useHash: true
    // }
    )
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
