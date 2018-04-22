import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  
  selectedRecipeDetails: Recipe;
  recipeId:number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.selectedRecipeDetails = this.recipeService.getRecipe()[+this.route.snapshot.params['id']];
    this.route.params.subscribe((params: Params) => {
      this.recipeId=+params['id'];
      this.selectedRecipeDetails = this.recipeService.getRecipe()[+params['id']];
    })
  }

  addIngredients() {
    console.log('inside')
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipeDetails.ingredients);
  }
  editShopping() {
    this.router.navigate(['../', this.recipeId,'edit'], { relativeTo: this.route });
  }
  deleteRecipe(){
    this.recipeService.deleteRecipe(this.recipeId);

    this.router.navigate(['../'],{relativeTo:this.route});
  }
}
