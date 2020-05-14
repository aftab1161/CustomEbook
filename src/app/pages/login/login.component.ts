import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {catchError, map} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {Router} from '@angular/router';
import {Constants} from '../../variables/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  publisher: any;
  invalid: any;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.invalid = false;
  }
  ngOnDestroy() {
  }

  OnLogIn(username: string, password: string) {
    const formData = new FormData();
    formData.append('username', username); // file is the key in json
    formData.append('password', password);
    this.authService.login(formData, this.publisher)
      .pipe(
        map(event => {
          return event;
        }),
        catchError((error: HttpErrorResponse) => {
          this.invalid = true;
          return of(
            {
              error: true
            }
          );
        })
      ).subscribe((event: any) => {
        console.log(event);
        if (!event.error) {
          this.authService.setToken(event.jwtUtil);
          this.authService.setDetails(event.id, event.name);
          if (event.roles[0] === 'ROLE_USER') {
            this.authService.setUser(event.username);
            this.router.navigate(['/user']);
          } else {
            this.authService.setPublisher(username);
            this.router.navigate(['/admin']);
          }
        }

    });
  }
}
