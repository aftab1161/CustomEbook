import { Component, OnInit } from '@angular/core';
import {PublisherService} from '../../services/publisher.service';
import {Router} from '@angular/router';
import {Constants} from '../../variables/constants';

@Component({
  selector: 'app-publisher-books',
  templateUrl: './publisher-books.component.html',
  styleUrls: ['./publisher-books.component.css']
})
export class PublisherBooksComponent implements OnInit {
  publisher_id: any;
  books = [];

  constructor(private publisherService: PublisherService, private router: Router) { }

  ngOnInit(): void {
    this.publisher_id = Number(localStorage.getItem(Constants.ID));
    this.publisherService.getBooks(this.publisher_id).subscribe((event: any) => {
      console.log(event);
      this.books = event;
    });
  }

  upload(id: any) {
    this.router.navigate(['/admin/upload', id]);
  }
}
