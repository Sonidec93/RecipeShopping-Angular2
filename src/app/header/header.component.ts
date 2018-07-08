import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs'
import * as fromApp from '../store/app.reducer';
import { Subscription } from 'rxjs';
import { AppState } from '../store/app.reducer';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromRecipe from '../recipes/store/recipes.reducer'
import * as fromAuthAction from '../auth/store/auth.action';
import { fetchRecipes, saveRecipes } from '../recipes/store/recipes.action';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Output() featureSelected = new EventEmitter<string>();

  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }

  authState: Observable<fromAuth.State>;
  constructor(private dataservice: DataService, public authService: AuthService, private route: ActivatedRoute, private router: Router, private store: Store<fromRecipe.FeatureState>) { }

  ngOnInit() {

    this.authState = this.store.select('auth');
  }

  logout() {
    this.authService.logout();
    // this.store.dispatch(new fromAuthAction.Logout());
    // this.store.dispatch(new fromAuthAction.TryLogout());

  }
  storeRecipes() {

    this.store.dispatch(new saveRecipes());
    // this.dataservice.storeRecipes().subscribe((response) => {
    //   console.log(response);
    // })
    // this.dataservice.storeRecipes().subscribe((response:HttpEvent<Object>)=>{
    //     console.log(response.type==HttpEventType.Sent);
    //     console.log(response.type==HttpEventType.Response);
    // })
  }
  fetchRecipes() {
    // this.dataservice.getRecipes();
    console.log('fetching');
    this.store.dispatch(new fetchRecipes());
  }

}
