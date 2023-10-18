import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivateuserPage } from './activateuser.page';

const routes: Routes = [
  {
    path: '',
    component: ActivateuserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivateuserPageRoutingModule {}
