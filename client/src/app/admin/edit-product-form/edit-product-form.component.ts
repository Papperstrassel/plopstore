import { Component, Input, OnInit } from '@angular/core';
import {ProductFormValues} from '../../shared/models/product';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from '../admin.service';
import {IBrand} from "@Shared/models/brands";
import {IProductType} from "@Shared/models/productType";

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.scss']
})
export class EditProductFormComponent implements OnInit {
  @Input() product: ProductFormValues;
  @Input() brands: IBrand[];
  @Input() types: IProductType[];

  file: File;
  isEditMode: boolean = false;

  constructor(private route: ActivatedRoute, private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.checkIfEditMode();
  }

  updatePrice(event: any) {
    this.product.price = event;
  }

  onChange(event) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  checkIfEditMode() {
    if(this.route.snapshot.url[0].path === 'edit')
    {
       this.isEditMode = true;
    }
  }

  onSubmit(product: ProductFormValues, file?: File) {
    if (this.route.snapshot.url[0].path === 'edit') {
      const updatedProduct = {...this.product, ...product, price: +product.price};
      this.adminService.updateProduct(updatedProduct, +this.route.snapshot.paramMap.get('id')).subscribe((response: any) => {
        this.router.navigate(['/admin']);
      });
    } else {

      const newProduct = {...product, price: +product.price};
      this.adminService.createProduct(newProduct, this.file).subscribe((response: any) => {
        this.router.navigate(['/admin']);
      });
    }
  }


}
