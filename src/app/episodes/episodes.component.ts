import { Component, OnInit, Input } from '@angular/core';

import { AppService } from './../app.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  @Input() episodes: any = [];

  // episodes: any = [];

  constructor(private service: AppService) { }

  ngOnInit() {
    // this.service
    //  .getEpisodes()
    //  .subscribe(res => {
    //   //  this.episodes = res;
    //    this.setEpisodes(res);
    //    console.log(res);
    //   });
  }

  setEpisodes(res) {
    const len = res.length;
    for (let i = 0; i < len; i++) {
      if (res[i]) {
        this.episodes.push(res[i]);
      }
    }
  }

}
