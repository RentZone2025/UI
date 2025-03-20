import { Component } from '@angular/core';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-rent-payment',
  templateUrl: './rent-payment.component.html',
  styleUrl: './rent-payment.component.scss'
})
export class RentPaymentComponent {

  constructor(
    private paymentService: PaymentService
  ){}

  pay(){
    this.paymentService.createCheckoutSession().subscribe({
      next: (resp) => console.log(resp)
    })
  }

}
