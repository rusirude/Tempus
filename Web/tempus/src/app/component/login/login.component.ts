import { Component, OnInit } from '@angular/core';
import {Router}from '@angular/router';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:String;
  password:String;

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      username:this.username,
      password:this.password
    };  
    this.authService.authenticate(user).subscribe(data=>{
      if(data.success){
        this.authService.saveAuthenticationData(data.token);
        this.router.navigate(['dashboard']);
      }
      else{
        console.log('Incorrect Username or Password !')
      }
    });  
  }

}
