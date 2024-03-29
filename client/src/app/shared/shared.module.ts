import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TextInputComponent } from './components/text-input/text-input.component'
import { CdkStep, CdkStepperModule } from '@angular/cdk/stepper';
import { StepperComponent } from './components/stepper/stepper.component';
import { BasketSummaryComponent } from './components/basket-summary/basket-summary.component';
import { RouterModule } from '@angular/router';
import { RatingModule } from 'ngx-bootstrap/rating';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PhotoWidgetComponent } from './components/photo-widget/photo-widget.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {ImageCropperModule} from 'ngx-image-cropper';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent,
    OrderTotalsComponent,
    TextInputComponent,
    StepperComponent,
    BasketSummaryComponent,
    PhotoWidgetComponent,

  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    CdkStepperModule,
    RouterModule,
    RatingModule.forRoot(),
    CurrencyMaskModule,
    NgxGalleryModule,
    TabsModule.forRoot(),
    NgxDropzoneModule,
    ImageCropperModule,
    ToastrModule



  ],
  exports: [
    PaginationModule,
    PagingHeaderComponent,
    PagerComponent,
    CarouselModule,
    OrderTotalsComponent,
    ReactiveFormsModule,
    FormsModule,
    BsDropdownModule,
    TextInputComponent,
    CdkStepperModule,
    StepperComponent,
    BasketSummaryComponent,
    RatingModule,
    CurrencyMaskModule,
    NgxGalleryModule,
    TabsModule,
    NgxDropzoneModule,
    PhotoWidgetComponent,
    ImageCropperModule,
    ToastrModule
  ]
})
export class SharedModule { }
