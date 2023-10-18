import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { DentistModule } from '../account/dentist/dentist.module';
import { ProductModule } from 'src/app/components/product/product.module';
import { SaloonAdminAppointmentsModule } from 'src/app/components/saloon-admin-appointments/saloon-admin-appointments.module';
import { DoctorAppointmentsModule } from 'src/app/components/doctor-appointments/doctor-appointments.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    DentistModule,
    ProductModule,
    SaloonAdminAppointmentsModule,
    DoctorAppointmentsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
