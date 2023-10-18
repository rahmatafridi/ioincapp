import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserAppointmentResponse } from 'src/app/models/appointment/UserAppointmentResponse';
import { AccountService } from 'src/app/services/account.service';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.scss'],
})
export class DoctorAppointmentsComponent implements OnInit {

  userAppointmentResponse: UserAppointmentResponse[];
  constructor(private appointmentService:AppointmentService,private loginService:AccountService
    ,private alertController: AlertController) { }

  ngOnInit() {
    this.GetActiveAppointments();
  }

  private GetActiveAppointments()
  {
    this.userAppointmentResponse = null;
    this.appointmentService.GetActiveAppointmentsForDoctors(this.loginService.userObject.id).subscribe(
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
  handleRefresh(event) {
    this.GetActiveAppointments();
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
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
                //this.handleRefresh(event);
                this.GetActiveAppointments();
              },
              (error)=>{
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
