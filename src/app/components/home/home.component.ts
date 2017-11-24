import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: MenuItem[];
  images: any;

  constructor(public router: Router) {
   }

  ngOnInit() {
    this.images = [];
    this.images.push({source: 'assets/images/matrix.jpg', alt: 'Gimson Solutions LLC', title: 'GimsonSolutionsLLC'});
    this.items = [
      {
        label: 'Home',
        icon: 'fa-home',
        command: (click) => {
          this.router.navigate(['./home']);
        }
      },
      {
        label: 'About',
        icon: 'fa-info-circle',
        command: (click) => {
          this.router.navigate(['./about']);
          console.log('hi');
        }
      },
      {
        label: 'Portfolio',
        icon: 'fa-folder-open',
        command: (click) => {
          this.router.navigate(['./portfolio']);
          console.log('hi');
        }
      },
      {
        label: 'Blog',
        icon: 'fa-pencil-square-o',
        command: (click) => {
          this.router.navigate(['./blog']);
          console.log('hi');
        }
      },
      {
        label: 'Contact',
        icon: 'fa-phone',
        command: (click) => {
          this.router.navigate(['./contact']);
          console.log('hi');
        }
      }
    ];
  }
}
