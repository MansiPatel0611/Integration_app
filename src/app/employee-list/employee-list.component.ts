import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Model/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Emp } from '../Model/employee';
import { map } from 'rxjs/operators';

@Component({
  //selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees: Array<any>;
 
  constructor(private _employeeservice: EmployeeService, private router: Router, private route: ActivatedRoute) {
  }
  deleteEmp(data) {
    //console.log(this.employees);
    //console.log(data);
    if (confirm(`Really delete the employee:?`)) {
      var deleteIndex;
      for (var i = 0; i < this.employees.length; i++) {
        if (this.employees[i].id === data.id) {
          deleteIndex = i;
          break;
        }
      }
    }
    //console.log(deleteIndex);
    this._employeeservice.remove(data).subscribe(
      result => this.employees.splice(deleteIndex, 1)
    );
    this.router.navigate(['/list']);
  }

  ngOnInit() {

    this._employeeservice.getEmployees().subscribe((data: any) => this.employees = data);
    console.log(this.employees);
  }

}
