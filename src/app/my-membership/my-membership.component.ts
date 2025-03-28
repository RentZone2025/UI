import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SubscriptionService } from '../services/subscription.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-membership',
  templateUrl: './my-membership.component.html',
  styleUrl: './my-membership.component.scss'
})
export class MyMembershipComponent implements OnInit {

    subscription: any;
    loading: boolean = true;

    constructor(
      private subscriptionService: SubscriptionService,
      private authService: AuthService,
      private router: Router
    ) { }

    ngOnInit(): void {

      this.authService.getCurrentUser().subscribe({
        next: (user: any) => {
          console.log(user)
          this.subscription = user.subscription;
          this.loading = false;
        },
        error: (error: any) => {
          console.log(error);
        }
      })
    }

    cancelSubscription() {

      // dialog
      if (!confirm('Are you sure you want to cancel your subscription?')) {
        return;
      }

      this.subscriptionService.cancelSubscription().subscribe({
        next: (response) => {
          console.log(response)
          this.subscription = null;
        },
        error: (error: any) => {
          console.log(error);
        }
      })
    }

    upgradeSubscription() {

      // dialog
      if (!confirm('Are you sure you want to upgrade your subscription?')) {
        return;
      }

      let success_cancel = true;
      // current plan id with metadata
      let current_subscription = this.subscription;

      /*this.subscriptionService.cancelSubscription().subscribe({
        next: (response) => {
          console.log(response)
          this.subscription = null;
          success_cancel = true;
        },
        error: (error: any) => {
          console.log(error);
        }
      })*/

      if (success_cancel) {
        this.subscriptionService.getSubscriptionPlans().subscribe({
          next: (plans: { [key: string]: { subplans: any[] } }) => {
            console.log(plans)

            let current_interval = current_subscription.price.recurring.interval;
            let current_interval_count = current_subscription.price.recurring.interval_count;
            let current_product_id = current_subscription.product.metadata.id;

            for (const [key, value] of Object.entries(plans)) {
              if(value != null){
                for(let subplan of value.subplans) {

                  if(subplan.metadata.id == parseInt(current_product_id) + 1 && subplan.interval == current_interval && subplan.interval_count == current_interval_count) {
      
                    this.subscriptionService.setPlanData(plans, value, subplan);
                    this.router.navigate(['/user/connect-to-club']);
                  }
                }
              }
            }

            // 
          },
          error: (error: any) => {
            console.log(error);
          }
        })
      }



    }

}