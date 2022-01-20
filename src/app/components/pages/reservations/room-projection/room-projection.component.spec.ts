import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomProjectionComponent } from './room-projection.component';

describe('RoomProjectionComponent', () => {
  let component: RoomProjectionComponent;
  let fixture: ComponentFixture<RoomProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomProjectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
