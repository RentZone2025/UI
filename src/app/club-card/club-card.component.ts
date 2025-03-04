import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../services/subscription.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-club-card',
  templateUrl: './club-card.component.html',
  styleUrl: './club-card.component.scss'
})
export class ClubCardComponent implements OnInit {

  plans: any[] = [];
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
        this.subscription !== null ? this.loading = false : this.loadPlans();
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  loadPlans(){
    this.subscriptionService.getSubscriptionPlans().subscribe({
      next: (response) => {
        console.log(response)
        this.plans = response;
        this.loading = false;
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  nameFormat(name: string) {
    const firstWord = name?.split(' ')[0].toUpperCase();
    return firstWord;
  }

  activateSubplan(plans: any, plan: any, subplan: any) {
    this.subscriptionService.setPlanData(plans, plan, subplan);
    this.router.navigate(['/connect-to-club']);
  }

}
