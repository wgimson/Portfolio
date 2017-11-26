import { Component, OnInit, TemplateRef } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { GithubService } from '../../providers/github.service';

export interface Project {
  name: string;
  owner: string;
  description: string;
  url: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects: Observable<any[]>;
  project: any;
  repos = ['St-Boniface', 'Stockify', 'Treeme', 'MedBud', 'TrailBuddy2'];
  modalRef: BsModalRef;

  constructor(public githubService: GithubService, private modalService: BsModalService) { }

  getRepo(repoName) {
    this.githubService.getProjectByName(repoName)
      .subscribe(repo => {
        this.project = repo;
      });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.projects = this.githubService.getProjects()
    // THIS IS FUCKING HOW MAP WORKS!
    .map((res) => res.filter(repo => this.repos.includes(repo.name)));
  }
}
