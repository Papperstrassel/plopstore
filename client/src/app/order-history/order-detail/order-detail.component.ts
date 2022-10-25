import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from 'src/app/shared/models/order';
import { BreadcrumbService } from 'xng-breadcrumb';
import { OrderHistoryService } from '../order-history.service';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  order: IOrder;

  constructor(private route: ActivatedRoute, private breadcrumbService: BreadcrumbService, private orderHistoryService: OrderHistoryService) {
    this.breadcrumbService.set('@orderDetail', '');
   }

  ngOnInit() {
    this.orderHistoryService.getOrderDetailed(+this.route.snapshot.paramMap.get('id'))
      .subscribe((order: IOrder) => {
        this.order = order;
        this.breadcrumbService.set('@OrderDetail', `Order# ${order.id} - ${order.status}`);
      }, error => {
        console.log(error);
      });
  }

}
