import { Base } from '../base';


export interface SignInResponse extends Base {
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    userRoleId: number;
    userRole: string;
    token: string;
    userid:number;
}
