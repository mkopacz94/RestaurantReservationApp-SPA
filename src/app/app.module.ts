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
import { ReservationsListComponent } from './components/pages/reservations/reservations-list/reservations-list.component';
import { RoomProjectionComponent } from './components/pages/reservations/room-projection/room-projection.component';
import { SearchFilterPipe } from './_pipes/search-filter.pipe';
import { FormsModule } from '@angular/forms';
import { ReservationsMealSelectionComponent } from './components/pages/reservations/reservations-meal-selection/reservations-meal-selection.component';
import { ReservationsDateSelectionComponent } from './components/pages/reservations/reservations-date-selection/reservations-date-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    RoundTableComponent,
    SquareTableComponent,
    NavbarComponent,
    ReservationsPageComponent,
    DoubleTableComponent,
    FourPersonTableComponent,
    ReservationsListComponent,
    RoomProjectionComponent,
    SearchFilterPipe,
    ReservationsMealSelectionComponent,
    ReservationsDateSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPanZoomModule,
    NoopAnimationsModule,
    DragDropModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
