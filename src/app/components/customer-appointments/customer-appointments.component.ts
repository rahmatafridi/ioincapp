import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserAppointmentResponse } from 'src/app/models/appointment/UserAppointmentResponse';
import { AccountService } from 'src/app/services/account.service';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-customer-appointments',
  templateUrl: './customer-appointments.component.html',
  styleUrls: ['./customer-appointments.component.scss'],
})
export class CustomerAppointmentsComponent implements OnInit {

  userAppointmentResponse: UserAppointmentResponse[];
  constructor(private appointmentService:AppointmentService,private loginService:AccountService
    ,private alertController: AlertController) { }

  ngOnInit() {
    this.GetActiveAppointments();
  }

  private GetActiveAppointments()
  {
    this.userAppointmentResponse = null;
    this.appointmentService.GetActiveAppointments(this.loginService.userObject.id).subscribe(
      (response)=>{
        if(response !=null)
        {
          this.userAppointmentResponse = response.data;
        }
        else
        {
          this.userAppointmentResponse = null;
        }
      },
      (error)=>{
        console.log(error);
        this.userAppointmentResponse = null;
      });
  }

  CancelAppointment(appointmentId:number)
  {

    this.alertController.create({
      header: 'Confirmation',
      subHeader: '',
      message: 'Are you sure to cancel appointment?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.appointmentService.CancelAppointment(appointmentId).subscribe(
              (response)=>{
                this.GetActiveAppointments();
              },
              (error)=>{
                console.log(error);
                this.userAppointmentResponse = null;
              });
          }
        },
        {
          text: 'Cancel',
          handler: () => {
           return;
          }
        }
      ]
    }).then(res => {
      res.present();
    });
    
  }

}
