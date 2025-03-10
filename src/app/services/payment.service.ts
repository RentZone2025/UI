import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { getToken } from './auth.service';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createCheckoutSession() {

    let cartItems = [
      { name: 'Playstation 5 - Hétvégi csomag', price: 20000, quantity: 1},
      { name: 'Hozzáadott játék', price: 2000, quantity: 2, description: "Eredeti: 4000 Ft"},
      { name: 'Szállítás mentesség', price: 0, quantity: 1, description: "Eredeti: 2000 Ft"},
      { name: 'Kaució mentesség', price: 0, quantity: 1, description: "Eredeti: 50000 Ft"},
    ];

    return this.http
      .post(
        `${this.API_URL}/payments/create-checkout-session`,
        {products: cartItems},
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
          //window.location.href = response.url;
        })
      );
  }
}
