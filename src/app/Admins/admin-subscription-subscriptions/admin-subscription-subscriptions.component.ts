import { Component } from '@angular/core';
import { AdminsubscriptionService } from '../../services/admin/adminsubscription.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-subscription-subscriptions',
  templateUrl: './admin-subscription-subscriptions.component.html',
  styleUrl: './admin-subscription-subscriptions.component.scss'
})
export class AdminSubscriptionSubscriptionsComponent {

  subscriptions: any;
  loading = true;

  constructor(
    private adminSubscriptionService: AdminsubscriptionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.adminSubscriptionService.getSubscriptionSubscriptions().subscribe((response: any) => {
      console.log(response);
      this.subscriptions = response;
      this.loading = false;
    });
  }

  priceFormat(price: any, currency: string) {
      return price + ' ' + currency.toUpperCase();
  }

  selectSubscription(subscription: any) {
    this.router.navigate(['/admin/subscriptions/subscription', subscription.id]);
  }

  round(num: number, precision: number) {
    return Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision);
  }

  avg_monthly(plan: any) {
    if(plan.interval === 'year') {
      return this.round(plan.amount / 100 / (plan.interval_count * 12),3) + " " + plan.currency.toUpperCase() + ' / month';
    }
    return this.round(plan.amount / 100 / plan.interval_count, 3) + " " + plan.currency.toUpperCase() + ' / month';
  }

  avg_yearly(plan: any) {
    if(plan.interval === 'month') {
      return this.round(plan.amount / 100 * (12 / plan.interval_count),3) + " " + plan.currency.toUpperCase() + ' / year';
    }
    return this.round(plan.amount / 100 / plan.interval_count, 3) + " " + plan.currency.toUpperCase() + ' / year';
  }

}
