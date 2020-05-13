import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = 'api/auth';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private TOKEN_NAME: string;

  constructor(private httpClient: HttpClient) { }

  // getToken(): string {
  //   return localStorage.getItem(this.TOKEN_NAME);
  // }
  //
  // setToken(token: string): void {
  //   localStorage.setItem(this.TOKEN_NAME, token);
  // }
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


}
