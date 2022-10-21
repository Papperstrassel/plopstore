import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { IProduct } from 'src/app/shared/models/product';





@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})



export class ProductItemComponent implements OnInit {
  @Input() product: IProduct;

  public textInput:string;

  constructor(private basketService: BasketService) { }

  ngOnInit() {
  }

  addItemToBasket() {
    this.basketService.addItemToBasket(this.product);
  }



}
