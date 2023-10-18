import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaloonAdminAppointmentsComponent } from './saloon-admin-appointments.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [SaloonAdminAppointmentsComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports:[SaloonAdminAppointmentsComponent]
})
export class SaloonAdminAppointmentsModule { }
