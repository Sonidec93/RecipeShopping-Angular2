import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignupComponent } from "./signup/signup.component";
import { CommonModule } from "@angular/common";

const authRoutes:Routes=[{path:'signup',component:SignupComponent},{path:'signIn',component:SignInComponent}]

@NgModule({
    declarations:[],
    imports:[
        
        RouterModule.forChild(authRoutes)
    ],
    exports:[
        CommonModule,
        RouterModule
    ]
})
export class AuthRoutingModule{}