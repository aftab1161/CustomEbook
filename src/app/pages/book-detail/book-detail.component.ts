import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  private id: string;
  components = [];
  book_name = '';

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.bookService.getComponents(this.id).subscribe((event: any) => {
      console.log(event);
      this.components = event;
      this.book_name = this.components[0].book.book_name;
    });
  }

}
