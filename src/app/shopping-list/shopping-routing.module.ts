import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list.component";
import { AuthguardService } from "../auth/authguard.service";

const shoppingRoutes: Routes = [{ path: 'shoppinglist', canActivate: [AuthguardService], component: ShoppingListComponent }]
@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(shoppingRoutes)//we use forRoot only for the root module and forChild for the child routes
    ],
    exports: [
        RouterModule
    ]

})
export class ShoppingRoutingModule {

}