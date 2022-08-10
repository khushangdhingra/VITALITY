import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";


@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private api: ApiService) {}

  getAlerts() {
    return this.api.get('/api/alert').pipe(response=>{
        return response;
    });
  }

}
