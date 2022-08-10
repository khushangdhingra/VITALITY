import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from 'rxjs';
import { map, catchError, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { NotificationService } from './notification.service';




@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient, private notification: NotificationService) { }

  public get(url: string) {
    return this.http.get(environment.BaseUrl + url)
    .pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public post(url: string, body: any) {
    return this.http.post(environment.BaseUrl + url, body).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public put(url: string, body: any) {
    return this.http.put(environment.BaseUrl + url, body)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  public delete(url: string) {
    return this.http.delete(environment.BaseUrl + url).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private extractData = (response: any) => {
    return response;
  }

  private handleError = (errorResponse: any) => {
    // TODO: Show Error
    this.notification.showError(errorResponse.error.error);
    return throwError(() => errorResponse.error);
  }
}
