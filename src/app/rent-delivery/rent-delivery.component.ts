import { Component } from '@angular/core';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-rent-delivery',
  templateUrl: './rent-delivery.component.html',
  styleUrl: './rent-delivery.component.scss'
})
export class RentDeliveryComponent {

    constructor(
      private paymentService: PaymentService
    ){}
  
    pay(){
      this.paymentService.createCheckoutSession().subscribe({
        next: (resp) => console.log(resp)
      })
    }

}
