import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx';
import { Ingredient } from './ingredient.model';
@Injectable()
export class DataService {

  constructor(private http:Http,private recipeService:RecipeService) { }

  storeRecipes(){
    return this.http.put('https://recipeproject-8962f.firebaseio.com/recipes.json',this.recipeService.getRecipe());
  }

  getRecipes(){
    console.log('here');
    this.http.get('https://recipeproject-8962f.firebaseio.com/recipes.json').map((response:Response)=>{
   const recipes:Recipe []=response.json();

   for(let recipe of recipes){
     if(!recipe['ingredients']){
       recipe.ingredients=[];
     }
   }
    return recipes;
    }).subscribe((recipes:Recipe [])=>{
      this.recipeService.storeRecipes(recipes);
    })
  }

}
