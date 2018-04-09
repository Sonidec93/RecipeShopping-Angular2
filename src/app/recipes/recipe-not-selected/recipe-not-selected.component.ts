import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, RouterEvent, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-not-selected',
  templateUrl: './recipe-not-selected.component.html',
  styleUrls: ['./recipe-not-selected.component.css']
})
export class RecipeNotSelectedComponent implements OnInit {

 
 
  constructor() { }

  ngOnInit() {
    

  }

  

}
