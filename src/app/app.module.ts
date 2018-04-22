import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shoppinglist.service';
import { RouterModule, Route, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { RecipeNotSelectedComponent } from './recipes/recipe-not-selected/recipe-not-selected.component';
import { NewrecipeComponent } from './recipes/newrecipe/newrecipe.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipes/recipes.service';
import { DataService } from './shared/data.service';

// const routes: Routes = [{ path: 'recipes', component: RecipesComponent, pathMatch: 'full' }, { path: 'shoppinglist', component: ShoppingListComponent, pathMatch: 'full' }];
@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    HeaderComponent,
    RecipeDetailsComponent,
    RecipeListComponent,
    ShoppingListComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeNotSelectedComponent,
    NewrecipeComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    // RouterModule.forRoot(routes)
    AppRoutingModule
  ],
  providers: [ShoppingListService,RecipeService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
