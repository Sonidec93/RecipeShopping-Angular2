import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.action';
import { Ingredient } from '../../shared/ingredient.model';
import * as fromApp from '../../store/app.reducer';
import * as fromRecipe from '../store/recipes.reducer';
import * as RecipeActions from '../store/recipes.action';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {


  selectedRecipeDetails: Recipe;
  recipeId: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router, private store: Store<fromRecipe.FeatureState>) { }

  ngOnInit() {
    // this.selectedRecipeDetails = this.recipeService.getRecipe()[+this.route.snapshot.params['id']];
    this.route.params.subscribe((params: Params) => {

      this.recipeId = +params['id'];

      this.store.select('recipes').subscribe((data) => {
        this.selectedRecipeDetails = data.recipes[this.recipeId];
      })

    })
  }

  addIngredients() {
    console.log('inside')
    // this.recipeService.addIngredientsToShoppingList(this.selectedRecipeDetails.ingredients);
    console.log(this.selectedRecipeDetails.ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.selectedRecipeDetails.ingredients));
  }
  editShopping() {
    this.router.navigate(['../', this.recipeId, 'edit'], { relativeTo: this.route });
  }
  deleteRecipe() {
    // this.recipeService.deleteRecipe(this.recipeId);
    this.store.dispatch(new RecipeActions.deleteRecipe(this.recipeId));

    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
