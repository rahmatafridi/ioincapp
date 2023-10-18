import { Component, OnInit } from '@angular/core';
import { UserAppointmentResponse } from 'src/app/models/appointment/UserAppointmentResponse';
import { AccountService } from 'src/app/services/account.service';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-archive-appointments',
  templateUrl: './archive-appointments.page.html',
  styleUrls: ['./archive-appointments.page.scss'],
})
export class ArchiveAppointmentsPage implements OnInit {

  userAppointmentResponse: UserAppointmentResponse[];
  constructor(private appointmentService:AppointmentService,private loginService:AccountService) { }

  ngOnInit() {
    this.GetArchiveAppointments();
  }

  private GetArchiveAppointments()
  {
    this.appointmentService.GetArchiveAppointments(this.loginService.userObject.id).subscribe(
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
