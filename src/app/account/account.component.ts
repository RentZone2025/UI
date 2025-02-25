import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit {

  two_factor_auth_enabled: boolean = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe({
      next: (response: any) => {
        this.two_factor_auth_enabled = response.two_factor_secret != null;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  TwoFactorAuthDeactivate() {
    this.authService.twofactordeactivate().subscribe({
      next: (response: any) => {
        this.two_factor_auth_enabled = false; 
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

}
