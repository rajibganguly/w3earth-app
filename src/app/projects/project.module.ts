import { NgModule } from '@angular/core'
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectDashbaordComponent } from './components/project-dashbaord/project-dashbaord.component';
import { SharedModule } from '../shared/shared.module';
import { ListOfTopicComponent } from './components/list-of-topic/list-of-topic.component';
import { CardSampleComponent } from './components/card-sample/card-sample.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ProjectDashbaordComponent,
    ListOfTopicComponent,
    CardSampleComponent
  ],
  imports: [
    ProjectRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class ProjectModule { }
