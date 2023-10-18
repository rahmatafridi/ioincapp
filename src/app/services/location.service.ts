import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { LocationResponse } from '../models/location/LocationResponse';
import { BaseService } from './base.service';
import {AutoCompleteService} from 'ionic4-auto-complete';

@Injectable({
  providedIn: 'root'
})
export class LocationService implements AutoCompleteService {

  labelAttribute = 'locationName';

  constructor(private baseService: BaseService) { }


  GetLocationsByName(name:string)
  {
    return this.baseService.gets<LocationResponse[]>("Location/GetLocationByName?name="+name).pipe(
      map(response => {
        
        return response;
      })
    );
  }

  getResults(keyword:string) {
    if (!keyword) { return false; }

    return  this.baseService.get('Location/GetLocationByName?name=' + keyword).pipe(map(
       (result: any[]) => {
          return result.filter(
             (item) => {
                return item.locationName.toLowerCase().startsWith(
                   keyword.toLowerCase()
                );
             }
          );
       }
    ));
 }

  GetLocationIdByName(name:string)
  {
    return this.baseService.gets<number>("Location/GetLocationIdByName?name="+name).pipe(
      map(response => {
        
        return response;
      })
    );
  }
}
