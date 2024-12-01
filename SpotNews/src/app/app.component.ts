import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './features/pages/home/home.component';
import { __makeTemplateObject } from 'tslib';
import { SharedService } from './sharedService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private sharedservice: SharedService) {}
  logined:boolean = false;
  ngOnInit(): void {
    this.sharedservice.loginData$.subscribe((data) => {
      const token = localStorage.getItem('token');
      if (token) {
        this.logined = true;
        this.sharedservice.updateSharedData(this.logined)
      }
      else{
        this.logined = false;
        this.sharedservice.updateSharedData(this.logined)
      }
    });
  }
  title = 'SpotNews';
}
