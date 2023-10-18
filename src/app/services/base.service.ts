import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { SignInResponse } from "../models/account/SignInResponse";
import { AlertController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(
    private httpClient: HttpClient, private alertController: AlertController
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    })
  }

  //#region [ Public ]
  get(endpoint: string): Observable<any> {

    if (this.getToken() != null) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Authorization': this.getToken()
        })
      }
    }
    else {
      this.httpOptions = null;
    }
    return this.httpClient
      .get<any>(`${environment.apiUrl}/${endpoint}`, this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  gets<T>(endpoint: string): Observable<T> {
    if (this.getToken() != null) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Authorization': this.getToken()
        })
      }
    }
    else {
      this.httpOptions = null;
    }
    return this.httpClient
      .get<T>(`${environment.apiUrl}/${endpoint}`, this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  postAsParams(endpoint: string, params: any): Observable<any> {
    console.log(params);
    if (this.getToken() != null) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Authorization': this.getToken()
        })
      }
    }
    else {
      this.httpOptions = null;
    }
    return this.httpClient.post<any>(`${environment.apiUrl}/${endpoint}`, this.httpOptions, { params })
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  postWithParams<T>(endpoint: string, params: any): Observable<T> {
    console.log(params);
    if (this.getToken() != null) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Authorization': this.getToken()
        })
      }
    }
    else {
      this.httpOptions = null;
    }
    return this.httpClient.post<T>(`${environment.apiUrl}/${endpoint}`, this.httpOptions, { params })
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  postAsJson(endpoint: string, item: any): Observable<any> {
    console.log(item);
    if (this.getToken() != null) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Authorization': this.getToken(),
          'Content-Type': 'application/json'
        })
      }
    }
    return this.httpClient.post<any>(`${environment.apiUrl}/${endpoint}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  postAsJsons<T>(endpoint: string, item: any): Observable<T> {
    console.log(item);

    if (this.getToken() != null) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Authorization': this.getToken(),
          'Content-Type': 'application/json'
        })
      }
    }
    return this.httpClient.post<T>(`${environment.apiUrl}/${endpoint}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }
  postAsParam<T>(endpoint: string): Observable<T> {
   

    if (this.getToken() != null) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Authorization': this.getToken(),
          'Content-Type': 'application/json',
        })
      }
    }
    return this.httpClient.post<T>(`${environment.apiUrl}/${endpoint}`,'', this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }
  putAsJsons<T>(endpoint: string, item: any): Observable<T> {

    if (this.getToken() != null) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Authorization': this.getToken(),
          'Content-Type': 'application/json'
        })
      }
    }
    return this.httpClient.put<T>(`${environment.apiUrl}/${endpoint}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  putAsParam<T>(endpoint: string): Observable<T> {
   

    if (this.getToken() != null) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Authorization': this.getToken(),
          'Content-Type': 'application/json',
        })
      }
    }
    return this.httpClient.put<T>(`${environment.apiUrl}/${endpoint}`,'', this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }
  //#endregion

  //#region [ Private ]
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    //let blob = new Blob([JSON.stringify(error)], { type: 'text/plain' });
    //this.file.writeFile(this.file.documentsDirectory,"Pressdot.log",blob);
    if (error.error instanceof ErrorEvent) {
      //error client
      errorMessage = error.error.message;
    }
    else if (error.error != undefined) {
      errorMessage = `${error.error.Message}`;
    }
    else {
      //error server
      errorMessage = `${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  private hasToken() {
    if (window.localStorage.getItem("user") != null) {
      return true;
    }
    return false;
  }

  private getToken() {
    if (window.localStorage.getItem("user") != null) {
      let obj: SignInResponse = JSON.parse(window.localStorage.getItem("user")) as SignInResponse;
      return obj.token;
    }
    return null;
  }
  //#endregion
}
