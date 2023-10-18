import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DoctorAppointmentsComponent } from './doctor-appointments.component';



@NgModule({
  declarations: [DoctorAppointmentsComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports:[DoctorAppointmentsComponent]
})
export class DoctorAppointmentsModule { }
