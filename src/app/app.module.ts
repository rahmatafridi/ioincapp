import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DatePipe } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import {Deeplinks} from '@ionic-native/deeplinks/ngx';
import { Network } from '@ionic-native/network/ngx';
import { DentistModule } from './pages/account/dentist/dentist.module';
import { AutoCompleteModule } from 'ionic4-auto-complete';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";

import { Device } from '@ionic-native/device/ngx';

// import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    DentistModule,
    AutoCompleteModule,
    // AutocompleteLibModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DatePipe,
    Deeplinks,
    Network,
    FirebaseX,
    Device,
    InAppBrowser  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
