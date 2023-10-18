import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AppointmentSlots } from 'src/app/models/appointment/AppointmentSlots';
import { LoaderService } from 'src/app/services/loader.service';
import { SaloonAppointmentService } from 'src/app/services/saloon.appointment.service';

@Component({
  selector: 'app-newappointment',
  templateUrl: './newappointment.page.html',
  styleUrls: ['./newappointment.page.scss'],
})
export class NewappointmentPage implements OnInit {

  appointmentSlots: AppointmentSlots[];
  saloonId:number;
  selectedDate:string;
  date:Date=null;
  constructor(private router: Router,private route: ActivatedRoute
    ,private saloonAppointmentService: SaloonAppointmentService
    ,private ionLoader: LoaderService,private alertController: AlertController) { }

  ngOnInit() {
    this.GetAppointmentSlots();
  }

  GetAppointmentSlots()
  {
    this.ionLoader.showLoader();
      this.route.params.subscribe(params => {

        this.saloonId = params['saloonId'];
        this.selectedDate = params['date'];
        if(this.selectedDate != null && this.selectedDate != undefined && this.selectedDate != "")
        this.date=new Date(this.selectedDate);
        
        this.saloonAppointmentService.GetAppointmentSlots(this.saloonId,this.date).subscribe(
          (response)=>{
            if(response !=null)
            {
              this.ionLoader.hideLoader();
              this.appointmentSlots = response;
            }
            else
            {
              this.ionLoader.hideLoader();
              this.appointmentSlots = null;
            }
          },
          (error)=>{
            this.ionLoader.hideLoader();
            console.log(error);
            this.appointmentSlots = null;
          });
      });
  }

  BookNow(saloonId:number,doctorId:number,appointmentDate:Date, startHour:string,endHour:string)
  {
    this.saloonAppointmentService.CreateNewAppointment(saloonId,doctorId,appointmentDate,startHour,endHour).subscribe(
      (response)=>{
        if(response !=null && response == true)
        {
          this.alertController.create({
            header: 'Confirmation',
            subHeader: '',
            message: 'Your appointment has been created and waiting for approval.',
            buttons: [
              {
                text: 'Ok',
                handler: () => {
                  this.router.navigate(['home']);
                }
              }
            ]
          }).then(res => {
            res.present();
          });
        }
        else
        {
            
        }
      },
      (error)=>{
        
        console.log(error);
      });
  }

}
