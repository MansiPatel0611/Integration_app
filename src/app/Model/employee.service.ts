import { Injectable } from '@angular/core';
import { Emp } from './Employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class EmployeeService{
 
    //private headers: HttpHeaders;
  private accessPointUrl: string = '/api/employees';
    employees:Emp[];
  
    constructor(private http: HttpClient) {
       // this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
      }
  getEmployees() {
    return this.http.get(this.accessPointUrl);
      //.pipe(map((response: Response) => response.json()));
  }
  getEmployee(id) {
    return this.http.get(this.accessPointUrl + '/' + id);
  }
  getEmployeeData(employee: Emp) {
    return this.http.post(this.accessPointUrl, employee);
  }
  remove(employee: Emp) {
    return this.http.delete(this.accessPointUrl + '/' + employee.id);
  }
  update(employee: Emp) {
    return this.http.put(this.accessPointUrl + '/' + employee.id, employee);
  }
}
   
