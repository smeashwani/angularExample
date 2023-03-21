import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements : any = [{name:'Guest', type:'server',content:'Defualt value'}];
  onFetchingData(fetchData: {serverName: string, serverType: string,  serverContent:string}){
    this.serverElements.push({
      name: fetchData.serverName,
      type: fetchData.serverType,
      content: fetchData.serverContent
    });
  }
}
