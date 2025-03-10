import { Component, OnInit } from '@angular/core';
import { AdminsubscriptionService } from '../../services/admin/adminsubscription.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-subscription-price',
  templateUrl: './admin-subscription-price.component.html',
  styleUrl: './admin-subscription-price.component.scss'
})
export class AdminSubscriptionPriceComponent implements OnInit {

  price: any;
  loading: boolean = true;

  constructor(
    private adminSubscriptionService: AdminsubscriptionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.adminSubscriptionService.getSubscriptionPrice(params['id']).subscribe((response: any) => {
        console.log(response);
        this.price = response;
        this.loading = false;
      });
    });
  }

}
