import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsDateSelectionComponent } from './reservations-date-selection.component';

describe('ReservationsDateSelectionComponent', () => {
  let component: ReservationsDateSelectionComponent;
  let fixture: ComponentFixture<ReservationsDateSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsDateSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsDateSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
