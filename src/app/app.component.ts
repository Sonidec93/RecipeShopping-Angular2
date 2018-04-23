import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    //initilaising firebase sdk for authentication
    firebase.initializeApp({
      apiKey: "AIzaSyBJ3gZ9CNVrtSL0tNsDjHNxD_EX85AMyx8",
      authDomain: "recipeproject-8962f.firebaseapp.com"
    })
  }
  constructor(private route: ActivatedRoute, private router: Router) { }

}
