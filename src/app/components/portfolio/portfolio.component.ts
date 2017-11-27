import { Component, OnInit, TemplateRef } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ModalComponent } from '../modal/modal.component';

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
  project: any = {};
  readme = '';
  repos = ['St-Boniface', 'Stockify', 'Treeme', 'MedBud', 'TrailBuddy2'];

  constructor(
    public githubService: GithubService,
    private modalService: BsModalService,
    private modalRef: BsModalRef
  ) {}

  getRepo(repoName) {
    this.githubService.getProjectByName(repoName).subscribe(repo => {
      this.project = repo;
    });
  }

  getReadmeDownloadPath(repoName) {
    this.githubService.getProjectReadme(repoName).subscribe(readme => {
      this.project.readme = readme;
      const _downloadUrl = this.project.readme.download_url;
      debugger;
      this.downloadReadme(_downloadUrl);
    });
  }

  downloadReadme(url) {
    this.githubService.downloadFile(url).subscribe(readme => {
      debugger;
      this.readme = readme;
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openModalWithComponent() {
    const list = [
      'Open a modal with component',
      'Pass your data',
      'Do something else',
      '...'
    ];
    this.modalRef = this.modalService.show(ModalComponent);
    this.modalRef.content.title = 'Modal with component';
    this.modalRef.content.list = list;
    setTimeout(() => {
      list.push('PROFIT!!!');
    }, 2000);
  }

  ngOnInit() {
    this.projects = this.githubService
      .getProjects()
      // THIS IS FUCKING HOW MAP WORKS!
      .map(res => res.filter(repo => this.repos.includes(repo.name)));
  }
}
