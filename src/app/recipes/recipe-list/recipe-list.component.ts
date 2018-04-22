import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit ,OnDestroy{
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  recipes: Recipe[];
  subscription:Subscription;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.subscription=this.recipeService.recipeEmitter.subscribe((recipes:Recipe[])=>{
      this.recipes=recipes
    })
    this.recipes = this.recipeService.getRecipe();
  }

  
  onNewRecipe() {
    this.router.navigate(['new'],{relativeTo:this.route});

  }

}
