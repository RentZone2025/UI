import { Component, OnInit } from '@angular/core';
import { AdminsubscriptionService } from '../../services/admin/adminsubscription.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-subscription-plan',
  templateUrl: './admin-subscription-plan.component.html',
  styleUrl: './admin-subscription-plan.component.scss'
})
export class AdminSubscriptionPlanComponent implements OnInit {

  plan: any;
  loading: boolean = true;

  constructor(
    private adminSubscriptionService: AdminsubscriptionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.adminSubscriptionService.getSubscriptionPlan(params['id']).subscribe((response: any) => {
        console.log(response);
        this.plan = response;
        this.loading = false;
      });
    });
  }

  priceFormat(prices: any) {
    if(prices.length > 1) return prices.length + ' prices';
    return prices.map((price: any) => {
      return price.unit_amount + ' ' + price.currency.toUpperCase();
    }).join(' / ');
  }

  selectPrice(price: any) {
    console.log(price);
    this.router.navigate(['/admin/subscriptions/price', price.id]);
  }

}
