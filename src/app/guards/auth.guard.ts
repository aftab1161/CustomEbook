import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
    // super(props);

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('currentUser')){

      this.router.navigate(['/user'],{queryParams: { returnUrl: state.url}});
      return false;
    } else if (localStorage.getItem('currentPublisher')){
      this.router.navigate(['/admin'],{queryParams: { returnUrl: state.url}});
      return false;
    }

    return true;;
  }

}
