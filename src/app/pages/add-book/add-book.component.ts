import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';
import {catchError, map} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {

  }

  submit(bookname: string, authors: string, isbn: string, publisher_id: number) {
    console.log('Console');
    this.bookService.add(bookname, authors, isbn, publisher_id).pipe(
      map(event => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        return of(`${bookname} upload failed.`);
      })).subscribe((event: any) => {
      // if (typeof (event) === 'object') {
      console.log(event.body);
      this.router.navigate(['/admin/upload', event.body]);
      // }
    });
  }
}
