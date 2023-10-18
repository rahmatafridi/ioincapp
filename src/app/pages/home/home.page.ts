import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController ,ModalController} from '@ionic/angular';
import { Roles } from 'src/app/models/Enum/Role';
import { AccountService } from 'src/app/services/account.service';
import { ModalPage } from 'src/app/modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  loggedInUserName:string;
  loggedInUserRole:number;

  @ViewChild('nav') nav: NavController;
  
  constructor(private modalCtrl: ModalController,private loginService: AccountService,private menuCtrl:MenuController,private route:Router) { }

  ngOnInit() {
    this.loggedInUserName = this.loginService.GetLoggedInUserName();
    this.loggedInUserRole = this.loginService.GetLoggedInUserRoleId();
    this.loginService.GetLoginEventEmitter().subscribe(item=> {
      this.loggedInUserName = item.firstname+" "+item.lastname;
      this.loggedInUserRole = item.userRoleId;
    });
    if(this.loginService.GetUserObject().userRoleId == Roles.Customer)
    {
      
    }
    if(this.loginService.GetUserObject().userRole !="Administrator"){
      this.getConsent();

    }
  }
  async initModal() {
    
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        'name': ''
      }
    });

    
    return await modal.present();
  }

  getConsent(){
    var userId = this.loginService.GetLoggedInUserId();
     this.loginService.getConsent(userId).subscribe({
       next:(result)=>{
         if(result !=null){
          this.initModal();
         }
         //console.log(result);
       },
      // error: (err) => (this.errorMessage = err),
     })
  }
  onClick(page:any)
  {
    this.nav.navigateForward(page);
    this.menuCtrl.close();
  }

}
