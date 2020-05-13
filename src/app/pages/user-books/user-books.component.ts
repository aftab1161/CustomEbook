import { Component, OnInit } from '@angular/core';
import {PublisherService} from '../../services/publisher.service';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent implements OnInit {

  user_id = 11;
  books = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getBooks(this.user_id).subscribe((event: any) => {
      console.log(event);
      this.books = event;
    });
  }

  download(id: any) {

  }

  buy(id: any) {

  }
}
