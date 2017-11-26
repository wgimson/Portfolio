import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

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
  repos = ['St-Boniface', 'Stockify', 'Treeme', 'MedBud', 'TrailBuddy2'];

  constructor(public githubService: GithubService) { }

  ngOnInit() {
    this.projects = this.githubService.getProjects()
    // THIS IS FUCKING HOW MAP WORKS!
    .map((res) => res.filter(repo => this.repos.includes(repo.name)));
  }
}
