import { Component, OnInit } from '@angular/core';
import { TableBaseComponent } from '../table-base/table-base.component';

@Component({
  selector: 'app-square-table',
  templateUrl: './square-table.component.html',
  styleUrls: ['./square-table.component.css']
})
export class SquareTableComponent extends TableBaseComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
