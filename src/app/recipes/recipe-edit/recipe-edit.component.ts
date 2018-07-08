import { Component, OnInit, Pipe, OnDestroy } from '@angular/core';
import { FormGroup, FormArray, Validators, FormControl, FormArrayName } from '@angular/forms';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import * as fromRecipeState from '../store/recipes.reducer';
import * as fromRecipeAction from '../store/recipes.action';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})

export class RecipeEditComponent implements OnInit, OnDestroy {

  ngOnDestroy() {
    this.recipeSubscription.unsubscribe();
  }
  recipeForm: FormGroup;
  recipeEditFlag: boolean = false;
  recipeIndex: number;
  recipe: Recipe;
  recipeSubscription: Subscription;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router, private store: Store<fromRecipeState.FeatureState>) { }

  getArray() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  private init() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let ingredientsArray = new FormArray([]);

    if (this.recipeEditFlag) {
      this.recipeSubscription = this.store.select('recipes').subscribe((data) => {

        this.recipe = data.recipes[this.recipeIndex];
        recipeName = this.recipe.name;
        recipeImagePath = this.recipe.imagePath;
        recipeDescription = this.recipe.description;

        if (this.recipe.ingredients.length > 0) {
          for (let ingr of this.recipe.ingredients) {
            (<FormArray>ingredientsArray).push(new FormGroup({
              'name': new FormControl(ingr.name, Validators.required),
              'amount': new FormControl(ingr.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            }));
          }
        }
      });


    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'ingredients': ingredientsArray

    })
    // console.log(this.recipeForm);
  }

  ngOnInit() {


    this.route.params.subscribe((params: Params) => {
      this.recipeIndex = +params['id'];
      this.recipeEditFlag = params['id'] != null
      this.init();

    })


  }
  removeIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);

  }
  cancelChanges() {
    this.router.navigate(['/recipes']);
  }
  saveRecipe() {
    if (this.recipeEditFlag) {
      // this.recipeService.updateRecipe(this.recipeIndex, this.recipeForm.value);
      this.store.dispatch(new fromRecipeAction.updateRecipe({ index: this.recipeIndex, updatedRecipe: this.recipeForm.value }));
    }
    else {
      // this.recipeService.addNewRecipe(this.recipeForm.value);
      this.store.dispatch(new fromRecipeAction.addRecipe(this.recipeForm.value));
    }
    this.router.navigate(['/recipes']);
  }
  addNewIngredient() {
    var control = new FormGroup({
      'name': new FormControl(null, Validators.required),
      "amount": new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    });
    (<FormArray>this.recipeForm.get('ingredients')).push(control);
  }
}
