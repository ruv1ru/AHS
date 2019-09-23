import { Component, OnInit } from '@angular/core';
import {  } from '@agm/core';


@Component({
  selector: 'app-stay-location',
  templateUrl: './stay-location.component.html',
  styleUrls: ['./stay-location.component.css']
})
export class StayLocationComponent implements OnInit {

  title = 'AHS Location';
  lat = 51.678418;
  lng = 7.809007;

  constructor() { }

  ngOnInit() {
    
  }


}
