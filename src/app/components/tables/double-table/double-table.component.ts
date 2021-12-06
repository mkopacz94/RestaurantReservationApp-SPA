import { Component, OnInit } from '@angular/core';
import { TableBaseComponent } from '../table-base/table-base.component';

@Component({
  selector: 'app-double-table',
  templateUrl: './double-table.component.html',
  styleUrls: ['./double-table.component.css']
})
export class DoubleTableComponent extends TableBaseComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }
}
