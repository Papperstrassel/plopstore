import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from 'src/app/basket/basket.service';
import { IProduct } from 'src/app/shared/models/product';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ShopService } from '../shop.service';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryImageSize, NgxGalleryOptions } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;
  quantity = 1;

  public rate:number;
  public maxRating: number;
  isReadonly = true;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  customClass = 'customClass';


  constructor(private shopService: ShopService, private activateRoute: ActivatedRoute, private bcService: BreadcrumbService,
    private basketService: BasketService) {
    this.bcService.set('@productDetails',' ')
   }

  ngOnInit() {
    this.loadProduct();
    this.generateStarRating();
  }

  initializeGallery() {
    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 5,
        arrowPrevIcon: 'fa fa-arrow-circle-left',
        arrowNextIcon: 'fa fa-arrow-circle-right',
        imageAnimation: NgxGalleryAnimation.Fade,
        imageSize: NgxGalleryImageSize.Contain,
        thumbnailSize: NgxGalleryImageSize.Contain,
        thumbnailsPercent: 16,
        preview: false,

      },
      // max-width 850px
      {
        breakpoint: 850,
        arrowPrevIcon: 'fa fa-chevron-left',
        arrowNextIcon: 'fa fa-chevron-right',
        width: '100%',
        height: '500px',
        imagePercent: 100,
        //thumbnails: false,


      }
    ];
    this.galleryImages = this.getImages();
  }

  getImages() {
    const imageUrls = [];
    for (const photo of this.product.photos) {
      imageUrls.push({
        small: photo.pictureUrl,
        medium: photo.pictureUrl,
        big: photo.pictureUrl,
      });
    }
    return imageUrls;
  }



  generateStarRating() {
    this.rate = this.product.productRatingScore;
  }

  addItemToBasket() {
    this.basketService.addItemToBasket(this.product, this.quantity);
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if(this.quantity > 1) {
      this.quantity--;
    }

  }

  loadProduct() {
    this.shopService.getProduct(+this.activateRoute.snapshot.paramMap.get('id')).subscribe(product => {
      this.product = product;
      this.bcService.set('@productDetails', product.name)
      this.initializeGallery();
    }, error => {
      console.log(error)
    });
  }

}
