import { Component, OnInit } from '@angular/core';
import { AdminsubscriptionService } from '../../services/admin/adminsubscription.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-subscription-invoices',
  templateUrl: './admin-subscription-invoices.component.html',
  styleUrl: './admin-subscription-invoices.component.scss'
})
export class AdminSubscriptionInvoicesComponent implements OnInit {

  invoices: any;
  loading = true;

  constructor(
    private adminSubscriptionService: AdminsubscriptionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.adminSubscriptionService.getSubscriptionInvoices().subscribe((response: any) => {
      console.log(response);
      this.invoices = response;
      this.loading = false;
    });
  }

  priceFormat(price: any, currency: string) {
      return price + ' ' + currency.toUpperCase();
  }

  selectInvoice(invoice: any) {
    this.router.navigate(['/admin/subscriptions/invoice', invoice.id]);
  }

}
