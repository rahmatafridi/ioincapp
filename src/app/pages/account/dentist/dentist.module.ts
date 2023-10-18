import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DentistComponent } from './dentist.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [DentistComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot()  
  ],
  exports:[DentistComponent]
})
export class DentistModule { }
