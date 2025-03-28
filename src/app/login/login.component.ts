import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  message: any = {
    text: '',
    type: ''
  }

  constructor(
    private authService: AuthService
  ) { }

  login() {
    this.authService.login(this.email, this.password).subscribe({
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
