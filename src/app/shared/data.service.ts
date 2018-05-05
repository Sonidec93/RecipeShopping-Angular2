import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { RecipeService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx';
import { Ingredient } from './ingredient.model';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
@Injectable()
export class DataService {
//httpClient update in angular 4
  constructor(private http:HttpClient,private recipeService:RecipeService,private authService:AuthService) { }

  storeRecipes(){
    // return this.http.put('https://recipeproject-8962f.firebaseio.com/recipes.json?auth='+this.authService.getToken(),this.recipeService.getRecipe(),{observe:'body',headers:new HttpHeaders().set('mygame','football').append('age','24')});
    const req=new HttpRequest('PUT','https://recipeproject-8962f.firebaseio.com/recipes.json', this.recipeService.getRecipe(),{headers:new HttpHeaders().set('mygame','football'),params:new HttpParams().set('auth',this.authService.getToken()),reportProgress:true});//report progress helps when we want to download or upload the file and show a progress bar for it there we can divide loaded/total to show the progress bar
    return this.http.request(req);
  }

  getRecipes(){
    console.log('here');
    //by default the observe is body and the responseType:json
    this.http.get<Recipe[]>('https://recipeproject-8962f.firebaseio.com/recipes.json?auth='+this.authService.getToken(),{observe:'body',responseType:'json'}).map((recipes:Recipe[])=>{
  //  const recipes:Recipe []=response.json();//new httpClient know what type of object is coming back and also we have provided a type returning in get 

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
