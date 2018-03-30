import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { TodosComponent } from './todos/todos.component';
import { Routing } from './app.routing';

import {PostsService} from './posts/posts.service';
import {AlbumsService} from './albums/albums.service';
import {TodosService} from './todos/todos.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AlbumsComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [PostsService, AlbumsService, TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
