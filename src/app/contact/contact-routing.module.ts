import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact-header/contact.component';

const projectRoutes: Routes = [
  {
    path: '',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(projectRoutes)],
  exports: [],
})
export class ContactRoutingModule {}
