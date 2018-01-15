import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

import { SeasonsComponent } from './seasons/seasons.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  tvShow: any = {};

  constructor(private sevice: AppService) { }

  ngOnInit() {
    this.sevice
      .getShow()
      .subscribe(res => {
        this.tvShow = res;
        console.log(JSON.stringify(res));
      });
  }

  getBackground(data) {
    console.log(`"url('${data.Images.Background}')"`);
    return `url("${data.Images.Background}")`;
  }
}
