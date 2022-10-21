import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopRoutingModule } from './shop-routing.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { getBsVer, IBsVersion } from 'ngx-bootstrap/utils';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasketModule } from '../basket/basket.module';
import { TextFormattingPipe } from 'src/app/shared/Pipes/text-formatting.pipe';





@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    TextFormattingPipe

  ],
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule,
    AccordionModule.forRoot(),
    BasketModule,


  ]

})
export class ShopModule {
  customClass = 'customClass';
 }
