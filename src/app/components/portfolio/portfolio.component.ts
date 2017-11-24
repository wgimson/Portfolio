import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { GithubService } from '../../providers/github.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects: Observable<any[]>;

  constructor(public githubService: GithubService) { }

  ngOnInit() {
    this.projects = this.githubService.getProjects();
      console.log('hi');
  }

}
