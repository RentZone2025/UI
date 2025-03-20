import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-two-factor-setup',
  templateUrl: './two-factor-setup.component.html',
  styleUrl: './two-factor-setup.component.scss'
})
export class TwoFactorSetupComponent implements OnInit {

  two_factor_setup: any;
  two_factor_code: string = '';

  enabled: any = null;

  constructor(
    private authService: AuthService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe({
      next: (response: any) => {
        this.enabled = response.user.two_factor_secret != null;
        if(!this.enabled){
          this.enable();
        }
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  enable(){
        this.authService.twofactorsetup().subscribe({
      next: (response: any) => {
        console.log(response);
        response.qr_code = this.sanitizer.bypassSecurityTrustHtml(response.qr_code);
        this.two_factor_setup = response
      },
      error: (error: any) => {
        console.log(error);
        this.enabled = error.error.status == "already_enabled";
      }
    })
  }

  verify() {
    this.authService.twofactorsetupverify(this.two_factor_code).subscribe({
      next: (response: any) => {
        console.log(response);
        this.router.navigate(['/user/account']);
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  disable(){

    this.authService.twofactordeactivate().subscribe({
      next: (response: any) => {
        console.log(response);
        this.enabled = false;
        

        
      },
      error: (error: any) => {
        console.log(error);
      }
    })

  }

  cancel(){
    this.two_factor_setup = null;
  }

}
