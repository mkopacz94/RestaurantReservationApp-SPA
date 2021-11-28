import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPanZoomModule } from 'ngx-panzoom';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TableBaseComponent } from './components/tables/table-base/table-base.component';
import { RoundTableComponent } from './components/tables/round-table/round-table.component';
import { SquareTableComponent } from './components/tables/square-table/square-table.component';

@NgModule({
  declarations: [
    AppComponent,
    RoundTableComponent,
    SquareTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPanZoomModule,
    NoopAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
