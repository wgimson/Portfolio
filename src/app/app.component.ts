import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  items: any;
  images: any;

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
