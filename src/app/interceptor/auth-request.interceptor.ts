import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthRequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headers: any = {};
    const options = {
      setHeaders: headers
    };

    const token = localStorage.getItem("token");
    const tracking = localStorage.getItem("tracking");

    if (token) {
      headers.Authorization = "Bearer " + token
    }
    if (tracking) {
      headers.tracking = tracking;
    }

    req = req.clone(options);

    return next.handle(req);
  }
}
