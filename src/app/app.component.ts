import { Component, OnInit } from '@angular/core';
// import { PostsService } from './posts/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  // posts: Array<string>;

  // ngOnInit() {
    // this.getAllPosts();
  // }

  // constructor(private postsService: PostsService) {}

  // getAllPosts() {
  //   this.postsService.getPostsApi()
  //   .subscribe(
  //     data => this.posts = data,
  //     error => console.log('Unspecified Server Error')
  //   );
  // }

  // createPost(title: string, author: string, body: string) {
  //   this.postsService.createPost(title, author, body).subscribe();
  //   location.reload();
  // }
}
