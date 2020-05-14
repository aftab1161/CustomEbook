import { Component, OnInit } from '@angular/core';
import {PublisherService} from '../../services/publisher.service';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {Constants} from '../../variables/constants';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent implements OnInit {

  user_id: any;
  books = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user_id = Number(localStorage.getItem(Constants.ID));
    this.userService.getBooks(this.user_id).subscribe((event: any) => {
      console.log(event);
      this.books = event;
    });
  }

  download(id: any) {
      window.open(environment.baseUrl + 'download/' + id);
  }

  buy(id: any) {
    this.userService.purchase(id).subscribe();
    this.books.forEach(function(item) {
      if (item.id === id) {
        item.status = 3;
      }
    });
  }
}
