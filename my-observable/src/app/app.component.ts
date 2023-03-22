import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Observable using RxJs - Getting Started';
  obs = new Observable((observer) => {
    console.log("Observable starts")
      //Adding values synchornized way.
      /*
       observer.next("1")
       observer.next("2")
       observer.next("3")
       observer.next("4")
       observer.next("5")
      */


      // Adding Interval - asynchornized way
      /* 
      setTimeout(() => { observer.next("1") }, 1000);
       setTimeout(() => { observer.next("2") }, 2000);
       setTimeout(() => { observer.next("3") }, 3000);
       setTimeout(() => { observer.next("4") }, 4000);
       setTimeout(() => { observer.next("5") }, 5000);
       */



      ////sending error event. observable stops here
      // setTimeout(() => { observer.next("1") }, 1000);
      // setTimeout(() => { observer.next("2") }, 2000);
      // setTimeout(() => { observer.next("3") }, 3000);
      // setTimeout(() => { observer.error("error emitted") }, 3500);    // observable stops here
      // setTimeout(() => { observer.next("4") }, 4000);          //this code is never called
      // setTimeout(() => { observer.next("5") }, 5000);

      //Complete Event
      setTimeout(() => { observer.next("1") }, 1000);
      setTimeout(() => { observer.next("2") }, 2000);
      setTimeout(() => { observer.next("3") }, 3000);
      setTimeout(() => { observer.complete() }, 3500);   //sending complete event. observable stops here
      setTimeout(() => { observer.next("4") }, 4000);    //this code is never called
      setTimeout(() => { observer.next("5") }, 5000);
  
  });

  data=[];
 
  ngOnInit() {
    this.obs.subscribe(
      val=> { console.log('subscribe '+val) },
      error => { console.log('subscribe '+"error")},
      () => {console.log('subscribe '+"Completed")}
    )
  }
}
