import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';

import { HttpModule, BrowserXhr } from '@angular/http';
import { CustExtBrowserXhr } from './cust-ext-browser-xhr';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { TodosComponent } from './todos/todos.component';
import { Routing } from './app.routing';

import { PostsService } from './posts/posts.service';
import { AlbumsService } from './albums/albums.service';
import { TodosService } from './todos/todos.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AlbumsComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    HttpModule
  ],
  providers: [ {provide: BrowserXhr, useClass: CustExtBrowserXhr},
      PostsService, AlbumsService, TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
