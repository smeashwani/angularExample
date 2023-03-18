import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }
  user: any = { name: 'blank', age: '18' };
  onLogin() {
    console.log('Name :', this.user.name );
    console.log('Age', this.user.age );
  }

  setLoginData() {
    this.user.name = 'angular.com';
    this.user.age = '4';
  }
}
