import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaloonAdminArchiveAppointmentsComponent } from './saloon-admin-archive-appointments.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [SaloonAdminArchiveAppointmentsComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports:[SaloonAdminArchiveAppointmentsComponent]
})
export class SaloonAdminArchiveAppointmentsModule { }
