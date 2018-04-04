import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(private postsService: PostsService) {
    this.posts = postsService.getPostsApi();
  }

  posts: string[];
  selectedPost: any;
  updateEnabled = false;
    ngOnInit() {
  }

  getAllPosts() {
    this.postsService.getPostsApi()
    .subscribe(
      data => this.posts = data,
      error => console.log('Unspecified Server Error')
    );
  }

  createPost(newTitle: string, newAuthor: string, newBody: string) {
    this.postsService.createPost(newTitle, newAuthor, newBody).subscribe();
  }

  updatePost(newTitle: string, newAuthor: string, newBody: string) {
    this.postsService.updatePost(this.selectedPost.id, newTitle, newAuthor, newBody).subscribe();
  }

  deletePost() {
    this.postsService.deletePost(this.selectedPost.id).subscribe();
  }

  loadDetails(post: any) {
    this.updateEnabled = true;
    this.selectedPost = post;
  }

}
