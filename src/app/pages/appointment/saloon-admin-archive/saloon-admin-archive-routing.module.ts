import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaloonAdminArchivePage } from './saloon-admin-archive.page';

const routes: Routes = [
  {
    path: '',
    component: SaloonAdminArchivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaloonAdminArchivePageRoutingModule {}
