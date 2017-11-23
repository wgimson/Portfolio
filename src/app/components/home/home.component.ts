import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any;
  images: any;

  constructor() { }

  ngOnInit() {
    this.images = [];
    this.images.push({source: 'assets/images/matrix.jpg', alt: 'Gimson Solutions LLC', title: 'GimsonSolutionsLLC'});
    this.items = [
      {
        label: 'Home',
        icon: 'fa-home',
      },
      {
        label: 'About',
        icon: 'fa-info-circle',
      },
      {
        label: 'Portfolio',
        icon: 'fa-folder-open',
      },
      {
        label: 'Blog',
        icon: 'fa-pencil-square-o',
      },
      {
        label: 'Contact',
        icon: 'fa-phone',
      }
    ];
  }
}
