import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import {Http,RequestOptions,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../interface/user';

@Injectable()
export class AuthService {

  private user:any;
  private token:any;



  constructor(private router:Router,private http:Http) { }



  authenticate(user){
    let headers = new Headers({'Content-type': 'application/json'});    
    let options = new RequestOptions({headers: headers});       
    return this.http.post('http://localhost:3000/user/authenticate', user, options)
      .map(res => res.json()); 
  }
  saveAuthenticationData(token){
    localStorage.setItem('user_token',token);
    this.token = token;
  }

  clearAuthenticationData(){
    localStorage.clear();
    this.token = null;
  }

  loadToken(){
    return this.token;
  }

  isLoggin(){
    return !!(this.token);
  }


}
