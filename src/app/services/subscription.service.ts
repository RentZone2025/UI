import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getToken } from './auth.service';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  createSubscription(){
    return this.http.get(`${this.API_URL}/subscription-checkout`, {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    })
  }

}
