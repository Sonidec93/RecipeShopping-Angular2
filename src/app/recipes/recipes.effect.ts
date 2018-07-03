import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as firebase from 'firebase';
import { fromPromise } from "rxjs/observable/fromPromise";
import { Recipe } from "./recipe.model";
import * as RecipeActions from './store/recipes.action';
import * as fromRecipe from "./store/recipes.reducer";


@Injectable()
export class RecipeEffects {
    constructor(public actions$: Actions, public http: HttpClient, public store: Store<fromRecipe.FeatureState>) {

    }
    @Effect()
    recipeFetch = this.actions$.ofType(RecipeActions.FETCH_RECIPES).switchMap((action: RecipeActions.fetchRecipes) => {
        return fromPromise(firebase.auth().currentUser.getIdToken());
    }).switchMap((token: string) => {
        console.log(token);
        return this.http.get<Recipe[]>('https://recipeproject-8962f.firebaseio.com/recipes.json?auth=' + token, { observe: 'body', responseType: 'json' }).map((recipes: Recipe[]) => {
            //  const recipes:Recipe []=response.json();//new httpClient know what type of object is coming back and also we have provided a type returning in get 

            for (let recipe of recipes) {
                if (!recipe['ingredients']) {
                    recipe.ingredients = [];
                }
            }
            return recipes;
        })


    }).map((recipes: Recipe[]) => {
        console.log('setting');
        return {
            type: RecipeActions.SET_RECIPES,
            payload: recipes
        }
    });

    @Effect({ dispatch: false })
    recipeSave = this.actions$.ofType(RecipeActions.SAVE_RECIPES).switchMap(()=>{
        return fromPromise(firebase.auth().currentUser.getIdToken());
    }).withLatestFrom(this.store.select('recipes')).switchMap(([token,state])=>{
        
        const req = new HttpRequest('PUT', 'https://recipeproject-8962f.firebaseio.com/recipes.json', state.recipes, { headers: new HttpHeaders().set('mygame', 'football'), params: new HttpParams().set('auth',token), reportProgress: true });//report progress helps when we want to download or upload the file and show a progress bar for it there we can divide loaded/total to show the progress bar
        return this.http.request(req);
    })


}