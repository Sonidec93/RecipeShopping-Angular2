import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingredient[];
  
  constructor(private shoppingService:ShoppingListService) {
    
   }

  ngOnInit() {
    this.ingredients=this.shoppingService.getIngredients();
    this.shoppingService.ingredientEmitter.subscribe((ingredients:Ingredient[])=>{
this.ingredients=ingredients;
    });
  }
  // addIngredient(ingredient:Ingredient){
  //   this.ingredients.push(ingredient);
  // }

}
