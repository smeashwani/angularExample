import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  //styleUrls: ['./databinding.component.css']
  styles: [`
  p{
    font-size: 12rm;
    color: brown;
    background-color: bisque;
}
  `
  ]
})
export class DatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
