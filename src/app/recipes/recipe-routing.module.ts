import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route, Routes, Router } from "@angular/router";
import { AuthguardService } from "../auth/authguard.service";
import { RecipesComponent } from "./recipes.component";
import { RecipeNotSelectedComponent } from "./recipe-not-selected/recipe-not-selected.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";


const recipeRoutes:Routes=[{ path: '', component: RecipesComponent,canActivate:[AuthguardService], children: [{ path: '', component: RecipeNotSelectedComponent, pathMatch: 'full' }, { path: 'new', component: RecipeEditComponent }, { path: ':id', component: RecipeDetailsComponent }, { path: ':id/edit', component: RecipeEditComponent }] }];
//I have removed the recipes path name from parent recipe route because i am using loadChildren property in the app-routing module wher i have mentioned the recipes path to ensure that the the entire module of recipes lazily loads to increase performance of the app


@NgModule({
    declarations:[],
    imports:[
        CommonModule,
        RouterModule.forChild(recipeRoutes)
    ],
    exports:[RouterModule]
})
export class RecipesRoutingModule{}