import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserAppointmentResponse } from 'src/app/models/appointment/UserAppointmentResponse';
import { AppointmentState } from 'src/app/models/Enum/AppointmentState';
import { AccountService } from 'src/app/services/account.service';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-saloon-admin-appointments',
  templateUrl: './saloon-admin-appointments.component.html',
  styleUrls: ['./saloon-admin-appointments.component.scss'],
})
export class SaloonAdminAppointmentsComponent implements OnInit {

  userAppointmentResponse: UserAppointmentResponse[];
  constructor(private appointmentService:AppointmentService,private loginService:AccountService
    ,private alertController: AlertController) { }

  ngOnInit() {
    this.GetActiveAppointments();
  }

  private GetActiveAppointments()
  {
    this.userAppointmentResponse = null;
    this.appointmentService.GetAppointmentbySaloonAdministratorId(this.loginService.userObject.id,AppointmentState.Pending,0,100).subscribe(
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

  RejectAppointment(appointmentId:number)
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
                this.userAppointmentResponse = null;
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

  ApproveAppointment(appointmentId:number)
  {

    this.alertController.create({
      header: 'Confirmation',
      subHeader: '',
      message: 'Are you sure to approve appointment?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.appointmentService.ApproveAppointment(appointmentId).subscribe(
              (response)=>{
                this.userAppointmentResponse = null;
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
