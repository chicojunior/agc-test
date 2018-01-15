import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  getShow(): Observable<any> {
    return this.http.get('https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json');
  }

  getEpisodes(): Observable<any> {
    return this.http.get('https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json');
  }

}
