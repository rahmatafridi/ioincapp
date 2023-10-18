import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchsaloonforappointmentPageRoutingModule } from './searchsaloonforappointment-routing.module';
import { AutoCompleteModule } from 'ionic4-auto-complete';
import { SearchsaloonforappointmentPage } from './searchsaloonforappointment.page';
// import { AutocompleteLibModule } from 'angular-ng-autocomplete';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoCompleteModule,
    // AutocompleteLibModule,
    SearchsaloonforappointmentPageRoutingModule
  ],
  declarations: [SearchsaloonforappointmentPage]
})
export class SearchsaloonforappointmentPageModule {}
