import { Base } from '../base';

export interface NewAppointmentResponse  extends Base
{
    customerId:number;
    saloonId:number;
    doctorId:number;
    date:Date;
    startTime:string;
    endTime:string;
}