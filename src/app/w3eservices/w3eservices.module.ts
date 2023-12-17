import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyservicesComponent } from './myservices/myservices.component';
import { W3eServicesRoutingModule } from './w3eService-routing.module';



@NgModule({
  declarations: [
    MyservicesComponent
  ],
  imports: [
    CommonModule,
    W3eServicesRoutingModule
  ]
})
export class W3eservicesModule { }
