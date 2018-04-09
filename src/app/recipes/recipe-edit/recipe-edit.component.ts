import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipeForm: FormGroup;
  recipeEditFlag: boolean = false;
  recipeIndex: number;
  recipe: Recipe;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }


  private init() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let ingredientsArray = new FormArray([]);

    if (this.recipeEditFlag) {
      this.recipe = this.recipeService.getRecipe()[this.recipeIndex];
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
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'ingredients': ingredientsArray

    })
    console.log(this.recipeForm);
  }

  ngOnInit() {


    this.route.params.subscribe((params: Params) => {
      this.recipeIndex = +params['id'];
      this.recipeEditFlag = params['id'] != null
      this.init();

    })


  }

  saveRecipe() {
    console.log(this.recipeForm);
  }
}
