import { NgModule } from "@angular/core";
import { DropdownDirective } from "./dropdown.directive";

@NgModule({
    declarations: [
        DropdownDirective
    ],
    exports: [DropdownDirective]//the reason why we are exporting this direcive is because everything declared inside the module is available only to that module so to make it available we have to export it.
})
export class SharedModule { }