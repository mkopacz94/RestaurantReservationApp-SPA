import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Reservation } from '../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor() { }

  getReservations() : Observable<Array<Reservation>> {
    return of([
      { id: 0, name: "Mateusz Kopacz", phoneNumber: "+48 697263903", numberOfGuests: 2, isSpecial: true, isVegan: false, isSeated: true, seatedAtTable: 1},
      { id: 0, name: "Jan Kowalski", phoneNumber: "+48 697263903", numberOfGuests: 4, isSpecial: false, isVegan: true, isSeated: true, seatedAtTable: 3},
      { id: 0, name: "Dominika Piotrowska", phoneNumber: "+48 697263903", numberOfGuests: 4, isSpecial: true, isVegan: true, isSeated: true, seatedAtTable: 12},
      { id: 0, name: "Jan Kowalski", phoneNumber: "+48 697263903", numberOfGuests: 4, isSpecial: false, isVegan: false, isSeated: false, seatedAtTable: 3},
      { id: 0, name: "Dominika Piotrowska", phoneNumber: "+48 697263903", numberOfGuests: 4, isSpecial: false, isVegan: true, isSeated: false, seatedAtTable: 12}
    ])
  }
}
