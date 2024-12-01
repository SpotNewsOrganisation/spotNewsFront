import { Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { LoginComponent } from './features/pages/login/login/login.component';
import { SigninComponent } from './features/pages/login/login/signin/signin.component';
import { RegistrationComponent } from './features/pages/login/login/registration/registration.component';
import { ProfileComponent } from './features/pages/user/profile/profile.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent, 
        children:[
            {path: 'sign-in', component :SigninComponent},
            {path: 'registration', component :RegistrationComponent}
        ]
    },
    { path: 'profile', component: ProfileComponent },
    { path: '', redirectTo: '/profile', pathMatch: 'full' }, 
    { path: '**', redirectTo: '/profile' } 
];
