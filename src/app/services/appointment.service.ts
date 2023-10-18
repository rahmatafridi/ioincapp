import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AppointmentStateArray } from '../models/appointment/AppointmentStateArray';
import { UserAppointmentResponse } from '../models/appointment/UserAppointmentResponse';
import { AppointmentState } from '../models/Enum/AppointmentState';
import { PageResponse } from '../models/PageResponse';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private baseService: BaseService) { }

  GetActiveAppointments(customerId: number) {
    return this.baseService.gets<PageResponse<UserAppointmentResponse>>("Appointment/GetCurrentUserAppointments?customerId=" + customerId + "&isFutureAppointments=true").pipe(
      map(response => {

        return response;
      })
    );
  }
  GetActiveAppointmentsForDoctors(customerId: number) {
    return this.baseService.gets<PageResponse<UserAppointmentResponse>>("Appointment/GetCurrentUserAppointmentsForDoctor?customerId=" + customerId ).pipe(
      map(response => {

        return response;
      })
    );
  }
  GetArchiveAppointments(customerId: number) {
    return this.baseService.gets<PageResponse<UserAppointmentResponse>>("Appointment/GetCurrentUserAppointments?customerId=" + customerId + "&isFutureAppointments=false").pipe(
      map(response => {

        return response;
      })
    );
  }

  CancelAppointment(appointmentId: number) {
    
   return this.baseService.postAsParam<boolean>('Appointment/UpdateAppointmentState?id='+appointmentId.toString()+'&stateId='+AppointmentState.Cancel.toString()).pipe(
      map(response => {

        return response;
      })
    );;
  }

  ApproveAppointment(appointmentId: number) {
    
    return this.baseService.postAsParam<boolean>('Appointment/UpdateAppointmentState?id='+appointmentId.toString()+'&stateId='+AppointmentState.Approved.toString()).pipe(
       map(response => {
 
         return response;
       })
     );;
   }

  GetAppointmentbyDoctorId(doctorId: number) {
    return this.baseService.gets<PageResponse<UserAppointmentResponse>>("Appointment/GetAppointmentbyDoctorId?doctorId=" + doctorId).pipe(
      map(response => {

        return response;
      })
    );
  }

  GetAppointmentbySaloonAdministratorId(saloonAdministratorId: number,stateId: number,pageIndex:number,pageSize:number) {
    return this.baseService.gets<PageResponse<UserAppointmentResponse>>("Appointment/GetAppointmentbySaloonAdministratorId?saloonAdministratorId=" + saloonAdministratorId + "&stateId="+stateId+"&pageIndex="+pageIndex+"&pageSize="+pageSize).pipe(
      map(response => {

        return response;
      })
    );
  }

  GetSaloonAppointmentsForSaloonAdministrator(states:AppointmentStateArray,saloonAdministratorId: number,pageIndex:number,pageSize:number) {
    return this.baseService.postAsJsons<PageResponse<UserAppointmentResponse>>("Appointment/GetSaloonAppointmentsForSaloonAdministrator?userId=" + saloonAdministratorId +"&pageIndex="+pageIndex+"&pageSize="+pageSize,states).pipe(
      map(response => {

        return response;
      })
    );
  }
}
