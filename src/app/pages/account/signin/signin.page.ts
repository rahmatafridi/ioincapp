import { Component, OnInit, Output } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { EventEmitter } from 'events';
import { SignInResponse } from "src/app/models/account/SignInResponse";
import { Roles } from 'src/app/models/Enum/Role';
import { UserDeviceRequest } from 'src/app/models/user/UserDeviceRequest';
import { AccountService } from 'src/app/services/account.service';
import { DeviceService } from 'src/app/services/device.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  loginForm = new FormControl();
  isUserLoggedIn : boolean;
  message:string;
  

  constructor(private route:Router,private loginService:AccountService,private ionLoader: LoaderService
    ,private deviceService:DeviceService,private firebase: FirebaseX ) { }

  ngOnInit() {
    this.deviceService.getUniqueDeviceID();
  }

  onSubmit(form:NgForm)
  {
    this.message=null;
    this.isUserLoggedIn = null;
    this.ionLoader.showLoader();
    var username = form.controls['email'].value;
    var password = form.controls['password'].value;
    this.loginService.Authenticate(username, password).subscribe(
      (response)=>{
        this.OnLoginSuccess(response,form);
      },
      (error)=>{
        console.log(error);
        this.message = error;
        this.ionLoader.hideLoader();
      });
    
  }

  OnLoginSuccess(response: SignInResponse,form:NgForm)
  {
    if(response !=null)
        {
          this.ionLoader.hideLoader();
          this.loginService.GetUserDeviceToken(response.id,this.deviceService.getUniqueDeviceID()).subscribe((deviceResponse)=>{
            if(deviceResponse == null || deviceResponse.deviceToken == null ||deviceResponse.deviceToken == "")
            {
              this.firebase.getToken().then(token => {
                   var userDevice = new UserDeviceRequest();
                   userDevice.userId = response.id;
                   userDevice.deviceToken = token;
                   userDevice.deviceId = this.deviceService.getUniqueDeviceID();

                   this.loginService.RegisterUserDevice(userDevice).subscribe(()=>{});

              });
            }
          },(error)=>{
                  window.alert(error);
          });
          
            form.resetForm();
            this.isUserLoggedIn=true;
            this.route.navigate(['home']);   
                 
        }
        else
        {
            this.isUserLoggedIn = false;
            this.message = "Invalid username or password.";
            this.ionLoader.hideLoader();
        }
  }

  OnRegister()
  {
    this.route.navigate(['register'])
  }
}
