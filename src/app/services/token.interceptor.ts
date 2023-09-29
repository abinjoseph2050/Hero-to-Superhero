import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  auth_token = 'sometoken9ui04309u';

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const yotockenizedReq = request.clone({
      setHeaders: {
        ContentType: 'app/json',
        Authorization: `Bearer ${this.auth_token}`,
      },
    });

    return next.handle(yotockenizedReq).pipe(
      retry(2),
      catchError((err: HttpErrorResponse) => {
        console.log('The throwed error');
        return throwError(err.message);
      })
    );
  }
}
