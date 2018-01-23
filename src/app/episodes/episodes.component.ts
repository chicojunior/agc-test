import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  @Input() episodes: any = [];

  constructor() { }

  ngOnInit() { }

  setEpisodes(res) {
    const len = res.length;
    for (let i = 0; i < len; i++) {
      if (res[i]) {
        this.episodes.push(res[i]);
      }
    }
  }

}
