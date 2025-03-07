import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { getToken } from './auth.service';

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
        'Authorization': `Bearer ${getToken()}`
      }
    })
  }

  changePassword(passwords: any){
    return this.http.post(`${this.API_URL}/users/change-password`, passwords, {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    })
  }

  changeShipping(shipping: any){
    console.log(shipping)
    shipping.postal_code = shipping.postal_code.toString()
    return this.http.post(`${this.API_URL}/users/change-shipping`, shipping, {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    })
  }

  changeBilling(billing: any){
    console.log(billing)
    billing.postal_code = billing.postal_code.toString()
    return this.http.post(`${this.API_URL}/users/change-billing`, billing, {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    })
  }
}