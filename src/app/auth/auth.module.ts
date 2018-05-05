import { NgModule } from "@angular/core";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignupComponent } from "./signup/signup.component";
import { FormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        SignupComponent,
        SignInComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AuthRoutingModule
    ]

})
export class AuthModule { }