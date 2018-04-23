import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private dataService: DataService,private authService:AuthService) { }
  @ViewChild('signupForm') myForm: NgForm;
  ngOnInit() {
  }
  signUp(form: NgForm) {
    console.log(form);
    this.authService.signUpUser(form.value.email,form.value.password);
  }
}
