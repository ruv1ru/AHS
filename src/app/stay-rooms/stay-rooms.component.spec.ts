import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StayRoomsComponent } from './stay-rooms.component';

describe('StayRoomsComponent', () => {
  let component: StayRoomsComponent;
  let fixture: ComponentFixture<StayRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StayRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StayRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
