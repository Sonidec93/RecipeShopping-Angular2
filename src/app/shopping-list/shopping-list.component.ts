import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit, OnDestroy {
  mySubscription: Subscription;

  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }
  ingredients: Ingredient[];

  constructor(private shoppingService: ShoppingListService) {

  }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.mySubscription = this.shoppingService.ingredientEmitter.subscribe((ingredients: Ingredient[]) => {
      console.log(ingredients);
      this.ingredients = ingredients;
    });
  }
  // addIngredient(ingredient:Ingredient){
  //   this.ingredients.push(ingredient);
  // }

  onEdit(index:number){
    this.shoppingService.editedItem.next(index);

  }

}
