import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/user/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/user/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
  { path: '/user/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
  { path: '/user/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
  { path: '/user/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
  { path: '/auth/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
  { path: '/auth/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
];
@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
