import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts;
  constructor(postsService: PostsService) {
    this.posts = postsService.getPosts();
  }

  ngOnInit() {
  }

}
