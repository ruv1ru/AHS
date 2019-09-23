import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StayLocationComponent } from './stay-location.component';

describe('StayLocationComponent', () => {
  let component: StayLocationComponent;
  let fixture: ComponentFixture<StayLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StayLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StayLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
