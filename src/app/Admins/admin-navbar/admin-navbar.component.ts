import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.scss'
})
export class AdminNavbarComponent {

  links: { [key: string]: string } = {
    "Customers": "/admin/dashboard",
    "Product catalog": "/admin/subscriptions/plans",
  }

  dropdowns: { [key: string]: { open: boolean, name: string, items: { [key: string]: any } } } = {
    "billing": {
      open: false,
      name: 'Billing',
      items: [
        { name: 'Subscriptions', link: '/admin/subscriptions/plans' },
        { name: 'Invoices', link: '/admin/subscriptions/prices' }
      ]
    },
  }

  constructor(
    private router: Router
  ) { }

  toggleDropdown(name: any) {
    this.dropdowns[name].open = !this.dropdowns[name].open;
  }

  navigate(link: string) {
    this.router.navigate([link]);
  }

}
