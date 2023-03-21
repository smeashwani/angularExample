import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  @Output('saveAccount') saveAccount= new EventEmitter<{name: string, status: string}>();
  @ViewChild('name') name: ElementRef;
  @ViewChild('status') status: ElementRef;

  
  constructor() { }

  ngOnInit(): void {
  }
  addAccount(){
    console.log(this.name.nativeElement.value);
    console.log(this.status.nativeElement.value);
    this.saveAccount.emit(
      {
        name: this.name.nativeElement.value,
        status: this.status.nativeElement.value
      }
      );
  }
}
