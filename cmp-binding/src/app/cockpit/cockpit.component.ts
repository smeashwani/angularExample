import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverType: string,  serverContent:string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverType: string, serverContent:string}>();
  constructor() { 
  }

  ngOnInit(): void {
  }
//resolve the initailzation error - tsconfig -  add    "strictPropertyInitialization": false,
  serverElements : any = []  ;  
  @ViewChild('serverNameInput') nameInput: ElementRef;
  @ViewChild('serverContentInput') contentInput: ElementRef;
  
  // newServerName : string = '';
  // newServerContent : string = '';

  onAddServer() {
    console.log(this.nameInput);
    console.log(this.nameInput.nativeElement.value);
    this.serverCreated.emit(
      {
        serverType: 'server',
        serverName: this.nameInput.nativeElement.value,
        serverContent: this.contentInput.nativeElement.value
      }
    );
  }

  onAddBlueprint() {
    this.blueprintCreated.emit(
      {
        serverType: 'blueprint',
        serverName: this.nameInput.nativeElement.value,
        serverContent: this.contentInput.nativeElement.value
      }
    );
  }

}
