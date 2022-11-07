export interface IProduct {
    id: number;
    name: string;
    shortDescription: string;
    description: string;
    technicalDescription: string;
    price: number;
    pictureUrl: string;
    productType: string;
    productBrand: string;
    productSKU: number;
    numberOfRatings: number;
    productRatingScore: number;
}

export interface IProductToCreate {
  name: string;
  shortDescription: string;
  description: string;
  technicalDescription: string;
  price: number;
  pictureUrl: string;
  productTypeId: number;
  productBrandId: number;
  productSKU: number;
  numberOfRatings: number;
  productRatingScore: number;
}

export class ProductFormValues implements IProductToCreate {
  name = '';
  shortDescription = '';
  description = '';
  technicalDescription = '';
  price = 0;
  pictureUrl = '';
  productTypeId: number;
  productBrandId: number;
  productSKU: number;
  numberOfRatings: number;
  productRatingScore: number;

  constructor(init?: ProductFormValues) {
    Object.assign(this, init);
  }
}


