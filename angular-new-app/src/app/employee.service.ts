import { Injectable } from '@angular/core';
import {  HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';
import { catchError, tap, map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeService {

  private _url: string = "/assets/employees.json"

  constructor(private http: HttpClient) { }

  getEmployees (): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  } 
  
 
  // errorHandler(error: HttpErrorResponse) {
  //   return Observable.throw(error.message  || "Server Error");
  // }
  
}


