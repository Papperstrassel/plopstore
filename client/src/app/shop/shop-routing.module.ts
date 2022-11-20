import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  //Use of RouteReuseStrategy to "save" component state when we navigate from shop to individual products to save resources.
  //When we navigate from this path to the id, we save the state.
  {path:'', component: ShopComponent, data: {shouldDetach: true}},
  {path: ':id', component: ProductDetailsComponent, data: {breadcrumb: {alias: 'productDetails'}}},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class ShopRoutingModule { }
