import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {

  @Input('show') show: any = {};

  cast = [];

  constructor() { }

  ngOnInit() {
    console.log(this.show);
  }

}
