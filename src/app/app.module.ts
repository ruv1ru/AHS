import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeStayComponent } from './home-stay/home-stay.component';
import { MenuComponent } from './menu/menu.component';
import { StayDescriptionComponent } from './stay-description/stay-description.component';
import { StayRoomsComponent } from './stay-rooms/stay-rooms.component';
import { StayLocationComponent } from './stay-location/stay-location.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { AgmCoreModule } from '@agm/core';
import { StayPhotosComponent } from './stay-photos/stay-photos.component';

const appRoutes: Routes = [
  { path: 'description', component: StayDescriptionComponent },
  { path: 'rooms', component: StayRoomsComponent  },
  { path: 'location', component: StayLocationComponent  },
  { path: 'photos', component: StayPhotosComponent  }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeStayComponent,
    MenuComponent,
    StayDescriptionComponent,
    StayRoomsComponent,
    StayLocationComponent,
    StayPhotosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    AgmCoreModule.forRoot(
      { apiKey: 'AIzaSyA9UdeOUKmdCtPaxX2lmS2YQPKuxva6hmM' }
    ),
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
