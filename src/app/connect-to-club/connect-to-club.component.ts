import { Component } from '@angular/core';
import { SubscriptionService } from '../services/subscription.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect-to-club',
  templateUrl: './connect-to-club.component.html',
  styleUrl: './connect-to-club.component.scss'
})
export class ConnectToClubComponent {

  plans: any[] = [];
  plan: any;
  subplan: any;

  constructor(
    private subscriptionService: SubscriptionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let plan_data = this.subscriptionService.getPlanData();
    console.log(plan_data);
    this.plans = plan_data.plans;
    this.plan = plan_data.plan;
    this.subplan = plan_data.subplan;
  }

  connectToClub(){
    this.subscriptionService.createCheckoutSession(this.subplan.id).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
