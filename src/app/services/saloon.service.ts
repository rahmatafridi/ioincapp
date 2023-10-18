import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { SaloonResponse } from '../models/saloon/SaloonResponse';
import { BaseService } from './base.service';
import {AutoCompleteService} from 'ionic4-auto-complete';

@Injectable({
  providedIn: 'root'
})
export class SaloonService implements AutoCompleteService{
  labelAttribute = 'saloonName';
  constructor(private baseService:BaseService) { }

  GetSaloonsByLocationName( locationName:string)
  {
    return this.baseService.gets<SaloonResponse[]>("Saloon/GetSaloonsByLocation/"+locationName).pipe(
      map(response => {
        
        return response;
      })
    );
  }

  GetSaloonsByLocationOrSaloonName( locationName:string,saloonName:string)
  {
    
    if(saloonName !=""){
      return this.baseService.gets<SaloonResponse[]>("Saloon/GetSaloonList?name="+saloonName).pipe(
        map(response => {
          
          return response;
        })
      );
    }else {
      return this.baseService.gets<SaloonResponse[]>("Saloon/GetSaloonsByLocationName?locationName="+locationName).pipe(
        map(response => {
          
          return response;
        })
      );



   
  }
  }

  getResults(keyword:string) {
    if (!keyword) { return false; }

    return  this.baseService.get('Saloon/GetSaloonList?name=' + keyword).pipe(map(
       (result: any[]) => {
          return result.filter(
             (item) => {
                return item.saloonName.toLowerCase().includes(
                   keyword.toLowerCase()
                );
             }
          );
       }
    ));
 }
}
