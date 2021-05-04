import { Injectable } from '@angular/core';
import {UserInterface, UserSignUpInterface} from '../interfaces/user.interface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = null;

  constructor(private http: HttpClient) { }

  login(user: UserInterface): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('/api/auth/login', user)
      .pipe(
        tap(
          ({ token}) => {
            localStorage.setItem('auth-token', token);
            this.setToken(token);
          }
        )
      );
  }

  registration(user: UserSignUpInterface): Observable<UserSignUpInterface> {
    return this.http.post<UserSignUpInterface>('/api/auth/register', user);
  }

  logOut(): void {
    this.setToken(null);
    localStorage.clear();
  }

  getToken(): string {
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  checkToken(): void {
    const token = localStorage.getItem('auth-token');
    if (token != null) {
      this.setToken(token);
    }
  }

  private setToken(token: string): void {
    this.token = token;
  }
}
