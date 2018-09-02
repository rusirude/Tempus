import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProfileComponent } from './component/profile/profile.component';
import { HomeComponent } from './component/home/home.component';

import {AuthService} from './service/auth.service';
import {UserRoleService} from './service/user-role.service';


import {AuthGuard} from './guard/auth.guard';
import { UserRoleComponent } from './component/user-role/user-role.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'register', component: RegisterComponent,canActivate:[AuthGuard] },
  { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard] },
  { path: 'profile', component: ProfileComponent,canActivate:[AuthGuard] },
  { path: 'userRole', component: UserRoleComponent,canActivate:[AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    HomeComponent,
    UserRoleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthService,
    UserRoleService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
