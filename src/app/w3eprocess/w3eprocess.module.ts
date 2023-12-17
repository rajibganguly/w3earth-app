import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyprocessComponent } from './myprocess/myprocess.component';
import { W3eProcessRoutingModule } from './w3eprocess-routing.module';



@NgModule({
  declarations: [
    MyprocessComponent
  ],
  imports: [
    CommonModule,
    W3eProcessRoutingModule
  ]
})
export class W3eprocessModule { }
