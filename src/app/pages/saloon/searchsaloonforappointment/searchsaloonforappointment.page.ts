import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { LocationResponse } from 'src/app/models/location/LocationResponse';
import { SaloonResponse } from 'src/app/models/saloon/SaloonResponse';
import { LoaderService } from 'src/app/services/loader.service';
import { LocationService } from 'src/app/services/location.service';
import { SaloonService } from 'src/app/services/saloon.service';

@Component({
  selector: 'app-searchsaloonforappointment',
  templateUrl: './searchsaloonforappointment.page.html',
  styleUrls: ['./searchsaloonforappointment.page.scss'],
})
export class SearchsaloonforappointmentPage implements OnInit {

  locationSearch:string="";
  saloonSearch:string="";
  selectedDate:string="";
  message:string="";
  minDate: string = new Date().toISOString();
  locationList:LocationResponse[];
  saloonList:SaloonResponse[];


  constructor(public locationService:LocationService,public saloonService:SaloonService
    ,private route:Router,private ionLoader: LoaderService,private navCtrl:NavController
    ,private alertCtrl: AlertController) { }

  ngOnInit() {
  }


  async searchSaloons()
  {
    console.log("saloons")
    if(this.selectedDate == "" && this.locationSearch != "" && this.saloonSearch =="")
    {
      const  alert = await  this.alertCtrl.create({
        message: 'Select date for appointment.',
        buttons: ['Ok']
      });
      await  alert.present();
      
      return;
    }
    else
    {
      this.message = "";
    }
    console.log(this.selectedDate);
    this.ionLoader.showLoader();
    var locationId:number=0;
    console.log(this.locationSearch)
    console.log(this.saloonSearch)

    this.saloonService.GetSaloonsByLocationOrSaloonName(this.locationSearch,this.saloonSearch).subscribe(
      (response)=>{
        console.log(response)
        if(response !=null)
        {
          this.ionLoader.hideLoader();
          this.saloonList = response;
        }
        else
        {
          this.ionLoader.hideLoader();
            this.saloonList = null;
            this.showEmptySaloonOrLocationListAlert();
        }
      },
      (error)=>{
        this.ionLoader.hideLoader();
        console.log(error);
        this.saloonList = null;
      });
    console.log(this.locationSearch);
  }

  OnSaloonSelection(id:number)
  {
      this.route.navigate(['/newappointment',id]);
  }

  GetLocationList()
  {
    this.locationService.GetLocationsByName(this.locationSearch).subscribe(
      (response)=>{
        if(response !=null)
        {
          this.locationList = response;
        }
        else
        {
            this.locationList = null;
            this.showEmptySaloonOrLocationListAlert();
        }
      },
      (error)=>{
        console.log(error);
        this.locationList = null;
      });
  }

  selectLocation(location:any)
  {
    this.locationSearch = location.locationName;
  }

  ShowSearchOption(option:string)
  {
    if(option=='Location')
    {
        document.getElementById('location').style.display='block';
        document.getElementById('saloon').style.display='none';
        document.getElementById('date').style.display='block';
        this.locationSearch = "";
        this.saloonSearch = "";

    }
    else if(option=='Saloon')
    {
      document.getElementById('location').style.display='none';
      document.getElementById('saloon').style.display='block';
      document.getElementById('date').style.display='none';
      this.locationSearch = "";
      this.saloonSearch = "";
    }
    
    
    document.getElementById('buttonlocation').style.display='none';
    document.getElementById('or').style.display='none';
    document.getElementById('buttonsaloon').style.display='none';
    
    document.getElementById('button').style.display='block';
    document.getElementById('backbutton').style.display='block';
  }

  OnBackClick()
  {
    document.getElementById('buttonlocation').style.display='block';
    document.getElementById('or').style.display='block';
    document.getElementById('buttonsaloon').style.display='block';
    document.getElementById('location').style.display='none';
      document.getElementById('saloon').style.display='none';
    document.getElementById('date').style.display='none';
    document.getElementById('button').style.display='none';
    document.getElementById('backbutton').style.display='none';
    this.saloonList = null;
    this.locationSearch = "";
    this.saloonSearch = "";
    this.selectedDate = "";
  }


  async showEmptySaloonOrLocationListAlert(){
    const  alert = await  this.alertCtrl.create({
      message: 'There is no appointment at the given salon or location ',
      buttons: ['Ok']
    });
    await  alert.present();
    
  }
}
