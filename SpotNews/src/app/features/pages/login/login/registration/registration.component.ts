import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { appRoutes } from '@app/src/app/routePaths';
import { RegistrationService } from './registration.service';
import { registerModel } from '../loginModel';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  routes : any = appRoutes;
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router,private service :RegistrationService) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], 
      username: ['', [Validators.required,]], 
      password: ['', [Validators.required, Validators.minLength(6)]], 
      comfirmpassword: ['', [Validators.required, Validators.minLength(6)]], 
    });
  }

  ngOnInit(): void {}

  register() {
    if (this.registrationForm.valid) {
      const reg : registerModel ={
        userName : this.registrationForm.value.username,
        email: this.registrationForm.value.username,
        password : this.registrationForm.value.username
      }
      this.service.registration(reg).subscribe(
        (resp)=>{
          console.log(resp);
        }
      )
      console.log(this.registrationForm.value);
    } 
  }

  navigate(){
    this.router.navigate([this.routes.signin])
  }
}
