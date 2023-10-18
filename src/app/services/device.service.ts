import { Injectable } from '@angular/core';

import { Device } from '@ionic-native/device/ngx';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  public UniqueDeviceID:string;

  constructor(
    private device: Device
  ) { }

  getUniqueDeviceID() {
    return this.device.uuid;
  }  
}
