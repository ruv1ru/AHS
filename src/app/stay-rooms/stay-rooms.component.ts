import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { MatExpansionPanel } from '@angular/material/expansion'

@Component({
  selector: 'app-stay-rooms',
  templateUrl: './stay-rooms.component.html',
  styleUrls: ['./stay-rooms.component.css']
})
export class StayRoomsComponent implements OnInit {

  constructor() { }

  rooms: any;


  ngOnInit() {
    this.rooms = [
      new Room("City View Room", 1, "Shared bathroom", "Light and airy double room ideal for couple sdfksdfksjdfsd sdgsdgsdgsdjgsdgsdg dsfsdgewrwtewet 2343454353453 dsfsdfjdsfjds 99999999999999944444444444", "city-view-single-room", ["TV", "A/C"]),
      new Room("Single Room", 1, "A/C and WiFi", "Light and airy double room ideal for couple sdfksdfksjdfsd sdgsdgsdgsdjgsdgsdg dsfsdgewrwtewet 2343454353453 dsfsdfjdsfjds 3333333333222222222222", "single-room-ac-wifi", ["Hot Water", "A/C"]),
      new Room("Double Room", 2, "A/C, WiFi & Hot water", "Light and airy double room ideal for couple sdfksdfksjdfsd sdgsdgsdgsdjgsdgsdg dsfsdgewrwtewet 2343454353453 dsfsdfjdsfjds 77777777777777777", "doble-room-balcony", ["WiFi", "A/C"])
    ];
  }



}
