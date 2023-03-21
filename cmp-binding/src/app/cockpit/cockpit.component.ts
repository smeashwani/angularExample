import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverType: string,  serverContent:string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverType: string, serverContent:string}>();
  constructor() { }

  ngOnInit(): void {
  }

  serverElements : any = []  ;
  // newServerName : string = '';
  // newServerContent : string = '';

  onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    console.log(nameInput);
    console.log(nameInput.value);
    this.serverCreated.emit(
      {
        serverType: 'server',
        serverName: nameInput.value,
        serverContent: contentInput.value
      }
    );
  }

  onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.blueprintCreated.emit(
      {
        serverType: 'blueprint',
        serverName: nameInput.value,
        serverContent: contentInput.value
      }
    );
  }

}
