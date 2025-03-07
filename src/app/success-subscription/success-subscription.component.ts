import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../services/subscription.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success-subscription',
  templateUrl: './success-subscription.component.html',
  styleUrl: './success-subscription.component.scss'
})
export class SuccessSubscriptionComponent implements OnInit {

  subscription: any;
  products: any;

  constructor(
    private subscriptionService: SubscriptionService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const sessionId = this.route.snapshot.queryParams['session_id'];
    console.log(sessionId)
    this.subscriptionService.saveSubscription(sessionId).subscribe({
      next: (response) => {
        console.log(response)
        this.subscription = response.subscription;
        this.products = response.products;
      }
    })
  }

}
