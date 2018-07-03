import { Recipe } from "../recipe.model";
import { Ingredient } from "../../shared/ingredient.model";
import * as RecipeActions from './recipes.action';
import { AppState } from "../../store/app.reducer";

export interface FeatureState extends AppState {
    recipes: State
}

export interface State {
    recipes: Recipe[]
}

const initialState: State = {
    recipes: [new Recipe('Salad', 'Salad with BreadLoaf', 'http://www.seriouseats.com/images/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1.jpg', [new Ingredient('Meat', 5)]), new Recipe('Pizza', 'Pepporini pizza', 'https://www.cicis.com/media/1243/pizza_adven_zestypepperoni.png', [new Ingredient('pepporini', 12)])]

}

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
    switch (action.type) {
        case RecipeActions.SET_RECIPES:
            return {
                ...state,
                recipes: action.payload
            }
        case RecipeActions.ADD_RECIPE:
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            }
        case RecipeActions.DELETE_RECIPE:
            const oldRecipes = [...state.recipes];
            oldRecipes.splice(action.payload, 1);
            return {
                ...state,
                recipes: oldRecipes
            }
        case RecipeActions.UPDATE_RECIPE:
            const rec = [...state.recipes];
            rec[action.payload.index] = action.payload.updatedRecipe
            return {
                ...state,
                recipes: rec
            }
        default:
            return state;
    }

}