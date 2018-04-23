import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable()
export class AuthService {
  token: string;
  constructor(private route:ActivatedRoute,private router:Router) { }


  logout(){
    firebase.auth().signOut().then((response:Response)=>{
      this.router.navigate(['signIn']);
    });
    this.token=null;
  }
  isAuthenticated(){
    if(this.token!=null){
      return true;
    }
    else
    return false;
  }
  signUpUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => console.log(error));
  }
  signInUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then((response: Response) => {
      console.log(response);
      firebase.auth().currentUser.getIdToken().then((token: string) => {
        this.token = token;
      });
      this.router.navigate(['recipes']);
    }).catch(error => console.log(error));
  }
  getToken() {
    firebase.auth().currentUser.getIdToken().then((token: string) => {
      this.token = token;
    });
    return this.token;
  }
}
