import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SubscriptionService } from '../services/subscription.service';

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

}