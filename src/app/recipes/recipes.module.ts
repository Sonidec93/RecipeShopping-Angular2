import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeNotSelectedComponent } from "./recipe-not-selected/recipe-not-selected.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { NewrecipeComponent } from "./newrecipe/newrecipe.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DropdownDirective } from "../shared/dropdown.directive";
import { CommonModule } from "@angular/common";
import { RecipesRoutingModule } from "./recipe-routing.module";
import { SharedModule } from "../shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { recipeReducer } from "./store/recipes.reducer";
import { EffectsModule } from "@ngrx/effects";
import { RecipeEffects } from "./recipes.effect";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeDetailsComponent,
        RecipeEditComponent, 
        RecipeNotSelectedComponent,
        RecipeItemComponent,
        RecipeListComponent,
        NewrecipeComponent,

    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
        SharedModule,
        StoreModule.forFeature('recipes',recipeReducer),
        EffectsModule.forFeature([RecipeEffects])
    ]
})
export class RecipeModule { }