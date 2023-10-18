import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAppointmentsPageRoutingModule } from './my-appointments-routing.module';

import { MyAppointmentsPage } from './my-appointments.page';
import { CustomerAppointmentsModule } from 'src/app/components/customer-appointments/customer-appointments.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAppointmentsPageRoutingModule,
    CustomerAppointmentsModule
  ],
  declarations: [MyAppointmentsPage]
})
export class MyAppointmentsPageModule {}
