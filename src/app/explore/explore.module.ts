import { NgModule } from '@angular/core';
import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { AstrologyComponent } from './astrology/astrology.component';
import { NasaSateComponent } from './nasa-sate/nasa-sate.component';
import { AdviceAPIComponent } from './advice-api/advice-api.component';



@NgModule({
  declarations: [
    ExploreComponent,
    AstrologyComponent,
    NasaSateComponent,
    AdviceAPIComponent
  ],
  imports: [
    ExploreRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class ExploreModule { }
