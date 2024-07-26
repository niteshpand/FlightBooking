import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFlightComponent } from './new-flight.component';

describe('NewFlightComponent', () => {
  let component: NewFlightComponent;
  let fixture: ComponentFixture<NewFlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewFlightComponent]
    });
    fixture = TestBed.createComponent(NewFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
