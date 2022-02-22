import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations-date-selection',
  templateUrl: './reservations-date-selection.component.html',
  styleUrls: ['./reservations-date-selection.component.css']
})
export class ReservationsDateSelectionComponent implements OnInit {

  meals : Array<string> = ["Śniadanie", "Obiad", "Kolacja"];
  selectedMeal: string = "Śniadanie";
  selected = 'option2';

  constructor() { }

  ngOnInit(): void {
  }

}
