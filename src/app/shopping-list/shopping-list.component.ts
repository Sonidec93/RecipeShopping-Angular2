import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs/observable';
import * as fromApp from '../store/app.reducer';
import * as ShoppingListActions from './store/shopping-list.action';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ngOnDestroy(){
    this.store.dispatch(new ShoppingListActions.StopEdit())
  }
  // mySubscription: Subscription;

  // ngOnDestroy(): void {
  //   this.mySubscription.unsubscribe();
  // }
  // ingredients: Ingredient[];
  shoppingListState:Observable<{ingredients:Ingredient[]}>

  constructor(private shoppingService: ShoppingListService,private store:Store<fromApp.AppState>) {

  }

  ngOnInit() {
    // this.ingredients = this.shoppingService.getIngredients();
    this.shoppingListState=this.store.select('shoppingList');
    
    // this.mySubscription = this.shoppingService.ingredientEmitter.subscribe((ingredients: Ingredient[]) => {
    //   console.log(ingredients);
    //   this.ingredients = ingredients;
    // });commented when added reducers
  }
  // addIngredient(ingredient:Ingredient){
  //   this.ingredients.push(ingredient);
  // }

  onEdit(index:number){
    // this.shoppingService.editedItem.next(index);
    this.store.dispatch(new ShoppingListActions.EditIngredient(index));

  }

}
