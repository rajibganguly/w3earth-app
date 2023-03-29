import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { SectiononeComponent } from './dashboard/sectionone/sectionone.component';
import { SectiontwoComponent } from './dashboard/sectiontwo/sectiontwo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataService } from './data-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveNasaNumbersDirective } from './directive-nasa-numbers.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    SectiononeComponent,
    SectiontwoComponent,
    DirectiveNasaNumbersDirective,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  exports: [SharedModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
