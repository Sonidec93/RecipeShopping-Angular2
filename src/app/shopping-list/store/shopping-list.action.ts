import { Action } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";

export const ADD_INGREDIENT='ADD_INGREDIENT';
export const ADD_INGREDIENTS='ADD_INGREDIENTS';
export const UPDATE_INGREDIENT='UPDATE_INGREDIENT';
export const DELETE_INGREDIENT='DELETE_INGREDIENT';
export const EDIT_INGREDIENT='EDIT_INGREDIENT';
export const STOP_EDIT='STOP_EDIT';


export class AddIngredient implements Action {
    constructor(public payload:Ingredient){}
    readonly type=ADD_INGREDIENT;
    
}

export class AddIngredients implements Action {
    constructor(public payload:Ingredient []){}
    readonly type=ADD_INGREDIENTS;
    
}

export class UpdateIngredients implements Action {
    // constructor(public payload:{index:number,ingredient:Ingredient}){}
    constructor(public payload:Ingredient){}
    readonly type=UPDATE_INGREDIENT;
    
}
export class DeleteIngredients implements Action {
    constructor(){}
    readonly type=DELETE_INGREDIENT;
    
}
export class EditIngredient implements Action {
    constructor(public payload:number){}
    readonly type=EDIT_INGREDIENT;
    
}
export class StopEdit implements Action {
    constructor(){}
    readonly type=STOP_EDIT;
    
}
export type ShoppingListAction=AddIngredient | AddIngredients | DeleteIngredients |UpdateIngredients|EditIngredient|StopEdit;