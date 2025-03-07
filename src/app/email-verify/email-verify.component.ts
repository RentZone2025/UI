import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrl: './email-verify.component.scss'
})
export class EmailVerifyComponent implements OnInit {

  verificationStatus: 'verifying' | 'success' | 'error' = 'verifying';

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('id');
    const hash = this.route.snapshot.queryParamMap.get('hash');
    const expires = this.route.snapshot.queryParamMap.get('expires');
    const signature = this.route.snapshot.queryParamMap.get('signature');

    if (id && hash && expires && signature) {
      this.auth.emailVerify(id, hash, expires, signature).subscribe(
        response => {
          this.verificationStatus = 'success';
          console.log('Email verified successfully', response);
          
        },
        error => {
          this.verificationStatus = 'error';
          console.error('Email verification failed', error);
        }
      );
    } else {
      this.verificationStatus = 'error';
      console.error('Missing verification parameters');
    }
  }

  resendVerification(){

  }

}
