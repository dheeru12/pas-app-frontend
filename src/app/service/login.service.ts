import { Injectable } from '@angular/core';
import { AuthenticationRequest } from '../model/authentication-request';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticaterUser';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  public loginUser(auth: AuthenticationRequest): Observable<any> {
    return this.http.post<any>(
      'http://localhost:8080/authorization/login',
      auth
    );
  }
}
