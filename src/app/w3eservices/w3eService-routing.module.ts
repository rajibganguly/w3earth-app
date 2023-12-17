import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyservicesComponent } from './myservices/myservices.component';

const w3eServicesRoutes: Routes = [
  {
    path: '',
    component: MyservicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(w3eServicesRoutes)],
  exports: [],
})
export class W3eServicesRoutingModule {}
