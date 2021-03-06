import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import {AuthService} from '../service/auth.service';



@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  canActivate(){
    if(this.authService.isLoggin()){
      return true;
    }    
    else{
      this.router.navigate(['/']);
      return false;
    }
  }
}
