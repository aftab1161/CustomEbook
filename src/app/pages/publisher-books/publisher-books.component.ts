import { Component, OnInit } from '@angular/core';
import {PublisherService} from '../../services/publisher.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-publisher-books',
  templateUrl: './publisher-books.component.html',
  styleUrls: ['./publisher-books.component.css']
})
export class PublisherBooksComponent implements OnInit {
  publisher_id = 1;
  books = [];

  constructor(private publisherService: PublisherService, private router: Router) { }

  ngOnInit(): void {
    this.publisherService.getBooks(this.publisher_id).subscribe((event: any) => {
      console.log(event);
      this.books = event;
    });
  }

  upload(id: any) {
    this.router.navigate(['/admin/upload', id]);
  }
}
