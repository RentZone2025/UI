import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit {

  two_factor_auth_enabled: boolean = false;

  user: any = {
    lastname: "",
    firstname: ""
  };

  passwords: any = {
    old_password: "",
    password: "",
    password_confirmation: ""
  }

  message: any = {
    text: "",
    type: "",
    desc: ""
  }

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe({
      next: (response: any) => {
        this.two_factor_auth_enabled = response.two_factor_secret != null;
        this.user = response
        this.user.firstname = this.user.fullname.split(" ")[0]
        this.user.lastname = this.user.fullname.split(" ")[1]
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  addMessage(text: string, type: string, desc: string){
    this.message = {
      text: text,
      type: type,
      desc: desc
    }
  }

  removeMessage(){
    this.message = {
      text: "",
      type: "",
      desc: ""
    }
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

  saveUserData(){
    this.removeMessage()
    this.user.fullname = this.user.firstname + " " + this.user.lastname
    let user = { ...this.user }
    delete user.firstname;
    delete user.lastname;
    console.log(user)
    this.authService.updateUser(user).subscribe({
      next: (user) => {
        this.user = user
        this.user.firstname = this.user.fullname.split(" ")[0]
        this.user.lastname = this.user.fullname.split(" ")[1]
        this.addMessage("Sikeres adat módosítás", "success", "save_user")
      },
      error: (error: any) => {
        this.addMessage(error.error.message, "error", "save_user")
      }
    })
  }

  changePassword(){
    this.removeMessage()
    this.authService.changePassword(this.passwords).subscribe({
      next: (user) => {
        console.log(user)
        this.addMessage("Sikeres jelszó módosítás!", "success", "change_password")
      },
      error: (error: any) => {
        this.addMessage(error.error.message, "error", "change_password")
      }
    })
  }

}
