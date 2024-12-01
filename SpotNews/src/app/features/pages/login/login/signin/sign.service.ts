import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { loginModel } from '../loginModel';
import { appURL } from '@app/src/app/routePaths';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  url : any = appURL; 
  constructor(private http: HttpClient) {}


  private Incorrect = new BehaviorSubject<any>(null);

  incorrectSign$ = this.Incorrect.asObservable();


  incorrectCred(data: boolean = false) {
    this.Incorrect.next(data);
  }


  login(login: loginModel): Observable<any> {
    return this.http.post(this.url.baseUrl + 'login', login);
  }
}
