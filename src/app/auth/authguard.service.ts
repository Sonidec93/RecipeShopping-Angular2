import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';


@Injectable()
export class AuthguardService implements CanActivate ,CanLoad{

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    // throw new Error("Method not implemented.");
    if(this.authService.isAuthenticated()){
      return true;
    }
    else{
       this.router.navigate(['signIn']);
      return false;
    }
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if(this.authService.isAuthenticated()){
      return true;
    }
    else{
       this.router.navigate(['signIn']);
      return false;
    }
  }
  constructor(private router:Router,private authService: AuthService) { }

}
