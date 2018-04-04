import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from '@rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  getPostsApi(): Observable<any> {
    return this.http.get('http://localhost:3000/posts')
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Unspecified Server Error'));
  }

  createPost(newTitle: string, newAuthor: string, newBody: string): Observable<any> {
    return this.http.post('http://localhost:3000/posts', {title: newTitle, author: newAuthor, body: newBody})
    .map((res: Response) => {res.json(); location.reload(); })
    .catch((error: any) => Observable.throw(error.json().error || 'Unspecified Server Error'));
  }

  updatePost(postId: string, newTitle: string, newAuthor: string, newBody: string): Observable<any> {
    return this.http.put('http://localhost:3000/posts/' + postId,
    {
      title: newTitle,
      author: newAuthor,
      body: newBody
    })
    .map((res: Response) => {res.json(); location.reload(); })
    .catch((error: any) => Observable.throw(error.json().error || 'Unspecified Server Error'));
  }

  deletePost(postId: string): Observable<any> {
    return this.http.delete('http://localhost:3000/posts/' + postId)
    .map((res: Response) => {res.json(); location.reload(); })
    .catch((error: any) => Observable.throw(error.json().error || 'Unspecified Server Error'));
  }
}
