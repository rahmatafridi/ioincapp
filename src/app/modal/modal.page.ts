import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, NgForm } from '@angular/forms';
import { LoaderService } from 'src/app/services/loader.service';
import { ConsentRequest } from '../models/consent/ConsentRequest';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  // public checkedbtn: boolean = true;
  isChecked: boolean = true;
  constructor(private route:Router,private loginService: AccountService,private modalCtrl: ModalController, private ionLoader: LoaderService
    ) { }
    //checkedbtn : boolean = false
    // changeEvent(event) {
    //   if (event.target.checked) {
    //     this.checkedbtn = true
    //   }
    //   this.checkedbtn = false;
    // }
  ngOnInit() {
  }
  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalCtrl.dismiss(closeModal);
  }
 async  onSubmit(form:NgForm) {
  if( form.controls['name'].value=="")
  {
    window.alert('Enter Doctor Name.');
    return;
  }
  debugger
  if (!this.isChecked) {
    window.alert('Please confirm');
    return;
  }
  var name = form.controls['name'].value;
  
  this.ionLoader.showLoader();
  var consentResponse = new ConsentRequest();
   consentResponse.note= name;
   consentResponse.userid= this.loginService.GetLoggedInUserId();

   this.loginService.UpdateConsent(consentResponse).subscribe( 
    (response)=>{
      this.ionLoader.hideLoader();
      this.close();
    })



 }
}
