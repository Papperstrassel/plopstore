import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderHistoryComponent } from './order-history.component';
import { OrderHistoryRoutingModule } from './order-history-routing.module';
import { OrderDetailComponent } from './order-detail/order-detail.component';



@NgModule({
  declarations: [
    OrderDetailComponent,
    OrderHistoryComponent
  ],
  imports: [
    CommonModule,
    OrderHistoryRoutingModule

  ]
})
export class OrderHistoryModule { }
