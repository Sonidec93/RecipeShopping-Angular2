import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import * as fromApp from '../store/app.reducer';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthguardService implements CanActivate, CanLoad {

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    // throw new Error("Method not implemented.");
    // if (this.authService.isAuthenticated()) {
    //   return true;
    // }
    // else {
    //   this.router.navigate(['signIn']);
    //   return false;
    // }

    return this.store.select('auth').take(1).map(data => {
      // console.log(data.isAuthenticated);
      // if (data.isAuthenticated)
      //   return true;
      // else {
      //   this.router.navigate(['signIn']);
      //   return false;
      // }
      return data.isAuthenticated;
      // return data.isAuthenticated;
    });
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    // var value;
    return this.store.select('auth').map(data => {

      // if (data.isAuthenticated)
      //   return true
      // else {
      //   this.router.navigate(['signIn']);
      //   return false;
      // }

      return data.isAuthenticated;
    });
    // return value;
    // if(this.authService.isAuthenticated()){
    //   return true;
    // }
    // else{
    //    this.router.navigate(['signIn']);
    //   return false;
    // }
  }
  constructor(private router: Router, private authService: AuthService, private store: Store<fromApp.AppState>) { }

}
