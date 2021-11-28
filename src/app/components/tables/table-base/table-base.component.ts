import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-base',
  templateUrl: './table-base.component.html',
  styleUrls: ['./table-base.component.css']
})
export abstract class TableBaseComponent {

  private clickInside: boolean = false;
  selected: boolean = false;

  @HostListener("click")
  clicked() {
    this.clickInside = true;
    this.selected = true;
  }

  @HostListener("document:click")
  clickedOut() {
    if(!this.clickInside) {
      this.selected = false;
    }
    this.clickInside = false;
  }
}
