import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-flightdetails',
  templateUrl: './flightdetails.component.html',
  styleUrls: ['./flightdetails.component.sass']
})
export class FlightdetailsComponent implements OnInit {

  @Output() deleteAction = new EventEmitter<any>();
  @Input() num: string;
  @Input() flightStart: string;
  @Input() airportStart: string;
  @Input() airportStartAbbreviation: string;
  @Input() flightEnd: string;
  @Input() airportEnd: string;
  @Input() airportEndAbbreviation: string;
  @Input() emergency: boolean = false;
  @Input() passengers: number;
  isDetailsShown: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleDetails() {
    this.isDetailsShown = !this.isDetailsShown;
  }

  deleteFlight() {
    if (confirm('Voulez-vous vraiment supprimer ce vol ?')) {
      this.deleteAction.emit(this.num);
    }
  }
}
