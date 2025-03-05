import { Component, OnInit } from '@angular/core';
import { AdminsubscriptionService } from '../../services/admin/adminsubscription.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-subscription-plans',
  templateUrl: './admin-subscription-plans.component.html',
  styleUrl: './admin-subscription-plans.component.scss'
})
export class AdminSubscriptionPlansComponent implements OnInit {

  plans: any;
  loading = true;

  constructor(
    private adminSubscriptionService: AdminsubscriptionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.adminSubscriptionService.getSubscriptionPlans().subscribe((response: any) => {
      console.log(response);
      this.plans = response;
      this.loading = false;
    });
  }

  priceFormat(prices: any) {
    if(prices.length > 1) return prices.length + ' prices';
    return prices.map((price: any) => {
      return price.unit_amount + ' ' + price.currency.toUpperCase();
    }).join(' / ');
  }

  selectPlan(plan: any) {
    console.log(plan);
    this.router.navigate(['/admin/subscriptions/plan', plan.id]);
  }

}
