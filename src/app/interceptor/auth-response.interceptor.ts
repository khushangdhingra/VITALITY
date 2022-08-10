import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthResponseInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      catchError(error => {
        switch (error.status) {
          case 401: // login
            localStorage.removeItem("token");
            this.router.navigateByUrl("/login");
            break;
          // case 403:     //forbidden
          //     this.router.navigateByUrl("/dashboard");
          //     break;
        }
        return throwError(()=>error);
      }));
  }
}
