import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/filter';

@Injectable()
export class GithubService {
  callRoot = 'https://api.github.com/';

  constructor(private http: Http) {}

  public getProjects(): Observable<any> {
    const _callPath = this.callRoot + 'users/wgimson/repos?sort="created"';
    return this.http.get(_callPath)
                    .map((res) => res.json());
  }

  public getProjectByName(name: string) {
    const _callPath = this.callRoot + 'repos/wgimson/' + name;
    return this.http.get(_callPath)
                    .map((res) => res.json());
  }
}
