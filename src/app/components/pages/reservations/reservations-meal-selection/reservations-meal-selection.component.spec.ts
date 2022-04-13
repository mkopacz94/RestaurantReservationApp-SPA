import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsMealSelectionComponent } from './reservations-meal-selection.component';

describe('ReservationsDateSelectionComponent', () => {
  let component: ReservationsMealSelectionComponent;
  let fixture: ComponentFixture<ReservationsMealSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsMealSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsMealSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
