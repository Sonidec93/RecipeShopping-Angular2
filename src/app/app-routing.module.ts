import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailsComponent } from "./recipes/recipe-details/recipe-details.component";
import { RecipeNotSelectedComponent } from "./recipes/recipe-not-selected/recipe-not-selected.component";
import { NewrecipeComponent } from "./recipes/newrecipe/newrecipe.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";


const route: Routes = [{ path: '', redirectTo: '/recipes', pathMatch: 'full' }, { path: 'recipes', component: RecipesComponent, children: [{ path: '', component: RecipeNotSelectedComponent, pathMatch: 'full' }, { path: 'new', component: RecipeEditComponent }, { path: ':id', component: RecipeDetailsComponent }, { path: ':id/edit', component: RecipeEditComponent }] }, { path: 'shoppinglist', component: ShoppingListComponent }];
@NgModule({
    imports: [
        RouterModule.forRoot(route)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {


}