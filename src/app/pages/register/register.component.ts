import { Component, OnInit } from '@angular/core';
import {PublisherService} from '../../services/publisher.service';
import {catchError, map} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  publisher: any = false;


  constructor(
    private publisherService: PublisherService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register(name: string, username: string, password: string) {
    let registration = true;
    if (this.publisher) {
      this.publisherService.add(name, username, password, 'ROLE_ADMIN').pipe(
        map(event => {
          return event;
        }),
        catchError((error: HttpErrorResponse) => {
          alert('Username already exists');
          registration = false;
          return of(`${name} registration failed.`);
        })).subscribe((event: any) => {
        // if (typeof (event) === 'object') {
        console.log(event.body);
        // this.router.navigate(['/auth/login']);
        // }
      });
    } else {
      this.userService.add(name, username, password, 'ROLE_USER').pipe(
        map(event => {
          return event;
        }),
        catchError((error: HttpErrorResponse) => {
          alert('Username already exists');
          registration = false;
          return of(`${name} registration failed.`);
        })).subscribe((event: any) => {
        // if (typeof (event) === 'object') {
        console.log(event.body);
        // this.router.navigate(['/auth/login']);
        // }
      });
    }
    if (registration) {
      this.router.navigate(['/auth/login']);
    }
  }
}
