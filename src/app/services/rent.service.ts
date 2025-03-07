import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { getToken } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class RentService {

  private API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getRents(){
    return this.http.get(`${this.API_URL}/rents/`, {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    })
  }

  getAchivedRents(){
    return this.http.get(`${this.API_URL}/rents/archives`, {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    })
  }

}
