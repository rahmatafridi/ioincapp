import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Roles } from 'src/app/models/Enum/Role';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.page.html',
  styleUrls: ['./my-appointments.page.scss'],
})
export class MyAppointmentsPage implements OnInit {

  loggedInUserName:string;
  loggedInUserRole:number;

  @ViewChild('nav') nav: NavController;
  constructor(private loginService: AccountService,private menuCtrl:MenuController) { }

  ngOnInit() {
    this.loggedInUserName = this.loginService.GetLoggedInUserName();
    this.loggedInUserRole = this.loginService.GetLoggedInUserRoleId();
    if(this.loginService.GetUserObject().userRoleId == Roles.Customer)
    {
      
    }
  }

  onClick(page:any)
  {
    this.nav.navigateForward(page);
    this.menuCtrl.close();
  }

}
