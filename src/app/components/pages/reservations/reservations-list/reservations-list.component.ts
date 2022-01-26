import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/model/reservation';
import { ReservationsService } from 'src/app/_services/reservations.service';
import { ReservationsPageComponent } from '../reservations-page/reservations-page.component';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css']
})
export class ReservationsListComponent implements OnInit {

  selectedReservation ?: Reservation;

  occupied: Array<Reservation>;
  occupiedGuestsSum: number;
  upcoming: Array<Reservation>;
  upcomingGuestsSum: number;

  searchQuery: string = "";

  constructor(private reservationsService: ReservationsService) { }

  ngOnInit(): void {
    this.loadAllReservations();
    this.calculateGuestsSum();
  }

  loadAllReservations() {
    this.reservationsService.getReservations()
      .subscribe(reservations => {
        this.occupied = reservations.filter(r => r.isSeated);
        this.upcoming = reservations.filter(r => !r.isSeated);
      })
  }

  calculateGuestsSum() {
    this.occupiedGuestsSum = this.occupied.map(r => r.numberOfGuests)
      .reduce((previous, current) => previous + current);
    this.upcomingGuestsSum = this.upcoming.map(r => r.numberOfGuests)
      .reduce((previous, current) => previous + current);
  }

  reservationClicked(reservation: Reservation) {
    this.selectedReservation = reservation;
  }
}
