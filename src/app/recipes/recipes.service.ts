import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppinglist.service";


@Injectable()
export class RecipeService {
    
    private recipes: Recipe[] = [new Recipe('Salad', 'Salad with BreadLoaf', 'http://www.seriouseats.com/images/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1.jpg', [new Ingredient('Meat', 5)]),new Recipe('Pizza', 'Pepporini pizza', 'https://www.cicis.com/media/1243/pizza_adven_zestypepperoni.png', [new Ingredient('pepporini', 12)])];
    constructor(private slService: ShoppingListService) { }
    getRecipe() {
        return this.recipes.slice();
    }


    addIngredientsToShoppingList(Ingredients: Ingredient[]) {
        console.log(Ingredients)
        this.slService.addIngredientsToList(Ingredients);
    }

}





