import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '../shared/models/brands';
import { IPagination, Pagination } from '../shared/models/pagination';
import { IProductType } from '../shared/models/productType';
import {map} from 'rxjs/operators';
import { ShopParams } from '../shared/models/shopParams';
import { IProduct } from '../shared/models/product';
import { of } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = environment.apiUrl;
  products: IProduct[] = [];
  brands: IBrand[] = [];
  productTypes: IProductType[] = [];
  pagination = new Pagination();
  shopParams = new ShopParams();
  productCache = new Map();
  productTypeIdCheckboxStorage: number[] = [];


  constructor(private http: HttpClient) { }

  getProducts(useCache: boolean) {
    if (useCache === false) {
      this.productCache = new Map(); //Clear cache if decided not to cache things
    }

    if (this.productCache.size > 0 && useCache === true) {
      if (this.productCache.has(Object.values(this.shopParams).join('-'))) {
        this.pagination.data = this.productCache.get(Object.values(this.shopParams).join('-'));
        return of(this.pagination); //If we find a matching key we return the object as observable
      }
    }

    let params = new HttpParams();

    if(this.shopParams.brandIds.length > 0) {
      for(let i = 0; i < this.shopParams.brandIds.length; i++)
      {
        params = params.append('brandIds', this.shopParams.brandIds[i].toString());
      }

    }

    if(this.shopParams.typeIds.length > 0) {
      for(let i = 0; i < this.shopParams.typeIds.length; i++)
      {
        params = params.append('typeIds', this.shopParams.typeIds[i].toString());
      }
    }

      if(this.shopParams.search) {
        params = params.append('search', this.shopParams.search);
      }

      params = params.append('sort', this.shopParams.sort);
      params = params.append('pageIndex', this.shopParams.pageNumber.toString());
      params = params.append('pageIndex', this.shopParams.pageSize.toString());


    return this.http.get<IPagination>(this.baseUrl + 'products', {observe: 'response', params})
      .pipe(
        map(response => {
          this.productCache.set(Object.values(this.shopParams).join('-'), response.body.data); //Cache response from API
          this.pagination = response.body;
          return this.pagination;
        })
      );
  }

  setShopParams(params: ShopParams) {
    this.shopParams = params;

  }

  getShopParams() {
    return this.shopParams;
  }

  getProduct(id: number){
    let product: IProduct;
    this.productCache.forEach((products: IProduct[]) => {
      product = products.find(p => p.id === id)
    })

    if (product) {
      return of(product);
    }

    return this.http.get<IProduct>(this.baseUrl + 'products/' + id);
  }


  getBrands() {
    if (this.brands.length > 0) {
      return of(this.brands);
    }

    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands').pipe(
      map(response => {
        this.brands = response;
        return response;
      })
    )
  }

  getProductTypes() {
    if (this.productTypes.length > 0) {
      return of(this.productTypes);
    }
    return this.http.get<IProductType[]>(this.baseUrl + 'products/types').pipe(
      map(response => {
        this.productTypes = response;
        return response;
      })
    );
  }

  addCheckboxValueProductTypes(event, typeId) {
    if(event.target.checked) {
      this.productTypeIdCheckboxStorage.push(typeId);
    }
    else {
      console.log("This is fired");
      let indexOfTypeId = this.productTypeIdCheckboxStorage.indexOf(typeId);

      this.productTypeIdCheckboxStorage.splice(indexOfTypeId,1);

      // if(indexOfTypeId != -1)
      // {
      //   this.productTypeIdCheckboxStorage.splice(indexOfTypeId,1);
      // }
    }

  }


}
