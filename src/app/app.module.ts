import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { EmployeeService } from '../app/Model/employee.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from "@angular/common/http";
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { CapitalizePipe } from '../app/Model/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeListComponent,
    EmployeeDataComponent,
    EditEmployeeComponent,
    AddEmployeeComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent },
      { path: 'list', component: EmployeeListComponent }],
      { useHash: true }),
      RouterModule.forChild([
        { path: 'edit/:id', component: EditEmployeeComponent },
        { path: 'view/:id', component: EmployeeDataComponent },
        { path: 'add', component: AddEmployeeComponent }
      ])
  ],
  exports: [RouterModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
