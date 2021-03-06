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
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects: Observable<any[]>;
  project: any = {};
  readme = '';
  projectName: string;
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

  showReadmeInModal(repoName) {
    this.githubService.getProjectReadme(repoName).subscribe(readme => {
      this.projectName = repoName;
      const _downloadUrl = readme.download_url;
      this.downloadReadme(_downloadUrl);
    });
  }

  private downloadReadme(url) {
    this.githubService.downloadFile(url).subscribe(readme => {
      this.readme = readme;
      this.modalRef = this.modalService.show(ModalComponent);
      this.modalRef.content.title = this.projectName;
      this.modalRef.content.body = readme;
    });
  }

/*   openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  } */

  ngOnInit() {
    this.projects = this.githubService
      .getProjects()
      // THIS IS FUCKING HOW MAP WORKS!
      .map(res => res.filter(repo => this.repos.includes(repo.name)));
  }
}
