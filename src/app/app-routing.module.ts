import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RentComponent } from './rent/rent.component';
import { OrderComponent } from './order/order.component';
import { ClubCardComponent } from './club-card/club-card.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccountComponent } from './account/account.component';
import { authGuard } from './guards/auth.guard';
import { TwoFactorLoginVerifyComponent } from './two-factor-login-verify/two-factor-login-verify.component';
import { TwoFactorSetupComponent } from './two-factor-setup/two-factor-setup.component';

const routes: Routes = [
  {
    path: "home", component: HomeComponent
  },
  {
    path: "contact", component: ContactComponent
  },
  {
    path: "rent", component: RentComponent
  },
  {
    path: "order", component: OrderComponent
  },
  {
    path: "club-card", component: ClubCardComponent 
  },
  {
    path: "login", component: LoginComponent 
  },
  {
    path: "register", component: RegisterComponent, 
  },
  {
    path: "2fa/verify", component: TwoFactorLoginVerifyComponent, 
  },
  {
    path: "2fa/setup", component: TwoFactorSetupComponent, canActivate: [authGuard]
  },
  {
    path: "account", component: AccountComponent, canActivate: [authGuard]
  },
  {
    path: "", redirectTo: "home", pathMatch: "full"
  },
  {
    path: "**", component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
