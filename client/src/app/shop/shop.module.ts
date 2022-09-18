import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopRoutingModule } from './shop-routing.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { getBsVer, IBsVersion } from 'ngx-bootstrap/utils';



@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    ProductDetailsComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule,
    AccordionModule.forRoot()
  ]

})
export class ShopModule {
  customClass = 'customClass';
 }
