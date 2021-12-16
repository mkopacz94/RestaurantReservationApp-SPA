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
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FlexModule } from '@angular/flex-layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReservationsPageComponent } from './components/pages/reservations/reservations-page/reservations-page.component';
import { DoubleTableComponent } from './components/tables/double-table/double-table.component';
import { FourPersonTableComponent } from './components/tables/four-person-table/four-person-table.component';

@NgModule({
  declarations: [
    AppComponent,
    RoundTableComponent,
    SquareTableComponent,
    NavbarComponent,
    ReservationsPageComponent,
    DoubleTableComponent,
    FourPersonTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPanZoomModule,
    NoopAnimationsModule,
    DragDropModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
