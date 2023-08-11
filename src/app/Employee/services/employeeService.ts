import { HttpClient } from "@angular/common/http";
import { employee } from "../Models/employee";
import { Injectable } from "@angular/core";

@Injectable()
export class employeeService
{
    idToken ? : string = "test";
    constructor(private _http: HttpClient) { }

    createEmployee(employeeInfo: employee) {
      debugger;
        //this.idToken = sessionStorage.getItem('token')?.toString();
        return this._http.post('https://localhost:7133/api/Employee', employeeInfo);
      }
}