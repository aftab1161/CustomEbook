import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublisherGuard implements CanActivate {
  constructor(private router: Router) {
    // super(props);

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('currentPublisher')){
      return true;
    }
    this.router.navigate(['/auth'],{queryParams: { returnUrl: state.url}});
    return false;
  }

}
