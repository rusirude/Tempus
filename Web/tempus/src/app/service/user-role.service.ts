import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, RequestOptions, Headers } from '@angular/http';
//import { UserRole } from '../interface/userRole';

import { AuthService } from '../service/auth.service';

@Injectable()
export class UserRoleService {

  constructor(
    private router: Router,
    private http: Http,
    private authService:AuthService
  ) { }

  saveUserRole(userRole) {
    console.log(JSON.stringify(userRole));
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this.authService.loadToken());

    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:3000/userRole/save', userRole, options)
      .map(res => res.json());
  }

}
