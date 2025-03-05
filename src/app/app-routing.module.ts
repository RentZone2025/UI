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
import { AuthGuard } from './guards/auth.guard';
import { TwoFactorLoginVerifyComponent } from './two-factor-login-verify/two-factor-login-verify.component';
import { TwoFactorSetupComponent } from './two-factor-setup/two-factor-setup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { EmailVerifyComponent } from './email-verify/email-verify.component';
import { SuccessSubscriptionComponent } from './success-subscription/success-subscription.component';
import { ConnectToClubComponent } from './connect-to-club/connect-to-club.component';
import { UserViewComponent } from './user-view/user-view.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './Admins/admin-dashboard/admin-dashboard.component';
import { AdminSubscriptionPlanComponent } from './Admins/admin-subscription-plan/admin-subscription-plan.component';
import { AdminSubscriptionPlansComponent } from './Admins/admin-subscription-plans/admin-subscription-plans.component';
import { AdminSubscriptionPriceComponent } from './Admins/admin-subscription-price/admin-subscription-price.component';
import { AdminSubscriptionInvoicesComponent } from './Admins/admin-subscription-invoices/admin-subscription-invoices.component';
import { AdminSubscriptionInvoiceComponent } from './Admins/admin-subscription-invoice/admin-subscription-invoice.component';

const routes: Routes = [

  // Közös route-ok, amelyek mindenki számára elérhetőek
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "rent", component: RentComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "forgot-password", component: ForgotPasswordComponent
  },
  {
    path: "reset-password", component: ResetPasswordComponent
  },
  {
    path: "email-verification/verify", component: EmailVerifyComponent,
  },
  {
    path: "2fa/verify", component: TwoFactorLoginVerifyComponent,
  },

  {
    path: "user",
    canActivate: [AuthGuard], 
    data: { role: "user" },
    children: [
      {
        path: "club-card", component: ClubCardComponent
      },
      {
        path: "2fa/setup", component: TwoFactorSetupComponent
      },
      {
        path: "account", component: AccountComponent
      },
      {
        path: "my-order", component: MyOrderComponent
      },
      {
        path: "connect-to-club", component: ConnectToClubComponent
      },
      {
        path: "success-subscription", component: SuccessSubscriptionComponent
      },
    ]
  },

  // ADMIN
  {
    path: "admin",
    component: AdminViewComponent,
    canActivate: [AuthGuard], 
    data: { role: "admin" },
    children: [
      {
        path: "dashboard", component: AdminDashboardComponent
      },
      {
        path: "subscriptions/plans", component: AdminSubscriptionPlansComponent
      },
      {
        path: "subscriptions/plan/:id", component: AdminSubscriptionPlanComponent
      },
      {
        path: "subscriptions/price/:id", component: AdminSubscriptionPriceComponent
      },
      {
        path: "subscriptions/invoices", component: AdminSubscriptionInvoicesComponent
      },
      {
        path: "subscriptions/invoice/:id", component: AdminSubscriptionInvoiceComponent
      },
    ]
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
