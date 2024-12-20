import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ListComponent } from "./list/list.component";
import { HeroComponent } from "./hero/hero.component";

@NgModule({
    declarations:[
        ListComponent,
        HeroComponent
    ],
    imports: [
        CommonModule,
        FormsModule, 
    ],
    exports: [
        ListComponent,
        HeroComponent
    ]
})
export class HeroesModule { }