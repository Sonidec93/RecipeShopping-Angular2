import { Ingredient, } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class ShoppingListService {

    private ingredients: Ingredient[] = [new Ingredient('Apples', 5), new Ingredient('oranges', 5)];
    editedItem = new Subject<number>();
    ingredientEmitter = new Subject<Ingredient[]>();
    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientEmitter.next(this.ingredients.slice());
    }
    getIngredient(index:number){
        return this.ingredients[index];
    }
    updateIngredient(index:number,ingredient:Ingredient){
        this.ingredients[index]=ingredient;
        this.ingredientEmitter.next(this.ingredients.slice());
    }
    addIngredientsToList(ingredients: Ingredient[]) {
        console.log(ingredients)
        this.ingredients.push(...ingredients);
        console.log(this.ingredients);
        this.ingredientEmitter.next(this.ingredients.slice());
    }
    deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        return this.ingredientEmitter.next(this.ingredients.slice());
    }
}