import { Action } from "@ngrx/store";
import { Recipe } from "../recipe.model";
import { Type } from "@angular/core";



export const SET_RECIPES = 'SET_RECIPES';
export const ADD_RECIPE = 'ADD_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const FETCH_RECIPES='FETCH_RECIPES';
export const SAVE_RECIPES='SAVE_RECIPES';
export class setRecipe implements Action {
    constructor(public payload: Recipe[]) { }
    readonly type = SET_RECIPES;
}

export class addRecipe implements Action {
    readonly type = ADD_RECIPE;
    constructor(public payload: Recipe) {

    }
}
export class updateRecipe implements Action {
    readonly type = UPDATE_RECIPE;
    constructor(public payload: { index: number, updatedRecipe: Recipe }) { }
}
export class deleteRecipe implements Action {
    readonly type = DELETE_RECIPE;
    constructor(public payload: number) { }
}
export class fetchRecipes implements Action{
    readonly type= FETCH_RECIPES;
    constructor(){}
    
}
export class saveRecipes implements Action{
    readonly type=SAVE_RECIPES;
    constructor(){}

}

export type RecipeActions = setRecipe | updateRecipe | deleteRecipe | addRecipe |fetchRecipes |saveRecipes;