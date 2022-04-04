import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderHistoryComponent } from './order-history.component';

const routes: Routes = [
  {path: '', component: OrderHistoryComponent},
  {path: ':id', component: OrderDetailComponent, data: {breadcrumb: {alias: 'OrderDetail'}}}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:
  [
    RouterModule
  ]
})
export class OrderHistoryRoutingModule { }
