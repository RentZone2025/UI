import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { ClubCardComponent } from './club-card/club-card.component';
import { RentComponent } from './rent/rent.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccountComponent } from './account/account.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { TwoFactorLoginVerifyComponent } from './two-factor-login-verify/two-factor-login-verify.component';
import { TwoFactorSetupComponent } from './two-factor-setup/two-factor-setup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { EmailVerifyComponent } from './email-verify/email-verify.component';
import { DatePipe } from '@angular/common';
import { authInterceptor } from './interceptors/auth.interceptor';
import { SuccessSubscriptionComponent } from './success-subscription/success-subscription.component';
import { ConnectToClubComponent } from './connect-to-club/connect-to-club.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { UserViewComponent } from './user-view/user-view.component';
import { AdminDashboardComponent } from './Admins/admin-dashboard/admin-dashboard.component';
import { AdminSubscriptionPlansComponent } from './Admins/admin-subscription-plans/admin-subscription-plans.component';
import { AdminSubscriptionPlanComponent } from './Admins/admin-subscription-plan/admin-subscription-plan.component';
import { AdminSubscriptionPriceComponent } from './Admins/admin-subscription-price/admin-subscription-price.component';
import { AdminNavbarComponent } from './Admins/admin-navbar/admin-navbar.component';
import { AdminSubscriptionInvoicesComponent } from './Admins/admin-subscription-invoices/admin-subscription-invoices.component';
import { AdminSubscriptionInvoiceComponent } from './Admins/admin-subscription-invoice/admin-subscription-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    ClubCardComponent,
    RentComponent,
    NotFoundComponent,
    AccountComponent,
    NavComponent,
    FooterComponent,
    ForgotPasswordComponent,
    TwoFactorLoginVerifyComponent,
    TwoFactorSetupComponent,
    ResetPasswordComponent,
    MyOrderComponent,
    EmailVerifyComponent,
    SuccessSubscriptionComponent,
    ConnectToClubComponent,
    AdminViewComponent,
    UserViewComponent,
    AdminDashboardComponent,
    AdminSubscriptionPlansComponent,
    AdminSubscriptionPlanComponent,
    AdminSubscriptionPriceComponent,
    AdminNavbarComponent,
    AdminSubscriptionInvoicesComponent,
    AdminSubscriptionInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
