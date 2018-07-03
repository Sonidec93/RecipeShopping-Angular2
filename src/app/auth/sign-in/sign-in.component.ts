import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { TrySignIn } from '../store/auth.action';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  @ViewChild('signinForm') signInForm: NgForm;
  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService, private store: Store<AppState>) { }


  signIn(form: NgForm) {
    console.log(form);

    // this.authService.signInUser(form.value.email,form.value.password);
    this.store.dispatch(new TrySignIn({ username: form.value.email, password: form.value.password }));
    // this.router.navigate(['recipes']);
    //here the effects take place after the router navigation thats y its isn't working but if we click on sign in again it wil work as the isAuthenticated is set to true already
  }
  ngOnInit() {
  }

}
