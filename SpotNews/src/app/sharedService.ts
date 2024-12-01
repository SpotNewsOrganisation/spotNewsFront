import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; 

@Injectable({
  providedIn: 'root',  
})
export class SharedService {
  private userLogined = new BehaviorSubject<any>(null);

  loginData$ = this.userLogined.asObservable();

  constructor() {}

  updateSharedData(data: boolean = false) {
    this.userLogined.next(data);
  }
}
