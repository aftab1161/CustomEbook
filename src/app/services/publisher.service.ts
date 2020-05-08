import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Publisher} from '../modals/publisher';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {
  private url = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  add(name: string, user_name: string, password: string) {
    const publisher = new Publisher(name, user_name, password);
    const httpOptions: { headers; observe; } = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      }),
      observe : 'response'
    };

    return this.httpClient.post<any>(this.url + 'publisher', JSON.stringify(publisher), httpOptions);
  }

   public getBooks(publisher_id) {
     return this.httpClient.get(this.url + 'publisher/book/' + publisher_id);
  }
}
