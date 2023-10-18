import { Time } from '@angular/common';
import { Base } from '../base';
import { SaloonResponse } from '../saloon/SaloonResponse';
import { UsersResponse } from '../user/UsersResponse';
import { State } from './State';

export interface UserAppointmentResponse extends  Base
{
        customerId:number;
        doctorId:number;
        doctorFirstName:string;
        doctorLastName:string;
        saloonId:number;
        saloonName:string;
        saloonEmail:string;
        saloonPhone:string;
        saloonAddress:string;
        symptoms:string;
        stateId:number;
        date:Date;
        startTime:Time;
        endTime:Time;
        startTimeString:string;
        endTimeString:string;
        state:State;
        canCancel:boolean;

        saloon:SaloonResponse;
        customer:UsersResponse;
        doctor:UsersResponse;
}