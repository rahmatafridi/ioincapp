import { Time } from '@angular/common';
import { Base } from '../base';
import { UsersRoleResponse } from './UsersRoleResponse';

export interface UsersResponse extends  Base
{
    firstname:string;
    lastname:string;
    email:string;
    mobileNumber:string;
    isActive:boolean;
    userRoleId:number;
    usersRole:UsersRoleResponse;
}