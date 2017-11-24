import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class GithubService {
  repos: any[];
  callRoot = 'https://api.github.com/users/wgimson/';

  constructor(private http: Http) { }

  getProjects(): Observable<any[]> {
    const _callPath = this.callRoot + 'repos';
    return this.http.get(_callPath).map((res: Response) => res.json());
  }
}
