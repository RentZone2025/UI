import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.authService.role$.pipe(
      take(1),
      map(role => {
        console.log(!this.authService.isLoggedIn())
        console.log(next.data['role'] && next.data['role'].indexOf(role) === -1)
        if (!this.authService.isLoggedIn()) {
          return this.router.createUrlTree(['/login']); 
        }
        if (next.data['role'] && next.data['role'].indexOf(role) === -1) {
          if(role === 'user') {
          return this.router.createUrlTree(['/user/account']);
          } else {
            return this.router.createUrlTree(['/admin/dashboard']);
          }
        }
        return true;
      })
    );
  }
}