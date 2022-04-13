import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations-meal-selection',
  templateUrl: './reservations-meal-selection.component.html',
  styleUrls: ['./reservations-meal-selection.component.css']
})
export class ReservationsMealSelectionComponent implements OnInit {

  meals : Array<string> = ["Śniadanie", "Obiad", "Kolacja"];
  selectedMeal: string = "Śniadanie";
  selected = 'option2';

  constructor() { }

  ngOnInit(): void {
  }

}
