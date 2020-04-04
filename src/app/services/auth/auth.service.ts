import {EventEmitter, Injectable, Output} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {LoginDetails, TokenResponse, User, UserRegistrator} from '../../models';
import * as jwt_decode from 'jwt-decode';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.url;
  token = '';
  currentUser: User;
  tokenKey = 'userToken';
  @Output()
  public loggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private router: Router) {
  }

  public getUser(): User {
    const token = this.getToken();
    if (token == null || token === 'null' || token === '') {
      return null;
    }
    const decodedToken = jwt_decode(token);
    this.currentUser = decodedToken.identity;
    if (this.currentUser) {
      return this.currentUser;
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const token = this.getToken();
    if (token == null || token === 'null' || token === '') {
      return false;
    }
    const decodedToken = jwt_decode(token);
    const exp = decodedToken.exp;
    return exp > Date.now() / 1000;
  }

  public register(user: UserRegistrator): void {
    const url = this.baseUrl + '/user/register';
    this.http.post<TokenResponse>(url, user).subscribe(
      data => {
        return this.router.navigate(['/login']);
      },
      error => {
        console.error(error.message);
      }
    );
  }

  public login(loginDetails: LoginDetails): void {
    const url = this.baseUrl + '/user/login';
    this.http.post<TokenResponse>(url, loginDetails).subscribe(
      data => {
        this.saveToken(data.token);
        this.loggedIn.emit(this.isLoggedIn());
        return this.router.navigate(['/']);
      },
      error => {
        console.error('Wrong params', error.message);
      }
    );
  }

  public logout(): void {
    this.token = null;
    this.currentUser = null;
    localStorage.removeItem(this.tokenKey);
    this.loggedIn.emit(false);
  }

  private saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.token = token;
  }

  private getToken(): string {
    this.token = localStorage.getItem(this.tokenKey);
    return this.token;
  }
}
