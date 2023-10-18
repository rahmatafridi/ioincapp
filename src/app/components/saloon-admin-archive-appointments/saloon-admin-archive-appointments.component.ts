import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AppointmentStateArray } from 'src/app/models/appointment/AppointmentStateArray';
import { UserAppointmentResponse } from 'src/app/models/appointment/UserAppointmentResponse';
import { AppointmentState } from 'src/app/models/Enum/AppointmentState';
import { AccountService } from 'src/app/services/account.service';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-saloon-admin-archive-appointments',
  templateUrl: './saloon-admin-archive-appointments.component.html',
  styleUrls: ['./saloon-admin-archive-appointments.component.scss'],
})
export class SaloonAdminArchiveAppointmentsComponent implements OnInit {

  userAppointmentResponse: UserAppointmentResponse[];
  constructor(private appointmentService:AppointmentService,private loginService:AccountService
    ,private alertController: AlertController) { }

  ngOnInit() {
    this.GetArchiveAppointments();
  }

  private GetArchiveAppointments()
  {
    this.userAppointmentResponse = null;
    let appointmentStateArray = new AppointmentStateArray();
    appointmentStateArray.states = [AppointmentState.Approved,AppointmentState.Cancel,AppointmentState.Reject];
    this.appointmentService.GetSaloonAppointmentsForSaloonAdministrator(appointmentStateArray,this.loginService.userObject.id,0,100).subscribe(
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

}
