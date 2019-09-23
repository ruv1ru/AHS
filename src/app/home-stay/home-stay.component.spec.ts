import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStayComponent } from './home-stay.component';

describe('HomeStayComponent', () => {
  let component: HomeStayComponent;
  let fixture: ComponentFixture<HomeStayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeStayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
