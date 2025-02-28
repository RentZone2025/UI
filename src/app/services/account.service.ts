import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

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

  changeShipping(shipping: any){
    return this.http.post(`${this.API_URL}/users/change-shipping`, shipping, {
      headers: {
        'Authorization': `Bearer ${this.getToken()}`
      }
    })
  }

  changeBilling(billing: any){
    return this.http.post(`${this.API_URL}/users/change-billing`, billing, {
      headers: {
        'Authorization': `Bearer ${this.getToken()}`
      }
    })
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

}
