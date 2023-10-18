import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  loginForm = new FormControl();
  isUserLoggedIn : boolean;
  message:string;
  error:string;
  
  constructor(private route:Router
    ,private loginService:AccountService
    ,private ionLoader: LoaderService) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm)
  {
    this.message=null;
    this.isUserLoggedIn = null;
    this.ionLoader.showLoader();
    var username = form.controls['email'].value;

    this.loginService.ForgotPassword(username).subscribe(
      (response)=>{
        this.OnLoginSuccess(response,form);
      },
      (error)=>{
        console.log(error);
        this.error = error;
        this.ionLoader.hideLoader();
      });
    
  }

  OnLoginSuccess(response: boolean,form:NgForm)
  {
    if(response !=null)
        {
          this.ionLoader.hideLoader();          
          form.resetForm();
          this.message = "Email has been sent to reset password.";
          
        }
        else
        {
            this.isUserLoggedIn = false;
            this.error = "Email does not exist.";
            this.ionLoader.hideLoader();
        }
  }

  OnCancel()
  {
    this.route.navigate(['signin'])
  }
}
