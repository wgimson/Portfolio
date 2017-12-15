import { Component, OnInit } from '@angular/core';

import { PostsService } from '../../providers/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  // instantiate posts to an empty array
  posts: any = [];

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    // Retrieve posts from the API
    this.postsService.getAllPosts().subscribe(posts => {
      debugger;
      this.posts = posts;
    });
  }
}
