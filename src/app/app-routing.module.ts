import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RentComponent } from './rent/rent.component';
import { ClubCardComponent } from './club-card/club-card.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccountComponent } from './account/account.component';
import { authGuard } from './guards/auth.guard';
import { TwoFactorLoginVerifyComponent } from './two-factor-login-verify/two-factor-login-verify.component';
import { TwoFactorSetupComponent } from './two-factor-setup/two-factor-setup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { EmailVerifyComponent } from './email-verify/email-verify.component';
import { SuccessSubscriptionComponent } from './success-subscription/success-subscription.component';
import { ConnectToClubComponent } from './connect-to-club/connect-to-club.component';

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
    path: "club-card", component: ClubCardComponent 
  },
  {
    path: "login", component: LoginComponent 
  },
  {
    path: "forgot-password", component: ForgotPasswordComponent 
  },
  {
    path: "reset-password", component: ResetPasswordComponent 
  },
  {
    path: "register", component: RegisterComponent, 
  },
  {
    path: "email-verification/verify", component: EmailVerifyComponent, 
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
    path: "my-order", component: MyOrderComponent, canActivate: [authGuard]
  },
  {
    path: "connect-to-club", component: ConnectToClubComponent, canActivate: [authGuard]
  },
  {
    path: "success-subscription", component: SuccessSubscriptionComponent, canActivate: [authGuard]
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
