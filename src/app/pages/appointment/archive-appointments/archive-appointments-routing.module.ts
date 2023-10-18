import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArchiveAppointmentsPage } from './archive-appointments.page';

const routes: Routes = [
  {
    path: '',
    component: ArchiveAppointmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArchiveAppointmentsPageRoutingModule {}
