import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedService } from '@app/src/app/sharedService';
import { ModalComponent } from "./modal/modal.component";
import { CommonModule } from '@angular/common';
import { SignService } from './signin/sign.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, ModalComponent,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  incorrectSignin: boolean = false;

  constructor(private sharedService: SignService) {}

  ngOnInit(): void {
    this.sharedService.incorrectSign$.subscribe(data => {
      this.incorrectSignin = data;
      if (this.incorrectSignin === true) {
        this.openModal();
      }
      else{
        this.hideModal();
      }
    });
  }
  

  modaltext :string= '';

  modalVisible :boolean = false;
  openModal(): void {
      this.modalVisible = true;
      this.modaltext = "Email or password is incorrect!";
      setTimeout(() => {
        this.modalVisible = false;
      }, 5000);
  }
  hideModal ():void{
    this.modalVisible = false;
  }
}
