import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivateuserPageRoutingModule } from './activateuser-routing.module';

import { ActivateuserPage } from './activateuser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivateuserPageRoutingModule
  ],
  declarations: [ActivateuserPage]
})
export class ActivateuserPageModule {}
