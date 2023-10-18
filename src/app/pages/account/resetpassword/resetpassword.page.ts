import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangePasswordByTokenRequest } from 'src/app/models/account/ChangePasswordByTokenRequest';
import { AccountService } from 'src/app/services/account.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {
  loginForm = new FormControl();
  isUserLoggedIn : boolean;
  message:string;
  error:string;
  token:string;
  constructor(private route:Router
    ,private loginService:AccountService
    ,private ionLoader: LoaderService
    ,private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      if (params) {
        console.log(params);
        this.token=params['token'];
      }
    });
  }

  onSubmit(form:NgForm)
  {
    this.message=null;
    this.isUserLoggedIn = null;
    this.ionLoader.showLoader();
    var changePassword = new ChangePasswordByTokenRequest();
    if( form.controls['password'].value=="")
    {
      window.alert('Enter new password.');
      return;
    }
    changePassword.password = form.controls['password'].value;
    changePassword.token = this.token;
    
    this.loginService.ChangePasswordByToken(changePassword).subscribe(
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
          this.message = "Password has been changed.";
        }
        else
        {
            this.isUserLoggedIn = false;
            this.error = "Invalid request.";
            this.ionLoader.hideLoader();
        }
  }

  OnCancel()
  {
    this.route.navigate(['signin'])
  }
}
