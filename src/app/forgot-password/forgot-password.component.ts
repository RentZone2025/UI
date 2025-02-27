import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

  message: any = {
    text: '',
    type: ''
  }
  email: string = '';

  constructor(
    private authService: AuthService
  ) { }

  new_password(){
    this.authService.forgotpassword(this.email).subscribe({
      next: (response: any) => {
        this.message = {
          text: response.message,
          type: 'success'
        }
      },
      error: (error: any) => {
        this.message = {
          text: error.error.message,
          type: 'error'
        }
      }
    })
  }

}
