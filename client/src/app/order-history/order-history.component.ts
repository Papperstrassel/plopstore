import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder, IOrderItem } from '../shared/models/order';
import { OrderHistoryService } from './order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  orders: IOrder[];
  
  constructor(private orderHistoryService: OrderHistoryService) { }

  ngOnInit() {
    this.getOrders();
    
  }

  getOrders() {
    this.orderHistoryService.getOrdersForUser().subscribe((orders: IOrder[]) => {
      this.orders = orders;
    }, error => {
      console.log(error);
    });
  }
}
