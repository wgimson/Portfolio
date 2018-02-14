import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// import { AngularFirestore } from 'angularfire2/firestore';

import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
  constructor(private http: Http, /*private afs: AngularFirestore*/) {}

  // Get all posts from the API
  getAllPosts() {
    return this.http.get('/api/posts')
               .map(res => {
                 return res.json();
               });
  }

 /*  getPostById(id: number) {
    return this.afs
    .collection('posts')
    .valueChanges();
  } */
}
