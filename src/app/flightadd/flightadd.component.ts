import {Component, Input, OnInit} from '@angular/core';
import {FlightService} from '../services/flight.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-flightadd',
  templateUrl: './flightadd.component.html',
  styleUrls: ['./flightadd.component.sass']
})
export class FlightaddComponent implements OnInit {

  @Input() num = '';
  @Input() flightStart: string;
  @Input() airportStart: string;
  @Input() airportStartAbbreviation: string;
  @Input() flightEnd: string;
  @Input() airportEnd: string;
  @Input() airportEndAbbreviation: string;
  @Input() emergency: boolean = false;
  @Input() passengers: number;
  errors: any = {};

  constructor(private flightService: FlightService, private router: Router) {}

  ngOnInit() {
  }

  add() {
    // Vérifications
    this.errors = {};
    if (!this.num.match(/[A-Z]{1,2}[0-9]{1,4}/)) {
      this.errors.num = 'Le format du numéro de vol est incorrect';
    }

    if (Object.keys(this.errors).length > 0) {
      return;
    }

    // Pas d'erreurs
    this.flightService.newFlight(
      this.num,
      this.flightStart,
      this.airportStart,
      this.airportStartAbbreviation,
      this.flightEnd,
      this.airportEnd,
      this.airportEndAbbreviation,
      this.emergency,
      this.passengers
    );
    this.router.navigate(['/flight-list']);
    return true;
  }

}
