import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  firstname: string = '';
  lastname: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  password_confirmation: string = '';

  message: any = {
    text: '',
    type: ''
  }

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  register() {
    console.log('Register');
    let fullname = this.firstname + ' ' + this.lastname;
    this.authService.register(fullname, this.username, this.email, this.password, this.password_confirmation)
      .subscribe({
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
      });
  }

}
