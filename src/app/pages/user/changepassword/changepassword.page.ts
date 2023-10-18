import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ChangePasswordRequest } from 'src/app/models/user/ChangePasswordRequest';
import { AccountService } from 'src/app/services/account.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {

  error:string;
  success:string;
  
  constructor(private route:Router
    ,private loginService:AccountService
    ,private ionLoader: LoaderService
    ,private alertController: AlertController) { }

  ngOnInit() {

  }

  onSubmit(form:NgForm)
  {
    this.error = "";
    var oldpassword = form.controls['oldpassword'].value;
    var password = form.controls['password'].value;
    var confirmPassword = form.controls['confirmPassword'].value;

    if(password !== confirmPassword)
    {
      this.alertController.create({
        header: 'Error',
        subHeader: '',
        message: 'New password and confirm password should match.',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              
            }
          }
        ]
      }).then(res => {
        res.present();
      });
      return;
    }

 
    this.ionLoader.showLoader();
    var changePasswordRequest = new ChangePasswordRequest();
    changePasswordRequest.userId = this.loginService.GetUserObject().id;
    changePasswordRequest.password = password;
    changePasswordRequest.oldPassword = oldpassword;
    this.loginService.ChangePassword(changePasswordRequest).subscribe(
      (response)=>{
        if(response !=null)
        {
          this.ionLoader.hideLoader();
          this.alertController.create({
            header: 'Success',
            subHeader: '',
            message: 'Your password has been updated.',
            buttons: [
              {
                text: 'Ok',
                handler: () => {
                  
                }
              }
            ]
          }).then(res => {
            res.present();
          });
          form.resetForm();
          this.loginService.RemoveUserObject();
          this.route.navigate(['signin']);
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
    this.route.navigate(['home']);
  }
}
