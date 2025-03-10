import { Component, OnInit } from '@angular/core';
import { AdminsubscriptionService } from '../../services/admin/adminsubscription.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-subscription-invoice',
  templateUrl: './admin-subscription-invoice.component.html',
  styleUrl: './admin-subscription-invoice.component.scss'
})
export class AdminSubscriptionInvoiceComponent implements OnInit {

  invoice: any;
  loading = true;

  constructor(
    private adminSubscriptionService: AdminsubscriptionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.adminSubscriptionService.getSubscriptionInvoice(params["id"]).subscribe((response: any) => {
        console.log(response);
        this.invoice = response;
        this.loading = false;
      });
    });
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Text copied to clipboard');
    });
  }

  downloadInvoice(url: string) {
    window.open(url, '_blank');
  }

}
