import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as AuthActions from '../store/auth.action';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private dataService: DataService, private authService: AuthService, private store: Store<fromApp.AppState>) { }
  @ViewChild('signupForm') myForm: NgForm;
  ngOnInit() {
  }
  signUp(form: NgForm) {
    console.log(form);
    // this.authService.signUpUser(form.value.email,form.value.password);
    this.store.dispatch(new AuthActions.TrySignUp({ username: form.value.email, password: form.value.password }))
  }
}
