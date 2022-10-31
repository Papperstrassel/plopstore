import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IBrand } from '../shared/models/brands';
import { IProduct } from '../shared/models/product';
import { IProductType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';
import { ShopService } from './shop.service';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],

  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('250ms ease-in-out'))
    ]),

    trigger('slideInOut_mobile_filter', [
      state('in_filter', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out_filter', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('in_filter => out_filter', animate('300ms ease-in-out')),
      transition('out_filter => in_filter', animate('250ms ease-in-out'))
    ]),
  ]

})
export class ShopComponent implements OnInit {
  @ViewChild('search', {static: false}) searchTerm: ElementRef;
  products: IProduct[];
  brands: IBrand[];
  productTypes: IProductType[];
  shopParams: ShopParams;
  totalCount: number;

  temporaryArrayFilter : any [];

  customClass = 'customClass';

  //animation testing

  public menuState:string = 'out';
  public mobileFilterMenuState:string = 'out_filter';

  //animation testing


  sortOptions = [
    //Leaving out Alphapetical sorting for now
    //{name: 'Alphabetical', value: 'name'},
    {name: 'Price: Low to High', value: 'priceAscending'},
    {name: 'Price: High to Low', value: 'priceDescending'}
  ];

  constructor(private shopService: ShopService) {
    this.shopParams = this.shopService.getShopParams();
   }

   //animation testing
   public toggleMobileFilterMenu() {
    this.mobileFilterMenuState = this.mobileFilterMenuState === 'out_filter' ? 'in_filter' : 'out_filter';
  }

   public toggleMenu(){
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
   //animation testing end

  ngOnInit()  {
    this.getProducts(true);
    this.getBrands();
    this.getProductTypes();
  }

  getProducts(useCache = false) {
    this.shopService.getProducts(useCache).subscribe(response => {
      this.products = response.data;
      this.totalCount = response.count;

    }, error => {
      console.log(error);
    });
  }

  getBrands() {
    this.shopService.getBrands().subscribe(response => {
      this.brands = [{id: 0, name: 'All'}, ...response];
    }, error => {
      console.log(error);
    });
  }

  getProductTypes() {
    this.shopService.getProductTypes().subscribe(response => {
      this.productTypes = [{id: 0, name: 'All'}, ...response];
    }, error => {
      console.log(error);
    });
  }

  onBrandSelected(brandId: number) {
    const params = this.shopService.getShopParams();
    params.brandIds.push(brandId);
    params.pageNumber = 1;
    this.shopService.setShopParams(params);
    this.getProducts();
  }

  onTypeSelected(typeId: number){
    const params = this.shopService.getShopParams();
    params.typeIds.push(typeId);
    params.pageNumber = 1;
    this.shopService.setShopParams(params);
    this.getProducts();
  }

  //Filter Checkbox testing
  getCheckboxValuesForProductTypes(event, typeId){
    const params = this.shopService.getShopParams();
    if(event.target.checked){
      params.typeIds.push(typeId);
    }
    else {
      let indexOfTypeId = params.typeIds.indexOf(typeId);

      if(indexOfTypeId != -1)
      {
        params.typeIds.splice(indexOfTypeId,1);
      }
    }
    params.pageNumber = 1;
    this.shopService.setShopParams(params);
    this.getProducts();

  }

  getCheckboxValuesForBrandTypes(event, brandId){
    const params = this.shopService.getShopParams();
    if(event.target.checked){
      params.brandIds.push(brandId);
    }
    else {
      let indexOfBrandId = params.brandIds.indexOf(brandId);

      if(indexOfBrandId != -1)
      {
        params.brandIds.splice(indexOfBrandId,1);
      }
    }
    params.pageNumber = 1;
    this.shopService.setShopParams(params);
    this.getProducts();

  }

  //End of filter testing



  onSortSelected(sort: string){
    const params = this.shopService.getShopParams();
    params.sort = sort;
    this.shopService.setShopParams(params);
    this.getProducts();
  }

  onPageChanged(event: any){
    const params = this.shopService.getShopParams();
    if(params.pageNumber !== event) {
      params.pageNumber = event;
      this.shopService.setShopParams(params);
      this.getProducts(true);
    }

  }

  onSearch(){
    const params = this.shopService.getShopParams();
    params.search = this.searchTerm.nativeElement.value;
    params.pageNumber = 1;
    this.shopService.setShopParams(params);
    this.getProducts();
  }

  onReset() {
    this.searchTerm.nativeElement.value = '';
    this.shopParams = new ShopParams();
    this.shopService.setShopParams(this.shopParams);
    this.getProducts();
  }

}
