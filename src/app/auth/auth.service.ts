import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as fromAuthAction from './store/auth.action';
@Injectable()
export class AuthService {
  // token: string;
  constructor(private route: ActivatedRoute, private router: Router, private store: Store<fromApp.AppState>) { }


  logout() {
    firebase.auth().signOut().then((response: Response) => {
      // this.router.navigate(['signIn']);
      this.store.dispatch(new fromAuthAction.Logout());
    });
    // this.token=null
  }
  // isAuthenticated(){
  //   if(this.token!=null){
  //     return true;
  //   }
  //   else
  //   return false;
  // }
  signUpUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(data => {
      this.store.dispatch(new fromAuthAction.SignUp());
    }).catch(error => console.log(error));
  }
  signInUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then((response: Response) => {
      console.log(response);
      this.store.dispatch(new fromAuthAction.SignIn());
      firebase.auth().currentUser.getIdToken().then((token: string) => {
        // this.token = token;
        console.log('token'+token);
        this.store.dispatch(new fromAuthAction.SetToken(token));
        this.router.navigate(['recipes']);
        
      });
      
    }).catch(error => console.log(error));
  }
  // getToken() {
  //   firebase.auth().currentUser.getIdToken().then((token: string) => {
  //     this.token = token;
  //   });
  //   return this.token;
  // }
}
