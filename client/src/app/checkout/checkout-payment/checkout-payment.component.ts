import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket';
import { IOrder } from 'src/app/shared/models/order';
import { CheckoutService } from '../checkout.service';

declare var Stripe;

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss']
})
export class CheckoutPaymentComponent implements AfterViewInit, OnDestroy {
  @Input() checkoutForm: FormGroup;
  @ViewChild('cardNumber', {static: true}) cardNumberElement: ElementRef;
  @ViewChild('cardExpiry', {static: true}) cardExpiryElement: ElementRef;
  @ViewChild('cardCvc', {static: true}) cardCvcElement: ElementRef;
  stripe: any;
  cardNumber: any;
  cardExpiry: any;
  cardCvc: any;
  cardErrors: any;
  cardHandler = this.onChange.bind(this);
  loading = false;
  //Used to listen in to event to disable or enable next step in checkout process.
  cardNumberValid = false;
  cardExpiryValid = false;
  cardCvcValid = false;

  constructor(private basketService: BasketService, private checkoutService: CheckoutService,
    private toastr: ToastrService, private router: Router) { }

  ngAfterViewInit(){

    this.stripe = Stripe('pk_test_51KkuclHkwpAdPuoJiyqCalBcW1s2eMUL2ne8lAyM21EZwoiVuVTYxVB0uvG3WBrhLYIPY0u9s8Drr2a9AUut7O2w004VyEw6pZ');

    // Mount stripe element in our "nativeElement" our html element.
    const elements = this.stripe.elements();

    this.cardNumber = elements.create('cardNumber');
    this.cardNumber.mount(this.cardNumberElement.nativeElement);
    this.cardNumber.addEventListener('change', this.cardHandler);

    this.cardExpiry = elements.create('cardExpiry');
    this.cardExpiry.mount(this.cardExpiryElement.nativeElement);
    this.cardExpiry.addEventListener('change', this.cardHandler);

    this.cardCvc = elements.create('cardCvc');
    this.cardCvc.mount(this.cardCvcElement.nativeElement);
    this.cardCvc.addEventListener('change', this.cardHandler);

  }

  ngOnDestroy() {

    this.cardNumber.destroy();
    this.cardExpiry.destroy();
    this.cardCvc.destroy();
  }

  onChange(event) {

    if (event.error) {
      this.cardErrors = event.error.message; //Card errors is coming from Stripe, they are doing the validation
    } else {
      this.cardErrors = null;
    }
    switch (event.elementType) {
      case 'cardNumber':
        this.cardNumberValid = event.complete;
        break;
      case 'cardExpiry':
        this.cardExpiryValid = event.complete;
        break;
      case 'cardCvc':
        this.cardCvcValid = event.complete;
        break;
    }

  }

  async submittOrder() {
    this.loading = true;
    const basket = this.basketService.getCurrentBasketValue();
    try {

      const createdOrder = await this.createOrder(basket); // Will recieve response from createOrder which is now a "Promise" and will wait for this before moving on to the next step.
      const paymentResult = await this.confirmPaymentWithStripe(basket);

      if (paymentResult.paymentIntent) {
        this.basketService.deleteBasket(basket);
        const navigationExtras: NavigationExtras = {state: createdOrder};
        this.router.navigate(['checkout/success'], navigationExtras)
      } else {
        this.toastr.error(paymentResult.error.message);
      }
      this.loading = false;
    } catch (error) {
      console.log(error);
      this.loading = false;
    }

  }

  private async confirmPaymentWithStripe(basket) {
    return this.stripe.confirmCardPayment(basket.clientSecret, {
      payment_method: {
        card: this.cardNumber, //We have 3 elements, cardNumber, expiry and Cvc, we only need to put 1 since Stripe will put them all togheter automatically
        billing_details: {
          name: this.checkoutForm.get('paymentForm').get('nameOnCard').value
        }
      }
    });
  }

  private async createOrder(basket: IBasket) {
    const orderToCreate = this.getOrderToCreate(basket);
    return this.checkoutService.createOrder(orderToCreate).toPromise();
  }
  //helper method
  private getOrderToCreate(basket: IBasket) {
    return {
      basketId: basket.id,
      deliveryMethodId: +this.checkoutForm.get('deliveryForm').get('deliveryMethod').value, //+ beforehand the this.checkoutForm guarantees a number
      shipToAddress: this.checkoutForm.get('addressForm').value
    };
  }

}

