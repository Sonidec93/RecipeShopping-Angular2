import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { FeatureState } from '../store/recipes.reducer';
import { IfObservable } from 'rxjs/observable/IfObservable';
import {Observable} from 'rxjs/observable';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
  // recipes: Recipe[];
  recipeState:Observable<{recipes:Recipe[]}>;
  subscription: Subscription;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router, private store: Store<FeatureState>) { }

  ngOnInit() {

    // this.subscription = this.recipeService.recipeEmitter.subscribe((recipes: Recipe[]) => {
      // this.recipes = recipes
    // })

    // this.recipes = this.recipeService.getRecipe();
    this.recipeState=this.store.select('recipes');
 
  }


  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });

  }

}
