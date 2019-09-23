import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StayPhotosComponent } from './stay-photos.component';

describe('StayPhotosComponent', () => {
  let component: StayPhotosComponent;
  let fixture: ComponentFixture<StayPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StayPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StayPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
