import { Base } from '../base';


export interface SaloonResponse extends  Base {
    
    saloonName:string;
    countryId:number;
    cityId:number;
    saloonTypeId:number;
    country:Location;
    city:Location;
    
}
