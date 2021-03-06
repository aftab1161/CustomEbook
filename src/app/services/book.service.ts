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
        'Content-Type':  'application/json'
      }),
      observe : 'response'
    };

    return this.httpClient.post<any>(this.url + 'bookauthor', JSON.stringify(newBook), httpOptions);
  }

  public upload(formData: FormData) {
    return this.httpClient.post<any>(this.url + 'upload', formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  public search(key) {
    return this.httpClient.get(this.url + 'keywords/bookComp/' + key);
  }

  public getBook(id) {
    return this.httpClient.get(this.url + 'book/' + id);
  }

  getComponents(id: string) {
    return this.httpClient.get(this.url + 'book/bookComponents/' + id);
  }
}
