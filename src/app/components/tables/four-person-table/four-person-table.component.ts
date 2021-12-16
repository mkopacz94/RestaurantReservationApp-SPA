import { Component, OnInit } from '@angular/core';
import { TableBaseComponent } from '../table-base/table-base.component';

@Component({
  selector: 'app-four-person-table',
  templateUrl: './four-person-table.component.html',
  styleUrls: ['./four-person-table.component.css']
})
export class FourPersonTableComponent extends TableBaseComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
