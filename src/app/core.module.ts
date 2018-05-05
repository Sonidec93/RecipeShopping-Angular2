import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from "@angular/common";
import { AuthService } from "./auth/auth.service";
import { AuthguardService } from "./auth/authguard.service";
import { DataService } from "./shared/data.service";
import { RecipeService } from "./recipes/recipes.service";
import { ShoppingListService } from "./shopping-list/shoppinglist.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptors } from "./shared/auth-interceptors";

@NgModule({
    declarations:[
        HeaderComponent
    ],
    imports:[
        CommonModule,
        SharedModule,
        AppRoutingModule
    ],
    exports:[
        HeaderComponent,
        AppRoutingModule
    ],
    providers: [ShoppingListService,RecipeService,DataService,AuthguardService,AuthService,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptors,multi:true}]
    
})
export class CoreModule{}