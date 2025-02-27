import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {

  message: any = {
    text: '',
    type: ''
  }
  password: string = '';
  password_confirmation: string = '';
  token: string = '';
  id: string = '';

  constructor(
    private authService: AuthService,
    private router: ActivatedRoute
  ) {
    this.token = this.router.snapshot.queryParams?.['token'];
    this.id = this.router.snapshot.queryParams?.['id'];
    console.log(this.router.snapshot.queryParams?.['token']);
  }

  reset_password(){
    console.log(this.token);
    this.authService.resetpassword(this.password, this.password_confirmation, this.token, this.id).subscribe({
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
    });
  }

}
