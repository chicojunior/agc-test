import { Component, OnInit } from '@angular/core';

import { AppService } from './../app.service';

import { EpisodesComponent } from './../episodes/episodes.component';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit {

  constructor(private service: AppService) { }

  seasons: any = [];

  ngOnInit() {
    this.service
     .getEpisodes()
     .subscribe(res => {
        this.seasons = this.groupBy(res, 'SeasonNumber');
      });
  }

  groupBy(collection, property) {
    let val;
    let index;
    const values = [];
    const result = [];

    for (let i = 0; i < collection.length; i++) {
      if (collection[i]) {
        val = collection[i][property];
        index = values.indexOf(val);
        if (index > -1) {
          result[index].push(collection[i]);
        } else {
          values.push(val);
          result.push([collection[i]]);
        }
      }
    }
    return result;
  }

}
