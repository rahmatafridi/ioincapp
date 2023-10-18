import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchsaloonforappointmentPage } from './searchsaloonforappointment.page';

const routes: Routes = [
  {
    path: '',
    component: SearchsaloonforappointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchsaloonforappointmentPageRoutingModule {}
