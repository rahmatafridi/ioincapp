import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-activateuser',
  templateUrl: './activateuser.page.html',
  styleUrls: ['./activateuser.page.scss'],
})
export class ActivateuserPage implements OnInit {

  isActivated:boolean;

  constructor(private route:Router
    ,private router:ActivatedRoute
    ,private ionLoader: LoaderService
    ,private accountService:AccountService) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      if (params) {
        console.log(params);
        let token =params['token'];
        this.ionLoader.showLoader();
        this.accountService.ActivateUserAccount(token).subscribe(
          (response)=>{
            this.isActivated=true;
            this.ionLoader.hideLoader();
          },
          (error)=>{
            console.log(error);
            this.ionLoader.hideLoader();
            this.isActivated = false;
          });
      }
    });
  }

  
}
