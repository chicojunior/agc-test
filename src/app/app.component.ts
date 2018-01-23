import { Component, OnInit, Output } from '@angular/core';

import { AppService } from './app.service';

import { SeasonsComponent } from './seasons/seasons.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @Output() show: any = {};
  
  title = 'app';
  tvShow: any = {};

  constructor(private sevice: AppService) { }

  ngOnInit() {
    this.sevice
      .getShow()
      .subscribe(res => {
        this.tvShow = res;
        this.show = res;
        console.log(this.show);
      });
  }

  getBackground(data) {
    return `url("${data.Images.Background}")`;
  }
}
