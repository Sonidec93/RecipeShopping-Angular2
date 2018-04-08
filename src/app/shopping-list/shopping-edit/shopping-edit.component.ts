import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingListService } from '../shoppinglist.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
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
  ingIndex: number;
  editedIngredient: Ingredient;
  constructor(private service: ShoppingListService) { }

  ngOnInit() {
    this.editedItemSubscription = this.service.editedItem.subscribe((index: number) => {
      this.ingIndex = index;
      this.editFlag = true;
      this.editedIngredient = this.service.getIngredient(index);
      this.myForm.setValue({
        name: this.editedIngredient.name,
        amount: this.editedIngredient.amount
      });

    })
  }
  onClear() {
    this.myForm.reset();
    this.editFlag = false;
  }
  onDelete() {
    this.service.deleteIngredient(this.ingIndex);
    this.editFlag=false;
    this.myForm.reset();
  }
  onAddItem(form: NgForm) {
    const value = form.value;
    const ingred = new Ingredient(value.name, value.amount);
    if (this.editFlag)
      this.service.updateIngredient(this.ingIndex, ingred);
    else
      this.service.addIngredients(ingred);

    this.editFlag = false;
    this.myForm.reset();
  }
}
