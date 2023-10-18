import { BaseService } from './base.service';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { SignInResponse } from "../models/account/SignInResponse";
import { SignUpResponse } from "../models/account/SignUpResponse";
import { SignUpRequest } from '../models/account/SignUpRequest';
import { ChangePasswordRequest } from '../models/user/ChangePasswordRequest';
import { ChangePasswordByTokenRequest } from '../models/account/ChangePasswordByTokenRequest';
import { UserDeviceRequest } from '../models/user/UserDeviceRequest';
import { UserDeviceResponse } from '../models/user/UserDeviceResponse';
import { Subject } from 'rxjs';
import { ConsentResponse } from '../models/consent/ConsentResponse';
import {ConsentRequest} from '../models/consent/ConsentRequest';
import { PageResponse } from '../models/PageResponse';
import { Products } from '../models/account/Products';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  userObject: SignInResponse;
  signIn: EventEmitter<any> =new EventEmitter();
  private fooSubject = new Subject<any>();
  constructor(private baseService: BaseService) {

  }

  Authenticate(Username: string, Password: string) {
    let params = new HttpParams()
      .append('username', Username)
      .append('password', Password);
    console.log(params);
    return this.baseService.postWithParams<SignInResponse>("Account/Authenticate", params).pipe(
      map(response => {
        if (response != null) {
          this.userObject = response;
          this.signIn.emit(response);  
          window.localStorage.setItem("user", JSON.stringify(response));
        }
        return response;
      })
    );
  }
  getProducts() {
    return this.baseService.gets<PageResponse<Products>>("Account/LoadProducts").pipe(
      map(response => {

        return response;
      })
    );
}
  getConsent(userid:number){
    return this.baseService.gets<ConsentResponse[]>("Consent/GetConsent?userId="+userid).pipe(
      map(response => {
        
        return response;
      })
    );
  }
  IsUserLoggedIn(): boolean {
    if (this.GetUserObject() != null)
      return true;
    return false;
  }
  GetLoggedInUserId():number {
    return this.userObject.id;
  }
  GetLoggedInUserName(): string {
    if (this.GetUserObject() != null) {
      return this.userObject.firstname + " " + this.userObject.lastname;
    }
    return null;
  }

  GetLoggedInUserRole(): string {
    if (this.GetUserObject() != null) {
      return this.userObject.userRole;
    }
    return null;
  }
  GetLoggedInUserRoleId(): number {
    if (this.GetUserObject() != null) {
      return this.userObject.userRoleId;
    }
    return null;
  }

  GetLoggedInUserToken(): string {
    if (this.GetUserObject() != null) {
      return this.userObject.token;
    }
    return null;
  }

  RegisterUser(registerUser: SignUpRequest) {
    return this.baseService.postAsJsons<SignUpResponse>("Account/Register", registerUser).pipe(
      map(response => {
        return response;
      })
    );
  }

  public GetUserObject() {
    if (window.localStorage.getItem("user") != null) {
      this.userObject = JSON.parse(window.localStorage.getItem("user")) as SignInResponse;
      return this.userObject;
    }
  }

  public ChangePassword(changePassword: ChangePasswordRequest) {
    return this.baseService.postAsJsons<boolean>("Account/ChangePassword", changePassword).pipe(
      map(response => {
        return response;
      })
    );
  }
  public UpdateConsent(consent: ConsentRequest) {
    return this.baseService.postAsJsons<ConsentRequest>("Consent/UpdateConsent", consent).pipe(
      map(response => {
        return response;
      })
    );
  }

  public ChangePasswordByToken(changePassword: ChangePasswordByTokenRequest) {
    return this.baseService.postAsJsons<boolean>("Account/ChangePasswordByToken", changePassword).pipe(
      map(response => {
        return response;
      })
    );
  }

  public ActivateUserAccount(token: string) {
    let params = new HttpParams()
    .append('token', token);
    return this.baseService.postWithParams<boolean>("Account/ActivateAccount", params).pipe(
      map(response => {
        return response;
      })
    );
  }

  public ForgotPassword(email: string) {
    let params = new HttpParams()
      .append('email', email);
    console.log(params);
    return this.baseService.postWithParams<boolean>("Account/ForgotPassword", params).pipe(
      map(response => {
        return response;
      })
    );
  }

  public RemoveUserObject() {
    window.localStorage.removeItem("user");
  }

  public GetLoginEventEmitter()
  {
    return this.signIn;
  }

  public RegisterUserDevice(userDevice:UserDeviceRequest)
  {
    return this.baseService.postAsJsons<boolean>("Users/SaveUserDevice",userDevice).pipe(
      map(response => {
        
        return response;
      })
    );
  }

  public GetUserDeviceToken(userId:number,deviceId:string)
  {
    return this.baseService.gets<UserDeviceResponse>("Users/GetUserDeviceToken?userId="+userId+"&deviceId="+deviceId).pipe(
      map(response => {
        
        return response;
      })
    );
  }


  // public isAuthenticated(): boolean {
  //   if (window.sessionStorage.getItem("user") != null) {
  //   // Check whether the token is expired and return
  //   // true or false
  //   return !this.jwtHelper.isTokenExpired(this.userObject.token);
  //   }
  //   return false;
  // }
}
