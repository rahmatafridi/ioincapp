import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AppointmentSlots } from '../models/appointment/AppointmentSlots';
import { NewAppointmentRequest } from '../models/appointment/NewAppointmentRequest';
import { AccountService } from './account.service';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SaloonAppointmentService {

  constructor(private baseService: BaseService,public datepipe: DatePipe,private loginService:AccountService) { 


  }

  GetAppointmentSlots(saloonId:number, date:Date)
  {
    var url = "Saloon/GetSaloonAppointments?saloonId="+saloonId;
    let latest_date = null;
    if(date != null)
    {
      latest_date= this.datepipe.transform(date, 'yyyy-MM-dd');
      url = url +"&date="+latest_date;
    }
    return this.baseService.gets<AppointmentSlots[]>(url).pipe(
      map(response => {
        
        return response;
      })
    );
  }

  CreateNewAppointment(saloonId:number,doctorId:number,appointmentDate:Date, startHour:string,endHour:string)
  {
    let appointmentRequest = new NewAppointmentRequest();
    appointmentRequest.customerId = this.loginService.GetUserObject().id;
    appointmentRequest.doctorId = doctorId;
    appointmentRequest.saloonId = saloonId;
    appointmentRequest.date = appointmentDate;
    appointmentRequest.startTime = startHour;
    appointmentRequest.endTime = endHour;

    return this.baseService.postAsJsons<boolean>("Appointment/CreateAppointment",appointmentRequest).pipe(
      map(response => {
        
        return response;
      })
    );
  }
}
