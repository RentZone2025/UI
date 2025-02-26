import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError, tap, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

interface User {
  id: number;
  fullname: string;
  username: string;
  email: string;
  two_factor_secret: string | null;
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, { email, password }).pipe(
      map((response: any) => response),
      tap(response => {
        localStorage.setItem('temp_user_id', response.user_id);
        if(response['2fa'] == true) this.router.navigate(['/2fa/verify']);
        else {
          this.setToken(response.access_token);
          this.router.navigate(['/account']);
        }
      })
    );
  }

  twofactorverify(two_factor_code: string): Observable<any> {
    let user_id = localStorage.getItem('temp_user_id') || null;
    return this.http.post(`${this.API_URL}/2fa/verify`, { two_factor_code, user_id }).pipe(
      map((response: any) => response),
      tap(response => {
        localStorage.removeItem('temp_user_id');
        this.setToken(response.access_token);
        this.router.navigate(['/account']);
      })
    );
  }

  twofactorsetup(){
    return this.http.get(`${this.API_URL}/2fa/setup`,{
      headers: {
        'Authorization': `Bearer ${this.getToken()}`
      }
    }).pipe(
      map((response: any) => response),
      tap(response => {
        localStorage.setItem('temp_two_factor_secret', response.secret_key);
      })
    );
  }

  twofactorsetupverify(two_factor_code: string): Observable<any> {
    let two_factor_secret = localStorage.getItem('temp_two_factor_secret') || null;
    console.log(two_factor_secret);
    return this.http.post(`${this.API_URL}/2fa/verify-setup`, { two_factor_code, two_factor_secret }, {
      headers: {
        'Authorization': `Bearer ${this.getToken()}`
      }
    }).pipe(
      map((response: any) => response),
      tap(response => {
        localStorage.removeItem('temp_two_factor_secret');
      })
    );
  }

  twofactordeactivate(){
    return this.http.get(`${this.API_URL}/2fa/deactivate`, {
      headers: {
        'Authorization': `Bearer ${this.getToken()}`
      }
    });
  }

  register(fullname: string, username: string, email: string, password: string, password_confirmation: string): Observable<any> {
    return this.http.post<{ user: User }>(`${this.API_URL}/register`, { fullname, username, email, password, password_confirmation }).pipe(
      map((response:any) => response),
      tap(user => {
        this.router.navigate(['/account']);
      })
    );
  }

  forgotpassword(email: string): Observable<any> {
    return this.http.post(`${this.API_URL}/forgot-password`, { email }).pipe(
      map((response: any) => response),
      tap(response => {
        //this.router.navigate(['/login']);
      })
    );
  }

  resetpassword(password: string, password_confirmation: string, token: string, id: string): Observable<any> {
    return this.http.post(`${this.API_URL}/reset-password`, { password, password_confirmation, token, id }).pipe(
      map((response: any) => response),
      tap(response => {
        //this.router.navigate(['/login']);
      })
    );
  }

  updateUser(user: any){
    return this.http.put(`${this.API_URL}/users/${user.id}`, user, {
      headers: {
        'Authorization': `Bearer ${this.getToken()}`
      }
    })
  }

  changePassword(passwords: any){
    return this.http.post(`${this.API_URL}/users/change-password`, passwords, {
      headers: {
        'Authorization': `Bearer ${this.getToken()}`
      }
    })
  }


  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  getCurrentUser(){
    return this.http.get(`${this.API_URL}/user`, {
      headers: {
        'Authorization': `Bearer ${this.getToken()}`
      }
    });
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
  
  logout(): Observable<any> {
    return this.http.get(`${this.API_URL}/logout`, {
      headers: {
        'Authorization': `Bearer ${this.getToken()}`
      }
    }).pipe(
      finalize(() => {
        this.removeToken();
        this.router.navigate(['/login']);
      })
    )
  }

}
