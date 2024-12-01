import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appURL } from '@app/src/app/routePaths';
import { Observable } from 'rxjs';
import { registerModel } from '../loginModel';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  url : any = appURL; 
  constructor(private http: HttpClient) {}

  registration(reg: registerModel): Observable<any> {
    return this.http.post(this.url.baseUrl + 'registration', reg);
  }
}
