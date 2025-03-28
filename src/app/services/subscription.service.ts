import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getToken } from './auth.service';
import { environment } from '../../environments/environment';
import { map, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSubscriptionPlans() {
    return this.http
      .get(`${this.API_URL}/subscriptions/plans`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  createCheckoutSession(price_id: string) {
    return this.http
      .post(
        `${this.API_URL}/subscriptions/create-checkout-session`,
        {
          price_id: price_id,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      )
      .pipe(
        map((response: any) => {
          return response;
        }),
        tap((response: any) => {
          window.location.href = response.url;
        })
      );
  }

  saveSubscription(sessionId: string) {
    return this.http
      .post(
        `${this.API_URL}/subscriptions/`,
        {
          session_id: sessionId,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      )
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  cancelSubscription() {
    return this.http
      .post(`${this.API_URL}/subscriptions/cancel`, {}, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  setPlanData(plans: any, plan: any, subplan: any) {
    localStorage.setItem('plan_data', JSON.stringify({ plans, plan, subplan }));
  }

  getPlanData() {
    return JSON.parse(localStorage.getItem('plan_data') || '{}');
  }
}
