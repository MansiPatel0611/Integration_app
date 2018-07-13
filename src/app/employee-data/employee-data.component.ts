import { Component, OnInit, Input } from '@angular/core';
import { Emp } from '../Model/employee';
import { EmployeeService } from '../Model/employee.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {
  @Input() employees: Emp;
  constructor(private _employeeservice: EmployeeService, private route: ActivatedRoute) { }
  data = new Emp();
  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this._employeeservice.getEmployee(id).subscribe((data: any) => this.data = data);
  }

}
