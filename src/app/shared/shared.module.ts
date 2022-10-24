import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { TecnologyTabComponent } from './tecnology-tab/tecnology-tab.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TecnologyTabComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    MatTabsModule,
    MatStepperModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatListModule,
  ],
  exports: [
    MatSliderModule,
    MatTabsModule,
    MatStepperModule,
    MatIconModule,
    TecnologyTabComponent,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatListModule,
  ],
})
export class SharedModule {}
