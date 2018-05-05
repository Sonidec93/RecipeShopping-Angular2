import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  @ViewChild('signinForm') signInForm: NgForm;
  constructor(private route:ActivatedRoute,private router:Router,private authService: AuthService) { }


  signIn(form: NgForm) {
    console.log(form);
    
    this.authService.signInUser(form.value.email,form.value.password);
    this.router.navigate(['../recipes']);
  }
  ngOnInit() {
  }

}
