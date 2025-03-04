import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.log('Auth Interceptor: ');
      if (error.status === 401) {
        // Unauthorized, token might have expired
        router.navigate(['/login']);
      }
      return throwError(() => error);
    })
  );
};
