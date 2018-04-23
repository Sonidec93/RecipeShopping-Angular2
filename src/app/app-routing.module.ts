import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailsComponent } from "./recipes/recipe-details/recipe-details.component";
import { RecipeNotSelectedComponent } from "./recipes/recipe-not-selected/recipe-not-selected.component";
import { NewrecipeComponent } from "./recipes/newrecipe/newrecipe.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { SignInComponent } from "./auth/sign-in/sign-in.component";
import { AuthguardService } from "./auth/authguard.service";


const route: Routes = [{ path: '', redirectTo: '/signIn', pathMatch: 'full' },{path:'signup',component:SignupComponent},{path:'signIn',component:SignInComponent}, { path: 'recipes', component: RecipesComponent,canActivate:[AuthguardService], children: [{ path: '', component: RecipeNotSelectedComponent, pathMatch: 'full' }, { path: 'new', component: RecipeEditComponent }, { path: ':id', component: RecipeDetailsComponent }, { path: ':id/edit', component: RecipeEditComponent }] }, { path: 'shoppinglist', canActivate:[AuthguardService],canActivateChild:[AuthguardService] ,component: ShoppingListComponent }];
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