import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightaddComponent } from './flightadd.component';

describe('FlightaddComponent', () => {
  let component: FlightaddComponent;
  let fixture: ComponentFixture<FlightaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
