import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpRequest } from 'src/app/models/account/SignUpRequest';
import { Roles } from 'src/app/models/Enum/Role';
import { AccountService } from 'src/app/services/account.service';
import { LoaderService } from 'src/app/services/loader.service';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  error:string;
  success:string;
  constructor(private route:Router,private loginService:AccountService,
    private ionLoader: LoaderService) { }

  ngOnInit() {
    
  }

  onSubmit(form:NgForm)
  {
    this.error = "";
    var firstname = form.controls['firstname'].value;
    var lastname = form.controls['lastname'].value;
    var username = form.controls['email'].value;
    var password = form.controls['password'].value;
    var mobilenumber = form.controls['mobilenumber'].value;
    var role = form.controls['role'].value;

    var registerUser = new SignUpRequest();
    registerUser.firstname = firstname;
    registerUser.lastname = lastname;
    registerUser.email = username;
    registerUser.mobileNumber = mobilenumber;
    registerUser.password = password;
    registerUser.userRoleId = parseInt(role); // Customer role id is 2.
    registerUser.selfRegistration = true;
    
    console.log(registerUser);
    this.ionLoader.showLoader();
    this.loginService.RegisterUser(registerUser).subscribe(
      (response)=>{
        if(response !=null)
        {
          if(registerUser.userRoleId == 2)
          {
            this.success="Your account has been created successfully. Check your email to activate your account.";
          }
          else
          {
            this.success="Thank you for using PressDots. Our team will contact you within 24-48 hours for verification.";
          }
          form.resetForm();
          this.ionLoader.hideLoader();
        }
        else
        {
            this.error = "";
            this.ionLoader.hideLoader();
        }
      },
      (error)=>{
        this.error = error;
        this.ionLoader.hideLoader();
        console.log(error);
      });
    
  }

  OnCancel()
  {
    this.route.navigate(['signin'])
  }
}
