import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailsComponent } from "./recipes/recipe-details/recipe-details.component";
import { RecipeNotSelectedComponent } from "./recipes/recipe-not-selected/recipe-not-selected.component";
import { NewrecipeComponent } from "./recipes/newrecipe/newrecipe.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { SignInComponent } from "./auth/sign-in/sign-in.component";
import { AuthguardService } from "./auth/authguard.service";


const route: Routes = [{ path: '', redirectTo: '/signIn', pathMatch: 'full' },{path:'recipes',loadChildren:'./recipes/recipes.module#RecipeModule',canLoad:[AuthguardService]}];
//canLoad property evaluates if the specified path can be accessed before actually loading it for this i have implemented canLoad function from CanLoad Interface in AuthGuardService
@NgModule({
    imports: [
        RouterModule.forRoot(route,{preloadingStrategy:PreloadAllModules})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {


}