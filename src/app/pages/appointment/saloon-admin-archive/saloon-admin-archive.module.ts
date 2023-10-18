import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaloonAdminArchivePageRoutingModule } from './saloon-admin-archive-routing.module';

import { SaloonAdminArchivePage } from './saloon-admin-archive.page';
import { SaloonAdminArchiveAppointmentsModule } from 'src/app/components/saloon-admin-archive-appointments/saloon-admin-archive-appointments.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaloonAdminArchivePageRoutingModule,
    SaloonAdminArchiveAppointmentsModule
  ],
  declarations: [SaloonAdminArchivePage]
})
export class SaloonAdminArchivePageModule {}
