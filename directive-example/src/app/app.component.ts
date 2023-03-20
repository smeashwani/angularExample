import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive-example';
  employee = [{
    empid: 5623,
    fullname: "Stephen",
    city: "Newyork",
    experience: "5 years",
    salary: 500000,
    married: false,
    role: 'admin'
  },
  {
    empid: 6523,
    fullname: "Michel",
    city: "london",
    experience: "7 years",
    salary: 700000,
    married: true,
    role: 'user'
  },
  {
    empid: 6523,
    fullname: "peeter",
    city: "Dubai",
    experience: "8 years",
   // salary: null,
    married: true,
    role: 'public'
  },
  {
    empid: 7458,
    fullname: "stella",
    city: "Paris",
    experience: "4 years",
    salary: 400000,
    married: false,
    role: 'user'
  }];

  gettrackby(empid:number,employees:any)
 {
    return employees.empid;
 }

 addEmployee(){
   this.employee.push({ empid: 1234 + this.employee.length,
    fullname: "stella",
    city: "Paris",
    experience: "4 years",
    salary: 400000,
    married: false,
    role: 'user'});
 }

 addExistngEmployee(){
  this.employee.push({ empid: 7458,
   fullname: "stella",
   city: "Paris",
   experience: "4 years",
   salary: 400000,
   married: false,
   role: 'user'});
}
}
