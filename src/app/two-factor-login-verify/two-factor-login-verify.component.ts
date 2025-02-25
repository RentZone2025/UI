import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-two-factor-login-verify',
  templateUrl: './two-factor-login-verify.component.html',
  styleUrl: './two-factor-login-verify.component.scss'
})
export class TwoFactorLoginVerifyComponent {

  two_factor_code: string = '';
  message: any = {
    text: '',
    type: ''
  }

  constructor(
    private authService: AuthService
  ) { }

  verify() {
    this.authService.twofactorverify(this.two_factor_code).subscribe({
      next: (response: any) => {
        this.message.text = response.message;
        this.message.type = 'success';
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
        this.message.text = error.error.message;
        this.message.type = 'error';
      }
    })
  }

}
