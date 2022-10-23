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
  public rate:number;
  public maxRating: number;
  isReadonly = true;

  constructor(private basketService: BasketService) {}

  ngOnInit() {
    this.generateStarRating();

  }

  generateStarRating() {
    this.rate = this.product.productRatingScore;
  }


  addItemToBasket() {
    this.basketService.addItemToBasket(this.product);
  }



}
