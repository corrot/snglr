import { Injectable } from '@angular/core';

@Injectable()
export class PostsService {

  constructor() { }

  getPosts(): string[] {
    return ['1', '2', '3'];
  }

}
