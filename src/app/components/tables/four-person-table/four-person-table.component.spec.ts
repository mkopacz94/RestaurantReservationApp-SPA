import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourPersonTableComponent } from './four-person-table.component';

describe('FourPersonTableComponent', () => {
  let component: FourPersonTableComponent;
  let fixture: ComponentFixture<FourPersonTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourPersonTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourPersonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
