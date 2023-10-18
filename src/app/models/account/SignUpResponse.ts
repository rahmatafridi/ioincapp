import { Base } from '../base';


export interface SignUpResponse extends Base {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    mobileNumber: string;
}
