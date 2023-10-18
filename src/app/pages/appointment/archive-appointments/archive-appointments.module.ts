import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArchiveAppointmentsPageRoutingModule } from './archive-appointments-routing.module';

import { ArchiveAppointmentsPage } from './archive-appointments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArchiveAppointmentsPageRoutingModule
  ],
  declarations: [ArchiveAppointmentsPage]
})
export class ArchiveAppointmentsPageModule {}
