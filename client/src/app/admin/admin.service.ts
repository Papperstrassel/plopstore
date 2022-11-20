import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {ProductFormValues} from '../shared/models/product';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createProduct(product: ProductFormValues, file: File) {

    const formData = new FormData();

    formData.append("name", product.name);
    formData.append("shortDescription", product.shortDescription);
    formData.append("description", product.description);
    formData.append("technicalDescription", product.technicalDescription);
    formData.append("Price", String(product.price));
    formData.append("pictureUrl", product.pictureUrl);
    formData.append("productTypeId", String(product.productTypeId));
    formData.append("productBrandId", String(product.productBrandId));
    formData.append("productSKU", String(product.productSKU));
    formData.append("numberOfRatings", String(product.numberOfRatings));
    formData.append("productRatingScore", String(product.productRatingScore));
    formData.append("file", file);


    return this.http.post(this.baseUrl + 'products', formData);
  }

  updateProduct(product: ProductFormValues, id: number) {
    return this.http.put(this.baseUrl + 'products/' + id, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.baseUrl + 'products/' + id);
  }

  uploadImage(file: File, id: number) {
    const formData = new FormData();
    formData.append('photo', file, 'image.png');
    return this.http.put(this.baseUrl + 'products/' + id + '/photo', formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  deleteProductPhoto(photoId: number, productId: number) {
    return this.http.delete(this.baseUrl + 'products/' + productId + '/photo/' + photoId);
  }

  setMainPhoto(photoId: number, productId: number) {
    return this.http.post(this.baseUrl + 'products/' + productId + '/photo/' + photoId, {});
  }
}
