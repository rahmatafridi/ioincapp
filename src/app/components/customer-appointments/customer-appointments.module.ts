import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CustomerAppointmentsComponent } from './customer-appointments.component';



@NgModule({
  declarations: [CustomerAppointmentsComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports:[CustomerAppointmentsComponent]
})
export class CustomerAppointmentsModule { }
