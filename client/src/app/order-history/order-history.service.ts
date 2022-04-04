import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IOrder } from '../shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {
  baseUrl = environment.apiUrl;

  

  constructor(private http: HttpClient) { }


  getOrdersForUser() {
    return this.http.get(this.baseUrl + 'order');
  }

  getOrderDetailed(id: number) {
    return this.http.get(this.baseUrl + 'order/' + id);
  }

  
  
  
  
}


