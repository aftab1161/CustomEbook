import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../../variables/constants';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.baseUrl;
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private httpClient: HttpClient) { }

  getToken(): string {
    return localStorage.getItem(Constants.TOKEN);
  }

  setToken(token: string): void {
    localStorage.setItem(Constants.TOKEN, token);
  }
  //
  // getTokenExpirationDate(token: string): Date {
  //   const decoded = jwt_decode(token);
  //
  //   if (decoded.exp === undefined) return null;
  //
  //   const date = new Date(0);
  //   date.setUTCSeconds(decoded.exp);
  //   return date;
  // }
  //
  // isTokenExpired(token?: string): boolean {
  //   if(!token) token = this.getToken();
  //   if(!token) return true;
  //
  //   const date = this.getTokenExpirationDate(token);
  //   if(date === undefined) return false;
  //   return !(date.valueOf() > new Date().valueOf());
  // }
  //
  // login(user): Promise<string> {
  //   return this.http
  //     .post(`${this.url}/login`, JSON.stringify(user), { headers: this.headers })
  //     .toPromise()
  //     .then(res => res.text());
  // }

  public login(formData: FormData, publisher: any) {
    if  (publisher) {
      return this.httpClient.post<any>(this.url + 'publisherlogin', formData, {});
    } else {
      return this.httpClient.post<any>(this.url + 'login', formData, {});
    }
  }




  userType() {
    return Constants.USER;
  }

  setUser(username: string) {
    localStorage.setItem(Constants.CURRENT_USER, username);
  }

  setPublisher(username: string) {
    localStorage.setItem(Constants.CURRENT_PUBLISHER, username);
  }

  logout() {
    localStorage.clear();
  }

  setDetails(id: any, name: any) {
    localStorage.setItem(Constants.ID, id);
    localStorage.setItem(Constants.NAME, name);
  }
}
