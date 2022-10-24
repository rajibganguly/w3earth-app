import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDashbaordComponent } from './components/project-dashbaord/project-dashbaord.component';

const projectRoutes: Routes = [
  {
    path: '',
    component: ProjectDashbaordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(projectRoutes)],
  exports: [],
})
export class ProjectRoutingModule {}
