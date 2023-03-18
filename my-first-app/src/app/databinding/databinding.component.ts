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
  inputValue="blank"
  name = 'John Smith';
  dob = 1997;
  isAlert = this.dob < 2000;
  isSelected = true;
  angularLogoSrc=  'https://angular.io/assets/images/logos/angular/angular.svg';
  getAge(){
    return 2018-1997;
  }
  alertMsg(){
    alert('Welcome to learn Angular-'+this.inputValue);
  }
}
