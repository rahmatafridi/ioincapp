import { Component, NgZone, OnInit } from '@angular/core';

import { AlertController, Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AccountService } from './services/account.service';
import { Router } from '@angular/router';
import {Deeplinks} from '@ionic-native/deeplinks/ngx';
import { ResetpasswordPage } from './pages/account/resetpassword/resetpassword.page';
import { NetworkService } from './services/network.service';
import { ActivateuserPage } from './pages/account/activateuser/activateuser.page';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { DeviceService } from './services/device.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  
  loggedInUserName:string;
  loggedInUserRoleId:number;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loginService: AccountService,
    private router: Router,
    private deeplinks:Deeplinks,
    private alertController: AlertController,
    private zone:NgZone,
    public toastController: ToastController,
    public networkService: NetworkService,
    private firebase: FirebaseX,
    private deviceService:DeviceService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    /*this.platform.ready().then(() => {
      if (navigator.onLine) {
        console.log('Internet is connected');
     } else {
      window.alert('No internet connection');
     }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });*/

 

    
  }

  ngOnInit() {
    this.networkService.initializeNetworkEvents();

    /*this.networkService.getNetworkStatus().subscribe(async data => {
      console.log('platform ready', data);
      if(data && data.toString()=="0")
      {
        let toast = await this.toastController.create ({
          message:  'You are online now.',
          duration: 3000,
        });
        toast.present();
      }
      else
      {
        let toast = await this.toastController.create ({
          message:  'You are offline now.',
          duration: 3000,
        });
        toast.present();
      }
    });*/
   
    this.loginService.GetLoginEventEmitter().subscribe(item=> {
      this.loggedInUserName = item.firstname+" "+item.lastname;
      this.loggedInUserRoleId = item.userRoleId;
    });
    this.firebase.getToken().then(token => {console.log(`The token is ${token}`)
        window.alert(token);
    });
  }

  SignOut()
  {
    this.loginService.RemoveUserObject();
    this.loggedInUserName = "";
    this.loggedInUserRoleId =0;
    this.router.navigate(['signin']);
  }

  setupDeepLinks()
  {
    this.deeplinks.route({
      '/resetpassword/':ResetpasswordPage,
      '/Activate/':ActivateuserPage
    }).subscribe(match =>{
      this.zone.run(()=>{
        
        switch(match.$link.path.toLowerCase())       
        {
          case '/resetpassword/':
            this.router.navigateByUrl(`/resetpassword/${match.$args.token}`);
            break;
          case '/activate/':
            this.router.navigateByUrl(`/activateuser/${ encodeURIComponent(match.$args.token)}`);
            break;
        }
      })
      console.log('Successfully matched route', match);
    }, nomatch => {
      // nomatch.$link - the full link data
      console.error('Got a deeplink that didn\'t match', nomatch);
    });
  }

  ngAfterViewInit() {
    this.platform.ready().then(() => { 
      
      this.setupDeepLinks(); 
      
    })
    }

    
}


