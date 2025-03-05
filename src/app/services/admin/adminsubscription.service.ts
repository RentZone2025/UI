import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { getToken } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminsubscriptionService {

  private API_URL = environment.apiUrl;
  
  constructor(
    private http: HttpClient
  ) { }

  getSubscriptionPlans() {
    return this.http.get(`${this.API_URL}/admin/subscriptions/plans`, {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    });
  }

  getSubscriptionPlan(id: number) {
    return this.http.get(`${this.API_URL}/admin/subscriptions/plans/${id}`, {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    });
  }

  getSubscriptionPrice(id: number) {
    return this.http.get(`${this.API_URL}/admin/subscriptions/prices/${id}`, {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    });
  }

}
