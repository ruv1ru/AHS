import { Component, OnInit } from '@angular/core';
import { GridTile } from '../grid-tile';

@Component({
  selector: 'app-stay-photos',
  templateUrl: './stay-photos.component.html',
  styleUrls: ['./stay-photos.component.css']
})
export class StayPhotosComponent implements OnInit {

  tiles: GridTile[];
  constructor() { }

  ngOnInit() {
    this.tiles = [
      new GridTile("pic1", 3, 1, "lightgreen", "assets/images/pic1.jpg"),
      new GridTile("pic2", 1, 2, "lightgreen", "assets/images/pic2.jpg"),
      new GridTile("pic3", 1, 1, "lightgreen", "assets/images/pic3.jpg"),
      new GridTile("pic4", 2, 1, "lightgreen", "assets/images/pic4.jpg"),
    ];
  }

}
