import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";


export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [new Recipe('Test Recipe', 'testing the recipe', 'http://www.seriouseats.com/images/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1.jpg')];
    getRecipe() {
        return this.recipes.slice();
    }



}





