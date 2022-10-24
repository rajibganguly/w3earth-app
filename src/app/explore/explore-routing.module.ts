import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './explore.component';

const projectRoutes: Routes = [
  {
    path: '',
    component: ExploreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(projectRoutes)],
  exports: [],
})
export class ExploreRoutingModule {}
