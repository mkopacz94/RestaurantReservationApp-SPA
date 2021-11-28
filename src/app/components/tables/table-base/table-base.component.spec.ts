import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBaseComponent } from './table-base.component';

describe('TableBaseComponent', () => {
  let component: TableBaseComponent;
  let fixture: ComponentFixture<TableBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBaseComponent ]
    })
    .compileComponents();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
