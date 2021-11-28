import { templateJitUrl } from '@angular/compiler';
import { Component, HostListener, OnInit } from '@angular/core';
import { TableBaseComponent } from '../table-base/table-base.component';

@Component({
  selector: 'app-round-table',
  templateUrl: './round-table.component.html',
  styleUrls: ['./round-table.component.css']
})
export class RoundTableComponent extends TableBaseComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }
}
