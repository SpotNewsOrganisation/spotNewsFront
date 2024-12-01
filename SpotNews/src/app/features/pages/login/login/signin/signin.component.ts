import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { loginModel } from '../loginModel';
import { SignService } from './sign.service';
import { appRoutes, appURL } from '@app/src/app/routePaths';
import { SharedService } from '@app/src/app/sharedService';
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent implements OnInit {

  routes : any = appRoutes; 
  url : any = appURL; 

  signinForm: FormGroup;
  constructor(private fb: FormBuilder,private router : Router, private service : SignService,) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required,]], 
    });
  }
  ngOnInit(): void {
  }


  incorrectSign: boolean = true;
  login() {
    console.log(this.signinForm.value)
    if (this.signinForm.valid) {
      const log: loginModel = {
        email: this.signinForm.value.email,
        password: this.signinForm.value.password,
      };
      this.service.login(log).subscribe(
        (resp)=>{
          if(resp.success){
          }
          else{
            this.service.incorrectCred(this.incorrectSign);
          }
          console.log(resp);
        }
      )
    }
  }
  navigate(){
    this.router.navigate([this.routes.registration])
  }
}
