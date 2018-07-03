import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.action'



export interface State {
    ingredients: Ingredient[],
    editedIngredient: Ingredient,
    editedIndex: number
}

const initialState: State = {
    ingredients: [new Ingredient('Apples', 5), new Ingredient('oranges', 10)],
    editedIngredient: null,
    editedIndex: -1

};
export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListAction) {
    switch (action.type) {

        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            }
        case ShoppingListActions.UPDATE_INGREDIENT:
            // const ingredient = state.ingredients[action.payload.index];
            // const updatedIngredient = { ...ingredient, ...action.payload.ingredient };
            const ingredients = [...state.ingredients];
            ingredients[state.editedIndex] = action.payload;
            return {
                ...state,
                ingredients: ingredients
            }
        case ShoppingListActions.DELETE_INGREDIENT:
            const oldIngredients = [...state.ingredients];
            oldIngredients.splice(state.editedIndex, 1);
            return {
                ...state,
                ingredients: oldIngredients
            }
        case ShoppingListActions.EDIT_INGREDIENT:
            const ing = { ...state.ingredients[action.payload] }
            return {
                ...state,
                editedIngredient: ing,
                editedIndex: action.payload
            }
        case ShoppingListActions.STOP_EDIT:
            return {
                ...state,
                editedIndex: -1,
                editedIngredient: null
            }
        default:
            return state;

    }

}