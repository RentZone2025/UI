import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.scss'
})
export class AdminNavbarComponent {

  links: { [key: string]: string } = {
    "Vásárlók": "/admin/dashboard",
    "Tagságok": "/admin/subscriptions/plans",
  }

  dropdowns: { [key: string]: { open: boolean, name: string, items: { [key: string]: any } } } = {
    "billing": {
      open: false,
      name: 'Fizetés',
      items: [
        { name: 'Feliratkozások', link: '/admin/subscriptions/subscriptions' },
        { name: 'Számlák', link: '/admin/subscriptions/invoices' }
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
