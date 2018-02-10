import { Component, OnInit,ElementRef,ViewChild,EventEmitter,Output} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model'
import { ShoppingListService } from '../shoppinglist.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild("nameInput")  nameInputRef:ElementRef;
@ViewChild("amountInput")amountInputRef:ElementRef;
// @Output() ingredientAdded=new EventEmitter<Ingredient>();
  constructor(private service:ShoppingListService) { }

  ngOnInit() {
  }

onAddItem(){
  const  ingred=new Ingredient(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value);
  this.service.addIngredients(ingred);
}
}
