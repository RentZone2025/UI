import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './../services/auth.service'; // Importáld az AuthService-t
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

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
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    return this.checkUserLogin(next, url);
  }

  checkUserLogin(route: ActivatedRouteSnapshot, url: string): boolean {
    if (this.authService.isLoggedIn()) {
      let userRole = this.authService.getRole();
      if (route.data['role'] && route.data['role'].indexOf(userRole) === -1) {
        //this.router.navigate(['/account']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

};