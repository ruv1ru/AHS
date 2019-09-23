import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { NavLink } from './nav-link';



  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks: any;
  constructor(private router: Router) {

  }
  title = 'Management System';
  ngOnInit() {
    this.navLinks = [
      new NavLink("description", "About"),
      new NavLink("photos", "Photos"),
      new NavLink("rooms", "Rooms"),
      new NavLink("location", "Location"),
     ];
  }
}
