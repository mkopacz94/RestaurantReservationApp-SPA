import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/model/reservation';
import { ReservationsPageComponent } from '../reservations-page/reservations-page.component';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css']
})
export class ReservationsListComponent implements OnInit {

  selectedReservation ?: Reservation;

  occupied: Array<Reservation> = [
    { id: 0, name: "Mateusz Kopacz", phoneNumber: "+48 697263903", numberOfGuests: 2, isSpecial: true, isVegan: false},
    { id: 0, name: "Jan Kowalski", phoneNumber: "+48 697263903", numberOfGuests: 4, isSpecial: false, isVegan: true},
    { id: 0, name: "Dominika Piotrowska", phoneNumber: "+48 697263903", numberOfGuests: 4, isSpecial: true, isVegan: true}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  reservationClicked(reservation: Reservation) {
    this.selectedReservation = reservation;
  }
}
