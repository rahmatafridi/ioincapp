import { Time } from '@angular/common';
import { Slots } from '../saloon/Slots';

export interface AppointmentSlots{
    doctorId:number;
    doctorName:string;
    saloonId:number;
    saloonName:string;
    date:Date;
    startTime:string;
    endTime:string;
    slots:Slots[];
}   