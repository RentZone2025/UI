import { Component, OnInit } from '@angular/core';
import { AdminsubscriptionService } from '../../services/admin/adminsubscription.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-subscription-subscription',
  templateUrl: './admin-subscription-subscription.component.html',
  styleUrl: './admin-subscription-subscription.component.scss'
})
export class AdminSubscriptionSubscriptionComponent implements OnInit {

  subscription: any;
  loading = true;

  constructor(
    private adminSubscriptionService: AdminsubscriptionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.adminSubscriptionService.getSubscriptionSubscription(params["id"]).subscribe((response: any) => {
        console.log(response);
        this.subscription = response;
        this.loading = false;
      });
    });
  }

  next_invoice(){
    let created = new Date(this.subscription.created * 1000);
    let interval = this.subscription.plan.interval;
    let interval_count = this.subscription.plan.interval_count;
    let next_invoice_date = new Date(created);
    if(interval == 'month'){
      next_invoice_date.setMonth(next_invoice_date.getMonth() + interval_count);
    }else if(interval == 'year'){
      next_invoice_date.setFullYear(next_invoice_date.getFullYear() + interval_count);
    }
    let formatted_date = next_invoice_date.toLocaleString(
      'en-US',
      { month: 'long', day: '2-digit' }
    );
    return formatted_date;
  }
  
}
