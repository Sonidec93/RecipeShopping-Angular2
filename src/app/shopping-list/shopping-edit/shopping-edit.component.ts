import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingListService } from '../shoppinglist.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.action';
import * as fromApp from '../../store/app.reducer';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  ngOnDestroy() {
    this.editedItemSubscription.unsubscribe();
  }
  // @ViewChild("nameInput")  nameInputRef:ElementRef;
  // @ViewChild("amountInput")amountInputRef:ElementRef;
  // @Output() ingredientAdded=new EventEmitter<Ingredient>();
  @ViewChild("f") myForm: NgForm;
  editedItemSubscription: Subscription;
  editFlag = false;
  // ingIndex: number;
  // editedIngredient: Ingredient;
  constructor(private service: ShoppingListService,private store:Store<fromApp.AppState>) { }

  ngOnInit() {
    // this.editedItemSubscription = this.service.editedItem.subscribe((index: number) => {
    //   this.ingIndex = index;
    //   this.editFlag = true;
    //   this.store.select('shoppingList').subscribe((object)=>{
    //     this.editedIngredient=object.ingredients[index];
    //   })
    //   // this.editedIngredient = this.service.getIngredient(index);
    //   this.myForm.setValue({
    //     name: this.editedIngredient.name,
    //     amount: this.editedIngredient.amount
    //   });

    // })
    this.editedItemSubscription=this.store.select('shoppingList').subscribe(data=>{
      if(data.editedIndex>-1){
        // this.ingIndex=data.editedIndex
        this.editFlag=true;
        // this.editedIngredient=data.editedIngredient;
        this.myForm.setValue({
              name: data.editedIngredient.name,
              amount: data.editedIngredient.amount
            });
      }
      else{
        this.editFlag=false;
      }
    })
  }
  onClear() {
    this.myForm.reset();
    this.editFlag = false;
  }
  onDelete() {
    // this.service.deleteIngredient(this.ingIndex);
    this.store.dispatch(new ShoppingListActions.DeleteIngredients());
    this.editFlag=false;
    this.myForm.reset();
  }
  onAddItem(form: NgForm) {
    const value = form.value;
    const ingred = new Ingredient(value.name, value.amount);
    if (this.editFlag)
      // this.service.updateIngredient(this.ingIndex, ingred);
      this.store.dispatch(new ShoppingListActions.UpdateIngredients(ingred));
    else
      this.store.dispatch(new ShoppingListActions.AddIngredient(ingred));

    this.editFlag = false;
    this.myForm.reset();
  }
}
