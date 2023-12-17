import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyprocessComponent } from './myprocess/myprocess.component';

const w3eProcessRoutes: Routes = [
  {
    path: '',
    component: MyprocessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(w3eProcessRoutes)],
  exports: [],
})
export class W3eProcessRoutingModule {}
