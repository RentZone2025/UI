import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AccountService } from '../services/account.service';
import { not } from 'rxjs/internal/util/not';

interface Shipping {
  city: string,
  postal_code: string,
  address: string,
  country: string
}
interface Billing {
  city: string,
  postal_code: string,
  address: string,
  country: string
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit {

  two_factor_auth_enabled: any = null;
  user: any = {
    lastname: "",
    firstname: ""
  };
  shipping: Shipping = {
    city: "",
    postal_code: "",
    address: "",
    country: ""
  };
  billing: Billing = {
    city: "",
    postal_code: "",
    address: "",
    country: ""
  };
  subscription: any;
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

  isMatch = false;

  constructor(
    private authService: AuthService,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe({
      next: (user: any) => {
        console.log(user)
        this.two_factor_auth_enabled = user.user.two_factor_secret != null;
        this.user = user.user
        this.user.firstname = this.user.fullname.split(" ")[0]
        this.user.lastname = this.user.fullname.split(" ")[1]
        this.shipping = user.shipping || this.shipping;
        this.billing = user.billing || this.billing;
        this.subscription = user.subscription;
        this.isMatch = user.shipping != null && user.billing != null && this.shallowEqual(user.billing, user.shipping)
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  shallowEqual(obj1: any, obj2: any) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if(!(key in ['created_at','updated_at'])){
        if (obj1[key] !== obj2[key]) {
          return false;
        }
      }
    }
  
    return true;
  }
  
  nameFormat(name: string){
    const firstWord = name?.split(' ')[0].toUpperCase();
    return firstWord;
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
    this.accountService.updateUser(user).subscribe({
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
    this.accountService.changePassword(this.passwords).subscribe({
      next: (user) => {
        console.log(user)
        this.addMessage("Sikeres jelszó módosítás!", "success", "change_password")
      },
      error: (error: any) => {
        this.addMessage(error.error.message, "error", "change_password")
      }
    })
  }

  changeShippingData(){
    this.billing = { ...this.shipping };
  }

  changeShipping(){
    this.removeMessage()
    console.log(this.shipping)
    this.accountService.changeShipping(this.shipping).subscribe({
      next: (shipping: any) => {
        this.shipping = shipping.shipping
        this.addMessage("Sikeres adat módosítás!", "success", "change_shipping")
      },
      error: (error: any) => {
        this.addMessage(error.error.message, "error", "change_shipping")
      }
    })
    if(this.isMatch){
      this.changeBilling()
    }
  }

  changeBilling(){
    this.isMatch ? undefined : this.removeMessage()
    this.accountService.changeBilling(this.billing).subscribe({
      next: (billing: any) => {
        console.log(billing)
        this.billing = billing.billing
        this.isMatch === false ? this.addMessage("Sikeres adat módosítás!", "success", "change_billing") : undefined;
      },
      error: (error: any) => {
        this.isMatch === false ? this.addMessage(error.error.message, "error", "change_billing") : undefined;
      }
    })
  }

}
