import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Book } from '../modals/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public add(book, authors, isbn, publisher_id) {
    const newBook = new Book(book, authors, isbn, publisher_id);
    const httpOptions: { headers; observe; } = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      }),
      observe : 'response'
    };

    return this.httpClient.post<any>(this.url + 'bookauthor', JSON.stringify(newBook), httpOptions);
  }
}
