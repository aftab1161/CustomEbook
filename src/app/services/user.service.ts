import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {User} from '../modals/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }


  add(name: string, user_name: string, password: string, roles: string) {
    const user = new User(name, user_name, password, roles);
    const httpOptions: { headers; observe; } = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      observe : 'response'
    };

    return this.httpClient.post<any>(this.url + 'user', JSON.stringify(user), httpOptions);
  }

  public addBook(userId: number, ids: string, ebookname: string, generatedby: string, toc: any) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('userid', String(userId)).append('ids', ids)
      .append('ebookname', ebookname)
      .append('generatedby', generatedby);
    if (toc) {
      httpParams = httpParams.append('toc', '1');
    } else {
      httpParams = httpParams.append('toc', '0');
    }
    return this.httpClient.get(this.url + 'file?' + httpParams.toString());
  }

  getBooks(user_id: number) {
    return this.httpClient.get(this.url + 'user/ebooks/' + user_id);
  }

  purchase(id) {
    return this.httpClient.get(this.url + 'purchase/' + id);
  }
}
