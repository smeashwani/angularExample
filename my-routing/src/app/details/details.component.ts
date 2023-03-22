import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:number = 0;
  name: string = 'Guest';
  url: string = 'blank';
  constructor(private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.url = this.router.url;
      this.id = this.route.snapshot.params['id'];
      this.name=this.route.snapshot.params['name'];
    });
  }

}
