import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
albums;
  constructor(albumsService: AlbumsService) {
    this.albums = albumsService.getAlbumsApi();
   }

  ngOnInit() {
  }

}
