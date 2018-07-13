import { Component, OnInit, Input } from '@angular/core';
import { Emp } from '../Model/Employee';
import { EmployeeService } from '../Model/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @Input() employees: Array<Emp>;
  constructor(private _data: EmployeeService, private router: Router) { }
  public data = new Emp();
  public qualification: Array<any>;
  ngOnInit() {
    this.qualification = ['Developer', 'Web Designer', 'Consultant', 'Manager', 'Other'];
  }
  onSubmit() {
    this._data.getEmployeeData(this.data).
      subscribe((data: any) => this.employees.push(data));
      //subscribe();
    //employees => this.employees.push(this._data));
    this.router.navigate(['/list']);
  }
  on_cancel() {
    this.router.navigate(['/list']);
  }

}
