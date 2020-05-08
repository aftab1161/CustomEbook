import { Component, OnInit } from '@angular/core';
import {PublisherService} from '../../services/publisher.service';
import {catchError, map} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  publisher: any;

  constructor(private publisherService: PublisherService) { }

  ngOnInit() {
  }

  register(name: string, user_name: string, password: string) {
    this.publisherService.add(name, user_name, password).pipe(
      map(event => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        return of(`${name} registration failed.`);
      })).subscribe((event: any) => {
      // if (typeof (event) === 'object') {
      console.log(event.body);
      // this.router.navigate(['/upload',event.body]);
      // }
    });
  }
}
